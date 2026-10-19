import React, { useState } from 'react';
import {
  ArrowRight,
  Filter,
  Layers,
  Info
} from 'lucide-react';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../data/portfolioData';
import { ProjectModal } from '../components/ProjectModal';
import { useLanguage } from '../context/LanguageContext';

interface PortfolioPageProps {
  navigate: (path: string) => void;
}

type FilterKey = 'all' | 'meta' | 'google' | 'ecommerce' | 'strategy';

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ navigate }) => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const { t } = useLanguage();

  const filterTabs: Array<{ key: FilterKey; label: string }> = [
    { key: 'all', label: t.portfolio.allCategories },
    { key: 'meta', label: t.portfolio.categoryMeta },
    { key: 'google', label: t.portfolio.categoryGoogle },
    { key: 'ecommerce', label: t.portfolio.categoryEcommerce },
    { key: 'strategy', label: t.portfolio.categoryStrategy }
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'meta') return p.category.toLowerCase().includes('meta');
    if (activeFilter === 'google') return p.category.toLowerCase().includes('google');
    if (activeFilter === 'ecommerce') return p.category.toLowerCase().includes('commerce');
    if (activeFilter === 'strategy') return p.category.toLowerCase().includes('strategy') || p.category.toLowerCase().includes('creative');
    return true;
  });

  const handleDiscussProject = (projectTitle: string) => {
    setSelectedProject(null);
    navigate(`/contact?project=${encodeURIComponent(projectTitle)}`);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* 1. Header */}
      <section className="pt-12 sm:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
            <span>{t.portfolio.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.portfolio.pageTitle}
          </h1>
          <p className="text-sm sm:text-base text-[#AAB4C8] leading-relaxed">
            {t.portfolio.pageSubtitle}
          </p>
        </div>
      </section>

      {/* 2. Category Filter Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-2 rounded-xl bg-[#0D1117] border border-white/5 flex flex-wrap items-center gap-1.5">
          <div className="hidden sm:flex items-center gap-2 px-3 py-2 text-xs text-[#AAB4C8] font-medium border-r border-white/10 mr-1">
            <Filter className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>Filter:</span>
          </div>

          {filterTabs.map((tab) => {
            const isSelected = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveFilter(tab.key)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#00D2FF] ${
                  isSelected
                    ? 'bg-[#111827] text-white border border-[#00D2FF]/40 shadow-sm'
                    : 'text-[#AAB4C8] hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const translatedProject = t.portfolio.items.find((p) => p.id === project.id);
            const title = translatedProject?.title || project.title;
            const strategy = translatedProject?.strategy || project.strategy;
            const categoryLabel = translatedProject?.categoryLabel || project.category;
            const deliverables = translatedProject?.keyDeliverables || project.deliverables;

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-2xl bg-[#0D1117] border border-white/5 hover:border-[#00D2FF]/30 transition-all flex flex-col justify-between overflow-hidden"
              >
                {/* Media Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#111827]">
                  <img
                    src={project.thumbnail}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent opacity-80" />
                  
                  {/* Category label */}
                  <div className="absolute top-3 left-3 text-xs font-semibold text-[#00D2FF] bg-[#0B132B]/85 px-2.5 py-1 rounded-md border border-[#00D2FF]/20 backdrop-blur-sm">
                    {categoryLabel}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00D2FF] transition-colors leading-snug">
                      {title}
                    </h3>
                    <p className="text-xs text-[#AAB4C8] leading-relaxed line-clamp-3">
                      {strategy}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-white/5">
                    <div className="space-y-1">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#00D2FF]">
                        {t.portfolio.deliverablesLabel}:
                      </p>
                      <p className="text-xs text-[#AAB4C8] truncate">
                        {deliverables.join(' · ')}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-[#AAB4C8]">{t.common.resultsMetric}</span>
                      <span className="inline-flex items-center gap-1 font-semibold text-[#00D2FF] group-hover:translate-x-1 transition-transform">
                        <span>{t.portfolio.viewCaseStudy}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-[#0D1117] border border-white/5 space-y-3">
            <Layers className="w-8 h-8 text-[#AAB4C8] mx-auto" />
            <h3 className="text-base font-semibold text-white">No projects found in this category</h3>
            <button
              onClick={() => setActiveFilter('all')}
              className="mt-2 px-4 py-2 text-xs font-semibold text-white bg-[#111827] border border-white/10 rounded-lg hover:border-[#00D2FF]"
            >
              {t.portfolio.allCategories}
            </button>
          </div>
        )}
      </section>

      {/* 4. Honest Data & Methodology Disclosure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-[#111827] border border-white/5 flex items-start gap-4">
          <Info className="w-5 h-5 text-[#00D2FF] shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs text-[#AAB4C8] leading-relaxed">
            <span className="font-semibold text-white block">{t.about.noticeTitle}:</span>
            {t.footer.disclaimer}
          </div>
        </div>
      </section>

      {/* 5. Custom Project Call-to-Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0D1117] border border-white/10 text-center space-y-6">
          <div className="space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {t.portfolio.ctaTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#AAB4C8] leading-relaxed">
              {t.portfolio.ctaDesc}
            </p>
          </div>

          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#00D2FF] to-[#7F00FF] rounded-lg shadow-md hover:opacity-95 transition-opacity"
          >
            <span>{t.portfolio.ctaBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
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
