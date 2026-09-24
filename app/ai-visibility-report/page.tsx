import type { Metadata } from 'next';
import { ReportLandingPage } from '@/views/ReportLandingPage';

export const metadata: Metadata = {
  title: 'Request Your AI Visibility Report | 100+ Prompt Audit',
  description:
    'Benchmark your local business across ChatGPT, Claude, and Google AI Overviews. Request your custom AI Visibility Report with competitor share-of-voice analysis.',
  alternates: {
    canonical: 'https://aigrosales.com/ai-visibility-report',
  },
  openGraph: {
    title: 'Request Your AI Visibility Report | AIGroSales',
    description:
      'Get a complete multi-model AI audit of how your business ranks in conversational recommendations.',
    url: 'https://aigrosales.com/ai-visibility-report',
    type: 'website',
  },
};

export default function Page() {
  return <ReportLandingPage />;
}
