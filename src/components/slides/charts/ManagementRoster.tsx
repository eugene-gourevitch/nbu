// Stylized management roster. Each row: monogram circle + name + role + tenure bar.
// Mirsoatov gets a thin slide-primary left-border accent.
interface RosterMember {
  name: string;
  role: string;
  since?: string;
  highlight?: boolean;
}

interface ManagementRosterProps {
  members: RosterMember[];
}

const initialsOf = (full: string) =>
  full
    .split(/\s+/)
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

const ManagementRoster = ({ members }: ManagementRosterProps) => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="space-y-2.5">
      {members.map((m) => {
        const sinceYear = m.since ? parseInt(m.since, 10) : undefined;
        const tenure = sinceYear ? Math.max(1, currentYear - sinceYear) : 0;
        const tenurePct = Math.min(100, tenure * 6); // 6% per year, capped
        return (
          <div
            key={m.name}
            className={`flex items-center gap-4 py-1.5 ${
              m.highlight ? "border-l-2 border-slide-primary pl-3" : "pl-3"
            }`}
          >
            <div
              className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 ${
                m.highlight
                  ? "border-slide-primary text-slide-primary"
                  : "border-slide-foreground/30 text-slide-foreground"
              }`}
            >
              <span className="text-[13px] font-semibold tabular-nums">{initialsOf(m.name)}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[16px] font-semibold leading-tight">{m.name}</p>
              <p className="text-[13px] text-slide-primary leading-tight">{m.role}</p>
            </div>
            {m.since && (
              <div className="flex flex-col items-end shrink-0 w-[110px]">
                <span className="text-[11px] tracking-[0.15em] uppercase text-slide-muted">
                  since {m.since}
                </span>
                <div className="w-full h-1 bg-slide-foreground/10 rounded-sm mt-1 overflow-hidden">
                  <div
                    className={`h-full ${m.highlight ? "bg-slide-primary" : "bg-slide-foreground/30"}`}
                    style={{ width: `${tenurePct}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ManagementRoster;
