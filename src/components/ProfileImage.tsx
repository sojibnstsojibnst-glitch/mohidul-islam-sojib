import React, { useState } from 'react';
import { PERSONAL_DATA } from '../data/portfolioData';
import { useProfilePhoto } from '../context/ProfilePhotoContext';

interface ProfileImageProps {
  className?: string;
  width?: number;
  height?: number;
  variant?: 'hero' | 'about' | 'thumbnail' | 'mobile';
}

const CANDIDATE_PATHS = [
  '/images/profile/mohidul-islam-sojib.webp',
  '/images/profile/mohidul-islam-sojib.jpeg',
  '/images/profile/mohidul-islam-sojib.jpg',
  '/images/profile/mohidul-islam-sojib.png'
];

export const ProfileImage: React.FC<ProfileImageProps> = ({
  className = '',
  width,
  height,
  variant = 'hero'
}) => {
  const { photoUrl } = useProfilePhoto();
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [defaultFailed, setDefaultFailed] = useState(false);

  const handleError = () => {
    if (candidateIndex < CANDIDATE_PATHS.length - 1) {
      setCandidateIndex((prev) => prev + 1);
    } else {
      setDefaultFailed(true);
    }
  };

  const activeSrc = photoUrl || (!defaultFailed ? CANDIDATE_PATHS[candidateIndex] : null);

  if (!activeSrc) {
    if (variant === 'thumbnail' || variant === 'mobile') {
      return (
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#00D2FF]/30 to-[#7F00FF]/40 flex items-center justify-center text-xs font-bold text-[#00D2FF] select-none">
          MIS
        </div>
      );
    }

    return (
      <div className="w-full h-full bg-[#111827] flex flex-col items-center justify-center p-6 sm:p-8 text-center relative overflow-hidden select-none">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#00D2FF]/10 via-transparent to-[#7F00FF]/15" />

        {/* Monogram Badge */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-[#00D2FF] to-[#7F00FF] p-[2px] shadow-2xl shadow-[#00D2FF]/20 mb-3">
          <div className="w-full h-full bg-[#0D1117] rounded-2xl flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-wider bg-gradient-to-r from-[#00D2FF] to-[#FFFFFF] bg-clip-text text-transparent">
              MIS
            </span>
          </div>
        </div>

        <p className="text-base sm:text-lg font-bold text-white relative">
          {PERSONAL_DATA.fullName}
        </p>
        <p className="text-xs sm:text-sm font-medium text-[#00D2FF] mt-1 relative">
          {PERSONAL_DATA.designation}
        </p>
      </div>
    );
  }

  const intrinsicWidth = width || (variant === 'hero' ? 600 : variant === 'about' ? 400 : 48);
  const intrinsicHeight = height || (variant === 'hero' ? 600 : variant === 'about' ? 400 : 48);

  return (
    <div className="relative w-full h-full">
      <img
        src={activeSrc}
        alt={PERSONAL_DATA.portraitAlt}
        width={intrinsicWidth}
        height={intrinsicHeight}
        className={className}
        onError={handleError}
        referrerPolicy="no-referrer"
        loading={variant === 'hero' ? 'eager' : 'lazy'}
        decoding={variant === 'hero' ? 'sync' : 'async'}
        {...(variant === 'hero' ? { fetchPriority: 'high' } : {})}
      />
    </div>
  );
};
