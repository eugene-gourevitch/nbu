interface OmniStratLogoProps {
  className?: string;
  variant?: "dark" | "light" | "blue";
  size?: number;
  showText?: boolean;
}

const OmniStratLogo = ({ className = "", variant = "dark", size = 40, showText = true }: OmniStratLogoProps) => {
  const mainColor = variant === "dark" ? "#171717" : "#ffffff";
  const blueColor = "#3B55FF";
  const textColor = variant === "dark" ? "#171717" : variant === "blue" ? "#ffffff" : "#ffffff";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Top-left corner */}
        <path d="M5 5 H35 V10 Q10 10 10 35 H5 Z" fill={mainColor} />
        {/* Top-right corner */}
        <path d="M95 5 V35 H90 Q90 10 65 10 V5 Z" fill={mainColor} />
        {/* Bottom-left corner - BLUE accent */}
        <path d="M5 95 V65 H10 Q10 90 35 90 V95 Z" fill={blueColor} />
        {/* Bottom-right corner */}
        <path d="M95 95 H65 V90 Q90 90 90 65 H95 Z" fill={mainColor} />
      </svg>
      {showText && (
        <span
          style={{
            color: textColor,
            fontSize: `${size * 0.55}px`,
            fontWeight: 500,
            letterSpacing: "-0.01em",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          OmniStrat
        </span>
      )}
    </div>
  );
};

export default OmniStratLogo;
