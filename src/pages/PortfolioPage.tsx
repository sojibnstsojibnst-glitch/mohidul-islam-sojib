import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Filter,
  Layers,
  Info,
  Sparkles,
  ExternalLink,
  FileText,
  Trash2
} from 'lucide-react';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../data/portfolioData';
import { ProjectModal } from '../components/ProjectModal';
import { PortfolioImage } from '../components/PortfolioImage';
import {
  getStoredProjects,
  deleteStoredProject
} from '../utils/portfolioStorage';
import { useLanguage } from '../context/LanguageContext';

interface PortfolioPageProps {
  navigate: (path: string) => void;
}

type FilterKey = 'all' | 'meta' | 'google' | 'ecommerce' | 'strategy' | 'social';

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ navigate }) => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [customProjects, setCustomProjects] = useState<PortfolioProject[]>([]);

  const isBn = language === 'bn';

  // Load custom/uploaded projects from browser storage (IndexedDB & LocalStorage) on mount
  useEffect(() => {
    let isMounted = true;
    getStoredProjects().then((stored) => {
      if (isMounted && stored.length > 0) {
        setCustomProjects(stored);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleDeleteProject = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (window.confirm(isBn ? 'আপনি কি এই প্রজেক্টটি মুছে ফেলতে চান?' : 'Are you sure you want to remove this project?')) {
      await deleteStoredProject(id);
      setCustomProjects((prev) => prev.filter((p) => p.id !== id));
      if (selectedProject?.id === id) {
        setSelectedProject(null);
      }
    }
  };

  // Merge static portfolio projects with any custom/uploaded projects
  // If a stored project matches an id, the stored project (with custom image) takes precedence
  const allProjects = React.useMemo(() => {
    const customMap = new Map(customProjects.map((p) => [p.id, p]));
    const newCustoms: PortfolioProject[] = [];

    // Separate overrides vs purely new custom items
    customProjects.forEach((cp) => {
      if (!PORTFOLIO_PROJECTS.some((sp) => sp.id === cp.id)) {
        newCustoms.push(cp);
      }
    });

    // Replace any static project with custom version if modified
    const mergedStatic = PORTFOLIO_PROJECTS.map((sp) => {
      if (customMap.has(sp.id)) {
        return customMap.get(sp.id)!;
      }
      return sp;
    });

    return [...newCustoms, ...mergedStatic];
  }, [customProjects]);

  const filterTabs: Array<{ key: FilterKey; label: string }> = [
    {
      key: 'all',
      label: isBn ? 'সকল প্রজেক্ট' : 'All Projects'
    },
    {
      key: 'meta',
      label: isBn ? 'মেটা অ্যাডস' : 'Meta Ads'
    },
    {
      key: 'google',
      label: isBn ? 'গুগল অ্যাডস' : 'Google Ads'
    },
    {
      key: 'ecommerce',
      label: isBn ? 'ই-কমার্স' : 'E-commerce'
    },
    {
      key: 'strategy',
      label: isBn ? 'ক্যাম্পেইন স্ট্র্যাটেজি' : 'Campaign Strategy'
    },
    {
      key: 'social',
      label: isBn ? 'সোশ্যাল মিডিয়া' : 'Social Media'
    }
  ];

  const filteredProjects = allProjects.filter((p) => {
    if (activeFilter === 'all') return true;
    const cat = (p.category || '').toLowerCase();

    if (activeFilter === 'meta') {
      return cat.includes('meta') || cat.includes('facebook') || cat.includes('instagram');
    }
    if (activeFilter === 'google') {
      return cat.includes('google') || cat.includes('search') || cat.includes('pmax');
    }
    if (activeFilter === 'ecommerce') {
      return cat.includes('commerce') || cat.includes('e-commerce') || cat.includes('store');
    }
    if (activeFilter === 'strategy') {
      return cat.includes('strategy') || cat.includes('creative') || cat.includes('funnel');
    }
    if (activeFilter === 'social') {
      return cat.includes('social') || cat.includes('media') || cat.includes('brand');
    }
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
            <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
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
            <span>{isBn ? 'ফিল্টার:' : 'Filter:'}</span>
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

      {/* 3. Detailed Portfolio Grid with Multi-Format PortfolioImage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isCustom = project.id.startsWith('custom-');

            return (
              <div
                key={project.id}
                className="group relative rounded-2xl bg-[#0D1117] border border-white/5 hover:border-[#00D2FF]/30 transition-all flex flex-col justify-between overflow-hidden shadow-xl shadow-black/40"
              >
                {/* Media Container with Resilient PortfolioImage */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer relative aspect-[4/3] overflow-hidden bg-[#111827]"
                >
                  <PortfolioImage
                    src={project.thumbnail}
                    alt={project.title}
                    category={project.category}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent opacity-85 pointer-events-none" />

                  {/* Category label */}
                  <div className="absolute top-3 left-3 text-xs font-semibold text-[#00D2FF] bg-[#0B132B]/90 px-3 py-1 rounded-md border border-[#00D2FF]/30 backdrop-blur-sm pointer-events-none">
                    {project.category}
                  </div>

                  {/* Delete button if user-uploaded project */}
                  {isCustom && (
                    <button
                      type="button"
                      title={isBn ? 'প্রজেক্ট মুছুন' : 'Delete Project'}
                      onClick={(e) => handleDeleteProject(e, project.id)}
                      className="absolute top-3 right-3 p-1.5 rounded-md bg-red-500/80 hover:bg-red-500 text-white backdrop-blur-sm transition-colors z-10"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Card Content & Structured Overview */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    {/* Role badge */}
                    <div className="text-[11px] font-medium text-[#AAB4C8] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
                      <span className="truncate">{project.role}</span>
                    </div>

                    {/* Project Title */}
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="cursor-pointer text-base sm:text-lg font-bold text-white group-hover:text-[#00D2FF] transition-colors leading-snug line-clamp-2"
                    >
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-[#AAB4C8] leading-relaxed line-clamp-3">
                      {project.description || project.strategy}
                    </p>

                    {/* Tools & Tech Used Preview */}
                    {project.tools && project.tools.length > 0 && (
                      <div className="pt-1 flex flex-wrap gap-1.5">
                        {project.tools.slice(0, 3).map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 text-[10px] font-medium rounded bg-[#111827] text-[#AAB4C8] border border-white/5"
                          >
                            {tool}
                          </span>
                        ))}
                        {project.tools.length > 3 && (
                          <span className="px-1.5 py-0.5 text-[10px] text-[#AAB4C8]">
                            +{project.tools.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Highlights / Features List */}
                  <div className="space-y-3 pt-3 border-t border-white/5">
                    <div className="space-y-1">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#00D2FF]">
                        {isBn ? 'মূল স্ট্র্যাটেজি ও ডেলিভারেবলস:' : 'Key Highlights:'}
                      </p>
                      <p className="text-xs text-[#AAB4C8] truncate">
                        {project.deliverables?.join(' · ') || project.category}
                      </p>
                    </div>

                    {/* Card Action Buttons: View Details & Live Website */}
                    <div className="pt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#111827] hover:bg-white/10 border border-[#00D2FF]/30 hover:border-[#00D2FF] rounded-lg transition-all"
                      >
                        <FileText className="w-3.5 h-3.5 text-[#00D2FF]" />
                        <span>{isBn ? 'ডিটেইলস দেখুন' : 'View Details'}</span>
                      </button>

                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#0B132B] bg-[#00D2FF] hover:bg-[#00D2FF]/90 rounded-lg transition-colors shadow-sm"
                        >
                          <span>{isBn ? 'লাইভ লিঙ্ক' : 'Live Website'}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleDiscussProject(project.title)}
                          className="inline-flex items-center justify-center gap-1 px-3 py-2 text-xs font-medium text-[#AAB4C8] hover:text-white bg-[#111827] border border-white/10 rounded-lg transition-colors"
                        >
                          <span>{isBn ? 'আলোচনা' : 'Inquire'}</span>
                          <ArrowRight className="w-3 h-3 text-[#00D2FF]" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-[#0D1117] border border-white/5 space-y-3">
            <Layers className="w-8 h-8 text-[#AAB4C8] mx-auto opacity-50" />
            <h3 className="text-base font-semibold text-white">
              {isBn ? 'এই ক্যাটাগরিতে কোনো প্রজেক্ট পাওয়া যায়নি' : 'No projects found in this category'}
            </h3>
            <button
              onClick={() => setActiveFilter('all')}
              className="mt-2 px-4 py-2 text-xs font-semibold text-white bg-[#111827] border border-white/10 rounded-lg hover:border-[#00D2FF]"
            >
              {isBn ? 'সকল প্রজেক্ট দেখুন' : 'View All Projects'}
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

      {/* Comprehensive Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onDiscuss={handleDiscussProject}
      />
    </div>
  );
};
