import type { Project } from "../../types/project";
import { isFirebaseConfigured } from "../../lib/firebase/config";
import { FirebaseProjectsRepository } from "./firebaseProjectsRepository";
import { LocalProjectsRepository } from "./localProjectsRepository";
import type { ProjectsRepository } from "./projectsRepository";

export function createProjectsRepository(
  localProjects: readonly Project[],
): ProjectsRepository {
  const localRepository = new LocalProjectsRepository(localProjects);

  if (!isFirebaseConfigured) {
    return localRepository;
  }

  const firebaseRepository = new FirebaseProjectsRepository();

  return {
    async getAll() {
      try {
        return await firebaseRepository.getAll();
      } catch {
        return localRepository.getAll();
      }
    },
    async getBySlug(slug) {
      try {
        return await firebaseRepository.getBySlug(slug);
      } catch {
        return localRepository.getBySlug(slug);
      }
    },
  };
}
