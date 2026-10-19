import { PERSONAL_DATA } from '../data/portfolioData';

/**
 * Clean phone number for WhatsApp wa.me link (digits only)
 */
export function getCleanWhatsAppNumber(phone: string = PERSONAL_DATA.whatsappNumber): string {
  return phone.replace(/[^\d]/g, '');
}

/**
 * Builds a direct, encoded WhatsApp click-to-chat URL
 */
export function createWhatsAppLink(message?: string): string {
  const cleanNumber = getCleanWhatsAppNumber();
  const defaultMsg = `Hello Mohidul Islam Sojib, I visited your portfolio website and would like to discuss a digital marketing project.`;
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${cleanNumber}?text=${text}`;
}

/**
 * Builds a mailto link with pre-filled subject and optional message
 */
export function createMailtoLink(subject?: string, body?: string): string {
  const targetEmail = PERSONAL_DATA.email;
  const subj = encodeURIComponent(subject || 'Digital Marketing Project Inquiry - Mohidul Islam Sojib');
  const b = body ? `&body=${encodeURIComponent(body)}` : '';
  return `mailto:${targetEmail}?subject=${subj}${b}`;
}
