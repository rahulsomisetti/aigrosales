import type { Metadata } from 'next';
import { PrivacyPage } from '@/views/PrivacyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'AIGroSales Privacy Policy and Data Handling Commitments.',
  alternates: {
    canonical: 'https://aigrosales.com/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <PrivacyPage />;
}
