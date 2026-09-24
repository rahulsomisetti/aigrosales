import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    '*',
    'Googlebot',
    'Google-Extended',
    'GoogleOther',
    'Bingbot',
    'GPTBot',
    'ChatGPT-User',
    'OAI-SearchBot',
    'ClaudeBot',
    'Claude-Web',
    'anthropic-ai',
    'PerplexityBot',
    'Applebot',
    'Applebot-Extended',
    'Meta-ExternalAgent',
    'cohere-ai',
    'MistralBot',
    'Amazonbot',
  ];

  return {
    rules: aiBots.map((bot) => ({
      userAgent: bot,
      allow: '/',
      disallow: ['/lp', '/google-ads', '/get-seen'],
    })),
    sitemap: 'https://aigrosales.com/sitemap.xml',
    host: 'https://aigrosales.com',
  };
}
