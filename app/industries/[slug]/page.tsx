import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { INDUSTRIES } from '@/data/industries';
import { IndustryDetailPage } from '@/views/IndustryDetailPage';

export function generateStaticParams() {
  return Object.keys(INDUSTRIES).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES[slug];

  if (!industry) {
    return {
      title: 'Industry Not Found',
    };
  }

  return {
    title: `AI Marketing for ${industry.name}`,
    description: industry.headline,
    alternates: {
      canonical: `https://aigrosales.com/industries/${slug}`,
    },
    openGraph: {
      title: `AI Marketing for ${industry.name} | AIGroSales`,
      description: industry.headline,
      url: `https://aigrosales.com/industries/${slug}`,
      images: [
        {
          url: industry.heroImage,
          alt: `AI Marketing for ${industry.name}`,
        },
      ],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = INDUSTRIES[slug];

  if (!industry) {
    notFound();
  }

  const industrySchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://aigrosales.com/industries/${slug}#service`,
    name: `AI Discovery Marketing for ${industry.name}`,
    description: industry.headline,
    provider: {
      '@id': 'https://aigrosales.com/#organization',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    serviceType: `${industry.category} AI Marketing`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industrySchema) }}
      />
      <IndustryDetailPage industry={industry} />
    </>
  );
}
