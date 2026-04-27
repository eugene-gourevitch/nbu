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
    white: "bg-slide-bg text-slide-foreground",
    dark: "bg-slide-foreground text-primary-foreground",
    blue: "caji-pattern text-primary-foreground",
  };

  const footerTextColor: Record<string, string> = {
    white: "text-slide-muted/50",
    dark: "text-primary-foreground/40",
    blue: "text-primary-foreground/40",
  };

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${baseStyles[variant]} ${className}`}
      style={backgroundImage && variant !== "dark" ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      } : undefined}
    >
      {backgroundImage && variant === "dark" && (
        <>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              animation: "slow-zoom 12s ease-out forwards",
            }}
          />
          <div className="absolute inset-0 bg-slide-foreground/75" />
        </>
      )}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
      {/* Footer with slide number and confidentiality */}
      {(slideNumber || showConfidentiality) && (
        <div className={`absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-[80px] py-[30px] ${footerTextColor[variant]}`}>
          <span className="text-[11px] tracking-[0.2em] uppercase">
            {showConfidentiality && "CONFIDENTIAL"}
          </span>
          {slideNumber && totalSlides && (
            <span className="text-[14px] font-semibold tabular-nums">
              {String(slideNumber).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default SlideLayout;
