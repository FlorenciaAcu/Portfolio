import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Florencia Acuña</h3>
            <p className="text-gray-400 leading-relaxed">
             Diseñadora de productos digitales, apasionada por la innovación, la educación y el emprendedurismo.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => {
                    const isProjectsPage = window.location.hash === '#/proyectos' || window.location.pathname === '/proyectos';
                    if (isProjectsPage) {
                      window.location.hash = '#/';
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const isProjectsPage = window.location.hash === '#/proyectos' || window.location.pathname === '/proyectos';
                    if (isProjectsPage) {
                      window.location.hash = '#/';
                      setTimeout(() => {
                        const element = document.getElementById('sobre-mi');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 100);
                    } else {
                      const element = document.getElementById('sobre-mi');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Sobre mí
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    window.location.hash = '#/proyectos';
                    setTimeout(() => window.scrollTo(0, 0), 100);
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Proyectos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const isProjectsPage = window.location.hash === '#/proyectos' || window.location.pathname === '/proyectos';
                    if (isProjectsPage) {
                      window.location.hash = '#/';
                      setTimeout(() => {
                        const element = document.getElementById('contacto');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 100);
                    } else {
                      const element = document.getElementById('contacto');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contacto</h4>
            <div className="space-y-2 text-gray-400">
              <p>contact@florenciaux.com</p>
              <p>San Juan, Argentina</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Florencia Acuña. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1 mt-4 md:mt-0">
            Hecho con <Heart className="w-4 h-4 text-red-500" /> y mucho tecito.
          </p>
        </div>
      </div>
    </footer>
  );
}