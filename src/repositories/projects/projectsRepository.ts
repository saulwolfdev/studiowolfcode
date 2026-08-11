import type { Project } from "../../types/project";

export interface ProjectsRepository {
  getAll(): Promise<Project[]>;
  getBySlug(slug: string): Promise<Project | null>;
}

