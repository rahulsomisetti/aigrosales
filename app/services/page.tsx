import type { Metadata } from 'next';
import { ServicesPage } from '@/views/ServicesPage';

export const metadata: Metadata = {
  title: 'AI Marketing Services & Generative Engine Optimization',
  description:
    'Explore our 6 core AI discovery marketing services: AI audits, entity optimization, citation engineering, crawlability, sentiment management, and continuous monitoring.',
  alternates: {
    canonical: 'https://aigrosales.com/services',
  },
  openGraph: {
    title: 'AI Marketing Services & Generative Engine Optimization | AIGroSales',
    description:
      'Explore our core AI marketing services designed to get local and regional businesses recommended by ChatGPT, Google AI, Claude, and Perplexity.',
    url: 'https://aigrosales.com/services',
    type: 'website',
  },
};

export default function Page() {
  return <ServicesPage />;
}
