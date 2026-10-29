import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SEOHead } from './components/SEOHead';
import { LanguageProvider } from './context/LanguageContext';
import { ProfilePhotoProvider } from './context/ProfilePhotoContext';

function AppLayout() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const navigate = useCallback((path: string) => {
    if (window.location.pathname + window.location.search !== path) {
      window.history.pushState({}, '', path);
    }
    // Update path state
    const cleanPath = path.split('?')[0];
    setCurrentPath(cleanPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Route selector
  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage navigate={navigate} />;
      case '/about':
        return <AboutPage navigate={navigate} />;
      case '/services':
        return <ServicesPage navigate={navigate} />;
      case '/portfolio':
        return <PortfolioPage navigate={navigate} />;
      case '/contact':
        return <ContactPage />;
      default:
        return <NotFoundPage navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B132B] text-white flex flex-col font-['Plus_Jakarta_Sans','Hind_Siliguri',sans-serif]">
      {/* Dynamic SEO, Canonical & Schema Manager */}
      <SEOHead currentPath={currentPath} />

      {/* Top Navbar */}
      <Navbar currentPath={currentPath} navigate={navigate} />

      {/* Main Page Body */}
      <main className="flex-1 w-full">
        {renderCurrentPage()}
      </main>

      {/* Persistent Footer */}
      <Footer navigate={navigate} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <ProfilePhotoProvider>
        <AppLayout />
      </ProfilePhotoProvider>
    </LanguageProvider>
  );
}
