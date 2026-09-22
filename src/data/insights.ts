export interface InsightArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  featuredImage: string;
  content: string[];
}

export const INSIGHTS: InsightArticle[] = [
  {
    slug: 'death-of-ten-blue-links',
    title: 'The Death of 10 Blue Links: How AI Search Changes Local Discovery',
    excerpt: 'Search used to mean typing a query, scanning ten blue links, and clicking around. Today, customers ask AI for one trusted answer. Here is how local discovery transformed in 18 months.',
    category: 'Market Shifts',
    readTime: '5 min read',
    publishedAt: 'September 2, 2026',
    author: {
      name: 'Marcus Vance',
      role: 'Head of Strategy, AIGroSales',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    content: [
      'For twenty-five years, the customer journey on the web was remarkably static: open Google, type a phrase like "plumber near me", scan through paid ads, review map pins, and click on two or three website links before picking up the phone.',
      'That muscle memory is dissolving. In 2026, when a homeowner in Plano has an emergency or a young family in Austin needs an orthodontist, they open ChatGPT, Perplexity, or Google AI. They don’t type keywords. They type conversational dilemmas: "My AC unit is blowing lukewarm air, the fan outside isn’t spinning, who is an honest HVAC tech in North Dallas who won’t charge me $400 just to diagnose it?"',
      'The AI doesn’t reply with 10 links. It synthesizes an answer, evaluates dozens of sources behind the scenes, and recommends two or three specific companies with concise rationale.',
      'This marks the transition from Search Engine Optimization to AI Discovery Marketing. If your business isn’t structured for machine comprehension, you aren’t just buried on page two—you are omitted entirely from the conversation.'
    ]
  },
  {
    slug: 'why-traditional-seo-fails-in-ai',
    title: 'Why Traditional SEO Fails in AI Assistants (And What Replaces It)',
    excerpt: 'Keyword stuffing and backlink farming do not work on LLMs. Understand the four digital signals that actually determine AI visibility.',
    category: 'Technical Strategy',
    readTime: '6 min read',
    publishedAt: 'August 24, 2026',
    author: {
      name: 'Devon Walker',
      role: 'Principal Engineer, AIGroSales',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Many business owners believe that if they pay an agency $2,500 a month for traditional SEO, they are automatically covered for AI. This is a costly misconception.',
      'Traditional search engines like Google relied heavily on document-level keyword matching and PageRank backlink counts. If you had the exact keyword density and 50 directory backlinks, you could rank.',
      'Large Language Models do not work like search index crawlers. When an AI responds to a user prompt, it performs Retrieval-Augmented Generation (RAG) across authoritative sources, license registries, sentiment clusters, and structured knowledge graphs.',
      'If an HVAC company has hundreds of spammy blog posts about "Best Air Conditioner 2024" but no verified entity corroboration across the Texas Department of Licensing & Regulation or clear service radius schemas, the LLM’s confidence score drops to zero.',
      'To be seen by AI, businesses must shift from keyword density to Entity Authority, Citation Triangulation, and Semantic Review Sentiment.'
    ]
  },
  {
    slug: 'digital-entity-optimization-guide',
    title: 'Digital Entity Optimization: The Machine-Readable Schema Behind AI Recommendations',
    excerpt: 'How leading Texas enterprises format their digital footprint so AI assistants can crawl, understand, and verify their services without ambiguity.',
    category: 'Best Practices',
    readTime: '7 min read',
    publishedAt: 'August 14, 2026',
    author: {
      name: 'Elena Garza',
      role: 'Data & Entity Architect, AIGroSales',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    featuredImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
    content: [
      'In AI terms, your business is either a known "entity" or it is noisy unstructured data. An entity is a unique, unambiguous concept that an AI model can verify across multiple independent nodes.',
      'When an AI model reads your website, it does not look at your visual layout or slick hero photos. It extracts named entities: What is your exact legal business name? What state license numbers do you hold? Which geographic polygons do you serve? What exact equipment models do your technicians carry?',
      'If this data is presented in standard HTML paragraphs, the AI must guess. When an AI must guess, it prefers a competitor whose data is unambiguous and machine-readable.',
      'Implementing nested Schema.org microdata (such as `HVACBusiness`, `OpeningHoursSpecification`, `GeoCoordinates`, and `AggregateRating`) gives AI models the programmatic confidence required to place you at the top of their recommendations.'
    ]
  },
  {
    slug: 'texas-local-ai-readiness-report',
    title: 'The Texas Local Business AI Readiness Report: Findings From 1,200 Prompts',
    excerpt: 'We benchmarked 500 Dallas, Austin, Houston, and San Antonio service companies across ChatGPT and Perplexity. Over 74% are completely invisible.',
    category: 'Research',
    readTime: '8 min read',
    publishedAt: 'July 29, 2026',
    author: {
      name: 'Marcus Vance',
      role: 'Head of Strategy, AIGroSales',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    featuredImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Over a 90-day period, AIGroSales’ research team systematically prompted ChatGPT 4.0, Google AI Overviews, Perplexity Pro, and Claude 3.5 with 1,200 real-world commercial intent queries in Texas.',
      'We tested queries spanning Dallas-Fort Worth, Greater Austin, Houston Metro, and San Antonio across six high-ticket service verticals: HVAC, plumbing, roofing, dental, aesthetic clinics, and personal injury law.',
      'The findings were striking: 74.2% of established local businesses with 4.5+ star Google ratings failed to appear even once across the tested AI recommendations. Instead, a small cohort (less than 12% of businesses) captured over 68% of all AI mentions.',
      'Why? The top 12% shared three structural advantages: verified state credential linkages, high citation density across regional media, and explicit machine-readable service schemas. The good news: this gap is an immense opportunity for first-movers.'
    ]
  },
  {
    slug: 'how-ai-recommends-hvac-heatwave',
    title: 'How AI Decides Which HVAC Company to Recommend When a Heatwave Hits',
    excerpt: 'A step-by-step breakdown of what happens behind the scenes when a user asks for emergency AC repair in 105-degree Texas heat.',
    category: 'Case Analysis',
    readTime: '5 min read',
    publishedAt: 'July 11, 2026',
    author: {
      name: 'Devon Walker',
      role: 'Principal Engineer, AIGroSales',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    featuredImage: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Imagine it is 4:30 PM on a Tuesday in July in Dallas. Outside temperatures hit 106°F. A homeowner’s condenser fan stops running. Their home is 82°F and climbing.',
      'The homeowner doesn’t want to read 15 websites or wait on hold with three national franchises. They ask Perplexity: "Who is an honest, family-owned AC repair company in Frisco or Plano that does not gouge on after-hours calls and can come out today?"',
      'Within 1.4 seconds, the AI executes a retrieval process: it identifies the location parameters, queries live local citation nodes, cross-references recent review sentiment for words like "fair emergency fee" and "arrived within two hours", and checks whether the business is certified.',
      'The AI returns three businesses with clear rationales. The homeowner taps the first recommended number and books the call. That is AI Discovery Marketing in action.'
    ]
  }
];
