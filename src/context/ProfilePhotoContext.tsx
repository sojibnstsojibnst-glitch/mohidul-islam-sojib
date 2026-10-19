import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface ProfilePhotoContextType {
  photoUrl: string | null;
  hasCustomPhoto: boolean;
  savePhotoFile: (file: File) => Promise<boolean>;
  removeCustomPhoto: () => void;
  isUploadModalOpen: boolean;
  openUploadModal: () => void;
  closeUploadModal: () => void;
}

const STORAGE_KEY = 'sojib_custom_profile_photo';
const CANDIDATE_DEFAULTS = [
  '/images/profile/mohidul-islam-sojib.webp',
  '/images/profile/mohidul-islam-sojib.jpeg',
  '/images/profile/mohidul-islam-sojib.jpg',
  '/images/profile/mohidul-islam-sojib.png'
];

const ProfilePhotoContext = createContext<ProfilePhotoContextType | undefined>(undefined);

// Helper to optimize image using HTML Canvas
const optimizeImage = (file: File, maxDim = 1200, quality = 0.92): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = () => reject(new Error('Failed to parse image'));
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(e.target?.result as string);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        // Try webp first, fallback to jpeg
        try {
          const webpData = canvas.toDataURL('image/webp', quality);
          if (webpData.startsWith('data:image/webp')) {
            resolve(webpData);
            return;
          }
        } catch {
          // fallback
        }
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
};

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

  const [hasCustomPhoto, setHasCustomPhoto] = useState<boolean>(() => {
    try {
      return !!localStorage.getItem(STORAGE_KEY);
    } catch {
      return false;
    }
  });

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

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
  }, [hasCustomPhoto]);

  const savePhotoFile = useCallback(async (file: File): Promise<boolean> => {
    try {
      const optimizedDataUrl = await optimizeImage(file);
      try {
        localStorage.setItem(STORAGE_KEY, optimizedDataUrl);
      } catch (err) {
        console.warn('LocalStorage quota issue, trying lower resolution:', err);
        const lowerRes = await optimizeImage(file, 800, 0.85);
        localStorage.setItem(STORAGE_KEY, lowerRes);
        setPhotoUrl(lowerRes);
        setHasCustomPhoto(true);
        return true;
      }
      setPhotoUrl(optimizedDataUrl);
      setHasCustomPhoto(true);
      return true;
    } catch (err) {
      console.error('Error saving photo file:', err);
      return false;
    }
  }, []);

  const removeCustomPhoto = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setHasCustomPhoto(false);
    setPhotoUrl(null);
  }, []);

  const openUploadModal = useCallback(() => setIsUploadModalOpen(true), []);
  const closeUploadModal = useCallback(() => setIsUploadModalOpen(false), []);

  return (
    <ProfilePhotoContext.Provider
      value={{
        photoUrl,
        hasCustomPhoto,
        savePhotoFile,
        removeCustomPhoto,
        isUploadModalOpen,
        openUploadModal,
        closeUploadModal
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
