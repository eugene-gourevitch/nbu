import { ReactNode } from "react";
import SlideLayout from "./SlideLayout";
import SlidePill from "./SlidePill";
import CAJILogo from "./CAJILogo";

export interface SlideData {
  id: string;
  title: string;
  component: (props: { slideNumber: number; totalSlides: number }) => ReactNode;
}

const sourceTypes = {
  campaign: "Campaign",
  counsel: "Counsel",
  bank: "Official bank",
  media: "Independent media",
  context: "Institutional context",
} as const;

const certaintyTypes = ["Official position", "Reported allegation", "Campaign claim", "Structural context"];

const developments = [
  {
    date: "February 24, 2026",
    headline: "Counsel enters the dispute.",
    summary:
      "Amsterdam & Partners announced representation of Solfy and Maksim Poletaev in a contractual dispute with the National Bank of Uzbekistan following the collapse of the business relationship.",
    source: "Counsel statement",
    why: "Marks the point when the matter became an organized cross-border legal conflict rather than a private business disagreement.",
  },
  {
    date: "February 27, 2026",
    headline: "Uzbek business press reports the contract conflict.",
    summary:
      "Uzbek outlets reported the dispute between Solfy, its investor, and NBU after the partnership breakdown, with local coverage noting the platform later continued under the Sabzi brand.",
    source: "Independent/local business media",
    why: "Shows that the conflict was already public before detention became the dominant story.",
  },
  {
    date: "March 27, 2026",
    headline: "Hasanov is detained in Tashkent.",
    summary:
      "External reporting places the detention on March 27; campaign materials frame the case as a test of Uzbekistan’s legal system and investment climate.",
    source: "Media report plus campaign material",
    why: "Transforms a contractual dispute into a due-process and investment-climate story.",
  },
  {
    date: "March 30–31, 2026",
    headline: "The campaign goes international.",
    summary:
      "The campaign site released a March 30 press release, and Amsterdam & Partners followed with a March 31 statement condemning the detention and signaling possible arbitration.",
    source: "Campaign and counsel statement",
    why: "Moves the case into international reputational territory.",
  },
  {
    date: "April 4, 2026",
    headline: "Public reporting sets out investigators’ allegations.",
    summary:
      "Vedomosti reported allegations relating to roughly 17 billion soums in misappropriated funds and nearly 15 billion soums in unpaid contractual remuneration.",
    source: "External media report",
    why: "The most concrete public statement of the investigative theory currently identified.",
  },
  {
    date: "April 4, 2026",
    headline: "NBU issues its official position.",
    summary:
      "NBU said negotiations and legal procedures are ongoing, declined to comment substantively on what it called unsubstantiated allegations, and emphasized client protection and uninterrupted service.",
    source: "Official bank statement",
    why: "The key counter-position missing from a campaign-first architecture.",
  },
];

const audiences = [
  {
    title: "Investors",
    lead: "A downside-case test for state-linked commercial disputes.",
    text: "Uzbekistan is courting foreign capital, ratings attention, IPOs, privatizations, and TIIF 2026. A criminal case connected to a dispute with a state-owned bank will be read as a signal about investor treatment when relationships deteriorate.",
  },
  {
    title: "Reformers",
    lead: "A credibility test for rule-of-law reform.",
    text: "The case touches state-asset stewardship, investor protection, bank governance, and the practical separation between commercial disputes and criminal enforcement.",
  },
  {
    title: "Merchants & Customers",
    lead: "A legal dispute with operating consequences.",
    text: "Solfy, Sabzi, merchants, consumers, and staff are affected by reputational, continuity, and contract risk around installment-payment services in Uzbekistan.",
  },
  {
    title: "Lawyers & Risk Teams",
    lead: "A live case study in commercial risk becoming criminal exposure.",
    text: "Counsel, arbitrators, insurers, lenders, and compliance teams need to track whether the matter remains in commercial and arbitral lanes or creates broader negotiation risk.",
  },
  {
    title: "Journalists",
    lead: "A source-sensitive story, not a clipping file.",
    text: "The record includes campaign claims, counsel statements, bank statements, external reporting, and open questions. Reporting should clearly separate attribution from established fact.",
  },
  {
    title: "Rights Advocates",
    lead: "A business-and-human-rights case with regional significance.",
    text: "The detention is being framed as a due-process issue in a reforming, state-heavy system where commercial power, public institutions, and civil liberties intersect.",
  },
];

const documents = [
  { title: "Hasanov Defense Initiative biography and campaign materials", type: sourceTypes.campaign, certainty: "Campaign claim" },
  { title: "Amsterdam & Partners February 24 and March 31 statements", type: sourceTypes.counsel, certainty: "Counsel position" },
  { title: "National Bank of Uzbekistan April 4 official response", type: sourceTypes.bank, certainty: "Official position" },
  { title: "Vedomosti report on detention and allegations", type: sourceTypes.media, certainty: "Reported allegation" },
  { title: "Uzbek business-media reporting on Solfy, NBU, and Sabzi", type: sourceTypes.media, certainty: "Reported context" },
  { title: "Uzbekistan investment, privatization, TIIF, and arbitration materials", type: sourceTypes.context, certainty: "Structural context" },
];

const Header = ({ label, title, children, light = false }: { label: string; title: string; children?: ReactNode; light?: boolean }) => (
  <>
    <div className="flex items-start justify-between gap-8 mb-8">
      <div>
        <SlidePill label={label} variant={light ? "dark" : "light"} />
        <h2 className={`font-display text-[62px] font-semibold leading-[1.02] tracking-normal mt-7 ${light ? "text-primary-foreground" : "text-slide-foreground"}`}>
          {title}
        </h2>
      </div>
      <CAJILogo variant={light ? "light" : "dark"} size={44} />
    </div>
    {children}
  </>
);

const Badge = ({ children, light = false }: { children: ReactNode; light?: boolean }) => (
  <span className={`inline-flex w-fit border px-3 py-1 text-[13px] font-semibold uppercase tracking-[0.14em] ${light ? "border-primary-foreground/20 text-primary-foreground/70" : "border-slide-primary/25 text-slide-primary"}`}>
    {children}
  </span>
);

const CrimsonRule = ({ light = false }: { light?: boolean }) => (
  <div className={`h-px w-full ${light ? "bg-primary-foreground/20" : "bg-slide-primary"}`} />
);

export const slides: SlideData[] = [
  {
    id: "hasanov-hero",
    title: "Why the Hasanov Case Matters",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides} showConfidentiality={false}>
        <div className="flex h-full">
          <div className="flex-1 flex flex-col justify-between p-[80px] pr-[60px]">
            <CAJILogo size={52} />
            <div>
              <Badge>Evidence hub · EN / RU / UZ ready</Badge>
              <h1 className="font-display text-[88px] font-semibold leading-[0.98] tracking-normal text-slide-foreground mt-8 max-w-[1080px]">
                Why the Uktam Hasanov case matters beyond one executive.
              </h1>
              <p className="mt-8 text-[25px] leading-[1.45] text-slide-muted max-w-[980px]">
                Uktam Hasanov, director of Solfy CA, was detained in Tashkent on March 27, 2026 amid an ongoing dispute between Solfy, its investor, and the National Bank of Uzbekistan. Public accounts diverge over the reasons, but the case already affects investor confidence, due process debates, and Uzbekistan’s reform credibility.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slide-foreground/10">
              <div><p className="text-[13px] uppercase tracking-[0.14em] text-slide-muted mb-2">Last verified</p><p className="text-[24px] font-semibold">April 26, 2026</p></div>
              <div><p className="text-[13px] uppercase tracking-[0.14em] text-slide-muted mb-2">Status</p><p className="text-[24px] font-semibold">Live, disputed record</p></div>
              <div><p className="text-[13px] uppercase tracking-[0.14em] text-slide-muted mb-2">Publisher</p><p className="text-[24px] font-semibold">CAJI</p></div>
            </div>
          </div>
          <div className="w-[32%] bg-slide-foreground text-primary-foreground flex flex-col justify-end p-[70px]">
            <CrimsonRule light />
            <p className="font-display text-[42px] leading-[1.12] mt-8">
              Source-labeled evidence for investors, reformers, journalists, lawyers, and rights advocates.
            </p>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "hasanov-record-standard",
    title: "Record Standard",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <Header label="Public record standard" title="The site should not present a settled narrative." />
          <div className="grid grid-cols-[1.05fr_0.95fr] gap-10 flex-1 min-h-0">
            <div className="bg-slide-surface p-10 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-[42px] font-semibold leading-tight mb-6">Transliteration note</h3>
                <p className="text-[23px] leading-relaxed text-slide-muted mb-8">
                  Public sources use different spellings. The visible page should support search, press, and document-matching without burying aliases in metadata only.
                </p>
              </div>
              <div className="space-y-4">
                {["Uktam Hasanov", "Xasanov Uktam Nasullotevich", "Ukhtam Hassanov"].map((name) => (
                  <div key={name} className="flex items-center justify-between border-t border-slide-foreground/10 pt-4">
                    <span className="text-[26px] font-semibold">{name}</span>
                    <span className="text-[13px] uppercase tracking-[0.14em] text-slide-primary">Search alias</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-slide-foreground/10 p-10 flex flex-col">
              <h3 className="font-display text-[42px] font-semibold leading-tight mb-6">Editorial guardrail</h3>
              <p className="text-[25px] leading-relaxed text-slide-foreground mb-8">
                Strong accusations must appear as attributed claims, not as neutral narration in CAJI’s voice.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-auto">
                {certaintyTypes.map((item) => (
                  <div key={item} className="bg-slide-surface p-5 border-l-2 border-slide-primary">
                    <p className="text-[19px] font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "hasanov-latest-1",
    title: "Latest Developments I",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <Header label="Latest developments" title="The conflict was public before detention dominated the story." />
          <div className="grid grid-cols-2 gap-8 flex-1 min-h-0">
            {developments.slice(0, 4).map((item) => (
              <div key={item.headline} className="bg-slide-surface p-7 flex flex-col border-t-2 border-slide-primary">
                <div className="flex items-start justify-between gap-5 mb-5">
                  <h3 className="font-display text-[34px] font-semibold leading-tight">{item.headline}</h3>
                  <span className="text-[13px] uppercase tracking-[0.14em] text-slide-primary shrink-0 pt-2">{item.date}</span>
                </div>
                <p className="text-[20px] leading-relaxed text-slide-muted mb-5">{item.summary}</p>
                <div className="mt-auto space-y-3">
                  <Badge>{item.source}</Badge>
                  <p className="text-[18px] leading-relaxed"><span className="font-semibold">Why this matters:</span> {item.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "hasanov-latest-2",
    title: "Latest Developments II",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <Header label="Latest developments" title="April 4 introduced both the investigative theory and the bank’s counter-position." />
          <div className="grid grid-cols-2 gap-10 flex-1 min-h-0">
            {developments.slice(4).map((item) => (
              <div key={item.headline} className="border border-slide-foreground/10 p-10 flex flex-col">
                <span className="text-[15px] uppercase tracking-[0.14em] text-slide-primary mb-6">{item.date}</span>
                <h3 className="font-display text-[46px] font-semibold leading-tight mb-7">{item.headline}</h3>
                <p className="text-[24px] leading-relaxed text-slide-muted mb-8">{item.summary}</p>
                <div className="mt-auto pt-6 border-t border-slide-foreground/10">
                  <Badge>{item.source}</Badge>
                  <p className="text-[21px] leading-relaxed mt-5"><span className="font-semibold">Why this matters:</span> {item.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "hasanov-audiences",
    title: "Six Audiences",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <Header label="Why each audience should care" title="Six cohorts turn a campaign page into an evidence hub." />
          <div className="grid grid-cols-3 gap-6 flex-1 min-h-0">
            {audiences.map((audience) => (
              <div key={audience.title} className="bg-slide-surface p-7 flex flex-col">
                <CrimsonRule />
                <h3 className="font-display text-[38px] font-semibold leading-tight mt-5 mb-4">{audience.title}</h3>
                <p className="text-[21px] font-semibold leading-snug mb-4">{audience.lead}</p>
                <p className="text-[19px] leading-relaxed text-slide-muted">{audience.text}</p>
              </div>
            ))}
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "hasanov-sources-say",
    title: "What the Sources Say",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <Header label="What the sources say" title="Separate attributed claims from established facts." />
          <div className="grid grid-cols-2 gap-8 flex-1 min-h-0">
            <div className="bg-slide-surface p-9 flex flex-col">
              <Badge>Campaign and counsel claims</Badge>
              <h3 className="font-display text-[40px] font-semibold leading-tight mt-6 mb-6">The detention is framed as pressure in a commercial dispute.</h3>
              <ul className="space-y-4 text-[22px] leading-relaxed text-slide-muted">
                <li>Campaign materials describe Hasanov as the sole defendant and present the case as a legal-system test.</li>
                <li>Counsel statements argue the detention occurred during negotiations and preserve international arbitration options.</li>
                <li>Terms such as “selective prosecution” should be attributed to campaign or counsel language.</li>
              </ul>
            </div>
            <div className="bg-slide-foreground text-primary-foreground p-9 flex flex-col">
              <Badge light>Official bank position</Badge>
              <h3 className="font-display text-[40px] font-semibold leading-tight mt-6 mb-6">NBU says legal procedures and negotiations are ongoing.</h3>
              <ul className="space-y-4 text-[22px] leading-relaxed text-primary-foreground/70">
                <li>The bank calls outside allegations unsubstantiated while procedures continue.</li>
                <li>Its statement emphasizes client protection, uninterrupted service, and compliance with applicable law.</li>
                <li>This counter-position must be visible near the top of the record.</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-l-2 border-slide-primary bg-slide-surface px-8 py-5">
            <p className="text-[22px] leading-relaxed"><span className="font-semibold">What is independently reported:</span> detention date, public contract-conflict reporting, media summaries of investigators’ allegations, and the absence of an easily accessible public court resolution in the reviewed sources.</p>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "hasanov-uzbekistan-context",
    title: "Uzbekistan Context",
    component: (props) => (
      <SlideLayout variant="dark" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <Header label="Why this matters for Uzbekistan now" title="A reform story is tested in difficult cases, not just roadshows." light />
          <div className="grid grid-cols-[0.9fr_1.1fr] gap-12 flex-1 items-center">
            <div>
              <p className="font-display text-[50px] leading-[1.14] text-primary-foreground">
                Uzbekistan is courting global investors, preparing IPOs and privatizations, and presenting itself as a maturing business destination.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                "Foreign investment and sovereign rating momentum",
                "TIIF 2026 in Tashkent, June 16–19",
                "Privatization and state-bank governance reform",
                "Arbitration credibility and treaty-risk signaling",
              ].map((item) => (
                <div key={item} className="border border-primary-foreground/15 p-7">
                  <CrimsonRule light />
                  <p className="text-[24px] leading-snug font-semibold text-primary-foreground mt-5">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[24px] leading-relaxed text-primary-foreground/70 max-w-[1400px]">
            That is why a disputed detention connected to a conflict with a state-owned bank is bigger than one case file.
          </p>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "hasanov-documents",
    title: "Sources and Documents",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <Header label="Sources & documents" title="Do not flatten every link into one press bucket." />
          <div className="grid grid-cols-2 gap-6 flex-1 min-h-0">
            {documents.map((doc) => (
              <div key={doc.title} className="border border-slide-foreground/10 p-6 flex items-center gap-6">
                <div className="w-2 h-full bg-slide-primary shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge>{doc.type}</Badge>
                    <span className="text-[13px] uppercase tracking-[0.12em] text-slide-muted">{doc.certainty}</span>
                  </div>
                  <h3 className="text-[25px] font-semibold leading-snug">{doc.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-5 gap-4 mt-8">
            {Object.values(sourceTypes).map((type) => (
              <div key={type} className="bg-slide-surface p-4 text-center text-[17px] font-semibold">{type}</div>
            ))}
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "hasanov-update-workflow",
    title: "Update Workflow",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <Header label="Update workflow" title="Event-driven updates until TIIF 2026." />
          <div className="grid grid-cols-[1fr_1fr] gap-10 flex-1 min-h-0">
            <div className="bg-slide-surface p-10">
              <h3 className="font-display text-[42px] font-semibold leading-tight mb-8">Trigger an update when there is a new public milestone.</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Court appearance",
                  "Release decision",
                  "New NBU statement",
                  "Formal arbitration filing",
                  "Foreign Investors’ Council mention",
                  "Major press investigation",
                ].map((item) => (
                  <div key={item} className="border-t border-slide-primary pt-4 text-[21px] font-semibold leading-snug">{item}</div>
                ))}
              </div>
            </div>
            <div className="border border-slide-foreground/10 p-10">
              <h3 className="font-display text-[42px] font-semibold leading-tight mb-8">If no event occurs, say so clearly.</h3>
              <p className="text-[26px] leading-relaxed text-slide-muted mb-8">
                No new public, attributable procedural milestone was found in the latest review.
              </p>
              <CrimsonRule />
              <p className="text-[22px] leading-relaxed mt-8">
                Every update should state both the source and certainty level. Official court material, official bank statements, and institutional records take priority when available.
              </p>
            </div>
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
        <div className="flex flex-col h-full p-[80px]">
          <div className="flex items-center justify-between">
            <SlidePill label="Central Asia Justice Initiative" variant="dark" />
            <CAJILogo variant="light" size={52} />
          </div>
          <div className="flex-1 flex items-center">
            <div className="max-w-[1120px]">
              <h2 className="font-display text-[86px] font-semibold leading-[0.98] text-primary-foreground mb-8">
                A bilingual evidence hub for a disputed public record.
              </h2>
              <p className="text-[28px] leading-relaxed text-primary-foreground/70 mb-12">
                The next version should prioritize a source-labeled live timeline and a six-cohort “why this matters” module.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="border-t border-slide-primary pt-6"><p className="text-[18px] uppercase tracking-[0.14em] text-primary-foreground/45 mb-3">Web</p><p className="text-[28px] font-semibold text-primary-foreground">www.caji.org</p></div>
                <div className="border-t border-slide-primary pt-6"><p className="text-[18px] uppercase tracking-[0.14em] text-primary-foreground/45 mb-3">Languages</p><p className="text-[28px] font-semibold text-primary-foreground">EN · RU · UZ</p></div>
                <div className="border-t border-slide-primary pt-6"><p className="text-[18px] uppercase tracking-[0.14em] text-primary-foreground/45 mb-3">Standard</p><p className="text-[28px] font-semibold text-primary-foreground">Attribution first</p></div>
              </div>
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },
];
