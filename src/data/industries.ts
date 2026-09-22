export interface IndustryData {
  slug: string;
  name: string;
  category: string;
  headline: string;
  tagline: string;
  heroImage: string;
  commonAiPrompts: string[];
  visibilityChallenges: {
    title: string;
    description: string;
  }[];
  whatSeenDoes: {
    title: string;
    description: string;
  }[];
  sampleDashboard: {
    visibilityScore: number;
    recommendationRate: number;
    questionsTracked: number;
    topDiscovered: string[];
    topMissed: string[];
  };
  metrics: {
    label: string;
    value: string;
  }[];
}

export const INDUSTRIES: Record<string, IndustryData> = {
  hvac: {
    slug: 'hvac',
    name: 'HVAC & AC Repair',
    category: 'Home Services',
    headline: 'When homeowners ask AI for emergency AC repair in July, does your business get recommended?',
    tagline: 'HVAC demand in Texas is urgent and high-stakes. When heatwaves hit, customers bypass Google ads and ask ChatGPT: "Who is the most reliable AC repair company in Plano with honest pricing?"',
    heroImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    commonAiPrompts: [
      'Who is the most reliable AC company in Dallas with 24/7 emergency service?',
      'Best heat pump installers near Frisco that offer financing?',
      'Who should I call for fair-priced HVAC replacement in Fort Worth?',
      'Top-rated commercial refrigeration repair near North Austin'
    ],
    visibilityChallenges: [
      {
        title: 'Generic Directory Dominance',
        description: 'AI models frequently pull from outdated aggregator listings or national franchises unless your local digital entities and technician licensing signals are clearly structured.'
      },
      {
        title: 'Unstructured Review Sentiment',
        description: 'AI assistants read review context, not just star ratings. If reviews do not mention specific emergency response times or unit brand expertise, AI skips your business.'
      },
      {
        title: 'Seasonal Signal Decay',
        description: 'During off-peak months, digital signals drop. AIGroSales maintains continuous local authority so your business stays top-of-mind when temperature spikes arrive.'
      }
    ],
    whatSeenDoes: [
      {
        title: 'HVAC Entity Architecture',
        description: 'We structure your service radius, EPA certifications, emergency availability, and supported brands (Trane, Carrier, Lennox) in machine-readable entity schemas.'
      },
      {
        title: 'Local Review Sentiment Alignment',
        description: 'We guide your customer review strategy to reinforce the specific attributes AI searches evaluate: prompt arrival, warranty transparency, and technician honesty.'
      },
      {
        title: 'Neighborhood Citation Networks',
        description: 'We secure high-authority local citations across regional Texas home service publications, chambers of commerce, and trade verification databases.'
      }
    ],
    sampleDashboard: {
      visibilityScore: 36,
      recommendationRate: 29,
      questionsTracked: 142,
      topDiscovered: [
        'Fast emergency AC repair Plano TX',
        'Top Lennox dealer North Dallas',
        'Licensed HVAC technician near Carrollton'
      ],
      topMissed: [
        'Affordable heat pump replacement Dallas',
        'HVAC maintenance plan discounts Frisco',
        'Who offers 0% financing for HVAC near McKinney'
      ]
    },
    metrics: [
      { label: 'Avg. HVAC Customer Value', value: '$8,400' },
      { label: 'AI Search Lift Observed', value: '+24%' },
      { label: 'High-Intent Prompts', value: '180+' }
    ]
  },
  plumbing: {
    slug: 'plumbing',
    name: 'Plumbing & Drain Services',
    category: 'Home Services',
    headline: 'When a homeowner has a burst pipe at 2 AM, who does AI tell them to call?',
    tagline: 'Plumbing emergencies require instant trust. When a homeowner asks Perplexity or ChatGPT for a licensed master plumber, AI evaluates third-party license records, response credibility, and local proximity.',
    heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    commonAiPrompts: [
      'Who is the best emergency plumber in Austin for slab leak detection?',
      'Fair-priced tankless water heater installation in Round Rock',
      'Which plumbers in Houston do not charge exorbitant dispatch fees?',
      'Licensed commercial plumber near The Woodlands with warranty'
    ],
    visibilityChallenges: [
      {
        title: 'Lead Gen Middlemen Interception',
        description: 'National call-center brokers often outrank genuine local master plumbers on AI summaries by flooding the web with synthetic location landing pages.'
      },
      {
        title: 'Missing License & Insurance Metadata',
        description: 'LLMs prioritize verified credentials from state licensing boards (such as TSBPE in Texas). If this isn’t tied to your digital entity, AI considers you unverified.'
      },
      {
        title: 'Vague Scope of Work',
        description: 'When people ask about specialized jobs like hydro-jetting, trenchless sewer repair, or water filtration, AI chooses companies whose web presence explicitly details technical capabilities.'
      }
    ],
    whatSeenDoes: [
      {
        title: 'Master Plumber Credential Schema',
        description: 'We encode your Texas State Board of Plumbing Examiners credentials, bonding, and master plumber license numbers directly into your entity graph.'
      },
      {
        title: 'Emergency Service Signal Verification',
        description: 'We synchronize live dispatch signals and verified emergency response hours across platforms AI models crawl for real-time verification.'
      },
      {
        title: 'Specific Service Cluster Authority',
        description: 'We build local authority around high-ticket jobs: repiping, tankless conversions, sewer inspections, and commercial maintenance.'
      }
    ],
    sampleDashboard: {
      visibilityScore: 31,
      recommendationRate: 26,
      questionsTracked: 118,
      topDiscovered: [
        'Licensed plumber near Westlake Austin',
        'Water heater repair Lakeway TX',
        'Clogged drain emergency Travis County'
      ],
      topMissed: [
        'Best tankless water heater installer Austin',
        'Trenchless sewer line replacement Cedar Park',
        'Plumber with no dispatch fee Round Rock'
      ]
    },
    metrics: [
      { label: 'Avg. Emergency Ticket', value: '$1,850' },
      { label: 'Repiping Project Lift', value: '+32%' },
      { label: 'Prompts Tracked', value: '118' }
    ]
  },
  roofing: {
    slug: 'roofing',
    name: 'Roofing & Storm Restoration',
    category: 'Home Services',
    headline: 'When the spring hailstorm hits Texas, will AI recommend your roofing company or a fly-by-night competitor?',
    tagline: 'Roofing is an industry plagued by storm chasers. AI search engines actively prioritize long-established local contractors with verifiable community history, insurance claims expertise, and authentic manufacturer certifications.',
    heroImage: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1200&q=80',
    commonAiPrompts: [
      'Who is the most trustworthy roofing contractor in DFW for insurance hail damage?',
      'Class 4 impact resistant shingle installers near Southlake',
      'Roofers in San Antonio that handle commercial TPO flat roofs',
      'How to choose an honest local roofer in Denton with Owens Corning Platinum certification'
    ],
    visibilityChallenges: [
      {
        title: 'Skepticism Filters in AI Models',
        description: 'Modern AI assistants are trained to warn users about roofing scams. Without high-trust third-party signals, AI hesitates to recommend any roofer.'
      },
      {
        title: 'Manufacturer Certification Gaps',
        description: 'Certifications like GAF Master Elite or Owens Corning Platinum are often buried in unindexed PDF badges rather than machine-readable entity properties.'
      },
      {
        title: 'Insurance Claim Expertise Undersold',
        description: 'Homeowners ask AI: "Which roofer will help me through my State Farm or USAA claim without cutting corners?" If your reputation does not reflect claims integrity, AI passes.'
      }
    ],
    whatSeenDoes: [
      {
        title: 'Manufacturer & BBB Entity Anchoring',
        description: 'We connect your company entity directly to official manufacturer registries and local BBB ratings to pass AI trust filters.'
      },
      {
        title: 'Storm Hail Impact Digital Readiness',
        description: 'We pre-position digital signals for severe weather periods so your company is immediately cited when storm search volume surges.'
      },
      {
        title: 'Insurance Claims Reputation Signals',
        description: 'We structure customer proof points around honest adjustor collaboration, free drone inspections, and lifetime workmanship warranties.'
      }
    ],
    sampleDashboard: {
      visibilityScore: 38,
      recommendationRate: 33,
      questionsTracked: 135,
      topDiscovered: [
        'GAF certified roofer Arlington TX',
        'Hail damage roof inspection Keller',
        'Honest local roofer Southlake TX'
      ],
      topMissed: [
        'Class 4 impact shingle insurance discounts',
        'Commercial flat roof repair Grapevine',
        'Metal roofing contractor Flower Mound'
      ]
    },
    metrics: [
      { label: 'Avg. Residential Roof Claim', value: '$14,500' },
      { label: 'AI Citation Growth', value: '+38%' },
      { label: 'DFW Cities Monitored', value: '18' }
    ]
  },
  dental: {
    slug: 'dental',
    name: 'Dentistry & Orthodontics',
    category: 'Health & Wellness',
    headline: 'When a family moves to your neighborhood and asks AI for a gentle dentist, do you get chosen?',
    tagline: 'Patients no longer sift through clunky directories. They ask ChatGPT: "Find me an honest family dentist in Central Austin who is gentle with kids and takes Delta Dental."',
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    commonAiPrompts: [
      'Who is the best cosmetic dentist in Austin for porcelain veneers?',
      'Gentle family dentist in Memorial Houston that accepts MetLife',
      'Top clear aligner Invisalign provider near Frisco with weekend hours',
      'Emergency root canal dentist open Saturday in San Antonio'
    ],
    visibilityChallenges: [
      {
        title: 'Insurance Network Confusion',
        description: 'Patients ask AI specific PPO insurance questions. If your accepted providers are not properly codified, AI tells patients you are out of network.'
      },
      {
        title: 'Corporate DSO Dilution',
        description: 'Private dental practices often get overshadowed by massive corporate chains spending millions on brand signals unless entity localization is optimized.'
      },
      {
        title: 'Tone and Bedside Manner Signals',
        description: 'Patients frequently ask for "gentle", "sedation", or "anxiety-free" care. AI looks for semantic proof of these qualities in verified patient testimonials.'
      }
    ],
    whatSeenDoes: [
      {
        title: 'Medical & Dental Specialty Schema',
        description: 'We implement Schema.org `Dentist` data including accepted insurances, dental board certifications, sedation credentials, and ADA affiliations.'
      },
      {
        title: 'High-Ticket Cosmetic Signal Stacking',
        description: 'We position your practice for high-value inquiries: dental implants, full-mouth reconstructions, clear aligners, and cosmetic bonding.'
      },
      {
        title: 'Patient Sentiment Knowledge Graph',
        description: 'We translate authentic feedback on painless dentistry and clean practice technology into structured signals AI assistants digest.'
      }
    ],
    sampleDashboard: {
      visibilityScore: 42,
      recommendationRate: 35,
      questionsTracked: 160,
      topDiscovered: [
        'Cosmetic dentist porcelain veneers Austin',
        'Pediatric dentist sedation South Congress',
        'Clear aligners provider near Downtown Austin'
      ],
      topMissed: [
        'Delta Dental Premier provider 78704',
        'Emergency weekend dental clinic Austin',
        'All-on-4 dental implants pricing Central TX'
      ]
    },
    metrics: [
      { label: 'Patient Lifetime Value', value: '$6,200' },
      { label: 'High-Value Cosmetic Inquiries', value: '+41%' },
      { label: 'Local PPO Terms Tracked', value: '85' }
    ]
  },
  'med-spa': {
    slug: 'med-spa',
    name: 'Med Spas & Aesthetics',
    category: 'Health & Wellness',
    headline: 'When clients ask AI where to get natural-looking Botox or laser treatments, are you the top answer?',
    tagline: 'Aesthetic clients are discerning and research-driven. When they ask Perplexity or ChatGPT: "Who is the top injector in Highland Park who specializes in subtle, natural results?", only practices with verified clinical authority surface.',
    heroImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    commonAiPrompts: [
      'Who is the best Botox injector in Dallas for natural results?',
      'Top-rated Morpheus8 and RF microneedling clinic near Highland Park',
      'Where to get laser hair removal with safe technology for tanned skin in Houston',
      'Medical director certified aesthetic clinic near The Domain Austin'
    ],
    visibilityChallenges: [
      {
        title: 'Medical Director Transparency',
        description: 'AI assistants evaluate safety and clinical oversight. Practices without clearly documented MD/NP medical directors are often penalized by AI safety filters.'
      },
      {
        title: 'Equipment & Modality Specificity',
        description: 'Clients ask for brand-name devices (Sciton BBL, Candela, InMode, CoolSculpting). If your exact machines and wavelengths are not explicitly indexed, AI omits you.'
      },
      {
        title: 'Visual Proof Translation',
        description: 'Instagram photos do not easily transmit to LLMs. AIGroSales helps translate clinical case outcomes into verifiable digital citations.'
      }
    ],
    whatSeenDoes: [
      {
        title: 'Clinical Credential & Director Architecture',
        description: 'We code your supervising physician board certifications, nurse injector credentials, and clinical safety accreditations.'
      },
      {
        title: 'Aesthetic Modality Cataloging',
        description: 'We build machine-readable device specifications for all lasers, injectables (Botox, Dysport, Juvederm, Restylane), and skin wellness treatments.'
      },
      {
        title: 'Luxury Local Authority',
        description: 'We cultivate citations across regional lifestyle publications, medical aesthetics directories, and premium neighborhood guides.'
      }
    ],
    sampleDashboard: {
      visibilityScore: 39,
      recommendationRate: 31,
      questionsTracked: 124,
      topDiscovered: [
        'Natural Botox injector Uptown Dallas',
        'Morpheus8 skin tightening Preston Hollow',
        'Hydrafacial luxury clinic Dallas TX'
      ],
      topMissed: [
        'Safe laser hair removal dark skin Dallas',
        'Sculptra butt lift medical spa Plano',
        'Semaglutide medical weight loss Highland Park'
      ]
    },
    metrics: [
      { label: 'Avg. Client Annual Spend', value: '$3,800' },
      { label: 'Recommendation Uplift', value: '+35%' },
      { label: 'Device Queries Mapped', value: '45+' }
    ]
  },
  'law-firms': {
    slug: 'law-firms',
    name: 'Law Firms & Attorneys',
    category: 'Professional Services',
    headline: 'When an accident victim asks AI who to trust with their injury claim, will AI suggest your firm?',
    tagline: 'Legal search CPCs on Google exceed $300 per click. Meanwhile, clients are turning directly to ChatGPT to ask: "Who is the most aggressive personal injury attorney in San Antonio with a record against trucking companies?"',
    heroImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
    commonAiPrompts: [
      'Who are the best personal injury lawyers in San Antonio with trial experience?',
      'Top-rated commercial real estate attorney in Houston for lease disputes',
      'Which Dallas divorce attorney is best for high-net-worth business owners?',
      'Who should I hire after an 18-wheeler crash on I-35 near San Marcos?'
    ],
    visibilityChallenges: [
      {
        title: 'Billboard & TV Law Firm Congestion',
        description: 'Massive mega-firms dominate traditional media, but AI models look at actual case verdicts, bar associations, and client sentiment rather than ad spend.'
      },
      {
        title: 'State Bar Compliance & Entity Verification',
        description: 'AI engines look for State Bar of Texas licensing, disciplinary records, and board certifications (Texas Board of Legal Specialization).'
      },
      {
        title: 'Practice Area Granularity',
        description: 'Generic claims like "we handle all injuries" perform poorly on AI. Assistants recommend firms known for exact case types (e.g., traumatic brain injury, oilfield explosions).'
      }
    ],
    whatSeenDoes: [
      {
        title: 'TBLS Board Specialization Structuring',
        description: 'We explicitly structure your Texas Board of Legal Specialization credentials, Martindale-Hubbell AV ratings, and Super Lawyers recognitions.'
      },
      {
        title: 'Case Result & Verdict Entity Mapping',
        description: 'We format verified, public case settlements and appellate outcomes into compliant semantic entities AI models cite with confidence.'
      },
      {
        title: 'Corridor & Jurisdiction Relevance',
        description: 'We build geographic authority around specific Texas legal corridors (I-35, Permian Basin, Port of Houston) where case types frequently arise.'
      }
    ],
    sampleDashboard: {
      visibilityScore: 28,
      recommendationRate: 22,
      questionsTracked: 175,
      topDiscovered: [
        'Trial attorney 18-wheeler accident San Antonio',
        'Board certified personal injury lawyer Bexar County',
        'Wrongful death attorney Highway 281'
      ],
      topMissed: [
        'Bicycle accident injury lawyer Downtown SA',
        'Rideshare Uber Lyft accident claim attorney',
        'Company car crash liability lawyer New Braunfels'
      ]
    },
    metrics: [
      { label: 'Avg. Value Per Signed Case', value: '$35,000+' },
      { label: 'Saved on Google PPC', value: '$12,000/mo' },
      { label: 'Questions Tracked', value: '175' }
    ]
  }
};
