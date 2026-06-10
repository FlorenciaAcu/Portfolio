export interface ProcessStep {
  title: string;
  description: string;
  keywords: string[];
}

export const processSteps: ProcessStep[] = [
  {
    title: "Explorar",
    description: "Entiendo contexto, usuarios, negocio, restricciones y objetivos antes de definir una solución.",
    keywords: ["Contexto", "Usuarios", "Objetivos"],
  },
  {
    title: "Ordenar",
    description: "Convierto información dispersa en flujos, arquitectura, journeys y prioridades claras.",
    keywords: ["Flujos", "Arquitectura", "Prioridades"],
  },
  {
    title: "Diseñar",
    description: "Trabajo de lo general a lo concreto: wireframes, prototipos, UI y criterios visuales.",
    keywords: ["Wireframes", "Prototipos", "UI"],
  },
  {
    title: "Validar",
    description: "Reviso feedback, trade-offs y señales de uso para decidir qué ajustar y qué sostener.",
    keywords: ["Feedback", "Trade-offs", "Decisiones"],
  },
  {
    title: "Comunicar",
    description: "Dejo criterios, estados y handoff preparados para facilitar desarrollo y próximos pasos.",
    keywords: ["Handoff", "Criterios", "Equipo"],
  },
];
