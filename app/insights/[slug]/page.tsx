import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { INSIGHTS } from '@/data/insights';
import { InsightDetailPage } from '@/views/InsightDetailPage';

export function generateStaticParams() {
  return INSIGHTS.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = INSIGHTS.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title} | AIGroSales Insights`,
    description: article.excerpt,
    alternates: {
      canonical: `https://aigrosales.com/insights/${slug}`,
    },
    openGraph: {
      title: `${article.title} | AIGroSales Insights`,
      description: article.excerpt,
      url: `https://aigrosales.com/insights/${slug}`,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      images: [
        {
          url: article.featuredImage,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.featuredImage],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = INSIGHTS.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://aigrosales.com/insights/${slug}#article`,
    headline: article.title,
    description: article.excerpt,
    image: article.featuredImage,
    datePublished: article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      '@id': 'https://aigrosales.com/#organization',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://aigrosales.com/insights/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <InsightDetailPage article={article} />
    </>
  );
}
