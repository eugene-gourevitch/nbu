import { ReactNode, useState, useEffect } from "react";
import {
  TitleSlideTemplate,
  TwoColumnFreeformTemplate,
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
import OmniStratLogo from "./OmniStratLogo";
import hero3d from "@/assets/hero-3d.jpg";
import missionBg from "@/assets/mission-bg.jpg";
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
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const diff = now.getTime() - DETENTION_DATE.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const units = [
    { value: days, label: "DAYS" },
    { value: hours, label: "HOURS" },
    { value: minutes, label: "MINUTES" },
    { value: seconds, label: "SECONDS" },
  ];

  return (
    <div className="flex gap-6">
      {units.map((u) => (
        <div key={u.label} className="flex flex-col items-center" style={{ minWidth: 80 }}>
          <span
            className="text-[72px] font-bold leading-none text-white"
            style={{ fontFamily: "'Montserrat', sans-serif", fontVariantNumeric: "tabular-nums" }}
          >
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="text-[14px] tracking-[0.2em] text-white/50 mt-2">{u.label}</span>
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
        <OmniStratLogo />
        <div className="flex-1 flex flex-col justify-center max-w-[1400px]">
          <SlidePill label="CONFIDENTIALITY NOTICE" />
          <h2 className="text-[44px] font-bold text-slide-foreground mt-6 leading-tight">
            Confidentiality Statement & Disclaimer
          </h2>
          <div className="mt-10 space-y-6 text-[19px] leading-[1.7] text-slide-muted">
            <div>
              <h3 className="text-[24px] font-bold text-slide-foreground mb-2">Confidentiality</h3>
              <p>This document and all information contained herein is strictly confidential and proprietary to OmniStrat Group LLC and Amsterdam & Partners LLP. It is provided solely for the use of the intended recipient(s) and may not be reproduced, distributed, transmitted, or disclosed to any third party without prior written consent.</p>
            </div>
            <div>
              <h3 className="text-[24px] font-bold text-slide-foreground mb-2">Disclaimer</h3>
              <p>This presentation has been prepared for informational purposes only and does not constitute legal advice, an offer, solicitation, or recommendation. While every effort has been made to ensure accuracy, OmniStrat Group LLC makes no representations or warranties regarding the completeness of the content.</p>
            </div>
            <div>
              <h3 className="text-[24px] font-bold text-slide-foreground mb-2">Limitation of Liability</h3>
              <p>OmniStrat Group LLC, Amsterdam & Partners LLP, their affiliates, directors, officers, and employees shall not be held liable for any loss or damage arising from the use of or reliance on any information contained in this presentation. All rights reserved.</p>
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
            <OmniStratLogo />
            <div>
              <h1 className="text-[96px] font-bold leading-[1.05] tracking-tight text-slide-primary">
                INVESTOR<br />ALERT
              </h1>
              <p className="mt-8 text-[22px] font-semibold text-slide-foreground max-w-[640px] leading-snug">
                Selective Criminal Prosecution Used as Commercial Leverage by the National Bank of Uzbekistan.
              </p>
              <p className="mt-4 text-[22px] font-medium text-slide-primary max-w-[640px] leading-snug tracking-tight">
                A Confidential Briefing for International Financial Institutions, Correspondent Banks, and the Investor Community.
              </p>
              <div className="mt-6 text-[14px] text-slide-muted/60 tracking-widest uppercase leading-relaxed">
                <div>Confidential</div>
                <div>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                <div>Prepared jointly by Amsterdam & Partners LLP</div>
                <div>and OmniStrat Group LLC</div>
              </div>
            </div>
          </div>
          {/* Narrative hook */}
          <div className="w-[45%] flex flex-col justify-center px-16 gap-12" style={{ backgroundColor: "#0a0a0a" }}>
            {[
              "A foreign investor's fintech venture in Uzbekistan.",
              "A state bank that files criminal charges during settlement talks.",
              "A CEO detained as leverage.",
            ].map((line, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3B55FF] mt-3 shrink-0" />
                <p className="text-[22px] text-white/80 font-medium leading-snug">{line}</p>
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
            <OmniStratLogo />
          </div>
          <h2 className="text-[44px] font-extrabold leading-[1.1] tracking-tight mb-4">
            Why this briefing exists
          </h2>
          <p className="text-[22px] text-slide-muted leading-relaxed max-w-[1100px] mb-12">
            A fintech executive detained in Uzbekistan under circumstances that raise material concerns about rule of law and the investment climate.
          </p>
          <div className="grid grid-cols-3 gap-8 flex-1">
            <div className="flex flex-col gap-6">
              <div className="bg-slide-surface rounded-2xl p-8 flex-1">
                <h3 className="text-[24px] font-bold mb-4">The Situation</h3>
                <p className="text-[19px] text-slide-muted leading-relaxed">
                  NBU simultaneously holds equity in a joint venture and filed the criminal complaint against its director during active settlement negotiations.
                </p>
              </div>
              <div className="bg-slide-surface rounded-2xl p-8 flex-1">
                <h3 className="text-[24px] font-bold mb-4">The Audience</h3>
                <p className="text-[19px] text-slide-muted leading-relaxed">
                  IFI compliance officers, correspondent bank risk teams, eurobond investors, and rating agency analysts with NBU exposure.
                </p>
              </div>
            </div>
            <div className="bg-slide-surface rounded-2xl p-8">
              <h3 className="text-[24px] font-bold mb-6">Key Questions</h3>
              <div className="space-y-5">
                {[
                  "Was criminal prosecution used as commercial leverage during settlement talks?",
                  "Does NBU's dual role as shareholder and complainant represent a conflict of interest?",
                  "What are the implications for international investors and correspondent banks?",
                ].map((q, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-[24px] font-extrabold text-slide-primary leading-none mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-[19px] text-slide-muted leading-relaxed">{q}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <a
                href="https://calendly.com/eugene-gourevitch-omnistratgroup/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-slide-primary hover:bg-slide-primary/90 text-white rounded-2xl p-8 transition-all duration-300 block flex-1"
              >
                <div className="relative">
                  <p className="text-[14px] tracking-[0.15em] uppercase opacity-70 mb-3">Schedule Now</p>
                  <h4 className="text-[24px] font-bold mb-3">Book a Confidential Briefing</h4>
                  <p className="text-[17px] opacity-80 leading-relaxed">30-minute Zoom call with the OmniStrat team.</p>
                  <div className="flex items-center gap-2 mt-5 text-[17px] font-semibold opacity-90">
                    <span>Open Calendly</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </a>
              <div className="bg-slide-foreground/5 rounded-2xl p-6 border border-slide-foreground/10 space-y-3">
                <p className="text-[17px] text-slide-muted leading-relaxed">
                  <span className="font-bold text-slide-foreground">Eugene Gourevitch</span><br />eugene.gourevitch@omnistratgroup.com
                </p>
                <p className="text-[17px] text-slide-muted leading-relaxed">
                  <span className="font-bold text-slide-foreground">Robert Amsterdam</span><br />robert.amsterdam@amsterdamandpartners.com
                </p>
              </div>
            </div>
          </div>
          <p className="text-[14px] text-slide-muted/60 mt-6 text-center">
            Prepared jointly by Amsterdam & Partners LLP (London / Washington, DC) and OmniStrat Group LLC (Dubai / Miami)
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
            <OmniStratLogo />
          </div>
          <p className="text-[22px] text-slide-muted max-w-[1400px] leading-relaxed mb-8">
            A fintech joint venture that became the center of an investor-state dispute with international implications.
          </p>

          <div className="flex-1 grid grid-cols-2 gap-10 min-h-0">
            {/* The Venture */}
            <div className="bg-slide-surface rounded-2xl p-8 flex flex-col overflow-hidden">
              <h3 className="text-[24px] font-bold text-slide-primary mb-5 shrink-0">The Venture</h3>
              <div className="space-y-4 text-[17px] text-slide-muted leading-[1.65] overflow-hidden">
                <p>
                  <span className="font-bold text-slide-foreground">Solfy CA LLC</span> was established in Tashkent in June 2020 as a fintech joint venture. Maxim Poletaev held 50% beneficial interest via Solvy Cyprus Limited. NBU held 5%. Full Stack Solution held 20%.
                </p>
                <p>
                  The company launched a <span className="font-bold text-slide-foreground">Buy Now, Pay Later</span> installment card product in partnership with NBU, Uzbekistan's largest commercial bank (100% state-owned). NBU's investment committee authorized three capital infusions totaling over 17 billion soums. Senior retail management publicly endorsed the product.
                </p>
                <p>
                  Independent valuation by Bluestone: <span className="font-bold text-slide-foreground">USD 42-52 million</span>.
                </p>
              </div>
            </div>

            {/* The Collapse */}
            <div className="bg-slide-surface rounded-2xl p-8 flex flex-col overflow-hidden">
              <h3 className="text-[24px] font-bold text-red-600 mb-5 shrink-0">The Collapse</h3>
              <div className="space-y-4 text-[17px] text-slide-muted leading-[1.65] overflow-hidden">
                <p>
                  <span className="font-bold text-slide-foreground">Partnership terminated.</span> NBU ended the relationship. Solfy was declared bankrupt. A contractual dispute over obligations under Agreement No. 289/37 was adjudicated in Uzbek civil courts (December 2024, May 2025).
                </p>
                <p>
                  <span className="font-bold text-slide-foreground">Threats documented.</span> In February 2026, Amsterdam & Partners LLP announced representation, reporting that the investor had been subjected to serious threats by NBU representatives. UA.NEWS identified Chairman Mirsoatov personally as the source.
                </p>
                <p>
                  <span className="font-bold text-slide-foreground">Criminal escalation.</span> Rather than resolving the matter commercially, NBU filed a criminal complaint against Solfy's locally appointed director during active settlement negotiations.
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
            <OmniStratLogo />
          </div>

          <h2 className="text-[44px] font-extrabold leading-[1.1] tracking-tight mb-3">
            The sovereign's international face
          </h2>
          <p className="text-[22px] text-slide-muted leading-relaxed max-w-[1200px] mb-8">
            NBU is not a peripheral institution. It is Uzbekistan's primary channel for international capital markets and development finance.
          </p>

          <div className="grid grid-cols-3 gap-6 flex-1 min-h-0">
            {/* Column 1: Identity */}
            <div className="bg-slide-surface rounded-2xl p-7 flex flex-col overflow-hidden">
              <h3 className="text-[24px] font-bold text-slide-primary mb-4 shrink-0">Institutional Identity</h3>
              <div className="space-y-3 text-[17px] text-slide-muted leading-[1.6] overflow-hidden">
                <p><span className="font-bold text-slide-foreground">Founded 1991</span> as Uzbekistan's primary foreign trade bank. Largest commercial bank by total assets.</p>
                <p><span className="font-bold text-slide-foreground">100% state-owned.</span> Fund for Reconstruction & Development (59.25%) and Ministry of Economy & Finance (40.75%).</p>
                <p><span className="font-bold text-slide-foreground">Authorized capital:</span> UZS 16.7 trillion.</p>
                <p><span className="font-bold text-slide-foreground">Ratings:</span> S&P BB | Fitch BB | Moody's Ba3 (all stable).</p>
              </div>
            </div>

            {/* Column 2: Capital Markets */}
            <div className="bg-slide-surface rounded-2xl p-7 flex flex-col overflow-hidden">
              <h3 className="text-[24px] font-bold text-slide-primary mb-4 shrink-0">Capital Markets Presence</h3>
              <div className="space-y-4 overflow-hidden">
                <div className="bg-white rounded-xl p-5">
                  <p className="text-[14px] text-slide-muted tracking-[0.15em] uppercase mb-1">LSE Eurobond</p>
                  <p className="text-[17px] font-bold">2020 issuance, Reg S / 144A</p>
                  <p className="text-[14px] text-slide-muted mt-1">Outstanding obligations to international bondholders</p>
                </div>
                <div>
                  <p className="text-[14px] text-slide-primary font-bold tracking-[0.15em] uppercase mb-2">Correspondent Banks</p>
                  <p className="text-[17px] text-slide-muted leading-relaxed">JP Morgan Chase, Citibank, Standard Chartered, Deutsche Bank, Natixis, SMBC</p>
                </div>
              </div>
            </div>

            {/* Column 3: Development Finance */}
            <div className="bg-slide-surface rounded-2xl p-7 flex flex-col overflow-hidden">
              <h3 className="text-[24px] font-bold text-slide-primary mb-4 shrink-0">Development Finance</h3>
              <div className="space-y-4 overflow-hidden">
                {[
                  { org: "EBRD", role: "Active credit lines. Integrity Risk Policy applies." },
                  { org: "IFC", role: "World Bank Group lending. Performance Standards apply." },
                  { org: "ADB", role: "Development credit facilities." },
                  { org: "MIGA", role: "Political risk guarantees covering NBU exposure." },
                ].map((item) => (
                  <div key={item.org} className="flex gap-3">
                    <span className="text-[14px] font-bold text-slide-foreground w-[52px] shrink-0">{item.org}</span>
                    <p className="text-[14px] text-slide-muted leading-relaxed">{item.role}</p>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-4 border-t border-slide-foreground/8">
                <p className="text-[14px] text-slide-foreground">
                  <span className="font-bold text-red-600">Key fact:</span> NBU holds a 5% equity stake in Solfy CA while acting as the criminal complainant against its director.
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
            <OmniStratLogo />
          </div>

          <div className="flex gap-12 flex-1">
            {/* Left column */}
            <div className="w-[35%] flex flex-col">
              <div className="bg-slide-surface rounded-2xl p-8 flex flex-col items-center mb-6">
                <img src={nbuLogo} alt="NBU Logo" className="w-[120px] h-[120px] object-contain mb-4" />
                <h3 className="text-[24px] font-bold text-center leading-tight">National Bank for Foreign Economic Activity</h3>
                <p className="text-[17px] text-slide-muted text-center mt-2">Republic of Uzbekistan</p>
                <p className="text-[14px] text-slide-muted text-center mt-1">Est. 1991 | Tashkent</p>
              </div>

              <div className="bg-slide-surface rounded-2xl p-6 mb-6">
                <h4 className="text-[19px] font-bold text-slide-primary mb-3">Shareholding Structure</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-[17px] font-semibold mb-1">
                      <span>Fund for Reconstruction & Development</span>
                      <span className="text-slide-primary">59.25%</span>
                    </div>
                    <div className="w-full h-2 bg-slide-primary/10 rounded-full overflow-hidden">
                      <div className="h-full bg-slide-primary rounded-full" style={{ width: "59.25%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[17px] font-semibold mb-1">
                      <span>Ministry of Economy & Finance</span>
                      <span className="text-slide-primary">40.75%</span>
                    </div>
                    <div className="w-full h-2 bg-slide-primary/10 rounded-full overflow-hidden">
                      <div className="h-full bg-slide-primary rounded-full" style={{ width: "40.75%" }} />
                    </div>
                  </div>
                </div>
                <p className="text-[17px] text-slide-muted mt-3">100% of shares held by state entities. Total authorized capital: UZS 16.7 trillion.</p>
              </div>

              <div className="bg-slide-surface rounded-2xl p-6">
                <h4 className="text-[19px] font-bold text-slide-primary mb-3">Credit Ratings</h4>
                <div className="space-y-2 text-[17px]">
                  <div className="flex justify-between"><span className="text-slide-muted">S&P</span><span className="font-bold">BB (stable)</span></div>
                  <div className="flex justify-between"><span className="text-slide-muted">Fitch</span><span className="font-bold">BB (stable)</span></div>
                  <div className="flex justify-between"><span className="text-slide-muted">Moody's</span><span className="font-bold">Ba3 (stable)</span></div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="bg-slide-surface rounded-2xl p-6">
                <h4 className="text-[19px] font-bold text-slide-primary mb-4">Management Board</h4>
                <div className="space-y-3">
                  {[
                    { name: "Alisher Mirsoatov", role: "Chairman (since Nov 2017)", note: "Publicly identified as source of threats to investor" },
                    { name: "Sardorbek Usmanbekov", role: "First Deputy Chairman", note: "Compliance, risk, HR, project finance" },
                    { name: "Bakhodir Jalilov", role: "Deputy Chairman", note: "State programs, IT, communications" },
                    { name: "Azamat Kurambaev", role: "Deputy Chairman", note: "Problem assets, legal affairs" },
                    { name: "Azizbek Khodjaev", role: "Deputy Chairman", note: "Investment subsidiaries, state program financing" },
                    { name: "Bakhtiyor Mirdovidov", role: "Deputy Chairman", note: "Sales & customer service" },
                    { name: "Bohodir Rikhsiev", role: "Chief Accountant", note: "Accounting, analytics, transformation" },
                  ].map((person) => (
                    <div key={person.name} className="flex items-start gap-3 pb-2 border-b border-slide-foreground/5 last:border-0 last:pb-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-slide-primary mt-2.5 shrink-0" />
                      <div>
                        <span className="text-[17px] font-bold">{person.name}</span>
                        <span className="text-[14px] text-slide-primary ml-2">{person.role}</span>
                        <p className="text-[14px] text-slide-muted">{person.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slide-primary/5 border border-slide-primary/15 rounded-2xl p-5">
                <p className="text-[19px] text-slide-foreground leading-relaxed">
                  <span className="font-bold">Key fact:</span> NBU holds a <span className="font-bold text-slide-primary">5% equity stake</span> in Solfy CA while simultaneously acting as the <span className="font-bold text-slide-primary">criminal complainant</span> against the venture's director.
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
            <OmniStratLogo />
          </div>
          <h2 className="text-[44px] font-extrabold leading-tight tracking-tight mb-10">
            Key stakeholders in the Solfy CA dispute
          </h2>
          <div className="grid grid-cols-3 gap-8 flex-1">
            {/* Poletaev */}
            <div className="bg-slide-surface rounded-2xl p-8 flex flex-col">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-[90px] h-[90px] rounded-full overflow-hidden shrink-0 border-2 border-slide-primary/20">
                  <img src={poletaevPhoto} alt="Maxim Poletaev" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-[24px] font-bold leading-tight">Maxim V. Poletaev</h3>
                  <p className="text-[17px] text-slide-primary font-semibold">Foreign Investor</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Russian investor, 50% beneficial owner via Solvy Cyprus Limited",
                  "Former First Deputy Chairman of Sberbank",
                  "Board member of Nornickel, MegaFon, Metalloinvest",
                  "Chairman of Fortenova Group, co-founder of Gauss Ventures",
                  "Represented by Amsterdam & Partners LLP",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[17px] text-slide-muted leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-slide-primary mt-2.5 shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Hasanov */}
            <div className="bg-slide-surface rounded-2xl p-8 flex flex-col border-2 border-red-500/20">
              <div className="flex items-center gap-5 mb-6">
                <div className="relative">
                  <div className="w-[90px] h-[90px] rounded-full overflow-hidden shrink-0 border-2 border-red-500/30">
                    <img src={uktamPhoto} alt="Uktam Hasanov" className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase">
                    Detained
                  </div>
                </div>
                <div>
                  <h3 className="text-[24px] font-bold leading-tight">Hasanov Uktam N.</h3>
                  <p className="text-[17px] text-red-600 font-semibold">Detained Director</p>
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
                  <li key={item} className="flex gap-3 text-[17px] text-slide-muted leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Mirsoatov */}
            <div className="bg-slide-surface rounded-2xl p-8 flex flex-col">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-[90px] h-[90px] rounded-full overflow-hidden shrink-0 border-2 border-slide-foreground/10">
                  <img src={mirsoatovPhoto} alt="Alisher Mirsoatov" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-[24px] font-bold leading-tight">Alisher K. Mirsoatov</h3>
                  <p className="text-[17px] text-slide-primary font-semibold">NBU Chairman</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Chairman of NBU since November 2017",
                  "Born 1974, Tashkent. Career NBU insider since 1996",
                  "Former Chairman of Uzpromstroybank (2016-2017)",
                  "Publicly identified as source of threats to the investor",
                  "Chairman of Uzbekistan Winter Sports Association",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[17px] text-slide-muted leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-slide-primary mt-2.5 shrink-0" />{item}
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
        { date: "MAR 17", title: "Settlement Proposal", desc: "Investor side submits detailed settlement counter-proposal via Amsterdam & Partners. Demands criminal complaint withdrawal as condition precedent.", accent: false },
        { date: "MAR 25", title: "Deadline Letter", desc: "After 8 days of silence, Amsterdam & Partners sends formal deadline letter. States firm will pursue all available remedies if no response by 5 PM GMT.", accent: false },
        { date: "MAR 26", title: "Rejection", desc: "NBU rejects criminal complaint withdrawal. References its own procedural powers within the criminal proceedings in the context of settlement negotiations.", accent: false },
        { date: "MAR 27", title: "Charges Filed", desc: "Major B.G. Giyasov formally charges Hasanov. Four counts under Article 167(3)(a). Hasanov taken into custody in Tashkent.", accent: true },
      ];
      return (
        <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
          <div className="flex flex-col h-full p-[80px]">
            <div className="flex items-center justify-between mb-6">
              <SlidePill label="THE CRITICAL TEN-DAY WINDOW" />
              <OmniStratLogo />
            </div>
            <h2 className="text-[44px] font-extrabold leading-[1.1] tracking-tight mb-16">
              March 17-27, 2026: From settlement counter-proposal to criminal charges
            </h2>
            <div className="flex-1 flex items-center">
              <div className="w-full relative">
                <div className="absolute left-0 right-0 top-[40px] h-[3px] bg-slide-foreground/10">
                  <div className="h-full bg-slide-primary rounded-full" style={{ animation: "timeline-fill 1.8s ease-out 0.3s forwards", width: "0%" }} />
                </div>
                <div className="grid grid-cols-4 gap-8 relative">
                  {steps.map((step, i) => (
                    <div key={step.date} className="flex flex-col items-center text-center">
                      <div className={`w-[80px] h-[80px] rounded-full flex items-center justify-center text-[17px] font-extrabold tracking-wide relative z-10 ${
                        step.accent ? "bg-slide-primary text-white shadow-[0_0_30px_hsl(var(--slide-primary)/0.4)]" : "bg-white border-[3px] border-slide-primary text-slide-primary"
                      }`}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className={`mt-5 px-5 py-2 rounded-full text-[16px] font-bold tracking-wider ${
                        step.accent ? "bg-slide-primary text-white" : "bg-slide-primary/10 text-slide-primary"
                      }`}>
                        {step.date}
                      </div>
                      <h3 className={`mt-4 text-[22px] font-bold leading-tight ${step.accent ? "text-slide-primary" : "text-slide-foreground"}`}>
                        {step.title}
                      </h3>
                      <p className="mt-3 text-[18px] text-slide-muted leading-relaxed max-w-[360px]">{step.desc}</p>
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
          "Partnership announced in national media by NBU's own Managing Director of Retail",
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
            <OmniStratLogo variant="light" />
          </div>
          <div className="flex flex-1 items-center gap-16 mt-8">
            {/* Left: Photo + Identity */}
            <div className="flex flex-col items-center w-[380px] shrink-0">
              <div className="relative">
                <div className="w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-slide-primary/40 shadow-[0_0_60px_rgba(59,85,255,0.3)]">
                  <img src={uktamPhoto} alt="Uktam Hasanov" className="w-full h-full object-cover object-top" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-red-600 text-white text-[13px] font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
                  <span className="w-2 h-2 bg-red-300 rounded-full animate-pulse" />
                  Detained
                </div>
              </div>
              <h3 className="text-[32px] font-bold text-white mt-8 text-center leading-tight">
                Uktam Hasanov
              </h3>
              <p className="text-[18px] text-white/60 mt-2 text-center">Director of Solfy CA LLC</p>
              <p className="text-[16px] text-white/40 mt-3 text-center leading-relaxed max-w-[340px]">
                Arrested without prior summons during active settlement talks. Bail denied despite zero flight risk. Cooperated fully with investigators. Held as leverage in a commercial negotiation.
              </p>
            </div>

            {/* Right: Counter + Links */}
            <div className="flex-1 flex flex-col">
              <div className="mb-8">
                <p className="text-[16px] text-white/50 tracking-[0.15em] uppercase mb-4">Wrongfully detained for</p>
                <DetentionCounter />
                <p className="text-[16px] text-white/40 mt-4 leading-relaxed max-w-[600px]">
                  Since March 27, 2026. A man held in a Tashkent detention facility as leverage in a commercial negotiation. Every day he remains detained erodes Uzbekistan's claim to be a rule-of-law jurisdiction.
                </p>
              </div>

              <a href="https://free-uktam.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-slide-primary hover:bg-slide-primary/90 text-white rounded-xl px-8 py-4 mb-8 w-fit transition-colors">
                <span className="text-[22px] font-bold">free-uktam.com</span>
                <span className="text-[16px] opacity-70">Hasanov Defense Initiative</span>
              </a>

              <div>
                <p className="text-[14px] text-white/40 tracking-[0.15em] uppercase mb-4">Follow the campaign</p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { platform: "YouTube", handle: "Interview", url: "https://youtu.be/50KysRLkQtE", icon: <Youtube size={20} /> },
                    { platform: "Instagram", handle: "@free_uktam_hasanov", url: "https://www.instagram.com/free_uktam_hasanov/", icon: <Instagram size={20} /> },
                    { platform: "X (Twitter)", handle: "@free_uktam", url: "https://x.com/free_uktam", icon: <XIcon size={20} /> },
                    { platform: "Telegram", handle: "@free_uktam_hasanov", url: "https://t.me/free_uktam_hasanov", icon: <Send size={20} /> },
                    { platform: "Threads", handle: "@free_uktam_hasanov", url: "https://www.threads.com/@free_uktam_hasanov", icon: <AtSign size={20} /> },
                    { platform: "TikTok", handle: "@hasanov.defense.i", url: "https://www.tiktok.com/@hasanov.defense.i", icon: <Music size={20} /> },
                  ].map((link) => (
                    <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-white/5 hover:bg-white/10 rounded-lg px-4 py-3 transition-colors">
                      <span className="text-slide-primary w-8 flex justify-center">{link.icon}</span>
                      <div>
                        <span className="text-[14px] font-bold text-white block">{link.platform}</span>
                        <span className="text-[12px] text-white/40">{link.handle}</span>
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
        <div className="absolute inset-0">
          <img src={detentionCell} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-[80px]">
          <h2 className="text-[68px] font-semibold leading-[1.2] max-w-[1400px] text-white">
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
            <OmniStratLogo />
          </div>
          <h2 className="text-[42px] font-extrabold leading-[1.1] tracking-tight mb-3">
            Why arrest is an excessive and disproportionate measure
          </h2>
          <p className="text-[20px] text-slide-muted leading-relaxed mb-10 max-w-[1200px]">
            Under Uzbek criminal procedure (Articles 236-243 CPC) and international standards, pre-trial detention is a measure of last resort. In this case, none of the legal prerequisites are satisfied.
          </p>
          <div className="grid grid-cols-2 gap-8 flex-1">
            <div className="flex flex-col gap-6">
              {[
                { num: "01", title: "No Flight Risk", text: "Hasanov is an Uzbek citizen with permanent residence, family ties, and no foreign passport. He has no means or incentive to flee the jurisdiction. Travel restrictions or bail would achieve the same purpose without detention." },
                { num: "02", title: "No Risk of Evidence Tampering", text: "All evidence is documentary: bank records, contracts (No. 289/37), transfer statements. These are held by NBU and state institutions, entirely beyond Hasanov's ability to alter or destroy." },
                { num: "03", title: "No Personal Enrichment Alleged", text: "The resolution charges \"purposeless squandering\" of company funds but identifies no personal enrichment, no offshore transfers, no asset concealment. All funds flowed through documented corporate channels to 2,134 contractual counterparties." },
              ].map((item) => (
                <div key={item.num} className="bg-slide-surface rounded-2xl p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-slide-primary/10 flex items-center justify-center text-[18px] font-bold text-slide-primary">{item.num}</div>
                    <h3 className="text-[22px] font-bold">{item.title}</h3>
                  </div>
                  <p className="text-[18px] text-slide-muted leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-6">
              {[
                { num: "04", title: "Contractual Dispute, Not Criminal Conduct", text: "The underlying matter is a commercial disagreement over reward payments under Contract 289/37, already adjudicated in Uzbek civil courts (Dec 2024, May 2025). Criminalizing a contractual dispute violates the principle of ultima ratio in criminal law." },
                { num: "05", title: "Arrest During Settlement Negotiations", text: "Charges were filed on March 27, exactly one day after NBU rejected the withdrawal of its criminal complaint. The timing reveals the arrest as a pressure tactic during active commercial negotiations, not a genuine law enforcement action." },
              ].map((item) => (
                <div key={item.num} className="bg-slide-surface rounded-2xl p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-slide-primary/10 flex items-center justify-center text-[18px] font-bold text-slide-primary">{item.num}</div>
                    <h3 className="text-[22px] font-bold">{item.title}</h3>
                  </div>
                  <p className="text-[18px] text-slide-muted leading-relaxed">{item.text}</p>
                </div>
              ))}
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-[18px] font-bold text-red-600">!</div>
                  <h3 className="text-[22px] font-bold text-red-700">International Law Violation</h3>
                </div>
                <p className="text-[18px] text-red-800/80 leading-relaxed">
                  Arbitrary pre-trial detention in a commercial dispute violates ICCPR Article 9 (liberty and security), ICCPR Article 14 (fair trial), and ECHR Article 5 standards.
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
      <TwoColumnFreeformTemplate
        {...props}
        pillLabel="SELECTIVE PROSECUTION"
        subtitle="This pattern is consistent with the use of criminal prosecution as commercial leverage, not genuine law enforcement."
        leftContent={
          <div>
            <h3 className="text-[32px] font-bold text-slide-primary mb-6">Charged</h3>
            <div className="bg-slide-surface rounded-2xl p-8">
              <h4 className="text-[24px] font-bold mb-3">Hasanov Uktam Nasulloyevich</h4>
              <p className="text-[20px] text-slide-muted leading-relaxed">
                Locally appointed director. The most vulnerable individual in the corporate chain. No personal enrichment alleged.
              </p>
            </div>
          </div>
        }
        rightContent={
          <div>
            <h3 className="text-[32px] font-bold mb-6">Not Charged</h3>
            <ul className="space-y-5">
              {[
                "Foreign co-founders who directed corporate strategy",
                "NBU's investment committee members who authorized three capital tranches totaling 17+ billion soums",
                "NBU's compliance and audit functions responsible for oversight",
                "NBU's retail division leadership who publicly endorsed the product",
                "20% shareholder Full Stack Solution and its principals (Izrailbekov)",
              ].map((item) => (
                <li key={item} className="text-[20px] text-slide-muted leading-relaxed flex items-start gap-3">
                  <span className="text-slide-primary mt-1">&#8226;</span>{item}
                </li>
              ))}
            </ul>
          </div>
        }
      />
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
            <OmniStratLogo />
          </div>
          <h2 className="text-[48px] font-extrabold leading-[1.1] tracking-tight mb-16">
            A contractual dispute repackaged as criminal prosecution
          </h2>
          <div className="flex-1 grid grid-cols-3 gap-12">
            <div>
              <div className="text-[72px] font-extrabold text-slide-primary/15 leading-none mb-3">01</div>
              <h3 className="text-[26px] font-bold mb-3">Allegation: Purposeless Squandering</h3>
              <p className="text-[20px] text-slide-muted leading-relaxed">
                Charges allege misappropriation of ~17 billion soums in charter capital. Yet the prosecution's own evidence describes operational expenditures: staff salaries, technology development, merchant acquisition. Normal costs of running a fintech startup.
              </p>
            </div>
            <div>
              <div className="text-[72px] font-extrabold text-slide-primary/15 leading-none mb-3">02</div>
              <h3 className="text-[26px] font-bold mb-3">Allegation: Unpaid Bank Rewards</h3>
              <p className="text-[20px] text-slide-muted leading-relaxed">
                Charges allege 14.9 billion soums in unpaid contractual rewards owed to NBU. These correspond to obligations under Agreement No. 289/37, already adjudicated in civil court rulings (December 2024, May 2025). The criminal complaint repackages a commercial dispute.
              </p>
            </div>
            <div>
              <div className="text-[72px] font-extrabold text-slide-primary/15 leading-none mb-3">03</div>
              <h3 className="text-[26px] font-bold mb-3">NBU Approved Every Tranche</h3>
              <p className="text-[20px] text-slide-muted leading-relaxed">
                NBU's own investment committee authorized every capital allocation it now characterizes as embezzlement. You cannot approve the funding at board level and then criminalize the expenditure. This is the fundamental contradiction that undermines the entire prosecution.
              </p>
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },

  // ═══ 15. REGULATORY OBLIGATIONS ═══
  {
    id: "solfy-regulatory",
    title: "Regulatory Obligations",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <div className="flex items-center justify-between mb-12">
            <SlidePill label="YOUR REGULATORY OBLIGATIONS" />
            <OmniStratLogo />
          </div>
          <h2 className="text-[48px] font-extrabold leading-[1.1] tracking-tight mb-12">
            Why this is your problem
          </h2>
          <div className="flex-1 grid grid-cols-3 gap-8">
            <div className="bg-slide-surface rounded-2xl p-8 flex flex-col flex-1">
              <div className="w-10 h-1 bg-slide-primary rounded-full mb-4" />
              <h3 className="text-[24px] font-bold mb-3">IFIs (EBRD, IFC, ADB)</h3>
              <ul className="space-y-3 flex-1">
                {[
                  "EBRD Article 1: multiparty democracy, rule of law as founding principles",
                  "EBRD Integrity Risk Policy Section 4.2: ongoing monitoring of financial intermediary clients",
                  "IFC Sustainability Framework Para. 12: governance as investment criterion",
                  "EBRD 2024 Integrity Report: documented cases of withheld financing over integrity concerns",
                  "ADB Safeguard Policy requires institutional capacity assessment",
                  "MIGA political risk guarantees may be triggered",
                ].map((item) => (
                  <li key={item} className="text-[18px] text-slide-muted leading-relaxed flex items-start gap-3">
                    <span className="text-slide-primary mt-1 shrink-0">&#8226;</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slide-surface rounded-2xl p-8 flex flex-col flex-1">
              <div className="w-10 h-1 bg-slide-primary rounded-full mb-4" />
              <h3 className="text-[24px] font-bold mb-3">Correspondent Banks</h3>
              <ul className="space-y-3 flex-1">
                {[
                  "Wolfsberg Group CBDDQ: \"Adverse Information Screening\" section requires EDD on governance red flags",
                  "OCC Bulletin 2016-32: foreign correspondent banking risk management requirements",
                  "BSA/AML obligations under FinCEN (31 CFR 1010.610)",
                  "EU 6AMLD Article 6(1)(c): aiding and abetting liability extends to correspondent channels",
                ].map((item) => (
                  <li key={item} className="text-[18px] text-slide-muted leading-relaxed flex items-start gap-3">
                    <span className="text-slide-primary mt-1 shrink-0">&#8226;</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slide-surface rounded-2xl p-8 flex flex-col flex-1">
              <div className="w-10 h-1 bg-slide-primary rounded-full mb-4" />
              <h3 className="text-[24px] font-bold mb-3">Eurobond / Rating Agencies</h3>
              <ul className="space-y-3 flex-1">
                {[
                  "ICSID arbitration claim ($42-52M Bluestone valuation) constitutes material contingent liability under IAS 37",
                  "Fitch Bank Rating Criteria, Section: Operating Environment — institutional framework assessment",
                  "Moody's Bank Scorecard Factor 1: Macro Profile incorporates institutional framework",
                  "Must be disclosed in NBU's financial statements as contingent liability",
                  "Bondholders have fiduciary obligations to assess counterparty governance risk",
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
            <OmniStratLogo />
          </div>
          <h2 className="text-[42px] font-extrabold mt-6 leading-tight max-w-[1400px]">
            The Solfy case is not an isolated incident
          </h2>
          <p className="text-[20px] text-slide-muted mt-3 max-w-[1200px]">
            A pattern of investor-hostile actions undermines Uzbekistan's reform credibility
          </p>
          <div className="grid grid-cols-2 gap-8 mt-10 flex-1">
            {[
              { tag: "EXTRADITION", title: "Shadmanov (2025)", text: "Forcibly extradited from Dubai. ICIJ documented use of lobbyist to trigger sanctions inquiries. Lawyers describe prosecution as politically motivated.", accent: "bg-red-500/10 text-red-600" },
              { tag: "ICSID ARBITRATION", title: "Humans Mobile v. Uzbekistan", text: "ICSID ARB/25/24 — Singapore-based company initiated arbitration citing bilateral investment treaty violations by Uzbek state authorities.", accent: "bg-amber-500/10 text-amber-600" },
              { tag: "SELECTIVE JUSTICE", title: "Former Minister Voitov (2025)", text: "Convicted under Article 167(3)(a) — the same provision as Hasanov. Received no prison time after compensating damages. Illustrates the transactional nature of embezzlement prosecutions.", accent: "bg-purple-500/10 text-purple-600" },
              { tag: "CAPITAL FLIGHT", title: "Foreign Direct Investment Gap", text: "Kazakhstan: $151B accumulated FDI stock. Uzbekistan: $17B. IBTimes identifies the Solfy case as a test of institutional reform credibility.", accent: "bg-slide-primary/10 text-slide-primary" },
            ].map((item) => (
              <div key={item.title} className="bg-slide-surface rounded-2xl p-8 flex flex-col">
                <span className={`text-[14px] font-bold tracking-[0.15em] px-3 py-1 rounded-full w-fit mb-4 ${item.accent}`}>{item.tag}</span>
                <h3 className="text-[26px] font-bold mb-3">{item.title}</h3>
                <p className="text-[20px] text-slide-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-[18px] text-slide-muted mt-6 border-t border-slide-foreground/10 pt-4">
            <span className="font-bold text-slide-foreground">Source:</span> NBU Chairman Mirsoatov publicly identified as source of threats to international investors (UA.NEWS, IBTimes)
          </p>
        </div>
      </SlideLayout>
    ),
  },

  // ═══ 17. MEDIA COVERAGE ═══
  {
    id: "solfy-media",
    title: "Media Coverage",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <div className="flex items-center justify-between mb-4">
            <SlidePill label="MEDIA & INTERNATIONAL COVERAGE" />
            <OmniStratLogo />
          </div>
          <h2 className="text-[44px] font-extrabold leading-[1.05] tracking-tight mb-2">
            The world is watching
          </h2>
          <p className="text-[18px] text-slide-muted mb-10">
            International media spotlight on NBU's conduct and Uzbekistan's investment climate. Coverage ongoing.
          </p>
          <div className="grid grid-cols-2 gap-6 flex-1">
            {[
              { source: "IBTimes", date: "March 2026", quote: "Reports highlight institutional gaps undermining Uzbekistan's reform credibility", detail: "Names NBU Chairman Mirsoatov in connection with reported threats. Identifies the Solfy case as a litmus test for foreign investor protection.", color: "border-l-slide-primary", bg: "bg-slide-primary/5" },
              { source: "PR Newswire / Investing.com", date: "April 2026", quote: "Coverage calls for cessation of irregular detentions and adherence to international legal standards", detail: "Amsterdam & Partners formal press release distributed globally via PR Newswire. Covered by Investing.com, Yahoo Finance, and financial wire services.", color: "border-l-slide-primary", bg: "bg-slide-primary/5" },
              { source: "UA.NEWS", date: "2025-2026", quote: "Ongoing reporting on NBU leadership's role in the dispute", detail: "Coverage naming specific individuals. Additional reporting across Russian-language Telegram channels and international outlets. (Source attribution maintained.)", color: "border-l-red-500", bg: "bg-red-50" },
              { source: "UzDaily.uz", date: "February 2026", quote: "Reports on Poletaev-Solfy legal engagement with NBU", detail: "Domestic Uzbek media reporting on investor engagement of Amsterdam & Partners LLP, signaling the dispute has entered the international arena.", color: "border-l-amber-500", bg: "bg-amber-50" },
            ].map((item) => (
              <div key={item.source} className={`${item.bg} border-l-4 ${item.color} rounded-r-2xl p-7 flex flex-col justify-between`}>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[22px] font-extrabold tracking-tight">{item.source}</span>
                    <span className="text-[14px] font-semibold text-slide-muted tracking-wider uppercase">{item.date}</span>
                  </div>
                  <p className="text-[20px] font-bold leading-snug mb-4 italic">
                    {item.quote}
                  </p>
                  <p className="text-[17px] text-slide-muted leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-slide-foreground text-white rounded-2xl px-8 py-5 flex items-center justify-between">
            <p className="text-[18px] font-semibold">Coverage is accelerating. Additional media placements are scheduled across tier-1 international outlets.</p>
            <span className="text-[28px] font-bold text-slide-primary ml-6 shrink-0">→</span>
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
            <OmniStratLogo />
          </div>
          <h2 className="text-[48px] font-extrabold leading-[1.1] tracking-tight mb-16">
            Three-track legal and advocacy strategy
          </h2>
          <div className="flex-1 grid grid-cols-3 gap-12">
            <div>
              <div className="text-[72px] font-extrabold text-slide-primary/15 leading-none mb-3">01</div>
              <h3 className="text-[28px] font-bold mb-3">ICSID BIT Arbitration</h3>
              <p className="text-[20px] text-slide-muted leading-relaxed">
                Investment treaty claim under the Russia-Uzbekistan bilateral investment treaty is imminent. Will invoke ICSID jurisdiction for violations of fair and equitable treatment, protection against expropriation, and full protection and security. Bluestone independent valuation: <span className="font-bold text-slide-foreground">$42-52 million</span>. This is not a nuisance claim.
              </p>
            </div>
            <div>
              <div className="text-[72px] font-extrabold text-slide-primary/15 leading-none mb-3">02</div>
              <h3 className="text-[28px] font-bold mb-3">Criminal Defense</h3>
              <p className="text-[20px] text-slide-muted leading-relaxed">
                Hasanov's independent defense counsel in Tashkent is fully funded and operational. Defense position: charges lack legal merit and repackage a commercial dispute as criminal prosecution.
              </p>
            </div>
            <div>
              <div className="text-[72px] font-extrabold text-slide-primary/15 leading-none mb-3">03</div>
              <h3 className="text-[28px] font-bold mb-3">International Advocacy</h3>
              <p className="text-[20px] text-slide-muted leading-relaxed">
                Coordinated engagement with IFIs, rating agencies, correspondent banks, eurobond stakeholders, and international media to ensure transparency and accountability.
              </p>
            </div>
          </div>
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
            <OmniStratLogo variant="light" />
          </div>

          <div className="flex-1 flex flex-col justify-center items-center text-center">
            <h2 className="text-[48px] font-extrabold text-white leading-[1.05] tracking-tight mb-4">
              Request a Confidential Briefing
            </h2>
            <p className="text-[20px] text-white/60 max-w-[800px] leading-relaxed mb-10">
              We invite your compliance, legal, or investment team to a 30-minute confidential Zoom briefing to discuss the documented facts.
            </p>

            {/* CTA Button - full width above cards */}
            <a
              href="https://calendly.com/eugene-gourevitch-omnistratgroup/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[1200px] flex items-center justify-center gap-4 bg-slide-primary hover:bg-slide-primary/90 text-white rounded-2xl px-10 py-5 mb-10 transition-colors group"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              <span className="text-[20px] font-bold">Schedule a Briefing</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <div className="grid grid-cols-2 gap-10 w-full max-w-[1200px]">
              {/* OmniStrat */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 text-left">
                <h3 className="text-[26px] font-extrabold text-white mb-1">OmniStrat Group LLC</h3>
                <p className="text-[15px] text-slide-primary font-semibold tracking-wider uppercase mb-8">Strategic Advisory</p>
                <div className="space-y-5">
                  <div>
                    <p className="text-[13px] text-white/40 tracking-[0.15em] uppercase mb-1">Contact</p>
                    <p className="text-[20px] text-white font-semibold">Eugene Gourevitch</p>
                    <p className="text-[16px] text-white/60">Managing Principal</p>
                  </div>
                  <div>
                    <p className="text-[13px] text-white/40 tracking-[0.15em] uppercase mb-1">Email</p>
                    <p className="text-[20px] text-white font-semibold">eugene@omnistratgroup.com</p>
                  </div>
                  <div>
                    <p className="text-[13px] text-white/40 tracking-[0.15em] uppercase mb-1">Web</p>
                    <a href="https://www.omnistratgroup.com" target="_blank" rel="noopener noreferrer" className="text-[20px] text-slide-primary font-semibold hover:underline">
                      www.omnistratgroup.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Amsterdam & Partners */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 text-left">
                <h3 className="text-[26px] font-extrabold text-white mb-1">Amsterdam & Partners LLP</h3>
                <p className="text-[15px] text-white/50 font-semibold tracking-wider uppercase mb-8">Legal Counsel</p>
                <div className="space-y-5">
                  <div>
                    <p className="text-[13px] text-white/40 tracking-[0.15em] uppercase mb-1">Contact</p>
                    <p className="text-[20px] text-white font-semibold">Robert Amsterdam</p>
                    <p className="text-[16px] text-white/60">Founding Partner</p>
                  </div>
                  <div>
                    <p className="text-[13px] text-white/40 tracking-[0.15em] uppercase mb-1">London</p>
                    <p className="text-[18px] text-white/70">125 Old Broad Street, EC2N 1AR</p>
                  </div>
                  <div>
                    <p className="text-[13px] text-white/40 tracking-[0.15em] uppercase mb-1">Washington, DC</p>
                    <p className="text-[18px] text-white/70">1054 31st St NW, Ste 110, 20007</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[14px] text-white/30 text-center mt-8">
            This briefing contains privileged and confidential information. Distribution at recipient's discretion.
          </p>
        </div>
      </SlideLayout>
    ),
  },
];
