interface SlidePillProps {
  label: string;
  variant?: "light" | "dark" | "glass";
}

const SlidePill = ({ label, variant = "light" }: SlidePillProps) => {
  const styles: Record<string, string> = {
    light: "border border-slide-foreground/20 text-slide-foreground bg-white",
    dark: "border border-white/30 text-white/90 bg-white/15",
    glass: "border border-white/30 text-white/90 bg-white/15 backdrop-blur-sm",
  };

  return (
    <span className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-bold tracking-[0.15em] uppercase ${styles[variant]}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
};

export default SlidePill;
