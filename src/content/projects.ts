import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "operations-suite", slug: "operations-suite", title: "Operations Suite",
    summary: "Un espacio de operaciones modular para gestionar clientes, facturación y flujos de equipo sin perder el contexto.",
    context: "Concepto de caso de estudio basado en experiencia con interfaces de productos SaaS, ERP y CRM.",
    role: "Frontend / Product Engineer", status: "prototype", coverImage: "/projects/operations-suite.svg",
    technologies: ["React", "TypeScript", "Sistemas de diseño"], capabilities: ["Arquitectura UI", "Interfaces con alta densidad de datos", "Componentes reutilizables"], featured: true, order: 1,
    sections: {
      problem: "Los equipos operativos suelen alternar entre vistas desconectadas de clientes, facturación y tareas, perdiendo contexto durante el proceso.",
      productThinking: "El espacio se organiza alrededor de decisiones y flujos recurrentes, en lugar de agrupar pantallas sin relación.",
      uiArchitecture: "Una estructura compartida, componentes reutilizables para mostrar datos y patrones coherentes de formularios hacen predecibles los flujos complejos.",
      technicalApproach: "El concepto utiliza modelos de dominio tipados, componentes React componibles y un sistema de interfaz basado en tokens.",
      challenges: "La información densa debe seguir siendo legible en escritorio y pantallas pequeñas sin ocultar estados importantes.",
      solution: "La divulgación progresiva, una jerarquía clara en tablas y acciones contextuales reducen el ruido visual sin perder control.",
      result: "Es un concepto ilustrativo para portfolio. No se atribuyen métricas de producción.",
      nextIteration: "Validar el modelo de información con equipos operativos reales y probar grandes volúmenes de datos y estados de permisos."
    }
  },
  {
    id: "orderflow", slug: "orderflow", title: "Orderflow",
    summary: "Un flujo de pedidos mediante QR diseñado para que explorar el menú, personalizar y pagar resulte natural.",
    context: "Concepto de comercio de StudioWolfCode reinterpretado como un producto completo de pedidos digitales.",
    role: "Producto, UI y Frontend", status: "prototype", coverImage: "/projects/orderflow.svg",
    technologies: ["Next.js", "Diseño de producto", "Comercio"], capabilities: ["UI responsive", "Flujos de pedidos", "Pensamiento de producto"], featured: true, order: 2,
    sections: {
      problem: "Los pequeños negocios gastronómicos necesitan una experiencia de pedido rápida, sin obligar al cliente a crear una cuenta o instalar una aplicación.",
      productThinking: "El recorrido prioriza la comprensión del menú, una personalización transparente y la confianza antes de pagar.",
      uiArchitecture: "El menú, los modificadores, el carrito y el estado del pedido se modelan como estados independientes pero coordinados.",
      technicalApproach: "Un frontend con Next.js puede servir un menú estático rápido y mantener las integraciones y el estado del pedido detrás de una capa de repositorios.",
      challenges: "Los menús tienen disponibilidad, modificadores y reglas de precios variables, mientras la interfaz debe seguir siendo sencilla en un teléfono.",
      solution: "Un flujo mobile-first presenta las opciones progresivamente y mantiene totales y validaciones visibles en cada decisión.",
      result: "El caso se presenta como prototipo de producto; los resultados de producción requieren validación.",
      nextIteration: "Conectar un catálogo real, un proveedor de pagos y el flujo de cocina, y después probarlo con comercios y clientes."
    }
  },
  {
    id: "relay-ai", slug: "relay-ai", title: "Relay IA",
    summary: "Un concepto de operaciones asistidas por IA con herramientas visibles, confirmación humana y acciones recuperables.",
    context: "Proyecto estratégico de aprendizaje que explora interfaces agénticas útiles más allá de un chatbot genérico.",
    role: "Prototipo de Producto y Frontend", year: 2026, status: "in-progress", coverImage: "/projects/relay-ai.svg",
    technologies: ["Interfaces LLM", "Tool Calling", "UI agéntica"], capabilities: ["Humano en el circuito", "Trazabilidad de acciones", "Recuperación de errores"], featured: true, order: 3,
    sections: {
      problem: "Los asistentes con IA pueden proponer y ejecutar trabajo útil, pero las acciones opacas dificultan la confianza en contextos operativos.",
      productThinking: "Relay separa planificación, uso de herramientas y ejecución, y exige aprobación humana explícita para acciones importantes.",
      uiArchitecture: "La interfaz presenta el plan, progreso en streaming, herramientas, evidencias, permisos y recuperación como componentes principales.",
      technicalApproach: "El prototipo está pensado para un cliente Next.js con una pasarela de modelos en servidor y contratos de herramientas tipados.",
      challenges: "El sistema debe comunicar incertidumbre y fallos parciales sin abrumar al usuario con detalles internos.",
      solution: "Los estados progresivos y puntos de revisión mantienen a la persona orientada y en control.",
      result: "Es un proyecto de especialización en desarrollo y no representa años de experiencia profesional en IA.",
      nextIteration: "Implementar un flujo real y acotado, añadir trazas de evaluación y probar escenarios de permisos y fallos."
    }
  }
];
