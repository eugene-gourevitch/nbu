import { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  variant?: "white" | "dark" | "blue";
  backgroundImage?: string;
  className?: string;
  slideNumber?: number;
  totalSlides?: number;
  showConfidentiality?: boolean;
}

const SlideLayout = ({
  children,
  variant = "white",
  backgroundImage,
  className = "",
  slideNumber,
  totalSlides,
  showConfidentiality = true,
}: SlideLayoutProps) => {
  const baseStyles: Record<string, string> = {
    white: "bg-white text-slide-foreground",
    dark: "bg-slide-foreground text-white",
    blue: "omnistrat-pattern text-white",
  };

  const footerTextColor: Record<string, string> = {
    white: "text-slide-muted/50",
    dark: "text-white/40",
    blue: "text-white/40",
  };

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${baseStyles[variant]} ${className}`}
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      } : undefined}
    >
      {backgroundImage && variant === "dark" && (
        <div className="absolute inset-0 bg-black/60" />
      )}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
      {/* Footer with slide number and confidentiality */}
      {(slideNumber || showConfidentiality) && (
        <div className={`absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-[80px] py-[30px] ${footerTextColor[variant]}`}>
          <span className="text-[14px] tracking-wide">
            {showConfidentiality && "CONFIDENTIAL — For internal use only. Do not distribute."}
          </span>
          {slideNumber && totalSlides && (
            <span className="text-[16px] font-semibold tabular-nums">
              {String(slideNumber).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default SlideLayout;
