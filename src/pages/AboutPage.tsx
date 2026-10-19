import React from 'react';
import {
  ShieldCheck,
  Target,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Compass,
  Cpu
} from 'lucide-react';
import {
  PERSONAL_DATA,
  PROFESSIONAL_SKILLS,
  WORKING_PROCESS
} from '../data/portfolioData';
import { createWhatsAppLink, createMailtoLink } from '../utils/whatsapp';
import { ProfileImage } from '../components/ProfileImage';
import { useLanguage } from '../context/LanguageContext';

interface AboutPageProps {
  navigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  const { t } = useLanguage();

  const bioParagraphs = [t.about.bioP1, t.about.bioP2, t.about.bioP3];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. Header & Biography Overview */}
      <section className="pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Portrait area */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-sm aspect-square">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#00D2FF]/40 to-[#7F00FF]/40 opacity-50 blur-xl" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#111827] border border-[#00D2FF]/30 shadow-2xl">
                  <ProfileImage
                    variant="about"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-[35%_25%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117]/70 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Biography details */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
                <span>{t.about.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {t.about.role}
              </h1>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#00D2FF] font-medium">
                <span>{PERSONAL_DATA.organization}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1 text-[#AAB4C8]">
                  <MapPin className="w-3.5 h-3.5 text-[#00D2FF]" />
                  {PERSONAL_DATA.location}
                </span>
                <span aria-hidden="true">·</span>
                <span className="text-[#AAB4C8]">{PERSONAL_DATA.field}</span>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#AAB4C8] leading-relaxed">
                {bioParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Direct links */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={createWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.hero.messageWhatsApp}</span>
                </a>

                <a
                  href={createMailtoLink()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#111827] border border-white/10 hover:border-[#00D2FF]/40 rounded-lg transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#00D2FF]" />
                  <span>{t.contact.sendEmail}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Marketing Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
            <Compass className="w-3.5 h-3.5" />
            <span>{t.about.philosophyBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {t.about.philosophyTitle}
          </h2>
          <p className="text-[#AAB4C8] text-sm sm:text-base leading-relaxed">
            {t.about.bioP3}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.about.philosophies.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[#0D1117] border border-white/5 space-y-3"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#00D2FF]/10 text-[#00D2FF] flex items-center justify-center text-xs font-bold">
                  {idx + 1}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#AAB4C8] leading-relaxed pl-11">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Comprehensive Professional Expertise (All 13 Skills) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
            <Target className="w-3.5 h-3.5" />
            <span>{t.about.skillsBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {t.about.skillsTitle}
          </h2>
          <p className="text-[#AAB4C8] text-sm sm:text-base leading-relaxed">
            {t.about.noticeDesc}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROFESSIONAL_SKILLS.map((skill) => (
            <div
              key={skill.id}
              className="p-6 rounded-2xl bg-[#111827] border border-white/5 hover:border-[#00D2FF]/30 transition-all space-y-4"
            >
              <div>
                <h3 className="text-base font-bold text-white">
                  {skill.name}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#AAB4C8] leading-relaxed">
                {skill.description}
              </p>
              <div className="pt-3 border-t border-white/5 space-y-1.5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#00D2FF]">
                  Key Focal Areas:
                </p>
                <div className="flex flex-wrap gap-1.5 text-xs text-[#AAB4C8]">
                  {skill.keyPillars.map((pillar, i) => (
                    <span key={i} className="text-xs text-[#AAB4C8]">
                      {pillar}
                      {i < skill.keyPillars.length - 1 && <span className="ml-1.5 text-white/20">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Working Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t.about.processBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {t.about.processTitle}
          </h2>
          <p className="text-[#AAB4C8] text-sm sm:text-base leading-relaxed">
            {t.hero.description}
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {WORKING_PROCESS.map((item) => (
            <div
              key={item.step}
              className="p-6 sm:p-8 rounded-2xl bg-[#0D1117] border border-white/5 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
            >
              <div className="md:col-span-1 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#7F00FF]">
                {item.step}
              </div>
              <div className="md:col-span-4 space-y-1">
                <h3 className="text-lg font-bold text-white">
                  {item.title}
                </h3>
              </div>
              <div className="md:col-span-7 space-y-3">
                <p className="text-xs sm:text-sm text-[#AAB4C8] leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1 text-xs text-[#00D2FF]">
                  {item.focusAreas.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-[#AAB4C8]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Professional Goals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#111827] border border-white/5 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
              {t.about.goalsBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {t.about.goalsTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.about.goals.map((goal, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#0D1117] border border-white/5 space-y-2">
                <span className="text-xs font-semibold text-[#00D2FF]">0{idx + 1}</span>
                <p className="text-xs sm:text-sm text-[#AAB4C8] leading-relaxed">
                  {goal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Transparency Commitment */}
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

      {/* 7. Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="max-w-xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {t.about.bottomCtaTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#AAB4C8]">
            {t.about.bottomCtaDesc}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#00D2FF] to-[#7F00FF] rounded-lg shadow-md hover:opacity-95 transition-opacity"
          >
            <span>{t.about.contactBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => navigate('/services')}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#111827] border border-white/10 hover:border-[#00D2FF]/40 rounded-lg transition-colors"
          >
            <span>{t.about.servicesBtn}</span>
          </button>
        </div>
      </section>
    </div>
  );
};
