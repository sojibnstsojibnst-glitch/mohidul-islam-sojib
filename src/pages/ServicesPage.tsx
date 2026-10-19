import React from 'react';
import {
  Share2,
  Settings,
  Search,
  Users,
  Compass,
  PenTool,
  BarChart3,
  Activity,
  Megaphone,
  Cpu,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Package
} from 'lucide-react';
import { SERVICES_LIST, TRANSPARENCY_NOTICE } from '../data/portfolioData';
import { createWhatsAppLink } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';

interface ServicesPageProps {
  navigate: (path: string) => void;
}

// Icon mapping helper
const renderServiceIcon = (iconName: string) => {
  const iconProps = { className: 'w-6 h-6 text-[#00D2FF]' };
  switch (iconName) {
    case 'Share2':
      return <Share2 {...iconProps} />;
    case 'Settings':
      return <Settings {...iconProps} />;
    case 'Search':
      return <Search {...iconProps} />;
    case 'Users':
      return <Users {...iconProps} />;
    case 'Compass':
      return <Compass {...iconProps} />;
    case 'PenTool':
      return <PenTool {...iconProps} />;
    case 'BarChart3':
      return <BarChart3 {...iconProps} />;
    case 'Activity':
      return <Activity {...iconProps} />;
    case 'Megaphone':
      return <Megaphone {...iconProps} />;
    case 'Cpu':
      return <Cpu {...iconProps} />;
    default:
      return <Share2 {...iconProps} />;
  }
};

export const ServicesPage: React.FC<ServicesPageProps> = ({ navigate }) => {
  const { t } = useLanguage();

  const handleDiscussService = (serviceTitle: string) => {
    navigate(`/contact?service=${encodeURIComponent(serviceTitle)}`);
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* 1. Header */}
      <section className="pt-12 sm:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
            <span>{t.services.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.services.pageTitle}
          </h1>
          <p className="text-sm sm:text-base text-[#AAB4C8] leading-relaxed">
            {t.services.pageSubtitle}
          </p>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {SERVICES_LIST.map((service, index) => {
            const translatedService = t.services.items.find((s) => s.id === service.id);
            const title = translatedService?.title || service.title;
            const fullDescription = translatedService?.fullDescription || service.fullDescription;
            const deliverables = translatedService?.deliverables || service.deliverables;
            const targetOutcomes = translatedService?.targetOutcomes || service.benefits.join(' · ');
            const whatsappLink = createWhatsAppLink(`Hello Mohidul Islam Sojib, I am interested in your service: ${title}.`);

            return (
              <div
                key={service.id}
                className="p-6 sm:p-8 rounded-2xl bg-[#0D1117] border border-white/5 hover:border-[#00D2FF]/30 transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-5">
                  {/* Top Bar inside card */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="p-3 rounded-xl bg-[#111827] border border-white/5 group-hover:border-[#00D2FF]/30 transition-colors">
                      {renderServiceIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-mono text-[#AAB4C8]">
                      #{String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title and Short Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00D2FF] transition-colors">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#AAB4C8] leading-relaxed">
                      {fullDescription}
                    </p>
                  </div>

                  {/* Target Outcomes */}
                  {targetOutcomes && (
                    <div className="p-3.5 rounded-xl bg-[#111827] border border-white/5 space-y-1">
                      <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#00D2FF]">
                        {t.services.outcomesLabel}:
                      </h4>
                      <p className="text-xs text-[#AAB4C8] leading-relaxed">
                        {targetOutcomes}
                      </p>
                    </div>
                  )}

                  {/* Deliverables */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                      {t.services.deliverablesLabel}:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-[#AAB4C8]">
                      {deliverables.map((deliv, dIdx) => (
                        <div
                          key={dIdx}
                          className="p-2 rounded-lg bg-[#111827] border border-white/5 flex items-center gap-1.5"
                        >
                          <Package className="w-3 h-3 text-[#7F00FF] shrink-0" />
                          <span className="truncate">{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => handleDiscussService(title)}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#00D2FF] to-[#7F00FF] rounded-lg hover:opacity-95 transition-opacity"
                  >
                    <span>{t.services.inquireBtn}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#111827] border border-white/10 hover:border-[#25D366]/40 rounded-lg transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Transparency & Realistic Expectations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0B132B] border border-[#00D2FF]/20 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="p-3 rounded-xl bg-[#00D2FF]/10 text-[#00D2FF] shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div className="space-y-1.5 flex-1">
            <h3 className="text-base font-bold text-white">
              {t.about.noticeTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#AAB4C8] leading-relaxed">
              {t.about.noticeDesc}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Bottom Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0D1117] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {t.services.ctaTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#AAB4C8] leading-relaxed">
              {t.services.ctaDesc}
            </p>
          </div>

          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#00D2FF] to-[#7F00FF] rounded-lg shadow-md hover:opacity-95 transition-opacity whitespace-nowrap"
          >
            <span>{t.services.ctaBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
