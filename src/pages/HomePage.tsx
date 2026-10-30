import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Phone,
  Mail,
  TrendingUp,
  Layers,
  Sparkles,
  Target,
  BarChart2,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import {
  PERSONAL_DATA,
  PROFESSIONAL_SKILLS,
  SERVICES_LIST,
  PORTFOLIO_PROJECTS,
  WORKING_PROCESS,
  TRANSPARENCY_NOTICE,
  PortfolioProject
} from '../data/portfolioData';
import { createWhatsAppLink, createMailtoLink } from '../utils/whatsapp';
import { ProjectModal } from '../components/ProjectModal';
import { ProfileImage } from '../components/ProfileImage';
import { PortfolioImage } from '../components/PortfolioImage';
import { useLanguage } from '../context/LanguageContext';

interface HomePageProps {
  navigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const { t } = useLanguage();

  const handleDiscussProject = (projectTitle: string) => {
    setSelectedProject(null);
    navigate(`/contact?project=${encodeURIComponent(projectTitle)}`);
  };

  const handleDiscussService = (serviceTitle: string) => {
    navigate(`/contact?service=${encodeURIComponent(serviceTitle)}`);
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. Hero Section (Strict Split View Hierarchy) */}
      <section className="relative pt-8 sm:pt-16 pb-12 overflow-hidden">
        {/* Soft cyan & purple radial background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#00D2FF]/10 to-[#7F00FF]/15 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Typographic Hierarchy */}
            <div className="lg:col-span-7 space-y-6">
              {/* Small label */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#00D2FF]">
                <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
                <span>{t.hero.badge}</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none text-balance">
                {PERSONAL_DATA.fullName}
              </h1>

              {/* Professional Title & Supporting Headline */}
              <div className="space-y-2">
                <p className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#7F00FF]">
                  {t.hero.subheadline}
                  <span className="text-[#AAB4C8] font-normal text-base block sm:inline sm:ml-2">
                    at {PERSONAL_DATA.organization}
                  </span>
                </p>
                <p className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  {t.hero.headline}
                </p>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-[#AAB4C8] leading-relaxed max-w-2xl">
                {t.hero.description}
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#00D2FF] to-[#7F00FF] rounded-lg shadow-lg shadow-[#00D2FF]/20 hover:opacity-95 transition-all focus-visible:outline-2 focus-visible:outline-[#00D2FF]"
                >
                  <span>{t.hero.ctaHire}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigate('/portfolio')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#111827] border border-white/10 hover:border-[#00D2FF]/40 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#00D2FF]"
                >
                  <span>{t.hero.ctaPortfolio}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#AAB4C8]" />
                </button>
              </div>

              {/* Key Quick Facts */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-[#AAB4C8]">
                <span>{PERSONAL_DATA.location}</span>
                <span aria-hidden="true">·</span>
                <span>{t.hero.performanceGrowth}</span>
                <span aria-hidden="true">·</span>
                <span>{t.hero.metaGoogle}</span>
                <span aria-hidden="true">·</span>
                <span>{t.hero.dataDriven}</span>
              </div>
            </div>

            {/* Right Column: Portrait Area */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md aspect-square">
                {/* Subtle cyan and purple ambient glow */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#00D2FF]/50 via-[#7F00FF]/40 to-[#00D2FF]/50 blur-xl opacity-60 group-hover:opacity-85 transition duration-500" />

                {/* Elegant Rounded Rectangular Portrait Card */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#111827] border border-[#00D2FF]/30 shadow-2xl">
                  <ProfileImage
                    variant="hero"
                    width={480}
                    height={480}
                    className="w-full h-full object-cover object-[35%_25%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/80 via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Identification Pill/Card Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#0D1117]/90 backdrop-blur-md border border-white/10">
                    <p className="text-xs font-bold text-white tracking-tight">
                      {PERSONAL_DATA.fullName}
                    </p>
                    <p className="text-[11px] font-medium text-[#00D2FF]">
                      {t.hero.subheadline} · {PERSONAL_DATA.organization}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Pillars Strip (Full-width row below hero split) */}
        <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#0D1117] border border-white/5">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#00D2FF]">
                <Target className="w-4 h-4" />
                <span>{t.hero.pillars.p1Title}</span>
              </div>
              <p className="text-xs text-[#AAB4C8] leading-relaxed">
                {t.hero.pillars.p1Desc}
              </p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#00D2FF]">
                <TrendingUp className="w-4 h-4" />
                <span>{t.hero.pillars.p2Title}</span>
              </div>
              <p className="text-xs text-[#AAB4C8] leading-relaxed">
                {t.hero.pillars.p2Desc}
              </p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#00D2FF]">
                <BarChart2 className="w-4 h-4" />
                <span>{t.hero.pillars.p3Title}</span>
              </div>
              <p className="text-xs text-[#AAB4C8] leading-relaxed">
                {t.hero.pillars.p3Desc}
              </p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#00D2FF]">
                <Layers className="w-4 h-4" />
                <span>{t.hero.pillars.p4Title}</span>
              </div>
              <p className="text-xs text-[#AAB4C8] leading-relaxed">
                {t.hero.pillars.p4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Expertise Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
            <span>{t.about.skillsBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {t.about.skillsTitle}
          </h2>
          <p className="text-[#AAB4C8] text-sm sm:text-base leading-relaxed">
            {t.about.bioP2}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROFESSIONAL_SKILLS.slice(0, 6).map((skill) => (
            <div
              key={skill.id}
              className="p-6 rounded-2xl bg-[#111827] border border-white/5 hover:border-[#00D2FF]/30 transition-all space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white group-hover:text-[#00D2FF] transition-colors">
                  {skill.name}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#AAB4C8] leading-relaxed">
                {skill.description}
              </p>
              <div className="pt-2 border-t border-white/5 flex flex-wrap items-center gap-2 text-xs text-[#00D2FF]">
                {skill.keyPillars.map((pillar, idx) => (
                  <span key={idx} className="text-[11px] text-[#AAB4C8]">
                    {pillar}
                    {idx < skill.keyPillars.length - 1 && <span className="ml-2 text-white/20">/</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center sm:text-left">
          <button
            onClick={() => navigate('/about')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00D2FF] hover:underline"
          >
            <span>{t.about.pageTitle}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 3. Featured Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
              <span>{t.services.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {t.hero.servicesPreviewTitle}
            </h2>
            <p className="text-[#AAB4C8] text-sm sm:text-base leading-relaxed">
              {t.hero.servicesPreviewSubtitle}
            </p>
          </div>

          <button
            onClick={() => navigate('/services')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#111827] border border-white/10 hover:border-[#00D2FF]/40 rounded-lg transition-colors whitespace-nowrap self-start md:self-auto"
          >
            <span>{t.hero.viewAllServices}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.services.items.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#0D1117] border border-white/5 hover:border-[#00D2FF]/30 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#AAB4C8] leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="space-y-2 pt-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
                    {t.services.deliverablesLabel}:
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#AAB4C8]">
                    {service.deliverables.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                <button
                  onClick={() => handleDiscussService(service.title)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-[#111827] border border-[#00D2FF]/20 hover:border-[#00D2FF] hover:bg-[#00D2FF]/10 rounded-lg transition-colors"
                >
                  <span>{t.services.inquireBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#00D2FF]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Selected Case Studies Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
              <span>{t.portfolio.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {t.hero.featuredWorkTitle}
            </h2>
            <p className="text-[#AAB4C8] text-sm sm:text-base leading-relaxed">
              {t.hero.featuredWorkSubtitle}
            </p>
          </div>

          <button
            onClick={() => navigate('/portfolio')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#111827] border border-white/10 hover:border-[#00D2FF]/40 rounded-lg transition-colors whitespace-nowrap self-start md:self-auto"
          >
            <span>{t.hero.viewAllWork}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PORTFOLIO_PROJECTS.slice(0, 2).map((project) => {
            const translatedProj = t.portfolio.items.find((p) => p.id === project.id);
            const title = translatedProj?.title || project.title;
            const strategy = translatedProj?.strategy || project.strategy;
            const category = translatedProj?.categoryLabel || project.category;

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-2xl bg-[#111827] border border-white/5 hover:border-[#00D2FF]/30 transition-all overflow-hidden flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden bg-[#0D1117]">
                  <PortfolioImage
                    src={project.thumbnail}
                    alt={title}
                    category={category}
                    width={600}
                    height={338}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80 pointer-events-none" />
                  <div className="absolute top-4 left-4 text-xs font-medium text-[#00D2FF] bg-[#0B132B]/80 px-2.5 py-1 rounded-md border border-[#00D2FF]/20 backdrop-blur-sm">
                    {category}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00D2FF] transition-colors">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#AAB4C8] leading-relaxed line-clamp-2">
                      {strategy}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-[#AAB4C8]">{t.common.resultsMetric}</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-[#00D2FF] group-hover:translate-x-1 transition-transform">
                      <span>{t.portfolio.viewCaseStudy}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Working Process Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0D1117] border border-white/10 space-y-10">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
              <span>{t.about.processBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {t.about.processTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#AAB4C8] leading-relaxed">
              {t.about.noticeDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {WORKING_PROCESS.map((item) => (
              <div key={item.step} className="space-y-2">
                <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#7F00FF]">
                  {item.step}
                </span>
                <h3 className="text-sm font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-[#AAB4C8] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Transparency Commitment Banner */}
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

      {/* 7. Direct Contact Call-to-Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 bg-gradient-to-br from-[#111827] via-[#0D1117] to-[#0B132B] border border-[#00D2FF]/30 text-center space-y-6">
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.hero.ctaSectionTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#AAB4C8] leading-relaxed">
              {t.hero.ctaSectionDesc}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-lg transition-colors shadow-lg shadow-[#25D366]/20"
            >
              <Phone className="w-4 h-4" />
              <span>{t.hero.messageWhatsApp}</span>
            </a>

            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#00D2FF] to-[#7F00FF] rounded-lg shadow-lg hover:opacity-95 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              <span>{t.hero.sendInquiry}</span>
            </button>
          </div>

          <p className="text-xs text-[#AAB4C8]">
            {t.hero.responseNotice}
          </p>
        </div>
      </section>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onDiscuss={handleDiscussProject}
      />
    </div>
  );
};
