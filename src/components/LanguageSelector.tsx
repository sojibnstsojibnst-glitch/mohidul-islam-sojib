import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../i18n/translations';

interface LanguageSelectorProps {
  variant?: 'navbar' | 'mobile';
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = 'navbar',
  className = ''
}) => {
  const { language, setLanguage, options } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const currentOption = options.find((opt) => opt.code === language) || options[0];

  if (variant === 'mobile') {
    return (
      <div className={`space-y-2 pt-2 ${className}`}>
        <div className="flex items-center gap-2 text-xs font-semibold text-[#AAB4C8] uppercase tracking-wider px-1">
          <Globe className="w-3.5 h-3.5 text-[#00D2FF]" />
          <span>Language / ভাষা</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-[#111827] border border-white/10">
          {options.map((opt) => {
            const isActive = opt.code === language;
            return (
              <button
                key={opt.code}
                type="button"
                onClick={() => setLanguage(opt.code)}
                className={`py-2 px-2 text-xs font-semibold rounded-lg transition-all text-center ${
                  isActive
                    ? 'bg-gradient-to-r from-[#00D2FF] to-[#7F00FF] text-white shadow-sm'
                    : 'text-[#AAB4C8] hover:text-white hover:bg-white/5'
                }`}
                aria-pressed={isActive}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#AAB4C8] hover:text-white bg-[#111827] hover:bg-white/5 border border-white/10 hover:border-[#00D2FF]/40 rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select language"
      >
        <Globe className="w-3.5 h-3.5 text-[#00D2FF]" />
        <span className="font-semibold text-white">{currentOption.label}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-[#AAB4C8] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label="Language selection"
          className="absolute right-0 mt-2 w-36 rounded-xl bg-[#0D1117] border border-[#00D2FF]/30 shadow-2xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          {options.map((opt) => {
            const isActive = opt.code === language;
            return (
              <button
                key={opt.code}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => {
                  setLanguage(opt.code as Language);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  isActive
                    ? 'bg-[#00D2FF]/15 text-[#00D2FF]'
                    : 'text-[#AAB4C8] hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{opt.label}</span>
                {isActive && <Check className="w-3.5 h-3.5 text-[#00D2FF]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
