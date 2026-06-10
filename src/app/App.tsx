import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProjectEntryPointsSection } from "./components/ProjectEntryPointsSection";
import { TrustSignalsSection } from "./components/TrustSignalsSection";
import { ValueSection } from "./components/ValueSection";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { WritingSection } from "./components/WritingSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ProyectosPage } from "./components/ProyectosPage";
import { ProjectDetailPage } from "./components/ProjectDetailPage";
import { useState, useEffect } from "react";

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    // Initialize with hash-based routing for production compatibility
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash.startsWith('#/proyectos/')) {
        return hash.replace('#', '');
      }
      if (hash === '#/proyectos') {
        return '/proyectos';
      }
      // Also check pathname for direct access attempts
      if (window.location.pathname === '/proyectos') {
        return '/proyectos';
      }
    }
    return '/';
  });

  useEffect(() => {
    // Handle hash-based routing (works in all environments)
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/proyectos/')) {
        setCurrentPath(hash.replace('#', ''));
      } else if (hash === '#/proyectos') {
        setCurrentPath('/proyectos');
      } else if (hash === '#/' || hash === '') {
        setCurrentPath('/');
      }
    };

    // Handle back/forward browser navigation
    const handlePopState = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/proyectos/')) {
        setCurrentPath(hash.replace('#', ''));
      } else if (hash === '#/proyectos') {
        setCurrentPath('/proyectos');
      } else {
        setCurrentPath('/');
      }
    };

    // Listen for both hash changes and browser navigation
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handlePopState);
    
    // Check for hash on initial load
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Make navigation function available globally for easy testing
  useEffect(() => {
    (window as any).navigateTo = (path: string) => {
      setCurrentPath(path);
      if (path === '/proyectos') {
        window.location.hash = '#/proyectos';
      } else {
        window.location.hash = '#/';
      }
    };
  }, []);

  // Simple routing
  if (currentPath === '/proyectos') {
    return <ProyectosPage />;
  }

  if (currentPath.startsWith('/proyectos/')) {
    return <ProjectDetailPage projectId={currentPath.replace('/proyectos/', '')} />;
  }

  // Homepage
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProjectEntryPointsSection />
        <TrustSignalsSection />
        <ValueSection />
        <FeaturedProjects />
        <WritingSection />
        <ContactSection />
      </main>
      <Footer />
      
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
    </div>
  );
}
