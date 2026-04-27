import { ReactNode } from "react";
import SlideLayout from "./SlideLayout";
import SlidePill from "./SlidePill";
import CAJILogo from "./CAJILogo";
import uktamPhoto from "@/assets/uktam-photo.jpg";
import poletaevPhoto from "@/assets/poletaev-photo.jpg";
import mirsoatovPhoto from "@/assets/mirsoatov-photo.jpg";
import detentionCell from "@/assets/uzbek-detention-cell.jpg";

export interface SlideData {
  id: string;
  title: string;
  component: (props: { slideNumber: number; totalSlides: number }) => ReactNode;
}

type Tone = "light" | "dark";

type EvidenceKind = "Established" | "Reported" | "Campaign" | "Counsel" | "Official" | "Context";

const evidenceStyles: Record<EvidenceKind, string> = {
  Established: "border-slide-foreground/15 text-slide-foreground bg-slide-surface",
  Reported: "border-slide-primary/25 text-slide-primary bg-background",
  Campaign: "border-slide-primary/25 text-slide-primary bg-background",
  Counsel: "border-slide-primary/25 text-slide-primary bg-background",
  Official: "border-slide-foreground/20 text-slide-foreground bg-background",
  Context: "border-slide-foreground/15 text-slide-muted bg-background",
};

const timeline = [
  {
    date: "Feb 24",
    title: "Counsel enters",
    source: "Counsel",
    text: "Amsterdam & Partners announces representation of Solfy and Maksim Poletaev in the dispute with NBU.",
    why: "The matter becomes an organized cross-border legal conflict.",
  },
  {
    date: "Feb 27",
    title: "Local press reports conflict",
    source: "Reported",
    text: "Uzbek business coverage describes the Solfy / NBU dispute and notes the service continued under Sabzi branding.",
    why: "The commercial dispute was public before detention became the story.",
  },
  {
    date: "Mar 17",
    title: "Settlement context narrows",
    source: "Campaign",
    text: "Campaign and counsel materials frame the following ten days as the critical shift from settlement pressure to criminal exposure.",
    why: "This is the period investors and compliance teams will scrutinize most closely.",
  },
  {
    date: "Mar 27",
    title: "Hasanov detained",
    source: "Reported",
    text: "External reporting places Uktam Hasanov’s detention in Tashkent on March 27, 2026.",
    why: "The conflict becomes a due-process and investment-climate case.",
  },
  {
    date: "Mar 30–31",
    title: "International campaign launches",
    source: "Campaign",
    text: "Campaign and counsel statements condemn the detention and signal possible international remedies.",
    why: "The case moves from local dispute to reputational and diplomatic terrain.",
  },
  {
    date: "Apr 4",
    title: "Allegations reported",
    source: "Reported",
    text: "Vedomosti reports allegations involving roughly 17 billion soums and unpaid contractual remuneration near 15 billion soums.",
    why: "This is the most concrete public description of the investigative theory identified so far.",
  },
  {
    date: "Apr 4",
    title: "NBU responds",
    source: "Official",
    text: "NBU says legal procedures and negotiations are ongoing, calls outside allegations unsubstantiated, and emphasizes client protection.",
    why: "The official counter-position belongs near the top of any credible public record.",
  },
];

const sourceLibrary = [
  { title: "Hasanov Defense Initiative biography and campaign materials", type: "Campaign", certainty: "Campaign claim" },
  { title: "Amsterdam & Partners February 24 and March 31 statements", type: "Counsel", certainty: "Counsel position" },
  { title: "National Bank of Uzbekistan April 4 public response", type: "Official", certainty: "Official bank position" },
  { title: "Vedomosti reporting on detention and alleged amounts", type: "Reported", certainty: "Reported allegation" },
  { title: "Uzbek business-media reporting on Solfy, NBU, and Sabzi", type: "Reported", certainty: "Reported context" },
  { title: "Uzbekistan investment, privatization, TIIF, and arbitration materials", type: "Context", certainty: "Institutional context" },
];

const audienceSlides = [
  {
    id: "hasanov-investors-lenders",
    title: "Investors and Lenders",
    label: "Audience 01",
    headline: "Investors read hard cases as downside-case signals.",
    lead: "The question is not whether Uzbekistan has a reform story. It is what happens when a state-linked commercial relationship breaks down.",
    points: [
      "Treatment of foreign-linked operators when a partnership deteriorates",
      "Practical separation between commercial recovery and criminal enforcement",
      "Reputational risk around privatization, IPO, rating, and TIIF narratives",
    ],
    close: "Capital does not price roadshows. It prices downside behavior.",
  },
  {
    id: "hasanov-reformers-stewards",
    title: "Reformers and State-Asset Stewards",
    label: "Audience 02",
    headline: "Reform credibility is proven in conflicted files.",
    lead: "State-asset reform depends on confidence that public institutions can act commercially without blurring enforcement power.",
    points: [
      "Governance discipline inside state-owned or state-linked institutions",
      "Investor-protection norms beyond headline legislation",
      "Whether commercial disputes can remain in civil, arbitral, or negotiated lanes",
    ],
    close: "This is a governance case disguised as one executive’s criminal file.",
  },
  {
    id: "hasanov-merchants-customers",
    title: "Merchants, Customers, Employees",
    label: "Audience 03",
    headline: "The dispute has operational consequences beyond the parties.",
    lead: "Installment-payment platforms are trust infrastructure. Reputational shock can move through merchants, consumers, staff, and service continuity.",
    points: [
      "Merchant uncertainty when platform ownership or branding changes",
      "Customer confidence in payment continuity and data handling",
      "Employee exposure when executives become the focal point of a dispute",
    ],
    close: "A legal conflict can become a market-confidence problem overnight.",
  },
  {
    id: "hasanov-lawyers-risk",
    title: "Lawyers and Risk Teams",
    label: "Audience 04",
    headline: "The file tests when commercial risk becomes criminal exposure.",
    lead: "Counsel, arbitrators, insurers, and compliance teams need a clean map of claims, counterclaims, and procedural milestones.",
    points: [
      "Preserve the distinction between allegation, charge, court finding, and campaign claim",
      "Assess whether detention changes negotiation dynamics or settlement leverage",
      "Track arbitration signals, treaty arguments, and local criminal procedure separately",
    ],
    close: "The discipline is attribution first, conclusion second.",
  },
  {
    id: "hasanov-journalists-researchers",
    title: "Journalists and Researchers",
    label: "Audience 05",
    headline: "This is a source-sensitive story, not a clipping file.",
    lead: "The strongest public narrative will be the one that lets readers see where each claim comes from and what remains unresolved.",
    points: [
      "Use transliteration aliases so records can actually be found",
      "Keep campaign statements, bank statements, and independent reporting visually distinct",
      "Do not turn attributed advocacy language into neutral factual narration",
    ],
    close: "Credibility comes from restraint as much as force.",
  },
  {
    id: "hasanov-rights-advocates",
    title: "Rights Advocates",
    label: "Audience 06",
    headline: "A business dispute can still raise human-rights questions.",
    lead: "Detention in a commercial-conflict setting creates a due-process question even before any final view of the underlying financial allegations.",
    points: [
      "Proportionality of detention while economic allegations remain contested",
      "Access to counsel, transparent procedure, and public procedural milestones",
      "Broader business-and-human-rights implications in a reforming state-heavy economy",
    ],
    close: "The person at the center cannot disappear behind the investment-climate analysis.",
  },
];

const riskImplications = [
  { group: "IFIs", signal: "Governance and rule-of-law conditionality", action: "Ask whether commercial disputes involving public institutions remain commercially bounded." },
  { group: "Correspondent banks", signal: "Financial-crime and reputational exposure", action: "Monitor allegations, official statements, and enforcement proportionality before drawing risk conclusions." },
  { group: "Rating analysts", signal: "Institutional predictability", action: "Treat the case as one data point in state-asset governance and dispute-resolution credibility." },
  { group: "Foreign investors", signal: "Downside-case protection", action: "Assess whether contractual conflict can escalate into personal criminal exposure." },
];

const remedies = [
  { title: "Criminal defense", text: "Immediate priority: due process, counsel access, procedural transparency, and proportionate restrictions." },
  { title: "Commercial resolution", text: "Parallel priority: preserve civil settlement, accounting, and contractual pathways without criminal leverage." },
  { title: "International arbitration", text: "Counsel has signaled possible international remedies; treaty and forum analysis should remain claim-specific." },
  { title: "Public advocacy", text: "CAJI’s strongest role is a disciplined evidence hub, not unchecked escalation rhetoric." },
];

const Header = ({ label, title, children, light = false }: { label: string; title: string; children?: ReactNode; light?: boolean }) => (
  <>
    <div className="flex items-start justify-between gap-8 mb-8 anim-fade-up stagger-1">
      <div className="max-w-[1320px]">
        <SlidePill label={label} variant={light ? "dark" : "light"} />
        <h2 className={`font-display text-[64px] font-semibold leading-[1.02] tracking-normal mt-7 ${light ? "text-primary-foreground" : "text-slide-foreground"}`}>
          {title}
        </h2>
      </div>
      <CAJILogo variant={light ? "light" : "dark"} size={44} />
    </div>
    {children}
  </>
);

const EvidenceBadge = ({ kind, light = false }: { kind: EvidenceKind | string; light?: boolean }) => {
  const key = kind as EvidenceKind;
  const fallback = light ? "border-primary-foreground/25 text-primary-foreground/75 bg-primary-foreground/5" : "border-slide-foreground/15 text-slide-muted bg-background";
  return (
    <span className={`inline-flex w-fit border px-3 py-1 text-[14px] font-semibold uppercase tracking-[0.14em] ${light ? fallback : evidenceStyles[key] ?? fallback}`}>
      {kind}
    </span>
  );
};

const Rule = ({ light = false }: { light?: boolean }) => (
  <div className={`h-px w-full ${light ? "bg-primary-foreground/18" : "bg-slide-primary"}`} />
);

const NumberTag = ({ children, light = false }: { children: ReactNode; light?: boolean }) => (
  <div className={`flex h-14 w-14 shrink-0 items-center justify-center border text-[22px] font-semibold tabular-nums ${light ? "border-primary-foreground/20 text-primary-foreground" : "border-slide-primary/35 text-slide-primary"}`}>
    {children}
  </div>
);

const TextCard = ({ title, text, kind, light = false }: { title: string; text: string; kind?: EvidenceKind | string; light?: boolean }) => (
  <div className={`flex h-full flex-col border p-7 ${light ? "border-primary-foreground/14 bg-primary-foreground/5" : "border-slide-foreground/10 bg-slide-surface"}`}>
    {kind && <EvidenceBadge kind={kind} light={light} />}
    <h3 className={`font-display text-[34px] font-semibold leading-tight ${kind ? "mt-5" : ""} ${light ? "text-primary-foreground" : "text-slide-foreground"}`}>{title}</h3>
    <p className={`mt-4 text-[22px] leading-relaxed ${light ? "text-primary-foreground/72" : "text-slide-muted"}`}>{text}</p>
  </div>
);

const BigQuote = ({ quote, attribution, light = false }: { quote: string; attribution?: string; light?: boolean }) => (
  <div className="max-w-[1280px] anim-fade-up stagger-2">
    <div className={`font-display text-[140px] leading-none ${light ? "text-primary-foreground/16" : "text-slide-primary/20"}`}>“</div>
    <p className={`-mt-12 font-display text-[58px] font-semibold leading-[1.13] ${light ? "text-primary-foreground" : "text-slide-foreground"}`}>{quote}</p>
    {attribution && <p className={`mt-7 text-[22px] leading-relaxed ${light ? "text-primary-foreground/65" : "text-slide-muted"}`}>{attribution}</p>}
  </div>
);

const SplitSlide = ({
  props,
  label,
  title,
  left,
  right,
  dark = false,
}: {
  props: { slideNumber: number; totalSlides: number };
  label: string;
  title: string;
  left: ReactNode;
  right: ReactNode;
  dark?: boolean;
}) => (
  <SlideLayout variant={dark ? "dark" : "white"} slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
    <div className="flex h-full flex-col p-[80px]">
      <Header label={label} title={title} light={dark} />
      <div className="grid flex-1 grid-cols-[1fr_1fr] gap-10 min-h-0">
        <div className="anim-slide-left stagger-2 min-h-0">{left}</div>
        <div className="anim-slide-right stagger-3 min-h-0">{right}</div>
      </div>
    </div>
  </SlideLayout>
);

const TimelineCard = ({ item, index }: { item: typeof timeline[number]; index: number }) => (
  <div className="relative flex gap-6 border-l border-slide-primary/30 pl-7 pb-6">
    <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-slide-primary" />
    <div className="w-[120px] shrink-0 pt-0.5">
      <p className="text-[24px] font-bold tabular-nums text-slide-primary">{item.date}</p>
      <p className="mt-2 text-[14px] uppercase tracking-[0.14em] text-slide-muted">Step {index + 1}</p>
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-3 mb-3">
        <h3 className="font-display text-[34px] font-semibold leading-tight">{item.title}</h3>
        <EvidenceBadge kind={item.source} />
      </div>
      <p className="text-[22px] leading-relaxed text-slide-muted">{item.text}</p>
    </div>
  </div>
);

const PersonPanel = ({ image, name, role, text }: { image: string; name: string; role: string; text: string }) => (
  <div className="grid h-full grid-cols-[0.75fr_1fr] overflow-hidden bg-slide-surface">
    <img src={image} alt={name} className="h-full w-full object-cover" />
    <div className="flex flex-col justify-end p-8">
      <EvidenceBadge kind="Campaign" />
      <h3 className="mt-5 font-display text-[42px] font-semibold leading-tight">{name}</h3>
      <p className="mt-2 text-[18px] font-semibold uppercase tracking-[0.12em] text-slide-primary">{role}</p>
      <p className="mt-5 text-[22px] leading-relaxed text-slide-muted">{text}</p>
    </div>
  </div>
);

export const slides: SlideData[] = [
  {
    id: "hasanov-title",
    title: "The Hasanov Case",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides} showConfidentiality={false}>
        <div className="flex h-full">
          <div className="flex flex-1 flex-col justify-between p-[80px] pr-[60px]">
            <CAJILogo size={54} />
            <div className="anim-fade-up stagger-1">
              <EvidenceBadge kind="Live evidence deck" />
              <h1 className="mt-8 max-w-[1120px] font-display text-[92px] font-semibold leading-[0.96] tracking-normal text-slide-foreground">
                The Hasanov case is now bigger than one executive.
              </h1>
              <p className="mt-8 max-w-[960px] text-[26px] leading-[1.42] text-slide-muted">
                A commercial dispute involving Solfy CA, its investor, and the National Bank of Uzbekistan has become a test of due process, state-bank governance, investor confidence, and Uzbekistan’s reform narrative.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 border-t border-slide-foreground/10 pt-8 anim-fade-up stagger-3">
              <div><p className="mb-2 text-[14px] uppercase tracking-[0.14em] text-slide-muted">Publisher</p><p className="text-[24px] font-semibold">CAJI</p></div>
              <div><p className="mb-2 text-[14px] uppercase tracking-[0.14em] text-slide-muted">Format</p><p className="text-[24px] font-semibold">30-slide evidence deck</p></div>
              <div><p className="mb-2 text-[14px] uppercase tracking-[0.14em] text-slide-muted">Standard</p><p className="text-[24px] font-semibold">Attribution first</p></div>
            </div>
          </div>
          <div className="w-[34%] bg-slide-foreground text-primary-foreground flex flex-col justify-end p-[70px] anim-slide-right stagger-2">
            <Rule light />
            <p className="mt-8 font-display text-[48px] leading-[1.12]">
              Source-labeled analysis for investors, reformers, lawyers, journalists, and rights advocates.
            </p>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "hasanov-executive-thesis",
    title: "Executive Thesis",
    component: (props) => (
      <SlideLayout variant="dark" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex h-full flex-col p-[80px]">
          <Header label="Executive thesis" title="The file matters because it sits at the intersection of four institutional risks." light />
          <div className="grid flex-1 grid-cols-4 gap-6 min-h-0">
            {[
              ["Commercial", "A broken fintech partnership and contractual dispute involving Solfy, its investor, and NBU."],
              ["Criminal", "A company director detained while financial allegations remain publicly contested."],
              ["Governance", "A state-linked bank’s role as commercial actor, complainant, and public-facing institution."],
              ["Reform", "A live test of Uzbekistan’s credibility with investors, lenders, and policy audiences."],
            ].map(([title, text], i) => (
              <div key={title} className={`border border-primary-foreground/14 p-7 flex flex-col justify-between anim-fade-up stagger-${i + 2}`}>
                <NumberTag light>{String(i + 1).padStart(2, "0")}</NumberTag>
                <div>
                  <h3 className="font-display text-[42px] font-semibold text-primary-foreground">{title}</h3>
                  <p className="mt-5 text-[22px] leading-relaxed text-primary-foreground/70">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "hasanov-how-to-read",
    title: "How to Read This Deck",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex h-full flex-col p-[80px]">
          <Header label="Record standard" title="The deck is persuasive because it does not pretend the record is settled." />
          <div className="grid flex-1 grid-cols-[0.9fr_1.1fr] gap-10 min-h-0">
            <div className="bg-slide-surface p-10 anim-slide-left stagger-2">
              <BigQuote quote="Attribution is the argument." attribution="A stronger public record separates what happened, what was alleged, who said it, and what still needs documentation." />
            </div>
            <div className="grid grid-cols-2 gap-5 anim-slide-right stagger-3">
              {[
                ["Established", "Visible procedural or public-record facts."],
                ["Reported", "Independent media descriptions, including reported allegations."],
                ["Campaign", "Claims advanced by Hasanov / Solfy-aligned campaign materials."],
                ["Counsel", "Positions taken in legal representatives’ statements."],
                ["Official", "NBU or other official public positions."],
                ["Context", "Investment, arbitration, governance, and policy background."],
              ].map(([kind, text]) => <TextCard key={kind} title={kind} text={text} kind={kind} />)}
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "hasanov-transliteration",
    title: "Transliteration and Search Note",
    component: (props) => (
      <SplitSlide
        props={props}
        label="Search discipline"
        title="If the names are not searchable, the evidence hub fails."
        left={
          <div className="h-full bg-slide-surface p-10 flex flex-col justify-between">
            <div>
              <EvidenceBadge kind="Established" />
              <h3 className="mt-6 font-display text-[46px] font-semibold leading-tight">Name variants must be visible, not hidden in metadata.</h3>
              <p className="mt-6 text-[24px] leading-relaxed text-slide-muted">Public records and press references may use different English spellings, Uzbek transliteration, or Russian-language renderings.</p>
            </div>
            <Rule />
          </div>
        }
        right={
          <div className="space-y-5">
            {["Uktam Hasanov", "Xasanov Uktam Nasullotevich", "Ukhtam Hassanov", "Solfy CA", "Sabzi", "National Bank of Uzbekistan / NBU"].map((name, i) => (
              <div key={name} className="flex items-center justify-between border border-slide-foreground/10 p-6 bg-background">
                <span className="text-[28px] font-semibold">{name}</span>
                <span className="text-[14px] uppercase tracking-[0.14em] text-slide-primary">Alias {i + 1}</span>
              </div>
            ))}
          </div>
        }
      />
    ),
  },
  {
    id: "hasanov-timeline-glance",
    title: "Timeline at a Glance",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex h-full flex-col p-[80px]">
          <Header label="Timeline" title="The conflict was public before detention became the headline." />
          <div className="grid flex-1 grid-cols-7 gap-3 items-stretch min-h-0 anim-fade-up stagger-2">
            {timeline.map((item, i) => (
              <div key={item.title} className="flex flex-col border border-slide-foreground/10 bg-slide-surface p-5">
                <div className="mb-4 flex items-center justify-between gap-2">
                  <p className="text-[26px] font-bold text-slide-primary tabular-nums">{item.date}</p>
                  <span className="text-[14px] text-slide-muted tabular-nums">{i + 1}</span>
                </div>
                <h3 className="font-display text-[30px] font-semibold leading-tight">{item.title}</h3>
                <p className="mt-4 text-[18px] leading-relaxed text-slide-muted">{item.text}</p>
                <div className="mt-auto pt-4"><EvidenceBadge kind={item.source} /></div>
              </div>
            ))}
          </div>
        </div>
      </SlideLayout>
    ),
  },
  ...timeline.slice(0, 2).map((item, i) => ({
    id: i === 0 ? "hasanov-feb-24-counsel" : "hasanov-feb-27-local-press",
    title: item.title,
    component: (props: { slideNumber: number; totalSlides: number }) => (
      <SplitSlide
        props={props}
        label="Timeline detail"
        title={`${item.date}: ${item.title}.`}
        left={<TextCard title="What the record says" text={item.text} kind={item.source} />}
        right={<TextCard title="Why it matters" text={item.why} kind="Context" />}
      />
    ),
  })),
  {
    id: "hasanov-mar-27-detention",
    title: "March 27 Detention",
    component: (props) => (
      <SlideLayout variant="dark" backgroundImage={detentionCell} slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex h-full flex-col p-[80px]">
          <Header label="Timeline detail" title="March 27: detention changes the category of the case." light />
          <div className="grid flex-1 grid-cols-[0.95fr_1.05fr] gap-10 items-end min-h-0">
            <BigQuote quote="A contract dispute became a liberty, leverage, and investment-climate question." attribution="Detention does not decide the underlying allegations. It changes the stakes of the dispute." light />
            <div className="grid grid-cols-2 gap-5 anim-slide-right stagger-3">
              <TextCard title="Personal risk" text="Hasanov becomes the human face of a dispute otherwise framed in commercial terms." kind="Reported" light />
              <TextCard title="Market signal" text="Investors ask whether executives can be personally exposed during settlement conflict." kind="Context" light />
              <TextCard title="Due process" text="Procedure, access, proportionality, and transparency become central facts to track." kind="Context" light />
              <TextCard title="Public narrative" text="Campaign language intensifies, but CAJI must keep claims attributed." kind="Campaign" light />
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  ...timeline.slice(4, 7).map((item) => ({
    id: `hasanov-${item.date.toLowerCase().replace(/[– ]/g, "-").replace(/[^a-z0-9-]/g, "")}`,
    title: item.title,
    component: (props: { slideNumber: number; totalSlides: number }) => (
      <SplitSlide
        props={props}
        label="Timeline detail"
        title={`${item.date}: ${item.title}.`}
        left={<TextCard title="What the source says" text={item.text} kind={item.source} />}
        right={<TextCard title="Why it matters" text={item.why} kind="Context" />}
      />
    ),
  })),
  {
    id: "hasanov-known-unknown-contested",
    title: "Known, Unknown, Contested",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex h-full flex-col p-[80px]">
          <Header label="Credibility slide" title="The strongest deck shows its seams." />
          <div className="grid flex-1 grid-cols-3 gap-7 min-h-0">
            {[
              ["Known", "Hasanov was publicly reported detained; the dispute was already public; NBU issued an official response; campaign and counsel statements are public."],
              ["Unknown", "The full investigative file, procedural record, court orders, and underlying accounting evidence are not visible in the reviewed public materials."],
              ["Contested", "Whether the criminal case is proportionate, whether the dispute should remain commercial, and whether enforcement power is being used as leverage."],
            ].map(([title, text], i) => (
              <div key={title} className={`p-9 flex flex-col ${i === 1 ? "bg-slide-foreground text-primary-foreground" : "bg-slide-surface"} anim-fade-up stagger-${i + 2}`}>
                <NumberTag light={i === 1}>{String(i + 1).padStart(2, "0")}</NumberTag>
                <h3 className={`mt-10 font-display text-[52px] font-semibold ${i === 1 ? "text-primary-foreground" : "text-slide-foreground"}`}>{title}</h3>
                <p className={`mt-6 text-[24px] leading-relaxed ${i === 1 ? "text-primary-foreground/72" : "text-slide-muted"}`}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "hasanov-solfy-sabzi-context",
    title: "Solfy and Sabzi Context",
    component: (props) => (
      <SplitSlide
        props={props}
        label="Operating context"
        title="The commercial backdrop is a fintech continuity story, not just a courtroom story."
        left={<PersonPanel image={uktamPhoto} name="Uktam Hasanov" role="Director of Solfy CA" text="Campaign materials present Hasanov as the local executive pulled into a dispute involving Solfy, its investor, and NBU." />}
        right={
          <div className="grid h-full grid-rows-3 gap-5">
            <TextCard title="Solfy CA" text="A consumer-finance / installment-payment platform whose business relationship with NBU became disputed." kind="Context" />
            <TextCard title="Sabzi continuation" text="Local reporting indicates the service continued under Sabzi branding, making customer and merchant continuity part of the story." kind="Reported" />
            <TextCard title="Why it matters" text="A platform dispute can create confidence risk across merchants, users, staff, and banking partners." kind="Context" />
          </div>
        }
      />
    ),
  },
  {
    id: "hasanov-state-bank-context",
    title: "State Bank Context",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex h-full flex-col p-[80px]">
          <Header label="Institutional context" title="State-bank context changes how the dispute is read externally." />
          <div className="grid flex-1 grid-cols-[0.9fr_1.1fr] gap-10 min-h-0">
            <div className="bg-slide-foreground text-primary-foreground p-10 flex flex-col justify-between anim-slide-left stagger-2">
              <div>
                <EvidenceBadge kind="Context" light />
                <p className="mt-8 font-display text-[54px] leading-[1.13] font-semibold">When a state-linked financial institution is involved, foreign observers see more than a private balance-sheet fight.</p>
              </div>
              <Rule light />
            </div>
            <div className="grid grid-cols-2 gap-5 anim-slide-right stagger-3">
              {[
                ["Public trust", "NBU’s official response emphasizes client protection and uninterrupted service."],
                ["Governance", "External audiences ask whether commercial and enforcement roles are clearly separated."],
                ["Reform", "State-asset reform is judged by conflict behavior, not only policy announcements."],
                ["Investor signal", "A single case can become a proxy for treatment of foreign-linked capital."],
              ].map(([title, text]) => <TextCard key={title} title={title} text={text} kind="Context" />)}
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "hasanov-dual-role",
    title: "Dual Role Problem",
    component: (props) => (
      <SlideLayout variant="dark" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex h-full flex-col p-[80px]">
          <Header label="Core issue" title="The dual-role concern must be framed precisely." light />
          <div className="grid flex-1 grid-cols-[1fr_0.9fr_1fr] gap-6 items-stretch min-h-0">
            <TextCard title="Commercial actor" text="NBU is part of the commercial relationship and public dispute narrative." kind="Context" light />
            <div className="flex flex-col items-center justify-center border border-primary-foreground/14 bg-primary-foreground/5 p-8 text-center anim-fade-up stagger-3">
              <p className="text-[18px] uppercase tracking-[0.18em] text-primary-foreground/55">The concern</p>
              <p className="mt-6 font-display text-[52px] font-semibold leading-tight text-primary-foreground">Commercial conflict plus criminal complaint</p>
              <p className="mt-6 text-[22px] leading-relaxed text-primary-foreground/70">CAJI should present this as a governance and leverage question, not as a proven conclusion.</p>
            </div>
            <TextCard title="Official complainant / respondent voice" text="NBU has publicly stated procedures and negotiations are ongoing and outside claims are unsubstantiated." kind="Official" light />
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "hasanov-ten-day-window",
    title: "The 10-Day Window",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex h-full flex-col p-[80px]">
          <Header label="Critical window" title="The campaign’s most important factual theory is the 10-day escalation window." />
          <div className="grid flex-1 grid-cols-[0.75fr_1.25fr] gap-10 min-h-0">
            <div className="bg-slide-surface p-10 flex flex-col justify-between anim-slide-left stagger-2">
              <div>
                <EvidenceBadge kind="Campaign" />
                <h3 className="mt-6 font-display text-[50px] font-semibold leading-tight">March 17 to March 27</h3>
                <p className="mt-6 text-[24px] leading-relaxed text-slide-muted">Old investor-alert material centered on the idea that settlement pressure became criminal exposure in a narrow window.</p>
              </div>
              <p className="border-t border-slide-foreground/10 pt-6 text-[22px] leading-relaxed text-slide-foreground"><span className="font-semibold">Deck treatment:</span> present this as an attributed concern requiring documentary support.</p>
            </div>
            <div className="space-y-6 anim-slide-right stagger-3">
              {[
                ["Before", "Commercial negotiations and contractual disagreement."],
                ["During", "Campaign/counsel framing of pressure, leverage, and unresolved settlement dynamics."],
                ["After", "Detention transforms the dispute into a due-process and investor-protection issue."],
              ].map(([title, text], i) => (
                <div key={title} className="grid grid-cols-[90px_1fr] gap-6 border border-slide-foreground/10 p-7">
                  <NumberTag>{String(i + 1).padStart(2, "0")}</NumberTag>
                  <div><h3 className="font-display text-[38px] font-semibold">{title}</h3><p className="mt-3 text-[24px] leading-relaxed text-slide-muted">{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "hasanov-excessive-measure",
    title: "The Excessive Measure Question",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex h-full flex-col p-[80px]">
          <Header label="Due process" title="The proportionality question is narrower, and stronger, than the rhetoric." />
          <div className="grid flex-1 grid-cols-[1.05fr_0.95fr] gap-10 min-h-0">
            <div className="bg-slide-surface p-10 anim-slide-left stagger-2">
              <EvidenceBadge kind="Campaign" />
              <h3 className="mt-6 font-display text-[50px] font-semibold leading-tight">A detention measure in a commercial-conflict setting demands a clear public rationale.</h3>
              <p className="mt-7 text-[24px] leading-relaxed text-slide-muted">The issue is not whether allegations may be investigated. The issue is whether personal detention is necessary and proportionate while financial claims and contractual obligations remain contested.</p>
            </div>
            <div className="grid grid-rows-3 gap-5 anim-slide-right stagger-3">
              {[
                ["Necessity", "What public basis justifies detention rather than non-custodial measures?"],
                ["Transparency", "What procedural milestones can be verified by court or official records?"],
                ["Leverage risk", "Does custody alter settlement dynamics in a state-linked commercial dispute?"],
              ].map(([title, text]) => <TextCard key={title} title={title} text={text} kind="Context" />)}
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "hasanov-six-audiences",
    title: "Six Audiences, Six Risks",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex h-full flex-col p-[80px]">
          <Header label="Audience architecture" title="A credible hub answers why each audience should care." />
          <div className="grid flex-1 grid-cols-3 gap-5 min-h-0">
            {audienceSlides.map((item, i) => (
              <div key={item.id} className={`bg-slide-surface p-6 flex flex-col anim-fade-up stagger-${(i % 6) + 2}`}>
                <p className="text-[14px] uppercase tracking-[0.14em] text-slide-primary">{item.label}</p>
                <h3 className="mt-4 font-display text-[34px] font-semibold leading-tight">{item.title}</h3>
                <p className="mt-4 text-[20px] leading-relaxed text-slide-muted">{item.lead}</p>
                <p className="mt-auto border-t border-slide-foreground/10 pt-4 text-[20px] font-semibold leading-snug">{item.close}</p>
              </div>
            ))}
          </div>
        </div>
      </SlideLayout>
    ),
  },
  ...audienceSlides.map((item) => ({
    id: item.id,
    title: item.title,
    component: (props: { slideNumber: number; totalSlides: number }) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex h-full flex-col p-[80px]">
          <Header label={item.label} title={item.headline} />
          <div className="grid flex-1 grid-cols-[0.95fr_1.05fr] gap-10 min-h-0">
            <div className="bg-slide-foreground text-primary-foreground p-10 flex flex-col justify-between anim-slide-left stagger-2">
              <p className="font-display text-[46px] font-semibold leading-tight">{item.lead}</p>
              <Rule light />
              <p className="text-[26px] leading-snug text-primary-foreground/78">{item.close}</p>
            </div>
            <div className="space-y-5 anim-slide-right stagger-3">
              {item.points.map((point, i) => (
                <div key={point} className="flex gap-6 border border-slide-foreground/10 bg-slide-surface p-7">
                  <NumberTag>{String(i + 1).padStart(2, "0")}</NumberTag>
                  <p className="text-[26px] font-semibold leading-snug text-slide-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  })),
  {
    id: "hasanov-uzbekistan-now",
    title: "Why Uzbekistan Now",
    component: (props) => (
      <SlideLayout variant="dark" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex h-full flex-col p-[80px]">
          <Header label="Uzbekistan context" title="A reform story is tested in difficult cases, not only investment forums." light />
          <div className="grid flex-1 grid-cols-[1fr_1fr] gap-10 items-center min-h-0">
            <BigQuote quote="Foreign capital hears the promise. This case tests the downside protection." attribution="Uzbekistan is courting investors, preparing privatizations, and presenting itself as a maturing business destination." light />
            <div className="grid grid-cols-2 gap-5 anim-slide-right stagger-3">
              {[
                "Foreign investment and ratings attention",
                "TIIF 2026 in Tashkent",
                "Privatization and state-bank reform",
                "Arbitration credibility and treaty-risk signaling",
              ].map((item) => <TextCard key={item} title={item} text="A public dispute involving a state-linked bank becomes a signal watched beyond the parties." kind="Context" light />)}
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "hasanov-arbitration-context",
    title: "Institutional and Arbitration Context",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex h-full flex-col p-[80px]">
          <Header label="Legal context" title="International remedies are powerful only if the factual record is disciplined." />
          <div className="grid flex-1 grid-cols-[1fr_1fr_1fr] gap-7 min-h-0">
            {[
              ["Local process first", "Criminal procedure, court records, bail or detention review, and official filings remain the immediate evidence base."],
              ["Arbitration pathway", "Counsel has signaled possible international remedies; claims must be tied to investment, treaty, contract, and forum analysis."],
              ["Policy leverage", "Foreign-investor forums and reform bodies care when state-linked disputes appear to blur commercial and coercive tools."],
            ].map(([title, text], i) => (
              <div key={title} className={`p-9 border border-slide-foreground/10 ${i === 1 ? "bg-slide-foreground text-primary-foreground" : "bg-slide-surface"} anim-fade-up stagger-${i + 2}`}>
                <NumberTag light={i === 1}>{String(i + 1).padStart(2, "0")}</NumberTag>
                <h3 className={`mt-8 font-display text-[42px] font-semibold leading-tight ${i === 1 ? "text-primary-foreground" : "text-slide-foreground"}`}>{title}</h3>
                <p className={`mt-5 text-[23px] leading-relaxed ${i === 1 ? "text-primary-foreground/72" : "text-slide-muted"}`}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "hasanov-regulatory-financial-risk",
    title: "Regulatory and Financial Risk",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex h-full flex-col p-[80px]">
          <Header label="Risk implications" title="Compliance teams need a risk map, not a campaign slogan." />
          <div className="flex-1 min-h-0 border border-slide-foreground/10 anim-fade-up stagger-2">
            <div className="grid grid-cols-[0.75fr_1fr_1.35fr] bg-slide-foreground text-primary-foreground text-[18px] font-semibold uppercase tracking-[0.12em]">
              <div className="p-5">Audience</div><div className="p-5">Signal</div><div className="p-5">Practical question</div>
            </div>
            {riskImplications.map((row) => (
              <div key={row.group} className="grid grid-cols-[0.75fr_1fr_1.35fr] border-t border-slide-foreground/10 text-[23px] leading-snug">
                <div className="p-6 font-bold text-slide-primary">{row.group}</div>
                <div className="p-6 font-semibold">{row.signal}</div>
                <div className="p-6 text-slide-muted">{row.action}</div>
              </div>
            ))}
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "hasanov-remedies-pressure-points",
    title: "Remedies and Pressure Points",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex h-full flex-col p-[80px]">
          <Header label="Action map" title="The pressure points work only when they reinforce each other." />
          <div className="grid flex-1 grid-cols-4 gap-6 min-h-0">
            {remedies.map((item, i) => (
              <div key={item.title} className={`flex flex-col justify-between p-7 border border-slide-foreground/10 ${i === 3 ? "bg-slide-foreground text-primary-foreground" : "bg-slide-surface"} anim-fade-up stagger-${i + 2}`}>
                <NumberTag light={i === 3}>{String(i + 1).padStart(2, "0")}</NumberTag>
                <div>
                  <h3 className={`font-display text-[40px] font-semibold leading-tight ${i === 3 ? "text-primary-foreground" : "text-slide-foreground"}`}>{item.title}</h3>
                  <p className={`mt-5 text-[22px] leading-relaxed ${i === 3 ? "text-primary-foreground/72" : "text-slide-muted"}`}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "hasanov-sources-library",
    title: "Sources and Documents Library",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex h-full flex-col p-[80px]">
          <Header label="Sources & documents" title="The evidence hub should make source quality visible at a glance." />
          <div className="grid flex-1 grid-cols-2 gap-5 min-h-0">
            {sourceLibrary.map((doc, i) => (
              <div key={doc.title} className={`flex items-center gap-6 border border-slide-foreground/10 p-6 anim-fade-up stagger-${(i % 6) + 2}`}>
                <div className="h-full w-2 shrink-0 bg-slide-primary" />
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-3">
                    <EvidenceBadge kind={doc.type} />
                    <span className="text-[14px] uppercase tracking-[0.12em] text-slide-muted">{doc.certainty}</span>
                  </div>
                  <h3 className="text-[25px] font-semibold leading-snug">{doc.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-6 gap-4 anim-fade-up stagger-7">
            {["Established", "Reported", "Campaign", "Counsel", "Official", "Context"].map((type) => (
              <div key={type} className="bg-slide-surface p-4 text-center text-[17px] font-semibold">{type}</div>
            ))}
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "hasanov-contact",
    title: "CAJI Contact",
    component: (props) => (
      <SlideLayout variant="dark" slideNumber={props.slideNumber} totalSlides={props.totalSlides} showConfidentiality={false}>
        <div className="flex h-full flex-col p-[80px]">
          <div className="flex items-center justify-between anim-fade-up stagger-1">
            <SlidePill label="Central Asia Justice Initiative" variant="dark" />
            <CAJILogo variant="light" size={52} />
          </div>
          <div className="flex flex-1 items-center">
            <div className="max-w-[1280px] anim-fade-up stagger-2">
              <h2 className="font-display text-[86px] font-semibold leading-[0.98] text-primary-foreground">
                Make the public record hard to ignore and harder to dismiss.
              </h2>
              <p className="mt-8 max-w-[1040px] text-[28px] leading-relaxed text-primary-foreground/70">
                CAJI’s role is to maintain a disciplined, bilingual, update-driven evidence hub: strong enough for advocacy, careful enough for serious institutional readers.
              </p>
              <div className="mt-14 grid grid-cols-3 gap-8">
                <div className="border-t border-slide-primary pt-6"><p className="mb-3 text-[18px] uppercase tracking-[0.14em] text-primary-foreground/45">Web</p><p className="text-[28px] font-semibold text-primary-foreground">www.caji.org</p></div>
                <div className="border-t border-slide-primary pt-6"><p className="mb-3 text-[18px] uppercase tracking-[0.14em] text-primary-foreground/45">Languages</p><p className="text-[28px] font-semibold text-primary-foreground">EN · RU · UZ</p></div>
                <div className="border-t border-slide-primary pt-6"><p className="mb-3 text-[18px] uppercase tracking-[0.14em] text-primary-foreground/45">Standard</p><p className="text-[28px] font-semibold text-primary-foreground">Evidence first</p></div>
              </div>
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },
];
