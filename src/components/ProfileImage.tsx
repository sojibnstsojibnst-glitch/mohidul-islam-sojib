import React, { useState } from 'react';
import { Camera, Upload } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';
import { useProfilePhoto } from '../context/ProfilePhotoContext';
import { useLanguage } from '../context/LanguageContext';

interface ProfileImageProps {
  className?: string;
  width?: number;
  height?: number;
  variant?: 'hero' | 'about' | 'thumbnail' | 'mobile';
  showUploadTrigger?: boolean;
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
  variant = 'hero',
  showUploadTrigger = true
}) => {
  const { photoUrl, openUploadModal } = useProfilePhoto();
  const { language } = useLanguage();
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
        <button
          type="button"
          onClick={openUploadModal}
          title="Upload Profile Photo"
          className="w-full h-full rounded-full bg-gradient-to-tr from-[#00D2FF]/30 to-[#7F00FF]/40 flex items-center justify-center text-xs font-bold text-[#00D2FF] hover:opacity-80 transition-opacity"
        >
          MIS
        </button>
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

        {showUploadTrigger && (
          <button
            type="button"
            onClick={openUploadModal}
            className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#00D2FF] to-[#7F00FF] rounded-lg shadow-md hover:opacity-90 transition-all z-10"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>
              {language === 'bn'
                ? 'ছবি আপলোড করুন'
                : language === 'bng'
                ? 'Chobi Upload Korun'
                : 'Upload Photo'}
            </span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="relative w-full h-full group">
      <img
        src={activeSrc}
        alt={PERSONAL_DATA.portraitAlt}
        width={width}
        height={height}
        className={className}
        onError={handleError}
        referrerPolicy="no-referrer"
        loading={variant === 'hero' ? 'eager' : 'lazy'}
      />

      {/* Floating Upload/Change Photo button overlay for Hero & About */}
      {(variant === 'hero' || variant === 'about') && showUploadTrigger && (
        <button
          type="button"
          onClick={openUploadModal}
          className="absolute top-3 right-3 p-2 rounded-xl bg-[#0D1117]/85 backdrop-blur-md border border-white/10 hover:border-[#00D2FF] text-[#AAB4C8] hover:text-white transition-all shadow-lg opacity-80 group-hover:opacity-100 z-20 flex items-center gap-1.5 text-xs font-medium"
          title={
            language === 'bn'
              ? 'প্রোফাইল ছবি পরিবর্তন / আপলোড করুন'
              : language === 'bng'
              ? 'Profile photo change / upload korun'
              : 'Change / upload profile photo'
          }
        >
          <Camera className="w-3.5 h-3.5 text-[#00D2FF]" />
          <span className="hidden sm:inline text-[11px]">
            {language === 'bn' ? 'ছবি পরিবর্তন' : language === 'bng' ? 'Change Photo' : 'Change Photo'}
          </span>
        </button>
      )}
    </div>
  );
};
