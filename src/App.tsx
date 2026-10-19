import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ProfilePhotoProvider } from './context/ProfilePhotoContext';
import { PhotoUploadModal } from './components/PhotoUploadModal';

function AppLayout() {
  const { language } = useLanguage();
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

  // Sync title dynamically based on page and active language
  useEffect(() => {
    const isBn = language === 'bn';
    const isBng = language === 'bng';

    switch (currentPath) {
      case '/':
        document.title = isBn
          ? 'মহিদুল ইসলাম সজীব – হেড অফ পারফরম্যান্স মার্কেটিং অ্যান্ড স্ট্র্যাটেজি'
          : isBng
          ? 'Mohidul Islam Sojib – Head of Performance Marketing & Strategy'
          : 'Mohidul Islam Sojib – Head of Performance Marketing & Strategy';
        break;
      case '/about':
        document.title = isBn
          ? 'পরিচিতি ও স্ট্র্যাটেজি | মহিদুল ইসলাম সজীব'
          : isBng
          ? 'About & Strategy | Mohidul Islam Sojib'
          : 'About Mohidul Islam Sojib | Performance Marketing & Strategy';
        break;
      case '/services':
        document.title = isBn
          ? 'পারফরম্যান্স মার্কেটিং সেবাসমূহ | মহিদুল ইসলাম সজীব'
          : isBng
          ? 'Performance Marketing Services | Mohidul Islam Sojib'
          : 'Digital Marketing & Advertising Services | Mohidul Islam Sojib';
        break;
      case '/portfolio':
        document.title = isBn
          ? 'পোর্টফোলিও ও কেস স্টাডি | মহিদুল ইসলাম সজীব'
          : isBng
          ? 'Portfolio & Case Studies | Mohidul Islam Sojib'
          : 'Portfolio & Case Studies | Mohidul Islam Sojib';
        break;
      case '/contact':
        document.title = isBn
          ? 'যোগাযোগ ও প্রজেক্ট আলোচনা | মহিদুল ইসলাম সজীব'
          : isBng
          ? 'Contact & Discussion | Mohidul Islam Sojib'
          : 'Contact Mohidul Islam Sojib | Boosting Agency BD';
        break;
      default:
        document.title = isBn
          ? 'পেজটি পাওয়া যায়নি | মহিদুল ইসলাম সজীব'
          : isBng
          ? 'Page Paoa Jayni | Mohidul Islam Sojib'
          : 'Page Not Found | Mohidul Islam Sojib';
        break;
    }
  }, [currentPath, language]);

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
      {/* Top Navbar */}
      <Navbar currentPath={currentPath} navigate={navigate} />

      {/* Main Page Body */}
      <main className="flex-1 w-full">
        {renderCurrentPage()}
      </main>

      {/* Persistent Footer */}
      <Footer navigate={navigate} />

      {/* Profile Photo Upload Modal */}
      <PhotoUploadModal />
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
