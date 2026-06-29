# Free Wedding Business Analysis Page Implementation Plan

This plan describes the intended changes before any implementation work is done. No application code has been changed yet.

## 1. Files, Routes, and Components Expected to Change

Expected new file:

- `src/pages/FreeWeddingBusinessAnalysisPage.tsx`
  - New dedicated landing page for the free recorded wedding business analysis offer.

Expected modified files:

- `src/App.tsx`
  - Import the new page component.
  - Add a new route for `/free-wedding-business-analysis`.

- `src/pages/HomePage.tsx`
  - Update CTA links that specifically mention the free wedding business analysis or free analysis so they point to `/free-wedding-business-analysis` instead of `/contact`.

- `src/pages/GrowthSystemPage.tsx`
  - Update CTA links that specifically mention the free wedding business analysis so they point to `/free-wedding-business-analysis` instead of `/contact`.

Potentially reviewed but likely not modified:

- `src/pages/ContactPage.tsx`
  - Review for reusable form styling and submission behavior.
  - I do not plan to change the existing contact page unless implementation reveals a small shared helper would reduce duplication without changing behavior.

- `src/pages/PlannerGrowthSystemPage copy.tsx`
  - This file contains matching CTA text, but it does not appear to be registered in `src/App.tsx`.
  - Assumption: it is an unused copy/archive file and should not affect the live site.
  - I will leave it unchanged unless you want archived copy files updated too.

## 2. New Page Structure

The new page at `/free-wedding-business-analysis` will follow the existing visual language: champagne background, luxury slate/gold palette, serif headlines, light body text, rounded buttons, existing spacing patterns, `framer-motion` animations, `lucide-react` icons, and `react-helmet-async` metadata.

Planned sections:

1. Hero section
   - Headline: `Request Your Free Wedding Business Analysis`
   - Subheadline: `A recorded video analysis showing where your wedding business may be losing high-value enquiries across your website, Instagram, and Google visibility.`
   - Body copy exactly as requested.
   - Primary CTA button: `Request My Free Analysis`
   - The CTA will scroll to the form section on the same page using an anchor link such as `#request-analysis`.

2. Explanation section
   - Title: `What the analysis includes`
   - Three cards or compact content blocks:
     - Website Review
     - Instagram & Social Presence
     - Google Visibility
   - Copy will use the provided text.
   - The layout will be a responsive grid on desktop and stacked blocks on mobile.

3. Form section
   - Title: `Request your free analysis`
   - Intro text: `Fill out the details below and we'll prepare a recorded video analysis of your wedding business presence.`
   - Form will be visually aligned with the existing contact form style, but simplified and focused on this offer.

## 3. Form Behavior and Reuse of Existing Contact Logic

The existing contact page currently submits JSON to this Make webhook:

`https://hook.eu1.make.com/zubnxprtsdih2pw7trnpw4eyl1cdtl4q`

Plan:

- Reuse the same submission integration unless testing shows the webhook requires only the exact contact-page field shape.
- Submit the free-analysis request as JSON to the same webhook.
- Keep the form local to the new page initially to avoid changing the existing contact form behavior.
- Include a `requestType` or similar field with the value `Free Wedding Business Analysis Request`.
- Include a `subject` or similarly clear field with the same label if useful for the Make scenario.
- On success, reset the form and show the requested success message.
- On failure, show a clear error message and keep the user's entered values in place.

Planned submitted payload fields:

- `requestType`: `Free Wedding Business Analysis Request`
- `subject`: `Free Wedding Business Analysis Request`
- `email`
- `website`
- `instagram`
- `location`
- `name` if included
- `companyName` if included

## 4. Form Validation

Validation will be handled client-side in the new page component before submission.

Required fields:

- Email address
- Website URL
- Instagram handle or Instagram URL
- Location / main destination

Optional fields:

- Name
- Company name

Planned validation rules:

- Email must match a normal email format and use the existing `type="email"` input behavior where appropriate.
- Website must be accepted as a URL. I plan to allow users to enter either a full URL such as `https://example.com` or a domain such as `example.com`, then normalize or validate it in a user-friendly way.
- Instagram must accept either:
  - A handle such as `@example`
  - A plain handle such as `example`
  - A full Instagram URL such as `https://instagram.com/example`
- Location must be non-empty.
- Clear inline error messages will appear near invalid fields.
- The submit button will show a loading state and be disabled during submission.

## 5. Identifying the Submission as a Free Analysis Request

Each submitted request will clearly identify itself as:

`Free Wedding Business Analysis Request`

This will be included in the payload through at least one explicit field, likely:

- `requestType`
- `subject`

The payload will also keep the offer-specific fields separate and readable so the Make webhook/email flow can show:

- Email
- Website
- Instagram
- Location / destination
- Name, if provided
- Company name, if provided

## 6. Existing CTA Buttons and Links to Update

I will only update CTAs that clearly mention the free wedding business analysis or free analysis offer. I will not change general contact CTAs.

Expected updates:

- `src/pages/HomePage.tsx`
  - Hero CTA: `Request My Free Wedding Business Analysis`
  - Case study CTA links: `Request Your Free Analysis`
  - Case study section CTA: `Request Your Free Wedding Business Analysis`
  - Final CTA: `Request Your Free Wedding Business Analysis`

- `src/pages/GrowthSystemPage.tsx`
  - Hero CTA: `Request a Free Wedding Business Analysis`
  - Final CTA: `Request a Free Wedding Business Analysis`

Expected links to leave unchanged:

- General `Contact`, `Contact Us`, `Start the conversation`, package selection, Calendly, footer, navigation, privacy, and terms links.
- Service CTAs that do not specifically mention the free business analysis.
- The old `PlannerGrowthSystemPage copy.tsx` file unless you explicitly want archive files updated too.

## 7. SEO and Metadata

The new page will use `Helmet` and include:

- Title: `Free Wedding Business Analysis | Alta Frequenza`
- Description: `Request a free recorded analysis of your wedding business website, Instagram presence, and Google visibility to see where better enquiries may be getting lost.`

I will follow the existing metadata style used in `ContactPage.tsx` and other pages.

## 8. Mobile Responsiveness

The page will use the existing responsive Tailwind patterns already present in the site:

- Stacked layout on mobile.
- Multi-column card layout on larger screens.
- Full-width form inputs and button on mobile.
- Button text with conservative tracking and wrapping behavior so long CTA text does not overflow.
- Section spacing that feels focused rather than overly long.

## 9. Risks and Assumptions

- The Make webhook used by the contact page accepts flexible JSON payloads. If it expects the exact current contact form fields, the new offer-specific fields may require an adjustment in Make.
- There is no backend API route in this repo for contact submissions; the integration appears to be direct frontend `fetch` to Make.
- Because there is no shared form utility today, keeping the new form self-contained is the least risky way to avoid changing the existing contact page.
- The current contact page already uses browser-level required validation and basic form behavior, but the new page will add clearer inline validation for the requested field rules.
- `PlannerGrowthSystemPage copy.tsx` appears unused because it is not routed in `src/App.tsx`.
- I will not add a navigation item for this landing page unless requested; the page will be reachable from relevant CTAs.

## 10. Testing Checklist After Implementation

- Confirm `/free-wedding-business-analysis` renders successfully.
- Confirm the hero CTA scrolls to the form section.
- Confirm SEO metadata title and description are present.
- Confirm required-field validation works for email, website, Instagram, and location.
- Confirm website validation accepts normal domains and full URLs.
- Confirm Instagram validation accepts handles and full Instagram URLs.
- Confirm successful form submission posts to the existing Make webhook.
- Confirm the success message appears exactly as requested.
- Confirm failure/error state is visible if submission fails.
- Confirm relevant Home page CTAs point to `/free-wedding-business-analysis`.
- Confirm relevant Growth System page CTAs point to `/free-wedding-business-analysis`.
- Confirm general contact CTAs still point to `/contact`.
- Confirm desktop, tablet, and mobile layouts do not overflow or feel cramped.
