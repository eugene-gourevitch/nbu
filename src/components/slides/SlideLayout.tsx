import { ReactNode } from "react";
import CAJILogo from "./CAJILogo";

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
      <div className={`absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-[80px] pt-[24px] pb-[28px] border-t border-slide-foreground/8 ${footerTextColor[variant]}`}>
        <div className="flex items-center gap-4 text-[13px] tracking-[0.18em] uppercase">
          <CAJILogo size={22} variant={variant === "white" ? "dark" : "light"} showText={false} />
          <span className="w-px h-3 bg-current opacity-30" />
          {showConfidentiality && (
            <>
              <span>CONFIDENTIAL</span>
              <span className="w-px h-3 bg-current opacity-30" />
            </>
          )}
          <span>v1.0 · MAY 2026</span>
        </div>
        {slideNumber && totalSlides && (
          <span className="text-[14px] font-semibold tabular-nums">
            {String(slideNumber).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
          </span>
        )}
      </div>
    </div>
  );
};

export default SlideLayout;
