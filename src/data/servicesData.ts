export interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  whyItMatters: string;
  outcome: string;
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'audit',
    number: '01',
    title: 'AI Visibility Audit',
    tagline: 'Know exactly where your business stands in AI discovery.',
    description: 'We test your business against hundreds of real-world conversational prompts across Anthropic Claude, ChatGPT, Google AI Overviews, Gemini, and Perplexity to identify exactly when you are recommended, when competitors steal the lead, and which questions you are completely missing.',
    deliverables: [
      'Comprehensive benchmark across 4 major AI search platforms',
      'Prompt coverage analysis across 100+ local commercial queries',
      'Competitor share-of-recommendation breakdown',
      'Digital entity health score and data inconsistency mapping',
      'Prioritized 90-day action plan to close visibility gaps'
    ],
    whyItMatters: 'You cannot fix what you cannot measure. Most business owners are shocked to discover that even with a 4.9-star Google profile, they are mentioned in fewer than 15% of relevant AI queries.',
    outcome: 'Clear, unvarnished visibility baseline and an immediate roadmap for action.'
  },
  {
    id: 'entity-optimization',
    number: '02',
    title: 'Digital Entity Optimization',
    tagline: 'Turn your business into an unambiguous, machine-readable entity.',
    description: 'AI models do not just read web pages—they connect nodes in vast semantic knowledge graphs. We structure your core business information, services, licenses, operating areas, and credentials into authoritative schemas that AI models can ingest without confusion.',
    deliverables: [
      'Custom Schema.org microdata implementation (LocalBusiness, Service, AreaServed)',
      'Entity disambiguation across state licensing registries and trade boards',
      'Knowledge Graph anchoring across Wikidata and authoritative industry nodes',
      'NAP (Name, Address, Phone) harmonized across 60+ Tier-1 data aggregators',
      'Machine-readable pricing, certifications, and service catalog structuring'
    ],
    whyItMatters: 'When an AI model encounters conflicting data about your business (e.g., mismatched addresses, ambiguous service areas), its confidence drops, and it defaults to a competitor whose data is clean.',
    outcome: 'High-confidence entity recognition across all major LLMs and AI crawlers.'
  },
  {
    id: 'local-authority',
    number: '03',
    title: 'Local Authority',
    tagline: 'Strengthen the third-party signals AI models trust most.',
    description: 'AI assistants heavily weight independent, verified third-party citations when deciding which businesses to recommend. We systematically cultivate digital mentions and citations across reputable local chambers, regional press, trade organizations, and community hubs.',
    deliverables: [
      'Local citation network fortification in your specific Texas metro or county',
      'High-authority mentions in regional industry directories and trade associations',
      'Placement on curated local editorial lists and community resource guides',
      'Verification with state licensing databases (TDLR, TSBPE, Texas Bar, etc.)',
      'Anchor entity citations that corroborate your operational track record'
    ],
    whyItMatters: 'AI doesn’t take your word for it when your website says you’re the best. It checks whether respected third-party sources corroborate your reputation.',
    outcome: 'A dense, authoritative web of citations that reinforces your credibility.'
  },
  {
    id: 'website-optimization',
    number: '04',
    title: 'Website Optimization',
    tagline: 'Structure your website for both human customers and AI engines.',
    description: 'We optimize your website architecture so that AI web crawlers (like ClaudeBot, GPTBot, Google-Extended, and PerplexityBot) can instantly parse what you do, who you serve, and why your business is the best answer to local inquiries—without sacrificing your human conversion rate.',
    deliverables: [
      'Conversational Q&A page structuring mapped to real voice and AI prompts',
      'Service area and neighborhood landing architecture with granular geographic signals',
      'Robots.txt, sitemap, and crawler accessibility audits for AI bots',
      'Content restructuring to emphasize verifiable facts, pricing guidelines, and guarantees',
      'Fast-loading, mobile-first design optimization for seamless user conversion'
    ],
    whyItMatters: 'A flashy website with 10 megabytes of unparsed JavaScript and vague marketing buzzwords is completely invisible to AI bots searching for concrete answers.',
    outcome: 'A high-converting website that serves as an open book for AI discovery.'
  },
  {
    id: 'reputation-reviews',
    number: '05',
    title: 'Reputation & Reviews',
    tagline: 'Cultivate authentic sentiment that AI algorithms can interpret.',
    description: 'Star ratings alone are not enough for modern AI. LLMs conduct sentiment analysis across review text, looking for specific attributes like "honest pricing," "arrived in 30 minutes," or "careful with pets." We help you generate rich, detailed customer reviews that feed AI evaluation criteria.',
    deliverables: [
      'Targeted review generation workflows that prompt customers for specific qualitative feedback',
      'Review sentiment auditing across Google, Yelp, BBB, and industry-specific platforms',
      'AI-ready response strategies that contextualize customer reviews with relevant service keywords',
      'Proactive monitoring for negative sentiment anomalies that degrade AI recommendation weight',
      'Testimonial structuring into semantic review schemas'
    ],
    whyItMatters: 'When a customer asks AI: "Who is an HVAC tech that doesn’t try to upsell you on a new unit?", AI reads the nuance in your reviews, not just your 5.0 rating.',
    outcome: 'Nuanced, high-trust review sentiment that AI systems actively favor.'
  },
  {
    id: 'monitoring',
    number: '06',
    title: 'AI Visibility Monitoring',
    tagline: 'Track your AI visibility, competitors, and new opportunities over time.',
    description: 'AI models update their data pipelines continuously. What works today might shift next month as search engines release new models. Our ongoing monitoring tracks your recommendation rate, detects competitor movements, and identifies emerging prompts in your market.',
    deliverables: [
      'Monthly AI Visibility Score and recommendation rate tracking',
      'Competitor radar reporting who is gaining or losing share in your market',
      'New prompt opportunity detection based on emerging search behavior',
      'Model update impact alerts whenever Claude, ChatGPT, Google, or Perplexity change algorithms',
      'Quarterly strategic roadmap adjustments with our senior marketing team'
    ],
    whyItMatters: 'AI discovery is not a one-time set-and-forget task. It is an evolving channel that rewards active, vigilant businesses.',
    outcome: 'Continuous peace of mind and sustained competitive advantage.'
  }
];
