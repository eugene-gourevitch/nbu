import { ReactNode } from "react";
import { Check, X as XIcon } from "lucide-react";
import SlideLayout from "./SlideLayout";
import SlidePill from "./SlidePill";
import CAJILogo from "./CAJILogo";

// ─── Shared types ───

interface SlideBaseProps {
  slideNumber: number;
  totalSlides: number;
}

// ─── 1. TITLE SLIDE ───

interface TitleSlideProps extends SlideBaseProps {
  headline: ReactNode;
  subtitle: string;
  subtitleTyped?: string;
  meta?: string;
  heroImage?: string;
  heroAlt?: string;
}

export const TitleSlideTemplate = ({
  slideNumber, totalSlides, headline, subtitle, subtitleTyped, meta, heroImage, heroAlt = "Visual",
}: TitleSlideProps) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides} showConfidentiality={false}>
    <div className="flex h-full">
      <div className="flex-1 flex flex-col justify-between p-[80px]">
        <CAJILogo />
        <div>
          <h1 className="text-[88px] font-semibold leading-[1.05] text-slide-primary">
            {headline}
          </h1>
          <p className="mt-8 text-[20px] font-semibold text-slide-foreground max-w-[640px] leading-snug">
            {subtitle}
          </p>
          {subtitleTyped && (
            <p
              className="mt-4 text-[20px] font-medium text-slide-primary max-w-[640px] leading-snug"
              style={{ animation: "fade-in 0.5s ease-out 0.4s both" }}
            >
              {subtitleTyped}
            </p>
          )}
          {meta && (
            <div className="mt-6 text-[13px] text-slide-muted/60 tracking-widest uppercase leading-relaxed">
              {meta.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="w-[45%] flex items-center justify-center bg-slide-surface">
        {heroImage && (
          <img
            src={heroImage}
            alt={heroAlt}
            width={780}
            height={900}
            loading="eager"
            fetchPriority="high"
            className="w-[85%] h-auto object-contain"
          />
        )}
      </div>
    </div>
  </SlideLayout>
);

// ─── 2. AGENDA SLIDE ───

interface AgendaItem {
  num: string;
  label: string;
}

interface AgendaSlideProps extends SlideBaseProps {
  items: AgendaItem[];
}

export const AgendaSlideTemplate = ({ slideNumber, totalSlides, items }: AgendaSlideProps) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <div className="mb-12">
        <SlidePill label="AGENDA" variant="light" />
      </div>
      <div className="flex-1 flex items-center">
        <div className="w-full grid grid-cols-2 gap-x-20 gap-y-2">
          {items.map((item) => (
            <div key={item.num} className="flex items-center gap-8 py-6 border-b border-slide-foreground/8">
              <span className="text-[40px] font-semibold text-slide-primary/20 w-[100px] tabular-nums">{item.num}</span>
              <span className="text-[24px] font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

// ─── 3. SECTION DIVIDER ───

interface SectionDividerProps extends SlideBaseProps {
  sectionLabel: string;
  title: string;
  subtitle: string;
  sectionNumber: string; // e.g. "/01"
}

export const SectionDividerTemplate = ({
  slideNumber, totalSlides, sectionLabel, title, subtitle, sectionNumber,
}: SectionDividerProps) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex h-full">
      <div className="flex-1 flex flex-col justify-center p-[80px]">
        <SlidePill label={sectionLabel} variant="light" />
        <h2 className="mt-10 text-[40px] font-semibold leading-[1.05]">{title}</h2>
        <p className="mt-8 text-[20px] text-slide-muted max-w-[700px] leading-relaxed">{subtitle}</p>
      </div>
      <div className="w-[35%] bg-slide-surface" />
    </div>
    <div className="absolute top-[80px] right-[80px] text-[120px] font-semibold text-slide-primary/12">
      {sectionNumber}
    </div>
  </SlideLayout>
);

// ─── 4. MISSION WHITE ───

interface MissionCard {
  title: string;
  desc: string;
}

interface MissionWhiteProps extends SlideBaseProps {
  pillLabel: string;
  headline: string;
  subtitle: string;
  cards: MissionCard[];
}

export const MissionWhiteTemplate = ({
  slideNumber, totalSlides, pillLabel, headline, subtitle, cards,
}: MissionWhiteProps) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <SlidePill label={pillLabel} variant="light" />
      <div className="flex-1 flex flex-col justify-center max-w-[1200px]">
        <h2 className="text-[40px] font-semibold leading-[1.15]">{headline}</h2>
        <p className="mt-8 text-[20px] text-slide-muted max-w-[800px] leading-relaxed">{subtitle}</p>
      </div>
      <div className={`grid grid-cols-${cards.length} gap-6`}>
        {cards.map((item) => (
          <div key={item.title} className="bg-slide-surface rounded-[6px] p-8">
            <h3 className="text-[24px] font-semibold mb-2">{item.title}</h3>
            <p className="text-[20px] text-slide-muted">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

// ─── 5. MISSION DARK (Full-screen dramatic statement) ───

interface MissionDarkProps extends SlideBaseProps {
  pillLabel?: string;
  headline: string;
  backgroundImage: string;
}

export const MissionDarkTemplate = ({
  slideNumber, totalSlides, pillLabel, headline, backgroundImage,
}: MissionDarkProps) => (
  <SlideLayout variant="dark" backgroundImage={backgroundImage} slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col items-center justify-center h-full text-center p-[80px]">
      {pillLabel && <SlidePill label={pillLabel} variant="glass" />}
      <h2
        className={`${pillLabel ? "mt-10" : ""} text-[40px] font-semibold leading-[1.2] max-w-[1400px]`}
        style={{ animation: "slide-up 1.2s ease-out 0.3s both" }}
      >
        {headline}
      </h2>
    </div>
  </SlideLayout>
);

// ─── 6. QUOTE ───

interface QuoteSlideProps extends SlideBaseProps {
  pillLabel?: string;
  quote: string;
  attribution: string;
  attributionSub?: string;
  bottomContent?: ReactNode;
}

export const QuoteSlideTemplate = ({
  slideNumber, totalSlides, pillLabel, quote, attribution, attributionSub, bottomContent,
}: QuoteSlideProps) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      {pillLabel && <SlidePill label={pillLabel} variant="light" />}
      <div className="flex-1 flex flex-col justify-center">
        <div className="w-12 h-px bg-slide-primary mb-10" />
        <blockquote className="text-[40px] font-semibold leading-[1.3] max-w-[1200px]">
          {quote}
        </blockquote>
        <p className="mt-6 text-[20px] text-slide-muted">{`— ${attribution}`}</p>
        {attributionSub && <p className="text-[20px] text-slide-muted">{attributionSub}</p>}
        {bottomContent}
      </div>
    </div>
  </SlideLayout>
);

// ─── 7. TWO-COLUMN NUMBERED ───

interface NumberedItem {
  num: string;
  title: string;
  desc: string;
}

interface TwoColumnNumberedProps extends SlideBaseProps {
  pillLabel: string;
  headline: string;
  items: NumberedItem[];
  columns?: 2 | 4;
}

export const TwoColumnNumberedTemplate = ({
  slideNumber, totalSlides, pillLabel, headline, items, columns = 2,
}: TwoColumnNumberedProps) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <div className="mb-12">
        <SlidePill label={pillLabel} variant="light" />
      </div>
      <h2 className="text-[40px] font-semibold leading-[1.1] mb-16">{headline}</h2>
      <div className={`flex-1 grid grid-cols-${columns} gap-16`}>
        {items.map((item) => (
          <div key={item.num}>
            <div className="text-[64px] font-semibold text-slide-primary/15 leading-none mb-3 tabular-nums">{item.num}</div>
            <h3 className="text-[24px] font-semibold mb-3">{item.title}</h3>
            <p className="text-[20px] text-slide-muted leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

// ─── 8. TWO-COLUMN FREE-FORM (Executive Summary style) ───

interface TwoColumnFreeformProps extends SlideBaseProps {
  pillLabel: string;
  subtitle?: string;
  leftContent: ReactNode;
  rightContent: ReactNode;
}

export const TwoColumnFreeformTemplate = ({
  slideNumber, totalSlides, pillLabel, subtitle, leftContent, rightContent,
}: TwoColumnFreeformProps) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <div className="mb-12">
        <SlidePill label={pillLabel} variant="light" />
      </div>
      {subtitle && (
        <p className="text-[20px] text-slide-muted max-w-[1400px] leading-relaxed mb-12">{subtitle}</p>
      )}
      <div className="flex-1 grid grid-cols-2 gap-16">
        <div>{leftContent}</div>
        <div>{rightContent}</div>
      </div>
    </div>
  </SlideLayout>
);

// ─── 9. BIG NUMBERS (Blue) ───

interface BigNumberStat {
  num: string;
  label: string;
  sub: string;
}

interface BigNumbersProps extends SlideBaseProps {
  pillLabel: string;
  subtitle?: string;
  stats: BigNumberStat[];
  source?: string;
}

export const BigNumbersTemplate = ({
  slideNumber, totalSlides, pillLabel, subtitle, stats, source,
}: BigNumbersProps) => (
  <SlideLayout variant="blue" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <SlidePill label={pillLabel} variant="glass" />
      {subtitle && <p className="mt-6 text-[20px] text-primary-foreground/80 max-w-[1000px]">{subtitle}</p>}
      <div className="flex-1 flex items-center">
        <div className={`grid grid-cols-${stats.length} gap-12 w-full`}>
          {stats.map((stat) => (
            <div key={stat.num} className="text-center">
              <div className="text-[56px] font-semibold leading-none tabular-nums">{stat.num}</div>
              <p className="text-[20px] font-semibold mt-4">{stat.label}</p>
              <p className="text-[16px] text-primary-foreground/60 mt-2">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
      {source && <p className="text-[13px] text-primary-foreground/40">{source}</p>}
    </div>
  </SlideLayout>
);

// ─── 10. SERVICES GRID ───

interface ServiceCard {
  title: string;
  desc?: string;
  items?: string[];
}

interface ServicesGridProps extends SlideBaseProps {
  pillLabel: string;
  headline: string;
  cards: ServiceCard[];
  columns?: 2 | 3;
}

export const ServicesGridTemplate = ({
  slideNumber, totalSlides, pillLabel, headline, cards, columns = 3,
}: ServicesGridProps) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <div className="mb-12">
        <SlidePill label={pillLabel} variant="light" />
      </div>
      <h2 className="text-[40px] font-semibold leading-[1.1] mb-16">{headline}</h2>
      <div className={`flex-1 grid grid-cols-${columns} gap-8`}>
        {cards.map((card, i) => (
          <div key={card.title} className="bg-slide-surface rounded-[6px] p-8 flex flex-col" style={{ animation: `slide-up 0.5s ease-out ${0.3 + i * 0.15}s both` }}>
            <div className="w-10 h-1 bg-slide-primary rounded-sm mb-4" style={{ animation: `draw-line 0.4s ease-out ${0.5 + i * 0.15}s both` }} />
            <h3 className="text-[24px] font-semibold mb-3">{card.title}</h3>
            {card.desc && <p className="text-[20px] text-slide-muted leading-relaxed">{card.desc}</p>}
            {card.items && (
              <ul className="space-y-3">
                {card.items.map((item) => (
                  <li key={item} className="text-[20px] text-slide-muted leading-relaxed flex items-start gap-3">
                    <span className="w-1.5 h-1.5 mt-2.5 bg-slide-primary inline-block shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

// ─── 11. PROCESS / STEPS ───

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

interface ProcessSlideProps extends SlideBaseProps {
  pillLabel: string;
  headline: string;
  steps: ProcessStep[];
}

export const ProcessSlideTemplate = ({
  slideNumber, totalSlides, pillLabel, headline, steps,
}: ProcessSlideProps) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <SlidePill label={pillLabel} variant="light" />
      <h2 className="mt-8 text-[40px] font-semibold leading-[1.1] mb-12">{headline}</h2>
      <div className="flex-1 flex items-center">
        <div className={`grid grid-cols-${steps.length} gap-6 w-full`}>
          {steps.map((item) => (
            <div key={item.step} className="bg-slide-primary/8 rounded-[6px] p-6 flex flex-col h-full border-t-[3px] border-slide-primary">
              <span className="text-[40px] font-semibold text-slide-primary tabular-nums">{item.step}</span>
              <h3 className="text-[24px] font-semibold mt-3 mb-3">{item.title}</h3>
              <p className="text-[16px] text-slide-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

// ─── 12. IMAGE + TEXT ───

interface InlineStat {
  num: string;
  label: string;
}

interface ImageTextProps extends SlideBaseProps {
  pillLabel: string;
  headline: string;
  paragraphs: string[];
  image: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  stats?: InlineStat[];
}

export const ImageTextTemplate = ({
  slideNumber, totalSlides, pillLabel, headline, paragraphs, image, imageAlt = "", imagePosition = "left", stats,
}: ImageTextProps) => {
  const imageEl = (
    <div className="w-[45%] bg-slide-surface">
      <img
        src={image}
        alt={imageAlt}
        width={864}
        height={1080}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </div>
  );
  const textEl = (
    <div className="flex-1 flex flex-col justify-center p-[80px]">
      <SlidePill label={pillLabel} variant="light" />
      <h2 className="mt-8 text-[40px] font-semibold leading-[1.1]">{headline}</h2>
      {paragraphs.map((p, i) => (
        <p key={i} className="mt-4 text-[20px] text-slide-muted leading-relaxed">{p}</p>
      ))}
      {stats && (
        <div className="mt-10 flex gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-slide-surface rounded-[6px] px-6 py-4 text-center">
              <div className="text-[24px] font-semibold text-slide-primary tabular-nums">{s.num}</div>
              <div className="text-[13px] text-slide-muted">{s.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="flex h-full">
        {imagePosition === "left" ? <>{imageEl}{textEl}</> : <>{textEl}{imageEl}</>}
      </div>
    </SlideLayout>
  );
};

// ─── 13. COMPARISON (Two-panel) ───

interface ComparisonPanelProps extends SlideBaseProps {
  pillLabel: string;
  headline: string;
  leftTitle: string;
  leftItems: string[];
  rightTitle: string;
  rightItems: string[];
}

export const ComparisonTemplate = ({
  slideNumber, totalSlides, pillLabel, headline, leftTitle, leftItems, rightTitle, rightItems,
}: ComparisonPanelProps) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <SlidePill label={pillLabel} variant="light" />
      <h2 className="mt-8 text-[40px] font-semibold leading-[1.1] mb-12 anim-fade-up stagger-1">{headline}</h2>
      <div className="flex-1 grid grid-cols-2 gap-0">
        <div className="bg-slide-surface rounded-[6px] p-10 flex flex-col gap-6 anim-slide-left stagger-2">
          <h3 className="text-[24px] font-semibold text-slide-muted mb-2">{leftTitle}</h3>
          {leftItems.map((item, i) => (
            <div key={item} className="flex items-center gap-4 text-[20px] text-slide-muted" style={{ animation: `fade-in 0.4s ease-out ${0.4 + i * 0.12}s both` }}>
              <span className="w-6 h-6 rounded-sm bg-slide-muted/20 flex items-center justify-center text-slide-muted">
                <XIcon size={14} aria-hidden="true" />
              </span>
              {item}
            </div>
          ))}
        </div>
        <div className="bg-slide-primary rounded-[6px] p-10 flex flex-col gap-6 text-primary-foreground anim-slide-right stagger-2">
          <h3 className="text-[24px] font-semibold mb-2">{rightTitle}</h3>
          {rightItems.map((item, i) => (
            <div key={item} className="flex items-center gap-4 text-[20px]" style={{ animation: `fade-in 0.4s ease-out ${0.4 + i * 0.12}s both` }}>
              <span className="w-6 h-6 rounded-sm bg-slide-bg/20 flex items-center justify-center">
                <Check size={14} aria-hidden="true" />
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

// ─── 14. MULTI-COLUMN TABLE ───

interface TableColumn {
  title: string;
  items: string[];
}

interface MultiColumnTableProps extends SlideBaseProps {
  pillLabel: string;
  headline: string;
  columns: TableColumn[];
  footer?: string;
}

export const MultiColumnTableTemplate = ({
  slideNumber, totalSlides, pillLabel, headline, columns, footer,
}: MultiColumnTableProps) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <SlidePill label={pillLabel} variant="light" />
      <h2 className="mt-8 text-[40px] font-semibold leading-[1.1] mb-12">{headline}</h2>
      <div className={`flex-1 grid grid-cols-${columns.length} gap-4`}>
        {columns.map((col) => (
          <div key={col.title} className="bg-slide-surface rounded-[6px] p-6">
            <h3 className="text-[24px] font-semibold mb-4 text-slide-primary">{col.title}</h3>
            <ul className="space-y-2">
              {col.items.map((item) => (
                <li key={item} className="text-[16px] text-slide-muted leading-relaxed flex items-start gap-2">
                  <span className="w-1 h-1 mt-2.5 bg-slide-primary shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {footer && <p className="mt-6 text-[20px] font-semibold text-slide-primary">{footer}</p>}
    </div>
  </SlideLayout>
);

// ─── 15. TEAM (with photos) ───

interface TeamMember {
  name: string;
  role: string;
  photo?: string;
  bio?: string;
  specialty?: string;
}

interface TeamSlideProps extends SlideBaseProps {
  pillLabel: string;
  headline: string;
  members: TeamMember[];
  columns?: 3 | 4;
}

export const TeamSlideTemplate = ({
  slideNumber, totalSlides, pillLabel, headline, members, columns = 3,
}: TeamSlideProps) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <div className="mb-8">
        <SlidePill label={pillLabel} variant="light" />
      </div>
      <h2 className="text-[40px] font-semibold leading-[1.1] mb-10">{headline}</h2>
      <div className={`flex-1 grid grid-cols-${columns} gap-10`}>
        {members.map((person) => (
          <div key={person.name} className="flex flex-col">
            <div className={`aspect-[${columns === 3 ? "4/3" : "3/4"}] bg-slide-surface rounded-sm mb-5 overflow-hidden`}>
              {person.photo && (
                <img
                  src={person.photo}
                  alt={person.name}
                  width={400}
                  height={400}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <h3 className="text-[24px] font-semibold">{person.name}</h3>
            <p className="text-[20px] text-slide-primary font-semibold">{person.role}</p>
            {person.bio && <p className="text-[16px] text-slide-muted mt-2 leading-relaxed">{person.bio}</p>}
            {person.specialty && <p className="text-[16px] text-slide-muted mt-1">{person.specialty}</p>}
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

// ─── 16. PR STATS (Image + Stats) ───

interface PRStat {
  number: string;
  label: string;
}

interface PRStatsProps extends SlideBaseProps {
  pillLabel: string;
  headline: string;
  image: string;
  imageAlt?: string;
  stats: PRStat[];
  introText?: string;
}

export const PRStatsTemplate = ({
  slideNumber, totalSlides, pillLabel, headline, image, imageAlt = "", stats, introText,
}: PRStatsProps) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full">
      <div className="p-[80px] pb-0">
        <h2 className="text-[40px] font-semibold leading-[1.05] max-w-[1100px]">{headline}</h2>
        <div className="absolute top-[80px] right-[80px]">
          <SlidePill label={pillLabel} variant="light" />
        </div>
      </div>
      <div className="flex flex-1 mt-10 px-[80px] gap-12">
        <div className="w-[45%] rounded-[6px] overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            width={864}
            height={920}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center gap-6">
          {introText && <p className="text-[20px] text-slide-muted leading-relaxed mb-4">{introText}</p>}
          {stats.map((stat) => (
            <div key={stat.number} className="border-b border-slide-foreground/10 pb-6">
              <div className="text-[40px] font-semibold tabular-nums">{stat.number}</div>
              <p className="text-[20px] text-slide-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

// ─── 17. CASE STUDY DARK ───

interface CaseStudyStat {
  num: string;
  label: string;
}

interface CaseStudyDarkProps extends SlideBaseProps {
  pillLabel: string;
  headline: string;
  description?: string;
  stats?: CaseStudyStat[];
  backgroundImage: string;
  cards?: { title: string; desc: string }[];
  footer?: ReactNode;
}

export const CaseStudyDarkTemplate = ({
  slideNumber, totalSlides, pillLabel, headline, description, stats, backgroundImage, cards, footer,
}: CaseStudyDarkProps) => (
  <SlideLayout variant="dark" backgroundImage={backgroundImage} slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <SlidePill label={pillLabel} variant="glass" />
      <div className="flex-1 flex flex-col justify-center max-w-[1200px]">
        <h2 className="text-[40px] font-semibold leading-[1.1]">{headline}</h2>
        {description && <p className="mt-8 text-[20px] text-primary-foreground/70 leading-relaxed">{description}</p>}
        {stats && (
          <div className={`mt-12 grid grid-cols-${stats.length} gap-8`}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-[40px] font-semibold text-slide-primary tabular-nums">{stat.num}</div>
                <p className="text-[20px] text-primary-foreground/60">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
        {cards && (
          <div className={`mt-10 grid grid-cols-${cards.length > 3 ? 2 : cards.length} gap-8`}>
            {cards.map((card) => (
              <div key={card.title} className="bg-slide-bg/10 backdrop-blur rounded-[6px] p-8">
                <h3 className="text-[24px] font-semibold mb-3">{card.title}</h3>
                <p className="text-[20px] text-primary-foreground/70 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        )}
        {footer}
      </div>
    </div>
  </SlideLayout>
);

// ─── 18. CTA / EMERGENCY (Blue) ───

interface CTASlideProps extends SlideBaseProps {
  pillLabel: string;
  headline: string;
  subtitle: string;
}

export const CTASlideTemplate = ({
  slideNumber, totalSlides, pillLabel, headline, subtitle,
}: CTASlideProps) => (
  <SlideLayout variant="blue" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col items-center justify-center h-full text-center p-[80px]">
      <SlidePill label={pillLabel} variant="glass" />
      <h2 className="mt-10 text-[40px] font-semibold leading-[1.1] max-w-[1300px]">{headline}</h2>
      <p className="mt-8 text-[20px] text-primary-foreground/80 max-w-[900px] leading-relaxed">{subtitle}</p>
    </div>
  </SlideLayout>
);

// ─── 19. THANK YOU ───

interface ThankYouProps extends SlideBaseProps {
  message: string;
  contactItems: string[];
}

export const ThankYouTemplate = ({
  slideNumber, totalSlides, message, contactItems,
}: ThankYouProps) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides} showConfidentiality={false}>
    <div className="flex flex-col items-center justify-center h-full text-center p-[80px]">
      <CAJILogo className="mb-16" />
      <h2 className="text-[88px] font-semibold leading-none text-slide-primary">Thank you</h2>
      <p className="mt-8 text-[20px] text-slide-muted max-w-[700px]">{message}</p>
      <div className="mt-16 flex gap-16 text-[20px] text-slide-muted">
        {contactItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  </SlideLayout>
);

// ─── 20. CONTACT ───

interface ContactSlideProps extends SlideBaseProps {
  email: string;
  phone: string;
  website: string;
  socialLinks?: string[];
  ctaLabel?: string;
}

export const ContactSlideTemplate = ({
  slideNumber, totalSlides, email, phone, website, socialLinks, ctaLabel = "Book a Consultation",
}: ContactSlideProps) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides} showConfidentiality={false}>
    <div className="flex flex-col h-full p-[80px]">
      <div className="flex justify-between items-start">
        <span className="text-[24px] font-semibold">Contact us</span>
        <span className="text-[20px] text-slide-muted">We're always here and ready to assist.</span>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-[88px] font-semibold leading-none">Get in touch</h2>
        <div className="mt-12 space-y-4">
          <p className="text-[24px]">{email}</p>
          <p className="text-[24px]">{phone}</p>
          <p className="text-[24px] text-slide-muted">{website}</p>
        </div>
      </div>
      <div className="flex items-end justify-between">
        {socialLinks && (
          <div className="flex gap-8 text-[20px] text-slide-muted">
            {socialLinks.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        )}
        <button className="bg-slide-foreground text-primary-foreground px-10 py-5 rounded-sm text-[20px] font-semibold">
          {ctaLabel}
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden opacity-[0.025] pointer-events-none">
        <span className="text-[160px] font-semibold tracking-tighter text-slide-foreground">CAJI</span>
      </div>
    </div>
  </SlideLayout>
);

// ─── 21. COMPETITIVE TABLE (grid-based) ───

interface CompetitiveRow {
  firm: string;
  strength: string;
  weakness: string;
  scale: string;
  advantage: string;
}

interface CompetitiveTableProps extends SlideBaseProps {
  pillLabel: string;
  headline: string;
  rows: CompetitiveRow[];
}

export const CompetitiveTableTemplate = ({
  slideNumber, totalSlides, pillLabel, headline, rows,
}: CompetitiveTableProps) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <SlidePill label={pillLabel} variant="light" />
      <h2 className="mt-8 text-[40px] font-semibold leading-[1.1] mb-10">{headline}</h2>
      <div className="flex-1 overflow-hidden">
        <div className="w-full">
          <div className="grid grid-cols-[180px_1fr_1fr_120px_1fr] gap-0 text-[16px]">
            <div className="bg-slide-primary text-primary-foreground p-4 rounded-tl-xl font-semibold">Firm</div>
            <div className="bg-slide-primary text-primary-foreground p-4 font-semibold">Strength</div>
            <div className="bg-slide-primary text-primary-foreground p-4 font-semibold">Weakness</div>
            <div className="bg-slide-primary text-primary-foreground p-4 font-semibold">Scale</div>
            <div className="bg-slide-primary text-primary-foreground p-4 rounded-tr-xl font-semibold">Advantage</div>
            {rows.map((row, i) => (
              <div key={row.firm} className="contents">
                <div className={`p-4 font-semibold border-b border-slide-foreground/8 ${i % 2 === 0 ? "bg-slide-surface" : ""}`}>{row.firm}</div>
                <div className={`p-4 text-slide-muted border-b border-slide-foreground/8 ${i % 2 === 0 ? "bg-slide-surface" : ""}`}>{row.strength}</div>
                <div className={`p-4 text-slide-muted border-b border-slide-foreground/8 ${i % 2 === 0 ? "bg-slide-surface" : ""}`}>{row.weakness}</div>
                <div className={`p-4 text-slide-muted border-b border-slide-foreground/8 ${i % 2 === 0 ? "bg-slide-surface" : ""}`}>{row.scale}</div>
                <div className={`p-4 font-medium text-slide-primary border-b border-slide-foreground/8 ${i % 2 === 0 ? "bg-slide-surface" : ""}`}>{row.advantage}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

// ─── 22. TRACK RECORD CARDS ───

interface TrackRecordCard {
  region: string;
  title: string;
  desc: string;
  tag: string;
}

interface TrackRecordProps extends SlideBaseProps {
  pillLabel: string;
  headline: string;
  cards: TrackRecordCard[];
}

export const TrackRecordTemplate = ({
  slideNumber, totalSlides, pillLabel, headline, cards,
}: TrackRecordProps) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <div className="mb-12">
        <SlidePill label={pillLabel} variant="light" />
      </div>
      <h2 className="text-[40px] font-semibold leading-[1.1] mb-16">{headline}</h2>
      <div className={`flex-1 grid grid-cols-${cards.length} gap-8`}>
        {cards.map((card) => (
          <div key={card.title} className="bg-slide-surface rounded-[6px] p-8 flex flex-col">
            <div className="w-8 h-1 bg-slide-primary rounded-sm mb-3" />
            <p className="text-[13px] text-slide-primary font-semibold uppercase tracking-wider mb-2">{card.region}</p>
            <h3 className="text-[24px] font-semibold mb-3">{card.title}</h3>
            <p className="text-[20px] text-slide-muted leading-relaxed flex-1">{card.desc}</p>
            <p className="text-[13px] text-slide-muted/70 mt-4 pt-4 border-t border-slide-foreground/8">{card.tag}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

// ─── 23. NEXT STEPS + CONTACT ───

interface NextStepsProps extends SlideBaseProps {
  pillLabel: string;
  headline: string;
  steps: ProcessStep[];
  contactName: string;
  contactRole: string;
  contactDetails: string;
  contactAddress?: string;
}

export const NextStepsTemplate = ({
  slideNumber, totalSlides, pillLabel, headline, steps, contactName, contactRole, contactDetails, contactAddress,
}: NextStepsProps) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides} showConfidentiality={false}>
    <div className="flex flex-col h-full p-[80px]">
      <SlidePill label={pillLabel} variant="light" />
      <h2 className="mt-8 text-[40px] font-semibold leading-[1.1] mb-6">{headline}</h2>
      <div className="flex-1 flex items-center">
        <div className={`grid grid-cols-${steps.length} gap-8 w-full`}>
          {steps.map((item) => (
            <div key={item.step} className="bg-slide-primary/10 rounded-[6px] p-8">
              <span className="text-[40px] font-semibold text-slide-primary tabular-nums">{item.step}</span>
              <h3 className="text-[24px] font-semibold mt-4 mb-3">{item.title}</h3>
              <p className="text-[20px] text-slide-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex items-end justify-between">
        <div>
          <p className="text-[24px] font-semibold">{contactName}</p>
          <p className="text-[16px] text-slide-primary font-semibold">{contactRole}</p>
          <p className="text-[16px] text-slide-muted mt-2">{contactDetails}</p>
          {contactAddress && <p className="text-[13px] text-slide-muted">{contactAddress}</p>}
        </div>
      </div>
    </div>
  </SlideLayout>
);
