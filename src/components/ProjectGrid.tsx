import image_c962a2b07119d989d07bbea2ed6919cf816d6e84 from 'figma:asset/c962a2b07119d989d07bbea2ed6919cf816d6e84.png';
import image_83701bcc6455b04a3e1d6e37d9aaca952a5d7d6a from 'figma:asset/83701bcc6455b04a3e1d6e37d9aaca952a5d7d6a.png';
import image_8321c9700919907670587a15b6a668ff327862ec from 'figma:asset/8321c9700919907670587a15b6a668ff327862ec.png';
import image_8c4017599436ace57765d2aca9e5bac9501b165e from 'figma:asset/8c4017599436ace57765d2aca9e5bac9501b165e.png';
import image_358312ec79c70d3049001d03ab87e255ad5e2d43 from 'figma:asset/358312ec79c70d3049001d03ab87e255ad5e2d43.png';
import image_a6fdfd11d15a846987a02d6e6c2cf734ba087ef2 from 'figma:asset/a6fdfd11d15a846987a02d6e6c2cf734ba087ef2.png';
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
  image?: string;
  tags: string[];
  behanceUrl?: string;
  figmaUrl?: string;
  disabled?: boolean;
  url?: string;
}

// Proyectos con estructura vacía como placeholders
const allProjects: Project[] = [
  // Proyectos destacados existentes
  {
    id: "1",
    title: "Cintelink",
    year: "2022 - 2025",
    challenge: "la plataforma necesitaba evolucionar para ofrecer mayor trazabilidad y seguridad en las operaciones de carga de combustible.",
    image: image_a6fdfd11d15a846987a02d6e6c2cf734ba087ef2,
    tags: ["Smart Contracts", "Rediseño de producto", "Design System", "Mobile", "Desktop"],
    figmaUrl: "https://figma.com/file/cintelink",
    disabled: true,
    url: "https://cintelink.com/views/login/"
  },
  {
    id: "2", 
    title: "CloudLabs",
    year: "2021",
    challenge: "rediseñar la plataforma para unificar la experiencia de estudiantes, docentes e instituciones en un solo sistema, con una arquitectura clara.",
    image: image_358312ec79c70d3049001d03ab87e255ad5e2d43,
    tags: ["EdTech", "Rediseño de producto", "Mobile", "Tablet", "Desktop"],
    behanceUrl: "https://www.behance.net/gallery/138977137/CLOUDLABS-DISENO-DE-PRODUCTO",
    url: "https://cloudlabslearning.com/"
  },
  {
    id: "3",
    title: "Respública", 
    year: "2021",
    challenge: "diseñar una aplicación móvil que permita a los ciudadanos crear espacios de debate digital y que los grupos puedan medir y monitorear la participación.",
    image: image_8c4017599436ace57765d2aca9e5bac9501b165e,
    tags: ["Participación ciudadana", "Diseño desde cero", "App móvil", "Debate digital"],
    behanceUrl: "https://www.behance.net/gallery/120346403/RESPUBLICA-DISENO-DE-PRODUCTO"
  },
  
  // Proyectos adicionales con estructura vacía (para editar manualmente)
  {
    id: "4",
    title: "Folcode",
    year: "2022",
    challenge: "renovar su sitio institucional para reflejar la nueva identidad de marca, mostrar claramente sus servicios, casos de éxito y generar confianza para captar clientes.",
    image: image_8321c9700919907670587a15b6a668ff327862ec,
    tags: ["Web institucional", "Casos de exito", "Responsive Design", "Servicios"],
    behanceUrl: "https://www.behance.net/gallery/154113155/Web-Folcode-Diseno-de-producto"
  },
  {
    id: "5",
    title: "Juan Gas GNC Club",
    year: "2025",
    challenge: "diseñar y desarrollar un MVP funcional que permita a los clientes de una estación de servicio consultar en tiempo real su saldo acumulados por carga de combustible",
    image: image_83701bcc6455b04a3e1d6e37d9aaca952a5d7d6a,
    figmaUrl: "https://figma.com/file/juangasgncclub_showcase",
    disabled: true,
    tags: ["MVP", "Service Design", "Fidelización clientes"]
  },
  {
    id: "6",
    title: "iKnow",
    year: "2025",
    challenge: "diseñar una app móvil y desktop que unifique búsqueda, reserva, cita, pago y feedback en un flujo claro y accesible, ofreciendo a clientes y expertos una experiencia simple, confiable y escalable.",
    image: image_c962a2b07119d989d07bbea2ed6919cf816d6e84,
    figmaUrl: "https://figma.com/file/iknow_showcase",
    disabled: true,
    tags: ["Consultoría", "Diseño desde cero", "Plataforma web"]
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-0">
        {/* Image Section */}
        <div className="relative h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
          {project.image ? (
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500">[Imagen del proyecto]</p>
              </div>
            </div>
          )}
          
          {/* Year badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
            <span className="text-sm font-medium text-gray-700">{project.year}</span>
          </div>
        </div>
        
         {/* Debug navigation for Figma Make */}
         {/*
      <div className="fixed bottom-4 right-4 z-50 flex gap-2 opacity-20 hover:opacity-100 transition-opacity">
        <button
          onClick={() => window.location.hash = '#/'}
          className="bg-black text-white px-3 py-1 rounded text-xs"
        >
          Inicio
        </button>
        <button
          onClick={() => window.location.hash = '#/proyectos'}
          className="bg-blue-600 text-white px-3 py-1 rounded text-xs"
        >
          Proyectos
        </button>
      </div>
        */}
        
        {/* Content Section */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900 leading-tight">
              {project.url ? (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
          </div>
          
          {/* Challenge/Description */}
          <p className="text-gray-600 leading-relaxed text-sm">
            <span className="font-medium text-gray-900">Desafío: </span>
            {project.challenge}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700 border-gray-200 text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.behanceUrl && (
              <Button 
                variant="outline" 
                size="sm"
                className="flex items-center gap-2 border-gray-300 hover:bg-gray-50 text-xs"
                onClick={() => window.open(project.behanceUrl, '_blank')}
              >
                <ExternalLink className="w-3 h-3" />
                Ver en Behance
              </Button>
            )}
            {project.figmaUrl && (
              <Button 
                variant="outline" 
                size="sm"
                className={`flex items-center gap-2 border-gray-300 text-xs ${
                  project.disabled 
                    ? 'opacity-50 cursor-not-allowed bg-gray-100 text-gray-500 hover:bg-gray-100' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => !project.disabled && window.open(project.figmaUrl, '_blank')}
                disabled={project.disabled}
              >
                <ExternalLink className="w-3 h-3" />
                {project.disabled ? 'Ver en Figma [WIP]' : 'Ver en Figma'}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {allProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}