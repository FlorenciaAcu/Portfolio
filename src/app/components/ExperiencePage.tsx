import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFAB } from "./WhatsAppFAB";
import { getExperienceBySlug } from "../data/experiences";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

interface Props {
  slug: string;
}

export function ExperiencePage({ slug }: Props) {
  const experience = getExperienceBySlug(slug);

  const handleBack = () => {
    window.location.hash = "#/experiencia";
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  const navigateToCase = (caseSlug: string) => {
    sessionStorage.setItem("caseReturnHash", `/proyectos/${slug}`);
    window.location.hash = `#/caso/${caseSlug}`;
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  if (!experience) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-6 py-40 text-center">
            <p className="text-gray-600 mb-6">Experiencia no encontrada.</p>
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#351C75] hover:underline underline-offset-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppFAB />

      <main className="px-[0px] pt-[64px] pb-[0px]">

        {/* Page header */}
        <div className="bg-[#F5F5F7] px-[0px] py-[24px]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              {/* Back + title + role */}
              <div className="flex items-center gap-4 mb-6">
                <button
                  onClick={handleBack}
                  aria-label="Volver a experiencia"
                  className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                    {experience.company}
                  </h1>
                  
                </div>
              </div>

              {/* Bio — full width */}
              <div className="space-y-4">
                {experience.bio.map((line, i) => (
                  <p key={i} className="text-gray-600 text-base leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Projects */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-gray-900 tracking-tight mb-8"
          >
            Proyectos en los que participé
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {experience.projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="bg-[#F5F5F7] rounded-3xl p-7 flex flex-col gap-4"
              >
                <h3 className="text-base font-bold text-gray-900">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  {project.brief}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-500 bg-white px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.slug && (
                  <button
                    onClick={() => navigateToCase(project.slug!)}
                    className="self-start text-sm font-semibold text-[#351C75] hover:underline underline-offset-4 transition-all mt-1"
                  >
                    Ver detalle →
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA — solo Cintelink */}
        {slug === "cintelink" && (
          <div className="bg-[#F5F5F7] py-12">
            <div className="max-w-3xl mx-auto px-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                ¿Estás construyendo o mejorando un producto digital?
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Puedo ayudarte a transformar una idea, necesidad o flujo en una experiencia clara, usable y lista para probar, validar o avanzar hacia desarrollo.
              </p>
              <a
                href="mailto:contact@florenciaux.com"
                className="inline-flex items-center gap-2 bg-[#351C75] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#2a1660] hover:shadow-[0_4px_20px_rgba(53,28,117,0.35)] hover:-translate-y-0.5 transition-all duration-200"
              >
                Contactarme
              </a>
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
