import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SEOHead } from './components/SEOHead';
import { LanguageProvider } from './context/LanguageContext';
import { ProfilePhotoProvider } from './context/ProfilePhotoContext';

// Lazy load non-landing routes to reduce initial JS payload and main-thread execution on mobile
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage').then(m => ({ default: m.PortfolioPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

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

      {/* Main Page Body with Suspense for Route-Level Code Splitting */}
      <main className="flex-1 w-full">
        <Suspense
          fallback={
            <div className="min-h-[50vh] flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-2 border-[#00D2FF] border-t-transparent animate-spin" />
            </div>
          }
        >
          {renderCurrentPage()}
        </Suspense>
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
