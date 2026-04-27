

# BlackRock & Carlyle Presentation — Within Existing Template Aesthetics

## Overview
Create a 25-slide presentation using existing slide patterns and the established OmniStrat color scheme (blue `#3B55FF`, dark `#171717`, white). New slide formats may be introduced but will use the same design language (Montserrat, SlidePill, OmniStratLogo, same spacing/typography conventions). Team photos and bios will be sourced from the web.

## Photo Sourcing Strategy
Before building slides, we will search the web for real headshots of:
- **Eugene Gourevitch** — President & Co-Founder, OmniStrat Group
- **Michael Fox-Rabinovitz** — VP Corporate Finance, OmniStrat Group
- **Alexandra Katrin** — CFO, OmniStrat Group
- **Zachary Intrater** — Co-founder, Agnifilo Intrater LLP
- **Dr. Elchin Khalilov** — Media/communications expert
- **Keith Silverstein** — Board of Directors

Photos will be saved to `src/assets/team/` and bios enriched from LinkedIn/public profiles.

## Slide Plan (25 Slides)

| # | Type | Content Summary |
|---|------|----------------|
| 1 | **Title** (white, split) | "THE 24-HOUR SWAT TEAM" + tagline for institutional investors + hero image |
| 2 | **Two-Column** (white) | Executive Summary: "The Integrated Alternative" left, "The Ask" + "Proof of Concept" right |
| 3 | **Section Divider** (white, /01) | "The Problem PE Firms Face" |
| 4 | **Big Numbers** (blue, 4-col) | 96% deals fail, 10x bankruptcy, 20% geopolitical, 2x delayed cost |
| 5 | **Quote** (white) | "Like juggling five separate consultants..." + fragmented model bullets below |
| 6 | **Services Grid** (white, 3 cards) | Investor Pain Points: Financial/Operational, Geopolitical/Regulatory, Reputational/Legal |
| 7 | **Mission Dark** (dark photo bg) | "A single zero can spoil a fund's returns" — dramatic statement slide |
| 8 | **Section Divider** (white, /02) | "The OmniStrat Solution" |
| 9 | **Two-Column** (white, 4 items) | SWAT Team Model: Senior-Only, Integrated Ops, 24h Deployment, C-Suite Access |
| 10 | **Process** (white, 5 steps) | Five Integrated Capabilities: Sanctions, Crisis, GR, Comms, Intel |
| 11 | **Mission Dark** (dark photo bg) | Philosophy quote + three pillars: Prevention, Response, Recovery |
| 12 | **Section Divider** (white, /03) | "Proof of Capability" |
| 13 | **Image+Text** (white) | UCG/Shadmanov Case Study overview with scale metrics |
| 14 | **Comparison** (white, 5-col table) | Multi-Front Challenge: Political, Legal, Media, Regulatory, Human Rights |
| 15 | **Case Study** (dark bg) | Integrated Response: Legal, Comms, Government, Human Rights tracks |
| 16 | **Services Grid** (white, 3 cards) | Track Record: Mining/Africa, Political Risk/Europe, INTERPOL/International |
| 17 | **Section Divider** (white, /04) | "Leadership & Advisory Board" |
| 18 | **Team** (white, 3 cols) | Eugene Gourevitch, Michael Fox-Rabinovitz, Alexandra Katrin with real photos + enriched bios |
| 19 | **Team** (white, 3 cols) | Advisory Board: Zachary Intrater, Dr. Elchin Khalilov, Keith Silverstein |
| 20 | **Section Divider** (white, /05) | "Competitive Positioning" |
| 21 | **Comparison** (white, table) | FTI, Teneo, Brunswick, Kroll, Control Risks vs OmniStrat |
| 22 | **Comparison** (white, table) | SWAT Team vs Traditional Advisory — 6 dimensions |
| 23 | **PR Stats** (white) | Portfolio Relevance: $8.5B Texas pullout, 13 AGs, 87 countries |
| 24 | **Process** (white, 3 steps) | Next Steps: Initial Meeting, Pilot Engagement, Retainer Framework |
| 25 | **Contact** (white) | Eugene Gourevitch contact info + OmniStrat Washington DC address |

## Technical Implementation

### Files to Create
1. **`src/components/slides/blackrockCarlyleData.tsx`** — All 25 slide components using `SlideLayout`, `SlidePill`, `OmniStratLogo`, and existing patterns from `slideData.tsx`
2. **`src/pages/BlackrockCarlyle.tsx`** — Page rendering `PresentationViewer` with custom slides
3. **`src/assets/team/*.jpg`** — Team headshots sourced from the web

### Files to Modify
1. **`src/components/slides/PresentationViewer.tsx`** — Accept optional `slides` prop (defaults to template)
2. **`src/App.tsx`** — Add `/blackrock-carlyle` route

### New Slide Formats (same aesthetics)
- **5-column table** variant for the multi-front challenge slide (extends existing Comparison pattern)
- **4-column Big Numbers** variant (extends existing 3-column Big Numbers to 4)
- **3-column Team with photos + longer bios** (extends existing 4-column Team to 3 with more detail)

All new formats use the same colors (`slide-primary`, `slide-foreground`, `slide-muted`, `slide-surface`), same Montserrat font, same `SlidePill` and `OmniStratLogo` components, same spacing conventions (`p-[80px]`, `rounded-2xl`, etc.).

### Web Search Plan
Use web search to find:
- LinkedIn profile photos / professional headshots for all 6 team members
- Enriched bios from LinkedIn, company websites, law firm bios
- Any publicly available professional photos

