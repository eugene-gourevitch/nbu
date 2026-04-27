interface SlidePillProps {
  label: string;
  variant?: "light" | "dark" | "glass";
}

const SlidePill = ({ label, variant = "light" }: SlidePillProps) => {
  const styles: Record<string, string> = {
    light: "border border-slide-foreground/20 text-slide-foreground bg-slide-bg",
    dark: "border border-primary-foreground/30 text-primary-foreground bg-primary-foreground/15",
    glass: "border border-primary-foreground/30 text-primary-foreground bg-primary-foreground/15",
  };

  return (
    <span className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-[14px] font-bold tracking-[0.15em] uppercase ${styles[variant]}`}>
      <span className="w-8 h-px bg-current" />
      {label}
    </span>
  );
};

export default SlidePill;
