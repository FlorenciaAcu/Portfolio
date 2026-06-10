export interface Project {
  id: string;
  title: string;
  impactTitle: string;
  category: string;
  year: string;
  role: string;
  industry: string;
  productType: string;
  businessGoal: string;
  type: string;
  areas: string[];
  description: string;
  tags: string[];
  cta: "Ver caso" | "Ver resumen" | "Disponible bajo solicitud" | "Caso en preparación";
  featured?: boolean;
  url?: string;
  caseUrl?: string;
  images?: {
    hero?: string;
    items?: string[];
  };
  caseStudy?: {
    opportunity: string;
    problem: string;
    approach: string;
    decisions: string[];
    evolution: string;
    outcome: string;
  };
}

export const projects: Project[] = [
  {
    id: "cintelink",
    title: "Cintelink",
    impactTitle: "Rediseñando una plataforma SaaS para mejorar trazabilidad y claridad operativa",
    category: "SaaS de trazabilidad y operaciones",
    year: "2022 - 2025",
    role: "Product Designer",
    industry: "Energía / Operaciones / Blockchain",
    productType: "SaaS · Plataforma web",
    businessGoal:
      "Mejorar la claridad, seguridad y seguimiento de operaciones de carga de combustible.",
    type: "SaaS de trazabilidad y operaciones",
    areas: ["Product Design", "Design System", "Operaciones"],
    description:
      "Trabajé en el rediseño de experiencia, la definición de flujos, el Design System, criterios de voz y tono, validación de funcionalidades y colaboración con equipos técnicos vinculados a Smart Contracts.",
    tags: ["SaaS", "Design System", "Smart Contracts"],
    cta: "Ver caso",
    featured: true,
    url: "https://cintelink.com/views/login/",
    images: {
      hero: "/images/projects/cintelink/cintelink-hero.jpg",
      items: [
        "/images/projects/cintelink/cintelink-dashboard.jpg",
        "/images/projects/cintelink/cintelink-hardware.jpg",
        "/images/projects/cintelink/cintelink-mobile.jpg",
        "/images/projects/cintelink/cintelink-context.jpg",
      ],
    },
    caseStudy: {
      opportunity:
        "La plataforma operaba en un contexto donde la trazabilidad, la seguridad y la lectura de estados eran claves para que distintos usuarios pudieran seguir operaciones de carga de combustible.",
      problem:
        "El producto necesitaba ordenar flujos, estados e información sensible para que la experiencia acompañara mejor la operación y redujera ambigüedades en momentos de decisión.",
      approach:
        "Trabajé en el rediseño de la experiencia y en la definición de criterios visuales para unificar la plataforma. También colaboré con equipos técnicos en funcionalidades vinculadas a trazabilidad, seguridad y Smart Contracts.",
      decisions: [
        "Priorizar la lectura operativa de estados y datos críticos antes de sumar complejidad visual.",
        "Construir criterios de sistema visual para que nuevas funcionalidades no dependieran de decisiones aisladas.",
        "Acompañar la documentación de estados, mensajes y comportamientos para facilitar conversación con desarrollo.",
      ],
      evolution:
        "La solución fue evolucionando desde la revisión de flujos y pantallas existentes hacia una base más consistente para nuevas funcionalidades, con patrones más claros para lectura, acción y seguimiento.",
      outcome:
        "El trabajo dejó una base más ordenada para desarrollo, mejor consistencia visual y criterios compartidos para seguir escalando funcionalidades sin inventar patrones desde cero.",
    },
  },
  {
    id: "juan-gas-gnc",
    title: "Juan Gas GNC Club",
    impactTitle: "Un MVP de fidelización para acercar beneficios a clientes recurrentes",
    category: "MVP de fidelización",
    year: "2025",
    role: "Product Designer",
    industry: "Estación de servicio / GNC / Negocio local",
    productType: "MVP · Producto web",
    businessGoal:
      "Facilitar la consulta de saldo y beneficios para clientes recurrentes, fortaleciendo la relación entre la estación y sus usuarios.",
    type: "MVP de fidelización",
    areas: ["Product Design", "Service Design", "UX/UI"],
    description:
      "Diseñé una experiencia simple para que los clientes pudieran consultar su saldo acumulado, entender beneficios y acceder al club desde una interfaz clara y directa.",
    tags: ["MVP", "Fidelización", "UX/UI"],
    cta: "Ver caso",
    featured: true,
    images: {
      hero: "/images/projects/juan-gas-gnc/juan-gas-hero.jpg",
      items: [
        "/images/projects/juan-gas-gnc/juan-gas-mobile.jpg",
        "/images/projects/juan-gas-gnc/juan-gas-card.jpg",
      ],
    },
    caseStudy: {
      opportunity:
        "El negocio necesitaba una forma simple de acercar beneficios a clientes recurrentes y hacer más clara la consulta de información asociada al club.",
      problem:
        "La experiencia tenía que ser directa, entendible y viable para un uso cotidiano, sin convertir el MVP en un producto más complejo de lo necesario.",
      approach:
        "Diseñé una experiencia simple para que los clientes pudieran consultar su saldo y entender los beneficios disponibles sin depender de explicaciones externas.",
      decisions: [
        "Reducir el recorrido a las consultas principales para evitar fricción en un contexto de uso rápido.",
        "Usar lenguaje directo para que saldo, beneficios y próximas acciones fueran fáciles de interpretar.",
        "Dejar una estructura preparada para sumar nuevas funciones sin comprometer la primera versión.",
      ],
      evolution:
        "La solución avanzó como una base de MVP enfocada en consulta, claridad y relación con clientes, priorizando lo mínimo necesario para validar el servicio.",
      outcome:
        "El resultado es un punto de partida claro para validar el producto, comunicar beneficios y evolucionar la experiencia según aprendizaje del negocio.",
    },
  },
  {
    id: "juan-audagno",
    title: "Juan Audagno",
    impactTitle: "Una web profesional para generar confianza y consultas legales",
    category: "Web profesional para servicios legales",
    year: "2026",
    role: "Product Designer",
    industry: "Servicios legales",
    productType: "Web profesional · Landing",
    businessGoal:
      "Presentar servicios legales con claridad, construir confianza y facilitar el contacto directo de potenciales clientes.",
    type: "Web profesional para servicios legales",
    areas: ["UX/UI", "Contenido", "Conversión"],
    description:
      "Definí la estructura de contenido, jerarquía visual e identidad sobria para una web orientada a consultas profesionales.",
    tags: ["Web institucional", "Legal", "Conversión"],
    cta: "Ver caso",
    featured: true,
    images: {
      hero: "/images/projects/juan-audagno/juan-audagno-hero.jpg",
      items: [
        "/images/projects/juan-audagno/juan-audagno-desktop.jpg",
        "/images/projects/juan-audagno/juan-audagno-mobile.jpg",
      ],
    },
    caseStudy: {
      opportunity:
        "El proyecto necesitaba una presencia digital clara para presentar servicios legales de manera profesional y facilitar consultas.",
      problem:
        "El desafío era ordenar contenido, jerarquía y tono visual para transmitir confianza sin sobrecargar la página ni volverla genérica.",
      approach:
        "Definí la estructura de contenido y la jerarquía visual para presentar servicios legales con claridad y facilitar el contacto directo.",
      decisions: [
        "Priorizar claridad de servicios y contacto directo antes que una navegación extensa.",
        "Trabajar una identidad sobria que acompañara el rubro legal sin perder cercanía.",
        "Ordenar llamados a la acción en momentos naturales de decisión para reducir fricción.",
      ],
      evolution:
        "La web se estructuró como una landing profesional con foco en lectura rápida, confianza y conversión hacia consulta.",
      outcome:
        "El trabajo dejó una base clara para presentar servicios, recibir consultas y seguir ampliando contenido profesional con consistencia.",
    },
  },
  {
    id: "cloudlabs",
    title: "CloudLabs",
    impactTitle: "Ordenar navegación y recorridos en una plataforma educativa",
    category: "EdTech y plataformas educativas",
    year: "2021",
    role: "Product Designer",
    industry: "Educación / EdTech",
    productType: "Plataforma web",
    businessGoal: "Mejorar la claridad de recorridos para distintos perfiles de uso.",
    type: "EdTech",
    areas: ["Arquitectura de información", "UX/UI", "Responsive"],
    description:
      "Trabajo sobre una plataforma educativa con múltiples perfiles, enfocado en ordenar navegación, jerarquías y recorridos de uso.",
    tags: ["EdTech", "Arquitectura", "Múltiples perfiles"],
    url: "https://cloudlabslearning.com/",
    caseUrl: "https://www.behance.net/gallery/138977137/CLOUDLABS-DISENO-DE-PRODUCTO",
    cta: "Ver resumen",
  },
  {
    id: "republica",
    title: "Respública",
    impactTitle: "Diseñar participación ciudadana desde una experiencia móvil",
    category: "Participación ciudadana",
    year: "2021",
    role: "Product Designer",
    industry: "Civic tech / Participación ciudadana",
    productType: "App móvil",
    businessGoal: "Facilitar la creación de debates digitales y recorridos de participación.",
    type: "App móvil",
    areas: ["UX/UI", "Flujos", "Prototipado"],
    description:
      "Diseño de una app móvil para crear debates digitales y facilitar participación ciudadana con recorridos claros.",
    tags: ["App móvil", "Debate digital", "Diseño desde cero"],
    caseUrl: "https://www.behance.net/gallery/120346403/RESPUBLICA-DISENO-DE-PRODUCTO",
    cta: "Ver resumen",
  },
  {
    id: "cemico",
    title: "CEMICO",
    impactTitle: "Ordenar procesos administrativos en herramientas internas",
    category: "Sistemas internos e intranet",
    year: "2024",
    role: "Product Designer",
    industry: "Salud / Administración",
    productType: "Sistema interno",
    businessGoal: "Mejorar la organización de información y recorridos para usuarios administrativos.",
    type: "Sistema interno",
    areas: ["Intranet", "Auditoría", "Usuarios administrativos"],
    description:
      "Trabajo sobre herramientas internas para ordenar procesos administrativos, información y recorridos de uso.",
    tags: ["Sistemas internos", "Auditoría", "Intranet"],
    cta: "Disponible bajo solicitud",
  },
  {
    id: "verifygo",
    title: "VerifyGo",
    impactTitle: "Claridad operativa para roles, permisos y flujos de obra",
    category: "Construction tech",
    year: "2025",
    role: "Product Designer",
    industry: "Construcción / Operaciones",
    productType: "Producto operativo",
    businessGoal: "Ordenar permisos, roles y recorridos para usuarios con distintos niveles de acceso.",
    type: "Producto operativo",
    areas: ["Roles", "Permisos", "Flujos operativos"],
    description:
      "Organización de flujos operativos, roles y permisos para un producto con múltiples usuarios y criterios de acceso.",
    tags: ["Construction tech", "Roles", "Flujos operativos"],
    cta: "Disponible bajo solicitud",
  },
  {
    id: "walnuflow",
    title: "Walnuflow",
    impactTitle: "Consistencia visual para un producto no-code en evolución",
    category: "Consultoría UI y producto no-code",
    year: "2025",
    role: "UI Consultant",
    industry: "No-code / Producto digital",
    productType: "Producto FlutterFlow",
    businessGoal: "Mejorar consistencia visual y criterios de interfaz en un producto desarrollado en FlutterFlow.",
    type: "Producto FlutterFlow",
    areas: ["UI", "Consistencia visual", "Design QA"],
    description:
      "Acompañamiento sobre criterios de UI, organización visual y consistencia de patrones en un producto desarrollado en FlutterFlow.",
    tags: ["UI Consulting", "FlutterFlow", "Design QA"],
    cta: "Disponible bajo solicitud",
  },
  {
    id: "iknow",
    title: "iKnow",
    impactTitle: "Diseñar flujos de reserva, pago y feedback para un marketplace",
    category: "Marketplace y consultoría",
    year: "2025",
    role: "Product Designer",
    industry: "Marketplace / Consultoría",
    productType: "Marketplace",
    businessGoal: "Facilitar búsqueda, contratación y feedback entre clientes y expertos.",
    type: "Marketplace",
    areas: ["UX/UI", "Reserva", "Pago"],
    description:
      "Diseño de flujos para búsqueda, reserva, pago y feedback en una plataforma que conecta clientes con expertos.",
    tags: ["Marketplace", "Reserva y pago", "Flujos"],
    cta: "Caso en preparación",
  },
  {
    id: "folcode",
    title: "Folcode",
    impactTitle: "Estructurar una web B2B para comunicar servicios tecnológicos",
    category: "Web institucional B2B",
    year: "2022",
    role: "Product Designer",
    industry: "Tecnología / Servicios B2B",
    productType: "Web institucional",
    businessGoal: "Presentar servicios, casos y propuesta de valor de una empresa de tecnología.",
    type: "Web institucional",
    areas: ["Contenido", "Servicios", "Responsive"],
    description:
      "Estructura y diseño de una web institucional para presentar servicios, casos y propuesta de valor de una empresa de tecnología.",
    tags: ["Web institucional", "Contenido", "Responsive"],
    caseUrl: "https://www.behance.net/gallery/154113155/Web-Folcode-Diseno-de-producto",
    cta: "Ver resumen",
  },
];

export const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

export const projectGroups = [
  {
    label: "SaaS y plataformas",
    ids: ["cintelink", "cloudlabs", "verifygo"],
  },
  {
    label: "MVPs y productos digitales",
    ids: ["juan-gas-gnc", "iknow", "republica", "walnuflow"],
  },
  {
    label: "Webs profesionales",
    ids: ["juan-audagno", "folcode"],
  },
  {
    label: "Sistemas internos",
    ids: ["cemico"],
  },
];
