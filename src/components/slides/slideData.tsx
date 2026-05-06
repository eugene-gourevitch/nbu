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
        <div className="flex-1 flex flex-col justify-center max-w-[1400px]">
          <SlidePill label="BRIEFING NOTICE" />
          <h2 className="text-[40px] font-bold text-slide-foreground mt-6 leading-tight">
            Notice on sources, scope, and distribution
          </h2>
          <div className="mt-10 space-y-6 text-[20px] leading-[1.7] text-slide-muted">
            <div>
              <h3 className="text-[24px] font-bold text-slide-foreground mb-2">About this briefing</h3>
              <p>This document presents CAJI’s analysis of publicly available information and materials provided by parties aligned with the investor side of the Solfy CA dispute. CAJI has not had access to materials, evidence, or legal positions held by the National Bank of Uzbekistan or the Government of Uzbekistan, and the characterizations contained herein reflect one interpretation of contested facts. Readers conducting their own due diligence should seek information directly from all parties to the dispute.</p>
            </div>
            <div>
              <h3 className="text-[24px] font-bold text-slide-foreground mb-2">About distribution</h3>
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
          <p className="text-[20px] text-slide-muted max-w-[1400px] leading-relaxed mb-8 anim-fade-in stagger-1">
            A fintech joint venture that became the center of an investor-state dispute with international implications.
          </p>

          <div className="flex-1 grid grid-cols-2 gap-10 min-h-0">
            {/* The Venture */}
            <div className="bg-slide-surface rounded-sm p-8 flex flex-col overflow-hidden anim-slide-left stagger-2">
              <h3 className="text-[24px] font-bold text-slide-primary mb-5 shrink-0">The Venture</h3>
              <div className="space-y-4 text-[16px] text-slide-muted leading-[1.65] overflow-hidden">
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
            <div className="bg-slide-surface rounded-sm p-8 flex flex-col overflow-hidden anim-slide-right stagger-2">
              <h3 className="text-[24px] font-bold text-slide-primary mb-5 shrink-0">The Collapse</h3>
              <div className="space-y-4 text-[16px] text-slide-muted leading-[1.65] overflow-hidden">
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
            <div className="bg-slide-surface rounded-sm p-7 flex flex-col overflow-hidden anim-fade-up stagger-2">
              <h3 className="text-[24px] font-bold text-slide-primary mb-4 shrink-0">Institutional Identity</h3>
              <div className="space-y-3 text-[16px] text-slide-muted leading-[1.6] overflow-hidden">
                <p><span className="font-bold text-slide-foreground">Founded 1991</span> as Uzbekistan’s primary foreign trade bank. Largest commercial bank by total assets.</p>
                <p><span className="font-bold text-slide-foreground">100% state-owned.</span> Fund for Reconstruction & Development (59.25%) and Ministry of Economy & Finance (40.75%).</p>
                <p><span className="font-bold text-slide-foreground">Authorized capital:</span> UZS 16.7 trillion.</p>
                <p><span className="font-bold text-slide-foreground">Ratings:</span> S&P BB | Fitch BB | Moody’s Ba3 (all stable).</p>
              </div>
            </div>

            {/* Column 2: Capital Markets */}
            <div className="bg-slide-surface rounded-sm p-7 flex flex-col overflow-hidden anim-fade-up stagger-3">
              <h3 className="text-[24px] font-bold text-slide-primary mb-4 shrink-0">Capital Markets Presence</h3>
              <div className="space-y-4 overflow-hidden">
                <div className="bg-slide-bg rounded-sm p-5">
                  <p className="text-[13px] text-slide-muted tracking-[0.15em] uppercase mb-1">LSE Eurobond</p>
                  <p className="text-[16px] font-bold">2020 issuance, Reg S / 144A</p>
                  <p className="text-[13px] text-slide-muted mt-1">Outstanding obligations to international bondholders</p>
                </div>
                <div>
                  <p className="text-[13px] text-slide-primary font-bold tracking-[0.15em] uppercase mb-2">Correspondent Banks</p>
                  <p className="text-[16px] text-slide-muted leading-relaxed">JP Morgan Chase, Citibank, Standard Chartered, Deutsche Bank, Natixis, SMBC</p>
                </div>
              </div>
            </div>

            {/* Column 3: Development Finance */}
            <div className="bg-slide-surface rounded-sm p-7 flex flex-col overflow-hidden anim-fade-up stagger-4">
              <h3 className="text-[24px] font-bold text-slide-primary mb-4 shrink-0">Development Finance</h3>
              <div className="space-y-4 overflow-hidden">
                {[
                  { org: "EBRD", role: "Active credit lines. Integrity Risk Policy applies." },
                  { org: "IFC", role: "World Bank Group lending. Performance Standards apply." },
                  { org: "ADB", role: "Development credit facilities." },
                  { org: "MIGA", role: "Political risk guarantees covering NBU exposure." },
                ].map((item) => (
                  <div key={item.org} className="flex gap-3">
                    <span className="text-[13px] font-bold text-slide-foreground w-[52px] shrink-0">{item.org}</span>
                    <p className="text-[13px] text-slide-muted leading-relaxed">{item.role}</p>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-4 border-t border-slide-foreground/8">
                <p className="text-[13px] text-slide-foreground">
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

          <div className="flex gap-12 flex-1">
            {/* Left column */}
            <div className="w-[35%] flex flex-col anim-slide-left stagger-2">
              <div className="bg-slide-surface rounded-sm p-8 flex flex-col items-center mb-6">
                <img src={nbuLogo} alt="NBU Logo" className="w-[120px] h-[120px] object-contain mb-4" />
                <h3 className="text-[24px] font-bold text-center leading-tight">National Bank for Foreign Economic Activity</h3>
                <p className="text-[16px] text-slide-muted text-center mt-2">Republic of Uzbekistan</p>
                <p className="text-[13px] text-slide-muted text-center mt-1">Est. 1991 | Tashkent</p>
              </div>

              <div className="bg-slide-surface rounded-sm p-6 mb-6">
                <h4 className="text-[20px] font-bold text-slide-primary mb-3">Shareholding Structure</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-[16px] font-semibold mb-1">
                      <span>Fund for Reconstruction & Development</span>
                      <span className="text-slide-primary">59.25%</span>
                    </div>
                    <div className="w-full h-2 bg-slide-primary/10 rounded-sm overflow-hidden">
                      <div className="h-full bg-slide-primary rounded-sm" style={{ width: "59.25%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[16px] font-semibold mb-1">
                      <span>Ministry of Economy & Finance</span>
                      <span className="text-slide-primary">40.75%</span>
                    </div>
                    <div className="w-full h-2 bg-slide-primary/10 rounded-sm overflow-hidden">
                      <div className="h-full bg-slide-primary rounded-sm" style={{ width: "40.75%" }} />
                    </div>
                  </div>
                </div>
                <p className="text-[16px] text-slide-muted mt-3">100% of shares held by state entities. Total authorized capital: UZS 16.7 trillion.</p>
              </div>

              <div className="bg-slide-surface rounded-sm p-6">
                <h4 className="text-[20px] font-bold text-slide-primary mb-3">Credit Ratings</h4>
                <div className="space-y-2 text-[16px]">
                  <div className="flex justify-between"><span className="text-slide-muted">S&P</span><span className="font-bold">BB (stable)</span></div>
                  <div className="flex justify-between"><span className="text-slide-muted">Fitch</span><span className="font-bold">BB (stable)</span></div>
                  <div className="flex justify-between"><span className="text-slide-muted">Moody’s</span><span className="font-bold">Ba3 (stable)</span></div>
                </div>
                <a href="https://www.thestar.com.my/news/world/2026/03/15/fitch-affirms-national-bank-of-uzbekistan039s-default-ratings-at-039bb039-with-stable-outlook" target="_blank" rel="noopener noreferrer" className="block mt-3 pt-3 border-t border-slide-foreground/10 text-[13px] text-slide-primary font-semibold hover:underline">
                  Fitch affirmation, 15 Mar 2026 →
                </a>
              </div>
            </div>

            {/* Right column */}
            <div className="flex-1 flex flex-col gap-6 justify-between anim-slide-right stagger-3">
              <div className="bg-slide-surface rounded-sm p-6">
                <h4 className="text-[20px] font-bold text-slide-primary mb-4">Management Board</h4>
                <div className="space-y-3">
                  {[
                    { name: "Alisher Mirsoatov", role: "Chairman (since Nov 2017)" },
                    { name: "Sardorbek Usmanbekov", role: "First Deputy Chairman" },
                    { name: "Bakhodir Jalilov", role: "Deputy Chairman" },
                    { name: "Azamat Kurambaev", role: "Deputy Chairman" },
                    { name: "Azizbek Khodjaev", role: "Deputy Chairman" },
                    { name: "Bakhtiyor Mirdovidov", role: "Deputy Chairman" },
                    { name: "Bohodir Rikhsiev", role: "Chief Accountant" },
                  ].map((person) => (
                    <div key={person.name} className="flex items-start gap-3 pb-2 border-b border-slide-foreground/5 last:border-0 last:pb-0">
                      <div className="w-1.5 h-1.5 rounded-sm bg-slide-primary mt-2.5 shrink-0" />
                      <div>
                        <span className="text-[16px] font-bold">{person.name}</span>
                        <span className="text-[13px] text-slide-primary ml-2">{person.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slide-primary/5 border border-slide-primary/15 rounded-sm p-5 anim-fade-up stagger-5">
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
                  <li key={item} className="flex gap-3 text-[16px] text-slide-muted leading-relaxed">
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
                  <li key={item} className="flex gap-3 text-[16px] text-slide-muted leading-relaxed">
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
                  <li key={item} className="flex gap-3 text-[16px] text-slide-muted leading-relaxed">
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
        { date: "MAR 17", title: "Settlement Proposal", desc: "Investor side submits detailed settlement counter-proposal. Demands criminal complaint withdrawal as condition precedent.", accent: false },
        { date: "MAR 25", title: "Deadline Letter", desc: "After 8 days of silence, investor side sends formal deadline letter. States firm will pursue all available remedies if no response by 5 PM GMT.", accent: false },
        { date: "MAR 26", title: "Rejection", desc: "NBU rejects criminal complaint withdrawal. References its own procedural powers within the criminal proceedings in the context of settlement negotiations.", accent: false },
        { date: "MAR 27", title: "Charges Filed", desc: "Major B.G. Giyasov formally charges Hasanov. Four counts under Article 167(3)(a). Hasanov taken into custody in Tashkent.", accent: true },
      ];
      return (
        <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
          <div className="flex flex-col h-full p-[80px]">
            <div className="flex items-center justify-between mb-6">
              <SlidePill label="THE CRITICAL TEN-DAY WINDOW" />
              <CAJILogo />
            </div>
            <h2 className="text-[40px] font-semibold leading-[1.1] mb-16">
              March 17-27, 2026: From settlement counter-proposal to criminal charges
            </h2>
            <div className="flex-1 flex items-center">
              <div className="w-full relative">
                <div className="absolute left-0 right-0 top-[40px] h-[3px] bg-slide-foreground/10">
                  <div className="h-full bg-slide-primary rounded-sm" style={{ animation: "timeline-fill 1.8s ease-out 0.3s forwards", width: "0%" }} />
                </div>
                <div className="grid grid-cols-4 gap-8 relative">
                  {steps.map((step, i) => (
                    <div key={step.date} className="flex flex-col items-center text-center">
                      <div className={`w-[80px] h-[80px] rounded-sm flex items-center justify-center text-[16px] font-semibold tracking-wide relative z-10 ${
                        step.accent ? "bg-slide-primary text-primary-foreground shadow-[0_0_30px_hsl(var(--slide-primary)/0.4)]" : "bg-slide-bg border-[3px] border-slide-primary text-slide-primary"
                      }`} style={{ animation: `scale-in 0.4s ease-out ${0.3 + i * 0.35}s both` }}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className={`mt-5 px-5 py-2 rounded-sm text-[13px] font-bold tracking-wider ${
                        step.accent ? "bg-slide-primary text-primary-foreground" : "bg-slide-primary/10 text-slide-primary"
                      }`} style={{ animation: `fade-in 0.3s ease-out ${0.5 + i * 0.35}s both` }}>
                        {step.date}
                      </div>
                      <div style={{ animation: `slide-up 0.4s ease-out ${0.6 + i * 0.35}s both` }}>
                        <h3 className={`mt-4 text-[20px] font-bold leading-tight ${step.accent ? "text-slide-primary" : "text-slide-foreground"}`}>
                          {step.title}
                        </h3>
                        <p className="mt-3 text-[16px] text-slide-muted leading-relaxed max-w-[360px]">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
      <ComparisonTemplate
        {...props}
        pillLabel="IRRECONCILABLE DUAL ROLE"
        headline="The entity claiming to be the victim approved every capital allocation it now claims was embezzled"
        leftTitle="Equity Stakeholder"
        leftItems={[
          "NBU holds a 5% equity stake in Solfy CA",
          "Investment committee authorized three capital infusions totaling over 17 billion soums",
          "Senior retail management publicly endorsed the product",
          "Partnership announced in national media by NBU’s own Managing Director of Retail",
        ]}
        rightTitle="Criminal Complainant"
        rightItems={[
          "Simultaneously the complainant in the criminal case",
          "March 26 letter references its procedural powers within the criminal proceedings",
          "Acknowledges the criminal case is within its sphere of influence",
          "Not independent prosecutorial action",
        ]}
      />
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
          <p className="text-[16px] text-slide-muted leading-relaxed mb-8 max-w-[1200px]">
            Under Uzbek criminal procedure (Articles 236-243 CPC) and international standards, pre-trial detention is a measure of last resort.
          </p>
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
          <div className="flex-1 grid grid-cols-2 gap-16">
            <div className="anim-slide-left stagger-2">
              <h3 className="text-[24px] font-semibold text-slide-primary mb-6">Charged</h3>
              <div className="bg-slide-surface rounded-[6px] p-8">
                <h4 className="text-[24px] font-semibold mb-3">Hasanov Uktam Nasulloyevich</h4>
                <p className="text-[20px] text-slide-muted leading-relaxed">
                  Locally appointed director. The most vulnerable individual in the corporate chain. No personal enrichment alleged.
                </p>
              </div>
            </div>
            <div className="anim-slide-right stagger-3">
              <h3 className="text-[24px] font-semibold mb-6">Not charged</h3>
              <ul className="space-y-5">
                {[
                  "Foreign co-founders who directed corporate strategy",
                  "NBU’s investment committee members who authorized three capital tranches totaling 17+ billion soums",
                  "NBU’s compliance and audit functions responsible for oversight",
                  "NBU’s retail division leadership who publicly endorsed the product",
                  "20% shareholder Full Stack Solution and its principals (Izrailbekov)",
                ].map((item, i) => (
                  <li key={item} className="text-[20px] text-slide-muted leading-relaxed flex items-start gap-3" style={{ animation: `fade-in 0.3s ease-out ${0.5 + i * 0.1}s both` }}>
                    <span className="w-1.5 h-1.5 mt-2.5 bg-slide-primary inline-block shrink-0" aria-hidden="true" />
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
          <h2 className="text-[40px] font-semibold leading-[1.1] mb-16">
            A contractual dispute repackaged as criminal prosecution
          </h2>
          <div className="grid grid-cols-3 gap-12">
            <div style={{ animation: "slide-up 0.5s ease-out 0.2s both" }}>
              <div className="text-[64px] font-semibold text-slide-primary/15 leading-none mb-3 tabular-nums">01</div>
              <h3 className="text-[24px] font-bold mb-3">Allegation: Purposeless Squandering</h3>
              <p className="text-[20px] text-slide-muted leading-relaxed">
                Charges allege misappropriation of ~17 billion soums in charter capital. Yet the prosecution’s own evidence describes operational expenditures: staff salaries, technology development, merchant acquisition. Normal costs of running a fintech startup.
              </p>
            </div>
            <div style={{ animation: "slide-up 0.5s ease-out 0.35s both" }}>
              <div className="text-[64px] font-semibold text-slide-primary/15 leading-none mb-3 tabular-nums">02</div>
              <h3 className="text-[24px] font-bold mb-3">Allegation: Unpaid Bank Rewards</h3>
              <p className="text-[20px] text-slide-muted leading-relaxed">
                Charges allege 14.9 billion soums in unpaid contractual rewards owed to NBU. These correspond to obligations under Agreement No. 289/37, already adjudicated in civil court rulings (December 2024, May 2025). The criminal complaint repackages a commercial dispute.
              </p>
            </div>
            <div style={{ animation: "slide-up 0.5s ease-out 0.5s both" }}>
              <div className="text-[64px] font-semibold text-slide-primary/15 leading-none mb-3 tabular-nums">03</div>
              <h3 className="text-[24px] font-bold mb-3">NBU Approved Every Tranche</h3>
              <p className="text-[20px] text-slide-muted leading-relaxed">
                NBU’s own investment committee authorized every capital allocation it now characterizes as embezzlement. This sequence may indicate a material inconsistency between prior governance approvals and subsequent criminal characterization of the same expenditures.
              </p>
            </div>
          </div>
          <p className="mt-auto pt-12 text-[13px] text-slide-muted/70 tracking-[0.05em] leading-relaxed border-t border-slide-foreground/8">
            Sources: criminal charging documents (case file), Tashkent commercial court rulings (Dec 2024, May 2025), NBU investment committee minutes — as characterized by the investor side.
          </p>
        </div>
      </SlideLayout>
    ),
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
          <p className="text-[20px] text-slide-muted leading-relaxed max-w-[1200px] mb-10">
            The following frameworks may be relevant to counterparties evaluating their exposure.
          </p>
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
                  <li key={item} className="text-[16px] text-slide-muted leading-relaxed flex items-start gap-3">
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
                  <li key={item} className="text-[16px] text-slide-muted leading-relaxed flex items-start gap-3">
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
                  <li key={item} className="text-[16px] text-slide-muted leading-relaxed flex items-start gap-3">
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
          <div className="grid grid-cols-2 gap-8 mt-10 flex-1">
            {[
              { tag: "EXTRADITION", title: "Shadmanov (2025)", text: "Forcibly extradited from Dubai. ICIJ documented use of lobbyist to trigger sanctions inquiries. Lawyers describe prosecution as politically motivated.", accent: "bg-slide-primary/10 text-slide-primary" },
              { tag: "ICSID ARBITRATION", title: "Humans Mobile v. Uzbekistan", text: "ICSID ARB/25/24 — Singapore-based company initiated arbitration citing bilateral investment treaty violations by Uzbek state authorities.", accent: "bg-slide-primary/50/10 text-slide-primary" },
              { tag: "SELECTIVE JUSTICE", title: "Former Minister Voitov (2025)", text: "Convicted under Article 167(3)(a) — the same provision as Hasanov. Received no prison time after compensating damages. Illustrates the transactional nature of embezzlement prosecutions.", accent: "bg-slide-primary/10 text-slide-primary" },
              { tag: "CAPITAL FLIGHT", title: "Foreign Direct Investment Gap", text: "Kazakhstan: $151B accumulated FDI stock. Uzbekistan: $17B. IBTimes identifies the Solfy case as a test of institutional reform credibility.", accent: "bg-slide-primary/10 text-slide-primary" },
            ].map((item, i) => (
              <div key={item.title} className="bg-slide-surface rounded-sm p-8 flex flex-col" style={{ animation: `fade-scale 0.5s ease-out ${0.3 + i * 0.15}s both` }}>
                <span className={`text-[13px] font-bold tracking-[0.15em] px-3 py-1 rounded-sm w-fit mb-4 ${item.accent}`} style={{ animation: `scale-in 0.3s ease-out ${0.6 + i * 0.15}s both` }}>{item.tag}</span>
                <h3 className="text-[24px] font-bold mb-3">{item.title}</h3>
                <p className="text-[20px] text-slide-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
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

          <div className="flex-1 grid grid-cols-2 gap-8 min-h-0">
            {/* NBU’s statement */}
            <div className="bg-slide-surface rounded-sm p-8 flex flex-col overflow-hidden anim-slide-left stagger-3">
              <div className="flex items-center justify-between mb-4 shrink-0">
                <span className="text-[13px] font-bold tracking-[0.15em] uppercase text-slide-muted">NBU Official Statement</span>
                <span className="text-[13px] font-semibold text-slide-muted tabular-nums">04 APR 2026</span>
              </div>
              <h3 className="text-[24px] font-bold mb-4 shrink-0">National Bank of Uzbekistan</h3>
              <div className="space-y-4 text-[16px] text-slide-muted leading-[1.6] overflow-hidden">
                <p>
                  On 4 April 2026, NBU published a public statement on its official website addressing the dispute and the criminal proceedings against Solfy CA’s director.
                </p>
                <p>
                  Counsel for Solfy publicly characterizes the statement as <span className="font-bold text-slide-foreground">“demonstrably false”</span> and contends it amounts to disinformation by a central banking authority during active settlement negotiations.
                </p>
                <p className="text-[13px] text-slide-muted/80 italic">
                  CAJI reproduces this attribution as it appears in published sources and takes no independent position on the accuracy of either statement.
                </p>
              </div>
              <a href="https://nbu.uz" target="_blank" rel="noopener noreferrer" className="mt-auto pt-4 text-[13px] text-slide-primary font-semibold tracking-wider uppercase hover:underline shrink-0">
                Source: nbu.uz →
              </a>
            </div>

            {/* Counsel response */}
            <div className="bg-slide-primary/5 border-l-4 border-slide-primary rounded-sm p-8 flex flex-col overflow-hidden anim-slide-right stagger-3">
              <div className="flex items-center justify-between mb-4 shrink-0">
                <span className="text-[13px] font-bold tracking-[0.15em] uppercase text-slide-primary">Counsel for Solfy — Response</span>
                <span className="text-[13px] font-semibold text-slide-muted tabular-nums">APR 2026</span>
              </div>
              <h3 className="text-[24px] font-bold mb-4 shrink-0">Amsterdam &amp; Partners LLP</h3>
              <div className="space-y-3 text-[16px] text-slide-muted leading-[1.55] overflow-hidden">
                <p className="text-slide-foreground italic font-semibold">
                  “The Bank employed coercive measures reminiscent of a bygone era, leveraging state administrative resources to exert pressure on a private commercial dispute.”
                </p>
                <p>
                  Counsel states the Bank facilitated the arrest and unlawful detention of Mr. Hasanov in an apparent attempt to force a resolution on terms favourable to itself, and that the charges <span className="font-semibold text-slide-foreground">“lack any factual or legal foundation.”</span>
                </p>
                <p>
                  Counsel has formally written to the President of Uzbekistan and to relevant international bodies, calling for immediate release and resumption of good-faith negotiations.
                </p>
                <p className="text-slide-foreground font-semibold">
                  A global press conference is being convened out of London.
                </p>
              </div>
              <a href="https://amsterdamandpartners.com/press-release-amsterdam-partners-llp-to-represent-fintech-platform-solfy-in-dispute-with-national-bank-of-uzbekistan" target="_blank" rel="noopener noreferrer" className="mt-auto pt-4 text-[13px] text-slide-primary font-semibold tracking-wider uppercase hover:underline shrink-0">
                Source: amsterdamandpartners.com →
              </a>
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
                source: "Vek (wek.ru)",
                lang: "RU",
                date: "10 APR 2026",
                quote: "«„Это не дело, это заложник“ и ещё три удара по репутации»",
                detail: "Argues the embezzlement charge is pretextual leverage in a commercial dispute and lists reputational consequences for Uzbekistan’s investment image.",
                url: "https://wek.ru/yeto-ne-delo-yeto-zalozhnik-i-eshhyo-tri-udara-po-reputacii",
              },
              {
                source: "KZ24",
                lang: "RU",
                date: "06 APR 2026",
                quote: "«Громкий арест в Ташкенте: как дело Solfy может ударить по инвестклимату»",
                detail: "Regional Central-Asia angle: criminal prosecution as commercial leverage risks deterring foreign tech capital across the region.",
                url: "https://kz24.news/news/world/gromkiy-arest-v-tashkente-kak-delo-finteh-kompanii-solfy-mozhet-udarit-po-investklimatu-tsentralnoy-azii.html",
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
          <h2 className="text-[40px] font-semibold leading-[1.1] mb-16">
            Three-track legal and advocacy strategy
          </h2>
          <div className="grid grid-cols-3 gap-12">
            <div style={{ animation: "slide-up 0.5s ease-out 0.2s both" }}>
              <div className="text-[64px] font-semibold text-slide-primary/15 leading-none mb-3 tabular-nums">01</div>
              <h3 className="text-[24px] font-bold mb-3">ICSID BIT Arbitration</h3>
              <p className="text-[20px] text-slide-muted leading-relaxed">
                According to investor-side materials, an investment treaty claim under the Russia-Uzbekistan bilateral investment treaty is imminent. The investor side indicates it intends to invoke ICSID jurisdiction for alleged violations of fair and equitable treatment, protection against expropriation, and full protection and security. Bluestone independent valuation: <span className="font-bold text-slide-foreground">$42-52 million</span> (valuation prepared by Bluestone in connection with the investor’s anticipated ICSID claim; CAJI has not independently verified the methodology or assumptions). This valuation is presented by the investor side as supporting claim materiality.
              </p>
            </div>
            <div style={{ animation: "slide-up 0.5s ease-out 0.35s both" }}>
              <div className="text-[64px] font-semibold text-slide-primary/15 leading-none mb-3 tabular-nums">02</div>
              <h3 className="text-[24px] font-bold mb-3">Criminal Defense</h3>
              <p className="text-[20px] text-slide-muted leading-relaxed">
                Hasanov’s independent defense counsel in Tashkent is fully funded and operational. Defense position: charges lack legal merit and repackage a commercial dispute as criminal prosecution.
              </p>
            </div>
            <div style={{ animation: "slide-up 0.5s ease-out 0.5s both" }}>
              <div className="text-[64px] font-semibold text-slide-primary/15 leading-none mb-3 tabular-nums">03</div>
              <h3 className="text-[24px] font-bold mb-3">International Advocacy</h3>
              <p className="text-[20px] text-slide-muted leading-relaxed">
                Coordinated engagement with IFIs, rating agencies, correspondent banks, eurobond stakeholders, and international media to present the investor side’s account and supporting materials.
              </p>
            </div>
          </div>
          <p className="mt-auto pt-12 text-[13px] text-slide-muted/70 tracking-[0.05em] leading-relaxed border-t border-slide-foreground/8">
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
