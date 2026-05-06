import { useEffect } from "react";
import { slides } from "@/components/slides/slideData";

const Print = () => {
  useEffect(() => {
    // Auto-trigger print dialog after a short delay for rendering
    const timeout = setTimeout(() => {
      window.print();
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="print-view">
      <style>{`
        @media screen {
          .print-view {
            background: hsl(var(--muted-foreground));
            padding: 20px;
          }
          .print-slide {
            margin: 20px auto;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          }
          .print-hint {
            display: block;
            text-align: center;
            padding: 16px;
            font-family: 'Inter', sans-serif;
            font-size: 14px;
            color: hsl(var(--primary-foreground));
            background: hsl(var(--slide-foreground));
            position: sticky;
            top: 0;
            z-index: 100;
          }
        }
        @media print {
          *, *::before, *::after {
            animation: none !important;
            transition: none !important;
            scroll-behavior: auto !important;
          }
          /* Reset opacity/transform for animation classes that use opacity:0 as base state */
          .anim-fade-up,
          .anim-fade-in,
          .anim-scale-in,
          .anim-slide-left,
          .anim-slide-right {
            opacity: 1 !important;
            transform: none !important;
          }
          .print-hint { display: none !important; }
          @page {
            size: 1920px 1080px;
            margin: 0;
          }
          body { margin: 0; padding: 0; }
          .print-view { padding: 0; background: hsl(var(--slide-bg)); }
          .print-slide {
            page-break-after: always;
            margin: 0;
            box-shadow: none;
          }
          .print-slide:last-child {
            page-break-after: avoid;
          }
        }
      `}</style>
      <div className="print-hint">
        Press <strong>Ctrl+P</strong> (or <strong>Cmd+P</strong>) to save as PDF. For best results: set paper size to <strong>Custom 1920×1080 px</strong> (or any 16:9 size), margins “None”, “Background graphics” on, “Headers and footers” off. Letter or A4 will distort the deck.
      </div>
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className="print-slide"
          style={{ width: 1920, height: 1080, overflow: "hidden", position: "relative" }}
        >
          {slide.component({ slideNumber: i + 1, totalSlides: slides.length })}
        </div>
      ))}
    </div>
  );
};

export default Print;
