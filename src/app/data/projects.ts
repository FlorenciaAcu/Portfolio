export interface ProjectDetail {
  slug: string;
  name: string;
  tagline: string;
  context: string;
  sector: string;
  challenge: string;
  role: string;
  description: string;
  tags: string[];
  year: string;
  imageCount: number;
}

export const projects: ProjectDetail[] = [
  {
    slug: "cemico",
    name: "CEMICO",
    tagline: "Trabajé en el diseño y la mejora de distintas plataformas digitales destinadas a pacientes, profesionales de la salud, colaboradores y auditores externos.",
    context:
      "Proyecto de consultoría en etapa temprana. El contenido completo de este caso estará disponible próximamente.",
    sector: "Industrial / B2B",
    challenge:
      "Contenido en construcción. Próximamente compartiré el detalle del problema que abordamos, el contexto y las decisiones tomadas.",
    role: "Product Designer — Consultoría independiente.",
    description:
      "Este proyecto forma parte de mi trabajo actual como consultora en productos digitales. El detalle completo del caso estará disponible próximamente.",
    tags: ["SaaS", "UX/UI", "Discovery", "Consultoría"],
    year: "2025",
    imageCount: 2,
  },
  {
    slug: "buscador-agricola",
    name: "Buscador Agrícola",
    tagline: "Marketplace multitienda para conectar productores, proveedores y profesionales del sector agropecuario chileno en un solo lugar.",
    context:
      "Buscador Agrícola es una plataforma digital chilena que nace de la necesidad de centralizar la oferta del sector agropecuario. Productores, proveedores y profesionales operaban de forma dispersa, sin un canal digital común que facilitara la búsqueda y el contacto entre ellos.",
    sector: "Agropecuario / Agtech",
    challenge:
      "Diseñar una experiencia de búsqueda que funcione para perfiles muy distintos —productores, compradores, proveedores de servicios— y que permita encontrar productos, maquinaria, servicios y terrenos con filtros especializados y búsqueda por ubicación geográfica, sin perder simplicidad.",
    role: "Product Designer. Me encargué del diseño de la experiencia de búsqueda y navegación, los flujos de contacto, los perfiles comerciales y el sistema de gestión de publicaciones y planes de suscripción.",
    description:
      "Diseñé un marketplace multitienda donde los usuarios buscan por categorías, filtros especializados y ubicación geográfica, y contactan directamente a cada empresa. Las empresas cuentan con perfiles comerciales propios, gestión de publicaciones y acceso a planes de suscripción y publicidad para aumentar su visibilidad dentro de la plataforma.",
    tags: ["Marketplace", "Agro", "Search UX", "Consultoría"],
    year: "2025",
    imageCount: 2,
  },
  {
    slug: "juan-gas-gnc",
    name: "Juan Gas GNC Club",
    tagline: "Diseñé e implementé JuanGas GNC Club, un sistema de fidelización que automatiza la gestión de puntos y permite a los clientes consultar su saldo ingresando la patente de su vehículo, integrándose con el sistema que ya utilizaba la estación.",
    context:
      "Juan Gas GNC Club es una iniciativa de fidelización de una estación de servicio de GNC. Los clientes recurrentes cargaban combustible frecuentemente pero no tenían visibilidad de los beneficios acumulados ni una forma de acceder a ellos fácilmente. La oportunidad era crear un primer producto digital que acercara esa información y fortaleciera la relación entre la estación y sus clientes.",
    sector: "Estación de servicio / GNC / Negocio local",
    challenge:
      "El negocio necesitaba una solución simple, funcional y rápida de implementar. No era el momento para una plataforma compleja: era el momento para un MVP claro que resolviera lo esencial — consultar saldo, entender beneficios y sentir que el programa tiene valor — sin fricción.",
    role: "Product Designer. Trabajé en la definición del alcance del MVP, los flujos principales, el diseño de interfaz y el prototipado para validar que fuera clara y usable por el perfil de usuarios reales.",
    description:
      "Opté por una interfaz muy simple y directa: pocas pantallas, jerarquía clara, lenguaje cercano. El saldo debía ser lo primero que el usuario ve. Los beneficios debían explicarse en lenguaje cotidiano, no técnico. La experiencia funciona bien en mobile, dado que la mayoría de los clientes accederían desde el celular.",
    tags: ["MVP", "Fidelización", "UX/UI", "Service Design"],
    year: "2025",
    imageCount: 2,
  },
  {
    slug: "juan-audagno",
    name: "AUDAGNO – Abogado",
    tagline: "Diseñé y desarrollé el sitio web de este estudio jurídico en La Plata: diseño UX, identidad visual digital, SEO local, integración con WhatsApp, formularios de consulta y herramientas de medición para fortalecer su presencia online y generar nuevas consultas.",
    context:
      "Juan Audagno es un abogado que necesitaba una presencia digital profesional para presentar sus servicios, generar confianza y facilitar el contacto con potenciales clientes. No tenía sitio web propio y su posicionamiento dependía de referencias personales.",
    sector: "Servicios legales",
    challenge:
      "Comunicar servicios legales de forma clara, accesible y confiable, sin caer en un tono frío o corporativo. Los potenciales clientes necesitan entender qué hace, cómo pueden contactarlo y sentir que están en buenas manos — todo en pocos segundos.",
    role: "Product Designer. Definí la estructura de contenido, jerarquía visual, identidad sobria y revisé el lenguaje para hacerlo profesional pero accesible.",
    description:
      "Diseñé un sitio en una sola página con scroll fluido, donde el CTA de contacto aparece en múltiples puntos estratégicos sin ser invasivo. La paleta neutra y la tipografía clara transmiten seriedad sin rigidez.",
    tags: ["Web institucional", "Legal", "Conversión", "UX/UI"],
    year: "2024",
    imageCount: 2,
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find((p) => p.slug === slug);
}
