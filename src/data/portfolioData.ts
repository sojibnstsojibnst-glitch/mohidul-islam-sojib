/**
 * Centralized Portfolio Data for Mohidul Islam Sojib
 * Head of Performance Marketing & Strategy at Boosting Agency BD
 * 
 * Note: All biographical information, contact details, services,
 * and portfolio items are managed here for easy updates.
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
    | 'Meta Ads Campaigns'
    | 'Google Ads'
    | 'Social Media Marketing'
    | 'Ad Creative Strategy'
    | 'E-commerce Marketing'
    | 'Digital Brand Promotion';
  objective: string;
  strategy: string;
  executionDetails: string[];
  resultsNote: string;
  deliverables: string[];
  thumbnail: string;
  featured: boolean;
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
    keyPillars: ['CPA / CAC Optimization', 'Budget Pacing', 'Funnel Alignment']
  },
  {
    id: 'meta-ads-mgmt',
    name: 'Meta Ads Management',
    category: 'advertising',
    description: 'End-to-end management of Meta Business Suite, campaign structures (CBO/ABO), bid strategies, and audience segmentation.',
    keyPillars: ['Meta Ads Manager', 'Custom Audiences', 'Advantage+ Campaigns']
  },
  {
    id: 'facebook-ads',
    name: 'Facebook Advertising',
    category: 'advertising',
    description: 'Targeted feed, video, and carousel ad campaigns tailored to consumer engagement behaviors across diverse demographic cohorts.',
    keyPillars: ['Newsfeed Optimization', 'Video Views', 'Lead Generation Forms']
  },
  {
    id: 'instagram-ads',
    name: 'Instagram Advertising',
    category: 'advertising',
    description: 'High-retention visual storytelling via Instagram Stories, Reels, and Explore placements tailored to modern mobile consumption.',
    keyPillars: ['Reels Format Ads', 'Story Tap Sequences', 'Visual Commerce']
  },
  {
    id: 'google-ads',
    name: 'Google Ads',
    category: 'advertising',
    description: 'Capturing high commercial search intent through Google Search campaigns, structured ad groups, and Performance Max setups.',
    keyPillars: ['Search Intent Keywords', 'PMax Campaigns', 'Negative Keyword Lists']
  },
  {
    id: 'audience-research',
    name: 'Audience Research and Targeting',
    category: 'core',
    description: 'Systematic audience persona mapping, interest layering, lookalike cohort generation, and competitor market research.',
    keyPillars: ['Buyer Personas', 'Lookalike Modeling', 'Audience Overlap Control']
  },
  {
    id: 'campaign-strategy',
    name: 'Campaign Strategy and Planning',
    category: 'core',
    description: 'Holistic planning across seasonal promotions, product launches, offer positioning, and multi-tier ad architectures.',
    keyPillars: ['TOFU/MOFU/BOFU Funnels', 'Offer Positioning', 'Flight Schedules']
  },
  {
    id: 'ad-copywriting',
    name: 'Advertising Copywriting',
    category: 'creative',
    description: 'Crafting persuasive, benefit-oriented ad headlines, primary text hooks, and calls-to-action that resonate with target buyers.',
    keyPillars: ['Hook Variations', 'Value Proposition Clarity', 'CTA Testing']
  },
  {
    id: 'creative-strategy',
    name: 'Creative Strategy',
    category: 'creative',
    description: 'Translating brand propositions into high-converting visual concepts, video briefs, static ad angles, and dynamic assets.',
    keyPillars: ['Creative Matrix Planning', 'Hook Rate Analysis', 'Visual Storyboarding']
  },
  {
    id: 'conversion-tracking',
    name: 'Conversion Tracking',
    category: 'technical',
    description: 'Configuring Meta Pixel, Conversions API (CAPI), Google Tag Manager, and GA4 custom events for reliable data capture.',
    keyPillars: ['Meta Conversions API', 'Google Tag Manager', 'Custom Event Triggers']
  },
  {
    id: 'analytics-optimization',
    name: 'Campaign Analytics and Optimization',
    category: 'technical',
    description: 'Analyzing CTR, CPC, CPA, ROAS, and frequency metrics to execute surgical weekly budget adjustments and ad refreshes.',
    keyPillars: ['ROAS Attribution', 'Frequency Governance', 'Ad Fatigue Prevention']
  },
  {
    id: 'ai-automation',
    name: 'AI-Powered Workflow Automation',
    category: 'technical',
    description: 'Integrating modern AI tooling to accelerate market research, ad copy variant generation, and creative testing matrix workflows.',
    keyPillars: ['Rapid Copy Iteration', 'Audience Concepting', 'Workflow Streamlining']
  },
  {
    id: 'brand-development',
    name: 'Digital Brand Development',
    category: 'core',
    description: 'Building cohesive visual and messaging standards across digital touchpoints to elevate long-term brand equity.',
    keyPillars: ['Digital Consistency', 'Trust Architecture', 'Authority Building']
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'meta-fb-insta-ads',
    title: 'Facebook and Instagram Ads',
    shortDescription: 'Scalable paid social advertising campaigns designed to generate qualified leads and e-commerce conversions.',
    fullDescription: 'Comprehensive campaign management across Facebook and Instagram feeds, Stories, and Reels. Every campaign is engineered with audience testing matrices, demographic targeting, and creative variation to maximize ad engagement and return on ad spend.',
    benefits: [
      'Targeted reach among verified demographic and interest cohorts',
      'Continuous A/B testing of creative formats and copy hooks',
      'Proactive frequency management to eliminate ad fatigue',
      'Transparent weekly performance reporting and strategic recommendations'
    ],
    deliverables: [
      'Campaign objective alignment and structure design',
      'Target audience setup (Custom, Lookalike, & Interest)',
      'Ad creative recommendations and format planning',
      'Ongoing bid adjustments and budget optimization'
    ],
    whatsappMessage: 'Hi Mohidul Islam Sojib, I am interested in discussing your Facebook and Instagram Ads service.',
    iconName: 'Share2'
  },
  {
    id: 'meta-campaign-setup',
    title: 'Meta Ads Campaign Setup',
    shortDescription: 'Clean, professional architectural setup of your Meta Business Manager, ad accounts, pixels, and campaign hierarchy.',
    fullDescription: 'Avoid costly misconfigurations with a pristine foundation. From domain verification and aggregated event measurement to custom conversion setup and structured ABO/CBO campaigns, your Meta ad account is prepared for sustained growth.',
    benefits: [
      'Flawless structural alignment compliant with Meta advertising policies',
      'Clean event tracking pipeline ready for algorithm learning',
      'Streamlined campaign hierarchy for easy scaling and tracking'
    ],
    deliverables: [
      'Business Manager & Ad Account verification audit',
      'Pixel & Conversions API integration verification',
      'Custom audience and conversion rules configuration',
      'Initial cold and warm campaign structure rollout'
    ],
    whatsappMessage: 'Hi Mohidul Islam Sojib, I would like to consult on setting up my Meta Ads Campaign infrastructure.',
    iconName: 'Settings'
  },
  {
    id: 'google-ads-management',
    title: 'Google Ads Campaign Management',
    shortDescription: 'High-intent search and multi-channel Google advertising capturing active customers seeking your solutions.',
    fullDescription: 'Capture bottom-of-funnel commercial demand with precisely orchestrated Google Search, Display, and Performance Max campaigns. We curate targeted keyword clusters, negative keyword safeguards, and compelling responsive search ads.',
    benefits: [
      'Direct capture of high-intent search queries',
      'Elimination of wasted ad spend via negative keyword lists',
      'Continuous Quality Score optimization to reduce CPC',
      'Clear tracking from search term to recorded conversion'
    ],
    deliverables: [
      'Comprehensive keyword intent research and grouping',
      'Responsive Search Ad (RSA) copywriting and headline variants',
      'Negative keyword list architecture and ongoing hygiene',
      'Bid strategy management (Target CPA / Maximize Conversions)'
    ],
    whatsappMessage: 'Hi Mohidul Islam Sojib, I want to discuss Google Ads Campaign Management for my business.',
    iconName: 'Search'
  },
  {
    id: 'audience-research-targeting',
    title: 'Audience Research and Targeting',
    shortDescription: 'In-depth market research, customer avatar creation, and precise segmentation to find your highest-value prospects.',
    fullDescription: 'Stop guessing who your buyers are. We analyze industry benchmarks, competitor footprints, and demographic data to build concrete audience profiles, intent segments, and custom audience recipes that convert.',
    benefits: [
      'Reduced cost per acquisition through pinpoint audience focus',
      'Clear customer persona documentation for all marketing touchpoints',
      'Strategic lookalike seed audience compilation'
    ],
    deliverables: [
      'Detailed Customer Avatar & Buyer Persona document',
      'Competitor audience research and positioning report',
      'Meta & Google audience segment mapping guide',
      'Audience exclusion and overlap prevention checklist'
    ],
    whatsappMessage: 'Hi Mohidul Islam Sojib, I need audience research and targeting strategy for my brand.',
    iconName: 'Users'
  },
  {
    id: 'digital-marketing-strategy',
    title: 'Digital Marketing Strategy',
    shortDescription: 'Holistic multi-channel marketing roadmaps designed to turn business goals into actionable execution steps.',
    fullDescription: 'A custom, full-funnel digital strategy tailored to your industry, budget, and competitive landscape. We map customer journey stages from initial touchpoint to purchase and post-purchase loyalty.',
    benefits: [
      'Clear 90-day operational roadmap with prioritized milestones',
      'Unified messaging and positioning across all channels',
      'Objective KPI benchmarks to measure true performance'
    ],
    deliverables: [
      'Comprehensive Digital Marketing Blueprint',
      'Funnel architecture & channel allocation model',
      'Offer positioning and value proposition guidance',
      'Milestone tracking and review schedule'
    ],
    whatsappMessage: 'Hi Mohidul Islam Sojib, I would like to discuss a comprehensive Digital Marketing Strategy.',
    iconName: 'Compass'
  },
  {
    id: 'ad-creative-copywriting',
    title: 'Ad Creative Planning and Copywriting',
    shortDescription: 'High-converting ad angles, persuasive hooks, and tailored visual briefs that stop the scroll and drive clicks.',
    fullDescription: 'Creative is the primary variable of advertising success. We craft compelling, benefit-focused ad copy variants and structured creative briefs for video and static formats that capture attention in high-velocity feeds.',
    benefits: [
      'Higher click-through rates (CTR) and stronger audience engagement',
      'Diverse angle testing (pain point, aspirational, proof-driven)',
      'Clear visual briefs for graphic designers and video editors'
    ],
    deliverables: [
      'Multi-angle ad copy matrix (Hooks, Body copy, CTAs)',
      'Visual creative storyboard briefs (Feeds, Stories, Reels)',
      'Ad format specifications and copy character guidelines',
      'A/B test framework for headline and messaging analysis'
    ],
    whatsappMessage: 'Hi Mohidul Islam Sojib, I am looking for Ad Creative Planning and Copywriting support.',
    iconName: 'PenTool'
  },
  {
    id: 'campaign-performance-analysis',
    title: 'Campaign Performance Analysis',
    shortDescription: 'In-depth diagnostic audits of active advertising accounts to identify bottlenecks, waste, and scale opportunities.',
    fullDescription: 'Gain unbiased clarity into why your campaigns are underperforming or where you can unlock higher efficiency. We audit account structure, ad fatigue, bidding strategies, and conversion drop-offs.',
    benefits: [
      'Identification of budget leakages and unproductive ad sets',
      'Actionable recommendations prioritized by impact and effort',
      'Unbiased performance evaluation without vendor bias'
    ],
    deliverables: [
      'Comprehensive Account Health Audit Report',
      'Metric breakdown (CPM, CTR, CPC, Conversion Rate, ROAS)',
      'Immediate action checklist for fast performance lift',
      '1-on-1 strategic walkthrough discussion'
    ],
    whatsappMessage: 'Hi Mohidul Islam Sojib, I would like an audit and Campaign Performance Analysis for my ad accounts.',
    iconName: 'BarChart3'
  },
  {
    id: 'conversion-tracking-support',
    title: 'Conversion Tracking Support',
    shortDescription: 'Robust event tracking setup via Meta Pixel, Conversions API (CAPI), and Google Tag Manager.',
    fullDescription: 'Modern digital advertising requires server-side attribution to withstand cookie deprecation and browser restrictions. We assist in configuring pixel events, server-side data feeds, and GTM containers.',
    benefits: [
      'Accurate conversion attribution for ad platform algorithms',
      'Enhanced event match quality scores on Meta',
      'Reliable data foundation for calculating true return on investment'
    ],
    deliverables: [
      'Meta Pixel and Conversions API integration verification',
      'Standard event configuration (ViewContent, AddToCart, Purchase, Lead)',
      'Google Tag Manager event triggers setup',
      'Event test validation and diagnostics check'
    ],
    whatsappMessage: 'Hi Mohidul Islam Sojib, I need Conversion Tracking Support for my website and campaigns.',
    iconName: 'Activity'
  },
  {
    id: 'digital-brand-promotion',
    title: 'Digital Brand Promotion',
    shortDescription: 'Strategic multi-platform digital promotions that enhance brand recognition, credibility, and authority.',
    fullDescription: 'Amplify your brand presence across social networks through carefully scheduled promotional pushes, engagement campaigns, and digital footprint expansion that positions your business as an industry frontrunner.',
    benefits: [
      'Sustained brand recall among target business demographics',
      'Consistent brand tone of voice across digital channels',
      'Synergy between brand awareness and performance conversions'
    ],
    deliverables: [
      'Digital brand positioning and promotional calendar',
      'Content distribution and paid amplification plan',
      'Brand engagement campaign setup and monitoring',
      'Audience sentiment and reach reports'
    ],
    whatsappMessage: 'Hi Mohidul Islam Sojib, I want to discuss Digital Brand Promotion for my company.',
    iconName: 'Megaphone'
  },
  {
    id: 'marketing-workflow-automation',
    title: 'Marketing Workflow Automation',
    shortDescription: 'Smart automated workflows and AI-assisted processes to streamline campaign operations and reporting.',
    fullDescription: 'Eliminate repetitive manual tasks. We implement streamlined workflows for automated reporting alerts, lead routing to your CRM/WhatsApp, and prompt-engineered frameworks for rapid ad iteration.',
    benefits: [
      'Instant lead notification to ensure rapid sales response',
      'Hours saved every week on manual data compilation',
      'Consistent operational rigor across campaign testing cycles'
    ],
    deliverables: [
      'Automated lead notification routing (Email/Sheet/WhatsApp webhook)',
      'Scheduled performance summary alert triggers',
      'Creative briefing template automation',
      'Operational workflow documentation'
    ],
    whatsappMessage: 'Hi Mohidul Islam Sojib, I am interested in Marketing Workflow Automation for my business.',
    iconName: 'Cpu'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'meta-performance-ecommerce',
    title: 'Performance Marketing Framework for Direct-to-Consumer Brand',
    category: 'Meta Ads Campaigns',
    objective: 'Restructure fragmented Meta advertising account to lower cost per purchase and scale daily spend profitably.',
    strategy: 'Consolidated fractured ad sets into a unified CBO structure, deployed 3 distinct creative angles (Product Utility, User Demonstration, and Social Proof), and established an aggressive retargeting exclusion protocol to prevent budget cannibalization.',
    executionDetails: [
      'Audited past 90 days of ad data to isolate top-performing audiences and creative elements',
      'Implemented Meta Conversions API (CAPI) to elevate Event Match Quality to 8.2/10',
      'Structured broad demographic testing sets paired with high-intent Lookalikes',
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
    featured: true
  },
  {
    id: 'google-ads-search-acquisition',
    title: 'High-Intent Search Campaign Structure for B2B Services',
    category: 'Google Ads',
    objective: 'Generate qualified corporate inquiries by targeting high-commercial search queries while eliminating irrelevant clicks.',
    strategy: 'Segmented search intent into exact and phrase-match keyword clusters, created dedicated ad copy answering specific pain points, implemented extensive negative keyword filters, and integrated Google Tag Manager lead conversion tracking.',
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
    featured: true
  },
  {
    id: 'ecommerce-multi-channel-funnel',
    title: 'Full-Funnel Paid Acquisition Strategy for Retail Store',
    category: 'E-commerce Marketing',
    objective: 'Build an integrated top-of-funnel discovery to bottom-of-funnel retargeting system across Meta and Google.',
    strategy: 'Designed a multi-stage funnel where top-of-funnel video ads introduce key product benefits, middle-of-funnel carousel ads showcase user reviews, and bottom-of-funnel dynamic catalog ads re-engage abandoned cart visitors with targeted offers.',
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
    featured: true
  },
  {
    id: 'creative-testing-strategy',
    title: 'Ad Creative Strategy & Hook Testing System',
    category: 'Ad Creative Strategy',
    objective: 'Establish a scientific creative testing framework to consistently identify winning visual hooks and copy formats.',
    strategy: 'Developed a 3x3 testing matrix testing 3 distinct visual hooks against 3 distinct emotional angles, isolating variables to determine which combinations drove the highest 3-second hook retention and click-through rates.',
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
    featured: true
  },
  {
    id: 'social-brand-amplification',
    title: 'Social Media Advertising & Brand Promotion Initiative',
    category: 'Social Media Marketing',
    objective: 'Enhance regional brand awareness and profile engagement through targeted video ad placements and community amplification.',
    strategy: 'Executed targeted short-form video campaigns across Instagram and Facebook focused on high-value educational content, building warm retargeting custom audiences for downstream business inquiries.',
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
    featured: false
  },
  {
    id: 'digital-brand-growth-system',
    title: 'Digital Brand Presence & Funnel Optimization',
    category: 'Digital Brand Promotion',
    objective: 'Elevate digital brand authority and optimize inbound inquiry conversion pathways across all web touchpoints.',
    strategy: 'Audited digital footprint, aligned paid ad messaging with landing page value propositions, and implemented rapid WhatsApp inquiry routing for high-intent visitors.',
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
    featured: false
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
    title: 'Audience & Funnel Architecture',
    description: 'We define precise customer personas, segment buying intent, and map out the full-funnel structure from cold discovery to purchase.',
    focusAreas: ['Customer avatar modeling', 'Cold vs. warm funnel tiers', 'Budget allocation plan']
  },
  {
    step: '03',
    title: 'Creative & Copy Strategy',
    description: 'We formulate persuasive ad copy angles, compelling hooks, and clear visual briefs tailored to stop the scroll and encourage action.',
    focusAreas: ['Hook & angle matrix', 'Mobile-first format planning', 'Value proposition clarity']
  },
  {
    step: '04',
    title: 'Technical Setup & Launch',
    description: 'We configure campaign hierarchies, verify event tracking (Pixel, GTM, CAPI), and launch structured campaigns with controlled bidding parameters.',
    focusAreas: ['Pixel & CAPI verification', 'Campaign hierarchy rollout', 'Initial testing schedule']
  },
  {
    step: '05',
    title: 'Optimization & Reporting',
    description: 'We monitor core metrics daily, prune underperforming ads, reallocate budget toward winning segments, and provide clear, transparent reporting.',
    focusAreas: ['CPA & ROAS monitoring', 'Ad fatigue mitigation', 'Ongoing strategic consultation']
  }
];

export const TRANSPARENCY_NOTICE = {
  title: 'Professional Marketing Transparency',
  description: 'In performance marketing, honest strategy always outperforms hype. I do not guarantee overnight riches, guaranteed ROAS multipliers, or unrealistic sales figures, because advertising success depends on product-market fit, pricing, market demand, and customer experience. What I deliver is rigorous strategy, disciplined execution, clean tracking, and relentless optimization.'
};
