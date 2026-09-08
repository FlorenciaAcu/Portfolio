export interface ExperienceProject {
  name: string;
  slug?: string;
  brief: string;
  tags: string[];
}

export interface Experience {
  slug: string;
  role: string;
  company: string;
  period: string;
  bio: string[];
  projects: ExperienceProject[];
}

export const experiences: Experience[] = [
  {
    slug: "consultoria",
    role: "Product Designer",
    company: "Consultoría en productos digitales",
    period: "Abril 2025 – Actualidad",
    bio: [
      "Diseño productos digitales y MVPs en etapas tempranas para clientes de España, Estados Unidos, Países Bajos y Chile, trabajando en discovery, alcance, arquitectura de información, flujos, prototipos y handoff.",
      "Además, incorporo herramientas de IA como Claude, Figma Make y Lovable para agilizar la exploración, la documentación y la creación de prototipos funcionales.",
    ],
    projects: [
      {
        name: "CEMICO",
        slug: "cemico",
        brief: "Experiencia digital para una empresa del sector industrial. Contenido completo próximamente.",
        tags: ["SaaS", "UX/UI", "Discovery"],
      },
      {
        name: "Buscador Agrícola",
        slug: "buscador-agricola",
        brief: "Plataforma de búsqueda para el sector agropecuario. Contenido completo próximamente.",
        tags: ["Plataforma", "Agro", "Search UX"],
      },
      {
        name: "Juan Gas GNC",
        slug: "juan-gas-gnc",
        brief: "MVP de fidelización para que clientes recurrentes de una estación de GNC pudieran consultar su saldo y acceder a beneficios.",
        tags: ["MVP", "Fidelización", "UX/UI"],
      },
      {
        name: "Juan Audagno",
        slug: "juan-audagno",
        brief: "Web profesional para generar confianza y facilitar el contacto de un estudio legal.",
        tags: ["Web institucional", "Legal", "Conversión"],
      },
      {
        name: "InfoCasas",
        slug: undefined,
        brief: "Proyecto para el sector real estate. Contenido en construcción.",
        tags: ["Real estate", "SaaS"],
      },
    ],
  },
  {
    slug: "cintelink",
    role: "Product Designer",
    company: "Cintelink",
    period: "Junio 2022 – Marzo 2025",
    bio: [
      "Lideré el rediseño de la plataforma Cintelink y participé en la definición de nuevas funcionalidades junto a negocio, usuarios y equipo técnico.",
      "Desarrollé su Design System y manual de voz y tono, y colaboré en soluciones con Smart Contracts para mejorar la trazabilidad y seguridad de las operaciones de combustible.",
    ],
    projects: [
      {
        name: "Plataforma SaaS · Rediseño general",
        slug: undefined,
        brief: "Rediseño integral de la plataforma de gestión y trazabilidad de operaciones de carga de combustible.",
        tags: ["SaaS", "Rediseño", "UX/UI"],
      },
      {
        name: "Dashboard Pedestal",
        slug: undefined,
        brief: "Dashboard operativo para monitoreo en tiempo real de operaciones. Contenido en construcción.",
        tags: ["Dashboard", "Data viz"],
      },
      {
        name: "App demo YPF para ferias",
        slug: undefined,
        brief: "Aplicación demostrativa para presentar las capacidades de la plataforma en contextos comerciales.",
        tags: ["Demo", "Mobile"],
      },
      {
        name: "App tablet de remitos",
        slug: undefined,
        brief: "Aplicación para gestión y firma de remitos desde tablet en operaciones de campo.",
        tags: ["Tablet", "Operaciones"],
      },
      {
        name: "Acuerdos de consumo",
        slug: undefined,
        brief: "Módulo para gestión y firma digital de acuerdos de consumo de combustible.",
        tags: ["Firma digital", "Contratos"],
      },
      {
        name: "Design System Cintelink",
        slug: undefined,
        brief: "Sistema de diseño para garantizar coherencia visual y acelerar el trabajo del equipo de producto.",
        tags: ["Design System", "Tokens", "Componentes"],
      },
    ],
  },
  {
    slug: "folcode",
    role: "UX Designer / Product Designer",
    company: "Folcode (now Bridgenext)",
    period: "Enero 2020 – Marzo 2022",
    bio: [
      "Comencé en Folcode como Pasante Scrum Master y luego evolucioné hacia UX/Product Design.",
      "Participé y lideré procesos de diseño para distintos proyectos digitales, desde el relevamiento y la definición con stakeholders hasta flujos, story maps, prototipos interactivos y soluciones de alta fidelidad.",
    ],
    projects: [
      {
        name: "Web Folcode",
        slug: undefined,
        brief: "Diseño y rediseño del sitio web institucional de Folcode. Contenido en construcción.",
        tags: ["Web institucional", "UX/UI"],
      },
      {
        name: "CloudLabs",
        slug: undefined,
        brief: "Plataforma educativa gamificada para laboratorios STEM. Contenido en construcción.",
        tags: ["EdTech", "SaaS", "UX/UI"],
      },
      {
        name: "Respública",
        slug: undefined,
        brief: "Aplicación móvil de participación ciudadana organizada. Contenido en construcción.",
        tags: ["Civic tech", "Mobile", "UX/UI"],
      },
    ],
  },
];

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}
