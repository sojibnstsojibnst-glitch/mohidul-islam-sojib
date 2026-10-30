import React, { useState, useRef } from 'react';
import { X, Upload, Image as ImageIcon, Sparkles, Check, Globe } from 'lucide-react';
import { PortfolioProject } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (project: PortfolioProject) => void;
}

const CATEGORIES = [
  'Meta Ads',
  'Google Ads',
  'E-commerce Marketing',
  'Campaign Strategy',
  'Social Media Marketing',
  'Other Projects'
];

export const AddProjectModal: React.FC<AddProjectModalProps> = ({
  isOpen,
  onClose,
  onSave
}) => {
  const { language } = useLanguage();
  const isBn = language === 'bn';

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [description, setDescription] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [imageDataUrl, setImageDataUrl] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMsg(isBn ? 'অনুগ্রহ করে একটি সঠিক ছবি নির্বাচন করুন' : 'Please select a valid image file');
      return;
    }

    setErrorMsg('');
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setImageDataUrl(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setErrorMsg(isBn ? 'প্রজেক্ট টাইটেল দেওয়া আবশ্যক' : 'Project title is required');
      return;
    }
    if (!imageDataUrl) {
      setErrorMsg(isBn ? 'অনুগ্রহ করে প্রজেক্টের ছবি সিলেক্ট করুন' : 'Please select a project image');
      return;
    }

    setIsSubmitting(true);
    let finalThumbnail = imageDataUrl;

    try {
      const sanitizedName = title.trim().toLowerCase().replace(/[^a-z0-9]/g, '_').substring(0, 30);
      const res = await fetch('/api/save-portfolio-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dataUrl: imageDataUrl,
          filename: `portfolio_${sanitizedName}_${Date.now()}.webp`
        })
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.path) {
          finalThumbnail = data.path;
        }
      }
    } catch {
      // Offline or static environment: fallback to imageDataUrl
    }

    const newProject: PortfolioProject = {
      id: `custom-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      title: title.trim(),
      category: category,
      description: description.trim() || title.trim(),
      objective: description.trim() || 'Custom Client Growth Objective',
      role: 'Lead Digital Marketing & Campaign Strategist',
      tools: [category, 'Analytics', 'Conversion Tracking'],
      strategy: description.trim() || 'Executed data-driven campaign strategy aligned with business objectives.',
      features: [
        'Dedicated Campaign Architecture',
        'Conversion Tracking Integration',
        'Targeted Audience Segmentation'
      ],
      resultsNote: isBn ? 'বাস্তব ক্লায়েন্ট প্রজেক্ট ডেলিভারি সম্পন্ন' : 'Verified Project Delivery',
      deliverables: ['Custom Campaign Setup', 'Audience Segmentation', 'Weekly Reporting'],
      thumbnail: finalThumbnail,
      featured: true,
      liveUrl: liveUrl.trim() || undefined
    };

    onSave(newProject);
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl bg-[#0D1117] border border-[#00D2FF]/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00D2FF] to-[#7F00FF] p-[1px] flex items-center justify-center">
              <div className="w-full h-full bg-[#0D1117] rounded-[7px] flex items-center justify-center text-[#00D2FF]">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
            <div>
              <h3 id="add-project-modal-title" className="text-lg font-bold text-white">
                {isBn ? 'নতুন প্রজেক্ট বা ছবি যোগ করুন' : 'Add Project / Upload Image'}
              </h3>
              <p className="text-xs text-[#AAB4C8]">
                {isBn ? 'আপনার অরিজিনাল প্রজেক্ট ইমেজ ও তথ্য যোগ করুন' : 'Add your original project image and details'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#AAB4C8] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5">
          {errorMsg && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-xs text-red-400">
              {errorMsg}
            </div>
          )}

          {/* Image Upload Zone */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#AAB4C8]">
              {isBn ? 'প্রজেক্ট ইমেজ (Original Image)' : 'Project Image (Original Image)'} *
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            {imageDataUrl ? (
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#00D2FF]/40 group">
                <img
                  src={imageDataUrl}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3.5 py-2 text-xs font-semibold text-white bg-[#0B132B] border border-[#00D2FF] rounded-lg shadow"
                  >
                    {isBn ? 'ছবি পরিবর্তন করুন' : 'Change Image'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setImageDataUrl('')}
                    className="px-3.5 py-2 text-xs font-semibold text-red-400 bg-[#0B132B] border border-red-500/40 rounded-lg shadow"
                  >
                    {isBn ? 'মুছে ফেলুন' : 'Remove'}
                  </button>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full aspect-[16/9] border-2 border-dashed border-white/15 hover:border-[#00D2FF]/60 rounded-xl flex flex-col items-center justify-center p-6 text-center transition-colors bg-[#111827]/50 hover:bg-[#111827]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0B132B] border border-white/10 flex items-center justify-center text-[#00D2FF] mb-3">
                  <Upload className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold text-white">
                  {isBn ? 'ছবি নির্বাচন করতে ক্লিক করুন' : 'Click to select project image'}
                </p>
                <p className="text-xs text-[#AAB4C8] mt-1">
                  JPG, PNG, WebP supported
                </p>
              </button>
            )}
          </div>

          {/* Project Title */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#AAB4C8]">
              {isBn ? 'প্রজেক্টের নাম (Project Title)' : 'Project Title'} *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={isBn ? 'যেমন: Meta Performance Scaling for Fashion Brand' : 'e.g. Meta Performance Scaling for Fashion Brand'}
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#111827] border border-white/10 focus:border-[#00D2FF] focus:outline-none text-sm text-white placeholder-[#AAB4C8]/50"
              required
            />
          </div>

          {/* Category */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#AAB4C8]">
              {isBn ? 'ক্যাটাগরি (Category)' : 'Category'}
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#111827] border border-white/10 focus:border-[#00D2FF] focus:outline-none text-sm text-white"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#AAB4C8]">
              {isBn ? 'সংক্ষিপ্ত বিবরণ (Description / Strategy)' : 'Description / Strategy'}
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={isBn ? 'প্রজেক্টের কাজের উদ্দেশ্য, কৌশল ও অর্জন...' : 'Brief summary of the campaign strategy, objective, or results...'}
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#111827] border border-white/10 focus:border-[#00D2FF] focus:outline-none text-sm text-white placeholder-[#AAB4C8]/50 resize-none"
            />
          </div>

          {/* Live URL */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#AAB4C8]">
              {isBn ? 'লাইভ ওয়েবসাইট লিঙ্ক (যদি থাকে)' : 'Live Website Link (Optional)'}
            </label>
            <div className="relative">
              <Globe className="w-4 h-4 absolute left-3.5 top-3 text-[#AAB4C8]" />
              <input
                type="url"
                value={liveUrl}
                onChange={(e) => setLiveUrl(e.target.value)}
                placeholder="https://example.com"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-lg bg-[#111827] border border-white/10 focus:border-[#00D2FF] focus:outline-none text-sm text-white placeholder-[#AAB4C8]/50"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-[#AAB4C8] hover:text-white bg-[#111827] rounded-lg border border-white/10 transition-colors"
            >
              {isBn ? 'বাতিল' : 'Cancel'}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#00D2FF] to-[#7F00FF] rounded-lg shadow-md hover:opacity-95 transition-opacity disabled:opacity-50"
            >
              <Check className="w-4 h-4" />
              <span>{isBn ? 'প্রজেক্ট সেভ করুন' : 'Save Project'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
