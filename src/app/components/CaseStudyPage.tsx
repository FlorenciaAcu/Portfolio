import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFAB } from "./WhatsAppFAB";
import { getProjectBySlug } from "../data/projects";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

function ImagePlaceholder({ wide = false }: { wide?: boolean }) {
  return (
    <div
      className={`w-full bg-[#E8E8ED] rounded-2xl flex items-center justify-center ${
        wide ? "aspect-[21/9]" : "aspect-[16/9]"
      }`}
    >
      <p className="text-xs text-gray-500 font-medium">Imagen pendiente</p>
    </div>
  );
}

interface Props {
  slug: string;
}

export function CaseStudyPage({ slug }: Props) {
  const project = getProjectBySlug(slug);

  const handleBack = () => {
    const returnHash = sessionStorage.getItem("caseReturnHash");
    if (returnHash) {
      sessionStorage.removeItem("caseReturnHash");
      window.location.hash = returnHash;
      setTimeout(() => window.scrollTo(0, 0), 100);
    } else {
      window.history.back();
    }
  };

  const handleBackToProjects = () => {
    window.location.hash = "#/trayectoria";
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-6 py-40 text-center">
            <p className="text-gray-600 mb-6">Proyecto no encontrado.</p>
            <button
              onClick={handleBackToProjects}
              className="text-sm font-medium text-[#351C75] hover:underline underline-offset-4"
            >
              ← Volver a proyectos
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
        {/* Hero */}
        <div className="bg-[#F5F5F7] px-[0px] py-[32px]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              {/* Back + title + tagline */}
              <div className="flex items-center gap-4 m-[0px]">
                <button
                  onClick={handleBack}
                  aria-label="Volver"
                  className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                    {project.name}
                  </h1>
                  <p className="text-sm text-gray-500 leading-relaxed mt-1">
                    {project.tagline}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="max-w-7xl mx-auto px-6 pt-8 pb-2"
        >
          <ImagePlaceholder wide />
        </motion.div>

        {/* Content sections */}
        <div className="max-w-3xl mx-auto px-6 py-10 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold text-[#351C75] uppercase tracking-widest mb-3">
              Contexto
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              {project.context}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold text-[#351C75] uppercase tracking-widest mb-3">
              Problema o reto
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              {project.challenge}
            </p>
          </motion.div>

          <ImagePlaceholder />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold text-[#351C75] uppercase tracking-widest mb-3">
              Mi rol
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              {project.role}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold text-[#351C75] uppercase tracking-widest mb-3">
              Solución
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold text-[#351C75] uppercase tracking-widest mb-5">
              Evidencia visual
            </p>
            <div className="space-y-4">
              {Array.from({ length: project.imageCount }).map((_, i) => (
                <ImagePlaceholder key={i} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
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
      </main>

      <Footer />
    </div>
  );
}
