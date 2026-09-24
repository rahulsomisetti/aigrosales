import React from 'react';
import Link from 'next/link';
import { ArrowRight, Wrench, Briefcase, HeartPulse, Utensils, Home, LucideIcon } from 'lucide-react';

interface CategoryItem {
  title: string;
  subservices: string;
  description: string;
  image: string;
  featuredSlug?: string;
  featuredLabel?: string;
  icon: LucideIcon;
}

const CATEGORIES: CategoryItem[] = [
  {
    title: 'Home Services',
    subservices: 'HVAC · Plumbing · Roofing · Electrical · Remodeling',
    description: 'When sudden storms hit or air conditioners fail in the Texas heat, homeowners turn to AI for immediate, vetted recommendations.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    featuredSlug: '/industries/hvac',
    featuredLabel: 'View HVAC Guide',
    icon: Wrench,
  },
  {
    title: 'Professional Services',
    subservices: 'Law · Accounting · Insurance · Consulting',
    description: 'Clients needing injury representation or business counsel ask AI to evaluate trial records and state bar standings.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    featuredSlug: '/industries/law-firms',
    featuredLabel: 'View Legal Guide',
    icon: Briefcase,
  },
  {
    title: 'Health & Wellness',
    subservices: 'Dentists · Med Spas · Chiropractors · Clinics',
    description: 'Patients look for bedside manner, credentialed medical directors, and specific insurance compatibility without tedious search clicks.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    featuredSlug: '/industries/dental',
    featuredLabel: 'View Dental Guide',
    icon: HeartPulse,
  },
  {
    title: 'Local & Lifestyle',
    subservices: 'Restaurants · Hospitality · Fitness · Beauty',
    description: 'Diners and locals ask AI where to take family for dinner or which boutique studio has top instructors and parking.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    featuredSlug: '/who-we-help',
    featuredLabel: 'View Lifestyle Case',
    icon: Utensils,
  },
  {
    title: 'Real Estate',
    subservices: 'Agents · Brokers · Property Services',
    description: 'Buyers relocating to Texas ask AI to identify trustworthy neighborhood specialists with verified local track records.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    featuredSlug: '/who-we-help',
    featuredLabel: 'View Real Estate',
    icon: Home,
  },
];

export const WhoWeHelpGrid: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-seen-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-seen-accent mb-3 block">
              Who We Help
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-seen-dark font-display tracking-tight leading-[1.15]">
              Built for businesses that depend on being found.
            </h2>
          </div>
          <Link
            href="/who-we-help"
            className="inline-flex items-center gap-2 text-sm font-semibold text-seen-dark hover:text-seen-accent transition-colors pb-1 border-b border-seen-dark hover:border-seen-accent self-start md:self-auto"
          >
            <span>Explore All Industry Playbooks</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            const isWide = idx === 0;
            return (
              <div
                key={cat.title}
                className={`group rounded-2xl border border-seen-border overflow-hidden bg-seen-offwhite shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Visual Image Banner */}
                <div className={`relative overflow-hidden ${isWide ? 'h-64 sm:h-72' : 'h-52'}`}>
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-seen-dark/90 via-seen-dark/40 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-seen-dark/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white text-xs font-medium">
                    <Icon className="w-3.5 h-3.5 text-seen-accent" />
                    <span>{cat.title}</span>
                  </div>

                  {/* Subservices on image bottom */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs text-white/90 font-medium tracking-wide">
                      {cat.subservices}
                    </p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    <h3 className="text-xl font-bold text-seen-dark font-display mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-seen-muted leading-relaxed mb-4">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-seen-border/60 flex items-center justify-between">
                    <span className="text-xs font-mono text-gray-500">
                      High AI Query Volume
                    </span>
                    {cat.featuredSlug && (
                      <Link
                        href={cat.featuredSlug}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-seen-dark hover:text-seen-accent transition-colors group-hover:translate-x-0.5"
                      >
                        <span>{cat.featuredLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
