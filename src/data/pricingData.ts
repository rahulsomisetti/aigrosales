export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  idealFor: string;
  priceMonthly: number;
  priceAnnual: number; // monthly equivalent when paid annually
  setupNote: string;
  turnaroundOrCommitment: string;
  popular?: boolean;
  ctaText: string;
  summary: string;
  highlights: string[];
  servicesOffered: {
    category: string;
    items: string[];
  }[];
}

export interface PaidAuditOffer {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  price: number;
  creditGuarantee: string;
  turnaround: string;
  summary: string;
  deliverables: string[];
  ctaText: string;
}

export const PAID_AUDIT_OFFER: PaidAuditOffer = {
  id: 'paid-audit',
  name: 'AIGroSales Comprehensive AI Visibility Audit',
  badge: '100% Fee Credited Toward Retainer',
  tagline: 'The diagnostic that reveals exactly how ChatGPT, Claude, Perplexity & Google AI see your business — and which competitors steal your leads.',
  price: 499,
  creditGuarantee: '100% of your $499 audit fee is credited directly toward your first 3 months of AIGroSales monthly management.',
  turnaround: '3–5 Business Days',
  summary: 'A deep-dive forensic examination across 50–200 conversational queries, testing your brand against competitors in your exact service territory.',
  deliverables: [
    '50–200 local commercial queries tested across ChatGPT, Claude, Perplexity & Google AI Overviews',
    'Competitor share-of-voice and recommendation frequency breakdown',
    'Digital entity disambiguation and Schema.org knowledge graph health report',
    'Local licensing (TDLR, TSBPE, Bar) and NAP directory consistency audit',
    'Review sentiment analysis examining qualitative AI recommendation weight',
    'Website machine-readability and AI crawler accessibility audit',
    'Prioritized 90-day action roadmap to close competitive visibility gaps',
    '1-on-1 strategy presentation call with a Senior AI Search Strategist'
  ],
  ctaText: 'Order $499 Audit (With Retainer Credit)'
};

export interface FeatureMatrixItem {
  name: string;
  tooltip?: string;
  freeAudit: string | boolean;
  starter: string | boolean;
  growth: string | boolean;
  dominance: string | boolean;
}

export interface FeatureMatrixCategory {
  category: string;
  features: FeatureMatrixItem[];
}

export interface PricingFaqItem {
  question: string;
  answer: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter Foundation',
    tagline: 'Establish verified presence & eliminate entity errors in AI search.',
    idealFor: 'Single-location local businesses, solo practices & trades taking their first proactive steps in AI discovery.',
    priceMonthly: 499,
    priceAnnual: 399,
    setupNote: 'No long-term lock-in · Cancel anytime after 90 days',
    turnaroundOrCommitment: '90-Day Initial Sprint',
    ctaText: 'Start with Foundation',
    summary: 'Essential Schema markup, digital entity cleanup, and top-tier local citation alignment to get your business onto AI search radars.',
    highlights: [
      'Quarterly 50+ prompt AI visibility benchmark',
      'Core Schema.org microdata (LocalBusiness & NAP)',
      'Top 25 regional and Texas trade directories',
      'AI crawler access audit (Robots.txt & bot readiness)',
      'Monthly AI recommendation scorecard',
      'Direct email support with 48-hr SLA'
    ],
    servicesOffered: [
      {
        category: 'AI Visibility Audit',
        items: [
          'Quarterly benchmark testing across Claude, ChatGPT, and Google AI',
          '50 local commercial query prompt tests per quarter',
          'Entity discrepancy and NAP error diagnostics'
        ]
      },
      {
        category: 'Entity & Knowledge Graph',
        items: [
          'Basic Schema.org JSON-LD (LocalBusiness, GeoCoordinates, ContactPoint)',
          'Google Business Profile semantic alignment for AI crawlers',
          'State licensing registry corroboration'
        ]
      },
      {
        category: 'Local Authority & Citations',
        items: [
          '25 Tier-1 regional citations & Texas industry directories',
          'NAP (Name, Address, Phone) deduplication & cleanup',
          '1 target service area / metro location'
        ]
      },
      {
        category: 'Website & Architecture',
        items: [
          'Robots.txt and crawler indexing rules for AI bots',
          'Core contact and service pages machine-readability review'
        ]
      },
      {
        category: 'Monitoring & Support',
        items: [
          'Monthly AI visibility health report',
          'Email support with 48-hour response SLA'
        ]
      }
    ]
  },
  {
    id: 'growth',
    name: 'Growth & Market Leader',
    badge: 'Flagship Sweet Spot · Most Popular',
    popular: true,
    tagline: 'Capture high-intent recommendations and outposition local competitors.',
    idealFor: 'Established businesses, high-demand contractors, and multi-crew teams competing in active metro markets.',
    priceMonthly: 999,
    priceAnnual: 799,
    setupNote: 'Most chosen by Texas contractors, medical spas & clinics',
    turnaroundOrCommitment: 'Month-to-month after 90-day sprint',
    ctaText: 'Choose Growth Plan',
    summary: 'Comprehensive multi-model prompt testing, advanced semantic schema graphs, conversational web pages, and aggressive competitor displacement.',
    highlights: [
      'Bi-weekly 150+ prompt AI visibility audits',
      'Advanced Schema.org (Services, AreaServed, Credentials)',
      '60+ high-authority citation nodes & Texas trade boards',
      '3 custom AI-optimized conversational Q&A landing pages',
      'Review sentiment optimization & keyword prompts',
      'Competitor radar & recommendation share tracking',
      'Monthly 1-on-1 strategy session with senior strategist',
      'Priority WhatsApp & phone support'
    ],
    servicesOffered: [
      {
        category: 'AI Visibility Audit',
        items: [
          'Bi-weekly multi-engine benchmark across Claude, ChatGPT, Perplexity & Gemini',
          '150+ conversational local commercial prompt tests',
          'Competitor share-of-recommendation breakdown',
          '90-day prioritized prompt gap action plan'
        ]
      },
      {
        category: 'Entity & Knowledge Graph',
        items: [
          'Full semantic knowledge graph schema (Service, AreaServed, PriceSpecification)',
          'Entity disambiguation across Texas licensing registries (TDLR, TSBPE, Bar)',
          'Knowledge graph anchoring across Wikidata and authority nodes',
          'NAP harmonized across 60+ Tier-1 data aggregators'
        ]
      },
      {
        category: 'Local Authority & Citations',
        items: [
          '60+ local citation network nodes in your metro and county',
          'Placement on curated local editorial lists and trade association portals',
          'Corroborated third-party signals AI models reference in answers'
        ]
      },
      {
        category: 'Website & Architecture',
        items: [
          '3 conversational Q&A landing pages structured for voice and AI queries',
          'Neighborhood & sub-market geographic microdata integration',
          'AI bot crawler optimization (ClaudeBot, GPTBot, PerplexityBot, Google-Extended)'
        ]
      },
      {
        category: 'Reputation & Reviews',
        items: [
          'Targeted review generation prompts designed for AI sentiment analysis',
          'Review sentiment auditing across Google, Yelp, and industry platforms',
          'AI-ready response templates highlighting service specialties'
        ]
      },
      {
        category: 'Monitoring & Strategic Guidance',
        items: [
          'Bi-weekly AI Visibility Score and recommendation shift tracking',
          'Competitor radar detecting rival visibility gains',
          'Monthly 45-minute video strategy consultation',
          'Priority WhatsApp and phone support with 24-hour SLA'
        ]
      }
    ]
  },
  {
    id: 'dominance',
    name: 'Category Dominance',
    badge: 'Enterprise & Multi-Location',
    tagline: 'Undisputed category dominance, multi-zone coverage, and proactive defense.',
    idealFor: 'High-ticket practices (law firms, cosmetic surgery, commercial trades) and multi-location companies seeking regional leadership.',
    priceMonthly: 1999,
    priceAnnual: 1699,
    setupNote: 'Dedicated Senior AI Strategist & Account Lead',
    turnaroundOrCommitment: 'Month-to-month after 90-day sprint',
    ctaText: 'Dominate Your Market',
    summary: 'Continuous weekly prompt telemetry, multi-location coverage, custom AI content architecture, active review defense, and dedicated executive strategy.',
    highlights: [
      'Weekly 300+ prompt multi-engine surveillance',
      'Up to 3 locations or service zones included',
      'Custom Wikidata entity anchoring & schema nodes',
      'Unlimited conversational Q&A architecture & updates',
      'Active sentiment defense & proactive anomaly mitigation',
      'Model update defense (ChatGPT, Claude, Google algorithm changes)',
      'Bi-weekly executive strategy reviews',
      'Direct VIP WhatsApp channel with dedicated strategist'
    ],
    servicesOffered: [
      {
        category: 'AI Visibility Audit',
        items: [
          'Weekly continuous telemetry across all major LLMs and search engines',
          '300+ comprehensive commercial queries, long-tail prompts, and voice inquiries',
          'Real-time competitor displacement alerts',
          'Custom prompt simulation for high-value transactional scenarios'
        ]
      },
      {
        category: 'Entity & Knowledge Graph',
        items: [
          'Multi-location semantic knowledge graph architecture (up to 3 branches)',
          'Wikidata node creation and high-authority institutional anchoring',
          'Full entity disambiguation across state and federal trade registries',
          'Custom schema structuring for specialized certifications, awards, and pricing'
        ]
      },
      {
        category: 'Local Authority & Citations',
        items: [
          '100+ authoritative citation nodes across all regional operating counties',
          'Curated local press and chamber editorial feature placements',
          'Corroborated operational track record nodes for maximum AI confidence'
        ]
      },
      {
        category: 'Website & Architecture',
        items: [
          'Comprehensive AI-first website restructuring and conversion tuning',
          'Unlimited conversational service and regional neighborhood pages',
          'Dynamic schema injection and structured FAQ feeds'
        ]
      },
      {
        category: 'Reputation & Reviews',
        items: [
          'Full-funnel sentiment engineering and prompt-optimized review workflows',
          'Proactive negative sentiment anomaly detection and mitigation',
          'Custom AI-trained review response playbooks'
        ]
      },
      {
        category: 'Monitoring & Strategic Guidance',
        items: [
          'Continuous real-time prompt telemetry dashboard',
          'Model update impact alerts and immediate algorithmic counter-measures',
          'Bi-weekly 1-on-1 strategy sessions with Senior Director',
          'Direct VIP WhatsApp & phone hotline with same-day SLA'
        ]
      }
    ]
  }
];

export const FEATURE_COMPARISON_MATRIX: FeatureMatrixCategory[] = [
  {
    category: 'AI Model Coverage & Auditing',
    features: [
      {
        name: 'AI Platforms Benchmarked',
        tooltip: 'Major generative engines tested for your business recommendations',
        freeAudit: 'Claude & ChatGPT',
        starter: 'ChatGPT, Claude, Google AI',
        growth: 'ChatGPT, Claude, Gemini, Perplexity',
        dominance: 'All 4 Major Engines + Emerging Models'
      },
      {
        name: 'Tested Prompt Query Volume',
        tooltip: 'Number of realistic conversational questions tested in your market',
        freeAudit: '25 sample prompts',
        starter: '50 prompts / quarter',
        growth: '150+ prompts / bi-weekly',
        dominance: '300+ prompts / weekly'
      },
      {
        name: 'Competitor Share of Voice',
        tooltip: 'Quantifying which competitors steal recommendations and why',
        freeAudit: 'Top 3 Competitors',
        starter: 'Top 3 Competitors',
        growth: 'Top 10 Competitors & Shift Radar',
        dominance: 'Comprehensive Regional Radar'
      },
      {
        name: 'Audit Refresh Frequency',
        tooltip: 'How often your complete AI visibility diagnostics are refreshed',
        freeAudit: 'One-Time Baseline',
        starter: 'Quarterly',
        growth: 'Bi-Weekly',
        dominance: 'Weekly Continuous'
      }
    ]
  },
  {
    category: 'Entity Optimization & Knowledge Graphs',
    features: [
      {
        name: 'Schema.org Structured Microdata',
        tooltip: 'Machine-readable code telling AI exactly what you do and where',
        freeAudit: false,
        starter: 'Core LocalBusiness & NAP',
        growth: 'Advanced Services & AreaServed',
        dominance: 'Full Semantic Graph Architecture'
      },
      {
        name: 'Entity Disambiguation & Licensing',
        tooltip: 'Aligning state licensing boards (TDLR, TSBPE, Bar) to verify trust',
        freeAudit: false,
        starter: 'Basic Registry Match',
        growth: 'Multi-Registry Cross-Verification',
        dominance: 'Institutional Verification & Wikidata'
      },
      {
        name: 'NAP Data Harmonization',
        tooltip: 'Synchronizing Name, Address, and Phone across aggregators',
        freeAudit: 'Discrepancy Report',
        starter: 'Top 25 Directories',
        growth: '60+ Tier-1 Aggregators',
        dominance: '100+ Directories & Aggregators'
      },
      {
        name: 'Locations / Service Zones Included',
        tooltip: 'Number of distinct operating locations or service territories',
        freeAudit: '1 Location',
        starter: '1 Location',
        growth: '1 Location (+ Add-ons)',
        dominance: 'Up to 3 Locations Included'
      }
    ]
  },
  {
    category: 'Local Authority & Signals',
    features: [
      {
        name: 'Regional Citation Network',
        tooltip: 'Verified third-party mentions in regional Texas hubs and trade boards',
        freeAudit: false,
        starter: '25 Citation Nodes',
        growth: '60+ Authority Nodes',
        dominance: '100+ Authority Nodes'
      },
      {
        name: 'Editorial & Trade Association Nodes',
        tooltip: 'Placement on curated local lists and industry associations',
        freeAudit: false,
        starter: false,
        growth: true,
        dominance: true
      },
      {
        name: 'Corroboration Signals Defense',
        tooltip: 'Ensuring AI models find matching corroborating proofs on third-party sites',
        freeAudit: false,
        starter: 'Basic',
        growth: 'Advanced',
        dominance: 'Comprehensive'
      }
    ]
  },
  {
    category: 'Website & Conversational Content',
    features: [
      {
        name: 'AI Bot Crawler Optimization',
        tooltip: 'Robots.txt, sitemaps, and indexing rules for ClaudeBot, GPTBot, etc.',
        freeAudit: 'Accessibility Check',
        starter: true,
        growth: true,
        dominance: true
      },
      {
        name: 'Conversational Q&A Pages',
        tooltip: 'Pages structured directly around real natural-language AI prompts',
        freeAudit: false,
        starter: false,
        growth: '3 Dedicated Landing Pages',
        dominance: 'Unlimited Tailored Pages'
      },
      {
        name: 'Granular Neighborhood Signals',
        tooltip: 'Sub-market and zip-code level microdata for hyper-local discovery',
        freeAudit: false,
        starter: 'City-level',
        growth: 'County & Sub-market',
        dominance: 'Hyper-local Neighborhoods'
      }
    ]
  },
  {
    category: 'Reputation & Review Sentiment',
    features: [
      {
        name: 'Qualitative Sentiment Auditing',
        tooltip: 'Evaluating what AI reads in customer review text beyond star ratings',
        freeAudit: 'Basic Sentiment Score',
        starter: 'Quarterly Audit',
        growth: 'Monthly Audit & Keyword Prompts',
        dominance: 'Continuous Sentinel Monitoring'
      },
      {
        name: 'AI Keyword Review Prompts',
        tooltip: 'Workflows encouraging customers to mention specific high-weight service terms',
        freeAudit: false,
        starter: false,
        growth: true,
        dominance: true
      },
      {
        name: 'AI-Ready Response Playbooks',
        tooltip: 'Response strategies that feed AI context and reinforce entity facts',
        freeAudit: false,
        starter: false,
        growth: true,
        dominance: 'Custom-Trained Playbooks'
      }
    ]
  },
  {
    category: 'Reporting, Strategy & Support',
    features: [
      {
        name: 'AI Visibility Score & Telemetry',
        tooltip: 'Quantified visibility index and recommendation tracking',
        freeAudit: '1-time Snapshot',
        starter: 'Monthly PDF',
        growth: 'Bi-Weekly Dashboard + Report',
        dominance: 'Weekly Real-Time Telemetry'
      },
      {
        name: 'Competitor Radar & Displacement Alerts',
        tooltip: 'Immediate alerts when competitors gain ground or lose visibility',
        freeAudit: false,
        starter: false,
        growth: true,
        dominance: 'Priority Real-Time Alerts'
      },
      {
        name: '1-on-1 Strategic Consulting',
        tooltip: 'Dedicated consulting with our senior AI search marketing team',
        freeAudit: '15-min Review Call',
        starter: 'Quarterly Check-in',
        growth: 'Monthly (45 min)',
        dominance: 'Bi-Weekly Executive Strategy'
      },
      {
        name: 'Support Channel & SLA',
        tooltip: 'Guaranteed turnaround time and direct communication channels',
        freeAudit: 'Email',
        starter: 'Email (48-hr SLA)',
        growth: 'Priority WhatsApp & Phone (24-hr)',
        dominance: 'VIP Hotline & Same-Day SLA'
      }
    ]
  }
];

export const PRICING_FAQS: PricingFaqItem[] = [
  {
    question: 'How do you determine which tier is right for my business?',
    answer: 'Most local single-location trades and solo practitioners start with our Starter Foundation tier to resolve entity inconsistencies and secure foundational citation nodes. If you operate in a competitive Texas metro (Houston, Dallas-Fort Worth, Austin, San Antonio) with aggressive rivals, the Growth tier is our most popular because it includes active competitor displacement, conversational landing pages, and review sentiment tuning. For multi-location businesses, high-ticket practices (such as personal injury attorneys, surgical clinics, or commercial roofers), the Dominance tier delivers full-scale regional leadership.'
  },
  {
    question: 'Why do you recommend an initial 90-day sprint?',
    answer: 'AI search engines, LLM knowledge graphs, and crawler indexes do not update overnight. Once we overhaul your Schema.org architecture, harmonize state licensing databases, and build local citation networks, AI models take between 4 to 8 weeks to recrawl, assimilate, and reflect new entity confidence in their conversational recommendations. The 90-day sprint ensures sufficient time for measurable visibility shifts to materialize.'
  },
  {
    question: 'Are there long-term contracts or cancellation penalties?',
    answer: 'No. We do not believe in locking clients into multi-year contracts. After the initial 90-day foundation sprint, all retainers operate strictly month-to-month. You can adjust your tier or cancel anytime with 30 days notice.'
  },
  {
    question: 'Can I start with the Free AI Visibility Audit first?',
    answer: 'Yes, absolutely! In fact, we encourage it. Our free confidential audit tests your business against 25+ real customer queries across major AI platforms, checks your digital entity status, and shows where competitors are being recommended instead of you. You receive the complete report within 1 business day with zero obligation.'
  },
  {
    question: 'What happens when ChatGPT, Claude, or Google update their algorithms?',
    answer: 'AI models change frequently. On our Growth and Dominance tiers, our continuous telemetry detects algorithmic fluctuations and shifts in how LLMs synthesize local answers. Whenever a model updates its retrieval-augmented generation (RAG) pipeline, our team proactively adjusts your entity schemas, authoritative citations, and conversational queries to safeguard and expand your recommendation rate.'
  },
  {
    question: 'How is this different from traditional SEO agencies charging $2,000+/month?',
    answer: 'Traditional SEO agencies focus on ranking 10 blue links on Google through keyword stuffing, blog posts nobody reads, and spammy backlinks. AI search functions completely differently: conversational assistants evaluate entity graphs, corroborated licensing records, verified third-party sentiment, and machine-readable data to recommend 2 to 3 trusted businesses. We build the exact signals modern AI engines prioritize.'
  },
  {
    question: 'How does the $499 Comprehensive Audit 100% Retainer Credit work?',
    answer: 'When you purchase our $499 Comprehensive AI Visibility Audit, our team conducts exhaustive prompt testing across 50–200 conversational scenarios and builds your 90-day roadmap. If you choose to partner with AIGroSales for ongoing monthly management (Starter, Growth, or Dominance) within 30 days of receiving your audit, your entire $499 fee is credited 100% against your management invoices. That means your in-depth diagnostic effectively costs you zero.'
  }
];
