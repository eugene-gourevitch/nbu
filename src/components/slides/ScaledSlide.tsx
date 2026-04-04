import { useRef, useEffect, useState, ReactNode } from "react";

interface ScaledSlideProps {
  children: ReactNode;
  className?: string;
}

const ScaledSlide = ({ children, className = "" }: ScaledSlideProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      const { clientWidth, clientHeight } = containerRef.current;
      const scaleX = clientWidth / 1920;
      const scaleY = clientHeight / 1080;
      setScale(Math.min(scaleX, scaleY));
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`slide-container ${className}`}>
      <div
        className="slide-wrapper slide-content"
        style={{ transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
};

export default ScaledSlide;
