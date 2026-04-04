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
          <div className="flex items-center justify-between">
            <SlidePill label="PURPOSE OF THIS BRIEFING" />
            <OmniStratLogo />
          </div>

          <p className="text-[20px] text-slide-muted mt-6 max-w-[1200px] leading-relaxed" style={{ animation: "fade-in 0.6s ease-out 0.2s both" }}>
            This briefing addresses the detention and criminal prosecution of a fintech company executive in Uzbekistan under circumstances that raise material concerns about the investment climate and rule of law.
          </p>

          <div className="flex gap-10 flex-1 mt-10">
            {/* Left column */}
            <div className="flex-1 flex flex-col gap-8">
              <div style={{ animation: "fade-in 0.6s ease-out 0.4s both" }}>
                <h3 className="text-[28px] font-bold mb-4">The Situation</h3>
                <p className="text-[19px] text-slide-muted leading-relaxed">
                  The National Bank for Foreign Economic Activity of Uzbekistan (NBU) simultaneously holds equity in a joint venture and filed the criminal complaint against that venture's director during active settlement negotiations with the foreign investor.
                </p>
              </div>

              <div style={{ animation: "fade-in 0.6s ease-out 0.6s both" }}>
                <h3 className="text-[28px] font-bold mb-4">The Audience</h3>
                <p className="text-[19px] text-slide-muted leading-relaxed">
                  IFI compliance officers, correspondent bank risk teams, eurobond investors, and rating agency analysts with exposure to NBU or the Republic of Uzbekistan.
                </p>
              </div>

              <div style={{ animation: "fade-in 0.6s ease-out 0.8s both" }}>
                <h3 className="text-[28px] font-bold mb-4">Key Questions Addressed</h3>
                <div className="space-y-3">
                  {[
                    "Was criminal prosecution used as commercial leverage during settlement talks?",
                    "Does the dual role of NBU as shareholder and complainant represent a conflict of interest?",
                    "What are the implications for international investors and correspondent banks?",
                  ].map((q, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-slide-primary mt-2.5 shrink-0" />
                      <p className="text-[18px] text-slide-muted leading-relaxed">{q}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column: The Ask + Booking */}
            <div className="w-[420px] flex flex-col gap-6" style={{ animation: "fade-in 0.6s ease-out 0.6s both" }}>
              <div className="bg-slide-surface rounded-2xl p-8">
                <h4 className="text-[24px] font-bold text-slide-primary mb-4">The Ask</h4>
                <p className="text-[19px] text-slide-muted leading-relaxed">
                  We invite a 30-minute confidential Zoom briefing to present the documented facts and answer questions from your compliance or legal team.
                </p>
              </div>

              <a
                href="https://calendly.com/eugene-gourevitch-omnistratgroup/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-slide-primary hover:bg-slide-primary/90 text-white rounded-2xl p-8 transition-all duration-300 block"
                style={{ animation: "fade-in 0.6s ease-out 1s both" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <div className="relative">
                  <p className="text-[14px] tracking-[0.15em] uppercase opacity-70 mb-2">Schedule Now</p>
                  <h4 className="text-[24px] font-bold mb-2">Book a Confidential Briefing</h4>
                  <p className="text-[17px] opacity-80 leading-relaxed">
                    30-minute Zoom call with the OmniStrat team. Strictly confidential. No obligation.
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-[16px] font-semibold opacity-90">
                    <span>Open Calendly</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </a>

              <div className="bg-slide-foreground/5 rounded-2xl p-6 border border-slide-foreground/10 space-y-3" style={{ animation: "fade-in 0.6s ease-out 1.2s both" }}>
                <p className="text-[15px] text-slide-muted leading-relaxed">
                  <span className="font-bold text-slide-foreground">Eugene Gourevitch</span> — eugene.gourevitch@omnistratgroup.com
                </p>
                <p className="text-[15px] text-slide-muted leading-relaxed">
                  <span className="font-bold text-slide-foreground">Robert Amsterdam</span> — robert.amsterdam@amsterdamandpartners.com
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
                <h4 className="text-[20px] font-bold text-slide-primary mb-3">Shareholding Structure</h4>
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
                <p className="text-[15px] text-slide-muted mt-3">100% state-owned. Total authorized capital: UZS 16.7 trillion.</p>
              </div>

              <div className="bg-slide-surface rounded-2xl p-6">
                <h4 className="text-[20px] font-bold text-slide-primary mb-3">Credit Ratings</h4>
                <div className="space-y-2 text-[17px]">
                  <div className="flex justify-between"><span className="text-slide-muted">S&P</span><span className="font-bold">BB (stable)</span></div>
                  <div className="flex justify-between"><span className="text-slide-muted">Fitch</span><span className="font-bold">BB (stable)</span></div>
                  <div className="flex justify-between"><span className="text-slide-muted">Moody's</span><span className="font-bold">Ba3 (stable)</span></div>
                </div>
              </div>
            </div>

            {/* Right column: Management + Exposure */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="bg-slide-surface rounded-2xl p-6">
                <h4 className="text-[20px] font-bold text-slide-primary mb-4">Management Board</h4>
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
                        <span className="text-[16px] text-slide-primary ml-2">{person.role}</span>
                        <p className="text-[15px] text-slide-muted">{person.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slide-surface rounded-2xl p-5">
                  <h4 className="text-[16px] font-bold text-slide-primary mb-2">Correspondent Banks</h4>
                  <p className="text-[15px] text-slide-muted leading-relaxed">JP Morgan Chase, Citibank, Standard Chartered, Deutsche Bank, Natixis, SMBC</p>
                </div>
                <div className="bg-slide-surface rounded-2xl p-5">
                  <h4 className="text-[16px] font-bold text-slide-primary mb-2">IFI Credit Lines</h4>
                  <p className="text-[15px] text-slide-muted leading-relaxed">EBRD, IFC (World Bank Group), ADB, MIGA guarantees</p>
                </div>
                <div className="bg-slide-surface rounded-2xl p-5">
                  <h4 className="text-[16px] font-bold text-slide-primary mb-2">LSE Eurobonds</h4>
                  <p className="text-[15px] text-slide-muted leading-relaxed">2020 issuance on London Stock Exchange. Outstanding obligations to international bondholders.</p>
                </div>
              </div>

              <div className="bg-slide-primary/5 border border-slide-primary/15 rounded-2xl p-5">
                <p className="text-[17px] text-slide-foreground leading-relaxed">
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
      <ServicesGridTemplate
        {...props}
        pillLabel="THE PARTIES"
        headline="Key stakeholders in the Solfy CA dispute"
        columns={3}
        cards={[
          {
            title: "Maxim V. Poletaev",
            items: [
              "Russian investor, 50% beneficial owner via Solvy Cyprus Limited",
              "Former First Deputy Chairman of Sberbank",
              "Board member of Nornickel, MegaFon, Metalloinvest",
              "Chairman of Fortenova Group, co-founder of Gauss Ventures",
              "Represented by Amsterdam & Partners LLP",
            ],
          },
          {
            title: "Hasanov Uktam N., Detained",
            items: [
              "Director of Solfy CA LLC, the only individual charged",
              "Currently held in custody in Tashkent",
              "Charged under Article 167(3)(a), embezzlement in large amounts",
              "No personal enrichment alleged",
              "Lowest-ranking individual in the corporate chain",
            ],
          },
          {
            title: "Solfy CA LLC",
            items: [
              "Fintech JV registered Tashkent, June 2020",
              "BNPL installment card product in partnership with NBU",
              "Declared bankrupt; liquidation not yet commenced",
              "Independent valuation (Bluestone): USD 42-52 million",
              "NBU holds 5% equity stake",
            ],
          },
        ]}
      />
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
                      <p className="mt-3 text-[16px] text-slide-muted leading-relaxed max-w-[360px]">
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
        headline="A foreign national held as human collateral — detained not for justice, but as leverage. This is not prosecution. It is state-sponsored coercion."
        backgroundImage={detentionCell}
      />
    ),
  },
  // 8. Selective Prosecution
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
            <h3 className="text-[28px] font-bold text-slide-primary mb-6">Charged</h3>
            <div className="bg-slide-surface rounded-2xl p-8">
              <h4 className="text-[22px] font-bold mb-3">Hasanov Uktam Nasulloyevich</h4>
              <p className="text-[18px] text-slide-muted leading-relaxed">
                Locally appointed director. The most vulnerable individual in the corporate chain. No personal enrichment alleged.
              </p>
            </div>
          </div>
        }
        rightContent={
          <div>
            <h3 className="text-[28px] font-bold mb-6">Not Charged</h3>
            <ul className="space-y-4">
              {[
                "Foreign co-founders who directed corporate strategy",
                "NBU's investment committee members who authorized three capital tranches totaling 17+ billion soums",
                "NBU's compliance and audit functions responsible for oversight",
                "NBU's retail division leadership who publicly endorsed the product",
                "20% shareholder Full Stack Solution and its principals (Izrailbekov)",
              ].map((item) => (
                <li key={item} className="text-[18px] text-slide-muted leading-relaxed flex items-start gap-3">
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
      <MultiColumnTableTemplate
        {...props}
        pillLabel="BROADER CONTEXT"
        headline="Uzbekistan's investment climate: The Solfy case is not an isolated incident"
        columns={[
          {
            title: "Shadmanov (2025)",
            items: [
              "Forcibly extradited from Dubai",
              "ICIJ documented use of lobbyist to trigger sanctions inquiries",
              "Lawyers describe prosecution as politically motivated",
            ],
          },
          {
            title: "Humans Mobile v. Uzbekistan",
            items: [
              "ICSID ARB/25/24",
              "Singapore-based company initiated ICSID arbitration",
              "Citing BIT violations by Uzbek state authorities",
            ],
          },
          {
            title: "Former Min. Voitov (2025)",
            items: [
              "Convicted under Article 167(3)(a), same provision as Hasanov",
              "No prison time after compensating damages",
              "Illustrates transactional nature of embezzlement prosecutions",
            ],
          },
          {
            title: "FDI Gap",
            items: [
              "Kazakhstan: $151B accumulated FDI stock",
              "Uzbekistan: $17B accumulated FDI stock",
              "IBTimes identifies Solfy case as test of institutional reform credibility",
            ],
          },
        ]}
        footer="NBU Chairman Mirsoatov publicly identified as source of threats to international investors (UA.NEWS, IBTimes)"
      />
    ),
  },
  // 12. Media Coverage
  {
    id: "solfy-media",
    title: "Media Coverage",
    component: (props) => (
      <ServicesGridTemplate
        {...props}
        pillLabel="MEDIA & INTERNATIONAL COVERAGE"
        headline="Growing international attention on the Solfy/NBU dispute"
        columns={2}
        cards={[
          {
            title: "IBTimes (March 2026)",
            desc: "Analysis identifies Solfy case as indicative of institutional gaps undermining Uzbekistan's reform credibility. References threats linked to NBU Chairman Mirsoatov.",
          },
          {
            title: "UzDaily.uz (February 2026)",
            desc: "Reports Poletaev and Solfy have entered legal dispute with NBU. Notes engagement of Amsterdam & Partners LLP.",
          },
          {
            title: "Investing.com / PR Newswire (April 2026)",
            desc: "Amsterdam & Partners press release urging Uzbekistan to cease irregular detentions and uphold international legal standards.",
          },
          {
            title: "UA.NEWS (2025-2026)",
            desc: "Names NBU Chairman Alisher Mirsoatov personally as source of threats to international investors. Additional placements in Russian-language Telegram channels and international outlets are ongoing.",
          },
        ]}
      />
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
          {
            num: "04",
            title: "Valuation",
            desc: "Independent valuation (Bluestone): USD 42-52 million fair value of Poletaev's 50% stake in Solfy CA.",
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
      <TwoColumnFreeformTemplate
        {...props}
        pillLabel="REQUEST A CONFIDENTIAL BRIEFING"
        subtitle="We invite your compliance, legal, or investment team to a 30-minute confidential Zoom briefing to discuss the documented facts and answer questions."
        leftContent={
          <div className="space-y-8">
            <div>
              <h3 className="text-[28px] font-bold mb-3">OmniStrat Group LLC</h3>
              <p className="text-[20px] text-slide-muted">Eugene Gourevitch, Managing Principal</p>
              <p className="text-[20px] text-slide-muted">eugene@omnistratgroup.com</p>
              <p className="text-[20px] text-slide-muted">omnistratgroup.com</p>
              <p className="text-[20px] text-slide-muted">Dubai | Miami</p>
            </div>
            <div className="bg-slide-primary text-white rounded-2xl px-8 py-5 inline-block">
              <p className="text-[18px] font-semibold">calendly.com/eugene-gourevitch-omnistratgroup/30min</p>
            </div>
          </div>
        }
        rightContent={
          <div>
            <h3 className="text-[28px] font-bold mb-3">Amsterdam & Partners LLP</h3>
            <p className="text-[20px] text-slide-muted">Robert Amsterdam, Founding Partner</p>
            <p className="text-[20px] text-slide-muted">125 Old Broad Street, London EC2N 1AR</p>
            <p className="text-[20px] text-slide-muted">1054 31st St NW, Ste 110, Washington, DC 20007</p>
            <p className="text-[20px] text-slide-muted">amsterdamandpartners.com</p>
            <p className="text-[18px] text-slide-muted/60 mt-10">
              This briefing contains privileged and confidential information. Distribution at recipient's discretion.
            </p>
          </div>
        }
      />
    ),
  },
];
