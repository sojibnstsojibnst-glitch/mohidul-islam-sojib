import React, { useState, useEffect } from 'react';
import { ImageOff, Sparkles } from 'lucide-react';

interface PortfolioImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync';
  category?: string;
}

export const PortfolioImage: React.FC<PortfolioImageProps> = ({
  src,
  alt,
  className = '',
  width = 400,
  height = 250,
  loading = 'lazy',
  decoding = 'async',
  category
}) => {
  // Compute candidate fallback list
  const getCandidates = (inputSrc: string): string[] => {
    if (!inputSrc) return [];
    if (inputSrc.startsWith('data:') || inputSrc.startsWith('blob:') || inputSrc.startsWith('http://') || inputSrc.startsWith('https://')) {
      return [inputSrc];
    }
    const list = [inputSrc];
    if (inputSrc.endsWith('.webp')) {
      list.push(inputSrc.replace('.webp', '.jpg'));
      list.push(inputSrc.replace('.webp', '.jpeg'));
      list.push(inputSrc.replace('.webp', '.png'));
    } else if (inputSrc.endsWith('.jpg')) {
      list.push(inputSrc.replace('.jpg', '.webp'));
      list.push(inputSrc.replace('.jpg', '.jpeg'));
      list.push(inputSrc.replace('.jpg', '.png'));
    }
    return Array.from(new Set(list));
  };

  const [candidates, setCandidates] = useState<string[]>(() => getCandidates(src));
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setCandidates(getCandidates(src));
    setCandidateIndex(0);
    setHasError(false);
  }, [src]);

  const handleImageError = () => {
    if (candidateIndex < candidates.length - 1) {
      setCandidateIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  const currentSrc = candidates[candidateIndex];

  if (hasError || !currentSrc) {
    return (
      <div className={`relative w-full h-full bg-[#111827] flex flex-col items-center justify-center p-4 text-center overflow-hidden ${className}`}>
        {/* Soft background glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#00D2FF]/10 via-transparent to-[#7F00FF]/15" />
        
        <div className="relative z-10 flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-xl bg-[#0B132B] border border-[#00D2FF]/30 flex items-center justify-center text-[#00D2FF] shadow-lg">
            <Sparkles className="w-6 h-6" />
          </div>
          {category && (
            <span className="text-[11px] font-semibold text-[#00D2FF] uppercase tracking-wider">
              {category}
            </span>
          )}
          <span className="text-xs font-medium text-white/90 line-clamp-1 max-w-[220px]">
            {alt}
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      onError={handleImageError}
      className={className}
      referrerPolicy="no-referrer"
    />
  );
};
