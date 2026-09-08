import { motion } from "motion/react";
import { Mail, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contacto" className="py-32 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              ¿Estás construyendo o mejorando un producto digital?
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-14 max-w-xl">
              Puedo ayudarte a transformar una idea, necesidad o flujo en una experiencia clara, usable y lista para probar, validar o avanzar hacia desarrollo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="mailto:contact@florenciaux.com"
              className="inline-flex items-center gap-2 bg-[#351C75] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#2a1660] transition-colors duration-200"
            >
              Contactarme
            </a>
            <a
              href="https://docs.google.com/document/d/1O70FGTcqo2q0tnwgErOQUlcODUc8LEDuZI0w3G4l9do/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-gray-800 px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#E8E8ED] transition-colors duration-200"
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
              <span className="text-sm">Respondo en 24&#8211;48 hs.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
