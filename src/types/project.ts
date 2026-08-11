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

