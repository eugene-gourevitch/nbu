# Plan: Build a polished 30-slide CAJI Hasanov evidence deck

## Goal
Replace the current thin 10-slide evidence-hub deck with a 30-slide, boardroom-quality CAJI presentation that integrates:
- The old investor-alert substance: Solfy/NBU dispute, Hasanov detention, NBU dual role, 10-day window, regulatory/investor-risk framing, legal remedies.
- The new research brief: balanced sourcing, NBU official position, six audience cohorts, Uzbekistan reform/investment context, source taxonomy, transliteration and update discipline.
- The CAJI design system already applied: CAJI logos, crimson/paper/dark palette, Inter + Cormorant, source-labeled evidence style.

## Editorial direction
The new deck will be sharper and more persuasive, but not reckless. It will distinguish:
- Established facts
- Reported allegations
- Campaign/counsel claims
- Official bank position
- Structural/institutional context

Accusatory language such as “selective prosecution” will appear only as attributed campaign/counsel language, not as CAJI’s neutral narration.

## Proposed 30-slide structure

### 1. Opening and thesis
1. **Title** — “The Hasanov Case: Why One Detention Now Matters Beyond One Executive”
2. **Executive Thesis** — commercial dispute, detention, investor confidence, due process, reform credibility
3. **How to Read This Deck** — source taxonomy and certainty levels
4. **Transliteration + Search Note** — Uktam Hasanov / Xasanov Uktam Nasullotevich / Ukhtam Hassanov

### 2. Core timeline and disputed record
5. **Timeline at a Glance** — Feb 24 to Apr 4, 2026
6. **Feb 24: Counsel Enters** — Solfy/Poletaev/NBU dispute becomes organized cross-border legal conflict
7. **Feb 27: Local Business Press** — dispute public before detention
8. **Mar 27: Detention in Tashkent** — contract dispute becomes due-process and investment-climate matter
9. **Mar 30–31: Campaign Goes International** — campaign/counsel escalation and arbitration signal
10. **Apr 4: Investigative Allegations Reported** — 17B soums / 15B soums as reported allegations
11. **Apr 4: NBU Official Position** — bank’s counter-position, client service, ongoing legal procedures
12. **What Is Known / Unknown / Contested** — credibility slide avoiding overclaiming

### 3. Commercial conflict and NBU role
13. **The Solfy/Sabzi Operating Context** — merchants, customers, platform continuity, Sabzi continuation
14. **Why State-Owned Bank Context Matters** — state shareholder base and external investor perception
15. **The Dual-Role Problem** — NBU as commercial counterparty/state-linked complainant, framed carefully
16. **The 10-Day Window** — integrate old deck’s settlement-to-charges narrative as an attributed concern
17. **The Excessive Measure Question** — old detention-proportionality content, improved layout and less density

### 4. Six audience architecture
18. **Six Audiences, Six Risks** — overview matrix
19. **Investors and Lenders** — downside-case treatment, capital-markets confidence, ratings/IPOs/TIIF
20. **Uzbek Reformers and State-Asset Stewards** — reform credibility, governance, investor protection
21. **Merchants, Customers, Employees** — continuity, reputation, operating risk
22. **Lawyers, Arbitrators, Insurers, Compliance Teams** — commercial dispute becoming criminal exposure
23. **Journalists and Researchers** — source-sensitive reporting map
24. **Rights and Business-Human-Rights Advocates** — due process, detention, rule-of-law signal

### 5. Uzbekistan context and remedies
25. **Why This Matters for Uzbekistan Now** — foreign investment, privatization, TIIF 2026, reform narrative
26. **Institutional and Arbitration Context** — international commercial arbitration, treaty risk, TIAC/ICSID framing
27. **Regulatory and Financial-Risk Implications** — IFIs, correspondent banks, rating agencies, compliance teams
28. **Remedies and Pressure Points** — arbitration, criminal defense, advocacy, diplomatic/investor engagement

### 6. Evidence hub and close
29. **Sources & Documents Library** — fixed badges: Campaign, Counsel, Official bank, Independent media, Institutional context
30. **Call to Action / CAJI Contact** — evidence-first, update-driven, www.caji.org

## Design approach
Use the current CAJI visual language, but make it feel like a serious institutional deck rather than a copied brief:
- More varied layouts: split screens, timeline rails, source cards, matrices, legal-risk maps, large-number callouts, “known/unknown/contested” panels.
- Strong hierarchy: fewer giant paragraphs; more concise deck language.
- CAJI logos only; no third-party logos.
- Crimson used sparingly for evidence markers, risk flags, and timeline accents.
- Dark slides used as section pivots and high-impact thesis slides.
- Body text kept readable at scaled preview sizes.

## Technical implementation
Files to update:
- `src/components/slides/slideData.tsx`
  - Replace current 10-slide array with a full 30-slide data/component set.
  - Add reusable local helpers for source badges, certainty chips, timeline items, audience cards, risk matrices, and quote/callout blocks.
  - Reuse existing assets where appropriate: `uktam-photo.jpg`, `poletaev-photo.jpg`, `mirsoatov-photo.jpg`, `uzbek-detention-cell.jpg`, CAJI logos.
- `src/pages/Index.tsx`
  - Update viewer title if needed to reflect the 30-slide deck.
- Possibly `src/components/slides/slideTemplates.tsx`
  - Only if existing/local slide helpers are insufficient; otherwise avoid broad template churn.
- Possibly `src/index.css`
  - Add only small utility animations or polish if needed; keep current design tokens.

## Quality checks after implementation
After approval and implementation, I will:
- Run a production build/type check.
- Visually inspect the deck in the preview for overflow and readability, especially dense slides.
- Check phone/tablet/desktop presentation modes for navigation and layout issues.
- Fix any clipping, footer collisions, or text density problems before calling it done.