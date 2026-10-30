/**
 * Centralized Portfolio Data for Mohidul Islam Sojib
 * Head of Performance Marketing & Strategy at Boosting Agency BD
 * 
 * Note: All biographical information, contact details, services,
 * and portfolio items are managed here for permanent static storage.
 */

export interface SkillItem {
  id: string;
  name: string;
  category: 'core' | 'advertising' | 'technical' | 'creative';
  description: string;
  keyPillars: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  deliverables: string[];
  whatsappMessage: string;
  iconName: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category:
    | 'Meta Ads'
    | 'Google Ads'
    | 'E-commerce Marketing'
    | 'Campaign Strategy'
    | 'Social Media Marketing'
    | string;
  description: string;
  objective: string;
  role: string;
  tools: string[];
  strategy: string;
  features: string[];
  resultsNote: string;
  deliverables: string[];
  thumbnail: string;
  featured: boolean;
  liveUrl?: string;
  executionDetails?: string[];
}

export interface WorkingStep {
  step: string;
  title: string;
  description: string;
  focusAreas: string[];
}

export const PERSONAL_DATA = {
  fullName: 'Mohidul Islam Sojib',
  designation: 'Head of Performance Marketing & Strategy',
  organization: 'Boosting Agency BD',
  field: 'Digital Marketing and Performance Marketing',
  location: 'Bangladesh',
  whatsappNumber: '+8801615000426',
  whatsappDisplay: '+880 1615-000426',
  email: 'sojibnstsojib@gmail.com',
  secondaryEmail: 'sojibnstsojibnst@gmail.com',
  portraitImage: '/images/profile/mohidul-islam-sojib.webp',
  portraitAlt: 'Mohidul Islam Sojib — Digital Marketing Professional',
  headline: 'Strategic Digital Marketing That Moves Businesses Forward.',
  subheadline: 'Head of Performance Marketing & Strategy',
  heroDescription:
    'I help businesses strengthen their digital presence through performance-focused advertising, audience research, campaign strategy, and creative marketing solutions.',
  biography: [
    'Mohidul Islam Sojib is a dedicated digital marketing professional and strategist specializing in performance advertising, campaign infrastructure, and sustainable audience acquisition.',
    'As the Head of Performance Marketing & Strategy at Boosting Agency BD, he leads multi-platform campaign initiatives across Meta (Facebook & Instagram) and Google networks, combining analytical rigor with audience-centric creative strategy.',
    'His approach is rooted in transparent methodology: thorough audience research, structured funnel architecture, precise conversion tracking, and relentless data-driven optimization. He prioritizes real business impact over vanity metrics.'
  ],
  marketingPhilosophy: [
    {
      title: 'Audience-Centric Foundations',
      description: 'High-performing campaigns start with deep understanding of customer pain points, intent signals, and behavior—not arbitrary ad spending.'
    },
    {
      title: 'Full-Funnel Architecture',
      description: 'Moving beyond isolated ads to construct cohesive acquisition paths from top-of-funnel awareness down to bottom-of-funnel conversions and repeat loyalty.'
    },
    {
      title: 'Measurement & Attribution Discipline',
      description: 'Reliable conversion tracking, server-side events, and clean data analytics are non-negotiable for informed budget allocation.'
    },
    {
      title: 'Honest Strategic Partnership',
      description: 'Clear communication, ethical advertising practices, and objective performance reporting with zero fabricated guarantees.'
    }
  ],
  professionalGoals: [
    'Scale high-impact performance marketing frameworks for emerging and established brands.',
    'Advance automated, AI-assisted campaign workflows that shorten iteration cycles while preserving strategic quality.',
    'Strengthen cross-border performance advertising initiatives from Bangladesh to international markets.'
  ],
  socialLinks: {
    whatsapp: 'https://wa.me/8801615000426',
    email: 'mailto:sojibnstsojib@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mohidul-islam-sojib'
  }
};

export const PROFESSIONAL_SKILLS: SkillItem[] = [
  {
    id: 'perf-marketing',
    name: 'Performance Marketing',
    category: 'core',
    description: 'Directing data-driven advertising campaigns with clear ROI objectives, structured budget pacing, and conversion benchmarks.',
    keyPillars: ['CBO & ABO Account Structures', 'Target CPA & ROAS Bidding', 'Funnel Stage Attribution', 'Audience Fatigue Monitoring']
  },
  {
    id: 'meta-ads',
    name: 'Meta Ads Management',
    category: 'advertising',
    description: 'Constructing high-converting Facebook and Instagram ad systems powered by behavioral audience modeling and creative testing.',
    keyPillars: ['Advantage+ Shopping Campaigns', 'Custom & Lookalike Audiences', 'Meta Conversions API (CAPI)', 'Dynamic Product Ads (DPA)']
  },
  {
    id: 'google-ads',
    name: 'Google Ads & Search Marketing',
    category: 'advertising',
    description: 'Capturing intent-rich search traffic through tightly grouped keywords, compelling copy, and disciplined bid management.',
    keyPillars: ['Search Intent Clustering', 'Performance Max (PMax)', 'Negative Keyword Sculpting', 'Google Tag Manager (GTM)']
  },
  {
    id: 'audience-research',
    name: 'Audience Research & Targeting',
    category: 'core',
    description: 'Translating consumer psychology into granular segmentation across demographics, purchase intent, and brand affinity.',
    keyPillars: ['Customer Persona Mapping', 'Competitor Audience Analysis', 'Engagement Retargeting Pools', 'Lifecycle Cohort Segmentation']
  },
  {
    id: 'campaign-strategy',
    name: 'Campaign Strategy & Planning',
    category: 'core',
    description: 'Architecting multi-channel promotional roadmaps that align ad creative, landing pages, and conversion offers.',
    keyPillars: ['Offer Positioning & Angles', 'Product Launch Sequencing', 'Seasonal Promotional Calendars', 'Budget Allocation Modeling']
  },
  {
    id: 'conversion-tracking',
    name: 'Conversion Tracking & Web Analytics',
    category: 'technical',
    description: 'Establishing robust tracking foundations to ensure every impression, click, lead, and sale is accurately attributed.',
    keyPillars: ['GA4 Event Configuration', 'Server-Side Event Tracking', 'UTM Parameter Architecture', 'E-commerce Purchase Tracking']
  },
  {
    id: 'creative-strategy',
    name: 'Ad Creative Strategy & Hook Testing',
    category: 'creative',
    description: 'Developing iterative visual concepts, compelling ad copywriting, and thumb-stopping hooks designed to arrest attention.',
    keyPillars: ['3-Second Hook Architecture', 'Video Storyboard Briefing', 'Format Adaptation (1:1, 9:16)', 'Angle & Benefit Testing']
  },
  {
    id: 'brand-promotion',
    name: 'Digital Brand Promotion',
    category: 'creative',
    description: 'Amplifying market credibility and brand resonance through strategic content syndication and multi-touchpoint awareness.',
    keyPillars: ['Authority Content Packaging', 'Social Proof Integration', 'Omnichannel Message Alignment', 'Organic-to-Paid Amplification']
  },
  {
    id: 'client-communication',
    name: 'Transparent Client Communication',
    category: 'core',
    description: 'Delivering clear, honest reporting on campaign health, actionable recommendations, and realistic performance expectations.',
    keyPillars: ['Regular Performance Reviews', 'No Fabricated Metrics', 'Budget Stewardship', 'Collaborative Goal Alignment']
  },
  {
    id: 'workflow-automation',
    name: 'Marketing Workflow Automation',
    category: 'technical',
    description: 'Streamlining campaign monitoring, reporting alerts, and audience updates to maximize operational efficiency.',
    keyPillars: ['Automated Lead Notifications', 'Scheduled Reporting Triggers', 'Ad Alert Thresholds', 'Briefing Template Standardization']
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'meta-ads-management',
    title: 'Meta Ads Management (Facebook & Instagram)',
    shortDescription: 'Full-cycle campaign management designed to acquire customers efficiently across Facebook and Instagram.',
    fullDescription: 'From account restructuring to daily bid management, I build disciplined Meta advertising systems tailored to your customer buying cycle. Using a combination of Advantage+ Shopping, custom audiences, and structured creative iteration, your ad budget is directed where it produces measurable business value.',
    benefits: [
      'Eliminate wasted ad spend through proper negative audiences and structured account hierarchy',
      'Continuous creative testing to prevent ad fatigue and rising customer acquisition costs',
      'Transparent weekly reporting with clear attribution on leads and revenue'
    ],
    deliverables: [
      'Comprehensive ad account audit and restructuring',
      'Custom audience segmentation and lookalike modeling',
      'Campaign setup (prospecting, retargeting, dynamic catalog)',
      'A/B creative and copy testing schedule',
      'Weekly performance summaries and strategic recommendations'
    ],
    whatsappMessage: 'Hi Mohidul Islam Sojib, I am interested in Meta Ads Management for my business.',
    iconName: 'Share2'
  },
  {
    id: 'google-ads-campaigns',
    title: 'Google Ads & Search Campaign Setup',
    shortDescription: 'Intent-driven search and Performance Max campaigns that capture customers at the moment of high intent.',
    fullDescription: 'Capture customers actively searching for your products or services. I configure tightly structured keyword ad groups, write conversion-focused ad copy, enforce negative keyword exclusions, and implement conversion tracking so Google’s algorithms optimize toward real revenue.',
    benefits: [
      'Capture qualified prospects at the exact moment they are looking for solutions',
      'Filter out non-converting search queries with extensive negative keyword lists',
      'Full visibility into search terms, click costs, and conversion actions'
    ],
    deliverables: [
      'Keyword research and competitor search volume analysis',
      'Search campaign structure (Exact, Phrase, Broad-Match testing)',
      'Responsive Search Ads (RSAs) copywriting and asset extensions',
      'Performance Max (PMax) campaign configuration with feed integration',
      'Negative keyword list implementation and weekly hygiene'
    ],
    whatsappMessage: 'Hi Mohidul Islam Sojib, I want to discuss Google Ads campaigns for my company.',
    iconName: 'Search'
  },
  {
    id: 'audience-research-targeting',
    title: 'Audience Research & Strategic Targeting',
    shortDescription: 'Deep analysis of customer personas, intent triggers, and competitor positioning to direct marketing spend.',
    fullDescription: 'Before spending on advertising, you must know exactly who is buying and why. I conduct structured audience research to uncover target demographics, purchase motivators, competitor brand affinities, and behavioral patterns that translate directly into high-performing targeting parameters.',
    benefits: [
      'Stop guessing targeting parameters and reach genuine decision-makers',
      'Uncover overlooked audience segments that competitors are not targeting',
      'Provide clear messaging directions based on actual consumer pain points'
    ],
    deliverables: [
      'Customer persona documentation (demographics, pain points, triggers)',
      'Competitor audience presence and advertising angle breakdown',
      'Ad platform targeting specification sheet (Meta & Google)',
      'Custom audience retargeting roadmap for the customer journey'
    ],
    whatsappMessage: 'Hi Mohidul Islam Sojib, I need an Audience Research & Targeting strategy.',
    iconName: 'Users'
  },
  {
    id: 'campaign-strategy-planning',
    title: 'Full-Funnel Campaign Strategy & Planning',
    shortDescription: 'End-to-end promotional roadmaps that align paid channels, creative assets, and conversion mechanics.',
    fullDescription: 'Successful marketing requires more than launching isolated ads. I develop holistic campaign plans that define offer architecture, customer journey stages from awareness to purchase, promotional calendars, budget allocation across channels, and key performance benchmarks.',
    benefits: [
      'A unified strategic blueprint before any budget is committed',
      'Consistent messaging across every touchpoint the customer experiences',
      'Risk mitigation through phased budget scaling milestones'
    ],
    deliverables: [
      'Comprehensive campaign strategy document',
      'Full-funnel customer journey blueprint',
      'Channel budget allocation model (Top/Middle/Bottom of funnel)',
      'Promotional calendar and seasonal campaign planning',
      'KPI scorecard and scaling threshold guidelines'
    ],
    whatsappMessage: 'Hi Mohidul Islam Sojib, I would like to consult on Campaign Strategy & Planning.',
    iconName: 'Compass'
  },
  {
    id: 'conversion-tracking-setup',
    title: 'Conversion Tracking & Analytics Infrastructure',
    shortDescription: 'Accurate measurement setup via Google Tag Manager, Meta Conversions API (CAPI), and GA4.',
    fullDescription: 'Without accurate tracking, advertising platforms optimize blindly. I install and verify tracking foundations: Meta Pixel, server-side Conversions API (CAPI), Google Tag Manager containers, GA4 custom events, and e-commerce purchase parameters to ensure reliable data reporting.',
    benefits: [
      'Overcome iOS tracking limitations with robust server-side event capture',
      'Train ad platform algorithms on genuine conversions rather than clicks',
      'Eliminate duplicate event counting and attribution confusion'
    ],
    deliverables: [
      'Meta Pixel and Conversions API (CAPI) server-side setup',
      'Google Tag Manager (GTM) container configuration',
      'GA4 event tracking (leads, purchases, form submissions)',
      'UTM parameter taxonomy guide for campaign tracking',
      'Tracking verification report confirming event match quality'
    ],
    whatsappMessage: 'Hi Mohidul Islam Sojib, I need help setting up Conversion Tracking & Analytics.',
    iconName: 'Settings'
  },
  {
    id: 'ad-creative-strategy',
    title: 'Ad Creative Strategy & Hook Testing',
    shortDescription: 'Conversion-focused visual concepts, persuasive ad copywriting, and thumb-stopping hook testing.',
    fullDescription: 'Creative is the primary lever of performance in modern digital advertising. I develop strategic creative briefs, compelling copywriting frameworks, and hook variation matrices designed to arrest scrolling, communicate clear value propositions, and inspire immediate action.',
    benefits: [
      'Systematic creative iteration that avoids production guesswork',
      'Higher thumb-stop ratio and engagement rates on social feeds',
      'Clear creative insights on what specific messaging angles resonate'
    ],
    deliverables: [
      'Creative testing framework (3-second visual hooks, headlines, angles)',
      'Ad copywriting packs (primary text, headlines, descriptions)',
      'Visual creative briefing guidelines for designers / videographers',
      'Creative performance analysis and iteration recommendations'
    ],
    whatsappMessage: 'Hi Mohidul Islam Sojib, I am interested in Ad Creative Strategy & Hook Testing.',
    iconName: 'PenTool'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'meta-performance-ecommerce',
    title: 'Direct-to-Consumer E-Commerce Scaling Framework',
    category: 'Meta Ads',
    description: 'Structured Meta advertising ecosystem engineered to eliminate budget cannibalization, combat ad fatigue, and scale profitable purchase volume.',
    objective: 'Restructure fragmented Meta advertising account to lower cost-per-acquisition (CPA) and sustainably scale daily ad spend.',
    role: 'Lead Performance Strategist & Campaign Architect (Boosting Agency BD)',
    tools: [
      'Meta Ads Manager',
      'Meta Conversions API (CAPI)',
      'Google Tag Manager',
      'Shopify Plus',
      'Triple Whale',
      'Looker Studio'
    ],
    strategy: 'Consolidated fractured ad sets into a unified Campaign Budget Optimization (CBO) and Advantage+ Shopping framework. Deployed 3 distinct creative angles (Product Utility, User Demonstration, and Social Proof), and established an aggressive 30-day/180-day purchaser exclusion protocol to prevent budget cannibalization.',
    features: [
      'Advantage+ Shopping Campaign Architecture',
      'Meta Conversions API (CAPI) Server-Side Event Tracking',
      '3-Tier Retargeting Exclusion & Budget Isolation Rules',
      'Dynamic Product Ads (DPA) Catalog Setup with Custom Frames',
      'Weekly Creative Hook Sprint Testing Protocol'
    ],
    executionDetails: [
      'Audited past 90 days of ad data to isolate top-performing audiences and creative elements',
      'Implemented Meta Conversions API (CAPI) to elevate Event Match Quality to 8.2+/10',
      'Structured broad demographic testing sets paired with high-intent Lookalikes (Top 1% Value-Based Buyers)',
      'Introduced dynamic product catalogs with custom promotional overlay frames'
    ],
    resultsNote: 'Resulted in stabilized weekly purchase volume, reduced CPM variance, and improved campaign stability during high-demand promotional weekends.',
    deliverables: [
      'Full campaign architecture rebuild',
      'Conversions API server-side integration',
      '12 modular ad creative variations',
      'Custom performance reporting dashboard'
    ],
    thumbnail: '/images/portfolio/portfolio_meta_performance_1792339114594.webp',
    featured: true,
    liveUrl: 'https://mohidul-islam-sojib11.pages.dev/'
  },
  {
    id: 'google-ads-search-acquisition',
    title: 'High-Intent Google Search & Inbound Lead Acquisition Engine',
    category: 'Google Ads',
    description: 'Precision Google Search acquisition system capturing high-commercial intent search queries while actively filtering non-converting clicks.',
    objective: 'Generate qualified corporate inquiries by targeting high-commercial search queries while eliminating irrelevant clicks.',
    role: 'Search Engine Marketing Lead & Inbound Funnel Strategist',
    tools: [
      'Google Ads',
      'Google Tag Manager (GTM)',
      'Google Analytics 4 (GA4)',
      'Google Search Console',
      'SEMrush',
      'Looker Studio'
    ],
    strategy: 'Segmented search intent into exact and phrase-match keyword clusters, created dedicated ad copy answering specific pain points, implemented extensive negative keyword filters, and integrated Google Tag Manager lead conversion tracking.',
    features: [
      'Single Theme Ad Group (STAG) Organization',
      '250+ Negative Keyword Exclusion Hierarchy',
      'Offline Conversion Import (OCI) & Value-Based Bidding',
      'High-Relevance Responsive Search Ads (RSAs)',
      'Enhanced Lead Form Conversion Tagging'
    ],
    executionDetails: [
      'Conducted exhaustive search term audit identifying 250+ wasteful search triggers',
      'Organized campaigns into tightly themed ad groups (STAG) with responsive search ads',
      'Configured offline lead value tracking to train smart bidding on qualified opportunities',
      'Optimized landing page relevancy signals to improve overall Quality Scores'
    ],
    resultsNote: 'Significantly decreased unqualified lead submissions and maximized budget concentration on high-intent decision-maker searches.',
    deliverables: [
      'Keyword research & competitor gap analysis',
      'Targeted Responsive Search Ad matrix',
      'Negative keyword exclusion hierarchy',
      'GTM lead form conversion tag configuration'
    ],
    thumbnail: '/images/portfolio/portfolio_google_search_1792339115890.webp',
    featured: true,
    liveUrl: 'https://mohidul-islam-sojib11.pages.dev/'
  },
  {
    id: 'ecommerce-multi-channel-funnel',
    title: 'Full-Funnel E-Commerce Growth Strategy & Store Funnel Architecture',
    category: 'E-commerce Marketing',
    description: 'Integrated multi-channel paid acquisition strategy paired with store conversion rate optimization and shopping funnel enhancements.',
    objective: 'Build an integrated top-of-funnel discovery to bottom-of-funnel retargeting system across Meta and Google.',
    role: 'E-Commerce Growth Consultant & Omnichannel Campaign Manager',
    tools: [
      'Shopify Plus',
      'Meta Ads Manager',
      'Google Performance Max (PMax)',
      'Google Merchant Center',
      'Klaviyo Email Automations',
      'Hotjar Heatmaps'
    ],
    strategy: 'Designed a multi-stage funnel where top-of-funnel video ads introduce key product benefits, middle-of-funnel carousel ads showcase user reviews, and bottom-of-funnel dynamic catalog ads re-engage abandoned cart visitors with targeted offers.',
    features: [
      'Multi-Touchpoint Customer Buying Journey Map',
      'Google Performance Max Product Catalog Sync',
      'Frictionless Mobile-First Shopping Experience & Cart Drawer',
      'Automated Abandoned Cart Retargeting Sequences',
      'Cross-Platform Frequency Capping to Prevent Ad Fatigue'
    ],
    executionDetails: [
      'Mapped customer buying journey from cold discovery to post-purchase referral',
      'Synchronized Meta catalog ads with real-time inventory availability',
      'Set up Google Performance Max campaign to capture cross-network visual touchpoints',
      'Maintained strict frequency capping to prevent ad fatigue among repeat visitors'
    ],
    resultsNote: 'Established a consistent customer acquisition cadence with balanced blended acquisition costs across channels.',
    deliverables: [
      'Full-funnel customer journey map',
      'Dynamic catalog ad template designs',
      'Cross-platform audience exclusions',
      'Bi-weekly performance audit and recommendations'
    ],
    thumbnail: '/images/portfolio/portfolio_ecommerce_growth_1792339116347.webp',
    featured: true,
    liveUrl: 'https://mohidul-islam-sojib11.pages.dev/'
  },
  {
    id: 'creative-testing-strategy',
    title: 'Ad Creative Strategy, Visual Hook Testing & Message-Match Framework',
    category: 'Campaign Strategy',
    description: 'Scientific testing matrix designed to systematically identify winning visual hooks, storytelling formats, and persuasive copywriting angles.',
    objective: 'Establish a scientific creative testing framework to consistently identify winning visual hooks and copy formats.',
    role: 'Creative Director & Campaign Strategist',
    tools: [
      'Meta Ads Manager',
      'Figma',
      'CapCut Pro',
      'Foreplay Ad Swipefile',
      'Google Sheets Matrix',
      'Frame.io'
    ],
    strategy: 'Developed a 3x3 testing matrix testing 3 distinct visual hooks against 3 distinct emotional angles, isolating variables to determine which combinations drove the highest 3-second hook retention and click-through rates.',
    features: [
      '3x3 Hook & Emotional Angle Testing Matrix',
      'Thumb-Stop Ratio & Hold Rate Analysis Dashboard',
      'Standardized 9:16 & 1:1 Mobile-First Storyboards',
      'Fatigue Monitoring & Creative Sprint Rotation',
      'Repeatable Brand Playbook with Winning Archetypes'
    ],
    executionDetails: [
      'Created standardized video storyboard templates for mobile-first formats (9:16 and 1:1)',
      'Tested headline variations highlighting immediate benefit vs. fear of missing out',
      'Analyzed thumb-stop ratio and hold rate to guide subsequent creative production batches',
      'Documented winning creative archetypes into a repeatable brand playbook'
    ],
    resultsNote: 'Accelerated creative turnaround cycles and provided the brand with reliable creative blueprints for future seasonal launches.',
    deliverables: [
      'Creative Testing Protocol document',
      '9 tested ad variations with metric breakdown',
      'Hook retention analysis report',
      'Reusable creative production checklist'
    ],
    thumbnail: '/images/portfolio/portfolio_creative_strategy_1792339116351.webp',
    featured: true,
    liveUrl: 'https://mohidul-islam-sojib11.pages.dev/'
  },
  {
    id: 'social-brand-amplification',
    title: 'Social Media Advertising & Brand Authority Amplification',
    category: 'Social Media Marketing',
    description: 'Targeted video ad placements and community engagement campaigns designed to build brand authority and warm retargeting audiences.',
    objective: 'Enhance regional brand awareness and profile engagement through targeted video ad placements and community amplification.',
    role: 'Social Media Advertising Strategist',
    tools: [
      'Meta Business Suite',
      'Instagram Reels Ads',
      'Facebook Ads',
      'Canva Pro',
      'CapCut',
      'Sprout Social'
    ],
    strategy: 'Executed targeted short-form video campaigns across Instagram and Facebook focused on high-value educational content, building warm retargeting custom audiences for downstream business inquiries.',
    features: [
      'Sponsored Reels & High-Retention Micro Video Distribution',
      'Custom Engagement Pools (50%+ & 75% Watch Time)',
      'Sequential Storytelling Ad Workflows',
      'Active Feedback & Comment Sentiment Monitoring',
      'Cross-Channel Brand Authority Alignment'
    ],
    executionDetails: [
      'Identified top engaging content pillars and formatted them into sponsored reels',
      'Built custom engagement audiences based on 50%+ video watch duration',
      'Orchestrated sequential ad delivery to guide viewers through core brand stories',
      'Monitored audience comments and feedback to refine campaign messaging'
    ],
    resultsNote: 'Delivered significant expansion in organic brand search volume and follower retention without relying on synthetic vanity tactics.',
    deliverables: [
      'Sponsored video distribution schedule',
      'Custom audience retargeting pools',
      'Brand sentiment & engagement report',
      'Follow-up conversion campaign sequence'
    ],
    thumbnail: '/images/portfolio/portfolio_creative_strategy_1792339116351.webp',
    featured: false,
    liveUrl: 'https://mohidul-islam-sojib11.pages.dev/'
  },
  {
    id: 'digital-brand-growth-system',
    title: 'Digital Brand Presence & Conversion Funnel Optimization',
    category: 'Campaign Strategy',
    description: 'Complete synchronization of paid media messaging with dedicated landing page value propositions and rapid inquiry routing.',
    objective: 'Elevate digital brand authority and optimize inbound inquiry conversion pathways across all web touchpoints.',
    role: 'Digital Marketing Strategist & Conversion Optimization Lead',
    tools: [
      'Meta Ads Manager',
      'Google Tag Manager',
      'WhatsApp Business API',
      'Google Analytics 4',
      'Hotjar',
      'Tailwind CSS'
    ],
    strategy: 'Audited digital footprint, aligned paid ad messaging with landing page value propositions, and implemented rapid WhatsApp inquiry routing for high-intent visitors.',
    features: [
      'Message-Match Ad-to-Landing Page Funnel',
      'Instant Mobile WhatsApp Inquiry Routing',
      'Streamlined Lead Qualification Architecture',
      'Transparent Expectation Setting & Trust Badges',
      'Performance Reporting Dashboard Integration'
    ],
    executionDetails: [
      'Synchronized ad copy headlines directly with landing page hero sections',
      'Implemented mobile-friendly instant WhatsApp inquiry links reducing contact friction',
      'Streamlined lead qualification questionnaire to capture critical project parameters',
      'Delivered clear brand positioning guidelines for ongoing digital marketing efforts'
    ],
    resultsNote: 'Greatly shortened inquiry response times and improved the quality of initial business consultations.',
    deliverables: [
      'Digital touchpoint audit & gap analysis',
      'Landing page copy alignment guide',
      'Instant inquiry routing integration',
      'Brand consistency checklist'
    ],
    thumbnail: '/images/portfolio/portfolio_meta_performance_1792339114594.webp',
    featured: false,
    liveUrl: 'https://mohidul-islam-sojib11.pages.dev/'
  }
];

export const WORKING_PROCESS: WorkingStep[] = [
  {
    step: '01',
    title: 'Discovery & Account Audit',
    description: 'We examine your existing advertising data, audience reach, conversion history, and business targets to identify bottlenecks and immediate opportunities.',
    focusAreas: ['Historical ad performance', 'Tracking integrity review', 'Competitor landscape audit']
  },
  {
    step: '02',
    title: 'Strategy & Campaign Architecture',
    description: 'Developing a structured roadmap covering audience targeting, budget allocation, promotional offers, and creative specifications.',
    focusAreas: ['Audience segmentation', 'Funnel mapping', 'Budget pacing model']
  },
  {
    step: '03',
    title: 'Technical Setup & Tracking',
    description: 'Configuring conversion tracking, pixels, event parameters, and campaign infrastructure before any media spend begins.',
    focusAreas: ['Pixel & CAPI verification', 'GA4 event setup', 'UTM parameter taxonomy']
  },
  {
    step: '04',
    title: 'Launch, Testing & Optimization',
    description: 'Systematic testing of ad creative, audiences, and placements followed by data-driven reallocation of budget toward winning assets.',
    focusAreas: ['A/B creative testing', 'Bid strategy tuning', 'Negative audience filtering']
  },
  {
    step: '05',
    title: 'Reporting & Transparent Review',
    description: 'Regular, honest reporting on campaign metrics, actual return on investment, and clear recommendations for subsequent growth phases.',
    focusAreas: ['Metric analysis (ROAS, CPA, CTR)', 'Actionable insights', 'Scaling recommendations']
  }
];

export const TRANSPARENCY_NOTICE = {
  title: 'Commitment to Honest Marketing',
  badge: 'Methodology Standards',
  statement:
    'Digital marketing outcomes depend on market demand, product quality, competitive pricing, and landing page conversion rates. While I apply rigorous analytical and creative methodologies, I do not promise unrealistic overnight results, guaranteed viral metrics, or fabricated revenue claims. Sustainable business growth is built on structured testing, disciplined budget stewardship, and continuous optimization.'
};
