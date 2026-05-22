import { Header } from "./Header";
import { Footer } from "./Footer";
import { ProjectGrid } from "./ProjectGrid";
import { Button } from "./ui/button";

// ProjectGrid component now handles all project display logic

export function ProyectosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Main Content */}
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-40">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Todos mis proyectos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Un recorrido por mi experiencia diseñando productos digitales en distintas industrias y contextos.
            </p>
            <div className="w-20 h-1 bg-black rounded-full mx-auto"></div>
          </div>

          {/* Projects Grid - 3 columns */}
          <ProjectGrid />

          {/* Back to Home */}
          <div className="text-center mt-16">
            <Button 
              onClick={() => {
                window.location.hash = '#/';
                setTimeout(() => window.scrollTo(0, 0), 100);
              }}
              variant="outline"
              className="border-gray-300 hover:bg-gray-50 px-8 py-3 text-lg"
            >
              ← Volver al inicio
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}