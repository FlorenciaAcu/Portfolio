import { useState } from "react";
import { IsologoFA } from "./IsologoFA";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const go = (hash: string) => {
    window.location.hash = hash;
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Inicio", hash: "#/" },
    { label: "Sobre mí", hash: "#/sobre-mi" },
    { label: "Proyectos", hash: "#/proyectos" },
    { label: "Servicios", hash: "#/servicios" },
    { label: "Experiencia", hash: "#/experiencia" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100/80">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => go("#/")}
          className="flex items-center gap-2.5 hover:opacity-80 transition-opacity duration-200"
          aria-label="Ir al inicio"
        >
          <IsologoFA />
          <span className="font-semibold text-base text-gray-900">
            Florencia Acuña
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => go(item.hash)}
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
          <a
            href="mailto:contact@florenciaux.com"
            className="text-xs font-semibold bg-[#351C75] text-white px-5 py-2 rounded-full hover:bg-[#2a1660] hover:shadow-[0_4px_16px_rgba(53,28,117,0.3)] transition-all duration-200"
          >
            Contacto
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative z-50"
          aria-label="Toggle mobile menu"
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : ""}`}
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

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="pt-20 px-6">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => go(item.hash)}
                className="text-left py-5 border-b border-gray-100 text-gray-700 text-lg font-medium hover:text-[#351C75] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-6">
              <a
                href="mailto:contact@florenciaux.com"
                className="block text-center w-full bg-[#351C75] text-white py-4 rounded-lg text-base font-medium hover:bg-[#2a1660] transition-all"
              >
                Contacto
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
