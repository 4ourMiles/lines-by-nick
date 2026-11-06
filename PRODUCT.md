# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Primary: small-business owners and founders looking for a build partner. They are usually non-technical, evaluating a handful of studios, and arriving from a referral or a search. Their job on the home page is to answer "can these people build the thing I need, and do I like how they work?" in under a minute, then reach out.

Secondary (confirmed as lower priority): RevOps / IT leads at companies already on Salesforce, and startup founders wanting a React / React Native / Next.js product team.

## Product Purpose
LBN Design (lbn.design) is a small studio that ships software and brand work for businesses. Service lines as the owner names them on the home page (2026-11-05): web apps, mobile apps, brand + logo, Salesforce, illustrations, AI + MCP, Microsoft, CMS, SEO. Underneath: JavaScript (React, React Native, Next.js), Salesforce, UI/UX, and graphic design (branding, logos, custom art).

The home page is the hero: mark, headline, one-sentence offer, two actions, and a marquee of pop one-liners for the service lines. The services, comparison and process sections are parked in `components/` (user decision, 2026-11-05 late). It is explicitly not a "coming soon" page.

## Positioning
One studio that covers both the code (web, mobile, Salesforce) and the visual identity (UI/UX, brand, logo, art) of a business, so the client does not have to coordinate a developer and a designer separately. The LbN lettermark itself is proof: the studio designed its own identity as a built object.

## Operating Context
Visitor reads the site on a phone or laptop, often in a tab next to two or three other studio sites. Decision is comparative; personality and clarity of the service list matter more than depth.

## Capabilities and Constraints
- Deliverable: a Next.js project (user decision, 2026-11-05). Routes: `/` (home), `/start-a-project`, `/contact`, and `/pay` (unlisted: noindex, excluded in robots.txt and the sitemap, not linked from nav or footer; shared by URL only).
- Scope decision (user, 2026-11-05 evening): this is a side business; the site exists so there is something legit to send people to. Three pages with three heroes plus the Stripe landing page are the whole scope for now. Everything else from the critique backlog is parked in `.impeccable/critique/`.
- No back end. The brief and contact forms compose a prefilled email to the studio inbox (mailto) with a copy-to-clipboard fallback. Payments go through a Stripe Payment Link pasted into `components/contact.ts` (`STRIPE_PAYMENT_LINK`); the pay button stays disabled until it is set.
- Pricing, client names, case studies, testimonials, and metrics: none supplied. Must not be fabricated as real; any sample work shown must be clearly labeled as sample/synthetic.

## Brand Commitments
- Name: LBN Design. Domain: lbn.design. Wordmark reads "LbN".
- Logo is binding (user decision, 2026-11-05): `assets/logos/lbn-full-color.svg`, a chunky extruded 3D lettermark. Palette from the asset: cyan `#00dbff`, red `#ff0303`, navy `#012340` (outline and extrusion), white `#ffffff`, with supporting tints `#279bcd`, `#167095`, `#106587` and a warm cream `#f7e8da`.
- Pattern tile: `assets/logos/lbn-pattern.svg`, the mark repeated in navy at low opacity (soft-light, 10%). Note: it does not tile seamlessly; the site repeats a derived single-mark tile, `public/brand/lbn-wallpaper.svg`, instead.
- Direction stated by the user: "clean, pop and bold". The whole page lives in the logo's world rather than treating the mark as an isolated badge.
- Brand idea (user, 2026-11-05): LbN stands for "Lines by Nick". The studio writes lines of code, draws lines for brands and illustration; the line is the unifying material. Copy and visuals should keep returning to it.
- Visual reference the user likes (for register only, not to copy): Dave Arcade's illustration pages (heavy uniform outlines, saturated flats, gridded grounds). The user asked for the current LBN layout to stay but get punchier and bolder.
- Second reference (user, 2026-11-05): secretmedianetwork.com, "a mix between street and corporate". A literal transfer (bone ground, ruled sections, uppercase grotesk, pills) was built and rejected: the user prefers the LBN page as it was and wants inspiration adapted to this site, not elements copied onto it. Future takes must start from LBN's own vocabulary.

## Legal
- Required on every page (user, 2026-11-05, for Stripe): the refund policy sentence and "© year LBN Design. All rights reserved." Source of truth is `REFUND_POLICY` in `components/Legal.tsx`; it renders as the legal strip under the home ticker and inside the inner-page footer.

## Evidence on Hand
- Logo and pattern assets only (paths above).
- No client logos, case studies, testimonials, screenshots, team photos, or metrics. Future work must not invent any of these as factual claims.

## Product Principles
1. Show both halves: code and visual craft appear together, never as separate "agencies" bolted on.
2. Confidence over hedging: present the studio as finished and open for business.
3. Personality is the differentiator: the mark's playful, physical energy carries the page.
4. Clarity for a non-technical buyer: service names in plain language, one obvious way to get in touch.
5. Honest proof: sample work is labeled; nothing presented as a real client until it is.

## Accessibility & Inclusion
No product-specific requirement established. Default to WCAG AA contrast and keyboard-reachable controls; the saturated palette must still meet text contrast.
