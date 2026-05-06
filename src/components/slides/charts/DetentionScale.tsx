// Detention proportionality scale: 4 escalating measures with a marker at the
// extreme (pre-trial detention), and the 4 statutory criteria Hasanov fails.
const DetentionScale = () => {
  const ticks = [
    { label: "Travel restrictions", pct: 5 },
    { label: "Bail", pct: 35 },
    { label: "House arrest", pct: 65 },
    { label: "Pre-trial detention", pct: 95 },
  ];
  const criteria = [
    "no flight risk",
    "no evidence-tampering risk",
    "no enrichment",
    "contractual not criminal",
  ];

  return (
    <div className="w-full bg-slide-surface rounded-sm p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-slide-muted">
          Proportionality scale (Articles 236–243 CPC)
        </span>
        <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-slide-primary">
          Hasanov
        </span>
      </div>
      <div className="relative h-12">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-slide-foreground/15" />
        {ticks.map((t) => (
          <div
            key={t.label}
            className="absolute top-1/2 -translate-y-1/2"
            style={{ left: `${t.pct}%`, transform: "translate(-50%, -50%)" }}
          >
            <div
              className={`w-3 h-3 rounded-sm ${
                t.pct === 95 ? "bg-slide-primary" : "bg-slide-foreground/30"
              }`}
            />
            <div
              className={`absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] tracking-wider uppercase ${
                t.pct === 95 ? "text-slide-primary font-bold" : "text-slide-muted"
              }`}
            >
              {t.label}
            </div>
          </div>
        ))}
        {/* Marker dot at far-right */}
        <div
          className="absolute top-1/2 -translate-y-1/2"
          style={{ left: "95%", transform: "translate(-50%, -50%)" }}
        >
          <div className="w-5 h-5 rounded-sm bg-slide-primary border-2 border-slide-bg shadow-[0_0_0_3px_hsl(var(--slide-primary)/0.18)]" />
        </div>
      </div>
      <div className="mt-10 grid grid-cols-4 gap-3">
        {criteria.map((c) => (
          <div key={c} className="flex items-start gap-2 text-[13px] text-slide-muted">
            <span className="text-slide-primary font-bold leading-none">✗</span>
            <span className="leading-snug">{c}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetentionScale;
