import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Zap, 
  Building2, 
  TrendingUp, 
  Check, 
  Minus,
  Layers,
  PhoneCall,
  Award
} from 'lucide-react';
import { 
  PRICING_TIERS, 
  FEATURE_COMPARISON_MATRIX, 
  PRICING_FAQS,
  PAID_AUDIT_OFFER
} from '../data/pricingData';

interface PricingPageProps {
  onOpenReportModal: (industry?: string, tier?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenReportModal }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [expandedTierServices, setExpandedTierServices] = useState<Record<string, boolean>>({
    growth: true
  });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleTierServices = (tierId: string) => {
    setExpandedTierServices(prev => ({
      ...prev,
      [tierId]: !prev[tierId]
    }));
  };

  const toggleFaq = (idx: number) => {
    setActiveFaq(prev => (prev === idx ? null : idx));
  };

  return (
    <div className="bg-seen-offwhite min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-seen-border bg-white relative overflow-hidden">
        {/* Subtle decorative background gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 bg-radial-gradient pointer-events-none opacity-60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-seen-dark text-white mb-4 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-seen-accent" />
              Transparent & ROI-Driven Retainers
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-seen-dark font-display tracking-tight leading-[1.1]">
              Predictable Investment. <br />
              <span className="text-seen-accent">Measurable AI Growth.</span>
            </h1>

            <p className="text-base sm:text-xl text-seen-muted mt-6 leading-relaxed">
              No nebulous enterprise retainers or long-term handcuffs. Pick the plan calibrated for your service area, eliminate entity blind spots, and start winning recommendations across ChatGPT, Claude, Perplexity, and Google AI.
            </p>

            {/* Billing Switcher Toggle */}
            <div className="mt-10 inline-flex items-center p-1.5 rounded-full bg-seen-warmgray border border-seen-border shadow-inner">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-seen-dark text-white shadow-sm'
                    : 'text-seen-muted hover:text-seen-dark'
                }`}
              >
                Monthly Retainer
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('annual')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  billingCycle === 'annual'
                    ? 'bg-seen-accent text-white shadow-sm'
                    : 'text-seen-muted hover:text-seen-dark'
                }`}
              >
                <span>Annual Commitment</span>
                <span className="text-[10px] uppercase font-bold tracking-wide px-2 py-0.5 rounded-full bg-emerald-500 text-white animate-pulse">
                  Save 20%
                </span>
              </button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-6 text-xs text-seen-muted font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                No cancellation fees
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-seen-accent" />
                Confidential data handling
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-500" />
                Texas-focused market strategy
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PRICING CARDS SECTION */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* STEP 1: THE PRODUCTIZED ENTRY PRODUCT */}
          <div className="mb-16 bg-gradient-to-r from-seen-dark via-seen-surface to-seen-dark text-white rounded-3xl p-8 sm:p-12 border-2 border-seen-accent shadow-premium relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-seen-accent text-white text-xs font-bold uppercase tracking-wider px-5 py-1.5 rounded-bl-2xl shadow-md">
              {PAID_AUDIT_OFFER.badge}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-300 block">
                  Step 1 · Diagnostic Entry Product
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display tracking-tight text-white">
                  {PAID_AUDIT_OFFER.name}
                </h2>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
                  {PAID_AUDIT_OFFER.tagline}
                </p>

                {/* Golden Credit-Back Guarantee Callout */}
                <div className="p-4 rounded-xl bg-seen-cardDark border border-seen-accent/40 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                    <strong className="text-white">100% Retainer Credit Guarantee:</strong> When you upgrade to any monthly retainer within 30 days of receiving your audit, <span className="text-emerald-400 font-bold">your entire $499 investment is credited 100%</span> toward your management invoices.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {PAID_AUDIT_OFFER.deliverables.slice(0, 6).map((del, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 bg-seen-cardDark rounded-2xl border border-seen-borderDark p-6 sm:p-8 text-center flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-1">
                    One-Time Diagnostic
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-white font-display">
                    ${PAID_AUDIT_OFFER.price}
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold block mt-1">
                    100% credited toward management
                  </span>
                  <span className="text-[11px] text-gray-400 block mt-0.5 font-mono">
                    Turnaround: {PAID_AUDIT_OFFER.turnaround}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenReportModal(undefined, PAID_AUDIT_OFFER.name)}
                  className="w-full py-3.5 px-6 rounded-xl bg-seen-accent hover:bg-seen-accentDark text-white font-bold text-xs uppercase tracking-wider transition-all shadow-glow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{PAID_AUDIT_OFFER.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-gray-400">
                  Or start with our 25-query free baseline below
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-seen-accent mb-2 block">
              Step 2 · Ongoing Monthly Management
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-seen-dark font-display tracking-tight">
              Sustained AI Visibility & Competitor Displacement
            </h2>
            <p className="text-sm text-seen-muted mt-2">
              Month-to-month retainers after an initial 90-day foundation sprint. Cancel anytime with 30 days notice.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PRICING_TIERS.map((tier) => {
              const isPopular = tier.popular;
              const price = billingCycle === 'annual' ? tier.priceAnnual : tier.priceMonthly;
              const isServicesOpen = expandedTierServices[tier.id];

              return (
                <div
                  key={tier.id}
                  className={`rounded-3xl transition-all duration-300 flex flex-col justify-between relative ${
                    isPopular
                      ? 'bg-seen-cardDark text-white border-2 border-seen-accent shadow-premium lg:-translate-y-2'
                      : 'bg-white text-seen-dark border border-seen-border shadow-card hover:shadow-card-hover'
                  }`}
                >
                  {/* Popular Ribbon */}
                  {tier.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="bg-seen-accent text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-glow">
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  {/* Card Content Top */}
                  <div className="p-8 sm:p-10 flex-1">
                    
                    {/* Header */}
                    <div className="mb-6">
                      <span className={`text-xs font-mono font-bold uppercase tracking-wider block mb-2 ${
                        isPopular ? 'text-blue-300' : 'text-seen-accent'
                      }`}>
                        {tier.turnaroundOrCommitment}
                      </span>
                      <h3 className={`text-2xl sm:text-3xl font-black font-display tracking-tight ${
                        isPopular ? 'text-white' : 'text-seen-dark'
                      }`}>
                        {tier.name}
                      </h3>
                      <p className={`text-xs mt-2 leading-relaxed min-h-[36px] ${
                        isPopular ? 'text-gray-300' : 'text-seen-muted'
                      }`}>
                        {tier.tagline}
                      </p>
                    </div>

                    {/* Price Block */}
                    <div className={`p-5 rounded-2xl mb-6 border ${
                      isPopular 
                        ? 'bg-seen-surface border-seen-borderDark' 
                        : 'bg-seen-offwhite border-seen-border'
                    }`}>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl sm:text-5xl font-black font-display">
                          ${price}
                        </span>
                        <span className={`text-xs font-semibold ${
                          isPopular ? 'text-gray-400' : 'text-seen-muted'
                        }`}>
                          / month
                        </span>
                      </div>
                      
                      <div className="mt-1 text-[11px] font-medium flex items-center justify-between">
                        <span className={isPopular ? 'text-emerald-400' : 'text-emerald-700 font-semibold'}>
                          {billingCycle === 'annual' ? 'Billed annually (Save $1,200-$3,600/yr)' : 'Billed monthly'}
                        </span>
                        <span className={isPopular ? 'text-gray-400' : 'text-gray-500'}>
                          {tier.setupNote}
                        </span>
                      </div>
                    </div>

                    {/* Ideal For */}
                    <div className="mb-6">
                      <span className={`text-[11px] font-bold uppercase tracking-wider block mb-1 ${
                        isPopular ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        Ideal Business Profile
                      </span>
                      <p className={`text-xs leading-relaxed ${
                        isPopular ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {tier.idealFor}
                      </p>
                    </div>

                    {/* Highlights List */}
                    <div className="space-y-3 pt-4 border-t border-seen-border/60">
                      <span className={`text-xs font-bold uppercase tracking-wider block mb-3 ${
                        isPopular ? 'text-gray-300' : 'text-seen-dark'
                      }`}>
                        Key Capabilities Included
                      </span>
                      {tier.highlights.map((hl) => (
                        <div key={hl} className="flex items-start gap-2.5 text-xs">
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            isPopular ? 'text-emerald-400' : 'text-emerald-600'
                          }`} />
                          <span className={isPopular ? 'text-gray-200' : 'text-gray-700 font-medium'}>
                            {hl}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Expandable Detailed Services Offered Accordion */}
                    <div className="mt-6 pt-4 border-t border-seen-border/40">
                      <button
                        type="button"
                        onClick={() => toggleTierServices(tier.id)}
                        className={`w-full flex items-center justify-between text-xs font-semibold py-2 px-3 rounded-lg transition-colors cursor-pointer ${
                          isPopular 
                            ? 'bg-seen-surface hover:bg-seen-dark text-blue-300' 
                            : 'bg-seen-warmgray hover:bg-gray-200 text-seen-dark'
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5" />
                          <span>{isServicesOpen ? 'Hide Service Deliverables' : 'View All Deliverables'}</span>
                        </span>
                        {isServicesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      {isServicesOpen && (
                        <div className={`mt-3 space-y-4 p-4 rounded-xl text-xs animate-fadeIn ${
                          isPopular ? 'bg-seen-surface/90 border border-seen-borderDark' : 'bg-seen-offwhite border border-seen-border'
                        }`}>
                          {tier.servicesOffered.map((cat) => (
                            <div key={cat.category} className="space-y-1.5">
                              <span className={`font-bold uppercase tracking-wider text-[10px] block ${
                                isPopular ? 'text-blue-300' : 'text-seen-accent'
                              }`}>
                                {cat.category}
                              </span>
                              <ul className="space-y-1 pl-1">
                                {cat.items.map((item, i) => (
                                  <li key={i} className={`flex items-start gap-1.5 ${
                                    isPopular ? 'text-gray-300' : 'text-gray-600'
                                  }`}>
                                    <span className="text-gray-400">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Card Bottom CTA */}
                  <div className={`p-8 sm:p-10 pt-4 border-t ${
                    isPopular ? 'border-seen-borderDark' : 'border-seen-border'
                  }`}>
                    <button
                      type="button"
                      onClick={() => onOpenReportModal(undefined, tier.name)}
                      className={`w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                        isPopular
                          ? 'bg-seen-accent hover:bg-seen-accentDark text-white shadow-glow hover:shadow-lg'
                          : 'bg-seen-dark hover:bg-seen-accent text-white'
                      }`}
                    >
                      <span>{tier.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    <p className={`text-[11px] text-center mt-3 ${
                      isPopular ? 'text-gray-400' : 'text-seen-muted'
                    }`}>
                      Includes comprehensive AI baseline audit
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

          {/* 3. ZERO-RISK ALTERNATIVE & ENTERPRISE BANNERS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            
            {/* Free Audit Card */}
            <div className="p-8 rounded-2xl bg-white border border-seen-border shadow-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <Sparkles className="w-3.5 h-3.5" />
                  Free Entry Point
                </div>
                <h3 className="text-xl font-bold text-seen-dark font-display">
                  Confidential AI Visibility Audit
                </h3>
                <p className="text-xs sm:text-sm text-seen-muted leading-relaxed max-w-md">
                  Not ready for a monthly retainer? Get a free 25+ prompt snapshot across Claude, ChatGPT, and Google AI Overviews in 1 business day.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onOpenReportModal(undefined, 'Free AI Visibility Audit')}
                className="whitespace-nowrap px-6 py-3 rounded-xl bg-white hover:bg-seen-warmgray text-seen-dark border-2 border-seen-dark font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Request Free Audit
              </button>
            </div>

            {/* Enterprise & Multi-Location Card */}
            <div className="p-8 rounded-2xl bg-seen-dark text-white border border-seen-borderDark shadow-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-300 bg-blue-950/80 px-2.5 py-1 rounded-full border border-blue-800">
                  <Building2 className="w-3.5 h-3.5 text-seen-accent" />
                  Multi-Location & Franchise
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  Custom Multi-Market Enterprise
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-md">
                  Operating across 4+ Texas cities or nationwide? We provide custom prompt surveillance, dedicated engineering teams, and institutional schemas.
                </p>
              </div>
              <Link
                to="/contact"
                className="whitespace-nowrap px-6 py-3 rounded-xl bg-seen-accent hover:bg-seen-accentDark text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
              >
                <span>Talk to Strategy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 4. COMPREHENSIVE SERVICES COMPARISON MATRIX */}
      <section className="py-20 lg:py-28 bg-white border-y border-seen-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-seen-accent mb-3 block">
              Feature-by-Feature Breakdown
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-seen-dark font-display tracking-tight">
              Services Offered Against Each Tier
            </h2>
            <p className="text-base text-seen-muted mt-4 leading-relaxed">
              Compare exact deliverables across our six core AI marketing disciplines to see what is included in each package.
            </p>
          </div>

          {/* Responsive Comparison Table */}
          <div className="overflow-x-auto rounded-2xl border border-seen-border shadow-card">
            <table className="w-full text-left border-collapse min-w-[760px]">
              
              {/* Table Header */}
              <thead>
                <tr className="bg-seen-dark text-white border-b border-seen-borderDark">
                  <th className="p-5 text-sm font-bold w-2/5">
                    Marketing Discipline & Deliverable
                  </th>
                  <th className="p-5 text-center text-xs font-semibold text-gray-300 w-1/5">
                    <span className="block font-bold text-white text-sm">Starter Foundation</span>
                    <span>$499 / mo</span>
                  </th>
                  <th className="p-5 text-center text-xs font-semibold text-blue-200 bg-seen-accent/20 border-x border-seen-accent/40 w-1/5">
                    <span className="inline-block bg-seen-accent text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full mb-1">
                      Flagship Sweet Spot
                    </span>
                    <span className="block font-bold text-white text-sm">Growth & Leader</span>
                    <span>$999 / mo</span>
                  </th>
                  <th className="p-5 text-center text-xs font-semibold text-gray-300 w-1/5">
                    <span className="block font-bold text-white text-sm">Category Dominance</span>
                    <span>$1,999 / mo</span>
                  </th>
                </tr>
              </thead>

              {/* Table Body Groups */}
              <tbody>
                {FEATURE_COMPARISON_MATRIX.map((group) => (
                  <React.Fragment key={group.category}>
                    {/* Category Header Row */}
                    <tr className="bg-seen-warmgray/80 border-y border-seen-border">
                      <td colSpan={4} className="py-3 px-5 text-xs font-black uppercase tracking-wider text-seen-dark font-display">
                        {group.category}
                      </td>
                    </tr>

                    {/* Features under this category */}
                    {group.features.map((feat, featIdx) => (
                      <tr 
                        key={feat.name}
                        className={`border-b border-seen-border/60 hover:bg-blue-50/30 transition-colors ${
                          featIdx % 2 === 0 ? 'bg-white' : 'bg-seen-offwhite/50'
                        }`}
                      >
                        {/* Feature Name & Tooltip */}
                        <td className="p-4 text-xs sm:text-sm font-medium text-gray-800">
                          <div className="font-semibold text-seen-dark">{feat.name}</div>
                          {feat.tooltip && (
                            <div className="text-[11px] text-seen-muted mt-0.5 font-normal">
                              {feat.tooltip}
                            </div>
                          )}
                        </td>

                        {/* Starter Tier Value */}
                        <td className="p-4 text-center text-xs">
                          {typeof feat.starter === 'boolean' ? (
                            feat.starter ? (
                              <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                            ) : (
                              <Minus className="w-4 h-4 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-medium text-gray-700">{feat.starter}</span>
                          )}
                        </td>

                        {/* Growth Tier Value (Highlighted Column) */}
                        <td className="p-4 text-center text-xs bg-blue-50/40 border-x border-seen-accent/20">
                          {typeof feat.growth === 'boolean' ? (
                            feat.growth ? (
                              <Check className="w-5 h-5 text-seen-accent mx-auto font-bold" />
                            ) : (
                              <Minus className="w-4 h-4 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-bold text-seen-dark">{feat.growth}</span>
                          )}
                        </td>

                        {/* Dominance Tier Value */}
                        <td className="p-4 text-center text-xs">
                          {typeof feat.dominance === 'boolean' ? (
                            feat.dominance ? (
                              <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                            ) : (
                              <Minus className="w-4 h-4 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-semibold text-seen-dark">{feat.dominance}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>

              {/* Table Footer with CTAs */}
              <tfoot>
                <tr className="bg-seen-warmgray/70 border-t border-seen-border">
                  <td className="p-5 font-bold text-xs text-seen-muted">
                    Ready to begin?
                  </td>
                  <td className="p-5 text-center">
                    <button
                      type="button"
                      onClick={() => onOpenReportModal(undefined, 'Starter Foundation')}
                      className="px-4 py-2 rounded-lg bg-seen-dark hover:bg-seen-accent text-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      Select Starter
                    </button>
                  </td>
                  <td className="p-5 text-center bg-blue-50/40 border-x border-seen-accent/20">
                    <button
                      type="button"
                      onClick={() => onOpenReportModal(undefined, 'Growth & Market Leader')}
                      className="px-4 py-2 rounded-lg bg-seen-accent hover:bg-seen-accentDark text-white text-xs font-bold transition-colors shadow-glow cursor-pointer"
                    >
                      Select Growth
                    </button>
                  </td>
                  <td className="p-5 text-center">
                    <button
                      type="button"
                      onClick={() => onOpenReportModal(undefined, 'Category Dominance')}
                      className="px-4 py-2 rounded-lg bg-seen-dark hover:bg-seen-accent text-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      Select Dominance
                    </button>
                  </td>
                </tr>
              </tfoot>

            </table>
          </div>

        </div>
      </section>

      {/* 5. ROI & ECONOMIC JUSTIFICATION SECTION */}
      <section className="py-20 lg:py-28 bg-seen-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-seen-dark text-white rounded-3xl p-8 sm:p-14 border border-seen-borderDark relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-seen-accent/20 text-blue-300 border border-seen-accent/30">
                  <TrendingUp className="w-3.5 h-3.5" />
                  The ROI of AI Search
                </span>
                
                <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight leading-tight">
                  One or two closed jobs pay for the entire monthly retainer.
                </h2>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Unlike traditional display ads or generic social media clicks where 98% of users bounce, customers asking conversational AI assistants (e.g. <em>"Who is a licensed plumber near me that won't overcharge for emergency water heater repair?"</em>) have immediate commercial intent.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-seen-surface border border-seen-borderDark">
                    <span className="text-2xl font-black text-emerald-400 font-display block mb-1">
                      $2,400+
                    </span>
                    <span className="text-xs text-gray-400">Avg. HVAC/Plumbing Job Value</span>
                  </div>
                  <div className="p-4 rounded-xl bg-seen-surface border border-seen-borderDark">
                    <span className="text-2xl font-black text-emerald-400 font-display block mb-1">
                      $4,500+
                    </span>
                    <span className="text-xs text-gray-400">Avg. Dental/MedSpa Value</span>
                  </div>
                  <div className="p-4 rounded-xl bg-seen-surface border border-seen-borderDark">
                    <span className="text-2xl font-black text-emerald-400 font-display block mb-1">
                      $8,000+
                    </span>
                    <span className="text-xs text-gray-400">Avg. Roofing/Legal Retainer</span>
                  </div>
                </div>

              </div>

              <div className="lg:col-span-5 bg-seen-surface/80 rounded-2xl border border-seen-borderDark p-6 sm:p-8 space-y-4">
                <h4 className="text-base font-bold text-white font-display">
                  Why First-Movers Win Big in AI Search
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Traditional Google search has millions of pages competing for 10 spots. AI recommendation engines only present <strong>2 to 3 businesses</strong> in total.
                </p>
                <p className="text-xs text-gray-300 leading-relaxed">
                  The businesses that anchor their entity graphs and establish authoritative third-party citations today will build an insurmountable moat as more consumers migrate from typing queries to conversational voice and AI assistants.
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenReportModal(undefined, 'Growth & Market Leader')}
                    className="w-full py-3 rounded-xl bg-seen-accent hover:bg-seen-accentDark text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-glow"
                  >
                    Lock In Your Market Area
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. PRICING FAQ ACCORDION */}
      <section className="py-20 lg:py-28 bg-white border-t border-seen-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-seen-accent mb-2 block">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-seen-dark font-display tracking-tight">
              Frequently Asked Questions About Pricing
            </h2>
            <p className="text-sm text-seen-muted mt-3">
              Clear answers about our contracts, initial sprints, onboarding, and guarantees.
            </p>
          </div>

          <div className="space-y-4">
            {PRICING_FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl border border-seen-border overflow-hidden bg-seen-offwhite transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-seen-dark text-base hover:text-seen-accent transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="p-1 rounded-full bg-white border border-seen-border text-seen-dark flex-shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-gray-700 leading-relaxed border-t border-seen-border/60 pt-4 bg-white animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. FINAL CTA BANNER */}
      <section className="py-20 lg:py-28 bg-seen-dark text-white border-t border-seen-borderDark relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-seen-accent/20 text-blue-300 border border-seen-accent/30 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            No Risk Baseline
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight leading-tight">
            Start with the free AI audit. <br />
            Decide on a tier once you see the numbers.
          </h2>

          <p className="text-base text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
            See exactly how ChatGPT, Claude, Perplexity, and Google AI Overviews answer questions about your trade in your local service area.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenReportModal(undefined, 'Free AI Visibility Audit')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-seen-accent hover:bg-seen-accentDark text-white font-bold text-base transition-all shadow-glow flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Your Free AI Visibility Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-seen-surface hover:bg-seen-borderDark text-white font-bold text-base transition-all border border-seen-borderDark flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Schedule Strategy Call</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};
