import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import { ModalProvider } from '@/context/ModalContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aigrosales.com'),
  title: {
    default: 'AIGroSales | AI-Powered Marketing for Businesses Ready to Grow',
    template: '%s | AIGroSales',
  },
  description:
    'AIGroSales helps small and growing local businesses become visible and recommended when customers use AI assistants and search. Turn AI discovery into real sales.',
  keywords: [
    'AIGroSales',
    'AI-powered marketing',
    'AI discovery marketing',
    'business growth marketing',
    'AI search optimization',
    'ChatGPT recommendations',
    'local business AI search',
    'Texas business growth',
    'Google AI search',
    'Generative Engine Optimization',
    'GEO for local business',
  ],
  authors: [{ name: 'AIGroSales' }],
  creator: 'AIGroSales',
  publisher: 'AIGroSales Marketing LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aigrosales.com',
    siteName: 'AIGroSales',
    title: 'AIGroSales | AI-Powered Marketing for Businesses Ready to Grow',
    description:
      'Get Seen by AI. Get Chosen by Customers. Turn AI discovery into real sales and new customers.',
    images: [
      {
        url: 'https://aigrosales.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AIGroSales - AI-Powered Discovery Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIGroSales | AI-Powered Marketing for Businesses Ready to Grow',
    description:
      'Get Seen by AI. Get Chosen by Customers. Turn AI discovery into real sales and new customers.',
    images: ['https://aigrosales.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://aigrosales.com',
  },
};

const globalSchemas = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://aigrosales.com/#organization',
      name: 'AIGroSales',
      legalName: 'AIGroSales Marketing LLC',
      alternateName: ['AIGroSales', 'AIGroSales AI Marketing', 'AIGroSales Texas'],
      url: 'https://aigrosales.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://aigrosales.com/favicon.svg',
        caption: 'AIGroSales Logo',
      },
      image: 'https://aigrosales.com/og-image.jpg',
      description:
        'AIGroSales provides AI-powered marketing and digital entity optimization for growing local and professional service businesses, ensuring they are discovered and recommended across ChatGPT, Claude, Google AI, and Perplexity.',
      slogan: 'Get Seen by AI. Get Chosen by Customers.',
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
      areaServed: [
        {
          '@type': 'Country',
          name: 'United States',
        },
        {
          '@type': 'State',
          name: 'Texas',
        },
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+1-346-869-9154',
          contactType: 'customer service',
          email: 'hello@aigrosales.com',
          availableLanguage: ['English'],
          areaServed: 'US',
        },
      ],
      sameAs: ['https://aigrosales.com', 'https://wa.me/13468699154'],
      isicV4: '7310',
      knowsAbout: [
        {
          '@type': 'Thing',
          name: 'Artificial Intelligence',
          sameAs: 'https://www.wikidata.org/wiki/Q11660',
        },
        {
          '@type': 'Thing',
          name: 'Search Engine Optimization',
          sameAs: 'https://www.wikidata.org/wiki/Q180711',
        },
        {
          '@type': 'Thing',
          name: 'Large Language Model',
          sameAs: 'https://www.wikidata.org/wiki/Q115305900',
        },
        {
          '@type': 'Thing',
          name: 'Generative Artificial Intelligence',
          sameAs: 'https://www.wikidata.org/wiki/Q117211832',
        },
        {
          '@type': 'Thing',
          name: 'Local Search',
          sameAs: 'https://www.wikidata.org/wiki/Q6664210',
        },
        {
          '@type': 'Thing',
          name: 'Knowledge Graph',
          sameAs: 'https://www.wikidata.org/wiki/Q33002955',
        },
        {
          '@type': 'Thing',
          name: 'Entity Disambiguation',
          sameAs: 'https://www.wikidata.org/wiki/Q5381832',
        },
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://aigrosales.com/#localbusiness',
      name: 'AIGroSales',
      parentOrganization: {
        '@id': 'https://aigrosales.com/#organization',
      },
      url: 'https://aigrosales.com',
      logo: 'https://aigrosales.com/favicon.svg',
      image: 'https://aigrosales.com/og-image.jpg',
      telephone: '+1-346-869-9154',
      email: 'hello@aigrosales.com',
      priceRange: '$499 - $1,999',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'El Dorado Blvd',
        addressLocality: 'Houston',
        addressRegion: 'TX',
        postalCode: '77059',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 29.5636,
        longitude: -95.1275,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00',
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://aigrosales.com/#website',
      url: 'https://aigrosales.com',
      name: 'AIGroSales',
      description: 'AI-Powered Marketing for Businesses Ready to Grow',
      publisher: {
        '@id': 'https://aigrosales.com/#organization',
      },
      inLanguage: 'en-US',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakarta.variable} ${inter.variable}`}>
      <head>
        <link rel="alternate" type="text/markdown" title="LLM Context" href="/llms.txt" />
        <link rel="alternate" type="application/json" title="Entity Validation" href="/entity-validation.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchemas) }}
        />
      </head>
      <body className="bg-seen-offwhite text-seen-text font-sans antialiased selection:bg-seen-accent selection:text-white">
        <ModalProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppWidget />
          </div>
        </ModalProvider>
      </body>
    </html>
  );
}
