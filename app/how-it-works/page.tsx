import type { Metadata } from 'next';
import { HowItWorksPage } from '@/views/HowItWorksPage';

export const metadata: Metadata = {
  title: 'How It Works | Generative Engine Optimization Methodology',
  description:
    'Discover how AIGroSales optimizes local businesses for ChatGPT, Claude, and Google AI Overviews using our 4-phase Generative Engine Optimization methodology.',
  alternates: {
    canonical: 'https://aigrosales.com/how-it-works',
  },
  openGraph: {
    title: 'How It Works | Generative Engine Optimization Methodology | AIGroSales',
    description:
      'Learn how we transform local business visibility across AI search engines through entity modeling, schema graph anchoring, and citation engineering.',
    url: 'https://aigrosales.com/how-it-works',
    type: 'website',
  },
};

export default function Page() {
  return <HowItWorksPage />;
}
