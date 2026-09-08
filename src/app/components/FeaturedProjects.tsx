import { motion } from "motion/react";

interface Project {
  slug: string;
  title: string;
  tagline: string;
  sector: string;
  type: string;
  description: string;
  tags: string[];
  route: string;
}

const mainProject: Project = {
  slug: "cintelink",
  title: "Cintelink",
  tagline: "Rediseñando una plataforma SaaS para mejorar trazabilidad y claridad operativa",
  sector: "Energía / Operaciones / Blockchain",
  type: "SaaS · Plataforma web",
  description:
    "Lideré el rediseño de experiencia, definición de flujos, Design System, criterios de voz y tono, y validación de funcionalidades durante casi 3 años.",
  tags: ["SaaS", "Design System", "Smart Contracts"],
  route: "#/proyectos/cintelink",
};

const secondaryProjects: Project[] = [
  {
    slug: "cemico",
    title: "CEMICO",
    tagline: "Diseño de experiencia para plataformas de salud",
    sector: "Industrial / B2B",
    type: "SaaS · Consultoría",
    description:
      "Trabajé en el diseño y mejora de plataformas digitales para pacientes, profesionales de la salud, colaboradores y auditores externos.",
    tags: ["SaaS", "UX/UI", "Discovery"],
    route: "#/caso/cemico",
  },
  {
    slug: "buscador-agricola",
    title: "Buscador Agrícola",
    tagline: "Marketplace agropecuario chileno",
    sector: "Agropecuario / Agtech",
    type: "Marketplace · Consultoría",
    description:
      "Plataforma que conecta productores, proveedores y profesionales del agro. Búsqueda por categorías, filtros y ubicación geográfica, con perfiles comerciales y planes de suscripción.",
    tags: ["Marketplace", "Agro", "Search UX"],
    route: "#/caso/buscador-agricola",
  },
  {
    slug: "juan-gas-gnc",
    title: "Juan Gas GNC Club",
    tagline: "MVP de fidelización para clientes recurrentes",
    sector: "Estación de servicio / GNC",
    type: "MVP · Producto web",
    description:
      "Sistema de fidelización donde los clientes consultan saldo y beneficios ingresando la patente. Pocas pantallas, jerarquía clara, lenguaje cercano.",
    tags: ["MVP", "Fidelización", "UX/UI"],
    route: "#/caso/juan-gas-gnc",
  },
];

function ImagePlaceholder({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-[#E8E8ED] flex items-center justify-center ${className}`}>
      <p className="text-xs text-gray-500 font-medium">Imagen pendiente</p>
    </div>
  );
}

export function FeaturedProjects() {
  const navigate = (route: string) => {
    sessionStorage.setItem("caseReturnHash", "/proyectos");
    window.location.hash = route.replace("#", "");
    setTimeout(() => window.scrollTo(0, 0), 100);
  };


  return (
    <section id="proyectos" className="py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-5"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">Proyectos destacados</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-gray-500 leading-relaxed mb-8 lg:mb-12"
        >
          Una selección de proyectos que muestran cómo abordo distintos problemas de producto y las decisiones de diseño detrás de cada solución.
        </motion.p>

        {/* Main project — Cintelink */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="bg-[#F5F5F7] rounded-3xl overflow-hidden mb-4 cursor-pointer group"
          onClick={() => navigate(mainProject.route)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <ImagePlaceholder className="aspect-[4/3] lg:aspect-auto min-h-72" />
            <div className="p-7 lg:p-14 flex flex-col justify-center gap-5">
              
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-snug tracking-tight">
                {mainProject.tagline}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {mainProject.description}
              </p>
              
              <span className="self-start text-sm font-semibold text-[#351C75] group-hover:underline underline-offset-4 transition-all">
                Ver caso →
              </span>
            </div>
          </div>
        </motion.div>

        {/* 3 secondary projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {secondaryProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#F5F5F7] rounded-3xl overflow-hidden flex flex-col cursor-pointer group"
              onClick={() => navigate(project.route)}
            >
              <ImagePlaceholder className="aspect-[4/3]" />
              <div className="p-7 flex flex-col gap-3 flex-1">
                
                <h3 className="text-lg font-bold text-gray-900 leading-snug tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <span className="self-start text-sm font-semibold text-[#351C75] group-hover:underline underline-offset-4 transition-all mt-auto pt-2">
                  Ver caso →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
