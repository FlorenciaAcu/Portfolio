import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Download, Mail, Linkedin } from "lucide-react";

export function ContactSection() {
  const handleDownloadCV = () => {
    // Crear un enlace temporal para descargar el archivo
    const link = document.createElement('a');
    link.href = '/cv-florencia-acuna.pdf'; // El archivo debe estar en la carpeta public
    link.download = 'CV-Florencia-Acuna-Product-Designer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contacto" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contacto
          </h2>
          <div className="w-20 h-1 bg-black rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Correo electrónico</p>
                  <p className="text-gray-600">contact@florenciaux.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/florencia-acuna-ux/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:underline"
                  >
                    https://www.linkedin.com/in/florencia-acuna-ux/
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Resume Download */}
          <Card className="border-gray-200 bg-gray-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Descargá mi CV
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Conocé más sobre mi experiencia y formación
                  </p>
                </div>
                <Button 
                  onClick={() => window.open('https://drive.google.com/file/d/1hepw024GssD5TTfTi9sX4hOpSdp563D1/view?usp=sharing', '_blank')}
                  className="bg-black hover:bg-gray-800 text-white"
                >
                  Descargar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}