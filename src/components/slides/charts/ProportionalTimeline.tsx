// Date-proportional timeline. Renders nodes positioned along an actual day axis
// so visual gaps match calendar gaps (8-day silence vs 1-day detonation).
interface TimelineStep {
  date: string;       // display label, e.g. "MAR 17"
  isoDate: string;    // ISO date for proportional positioning
  title: string;
  desc: string;
  accent?: boolean;
}

interface ProportionalTimelineProps {
  steps: TimelineStep[];
}

const ProportionalTimeline = ({ steps }: ProportionalTimelineProps) => {
  const times = steps.map((s) => new Date(s.isoDate).getTime());
  const min = Math.min(...times);
  const max = Math.max(...times);
  const range = max - min || 1;

  // Stagger vertical offset for adjacent nodes whose horizontal proximity would
  // cause label overlap. Threshold is generous so tightly clustered finale reads.
  const positions = steps.map((s) => {
    const t = new Date(s.isoDate).getTime();
    return ((t - min) / range) * 100;
  });
  const STAGGER_THRESHOLD = 12;
  const STAGGER_HEIGHT = 140;
  // Compute stagger row by counting consecutive close predecessors and
  // cycling through 3 rows so a cluster of 3+ doesn't collide on the same row.
  const staggerRows = positions.map((_, i) => {
    if (i === 0) return 0;
    let row = 0;
    for (let j = i; j > 0; j--) {
      if (Math.abs(positions[j] - positions[j - 1]) < STAGGER_THRESHOLD) {
        row++;
      } else {
        break;
      }
    }
    return row % 3;
  });

  return (
    <div className="w-full relative" style={{ minHeight: 500 }}>
      {/* Axis */}
      <div className="absolute left-0 right-0 top-[40px] h-[3px] bg-slide-foreground/10">
        <div
          className="h-full bg-slide-primary rounded-sm"
          style={{ animation: "timeline-fill 1.8s ease-out 0.3s forwards", width: "0%" }}
        />
      </div>
      {/* Day ticks */}
      <div className="absolute left-0 right-0 top-[28px] h-[14px] pointer-events-none">
        {Array.from({ length: 11 }).map((_, i) => {
          const pct = (i / 10) * 100;
          return (
            <div
              key={i}
              className="absolute top-3 w-px h-2 bg-slide-foreground/20"
              style={{ left: `${pct}%` }}
            />
          );
        })}
      </div>
      {/* Nodes */}
      <div className="relative" style={{ height: 500 }}>
        {steps.map((step, i) => {
          const pct = positions[i];
          // Clamp endpoints so 150px-wide labels don't run off-page.
          const left = Math.max(4, Math.min(94, pct));
          const verticalOffset = staggerRows[i] * STAGGER_HEIGHT;

          return (
            <div
              key={step.date}
              className="absolute flex flex-col items-center text-center"
              style={{
                left: `${left}%`,
                top: verticalOffset,
                transform: "translateX(-50%)",
                width: 150,
              }}
            >
              <div
                className={`w-[60px] h-[60px] rounded-sm flex items-center justify-center text-[14px] font-semibold tracking-wide relative z-10 ${
                  step.accent
                    ? "bg-slide-primary text-primary-foreground shadow-[0_0_30px_hsl(var(--slide-primary)/0.4)]"
                    : "bg-slide-bg border-[3px] border-slide-primary text-slide-primary"
                }`}
                style={{ animation: `scale-in 0.4s ease-out ${0.3 + i * 0.2}s both` }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div
                className={`mt-3 px-3 py-1 rounded-sm text-[11px] font-bold tracking-wider tabular-nums ${
                  step.accent ? "bg-slide-primary text-primary-foreground" : "bg-slide-primary/10 text-slide-primary"
                }`}
              >
                {step.date}
              </div>
              <h3
                className={`mt-2 text-[14px] font-bold leading-tight ${
                  step.accent ? "text-slide-primary" : "text-slide-foreground"
                }`}
              >
                {step.title}
              </h3>
              <p className="mt-1.5 text-[11px] text-slide-muted leading-snug">{step.desc}</p>
            </div>
          );
        })}
      </div>
      {/* Day-scale caption */}
      <div className="absolute left-0 right-0 -bottom-2 flex justify-between text-[11px] text-slide-muted/70 tracking-wider tabular-nums">
        <span>FEB 24</span>
        <span>MAR 12</span>
        <span>MAR 27</span>
      </div>
    </div>
  );
};

export default ProportionalTimeline;
