"use client";

import { useRef, useState } from "react";
import { ArrowDown, ArrowRight, Asterisk, Check, Code2, Menu, MoveUpRight, X } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { capabilityGroups } from "@/content/capabilities";
import { profile } from "@/content/profile";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}
import type { Project } from "@/types/project";

const projectPresentation = [
  { index: "01", kind: "SaaS · Product interface", label: "Selected work", tone: "blue" },
  { index: "02", kind: "Digital ordering platform", label: "StudioWolfCode", tone: "orange" },
  { index: "03", kind: "Agentic product workflow", label: "Prototype · 2026", tone: "violet" },
];

function Mark() {
  return <span className="mark" aria-hidden="true"><span>W</span></span>;
}

function ProjectVisual({ tone, title }: { tone: string; title: string }) {
  if (tone === "orange") return (
    <div className={`project-visual ${tone}`}>
      <div className="phone"><div className="phone-top"><span>9:41</span><span>•••</span></div><div className="brand-pill">ORDERFLOW</div><h4>What are you<br/>craving today?</h4><div className="food-card"><div className="food-orb">🍜</div><div><b>Kitchen special</b><small>Fresh · spicy · bold</small></div></div><div className="mini-row"><span>Popular</span><span>For you</span><span>Drinks</span></div></div>
      <div className="visual-caption">Mobile ordering / 02</div>
    </div>
  );
  if (tone === "violet") return (
    <div className={`project-visual ${tone}`}>
      <div className="agent-panel"><div className="agent-head"><span className="agent-dot"/><span>Relay / New workflow</span><span>•••</span></div><p className="agent-label">AGENT PLAN</p><h4>Prepare the launch<br/>handoff for review</h4><div className="agent-step done"><Check size={14}/> Gather project context</div><div className="agent-step active"><Asterisk size={14}/> Draft release summary <em>Working</em></div><div className="agent-step"><span>3</span> Request human approval</div><button>Review proposed action <ArrowRight size={14}/></button></div>
      <div className="visual-caption">Human-in-the-loop / 03</div>
    </div>
  );
  return (
    <div className={`project-visual ${tone}`}>
      <div className="dashboard"><aside><Mark/><span>⌁</span><span>□</span><span>◇</span><span>◎</span></aside><main><div className="dash-top"><span>Good morning, Saúl</span><span className="avatar">SA</span></div><div className="dash-grid"><div className="metric"><small>REVENUE</small><strong>$48.2k</strong><i>+12.4%</i></div><div className="metric"><small>ACTIVE ORDERS</small><strong>238</strong><i>+8.1%</i></div></div><div className="chart"><div className="chart-head"><b>Performance</b><span>Last 30 days⌄</span></div><svg viewBox="0 0 500 120" preserveAspectRatio="none"><path d="M0,105 C50,92 65,82 105,88 S160,106 205,62 S270,55 305,60 S365,82 405,36 S460,24 500,7" fill="none" stroke="currentColor" strokeWidth="3"/><path d="M0,105 C50,92 65,82 105,88 S160,106 205,62 S270,55 305,60 S365,82 405,36 S460,24 500,7 V120 H0Z" fill="url(#fade)" opacity=".25"/><defs><linearGradient id="fade" x1="0" y1="0" x2="0" y2="1"><stop stopColor="currentColor"/><stop offset="1" stopColor="currentColor" stopOpacity="0"/></linearGradient></defs></svg></div></main></div>
      <div className="visual-caption">Product dashboard / 01</div>
    </div>
  );
}

export function Portfolio({ projectContent }: { projectContent: Project[] }) {
  const root = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState<"idle" | "notice">("idle");
  const projects = projectContent.map((project, index) => ({
    ...project,
    ...projectPresentation[index],
    stack: project.technologies,
  }));

  useGSAP(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    gsap.from(".hero-reveal", { y: 55, opacity: 0, duration: 1, stagger: .1, ease: "power3.out" });
    gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => gsap.from(el, { y: 45, opacity: 0, duration: .8, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 86%" } }));
  }, { scope: root });

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: "https://studiowolfcode.netlify.app",
    alumniOf: { "@type": "CollegeOrUniversity", name: "Universidad de Buenos Aires" },
  };

  return <div ref={root}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
    <header className="site-header">
      <a href="#top" className="logo"><Mark/><span>StudioWolfCode</span></a>
      <nav id="primary-navigation" className={menuOpen ? "open" : ""} aria-label="Primary navigation">
        <a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <a className="nav-cta" href="#contact">Let’s talk <MoveUpRight size={15}/></a>
      </nav>
      <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen} aria-controls="primary-navigation">{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-kicker hero-reveal"><span className="status-dot"/> {profile.name} <span>{profile.location}</span></div>
        <div className="hero-title"><p className="hero-role hero-reveal">{profile.role}</p><h1><span className="hero-reveal">Thoughtful interfaces.</span><span className="outline hero-reveal">AI-powered products.</span></h1></div>
        <div className="hero-bottom hero-reveal">
          <div><p>I design and build complex product interfaces with <b>React, Next.js and TypeScript</b> — combining engineering depth with a strong product and visual foundation.</p><p className="hero-stack">{profile.stack.join(" · ")}</p></div>
          <div className="hero-actions"><a className="button primary" href="#work">View projects <ArrowDown size={17}/></a><a className="text-link" href="#about">About me <ArrowRight size={16}/></a></div>
        </div>
        <div className="hero-meta hero-reveal"><span>{profile.brand}</span><span>{profile.positioning}</span><span>© 2026</span></div>
      </section>

      <section className="work section" id="work">
        <div className="section-heading reveal"><span className="eyebrow">01 / Selected work</span><h2>Products built with<br/><em>intent and precision.</em></h2><p>A selection of interface systems and product concepts — each solving a different kind of complexity.</p></div>
        <div className="project-list">
          {projects.map((project) => <article className="project reveal" key={project.title}>
            <a className="project-cover-link" href={`/work/${project.slug}`} aria-label={`Read the ${project.title} case study`}><ProjectVisual tone={project.tone} title={project.title}/></a>
            <div className="project-info"><div><span className="project-index">{project.index}</span><span className="project-kind">{project.kind}</span></div><span className="project-status">{project.label}</span></div>
            <h3><a href={`/work/${project.slug}`}>{project.title}</a></h3><p>{project.summary}</p><p className="project-role">{project.role} · {project.year ?? project.status}</p>
            <div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}<a href={`/work/${project.slug}`} aria-label={`Read the ${project.title} case study`}><ArrowRight/></a></div>
          </article>)}
        </div>
      </section>

      <section className="capabilities section" id="capabilities">
        <div className="cap-intro reveal"><span className="eyebrow light">02 / Capabilities</span><h2>Where engineering<br/>meets <em>product.</em></h2><p>I work across the interface layer — from architecture and systems to the small interactions that make a product feel considered.</p></div>
        <div className="cap-grid">
          {capabilityGroups.map(group => <div className="cap-card reveal" key={group.title}><div className="cap-number">{group.number}</div><Code2 size={28}/><h3>{group.title}</h3>{group.note && <span className="cap-note">{group.note}</span>}<ul>{group.items.map(item => <li key={item}>{item}<ArrowRight size={14}/></li>)}</ul></div>)}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-label reveal"><span className="eyebrow">03 / About</span><span className="about-mark"><Mark/></span></div>
        <div className="about-copy reveal"><h2>Design trained my eye.<br/><em>Engineering shaped<br/>how I think.</em></h2><div className="bio">{profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<a href="#contact" className="text-link">Start a conversation <ArrowRight size={16}/></a></div></div>
        <div className="experience-strip reveal"><div><small>EXPERIENCE ACROSS</small><strong>{profile.companies.join(" · ")}</strong></div><div><small>DESIGN FOUNDATION</small><strong>{profile.education}</strong></div></div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-top reveal"><span className="eyebrow light">04 / Contact</span><div><h2>Let’s build something<br/><em>meaningful.</em></h2><p>Have a product challenge, a role, or an interesting idea? Tell me what you’re working on.</p></div></div>
        <div className="contact-grid reveal">
          <form onSubmit={(e) => { e.preventDefault(); setFormState("notice"); }}><label>Name<input required name="name" placeholder="Your name"/></label><label>Email<input required type="email" name="email" placeholder="you@company.com"/></label><label>What are you building?<textarea required name="message" placeholder="A short note about your product, role or idea…" rows={3}/></label><button className="button light-button" type="submit">Send enquiry <ArrowRight size={17}/></button>{formState === "notice" && <p className="form-notice">Thanks — this preview has no backend connected yet. Please use the email link alongside the form.</p>}</form>
          <aside><div><small>CONTACT DETAILS</small><p className="pending-detail">Professional email, LinkedIn and GitHub links will be added after verification.</p></div><div className="availability"><span className="status-dot"/><p><b>Open to the right conversations</b><br/>Remote roles · Selected collaborations</p></div></aside>
        </div>
      </section>
    </main>
    <footer><a href="#top" className="logo"><Mark/><span>{profile.brand}</span></a><p>{profile.positioning}</p><span>© {new Date().getFullYear()} {profile.name}</span></footer>
  </div>;
}
