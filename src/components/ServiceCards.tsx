import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
}

// Bespoke minimal line-based SVG icons with consistent 1.75px stroke
const AuditIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
    <path d="M11 8v6" />
    <path d="M8 11h6" />
  </svg>
);

const EntityIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="7" height="7" x="3" y="3" rx="1.5" />
    <rect width="7" height="7" x="14" y="3" rx="1.5" />
    <rect width="7" height="7" x="14" y="14" rx="1.5" />
    <rect width="7" height="7" x="3" y="14" rx="1.5" />
    <path d="M10 6.5h4" />
    <path d="M10 17.5h4" />
    <path d="M6.5 10v4" />
    <path d="M17.5 10v4" />
  </svg>
);

const AuthorityIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const WebsiteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="14" x="2" y="3" rx="2" />
    <line x1="8" x2="16" y1="21" y2="21" />
    <line x1="12" x2="12" y1="17" y2="21" />
    <path d="m7 10 2 2-2 2" />
    <line x1="12" x2="15" y1="14" y2="14" />
  </svg>
);

const ReputationIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    <path d="m9 11 2 2 4-4" />
  </svg>
);

const MonitoringIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
    <circle cx="19" cy="9" r="1.5" />
  </svg>
);

const SERVICES: ServiceCardItem[] = [
  {
    id: 'audit',
    title: 'AI Visibility Audit',
    description: 'Find out how often your business appears when customers ask AI relevant questions.',
    tag: 'Baseline Analysis',
    icon: AuditIcon,
  },
  {
    id: 'entity',
    title: 'Digital Entity Optimization',
    description: 'Make sure your business information is accurate, consistent and understandable across the web.',
    tag: 'Knowledge Graphs',
    icon: EntityIcon,
  },
  {
    id: 'authority',
    title: 'Local Authority',
    description: 'Strengthen the credible third-party signals that help establish your business.',
    tag: 'Trust Signals',
    icon: AuthorityIcon,
  },
  {
    id: 'website',
    title: 'Website Optimization',
    description: 'Structure your website so customers — and AI systems — can clearly understand what you offer.',
    tag: 'Machine-Readable Architecture',
    icon: WebsiteIcon,
  },
  {
    id: 'reputation',
    title: 'Reputation & Reviews',
    description: 'Build a stronger, authentic customer reputation across relevant platforms.',
    tag: 'Sentiment Analysis',
    icon: ReputationIcon,
  },
  {
    id: 'monitoring',
    title: 'AI Visibility Monitoring',
    description: 'Track how your business appears in AI-powered discovery over time.',
    tag: 'Ongoing Intelligence',
    icon: MonitoringIcon,
  },
];

export const ServiceCards: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-seen-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-seen-accent mb-3 block">
            What AIGroSales Does
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-seen-dark font-display tracking-tight leading-[1.15]">
            We make your business easier for AI to find, understand and recommend.
          </h2>
          <p className="text-base sm:text-lg text-seen-muted mt-4 leading-relaxed">
            AI engines evaluate businesses through structured signals, corroborated licenses, and verified third-party sentiment. We handle every layer of your AI discoverability.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="group relative bg-white rounded-2xl border border-seen-border p-7 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top line with bespoke icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-seen-offwhite border border-seen-border flex items-center justify-center text-seen-dark group-hover:bg-seen-dark group-hover:text-white group-hover:border-seen-dark transition-all duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-medium text-seen-muted px-2.5 py-1 rounded-full bg-seen-offwhite border border-seen-border">
                      {srv.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-seen-dark font-display mb-3 group-hover:text-seen-accent transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-seen-muted leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-seen-border/60 flex items-center justify-between text-xs font-semibold text-seen-dark group-hover:text-seen-accent transition-colors">
                  <Link to={`/services#${srv.id}`} className="inline-flex items-center gap-1.5 focus:outline-none">
                    <span>Explore Service Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
