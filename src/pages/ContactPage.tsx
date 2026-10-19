import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Copy,
  Clock,
  ShieldCheck,
  Building
} from 'lucide-react';
import { PERSONAL_DATA, SERVICES_LIST } from '../data/portfolioData';
import { createWhatsAppLink, createMailtoLink } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';

interface ContactPageProps {
  initialService?: string;
  initialProject?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialService = '',
  initialProject = ''
}) => {
  const { t, language } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedService, setSelectedService] = useState(initialService || 'General Performance Marketing Consultation');
  const [budget, setBudget] = useState('Standard / Flexible');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    service: string;
    budget: string;
    message: string;
    timestamp: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // If URL has query params on initial load
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get('service');
    const projectParam = params.get('project');

    if (serviceParam) {
      setSelectedService(serviceParam);
    } else if (projectParam) {
      setMessage(
        language === 'bn'
          ? `আসসালামু আলাইকুম মহিদুল ইসলাম সজীব, আমি "${projectParam}" এর অনুরূপ একটি ক্যাম্পেইন নিয়ে আলোচনা করতে আগ্রহী।`
          : language === 'bng'
          ? `Hi Mohidul Islam Sojib, ami "${projectParam}" er moton ekta campaign structure niye discuss korte chai.`
          : `Hi Mohidul Islam Sojib, I am interested in exploring a campaign framework similar to "${projectParam}".`
      );
    }
  }, [language]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) {
      errs.name =
        language === 'bn'
          ? 'অনুগ্রহ করে আপনার বা প্রতিষ্ঠানের নাম লিখুন।'
          : language === 'bng'
          ? 'Doyakore apnar ba company-r nam likhun.'
          : 'Please provide your name or company name.';
    }
    if (!email.trim()) {
      errs.email =
        language === 'bn'
          ? 'অনুগ্রহ করে আপনার ইমেইল অ্যাড্রেস প্রদান করুন।'
          : language === 'bng'
          ? 'Doyakore apnar email address provide korun.'
          : 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email =
        language === 'bn'
          ? 'অনুগ্রহ করে একটি সঠিক ইমেইল অ্যাড্রেস প্রদান করুন।'
          : language === 'bng'
          ? 'Doyakore ekti valid email format likhun.'
          : 'Please provide a valid email format.';
    }
    if (!message.trim()) {
      errs.message =
        language === 'bn'
          ? 'অনুগ্রহ করে আপনার প্রজেক্ট বা ব্যবসায়িক লক্ষ্য সংক্ষেপে লিখুন।'
          : language === 'bng'
          ? 'Doyakore apnar marketing inquiry ba goal describe korun.'
          : 'Please provide a brief description of your marketing inquiry or goals.';
    } else if (message.trim().length < 10) {
      errs.message =
        language === 'bn'
          ? 'বার্তাটি অন্তত ১০ অক্ষরের হতে হবে।'
          : language === 'bng'
          ? 'Message ontoto 10 character er hote hobe.'
          : 'Message must be at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Structured data record
    const record = {
      name: name.trim(),
      email: email.trim(),
      service: selectedService,
      budget,
      message: message.trim(),
      timestamp: new Date().toLocaleString()
    };

    setSubmittedData(record);
  };

  const getFormWhatsAppMessage = () => {
    if (!submittedData) return '';
    return `*New Project Inquiry for Mohidul Islam Sojib*\n\n` +
      `*Name:* ${submittedData.name}\n` +
      `*Email:* ${submittedData.email}\n` +
      `*Service Required:* ${submittedData.service}\n` +
      `*Budget Range:* ${submittedData.budget}\n` +
      `*Project Details:* ${submittedData.message}\n\n` +
      `_Sent via Portfolio Website_`;
  };

  const getFormMailtoUrl = () => {
    if (!submittedData) return createMailtoLink();
    const subject = `Project Inquiry: ${submittedData.service} - from ${submittedData.name}`;
    const body = `Name: ${submittedData.name}\nEmail: ${submittedData.email}\nService: ${submittedData.service}\nBudget: ${submittedData.budget}\n\nProject Scope & Message:\n${submittedData.message}\n\nSent: ${submittedData.timestamp}`;
    return createMailtoLink(subject, body);
  };

  const handleCopySummary = () => {
    if (!submittedData) return;
    const text = `Name: ${submittedData.name}\nEmail: ${submittedData.email}\nService: ${submittedData.service}\nBudget: ${submittedData.budget}\nMessage: ${submittedData.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleResetForm = () => {
    setSubmittedData(null);
    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
  };

  const budgetOptions = [
    {
      value: 'Standard / Flexible',
      label:
        language === 'bn'
          ? 'স্ট্যান্ডার্ড / বিকল্প পর্যালোচনা'
          : language === 'bng'
          ? 'Standard / Exploring Options'
          : 'Standard / Exploring Options'
    },
    {
      value: 'Under $1,000 / month (Startup / Initial Launch)',
      label:
        language === 'bn'
          ? '$১,০০০ এর নিচে / মাস (স্টার্টআপ / প্রাথমিক লঞ্চ)'
          : language === 'bng'
          ? 'Under $1,000 / month (Startup / Initial Launch)'
          : 'Under $1,000 / month (Startup / Initial Launch)'
    },
    {
      value: '$1,000 - $3,000 / month',
      label:
        language === 'bn'
          ? '$১,০০০ - $৩,০০০ / মাস'
          : language === 'bng'
          ? '$1,000 - $3,000 / month'
          : '$1,000 - $3,000 / month'
    },
    {
      value: '$3,000 - $10,000 / month',
      label:
        language === 'bn'
          ? '$৩,০০০ - $১০,০০০ / মাস'
          : language === 'bng'
          ? '$3,000 - $10,000 / month'
          : '$3,000 - $10,000 / month'
    },
    {
      value: '$10,000+ / month (Scaling Brand)',
      label:
        language === 'bn'
          ? '$১০,০০০+ / মাস (স্কেলিং ব্র্যান্ড)'
          : language === 'bng'
          ? '$10,000+ / month (Scaling Brand)'
          : '$10,000+ / month (Scaling Brand)'
    },
    {
      value: 'One-Time Setup & Audit Only',
      label:
        language === 'bn'
          ? 'এককালীন সেটআপ ও অডিট কেবল'
          : language === 'bng'
          ? 'One-Time Setup & Audit Only'
          : 'One-Time Setup & Audit Only'
    }
  ];

  const defaultServiceTitle =
    language === 'bn'
      ? 'সাধারণ পারফরম্যান্স মার্কেটিং পরামর্শ'
      : language === 'bng'
      ? 'General Performance Marketing Consultation'
      : 'General Performance Marketing Consultation';

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* 1. Header */}
      <section className="pt-12 sm:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
            <span>{t.contact.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.contact.pageTitle}
          </h1>
          <p className="text-sm sm:text-base text-[#AAB4C8] leading-relaxed">
            {t.contact.pageSubtitle}
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Identity & Channel Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1117] border border-white/5 space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">
                  {PERSONAL_DATA.fullName}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#00D2FF]">
                  {t.hero.subheadline}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[#AAB4C8] pt-1">
                  <Building className="w-3.5 h-3.5 text-[#00D2FF]" />
                  <span>{PERSONAL_DATA.organization}</span>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/5">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-[#111827] text-[#00D2FF]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#AAB4C8]">
                      {language === 'bn' ? 'প্রাথমিক অবস্থান' : language === 'bng' ? 'Primary Location' : 'Primary Location'}
                    </span>
                    <span className="text-sm font-medium text-white">{PERSONAL_DATA.location}</span>
                    <span className="block text-[11px] text-[#AAB4C8]">
                      {language === 'bn' ? 'দেশীয় ও আন্তর্জাতিক ক্লায়েন্টদের সাথে কর্মরত' : language === 'bng' ? 'Serving regional & international clients' : 'Serving regional & international clients'}
                    </span>
                  </div>
                </div>

                {/* Direct WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-[#25D366]/10 text-[#25D366]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="block text-xs text-[#AAB4C8]">
                      {language === 'bn' ? 'সরাসরি হোয়াটসঅ্যাপ' : language === 'bng' ? 'Direct WhatsApp' : 'Direct WhatsApp'}
                    </span>
                    <a
                      href={createWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-[#25D366] transition-colors"
                    >
                      {PERSONAL_DATA.whatsappDisplay}
                    </a>
                    <span className="block text-[11px] text-[#AAB4C8]">
                      {language === 'bn' ? 'সবচেয়ে দ্রুত যোগাযোগ চ্যানেল' : language === 'bng' ? 'Fastest response channel' : 'Fastest response channel'}
                    </span>
                  </div>
                </div>

                {/* Direct Email */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-[#111827] text-[#00D2FF]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <span className="block text-xs text-[#AAB4C8]">
                      {language === 'bn' ? 'প্রাথমিক ইমেইল' : language === 'bng' ? 'Primary Email' : 'Primary Email'}
                    </span>
                    <a
                      href={`mailto:${PERSONAL_DATA.email}`}
                      className="text-sm font-semibold text-white hover:text-[#00D2FF] transition-colors truncate block"
                    >
                      {PERSONAL_DATA.email}
                    </a>
                    <span className="block text-[11px] text-[#AAB4C8] truncate">
                      {language === 'bn' ? 'বিকল্প' : language === 'bng' ? 'Secondary' : 'Secondary'}: {PERSONAL_DATA.secondaryEmail}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Quick Launch */}
              <div className="pt-2">
                <a
                  href={createWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-lg transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.contact.chatWhatsApp}</span>
                </a>
              </div>
            </div>

            {/* Availability & Ethics Notice */}
            <div className="p-6 rounded-2xl bg-[#111827] border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <Clock className="w-4 h-4 text-[#00D2FF]" />
                <span>
                  {language === 'bn' ? 'কাজের সময় ও প্রাপ্যতা' : language === 'bng' ? 'Working Availability' : 'Working Availability'}
                </span>
              </div>
              <p className="text-xs text-[#AAB4C8] leading-relaxed">
                {t.contact.responseNotice}
              </p>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form or Honest Submission Confirmation */}
          <div className="lg:col-span-7">
            {!submittedData ? (
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-10 rounded-2xl bg-[#0D1117] border border-white/5 space-y-6"
                noValidate
              >
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {t.contact.formTitle}
                  </h3>
                  <p className="text-xs text-[#AAB4C8] mt-1">
                    {language === 'bn'
                      ? 'কৌশলগত পরামর্শ বা ক্যাম্পেইন অ্যাসেসমেন্টের জন্য নিচের ফর্মটি পূরণ করুন।'
                      : language === 'bng'
                      ? 'Strategic consultation ba campaign assessment er jonno nicher formti puron korun.'
                      : 'Fill out the scope below to receive a strategic consultation or campaign assessment.'}
                  </p>
                </div>

                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#AAB4C8]">
                    {t.contact.fullNameLabel} <span className="text-[#00D2FF]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder={t.contact.fullNamePlaceholder}
                    className={`w-full px-4 py-3 rounded-lg bg-[#111827] border text-sm text-white placeholder-[#AAB4C8]/40 focus:outline-none transition-colors ${
                      errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 focus:border-[#00D2FF]'
                    }`}
                  />
                  {errors.name && (
                    <p className="flex items-center gap-1 text-xs text-rose-400 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#AAB4C8]">
                    {t.contact.emailLabel} <span className="text-[#00D2FF]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder={t.contact.emailPlaceholder}
                    className={`w-full px-4 py-3 rounded-lg bg-[#111827] border text-sm text-white placeholder-[#AAB4C8]/40 focus:outline-none transition-colors ${
                      errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 focus:border-[#00D2FF]'
                    }`}
                  />
                  {errors.email && (
                    <p className="flex items-center gap-1 text-xs text-rose-400 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Service Selection Dropdown */}
                <div className="space-y-1.5">
                  <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-[#AAB4C8]">
                    {t.contact.serviceLabel}
                  </label>
                  <select
                    id="service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-white/10 text-sm text-white focus:outline-none focus:border-[#00D2FF] transition-colors"
                  >
                    <option value={defaultServiceTitle}>
                      {defaultServiceTitle}
                    </option>
                    {SERVICES_LIST.map((srv) => {
                      const translatedTitle = t.services.items.find((s) => s.id === srv.id)?.title || srv.title;
                      return (
                        <option key={srv.id} value={translatedTitle}>
                          {translatedTitle}
                        </option>
                      );
                    })}
                  </select>
                </div>

                {/* Advertising Budget Range */}
                <div className="space-y-1.5">
                  <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-[#AAB4C8]">
                    {t.contact.budgetLabel}
                  </label>
                  <select
                    id="budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-white/10 text-sm text-white focus:outline-none focus:border-[#00D2FF] transition-colors"
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#AAB4C8]">
                    {t.contact.detailsLabel} <span className="text-[#00D2FF]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder={t.contact.detailsPlaceholder}
                    className={`w-full px-4 py-3 rounded-lg bg-[#111827] border text-sm text-white placeholder-[#AAB4C8]/40 focus:outline-none transition-colors resize-y ${
                      errors.message ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 focus:border-[#00D2FF]'
                    }`}
                  />
                  {errors.message && (
                    <p className="flex items-center gap-1 text-xs text-rose-400 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#00D2FF] to-[#7F00FF] rounded-lg shadow-md hover:opacity-95 transition-opacity"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.contact.submitBtn}</span>
                  </button>
                  <p className="text-[11px] text-[#AAB4C8] text-center mt-2.5">
                    {language === 'bn'
                      ? 'আপনার বিবরণ পরিষ্কারভাবে সাজিয়ে হোয়াটসঅ্যাপ বা ইমেইলে সরাসরি পাঠানোর ব্যবস্থা করা হবে।'
                      : language === 'bng'
                      ? 'Apnar details format hoye WhatsApp ba email e pathanor jonno ready hobe.'
                      : 'Your details will be formatted cleanly for immediate transmission via WhatsApp or email.'}
                  </p>
                </div>
              </form>
            ) : (
              /* Honest Confirmation with Direct Action options */
              <div className="p-6 sm:p-10 rounded-2xl bg-[#0D1117] border border-[#00D2FF]/40 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#00D2FF]/10 text-[#00D2FF] shrink-0">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">
                      {t.contact.successTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#AAB4C8] leading-relaxed">
                      {language === 'bn' ? (
                        <>
                          ধন্যবাদ, <strong className="text-white">{submittedData.name}</strong>। নিচে পছন্দের চ্যানেল নির্বাচন করে সজীবের কাছে আপনার ইনকোয়ারিটি এখনই পাঠিয়ে দিন:
                        </>
                      ) : language === 'bng' ? (
                        <>
                          Dhonnobad, <strong className="text-white">{submittedData.name}</strong>. Nicher channel gulo theke choose kore Sojib er kache inquiry ti direct pathiye din:
                        </>
                      ) : (
                        <>
                          Thank you, <strong className="text-white">{submittedData.name}</strong>. Choose your preferred direct channel below to send your prepared inquiry directly to Mohidul Islam Sojib:
                        </>
                      )}
                    </p>
                  </div>
                </div>

                {/* Formatted summary */}
                <div className="p-4 rounded-xl bg-[#111827] border border-white/10 text-xs space-y-2 text-[#AAB4C8]">
                  <div className="flex justify-between border-b border-white/5 pb-1.5">
                    <span className="font-semibold text-white">{t.contact.serviceLabel}:</span>
                    <span>{submittedData.service}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1.5">
                    <span className="font-semibold text-white">{t.contact.budgetLabel}:</span>
                    <span>{submittedData.budget}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1.5">
                    <span className="font-semibold text-white">{t.contact.emailLabel}:</span>
                    <span>{submittedData.email}</span>
                  </div>
                  <div className="pt-1">
                    <span className="font-semibold text-white block mb-1">
                      {language === 'bn' ? 'বার্তা:' : language === 'bng' ? 'Message:' : 'Message:'}
                    </span>
                    <p className="text-white/80 whitespace-pre-wrap">{submittedData.message}</p>
                  </div>
                </div>

                {/* Direct Send Actions */}
                <div className="space-y-3 pt-2">
                  <a
                    href={createWhatsAppLink(getFormWhatsAppMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-lg transition-colors shadow-lg shadow-[#25D366]/20"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>
                      {t.contact.chatWhatsApp}
                      {language === 'bn' ? ' (সুপারিশকৃত)' : ' (Recommended)'}
                    </span>
                  </a>

                  <a
                    href={getFormMailtoUrl()}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-[#111827] border border-white/10 hover:border-[#00D2FF]/40 rounded-lg transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#00D2FF]" />
                    <span>{t.contact.sendEmail}</span>
                  </a>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center gap-1.5 text-xs text-[#AAB4C8] hover:text-white transition-colors"
                    >
                      <Copy className="w-3.5 h-3.5 text-[#00D2FF]" />
                      <span>
                        {copied
                          ? language === 'bn'
                            ? 'ক্লিপবোর্ডে কপি হয়েছে!'
                            : language === 'bng'
                            ? 'Clipboard-e copy hoyeche!'
                            : 'Copied to clipboard!'
                          : language === 'bn'
                          ? 'ইনকোয়ারি তথ্য কপি করুন'
                          : language === 'bng'
                          ? 'Inquiry text copy korun'
                          : 'Copy inquiry text'}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="text-xs text-[#00D2FF] hover:underline"
                    >
                      {t.contact.sendAnother}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Reassurance & Integrity Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-[#0D1117] border border-white/5 flex items-center gap-4 text-xs text-[#AAB4C8]">
          <ShieldCheck className="w-5 h-5 text-[#00D2FF] shrink-0" />
          <span>
            {language === 'bn'
              ? 'গোপনীয়তা নীতি: প্রেরিত তথ্য কেবল আপনার মার্কেটিং সংক্রান্ত আলোচনার জন্যই ব্যবহৃত হবে। কোনো স্প্যাম, স্বয়ংক্রিয় মার্কেটিং সিকোয়েন্স বা অননুমোদিত তৃতীয় পক্ষের সাথে ভাগ করা হয় না।'
              : language === 'bng'
              ? 'Privacy Notice: Submitted information shudhumatro apnar marketing inquiry communicate korar jonno baboharto hobe. Kono spam ba unauthorized 3rd-party sharing kora hoy na.'
              : 'Privacy Notice: Information submitted is used solely for the purpose of communicating regarding your marketing inquiry. No spam, automated marketing sequences, or unauthorized third-party sharing.'}
          </span>
        </div>
      </section>
    </div>
  );
};
