import type { Metadata } from 'next';
import { PricingPage } from '@/views/PricingPage';

export const metadata: Metadata = {
  title: 'Transparent Pricing & Retainer Plans',
  description:
    'Clear, predictable monthly retainers for AI discovery marketing and GEO. Compare Starter, Growth, and Category Dominance packages with 100% audit credit guarantee.',
  alternates: {
    canonical: 'https://aigrosales.com/pricing',
  },
  openGraph: {
    title: 'Transparent Pricing & Retainer Plans | AIGroSales',
    description:
      'Predictable monthly retainers for AI discovery marketing with no hidden fees and no long-term lock-ins.',
    url: 'https://aigrosales.com/pricing',
    type: 'website',
  },
};

export default function Page() {
  return <PricingPage />;
}
