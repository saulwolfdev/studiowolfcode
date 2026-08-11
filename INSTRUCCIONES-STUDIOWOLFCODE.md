# StudioWolfCode — Portfolio Implementation Brief

## 1. Project goal

Build a premium, minimal and technically credible portfolio for **Saúl Alejos Garay** under the **StudioWolfCode** brand.

The website must position Saúl primarily as a:

> **Senior Frontend / Product Engineer**

His design background is a competitive advantage within engineering—not his main professional identity.

The portfolio should help attract international roles in product companies, SaaS, fintech, startups, scale-ups and AI-first companies. It may also generate selected freelance opportunities, but it must not look like a cheap web agency or a generic software factory.

The central positioning is:

> **Engineering + UI + Product + AI**

StudioWolfCode represents **Product Interfaces & Frontend Engineering**, with a progressive evolution toward **AI Product Engineering**.

## 2. Key message

The visitor must understand within 30 seconds:

- **Who:** Saúl Alejos Garay.
- **Role:** Senior Frontend / Product Engineer.
- **Core expertise:** React, Next.js, TypeScript, UI systems and product interfaces.
- **Differentiator:** A strong background in design and product applied to engineering.
- **Direction:** AI-powered products and agentic interfaces.
- **Capability:** Building complex digital products, not merely websites.

Do not position Saúl primarily as a UX/UI Designer. Do not claim years of professional experience in every AI technology. Clearly distinguish consolidated professional experience from current specialization.

## 3. Language and voice

The published portfolio must be written primarily in **English**. Spanish can be added later as a secondary language.

Code, component names, variables and technical documentation must also be in English.

The voice should be:

- Confident and direct.
- Professional but human.
- Contemporary and technically precise.
- Concrete rather than full of marketing language.

Avoid empty statements such as “transforming ideas into unique digital experiences.” Prefer specific statements such as:

> I design and build complex product interfaces with React, Next.js and TypeScript.

## 4. Recommended stack

- Next.js with App Router.
- React.
- TypeScript with strict mode.
- Tailwind CSS.
- GSAP, `@gsap/react` and ScrollTrigger.
- Lucide React for icons.
- Static local content for the first release.
- Architecture ready for a later Firebase integration.
- Deployment on Vercel or Netlify.

Do not introduce an unnecessary backend in version one.

## 5. Visual direction

The visual language must be minimal, technical, refined and personal.

- Dark or neutral color system.
- Excellent typography and generous spacing.
- Clear hierarchy and restrained use of color.
- One controlled accent color.
- Subtle borders, grids and interface-inspired details.
- High-quality project imagery and UI close-ups.
- No generic stock photos.

Avoid:

- Generic agency templates.
- Crypto, gaming or cyberpunk aesthetics.
- Excessive gradients and glow effects.
- Decorative effects without purpose.
- Pretending StudioWolfCode is a large team.

StudioWolfCode is Saúl's professional practice, portfolio and product laboratory.

## 6. Information architecture

### 01 — Navigation

- Wordmark: `StudioWolfCode`.
- Links: Work, Capabilities, About and Contact.
- Optional link to résumé.
- Persistent but unobtrusive header.
- Accessible mobile menu.
- Clear focus and active states.

### 02 — Hero

Use this content direction:

```text
SAÚL ALEJOS GARAY
Frontend / Product Engineer

Building thoughtful interfaces and AI-powered products.

React · Next.js · TypeScript · Design Systems · AI
```

Primary CTA: `View Projects`

Secondary CTA: `About Me`

Include `StudioWolfCode` as the professional brand without allowing it to compete with Saúl's identity.

The hero must communicate engineering before design. Avoid generic copy about “creating experiences.”

### 03 — Selected Work

Show only **three to five strong projects**. Each project should prove a different capability:

1. A SaaS product, ERP, CRM or complex dashboard demonstrating UI architecture, forms, tables and state management.
2. A StudioWolfCode commerce project reinterpreted as a real product case study—for example, a QR ordering solution presented as a **Digital Ordering Platform**.
3. An AI product demonstrating an interface connected to an LLM, tools and external systems, with human confirmation where appropriate.

Do not create fake projects or metrics. A project may be described as a concept, prototype or work in progress when that is the truth.

Each project card should contain:

- Project name.
- Short product-oriented summary.
- Role.
- Year or status.
- Technology stack.
- Cover image.
- Link to case study.
- Optional demo and GitHub links.

### 04 — Case study template

Every case study should support these sections:

1. **Problem** — What problem existed?
2. **Context** — Who was it built for?
3. **My Role** — What did Saúl personally own?
4. **Product Thinking** — Which product decisions were made?
5. **UI Architecture** — How was the interface organized?
6. **Technical Approach** — Which technologies and patterns were used?
7. **Challenges** — Which product or technical constraints appeared?
8. **Solution** — How were they addressed?
9. **Result** — What was achieved? Only use confirmed outcomes.
10. **Next Iteration** — What would be improved today?

The content must show implementation decisions, states, data flow, architecture and trade-offs—not only polished screens.

### 05 — Capabilities

Use three clear groups.

#### Frontend Engineering

- React
- Next.js
- TypeScript
- Component Architecture
- Responsive Interfaces
- REST API Integration

#### Product & UI Systems

- Product Thinking
- Design Systems
- UI Architecture
- Interaction Design
- Complex Product Interfaces

#### AI Products

- LLM Interfaces
- Function and Tool Calling
- Agentic UI
- RAG concepts
- AI-powered workflows

The AI section must be described as a current specialization. It must not imply unverified professional seniority in all these technologies.

### 06 — About

Use this copy direction:

> I’m a Frontend / Product Engineer with more than seven years of experience working across SaaS products, ERP and CRM platforms. My background spans frontend development, product design, UI architecture and design systems.
>
> Working between design, product and engineering became an advantage: I can understand a product from the user experience and build the interface that makes it work. I’m currently extending that experience into AI-powered products and new interfaces where people, software and agents interact.

Mention the Graphic Design education at **FADU, Universidad de Buenos Aires** only as context for the strong visual and product foundation. It must not dominate the section.

Companies in Saúl's professional history include INFORMAT, Wigo, Telefónica, Neoris and Sofrecom. Only connect specific responsibilities or achievements to them when confirmed.

### 07 — Experience snapshot

Present a compact professional timeline if enough verified information exists. Focus on:

- Product and company context.
- Engineering responsibilities.
- Product interfaces and systems built.
- Confirmed integrations and technology.
- Real outcomes without invented metrics.

If the available information is incomplete, omit the detailed timeline and link to the résumé instead of inventing content.

### 08 — Contact

Suggested heading:

> Let’s build something meaningful.

Include:

- Professional email.
- LinkedIn.
- GitHub.
- Optional résumé download.
- A concise contact form.

The static form must validate locally and clearly state when no backend is connected. Never show a false “message sent” confirmation.

### 09 — Footer

- StudioWolfCode wordmark.
- Saúl Alejos Garay.
- Dynamic year.
- LinkedIn, GitHub and email.
- Short positioning line: `Product Interfaces & Frontend Engineering`.

## 7. Motion with GSAP

Motion should reinforce hierarchy, not distract from it.

Recommended effects:

- Controlled text reveal in the hero.
- Staggered appearance of supporting content and CTAs.
- ScrollTrigger reveals for projects and capability groups.
- Subtle typography movement or masked transitions.
- Moderate parallax on selected visual elements.
- Small scale and position responses on project cards.
- Page or case-study transitions only if they remain fast and accessible.

Implementation rules:

- Use `useGSAP` and scope animations to component refs.
- Revert GSAP contexts when components unmount.
- Register plugins on the client only.
- Respect `prefers-reduced-motion`.
- Reduce or disable complex effects on mobile.
- Do not hijack native scrolling.
- Do not hide essential content while JavaScript loads.
- Protect Core Web Vitals from animation regressions.

## 8. Suggested project architecture

```text
src/
  app/
    layout.tsx
    page.tsx
    work/[slug]/page.tsx
    globals.css
  components/
    layout/
    navigation/
    sections/
    project/
    ui/
  content/
    profile.ts
    capabilities.ts
    projects.ts
    experience.ts
  hooks/
    useReducedMotion.ts
  lib/
    firebase/
      client.ts
      config.ts
  repositories/
    projects/
      localProjectsRepository.ts
      firebaseProjectsRepository.ts
    contact/
      localContactRepository.ts
      firebaseContactRepository.ts
  types/
    project.ts
    profile.ts
```

Visual components must never import Firebase directly. Pages receive data through repository functions, and visual components receive it through typed props.

## 9. Data model

```ts
export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  context: string;
  role: string;
  year?: number;
  status?: "shipped" | "prototype" | "in-progress";
  coverImage: string;
  technologies: string[];
  capabilities: string[];
  featured: boolean;
  order: number;
  demoUrl?: string;
  repositoryUrl?: string;
  sections: {
    problem?: string;
    productThinking?: string;
    uiArchitecture?: string;
    technicalApproach?: string;
    challenges?: string;
    solution?: string;
    result?: string;
    nextIteration?: string;
  };
}
```

All profile, capability, experience and project content should initially live in typed local files. Do not duplicate content across JSX files.

## 10. Firebase-ready architecture

The first version remains static. Prepare `.env.example` without real values:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

Future uses may include:

- Firestore collections for projects and articles.
- Contact requests through a protected server endpoint or Cloud Function.
- Firebase Storage for project media.
- Analytics when a privacy-conscious tracking plan is defined.
- Authentication for a future administration area.

Requirements:

- Keep Firebase optional and isolated behind repositories.
- Never commit `.env.local` or credentials.
- Validate contact submissions on the server before enabling them.
- Add anti-spam protection and rate limiting.
- Configure Firestore and Storage security rules before public writes.
- Keep local content as a reliable fallback.

## 11. Performance, accessibility and SEO

- Mobile-first implementation from 320 px upward.
- Semantic HTML and a logical heading hierarchy.
- Complete keyboard navigation and visible focus states.
- WCAG-compliant color contrast.
- Descriptive alternative text.
- `next/image` with correct sizes and optimized assets.
- Lazy-load noncritical media and components.
- Avoid layout shifts caused by fonts and imagery.
- Use metadata, canonical URL, Open Graph and Twitter cards.
- Add structured data for `Person` and relevant projects where accurate.
- Generate sitemap and robots metadata.
- Set the document language to English.
- Target strong Lighthouse results without treating the score as the only quality measure.
- No runtime warnings or console errors.

## 12. Strategic AI project

At least one future flagship project should demonstrate this flow:

```text
User → Product interface → LLM or agent → Tools → External system
                                      ↓
                         Human confirmation when required
```

The interface should demonstrate:

- Streaming and intermediate states.
- Loading, empty, success and error states.
- Tool call visibility.
- Permission and confirmation flows.
- Traceability of agent actions.
- Recovery from failed operations.
- Clear boundaries between suggestion and execution.

Do not build a generic chatbot. Build a product workflow where AI is one component of a useful system.

## 13. Content integrity rules

- Never invent metrics, clients, responsibilities or project results.
- Clearly label prototypes and work in progress.
- Do not fabricate an agency team.
- Do not inflate AI knowledge or professional seniority.
- Do not publish placeholder testimonials as if they were real.
- Do not reduce past projects to “websites”; explain their product and engineering complexity.
- If a claim cannot be verified, rewrite it conservatively or omit it.

## 14. Initial implementation commands

```bash
npx create-next-app@latest studiowolfcode --typescript --tailwind --eslint --app --src-dir
cd studiowolfcode
npm install gsap @gsap/react lucide-react firebase
npm run dev
```

## 15. Definition of done

- A recruiter can identify Saúl's role, core stack and differentiator within 30 seconds.
- Engineering is visually and verbally prioritized over pure UX/UI design.
- The site includes a polished hero, selected work, capabilities, about and contact sections.
- Three to five projects can be rendered from typed local data.
- Each project supports a detailed, technically credible case-study page.
- GSAP motion is restrained, responsive, cleaned up correctly and accessible.
- The interface works on mobile, tablet and desktop.
- The first release is fully functional without Firebase.
- Firebase can later replace local repositories without rewriting presentation components.
- Contact behavior is honest when no backend exists.
- Metadata, social previews, semantic HTML and accessibility foundations are complete.
- The repository includes a professional README explaining setup, architecture, scripts, deployment and future Firebase integration.
- LinkedIn, GitHub, résumé and portfolio communicate the same professional positioning.

## 16. Missing verified content before publication

Collect and confirm:

- Professional email.
- LinkedIn and GitHub URLs.
- Current résumé file.
- Exact dates and responsibilities for professional experience.
- Three to five real projects and their assets.
- Confirmed role, challenges and results for each project.
- Demo and repository links.
- Final brand accent color and favicon.
- Final production domain; current reference: `studiowolfcode.netlify.app`.
- Any analytics or contact privacy requirements.

