import React, { useEffect } from 'react';
import {
  X,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Target,
  Briefcase,
  Wrench,
  Compass,
  TrendingUp,
  Package,
  Layers
} from 'lucide-react';
import { PortfolioProject } from '../data/portfolioData';
import { createWhatsAppLink } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';
import { PortfolioImage } from './PortfolioImage';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onDiscuss: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onDiscuss
}) => {
  const { language } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isBn = language === 'bn';
  const displayTitle = project.title;
  const displayCategory = project.category;
  const displayDesc = project.description || project.objective;
  const displayObjective = project.objective;
  const displayRole = project.role || 'Lead Performance Marketing Strategist';
  const displayTools = project.tools && project.tools.length > 0 ? project.tools : [project.category, 'Analytics', 'Conversion Tracking'];
  const displayStrategy = project.strategy;
  const displayFeatures = project.features && project.features.length > 0 ? project.features : project.executionDetails || [];
  const displayResults = project.resultsNote || (isBn ? 'বাস্তব ফলাফল সরবরাহ করা হয়নি (Results not provided)' : 'Results not provided');
  const displayDeliverables = project.deliverables || [];

  const whatsappInquiryUrl = createWhatsAppLink(
    `Hello Mohidul Islam Sojib, I reviewed your project "${displayTitle}" and would like to discuss a similar campaign strategy for my business.`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#0D1117] border border-[#00D2FF]/30 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#111827]">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
            <Target className="w-4 h-4" />
            <span>{displayCategory}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#AAB4C8] hover:text-white rounded-lg hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-[#00D2FF]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Project Media Thumbnail */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-[#111827] border border-white/10 shadow-lg">
            <PortfolioImage
              src={project.thumbnail}
              alt={displayTitle}
              category={displayCategory}
              width={800}
              height={450}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent opacity-60" />
            <div className="absolute top-3 left-3 text-xs font-semibold text-[#00D2FF] bg-[#0B132B]/85 px-3 py-1 rounded-md border border-[#00D2FF]/30 backdrop-blur-sm">
              {displayCategory}
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#00D2FF] text-[#0B132B] font-bold text-xs shadow-lg hover:bg-[#00D2FF]/90 transition-transform hover:scale-105"
              >
                <span>{isBn ? 'লাইভ ওয়েবসাইট দেখুন' : 'Live Website'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Title & Overview */}
          <div className="space-y-3">
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              {displayTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#AAB4C8] leading-relaxed">
              {displayDesc}
            </p>
          </div>

          {/* Project Details Grid (Role & Objective) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* My Role / Responsibilities */}
            <div className="p-4 rounded-xl bg-[#111827] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
                <Briefcase className="w-4 h-4" />
                <span>{isBn ? 'আমার ভূমিকা ও দায়িত্ব (My Role)' : 'My Role / Responsibilities'}</span>
              </div>
              <p className="text-xs sm:text-sm text-white font-medium">
                {displayRole}
              </p>
            </div>

            {/* Project Objective */}
            <div className="p-4 rounded-xl bg-[#111827] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
                <Target className="w-4 h-4" />
                <span>{isBn ? 'প্রজেক্টের মূল উদ্দেশ্য (Objective)' : 'Project Objective'}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#AAB4C8] leading-relaxed">
                {displayObjective}
              </p>
            </div>
          </div>

          {/* Tools & Technologies Used */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
              <Wrench className="w-4 h-4" />
              <span>{isBn ? 'ব্যবহৃত টুলস ও টেকনোলজি (Tools & Tech)' : 'Tools & Technologies Used'}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {displayTools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-[#111827] text-white border border-white/10 hover:border-[#00D2FF]/40 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Strategy & Execution */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
              <Compass className="w-4 h-4" />
              <span>{isBn ? 'স্ট্র্যাটেজি ও বাস্তবায়ন (Strategy & Execution)' : 'Strategy & Execution'}</span>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-[#111827] border border-white/5 text-xs sm:text-sm text-[#AAB4C8] leading-relaxed">
              {displayStrategy}
            </div>
          </div>

          {/* Key Features */}
          {displayFeatures.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
                <Layers className="w-4 h-4" />
                <span>{isBn ? 'মূল বৈশিষ্ট্যসমূহ (Key Features)' : 'Key Features'}</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {displayFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#111827]/70 border border-white/5 text-xs text-[#AAB4C8]">
                    <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Results / Outcomes */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
              <TrendingUp className="w-4 h-4" />
              <span>{isBn ? 'বাস্তব ফলাফল ও আউটকাম (Project Results)' : 'Project Results / Outcomes'}</span>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#00D2FF]/10 to-[#7F00FF]/10 border border-[#00D2FF]/30 text-xs sm:text-sm text-white leading-relaxed">
              {displayResults}
            </div>
          </div>

          {/* Deliverables */}
          {displayDeliverables.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
                <Package className="w-4 h-4" />
                <span>{isBn ? 'ডেলিভারেবলস (Deliverables)' : 'Project Deliverables'}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {displayDeliverables.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#111827] text-xs text-[#AAB4C8] border border-white/10"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 border-t border-white/10 bg-[#111827] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#0D1117] border border-[#00D2FF]/40 hover:border-[#00D2FF] rounded-lg transition-colors shadow-sm"
              >
                <span>{isBn ? 'লাইভ ওয়েবসাইট দেখুন' : 'Live Website'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#00D2FF]" />
              </a>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onDiscuss(displayTitle)}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#00D2FF] to-[#7F00FF] rounded-lg shadow-md hover:opacity-95 transition-opacity"
            >
              <span>{isBn ? 'অনুরূপ প্রজেক্ট নিয়ে আলোচনা করুন' : 'Discuss Similar Project'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#00D2FF] bg-white/5 hover:bg-white/10 border border-[#00D2FF]/30 rounded-lg transition-colors"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
