// Conflict-of-interest diagram. NBU hex at top center; orthogonal connectors
// drop from the hex bottom, bend outward, and meet the cards beneath.
// Connector labels sit on the horizontal segments.
const DualRoleDiagram = () => {
  return (
    <svg
      viewBox="0 0 900 200"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-full"
      role="img"
      aria-label="NBU dual-role conflict diagram"
    >
      {/* NBU hexagon at center top */}
      <g transform="translate(450, 55)">
        <polygon
          points="-72,-34 -36,-56 36,-56 72,-34 72,34 36,56 -36,56 -72,34"
          fill="hsl(var(--slide-bg))"
          stroke="hsl(var(--slide-foreground))"
          strokeWidth="2"
        />
        <text
          x="0"
          y="-2"
          textAnchor="middle"
          className="fill-slide-foreground"
          style={{ fontSize: 20, fontWeight: 700 }}
        >
          NBU
        </text>
        <text
          x="0"
          y="22"
          textAnchor="middle"
          className="fill-slide-muted"
          style={{ fontSize: 11, letterSpacing: "0.18em", fontWeight: 600 }}
        >
          STATE BANK
        </text>
      </g>

      {/* LEFT orthogonal connector: equity (muted) */}
      {/* Path: down from hex bottom (450,111) → bend at y=150 → out to x=160 */}
      <path
        d="M 450 111 L 450 150 Q 450 158 442 158 L 168 158 Q 160 158 160 166 L 160 195"
        fill="none"
        stroke="hsl(var(--slide-foreground) / 0.5)"
        strokeWidth="2"
      />
      {/* Connector label on horizontal segment */}
      <text
        x="305"
        y="150"
        textAnchor="middle"
        className="fill-slide-muted"
        style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em" }}
      >
        5% EQUITY
      </text>

      {/* RIGHT orthogonal connector: criminal complaint (primary) */}
      <path
        d="M 450 111 L 450 150 Q 450 158 458 158 L 732 158 Q 740 158 740 166 L 740 195"
        fill="none"
        stroke="hsl(var(--slide-primary))"
        strokeWidth="2.5"
      />
      <text
        x="595"
        y="150"
        textAnchor="middle"
        className="fill-slide-primary"
        style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em" }}
      >
        CRIMINAL COMPLAINT
      </text>
    </svg>
  );
};

export default DualRoleDiagram;
