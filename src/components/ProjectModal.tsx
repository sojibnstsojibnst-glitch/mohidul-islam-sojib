import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, MessageSquare, Target } from 'lucide-react';
import { PortfolioProject } from '../data/portfolioData';
import { createWhatsAppLink } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';

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
  const { t } = useLanguage();

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

  // Match translated project if available
  const translatedProject = t.portfolio.items.find((p) => p.id === project.id);
  const displayTitle = translatedProject?.title || project.title;
  const displayOverview = translatedProject?.overview || project.objective;
  const displayChallenge = translatedProject?.challenge || project.objective;
  const displayStrategy = translatedProject?.strategy || project.strategy;
  const displayResults = translatedProject?.results || project.resultsNote;
  const displayDeliverables = translatedProject?.keyDeliverables || project.deliverables;

  const whatsappInquiryUrl = createWhatsAppLink(
    `Hello Mohidul Islam Sojib, I reviewed your case study "${displayTitle}" and would like to discuss a similar campaign structure for my business.`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#0D1117] border border-[#00D2FF]/30 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#111827]">
          <div className="flex items-center gap-2 text-xs font-medium text-[#00D2FF]">
            <Target className="w-4 h-4" />
            <span>{translatedProject?.categoryLabel || project.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#AAB4C8] hover:text-white rounded-lg hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-[#00D2FF]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Project Media */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-[#111827] border border-white/10">
            <img
              src={project.thumbnail}
              alt={displayTitle}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent opacity-60" />
          </div>

          {/* Title */}
          <div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {displayTitle}
            </h2>
            <p className="text-sm text-[#AAB4C8] mt-2 leading-relaxed">
              {displayOverview}
            </p>
          </div>

          {/* Challenge */}
          <div className="p-4 rounded-xl bg-[#111827] border border-white/5 space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
              {t.portfolio.challengeLabel}
            </h4>
            <p className="text-sm text-[#AAB4C8] leading-relaxed">
              {displayChallenge}
            </p>
          </div>

          {/* Strategy */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">
              {t.portfolio.strategyLabel}
            </h4>
            <p className="text-sm text-[#AAB4C8] leading-relaxed">
              {displayStrategy}
            </p>
          </div>

          {/* Deliverables */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">
              {t.portfolio.deliverablesLabel}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#AAB4C8]">
              {displayDeliverables.map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-[#111827] border border-white/5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7F00FF]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="p-4 rounded-xl bg-[#0B132B] border border-[#00D2FF]/20 space-y-1.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
              {t.portfolio.resultsLabel}
            </h4>
            <p className="text-xs text-[#AAB4C8] leading-relaxed">
              {displayResults}
            </p>
          </div>
        </div>

        {/* Action Footer */}
        <div className="p-6 border-t border-white/10 bg-[#111827] flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366]/30 rounded-lg transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>{t.contact.chatWhatsApp}</span>
          </a>

          <button
            onClick={() => onDiscuss(displayTitle)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#00D2FF] to-[#7F00FF] rounded-lg hover:opacity-90 transition-opacity"
          >
            <span>{t.portfolio.discussCaseStudy}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
