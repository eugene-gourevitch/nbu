import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Grid3X3 } from "lucide-react";
import ScaledSlide from "./ScaledSlide";
import { slides as defaultSlides, SlideData } from "./slideData";

interface PresentationViewerProps {
  slides?: SlideData[];
  title?: string;
}

const PresentationViewer = ({ slides = defaultSlides, title = "OmniStrat Presentation" }: PresentationViewerProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); goNext(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
      if (e.key === "Escape" && isFullscreen) document.exitFullscreen();
      if (e.key === "f" || e.key === "F5") { e.preventDefault(); toggleFullscreen(); }
      if (e.key === "g") setShowGrid((p) => !p);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev, isFullscreen, toggleFullscreen]);

  // Hide cursor in fullscreen
  useEffect(() => {
    if (!isFullscreen) { setCursorVisible(true); return; }
    let timeout: ReturnType<typeof setTimeout>;
    const onMove = () => {
      setCursorVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setCursorVisible(false), 2000);
    };
    window.addEventListener("mousemove", onMove);
    timeout = setTimeout(() => setCursorVisible(false), 2000);
    return () => {
      window.removeEventListener("mousemove", onMove);
      clearTimeout(timeout);
    };
  }, [isFullscreen]);

  if (showGrid) {
    return (
      <div className="min-h-screen bg-secondary p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">All Slides</h2>
          <button onClick={() => setShowGrid(false)} className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg text-sm font-medium">
            <Minimize2 size={16} /> Close Grid
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => { setCurrentSlide(i); setShowGrid(false); }}
              className={`group relative aspect-video rounded-xl overflow-hidden border-2 transition-all hover:scale-[1.02] ${
                i === currentSlide ? "border-primary ring-2 ring-primary/30" : "border-border hover:border-primary/50"
              }`}
            >
              <ScaledSlide>{slide.component({ slideNumber: i + 1, totalSlides: slides.length })}</ScaledSlide>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <span className="text-white text-xs font-medium">{i + 1}. {slide.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={isFullscreen ? `presentation-fullscreen ${cursorVisible ? "cursor-visible" : ""}` : "flex h-screen bg-secondary"}>
      {/* Sidebar thumbnails */}
      {!isFullscreen && (
        <div className="w-[220px] bg-background border-r border-border overflow-y-auto p-4 space-y-3 shrink-0">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Slides</span>
            <button onClick={() => setShowGrid(true)} className="text-muted-foreground hover:text-foreground transition-colors">
              <Grid3X3 size={16} />
            </button>
          </div>
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(i)}
              className={`w-full aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                i === currentSlide ? "border-primary ring-2 ring-primary/20" : "border-border hover:border-primary/40"
              }`}
            >
              <ScaledSlide>{slide.component({ slideNumber: i + 1, totalSlides: slides.length })}</ScaledSlide>
            </button>
          ))}
        </div>
      )}

      {/* Main canvas */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        {!isFullscreen && (
          <div className="flex items-center justify-between px-6 py-3 bg-background border-b border-border">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">{title}</span>
              <span className="text-xs text-muted-foreground">
                {currentSlide + 1} / {slides.length}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowGrid(true)}
                className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary"
              >
                Grid
              </button>
              <button
                onClick={toggleFullscreen}
                className="flex items-center gap-1.5 px-4 py-1.5 bg-primary text-primary-foreground rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                <Maximize2 size={14} /> Present
              </button>
            </div>
          </div>
        )}

        {/* Slide area */}
        <div className="flex-1 relative flex items-center justify-center p-4 lg:p-8">
          <div className="w-full h-full max-w-[1200px] max-h-[675px] xl:max-w-[1400px] xl:max-h-[788px] rounded-xl overflow-hidden shadow-2xl" style={isFullscreen ? { maxWidth: "100%", maxHeight: "100%", borderRadius: 0 } : undefined}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25 }}
                className="w-full h-full"
              >
                <ScaledSlide>{slides[currentSlide].component({ slideNumber: currentSlide + 1, totalSlides: slides.length })}</ScaledSlide>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <div className={`absolute inset-x-0 bottom-4 flex items-center justify-center gap-4 ${isFullscreen && !cursorVisible ? "opacity-0" : "opacity-100"} transition-opacity`}>
            <button
              onClick={goPrev}
              disabled={currentSlide === 0}
              className="p-3 rounded-full bg-background/80 backdrop-blur border border-border shadow-lg hover:bg-background transition-all disabled:opacity-30"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-sm font-medium bg-background/80 backdrop-blur border border-border rounded-full px-4 py-2 shadow-lg">
              {currentSlide + 1} / {slides.length}
            </span>
            <button
              onClick={goNext}
              disabled={currentSlide === slides.length - 1}
              className="p-3 rounded-full bg-background/80 backdrop-blur border border-border shadow-lg hover:bg-background transition-all disabled:opacity-30"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationViewer;
