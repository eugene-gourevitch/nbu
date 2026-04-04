import { ReactNode } from "react";
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
import hero3d from "@/assets/hero-3d.jpg";
import missionBg from "@/assets/mission-bg.jpg";

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
        subtitle="Selective Criminal Prosecution Used as Commercial Leverage by the National Bank of Uzbekistan. A Confidential Briefing for International Financial Institutions, Correspondent Banks, and the Investor Community."
        meta="Confidential -- April 2026 -- Prepared by Amsterdam & Partners LLP and OmniStrat Group LLC"
        heroImage={hero3d}
        heroAlt="Strategic visual"
      />
    ),
  },
  // 2. Background: The Solfy Story
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
            <h3 className="text-[28px] font-bold mb-4">The Venture</h3>
            <p className="text-[18px] text-slide-muted leading-relaxed mb-4">
              Solfy CA LLC was established in Tashkent in June 2020 as a fintech joint venture between Russian investor Maxim Poletaev (50% via Solvy Cyprus Limited), the National Bank for Foreign Economic Activity of Uzbekistan (NBU, 5%), and other shareholders including Full Stack Solution (20%).
            </p>
            <p className="text-[18px] text-slide-muted leading-relaxed mb-4">
              The company launched a Buy Now, Pay Later (BNPL) installment card product in partnership with NBU -- Uzbekistan's largest commercial bank by assets (73.8% state-owned). NBU's investment committee authorized three capital infusions totaling over 17 billion soums. Its senior retail management publicly endorsed and promoted the product.
            </p>
            <p className="text-[18px] text-slide-muted leading-relaxed">
              An independent valuation by Bluestone assessed the company at USD 42-52 million.
            </p>
          </>
        }
        rightContent={
          <>
            <h3 className="text-[28px] font-bold mb-4">The Collapse</h3>
            <p className="text-[18px] text-slide-muted leading-relaxed mb-4">
              The business relationship between Solfy and NBU deteriorated. NBU terminated the partnership, and Solfy was declared bankrupt. A contractual dispute ensued over unpaid obligations under Agreement No. 289/37, which was adjudicated in Uzbek civil courts in December 2024 and May 2025.
            </p>
            <p className="text-[18px] text-slide-muted leading-relaxed mb-4">
              In February 2026, Amsterdam & Partners LLP announced representation of Solfy and Poletaev, reporting that the investor and associates had been subjected to serious threats by NBU representatives. UA.NEWS identified NBU Chairman Alisher Mirsoatov personally as the source of threats.
            </p>
            <p className="text-[18px] text-slide-muted leading-relaxed">
              Rather than resolving the matter commercially, NBU filed a criminal complaint against Solfy's locally appointed director -- converting a failed business venture into a criminal prosecution during active settlement negotiations.
            </p>
          </>
        }
      />
    ),
  },
  // 3. Purpose of This Briefing
  {
    id: "solfy-purpose",
    title: "Purpose of This Briefing",
    component: (props) => (
      <TwoColumnFreeformTemplate
        {...props}
        pillLabel="PURPOSE OF THIS BRIEFING"
        subtitle="This briefing addresses the detention and criminal prosecution of a fintech company executive in Uzbekistan under circumstances that raise material concerns about the investment climate and rule of law."
        leftContent={
          <>
            <h3 className="text-[32px] font-bold mb-6">The Situation</h3>
            <p className="text-[20px] text-slide-muted leading-relaxed">
              The National Bank for Foreign Economic Activity of Uzbekistan (NBU) simultaneously holds equity in a joint venture and filed the criminal complaint against that venture's director -- during active settlement negotiations with the foreign investor.
            </p>
            <h3 className="text-[32px] font-bold mt-10 mb-6">The Audience</h3>
            <p className="text-[20px] text-slide-muted leading-relaxed">
              IFI compliance officers, correspondent bank risk teams, eurobond investors, and rating agency analysts with exposure to NBU or the Republic of Uzbekistan.
            </p>
          </>
        }
        rightContent={
          <div className="bg-slide-surface rounded-2xl p-8">
            <h4 className="text-[24px] font-bold text-slide-primary mb-3">The Ask</h4>
            <p className="text-[20px] text-slide-muted leading-relaxed">
              We invite a 30-minute confidential Zoom briefing to present the documented facts and answer questions from your compliance or legal team.
            </p>
          </div>
        }
      />
    ),
  },
  // 3. NBU Institutional Profile
  {
    id: "solfy-nbu-profile",
    title: "NBU Profile",
    component: (props) => (
      <MissionWhiteTemplate
        {...props}
        pillLabel="INSTITUTIONAL PROFILE"
        headline="The National Bank for Foreign Economic Activity of the Republic of Uzbekistan"
        subtitle="Founded 1991. Largest commercial bank in Uzbekistan by assets. 73.8% state-owned (Ministry of Finance). Chairman Alisher Mirsoatov publicly identified as the source of threats directed at the foreign investor."
        cards={[
          { title: "Correspondent banks", desc: "JP Morgan Chase, Citibank, Standard Chartered, Deutsche Bank, Natixis, SMBC" },
          { title: "IFI credit lines", desc: "EBRD, IFC (World Bank Group), ADB, MIGA guarantees" },
          { title: "LSE Eurobonds", desc: "2020 issuance on London Stock Exchange. Outstanding obligations to international bondholders" },
        ]}
      />
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
            title: "Hasanov Uktam N. -- Detained",
            items: [
              "Director of Solfy CA LLC, the only individual charged",
              "Currently held in custody in Tashkent",
              "Charged under Article 167(3)(a) -- embezzlement in large amounts",
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
    component: (props) => (
      <ProcessSlideTemplate
        {...props}
        pillLabel="THE CRITICAL TEN-DAY WINDOW"
        headline="March 17-27, 2026: From settlement counter-proposal to criminal charges"
        steps={[
          { step: "MAR 17", title: "Settlement Proposal", desc: "Investor side submits detailed settlement counter-proposal via Amsterdam & Partners. Demands criminal complaint withdrawal as condition precedent." },
          { step: "MAR 25", title: "Deadline Letter", desc: "After 8 days of silence, Amsterdam & Partners sends formal deadline letter. States firm will pursue all available remedies if no response by 5 PM GMT." },
          { step: "MAR 26", title: "Rejection", desc: "NBU rejects criminal complaint withdrawal. References its own procedural powers within the criminal proceedings in the context of settlement negotiations." },
          { step: "MAR 27", title: "Charges Filed", desc: "Major B.G. Giyasov formally charges Hasanov. Four counts under Article 167(3)(a). Hasanov taken into custody in Tashkent." },
        ]}
      />
    ),
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
        headline="He sits in a Tashkent detention facility while the parties who made every material decision walk free."
        backgroundImage={missionBg}
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
        subtitle="This pattern is consistent with the use of criminal prosecution as commercial leverage -- not genuine law enforcement."
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
              "Convicted under Article 167(3)(a) -- same provision as Hasanov",
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
