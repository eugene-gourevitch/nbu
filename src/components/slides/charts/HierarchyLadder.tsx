// Corporate hierarchy ladder. 6 stacked rows from co-founders down to Hasanov.
// Only the bottom row is filled with slide-primary and labeled CHARGED.
interface LadderRow {
  label: string;
  descriptor: string;
  charged?: boolean;
}

interface HierarchyLadderProps {
  rows: LadderRow[];
  caption?: string;
}

const HierarchyLadder = ({ rows, caption }: HierarchyLadderProps) => {
  return (
    <div className="w-full">
      <div className="space-y-3">
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`flex items-center gap-4 rounded-sm px-6 ${
              row.charged ? "py-6" : "py-4"
            } ${
              row.charged
                ? "bg-slide-primary text-primary-foreground"
                : "bg-slide-surface text-slide-foreground"
            }`}
            style={{ animation: `slide-up 0.4s ease-out ${0.2 + i * 0.08}s both` }}
          >
            <span
              className={`leading-none ${
                row.charged ? "text-primary-foreground text-[22px]" : "text-slide-muted text-[18px]"
              }`}
              aria-hidden="true"
            >
              {row.charged ? "●" : "○"}
            </span>
            <div className="flex-1 min-w-0">
              <p
                className={`font-semibold leading-tight ${
                  row.charged
                    ? "text-primary-foreground text-[22px]"
                    : "text-slide-foreground text-[18px]"
                }`}
              >
                {row.label}
              </p>
              <p
                className={`leading-snug ${
                  row.charged
                    ? "text-primary-foreground/80 text-[16px]"
                    : "text-slide-muted text-[13px]"
                }`}
              >
                {row.descriptor}
              </p>
            </div>
            {row.charged && (
              <span className="text-[13px] font-bold tracking-[0.18em] uppercase bg-primary-foreground/20 px-4 py-1.5 rounded-sm shrink-0">
                Charged
              </span>
            )}
          </div>
        ))}
      </div>
      {caption && (
        <p className="text-[18px] font-semibold not-italic text-slide-foreground text-center mt-6 leading-snug">
          {caption}
        </p>
      )}
    </div>
  );
};

export default HierarchyLadder;
