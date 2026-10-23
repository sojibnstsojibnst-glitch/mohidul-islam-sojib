import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProfilePhotoContextType {
  photoUrl: string | null;
  hasCustomPhoto: boolean;
}

const STORAGE_KEY = 'sojib_custom_profile_photo';
const CANDIDATE_DEFAULTS = [
  '/images/profile/mohidul-islam-sojib.webp',
  '/images/profile/mohidul-islam-sojib.jpeg',
  '/images/profile/mohidul-islam-sojib.jpg',
  '/images/profile/mohidul-islam-sojib.png'
];

const ProfilePhotoContext = createContext<ProfilePhotoContextType | undefined>(undefined);

export const ProfilePhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return saved;
    } catch {
      // storage unavailable
    }
    return null;
  });

  const [hasCustomPhoto] = useState<boolean>(() => {
    try {
      return !!localStorage.getItem(STORAGE_KEY);
    } catch {
      return false;
    }
  });

  // Check if default disk image exists if no custom photo saved
  useEffect(() => {
    if (!photoUrl) {
      let isCancelled = false;
      const testImages = async () => {
        for (const path of CANDIDATE_DEFAULTS) {
          if (isCancelled) break;
          const exists = await new Promise<boolean>((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = path;
          });
          if (exists && !isCancelled) {
            setPhotoUrl(path);
            break;
          }
        }
      };
      testImages();
      return () => {
        isCancelled = true;
      };
    }
  }, [hasCustomPhoto, photoUrl]);

  return (
    <ProfilePhotoContext.Provider
      value={{
        photoUrl,
        hasCustomPhoto
      }}
    >
      {children}
    </ProfilePhotoContext.Provider>
  );
};

export const useProfilePhoto = (): ProfilePhotoContextType => {
  const context = useContext(ProfilePhotoContext);
  if (!context) {
    throw new Error('useProfilePhoto must be used within a ProfilePhotoProvider');
  }
  return context;
};
