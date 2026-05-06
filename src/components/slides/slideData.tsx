import { ReactNode, useState, useEffect } from "react";
import {
  TitleSlideTemplate,
  MissionWhiteTemplate,
  MissionDarkTemplate,
  QuoteSlideTemplate,
  ServicesGridTemplate,
  TwoColumnNumberedTemplate,
  ProcessSlideTemplate,
  MultiColumnTableTemplate,
  ComparisonTemplate,
  ContactSlideTemplate,
} from "./slideTemplates";
import SlideLayout from "./SlideLayout";
import SlidePill from "./SlidePill";
import CAJILogo from "./CAJILogo";
import detentionCell from "@/assets/uzbek-detention-cell.jpg";
import nbuLogo from "@/assets/nbu-logo.png";
import uktamPhoto from "@/assets/uktam-photo.jpg";
import mirsoatovPhoto from "@/assets/mirsoatov-photo.jpg";
import poletaevPhoto from "@/assets/poletaev-photo.jpg";
import { Youtube, Instagram, Send, AtSign, Music } from "lucide-react";
import CapTableBar from "./charts/CapTableBar";
import ProportionalTimeline from "./charts/ProportionalTimeline";
import DualRoleDiagram from "./charts/DualRoleDiagram";
import DetentionScale from "./charts/DetentionScale";
import HierarchyLadder from "./charts/HierarchyLadder";
import FdiBars from "./charts/FdiBars";
import ManagementRoster from "./charts/ManagementRoster";

const DETENTION_DATE = new Date("2026-03-27T00:00:00+05:00"); // Tashkent time

const DetentionCounter = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const diff = now.getTime() - DETENTION_DATE.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  const units = [
    { value: days, label: "DAYS" },
    { value: hours, label: "HOURS" },
    { value: minutes, label: "MINUTES" },
  ];

  return (
    <div className="flex gap-6">
      {units.map((u) => (
        <div key={u.label} className="flex flex-col items-center" style={{ minWidth: 80 }}>
          <span
            className="text-[56px] font-bold leading-none text-primary-foreground"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="text-[13px] tracking-[0.2em] text-primary-foreground/50 mt-2">{u.label}</span>
        </div>
      ))}
    </div>
  );
};

// X (Twitter) icon - lucide doesn't have it
const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export interface SlideData {
  id: string;
  title: string;
  component: (props: { slideNumber: number; totalSlides: number }) => ReactNode;
}

// Disclaimer slide object - placed near end of deck
const disclaimerSlide: SlideData = {
  id: "solfy-disclaimer",
  title: "Disclaimer",
  component: (props) => (
    <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides} showConfidentiality={false}>
      <div className="flex flex-col h-full p-[80px]">
        <CAJILogo />
        <div className="flex-1 flex flex-col justify-center max-w-[1500px]">
          <SlidePill label="BRIEFING NOTICE" />
          <h2 className="text-[40px] font-bold text-slide-foreground mt-6 leading-tight">
            Notice on sources, scope, and distribution
          </h2>
          <div className="mt-10 space-y-8 text-[22px] leading-[1.7] text-slide-muted">
            <div>
              <h3 className="text-[26px] font-bold text-slide-foreground mb-3">About this briefing</h3>
              <p>This document presents CAJI’s analysis of publicly available information and materials provided by parties aligned with the investor side of the Solfy CA dispute. CAJI has not had access to materials, evidence, or legal positions held by the National Bank of Uzbekistan or the Government of Uzbekistan, and the characterizations contained herein reflect one interpretation of contested facts. Readers conducting their own due diligence should seek information directly from all parties to the dispute.</p>
            </div>
            <div>
              <h3 className="text-[26px] font-bold text-slide-foreground mb-3">About distribution</h3>
              <p>This briefing has been prepared by Central Asia Justice Initiative for distribution to international financial institutions, correspondent banks, regulators, rating agencies, and members of the press. CAJI welcomes redistribution and citation with attribution.</p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  ),
};

export const slides: SlideData[] = [
  // ═══ 1. TITLE ═══
  {
    id: "solfy-title",
    title: "Investor Alert",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides} showConfidentiality={false}>
        <div className="flex h-full">
          <div className="flex-1 flex flex-col justify-between p-[80px]">
            <CAJILogo className="anim-fade-in stagger-1" />
            <div>
              <h1 className="text-[88px] font-display font-semibold leading-[1.05] tracking-normal text-slide-primary text-balance anim-fade-up stagger-2">
                Investor alert.
              </h1>
              <p className="mt-8 text-[20px] font-semibold text-slide-foreground max-w-[640px] leading-snug anim-fade-up stagger-3">
                Selective Criminal Prosecution Used as Commercial Leverage by the National Bank of Uzbekistan.
              </p>
              <p className="mt-4 text-[20px] font-medium text-slide-primary max-w-[640px] leading-snug tracking-tight anim-fade-up stagger-4">
                A Confidential Briefing for International Financial Institutions, Correspondent Banks, and the Investor Community.
              </p>
              <div className="mt-6 text-[13px] text-slide-muted/60 tracking-widest uppercase leading-relaxed anim-fade-in stagger-5">
                <div>Confidential</div>
                <div>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                <div>Prepared by Central Asia Justice Initiative</div>
              </div>
            </div>
          </div>
          {/* Narrative hook */}
          <div className="w-[45%] flex flex-col justify-center px-16 gap-12 bg-slide-foreground">
            {[
              "A foreign investor’s fintech venture in Uzbekistan.",
              "A state bank that files criminal charges during settlement talks.",
              "A CEO detained as leverage.",
            ].map((line, i) => (
              <div key={i} className="flex items-start gap-5" style={{ animation: `slide-up 0.5s ease-out ${0.4 + i * 0.15}s both` }}>
                <div className="w-10 h-px bg-slide-primary mt-3 shrink-0" />
                <p className="text-[20px] text-primary-foreground/80 font-medium leading-snug">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </SlideLayout>
    ),
  },

  // ═══ 2. PURPOSE ═══
  {
    id: "solfy-purpose",
    title: "Purpose of This Briefing",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <div className="flex items-center justify-between mb-8">
            <SlidePill label="PURPOSE OF THIS BRIEFING" />
            <CAJILogo />
          </div>
          <h2 className="text-[40px] font-semibold leading-[1.1] mb-4 anim-fade-up stagger-1">
            Why this briefing exists
          </h2>
          <p className="text-[20px] text-slide-muted leading-relaxed max-w-[1100px] mb-12 anim-fade-up stagger-2">
            A fintech executive detained in Uzbekistan under circumstances that raise material concerns about rule of law and the investment climate.
          </p>
          <div className="grid grid-cols-3 gap-8 flex-1">
            <div className="flex flex-col gap-6 anim-fade-up stagger-3">
              <div className="bg-slide-surface rounded-sm p-8 flex-1">
                <h3 className="text-[24px] font-bold mb-4">The Situation</h3>
                <p className="text-[20px] text-slide-muted leading-relaxed">
                  NBU simultaneously holds equity in a joint venture and filed the criminal complaint against its director during active settlement negotiations.
                </p>
              </div>
              <div className="bg-slide-surface rounded-sm p-8 flex-1">
                <h3 className="text-[24px] font-bold mb-4">The Audience</h3>
                <p className="text-[20px] text-slide-muted leading-relaxed">
                  IFI compliance officers, correspondent bank risk teams, eurobond investors, and rating agency analysts with NBU exposure.
                </p>
              </div>
            </div>
            <div className="bg-slide-surface rounded-sm p-8 anim-fade-up stagger-4">
              <h3 className="text-[24px] font-bold mb-6">Key Questions</h3>
              <div className="space-y-5">
                {[
                  "Was criminal prosecution used as commercial leverage during settlement talks?",
                  "Does NBU’s dual role as shareholder and complainant represent a conflict of interest?",
                  "What are the implications for international investors and correspondent banks?",
                ].map((q, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-[24px] font-semibold text-slide-primary leading-none mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-[20px] text-slide-muted leading-relaxed">{q}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6 anim-fade-up stagger-5">
              <a
                href="https://www.caji.org"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-slide-primary hover:bg-slide-primary/90 text-primary-foreground rounded-sm p-8 transition-[background-color,transform,box-shadow] duration-300 block flex-1"
              >
                <div className="relative">
                  <p className="text-[13px] tracking-[0.15em] uppercase opacity-70 mb-3">Schedule Now</p>
                  <h4 className="text-[24px] font-bold mb-3">Book a Confidential Briefing</h4>
                  <p className="text-[16px] opacity-80 leading-relaxed">30-minute Zoom call with CAJI’s Board of Directors or Legal Counsel.</p>
                  <div className="flex items-center gap-2 mt-5 text-[16px] font-semibold opacity-90">
                    <span>Request a Time</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </a>
              <div className="bg-slide-foreground/5 rounded-sm p-6 border border-slide-foreground/10 space-y-2">
                <p className="text-[13px] tracking-[0.15em] uppercase text-slide-muted/70">Briefing Held With</p>
                <p className="text-[16px] text-slide-foreground leading-relaxed font-semibold">CAJI Board of Directors</p>
                <p className="text-[16px] text-slide-muted leading-relaxed">or Legal Counsel — Keith Silverstein, Esq.</p>
              </div>
            </div>
          </div>
          <p className="text-[13px] text-slide-muted/60 mt-6 text-center">
            Prepared by Central Asia Justice Initiative
          </p>
        </div>
      </SlideLayout>
    ),
  },

  // ═══ 3. INVESTORS ARE WATCHING (macro frame opener) ═══
  {
    id: "solfy-investors-watching",
    title: "Investors Are Watching",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <div className="flex items-center justify-between mb-10">
            <SlidePill label="MACRO FRAME" />
            <CAJILogo />
          </div>
          <h2 className="text-[40px] font-semibold leading-[1.1] mb-12 anim-fade-up stagger-1">
            Investors are watching
          </h2>
          <div className="flex-1 grid grid-cols-3 gap-12 items-center">
            <div className="col-span-2 anim-fade-up stagger-2">
              <div className="w-24 h-px bg-slide-primary mb-8" />
              <blockquote
                className="font-display text-[42px] leading-[1.25] text-slide-foreground italic"
                style={{ fontFamily: "var(--font-serif, 'Cormorant Garamond', Cormorant, Georgia, serif)" }}
              >
                &ldquo;Investors doing due diligence on Uzbekistan are not only reading the Bloomberg coverage of new listings rules &mdash; they are also reading cases like this one, and the conclusions they draw from it affect allocation decisions.&rdquo;
              </blockquote>
              <p className="mt-8 text-[18px] text-slide-muted leading-relaxed">
                &mdash; Matt Emma, <span className="italic">International Business Times</span>, 16 March 2026
                <span className="block text-[14px] text-slide-muted/70 mt-1">11 days before the Hasanov arrest</span>
              </p>
            </div>
            <div className="flex flex-col gap-5 anim-fade-up stagger-3">
              {[
                { tag: "NAMED WESTERN BYLINE", body: "Bloomberg-adjacent commentary, attributed to a named editor in English-language press." },
                { tag: "PRE-ARREST ANALYSIS", body: "Published before Hasanov&rsquo;s 27 March 2026 detention &mdash; not a reaction to it." },
                { tag: "SOLFY NAMED EXPLICITLY", body: "The dispute is treated as the diagnostic case for institutional credibility." },
              ].map((c) => (
                <div key={c.tag} className="border-l-2 border-slide-primary/60 pl-5 py-1">
                  <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-slide-primary mb-1">
                    {c.tag}
                  </p>
                  <p
                    className="text-[14px] text-slide-muted leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: c.body }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },

  // ═══ 4. BACKGROUND ═══
  {
    id: "solfy-background",
    title: "Background",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px] pb-[60px]">
          <div className="flex items-center justify-between mb-6">
            <SlidePill label="BACKGROUND" />
            <CAJILogo />
          </div>
          <p className="text-[20px] text-slide-muted max-w-[1400px] leading-relaxed mb-6 anim-fade-in stagger-1">
            A fintech joint venture that became the center of an investor-state dispute with international implications.
          </p>

          <div className="mb-6 anim-fade-in stagger-2">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-slide-muted mb-3">
              Solfy CA cap table
            </p>
            <CapTableBar
              segments={[
                { label: "Poletaev (Solvy Cyprus)", pct: 50 },
                { label: "Other", pct: 25 },
                { label: "Full Stack Solution", pct: 20 },
                { label: "NBU", pct: 5, highlight: true },
              ]}
              caption="NBU is a 5% equity holder and the criminal complainant — see Slide 9 (Dual Role)."
            />
          </div>

          <div className="flex-1 grid grid-cols-2 gap-10 min-h-0">
            {/* The Venture */}
            <div className="bg-slide-surface rounded-sm p-12 flex flex-col justify-center overflow-hidden anim-slide-left stagger-2">
              <h3 className="text-[28px] font-bold text-slide-primary mb-6 shrink-0">The Venture</h3>
              <div className="space-y-6 text-[20px] text-slide-muted leading-[1.6] overflow-hidden">
                <p>
                  <span className="font-bold text-slide-foreground">Solfy CA LLC</span> was established in Tashkent in June 2020 as a fintech joint venture. Maxim Poletaev held 50% beneficial interest via Solvy Cyprus Limited. NBU held 5%. Full Stack Solution held 20%.
                </p>
                <p>
                  The company launched a <span className="font-bold text-slide-foreground">Buy Now, Pay Later</span> installment card product in partnership with NBU, Uzbekistan’s largest commercial bank (100% state-owned). NBU’s investment committee authorized three capital infusions totaling over 17 billion soums. Senior retail management publicly endorsed the product. <a href="https://repost.uz/karta-solfy" target="_blank" rel="noopener noreferrer" className="text-slide-primary hover:underline font-semibold">[Repost.uz]</a>
                </p>
                <p>
                  Independent valuation by Bluestone: <span className="font-bold text-slide-foreground">USD 42-52 million</span> (valuation prepared by Bluestone in connection with the investor’s anticipated ICSID claim; CAJI has not independently verified the methodology or assumptions).
                </p>
              </div>
            </div>

            {/* The Collapse */}
            <div className="bg-slide-surface rounded-sm p-12 flex flex-col justify-center overflow-hidden anim-slide-right stagger-2">
              <h3 className="text-[28px] font-bold text-slide-primary mb-6 shrink-0">The Collapse</h3>
              <div className="space-y-6 text-[20px] text-slide-muted leading-[1.6] overflow-hidden">
                <p>
                  <span className="font-bold text-slide-foreground">Partnership terminated.</span> NBU ended the relationship. Solfy was declared bankrupt. A contractual dispute over obligations under Agreement No. 289/37 was adjudicated in Uzbek civil courts (December 2024, May 2025).
                </p>
                <p>
                  <span className="font-bold text-slide-foreground">Threat allegations reported.</span> Public reporting has linked senior NBU leadership to communications the investor side characterizes as threatening. CAJI has not independently verified the identity of the individuals involved.
                </p>
                <p>
                  <span className="font-bold text-slide-foreground">Criminal escalation.</span> Rather than resolving the matter commercially, NBU filed a criminal complaint against Solfy’s locally appointed director during active settlement negotiations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },

  // ═══ 5. NBU HISTORY & SYSTEMIC ROLE ═══
  {
    id: "solfy-nbu-history",
    title: "NBU History",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px] pb-[60px]">
          <div className="flex items-center justify-between mb-6">
            <SlidePill label="NBU: HISTORY & SYSTEMIC ROLE" />
            <CAJILogo />
          </div>

          <h2 className="text-[40px] font-semibold leading-[1.1] mb-3 anim-fade-up stagger-1">
            The sovereign’s international face
          </h2>
          <p className="text-[20px] text-slide-muted leading-relaxed max-w-[1200px] mb-8 anim-fade-up stagger-1">
            NBU is not a peripheral institution. It is Uzbekistan’s primary channel for international capital markets and development finance.
          </p>

          <div className="grid grid-cols-3 gap-6 flex-1 min-h-0">
            {/* Column 1: Identity */}
            <div className="bg-slide-surface rounded-sm p-8 flex flex-col justify-center overflow-hidden anim-fade-up stagger-2">
              <h3 className="text-[28px] font-bold text-slide-primary mb-6 shrink-0">Institutional Identity</h3>
              <div className="space-y-5 text-[20px] text-slide-muted leading-[1.55] overflow-hidden">
                <p><span className="font-bold text-slide-foreground">Founded 1991</span> as Uzbekistan’s primary foreign trade bank. Largest commercial bank by total assets.</p>
                <p><span className="font-bold text-slide-foreground">100% state-owned.</span> Fund for Reconstruction & Development (59.25%) and Ministry of Economy & Finance (40.75%).</p>
                <p><span className="font-bold text-slide-foreground">Authorized capital:</span> UZS 16.7 trillion.</p>
                <p><span className="font-bold text-slide-foreground">Ratings:</span> S&P BB | Fitch BB | Moody’s Ba3 (all stable).</p>
              </div>
            </div>

            {/* Column 2: Capital Markets */}
            <div className="bg-slide-surface rounded-sm p-8 flex flex-col justify-center overflow-hidden anim-fade-up stagger-3">
              <h3 className="text-[28px] font-bold text-slide-primary mb-6 shrink-0">Capital Markets Presence</h3>
              <div className="space-y-6 overflow-hidden">
                <div className="bg-slide-bg rounded-sm p-6">
                  <p className="text-[13px] text-slide-muted tracking-[0.15em] uppercase mb-2">LSE Eurobond</p>
                  <p className="text-[20px] font-bold">2020 issuance, Reg S / 144A</p>
                  <p className="text-[16px] text-slide-muted mt-2">Outstanding obligations to international bondholders</p>
                </div>
                <div>
                  <p className="text-[13px] text-slide-primary font-bold tracking-[0.15em] uppercase mb-3">Correspondent Banks</p>
                  <p className="text-[20px] text-slide-muted leading-relaxed">JP Morgan Chase, Citibank, Standard Chartered, Deutsche Bank, Natixis, SMBC</p>
                </div>
              </div>
            </div>

            {/* Column 3: Development Finance */}
            <div className="bg-slide-surface rounded-sm p-8 flex flex-col overflow-hidden anim-fade-up stagger-4">
              <h3 className="text-[28px] font-bold text-slide-primary mb-6 shrink-0">Development Finance</h3>
              <div className="space-y-5 overflow-hidden flex-1">
                {[
                  { org: "EBRD", role: "Active credit lines. Integrity Risk Policy applies." },
                  { org: "IFC", role: "World Bank Group lending. Performance Standards apply." },
                  { org: "ADB", role: "Development credit facilities." },
                  { org: "MIGA", role: "Political risk guarantees covering NBU exposure." },
                ].map((item) => (
                  <div key={item.org} className="flex gap-4">
                    <span className="text-[16px] font-bold text-slide-foreground w-[64px] shrink-0">{item.org}</span>
                    <p className="text-[16px] text-slide-muted leading-relaxed">{item.role}</p>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-5 border-t border-slide-foreground/8">
                <p className="text-[16px] text-slide-foreground leading-relaxed">
                  <span className="font-bold text-slide-primary">Key fact:</span> NBU holds a 5% equity stake in Solfy CA while acting as the criminal complainant against its director.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },

  // ═══ 6. NBU INSTITUTIONAL PROFILE ═══
  {
    id: "solfy-nbu-profile",
    title: "NBU Profile",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <div className="flex items-center justify-between mb-8">
            <SlidePill label="NBU: INSTITUTIONAL PROFILE" />
            <CAJILogo />
          </div>

          <div className="flex gap-8 flex-1 min-h-0">
            {/* Left column */}
            <div className="w-[35%] flex flex-col gap-3 anim-slide-left stagger-2 min-h-0">
              <div className="bg-slide-surface rounded-sm p-5 flex items-center gap-4">
                <img src={nbuLogo} alt="NBU Logo" className="w-[60px] h-[60px] object-contain shrink-0" />
                <div>
                  <h3 className="text-[15px] font-bold leading-tight">National Bank for Foreign Economic Activity</h3>
                  <p className="text-[12px] text-slide-muted mt-0.5">Republic of Uzbekistan · Est. 1991 · Tashkent</p>
                </div>
              </div>

              <div className="bg-slide-surface rounded-sm p-4">
                <h4 className="text-[14px] font-bold text-slide-primary mb-2">Shareholding Structure</h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-[12px] font-semibold mb-0.5">
                      <span>Fund for Reconstruction &amp; Development</span>
                      <span className="text-slide-primary tabular-nums">59.25%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slide-primary/10 rounded-sm overflow-hidden">
                      <div className="h-full bg-slide-primary rounded-sm" style={{ width: "59.25%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[12px] font-semibold mb-0.5">
                      <span>Ministry of Economy &amp; Finance</span>
                      <span className="text-slide-primary tabular-nums">40.75%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slide-primary/10 rounded-sm overflow-hidden">
                      <div className="h-full bg-slide-primary rounded-sm" style={{ width: "40.75%" }} />
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-slide-muted mt-2 leading-snug">
                  100% state-held. Authorized capital UZS 16.7T.
                </p>
              </div>

              <div className="bg-slide-surface rounded-sm p-4">
                <h4 className="text-[14px] font-bold text-slide-primary mb-2">Credit Ratings</h4>
                <div className="grid grid-cols-3 gap-2 text-[13px]">
                  <div><span className="text-slide-muted">S&amp;P</span> <span className="font-bold">BB</span></div>
                  <div><span className="text-slide-muted">Fitch</span> <span className="font-bold">BB</span></div>
                  <div><span className="text-slide-muted">Moody&rsquo;s</span> <span className="font-bold">Ba3</span></div>
                </div>
                <p className="text-[11px] text-slide-foreground mt-2 leading-snug">
                  Sovereign upgraded BB&minus; → BB in 2025; Moody&rsquo;s &amp; S&amp;P outlook positive. <span className="font-bold text-slide-primary">Trajectory at risk.</span>
                  {" "}
                  <a href="https://daryo.uz" target="_blank" rel="noopener noreferrer" className="text-slide-primary font-semibold hover:underline">Daryo.uz, 27 Jun 2025 →</a>
                </p>
              </div>

              <div className="bg-slide-primary/5 border border-slide-primary/20 rounded-sm p-4">
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-slide-primary mb-1">
                  Russia-facing subsidiary
                </p>
                <p className="text-[13px] font-bold text-slide-foreground leading-tight">
                  Asia-Invest Bank (Moscow)
                </p>
                <p className="text-[11px] text-slide-muted leading-snug mt-0.5">
                  Wholly owned by NBU · ИНН 7724187003 · Bank of Russia license #3303
                </p>
                <p className="text-[11px] text-slide-foreground/80 leading-snug mt-1.5">
                  Structurally analogous to four banks (Azerbaijan/Kyrgyzstan/Laos) sanctioned in EU&rsquo;s 20th sanctions package, April 2026.
                </p>
              </div>
            </div>

            {/* Right column */}
            <div className="flex-1 flex flex-col gap-6 anim-slide-right stagger-3">
              <div className="bg-slide-surface rounded-sm p-8 flex-1 flex flex-col">
                <h4 className="text-[24px] font-bold text-slide-primary mb-5">Management Board</h4>
                <ManagementRoster
                  members={[
                    { name: "Alisher Mirsoatov", role: "Chairman", since: "2017", highlight: true },
                    { name: "Sardorbek Usmanbekov", role: "First Deputy Chairman", since: "2020" },
                    { name: "Bakhodir Jalilov", role: "Deputy Chairman", since: "2020" },
                    { name: "Azamat Kurambaev", role: "Deputy Chairman", since: "2021" },
                    { name: "Azizbek Khodjaev", role: "Deputy Chairman", since: "2022" },
                    { name: "Bakhtiyor Mirdovidov", role: "Deputy Chairman", since: "2022" },
                    { name: "Bohodir Rikhsiev", role: "Chief Accountant", since: "2019" },
                  ]}
                />
              </div>

              <div className="bg-slide-primary/5 border border-slide-primary/15 rounded-sm p-6 anim-fade-up stagger-5">
                <p className="text-[20px] text-slide-foreground leading-relaxed">
                  <span className="font-bold">Key fact:</span> NBU holds a <span className="font-bold text-slide-primary">5% equity stake</span> in Solfy CA while simultaneously acting as the <span className="font-bold text-slide-primary">criminal complainant</span> against the venture’s director.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },

  // ═══ 7. THE PARTIES ═══
  {
    id: "solfy-parties",
    title: "The Parties",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <div className="flex items-center justify-between mb-6">
            <SlidePill label="THE PARTIES" />
            <CAJILogo />
          </div>
          <h2 className="text-[40px] font-semibold leading-tight mb-10">
            Key stakeholders in the Solfy CA dispute
          </h2>
          <div className="grid grid-cols-3 gap-8 flex-1">
            {/* Poletaev */}
            <div className="bg-slide-surface rounded-sm p-8 flex flex-col anim-scale-in stagger-2">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-[90px] h-[90px] rounded-sm overflow-hidden shrink-0 border-2 border-slide-primary/20" style={{ animation: "scale-in 0.4s ease-out 0.5s both" }}>
                  <img src={poletaevPhoto} alt="Maxim Poletaev" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-[24px] font-bold leading-tight">Maxim V. Poletaev</h3>
                  <p className="text-[16px] text-slide-primary font-semibold">Foreign Investor</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Investor, 50% beneficial owner via Solvy Cyprus Limited",
                  "Former First Deputy Chairman of Sberbank",
                  "Board member of Nornickel, MegaFon, Metalloinvest",
                  "Chairman of Fortenova Group, co-founder of Gauss Ventures",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[18px] text-slide-muted leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-sm bg-slide-primary mt-2.5 shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Hasanov */}
            <div className="bg-slide-surface rounded-sm p-8 flex flex-col border-2 border-slide-primary/20 anim-scale-in stagger-3">
              <div className="flex items-center gap-5 mb-6">
                <div className="relative">
                  <div className="w-[90px] h-[90px] rounded-sm overflow-hidden shrink-0 border-2 border-slide-primary/30" style={{ animation: "scale-in 0.4s ease-out 0.7s both" }}>
                    <img src={uktamPhoto} alt="Uktam Hasanov" className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-slide-primary text-primary-foreground text-[11px] font-bold px-2.5 py-0.5 rounded-sm tracking-wider uppercase shadow-[0_0_0_3px_hsl(var(--slide-primary)/0.18)]">
                    Detained
                  </div>
                </div>
                <div>
                  <h3 className="text-[24px] font-bold leading-tight">Hasanov Uktam N.</h3>
                  <p className="text-[16px] text-slide-primary font-semibold">Detained Director</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Director of Solfy CA LLC, the only individual charged",
                  "Currently held in custody in Tashkent",
                  "Charged under Article 167(3)(a), embezzlement in large amounts",
                  "No personal enrichment alleged",
                  "Lowest-ranking individual in the corporate chain",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[18px] text-slide-muted leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-sm bg-slide-primary mt-2.5 shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Mirsoatov */}
            <div className="bg-slide-surface rounded-sm p-8 flex flex-col anim-scale-in stagger-4">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-[90px] h-[90px] rounded-sm overflow-hidden shrink-0 border-2 border-slide-foreground/10" style={{ animation: "scale-in 0.4s ease-out 0.9s both" }}>
                  <img src={mirsoatovPhoto} alt="Alisher Mirsoatov" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-[24px] font-bold leading-tight">Alisher K. Mirsoatov</h3>
                  <p className="text-[16px] text-slide-primary font-semibold">NBU Chairman</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Chairman of NBU since November 2017",
                  "Born 1974, Tashkent. Career NBU insider since 1996",
                  "Former Chairman of Uzpromstroybank (2016-2017)",
                  "Public reporting (UA.News, 26 Feb 2026) has linked senior NBU leadership to communications the investor side characterizes as threatening; CAJI has not independently verified the identity of the individuals involved",
                  "Chairman of Uzbekistan Winter Sports Association",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[18px] text-slide-muted leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-sm bg-slide-primary mt-2.5 shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },

  // ═══ 8. TIMELINE ═══
  {
    id: "solfy-timeline",
    title: "Critical Timeline",
    component: (props) => {
      const steps = [
        { date: "FEB 24", isoDate: "2026-02-24", title: "A&P Retained", desc: "Amsterdam & Partners retained as counsel.", accent: false },
        { date: "FEB 27", isoDate: "2026-02-27", title: "UzDaily Reports", desc: "Civil dispute reported in UzDaily.", accent: false },
        { date: "MAR 17", isoDate: "2026-03-17", title: "Settlement Proposal", desc: "Investor side submits detailed counter-proposal.", accent: false },
        { date: "MAR 25", isoDate: "2026-03-25", title: "Deadline Letter", desc: "After 8 days’ silence; firm threatens remedies.", accent: false },
        { date: "MAR 26", isoDate: "2026-03-26", title: "Rejection", desc: "NBU rejects withdrawal; references procedural powers.", accent: false },
        { date: "MAR 27", isoDate: "2026-03-27", title: "Charges Filed & Arrest", desc: "Article 167(3)(a). Settlement offer sent as Hasanov is arrested.", accent: true },
      ];
      return (
        <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
          <div className="flex flex-col h-full p-[80px]">
            <div className="flex items-center justify-between mb-6">
              <SlidePill label="THE CRITICAL WINDOW" />
              <CAJILogo />
            </div>
            <h2 className="text-[40px] font-semibold leading-[1.1] mb-2">
              Feb 24 – Mar 27, 2026: From counsel retention to detonation
            </h2>
            <p className="text-[16px] text-slide-muted mb-10 max-w-[1200px]">
              Date-proportional axis. The 8-day silence between settlement proposal (17 Mar) and deadline letter (25 Mar) reads visually; the 26→27 detonation is tight.
            </p>
            <div className="flex-1 flex items-start">
              <ProportionalTimeline steps={steps} />
            </div>
            <div className="mt-6 bg-slide-surface rounded-sm p-6 border-l-4 border-slide-primary">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-slide-muted mb-2">Vedomosti, 4 April 2026</p>
              <p
                className="text-[18px] italic leading-snug text-slide-foreground"
                style={{ fontFamily: "var(--font-serif, 'Cormorant Garamond', Cormorant, Georgia, serif)" }}
              >
                «Арест Хасанова произошел после того, как международная юридическая фирма&hellip; направила предложения об урегулировании в адрес НБУ.»
              </p>
              <p className="text-[16px] italic leading-snug text-slide-muted mt-2">
                &ldquo;Hasanov&rsquo;s arrest occurred after [counsel] delivered settlement proposals to NBU.&rdquo;
              </p>
            </div>
          </div>
        </SlideLayout>
      );
    },
  },

  // ═══ 9. NBU DUAL ROLE ═══
  {
    id: "solfy-dual-role",
    title: "NBU Dual Role",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <div className="flex items-center justify-between mb-6">
            <SlidePill label="IRRECONCILABLE DUAL ROLE" />
            <CAJILogo />
          </div>
          <h2 className="text-[36px] font-semibold leading-[1.1] mb-4 anim-fade-up stagger-1">
            The entity claiming to be the victim approved every capital allocation it now claims was embezzled
          </h2>
          {/* Conflict-of-interest node diagram */}
          <div className="mb-6 anim-fade-up stagger-2" style={{ height: "26%" }}>
            <DualRoleDiagram />
          </div>
          <div className="flex-1 grid grid-cols-2 gap-0 min-h-0">
            <div className="bg-slide-surface rounded-l-[6px] p-10 flex flex-col anim-slide-left stagger-3">
              <h3 className="text-[22px] font-semibold text-slide-muted mb-4">Equity Stakeholder</h3>
              <ul className="flex-1 space-y-4">
                {[
                  "NBU holds a 5% equity stake in Solfy CA",
                  "Investment committee authorized three capital infusions totaling over 17 billion soums",
                  "Senior retail management publicly endorsed the product",
                  "Partnership announced in national media by NBU’s own Managing Director of Retail",
                ].map((item) => (
                  <li key={item} className="text-[18px] text-slide-muted leading-snug flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-sm bg-slide-muted/50 mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slide-primary rounded-r-[6px] p-10 flex flex-col text-primary-foreground anim-slide-right stagger-3">
              <h3 className="text-[22px] font-semibold mb-4">Criminal Complainant</h3>
              <ul className="flex-1 space-y-4">
                {[
                  "Simultaneously the complainant in the criminal case",
                  "March 26 letter references its procedural powers within the criminal proceedings",
                  "Acknowledges the criminal case is within its sphere of influence",
                  "Not independent prosecutorial action",
                ].map((item) => (
                  <li key={item} className="text-[18px] leading-snug flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-sm bg-primary-foreground/70 mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },

  // ═══ 10. FREE UKTAM ═══
  {
    id: "solfy-free-uktam",
    title: "Free Uktam Hasanov",
    component: (props) => (
      <SlideLayout variant="dark" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <div className="flex items-center justify-between">
            <SlidePill label="WRONGFUL DETENTION" variant="light" />
            <CAJILogo variant="light" />
          </div>
          <div className="flex flex-1 items-center gap-16 mt-8">
            {/* Left: Photo + Identity */}
            <div className="flex flex-col items-center w-[380px] shrink-0">
              <div className="relative">
                <div className="w-[300px] h-[300px] rounded-sm overflow-hidden border-4 border-slide-primary/40" style={{ animation: "scale-in 0.6s ease-out 0.2s both", boxShadow: "0 0 40px rgba(59,85,255,0.25)" }}>
                  <img src={uktamPhoto} alt="Uktam Hasanov" className="w-full h-full object-cover object-top" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-slide-primary text-primary-foreground text-[11px] font-bold px-4 py-1.5 rounded-sm tracking-wider uppercase shadow-[0_0_0_3px_hsl(var(--slide-primary)/0.18)]">
                  <span className="w-2 h-2 bg-slide-primary/40 rounded-sm animate-pulse" />
                  Detained
                </div>
              </div>
              <h3 className="text-[40px] font-bold text-primary-foreground mt-8 text-center leading-tight anim-fade-up stagger-3">
                Uktam Hasanov
              </h3>
              <p className="text-[16px] text-primary-foreground/60 mt-2 text-center">Director of Solfy CA LLC</p>
              <p className="text-[13px] text-primary-foreground/40 mt-3 text-center leading-relaxed max-w-[340px]">
                Arrested without prior summons during active settlement talks. Bail denied despite zero flight risk. Cooperated fully with investigators. Held as leverage in a commercial negotiation.
              </p>
            </div>

            {/* Right: Counter + Links */}
            <div className="flex-1 flex flex-col">
              <div className="mb-8 anim-fade-up stagger-3">
                <p className="text-[13px] text-primary-foreground/50 tracking-[0.15em] uppercase mb-4">Wrongfully detained for</p>
                <DetentionCounter />
                <p className="text-[13px] text-primary-foreground/40 mt-4 leading-relaxed max-w-[600px]">
                  Since March 27, 2026. A man held in a Tashkent detention facility as leverage in a commercial negotiation. Every day he remains detained erodes Uzbekistan’s claim to be a rule-of-law jurisdiction.
                </p>
              </div>

              <a href="https://free-uktam.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-slide-primary hover:bg-slide-primary/90 text-primary-foreground rounded-sm px-8 py-4 mb-8 w-fit transition-colors anim-fade-up stagger-4">
                <span className="text-[20px] font-bold">free-uktam.com</span>
                <span className="text-[13px] opacity-70">Hasanov Defense Initiative</span>
              </a>

              <div>
                <p className="text-[13px] text-primary-foreground/40 tracking-[0.15em] uppercase mb-4">Follow the campaign</p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { platform: "YouTube", handle: "Interview", url: "https://youtu.be/50KysRLkQtE", icon: <Youtube size={20} /> },
                    { platform: "Instagram", handle: "@free_uktam_hasanov", url: "https://www.instagram.com/free_uktam_hasanov/", icon: <Instagram size={20} /> },
                    { platform: "X (Twitter)", handle: "@free_uktam", url: "https://x.com/free_uktam", icon: <XIcon size={20} /> },
                    { platform: "Telegram", handle: "@free_uktam_hasanov", url: "https://t.me/free_uktam_hasanov", icon: <Send size={20} /> },
                    { platform: "Threads", handle: "@free_uktam_hasanov", url: "https://www.threads.com/@free_uktam_hasanov", icon: <AtSign size={20} /> },
                    { platform: "TikTok", handle: "@hasanov.defense.i", url: "https://www.tiktok.com/@hasanov.defense.i", icon: <Music size={20} /> },
                  ].map((link, i) => (
                    <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-slide-bg/5 hover:bg-slide-bg/10 rounded-sm px-4 py-3 transition-colors" style={{ animation: `fade-in 0.3s ease-out ${0.6 + i * 0.08}s both` }}>
                      <span className="text-slide-primary w-8 flex justify-center">{link.icon}</span>
                      <div>
                        <span className="text-[13px] font-bold text-primary-foreground block">{link.platform}</span>
                        <span className="text-[11px] text-primary-foreground/40">{link.handle}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },

  // ═══ 11. DRAMATIC STATEMENT ═══
  {
    id: "solfy-dramatic",
    title: "Dramatic Statement",
    component: (props) => (
      <SlideLayout variant="dark" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="absolute inset-0" style={{ animation: "slow-zoom 12s ease-out forwards" }}>
          <img src={detentionCell} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slide-foreground/70 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-[80px]">
          <h2 className="text-[64px] font-semibold leading-[1.2] max-w-[1400px] text-primary-foreground" style={{ animation: "slide-up 1.2s ease-out 0.3s both" }}>
            An Uzbek citizen held as human collateral — detained not for justice, but as leverage. This is not prosecution. It is state-sponsored coercion.
          </h2>
        </div>
      </SlideLayout>
    ),
  },

  // ═══ 12. EXCESSIVE MEASURE ═══
  {
    id: "solfy-excessive-arrest",
    title: "Excessive Measure",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <div className="flex items-center justify-between mb-6">
            <SlidePill label="LEGAL ANALYSIS" />
            <CAJILogo />
          </div>
          <h2 className="text-[40px] font-semibold leading-[1.1] mb-3">
            Why arrest is an excessive and disproportionate measure
          </h2>
          <p className="text-[16px] text-slide-muted leading-relaxed mb-5 max-w-[1200px]">
            Under Uzbek criminal procedure (Articles 236-243 CPC) and international standards, pre-trial detention is a measure of last resort.
          </p>
          <div className="mb-6">
            <DetentionScale />
          </div>
          <div className="grid grid-cols-2 gap-6 flex-1">
            <div className="flex flex-col gap-5 justify-between">
              {[
                { num: "01", title: "No Flight Risk", text: "Uzbek citizen with permanent residence, family ties, and no foreign passport. Travel restrictions or bail would suffice." },
                { num: "02", title: "No Evidence Tampering Risk", text: "All evidence is documentary — bank records, contracts, transfer statements — held by state institutions beyond Hasanov’s reach." },
                { num: "03", title: "No Personal Enrichment", text: "No personal enrichment, offshore transfers, or asset concealment alleged. All funds flowed through documented corporate channels." },
              ].map((item, i) => (
                <div key={item.num} className="bg-slide-surface rounded-sm p-6" style={{ animation: `slide-up 0.5s ease-out ${0.3 + i * 0.15}s both` }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-sm bg-slide-primary/10 flex items-center justify-center text-[18px] font-bold text-slide-primary">{item.num}</div>
                    <h3 className="text-[20px] font-bold">{item.title}</h3>
                  </div>
                  <p className="text-[18px] text-slide-muted leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-5 justify-between">
              {[
                { num: "04", title: "Contractual Dispute, Not Crime", text: "Commercial disagreement over Contract 289/37, already adjudicated in civil courts. Criminalizing this violates ultima ratio." },
                { num: "05", title: "Arrest During Negotiations", text: "Charges filed one day after NBU rejected withdrawal of its complaint. Timing reveals a pressure tactic, not law enforcement." },
              ].map((item, i) => (
                <div key={item.num} className="bg-slide-surface rounded-sm p-6" style={{ animation: `slide-up 0.5s ease-out ${0.3 + i * 0.15}s both` }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-sm bg-slide-primary/10 flex items-center justify-center text-[18px] font-bold text-slide-primary">{item.num}</div>
                    <h3 className="text-[20px] font-bold">{item.title}</h3>
                  </div>
                  <p className="text-[18px] text-slide-muted leading-relaxed">{item.text}</p>
                </div>
              ))}
              <div className="bg-slide-primary/5 border-2 border-slide-primary/20 rounded-sm p-6" style={{ animation: "slide-up 0.5s ease-out 0.75s both" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-sm bg-slide-primary/10 flex items-center justify-center text-[18px] font-bold text-slide-primary">!</div>
                  <h3 className="text-[20px] font-bold text-slide-primary">International Law Violation</h3>
                </div>
                <p className="text-[18px] text-slide-foreground/80 leading-relaxed">
                  Arbitrary detention in a commercial dispute violates ICCPR Article 9, ICCPR Article 14, and ECHR Article 5.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },

  // ═══ 13. SELECTIVE PROSECUTION ═══
  {
    id: "solfy-selective",
    title: "Selective Prosecution",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <SlidePill label="SELECTIVE PROSECUTION" />
          <h2 className="mt-8 text-[40px] font-semibold leading-[1.1] mb-6">
            One arrest, many uncharged actors
          </h2>
          <p className="text-[20px] text-slide-muted max-w-[1400px] leading-relaxed mb-12">
            This pattern is consistent with the use of criminal prosecution as commercial leverage, not genuine law enforcement.
          </p>
          <div className="flex-1 flex items-center anim-fade-up stagger-2">
            <div className="w-full max-w-[1300px]">
              <HierarchyLadder
                rows={[
                  { label: "Foreign co-founders", descriptor: "Directed corporate strategy from outside Uzbekistan" },
                  { label: "NBU Investment Committee", descriptor: "Authorized three capital tranches totaling 17+ billion soums" },
                  { label: "NBU Compliance / Audit", descriptor: "Functions responsible for oversight of capital allocation" },
                  { label: "NBU Retail leadership", descriptor: "Publicly endorsed the product in national media" },
                  { label: "Full Stack principals", descriptor: "20% shareholder; principals (Izrailbekov) uncharged" },
                  { label: "Hasanov — Director", descriptor: "Locally appointed; no personal enrichment alleged", charged: true },
                ]}
                caption="Sole defendant out of the corporate chain. The most replaceable individual."
              />
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },

  // ═══ 14. CONTRADICTIONS ═══
  {
    id: "solfy-contradictions",
    title: "Contradictions",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <div className="flex items-center justify-between mb-12">
            <SlidePill label="CONTRADICTIONS IN THE CHARGES" />
            <CAJILogo />
          </div>
          <h2 className="text-[40px] font-semibold leading-[1.1] mb-12">
            A contractual dispute repackaged as criminal prosecution
          </h2>
          <div className="flex-1 grid grid-cols-3 gap-12 items-center">
            <div style={{ animation: "slide-up 0.5s ease-out 0.2s both" }}>
              <div className="text-[72px] font-semibold text-slide-primary/15 leading-none mb-4 tabular-nums">01</div>
              <h3 className="text-[26px] font-bold mb-4 leading-tight">Allegation: Purposeless Squandering</h3>
              <p className="text-[20px] text-slide-muted leading-relaxed">
                Charges allege misappropriation of ~17 billion soums in charter capital. Yet the prosecution’s own evidence describes operational expenditures: staff salaries, technology development, merchant acquisition. Normal costs of running a fintech startup.
              </p>
            </div>
            <div style={{ animation: "slide-up 0.5s ease-out 0.35s both" }}>
              <div className="text-[72px] font-semibold text-slide-primary/15 leading-none mb-4 tabular-nums">02</div>
              <h3 className="text-[26px] font-bold mb-4 leading-tight">Allegation: Unpaid Bank Rewards</h3>
              <p className="text-[20px] text-slide-muted leading-relaxed">
                Charges allege 14.9 billion soums in unpaid contractual rewards owed to NBU. These correspond to obligations under Agreement No. 289/37, already adjudicated in civil court rulings (December 2024, May 2025). The criminal complaint repackages a commercial dispute.
              </p>
            </div>
            <div style={{ animation: "slide-up 0.5s ease-out 0.5s both" }}>
              <div className="text-[72px] font-semibold text-slide-primary/15 leading-none mb-4 tabular-nums">03</div>
              <h3 className="text-[26px] font-bold mb-4 leading-tight">NBU Approved Every Tranche</h3>
              <p className="text-[20px] text-slide-muted leading-relaxed">
                NBU’s own investment committee authorized every capital allocation it now characterizes as embezzlement. This sequence may indicate a material inconsistency between prior governance approvals and subsequent criminal characterization of the same expenditures.
              </p>
            </div>
          </div>
          <p className="pt-8 text-[13px] text-slide-muted/70 tracking-[0.05em] leading-relaxed border-t border-slide-foreground/8">
            Sources: criminal charging documents (case file), Tashkent commercial court rulings (Dec 2024, May 2025), NBU investment committee minutes — as characterized by the investor side.
          </p>
        </div>
      </SlideLayout>
    ),
  },

  // ═══ NBU REBUTTAL — claims vs. documentary record ═══
  {
    id: "solfy-nbu-rebuttal",
    title: "NBU Position vs. Record",
    component: (props) => {
      const claims = [
        "“adheres to the highest standards of integrity in all its commercial relationships”",
        "“the priority of the Bank is the protection of its clients’ interests”",
        "“negotiations with Solfy and the related legal procedures are ongoing”",
        "“inappropriate to comment on unsubstantiated allegations until the completion of this process”",
        "“full compliance with all applicable laws and regulatory requirements”",
      ];
      const record = [
        "NBU is a 5% Solfy CA shareholder litigating against its own portfolio company’s director (cf. Slide 5).",
        "Solfy CA — a contractual partner — is itself a client; NBU’s “client interests” framing applies inversely.",
        "NBU’s own admission of parallel ongoing negotiations corroborates the simultaneity of settlement offer and arrest (Slide 7 Timeline).",
        "“Allegations” cited include: arrest 27 March 2026, Article 167(3)(a) charges, Bluestone $42–52M valuation, Amsterdam & Partners retention. None are unsubstantiated.",
        "Article 167(3)(a) selectivity, BIT obligations, and ICSID exposure are not addressed.",
      ];
      const unsaid = [
        "The 27 March arrest of Hasanov.",
        "The Article 167(3)(a) charge.",
        "The 17 bn UZS / ~$1.5M figure.",
        "The 14.9 bn UZS / ~$1.2M unpaid contractual fee.",
        "The simultaneity of NBU’s settlement offer and Hasanov’s Friday-evening arrest.",
        "The Bluestone $42–52M valuation.",
        "The Mirsoatov family connection to the Tashkent prosecutor’s office.",
        "The “termination of business relations” referenced by UzDaily.",
      ];
      return (
        <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
          <div className="flex flex-col h-full p-[80px]">
            <div className="flex items-center justify-between mb-6">
              <SlidePill label="NBU&rsquo;S OFFICIAL POSITION" />
              <CAJILogo />
            </div>
            <h2 className="text-[36px] font-semibold leading-[1.1] mb-2 anim-fade-up stagger-1">
              What NBU says vs. the documentary record
            </h2>
            <p className="text-[16px] text-slide-muted leading-relaxed max-w-[1300px] mb-8 anim-fade-up stagger-2">
              On 4 April 2026, NBU issued a two-paragraph public statement. We cite it in full and address each claim.
            </p>
            <div className="flex-1 grid grid-cols-3 gap-5 min-h-0">
              <div className="bg-slide-surface rounded-sm p-6 flex flex-col overflow-hidden anim-slide-left stagger-3">
                <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-slide-muted mb-3">NBU claims</p>
                <ol className="space-y-3 flex-1 overflow-hidden">
                  {claims.map((c, i) => (
                    <li key={i} className="flex gap-3 text-[14px] text-slide-foreground leading-snug">
                      <span className="text-slide-muted font-bold tabular-nums shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span className="italic">{c}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="bg-slide-primary/8 border border-slide-primary/25 rounded-sm p-6 flex flex-col overflow-hidden anim-fade-up stagger-3">
                <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-slide-primary mb-3">Documentary record</p>
                <ol className="space-y-3 flex-1 overflow-hidden">
                  {record.map((r, i) => (
                    <li key={i} className="flex gap-3 text-[14px] text-slide-foreground leading-snug">
                      <span className="text-slide-primary font-bold tabular-nums shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="rounded-sm p-6 flex flex-col overflow-hidden border border-slide-foreground/10 anim-slide-right stagger-3">
                <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-slide-muted mb-3">What is left unsaid</p>
                <ul className="space-y-2 flex-1 overflow-hidden">
                  {unsaid.map((u, i) => (
                    <li key={i} className="flex gap-2 text-[13px] text-slide-muted/90 leading-snug">
                      <span className="text-slide-primary leading-none mt-1.5">·</span>
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="pt-6 mt-6 text-[12px] text-slide-muted/70 tracking-[0.05em] leading-snug border-t border-slide-foreground/8">
              Source: nbu.uz/en/news/official-position-of-the-bank-on-information-disseminated-via-social-media_04_04_26 (4 April 2026); kg24.news (6 April 2026).
            </p>
          </div>
        </SlideLayout>
      );
    },
  },

  // ═══ 15. REGULATORY CONSIDERATIONS ═══
  {
    id: "solfy-regulatory",
    title: "Regulatory Considerations",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <div className="flex items-center justify-between mb-12">
            <SlidePill label="REGULATORY LANDSCAPE" />
            <CAJILogo />
          </div>
          <h2 className="text-[40px] font-semibold leading-[1.1] mb-12">
            Regulatory Considerations for Counterparties
          </h2>
          <p className="text-[20px] text-slide-muted leading-relaxed max-w-[1200px] mb-6">
            The following frameworks may be relevant to counterparties evaluating their exposure.
          </p>
          <div className="grid grid-cols-3 gap-5 mb-6">
            <div className="border-l-2 border-slide-primary pl-4 py-2">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-slide-primary mb-1">UK OTSI · Jun 2025</p>
              <p className="text-[14px] text-slide-foreground leading-snug">
                High-risk-jurisdiction designation; Uzbekistan named alongside Armenia, China/HK, Kazakhstan, Turkey, UAE.
              </p>
            </div>
            <div className="border-l-2 border-slide-primary pl-4 py-2">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-slide-primary mb-1">EU 20th sanctions · 23 Apr 2026</p>
              <p className="text-[14px] text-slide-foreground leading-snug">
                Council Reg (EU) 2026/506 · Decision (CFSP) 2026/508 · Implementing Reg (EU) 2026/509; designates 16 third-country entities including Uzbek ones.
              </p>
            </div>
            <div className="border-l-2 border-slide-primary pl-4 py-2">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-slide-primary mb-1">Adjacent risk · Datavice</p>
              <p className="text-[14px] text-slide-foreground leading-snug">
                Tashkent-registered entity sanctioned by US Treasury OFAC. <span className="text-slide-muted">Source: International Business Times, March 2026.</span>
              </p>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-3 gap-8">
            <div className="bg-slide-surface rounded-sm p-8 flex flex-col flex-1">
              <div className="w-10 h-1 bg-slide-primary rounded-sm mb-4" />
              <h3 className="text-[24px] font-bold mb-3">IFIs (EBRD, IFC, ADB)</h3>
              <ul className="space-y-3 flex-1">
                {[
                  "EBRD Article 1: rule of law as founding principle",
                  "EBRD Integrity Risk Policy S.4.2 addresses ongoing EDD for FI clients",
                  "IFC Sustainability Framework Para. 12: governance criterion",
                  "EBRD 2024 Integrity Report: withheld financing precedent",
                  "ADB Safeguard Policy: institutional capacity assessment",
                  "MIGA political risk guarantees may be triggered",
                ].map((item) => (
                  <li key={item} className="text-[18px] text-slide-muted leading-relaxed flex items-start gap-3">
                    <span className="text-slide-primary mt-1 shrink-0">&#8226;</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slide-surface rounded-sm p-8 flex flex-col flex-1">
              <div className="w-10 h-1 bg-slide-primary rounded-sm mb-4" />
              <h3 className="text-[24px] font-bold mb-3">Correspondent Banks</h3>
              <ul className="space-y-3 flex-1">
                {[
                  "Wolfsberg CBDDQ includes adverse-information screening and potential EDD escalation",
                  "OCC Bulletin 2016-32: correspondent banking risk management",
                  "BSA/AML framework under FinCEN (31 CFR 1010.610)",
                  "EU 6AMLD Art. 6(1)(c): aiding liability considerations in correspondent channels",
                ].map((item) => (
                  <li key={item} className="text-[18px] text-slide-muted leading-relaxed flex items-start gap-3">
                    <span className="text-slide-primary mt-1 shrink-0">&#8226;</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slide-surface rounded-sm p-8 flex flex-col flex-1">
              <div className="w-10 h-1 bg-slide-primary rounded-sm mb-4" />
              <h3 className="text-[24px] font-bold mb-3">Eurobond / Rating Agencies</h3>
              <ul className="space-y-3 flex-1">
                {[
                  "ICSID claim ($42-52M valuation): potential contingent-liability implications under IAS 37 (valuation prepared by Bluestone in connection with the investor’s anticipated ICSID claim; CAJI has not independently verified the methodology or assumptions)",
                  "Fitch Bank Rating Criteria: Operating Environment assessment",
                  "Moody’s Scorecard Factor 1: Macro Profile institutional framework",
                  "Potential disclosure implications for NBU financial statements",
                  "Bondholder fiduciary analyses often consider counterparty governance risk",
                ].map((item) => (
                  <li key={item} className="text-[18px] text-slide-muted leading-relaxed flex items-start gap-3">
                    <span className="text-slide-primary mt-1 shrink-0">&#8226;</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },

  // ═══ 16. BROADER CONTEXT ═══
  {
    id: "solfy-context",
    title: "Broader Context",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <div className="flex items-center justify-between">
            <SlidePill label="BROADER CONTEXT" />
            <CAJILogo />
          </div>
          <h2 className="text-[40px] font-semibold mt-6 leading-tight max-w-[1400px]">
            The Solfy case is not an isolated incident
          </h2>
          <p className="text-[20px] text-slide-muted mt-3 max-w-[1200px]">
            A pattern of investor-hostile actions has been cited in reporting as a challenge to Uzbekistan’s reform credibility
          </p>
          <div className="grid grid-cols-2 gap-6 mt-6 flex-1 min-h-0">
            {/* Left column: 3 stacked tiles */}
            <div className="flex flex-col gap-4">
              {[
                { tag: "EXTRADITION", title: "Shadmanov (2025)", text: "Forcibly extradited from Dubai. ICIJ documented use of lobbyist to trigger sanctions inquiries. Lawyers describe prosecution as politically motivated." },
                { tag: "SELECTIVE JUSTICE", title: "Former Minister Voitov (2025)", text: "Convicted under Article 167(3)(a) — the same provision as Hasanov. Received no prison time after compensating damages. Illustrates the transactional nature of embezzlement prosecutions." },
                { tag: "AIFC COMPARATOR", title: "Kazakhstan / Tokayev", text: "Kazakhstan’s AIFC, established under English commercial law and operating since 2018, has handled 1,000+ investor cases without a single foreign-investor detention. Source: International Business Times, March 2026." },
              ].map((item, i) => (
                <div key={item.title} className="bg-slide-surface rounded-sm p-5 flex-1" style={{ animation: `fade-scale 0.4s ease-out ${0.3 + i * 0.1}s both` }}>
                  <span className="text-[11px] font-bold tracking-[0.15em] uppercase px-2.5 py-0.5 rounded-sm w-fit mb-2 inline-block bg-slide-primary/10 text-slide-primary">{item.tag}</span>
                  <h3 className="text-[18px] font-bold mb-1 leading-tight">{item.title}</h3>
                  <p className="text-[14px] text-slide-muted leading-snug">{item.text}</p>
                </div>
              ))}
            </div>
            {/* Right column: Capital Flight (with FDI bars) + Investor Disputes Pattern */}
            <div className="flex flex-col gap-4">
              <div className="bg-slide-surface rounded-sm p-5">
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase px-2.5 py-0.5 rounded-sm w-fit mb-2 inline-block bg-slide-primary/10 text-slide-primary">CAPITAL FLIGHT</span>
                <h3 className="text-[18px] font-bold mb-3 leading-tight">Foreign Direct Investment Gap</h3>
                <FdiBars
                  items={[
                    { label: "Kazakhstan", value: 151 },
                    { label: "Uzbekistan", value: 17, primary: true },
                  ]}
                />
                <p className="text-[12px] text-slide-muted leading-snug mt-3">
                  Accumulated FDI stock. IBTimes identifies the Solfy case as a test of institutional reform credibility.
                </p>
              </div>
              <div className="bg-slide-primary/5 border border-slide-primary/20 rounded-sm p-5 flex-1 min-h-0">
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-slide-primary mb-2 block">Investor Disputes Pattern</span>
                <ul className="space-y-1.5 text-[13px] text-slide-foreground leading-snug">
                  <li className="flex gap-2"><span className="text-slide-primary">·</span><span><span className="font-bold">Oxus Gold</span> (UNCITRAL, 2011–15) — partial investor win.</span></li>
                  <li className="flex gap-2"><span className="text-slide-primary">·</span><span><span className="font-bold">Metal-Tech</span> (ICSID, 2010–13) — investor lost on corruption grounds.</span></li>
                  <li className="flex gap-2"><span className="text-slide-primary">·</span><span><span className="font-bold">Newmont</span> — historical mining dispute.</span></li>
                  <li className="flex gap-2"><span className="text-slide-primary">·</span><span><span className="font-bold">Bursel Tekstil</span> — Turkish investor matter.</span></li>
                  <li className="flex gap-2"><span className="text-slide-primary">·</span><span><span className="font-bold">Humans Mobile</span> (ARB/25/24, tribunal sitting Jan 2026) — see new slide.</span></li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-[13px] text-slide-muted mt-6 border-t border-slide-foreground/10 pt-4">
            <span className="font-bold text-slide-foreground">Sources:</span>{" "}
            <a href="https://ua.news/en/finansi/turetskii-advokat-gotuie-pozovi-proti-uzbekistanu-za-tisk-na-fintekh-kompaniiu-solfy" target="_blank" rel="noopener noreferrer" className="text-slide-primary hover:underline">UA.News (26 Feb 2026)</a> ·{" "}
            <a href="https://www.ng.ru/news/836631.html" target="_blank" rel="noopener noreferrer" className="text-slide-primary hover:underline">Nezavisimaya Gazeta (1 Apr 2026)</a> ·{" "}
            <a href="https://kz24.news/news/world/gromkiy-arest-v-tashkente-kak-delo-finteh-kompanii-solfy-mozhet-udarit-po-investklimatu-tsentralnoy-azii.html" target="_blank" rel="noopener noreferrer" className="text-slide-primary hover:underline">KZ24 (6 Apr 2026)</a>. CAJI reproduces these attributions as published and takes no independent position on accuracy.
          </p>
        </div>
      </SlideLayout>
    ),
  },

  // ═══ HUMANS MOBILE ICSID — parallel precedent ═══
  {
    id: "solfy-humans-mobile-icsid",
    title: "Humans Mobile ICSID",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <div className="flex items-center justify-between mb-6">
            <SlidePill label="ACTIVE ICSID PRECEDENT" />
            <CAJILogo />
          </div>
          <h2 className="text-[40px] font-semibold leading-[1.1] mb-3 anim-fade-up stagger-1">
            Independent investor case, same defendants, same playbook
          </h2>
          <p className="text-[18px] text-slide-muted leading-relaxed max-w-[1300px] mb-10 anim-fade-up stagger-2">
            Months before Hasanov&rsquo;s detention, an ICSID tribunal was already constituted to hear claims against Uzbekistan involving a state bank, the prosecution apparatus, and the same governance complex.
          </p>
          <div className="flex-1 grid grid-cols-3 gap-8 items-center min-h-0">
            <div className="anim-fade-up stagger-3">
              <div className="text-[72px] font-semibold text-slide-primary/15 leading-none mb-3 tabular-nums">01</div>
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-slide-primary mb-2">The Case</p>
              <h3 className="text-[20px] font-bold mb-3 leading-tight">
                ICSID Case No. ARB/25/24
              </h3>
              <p className="text-[15px] text-slide-foreground leading-snug mb-1.5">
                Humans Mobile Ltd v. Republic of Uzbekistan
              </p>
              <p className="text-[14px] text-slide-muted leading-snug">
                Filed: 30 May 2025 · Tribunal constituted: 7 January 2026
              </p>
              <p className="text-[14px] text-slide-muted leading-snug mt-1">
                Filed under: Singapore-Uzbekistan BIT (15 July 2003)
              </p>
            </div>
            <div className="anim-fade-up stagger-4">
              <div className="text-[72px] font-semibold text-slide-primary/15 leading-none mb-3 tabular-nums">02</div>
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-slide-primary mb-2">The Tribunal</p>
              <ul className="space-y-2 text-[15px] text-slide-foreground leading-snug">
                <li><span className="font-bold">Sir Daniel Bethlehem KCMG KC</span> <span className="text-slide-muted">(chair)</span></li>
                <li><span className="font-bold">Anne Hoffmann</span> <span className="text-slide-muted">(claimant-appointed)</span></li>
                <li><span className="font-bold">Prof. Jorge E. Viñuales</span> <span className="text-slide-muted">(respondent-appointed)</span></li>
              </ul>
              <p className="text-[14px] text-slide-foreground leading-snug mt-3">
                <span className="font-bold text-slide-primary">Damages:</span> &ldquo;hundreds of millions USD&rdquo;
              </p>
            </div>
            <div className="anim-fade-up stagger-5">
              <div className="text-[72px] font-semibold text-slide-primary/15 leading-none mb-3 tabular-nums">03</div>
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-slide-primary mb-2">The Pattern</p>
              <p className="text-[14px] text-slide-foreground leading-snug mb-2">
                <span className="font-bold">Counsel:</span> Peter &amp; Kim (claimant) / Curtis Mallet-Prevost, Colt &amp; Mosle LLP (Uzbekistan).
              </p>
              <p className="text-[14px] text-slide-foreground leading-snug mb-2">
                Allegations name: <span className="text-slide-muted">Central Bank of Uzbekistan, JSC Uzbektelecom, courts, prosecution, &ldquo;members of the ruling elite.&rdquo;</span>
              </p>
              <p className="text-[14px] text-slide-foreground leading-snug">
                <span className="font-bold text-slide-primary">Same coercive playbook:</span> regulatory paralysis → bankruptcy → criminal/Interpol leverage.
              </p>
            </div>
          </div>
          <p className="pt-6 mt-6 text-[12px] text-slide-muted/70 tracking-[0.05em] leading-snug border-t border-slide-foreground/8">
            <span className="font-bold text-slide-foreground">Source:</span> italaw.com/cases/14067 · PR Newswire 27 January 2026 · Times of Central Asia.
          </p>
        </div>
      </SlideLayout>
    ),
  },

  // ═══ 17. PUBLIC STATEMENTS ═══
  {
    id: "solfy-statements",
    title: "Public Statements",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <div className="flex items-center justify-between mb-6">
            <SlidePill label="PUBLIC STATEMENTS ON THE RECORD" />
            <CAJILogo />
          </div>
          <h2 className="text-[40px] font-semibold leading-[1.1] mb-3 anim-fade-up stagger-1">
            NBU and Counsel for Solfy issue opposing public statements
          </h2>
          <p className="text-[16px] text-slide-muted leading-relaxed max-w-[1200px] mb-8 anim-fade-up stagger-2">
            One week after the detention, the parties’ positions diverge sharply on the public record.
          </p>

          <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
            {/* NBU's verbatim statement */}
            <div className="bg-slide-surface rounded-sm p-7 flex flex-col overflow-hidden anim-slide-left stagger-3">
              <div className="flex items-center justify-between mb-3 shrink-0">
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-slide-muted">On the record from NBU</span>
                <span className="text-[12px] font-semibold text-slide-muted tabular-nums">04 APR 2026</span>
              </div>
              <h3 className="text-[20px] font-bold mb-3 shrink-0">National Bank of Uzbekistan</h3>
              <div className="space-y-3 text-[13px] text-slide-foreground leading-[1.55] overflow-hidden italic">
                <p>
                  &ldquo;The National Bank of Uzbekistan adheres to the highest standards of integrity in all its commercial relationships. The priority of the Bank is the protection of its clients&rsquo; interests, and we operate in full compliance with all applicable laws and regulatory requirements.&rdquo;
                </p>
                <p>
                  &ldquo;Negotiations with Solfy and the related legal procedures are ongoing. It would be inappropriate to comment on unsubstantiated allegations until the completion of this process.&rdquo;
                </p>
              </div>
              <p className="text-[11px] text-slide-muted/80 italic mt-3 shrink-0">
                Verbatim, two-paragraph statement. Counsel for Solfy characterizes it as &ldquo;demonstrably false.&rdquo; CAJI reproduces these attributions as published.
              </p>
              <a href="https://nbu.uz/en/news/official-position-of-the-bank-on-information-disseminated-via-social-media_04_04_26" target="_blank" rel="noopener noreferrer" className="mt-auto pt-3 text-[12px] text-slide-primary font-semibold tracking-wider uppercase hover:underline shrink-0">
                Source: nbu.uz →
              </a>
            </div>

            {/* Counsel response */}
            <div className="bg-slide-primary/5 border-l-4 border-slide-primary rounded-sm p-7 flex flex-col overflow-hidden anim-slide-right stagger-3">
              <div className="flex items-center justify-between mb-3 shrink-0">
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-slide-primary">Counsel for Solfy</span>
                <span className="text-[12px] font-semibold text-slide-muted tabular-nums">03 APR 2026</span>
              </div>
              <h3 className="text-[20px] font-bold mb-3 shrink-0">Amsterdam &amp; Partners LLP</h3>
              <p
                className="text-[20px] italic leading-snug text-slide-foreground mb-3 font-semibold"
                style={{ fontFamily: "var(--font-serif, 'Cormorant Garamond', Cormorant, Georgia, serif)" }}
              >
                &ldquo;Uzbekistan must adhere to rule of law in commercial disputes.&rdquo;
              </p>
              <div className="space-y-2 text-[13px] text-slide-muted leading-[1.55] overflow-hidden">
                <p>
                  &ldquo;The Bank employed coercive measures reminiscent of a bygone era, leveraging state administrative resources to exert pressure on a private commercial dispute.&rdquo;
                </p>
                <p>
                  Counsel states the charges <span className="font-semibold text-slide-foreground">&ldquo;lack any factual or legal foundation&rdquo;</span> and has written formally to the President of Uzbekistan and international bodies, calling for immediate release.
                </p>
              </div>
              <a href="https://amsterdamandpartners.com/press-release-amsterdam-partners-llp-to-represent-fintech-platform-solfy-in-dispute-with-national-bank-of-uzbekistan" target="_blank" rel="noopener noreferrer" className="mt-auto pt-3 text-[12px] text-slide-primary font-semibold tracking-wider uppercase hover:underline shrink-0">
                Source: amsterdamandpartners.com →
              </a>
            </div>
          </div>
          {/* Chronological anchor */}
          <div className="mt-5 grid grid-cols-3 gap-4 border-t border-slide-foreground/10 pt-4">
            <div>
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-slide-muted mb-1">24 FEB 2026</p>
              <p className="text-[13px] text-slide-foreground leading-snug">
                <span className="font-bold">A&amp;P retained:</span> Amsterdam &amp; Partners issues press release announcing representation of Solfy investors.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-slide-muted mb-1">03 APR 2026</p>
              <p className="text-[13px] text-slide-foreground leading-snug">
                <span className="font-bold">Counsel escalation:</span> Public call for rule of law in commercial disputes.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-slide-muted mb-1">04 APR 2026</p>
              <p className="text-[13px] text-slide-foreground leading-snug">
                <span className="font-bold">NBU rebuttal:</span> Two-paragraph verbatim statement (left).
              </p>
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },

  // ═══ 18. MEDIA COVERAGE ═══
  {
    id: "solfy-media",
    title: "Media Coverage",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <div className="flex items-center justify-between mb-4">
            <SlidePill label="MEDIA & INTERNATIONAL COVERAGE" />
            <CAJILogo />
          </div>
          <h2 className="text-[40px] font-semibold leading-[1.05] mb-2">
            The world is watching
          </h2>
          <p className="text-[16px] text-slide-muted mb-8">
            Selected coverage of the NBU–Solfy dispute across Russian and English-language press. Story is developing.
          </p>
          <div className="grid grid-cols-3 gap-5 flex-1 min-h-0">
            {[
              {
                source: "Vedomosti",
                lang: "RU",
                date: "04 APR 2026",
                quote: "«Задержан гендиректор финтех-компании Solfy»",
                detail: "Reports the 27 March arrest of Hasanov on suspicion of embezzlement; frames it as following the breakdown of autumn 2025 settlement talks between NBU and Solfy investors.",
                url: "https://www.vedomosti.ru/politics/news/2026/04/04/1187949-zaderzhan-gendirektor-finteh-kompanii",
              },
              {
                source: "Nezavisimaya Gazeta",
                lang: "RU",
                date: "01 APR 2026",
                quote: "«В Узбекистане „взяли в заложники“ директора финтех-стартапа Solfy»",
                detail: "Cites Solfy’s international counsel describing the arrest as ‘hostage-taking for commercial purposes,’ timed immediately after NBU rejected investor settlement proposals.",
                url: "https://www.ng.ru/news/836631.html",
              },
              {
                source: "IBTimes (Matt Emma)",
                lang: "EN",
                date: "16 MAR 2026",
                quote: "What is actually stopping Uzbekistan from growing faster",
                detail: "Pre-arrest analysis (11 days before Hasanov detention) treats the Solfy dispute as the diagnostic case for institutional reform credibility and investor allocation decisions.",
                url: "https://www.ibtimes.com",
              },
              {
                source: "RTVi US — Дежурный по Америке",
                lang: "RU",
                date: "31 MAR 2026",
                quote: "Robert Amsterdam, Maksim Poletaev — interview",
                detail: "On-record interview: counsel’s $45–55M demand band; ‘if you sign, Uktam walks out instantly’ intermediary message attributed to NBU side.",
                url: "https://rtvi.com",
              },
              {
                source: "The Diplomat",
                lang: "EN",
                date: "APR 2026",
                quote: "Uzbekistan&rsquo;s investor protection test case",
                detail: "Anglophone Asia-policy outlet covering the Solfy detention as a regional governance signal.",
                url: "https://thediplomat.com",
              },
              {
                source: "kun.uz",
                lang: "EN",
                date: "APR 2026",
                quote: "Domestic English coverage of Solfy proceedings",
                detail: "Uzbek English-language outlet on the criminal proceedings and counsel response.",
                url: "https://kun.uz/en",
              },
              {
                source: "Times of Central Asia",
                lang: "EN",
                date: "APR 2026",
                quote: "Detention escalation in Tashkent",
                detail: "Regional English-language outlet treats Solfy as continuation of pattern documented in Humans Mobile ICSID matter.",
                url: "https://timesca.com",
              },
              {
                source: "kg24.news",
                lang: "RU",
                date: "06 APR 2026",
                quote: "Регион реагирует: дело Solfy и инвестклимат ЦА",
                detail: "Neutral regional Central-Asia coverage. Notes simultaneity of NBU settlement offer and arrest.",
                url: "https://kg24.news",
              },
              {
                source: "UA.News",
                lang: "EN",
                date: "26 FEB 2026",
                quote: "Counsel preparing lawsuits against Uzbekistan over pressure on Solfy",
                detail: "Reports that Solfy investors received threats publicly attributed to NBU chairman Mirsoatov and that lawsuits are being prepared against Uzbek state bodies.",
                url: "https://ua.news/en/finansi/turetskii-advokat-gotuie-pozovi-proti-uzbekistanu-za-tisk-na-fintekh-kompaniiu-solfy",
              },
              {
                source: "Investing.com",
                lang: "EN",
                date: "03 APR 2026",
                quote: "Firm urges Uzbekistan to cease irregular detentions and uphold international legal standards",
                detail: "Public escalation by Amsterdam & Partners framing Hasanov’s detention during settlement talks as improper state pressure threatening investor confidence.",
                url: "https://www.investing.com/news/press-releases/amsterdam--partners-llp-firm-urges-uzbekistan-government-to-cease-irregular-detentions-and-uphold-international-legal-standards-4596880",
              },
            ].map((item, i) => (
              <a key={item.source} href={item.url} target="_blank" rel="noopener noreferrer"
                className="bg-slide-surface border-l-2 border-slide-primary rounded-sm p-6 flex flex-col hover:bg-slide-primary/5 transition-colors group"
                style={{ animation: `slide-up 0.4s ease-out ${0.25 + i * 0.1}s both` }}
              >
                <div className="flex items-center justify-between mb-3 shrink-0">
                  <span className="text-[16px] font-semibold tracking-tight tabular-nums">{item.source}</span>
                  <span className="text-[11px] font-bold text-slide-primary tracking-[0.15em]">{item.lang}</span>
                </div>
                <p className="text-[11px] font-semibold text-slide-muted tracking-[0.15em] mb-3">{item.date}</p>
                <p className="text-[16px] font-semibold leading-snug mb-3 italic text-slide-foreground">
                  {item.quote}
                </p>
                <p className="text-[13px] text-slide-muted leading-relaxed flex-1">{item.detail}</p>
                <span className="text-[11px] text-slide-primary font-semibold tracking-wider uppercase mt-3 shrink-0 group-hover:underline">Read →</span>
              </a>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between gap-6 border-t border-slide-foreground/10 pt-4">
            <p className="text-[13px] text-slide-muted leading-relaxed">
              <span className="font-bold text-slide-foreground">Additional coverage:</span> UzDaily (uzdaily.uz, 27 Feb 2026) · Repost.uz (Solfy partnership background, 20 Jun 2023) · Reuters/Xinhua wire (Fitch BB affirmation of NBU, 15 Mar 2026).
            </p>
            <span className="text-[16px] font-bold text-slide-primary shrink-0">→</span>
          </div>
        </div>
      </SlideLayout>
    ),
  },

  // ═══ 18. LEGAL REMEDIES ═══
  {
    id: "solfy-legal-remedies",
    title: "Legal Remedies",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <div className="flex items-center justify-between mb-12">
            <SlidePill label="LEGAL REMEDIES IN PROGRESS" />
            <CAJILogo />
          </div>
          <h2 className="text-[40px] font-semibold leading-[1.1] mb-12">
            Three-track legal and advocacy strategy
          </h2>
          <div className="flex-1 grid grid-cols-3 gap-12 items-center">
            <div style={{ animation: "slide-up 0.5s ease-out 0.2s both" }}>
              <div className="text-[72px] font-semibold text-slide-primary/15 leading-none mb-4 tabular-nums">01</div>
              <h3 className="text-[26px] font-bold mb-4 leading-tight">ICSID BIT Arbitration</h3>
              <p className="text-[18px] text-slide-muted leading-relaxed mb-3">
                According to investor-side materials, an investment treaty claim under the Russia-Uzbekistan bilateral investment treaty is imminent. The investor side indicates it intends to invoke ICSID jurisdiction for alleged violations of fair and equitable treatment, protection against expropriation, and full protection and security.
              </p>
              <div className="bg-slide-primary/5 border border-slide-primary/20 rounded-sm p-4 space-y-2">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-slide-muted">Independent valuation</span>
                  <span className="text-[16px] font-bold tabular-nums text-slide-foreground">$42–52M</span>
                </div>
                <p className="text-[12px] text-slide-muted leading-snug">Bluestone (investor-anticipated ICSID claim).</p>
                <div className="flex items-baseline justify-between gap-3 pt-2 border-t border-slide-primary/15">
                  <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-slide-primary">Counsel demand band</span>
                  <span className="text-[16px] font-bold tabular-nums text-slide-primary">$45–55M</span>
                </div>
                <p className="text-[12px] text-slide-muted leading-snug">Robert Amsterdam, RTVi US interview, 31 March 2026.</p>
              </div>
              <p className="text-[12px] text-slide-muted/80 italic mt-3 leading-snug">
                CAJI has not independently verified the methodology or assumptions of the valuation.
              </p>
            </div>
            <div style={{ animation: "slide-up 0.5s ease-out 0.35s both" }}>
              <div className="text-[72px] font-semibold text-slide-primary/15 leading-none mb-4 tabular-nums">02</div>
              <h3 className="text-[26px] font-bold mb-4 leading-tight">Criminal Defense</h3>
              <p className="text-[20px] text-slide-muted leading-relaxed">
                Hasanov’s independent defense counsel in Tashkent is fully funded and operational. Defense position: charges lack legal merit and repackage a commercial dispute as criminal prosecution.
              </p>
            </div>
            <div style={{ animation: "slide-up 0.5s ease-out 0.5s both" }}>
              <div className="text-[72px] font-semibold text-slide-primary/15 leading-none mb-4 tabular-nums">03</div>
              <h3 className="text-[26px] font-bold mb-4 leading-tight">International Advocacy</h3>
              <p className="text-[20px] text-slide-muted leading-relaxed">
                Coordinated engagement with IFIs, rating agencies, correspondent banks, eurobond stakeholders, and international media to present the investor side’s account and supporting materials.
              </p>
            </div>
          </div>
          <p className="pt-8 text-[13px] text-slide-muted/70 tracking-[0.05em] leading-relaxed border-t border-slide-foreground/8">
            Sources: Russia–Uzbekistan bilateral investment treaty, Bluestone valuation report (provided by investor side), defense counsel filings (Tashkent) — CAJI has not independently verified the methodology or assumptions of the valuation.
          </p>
        </div>
      </SlideLayout>
    ),
  },

  // ═══ 18. DISCLAIMER ═══
  disclaimerSlide,

  // ═══ 19. CONTACT ═══
  {
    id: "solfy-contact",
    title: "Request a Briefing",
    component: (props) => (
      <SlideLayout variant="dark" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <div className="flex items-center justify-between mb-8">
            <SlidePill label="NEXT STEPS" variant="light" />
            <CAJILogo variant="light" />
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="text-center mb-10">
              <h2 className="text-[40px] font-semibold text-primary-foreground leading-[1.05] mb-4" style={{ animation: "slide-up 0.6s ease-out 0.2s both" }}>
                Request a Confidential Briefing
              </h2>
              <div className="w-16 h-px bg-slide-primary mx-auto mb-4" />
              <p className="text-[20px] text-primary-foreground/60 max-w-[900px] mx-auto leading-relaxed" style={{ animation: "fade-in 0.5s ease-out 0.4s both" }}>
                We invite compliance, legal, and investment teams to a 30-minute confidential Zoom briefing on the documented facts.
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="https://www.caji.org"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-4 bg-slide-primary hover:bg-slide-primary/90 text-primary-foreground rounded-sm px-10 py-5 mb-10 transition-colors group" style={{ animation: "fade-scale 0.5s ease-out 0.6s both" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              <span className="text-[20px] font-bold">Schedule a Briefing</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <div className="grid grid-cols-2 gap-6">
              {/* Briefing Held With */}
              <div className="border border-primary-foreground/15 rounded-sm p-8" style={{ animation: "slide-in-left 0.5s ease-out 0.7s both" }}>
                <p className="text-[13px] text-slide-primary font-semibold tracking-[0.15em] uppercase mb-5">Briefing Held With</p>
                <div className="space-y-5">
                  <div>
                    <p className="text-[20px] text-primary-foreground font-semibold leading-snug">CAJI Board of Directors</p>
                    <p className="text-[13px] text-primary-foreground/50 mt-1">Central Asia Justice Initiative</p>
                  </div>
                  <div className="pt-4 border-t border-primary-foreground/10">
                    <p className="text-[20px] text-primary-foreground font-semibold leading-snug">Keith Silverstein, Esq.</p>
                    <p className="text-[13px] text-primary-foreground/50 mt-1">Legal Counsel</p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="border border-primary-foreground/15 rounded-sm p-8" style={{ animation: "slide-in-right 0.5s ease-out 0.7s both" }}>
                <p className="text-[13px] text-slide-primary font-semibold tracking-[0.15em] uppercase mb-5">Contact</p>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-4">
                    <span className="text-[13px] text-primary-foreground/40 tracking-[0.15em] uppercase w-[80px] shrink-0">Web</span>
                    <a href="https://www.caji.org" target="_blank" rel="noopener noreferrer" className="text-[16px] text-primary-foreground font-semibold hover:text-slide-primary transition-colors">
                      www.caji.org
                    </a>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="text-[13px] text-primary-foreground/40 tracking-[0.15em] uppercase w-[80px] shrink-0">Address</span>
                    <p className="text-[16px] text-primary-foreground/80 leading-snug">
                      Central Asia Justice Initiative, Inc.<br />
                      <span className="text-primary-foreground/55">Delaware · United States</span>
                    </p>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="text-[13px] text-primary-foreground/40 tracking-[0.15em] uppercase w-[80px] shrink-0">Email</span>
                    <a href="mailto:info@caji.org" className="text-[16px] text-primary-foreground font-semibold hover:text-slide-primary transition-colors">
                      info@caji.org
                    </a>
                  </div>
                  <div className="flex items-baseline gap-4 pt-3 border-t border-primary-foreground/10">
                    <span className="text-[13px] text-primary-foreground/40 tracking-[0.15em] uppercase w-[80px] shrink-0">Tip Line</span>
                    <a href="https://nbu.caji.org" target="_blank" rel="noopener noreferrer" className="text-[16px] text-primary-foreground font-semibold hover:text-slide-primary transition-colors">
                      nbu.caji.org
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-primary-foreground/30 text-center mt-8" style={{ animation: "fade-in 0.5s ease-out 1.2s both" }}>
            This briefing contains privileged and confidential information. Distribution at recipient’s discretion.
          </p>
        </div>
      </SlideLayout>
    ),
  },
];
