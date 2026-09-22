import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../data/servicesData';
import { ArrowRight, CheckCircle2, Layers } from 'lucide-react';

interface ServicesPageProps {
  onOpenReportModal: (industry?: string, tier?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenReportModal }) => {
  return (
    <div className="bg-seen-offwhite">
      
      {/* Header */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-seen-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-seen-dark text-white mb-4">
              <Layers className="w-3.5 h-3.5 text-seen-accent" />
              Comprehensive Capabilities
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-seen-dark font-display tracking-tight leading-[1.1]">
              Services Built for the AI Discovery Era.
            </h1>
            <p className="text-lg sm:text-xl text-seen-muted mt-6 leading-relaxed">
              We make your business easier for AI systems to discover, verify, and recommend. Explore our six core marketing disciplines designed specifically for local and regional American businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Deep-Dive */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-16">
            {SERVICES_DATA.map((srv, idx) => (
              <div
                key={srv.id}
                id={srv.id}
                className="bg-white rounded-3xl border border-seen-border p-8 sm:p-12 shadow-card scroll-mt-28"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                  
                  {/* Left Col: Info & Deliverables */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl sm:text-4xl font-black text-seen-accent font-display">
                        {srv.number}
                      </span>
                      <span className="h-6 w-px bg-seen-border inline-block" />
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-seen-muted">
                        Discipline #{idx + 1}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-seen-dark font-display">
                        {srv.title}
                      </h2>
                      <p className="text-base font-semibold text-seen-accent mt-1">
                        {srv.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-seen-muted leading-relaxed">
                      {srv.description}
                    </p>

                    <div className="pt-4 border-t border-seen-border">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-seen-dark mb-4">
                        Key Deliverables & Specifications
                      </h4>
                      <ul className="space-y-3">
                        {srv.deliverables.map((del) => (
                          <li key={del} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Col: Why It Matters & Outcome */}
                  <div className="lg:col-span-5 bg-seen-offwhite rounded-2xl border border-seen-border p-6 sm:p-8 space-y-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
                        Why It Matters
                      </span>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed bg-white p-4 rounded-xl border border-seen-border/70">
                        {srv.whyItMatters}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
                        Expected Business Outcome
                      </span>
                      <div className="bg-seen-dark text-white p-4 rounded-xl border border-seen-borderDark text-xs sm:text-sm font-medium leading-relaxed">
                        <span className="text-emerald-400 font-bold block mb-1">Target Result:</span>
                        {srv.outcome}
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => onOpenReportModal()}
                        className="w-full py-3 rounded-xl bg-seen-dark hover:bg-seen-accent text-white font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Include in Your Audit Report
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Engagement Models Banner */}
      <section className="py-20 bg-seen-dark text-white border-t border-seen-borderDark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-seen-accent mb-2 block">
                Engagement & Pricing Tiers
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
                Transparent Retainers. Real Outcomes.
              </h2>
              <p className="text-base text-gray-400 mt-3">
                No nebulous commitments. Pick the right tier for your market density, eliminate entity gaps, and dominate local AI recommendations.
              </p>
            </div>
            <div>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-gray-100 text-seen-dark font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Full Comparison Matrix</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Diagnostic Entry Offer Hook */}
          <div className="mb-10 p-6 rounded-2xl bg-seen-surface border border-seen-borderDark flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800">
                100% Credited Toward Retainer
              </span>
              <h3 className="text-lg font-bold text-white">
                Start with the $499 Comprehensive AI Visibility Audit
              </h3>
              <p className="text-xs text-gray-300 max-w-xl">
                Get an exhaustive 50–200 prompt diagnostic across ChatGPT, Claude & Google AI. When you partner with us for monthly management within 30 days, your entire $499 fee is credited 100% toward your retainers.
              </p>
            </div>
            <button
              onClick={() => onOpenReportModal(undefined, 'Comprehensive $499 AI Audit (Credited Toward Retainer)')}
              className="whitespace-nowrap px-6 py-3 rounded-xl bg-seen-accent hover:bg-seen-accentDark text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-glow cursor-pointer"
            >
              Order $499 Audit
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Tier 01: Starter */}
            <div className="bg-seen-surface rounded-2xl border border-seen-borderDark p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-gray-400 uppercase block mb-2">Starter Foundation</span>
                <h3 className="text-xl font-bold text-white mb-2">Essential Presence</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  Core Schema.org microdata, NAP harmonization, top 25 regional citations, and quarterly AI prompt diagnostics.
                </p>
                <div className="text-3xl font-black text-white font-display mb-1">$499 <span className="text-xs font-normal text-gray-400">/ mo</span></div>
                <span className="text-xs text-emerald-400 font-mono">No lock-in after 90-day sprint</span>
              </div>
              <div className="pt-6 mt-6 border-t border-seen-borderDark space-y-2">
                <button
                  onClick={() => onOpenReportModal(undefined, 'Starter Foundation')}
                  className="w-full py-2.5 rounded-lg bg-white hover:bg-gray-100 text-seen-dark font-bold text-xs transition-colors cursor-pointer"
                >
                  Select Starter
                </button>
                <Link
                  to="/pricing"
                  className="w-full block text-center py-1.5 text-gray-400 hover:text-white text-[11px] font-medium"
                >
                  View full deliverables →
                </Link>
              </div>
            </div>

            {/* Tier 02: Growth */}
            <div className="bg-seen-cardDark rounded-2xl border-2 border-seen-accent p-8 flex flex-col justify-between relative shadow-glow">
              <div className="absolute -top-3 right-6 bg-seen-accent text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Flagship Sweet Spot
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-blue-300 uppercase block mb-2">Growth & Leader</span>
                <h3 className="text-xl font-bold text-white mb-2">Market Dominance</h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  Bi-weekly 150+ prompt audits, full semantic knowledge graphs, 3 AI conversational pages, review sentiment prompts, and competitor radar.
                </p>
                <div className="text-3xl font-black text-white font-display mb-1">$999 <span className="text-xs font-normal text-gray-300">/ mo</span></div>
                <span className="text-xs text-blue-300 font-mono">Month-to-month after 90 days</span>
              </div>
              <div className="pt-6 mt-6 border-t border-seen-borderDark space-y-2">
                <button
                  onClick={() => onOpenReportModal(undefined, 'Growth & Market Leader')}
                  className="w-full py-2.5 rounded-lg bg-seen-accent hover:bg-seen-accentDark text-white font-bold text-xs transition-colors cursor-pointer shadow-sm"
                >
                  Choose Growth Plan
                </button>
                <Link
                  to="/pricing"
                  className="w-full block text-center py-1.5 text-blue-300 hover:text-white text-[11px] font-medium"
                >
                  View full deliverables →
                </Link>
              </div>
            </div>

            {/* Tier 03: Category Dominance */}
            <div className="bg-seen-surface rounded-2xl border border-seen-borderDark p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-gray-400 uppercase block mb-2">Category Dominance</span>
                <h3 className="text-xl font-bold text-white mb-2">Multi-Zone & Enterprise</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  Weekly 300+ prompt surveillance, up to 3 locations, Wikidata anchoring, active review defense, and dedicated executive strategist.
                </p>
                <div className="text-3xl font-black text-white font-display mb-1">$1,999 <span className="text-xs font-normal text-gray-400">/ mo</span></div>
                <span className="text-xs text-emerald-400 font-mono">Dedicated Senior Strategist</span>
              </div>
              <div className="pt-6 mt-6 border-t border-seen-borderDark space-y-2">
                <button
                  onClick={() => onOpenReportModal(undefined, 'Category Dominance')}
                  className="w-full py-2.5 rounded-lg bg-white hover:bg-gray-100 text-seen-dark font-bold text-xs transition-colors cursor-pointer"
                >
                  Select Dominance
                </button>
                <Link
                  to="/pricing"
                  className="w-full block text-center py-1.5 text-gray-400 hover:text-white text-[11px] font-medium"
                >
                  View full deliverables →
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
