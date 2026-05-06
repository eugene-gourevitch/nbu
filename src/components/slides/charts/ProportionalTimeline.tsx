// Two-segment timeline: NEGOTIATION TRACK | 8 DAYS OF SILENCE | DETONATION.
// Each segment is its own row of evenly-spaced nodes — no stagger algorithm.
interface TimelineStep {
  date: string;
  isoDate: string;
  title: string;
  desc: string;
  accent?: boolean;
}

interface ProportionalTimelineProps {
  // Legacy single-array prop (kept for backward compatibility but unused in new layout)
  steps?: TimelineStep[];
  leftSteps?: TimelineStep[];
  rightSteps?: TimelineStep[];
  silenceLabel?: string;
}

const Segment = ({
  steps,
  label,
}: {
  steps: TimelineStep[];
  label: string;
}) => {
  const n = steps.length;
  return (
    <div className="relative h-full flex flex-col">
      {/* Segment label */}
      <div className="text-[13px] tracking-[0.22em] uppercase font-bold text-slide-primary mb-3">
        {label}
      </div>
      {/* Track */}
      <div className="relative flex-1">
        {/* Axis line */}
        <div className="absolute left-0 right-0 top-[44px] h-[3px] bg-slide-primary/80 rounded-sm" />
        {/* Nodes */}
        {steps.map((step, i) => {
          const pct = n === 1 ? 50 : ((i + 0.5) / n) * 100;
          return (
            <div
              key={step.date}
              className="absolute flex flex-col items-center text-center"
              style={{
                left: `${pct}%`,
                top: 0,
                transform: "translateX(-50%)",
                width: 180,
              }}
            >
              <div
                className={`w-[56px] h-[56px] rounded-sm flex items-center justify-center text-[14px] font-semibold tracking-wide relative z-10 ${
                  step.accent
                    ? "bg-slide-primary text-primary-foreground shadow-[0_0_30px_hsl(var(--slide-primary)/0.4)]"
                    : "bg-slide-bg border-[3px] border-slide-primary text-slide-primary"
                }`}
                style={{ marginTop: 16 }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div
                className={`mt-3 px-3 py-1 rounded-sm text-[11px] font-semibold tracking-wider tabular-nums ${
                  step.accent
                    ? "bg-slide-primary text-primary-foreground"
                    : "bg-slide-primary/10 text-slide-primary"
                }`}
              >
                {step.date}
              </div>
              <h3
                className={`mt-2 text-[16px] font-semibold leading-tight ${
                  step.accent ? "text-slide-primary" : "text-slide-foreground"
                }`}
              >
                {step.title}
              </h3>
              <p className="mt-1.5 text-[13px] text-slide-muted leading-snug">
                {step.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ProportionalTimeline = ({
  steps,
  leftSteps,
  rightSteps,
  silenceLabel = "8 DAYS · NO RESPONSE",
}: ProportionalTimelineProps) => {
  // Backward-compat: if only `steps` was provided, split half/half.
  let L = leftSteps;
  let R = rightSteps;
  if ((!L || !R) && steps && steps.length > 0) {
    const half = Math.ceil(steps.length / 2);
    L = steps.slice(0, half);
    R = steps.slice(half);
  }
  L = L || [];
  R = R || [];

  return (
    <div className="w-full" style={{ minHeight: 420 }}>
      <div className="flex w-full" style={{ minHeight: 420 }}>
        {/* LEFT segment ~ 45% */}
        <div style={{ width: "45%" }} className="pr-2">
          <Segment steps={L} label="NEGOTIATION TRACK" />
        </div>

        {/* CENTER ~ 15% — tapered hairline + vertical silence label */}
        <div style={{ width: "15%" }} className="relative flex flex-col items-center">
          <div className="h-[24px]" />
          <div className="relative w-full" style={{ marginTop: 32 }}>
            <div
              className="h-[2px] mx-auto rounded-sm"
              style={{
                width: "100%",
                background:
                  "linear-gradient(to right, hsl(var(--slide-primary)) 0%, hsl(var(--slide-foreground) / 0.18) 50%, hsl(var(--slide-primary)) 100%)",
              }}
            />
          </div>
          <div className="flex-1 flex items-center justify-center mt-3">
            <p className="text-[13px] tracking-[0.18em] uppercase text-slide-muted text-center font-semibold leading-tight px-1">
              {silenceLabel}
            </p>
          </div>
        </div>

        {/* RIGHT segment ~ 40% */}
        <div style={{ width: "40%" }} className="pl-2">
          <Segment steps={R} label="DETONATION" />
        </div>
      </div>
    </div>
  );
};

export default ProportionalTimeline;
