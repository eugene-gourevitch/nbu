import { ReactNode } from "react";
import {
  TitleSlideTemplate,
  TwoColumnFreeformTemplate,
  SectionDividerTemplate,
  BigNumbersTemplate,
  QuoteSlideTemplate,
  ServicesGridTemplate,
  MissionDarkTemplate,
  TwoColumnNumberedTemplate,
  ProcessSlideTemplate,
  CaseStudyDarkTemplate,
  ImageTextTemplate,
  MultiColumnTableTemplate,
  TrackRecordTemplate,
  TeamSlideTemplate,
  CompetitiveTableTemplate,
  ComparisonTemplate,
  PRStatsTemplate,
  NextStepsTemplate,
} from "./slideTemplates";
import hero3d from "@/assets/hero-3d.jpg";
import missionBg from "@/assets/mission-bg.jpg";
import statsPhoto from "@/assets/stats-photo.jpg";
import officePhoto from "@/assets/office-photo.jpg";
import eugenePhoto from "@/assets/team/eugene-gourevitch.png";
import michaelPhoto from "@/assets/team/michael-fox-rabinovitz.png";
import alexandraPhoto from "@/assets/team/alexandra-katrin.jpg";
import zacharyPhoto from "@/assets/team/zachary-intrater.png";
import elchinPhoto from "@/assets/team/elchin-khalilov.jpg";
import keithPhoto from "@/assets/team/keith-silverstein.png";

export interface SlideData {
  id: string;
  title: string;
  component: (props: { slideNumber: number; totalSlides: number }) => ReactNode;
}

export const blackrockCarlyleSlides: SlideData[] = [
  // 1. Title
  {
    id: "bc-title",
    title: "Title",
    component: (props) => (
      <TitleSlideTemplate
        {...props}
        headline={<>THE 24-HOUR<br />SWAT TEAM</>}
        subtitle="Integrated crisis response, sanctions navigation, and strategic advisory for elite institutional investors when standard advisors fall short."
        meta="Confidential · February 2026 · 1701 Pennsylvania Ave NW, Washington DC"
        heroImage={hero3d}
        heroAlt="Strategic visual"
      />
    ),
  },
  // 2. Executive Summary
  {
    id: "bc-exec-summary",
    title: "Executive Summary",
    component: (props) => (
      <TwoColumnFreeformTemplate
        {...props}
        pillLabel="EXECUTIVE SUMMARY"
        subtitle="When portfolio companies face multi-front crises, fragmented advisors fail. OmniStrat deploys integrated senior teams within 24 hours."
        leftContent={
          <>
            <h3 className="text-[32px] font-bold mb-6">The Integrated Alternative</h3>
            <p className="text-[20px] text-slide-muted leading-relaxed">
              96% of mid-market PE deals fail to meet pre-deal expectations. When crises strike across jurisdictions, the conventional model — hiring separate law firms, PR agencies, lobbyists, and investigators — produces conflicting guidance, dangerous delays, and catastrophic gaps.
            </p>
            <p className="text-[20px] text-slide-muted leading-relaxed mt-4">
              OmniStrat Group is the integrated alternative: a single senior team spanning legal coordination, strategic communications, government relations, sanctions compliance, and investigative intelligence — deployed globally within 24 hours.
            </p>
          </>
        }
        rightContent={
          <div className="space-y-10">
            <div className="bg-slide-surface rounded-2xl p-8">
              <h4 className="text-[24px] font-bold text-slide-primary mb-3">The Ask</h4>
              <p className="text-[20px] text-slide-muted leading-relaxed">
                Strategic partnership discussion for rapid-response advisory across your portfolio. Not a sales pitch — an operational alliance.
              </p>
            </div>
            <div className="bg-slide-surface rounded-2xl p-8">
              <h4 className="text-[24px] font-bold text-slide-primary mb-3">Proof of Concept</h4>
              <p className="text-[20px] text-slide-muted leading-relaxed">
                Active multi-jurisdictional engagement — United Cement Group — involving political risk, cross-border legal complexity, and reputation management across 4+ countries simultaneously.
              </p>
            </div>
          </div>
        }
      />
    ),
  },
  // 3. Section: The Problem
  {
    id: "bc-section-problem",
    title: "Section: The Problem",
    component: (props) => (
      <SectionDividerTemplate
        {...props}
        sectionLabel="SECTION ONE"
        title="The Problem PE Firms Face"
        subtitle="Crises destroy portfolio value faster than traditional advisors can mobilize. Each week of delayed response doubles the cost of eventual recovery."
        sectionNumber="/01"
      />
    ),
  },
  // 4. Big Numbers
  {
    id: "bc-big-numbers",
    title: "The Problem Quantified",
    component: (props) => (
      <BigNumbersTemplate
        {...props}
        pillLabel="THE PROBLEM QUANTIFIED"
        subtitle="Portfolio companies face crises that destroy value faster than traditional advisors can respond"
        stats={[
          { num: "96%", label: "of mid-market PE deals", sub: "fail to meet pre-deal expectations" },
          { num: "10x", label: "PE-owned companies are", sub: "more likely to file for bankruptcy" },
          { num: "20%", label: "of top PE portfolio assets", sub: "are exposed to geopolitical risk" },
          { num: "2x", label: "each week of delayed crisis", sub: "response doubles recovery cost" },
        ]}
        source="Sources: BCG, Bain Capital Research, PE Industry Reports 2024-2025"
      />
    ),
  },
  // 5. Quote: The Gap
  {
    id: "bc-gap-quote",
    title: "The Gap",
    component: (props) => (
      <QuoteSlideTemplate
        {...props}
        pillLabel="THE GAP"
        quote="Like juggling five separate consultants and hoping they sync up. Rarely effective. Each has their own agenda, their own billing clock, their own definition of 'urgent.'"
        attribution="— Managing Director, Major PE Firm (Industry Research)"
        bottomContent={
          <div className="mt-12">
            <h4 className="text-[22px] font-bold mb-6 text-slide-primary">THE FRAGMENTED MODEL</h4>
            <div className="grid grid-cols-5 gap-4">
              {[
                { role: "Law Firm", issue: "Focused on legal exposure only" },
                { role: "PR Agency", issue: "Managing narrative in isolation" },
                { role: "GR Firm", issue: "Lobbying without strategic context" },
                { role: "Investigator", issue: "Gathering intelligence nobody synthesizes" },
                { role: "Restructuring", issue: "Arriving after value is destroyed" },
              ].map((item) => (
                <div key={item.role} className="bg-slide-surface rounded-xl p-5">
                  <p className="text-[18px] font-bold">{item.role}</p>
                  <p className="text-[15px] text-slide-muted mt-1">{item.issue}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />
    ),
  },
  // 6. Pain Points
  {
    id: "bc-pain-points",
    title: "Investor Pain Points",
    component: (props) => (
      <ServicesGridTemplate
        {...props}
        pillLabel="INVESTOR PAIN POINTS"
        headline="The challenges keeping CIOs and portfolio leaders awake at night"
        cards={[
          { title: "Financial / Operational", items: ["Covenant breaches and liquidity crises", "Management departures during turnarounds", "Asset value deterioration"] },
          { title: "Geopolitical / Regulatory", items: ["Sanctions exposure and OFAC scrutiny", "CFIUS and cross-border regulatory blocks", "FCPA investigations and compliance failures"] },
          { title: "Reputational / Legal", items: ["Negative media cascading to fund reputation", "Activist campaigns targeting sponsors", "Multi-jurisdictional litigation complexity"] },
        ]}
      />
    ),
  },
  // 7. Dramatic Statement
  {
    id: "bc-dramatic",
    title: "Dramatic Statement",
    component: (props) => (
      <MissionDarkTemplate
        {...props}
        headline="A single zero can spoil a fund's returns. Every portfolio company is one crisis away from write-down."
        backgroundImage={missionBg}
      />
    ),
  },
  // 8. Section: The Solution
  {
    id: "bc-section-solution",
    title: "Section: The Solution",
    component: (props) => (
      <SectionDividerTemplate
        {...props}
        sectionLabel="SECTION TWO"
        title="The OmniStrat Solution"
        subtitle="One senior team. Five integrated capabilities. 24-hour global deployment. We don't just navigate crises — we orchestrate victories."
        sectionNumber="/02"
      />
    ),
  },
  // 9. SWAT Team Model
  {
    id: "bc-swat-model",
    title: "SWAT Team Model",
    component: (props) => (
      <TwoColumnNumberedTemplate
        {...props}
        pillLabel="THE SWAT TEAM MODEL"
        headline="One senior team covering all dimensions in unison — deployed within 24 hours"
        columns={2}
        items={[
          { num: "01", title: "Senior-Only Teams", desc: "No junior analysts learning on your emergency. Every team member has 15+ years of relevant experience." },
          { num: "02", title: "Integrated Operations", desc: "Legal, communications, government relations, and intelligence coordinated under a single command structure." },
          { num: "03", title: "24-Hour Global Deployment", desc: "Washington DC, London, Istanbul, Riga. Operational across U.S., EU, UK, Central Asia, and Africa." },
          { num: "04", title: "Direct C-Suite Access", desc: "Direct CEO and Board engagement — never filtered through middle management layers." },
        ]}
      />
    ),
  },
  // 10. Five Capabilities
  {
    id: "bc-capabilities",
    title: "Five Capabilities",
    component: (props) => (
      <ProcessSlideTemplate
        {...props}
        pillLabel="FIVE INTEGRATED CAPABILITIES"
        headline="Each capability reinforces the others — integration multiplies impact"
        steps={[
          { step: "01", title: "Sanctions Compliance", desc: "OFAC navigation, delisting strategy, corporate restructuring. Guided by the RUSAL/EN+ model." },
          { step: "02", title: "Crisis Management", desc: "Prevention, Response, Recovery. Real-time stakeholder mapping, crisis communication protocols." },
          { step: "03", title: "Government Relations", desc: "Strategic diplomacy — direct engagement with lawmakers across U.S., EU, and UK." },
          { step: "04", title: "Strategic Comms", desc: "Narrative architecture, perception engineering, media outreach, investor communications." },
          { step: "05", title: "Investigative Intel", desc: "Via K2 Integrity — due diligence, asset tracing, compliance verification, financial crimes." },
        ]}
      />
    ),
  },
  // 11. Philosophy
  {
    id: "bc-philosophy",
    title: "Philosophy",
    component: (props) => (
      <CaseStudyDarkTemplate
        {...props}
        pillLabel="OUR PHILOSOPHY"
        headline="Crisis management isn't about damage control — it's about strategic transformation. When others see problems, we see the opening moves of victory."
        backgroundImage={missionBg}
        cards={[
          { title: "Prevention", desc: "Proactive risk identification, stakeholder mapping, scenario planning before crises materialize." },
          { title: "Response", desc: "24-hour deployment, integrated command structure, real-time coordination across legal, media, and government tracks." },
          { title: "Recovery", desc: "Long-term reputation restoration, regulatory positioning, and turning defensive postures into strategic advantages." },
        ]}
      />
    ),
  },
  // 12. Section: Proof
  {
    id: "bc-section-proof",
    title: "Section: Proof",
    component: (props) => (
      <SectionDividerTemplate
        {...props}
        sectionLabel="SECTION THREE"
        title="Proof of Capability"
        subtitle="12+ strategic victories across 3 continents. From African mining standoffs to Central Asian industrial crises — real outcomes, not theoretical frameworks."
        sectionNumber="/03"
      />
    ),
  },
  // 13. UCG Case Study
  {
    id: "bc-ucg-overview",
    title: "UCG Case Study",
    component: (props) => (
      <ImageTextTemplate
        {...props}
        pillLabel="CASE STUDY — UCG / SHADMANOV"
        headline="Defending Industrial Empire from State Seizure"
        paragraphs={[
          "United Cement Group is Central Asia's largest cement producer — controlling approximately 50% of Uzbekistan's cement capacity, with 10 million tons of annual production and 7,000+ employees across three countries.",
          "In December 2024, founder Ulugbek Shadmanov was detained by UAE special forces at his Dubai residence. He was held in isolation without legal access, then extradited to Uzbekistan in January 2025.",
        ]}
        image={officePhoto}
        imageAlt="Case study"
        imagePosition="left"
        stats={[
          { num: "50%", label: "Cement capacity" },
          { num: "7,000+", label: "Employees" },
          { num: "4+", label: "Jurisdictions" },
        ]}
      />
    ),
  },
  // 14. Multi-Front Challenge
  {
    id: "bc-multi-front",
    title: "Multi-Front Challenge",
    component: (props) => (
      <MultiColumnTableTemplate
        {...props}
        pillLabel="CASE STUDY — MULTI-FRONT CHALLENGE"
        headline="Conventional advisors would fragment — each seeing only their piece of a five-dimensional crisis"
        columns={[
          { title: "Political", items: ["Alleged connection to presidential family", "Rival faction allegations", "State seizure of industrial assets"] },
          { title: "Legal", items: ["UAE detention without due process", "Uzbek extradition", "International treaty violations", "Congressional testimony"] },
          { title: "Media", items: ["International press coverage", "Competing narratives", "Strategic media counter-offensive required"] },
          { title: "Regulatory", items: ["U.S. Treasury investigation", "Sanctions allegations", "Cross-border compliance complexity"] },
          { title: "Human Rights", items: ["Alleged torture risk", "Due Process violations", "International treaty violations", "International advocacy"] },
        ]}
        footer="OmniStrat's integrated approach: single strategy coordinated across all five dimensions simultaneously"
      />
    ),
  },
  // 15. Integrated Response
  {
    id: "bc-integrated-response",
    title: "Integrated Response",
    component: (props) => (
      <CaseStudyDarkTemplate
        {...props}
        pillLabel="CASE STUDY — INTEGRATED RESPONSE"
        headline="Single strategy coordinated across legal, communications, government, and investigative tracks"
        backgroundImage={missionBg}
        cards={[
          { title: "Legal Coordination", desc: "Coordinated with Agnifilo Intrater LLP and Amsterdam & Partners LLP for U.S. criminal defense and international human rights advocacy." },
          { title: "Strategic Communications", desc: "Foley Square press conference — international media strategy, controlled narrative architecture, investor communication management." },
          { title: "Government Engagement", desc: "U.S. Congressional engagement. Multi-government diplomatic pressure across Washington, London, and regional capitals." },
          { title: "Human Rights Track", desc: "Due Process International. Treaty violation documentation. International advocacy campaign orchestration." },
        ]}
        footer={
          <div className="mt-10">
            <p className="text-[16px] text-white/50 uppercase tracking-wider mb-3">Coalition Partners</p>
            <p className="text-[18px] text-white/80">Agnifilo Intrater LLP · Amsterdam & Partners LLP · Due Process International</p>
          </div>
        }
      />
    ),
  },
  // 16. Track Record
  {
    id: "bc-track-record",
    title: "Track Record",
    component: (props) => (
      <TrackRecordTemplate
        {...props}
        pillLabel="TRACK RECORD"
        headline="Select engagements demonstrating full-spectrum strategic capability"
        cards={[
          { region: "Africa · 2025", title: "Mining License Crisis → Strategic Investment Victory", desc: "West African gold mining license under political pressure. Transformed a defensive position into strengthened regional market advantage. $144M in projected cash flow preserved.", tag: "Multi-party coordination: Africa, Europe, Americas" },
          { region: "Europe · 2022", title: "Political Persecution → Protected Status", desc: "Transformed existential political threat into diplomatic leverage and secured protected status for client facing hostile government action across multiple jurisdictions.", tag: "Multi-jurisdictional legal + diplomatic strategy" },
          { region: "International · 2019", title: "INTERPOL Weaponization → Legal Victory", desc: "Reversed politically-motivated abuse of INTERPOL Red Notice system. Demonstrated how international law enforcement can be turned from threat to vindication.", tag: "Cross-border legal + communications strategy" },
        ]}
      />
    ),
  },
  // 17. Section: Leadership
  {
    id: "bc-section-leadership",
    title: "Section: Leadership",
    component: (props) => (
      <SectionDividerTemplate
        {...props}
        sectionLabel="SECTION FOUR"
        title="Leadership & Advisory Board"
        subtitle="Former strategic advisors, investment bankers, federal prosecutors, and intelligence professionals. 125+ years of combined experience."
        sectionNumber="/04"
      />
    ),
  },
  // 18. Leadership Team
  {
    id: "bc-leadership",
    title: "Leadership",
    component: (props) => (
      <TeamSlideTemplate
        {...props}
        pillLabel="LEADERSHIP"
        headline="Senior practitioners — not consultants — who have navigated these crises firsthand"
        columns={3}
        members={[
          { name: "Eugene Gourevitch", role: "President & Co-Founder", photo: eugenePhoto, bio: "Seasoned investment banker, serial entrepreneur, and strategic advisor. Decades of experience at the intersection of global finance, crisis management, and public affairs. Managed and advised on billions in private and public assets." },
          { name: "Michael Fox-Rabinovitz", role: "VP, Corporate Finance", photo: michaelPhoto, bio: "25+ years developing investment strategies. Wharton BS Economics, Columbia MBA. CFA, CAIA, FRM designations. Experience across fixed income, structured products, alternatives, energy, and private markets." },
          { name: "Alexandra Katrin", role: "Chief Financial Officer", photo: alexandraPhoto, bio: "20+ years leading finance, accounting, and governance across multinational organizations. Corporate Controller, CFO, Finance Director, and Audit Committee Chair experience. US GAAP and IFRS expertise." },
        ]}
      />
    ),
  },
  // 19. Advisory Board
  {
    id: "bc-advisory-board",
    title: "Advisory Board",
    component: (props) => (
      <TeamSlideTemplate
        {...props}
        pillLabel="ADVISORY BOARD"
        headline="Strategic insight from former federal prosecutors, media strategists, and board-level advisors"
        columns={3}
        members={[
          { name: "Zachary Intrater", role: "Advisory Board Member", photo: zacharyPhoto, bio: "Former Executive AUSA, District of New Jersey. Co-founder, Agnifilo Intrater LLP. UChicago BA, NYU JD. Cravath alum. Deep expertise in white-collar defense, regulatory exposure, and crisis-driven legal strategy." },
          { name: "Dr. Elchin Khalilov", role: "Advisory Board Member", photo: elchinPhoto, bio: "Global media and strategic communications expert. 30+ years in international journalism and media strategy. PhD Physics & Mathematics, Moscow State University. Fluent in English, Russian, and Turkish." },
          { name: "Keith Silverstein", role: "Board of Directors", photo: keithPhoto, bio: "Board-level governance and strategic oversight. Provides institutional credibility and independent counsel on firm direction, risk management, and client engagement protocols." },
        ]}
      />
    ),
  },
  // 20. Section: Competitive
  {
    id: "bc-section-competitive",
    title: "Section: Competitive",
    component: (props) => (
      <SectionDividerTemplate
        {...props}
        sectionLabel="SECTION FIVE"
        title="Competitive Positioning"
        subtitle="How we compare to FTI Consulting, Teneo, Brunswick Group, Kroll, and Control Risks — and why integration at speed is our decisive advantage."
        sectionNumber="/05"
      />
    ),
  },
  // 21. Competitive Landscape Table
  {
    id: "bc-competitive-landscape",
    title: "Competitive Landscape",
    component: (props) => (
      <CompetitiveTableTemplate
        {...props}
        pillLabel="COMPETITIVE LANDSCAPE"
        headline="The SWAT team model fills a gap no incumbent fully addresses"
        rows={[
          { firm: "FTI Consulting", strength: "Restructuring heritage. Serves 64 of top 100 PE firms.", weakness: "8,000+ staff creates bureaucracy & siloed practice areas.", scale: "33 countries", advantage: "Speed + integration. No junior staff. Direct C-suite access." },
          { firm: "Teneo", strength: "CEO advisory positioning. WestExec partnership for geopolitics.", weakness: "Limited operational & investigative capability.", scale: "Mid-size", advantage: "Full-spectrum operations including investigative intel and sanctions." },
          { firm: "Brunswick Group", strength: "30+ year track record. 220+ partners. 'One-firm' culture.", weakness: "Primarily communications-focused.", scale: "27 offices", advantage: "Extends beyond comms into legal coordination, GR, and intel." },
          { firm: "Kroll", strength: "Investigative heritage. Financial advisory + compliance.", weakness: "Less crisis comms and government relations integration.", scale: "30+ countries", advantage: "Integrated comms + GR alongside investigative (via K2 partnership)." },
          { firm: "Control Risks", strength: "Security/intel since 1975. Operational in 170+ countries.", weakness: "Less financial advisory and sanctions expertise.", scale: "36 offices", advantage: "Sanctions compliance + financial expertise + senior-only deployment." },
        ]}
      />
    ),
  },
  // 22. SWAT vs Traditional
  {
    id: "bc-swat-vs-traditional",
    title: "SWAT vs Traditional",
    component: (props) => (
      <ComparisonTemplate
        {...props}
        pillLabel="THE DIFFERENTIATION"
        headline="SWAT team approach versus traditional advisory"
        leftTitle="Traditional Advisory"
        leftItems={[
          "Extended discovery phases — weeks to assemble",
          "Junior analysts learning on your emergency",
          "Siloed practice areas with coordination overhead",
          "Reports through middle management",
          "Process-driven, risk-averse delivery",
          "Large teams increase exposure surface",
        ]}
        rightTitle="OmniStrat SWAT Team"
        rightItems={[
          "24 hours to full deployment",
          "Senior-only practitioners with 15+ years",
          "Cross-functional integration from day one",
          "Direct CEO / Board engagement",
          "Outcome-focused, designed for high-stakes pressure",
          "Small, vetted team with strict protocols",
        ]}
      />
    ),
  },
  // 23. Portfolio Relevance
  {
    id: "bc-portfolio-relevance",
    title: "Portfolio Relevance",
    component: (props) => (
      <PRStatsTemplate
        {...props}
        pillLabel="PORTFOLIO RELEVANCE"
        headline="Relevance to Your Portfolio"
        image={statsPhoto}
        imageAlt="Portfolio analysis"
        introText="Geopolitical exposure is expanding. ESG scrutiny intensifies — investors' own SEC filings acknowledge that controversy 'could adversely impact reputation and business.'"
        stats={[
          { number: "$8.5B", label: "Pulled by Texas alone from BlackRock over ESG positioning" },
          { number: "13", label: "State attorneys general pursuing antitrust against major asset managers" },
          { number: "87", label: "Countries where Carlyle deploys capital — each a potential crisis jurisdiction" },
        ]}
      />
    ),
  },
  // 24. Section: Partnership
  {
    id: "bc-section-partnership",
    title: "Section: Partnership",
    component: (props) => (
      <SectionDividerTemplate
        {...props}
        sectionLabel="SECTION SIX"
        title="The Partnership Proposal"
        subtitle="Not a vendor relationship. An operational alliance ensuring immediate mobilization when crisis strikes."
        sectionNumber="/06"
      />
    ),
  },
  // 25. Next Steps & Contact
  {
    id: "bc-next-steps",
    title: "Next Steps & Contact",
    component: (props) => (
      <NextStepsTemplate
        {...props}
        pillLabel="NEXT STEPS"
        headline="We're proposing a strategic partnership discussion — not a sales pitch."
        steps={[
          { step: "01", title: "Initial Meeting", desc: "Deep dive on your portfolio's risk profile, jurisdictional exposure, and potential vulnerabilities." },
          { step: "02", title: "Pilot Engagement", desc: "Select one situation for demonstration of integrated SWAT team deployment and value creation." },
          { step: "03", title: "Retainer Framework", desc: "Ongoing availability for rapid response across your entire portfolio of companies." },
        ]}
        contactName="Eugene Gourevitch"
        contactRole="President & Co-Founder"
        contactDetails="info@omnistratgroup.com · (888) 402-6132"
        contactAddress="1701 Pennsylvania Avenue NW, Suite 200, Washington, DC 20006"
      />
    ),
  },
];
