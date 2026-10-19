import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Camera } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { useProfilePhoto } from '../context/ProfilePhotoContext';
import { ProfileImage } from './ProfileImage';
import { LanguageSelector } from './LanguageSelector';

interface NavbarProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language } = useLanguage();
  const { openUploadModal } = useProfilePhoto();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.about, path: '/about' },
    { label: t.nav.services, path: '/services' },
    { label: t.nav.portfolio, path: '/portfolio' },
    { label: t.nav.contact, path: '/contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#0B132B]/90 backdrop-blur-md border-[#00D2FF]/20 shadow-lg shadow-black/20'
          : 'bg-[#0B132B] border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-4 md:gap-8 h-20">
          {/* Zone 1: Brand Wordmark with Profile Thumbnail */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="flex items-center gap-2.5 text-lg md:text-xl font-bold tracking-tight text-white hover:text-[#00D2FF] transition-colors whitespace-nowrap shrink-0 group"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#00D2FF]/40 bg-[#111827] shrink-0">
              <ProfileImage
                variant="thumbnail"
                showUploadTrigger={false}
                className="w-full h-full object-cover object-[35%_25%]"
              />
            </div>
            <span>{PERSONAL_DATA.fullName}</span>
          </a>

          {/* Zone 2: 4–5 clean single-line nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#AAB4C8]">
            {navLinks.map((item) => {
              const isActive =
                item.path === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(item.path);

              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleLinkClick(e, item.path)}
                  className={`transition-colors whitespace-nowrap shrink-0 relative py-1 ${
                    isActive
                      ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#00D2FF]'
                      : 'hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Upload Photo, Language Selector & Hire Me CTA) */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={openUploadModal}
              title={
                language === 'bn'
                  ? 'প্রোফাইল ছবি আপলোড / পরিবর্তন করুন'
                  : language === 'bng'
                  ? 'Profile photo upload / change korun'
                  : 'Upload / change profile photo'
              }
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#AAB4C8] hover:text-white bg-[#111827] hover:bg-white/5 border border-white/10 hover:border-[#00D2FF]/40 rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
              aria-label="Upload photo"
            >
              <Camera className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span className="hidden xl:inline">
                {language === 'bn' ? 'ছবি আপলোড' : language === 'bng' ? 'Upload Photo' : 'Upload Photo'}
              </span>
            </button>

            <LanguageSelector variant="navbar" />

            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#00D2FF] to-[#7F00FF] rounded-lg hover:opacity-90 transition-opacity shadow-sm shadow-[#00D2FF]/20 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#00D2FF]"
            >
              <span>{t.nav.hireMe}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={openUploadModal}
              title="Upload photo"
              className="p-2 text-[#AAB4C8] hover:text-white bg-[#111827] border border-white/10 rounded-lg"
              aria-label="Upload photo"
            >
              <Camera className="w-4 h-4 text-[#00D2FF]" />
            </button>
            <LanguageSelector variant="navbar" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#AAB4C8] hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#00D2FF]/20 bg-[#0D1117] px-4 pt-3 pb-6 space-y-4">
          {/* Profile overview in drawer */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-[#00D2FF]/40 bg-[#111827]">
                <ProfileImage
                  variant="thumbnail"
                  showUploadTrigger={false}
                  className="w-full h-full object-cover object-[35%_25%]"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{PERSONAL_DATA.fullName}</p>
                <p className="text-[11px] text-[#00D2FF]">{t.hero.subheadline}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openUploadModal();
              }}
              className="px-2.5 py-1.5 rounded-lg bg-[#111827] text-[#00D2FF] hover:text-white border border-[#00D2FF]/30 text-xs flex items-center gap-1.5"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>
                {language === 'bn' ? 'ছবি আপলোড' : language === 'bng' ? 'Upload Photo' : 'Upload'}
              </span>
            </button>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((item) => {
              const isActive =
                item.path === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(item.path);

              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleLinkClick(e, item.path)}
                  className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-white/5 text-[#00D2FF] font-semibold'
                      : 'text-[#AAB4C8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/10 space-y-3">
            <LanguageSelector variant="mobile" />

            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#00D2FF] to-[#7F00FF] rounded-lg shadow-sm"
            >
              <span>{t.nav.hireMe}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
