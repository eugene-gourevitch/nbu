// Horizontal stacked-bar showing Solfy CA cap table; highlights the NBU sliver.
interface Segment {
  label: string;
  pct: number;
  highlight?: boolean;
}

interface CapTableBarProps {
  segments: Segment[];
  caption?: string;
}

const CapTableBar = ({ segments, caption }: CapTableBarProps) => {
  return (
    <div className="w-full">
      <div className="flex w-full h-9 rounded-sm overflow-hidden border border-slide-foreground/10">
        {segments.map((seg, i) => (
          <div
            key={seg.label}
            className={`flex items-center justify-start px-3 ${
              seg.highlight
                ? "bg-slide-primary text-primary-foreground"
                : i % 2 === 0
                ? "bg-slide-foreground/15 text-slide-foreground"
                : "bg-slide-foreground/8 text-slide-foreground"
            }`}
            style={{ width: `${seg.pct}%` }}
          >
            <span className="text-[11px] font-bold tracking-wider uppercase tabular-nums truncate">
              {seg.pct}%
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3">
        {segments.map((seg) => (
          <div key={seg.label} className="flex items-center gap-2 text-[13px]">
            <span
              className={`inline-block w-3 h-3 rounded-sm ${
                seg.highlight ? "bg-slide-primary" : "bg-slide-foreground/15"
              }`}
            />
            <span className={seg.highlight ? "font-semibold text-slide-primary" : "text-slide-muted"}>
              {seg.label}
            </span>
            <span className="font-semibold tabular-nums text-slide-foreground">{seg.pct}%</span>
          </div>
        ))}
      </div>
      {caption && (
        <p className="text-[13px] text-slide-muted/80 mt-3 italic leading-snug">{caption}</p>
      )}
    </div>
  );
};

export default CapTableBar;
