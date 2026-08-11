import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import { getFirebaseDb } from "../../lib/firebase/client";
import type { Project } from "../../types/project";
import type { ProjectsRepository } from "./projectsRepository";

function toProject(id: string, data: Omit<Project, "id">): Project {
  return { id, ...data };
}

export class FirebaseProjectsRepository implements ProjectsRepository {
  async getAll(): Promise<Project[]> {
    const projectsQuery = query(
      collection(getFirebaseDb(), "projects"),
      orderBy("order", "asc"),
    );
    const snapshot = await getDocs(projectsQuery);

    return snapshot.docs.map((document) =>
      toProject(document.id, document.data() as Omit<Project, "id">),
    );
  }

  async getBySlug(slug: string): Promise<Project | null> {
    const projectQuery = query(
      collection(getFirebaseDb(), "projects"),
      where("slug", "==", slug),
      limit(1),
    );
    const snapshot = await getDocs(projectQuery);
    const document = snapshot.docs[0];

    return document
      ? toProject(document.id, document.data() as Omit<Project, "id">)
      : null;
  }
}

