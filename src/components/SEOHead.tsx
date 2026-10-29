import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SEOHeadProps {
  currentPath: string;
}

interface PageSEOConfig {
  titleEn: string;
  titleBn: string;
  titleBng: string;
  descriptionEn: string;
  descriptionBn: string;
  descriptionBng: string;
  breadcrumbNameEn?: string;
  breadcrumbNameBn?: string;
}

const PRODUCTION_DOMAIN = 'https://sojibmarketing.pages.dev';

const SEO_CONFIGS: Record<string, PageSEOConfig> = {
  '/': {
    titleEn: 'Mohidul Islam Sojib – Head of Performance Marketing & Strategy',
    titleBn: 'মহিদুল ইসলাম সজীব – হেড অফ পারফরম্যান্স মার্কেটিং অ্যান্ড স্ট্র্যাটেজি',
    titleBng: 'Mohidul Islam Sojib – Head of Performance Marketing & Strategy',
    descriptionEn: 'Strategic Digital Marketing That Moves Businesses Forward. Performance advertising, campaign strategy, Meta & Google Ads by Mohidul Islam Sojib.',
    descriptionBn: 'ব্যবসায়িক প্রবৃদ্ধির জন্য নির্ভরযোগ্য পারফরম্যান্স ও ডিজিটাল মার্কেটিং। মেটা ও গুগল অ্যাডস ক্যাম্পেইন স্ট্র্যাটেজি এবং কনভার্সন অপটিমাইজেশন।',
    descriptionBng: 'Strategic Digital Marketing That Moves Businesses Forward. Meta & Google Ads campaign strategy by Mohidul Islam Sojib.'
  },
  '/about': {
    titleEn: 'About Mohidul Islam Sojib | Performance Marketing & Strategy',
    titleBn: 'পরিচিতি ও স্ট্র্যাটেজি | মহিদুল ইসলাম সজীব',
    titleBng: 'About & Strategy | Mohidul Islam Sojib',
    descriptionEn: 'Meet Mohidul Islam Sojib, Head of Performance Marketing & Strategy at Boosting Agency BD. Transparent methodology, audience research, and conversion frameworks.',
    descriptionBn: 'বুস্টিং এজেন্সি বিডি-এর হেড অফ পারফরম্যান্স মার্কেটিং অ্যান্ড স্ট্র্যাটেজি মহিদুল ইসলাম সজীবের কাজের দর্শন, দক্ষতা ও অভিজ্ঞতা জানুন।',
    descriptionBng: 'Meet Mohidul Islam Sojib, Head of Performance Marketing & Strategy at Boosting Agency BD. Transparent methodology & conversion frameworks.',
    breadcrumbNameEn: 'About',
    breadcrumbNameBn: 'পরিচিতি'
  },
  '/services': {
    titleEn: 'Digital Marketing & Advertising Services | Mohidul Islam Sojib',
    titleBn: 'পারফরম্যান্স মার্কেটিং সেবাসমূহ | মহিদুল ইসলাম সজীব',
    titleBng: 'Performance Marketing Services | Mohidul Islam Sojib',
    descriptionEn: 'Explore specialized services: Meta Ads Management, Google Search & PMax campaigns, conversion tracking infrastructure, creative hook testing, and e-commerce funnels.',
    descriptionBn: 'মেটা অ্যাডস ম্যানেজমেন্ট, গুগল সার্চ ক্যাম্পেইন, কনভার্সন ট্র্যাকিং এবং ক্রিয়েটিভ স্ট্র্যাটেজি সহ বিশেষায়িত পারফরম্যান্স মার্কেটিং সেবাসমূহ।',
    descriptionBng: 'Meta Ads Management, Google Search campaigns, conversion tracking infrastructure, and creative hook testing services.',
    breadcrumbNameEn: 'Services',
    breadcrumbNameBn: 'সেবাসমূহ'
  },
  '/portfolio': {
    titleEn: 'Portfolio & Case Studies | Mohidul Islam Sojib',
    titleBn: 'পোর্টফোলিও ও কেস স্টাডি | মহিদুল ইসলাম সজীব',
    titleBng: 'Portfolio & Case Studies | Mohidul Islam Sojib',
    descriptionEn: 'Explore verified portfolio projects and campaign structures: Meta performance ads, B2B Google Search acquisition, retail e-commerce funnels, and creative hook testing.',
    descriptionBn: 'মেটা পারফরম্যান্স অ্যাডস, বিটুবি গুগল সার্চ অ্যাকুইজিশন, রিটেইল ই-কমার্স ফানেল ও ক্রিয়েটিভ টেস্টিং স্ট্র্যাটেজির বাস্তব কেস স্টাডি ও পোর্টফোলিও।',
    descriptionBng: 'Verified portfolio projects and campaign structures: Meta performance ads, Google Search, and e-commerce funnels.',
    breadcrumbNameEn: 'Portfolio',
    breadcrumbNameBn: 'পোর্টফোলিও'
  },
  '/contact': {
    titleEn: 'Contact Mohidul Islam Sojib | Project Discussion & Consultation',
    titleBn: 'যোগাযোগ ও প্রজেক্ট আলোচনা | মহিদুল ইসলাম সজীব',
    titleBng: 'Contact & Discussion | Mohidul Islam Sojib',
    descriptionEn: 'Get in touch with Mohidul Islam Sojib for performance marketing audits, paid ad campaign strategy, and business growth consultation. Direct WhatsApp & email access.',
    descriptionBn: 'পারফরম্যান্স মার্কেটিং অডিট, পেইড অ্যাড ক্যাম্পেইন এবং ব্যবসায়িক প্রবৃদ্ধির পরামর্শের জন্য মহিদুল ইসলাম সজীবের সাথে সরাসরি যোগাযোগ করুন।',
    descriptionBng: 'Contact Mohidul Islam Sojib for performance marketing audits, paid ad campaign strategy, and growth consultation.',
    breadcrumbNameEn: 'Contact',
    breadcrumbNameBn: 'যোগাযোগ'
  }
};

const updateMetaTag = (selector: string, attribute: string, value: string) => {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    const [attrName, attrVal] = selector
      .replace('meta[', '')
      .replace(']', '')
      .replace(/"/g, '')
      .split('=');
    element.setAttribute(attrName, attrVal);
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
};

export const SEOHead: React.FC<SEOHeadProps> = ({ currentPath }) => {
  const { language } = useLanguage();

  useEffect(() => {
    const isBn = language === 'bn';
    const isBng = language === 'bng';

    // 1. Update HTML language attribute
    document.documentElement.lang = isBn ? 'bn' : 'en';

    // 2. Base domain resolution:
    // If running on a live production domain (not local dev or temporary preview urls),
    // use the active window.location.origin so custom domains adopt canonical URLs automatically.
    const isLocalOrPreview =
      typeof window !== 'undefined' &&
      (window.location.hostname === 'localhost' ||
       window.location.hostname === '127.0.0.1' ||
       window.location.hostname.endsWith('.run.app'));

    const baseOrigin =
      typeof window !== 'undefined' && !isLocalOrPreview && window.location.origin
        ? window.location.origin
        : PRODUCTION_DOMAIN;

    const normalizedPath = currentPath.split('?')[0].replace(/\/+$/, '') || '/';
    const canonicalUrl = `${baseOrigin}${normalizedPath === '/' ? '/' : normalizedPath}`;

    const config = SEO_CONFIGS[normalizedPath];

    if (config) {
      // Determine Title
      const title = isBn ? config.titleBn : isBng ? config.titleBng : config.titleEn;
      document.title = title;

      // Determine Description
      const description = isBn
        ? config.descriptionBn
        : isBng
        ? config.descriptionBng
        : config.descriptionEn;

      // Update Standard Description
      updateMetaTag('meta[name="description"]', 'content', description);

      // Update OpenGraph
      updateMetaTag('meta[property="og:title"]', 'content', title);
      updateMetaTag('meta[property="og:description"]', 'content', description);
      updateMetaTag('meta[property="og:url"]', 'content', canonicalUrl);

      // Update Twitter Card
      updateMetaTag('meta[name="twitter:title"]', 'content', title);
      updateMetaTag('meta[name="twitter:description"]', 'content', description);

      // Remove noindex if present from 404
      const robotsMeta = document.querySelector('meta[name="robots"]');
      if (robotsMeta) {
        robotsMeta.setAttribute(
          'content',
          'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        );
      }

      // Update Canonical Link
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);

      // 3. Inject BreadcrumbList JSON-LD for sub-pages
      const existingBreadcrumbs = document.getElementById('seo-breadcrumbs');
      if (normalizedPath !== '/') {
        const breadcrumbLabel = isBn
          ? config.breadcrumbNameBn || 'Page'
          : config.breadcrumbNameEn || 'Page';

        const breadcrumbData = {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': isBn ? 'হোম' : 'Home',
              'item': `${baseOrigin}/`
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': breadcrumbLabel,
              'item': canonicalUrl
            }
          ]
        };

        if (existingBreadcrumbs) {
          existingBreadcrumbs.textContent = JSON.stringify(breadcrumbData);
        } else {
          const script = document.createElement('script');
          script.id = 'seo-breadcrumbs';
          script.type = 'application/ld+json';
          script.textContent = JSON.stringify(breadcrumbData);
          document.head.appendChild(script);
        }
      } else if (existingBreadcrumbs) {
        existingBreadcrumbs.remove();
      }
    } else {
      // 404 Page Not Found handling
      const notFoundTitle = isBn
        ? 'পেজটি পাওয়া যায়নি | মহিদুল ইসলাম সজীব'
        : isBng
        ? 'Page Paoa Jayni | Mohidul Islam Sojib'
        : 'Page Not Found | Mohidul Islam Sojib';
      document.title = notFoundTitle;

      updateMetaTag('meta[name="robots"]', 'content', 'noindex, follow');
      const existingBreadcrumbs = document.getElementById('seo-breadcrumbs');
      if (existingBreadcrumbs) existingBreadcrumbs.remove();
    }
  }, [currentPath, language]);

  return null;
};
