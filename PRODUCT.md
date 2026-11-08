# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Primary: small-business owners and founders looking for a build partner. They are usually non-technical, evaluating a handful of studios, and arriving from a referral or a search. Their job on the home page is to answer "can these people build the thing I need, and do I like how they work?" in under a minute, then reach out.

Secondary (confirmed as lower priority): RevOps / IT leads at companies already on Salesforce, and startup founders wanting a React / React Native / Next.js product team.

## Product Purpose
LBN Design (lbn.design) is a small studio that ships software and brand work for businesses. Service lines as the owner names them on the home page (2026-11-05): web apps, mobile apps, brand + logo, Salesforce, illustrations, AI + MCP, Microsoft, CMS, SEO. Underneath: JavaScript (React, React Native, Next.js), Salesforce, UI/UX, and graphic design (branding, logos, custom art).

The home page is a full scrolling page again (user decision, 2026-11-08): hero, what we build and what we draw, how it works, a close with the brief. It is explicitly not a "coming soon" page.

## Positioning
One studio that covers both the code (web, mobile, Salesforce) and the visual identity (UI/UX, brand, logo, art) of a business, so the client does not have to coordinate a developer and a designer separately. The LbN lettermark itself is proof: the studio designed its own identity as a built object.

## Operating Context
Visitor reads the site on a phone or laptop, often in a tab next to two or three other studio sites. Decision is comparative; personality and clarity of the service list matter more than depth.

## Capabilities and Constraints
- Deliverable: a Next.js project (user decision, 2026-11-05). Routes: `/` (home), `/start-a-project`, `/contact`, and `/pay` (unlisted: noindex, excluded in robots.txt and the sitemap, not linked from nav or footer; shared by URL only).
- Scope (user, 2026-11-05, widened 2026-11-08): a side business site with four routes; the home page is a full page, the inner pages keep their forms and the Stripe landing.
- Hosted on Netlify. The brief and contact forms post to Netlify Forms (registered in `public/__forms.html`) with a prefilled-email fallback; submissions are emailed to the studio inbox set in `components/contact.ts`. Payments go through a Stripe Payment Link pasted into `components/contact.ts` (`STRIPE_PAYMENT_LINK`); the pay button stays disabled until it is set.
- Pricing, client names, case studies, testimonials, and metrics: none supplied. Must not be fabricated as real; any sample work shown must be clearly labeled as sample/synthetic.

## Brand Commitments
- Name: LBN Design, written as "lines by nick" in the logo. Domain: lbn.design.
- Logo is binding (user decision, 2026-11-08, replacing the extruded lettermark): `assets/logos/lines-by-nick-primary-logo.svg`, Nick's handwriting reading `<lines by nick>` in one ink (`#231f20`), and `assets/logos/lines-by-nick-secondary-logo_1.svg`, the `<n>` mark. The same folder holds 21 hand-drawn code glyphs (brackets, braces, angle brackets, slashes, colon, semicolon, equals, plus, percent, ampersand, at, currency, root, star, up-chevron, rocket, cursor), all single-ink. Copies live in `public/ink/`.
- Brand idea (user, 2026-11-05, kept 2026-11-08): LbN stands for "Lines by Nick". The studio writes lines of code and draws lines for brands and illustration; the line is the unifying material. The hero copy "Lines of code. Lines of ink. Lines by Nick." is kept verbatim.
- Direction (user, 2026-11-08): a complete redo that punches home code and illustration together. Register for illustration is Dave Arcade's (heavy uniform outlines, saturated flats, isometric built forms) used as contrast against the thin handwritten code glyphs; the subjects stay the studio's own, never arcade subjects. Page grammar reference is plancpills.org (bone sheet, ruled cells, fields that own whole sections), adapted, not its pastel palette. Colors must punch, not pastel.
- Illustration authorship (user, 2026-11-08): new isometric drawings may be authored in-house in the same register; they are labelled as such in code and Nick may replace any with his own.
- Rejected on the way here (2026-11-05 to 2026-11-08): the extruded 3D lettermark world; a muted teal/coral/navy palette ("too muted"); a literal transfer of secretmedianetwork.com; a typeface swap that did not match the logo. Inspiration is adapted through this site's own vocabulary, never copied onto it.

## Legal
- Required on every page (user, 2026-11-05, for Stripe): the refund policy sentence and "© year LBN Design. All rights reserved." Source of truth is `REFUND_POLICY` in `components/Legal.tsx`; it renders as the legal strip under the home ticker and inside the inner-page footer.

## Evidence on Hand
- Logo and hand-drawn glyph assets only (paths above).
- No client logos, case studies, testimonials, screenshots, team photos, or metrics. Future work must not invent any of these as factual claims.

## Product Principles
1. Show both halves: code and visual craft appear together, never as separate "agencies" bolted on.
2. Confidence over hedging: present the studio as finished and open for business.
3. Personality is the differentiator: the mark's playful, physical energy carries the page.
4. Clarity for a non-technical buyer: service names in plain language, one obvious way to get in touch.
5. Honest proof: sample work is labeled; nothing presented as a real client until it is.

## Accessibility & Inclusion
No product-specific requirement established. Default to WCAG AA contrast and keyboard-reachable controls; the saturated palette must still meet text contrast.
