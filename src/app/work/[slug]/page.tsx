import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { createProjectsRepository } from "@/repositories/projects/createProjectsRepository";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await createProjectsRepository(projects).getBySlug((await params).slug);
  return project ? { title: project.title, description: project.summary } : {};
}

const sectionLabels: Record<string, string> = {
  problem: "Problema",
  productThinking: "Pensamiento de producto",
  uiArchitecture: "Arquitectura UI",
  technicalApproach: "Enfoque técnico",
  challenges: "Desafíos",
  solution: "Solución",
  result: "Resultado",
  nextIteration: "Próxima iteración",
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await createProjectsRepository(projects).getBySlug((await params).slug);
  if (!project) notFound();

  return (
    <main className="case-study">
      <header className="case-nav">
        <Link href="/#work"><ArrowLeft size={15} /> Volver a proyectos</Link>
        <Link href="/">StudioWolfCode</Link>
      </header>

      <section className="case-hero">
        <p className="case-kicker">{project.status === "in-progress" ? "en desarrollo" : "prototipo"} · {project.role}</p>
        <h1>{project.title}</h1>
        <p className="case-summary">{project.summary}</p>
        <div className="case-meta">
          <div><small>Contexto</small><p>{project.context}</p></div>
          <div><small>Capacidades</small><p>{project.capabilities.join(" · ")}</p></div>
          <div><small>Stack</small><p>{project.technologies.join(" · ")}</p></div>
        </div>
      </section>

      <div className={`case-visual case-${project.slug}`} aria-hidden="true">
        <span>{project.title}</span><strong>{project.order.toString().padStart(2, "0")}</strong>
      </div>

      <section className="case-body">
        {Object.entries(project.sections).map(([key, value], index) => value && (
          <article key={key}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><h2>{sectionLabels[key]}</h2><p>{value}</p></div>
          </article>
        ))}
      </section>

      <section className="case-next">
        <p>¿Te interesa el razonamiento detrás de este trabajo?</p>
        <Link href="/#contact">Iniciar una conversación <ArrowUpRight /></Link>
      </section>
    </main>
  );
}
