export interface CaseSection {
  title: string;
  content: string;
  hasImage?: boolean;
}

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  type: string;
  industry: string;
  year: string;
  tags: string[];
  sections: CaseSection[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "cintelink",
    title: "Cintelink",
    tagline: "Rediseñando una plataforma SaaS para mejorar trazabilidad y claridad operativa",
    type: "SaaS · Plataforma web",
    industry: "Energía / Operaciones / Blockchain",
    year: "2022 – 2025",
    tags: ["SaaS", "Design System", "Smart Contracts", "Rediseño de producto"],
    sections: [
      {
        title: "Dónde estaba la oportunidad",
        content:
          "Cintelink es una plataforma SaaS orientada a la gestión y trazabilidad de operaciones de carga de combustible. Cuando me sumé al proyecto, la plataforma tenía funcionalidades clave pero con una experiencia fragmentada: flujos poco claros, inconsistencias visuales y dificultades para escalar sin perder coherencia. La oportunidad estaba en construir una base de diseño sólida que acompañara el crecimiento del producto.",
        hasImage: true,
      },
      {
        title: "Qué necesitaba resolverse",
        content:
          "El principal desafío era mejorar la claridad operativa de la plataforma: los usuarios necesitaban entender rápidamente el estado de cada operación, actuar con confianza sobre los flujos y confiar en la información que mostraba el sistema. Además, el equipo técnico requería criterios de diseño documentados para avanzar sin generar inconsistencias.",
        hasImage: false,
      },
      {
        title: "Cómo lo abordé",
        content:
          "Empecé por entender los flujos existentes y los puntos de fricción principales, trabajando junto al equipo de producto y tecnología. A partir de eso, rediseñé la experiencia de las secciones críticas, definí la arquitectura de información y establecí los fundamentos del Design System. También trabajé en criterios de voz y tono, y colaboré con el equipo vinculado a Smart Contracts para integrar nuevas funcionalidades sin romper la experiencia existente.",
        hasImage: true,
      },
      {
        title: "Decisiones clave de diseño",
        content:
          "Prioricé la claridad sobre la completitud: cada pantalla debía responder una pregunta concreta del usuario sin sobrecargar de información. Definí componentes reutilizables con estados claros (cargando, vacío, error, éxito) para mantener consistencia en toda la plataforma. También decidí documentar las decisiones de diseño en paralelo al desarrollo para que el equipo pudiera avanzar de forma autónoma.",
        hasImage: true,
      },
      {
        title: "Cómo evolucionó la solución",
        content:
          "El proyecto evolucionó iterativamente: validamos funcionalidades con usuarios reales, ajustamos flujos a partir del feedback y fuimos expandiendo el Design System a medida que la plataforma crecía. La incorporación de blockchain para trazabilidad requirió un trabajo especial de simplificación conceptual para que los usuarios operativos pudieran usar las funciones sin necesitar entender la tecnología subyacente.",
        hasImage: true,
      },
      {
        title: "Resultado, impacto o próximos pasos",
        content:
          "La plataforma logró mayor consistencia visual y operativa, con flujos más claros y un Design System que el equipo puede mantener y escalar. El trabajo continúa: hay nuevas funcionalidades en roadmap que seguirán construyéndose sobre la base establecida.",
        hasImage: false,
      },
    ],
  },
  {
    slug: "juan-gas-gnc-club",
    title: "Juan Gas GNC Club",
    tagline: "Un MVP de fidelización para acercar beneficios a clientes recurrentes",
    type: "MVP · Producto web",
    industry: "Estación de servicio / GNC / Negocio local",
    year: "2025",
    tags: ["MVP", "Fidelización", "UX/UI", "Service Design"],
    sections: [
      {
        title: "Dónde estaba la oportunidad",
        content:
          "Juan Gas GNC Club es una iniciativa de fidelización de una estación de servicio de GNC. Los clientes recurrentes cargaban combustible frecuentemente pero no tenían visibilidad de los beneficios acumulados ni una forma de acceder a ellos fácilmente. La oportunidad era crear un primer producto digital que acercara esa información y fortaleciera la relación entre la estación y sus clientes.",
        hasImage: true,
      },
      {
        title: "Qué necesitaba resolverse",
        content:
          "El negocio necesitaba una solución simple, funcional y rápida de implementar. No era el momento para una plataforma compleja: era el momento para un MVP claro que resolviera lo esencial — consultar saldo, entender beneficios y sentir que el programa tiene valor — sin fricción.",
        hasImage: false,
      },
      {
        title: "Cómo lo abordé",
        content:
          "Trabajé desde la definición del alcance del MVP: qué funciones eran imprescindibles para el lanzamiento y cuáles podían quedar para una segunda versión. Definí los flujos principales, diseñé la interfaz y prototipé la experiencia para validar que fuera clara y usable por el perfil de usuarios reales de la estación.",
        hasImage: true,
      },
      {
        title: "Decisiones clave de diseño",
        content:
          "Opté por una interfaz muy simple y directa: pocas pantallas, jerarquía clara, lenguaje cercano. El saldo debía ser lo primero que el usuario ve. Los beneficios debían explicarse en lenguaje cotidiano, no técnico. También decidí que la experiencia funcionara bien en mobile, dado que la mayoría de los clientes accederían desde el celular.",
        hasImage: true,
      },
      {
        title: "Resultado, impacto o próximos pasos",
        content:
          "El MVP quedó listo para ser implementado como una primera versión funcional. El foco en simplicidad permitió avanzar rápido sin perder criterio de producto. Los próximos pasos incluyen validar con usuarios reales, medir adopción y definir qué funcionalidades incorporar en la siguiente iteración.",
        hasImage: false,
      },
    ],
  },
  {
    slug: "juan-audagno",
    title: "Juan Audagno",
    tagline: "Una web profesional para generar confianza y consultas legales",
    type: "Web profesional · Landing",
    industry: "Servicios legales",
    year: "2024",
    tags: ["Web institucional", "Legal", "Conversión", "UX/UI"],
    sections: [
      {
        title: "Dónde estaba la oportunidad",
        content:
          "Juan Audagno es un abogado que necesitaba una presencia digital profesional para presentar sus servicios, generar confianza y facilitar el contacto con potenciales clientes. No tenía sitio web propio, y su posicionamiento dependía de referencias personales. La oportunidad era construir una web que comunicara su perfil con claridad y sobriedad.",
        hasImage: true,
      },
      {
        title: "Qué necesitaba resolverse",
        content:
          "El desafío principal era comunicar servicios legales de forma clara, accesible y confiable, sin caer en un tono frío o corporativo. Los potenciales clientes necesitan entender qué hace, cómo pueden contactarlo y sentir que están en buenas manos — todo eso en pocos segundos.",
        hasImage: false,
      },
      {
        title: "Cómo lo abordé",
        content:
          "Definí la estructura de contenido antes de diseñar: qué información era prioritaria, en qué orden presentarla y qué tono usar. Organicé el sitio en secciones claras: quién es, qué servicios ofrece, cómo contactarlo. Diseñé una identidad visual sobria, con tipografía clara y paleta neutra que transmitiera seriedad sin rigidez.",
        hasImage: true,
      },
      {
        title: "Decisiones clave de diseño",
        content:
          "Decidí mantener el sitio en una sola página con scroll, para que la experiencia sea fluida y el usuario no se pierda navegando. El CTA de contacto aparece en múltiples puntos estratégicos sin ser invasivo. El lenguaje fue revisado para ser profesional pero accesible, pensando en un usuario que no necesariamente conoce términos legales.",
        hasImage: true,
      },
      {
        title: "Resultado, impacto o próximos pasos",
        content:
          "El sitio logró comunicar el perfil profesional con claridad y coherencia visual. Funciona como punto de contacto directo para potenciales clientes. Los próximos pasos incluyen incorporar casos o áreas de especialización más detalladas y optimizar el SEO para búsquedas locales.",
        hasImage: false,
      },
    ],
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
