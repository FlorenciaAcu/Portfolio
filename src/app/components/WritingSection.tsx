import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Calendar } from "lucide-react";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  url: string;
}

const articles: Article[] = [
  {
    id: "1",
    title: "El Futuro del Design System: Más Allá de los Componentes",
    excerpt: "Exploramos cómo los design systems están evolucionando para incluir no solo componentes visuales, sino también patrones de comportamiento, principios de contenido y guidelines de accesibilidad.",
    date: "15 Nov 2024",
    category: "Design Systems",
    readTime: "8 min",
    url: "https://medium.com/@florencia.acuna/future-design-systems"
  },
  {
    id: "2",
    title: "Investigación UX en Startups: Cómo Hacer Más con Menos",
    excerpt: "Estrategias prácticas para implementar investigación de usuarios efectiva en entornos con recursos limitados, sin comprometer la calidad de los insights.",
    date: "28 Oct 2024",
    category: "UX Research",
    readTime: "6 min",
    url: "https://medium.com/@florencia.acuna/ux-research-startups"
  },
  {
    id: "3",
    title: "Diseño Inclusivo: Lecciones de mi Experiencia en Fintech",
    excerpt: "Reflexiones sobre cómo diseñar productos financieros que sean verdaderamente accesibles para todos los usuarios, independientemente de su contexto socioeconómico o nivel de alfabetización digital.",
    date: "12 Oct 2024",
    category: "Accesibilidad",
    readTime: "10 min",
    url: "https://medium.com/@florencia.acuna/inclusive-fintech-design"
  },
  {
    id: "4",
    title: "La Psicología del Color en Interfaces Financieras",
    excerpt: "Un análisis profundo de cómo las decisiones cromáticas afectan la confianza y el comportamiento del usuario en aplicaciones bancarias y de inversión.",
    date: "20 Sep 2024",
    category: "UI Design",
    readTime: "7 min",
    url: "https://medium.com/@florencia.acuna/color-psychology-fintech"
  },
  {
    id: "5",
    title: "De Sketch a Figma: Mi Experiencia de Migración",
    excerpt: "Lecciones aprendidas durante la transición de herramientas de diseño en un equipo distribuido, incluyendo tips prácticos y errores comunes a evitar.",
    date: "5 Sep 2024",
    category: "Herramientas",
    readTime: "5 min",
    url: "https://medium.com/@florencia.acuna/sketch-to-figma-migration"
  },
  {
    id: "6",
    title: "Microinteracciones que Importan: Detalles que Marcan la Diferencia",
    excerpt: "Cómo las pequeñas animaciones y transiciones pueden transformar completamente la percepción del usuario sobre nuestros productos digitales.",
    date: "18 Aug 2024",
    category: "Interaction Design",
    readTime: "9 min",
    url: "https://medium.com/@florencia.acuna/meaningful-microinteractions"
  }
];

export function WritingSection() {
  return (
    <section id="writing" className="py-40 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Writing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comparto reflexiones, aprendizajes y insights sobre Product Design, 
            tendencias de la industria y experiencias de mi práctica profesional.
          </p>
          <div className="w-20 h-1 bg-black rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700 border-gray-200">
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-black transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">{article.readTime} de lectura</span>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="flex items-center gap-2 text-black hover:text-gray-700 hover:bg-gray-50"
                      onClick={() => window.open(article.url, '_blank')}
                    >
                      Leer más
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-gray-300 text-black hover:bg-gray-50 px-8 py-3"
            onClick={() => window.open('https://medium.com/@florencia.acuna', '_blank')}
          >
            Ver todos los artículos en Medium
          </Button>
        </div>
      </div>
    </section>
  );
}