import type { Metadata } from 'next';
import { GoogleAdsLandingPage } from '@/views/GoogleAdsLandingPage';

export const metadata: Metadata = {
  title: 'AI Marketing & Discovery Audit | AIGroSales',
  description: 'Request a comprehensive AI Visibility diagnostic for your local business.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <GoogleAdsLandingPage />;
}
