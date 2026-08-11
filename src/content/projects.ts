import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "operations-suite", slug: "operations-suite", title: "Operations Suite",
    summary: "A modular operations workspace for managing customers, billing and team workflows without losing context.",
    context: "A portfolio case-study concept based on experience with SaaS, ERP and CRM product interfaces.",
    role: "Frontend / Product Engineer", status: "prototype", coverImage: "/projects/operations-suite.svg",
    technologies: ["React", "TypeScript", "Design Systems"], capabilities: ["UI architecture", "Data-heavy interfaces", "Reusable components"], featured: true, order: 1,
    sections: {
      problem: "Operational teams often move between disconnected customer, billing and task views, losing context along the way.",
      productThinking: "The workspace is organized around decisions and recurring workflows rather than unrelated screens.",
      uiArchitecture: "A shared shell, reusable data-display primitives and consistent form patterns keep complex workflows predictable.",
      technicalApproach: "Typed domain models, composable React components and a token-based interface system shape the concept.",
      challenges: "Dense information needs to remain scannable across desktop and smaller screens without hiding important state.",
      solution: "Progressive disclosure, strong table hierarchy and contextual actions reduce visual noise while preserving control.",
      result: "This is an illustrative portfolio concept. No production metric is claimed.",
      nextIteration: "Validate the information model with real operations teams and test large datasets and permission states."
    }
  },
  {
    id: "orderflow", slug: "orderflow", title: "Orderflow",
    summary: "A QR-first ordering flow designed to make menu discovery, customization and checkout feel effortless.",
    context: "A StudioWolfCode commerce concept reframed as a complete digital ordering product.",
    role: "Product, UI and Frontend", status: "prototype", coverImage: "/projects/orderflow.svg",
    technologies: ["Next.js", "Product Design", "Commerce"], capabilities: ["Responsive UI", "Ordering flows", "Product thinking"], featured: true, order: 2,
    sections: {
      problem: "Small food businesses need a fast ordering experience without forcing customers through a heavy account or application flow.",
      productThinking: "The journey prioritizes menu comprehension, transparent customization and confidence before checkout.",
      uiArchitecture: "Menu, product modifiers, cart and order status are modeled as independent but coordinated interface states.",
      technicalApproach: "A Next.js frontend can serve a fast static menu while leaving integrations and live order state behind a repository boundary.",
      challenges: "Menus contain variable availability, modifiers and pricing rules while the interface must remain easy to use on a phone.",
      solution: "A mobile-first flow exposes choices progressively and keeps totals and validation visible at decision points.",
      result: "This case study is presented as a product prototype; production outcomes require validation.",
      nextIteration: "Connect a real catalog, payment provider and kitchen workflow, then test with merchants and customers."
    }
  },
  {
    id: "relay-ai", slug: "relay-ai", title: "Relay AI",
    summary: "An AI-assisted operations concept with visible tool calls, human confirmation and recoverable actions.",
    context: "A strategic learning project exploring useful agentic interfaces beyond a generic chatbot.",
    role: "Product and Frontend Prototype", year: 2026, status: "in-progress", coverImage: "/projects/relay-ai.svg",
    technologies: ["LLM Interfaces", "Tool Calling", "Agentic UI"], capabilities: ["Human in the loop", "Action traceability", "Error recovery"], featured: true, order: 3,
    sections: {
      problem: "AI assistants can propose and execute useful work, but opaque actions make them difficult to trust in operational contexts.",
      productThinking: "Relay separates planning, tool use and execution, requiring explicit human approval for consequential actions.",
      uiArchitecture: "The interface presents the plan, streaming progress, tool calls, evidence, permissions and recovery states as first-class components.",
      technicalApproach: "The prototype is designed for a Next.js client with a server-side model gateway and typed tool contracts.",
      challenges: "The system must communicate uncertainty and partial failure without overwhelming the user with implementation details.",
      solution: "Progressive status disclosure and review checkpoints keep the user oriented and in control.",
      result: "This is an in-progress specialization project and does not represent years of production AI experience.",
      nextIteration: "Implement a narrow real-world workflow, add evaluation traces and test permission and failure scenarios."
    }
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
