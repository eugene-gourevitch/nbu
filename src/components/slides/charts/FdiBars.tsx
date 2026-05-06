// Two-bar horizontal comparator: KZ vs UZ FDI stock.
// KZ bar uses muted tone; UZ bar uses slide-primary so the gap reads visually.
interface FdiBarsProps {
  items: { label: string; value: number; suffix?: string; primary?: boolean }[];
}

const FdiBars = ({ items }: FdiBarsProps) => {
  const max = Math.max(...items.map((i) => i.value));
  return (
    <div className="space-y-3 w-full">
      {items.map((item) => {
        const pct = (item.value / max) * 100;
        return (
          <div key={item.label} className="flex items-center gap-3">
            <span className="w-[110px] shrink-0 text-[13px] font-semibold text-slide-foreground">
              {item.label}
            </span>
            <div className="flex-1 h-6 bg-slide-foreground/5 rounded-sm overflow-hidden">
              <div
                className={`h-full ${item.primary ? "bg-slide-primary" : "bg-slide-foreground/25"}`}
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="text-[13px] font-semibold tabular-nums text-slide-foreground w-[70px] text-right">
              ${item.value}B{item.suffix ?? ""}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default FdiBars;
