import type { Metadata } from 'next';
import { AboutPage } from '@/views/AboutPage';

export const metadata: Metadata = {
  title: 'About AIGroSales | AI Marketing Pioneers in Houston, Texas',
  description:
    'AIGroSales is a forward-thinking marketing firm based in Houston, Texas, specializing in Generative Engine Optimization and AI discovery for service businesses.',
  alternates: {
    canonical: 'https://aigrosales.com/about',
  },
  openGraph: {
    title: 'About AIGroSales | AI Marketing Pioneers in Houston, Texas',
    description:
      'Learn about AIGroSales, our mission, our Texas roots, and why we are pioneering Generative Engine Optimization for service-based businesses.',
    url: 'https://aigrosales.com/about',
    type: 'website',
  },
};

export default function Page() {
  return <AboutPage />;
}
