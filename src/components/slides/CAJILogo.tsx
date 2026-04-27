import cajiLogoBlack from "@/assets/caji-logo-black.png";
import cajiLogoWhite from "@/assets/caji-logo-white.png";

interface CAJILogoProps {
  className?: string;
  variant?: "dark" | "light" | "blue";
  size?: number;
  showText?: boolean;
}

const CAJILogo = ({ className = "", variant = "dark", size = 40, showText = true }: CAJILogoProps) => {
  const logo = variant === "dark" ? cajiLogoBlack : cajiLogoWhite;
  const width = Math.round(size * 4.4);

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logo}
        alt="Central Asia Justice Initiative"
        className="object-contain"
        style={{ width, height: size * 1.25 }}
      />
      {!showText && <span className="sr-only">Central Asia Justice Initiative</span>}
    </div>
  );
};

export default CAJILogo;