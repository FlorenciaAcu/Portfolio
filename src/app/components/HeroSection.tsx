import { motion } from "motion/react";

const metrics = [
  { value: "+5", label: "años de experiencia" },
  { value: "+15", label: "proyectos digitales" },
  { value: "+6", label: "industrias" },
];

export function HeroSection() {
  const handleVerProyectos = () => {
    const el = document.getElementById("proyectos");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 bg-white overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col gap-8 max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 bg-[#F5F5F7] rounded-full px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Disponible para proyectos
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight"
          >
            Diseño productos digitales{" "}
            <span className="relative inline-block">
              que funcionan.
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] bg-[#351C75] rounded-full block"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.95, ease: "easeOut" }}
                style={{ transformOrigin: "left", width: "100%" }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="text-gray-500 text-lg leading-relaxed"
          >
            Diseño productos digitales e incorporo IA en distintas etapas del proceso para explorar alternativas, prototipar y validar soluciones de forma más ágil.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={handleVerProyectos}
              className="inline-flex items-center gap-2 bg-[#351C75] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#2a1660] hover:shadow-[0_4px_20px_rgba(53,28,117,0.35)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Ver proyectos
            </button>
            <a
              href="https://docs.google.com/document/d/1O70FGTcqo2q0tnwgErOQUlcODUc8LEDuZI0w3G4l9do/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-300 bg-white text-gray-800 px-7 py-3.5 rounded-full text-sm font-semibold hover:border-[#C4B5E8] hover:bg-[#F3F0FA] transition-colors duration-200"
            >
              Ver CV
            </a>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {metrics.map((m, i) => (
              <>
                {i > 0 && (
                  <span key={`dot-${i}`} className="text-gray-300 select-none hidden sm:inline">·</span>
                )}
                <span key={m.value} className="text-sm text-gray-500">
                  <span className="font-bold text-gray-900">{m.value}</span>{" "}{m.label}
                </span>
              </>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
