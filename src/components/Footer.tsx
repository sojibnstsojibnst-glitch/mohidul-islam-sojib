import React from 'react';
import { Mail, Phone, ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';
import { PERSONAL_DATA, SERVICES_LIST } from '../data/portfolioData';
import { createWhatsAppLink, createMailtoLink } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <footer className="bg-[#0D1117] border-t border-white/10 text-[#AAB4C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Identity Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight">
              {PERSONAL_DATA.fullName}
            </h3>
            <p className="text-sm font-medium text-[#00D2FF]">
              {t.hero.subheadline}
            </p>
            <p className="text-sm text-[#AAB4C8] leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-2 text-xs text-[#AAB4C8] pt-2">
              <MapPin className="w-4 h-4 text-[#00D2FF] shrink-0" />
              <span>{PERSONAL_DATA.location} · {PERSONAL_DATA.organization}</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.navigationTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleNav(e, '/')}
                  className="hover:text-[#00D2FF] transition-colors inline-block"
                >
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleNav(e, '/about')}
                  className="hover:text-[#00D2FF] transition-colors inline-block"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  onClick={(e) => handleNav(e, '/services')}
                  className="hover:text-[#00D2FF] transition-colors inline-block"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  onClick={(e) => handleNav(e, '/portfolio')}
                  className="hover:text-[#00D2FF] transition-colors inline-block"
                >
                  {t.nav.portfolio}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleNav(e, '/contact')}
                  className="hover:text-[#00D2FF] transition-colors inline-block"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.services.pageTitle}
            </h4>
            <ul className="space-y-2 text-xs text-[#AAB4C8]">
              {t.services.items.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a
                    href="/services"
                    onClick={(e) => handleNav(e, '/services')}
                    className="hover:text-white transition-colors block truncate"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-[#111827] border border-white/5 hover:border-[#00D2FF]/40 text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#00D2FF] shrink-0" />
                <div className="overflow-hidden">
                  <span className="block text-xs text-[#AAB4C8]">{t.hero.messageWhatsApp}</span>
                  <span className="font-medium text-xs sm:text-sm truncate block">{PERSONAL_DATA.whatsappDisplay}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#AAB4C8] ml-auto group-hover:text-[#00D2FF] transition-colors" />
              </a>

              <a
                href={createMailtoLink()}
                className="flex items-center gap-3 p-3 rounded-lg bg-[#111827] border border-white/5 hover:border-[#00D2FF]/40 text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#00D2FF] shrink-0" />
                <div className="overflow-hidden">
                  <span className="block text-xs text-[#AAB4C8]">{t.contact.sendEmail}</span>
                  <span className="font-medium text-xs sm:text-sm truncate block">{PERSONAL_DATA.email}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#AAB4C8] ml-auto group-hover:text-[#00D2FF] transition-colors" />
              </a>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-[#AAB4C8]">
                <ShieldCheck className="w-4 h-4 text-[#00D2FF]" />
                <span>{PERSONAL_DATA.organization} · Ethical Growth</span>
              </span>
            </div>
          </div>
        </div>

        {/* Disclaimer note */}
        <div className="mt-12 pt-6 border-t border-white/5 text-[11px] text-[#AAB4C8]/70 leading-relaxed">
          <p>{t.footer.disclaimer}</p>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AAB4C8]">
          <p>
            © {currentYear} {PERSONAL_DATA.fullName} · {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <span>{PERSONAL_DATA.organization}</span>
            <span aria-hidden="true">·</span>
            <span>Cloudflare Pages</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
