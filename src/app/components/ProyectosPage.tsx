import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFAB } from "./WhatsAppFAB";
import { experiences } from "../data/experiences";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function ProyectosPage() {
  const handleBack = () => {
    window.location.hash = "#/";
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  const navigateTo = (slug: string) => {
    window.location.hash = `/proyectos/${slug}`;
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppFAB />

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-xs font-semibold text-[#351C75] uppercase tracking-widest mb-4">
              Trayectoria
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Proyectos
            </h1>
            <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
              Experiencias de trabajo donde acompañé equipos y fundadores en la construcción de productos digitales desde distintos roles.
            </p>
          </motion.div>

          <div className="mt-16 space-y-4">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#F5F5F7] rounded-3xl p-8 lg:p-10 cursor-pointer group hover:bg-[#EBEBED] transition-colors duration-200"
                onClick={() => navigateTo(exp.slug)}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-gray-500 tracking-wide mb-2">
                      {exp.period}
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1 tracking-tight">
                      {exp.company}
                    </h2>
                    <p className="text-sm font-semibold text-[#351C75] mb-5">
                      {exp.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                      {exp.bio[0]}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {exp.projects.map((p) => (
                        <span
                          key={p.name}
                          className="text-xs text-gray-500 bg-white px-2.5 py-1 rounded-full"
                        >
                          {p.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:flex-shrink-0 lg:pt-1">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#351C75] group-hover:gap-3 transition-all duration-200">
                      Ver proyectos
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={handleBack}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              ← Volver al inicio
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
