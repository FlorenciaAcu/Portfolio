import { IsologoFA } from "./IsologoFA";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const go = (hash: string) => {
    window.location.hash = hash;
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <IsologoFA size={28} />
              <p className="font-semibold text-gray-900">Florencia Acuña</p>
            </div>
            <p className="text-sm text-gray-500">Product Designer · San Juan, Argentina</p>
          </div>

          {/* Nav */}
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-widest text-gray-600 uppercase mb-4">
              Navegación
            </p>
            <ul className="space-y-2">
              {[
                { label: "Inicio", action: () => go("#/") },
                { label: "Sobre mí", action: () => go("#/sobre-mi") },
                { label: "Proyectos", action: () => go("#/proyectos") },
                { label: "Experiencia", action: () => go("#/experiencia") },
                { label: "Contacto", action: () => { window.location.href = "mailto:contact@florenciaux.com"; } },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={item.action}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-widest text-gray-600 uppercase mb-4">
              Contacto
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@florenciaux.com"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  contact@florenciaux.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/florencia-acuna-ux/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@florenciaacuna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Medium
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1O70FGTcqo2q0tnwgErOQUlcODUc8LEDuZI0w3G4l9do/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  CV
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-gray-600">
            © {currentYear} Florencia Acuña. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-600">
            Hecho con ❤️ y mucho tecito.
          </p>
        </div>
      </div>
    </footer>
  );
}
