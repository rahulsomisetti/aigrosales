import type { Metadata } from 'next';
import { ContactPage } from '@/views/ContactPage';

export const metadata: Metadata = {
  title: 'Contact Our Strategy Team | Houston, Texas',
  description:
    'Get in touch with AIGroSales. Speak with our AI discovery specialists in Houston, TX about your local business visibility and GEO strategy.',
  alternates: {
    canonical: 'https://aigrosales.com/contact',
  },
  openGraph: {
    title: 'Contact Our Strategy Team | AIGroSales',
    description:
      'Speak with our AI marketing strategy team in Houston, Texas about auditing your business visibility across ChatGPT and Google AI.',
    url: 'https://aigrosales.com/contact',
    type: 'website',
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://aigrosales.com/contact#webpage',
  url: 'https://aigrosales.com/contact',
  name: 'Contact AIGroSales',
  description: 'Contact the AIGroSales strategy and AI marketing team in Houston, Texas.',
  mainEntity: {
    '@type': 'ProfessionalService',
    name: 'AIGroSales',
    telephone: '+1-346-869-9154',
    email: 'hello@aigrosales.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'El Dorado Blvd',
      addressLocality: 'Houston',
      addressRegion: 'TX',
      postalCode: '77059',
      addressCountry: 'US',
    },
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactPage />
    </>
  );
}
