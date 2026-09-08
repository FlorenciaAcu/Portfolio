import photo1 from '../../imports/27-2022-_MG_2698.jpg';
import photo2 from '../../imports/IMG_2293.jpeg';
import photo3 from '../../imports/DSC_9399.JPG';
import photo4 from '../../imports/IMG_8281.jpeg';
import { motion } from 'motion/react';

const photos = [
  { src: photo1, alt: "Demo de app en evento", position: "object-center" },
  { src: photo2, alt: "Florencia en su graduación universitaria", position: "object-center" },
  { src: photo3, alt: "Trabajando con el equipo al aire libre", position: "object-top" },
  { src: photo4, alt: "Reunión remota con el equipo", position: "object-center" },
];

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-12 lg:py-20 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Text column */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight"
            >
              Sobre mí
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-5 text-gray-500 text-base leading-relaxed"
            >
              <p>
                Product Designer con más de 5 años de experiencia en productos digitales, plataformas web, SaaS y MVPs. Trabajo desde la investigación y definición del problema hasta el diseño de flujos, interfaces y prototipos funcionales.
              </p>
              <p>
                Me enfoco en transformar necesidades complejas en soluciones claras, usables y accionables, colaborando con equipos de producto, negocio y tecnología.
              </p>
              <p>
                Uso herramientas de IA —Claude, Figma Make, Lovable— para explorar, prototipar y construir primeras versiones más rápido, sin perder criterio de producto ni viabilidad técnica.
              </p>
            </motion.div>
          </div>

          {/* 2×2 photo grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="grid grid-cols-2 gap-2.5"
          >
            {photos.map((photo, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden bg-gray-200">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className={`w-full h-full object-cover ${photo.position}`}
                  loading="eager"
                  decoding="async"
                />
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
