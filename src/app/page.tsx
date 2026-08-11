import { Portfolio } from "@/components/Portfolio";
import { projects } from "@/content/projects";
import { createProjectsRepository } from "@/repositories/projects/createProjectsRepository";

export default async function Home() {
  const projectContent = await createProjectsRepository(projects).getAll();
  return <Portfolio projectContent={projectContent.filter((project) => project.featured)} />;
}
