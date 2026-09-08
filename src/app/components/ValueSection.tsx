import { motion } from "motion/react";
import { Mail, Clock } from "lucide-react";

const items = [
  {
    number: "01",
    title: "Producto SaaS",
    description:
      "Plataformas, dashboards y productos digitales que necesitan claridad operativa, consistencia visual y criterios de diseño escalables.",
  },
  {
    number: "02",
    title: "MVPs y primeras versiones",
    description:
      "Experiencias digitales para transformar una oportunidad de negocio en una primera versión clara, usable y funcional.",
  },
  {
    number: "03",
    title: "Webs profesionales",
    description:
      "Sitios y landing pages orientados a comunicar servicios, construir confianza y facilitar el contacto.",
  },
  {
    number: "04",
    title: "Sistemas internos",
    description:
      "Herramientas para equipos, procesos operativos y usuarios internos que necesitan mejorar tareas, permisos, información y recorridos.",
  },
  {
    number: "05",
    title: "IA aplicada al producto",
    description:
      "Uso de herramientas de IA para explorar, prototipar, construir y documentar más rápido, sin perder criterio de producto ni viabilidad técnica.",
  },
];

export function ValueSection() {
  return (
    <section id="servicios" className="py-12 lg:py-20 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-5"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">Dónde puedo aportar valor</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-gray-500 leading-relaxed mb-8 lg:mb-10"
        >
          Trabajo en productos digitales que necesitan mejorar su experiencia, definir mejor sus flujos o transformar una idea en una solución clara, usable y funcional.
        </motion.p>

        {/* Mini cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 lg:mb-12">
          {items.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="bg-white rounded-2xl p-6 flex flex-col gap-3"
            >
              <span className="text-xs font-semibold tracking-widest text-[#351C75] uppercase">
                {item.number}
              </span>
              <h3 className="text-base font-bold text-gray-900 tracking-tight">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-8 lg:mb-12" />

        {/* Contact CTA */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              ¿Estás construyendo o mejorando un producto digital?
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              Puedo ayudarte a transformar una idea, necesidad o flujo en una experiencia clara, usable y lista para probar, validar o avanzar hacia desarrollo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-4 mb-6 lg:mb-8"
          >
            <a
              href="mailto:contact@florenciaux.com"
              className="inline-flex items-center gap-2 bg-[#351C75] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#2a1660] hover:shadow-[0_4px_20px_rgba(53,28,117,0.35)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Contactarme
            </a>
            <a
              href="https://docs.google.com/document/d/1O70FGTcqo2q0tnwgErOQUlcODUc8LEDuZI0w3G4l9do/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-300 bg-white text-gray-800 px-7 py-3.5 rounded-full text-sm font-semibold hover:border-[#C4B5E8] hover:bg-[#F3F0FA] transition-colors duration-200"
            >
              Ver CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            <div className="flex items-center gap-2 text-gray-500">
              <Mail className="w-4 h-4 text-[#351C75] shrink-0" />
              <a
                href="mailto:contact@florenciaux.com"
                className="text-sm hover:text-gray-900 transition-colors hover:underline underline-offset-4"
              >
                contact@florenciaux.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Clock className="w-4 h-4 shrink-0" />
              <span className="text-sm">Respondo en 24–48 hs.</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
