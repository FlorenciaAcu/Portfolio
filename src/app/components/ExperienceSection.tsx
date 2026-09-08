import { motion } from "motion/react";
import { experiences } from "../data/experiences";
import { ArrowRight } from "lucide-react";

function extractYears(period: string): string {
  const parts = period.split("–").map((s) => s.trim());
  const startYear = parts[0].split(" ").pop() ?? "";
  const end = parts[1] ?? "";
  const endYear = end === "Actualidad" ? "Hoy" : end.split(" ").pop() ?? end;
  return `${startYear} – ${endYear}`;
}

export function ExperienceSection() {
  const navigateTo = (slug: string) => {
    window.location.hash = `#/proyectos/${slug}`;
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  return (
    <section id="experiencia" className="py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-5"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Experiencia
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-gray-500 leading-relaxed mb-8 lg:mb-12"
        >
          Más de cinco años trabajando en equipos de producto, consultando con clientes de distintas industrias y construyendo desde el problema hasta la solución.
        </motion.p>

        <div className="divide-y divide-gray-100">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              onClick={() => navigateTo(exp.slug)}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 -mx-3 rounded-xl cursor-pointer transition-colors duration-150 hover:bg-[#F3F0FA] px-[24px] py-[32px]"
            >
              <div className="shrink-0 w-20 pt-1">
                <span className="text-xs font-semibold text-gray-400 tracking-wide tabular-nums">
                  {extractYears(exp.period)}
                </span>
              </div>
              <div className="shrink-0 w-48">
                <h3 className="text-base font-semibold text-gray-900 mb-0.5">{exp.company}</h3>
                
              </div>
              <div className="flex-1 min-w-0">
                <div className="space-y-2">
                  {exp.bio.map((line, idx) => (
                    <p key={idx} className="text-gray-500 text-sm leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
              <div className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 group-hover:text-gray-900 group-hover:border-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-200">
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
