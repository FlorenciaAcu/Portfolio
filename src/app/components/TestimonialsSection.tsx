import { motion } from "motion/react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Testimonio pendiente — próximamente.",
    name: "Nombre",
    role: "Rol",
    company: "Empresa",
  },
  {
    quote: "Testimonio pendiente — próximamente.",
    name: "Nombre",
    role: "Rol",
    company: "Empresa",
  },
  {
    quote: "Testimonio pendiente — próximamente.",
    name: "Nombre",
    role: "Rol",
    company: "Empresa",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-5"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Lo que dicen.
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-gray-500 mb-20 max-w-xl"
        >
          De quienes trabajaron conmigo.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#F5F5F7] rounded-3xl p-8 flex flex-col gap-6"
            >
              <svg width="24" height="18" viewBox="0 0 24 18" fill="none" className="shrink-0 text-[#351C75] opacity-30">
                <path d="M0 18V10.8C0 7.8 0.7 5.3 2.1 3.3C3.5 1.1 5.6 0 8.4 0L9.6 2.1C8 2.5 6.7 3.4 5.7 4.8C4.9 6 4.5 7.3 4.5 8.7H9V18H0ZM13.5 18V10.8C13.5 7.8 14.2 5.3 15.6 3.3C17 1.1 19.1 0 21.9 0L23.1 2.1C21.5 2.5 20.2 3.4 19.2 4.8C18.4 6 18 7.3 18 8.7H22.5V18H13.5Z" fill="currentColor" />
              </svg>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">"{t.quote}"</p>
              <div className="border-t border-gray-200 pt-5">
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{t.role} · {t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
