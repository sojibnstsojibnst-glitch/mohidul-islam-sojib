export type Language = 'en' | 'bn' | 'bng';

export interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'en', label: 'English', nativeLabel: 'EN' },
  { code: 'bn', label: 'বাংলা', nativeLabel: 'বাং' },
  { code: 'bng', label: 'Banglish', nativeLabel: 'BNG' }
];

export interface TranslationDictionary {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    contact: string;
    hireMe: string;
    language: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    description: string;
    ctaHire: string;
    ctaPortfolio: string;
    location: string;
    performanceGrowth: string;
    metaGoogle: string;
    dataDriven: string;
    pillarsTitle: string;
    pillars: {
      p1Title: string;
      p1Desc: string;
      p2Title: string;
      p2Desc: string;
      p3Title: string;
      p3Desc: string;
      p4Title: string;
      p4Desc: string;
    };
    stats: {
      spend: string;
      spendLabel: string;
      campaigns: string;
      campaignsLabel: string;
      roas: string;
      roasLabel: string;
      retention: string;
      retentionLabel: string;
    };
    featuredWorkTitle: string;
    featuredWorkSubtitle: string;
    viewAllWork: string;
    servicesPreviewTitle: string;
    servicesPreviewSubtitle: string;
    viewAllServices: string;
    ctaSectionTitle: string;
    ctaSectionDesc: string;
    messageWhatsApp: string;
    sendInquiry: string;
    responseNotice: string;
  };
  about: {
    badge: string;
    pageTitle: string;
    role: string;
    agency: string;
    bioP1: string;
    bioP2: string;
    bioP3: string;
    philosophyBadge: string;
    philosophyTitle: string;
    philosophies: Array<{
      title: string;
      description: string;
    }>;
    goalsBadge: string;
    goalsTitle: string;
    goals: string[];
    skillsBadge: string;
    skillsTitle: string;
    processBadge: string;
    processTitle: string;
    noticeBadge: string;
    noticeTitle: string;
    noticeDesc: string;
    bottomCtaTitle: string;
    bottomCtaDesc: string;
    contactBtn: string;
    servicesBtn: string;
  };
  services: {
    badge: string;
    pageTitle: string;
    pageSubtitle: string;
    deliverablesLabel: string;
    outcomesLabel: string;
    inquireBtn: string;
    items: Array<{
      id: string;
      title: string;
      shortDescription: string;
      fullDescription: string;
      deliverables: string[];
      targetOutcomes: string;
    }>;
    faqBadge: string;
    faqTitle: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
  };
  portfolio: {
    badge: string;
    pageTitle: string;
    pageSubtitle: string;
    allCategories: string;
    categoryMeta: string;
    categoryGoogle: string;
    categoryEcommerce: string;
    categoryStrategy: string;
    challengeLabel: string;
    strategyLabel: string;
    resultsLabel: string;
    deliverablesLabel: string;
    viewCaseStudy: string;
    discussCaseStudy: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
    items: Array<{
      id: string;
      title: string;
      subtitle: string;
      categoryLabel: string;
      overview: string;
      challenge: string;
      strategy: string;
      results: string;
      keyDeliverables: string[];
    }>;
  };
  contact: {
    badge: string;
    pageTitle: string;
    pageSubtitle: string;
    directContactTitle: string;
    formTitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    serviceLabel: string;
    serviceDefault: string;
    budgetLabel: string;
    budgetDefault: string;
    timelineLabel: string;
    timelineDefault: string;
    detailsLabel: string;
    detailsPlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successDesc: string;
    sendAnother: string;
    whatsappPrompt: string;
    chatWhatsApp: string;
    sendEmail: string;
    responseNotice: string;
    timelineBadge: string;
    timelineTitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  footer: {
    headline: string;
    description: string;
    navigationTitle: string;
    contactTitle: string;
    rights: string;
    disclaimer: string;
  };
  common: {
    viewDetails: string;
    close: string;
    discussProject: string;
    back: string;
    resultsMetric: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact',
      hireMe: 'Hire Me',
      language: 'Language'
    },
    hero: {
      badge: 'Head of Performance Marketing & Strategy · Boosting Agency BD',
      headline: 'Strategic Digital Marketing That Moves Businesses Forward.',
      subheadline: 'Head of Performance Marketing & Strategy',
      description:
        'I help businesses strengthen their digital presence through performance-focused advertising, audience research, campaign strategy, and creative marketing solutions.',
      ctaHire: 'Hire Me',
      ctaPortfolio: 'View My Portfolio',
      location: 'Bangladesh',
      performanceGrowth: 'Performance & Growth',
      metaGoogle: 'Meta & Google Ads',
      dataDriven: 'Data-Driven Strategy',
      pillarsTitle: 'Core Performance Framework',
      pillars: {
        p1Title: 'Audience Precision',
        p1Desc: 'Persona segmentation, intent grouping, and lookalike modeling.',
        p2Title: 'Scalable ROAS',
        p2Desc: 'Structured budget pacing and disciplined bid strategy management.',
        p3Title: 'Conversion Tracking',
        p3Desc: 'Meta Conversions API (CAPI), GTM containers, and server-side events.',
        p4Title: 'Creative Strategy',
        p4Desc: 'Hook testing, visual angles, and compelling narrative positioning.'
      },
      stats: {
        spend: '$1.2M+',
        spendLabel: 'Ad Spend Managed',
        campaigns: '350+',
        campaignsLabel: 'Campaigns Executed',
        roas: '4.8x',
        roasLabel: 'Average ROAS Lift',
        retention: '94%',
        retentionLabel: 'Client Retention Rate'
      },
      featuredWorkTitle: 'Featured Case Studies',
      featuredWorkSubtitle: 'Data-backed advertising campaigns delivering commercial growth and lower acquisition costs.',
      viewAllWork: 'View Complete Portfolio',
      servicesPreviewTitle: 'Strategic Services',
      servicesPreviewSubtitle: 'End-to-end performance marketing capabilities engineered for commercial scalability.',
      viewAllServices: 'Explore All Services',
      ctaSectionTitle: 'Ready to Accelerate Your Customer Acquisition?',
      ctaSectionDesc:
        'Schedule a performance marketing consultation to audit your current channels and map a scalable growth blueprint.',
      messageWhatsApp: 'Message on WhatsApp',
      sendInquiry: 'Send Project Inquiry',
      responseNotice: 'Quick response within business hours · Bangladesh Standard Time (BST)'
    },
    about: {
      badge: 'About Mohidul Islam Sojib',
      pageTitle: 'Professional Biography & Marketing Philosophy',
      role: 'Head of Performance Marketing & Strategy',
      agency: 'Boosting Agency BD',
      bioP1:
        'Mohidul Islam Sojib is a dedicated digital marketing professional and strategist specializing in performance advertising, campaign infrastructure, and sustainable audience acquisition.',
      bioP2:
        'As the Head of Performance Marketing & Strategy at Boosting Agency BD, he leads multi-platform campaign initiatives across Meta (Facebook & Instagram) and Google networks, combining analytical rigor with audience-centric creative strategy.',
      bioP3:
        'His approach is rooted in transparent methodology: thorough audience research, structured funnel architecture, precise conversion tracking, and relentless data-driven optimization. He prioritizes real business impact over vanity metrics.',
      philosophyBadge: 'Core Principles',
      philosophyTitle: 'Marketing Philosophy',
      philosophies: [
        {
          title: 'Audience-Centric Foundations',
          description:
            'High-performing campaigns start with deep understanding of customer pain points, intent signals, and behavior—not arbitrary ad spending.'
        },
        {
          title: 'Full-Funnel Architecture',
          description:
            'Moving beyond isolated ads to construct cohesive acquisition paths from top-of-funnel awareness down to bottom-of-funnel conversions and repeat loyalty.'
        },
        {
          title: 'Measurement & Attribution Discipline',
          description:
            'Reliable conversion tracking, server-side events, and clean data analytics are non-negotiable for informed budget allocation.'
        },
        {
          title: 'Honest Strategic Partnership',
          description:
            'Clear communication, ethical advertising practices, and objective performance reporting with zero fabricated guarantees.'
        }
      ],
      goalsBadge: 'Vision',
      goalsTitle: 'Professional Goals & Future Focus',
      goals: [
        'Scale high-impact performance marketing frameworks for emerging and established brands.',
        'Advance automated, AI-assisted campaign workflows that shorten iteration cycles while preserving strategic quality.',
        'Strengthen cross-border performance advertising initiatives from Bangladesh to international markets.'
      ],
      skillsBadge: 'Technical Rigor',
      skillsTitle: 'Strategic & Technical Capabilities',
      processBadge: 'Execution Discipline',
      processTitle: 'The 4-Step Performance Engine',
      noticeBadge: 'Transparency Notice',
      noticeTitle: 'Commitment to Ethical Growth',
      noticeDesc:
        'Mohidul Islam Sojib operates on verified data, commercial rigor, and sustainable advertising frameworks. Digital marketing involves platform dynamics, market shifts, and competitive factors; ethical practitioners do not guarantee rigid multipliers without auditing economics and campaign health.',
      bottomCtaTitle: "Let's Build Your Next High-Performance Campaign",
      bottomCtaDesc: 'Reach out directly for a performance marketing consultation or strategy discussion.',
      contactBtn: 'Contact Mohidul Islam Sojib',
      servicesBtn: 'Review Services'
    },
    services: {
      badge: 'Services & Capabilities',
      pageTitle: 'Specialized Performance Marketing Services',
      pageSubtitle:
        'Comprehensive marketing solutions tailored to acquire profitable customers, streamline conversions, and scale business revenue.',
      deliverablesLabel: 'Key Deliverables',
      outcomesLabel: 'Target Commercial Outcomes',
      inquireBtn: 'Inquire About This Service',
      items: [
        {
          id: 'meta-ads',
          title: 'Meta Ads Management',
          shortDescription:
            'Comprehensive paid social campaigns across Facebook and Instagram engineered for profitable acquisition and customer retention.',
          fullDescription:
            'Full lifecycle campaign management encompassing custom audience research, Advantage+ optimization, creative iteration testing, retargeting sequences, and budget pacing.',
          deliverables: [
            'Campaign structure architecture (CBO & ABO frameworks)',
            'Creative format variations (Static, Carousel, Video Reels)',
            'Audience segmentation (Lookalike, Broad, Custom Lists)',
            'A/B split testing across messaging and creative hooks',
            'Weekly performance reporting and ROAS tracking'
          ],
          targetOutcomes: 'Reduced Cost-per-Acquisition (CPA), higher return on ad spend, and consistent month-over-month pipeline growth.'
        },
        {
          id: 'google-ads',
          title: 'Google Ads & Search Marketing',
          shortDescription:
            'High-intent search, Performance Max, and display campaigns capturing active demand at crucial decision points.',
          fullDescription:
            'Strategic keyword intent modeling, high-converting ad copy drafting, negative keyword maintenance, and smart bidding adjustments tailored to commercial objectives.',
          deliverables: [
            'Search, Performance Max, and Shopping campaign setup',
            'Negative keyword mapping and search term auditing',
            'Ad copy variants, sitelinks, and structured callouts',
            'Bid strategy management (Target CPA, Target ROAS)',
            'Conversion goal mapping and attribution modeling'
          ],
          targetOutcomes: 'Capturing qualified bottom-of-funnel demand with lower cost per lead and elevated conversion rates.'
        },
        {
          id: 'audience-research',
          title: 'Audience Research & Targeting',
          shortDescription:
            'Deep demographic, behavioral, and intent profiling to ensure marketing budgets reach the most receptive prospective buyers.',
          fullDescription:
            'Uncovering untapped demographic pockets, competitor audience intercepts, and psychographic motivations to build resilient targeting matrices.',
          deliverables: [
            'Buyer persona profiling and customer empathy mapping',
            'Competitor positioning and audience overlap audit',
            'Interest cluster architecture for social ad engines',
            'First-party data segmentation (LTV, Recency, Frequency)',
            'Market expansion opportunity reports'
          ],
          targetOutcomes: 'Eliminating wasted ad impressions and drastically improving relevance scores across ad networks.'
        },
        {
          id: 'funnel-strategy',
          title: 'Campaign Strategy & Planning',
          shortDescription:
            'Holistic growth blueprints mapping customer touchpoints from initial awareness to bottom-funnel conversion and lifetime loyalty.',
          fullDescription:
            'Formulating multi-quarter marketing roadmaps, cross-channel communication matrices, promotional calendar planning, and commercial forecast models.',
          deliverables: [
            'Full-funnel acquisition blueprints (TOFU, MOFU, BOFU)',
            'Promotional calendar and seasonal campaign planning',
            'Budget allocation models by channel and objective',
            'Offer positioning and landing page alignment audits',
            'Cross-channel attribution recommendations'
          ],
          targetOutcomes: 'Predictable growth pacing, resilient customer journey paths, and synchronized cross-channel execution.'
        },
        {
          id: 'tracking-analytics',
          title: 'Conversion Tracking & Analytics',
          shortDescription:
            'Flawless tracking infrastructure with Meta Conversions API (CAPI), Google Tag Manager, and GA4 for bulletproof attribution.',
          fullDescription:
            'Overcoming browser privacy restrictions with server-side event tracking, enhanced conversions, custom event payloads, and clean dashboard reporting.',
          deliverables: [
            'Meta Conversions API (CAPI) server-side deployment',
            'Google Tag Manager (GTM) container architecture',
            'GA4 event tracking and conversion funnel setup',
            'Domain verification, aggregated event measurement',
            'UTM taxonomy and automated data studio dashboards'
          ],
          targetOutcomes: '100% accurate attribution, enriched algorithm learning, and clean transparency for every invested advertising dollar.'
        },
        {
          id: 'creative-strategy',
          title: 'Creative Strategy & Consultation',
          shortDescription:
            'Iterative creative frameworks, high-impact copywriting, and conversion-focused visual concepts designed to arrest attention.',
          fullDescription:
            'Bridging the gap between analytical metrics and human psychology through structured hook testing, creative brief drafting, and angle ideation.',
          deliverables: [
            'High-converting ad copy angles and persuasive hooks',
            'Creative briefs for static designs and short-form video',
            'Competitor creative swipe file and gap analysis',
            'Fatigue monitoring and creative iteration schedules',
            'Landing page message-match recommendations'
          ],
          targetOutcomes: 'Higher click-through rates (CTR), lower CPMs, and brand assets that reliably compel consumer action.'
        }
      ],
      faqBadge: 'Transparency',
      faqTitle: 'Service Standards & Process Integrity',
      ctaTitle: 'Ready to Discuss a Tailored Service Plan?',
      ctaDesc: 'Connect directly with Mohidul Islam Sojib to assess your brand objectives and develop a structured engagement plan.',
      ctaBtn: 'Inquire About Services'
    },
    portfolio: {
      badge: 'Case Studies',
      pageTitle: 'Performance Portfolio & Case Studies',
      pageSubtitle:
        'A documented look at real commercial campaigns, strategy frameworks, conversion tracking setups, and return on investment.',
      allCategories: 'All Projects',
      categoryMeta: 'Meta Ads',
      categoryGoogle: 'Google Ads',
      categoryEcommerce: 'E-commerce',
      categoryStrategy: 'Campaign Strategy',
      challengeLabel: 'The Challenge',
      strategyLabel: 'Strategic Execution',
      resultsLabel: 'Documented Impact',
      deliverablesLabel: 'Key Deliverables',
      viewCaseStudy: 'View Full Case Study',
      discussCaseStudy: 'Discuss Similar Project',
      ctaTitle: 'Have a Campaign You Need to Scale?',
      ctaDesc: 'Reach out to discuss your current ad accounts, economics, and scaling roadmap.',
      ctaBtn: 'Start a Project Inquiry',
      items: [
        {
          id: 'proj-meta-ecommerce',
          title: 'E-Commerce Fashion Scaling: Meta Conversions Engine',
          subtitle: 'Multi-tiered Meta ads structure with dynamic creative testing and CAPI server-side event capture.',
          categoryLabel: 'Meta Ads & E-Commerce',
          overview:
            'Scaled a direct-to-consumer apparel brand by overhauling the account architecture, deploying server-side Meta Conversions API (CAPI), and executing structured creative hook testing.',
          challenge:
            'Client experienced diminishing ROAS, untracked iOS conversions, creative fatigue, and ad overlap across duplicate ad sets.',
          strategy:
            'Consolidated ad set architecture into an Advantage+ Shopping foundation, deployed server-side CAPI for 95%+ event match quality, and set up weekly creative sprint tests focusing on problem-solution hooks and lifestyle carousels.',
          results:
            '3.8x Blended ROAS achieved across a 90-day scale period, 42% decrease in cost-per-purchase, and 180% increase in monthly gross revenue.',
          keyDeliverables: [
            'Advantage+ Shopping campaign structure',
            'Meta Conversions API (CAPI) implementation',
            'Creative sprint testing matrix (12 new concepts/month)',
            'Dynamic retargeting catalog optimization'
          ]
        },
        {
          id: 'proj-b2b-leadgen',
          title: 'B2B Tech Solutions: High-Intent Google Search & Inbound Pipeline',
          subtitle: 'Laser-focused Google Search campaigns targeting high-value enterprise commercial terms.',
          categoryLabel: 'Google Ads & Search',
          overview:
            'Constructed a disciplined Google Search acquisition funnel capturing high-ticket decision makers actively researching enterprise software solutions.',
          challenge:
            'Broad match keyword leakage and poor negative keyword mapping burned budget on student queries and irrelevant consumer searches.',
          strategy:
            'Re-architected campaigns with exact and phrase match intent clusters, created high-converting landing pages with direct qualification questions, and implemented offline conversion tracking in Google Ads.',
          results:
            '58% reduction in Cost Per Qualified Lead (CPQL), 3.2x increase in sales-qualified discovery calls, and $340K in qualified pipeline value.',
          keyDeliverables: [
            'Intent-clustered Google Search campaigns',
            'Extensive negative keyword dictionary (650+ terms)',
            'Offline conversion import & value-based bidding',
            'Landing page message-matching consultation'
          ]
        },
        {
          id: 'proj-d2c-multiplatform',
          title: 'Direct-to-Consumer Wellness: Multi-Platform Funnel Integration',
          subtitle: 'Synchronized cross-platform strategy pairing Meta top-of-funnel awareness with Google Search intent capture.',
          categoryLabel: 'Campaign Strategy',
          overview:
            'Unified paid channels for a modern wellness brand, creating a seamless customer journey from educational social video ads to intent capture on search engines.',
          challenge:
            'Siloed channels competed against each other without attribution clarity, causing inflated blended customer acquisition costs.',
          strategy:
            'Mapped customer journey stages across channels: Meta for initial problem-awareness video reels, Google Search for brand and product category capture, and dynamic remarketing for abandoned carts.',
          results:
            '4.6x Overall ROAS across integrated channels, 31% increase in customer lifetime value (LTV), and sustainable monthly ad budget scaling of 250%.',
          keyDeliverables: [
            'Full-funnel cross-channel marketing roadmap',
            'Cross-network UTM tracking architecture',
            'Customer journey attribution model',
            'Executive weekly growth dashboards'
          ]
        },
        {
          id: 'proj-creative-performance',
          title: 'Creative Performance Framework: Hook Testing & Ad Fatigue Mitigation',
          subtitle: 'Systematic creative testing methodology delivering scalable advertising assets without production bloat.',
          categoryLabel: 'Creative Strategy',
          overview:
            'Built a repeatable creative testing system for a fast-growth consumer brand, allowing rapid validation of messaging angles, visual formats, and user-generated content concepts.',
          challenge:
            'Ad creative burned out within 10–14 days, resulting in sharp CPM spikes and volatile daily conversion volumes.',
          strategy:
            'Established a 3-stage creative pipeline: Concept sandbox for micro-budget hook validation, Winner extraction into scaling campaigns, and iterative visual angle diversification.',
          results:
            'Extended average creative lifespan from 12 days to 45+ days, reduced average CPM by 24%, and lifted Click-Through-Rate (CTR) by 65%.',
          keyDeliverables: [
            'Systematic Creative Testing Matrix',
            'Hook angle swipe file and storyboard templates',
            'Weekly creative fatigue monitoring framework',
            'UGC creator briefing & directional guidance'
          ]
        }
      ]
    },
    contact: {
      badge: 'Start a Project',
      pageTitle: 'Let’s Accelerate Your Business Growth',
      pageSubtitle:
        'Have a marketing challenge or ready to scale your paid acquisition? Reach out directly to discuss strategy, audit your accounts, or explore a collaboration.',
      directContactTitle: 'Direct Contact Details',
      formTitle: 'Send a Structured Project Inquiry',
      fullNameLabel: 'Full Name',
      fullNamePlaceholder: 'e.g. John Doe',
      emailLabel: 'Email Address',
      emailPlaceholder: 'e.g. john@yourcompany.com',
      serviceLabel: 'Primary Service Required',
      serviceDefault: 'Select a core service focus',
      budgetLabel: 'Estimated Monthly Ad Budget',
      budgetDefault: 'Select estimated monthly budget',
      timelineLabel: 'Desired Launch Timeline',
      timelineDefault: 'Select project timeline',
      detailsLabel: 'Project Details & Commercial Goals',
      detailsPlaceholder:
        'Describe your current business model, advertising channels, primary challenges, and what commercial milestones you want to achieve...',
      submitBtn: 'Send Project Inquiry',
      submittingBtn: 'Sending Inquiry...',
      successTitle: 'Inquiry Sent Successfully!',
      successDesc:
        'Thank you for reaching out. Mohidul Islam Sojib will review your inquiry details and respond within 24 business hours.',
      sendAnother: 'Send Another Inquiry',
      whatsappPrompt: 'Need an Immediate Response?',
      chatWhatsApp: 'Chat Directly on WhatsApp',
      sendEmail: 'Send Direct Email',
      responseNotice: 'Quick response within business hours · Bangladesh Standard Time (BST)',
      timelineBadge: 'Process',
      timelineTitle: 'What Happens After You Inquire?',
      step1Title: '1. Inquiry Review & Preliminary Audit',
      step1Desc: 'Mohidul reviews your business model, channels, and specific performance goals.',
      step2Title: '2. 30-Minute Strategy Alignment',
      step2Desc: 'A focused discussion to outline high-leverage growth opportunities and technical needs.',
      step3Title: '3. Roadmap & Structured Execution',
      step3Desc: 'Clear deliverables, transparent timelines, and disciplined commercial campaign launch.'
    },
    footer: {
      headline: 'Strategic Digital Marketing That Moves Businesses Forward.',
      description:
        'Performance advertising, campaign strategy, audience targeting, and creative marketing solutions built on analytical rigor and professional transparency.',
      navigationTitle: 'Explore Portfolio',
      contactTitle: 'Direct Inquiries',
      rights: 'All rights reserved.',
      disclaimer:
        'All trademarks, brand names, and logos cited are the property of their respective owners. Performance results cited in case studies reflect actual client scenarios and should not be construed as blanket guarantees for every business.'
    },
    common: {
      viewDetails: 'View Full Case Study',
      close: 'Close',
      discussProject: 'Discuss Similar Project',
      back: 'Back',
      resultsMetric: 'Impact'
    }
  },

  bn: {
    nav: {
      home: 'হোম',
      about: 'পরিচিতি',
      services: 'সেবাসমূহ',
      portfolio: 'পোর্টফোলিও',
      contact: 'যোগাযোগ',
      hireMe: 'হায়ার করুন',
      language: 'ভাষা'
    },
    hero: {
      badge: 'হেড অব পারফরম্যান্স মার্কেটিং অ্যান্ড স্ট্র্যাটেজি · বুস্টিং এজেন্সি বিডি',
      headline: 'স্ট্র্যাটেজিক ডিজিটাল মার্কেটিং যা ব্যবসাকে এগিয়ে নিয়ে যায়।',
      subheadline: 'হেড অব পারফরম্যান্স মার্কেটিং অ্যান্ড স্ট্র্যাটেজি',
      description:
        'আমি পারফরম্যান্স-কেন্দ্রিক বিজ্ঞাপন, অডিয়েন্স রিসার্চ, ক্যাম্পেইন স্ট্র্যাটেজি এবং ক্রিয়েটিভ মার্কেটিং সলিউশনের মাধ্যমে ব্যবসায়ের ডিজিটাল প্রবৃদ্ধি ও বিক্রয় বৃদ্ধিতে কাজ করি।',
      ctaHire: 'হায়ার করুন',
      ctaPortfolio: 'পোর্টফোলিও দেখুন',
      location: 'বাংলাদেশ',
      performanceGrowth: 'পারফরম্যান্স ও গ্রোথ',
      metaGoogle: 'মেটা ও গুগল অ্যাডস',
      dataDriven: 'ডাটা-ড্রিভেন স্ট্র্যাটেজি',
      pillarsTitle: 'মূল পারফরম্যান্স ফ্রেমওয়ার্ক',
      pillars: {
        p1Title: 'অডিয়েন্স প্রিসিশন',
        p1Desc: 'সঠিক গ্রাহক সেগমেন্টেশন, ইনটেন্ট গ্রুপিং এবং লুকঅ্যালাইক মডেলিং।',
        p2Title: 'স্কেলেবল ROAS',
        p2Desc: 'স্ট্রাকচার্ড বাজেট পেসিং এবং কার্যকর বিড স্ট্র্যাটেজি ম্যানেজমেন্ট।',
        p3Title: 'কনভার্সন ট্র্যাকিং',
        p3Desc: 'মেটা কনভার্সনস API (CAPI), GTM কন্টেইনার এবং সার্ভার-সাইড ইভেন্টস।',
        p4Title: 'ক্রিয়েটিভ স্ট্র্যাটেজি',
        p4Desc: 'আকর্ষণীয় হুক টেস্টিং, ভিজ্যুয়াল অ্যাঙ্গেল ও কার্যকর পজিশনিং।'
      },
      stats: {
        spend: '$১.২M+',
        spendLabel: 'ম্যানেজড অ্যাড বাজেট',
        campaigns: '৩৫০+',
        campaignsLabel: 'সফল ক্যাম্পেইন',
        roas: '৪.৮x',
        roasLabel: 'গড় ROAS বৃদ্ধি',
        retention: '৯৪%',
        retentionLabel: 'ক্লায়েন্ট রিটেনশন রেট'
      },
      featuredWorkTitle: 'নির্বাচিত কেস স্টাডিজ',
      featuredWorkSubtitle: 'বাণিজ্যিক বিক্রয় বৃদ্ধি ও কম খরচে গ্রাহক অর্জনের বাস্তব ক্যাম্পেইন ফলাফল।',
      viewAllWork: 'সম্পূর্ণ পোর্টফোলিও দেখুন',
      servicesPreviewTitle: 'স্ট্র্যাটেজিক সেবাসমূহ',
      servicesPreviewSubtitle: 'ব্যবসাকে লাভজনকভাবে বড় করার জন্য সম্পূর্ণ পারফরম্যান্স মার্কেটিং সেবা।',
      viewAllServices: 'সকল সেবা দেখুন',
      ctaSectionTitle: 'আপনার ব্যবসায়ের বিক্রয় বাড়াতে প্রস্তুত?',
      ctaSectionDesc: 'আপনার বর্তমান অ্যাড চ্যানেলগুলো অডিট করতে এবং টেকসই গ্রোথ প্ল্যান তৈরি করতে আলোচনা শুরু করুন।',
      messageWhatsApp: 'হোয়াটসঅ্যাপে মেসেজ দিন',
      sendInquiry: 'ইনকোয়ারি পাঠান',
      responseNotice: 'অফিস সময়ে দ্রুত উত্তর দেওয়া হয় · বাংলাদেশ সময় (BST)'
    },
    about: {
      badge: 'মহিদুল ইসলাম সজীব সম্পর্কে',
      pageTitle: 'পেশাদার পরিচিতি ও মার্কেটিং দর্শন',
      role: 'হেড অব পারফরম্যান্স মার্কেটিং অ্যান্ড স্ট্র্যাটেজি',
      agency: 'বুস্টিং এজেন্সি বিডি',
      bioP1:
        'মহিদুল ইসলাম সজীব একজন নিবেদিতপ্রাণ ডিজিটাল মার্কেটিং প্রফেশনাল ও স্ট্র্যাটেজিস্ট, যিনি পারফরম্যান্স অ্যাডভার্টাইজিং, ক্যাম্পেইন ইনফ্রাস্ট্রাকচার এবং টেকসই অডিয়েন্স অ্যাকুইজিশনে অভিজ্ঞ।',
      bioP2:
        'বুস্টিং এজেন্সি বিডি-র হেড অব পারফরম্যান্স মার্কেটিং অ্যান্ড স্ট্র্যাটেজি হিসেবে তিনি মেটা (ফেসবুক ও ইনস্টাগ্রাম) এবং গুগল নেটওয়ার্কে সুপরিকল্পিত অ্যানালিটিক্স ও সৃজনশীল কৌশলের সমন্বয়ে ক্যাম্পেইন পরিচালনা করেন।',
      bioP3:
        'তার কাজের ভিত্তি হলো স্বচ্ছতা ও সঠিক ডাটা: বিস্তারিত অডিয়েন্স রিসার্চ, স্ট্রাকচার্ড ফানেল আর্কিটেকচার, নিখুঁত কনভার্সন ট্র্যাকিং এবং ধারাবাহিক অপ্টিমাইজেশন। তিনি বাহ্যিক মেকানিজমের চেয়ে ব্যবসায়িক লাভের ওপর সর্বাধিক গুরুত্ব দেন।',
      philosophyBadge: 'মূল মূলনীতি',
      philosophyTitle: 'মার্কেটিং দর্শন ও দৃষ্টিভঙ্গি',
      philosophies: [
        {
          title: 'অডিয়েন্স-কেন্দ্রিক ভিত্তি',
          description:
            'যেকোনো সফল ক্যাম্পেইনের সূচনা হয় গ্রাহকের সমস্যা, উদ্দেশ্য এবং আচরণ গভীরভাবে বোঝার মাধ্যমে—অযথা অ্যাড খরচে নয়।'
        },
        {
          title: 'ফুল-ফানেল আর্কিটেকচার',
          description:
            'আলাদা বিজ্ঞাপনের বদলে শুরু থেকে শেষ পর্যন্ত পূর্ণাঙ্গ গ্রাহক জার্নি গঠন করা, যা ব্র্যান্ড সচেতনতা থেকে সরাসরি ক্রয়ে রূপান্তর ঘটায়।'
        },
        {
          title: 'সঠিক ট্র্যাকিং ও ডাটা শৃঙ্খলা',
          description:
            'সঠিক বাজেট ব্যবহারের জন্য কনভার্সন ট্র্যাকিং, সার্ভার-সাইড ইভেন্টস এবং নির্ভুল ডাটা অ্যানালিটিক্স অপরিহার্য।'
        },
        {
          title: 'সততা ও স্বচ্ছ পার্টনারশিপ',
          description:
            'স্পষ্ট যোগাযোগ, নীতিসম্মত বিজ্ঞাপন চর্চা এবং কোনো প্রকার মিথ্যা গ্যারান্টি ছাড়া বাস্তবভিত্তিক রিপোর্ট প্রদান।'
        }
      ],
      goalsBadge: 'লক্ষ্য',
      goalsTitle: 'পেশাগত লক্ষ্য ও ভবিষ্যৎ পরিকল্পনা',
      goals: [
        'উদীয়মান ও প্রতিষ্ঠিত ব্র্যান্ডগুলোর জন্য কার্যকর পারফরম্যান্স মার্কেটিং ফ্রেমওয়ার্ক স্কেল করা।',
        'স্বয়ংক্রিয় এবং এআই-সহায়তাপ্রাপ্ত ক্যাম্পেইন ওয়ার্কফ্লো উন্নত করা যা কাজের গুণগত মান বজায় রেখে সময় সাশ্রয় করে।',
        'বাংলাদেশ থেকে আন্তর্জাতিক বাজারে আন্তঃসীমান্ত পারফরম্যান্স বিজ্ঞাপনের সুযোগ বৃদ্ধি করা।'
      ],
      skillsBadge: 'দক্ষতা',
      skillsTitle: 'স্ট্র্যাটেজিক ও টেকনিক্যাল দক্ষতাসমূহ',
      processBadge: 'কাজের পদ্ধতি',
      processTitle: '৪-ধাপের পারফরম্যান্স ইঞ্জিন',
      noticeBadge: 'স্বচ্ছতা বিজ্ঞপ্তি',
      noticeTitle: 'নৈতিক ও টেকসই প্রবৃদ্ধির অঙ্গীকার',
      noticeDesc:
        'মহিদুল ইসলাম সজীব নির্ভরযোগ্য ডাটা, বাণিজ্যিক বাস্তবতা এবং টেকসই মার্কেটিং ফ্রেমওয়ার্কে কাজ করেন। ডিজিটাল মার্কেটিংয়ে প্ল্যাটফর্ম পরিবর্তন ও বাজারের প্রভাব থাকে; তাই কোনো দায়িত্বশীল প্রফেশনাল বাস্তব হিসাব ছাড়া অলীক গ্যারান্টি প্রদান করেন না।',
      bottomCtaTitle: 'চলুন আপনার পরবর্তী হাই-পারফরম্যান্স ক্যাম্পেইন তৈরি করি',
      bottomCtaDesc: 'পারফরম্যান্স মার্কেটিং পরামর্শ বা কৌশলগত আলোচনার জন্য সরাসরি যোগাযোগ করুন।',
      contactBtn: 'সজীবের সাথে যোগাযোগ করুন',
      servicesBtn: 'সেবাসমূহ দেখুন'
    },
    services: {
      badge: 'সেবাসমূহ',
      pageTitle: 'বিশেষায়িত পারফরম্যান্স মার্কেটিং সেবা',
      pageSubtitle:
        'লাভজনক গ্রাহক অর্জন, কনভার্সন বৃদ্ধি এবং ব্যবসায়ের রাজস্ব বাড়ানোর জন্য সম্পূর্ণ ডিজিটাল সমাধান।',
      deliverablesLabel: 'মূল ডেলিভারেবলস',
      outcomesLabel: 'প্রত্যাশিত ব্যবসায়িক ফলাফল',
      inquireBtn: 'এই সেবা সম্পর্কে জানুন',
      items: [
        {
          id: 'meta-ads',
          title: 'মেটা অ্যাডস ম্যানেজমেন্ট',
          shortDescription:
            'ফেসবুক ও ইনস্টাগ্রামে লাভজনক গ্রাহক অর্জন এবং পুনরায় কেনাকাটা বৃদ্ধির জন্য সম্পূর্ণ পেইড সোশ্যাল ক্যাম্পেইন।',
          fullDescription:
            'কাস্টম অডিয়েন্স রিসার্চ, অ্যাডভান্টেজ+ অপ্টিমাইজেশন, ক্রিয়েটিভ টেস্টিং, রিমার্কেটিং সিকোয়েন্স এবং বাজেট নিয়ন্ত্রণের পূর্ণাঙ্গ ক্যাম্পেইন ব্যবস্থাপনা।',
          deliverables: [
            'ক্যাম্পেইন স্ট্রাকচার ডিজাইন (CBO ও ABO ফ্রেমওয়ার্ক)',
            'বিভিন্ন ফরম্যাটের বিজ্ঞাপন (স্ট্যাটিক, ক্যারোজেল, রিলস ভিডিও)',
            'অডিয়েন্স সেগমেন্টেশন (লুকঅ্যালাইক, ব্রড, কাস্টম লিস্ট)',
            'মেসেজিং ও ভিজ্যুয়াল হুকের A/B স্প্লিট টেস্ট',
            'সাপ্তাহিক পারফরম্যান্স রিপোর্ট ও ROAS ট্র্যাকিং'
          ],
          targetOutcomes: 'কম খরচে গ্রাহক প্রাপ্তি (Low CPA), সর্বোচ্চ রিটার্ন অন অ্যাড স্পেন্ড (ROAS) এবং ধারাবাহিক প্রবৃদ্ধি।'
        },
        {
          id: 'google-ads',
          title: 'গুগল অ্যাডস ও সার্চ মার্কেটিং',
          shortDescription:
            'সক্রিয় ক্রেতাদের কাছে পৌঁছানোর জন্য হাই-ইনটেন্ট গুগল সার্চ, পারফরম্যান্স ম্যাক্স এবং ডিসপ্লে বিজ্ঞাপন।',
          fullDescription:
            'কৌশলগত কিওয়ার্ড রিসার্চ, উচ্চ-রূপান্তরকারী অ্যাড কপি তৈরি, নেগেটিভ কিওয়ার্ড ব্যবস্থাপনা এবং সঠিক বিডিং কন্ট্রোল।',
          deliverables: [
            'সার্চ, পারফরম্যান্স ম্যাক্স এবং শপিং ক্যাম্পেইন সেটআপ',
            'নেগেটিভ কিওয়ার্ড ম্যাপিং এবং অপ্রয়োজনীয় সার্চ টার্ম ফিল্টারিং',
            'অ্যাড কপি ভ্যারিয়েন্টস, সাইটলিংকস ও কলআউটস এক্সটেনশন',
            'বিড স্ট্র্যাটেজি নিয়ন্ত্রণ (Target CPA, Target ROAS)',
            'কনভার্সন গোল ম্যাপিং ও সঠিক অ্যাট্রিবিউশন'
          ],
          targetOutcomes: 'সরাসরি আগ্রহী ক্রেতাদের আকর্ষণ করে কম খরচে কোয়ালিফাইড সেলস ও লিড বৃদ্ধি।'
        },
        {
          id: 'audience-research',
          title: 'অডিয়েন্স রিসার্চ ও টার্গেটিং',
          shortDescription:
            'বিজ্ঞাপনের বাজেট সঠিক ক্রেতার কাছে পৌঁছাতে গভীর ডেমোগ্রাফিক, আচরণগত ও আগ্রহভিত্তিক বিশ্লেষণ।',
          fullDescription:
            'অব্যবহৃত গ্রাহক শ্রেণি চিহ্নিতকরণ, প্রতিদ্বন্দীদের গ্রাহক বিশ্লেষণ এবং বিজ্ঞাপনের গ্রহণযোগ্যতা বৃদ্ধির জন্য নিবিড় গবেষণা।',
          deliverables: [
            'বায়ার পারসোনা প্রোফাইলিং ও গ্রাহক অনুভূতি ম্যাপিং',
            'প্রতিদ্বন্দ্বী ব্র্যান্ডের পজিশনিং ও অডিয়েন্স অডিট',
            'সোশ্যাল মিডিয়ার জন্য ইন্টারেস্ট ক্লাস্টার তৈরি',
            'ফার্স্ট-পার্টি ডাটা সেগমেন্টেশন (LTV, রিসেন্সি, ফ্রিকোয়েন্সি)',
            'নতুন বাজার সম্প্রসারণের সুযোগ সংক্রান্ত রিপোর্ট'
          ],
          targetOutcomes: 'অপ্রয়োজনীয় ভিউ কমানো এবং বিজ্ঞাপনের রিলেভেন্স স্কোর উল্লেখযোগ্যভাবে বৃদ্ধি।'
        },
        {
          id: 'funnel-strategy',
          title: 'ক্যাম্পেইন স্ট্র্যাটেজি ও পরিকল্পনা',
          shortDescription:
            'প্রাথমিক ব্র্যান্ড পরিচয় থেকে শুরু করে বিক্রয় সম্পন্ন এবং বিশ্বস্ত গ্রাহক তৈরির পূর্ণাঙ্গ গ্রোথ ব্লুপ্রিন্ট।',
          fullDescription:
            'ত্রৈমাসিক মার্কেটিং রোডম্যাপ, ক্রস-চ্যানেল যোগাযোগ কৌশল, অফার প্ল্যানিং এবং ব্যবসায়িক লক্ষ্যমাত্রা নির্ধারণ।',
          deliverables: [
            'ফুল-ফানেল মার্কেটিং ব্লুপ্রিন্ট (TOFU, MOFU, BOFU)',
            'সিজনাল ক্যাম্পেইন ও প্রমোশনাল ক্যালেন্ডার পরিকল্পনা',
            'চ্যানেল ও উদ্দেশ্য ভিত্তিক বাজেট বণ্টন মডেল',
            'অফার পজিশনিং এবং ল্যান্ডিং পেজ সামঞ্জস্য অডিট',
            'ক্রস-চ্যানেল অ্যাট্রিবিউশন সুপারিশমালা'
          ],
          targetOutcomes: 'পূর্বাভাসযোগ্য বিক্রয় প্রবৃদ্ধি এবং বিভিন্ন চ্যানেলের সুসংহত সমন্বয়।'
        },
        {
          id: 'tracking-analytics',
          title: 'কনভার্সন ট্র্যাকিং ও অ্যানালিটিক্স',
          shortDescription:
            'মেটা কনভার্সনস API (CAPI), গুগল ট্যাগ ম্যানেজার (GTM) এবং GA4 এর মাধ্যমে নির্ভুল ডাটা ট্র্যাকিং।',
          fullDescription:
            'ব্রাউজার প্রাইভেসি সীমাবদ্ধতা এড়িয়ে সার্ভার-সাইড ইভেন্ট ট্র্যাকিং এবং উন্নত কনভার্সন ডেটা ক্যাপচার।',
          deliverables: [
            'মেটা কনভার্সনস API (CAPI) সার্ভার-সাইড ডিপ্লয়মেন্ট',
            'গুগল ট্যাগ ম্যানেজার (GTM) কন্টেইনার আর্কিটেকচার',
            'GA4 ইভেন্ট ট্র্যাকিং ও কনভার্সন ফানেল সেটআপ',
            'ডোমেইন ভেরিফিকেশন ও অ্যাগ্রিগেটেড ইভেন্ট মেজারমেন্ট',
            'UTM ট্র্যাকিং ও অটোমেটেড ডাটা স্টুডিও ড্যাশবোর্ড'
          ],
          targetOutcomes: '১০০% সঠিক ডাটা ট্র্যাকিং, অ্যালগরিদমের দ্রুত লার্নিং এবং প্রতিটি টাকার পরিষ্কার হিসাব।'
        },
        {
          id: 'creative-strategy',
          title: 'ক্রিয়েটিভ স্ট্র্যাটেজি ও কনসালটেশন',
          shortDescription:
            'মনোযোগ আকর্ষণকারী বিজ্ঞাপন কপি, ভিজ্যুয়াল কনসেপ্ট এবং কনভার্সন-কেন্দ্রিক সৃজনশীল পরিকল্পনা।',
          fullDescription:
            'ডাটা অ্যানালিটিক্স এবং মানব মনস্তত্ত্বের সমন্বয়ে কার্যকর হুক টেস্টিং ও বিজ্ঞাপন কনসেপ্ট ডেভেলপমেন্ট।',
          deliverables: [
            'উচ্চ-রূপান্তরকারী বিজ্ঞাপন কপি এবং আকর্ষণীয় হুকস',
            'স্ট্যাটিক ডিজাইন ও শর্ট-ভিডিওর জন্য ক্রিয়েটিভ ব্রিফ',
            'প্রতিদ্বন্দ্বীদের সেরা বিজ্ঞাপনের বিশ্লেষণ',
            'ক্রিয়েটিভ ফেটিগ মনিটরিং ও নতুন কনসেপ্ট শিডিউলিং',
            'ল্যান্ডিং পেজের মেসেজ সামঞ্জস্য নিশ্চিতকরণ'
          ],
          targetOutcomes: 'উচ্চ ক্লিক রেট (CTR), কম বিজ্ঞাপন খরচ (CPM) এবং গ্রাহককে দ্রুত সিদ্ধান্তে উৎসাহিত করা।'
        }
      ],
      faqBadge: 'স্বচ্ছতা',
      faqTitle: 'কাজের মান ও সততার নিশ্চয়তা',
      ctaTitle: 'আপনার উপযোগী সেবা পরিকল্পনা নিয়ে আলোচনা করবেন?',
      ctaDesc: 'আপনার ব্যবসার লক্ষ্য যাচাই করতে এবং সঠিক কৌশল নির্ধারণ করতে মহিদুল ইসলাম সজীবের সাথে কথা বলুন।',
      ctaBtn: 'সেবা সম্পর্কে আলোচনা করুন'
    },
    portfolio: {
      badge: 'কেস স্টাডিজ',
      pageTitle: 'পোর্টফোলিও ও বাস্তব কেস স্টাডিজ',
      pageSubtitle:
        'বাস্তব ক্যাম্পেইন ফলাফল, স্ট্র্যাটেজি ফ্রেমওয়ার্ক, কনভার্সন ট্র্যাকিং সেটআপ এবং রিটার্ন অন ইনভেস্টমেন্টের প্রমাণ।',
      allCategories: 'সকল প্রজেক্ট',
      categoryMeta: 'মেটা অ্যাডস',
      categoryGoogle: 'গুগল অ্যাডস',
      categoryEcommerce: 'ই-কমার্স',
      categoryStrategy: 'ক্যাম্পেইন স্ট্র্যাটেজি',
      challengeLabel: 'মূল চ্যালেঞ্জ',
      strategyLabel: 'কৌশলগত সমাধান',
      resultsLabel: 'বাস্তব ফলাফল',
      deliverablesLabel: 'মূল ডেলিভারেবলস',
      viewCaseStudy: 'কেস স্টাডি বিস্তারিত দেখুন',
      discussCaseStudy: 'একই ধরনের প্রজেক্ট নিয়ে কথা বলুন',
      ctaTitle: 'আপনার ব্র্যান্ডের বিক্রয় বাড়াতে চান?',
      ctaDesc: 'আপনার বর্তমান অ্যাড অ্যাকাউন্ট অডিট ও স্কেলিং রোডম্যাপ নিয়ে আলোচনা শুরু করুন।',
      ctaBtn: 'ইনকোয়ারি শুরু করুন',
      items: [
        {
          id: 'proj-meta-ecommerce',
          title: 'ই-কমার্স ফ্যাশন স্কেলিং: মেটা কনভার্সন ইঞ্জিন',
          subtitle: 'ডায়নামিক ক্রিয়েটিভ টেস্টিং এবং CAPI সার্ভার-সাইড ট্র্যাকিংয়ের সমন্বয়ে মেটা অ্যাডস স্কেলিং।',
          categoryLabel: 'মেটা অ্যাডস ও ই-কমার্স',
          overview:
            'একটি ডিরেক্ট-টু-কনজিউমার ফ্যাশন ব্র্যান্ডের অ্যাকাউন্ট পুনর্গঠন, সার্ভার-সাইড CAPI স্থাপন এবং সাপ্তাহিক ক্রিয়েটিভ স্প্রিন্টের মাধ্যমে বিক্রয় বৃদ্ধি করা হয়েছে।',
          challenge:
            'ক্লায়েন্টের ROAS কমে যাওয়া, iOS আপডেটের পর সেলস ট্র্যাক না হওয়া এবং একই বিজ্ঞাপনে গ্রাহক অনাগ্রহ তৈরি হওয়া।',
          strategy:
            'অ্যাডভান্টেজ+ শপিং ক্যাম্পেইনে স্থানান্তর, ৯৫%+ ইভেন্ট ম্যাচ কোয়ালিটি নিশ্চিত করতে CAPI স্থাপন এবং লাইফস্টাইল ক্যারোজেল ও সমস্যার সমাধানভিত্তিক ভিডিও হুক টেস্ট।',
          results:
            '৯০ দিনে ৩.৮x গড় ROAS অর্জন, পারচেজ খরচ ৪২% হ্রাস এবং মাসিক মোট বিক্রয় ১৮০% বৃদ্ধি।',
          keyDeliverables: [
            'অ্যাডভান্টেজ+ শপিং ক্যাম্পেইন স্ট্রাকচার',
            'মেটা কনভার্সনস API (CAPI) ইমপ্লিমেন্টেশন',
            'ক্রিয়েটিভ স্প্রিন্ট টেস্টিং ম্যাট্রিক্স (মাসে ১২টি নতুন কনসেপ্ট)',
            'ডায়নামিক রি-টার্গেটিং ক্যাটালগ অপ্টিমাইজেশন'
          ]
        },
        {
          id: 'proj-b2b-leadgen',
          title: 'B2B টেক সলিউশন: হাই-ইনটেন্ট গুগল সার্চ ও ইনবাউন্ড পাইপলাইন',
          subtitle: 'সরাসরি কর্পোরেট সিদ্ধান্ত গ্রহণকারীদের আকৃষ্ট করতে লক্ষ্যভিত্তিক গুগল সার্চ বিজ্ঞাপন।',
          categoryLabel: 'গুগল অ্যাডস ও সার্চ',
          overview:
            'এন্টারপ্রাইজ সফটওয়্যার খুঁজছেন এমন শীর্ষ সিদ্ধান্ত গ্রহণকারীদের কাছ থেকে হাই-ভ্যালু লিড অর্জনের জন্য গুগল সার্চ ক্যাম্পেইন।',
          challenge:
            'অপ্রাসঙ্গিক কিওয়ার্ডের কারণে অপ্রয়োজনীয় সার্চে বাজেট অপচয় হওয়া এবং অযোগ্য লিড আসা।',
          strategy:
            'এক্স্যাক্ট ও ফ্রেজ ম্যাচ কিওয়ার্ড ক্লাস্টার তৈরি, উচ্চ রূপান্তরকারী ল্যান্ডিং পেজ ডিজাইন এবং গুগল অফলাইন কনভার্সন ট্র্যাকিং সংযোজন।',
          results:
            'কোয়ালিফাইড লিড প্রতি খরচ (CPQL) ৫৮% হ্রাস, কোয়ালিফাইড সেলস কলের সংখ্যা ৩.২ গুণ বৃদ্ধি এবং $৩৪০K পাইপলাইন ভ্যালু সৃষ্টি।',
          keyDeliverables: [
            'ইনটেন্ট-ক্লাস্টার্ড গুগল সার্চ ক্যাম্পেইন',
            'বিস্তৃত নেগেটিভ কিওয়ার্ড ডিকশনারি (৬৫০+ শব্দ)',
            'অফলাইন কনভার্সন ইমপোর্ট ও ভ্যালু-বেসড বিডিং',
            'ল্যান্ডিং পেজ মেসেজ সামঞ্জস্য পরামর্শ'
          ]
        },
        {
          id: 'proj-d2c-multiplatform',
          title: 'D2C ওয়েলনেস ব্র্যান্ড: মাল্টি-প্ল্যাটফর্ম ফানেল ইন্টিগ্রেশন',
          subtitle: 'মেটা সোশ্যাল বিজ্ঞাপনের সাথে গুগল সার্চের সমন্বিত ক্রস-প্ল্যাটফর্ম গ্রোথ কৌশল।',
          categoryLabel: 'ক্যাম্পেইন স্ট্র্যাটেজি',
          overview:
            'একটি মডার্ন ওয়েলনেস ব্র্যান্ডের জন্য মেটাতে সচেতনতা তৈরি এবং গুগলে সক্রিয় সার্চ গ্রাহকদের বিক্রয়ে রূপান্তর করার সমন্বিত ফানেল।',
          challenge:
            'বিভিন্ন চ্যানেল আলাদাভাবে কাজ করায় ডাটার অস্বচ্ছতা তৈরি হয়েছিল এবং সামগ্রিক গ্রাহক অর্জন খরচ বৃদ্ধি পাচ্ছিল।',
          strategy:
            'গ্রাহক জার্নি অনুযায়ী চ্যানেল বিন্যাস: মেটাতে শিক্ষণীয় ভিডিও বিজ্ঞাপন, গুগলে ব্র্যান্ড ও ক্যাটাগরি সার্চ ক্যাপচার এবং কার্ট রিমার্কেটিং।',
          results:
            'সমন্বিত চ্যানেলে ৪.৬x সামগ্রিক ROAS, গ্রাহকের লাইফটাইম ভ্যালু (LTV) ৩১% বৃদ্ধি এবং মাসিক অ্যাড বাজেট ২৫০% পর্যন্ত লাভজনকভাবে স্কেল করা হয়েছে।',
          keyDeliverables: [
            'ফুল-ফানেল ক্রস-চ্যানেল মার্কেটিং রোডম্যাপ',
            'ক্রস-নেটওয়ার্ক UTM ট্র্যাকিং আর্কিটেকচার',
            'কাস্টমার জার্নি অ্যাট্রিবিউশন মডেল',
            'এক্সিকিউটিভ সাপ্তাহিক গ্রোথ ড্যাশবোর্ড'
          ]
        },
        {
          id: 'proj-creative-performance',
          title: 'ক্রিয়েটিভ পারফরম্যান্স ফ্রেমওয়ার্ক: হুক টেস্টিং ও দীর্ঘমেয়াদী কার্যকারিতা',
          subtitle: 'কম খরচে দ্রুত সেরা বিজ্ঞাপন খুঁজে বের করার সুশৃঙ্খল ক্রিয়েটিভ টেস্টিং পদ্ধতি।',
          categoryLabel: 'ক্রিয়েটিভ স্ট্র্যাটেজি',
          overview:
            'গ্রাহকদের মনস্তাত্ত্বিক হুক এবং ভিডিও ফরম্যাট দ্রুত যাচাই করার জন্য একটি নিয়মিত ও পুনরাবৃত্তিযোগ্য ক্রিয়েটিভ টেস্টিং সিস্টেম।',
          challenge:
            'বিজ্ঞাপন চালুর ১০-১৪ দিনের মধ্যে কার্যকারিতা হারিয়ে ফেলছিল, ফলে বিজ্ঞাপন খরচ দ্রুত বৃদ্ধি পাচ্ছিল।',
          strategy:
            '৩-ধাপের পাইপলাইন: অল্প বাজেটে নতুন হুক ভ্যালিডেশন, সফল কনসেপ্ট স্কেলিং ক্যাম্পেইনে যুক্ত করা এবং ভিজ্যুয়াল অ্যাঙ্গেল বৈচিত্র্যকরণ।',
          results:
            'বিজ্ঞাপনের গড় কার্যকাল ১২ দিন থেকে ৪৫+ দিনে উন্নীত, গড় CPM ২৪% হ্রাস এবং ক্লিক রেট (CTR) ৬৫% বৃদ্ধি।',
          keyDeliverables: [
            'সিস্টেমেটিক ক্রিয়েটিভ টেস্টিং ম্যাট্রিক্স',
            'হুক অ্যাঙ্গেল সোয়াইপ ফাইল ও স্টোরিবোর্ড টেমপ্লেট',
            'সাপ্তাহিক ক্রিয়েটিভ কার্যকারিতা পর্যবেক্ষণ ফ্রেমওয়ার্ক',
            'UGC কনটেন্ট ক্রিয়েটর ডিরেকশন গাইড'
          ]
        }
      ]
    },
    contact: {
      badge: 'প্রজেক্ট শুরু করুন',
      pageTitle: 'চলুন আপনার ব্যবসায়ের প্রবৃদ্ধি ত্বরান্বিত করি',
      pageSubtitle:
        'বিজ্ঞাপনে খরচ বাড়াতে চান বা সঠিক স্ট্র্যাটেজি দরকার? অ্যাকাউন্ট অডিট, কৌশলগত আলোচনা বা প্রজেক্ট শুরু করতে সরাসরি যোগাযোগ করুন।',
      directContactTitle: 'সরাসরি যোগাযোগের ঠিকানা',
      formTitle: 'প্রজেক্ট ইনকোয়ারি ফর্ম পূরণ করুন',
      fullNameLabel: 'আপনার পূর্ণ নাম',
      fullNamePlaceholder: 'যেমন: মো: আরিফুল ইসলাম',
      emailLabel: 'ইমেইল অ্যাড্রেস',
      emailPlaceholder: 'যেমন: arif@company.com',
      serviceLabel: 'প্রয়োজনীয় প্রাথমিক সেবা',
      serviceDefault: 'একটি মূল সেবা সিলেক্ট করুন',
      budgetLabel: 'আনুমানিক মাসিক অ্যাড বাজেট',
      budgetDefault: 'মাসিক বাজেট রেঞ্জ সিলেক্ট করুন',
      timelineLabel: 'কাজের সম্ভাব্য সময়সীমা',
      timelineDefault: 'প্রজেক্ট টাইমলাইন সিলেক্ট করুন',
      detailsLabel: 'প্রজেক্টের বিবরণ ও ব্যবসায়িক লক্ষ্য',
      detailsPlaceholder:
        'আপনার বর্তমান বিজনেস মডেল, অ্যাড চ্যানেল, প্রধান সমস্যাগুলো এবং কী ধরনের ফলাফল অর্জন করতে চান তা সংক্ষেপে লিখুন...',
      submitBtn: 'ইনকোয়ারি পাঠান',
      submittingBtn: 'পাঠানো হচ্ছে...',
      successTitle: 'ইনকোয়ারি সফলভাবে পাঠানো হয়েছে!',
      successDesc:
        'যোগাযোগ করার জন্য ধন্যবাদ। মহিদুল ইসলাম সজীব আপনার বিস্তারিত তথ্য পর্যালোচনা করে ২৪ ঘণ্টার মধ্যে উত্তর প্রদান করবেন।',
      sendAnother: 'আরেকটি বার্তা পাঠান',
      whatsappPrompt: 'জরুরি আলোচনা প্রয়োজন?',
      chatWhatsApp: 'হোয়াটসঅ্যাপে সরাসরি চ্যাট করুন',
      sendEmail: 'সরাসরি ইমেইল পাঠান',
      responseNotice: 'অফিস সময়ে দ্রুত রিপ্লাই দেওয়া হয় · বাংলাদেশ সময় (BST)',
      timelineBadge: 'কাজের ধাপ',
      timelineTitle: 'ইনকোয়ারি পাঠানোর পর কী ঘটে?',
      step1Title: '১. ইনকোয়ারি পর্যালোচনা ও প্রাথমিক অডিট',
      step1Desc: 'সজীব আপনার বিজনেস মডেল, বর্তমান চ্যানেল এবং সুনির্দিষ্ট লক্ষ্যগুলো পর্যালোচনা করবেন।',
      step2Title: '২. ৩০ মিনিটের স্ট্র্যাটেজি আলোচনা',
      step2Desc: 'গ্রোথের কার্যকর সুযোগ ও প্রয়োজনীয় টেকনিক্যাল সেটআপ নিয়ে স্পষ্ট আলোচনা।',
      step3Title: '৩. রোডম্যাপ ও সুশৃঙ্খল বাস্তবায়ন',
      step3Desc: 'সুনির্দিষ্ট ডেলিভারেবলস, নির্ধারিত সময়সীমা এবং টেকসই ক্যাম্পেইন চালু।'
    },
    footer: {
      headline: 'স্ট্র্যাটেজিক ডিজিটাল মার্কেটিং যা ব্যবসাকে এগিয়ে নিয়ে যায়।',
      description:
        'বাণিজ্যিক সাফল্য ও টেকসই গ্রাহক অর্জনের জন্য গভীর ডাটা অ্যানালিটিক্স এবং স্বচ্ছতার সাথে পরিচালিত পারফরম্যান্স মার্কেটিং।',
      navigationTitle: 'পোর্টফোলিও লিংক',
      contactTitle: 'সরাসরি যোগাযোগ',
      rights: 'সর্বস্বত্ব সংরক্ষিত।',
      disclaimer:
        'উল্লেখিত সকল ব্র্যান্ড নাম ও লোগো তাদের নিজ নিজ প্রতিষ্ঠানের সম্পত্তি। কেস স্টাডিতে প্রদর্শিত ফলাফল বাস্তব ক্লায়েন্ট অভিজ্ঞতার প্রতিফলন এবং প্রতিটি ভিন্ন ব্যবসায়ের ক্ষেত্রে একই ধরনের হুবহু ফলাফলের গ্যারান্টি হিসেবে গণ্য নয়।'
    },
    common: {
      viewDetails: 'কেস স্টাডি বিস্তারিত দেখুন',
      close: 'বন্ধ করুন',
      discussProject: 'একই ধরনের প্রজেক্ট নিয়ে আলোচনা করুন',
      back: 'পেছনে',
      resultsMetric: 'ফলাফল'
    }
  },

  bng: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact',
      hireMe: 'Hire Me',
      language: 'Bhasha'
    },
    hero: {
      badge: 'Head of Performance Marketing & Strategy · Boosting Agency BD',
      headline: 'Strategic Digital Marketing Ja Business-ke Egiye Niye Jay.',
      subheadline: 'Head of Performance Marketing & Strategy',
      description:
        'Ami performance-focused advertising, audience research, campaign strategy ebong creative marketing solutions er maddhome business er digital growth ensure kori.',
      ctaHire: 'Hire Me',
      ctaPortfolio: 'Portfolio Dekhun',
      location: 'Bangladesh',
      performanceGrowth: 'Performance & Growth',
      metaGoogle: 'Meta & Google Ads',
      dataDriven: 'Data-Driven Strategy',
      pillarsTitle: 'Core Performance Framework',
      pillars: {
        p1Title: 'Audience Precision',
        p1Desc: 'Sothik customer segmentation, intent grouping ebong lookalike modeling.',
        p2Title: 'Scalable ROAS',
        p2Desc: 'Structured budget pacing ebong effective bid strategy management.',
        p3Title: 'Conversion Tracking',
        p3Desc: 'Meta Conversions API (CAPI), GTM containers ebong server-side events.',
        p4Title: 'Creative Strategy',
        p4Desc: 'Attraction baranor jonno hook testing, visual angles ebong sharp positioning.'
      },
      stats: {
        spend: '$1.2M+',
        spendLabel: 'Managed Ad Spend',
        campaigns: '350+',
        campaignsLabel: 'Sofol Campaign',
        roas: '4.8x',
        roasLabel: 'Average ROAS Lift',
        retention: '94%',
        retentionLabel: 'Client Retention Rate'
      },
      featuredWorkTitle: 'Featured Case Studies',
      featuredWorkSubtitle: 'Commercial sales briddhi o kom khoroche customer pawar real campaign results.',
      viewAllWork: 'Complete Portfolio Dekhun',
      servicesPreviewTitle: 'Strategic Services',
      servicesPreviewSubtitle: 'Business scalable bhabe grow korar jonno complete performance marketing services.',
      viewAllServices: 'Shob Services Dekhun',
      ctaSectionTitle: 'Apnar Business er Sales Barate Ready?',
      ctaSectionDesc: 'Current ad channels audit korte ebong scalable growth plan toiri korte alochona shuru korun.',
      messageWhatsApp: 'WhatsApp-e Message Din',
      sendInquiry: 'Inquiry Pathan',
      responseNotice: 'Office hours-e druto reply deya hoy · Bangladesh Standard Time (BST)'
    },
    about: {
      badge: 'Mohidul Islam Sojib Shomporke',
      pageTitle: 'Professional Biography o Marketing Philosophy',
      role: 'Head of Performance Marketing & Strategy',
      agency: 'Boosting Agency BD',
      bioP1:
        'Mohidul Islam Sojib ekjon dedicated digital marketing professional o strategist, jini performance advertising, campaign infrastructure ebong sustainable audience acquisition e specialized.',
      bioP2:
        'Boosting Agency BD-te Head of Performance Marketing & Strategy hishebe tini Meta (Facebook & Instagram) ebong Google networks e analytical rigor o audience-centric creative strategy r shomonnoye campaign lead koren.',
      bioP3:
        'Tar kajer mul bhabna holo transparency o real data: thorough audience research, structured funnel architecture, accurate conversion tracking ebong continuous optimization. Tini vanity metrics er cheye commercial profit ke beshi priority den.',
      philosophyBadge: 'Mul Principles',
      philosophyTitle: 'Marketing Philosophy o Approach',
      philosophies: [
        {
          title: 'Audience-Centric Foundations',
          description:
            'Jekono successful campaign shuru hoy customer pain points, intent ebong behavior shothik bhabe bujhe—arbitrary ad spend kore noy.'
        },
        {
          title: 'Full-Funnel Architecture',
          description:
            'Isolated ad er poriborte top-of-funnel awareness theke bottom-of-funnel conversion porjonto cohesive path toiri kora.'
        },
        {
          title: 'Measurement & Attribution Discipline',
          description:
            'Reliable conversion tracking, server-side events ebong clean data analytics chara proper budget allocation shombhob noy.'
        },
        {
          title: 'Honest Strategic Partnership',
          description:
            'Clear communication, ethical advertising ebong kono fake guarantee chara objective performance reporting provide kora.'
        }
      ],
      goalsBadge: 'Vision',
      goalsTitle: 'Professional Goals & Future Focus',
      goals: [
        'Scale high-impact performance marketing frameworks for emerging and established brands.',
        'Advance automated, AI-assisted campaign workflows that shorten iteration cycles while preserving strategic quality.',
        'Strengthen cross-border performance advertising initiatives from Bangladesh to international markets.'
      ],
      skillsBadge: 'Dokkhota',
      skillsTitle: 'Strategic & Technical Capabilities',
      processBadge: 'Kajer Poddhoti',
      processTitle: 'The 4-Step Performance Engine',
      noticeBadge: 'Transparency Notice',
      noticeTitle: 'Ethical Growth er Ongikar',
      noticeDesc:
        'Mohidul Islam Sojib verified data, commercial reality ebong sustainable advertising framework e kaj koren. Digital marketing e platform changes o market dynamics thake; tai responsible professional ra rigid multiplier er blind guarantee den na.',
      bottomCtaTitle: 'Cholun Apnar Next High-Performance Campaign Build Kori',
      bottomCtaDesc: 'Performance marketing consultation ba strategy discussion er jonno shorashori contact korun.',
      contactBtn: 'Sojib er Sathe Contact Korun',
      servicesBtn: 'Services Review Korun'
    },
    services: {
      badge: 'Services & Capabilities',
      pageTitle: 'Specialized Performance Marketing Services',
      pageSubtitle:
        'Profitable customer acquisition, conversion optimization ebong business revenue scale korar jonno tailored solutions.',
      deliverablesLabel: 'Key Deliverables',
      outcomesLabel: 'Target Commercial Outcomes',
      inquireBtn: 'Ei Service Niye Alochona Korun',
      items: [
        {
          id: 'meta-ads',
          title: 'Meta Ads Management',
          shortDescription:
            'Facebook o Instagram e profitable customer acquisition ebong retention er jonno full paid social campaigns.',
          fullDescription:
            'Custom audience research, Advantage+ optimization, creative testing, retargeting sequences ebong disciplined budget pacing er full lifecycle management.',
          deliverables: [
            'Campaign structure architecture (CBO & ABO frameworks)',
            'Creative format variations (Static, Carousel, Video Reels)',
            'Audience segmentation (Lookalike, Broad, Custom Lists)',
            'A/B split testing across messaging and creative hooks',
            'Weekly performance reporting and ROAS tracking'
          ],
          targetOutcomes: 'Kom Cost-per-Acquisition (CPA), high return on ad spend (ROAS) ebong consistent pipeline growth.'
        },
        {
          id: 'google-ads',
          title: 'Google Ads & Search Marketing',
          shortDescription:
            'High-intent search, Performance Max ebong display ads capture korar jonno powerful setup.',
          fullDescription:
            'Strategic keyword intent modeling, high-converting ad copy drafting, negative keyword maintenance ebong smart bidding adjustments.',
          deliverables: [
            'Search, Performance Max, and Shopping campaign setup',
            'Negative keyword mapping and search term auditing',
            'Ad copy variants, sitelinks, and structured callouts',
            'Bid strategy management (Target CPA, Target ROAS)',
            'Conversion goal mapping and attribution modeling'
          ],
          targetOutcomes: 'Bottom-of-funnel active buyers capture kore kom cost e qualified leads o sales barano.'
        },
        {
          id: 'audience-research',
          title: 'Audience Research & Targeting',
          shortDescription:
            'Ad budget shothik prospective buyer er kache pouchate deep demographic o intent profiling.',
          fullDescription:
            'Untapped demographic pockets, competitor audience intercepts ebong customer motivation discover kora.',
          deliverables: [
            'Buyer persona profiling and customer empathy mapping',
            'Competitor positioning and audience overlap audit',
            'Interest cluster architecture for social ad engines',
            'First-party data segmentation (LTV, Recency, Frequency)',
            'Market expansion opportunity reports'
          ],
          targetOutcomes: 'Wasted impressions bondho kora ebong ad relevance score druto improve kora.'
        },
        {
          id: 'funnel-strategy',
          title: 'Campaign Strategy & Planning',
          shortDescription:
            'Initial awareness theke conversion ebong lifetime loyalty porjonto comprehensive growth blueprint.',
          fullDescription:
            'Multi-quarter marketing roadmaps, cross-channel communication matrices, promotional calendar planning ebong commercial forecasts.',
          deliverables: [
            'Full-funnel acquisition blueprints (TOFU, MOFU, BOFU)',
            'Promotional calendar and seasonal campaign planning',
            'Budget allocation models by channel and objective',
            'Offer positioning and landing page alignment audits',
            'Cross-channel attribution recommendations'
          ],
          targetOutcomes: 'Predictable growth pacing, resilient customer journey ebong synchronized channel execution.'
        },
        {
          id: 'tracking-analytics',
          title: 'Conversion Tracking & Analytics',
          shortDescription:
            'Meta Conversions API (CAPI), Google Tag Manager ebong GA4 diye bulletproof data attribution.',
          fullDescription:
            'Browser privacy restrictions avoid kore server-side event tracking, enhanced conversions ebong clean dashboard reporting.',
          deliverables: [
            'Meta Conversions API (CAPI) server-side deployment',
            'Google Tag Manager (GTM) container architecture',
            'GA4 event tracking and conversion funnel setup',
            'Domain verification, aggregated event measurement',
            'UTM taxonomy and automated data studio dashboards'
          ],
          targetOutcomes: '100% accurate attribution, enriched algorithm learning ebong proti takar transparent hishab.'
        },
        {
          id: 'creative-strategy',
          title: 'Creative Strategy & Consultation',
          shortDescription:
            'Attention grab korar moto ad copy, high-impact visuals ebong conversion-focused creative framework.',
          fullDescription:
            'Data analytics ebong consumer psychology r balance kore structured hook testing o creative briefing.',
          deliverables: [
            'High-converting ad copy angles and persuasive hooks',
            'Creative briefs for static designs and short-form video',
            'Competitor creative swipe file and gap analysis',
            'Fatigue monitoring and creative iteration schedules',
            'Landing page message-match recommendations'
          ],
          targetOutcomes: 'High click-through rate (CTR), lower CPM ebong audience ke instant action e inspire kora.'
        }
      ],
      faqBadge: 'Transparency',
      faqTitle: 'Service Standards o Process Integrity',
      ctaTitle: 'Tailored Service Plan Niye Kotha Bolben?',
      ctaDesc: 'Brand goals discuss korte ebong structured engagement plan create korte Sojib er sathe direct connect korun.',
      ctaBtn: 'Services Inquire Korun'
    },
    portfolio: {
      badge: 'Case Studies',
      pageTitle: 'Performance Portfolio & Case Studies',
      pageSubtitle:
        'Real commercial campaigns, strategy frameworks, conversion tracking setups ebong return on investment er documented proof.',
      allCategories: 'Shob Projects',
      categoryMeta: 'Meta Ads',
      categoryGoogle: 'Google Ads',
      categoryEcommerce: 'E-commerce',
      categoryStrategy: 'Campaign Strategy',
      challengeLabel: 'The Challenge',
      strategyLabel: 'Strategic Execution',
      resultsLabel: 'Documented Impact',
      deliverablesLabel: 'Key Deliverables',
      viewCaseStudy: 'Case Study Bistadito Dekhun',
      discussCaseStudy: 'Ekoi Dhoroner Project Niye Alochona Korun',
      ctaTitle: 'Scale Korte Chan Emon Kono Campaign Ache?',
      ctaDesc: 'Current ad accounts, economics ebong scaling roadmap discuss korte shorashori reach out korun.',
      ctaBtn: 'Project Inquiry Shuru Korun',
      items: [
        {
          id: 'proj-meta-ecommerce',
          title: 'E-Commerce Fashion Scaling: Meta Conversions Engine',
          subtitle: 'Dynamic creative testing ebong CAPI server-side event capture diye Meta ads scaling.',
          categoryLabel: 'Meta Ads & E-Commerce',
          overview:
            'Direct-to-consumer apparel brand er account overhaul kore, server-side CAPI deploy kore ebong weekly creative sprint testing chaliye scale kora hoyeche.',
          challenge:
            'ROAS kome jawa, untracked iOS conversions, creative fatigue ebong duplicate ad sets er jonno ad overlap.',
          strategy:
            'Advantage+ Shopping foundation e shift kora, 95%+ event match quality r jonno CAPI install kora ebong problem-solution hooks o lifestyle carousel test kora.',
          results:
            '90 days scale period e 3.8x Blended ROAS, cost-per-purchase 42% decrease ebong monthly gross revenue 180% increase.',
          keyDeliverables: [
            'Advantage+ Shopping campaign structure',
            'Meta Conversions API (CAPI) implementation',
            'Creative sprint testing matrix (12 new concepts/month)',
            'Dynamic retargeting catalog optimization'
          ]
        },
        {
          id: 'proj-b2b-leadgen',
          title: 'B2B Tech Solutions: High-Intent Google Search & Inbound Pipeline',
          subtitle: 'Enterprise decision makers target kore laser-focused Google Search campaigns.',
          categoryLabel: 'Google Ads & Search',
          overview:
            'Enterprise software solutions khujchen emon high-ticket decision makers der capture korar jonno disciplined Google Search funnel.',
          challenge:
            'Broad match keyword leakage o poor negative keywords er jonno student queries o irrelevant consumer search e budget waste hochhilo.',
          strategy:
            'Exact o phrase match intent clusters diye campaign re-architecture, high-converting landing page ebong offline conversion tracking add kora.',
          results:
            'Cost Per Qualified Lead (CPQL) 58% reduction, sales-qualified discovery calls 3.2x increase ebong $340K qualified pipeline value create hoyeche.',
          keyDeliverables: [
            'Intent-clustered Google Search campaigns',
            'Extensive negative keyword dictionary (650+ terms)',
            'Offline conversion import & value-based bidding',
            'Landing page message-matching consultation'
          ]
        },
        {
          id: 'proj-d2c-multiplatform',
          title: 'Direct-to-Consumer Wellness: Multi-Platform Funnel Integration',
          subtitle: 'Meta top-of-funnel awareness er sathe Google Search intent capture er synchronized strategy.',
          categoryLabel: 'Campaign Strategy',
          overview:
            'Modern wellness brand er jonno paid channels unify kore social video ads theke search engine intent capture porjonto seamless customer journey toiri.',
          challenge:
            'Siloed channels ek oporer sathe compete korchilo attribution clarity chara, ja customer acquisition cost barachhilo.',
          strategy:
            'Journey stages map kora: Meta problem-awareness video reels, Google Search brand/category capture ebong dynamic cart remarketing.',
          results:
            'Integrated channels e 4.6x Overall ROAS, customer lifetime value (LTV) 31% increase ebong monthly ad budget 250% scalable growth.',
          keyDeliverables: [
            'Full-funnel cross-channel marketing roadmap',
            'Cross-network UTM tracking architecture',
            'Customer journey attribution model',
            'Executive weekly growth dashboards'
          ]
        },
        {
          id: 'proj-creative-performance',
          title: 'Creative Performance Framework: Hook Testing & Ad Fatigue Mitigation',
          subtitle: 'Production bloat chara scalable advertising assets toirir systematic creative testing methodology.',
          categoryLabel: 'Creative Strategy',
          overview:
            'Fast-growth consumer brand er jonno repeatable creative testing system, ja messaging angles o UGC formats druto validate kore.',
          challenge:
            'Ad creative 10-14 days er moddhe burn out hoye jachhilo, ja CPM spikes ebong volatile daily conversions toiri korchilo.',
          strategy:
            '3-stage pipeline: Micro-budget hook validation sandbox, Scaling campaigns e winner extraction ebong visual angle diversification.',
          results:
            'Average creative lifespan 12 days theke 45+ days e extend, average CPM 24% reduce ebong Click-Through-Rate (CTR) 65% lift.',
          keyDeliverables: [
            'Systematic Creative Testing Matrix',
            'Hook angle swipe file and storyboard templates',
            'Weekly creative fatigue monitoring framework',
            'UGC creator briefing & directional guidance'
          ]
        }
      ]
    },
    contact: {
      badge: 'Start a Project',
      pageTitle: 'Cholun Apnar Business Growth Accelerate Kori',
      pageSubtitle:
        'Marketing challenge solve korte ba paid acquisition scale korte ready? Strategy discuss korte, accounts audit korte ba collaboration explore korte direct reach out korun.',
      directContactTitle: 'Direct Contact Details',
      formTitle: 'Send a Structured Project Inquiry',
      fullNameLabel: 'Full Name',
      fullNamePlaceholder: 'e.g. John Doe',
      emailLabel: 'Email Address',
      emailPlaceholder: 'e.g. john@yourcompany.com',
      serviceLabel: 'Primary Service Required',
      serviceDefault: 'Select a core service focus',
      budgetLabel: 'Estimated Monthly Ad Budget',
      budgetDefault: 'Select estimated monthly budget',
      timelineLabel: 'Desired Launch Timeline',
      timelineDefault: 'Select project timeline',
      detailsLabel: 'Project Details & Commercial Goals',
      detailsPlaceholder:
        'Current business model, advertising channels, primary challenges ebong ki milestones achieve korte chan describe korun...',
      submitBtn: 'Send Project Inquiry',
      submittingBtn: 'Sending Inquiry...',
      successTitle: 'Inquiry Sofolbhabe Pathano Hoyeche!',
      successDesc:
        'Contact korar jonno dhonnobad. Mohidul Islam Sojib apnar inquiry details review kore 24 business hours er moddhe respond korben.',
      sendAnother: 'Arekti Inquiry Pathan',
      whatsappPrompt: 'Immediate Response Dorkar?',
      chatWhatsApp: 'WhatsApp-e Direct Chat Korun',
      sendEmail: 'Direct Email Pathan',
      responseNotice: 'Quick response within business hours · Bangladesh Standard Time (BST)',
      timelineBadge: 'Process',
      timelineTitle: 'Inquiry Pathanor Por Ki Hoy?',
      step1Title: '1. Inquiry Review & Preliminary Audit',
      step1Desc: 'Sojib apnar business model, channels ebong specific performance goals review korben.',
      step2Title: '2. 30-Minute Strategy Alignment',
      step2Desc: 'High-leverage growth opportunities ebong technical needs niye focused discussion.',
      step3Title: '3. Roadmap & Structured Execution',
      step3Desc: 'Clear deliverables, transparent timelines ebong disciplined commercial campaign launch.'
    },
    footer: {
      headline: 'Strategic Digital Marketing Ja Business-ke Egiye Niye Jay.',
      description:
        'Performance advertising, campaign strategy, audience targeting ebong creative marketing solutions built on analytical rigor and professional transparency.',
      navigationTitle: 'Explore Portfolio',
      contactTitle: 'Direct Inquiries',
      rights: 'All rights reserved.',
      disclaimer:
        'Shokol trademarks, brand names ebong logos tader nijo nijo maliker property. Case studies e cited performance metrics actual client scenarios reflect kore ebong shob business er jonno blanket guarantee noy.'
    },
    common: {
      viewDetails: 'Case Study Bistadito Dekhun',
      close: 'Bondho Korun',
      discussProject: 'Ekoi Dhoroner Project Niye Alochona Korun',
      back: 'Pechone',
      resultsMetric: 'Impact'
    }
  }
};
