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
import uktamPhoto from "@/assets/uktam-photo.png";
import mirsoatovPhoto from "@/assets/mirsoatov-photo.jpg";
import poletaevPhoto from "@/assets/poletaev-photo.jpg";

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
        <div key={u.label} className="flex flex-col items-center">
          <span className="text-[72px] font-bold leading-none tabular-nums text-white" style={{ fontVariantNumeric: "tabular-nums" }}>
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="text-[14px] tracking-[0.2em] text-white/50 mt-2">{u.label}</span>
        </div>
      ))}
    </div>
  );
};

export interface SlideData {
  id: string;
  title: string;
  component: (props: { slideNumber: number; totalSlides: number }) => ReactNode;
}

export const slides: SlideData[] = [
  // 1. Title
  {
    id: "solfy-title",
    title: "Investor Alert",
    component: (props) => (
      <TitleSlideTemplate
        {...props}
        headline={<>INVESTOR<br />ALERT</>}
        subtitle="Selective Criminal Prosecution Used as Commercial Leverage by the National Bank of Uzbekistan."
        subtitleTyped="A Confidential Briefing for International Financial Institutions, Correspondent Banks, and the Investor Community."
        meta={`Confidential\n${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}\nPrepared by OmniStrat Group LLC`}
        heroImage={hero3d}
        heroAlt="Strategic visual"
      />
    ),
  },
  // 2. Confidentiality & Disclaimer
  {
    id: "solfy-disclaimer",
    title: "Confidentiality & Disclaimer",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides} showConfidentiality={false}>
        <div className="flex flex-col h-full p-[80px]">
          <OmniStratLogo />
          <div className="flex-1 flex flex-col justify-center max-w-[1400px]">
            <SlidePill label="CONFIDENTIALITY NOTICE" />
            <h2 className="text-[48px] font-bold text-slide-foreground mt-6 leading-tight">
              Confidentiality Statement & Disclaimer
            </h2>

            <div className="mt-10 space-y-8 text-[20px] leading-[1.7] text-slide-muted">
              <div>
                <h3 className="text-[22px] font-bold text-slide-foreground mb-2">Confidentiality</h3>
                <p>
                  This document and all information contained herein is strictly confidential and proprietary to OmniStrat Group LLC. It is provided solely for the use of the intended recipient(s) and may not be reproduced, distributed, transmitted, or disclosed to any third party without the prior written consent of OmniStrat Group LLC. Unauthorised disclosure, copying, or distribution of this material is strictly prohibited and may result in legal action.
                </p>
              </div>

              <div>
                <h3 className="text-[22px] font-bold text-slide-foreground mb-2">Disclaimer</h3>
                <p>
                  This presentation has been prepared by OmniStrat Group LLC for informational purposes only and does not constitute legal advice, an offer, solicitation, or recommendation to take any action. While every effort has been made to ensure the accuracy and completeness of the information presented, OmniStrat Group LLC makes no representations or warranties, express or implied, regarding the accuracy, reliability, or completeness of the content. Recipients should seek independent professional advice before making any decisions based on the information contained in this document.
                </p>
              </div>

              <div>
                <h3 className="text-[22px] font-bold text-slide-foreground mb-2">Limitation of Liability</h3>
                <p>
                  OmniStrat Group LLC, its affiliates, directors, officers, and employees shall not be held liable for any loss, damage, or expense arising directly or indirectly from the use of or reliance on any information contained in this presentation. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  // 3. Background: The Solfy Story
  {
    id: "solfy-background",
    title: "Background",
    component: (props) => (
      <TwoColumnFreeformTemplate
        {...props}
        pillLabel="BACKGROUND"
        subtitle="A fintech joint venture that became the center of an investor-state dispute with international implications."
        leftContent={
          <>
            <h3 className="text-[32px] font-bold mb-4">The Venture</h3>
            <p className="text-[22px] text-slide-muted leading-relaxed mb-4">
              Solfy CA LLC was established in Tashkent in June 2020 as a fintech joint venture between Russian investor Maxim Poletaev (50% via Solvy Cyprus Limited), the National Bank for Foreign Economic Activity of Uzbekistan (NBU, 5%), and other shareholders including Full Stack Solution (20%).
            </p>
            <p className="text-[22px] text-slide-muted leading-relaxed mb-4">
              The company launched a Buy Now, Pay Later (BNPL) installment card product in partnership with NBU, Uzbekistan's largest commercial bank by assets (73.8% state-owned). NBU's investment committee authorized three capital infusions totaling over 17 billion soums. Its senior retail management publicly endorsed and promoted the product.
            </p>
            <p className="text-[22px] text-slide-muted leading-relaxed">
              An independent valuation by Bluestone assessed the company at USD 42-52 million.
            </p>
          </>
        }
        rightContent={
          <>
            <h3 className="text-[32px] font-bold mb-4">The Collapse</h3>
            <p className="text-[22px] text-slide-muted leading-relaxed mb-4">
              The business relationship between Solfy and NBU deteriorated. NBU terminated the partnership, and Solfy was declared bankrupt. A contractual dispute ensued over unpaid obligations under Agreement No. 289/37, which was adjudicated in Uzbek civil courts in December 2024 and May 2025.
            </p>
            <p className="text-[22px] text-slide-muted leading-relaxed mb-4">
              In February 2026, Amsterdam & Partners LLP announced representation of Solfy and Poletaev, reporting that the investor and associates had been subjected to serious threats by NBU representatives. UA.NEWS identified NBU Chairman Alisher Mirsoatov personally as the source of threats.
            </p>
            <p className="text-[22px] text-slide-muted leading-relaxed">
              Rather than resolving the matter commercially, NBU filed a criminal complaint against Solfy's locally appointed director, converting a failed business venture into a criminal prosecution during active settlement negotiations.
            </p>
          </>
        }
      />
    ),
  },
  // 3.5 FREE UKTAM - Emotional slide
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
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[13px] font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
                  Detained
                </div>
              </div>
              <h3 className="text-[32px] font-bold text-white mt-8 text-center leading-tight">
                Uktam Hasanov
              </h3>
              <p className="text-[18px] text-white/60 mt-2 text-center">
                Director of Solfy CA LLC
              </p>
              <p className="text-[16px] text-white/40 mt-1 text-center">
                Father. Professional. Wrongfully detained.
              </p>
            </div>

            {/* Right: Counter + Links */}
            <div className="flex-1 flex flex-col">
              {/* Detention Counter */}
              <div className="mb-10">
                <p className="text-[16px] text-white/50 tracking-[0.15em] uppercase mb-4">
                  Wrongfully detained for
                </p>
                <DetentionCounter />
                <p className="text-[15px] text-white/40 mt-4">
                  Since March 27, 2026. Arrested during active settlement negotiations.
                </p>
              </div>

              {/* Website CTA */}
              <a
                href="https://free-uktam.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-slide-primary hover:bg-slide-primary/90 text-white rounded-xl px-8 py-4 mb-8 w-fit transition-colors"
              >
                <span className="text-[22px] font-bold">free-uktam.com</span>
                <span className="text-[16px] opacity-70">Hasanov Defense Initiative</span>
              </a>

              {/* Social Links */}
              <div>
                <p className="text-[14px] text-white/40 tracking-[0.15em] uppercase mb-4">Follow the campaign</p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { platform: "YouTube", handle: "Interview", url: "https://youtu.be/50KysRLkQtE", icon: "▶" },
                    { platform: "Instagram", handle: "@free_uktam_hasanov", url: "https://www.instagram.com/free_uktam_hasanov/", icon: "◻" },
                    { platform: "X (Twitter)", handle: "@free_uktam", url: "https://x.com/free_uktam", icon: "✕" },
                    { platform: "Telegram", handle: "@free_uktam_hasanov", url: "https://t.me/free_uktam_hasanov", icon: "➤" },
                    { platform: "Threads", handle: "@free_uktam_hasanov", url: "https://www.threads.com/@free_uktam_hasanov", icon: "@" },
                    { platform: "TikTok", handle: "@hasanov.defense.i", url: "https://www.tiktok.com/@hasanov.defense.i", icon: "♪" },
                  ].map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-white/5 hover:bg-white/10 rounded-lg px-4 py-3 transition-colors group"
                    >
                      <span className="text-[20px] text-slide-primary w-8 text-center">{link.icon}</span>
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
  // 5. Purpose of This Briefing
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

          <h2 className="text-[44px] font-extrabold leading-[1.1] tracking-tight mb-4" style={{ animation: "fade-in 0.5s ease-out 0.2s both" }}>
            Why this briefing exists
          </h2>
          <p className="text-[22px] text-slide-muted leading-relaxed max-w-[1100px] mb-12" style={{ animation: "fade-in 0.5s ease-out 0.3s both" }}>
            A fintech executive detained in Uzbekistan under circumstances that raise material concerns about rule of law and the investment climate.
          </p>

          <div className="grid grid-cols-3 gap-8 flex-1">
            {/* Column 1 */}
            <div className="flex flex-col gap-6" style={{ animation: "fade-in 0.5s ease-out 0.4s both" }}>
              <div className="bg-slide-surface rounded-2xl p-8 flex-1">
                <h3 className="text-[28px] font-bold mb-4">The Situation</h3>
                <p className="text-[20px] text-slide-muted leading-relaxed">
                  NBU simultaneously holds equity in a joint venture and filed the criminal complaint against its director during active settlement negotiations.
                </p>
              </div>
              <div className="bg-slide-surface rounded-2xl p-8 flex-1">
                <h3 className="text-[28px] font-bold mb-4">The Audience</h3>
                <p className="text-[20px] text-slide-muted leading-relaxed">
                  IFI compliance officers, correspondent bank risk teams, eurobond investors, and rating agency analysts with NBU exposure.
                </p>
              </div>
            </div>

            {/* Column 2: Key Questions */}
            <div className="bg-slide-surface rounded-2xl p-8" style={{ animation: "fade-in 0.5s ease-out 0.55s both" }}>
              <h3 className="text-[28px] font-bold mb-6">Key Questions</h3>
              <div className="space-y-5">
                {[
                  "Was criminal prosecution used as commercial leverage during settlement talks?",
                  "Does NBU's dual role as shareholder and complainant represent a conflict of interest?",
                  "What are the implications for international investors and correspondent banks?",
                ].map((q, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-[28px] font-extrabold text-slide-primary leading-none mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-[20px] text-slide-muted leading-relaxed">{q}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: CTA */}
            <div className="flex flex-col gap-6" style={{ animation: "fade-in 0.5s ease-out 0.7s both" }}>
              <a
                href="https://calendly.com/eugene-gourevitch-omnistratgroup/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-slide-primary hover:bg-slide-primary/90 text-white rounded-2xl p-8 transition-all duration-300 block flex-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <div className="relative">
                  <p className="text-[14px] tracking-[0.15em] uppercase opacity-70 mb-3">Schedule Now</p>
                  <h4 className="text-[26px] font-bold mb-3">Book a Confidential Briefing</h4>
                  <p className="text-[19px] opacity-80 leading-relaxed">
                    30-minute Zoom call with the OmniStrat team. Strictly confidential.
                  </p>
                  <div className="flex items-center gap-2 mt-5 text-[18px] font-semibold opacity-90">
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
        </div>
      </SlideLayout>
    ),
  },
  // 3. NBU Institutional Profile
  {
    id: "solfy-nbu-profile",
    title: "NBU Profile",
    component: (props) => (
      <SlideLayout variant="white" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <div className="flex items-center justify-between mb-8">
            <SlidePill label="NBU: INSTITUTIONAL PROFILE & INTERNATIONAL EXPOSURE" variant="light" />
            <OmniStratLogo />
          </div>

          <div className="flex gap-12 flex-1">
            {/* Left column: Logo + Key Facts */}
            <div className="w-[35%] flex flex-col">
              <div className="bg-slide-surface rounded-2xl p-8 flex flex-col items-center mb-6">
                <img src={nbuLogo} alt="NBU Logo" className="w-[120px] h-[120px] object-contain mb-4" />
                <h3 className="text-[24px] font-bold text-center leading-tight">National Bank for Foreign Economic Activity</h3>
                <p className="text-[18px] text-slide-muted text-center mt-2">Republic of Uzbekistan</p>
                <p className="text-[16px] text-slide-muted text-center mt-1">Est. 1991 | Tashkent</p>
              </div>

              <div className="bg-slide-surface rounded-2xl p-6 mb-6">
                <h4 className="text-[22px] font-bold text-slide-primary mb-3">Shareholding Structure</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-[19px] font-semibold mb-1">
                      <span>Fund for Reconstruction & Development</span>
                      <span className="text-slide-primary">59.25%</span>
                    </div>
                    <div className="w-full h-2 bg-slide-primary/10 rounded-full overflow-hidden">
                      <div className="h-full bg-slide-primary rounded-full" style={{ width: "59.25%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[19px] font-semibold mb-1">
                      <span>Ministry of Economy & Finance</span>
                      <span className="text-slide-primary">40.75%</span>
                    </div>
                    <div className="w-full h-2 bg-slide-primary/10 rounded-full overflow-hidden">
                      <div className="h-full bg-slide-primary rounded-full" style={{ width: "40.75%" }} />
                    </div>
                  </div>
                </div>
                <p className="text-[17px] text-slide-muted mt-3">100% state-owned. Total authorized capital: UZS 16.7 trillion.</p>
              </div>

              <div className="bg-slide-surface rounded-2xl p-6">
                <h4 className="text-[22px] font-bold text-slide-primary mb-3">Credit Ratings</h4>
                <div className="space-y-2 text-[19px]">
                  <div className="flex justify-between"><span className="text-slide-muted">S&P</span><span className="font-bold">BB (stable)</span></div>
                  <div className="flex justify-between"><span className="text-slide-muted">Fitch</span><span className="font-bold">BB (stable)</span></div>
                  <div className="flex justify-between"><span className="text-slide-muted">Moody's</span><span className="font-bold">Ba3 (stable)</span></div>
                </div>
              </div>
            </div>

            {/* Right column: Management + Exposure */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="bg-slide-surface rounded-2xl p-6">
                <h4 className="text-[22px] font-bold text-slide-primary mb-4">Management Board</h4>
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
                        <span className="text-[19px] font-bold">{person.name}</span>
                        <span className="text-[17px] text-slide-primary ml-2">{person.role}</span>
                        <p className="text-[16px] text-slide-muted">{person.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slide-surface rounded-2xl p-5">
                  <h4 className="text-[18px] font-bold text-slide-primary mb-2">Correspondent Banks</h4>
                  <p className="text-[17px] text-slide-muted leading-relaxed">JP Morgan Chase, Citibank, Standard Chartered, Deutsche Bank, Natixis, SMBC</p>
                </div>
                <div className="bg-slide-surface rounded-2xl p-5">
                  <h4 className="text-[18px] font-bold text-slide-primary mb-2">IFI Credit Lines</h4>
                  <p className="text-[17px] text-slide-muted leading-relaxed">EBRD, IFC (World Bank Group), ADB, MIGA guarantees</p>
                </div>
                <div className="bg-slide-surface rounded-2xl p-5">
                  <h4 className="text-[18px] font-bold text-slide-primary mb-2">LSE Eurobonds</h4>
                  <p className="text-[17px] text-slide-muted leading-relaxed">2020 issuance on London Stock Exchange. Outstanding obligations to international bondholders.</p>
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
  // 4. The Parties
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
          <h2 className="text-[40px] font-extrabold leading-tight tracking-tight mb-10">
            Key stakeholders in the Solfy CA dispute
          </h2>

          <div className="grid grid-cols-3 gap-8 flex-1">
            {/* Poletaev */}
            <div className="bg-slide-surface rounded-2xl p-8 flex flex-col hover:shadow-lg transition-shadow duration-300" style={{ animation: "fade-in 0.6s ease-out 0.3s both" }}>
              <div className="flex items-center gap-5 mb-6">
                <div className="w-[90px] h-[90px] rounded-full overflow-hidden shrink-0 border-2 border-slide-primary/20" style={{ animation: "scale-in 0.5s ease-out 0.5s both" }}>
                  <img src={poletaevPhoto} alt="Maxim Poletaev" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-[26px] font-bold leading-tight">Maxim V. Poletaev</h3>
                  <p className="text-[17px] text-slide-primary font-semibold">Foreign Investor</p>
                </div>
              </div>
              <ul className="space-y-3.5">
                {[
                  "Russian investor, 50% beneficial owner via Solvy Cyprus Limited",
                  "Former First Deputy Chairman of Sberbank",
                  "Board member of Nornickel, MegaFon, Metalloinvest",
                  "Chairman of Fortenova Group, co-founder of Gauss Ventures",
                  "Represented by Amsterdam & Partners LLP",
                ].map((item, i) => (
                  <li key={item} className="flex gap-3 text-[19px] text-slide-muted leading-relaxed" style={{ animation: `fade-in 0.4s ease-out ${0.6 + i * 0.1}s both` }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-slide-primary mt-2.5 shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hasanov */}
            <div className="bg-slide-surface rounded-2xl p-8 flex flex-col border-2 border-red-500/20 hover:shadow-lg hover:shadow-red-500/5 transition-shadow duration-300" style={{ animation: "fade-in 0.6s ease-out 0.5s both" }}>
              <div className="flex items-center gap-5 mb-6">
                <div className="relative">
                  <div className="w-[90px] h-[90px] rounded-full overflow-hidden shrink-0 border-2 border-red-500/30" style={{ animation: "scale-in 0.5s ease-out 0.7s both" }}>
                    <img src={uktamPhoto} alt="Uktam Hasanov" className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase" style={{ animation: "scale-in 0.3s ease-out 1s both" }}>
                    Detained
                  </div>
                </div>
                <div>
                  <h3 className="text-[26px] font-bold leading-tight">Hasanov Uktam N.</h3>
                  <p className="text-[17px] text-red-600 font-semibold">Detained Director</p>
                </div>
              </div>
              <ul className="space-y-3.5">
                {[
                  "Director of Solfy CA LLC, the only individual charged",
                  "Currently held in custody in Tashkent",
                  "Charged under Article 167(3)(a), embezzlement in large amounts",
                  "No personal enrichment alleged",
                  "Lowest-ranking individual in the corporate chain",
                ].map((item, i) => (
                  <li key={item} className="flex gap-3 text-[19px] text-slide-muted leading-relaxed" style={{ animation: `fade-in 0.4s ease-out ${0.8 + i * 0.1}s both` }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mirsoatov */}
            <div className="bg-slide-surface rounded-2xl p-8 flex flex-col hover:shadow-lg transition-shadow duration-300" style={{ animation: "fade-in 0.6s ease-out 0.7s both" }}>
              <div className="flex items-center gap-5 mb-6">
                <div className="w-[90px] h-[90px] rounded-full overflow-hidden shrink-0 border-2 border-slide-foreground/10" style={{ animation: "scale-in 0.5s ease-out 0.9s both" }}>
                  <img src={mirsoatovPhoto} alt="Alisher Mirsoatov" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-[26px] font-bold leading-tight">Alisher K. Mirsoatov</h3>
                  <p className="text-[17px] text-slide-primary font-semibold">NBU Chairman</p>
                </div>
              </div>
              <ul className="space-y-3.5">
                {[
                  "Chairman of NBU since November 2017",
                  "Born 1974, Tashkent. Career NBU insider since 1996",
                  "Former Chairman of Uzpromstroybank (2016-2017)",
                  "Publicly identified as source of threats to the investor",
                  "Chairman of Uzbekistan Winter Sports Association",
                ].map((item, i) => (
                  <li key={item} className="flex gap-3 text-[19px] text-slide-muted leading-relaxed" style={{ animation: `fade-in 0.4s ease-out ${1.0 + i * 0.1}s both` }}>
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
  // 5. The Critical Ten-Day Window
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
              <SlidePill label="THE CRITICAL TEN-DAY WINDOW" variant="light" />
              <OmniStratLogo />
            </div>
            <h2 className="text-[44px] font-extrabold leading-[1.1] tracking-tight mb-16">
              March 17-27, 2026: From settlement counter-proposal to criminal charges
            </h2>

            <div className="flex-1 flex items-center">
              <div className="w-full relative">
                {/* Horizontal line */}
                <div className="absolute left-0 right-0 top-[40px] h-[3px] bg-slide-foreground/10">
                  <div
                    className="h-full bg-slide-primary rounded-full"
                    style={{
                      animation: "timeline-fill 1.8s ease-out 0.3s forwards",
                      width: "0%",
                    }}
                  />
                </div>

                <div className="grid grid-cols-4 gap-8 relative">
                  {steps.map((step, i) => (
                    <div
                      key={step.date}
                      className="flex flex-col items-center text-center"
                      style={{
                        animation: `fade-in 0.5s ease-out ${0.4 + i * 0.35}s both`,
                      }}
                    >
                      {/* Node */}
                      <div
                        className={`w-[80px] h-[80px] rounded-full flex items-center justify-center text-[18px] font-extrabold tracking-wide relative z-10 ${
                          step.accent
                            ? "bg-slide-primary text-white shadow-[0_0_30px_hsl(var(--slide-primary)/0.4)]"
                            : "bg-white border-[3px] border-slide-primary text-slide-primary"
                        }`}
                        style={{
                          animation: `scale-in 0.4s ease-out ${0.3 + i * 0.35}s both`,
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>

                      {/* Date badge */}
                      <div
                        className={`mt-5 px-5 py-2 rounded-full text-[16px] font-bold tracking-wider ${
                          step.accent
                            ? "bg-slide-primary text-white"
                            : "bg-slide-primary/10 text-slide-primary"
                        }`}
                      >
                        {step.date}
                      </div>

                      {/* Title */}
                      <h3 className={`mt-4 text-[22px] font-bold leading-tight ${
                        step.accent ? "text-slide-primary" : "text-slide-foreground"
                      }`}>
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-[18px] text-slide-muted leading-relaxed max-w-[360px]">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <style>{`
            @keyframes timeline-fill {
              from { width: 0%; }
              to { width: 100%; }
            }
          `}</style>
        </SlideLayout>
      );
    },
  },
  // 6. NBU's Irreconcilable Dual Role
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
  // 7. Dramatic Statement
  {
    id: "solfy-dramatic",
    title: "Dramatic Statement",
    component: (props) => (
      <MissionDarkTemplate
        {...props}
        headline="An Uzbek citizen held as human collateral — detained not for justice, but as leverage. This is not prosecution. It is state-sponsored coercion."
        backgroundImage={detentionCell}
      />
    ),
  },
  // 8. Excessive Measure: Why Arrest Is Disproportionate
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

          <h2
            className="text-[42px] font-extrabold leading-[1.1] tracking-tight mb-3"
            style={{ animation: "fade-in 0.5s ease-out 0.2s both" }}
          >
            Why arrest is an excessive and disproportionate measure
          </h2>
          <p
            className="text-[21px] text-slide-muted leading-relaxed mb-10 max-w-[1200px]"
            style={{ animation: "fade-in 0.5s ease-out 0.3s both" }}
          >
            Under Uzbek criminal procedure (Articles 236-243 CPC) and international standards, pre-trial detention is a measure of last resort. In this case, none of the legal prerequisites are satisfied.
          </p>

          <div className="grid grid-cols-2 gap-8 flex-1">
            {/* Left column */}
            <div className="flex flex-col gap-6" style={{ animation: "fade-in 0.5s ease-out 0.4s both" }}>
              <div className="bg-slide-surface rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-slide-primary/10 flex items-center justify-center text-[20px] font-bold text-slide-primary">01</div>
                  <h3 className="text-[24px] font-bold">No Flight Risk</h3>
                </div>
                <p className="text-[19px] text-slide-muted leading-relaxed">
                  Hasanov is an Uzbek citizen with permanent residence, family ties, and no foreign passport. He has no means or incentive to flee the jurisdiction. Travel restrictions or bail would achieve the same purpose without detention.
                </p>
              </div>

              <div className="bg-slide-surface rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-slide-primary/10 flex items-center justify-center text-[20px] font-bold text-slide-primary">02</div>
                  <h3 className="text-[24px] font-bold">No Risk of Evidence Tampering</h3>
                </div>
                <p className="text-[19px] text-slide-muted leading-relaxed">
                  All evidence is documentary: bank records, contracts (No. 289/37), transfer statements, and certificates of acceptance. These are held by NBU and state institutions, entirely beyond Hasanov's ability to alter or destroy.
                </p>
              </div>

              <div className="bg-slide-surface rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-slide-primary/10 flex items-center justify-center text-[20px] font-bold text-slide-primary">03</div>
                  <h3 className="text-[24px] font-bold">No Personal Enrichment Alleged</h3>
                </div>
                <p className="text-[19px] text-slide-muted leading-relaxed">
                  The resolution charges "purposeless squandering" of company funds but identifies no personal enrichment, no offshore transfers, no asset concealment. All funds flowed through documented corporate channels to 2,134 contractual counterparties.
                </p>
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-6" style={{ animation: "fade-in 0.5s ease-out 0.55s both" }}>
              <div className="bg-slide-surface rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-slide-primary/10 flex items-center justify-center text-[20px] font-bold text-slide-primary">04</div>
                  <h3 className="text-[24px] font-bold">Contractual Dispute, Not Criminal Conduct</h3>
                </div>
                <p className="text-[19px] text-slide-muted leading-relaxed">
                  The underlying matter is a commercial disagreement over reward payments under Contract 289/37, already adjudicated in Uzbek civil courts (Dec 2024, May 2025). Criminalizing a contractual dispute violates the principle of ultima ratio in criminal law.
                </p>
              </div>

              <div className="bg-slide-surface rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-slide-primary/10 flex items-center justify-center text-[20px] font-bold text-slide-primary">05</div>
                  <h3 className="text-[24px] font-bold">Arrest During Settlement Negotiations</h3>
                </div>
                <p className="text-[19px] text-slide-muted leading-relaxed">
                  Charges were filed on March 27, exactly one day after NBU rejected the withdrawal of its criminal complaint. The timing reveals the arrest as a pressure tactic during active commercial negotiations, not a genuine law enforcement action.
                </p>
              </div>

              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-[20px] font-bold text-red-600">!</div>
                  <h3 className="text-[24px] font-bold text-red-700">International Law Violation</h3>
                </div>
                <p className="text-[19px] text-red-800/80 leading-relaxed">
                  Arbitrary pre-trial detention in a commercial dispute violates ICCPR Article 9 (liberty and security), ICCPR Article 14 (fair trial), and ECHR Article 5 standards. The UN Working Group on Arbitrary Detention has consistently held that detention used as commercial leverage constitutes arbitrary deprivation of liberty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  // 9. Selective Prosecution
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
            <h3 className="text-[34px] font-bold text-slide-primary mb-6">Charged</h3>
            <div className="bg-slide-surface rounded-2xl p-8">
              <h4 className="text-[26px] font-bold mb-3">Hasanov Uktam Nasulloyevich</h4>
              <p className="text-[21px] text-slide-muted leading-relaxed">
                Locally appointed director. The most vulnerable individual in the corporate chain. No personal enrichment alleged.
              </p>
            </div>
          </div>
        }
        rightContent={
          <div>
            <h3 className="text-[34px] font-bold mb-6">Not Charged</h3>
            <ul className="space-y-5">
              {[
                "Foreign co-founders who directed corporate strategy",
                "NBU's investment committee members who authorized three capital tranches totaling 17+ billion soums",
                "NBU's compliance and audit functions responsible for oversight",
                "NBU's retail division leadership who publicly endorsed the product",
                "20% shareholder Full Stack Solution and its principals (Izrailbekov)",
              ].map((item) => (
                <li key={item} className="text-[21px] text-slide-muted leading-relaxed flex items-start gap-3">
                  <span className="text-slide-primary mt-1">&#8226;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        }
      />
    ),
  },
  // 9. Regulatory Obligations
  {
    id: "solfy-regulatory",
    title: "Regulatory Obligations",
    component: (props) => (
      <ServicesGridTemplate
        {...props}
        pillLabel="YOUR REGULATORY OBLIGATIONS"
        headline="Why this is your problem"
        columns={3}
        cards={[
          {
            title: "IFIs (EBRD, IFC, ADB)",
            items: [
              "EBRD Integrity Risk Policy (2024) requires ongoing integrity due diligence",
              "IFC Performance Standards mandate governance review",
              "ADB Safeguard Policy requires institutional capacity assessment",
              "MIGA political risk guarantees may be triggered",
            ],
          },
          {
            title: "Correspondent Banks",
            items: [
              "Wolfsberg Principles require enhanced due diligence on adverse governance information",
              "BSA/AML obligations under FinCEN (31 CFR 1010.610)",
              "EU 6AMLD extends liability for failure to prevent ML through correspondent channels",
            ],
          },
          {
            title: "Eurobond / Rating Agencies",
            items: [
              "Imminent ICSID arbitration claim constitutes material contingent liability",
              "Bondholders have fiduciary obligations to assess counterparty governance risk",
              "NBU's dual role represents unusual governance risk requiring EDD review",
            ],
          },
        ]}
      />
    ),
  },
  // 10. Contradictions in Charging Document
  {
    id: "solfy-contradictions",
    title: "Contradictions",
    component: (props) => (
      <TwoColumnNumberedTemplate
        {...props}
        pillLabel="CONTRADICTIONS IN THE CHARGES"
        headline="A contractual dispute repackaged as criminal prosecution"
        columns={2}
        items={[
          {
            num: "01",
            title: "Allegation: Purposeless Squandering",
            desc: "Charges allege misappropriation of ~17 billion soums in charter capital. Yet the prosecution's own evidence describes operational expenditures: staff salaries, technology development, merchant acquisition. Normal costs of running a fintech startup.",
          },
          {
            num: "02",
            title: "Allegation: Unpaid Bank Rewards",
            desc: "Charges allege 14.9 billion soums in unpaid contractual rewards owed to NBU. These correspond to obligations under Agreement No. 289/37, already adjudicated in civil court rulings (December 2024, May 2025). The criminal complaint repackages a commercial dispute.",
          },
        ]}
      />
    ),
  },
  // 11. Broader Context
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
          <p className="text-[22px] text-slide-muted mt-3 max-w-[1200px]">
            A pattern of investor-hostile actions undermines Uzbekistan's reform credibility
          </p>

          <div className="grid grid-cols-2 gap-8 mt-10 flex-1">
            {[
              {
                tag: "EXTRADITION",
                title: "Shadmanov (2025)",
                text: "Forcibly extradited from Dubai. ICIJ documented use of lobbyist to trigger sanctions inquiries. Lawyers describe prosecution as politically motivated.",
                accent: "bg-red-500/10 text-red-600",
              },
              {
                tag: "ICSID ARBITRATION",
                title: "Humans Mobile v. Uzbekistan",
                text: "ICSID ARB/25/24 — Singapore-based company initiated arbitration citing bilateral investment treaty violations by Uzbek state authorities.",
                accent: "bg-amber-500/10 text-amber-600",
              },
              {
                tag: "SELECTIVE JUSTICE",
                title: "Former Minister Voitov (2025)",
                text: "Convicted under Article 167(3)(a) — the same provision as Hasanov. Received no prison time after compensating damages. Illustrates the transactional nature of embezzlement prosecutions.",
                accent: "bg-purple-500/10 text-purple-600",
              },
              {
                tag: "CAPITAL FLIGHT",
                title: "Foreign Direct Investment Gap",
                text: "Kazakhstan: $151B accumulated FDI stock. Uzbekistan: $17B. IBTimes identifies the Solfy case as a test of institutional reform credibility.",
                accent: "bg-slide-primary/10 text-slide-primary",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="bg-slide-surface rounded-2xl p-8 flex flex-col"
                style={{ animation: `fade-in 0.5s ease-out ${0.3 + i * 0.15}s both` }}
              >
                <span className={`text-[15px] font-bold tracking-[0.15em] px-3 py-1 rounded-full w-fit mb-4 ${item.accent}`}>
                  {item.tag}
                </span>
                <h3 className="text-[28px] font-bold mb-3">{item.title}</h3>
                <p className="text-[21px] text-slide-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-[19px] text-slide-muted mt-6 border-t border-slide-foreground/10 pt-4">
            <span className="font-bold text-slide-foreground">Source:</span> NBU Chairman Mirsoatov publicly identified as source of threats to international investors (UA.NEWS, IBTimes)
          </p>
        </div>
      </SlideLayout>
    ),
  },
  // 12. Media Coverage
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

          <h2
            className="text-[46px] font-extrabold leading-[1.05] tracking-tight mb-2"
            style={{ animation: "fade-in 0.5s ease-out 0.2s both" }}
          >
            The world is watching
          </h2>
          <p
            className="text-[20px] text-slide-muted mb-10"
            style={{ animation: "fade-in 0.4s ease-out 0.35s both" }}
          >
            International media spotlight on NBU's conduct and Uzbekistan's investment climate
          </p>

          <div className="grid grid-cols-2 gap-6 flex-1">
            {[
              {
                source: "IBTimes",
                date: "March 2026",
                quote: "Institutional gaps undermining Uzbekistan's reform credibility",
                detail: "Names NBU Chairman Mirsoatov as source of threats. Identifies the Solfy case as a litmus test for foreign investor protection.",
                color: "border-l-slide-primary",
                bg: "bg-slide-primary/5",
              },
              {
                source: "PR Newswire / Investing.com",
                date: "April 2026",
                quote: "Cease irregular detentions and uphold international legal standards",
                detail: "Amsterdam & Partners formal press release distributed globally via PR Newswire. Picked up by Investing.com, Yahoo Finance, and financial wire services.",
                color: "border-l-slide-primary",
                bg: "bg-slide-primary/5",
              },
              {
                source: "UA.NEWS",
                date: "2025-2026",
                quote: "NBU Chairman Mirsoatov personally identified as source of threats",
                detail: "Ongoing coverage naming specific individuals. Additional placements across Russian-language Telegram channels and international outlets.",
                color: "border-l-red-500",
                bg: "bg-red-50",
              },
              {
                source: "UzDaily.uz",
                date: "February 2026",
                quote: "Poletaev and Solfy enter legal dispute with NBU",
                detail: "Domestic Uzbek media reporting on investor engagement of Amsterdam & Partners LLP, signaling the dispute has entered the international arena.",
                color: "border-l-amber-500",
                bg: "bg-amber-50",
              },
            ].map((item, i) => (
              <div
                key={item.source}
                className={`${item.bg} border-l-4 ${item.color} rounded-r-2xl p-7 flex flex-col justify-between group hover:shadow-lg transition-shadow duration-300`}
                style={{ animation: `fade-in 0.5s ease-out ${0.4 + i * 0.15}s both` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[22px] font-extrabold tracking-tight">{item.source}</span>
                    <span className="text-[14px] font-semibold text-slide-muted tracking-wider uppercase">{item.date}</span>
                  </div>
                  <blockquote className="text-[21px] font-bold leading-snug mb-4 italic">
                    "{item.quote}"
                  </blockquote>
                  <p className="text-[17px] text-slide-muted leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-6 bg-slide-foreground text-white rounded-2xl px-8 py-5 flex items-center justify-between"
            style={{ animation: "fade-in 0.5s ease-out 1s both" }}
          >
            <p className="text-[18px] font-semibold">Coverage is accelerating. Additional media placements are scheduled across tier-1 international outlets.</p>
            <span className="text-[28px] font-bold text-slide-primary ml-6 shrink-0">→</span>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  // 13. Legal Remedies in Progress
  {
    id: "solfy-legal-remedies",
    title: "Legal Remedies",
    component: (props) => (
      <TwoColumnNumberedTemplate
        {...props}
        pillLabel="LEGAL REMEDIES IN PROGRESS"
        headline="Three-track legal and advocacy strategy"
        columns={2}
        items={[
          {
            num: "01",
            title: "ICSID BIT Arbitration",
            desc: "Investment treaty claim under the Russia-Uzbekistan bilateral investment treaty is imminent. Will invoke ICSID jurisdiction for violations of fair and equitable treatment, protection against expropriation, and full protection and security.",
          },
          {
            num: "02",
            title: "Criminal Defense",
            desc: "Hasanov's independent defense counsel in Tashkent is fully funded and operational. Defense position: charges lack legal merit and repackage a commercial dispute as criminal prosecution.",
          },
          {
            num: "03",
            title: "International Advocacy",
            desc: "Coordinated engagement with IFIs, rating agencies, correspondent banks, eurobond stakeholders, and international media to ensure transparency and accountability.",
          },
        ]}
      />
    ),
  },
  // 14. Contact / CTA
  {
    id: "solfy-contact",
    title: "Request a Briefing",
    component: (props) => (
      <SlideLayout variant="dark" slideNumber={props.slideNumber} totalSlides={props.totalSlides}>
        <div className="flex flex-col h-full p-[80px]">
          <div className="flex items-center justify-between mb-8">
            <SlidePill label="REQUEST A CONFIDENTIAL BRIEFING" variant="light" />
            <OmniStratLogo variant="light" />
          </div>

          <div className="flex-1 flex flex-col justify-center items-center text-center">
            <h2
              className="text-[56px] font-extrabold text-white leading-[1.05] tracking-tight mb-4"
              style={{ animation: "fade-in 0.6s ease-out 0.2s both" }}
            >
              Let's talk.
            </h2>
            <p
              className="text-[22px] text-white/60 max-w-[800px] leading-relaxed mb-16"
              style={{ animation: "fade-in 0.5s ease-out 0.4s both" }}
            >
              We invite your compliance, legal, or investment team to a 30-minute confidential Zoom briefing to discuss the documented facts.
            </p>

            <div className="grid grid-cols-2 gap-10 w-full max-w-[1200px]" style={{ animation: "fade-in 0.5s ease-out 0.6s both" }}>
              {/* OmniStrat */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 text-left">
                <h3 className="text-[28px] font-extrabold text-white mb-1">OmniStrat Group LLC</h3>
                <p className="text-[16px] text-slide-primary font-semibold tracking-wider uppercase mb-8">Strategic Advisory</p>

                <div className="space-y-5">
                  <div>
                    <p className="text-[13px] text-white/40 tracking-[0.15em] uppercase mb-1">Contact</p>
                    <p className="text-[20px] text-white font-semibold">Eugene Gourevitch</p>
                    <p className="text-[17px] text-white/60">Managing Principal</p>
                  </div>
                  <div>
                    <p className="text-[13px] text-white/40 tracking-[0.15em] uppercase mb-1">Email</p>
                    <p className="text-[20px] text-white font-semibold">info@omnistratgroup.com</p>
                  </div>
                  <div>
                    <p className="text-[13px] text-white/40 tracking-[0.15em] uppercase mb-1">Web</p>
                    <a href="https://www.omnistratgroup.com" target="_blank" rel="noopener noreferrer" className="text-[20px] text-slide-primary font-semibold hover:underline">
                      www.omnistratgroup.com
                    </a>
                  </div>
                </div>

                <a
                  href="https://calendly.com/eugene-gourevitch-omnistratgroup/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-3 bg-slide-primary hover:bg-slide-primary/90 text-white rounded-xl px-7 py-4 transition-colors group"
                >
                  <span className="text-[18px] font-bold">Schedule a Briefing</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

              {/* Amsterdam & Partners */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 text-left">
                <h3 className="text-[28px] font-extrabold text-white mb-1">Amsterdam & Partners LLP</h3>
                <p className="text-[16px] text-white/50 font-semibold tracking-wider uppercase mb-8">Legal Counsel</p>

                <div className="space-y-5">
                  <div>
                    <p className="text-[13px] text-white/40 tracking-[0.15em] uppercase mb-1">Contact</p>
                    <p className="text-[20px] text-white font-semibold">Robert Amsterdam</p>
                    <p className="text-[17px] text-white/60">Founding Partner</p>
                  </div>
                  <div>
                    <p className="text-[13px] text-white/40 tracking-[0.15em] uppercase mb-1">London</p>
                    <p className="text-[18px] text-white/70">125 Old Broad Street, EC2N 1AR</p>
                  </div>
                  <div>
                    <p className="text-[13px] text-white/40 tracking-[0.15em] uppercase mb-1">Washington, DC</p>
                    <p className="text-[18px] text-white/70">1054 31st St NW, Ste 110, 20007</p>
                  </div>
                  <div>
                    <p className="text-[13px] text-white/40 tracking-[0.15em] uppercase mb-1">Web</p>
                    <p className="text-[20px] text-white font-semibold">amsterdamandpartners.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[14px] text-white/30 text-center mt-8" style={{ animation: "fade-in 0.5s ease-out 1s both" }}>
            This briefing contains privileged and confidential information. Distribution at recipient's discretion.
          </p>
        </div>
      </SlideLayout>
    ),
  },
];
