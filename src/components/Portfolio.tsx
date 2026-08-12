"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Command } from "cmdk";
import { ArrowRight, Bot, Box, Braces, Check, ChevronRight, CircleDot, Code2, Command as CommandIcon, Copy, Cpu, Database, Layers3, Linkedin, Menu, Moon, MousePointer2, Network, Play, Search, Sparkles, Sun, Terminal, WandSparkles, X, Zap } from "lucide-react";
import type { Project } from "@/types/project";
import { profile } from "@/content/profile";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger, useGSAP);

const stackGroups = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Component Architecture", "State Management", "REST APIs", "Performance", "Accessibility"],
  systems: ["Design Tokens", "Component Libraries", "Variants & States", "UI Patterns", "Documentation", "Design-to-Code", "Figma"],
  product: ["Product UI", "Information Architecture", "Complex Interfaces", "Dashboards", "Enterprise UX", "SaaS / ERP / CRM"],
  ai: ["LLM Interfaces", "Responses API", "Tool Calling", "Structured Outputs", "MCP", "RAG", "Agent Workflows", "Human-in-the-loop"],
  delivery: ["Git", "GitHub", "CI/CD", "Docker", "Firebase", "Deployments"],
};

const buildPillars = [
  { id: "01", title: "Product UI", copy: "SaaS, ERP, CRM and data-heavy interfaces built around real operational work.", signal: "flows / states / data" },
  { id: "02", title: "Frontend Engineering", copy: "Typed, responsive React interfaces with durable component architecture and clear boundaries.", signal: "react / next / typescript" },
  { id: "03", title: "Design Systems", copy: "Tokens, primitives and reusable patterns that connect product decisions to production code.", signal: "tokens / components / patterns" },
  { id: "04", title: "AI Interfaces", copy: "Emerging agentic workflows with visible tools, approval, traceability and recovery.", signal: "tools / approval / traces" },
];

const experience = [
  { company: "Uwigo.ia", context: "Senior Product Designer · 2024—2026", detail: "Lideré el diseño de productos SaaS para ERP, CRM y plataformas B2B. Trabajé junto a Producto e Ingeniería en experiencias end-to-end, evolución del Design System, discovery y adopción de IA en investigación, prototipado y documentación." },
  { company: "Telefónica", context: "Senior Product Designer · 2022—2024", detail: "Diseñé productos para iniciativas de transformación digital: flujos, wireframes y prototipos de alta fidelidad. Colaboré con Product Owners, Desarrollo y QA en la evolución de componentes reutilizables y experiencias centradas en el usuario." },
  { company: "NEORIS", context: "Product Designer · UI Specialist · 2020—2022", detail: "Diseñé productos digitales para los sectores financiero y medios. Construí Design Systems y bibliotecas de componentes, y trabajé con equipos frontend para asegurar implementaciones consistentes y escalables." },
  { company: "Sofrecom · YPF", context: "UX/UI Developer · 2018—2020", detail: "Diseñé aplicaciones corporativas con Fluent UI, definiendo arquitectura de información, wireframes y prototipos en colaboración con equipos .NET y SharePoint." },
  { company: "EntradaUno", context: "UX/UI Developer · 2016—2018", detail: "Combiné investigación, pruebas con usuarios, arquitectura de información y diseño responsive con implementación frontend en JavaScript y React." },
];

function WolfMark() { return <span className="x-mark" aria-hidden="true">W</span>; }

function SectionLabel({ children, number }: { children: React.ReactNode; number: string }) { return <div className="x-section-label"><span>{number}</span><p>{children}</p><i/></div>; }

function CommandPalette({ open, setOpen }: { open: boolean; setOpen: (value: boolean) => void }) {
  const items = [["Work", "#work"], ["Expertise", "#expertise"], ["Skills", "#stack"], ["AI Lab", "#lab"], ["About", "#about"], ["Experience", "#experience"], ["Contact", "#contact"]];
  return <Dialog open={open} onOpenChange={setOpen}><DialogContent className="command-dialog"><DialogTitle className="sr-only">Navigate StudioWolfCode</DialogTitle><Command label="Navigation palette"><div className="command-input"><Search size={16}/><Command.Input placeholder="Type a section or command…" autoFocus/><kbd>ESC</kbd></div><Command.List><Command.Empty>No results found.</Command.Empty><Command.Group heading="Navigate">{items.map(([label, href]) => <Command.Item key={label} onSelect={() => { location.hash = href.slice(1); setOpen(false); }}><ChevronRight size={14}/><span>{label}</span><small>{href}</small></Command.Item>)}</Command.Group></Command.List></Command></DialogContent></Dialog>;
}

function HeroComposition() {
  return <div className="hero-composition" aria-label="Interactive product engineering interface preview">
    <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
    <Card className="float-card terminal-card" data-depth="1"><div className="panel-top"><span><Terminal size={13}/> terminal</span><i/><i/><i/></div><code><span>$</span> pnpm build<br/><em>✓</em> Compilación correcta<br/><em>✓</em> 42 componentes tipados<br/><b>listo en 1.2s</b></code></Card>
    <Card className="float-card system-card" data-depth="2"><div className="panel-top"><span><Layers3 size={13}/> sistema.estado</span><Badge>EN VIVO</Badge></div><div className="system-metric"><strong>98</strong><span>Rendimiento<br/><i>+4 esta semana</i></span></div><div className="metric-bars"><i/><i/><i/><i/><i/></div></Card>
    <Card className="float-card code-card" data-depth="3"><div className="panel-top"><span><Braces size={13}/> agent.ts</span></div><pre><span>const</span> result = <b>await</b> agent.run({`{`}<br/>  tool: <em>&quot;deploy&quot;</em>,<br/>  approval: <strong>true</strong><br/>{`}`});</pre></Card>
    <Card className="float-card component-card"><div className="panel-top"><span><Box size={13}/> árbol.componentes</span></div><div className="component-tree"><span>AppShell</span><span>└─ VistaProducto</span><span>   ├─ GrillaDatos</span><span>   └─ PanelAgente <b>●</b></span></div></Card>
    <div className="connection connection-a"><i/></div><div className="connection connection-b"><i/></div>
    <div className="core-node"><WolfMark/><span>Construir.<br/>Diseñar.<br/>Lanzar.</span></div>
  </div>;
}

function ProjectMockup({ project, index }: { project: Project; index: number }) {
  if (index === 1) return <div className="mock-order"><div className="order-phone"><small>ORDERFLOW / MENÚ</small><h4>Buena comida.<br/>Sin fricción.</h4><div className="order-item"><span>🍜</span><div><b>Especial de cocina</b><small>Fresco · picante · intenso</small></div><strong>$18</strong></div><div className="order-tabs"><i/><i/><i/></div></div><div className="mock-data"><span>FLUJO DE CONVERSIÓN</span><strong>Explorar → Elegir → Pedir</strong></div></div>;
  if (index === 2) return <div className="mock-agent"><div className="agent-title"><Bot/><span>Agente Relay</span><Badge>TRABAJANDO</Badge></div><h4>Preparar entrega del lanzamiento</h4><div className="agent-action done"><Check/>Leer contexto del proyecto</div><div className="agent-action active"><Zap/>Generar resumen de versión <i>02:14</i></div><div className="agent-action"><CircleDot/>Solicitar aprobación</div><button><Play/> Revisar acción propuesta</button></div>;
  return <div className="mock-dashboard"><div className="mock-side"><WolfMark/><i/><i/><i/><i/></div><div className="mock-main"><div className="mock-head"><span>Espacio / Resumen</span><Badge>DATOS EN VIVO</Badge></div><div className="mock-metrics"><div><small>INGRESOS</small><strong>$48.2K</strong><em>↗ 12.4%</em></div><div><small>PEDIDOS ACTIVOS</small><strong>238</strong><em>↗ 8.1%</em></div></div><div className="mock-chart"><span>Rendimiento</span><svg viewBox="0 0 500 130" preserveAspectRatio="none"><path d="M0 115 C50 90 80 105 125 80 S210 112 260 55 S335 80 385 42 S450 55 500 10" fill="none" stroke="currentColor" strokeWidth="3"/></svg></div></div></div>;
}

function AiLab() {
  const [approved, setApproved] = useState(false);
  const [running, setRunning] = useState(true);
  return <section className="x-lab x-section" id="lab"><SectionLabel number="03">Laboratorio IA / Experimentos</SectionLabel><div className="lab-heading x-reveal"><div><Badge><Sparkles size={11}/> ESPECIALIZACIÓN ACTUAL</Badge><h2>Interfaces para<br/><span>personas + máquinas.</span></h2></div><p>Exploro flujos de producto donde la IA planifica, llama herramientas y ejecuta acciones, manteniendo siempre el control humano.</p></div><Card className="lab-app x-reveal"><div className="lab-sidebar"><div className="lab-brand"><Bot/> Relay / SO de agentes</div><button className="active"><WandSparkles/> Nuevo flujo</button><button><Network/> Grafo de ejecución</button><button><Database/> Conocimiento</button><small>EJECUCIONES RECIENTES</small><button>Entrega de lanzamiento <i>●</i></button><button>Auditar dependencias</button></div><div className="lab-main"><div className="lab-toolbar"><span>Flujo / Entrega de lanzamiento</span><div><Badge>TRAZA ACTIVA</Badge><button>•••</button></div></div><div className="lab-prompt"><small>OBJETIVO</small><h3>Preparar la entrega de la versión y<br/>notificar al equipo de producto.</h3><div className="workflow"><div className="workflow-line"/><div className="workflow-step done"><i><Check/></i><div><small>01 · LLAMADA DE HERRAMIENTA</small><b>Leer contexto del proyecto</b><code>github.getPullRequest(#284)</code></div><span>1.2s</span></div><div className={`workflow-step ${running ? "running" : "done"}`}><i>{running ? <Cpu/> : <Check/>}</i><div><small>02 · GENERACIÓN</small><b>Redactar resumen de versión</b><p>{running ? "Generando un resumen conciso a partir de 14 commits y 3 incidencias vinculadas…" : "Resumen generado y contrastado con las incidencias vinculadas."}</p></div><button onClick={() => setRunning(!running)}>{running ? "Pausar" : "Repetir"}</button></div><div className={`workflow-step ${approved ? "done" : "approval"}`}><i>{approved ? <Check/> : <MousePointer2/>}</i><div><small>03 · CONFIRMACIÓN HUMANA</small><b>{approved ? "Acción aprobada" : "Notificar a #product-launch"}</b><p>{approved ? "Aprobación registrada. La acción externa ya puede ejecutarse." : "Esta acción publicará contenido externo. Debe revisarse antes de ejecutarse."}</p></div>{!approved && <Button size="sm" onClick={() => setApproved(true)}>Aprobar acción</Button>}</div></div></div></div><div className="lab-inspector"><small>INSPECTOR DE EJECUCIÓN</small><div><span>Estado</span><b className="online">● Ejecutando</b></div><div><span>Modelo</span><b>GPT / uso de herramientas</b></div><div><span>Herramientas</span><b>3</b></div><div><span>Tokens</span><b>1,284</b></div><div className="trace"><span>TRAZA</span><code>plan.creado<br/>herramienta.solicitada<br/>herramienta.completada<br/>aprobación.esperando</code></div></div></Card></section>;
}

export function Portfolio({ projectContent }: { projectContent: Project[] }) {
  const root = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => { const handler = (event: KeyboardEvent) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setCommandOpen(true); } }; addEventListener("keydown", handler); return () => removeEventListener("keydown", handler); }, []);
  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("studiowolfcode-theme");
    const preferredTheme = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(savedTheme === "dark" || savedTheme === "light" ? savedTheme : preferredTheme);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);
  useGSAP(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const mobile = matchMedia("(max-width: 760px)").matches;
    const cleanups: Array<() => void> = [];

    if (mobile) {
      gsap.fromTo(".x-hero h1", { opacity: .45, y: 52, scale: .9, rotate: -2 }, { opacity: 1, y: 0, scale: 1, rotate: 0, duration: .95, ease: "expo.out" });
      gsap.from(".x-hero h1 span", { x: -42, duration: 1.05, ease: "power4.out", delay: .08 });
      gsap.from(".hero-lead, .hero-tech, .hero-cta", { opacity: .35, y: 28, duration: .7, stagger: .09, ease: "power3.out", delay: .15 });
    } else {
      gsap.timeline({ defaults: { ease: "expo.out" } })
        .from(".x-hero-copy > .ui-badge", { opacity: 0, y: -35, scale: .65, duration: .8 })
        .from(".hero-name", { opacity: 0, letterSpacing: ".55em", duration: .8 }, "<.1")
        .from(".x-hero h1", { opacity: 0, y: 110, scale: .82, rotateX: -24, filter: "blur(16px)", transformOrigin: "50% 100%", duration: 1.25 }, "<.05")
        .from(".x-hero h1 span", { x: -130, skewX: -8, duration: 1.15 }, "<.25")
        .from(".hero-lead", { opacity: 0, y: 45, filter: "blur(8px)", duration: .8 }, "<.25")
        .from(".hero-tech span", { opacity: 0, y: 25, scale: .55, stagger: .08, duration: .55, ease: "back.out(1.8)" }, "<.15")
        .from(".hero-cta", { opacity: 0, y: 42, scale: .86, rotate: 2, duration: .7, ease: "back.out(1.5)" }, "<.15")
        .from(".hero-proof > div", { opacity: 0, y: 50, scale: .72, stagger: .1, duration: .7, ease: "back.out(1.5)" }, "<.1");
    }

    gsap.to(".hero-grid", { backgroundPosition: "0 180px", scale: 1.12, ease: "none", scrollTrigger: { trigger: ".x-hero", start: "top top", end: "bottom top", scrub: 1.1 } });
    gsap.to(".x-hero-copy", { y: mobile ? -48 : -125, scale: mobile ? .98 : .91, opacity: mobile ? .55 : .16, ease: "none", scrollTrigger: { trigger: ".x-hero", start: "55% center", end: "bottom top", scrub: 1 } });

    gsap.utils.toArray<HTMLElement>(".x-section-label").forEach((label) => {
      const line = label.querySelector("i");
      const copy = label.querySelectorAll("span, p");
      if (line) gsap.from(line, { scaleX: 0, transformOrigin: "left center", duration: 1.35, ease: "power4.inOut", scrollTrigger: { trigger: label, start: "top 88%" } });
      gsap.from(copy, { opacity: 0, x: -35, stagger: .12, duration: .7, ease: "power3.out", scrollTrigger: { trigger: label, start: "top 88%" } });
    });

    gsap.utils.toArray<HTMLElement>(".x-section-head, .lab-heading, .about-content").forEach((block) => {
      const heading = block.querySelector("h2");
      const paragraph = block.querySelector("p");
      if (heading) gsap.from(heading, { opacity: .08, y: mobile ? 65 : 115, rotateX: mobile ? -8 : -22, scale: .92, transformOrigin: "50% 100%", duration: mobile ? .8 : 1.2, ease: "expo.out", scrollTrigger: { trigger: block, start: "top 86%" } });
      if (paragraph) gsap.from(paragraph, { opacity: 0, y: 35, duration: .75, ease: "power3.out", scrollTrigger: { trigger: block, start: "top 80%" } });
    });

    gsap.utils.toArray<HTMLElement>(".x-project").forEach((project, index) => {
      const stage = project.querySelector<HTMLElement>(".project-stage");
      const detail = project.querySelector<HTMLElement>(".project-detail");
      const mockup = project.querySelector<HTMLElement>(".project-mockup, .mock-dashboard, .mock-order, .mock-agent");
      const direction = index % 2 === 0 ? -1 : 1;
      if (stage) gsap.from(stage, { opacity: .12, x: mobile ? direction * 55 : direction * 170, y: mobile ? 55 : 90, scale: .82, rotateY: mobile ? 0 : direction * 12, transformPerspective: 1000, duration: mobile ? .85 : 1.25, ease: "expo.out", scrollTrigger: { trigger: project, start: "top 86%" } });
      if (detail) gsap.from(detail, { opacity: 0, x: mobile ? direction * -40 : direction * -120, y: 45, duration: mobile ? .75 : 1.05, ease: "power4.out", scrollTrigger: { trigger: project, start: "top 82%" } });
      if (mockup) gsap.to(mockup, { y: mobile ? -22 : -58, scale: mobile ? 1.02 : 1.06, ease: "none", scrollTrigger: { trigger: project, start: "top bottom", end: "bottom top", scrub: 1.2 } });

      if (stage && !mobile) {
        const rotateXTo = gsap.quickTo(stage, "rotationX", { duration: .45, ease: "power3.out" });
        const rotateYTo = gsap.quickTo(stage, "rotationY", { duration: .45, ease: "power3.out" });
        const onMove = (event: PointerEvent) => {
          const rect = stage.getBoundingClientRect();
          rotateYTo(((event.clientX - rect.left) / rect.width - .5) * 9);
          rotateXTo(-((event.clientY - rect.top) / rect.height - .5) * 7);
        };
        const onLeave = () => { rotateXTo(0); rotateYTo(0); };
        stage.addEventListener("pointermove", onMove);
        stage.addEventListener("pointerleave", onLeave);
        cleanups.push(() => { stage.removeEventListener("pointermove", onMove); stage.removeEventListener("pointerleave", onLeave); });
      }
    });

    gsap.from(".tech-card", { opacity: 0, y: 95, scale: .78, rotateX: -28, transformOrigin: "50% 100%", stagger: .11, duration: .85, ease: "back.out(1.45)", scrollTrigger: { trigger: ".stack-tabs", start: "top 78%" } });
    gsap.from(".lab-app", { opacity: .15, scale: .86, clipPath: "inset(0 48% 0 48% round 24px)", duration: 1.35, ease: "expo.inOut", scrollTrigger: { trigger: ".lab-app", start: "top 84%" } });
    gsap.from(".workflow-step", { opacity: 0, x: -65, stagger: .14, duration: .7, ease: "power4.out", scrollTrigger: { trigger: ".workflow", start: "top 78%" } });
    gsap.from(".identity-visual", { opacity: .15, x: mobile ? -45 : -100, rotate: mobile ? -2 : -6, scale: .88, duration: 1.15, ease: "expo.out", scrollTrigger: { trigger: ".identity-visual", start: "top 84%" } });
    gsap.from(".ui-accordion-item", { opacity: 0, x: mobile ? 45 : 110, stagger: .1, duration: .75, ease: "power4.out", scrollTrigger: { trigger: ".experience-list", start: "top 82%" } });
    gsap.from(".x-contact h2", { opacity: .12, y: 135, scale: .68, rotateX: -18, transformOrigin: "50% 100%", duration: 1.25, ease: "expo.out", scrollTrigger: { trigger: ".x-contact", start: "top 72%" } });
    gsap.from(".contact-actions .ui-button", { opacity: 0, y: 45, scale: .72, stagger: .13, duration: .7, ease: "back.out(1.7)", scrollTrigger: { trigger: ".contact-actions", start: "top 88%" } });
    gsap.to(".contact-grid-bg", { backgroundPosition: "140px -100px", scale: 1.15, ease: "none", scrollTrigger: { trigger: ".x-contact", start: "top bottom", end: "bottom bottom", scrub: 1.2 } });

    if (!mobile) gsap.to(".x-nav", { height: 64, ease: "none", scrollTrigger: { trigger: ".lab-site", start: "top top", end: "+=260", scrub: 1 } });
    ScrollTrigger.refresh();

    return () => cleanups.forEach((cleanup) => cleanup());
  }, { scope: root });

  const copyContact = async () => { await navigator.clipboard.writeText("https://www.linkedin.com/in/saul-alejos-garay/"); setCopied(true); setTimeout(() => setCopied(false), 1600); };
  const toggleTheme = () => setTheme((current) => {
    const nextTheme = current === "light" ? "dark" : "light";
    localStorage.setItem("studiowolfcode-theme", nextTheme);
    return nextTheme;
  });

  return <TooltipProvider delayDuration={200}><div className="lab-site" data-theme={theme} ref={root}>
    <div className="x-noise"/><div className="x-spotlight"/>
    <header className="x-nav"><a href="#top" className="x-logo"><WolfMark/><span>StudioWolfCode<small>FRONTEND / PRODUCT UI</small></span></a><nav className={menuOpen ? "open" : ""}>{[["Work","work"],["Expertise","expertise"],["About","about"],["Lab","lab"],["Contact","contact"]].map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}<button className="command-trigger" onClick={() => setCommandOpen(true)}><CommandIcon size={13}/> Navigate <kbd>⌘K</kbd></button></nav><div className="nav-actions"><button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={theme === "dark" ? "Use light theme" : "Use dark theme"} title={theme === "dark" ? "Light theme" : "Dark theme"}>{theme === "dark" ? <Sun/> : <Moon/>}</button><button className="x-menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button></div></header>
    <CommandPalette open={commandOpen} setOpen={setCommandOpen}/>
    <main>
      <section className="x-hero" id="top"><div className="hero-grid"/><div className="x-hero-copy"><Badge><i className="live-dot"/> OPEN TO FRONTEND / PRODUCT ENGINEERING OPPORTUNITIES</Badge><p className="hero-name">{profile.headline}</p><h1>I design products.<br/><span>I build the interface.</span></h1><p className="hero-lead">Senior Frontend Engineer working across product UI, design systems and emerging AI interfaces. I build complex SaaS and enterprise products with React, Next.js and TypeScript.</p><div className="hero-tech">{profile.stack.map(item => <span key={item}>{item}</span>)}</div><div className="hero-cta"><Button asChild><a href="#work">View projects <ArrowRight/></a></Button><Button asChild variant="outline"><a href="#about">About me <ArrowRight/></a></Button></div><div className="hero-proof"><div><strong>7+</strong><span>Years around<br/>digital products</span></div><div><strong>UI</strong><span>SaaS · ERP<br/>CRM · Dashboards</span></div><div><strong>AI</strong><span>Currently building<br/>agentic interfaces</span></div></div></div><HeroComposition/><div className="scroll-cue"><span>SCROLL TO EXPLORE</span><i/></div></section>

      <section className="x-work x-section" id="work"><SectionLabel number="01">Selected Work / Product + Engineering</SectionLabel><div className="x-section-head x-reveal"><h2>Interfaces built for<br/><span>real product complexity.</span></h2><p>Operational SaaS, commerce and agentic AI work. Every concept and prototype is labelled honestly.</p></div><div className="x-projects">{projectContent.map((project,index) => <article className={`x-project project-${index}`} key={project.id}><a href={`/work/${project.slug}`} className="project-stage"><div className="project-glow"/><ProjectMockup project={project} index={index}/><span className="project-number">0{index+1}</span></a><div className="project-detail"><div><Badge>{project.status === "in-progress" ? "currently building" : "prototype"}</Badge><span>{index === 0 ? "SAAS / OPERATIONS" : index === 1 ? "COMMERCE / MOBILE" : "AI / AGENTIC UI"}</span></div><h3><a href={`/work/${project.slug}`}>{project.title}</a></h3><p>{project.summary}</p><dl><div><dt>ROLE</dt><dd>{project.role}</dd></div><div><dt>STACK</dt><dd>{project.technologies.join(" · ")}</dd></div><div><dt>RESULT</dt><dd>{project.sections.result}</dd></div></dl><Button asChild variant="ghost"><a href={`/work/${project.slug}`}>View case study <ArrowRight/></a></Button></div></article>)}</div></section>

      <section className="x-expertise x-section" id="expertise"><SectionLabel number="02">What I Build / Four connected disciplines</SectionLabel><div className="x-section-head"><h2>Engineering first.<br/><span>Design as leverage.</span></h2><p>I work where frontend architecture, product decisions and interface systems meet.</p></div><div className="pillar-system">{buildPillars.map((pillar) => <article key={pillar.id} className="pillar-row"><span>{pillar.id}</span><h3>{pillar.title}</h3><p>{pillar.copy}</p><code>{pillar.signal}</code></article>)}</div></section>

      <section className="x-stack x-section" id="stack"><SectionLabel number="03">Skills / Capability map</SectionLabel><div className="stack-layout"><div className="x-section-head x-reveal"><Badge>CAPABILITIES.JSON</Badge><h2>A stack built<br/><span>around product.</span></h2><p>Tools matter when they produce reliable, understandable and fast product experiences. AI is presented here as an active area of applied learning.</p></div><Tabs defaultValue="frontend" className="stack-tabs x-reveal"><TabsList>{Object.keys(stackGroups).map(key => <TabsTrigger value={key} key={key}>{key}</TabsTrigger>)}</TabsList>{Object.entries(stackGroups).map(([key,items]) => <TabsContent value={key} key={key}><div className="tech-grid">{items.map((item,i) => <Tooltip key={item}><TooltipTrigger asChild><Card className="tech-card"><span>{String(i+1).padStart(2,"0")}</span>{i%3===0?<Code2/>:i%3===1?<Layers3/>:<Cpu/>}<b>{item}</b><i/></Card></TooltipTrigger><TooltipContent>{item} in a product engineering workflow</TooltipContent></Tooltip>)}</div></TabsContent>)}</Tabs></div></section>

      <section className="x-design-system x-section" id="design-system"><SectionLabel number="04">Design Systems / From foundations to product</SectionLabel><div className="system-showcase"><div className="system-copy"><Badge>LIVE COMPONENT SPECIMEN</Badge><h2>Not a list.<br/><span>A working system.</span></h2><p>Foundations become tokens, primitives and repeatable product patterns. The same architecture supports dashboards, forms, tables and AI states.</p><div className="architecture-flow">{["Foundations","Tokens","Primitives","Components","Patterns","Features"].map((item, index) => <span key={item}>{item}{index < 5 && <i>→</i>}</span>)}</div></div><Card className="component-specimen"><div className="specimen-header"><span>components / interactive states</span><Badge>v1.4</Badge></div><div className="token-strip"><i/><i/><i/><i/><code>space.04 / radius.02 / accent.500</code></div><div className="specimen-controls"><Button>Primary action</Button><Button variant="outline">Secondary</Button><Badge>ACTIVE</Badge></div><label className="specimen-input"><span>Workspace name</span><input defaultValue="Operations Suite" aria-label="Workspace name"/></label><div className="specimen-row"><span><i className="live-dot"/> Deployment ready</span><strong>Review changes</strong><small>⌘ Enter</small></div></Card></div></section>

      <AiLab/>

      <section className="x-about x-section" id="about"><SectionLabel number="06">About / A design background that ends in engineering</SectionLabel><div className="about-grid"><div className="identity-visual x-reveal"><div className="portrait-grid"/><div className="portrait-monogram">SG</div><div className="portrait-code"><code>role: <span>&quot;frontend engineer&quot;</span><br/>method: <span>&quot;product-minded&quot;</span><br/>focus: <span>&quot;systems + AI UI&quot;</span></code></div><Badge>BUENOS AIRES · UTC−3</Badge></div><div className="about-content x-reveal"><Badge>FRONTEND ENGINEERING + PRODUCT UI</Badge><h2>Design taught me<br/>how to see. <span>Engineering lets me ship.</span></h2><p className="about-lead">I am a frontend engineer with a deep Product UI background.</p><p>My path moved from graphic design to UI, product design and frontend engineering. That visual training is now leverage: I can reason about the product, define its interface system and build it in code.</p><div className="fact-grid"><div><strong>7+</strong><span>Years around products</span></div><div><strong>R / TS</strong><span>React · TypeScript</span></div><div><strong>3×</strong><span>SaaS · ERP · CRM</span></div><div><strong>AI</strong><span>Applied learning</span></div></div><div className="about-links"><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a></div></div></div></section>

      <section className="x-experience x-section" id="experience"><SectionLabel number="05">Experiencia / Trayectoria</SectionLabel><div className="experience-grid"><div className="x-section-head x-reveal"><h2>De diseño web a<br/><span>productos complejos.</span></h2><p>Una trayectoria que evoluciona desde UX/UI y desarrollo frontend hacia liderazgo de producto, sistemas de diseño y experiencias impulsadas por IA.</p></div><Accordion type="single" collapsible className="experience-list x-reveal">{experience.map((item,index) => <AccordionItem value={item.company} key={item.company}><AccordionTrigger><span>0{index+1}</span><div><b>{item.company}</b><small>{item.context}</small></div></AccordionTrigger><AccordionContent><p>{item.detail}</p><div className="accordion-tags"><Badge>PRODUCT DESIGN</Badge><Badge>FRONTEND</Badge></div></AccordionContent></AccordionItem>)}</Accordion></div></section>

      <section className="x-contact" id="contact"><div className="contact-grid-bg"/><Badge><i className="live-dot"/> OPEN TO FRONTEND, PRODUCT ENGINEERING AND AI INTERFACE WORK</Badge><h2>Let&apos;s build<br/><span>something useful.</span></h2><p>Complex product UI, a frontend engineering role, or an AI workflow worth making clear.</p><div className="contact-actions"><Button asChild><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/> Connect on LinkedIn</a></Button><Button variant="outline" onClick={copyContact}>{copied ? <Check/> : <Copy/>}{copied ? "Profile link copied" : "Copy LinkedIn"}</Button></div><div className="contact-footer"><a href="#top" className="x-logo"><WolfMark/><span>StudioWolfCode</span></a><p>Frontend Engineering · Product UI · Design Systems · AI Interfaces</p><span>© {new Date().getFullYear()} {profile.name}</span></div></section>
    </main>
  </div></TooltipProvider>;
}
