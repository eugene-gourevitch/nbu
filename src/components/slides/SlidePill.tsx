interface SlidePillProps {
  label: string;
  variant?: "light" | "dark" | "glass";
}

const SlidePill = ({ label, variant = "light" }: SlidePillProps) => {
  const styles: Record<string, string> = {
    light: "border border-slide-foreground/20 text-slide-foreground bg-background",
    dark: "border border-white/30 text-white/90 bg-white/10",
    glass: "border border-white/30 text-white/90 bg-white/10 backdrop-blur-sm",
  };

  return (
    <span className={`inline-flex items-center gap-3 px-5 py-2 text-[14px] font-semibold tracking-[0.15em] uppercase ${styles[variant]}`}>
      <span className="w-8 h-px bg-slide-primary" />
      {label}
    </span>
  );
};

export default SlidePill;
