import React, { useState, useRef } from 'react';
import { X, Upload, Check, AlertCircle, Camera } from 'lucide-react';
import { useProfilePhoto } from '../context/ProfilePhotoContext';
import { useLanguage } from '../context/LanguageContext';

export const PhotoUploadModal: React.FC = () => {
  const { isUploadModalOpen, closeUploadModal, savePhotoFile, photoUrl } = useProfilePhoto();
  const { language } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isUploadModalOpen) return null;

  const handleFileChange = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setErrorMessage(
        language === 'bn'
          ? 'অনুগ্রহ করে একটি ছবি ফাইল (JPG, PNG, WebP) সিলেক্ট করুন।'
          : language === 'bng'
          ? 'Doyakore ekti chobi file (JPG, PNG, WebP) select korun.'
          : 'Please select a valid image file (JPG, PNG, WebP).'
      );
      return;
    }

    if (file.size > 15 * 1024 * 1024) {
      setErrorMessage(
        language === 'bn'
          ? 'ফাইলের সাইজ ১৫ এমবি-এর কম হতে হবে।'
          : 'File size must be under 15MB.'
      );
      return;
    }

    setErrorMessage(null);
    setSelectedFile(file);
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleSave = async () => {
    if (!selectedFile) return;
    setIsSaving(true);
    setErrorMessage(null);

    const success = await savePhotoFile(selectedFile);
    setIsSaving(false);

    if (success) {
      setSuccessMessage(true);
      setTimeout(() => {
        setSuccessMessage(false);
        closeUploadModal();
        setSelectedFile(null);
        setPreviewUrl(null);
      }, 1200);
    } else {
      setErrorMessage(
        language === 'bn'
          ? 'ছবি সংরক্ষণ করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।'
          : 'Failed to save photo. Please try again.'
      );
    }
  };

  const handleClose = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setErrorMessage(null);
    setSuccessMessage(false);
    closeUploadModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-[#0D1117] border border-[#00D2FF]/30 rounded-2xl shadow-2xl p-6 sm:p-7 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#00D2FF]/10 text-[#00D2FF]">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {language === 'bn'
                  ? 'প্রোফাইল ছবি আপলোড'
                  : language === 'bng'
                  ? 'Profile Photo Upload'
                  : 'Upload Profile Photo'}
              </h3>
              <p className="text-xs text-[#AAB4C8]">
                {language === 'bn'
                  ? 'আপনার আসল ছবি আপলোড করুন'
                  : 'Upload your genuine portrait photo'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="p-1.5 rounded-lg text-[#AAB4C8] hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Upload Drop Zone / Preview */}
        {previewUrl ? (
          <div className="space-y-4">
            <div className="relative aspect-square max-w-[240px] mx-auto rounded-2xl overflow-hidden border-2 border-[#00D2FF] bg-[#111827] shadow-xl shadow-[#00D2FF]/20">
              <img
                src={previewUrl}
                alt="Selected Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="text-xs text-[#00D2FF] hover:underline"
              >
                {language === 'bn' ? 'অন্য ছবি সিলেক্ট করুন' : 'Choose a different photo'}
              </button>
            </div>
          </div>
        ) : (
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
              isDragging
                ? 'border-[#00D2FF] bg-[#00D2FF]/10 scale-[1.01]'
                : 'border-white/15 hover:border-[#00D2FF]/50 hover:bg-white/[0.02]'
            }`}
          >
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#111827] flex items-center justify-center text-[#00D2FF] border border-white/10">
              <Upload className="w-6 h-6" />
            </div>
            <p className="text-sm font-semibold text-white">
              {language === 'bn'
                ? 'ছবি ক্লিক করুন অথবা ড্র্যাগ করুন'
                : language === 'bng'
                ? 'Chobi click korun ba drag korun'
                : 'Click to select or drag & drop photo'}
            </p>
            <p className="text-xs text-[#AAB4C8] mt-1.5">
              JPG, PNG, JPEG, WebP (Max 15MB)
            </p>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/png, image/jpeg, image/jpg, image/webp"
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              handleFileChange(e.target.files[0]);
            }
          }}
        />

        {/* Error message */}
        {errorMessage && (
          <div className="flex items-center gap-2 p-3 text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Success message */}
        {successMessage && (
          <div className="flex items-center gap-2 p-3 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
            <Check className="w-4 h-4 shrink-0" />
            <span>
              {language === 'bn'
                ? 'ছবি সফলভাবে সংরক্ষিত হয়েছে!'
                : 'Profile photo saved successfully!'}
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={handleClose}
            className="px-4 py-2 text-xs font-semibold text-[#AAB4C8] hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-colors"
          >
            {language === 'bn' ? 'বাতিল' : 'Cancel'}
          </button>

          {previewUrl && (
            <button
              type="button"
              onClick={handleSave}
              disabled={isSaving || successMessage}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#00D2FF] to-[#7F00FF] rounded-xl hover:opacity-90 disabled:opacity-50 transition-all shadow-md shadow-[#00D2FF]/20"
            >
              {isSaving ? (
                <span>{language === 'bn' ? 'সেভ হচ্ছে...' : 'Saving...'}</span>
              ) : successMessage ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>{language === 'bn' ? 'সেভড!' : 'Saved!'}</span>
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4" />
                  <span>{language === 'bn' ? 'ছবি সেভ করুন' : 'Save Photo'}</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
