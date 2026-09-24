import type { Metadata } from 'next';
import { WhoWeHelpPage } from '@/views/WhoWeHelpPage';

export const metadata: Metadata = {
  title: 'Who We Help | Local & Regional Industry Verticals',
  description:
    'Tailored AI marketing solutions for HVAC, plumbing, roofing, dental, law firms, and med spas. Helping high-trust local businesses get recommended by AI.',
  alternates: {
    canonical: 'https://aigrosales.com/who-we-help',
  },
  openGraph: {
    title: 'Who We Help | Local & Regional Industry Verticals | AIGroSales',
    description:
      'Discover how AIGroSales helps HVAC contractors, plumbers, roofers, dentists, attorneys, and aesthetic clinics get recommended by AI assistants.',
    url: 'https://aigrosales.com/who-we-help',
    type: 'website',
  },
};

export default function Page() {
  return <WhoWeHelpPage />;
}
