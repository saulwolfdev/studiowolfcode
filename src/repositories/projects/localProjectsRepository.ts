import type { Project } from "../../types/project";
import type { ProjectsRepository } from "./projectsRepository";

export class LocalProjectsRepository implements ProjectsRepository {
  constructor(private readonly projects: readonly Project[]) {}

  async getAll(): Promise<Project[]> {
    return [...this.projects].sort((a, b) => a.order - b.order);
  }

  async getBySlug(slug: string): Promise<Project | null> {
    return this.projects.find((project) => project.slug === slug) ?? null;
  }
}

