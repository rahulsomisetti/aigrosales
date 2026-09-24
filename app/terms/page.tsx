import type { Metadata } from 'next';
import { TermsPage } from '@/views/TermsPage';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'AIGroSales Terms of Service and Client Agreement.',
  alternates: {
    canonical: 'https://aigrosales.com/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <TermsPage />;
}
