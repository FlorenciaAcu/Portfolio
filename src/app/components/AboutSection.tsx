import img272022Mg2698 from 'figma:asset/e4361415f2afaebac742b1dcb5a3503428927625.png';
import imgImg4648 from 'figma:asset/ff4b97b95b197cfda8fd64cc70f8fb7b69aa700c.png';
import imgImg20201002151422 from 'figma:asset/cc4430e12ef0a949da84ca883b883b1b693daba5.png';
import imgImg1941 from 'figma:asset/34b0f97347fbe56beb54a345b06d07de19f48fa4.png';
import imgImg4545 from 'figma:asset/e9bd0f901bb4795bc3ce736943475946598fa129.png';
import imgDsc9404 from 'figma:asset/fbdf5336bcd0b4a51198239f01152158008d45b8.png';
import img20180220113141 from 'figma:asset/17c70fcb2594a64d21b747998336d4a307438627.png';
import imgImg6551 from 'figma:asset/f95a2c2fc62c6f54bc7132fbd1f487e884a527a2.png';
import imgImg5297 from 'figma:asset/cbe08a395713a0bac13def6524bb22a7729bb0f7.png';
import imgImg6699 from 'figma:asset/cf27694f1fbed7498ed75b70f80f11014c9e8c3b.png';
import imgImg8281 from 'figma:asset/f76a941ee8b8b24b0a2862cfe324607550688aaf.png';
import img20170806213056 from 'figma:asset/8629f03efe7ecb985d950bba1bc56342441f8dd3.png';
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const carouselImages = [
  {
    id: 1,
    src: img272022Mg2698,
    alt: "Proceso de diseño UX/UI",
    type: "large"
  },
  {
    id: 2,
    src: imgImg4648,
    alt: "Diseño de interfaces móviles",
    type: "medium"
  },
  {
    id: 3,
    src: imgImg20201002151422,
    alt: "Design thinking y user journey",
    type: "medium"
  },
  {
    id: 4,
    src: imgImg1941,
    alt: "Wireframes y mockups",
    type: "medium"
  },
  {
    id: 5,
    src: imgImg4545,
    alt: "Testing de prototipos",
    type: "medium"
  },
  {
    id: 6,
    src: imgDsc9404,
    alt: "Design systems",
    type: "large"
  },
  {
    id: 7,
    src: img20180220113141,
    alt: "Colaboración de equipos",
    type: "large"
  },
  {
    id: 8,
    src: imgImg6551,
    alt: "Research y análisis",
    type: "medium"
  },
  {
    id: 9,
    src: imgImg5297,
    alt: "Prototipado rápido",
    type: "medium"  
  },
  {
    id: 10,
    src: imgImg6699,
    alt: "Usuario y experiencia",
    type: "medium"
  },
  {
    id: 11,
    src: imgImg8281,
    alt: "Metodologías ágiles",
    type: "medium"
  },
  {
    id: 12,
    src: img20170806213056,
    alt: "Innovación digital",
    type: "large"
  }
];

export function AboutSection() {
  const [currentImageSet, setCurrentImageSet] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Dividir las imágenes en sets de 6 para mostrar
  const imageSets = [];
  for (let i = 0; i < carouselImages.length; i += 6) {
    imageSets.push(carouselImages.slice(i, i + 6));
  }

  const nextImageSet = () => {
    setCurrentImageSet((prev) => (prev + 1) % imageSets.length);
  };

  const prevImageSet = () => {
    setCurrentImageSet((prev) => (prev - 1 + imageSets.length) % imageSets.length);
  };

  const currentImages = imageSets[currentImageSet] || [];

  return (
    <section id="sobre-mi" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Sobre mí
              </h2>
              <div className="w-20 h-1 bg-black rounded-full"></div>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Soy Product Designer apasionada por crear experiencias digitales que impacten positivamente en la vida de las personas. Tengo experiencia en diseño de interfaces, investigación de usuarios y prototipado, y disfruto transformar necesidades complejas en soluciones claras, intuitivas y elegantes.
              </p>
              
              <p>
                Me caracteriza una <span className="font-bold text-gray-900">mentalidad de aprendizaje continuo:</span> siempre estoy explorando nuevas herramientas, tendencias y metodologías que me ayuden a crecer como profesional. También participo activamente en comunidades y programas de mentoría como <span className="font-bold text-gray-900">+Mujeres en UX LATAM</span> y <span className="font-bold text-gray-900">Create.latam</span>, donde comparto conocimiento y colaboro en proyectos con impacto social.
              </p>

              <p>
                Creo en el diseño como un puente entre la empatía, la innovación y la colaboración interdisciplinaria. Para mí, el mejor diseño es aquel que se siente natural, accesible y cumple su propósito sin esfuerzo para el usuario.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Metodologias</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• UX Research</li>
                  <li>• Product Discovery</li>
                  <li>• Design Thinking</li>
                  <li>• Lean Inception</li>
                  <li>• Scrum & Kanban</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Herramientas</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Figma</li>
                  <li>• Jira, Confluence, Trello</li>
                  <li>• Maze, Clarity, Amplitude</li>
                  <li>• Whimsical</li>
                  <li>• Notion</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative" ref={containerRef}>
            <div className="space-y-4 h-[672px]">
              {/* Top row - Large image */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-[328px]">
                <img
                  src={currentImages[0]?.src}
                  alt={currentImages[0]?.alt || "Imagen del proceso de diseño"}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Bottom row - Two equal images */}
              <div className="grid grid-cols-2 gap-4 h-[328px]">
                <div className="bg-white rounded-xl overflow-hidden shadow-md">
                  <img
                    src={currentImages[1]?.src}
                    alt={currentImages[1]?.alt || "Imagen del proceso de diseño"}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white rounded-xl overflow-hidden shadow-md">
                  <img
                    src={currentImages[2]?.src}
                    alt={currentImages[2]?.alt || "Imagen del proceso de diseño"}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4">
              <Button
                onClick={prevImageSet}
                size="sm"
                variant="outline"
                className="rounded-full w-8 h-8 p-0 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white shadow-lg"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4">
              <Button
                onClick={nextImageSet}
                size="sm"
                variant="outline"
                className="rounded-full w-8 h-8 p-0 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white shadow-lg"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {imageSets.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageSet(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageSet ? 'bg-black' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}