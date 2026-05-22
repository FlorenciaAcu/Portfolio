import image_617ba5a5563ad35c7af2c6204f94fe09441d404e from 'figma:asset/617ba5a5563ad35c7af2c6204f94fe09441d404e.png';
import image_a8a6f0a610a7aec2f68a70d96ea5a3530fcd5787 from 'figma:asset/a8a6f0a610a7aec2f68a70d96ea5a3530fcd5787.png';
import image_6c02e30bc9859770bdc588067edcbbbc508e2dab from 'figma:asset/6c02e30bc9859770bdc588067edcbbbc508e2dab.png';
// High quality images for featured projects
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Project {
  id: string;
  title: string;
  year: string;
  challenge: string;
  solution: string;
  image: string;
  tags: string[];
  behanceUrl?: string;
  figmaUrl?: string;
  disabled?: boolean;
  url?: string;
}

const featuredProjects: Project[] = [
  {
    id: "1",
    title: "Cintelink",
    year: "2022 - 2025",
    challenge: "la plataforma necesitaba evolucionar para ofrecer mayor trazabilidad y seguridad en las operaciones de carga de combustible.",
    solution: "Lideré el rediseño de la experiencia, validando nuevas funciones con usuarios y creando un Design System para mantener coherencia. También trabajé en el equipo de Smart Contracts, integrando blockchain para dar más seguridad.",
    image: image_6c02e30bc9859770bdc588067edcbbbc508e2dab,
    tags: ["Smart Contracts", "Rediseño de producto", "Design System", "Mobile", "Desktop"],
    figmaUrl: "https://figma.com/file/cintelink",
    disabled: true, // WIP - en desarrollo
    url: "https://cintelink.com/views/login/"
  },
  {
    id: "2", 
    title: "CloudLabs",
    year: "2021",
    challenge: "rediseñar la plataforma para unificar la experiencia de estudiantes, docentes e instituciones en un solo sistema, con una arquitectura más clara y escalable.",
    solution: "hicimos un rediseño de la arquitectura, unificando la experiencia de los usuarios y sus sistemas para que tanto estudiantes, profesores e instituciones puedan enseñar y aprender a través de laboratorios gamificados en áreas STEM.",
    image: image_a8a6f0a610a7aec2f68a70d96ea5a3530fcd5787,
    tags: ["EdTech", "Rediseño de producto", "Mobile", "Tablet", "Desktop"],
    behanceUrl: "https://www.behance.net/gallery/138977137/CLOUDLABS-DISENO-DE-PRODUCTO",
    url: "https://cloudlabslearning.com/"
  },
  {
    id: "3",
    title: "Respública", 
    year: "2021",
    challenge: "diseñar una aplicación móvil que permita a los ciudadanos crear espacios de debate digital y que los grupos puedan medir y monitorear la participación.",
    solution: "definimos flujos de creación de debates y participación; diseñamos interfaces móviles claras, estados vacíos, validaciones y microinteracciones; prototipamos y validamos con usuarios.",
    image: image_617ba5a5563ad35c7af2c6204f94fe09441d404e,
    tags: ["Participación ciudadana", "Diseño desde cero", "App movil", "Debate digital"],
    behanceUrl: "https://www.behance.net/gallery/120346403/RESPUBLICA-DISENO-DE-PRODUCTO"
  }
];

export function FeaturedProjects() {
  return (
    <section id="proyectos" className="py-40 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estos son los tres proyectos donde más he aprendido y que mejor representan 
            mi evolución como UX/UI Designer.
          </p>
          <div className="w-20 h-1 bg-black rounded-full mx-auto mt-6"></div>
        </div>

        <div className="space-y-12">
          {featuredProjects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden shadow-lg border border-gray-300 bg-white">
              <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative flex items-center justify-center bg-gray-50 aspect-square min-h-[350px] ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full max-w-[500px] h-auto aspect-square object-cover rounded-lg"
                    width={1000}
                    height={1000}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
                    <span className="text-sm font-bold text-gray-700">{project.year}</span>
                  </div>
                </div>

                {/* Content */}
                <CardContent className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-6 mb-3">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {project.url ? (
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                              {project.title}
                            </a>
                          ) : (
                            project.title
                          )}
                        </h3>
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-gray-600 leading-relaxed">
                          <span className="font-bold text-gray-900">Desafío: </span>
                          {project.challenge}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          <span className="font-bold text-gray-900">Lo que hicimos: </span>
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-700 border-gray-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 pt-4">
                      {project.behanceUrl && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="flex items-center gap-2 border-gray-300 hover:bg-gray-50"
                          onClick={() => window.open(project.behanceUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Ver en Behance
                        </Button>
                      )}
                      {project.figmaUrl && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className={`flex items-center gap-2 border-gray-300 ${
                            project.disabled 
                              ? 'opacity-50 cursor-not-allowed bg-gray-100 text-gray-500 hover:bg-gray-100' 
                              : 'hover:bg-gray-50'
                          }`}
                          onClick={() => !project.disabled && window.open(project.figmaUrl, '_blank')}
                          disabled={project.disabled}
                        >
                          <ExternalLink className="w-4 h-4" />
                          {project.disabled ? 'Ver en Figma [WIP]' : 'Ver en Figma'}
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Ver todos los proyectos button */}
        <div className="text-center mt-16">
          <Button 
            onClick={() => {
              window.location.hash = '#/proyectos';
              setTimeout(() => window.scrollTo(0, 0), 100);
            }}
            className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg"
          >
            Ver todos los proyectos
          </Button>
          
        </div>
      </div>
    </section>
  );
}