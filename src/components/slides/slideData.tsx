import { ReactNode } from "react";
import {
  TitleSlideTemplate,
  AgendaSlideTemplate,
  MissionWhiteTemplate,
  MissionDarkTemplate,
  QuoteSlideTemplate,
  TwoColumnNumberedTemplate,
  CTASlideTemplate,
  ServicesGridTemplate,
  PRStatsTemplate,
  ProcessSlideTemplate,
  ImageTextTemplate,
  ComparisonTemplate,
  TeamSlideTemplate,
  CaseStudyDarkTemplate,
  BigNumbersTemplate,
  SectionDividerTemplate,
  ThankYouTemplate,
  ContactSlideTemplate,
} from "./slideTemplates";
import hero3d from "@/assets/hero-3d.jpg";
import missionBg from "@/assets/mission-bg.jpg";
import statsPhoto from "@/assets/stats-photo.jpg";
import teamPhoto from "@/assets/team-photo.jpg";
import officePhoto from "@/assets/office-photo.jpg";

export interface SlideData {
  id: string;
  title: string;
  component: (props: { slideNumber: number; totalSlides: number }) => ReactNode;
}

export const slides: SlideData[] = [
  {
    id: "title",
    title: "Title",
    component: (props) => (
      <TitleSlideTemplate
        {...props}
        headline={<>CRISIS<br />MANAGEMENT</>}
        subtitle="Strategic advisory for high-stakes situations requiring clarity, speed, and precision."
        heroImage={hero3d}
        heroAlt="3D visual"
      />
    ),
  },
  {
    id: "agenda",
    title: "Agenda",
    component: (props) => (
      <AgendaSlideTemplate
        {...props}
        items={[
          { num: "01", label: "Our Mission & Vision" },
          { num: "02", label: "Crisis Management Framework" },
          { num: "03", label: "Public Relations Strategy" },
          { num: "04", label: "Emergency Response Protocol" },
          { num: "05", label: "Case Studies & Results" },
          { num: "06", label: "Team & Leadership" },
          { num: "07", label: "Next Steps & Contact" },
        ]}
      />
    ),
  },
  {
    id: "mission-white",
    title: "Our Mission",
    component: (props) => (
      <MissionWhiteTemplate
        {...props}
        pillLabel="OUR MISSION"
        headline="We don't just manage crises — we create opportunities within them."
        subtitle="Our mission is to help clients navigate chaos with clarity, and turn high-pressure situations into strategic advantage."
        cards={[
          { title: "Adaptive experience", desc: "Every situation is different, and so is our response" },
          { title: "Creative problem-solving", desc: "We see possibilities where others see dead ends" },
          { title: "Interdisciplinary consistency", desc: "Unifying legal, media, and policy strategies" },
        ]}
      />
    ),
  },
  {
    id: "mission-dark",
    title: "Mission (Photo)",
    component: (props) => (
      <MissionDarkTemplate
        {...props}
        pillLabel="OUR MISSION"
        headline="Our mission is to help clients navigate chaos with clarity, and turn high-pressure situations into strategic advantage."
        backgroundImage={missionBg}
      />
    ),
  },
  {
    id: "quote",
    title: "Quote",
    component: (props) => (
      <QuoteSlideTemplate
        {...props}
        quote="In every crisis lies the seed of opportunity. Our job is to find it before anyone else does."
        attribution="Founder & Managing Director"
        attributionSub="OmniStrat Group"
      />
    ),
  },
  {
    id: "two-column",
    title: "Our Approach",
    component: (props) => (
      <TwoColumnNumberedTemplate
        {...props}
        pillLabel="OUR APPROACH"
        headline="Strategic crisis management in two pillars."
        items={[
          { num: "01", title: "Proactive Defense", desc: "We build strategic frameworks before crises hit. Risk assessment, stakeholder mapping, and scenario planning ensure you're never caught off guard." },
          { num: "02", title: "Reactive Precision", desc: "When the unexpected happens, we move fast. Real-time strategy, media coordination, and legal alignment to protect your reputation and interests." },
        ]}
      />
    ),
  },
  {
    id: "services",
    title: "Services",
    component: (props) => (
      <ServicesGridTemplate
        {...props}
        pillLabel="OUR SERVICES"
        headline="What we do best."
        cards={[
          { title: "Crisis Management", desc: "End-to-end crisis response from detection to resolution" },
          { title: "Public Relations", desc: "Narrative control, media relations, and reputation management" },
          { title: "Legal Strategy", desc: "Multi-jurisdictional legal coordination and compliance" },
          { title: "Government Affairs", desc: "Regulatory navigation and public policy strategy" },
          { title: "Strategic Intelligence", desc: "OSINT, risk analysis, and competitive intelligence" },
          { title: "Digital Strategy", desc: "Online reputation, social media crisis, and digital forensics" },
        ]}
      />
    ),
  },
  {
    id: "emergency",
    title: "Emergency",
    component: (props) => (
      <CTASlideTemplate
        {...props}
        pillLabel="EMERGENCY SOLUTION"
        headline="Need urgent help with a critical situation?"
        subtitle="We specialize in managing high-stakes crises involving media, regulatory pressure, or multi-jurisdictional threats. Contact us immediately if you're under pressure and need strategic support."
      />
    ),
  },
  {
    id: "pr-stats",
    title: "PR Stats",
    component: (props) => (
      <PRStatsTemplate
        {...props}
        pillLabel="PUBLIC RELATIONS"
        headline="Control the story before it controls you."
        image={statsPhoto}
        imageAlt="Team meeting"
        stats={[
          { number: "500+", label: "Crises managed successfully" },
          { number: "10+", label: "Years of advisory experience" },
          { number: "3000+", label: "Media placements secured" },
        ]}
      />
    ),
  },
  {
    id: "process",
    title: "Process",
    component: (props) => (
      <ProcessSlideTemplate
        {...props}
        pillLabel="OUR PROCESS"
        headline="From crisis to clarity in four steps."
        steps={[
          { step: "01", title: "Assess", desc: "Immediate threat evaluation and stakeholder analysis" },
          { step: "02", title: "Strategize", desc: "Multi-channel response plan with legal alignment" },
          { step: "03", title: "Execute", desc: "Coordinated deployment across media, legal, and policy" },
          { step: "04", title: "Recover", desc: "Reputation repair, monitoring, and resilience building" },
        ]}
      />
    ),
  },
  {
    id: "image-text",
    title: "Why OmniStrat",
    component: (props) => (
      <ImageTextTemplate
        {...props}
        pillLabel="WHY OMNISTRAT"
        headline="Built for the moments that matter most."
        paragraphs={[
          "When reputations are on the line and the clock is ticking, organizations turn to OmniStrat. We bring together legal expertise, media intelligence, and strategic thinking under one roof.",
        ]}
        image={officePhoto}
        imageAlt="Office"
        imagePosition="left"
        stats={[
          { num: "24/7", label: "Availability" },
          { num: "15+", label: "Countries" },
          { num: "100%", label: "Confidential" },
        ]}
      />
    ),
  },
  {
    id: "comparison",
    title: "Comparison",
    component: (props) => (
      <ComparisonTemplate
        {...props}
        pillLabel="COMPARISON"
        headline="Traditional vs. OmniStrat approach"
        leftTitle="Traditional"
        leftItems={["Reactive response only", "Siloed legal and PR teams", "Slow decision-making", "Limited international scope", "Standard media monitoring"]}
        rightTitle="OmniStrat"
        rightItems={["Proactive & reactive strategies", "Integrated multidisciplinary teams", "Real-time decision support", "Multi-jurisdictional coverage", "Advanced OSINT & intelligence"]}
      />
    ),
  },
  {
    id: "team",
    title: "Team",
    component: (props) => (
      <TeamSlideTemplate
        {...props}
        pillLabel="LEADERSHIP"
        headline="The team behind your strategy."
        columns={4}
        members={[
          { name: "Name Surname", role: "Managing Director", specialty: "Crisis & Strategy", photo: teamPhoto },
          { name: "Name Surname", role: "Head of PR", specialty: "Media Relations", photo: teamPhoto },
          { name: "Name Surname", role: "Legal Director", specialty: "Multi-jurisdictional", photo: teamPhoto },
          { name: "Name Surname", role: "Intelligence Lead", specialty: "OSINT & Analysis", photo: teamPhoto },
        ]}
      />
    ),
  },
  {
    id: "case-study",
    title: "Case Study",
    component: (props) => (
      <CaseStudyDarkTemplate
        {...props}
        pillLabel="CASE STUDY"
        headline="Multi-jurisdictional crisis resolved in 72 hours."
        description="A Fortune 500 client faced simultaneous regulatory investigations across three countries. Our integrated team coordinated legal defense, media strategy, and government relations to contain the crisis before it escalated."
        backgroundImage={missionBg}
        stats={[
          { num: "3", label: "Countries involved" },
          { num: "72h", label: "Resolution time" },
          { num: "0", label: "Reputational damage" },
        ]}
      />
    ),
  },
  {
    id: "big-numbers",
    title: "Key Numbers",
    component: (props) => (
      <BigNumbersTemplate
        {...props}
        pillLabel="KEY NUMBERS"
        stats={[
          { num: "98%", label: "Client retention rate", sub: "Over the past 5 years" },
          { num: "500+", label: "Crises resolved", sub: "Across 15 countries" },
          { num: "<2h", label: "Response time", sub: "Average first engagement" },
        ]}
      />
    ),
  },
  {
    id: "section-divider",
    title: "Section Divider",
    component: (props) => (
      <SectionDividerTemplate
        {...props}
        sectionLabel="PUBLIC RELATIONS"
        title="Control the story before it controls you."
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nisl non porta pretium."
        sectionNumber="/02"
      />
    ),
  },
  {
    id: "thank-you",
    title: "Thank You",
    component: (props) => (
      <ThankYouTemplate
        {...props}
        message="We look forward to partnering with you on your next challenge."
        contactItems={["hello@omnistrat.com", "+30 210 2475500", "www.omnistratgroup.com"]}
      />
    ),
  },
  {
    id: "contact",
    title: "Contact",
    component: (props) => (
      <ContactSlideTemplate
        {...props}
        email="hello@omnistrat.com"
        phone="+30 210 2475500"
        website="www.omnistratgroup.com"
        socialLinks={["Instagram", "Facebook", "Youtube", "Linkedin"]}
      />
    ),
  },
];
