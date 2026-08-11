import type { CapabilityGroup } from "@/types/profile";

export const capabilityGroups: CapabilityGroup[] = [
  {
    number: "01",
    title: "Frontend Engineering",
    items: ["React", "Next.js", "TypeScript", "Component Architecture", "Responsive Interfaces", "REST API Integration"],
  },
  {
    number: "02",
    title: "Product & UI Systems",
    items: ["Product Thinking", "Design Systems", "UI Architecture", "Interaction Design", "Complex Product Interfaces"],
  },
  {
    number: "03",
    title: "AI Products",
    note: "Current specialization",
    items: ["LLM Interfaces", "Function & Tool Calling", "Agentic UI", "RAG Concepts", "AI-powered Workflows"],
  },
];
