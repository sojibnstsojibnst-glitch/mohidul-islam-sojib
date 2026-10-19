import React, { useState, useRef } from 'react';
import { X, Upload, Camera, Trash2, CheckCircle2, AlertCircle, RefreshCw, Image as ImageIcon } from 'lucide-react';
import { useProfilePhoto } from '../context/ProfilePhotoContext';
import { useLanguage } from '../context/LanguageContext';

export const PhotoUploadModal: React.FC = () => {
  const {
    isUploadModalOpen,
    closeUploadModal,
    photoUrl,
    hasCustomPhoto,
    savePhotoFile,
    removeCustomPhoto
  } = useProfilePhoto();
  const { language } = useLanguage();

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isUploadModalOpen) return null;

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setErrorMsg(
        language === 'bn'
          ? 'অনুগ্রহ করে একটি ছবি ফাইল সিলেক্ট করুন (JPG, PNG, WebP)।'
          : language === 'bng'
          ? 'Doyakore ekta image file select korun (JPG, PNG, WebP).'
          : 'Please select an image file (JPG, PNG, WebP).'
      );
      return;
    }
    setErrorMsg(null);
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleSave = async () => {
    if (!selectedFile) return;
    setIsSaving(true);
    setErrorMsg(null);
    const success = await savePhotoFile(selectedFile);
    setIsSaving(false);
    if (success) {
      setSuccessMsg(true);
      setTimeout(() => {
        setSuccessMsg(false);
        closeUploadModal();
        setPreviewUrl(null);
        setSelectedFile(null);
      }, 1200);
    } else {
      setErrorMsg(
        language === 'bn'
          ? 'ছবি সংরক্ষণ করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।'
          : language === 'bng'
          ? 'Chobi save korte somosha hoyeche. Abar cheshta korun.'
          : 'Failed to save photo. Please try again.'
      );
    }
  };

  const handleRemove = () => {
    removeCustomPhoto();
    setPreviewUrl(null);
    setSelectedFile(null);
    closeUploadModal();
  };

  const activeDisplayPhoto = previewUrl || photoUrl;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="upload-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={closeUploadModal}
    >
      <div
        className="relative w-full max-w-lg bg-[#0D1117] border border-[#00D2FF]/30 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#00D2FF]/10 text-[#00D2FF]">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h3 id="upload-modal-title" className="text-lg font-bold text-white">
                {language === 'bn'
                  ? 'প্রোফাইল ছবি আপলোড'
                  : language === 'bng'
                  ? 'Profile Photo Upload'
                  : 'Upload Profile Photo'}
              </h3>
              <p className="text-xs text-[#AAB4C8]">
                {language === 'bn'
                  ? 'আপনার আসল ছবি আপলোড করে ওয়েবসাইটে স্থায়ীভাবে সেট করুন'
                  : language === 'bng'
                  ? 'Apnar real photo upload kore website e permanent set korun'
                  : 'Upload your real photo to display across the website'}
              </p>
            </div>
          </div>
          <button
            onClick={closeUploadModal}
            className="p-1.5 text-[#AAB4C8] hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current / Preview Area */}
        <div className="flex flex-col sm:flex-row items-center gap-5 p-4 rounded-xl bg-[#111827] border border-white/5">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#00D2FF]/40 shadow-lg shrink-0 bg-[#0B132B] flex items-center justify-center">
            {activeDisplayPhoto ? (
              <img
                src={activeDisplayPhoto}
                alt="Profile Preview"
                className="w-full h-full object-cover object-[35%_25%]"
              />
            ) : (
              <div className="text-xl font-extrabold text-[#00D2FF]">MIS</div>
            )}
            {previewUrl && (
              <div className="absolute top-1 right-1 px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#00D2FF] text-black uppercase tracking-wider">
                Preview
              </div>
            )}
          </div>

          <div className="space-y-1.5 text-center sm:text-left flex-1">
            <h4 className="text-sm font-semibold text-white">
              {previewUrl
                ? language === 'bn'
                  ? 'নতুন ছবির প্রিভিউ'
                  : language === 'bng'
                  ? 'Notun Chobir Preview'
                  : 'New Photo Preview'
                : hasCustomPhoto
                ? language === 'bn'
                  ? 'বর্তমানে সক্রিয় ছবি'
                  : language === 'bng'
                  ? 'Active Profile Photo'
                  : 'Active Profile Photo'
                : language === 'bn'
                ? 'কোনো কাস্টম ছবি নেই'
                : language === 'bng'
                ? 'Kono custom chobi nei'
                : 'Default Profile Display'}
            </h4>
            <p className="text-xs text-[#AAB4C8] leading-relaxed">
              {previewUrl
                ? language === 'bn'
                  ? 'এই ছবিটি আপনার পোর্টফোলিওতে সেট করতে নিচে "সেভ করুন" বাটনে চাপুন।'
                  : language === 'bng'
                  ? 'Ei chobiti save korte niche "Save Korun" button click korun.'
                  : 'Click "Save Photo" below to apply this photo across your portfolio.'
                : language === 'bn'
                ? 'আপনার ডিভাইস থেকে যেকোনো স্পষ্ট ছবি আপলোড করতে পারবেন।'
                : language === 'bng'
                ? 'Apnar device theke jekono clear photo upload korte parben.'
                : 'Upload a clear portrait photograph directly from your phone or computer.'}
            </p>
          </div>
        </div>

        {/* Drag and drop upload zone */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-xl p-6 sm:p-8 text-center cursor-pointer transition-all ${
            isDragging
              ? 'border-[#00D2FF] bg-[#00D2FF]/10'
              : 'border-white/20 hover:border-[#00D2FF]/60 hover:bg-white/5'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp,image/jpg"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFile(e.target.files[0]);
              }
            }}
          />
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="p-3 rounded-full bg-[#00D2FF]/10 text-[#00D2FF]">
              <Upload className="w-6 h-6" />
            </div>
            <p className="text-sm font-semibold text-white">
              {language === 'bn'
                ? 'ছবি নির্বাচন করতে ক্লিক করুন বা টেনে আনুন'
                : language === 'bng'
                ? 'Chobi select korte click korun ba drag & drop korun'
                : 'Click to browse or drag & drop photo here'}
            </p>
            <p className="text-xs text-[#AAB4C8]">
              JPG, PNG, or WebP (Max 15MB)
            </p>
          </div>
        </div>

        {/* Feedback message */}
        {errorMsg && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {successMsg && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>
              {language === 'bn'
                ? 'ছবি সফলভাবে সেট করা হয়েছে!'
                : language === 'bng'
                ? 'Chobi sofolbhabe set kora hoyeche!'
                : 'Profile photo saved successfully!'}
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          {hasCustomPhoto && (
            <button
              type="button"
              onClick={handleRemove}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-lg transition-colors border border-rose-500/20"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>
                {language === 'bn' ? 'ছবি রিমুভ করুন' : language === 'bng' ? 'Chobi Remove Korun' : 'Remove Photo'}
              </span>
            </button>
          )}

          <div className="flex items-center gap-2 ml-auto">
            <button
              type="button"
              onClick={closeUploadModal}
              className="px-4 py-2.5 text-xs font-semibold text-[#AAB4C8] hover:text-white bg-[#111827] border border-white/10 rounded-lg transition-colors"
            >
              {language === 'bn' ? 'বাতিল' : language === 'bng' ? 'Cancel' : 'Cancel'}
            </button>

            {previewUrl && (
              <button
                type="button"
                onClick={handleSave}
                disabled={isSaving}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#00D2FF] to-[#7F00FF] hover:opacity-95 rounded-lg shadow-md transition-all disabled:opacity-50"
              >
                {isSaving ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>
                      {language === 'bn' ? 'সংরক্ষণ হচ্ছে...' : language === 'bng' ? 'Saving...' : 'Saving...'}
                    </span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>
                      {language === 'bn' ? 'ছবি সেভ করুন' : language === 'bng' ? 'Chobi Save Korun' : 'Save Photo'}
                    </span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
