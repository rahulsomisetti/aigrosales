import type { Metadata } from 'next';
import { HomePage } from '@/views/HomePage';

export const metadata: Metadata = {
  title: 'AIGroSales | AI-Powered Marketing for Businesses Ready to Grow',
  description:
    'AIGroSales helps small and growing local businesses become visible and recommended when customers use AI assistants and search. Turn AI discovery into real sales.',
  alternates: {
    canonical: 'https://aigrosales.com',
  },
  openGraph: {
    title: 'AIGroSales | AI-Powered Marketing for Businesses Ready to Grow',
    description:
      'Get Seen by AI. Get Chosen by Customers. Turn AI discovery into real sales and new customers.',
    url: 'https://aigrosales.com',
    type: 'website',
  },
};

const homepageSchemas = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://aigrosales.com/#webpage',
      url: 'https://aigrosales.com/',
      name: 'AIGroSales | AI-Powered Marketing for Businesses Ready to Grow',
      description:
        'AIGroSales helps small and growing local businesses become visible and recommended when customers use AI assistants and search.',
      isPartOf: {
        '@id': 'https://aigrosales.com/#website',
      },
      about: {
        '@id': 'https://aigrosales.com/#organization',
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://aigrosales.com/#service-marketing',
      name: 'AI Discovery Marketing & Generative Engine Optimization',
      serviceType: 'AI Marketing & Search Optimization',
      provider: {
        '@id': 'https://aigrosales.com/#organization',
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AIGroSales Core Solutions',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI Visibility & Sales Audit',
              description:
                '100+ prompt benchmark testing across ChatGPT, Claude, Google AI Overviews, Gemini, and Perplexity with competitor share-of-recommendation analysis.',
              offers: {
                '@type': 'Offer',
                price: '499.00',
                priceCurrency: 'USD',
              },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Digital Entity Optimization',
              description:
                'Knowledge graph anchoring, Schema.org microdata, and NAP synchronization across 60+ Tier-1 data aggregators.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Local Authority & Citations',
              description:
                'High-authority mentions in regional industry directories, trade boards, and curated editorial guides.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Website Architecture & AI Crawlability',
              description:
                'Conversational Q&A page structuring, llms.txt machine-readable documentation, and AI crawler accessibility optimization.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Reputation & Sentiment Optimization',
              description:
                'Cultivating qualitative customer review sentiment to feed AI recommendation criteria.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Continuous AI Visibility Monitoring',
              description:
                'Ongoing multi-engine prompt benchmarking, competitor radar surveillance, and model algorithm change alerts.',
            },
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://aigrosales.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What exactly is AI Discovery Marketing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI Discovery Marketing (also known as Generative Engine Optimization or GEO) is the strategic discipline of positioning your business so that large language models (like ChatGPT, Claude, Google Gemini, and Perplexity) discover, understand, and recommend your company when users ask conversational questions for services you offer.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is this different from traditional SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Traditional SEO optimizes for keyword volume, backlinks, and position in a list of 10 blue search links. AI Discovery Marketing optimizes for entity recognition, semantic citation authority, factual consensus across knowledge graphs, and conversational recommendation by AI assistants answering complex multi-part queries directly.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which AI engines do you optimize for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We optimize for and benchmark across the top conversational engines: OpenAI ChatGPT (Search & GPT-4o), Google Gemini & AI Overviews, Anthropic Claude, Microsoft Copilot, and Perplexity AI.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you guarantee that ChatGPT will recommend my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No reputable agency can guarantee specific AI outputs because large language models are probabilistic and continuously updated. What we guarantee is rigorous, verified implementation of the technical and authoritative data structures that modern AI models require to identify, verify, and cite local businesses.',
          },
        },
        {
          '@type': 'Question',
          name: 'How soon can we expect to see measurable results?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most clients observe measurable improvements in AI prompt recommendations within 60 to 90 days following entity synchronization, Schema.org graph deployment, and structured data indexing across primary knowledge repositories.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you work with small businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, that is who we are built for. We work specifically with local and regional service businesses—HVAC contractors, plumbers, roofers, dentists, med spas, law firms, and independent professionals—who rely on local customers and want practical, high-impact growth without enterprise complexity.',
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchemas) }}
      />
      <HomePage />
    </>
  );
}
