import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "operations-suite", slug: "operations-suite", title: "Operations Suite",
    summary: "A modular operations workspace for customers, billing and team workflows—designed to keep dense information clear and actionable.",
    context: "Portfolio concept informed by experience designing SaaS, ERP and CRM product interfaces.",
    role: "Frontend / Product Engineer", status: "prototype", coverImage: "/projects/operations-suite.svg",
    technologies: ["React", "TypeScript", "Design Systems"], capabilities: ["UI architecture", "Data-heavy interfaces", "Reusable components"], featured: true, order: 1,
    sections: {
      problem: "Operations teams often move between disconnected customer, billing and task views, losing context as work progresses.",
      productThinking: "The workspace is organised around recurring decisions and workflows instead of a collection of unrelated screens.",
      uiArchitecture: "Shared foundations, reusable data-display components and consistent form patterns make complex workflows predictable.",
      technicalApproach: "The concept uses typed domain models, composable React components and a token-based UI system organised from foundations to feature screens.",
      challenges: "Dense information must stay legible across screen sizes while preserving status, permissions and contextual actions.",
      solution: "Progressive disclosure, clear table hierarchy, filters and contextual actions reduce visual noise without removing control.",
      result: "Portfolio prototype. No production metrics are claimed.",
      nextIteration: "Validate the information model with operations teams and test large datasets, role permissions and edge states."
    }
  },
  {
    id: "orderflow", slug: "orderflow", title: "Orderflow",
    summary: "A mobile ordering flow that makes browsing, customising and paying feel direct—without hiding availability, pricing or order state.",
    context: "StudioWolfCode commerce concept reframed as a complete digital ordering product.",
    role: "Product UI / Frontend", status: "prototype", coverImage: "/projects/orderflow.svg",
    technologies: ["Next.js", "Product UI", "Commerce"], capabilities: ["Responsive UI", "Ordering flows", "State modelling"], featured: true, order: 2,
    sections: {
      problem: "Small hospitality businesses need a fast ordering experience without forcing customers to create an account or install an app.",
      productThinking: "The journey prioritises menu comprehension, transparent customisation and confidence before payment.",
      uiArchitecture: "Menu, modifiers, cart and order status are modelled as independent but coordinated interface states.",
      technicalApproach: "Next.js can deliver a fast menu while repository boundaries isolate catalogue, payment and order-state integrations.",
      challenges: "Availability, modifiers and pricing rules vary while the experience must remain simple on a phone.",
      solution: "A mobile-first flow reveals decisions progressively and keeps totals, validation and recovery visible.",
      result: "Product prototype; production outcomes require real-world validation.",
      nextIteration: "Connect a real catalogue, payment provider and kitchen workflow, then test with businesses and customers."
    }
  },
  {
    id: "relay-ai", slug: "relay-ai", title: "Relay AI",
    summary: "An agentic operations interface that exposes plans, tool calls, approvals, execution states and recovery—not another opaque chatbot.",
    context: "Applied AI Lab project exploring trustworthy agentic product interfaces.",
    role: "Product / Frontend Prototype", year: 2026, status: "in-progress", coverImage: "/projects/relay-ai.svg",
    technologies: ["LLM Interfaces", "Tool Calling", "Agentic UX"], capabilities: ["Human approval", "Action traces", "Error recovery"], featured: true, order: 3,
    sections: {
      problem: "AI assistants can propose and execute useful work, but opaque actions make them difficult to trust in operational contexts.",
      productThinking: "Relay separates planning, tool use and execution, requiring explicit human approval for consequential actions.",
      uiArchitecture: "Plan, streaming progress, tools, evidence, permissions, errors and recovery are first-class interface states.",
      technicalApproach: "The prototype targets a Next.js client, server-side model gateway, structured outputs and typed tool contracts.",
      challenges: "The system must communicate uncertainty and partial failure without overwhelming users with internal detail.",
      solution: "Progressive states and review checkpoints keep people oriented, informed and in control.",
      result: "An active learning project, not a claim of professional AI production experience.",
      nextIteration: "Implement one bounded end-to-end workflow with streaming, real tool calls, trace evaluation and recovery tests."
    }
  }
];
