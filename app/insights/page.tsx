import type { Metadata } from 'next';
import { InsightsPage } from '@/views/InsightsPage';

export const metadata: Metadata = {
  title: 'AI Search Insights & Research',
  description:
    'Research, analyses, and strategic guides on Generative Engine Optimization, local AI recommendations, and the shift from traditional search engines to conversational AI.',
  alternates: {
    canonical: 'https://aigrosales.com/insights',
  },
  openGraph: {
    title: 'AI Search Insights & Research | AIGroSales',
    description:
      'Explore actionable insights and research reports on how AI assistants recommend local businesses and how to optimize your presence.',
    url: 'https://aigrosales.com/insights',
    type: 'website',
  },
};

export default function Page() {
  return <InsightsPage />;
}
