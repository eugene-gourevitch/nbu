// Conflict-of-interest diagram. NBU hexagon at top with two diverging arrows
// to the two roles — one cream (5% equity), one slide-primary (criminal complaint).
const DualRoleDiagram = () => {
  return (
    <svg viewBox="0 0 900 220" className="w-full h-auto" role="img" aria-label="NBU dual role diagram">
      <defs>
        <marker id="arrow-muted" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(var(--slide-foreground) / 0.55)" />
        </marker>
        <marker id="arrow-primary" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(var(--slide-primary))" />
        </marker>
      </defs>

      {/* NBU hexagon */}
      <g transform="translate(450, 50)">
        <polygon
          points="-60,-30 -30,-50 30,-50 60,-30 60,30 30,50 -30,50 -60,30"
          fill="hsl(var(--slide-bg))"
          stroke="hsl(var(--slide-foreground))"
          strokeWidth="2"
        />
        <text x="0" y="-2" textAnchor="middle" className="fill-slide-foreground" style={{ fontSize: 18, fontWeight: 700 }}>
          NBU
        </text>
        <text x="0" y="18" textAnchor="middle" className="fill-slide-muted" style={{ fontSize: 11, letterSpacing: "0.15em" }}>
          STATE BANK
        </text>
      </g>

      {/* Left arrow: equity (muted) */}
      <line
        x1="395" y1="80"
        x2="220" y2="160"
        stroke="hsl(var(--slide-foreground) / 0.55)"
        strokeWidth="2"
        markerEnd="url(#arrow-muted)"
      />
      <text x="305" y="113" textAnchor="middle" className="fill-slide-muted" style={{ fontSize: 12, fontWeight: 600 }}>
        5% equity → Solfy CA
      </text>

      {/* Right arrow: criminal complaint (primary) */}
      <line
        x1="505" y1="80"
        x2="680" y2="160"
        stroke="hsl(var(--slide-primary))"
        strokeWidth="2.5"
        markerEnd="url(#arrow-primary)"
      />
      <text x="595" y="113" textAnchor="middle" className="fill-slide-primary" style={{ fontSize: 12, fontWeight: 700 }}>
        criminal complaint → Hasanov
      </text>

      {/* Left endpoint: equity */}
      <g transform="translate(140, 165)">
        <rect x="0" y="0" width="170" height="44" rx="2" fill="hsl(var(--slide-bg))" stroke="hsl(var(--slide-foreground) / 0.4)" strokeWidth="1.5" />
        <text x="85" y="20" textAnchor="middle" className="fill-slide-foreground" style={{ fontSize: 13, fontWeight: 700 }}>
          Equity Stakeholder
        </text>
        <text x="85" y="36" textAnchor="middle" className="fill-slide-muted" style={{ fontSize: 11 }}>
          Solfy CA shareholder
        </text>
      </g>

      {/* Right endpoint: complainant */}
      <g transform="translate(600, 165)">
        <rect x="0" y="0" width="200" height="44" rx="2" fill="hsl(var(--slide-primary) / 0.08)" stroke="hsl(var(--slide-primary))" strokeWidth="1.5" />
        <text x="100" y="20" textAnchor="middle" className="fill-slide-primary" style={{ fontSize: 13, fontWeight: 700 }}>
          Criminal Complainant
        </text>
        <text x="100" y="36" textAnchor="middle" className="fill-slide-foreground" style={{ fontSize: 11 }}>
          vs. Hasanov, Director
        </text>
      </g>
    </svg>
  );
};

export default DualRoleDiagram;
