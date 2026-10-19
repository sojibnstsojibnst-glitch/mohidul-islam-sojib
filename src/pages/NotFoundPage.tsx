import React from 'react';
import { Home } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface NotFoundPageProps {
  navigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ navigate }) => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full text-center space-y-8 p-8 sm:p-12 rounded-3xl bg-[#0D1117] border border-white/5">
        <div className="space-y-3">
          <span className="text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#7F00FF]">
            404
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {language === 'bn' ? 'পেজটি পাওয়া যায়নি' : language === 'bng' ? 'Page Paoa Jayni' : 'Page Not Found'}
          </h1>
          <p className="text-sm text-[#AAB4C8] leading-relaxed">
            {language === 'bn'
              ? `আপনি যে পেজটি খুঁজছেন তা বিদ্যমান নেই বা স্থানান্তরিত হয়েছে। ${PERSONAL_DATA.fullName}-এর পোর্টফোলিও দেখতে নিচের লিংকগুলো ব্যবহার করুন।`
              : language === 'bng'
              ? `Apni je page-ti khujchen ta pawa jayni ba relocate hoyeche. ${PERSONAL_DATA.fullName}-er portfolio explore korte nicher link gulo use korun.`
              : `The page you requested does not exist or may have been relocated. Use the options below to return to the verified sections of ${PERSONAL_DATA.fullName}'s portfolio.`}
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#00D2FF] to-[#7F00FF] rounded-lg shadow-md hover:opacity-95 transition-opacity"
          >
            <Home className="w-4 h-4" />
            <span>
              {language === 'bn' ? 'হোমে ফিরে যান' : language === 'bng' ? 'Home-e Phire Jan' : 'Return to Home'}
            </span>
          </button>
        </div>

        <div className="pt-6 border-t border-white/5 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#AAB4C8]">
            {language === 'bn' ? 'গুরুত্বপূর্ণ সেকশন' : language === 'bng' ? 'Quick Destinations' : 'Quick Destinations'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
            <button
              onClick={() => navigate('/about')}
              className="p-2.5 rounded-lg bg-[#111827] text-white hover:text-[#00D2FF] border border-white/5 hover:border-[#00D2FF]/30 transition-colors"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => navigate('/services')}
              className="p-2.5 rounded-lg bg-[#111827] text-white hover:text-[#00D2FF] border border-white/5 hover:border-[#00D2FF]/30 transition-colors"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => navigate('/portfolio')}
              className="p-2.5 rounded-lg bg-[#111827] text-white hover:text-[#00D2FF] border border-white/5 hover:border-[#00D2FF]/30 transition-colors"
            >
              {t.nav.portfolio}
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="p-2.5 rounded-lg bg-[#111827] text-white hover:text-[#00D2FF] border border-white/5 hover:border-[#00D2FF]/30 transition-colors"
            >
              {t.nav.contact}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
