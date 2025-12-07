import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isProjectsPage = window.location.hash === '#/proyectos' || window.location.pathname === '/proyectos';

  const handleHomeClick = () => {
    window.location.hash = '#/';
  };

  const handleInicioClick = () => {
    if (isProjectsPage) {
      window.location.hash = '#/';
    } else {
      const element = document.getElementById('inicio');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleSobreMiClick = () => {
    if (isProjectsPage) {
      window.location.hash = '#/';
      // Wait a bit then scroll to section
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
  };

  const handleProyectosClick = () => {
    window.location.hash = '#/proyectos';
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  const handleContactoClick = () => {
    if (isProjectsPage) {
      window.location.hash = '#/';
      // Wait a bit then scroll to section
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
  };

  // Mobile menu handlers
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMobileInicioClick = () => {
    handleInicioClick();
    closeMobileMenu();
  };

  const handleMobileSobreMiClick = () => {
    handleSobreMiClick();
    closeMobileMenu();
  };

  const handleMobileProyectosClick = () => {
    handleProyectosClick();
    closeMobileMenu();
  };

  const handleMobileContactoClick = () => {
    handleContactoClick();
    closeMobileMenu();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo/Name - clickable to go home */}
        <button 
          onClick={handleHomeClick}
          className="font-semibold text-lg hover:text-gray-700 transition-colors"
        >
          Florencia Acuña
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={handleInicioClick}
            className={`transition-colors ${
              !isProjectsPage 
                ? 'text-gray-900 font-medium' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Inicio
          </button>
          
          <button 
            onClick={handleSobreMiClick}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Sobre mí
          </button>
          
          <button 
            onClick={handleProyectosClick}
            className={`transition-colors ${
              isProjectsPage 
                ? 'text-gray-900 font-medium' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Proyectos
          </button>
          
          <Button 
            onClick={handleContactoClick}
            className="bg-black text-white hover:bg-gray-800"
          >
            Contacto
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden z-50 relative"
          aria-label="Toggle mobile menu"
        >
          <svg 
            className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`
        fixed top-0 left-0 w-full h-screen z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden
        ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}
      `}>
        <div className="pt-20 px-6">
          <nav className="flex flex-col space-y-8">
            <button 
              onClick={() => {
                if (isProjectsPage) {
                  window.location.hash = '#/';
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                closeMobileMenu();
              }}
              className={`text-left py-4 border-b border-gray-100 transition-colors text-lg ${
                !isProjectsPage 
                  ? 'text-gray-900 font-semibold' 
                  : 'text-gray-600'
              }`}
            >
              Inicio
            </button>
            
            <button 
              onClick={handleMobileSobreMiClick}
              className="text-left py-4 border-b border-gray-100 text-gray-600 transition-colors text-lg hover:text-gray-900"
            >
              Sobre mí
            </button>
            
            <button 
              onClick={handleMobileProyectosClick}
              className={`text-left py-4 border-b border-gray-100 transition-colors text-lg ${
                isProjectsPage 
                  ? 'text-gray-900 font-semibold' 
                  : 'text-gray-600'
              }`}
            >
              Proyectos
            </button>
            
            <div className="pt-4">
              <Button 
                onClick={handleMobileContactoClick}
                className="w-full bg-black text-white hover:bg-gray-800 py-4 text-lg"
              >
                Contacto
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}