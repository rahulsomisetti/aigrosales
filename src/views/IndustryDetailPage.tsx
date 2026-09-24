import React from 'react';
import Link from 'next/link';
import { INDUSTRIES, IndustryData } from '../data/industries';
import { 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronLeft,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Award
} from 'lucide-react';
import { AiVisibilityCalculator } from '../components/AiVisibilityCalculator';
import { PAID_AUDIT_OFFER } from '../data/pricingData';
import { OpenReportModalButton } from '../components/ModalButtons';

interface IndustryDetailPageProps {
  industry?: IndustryData;
  slug?: string;
  onOpenReportModal?: (options?: string | { 
    industry?: string; 
    tier?: string; 
    businessName?: string; 
    website?: string; 
    city?: string; 
  }) => void;
}

export const IndustryDetailPage: React.FC<IndustryDetailPageProps> = ({ industry: propIndustry, slug, onOpenReportModal }) => {
  const industry = propIndustry || (slug ? INDUSTRIES[slug] : null);

  if (!industry) {
    return null;
  }

  return (
    <div className="bg-seen-offwhite min-h-screen">
      
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          href="/who-we-help"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-seen-muted hover:text-seen-dark transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to All Industries</span>
        </Link>
      </div>

      {/* Hero Header */}
      <section className="pt-8 pb-16 lg:pt-12 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-seen-dark text-white">
                <Sparkles className="w-3.5 h-3.5 text-seen-accent" />
                <span>AI Discovery for {industry.name}</span>
              </div>

              {/* Required Header: "When customers ask AI for [service], does your business show up?" */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-seen-dark font-display tracking-tight leading-[1.15]">
                When customers ask AI for {industry.name.toLowerCase()}, does your business show up?
              </h1>

              <p className="text-base sm:text-lg text-seen-muted leading-relaxed">
                {industry.tagline}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <OpenReportModalButton
                  options={{ industry: industry.name }}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-seen-accent hover:bg-seen-accentDark text-white font-semibold text-sm transition-all shadow-sm hover:shadow-glow cursor-pointer"
                >
                  <span>Get Your {industry.name} AI Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </OpenReportModalButton>
                <OpenReportModalButton
                  options={{ industry: industry.name, tier: PAID_AUDIT_OFFER.name }}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-seen-offwhite text-seen-dark font-semibold text-sm transition-all border border-seen-border shadow-sm cursor-pointer"
                >
                  <span>Order $499 Deep Audit ($0 Risk)</span>
                </OpenReportModalButton>
              </div>

              {/* High-Level Industry Metrics */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-seen-border">
                {industry.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-xl sm:text-2xl font-black text-seen-dark font-display">
                      {m.value}
                    </div>
                    <span className="text-[11px] text-seen-muted block mt-0.5">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-card border border-seen-border h-80 sm:h-96">
                <img
                  src={industry.heroImage}
                  alt={industry.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-seen-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-mono uppercase text-blue-300 block">Verified Sector</span>
                  <span className="text-lg font-bold font-display">{industry.category} · High-Trust Vertical</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BrightLocal 2026 Research Banner for this Vertical */}
      <section className="bg-seen-dark text-white py-8 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center font-black text-lg text-seen-accent flex-shrink-0">
                45%
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-seen-accent mb-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  BrightLocal 2026 U.S. Consumer Study
                </span>
                <p className="text-xs sm:text-sm text-gray-200">
                  45% of consumers now use conversational AI tools (up from 6% in 2025) for local recommendations — especially for urgent, high-ticket services like {industry.name.toLowerCase()}.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 font-mono bg-emerald-950/50 px-3 py-1.5 rounded-lg border border-emerald-800/40 self-start md:self-auto flex-shrink-0">
              <Award className="w-4 h-4" />
              <span>Real Authority & Corroborated Records, Not GEO Tricks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Interactive AI Visibility Calculator */}
      <section className="py-14 bg-white border-b border-seen-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-seen-accent mb-1 block">
              Live Interactive Diagnostic
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-seen-dark font-display">
              Test Your {industry.name} AI Visibility Score™
            </h2>
            <p className="text-xs sm:text-sm text-seen-muted mt-2">
              Enter your business name and city below to run a simulated check across ChatGPT, Claude, Gemini, and Perplexity in real time.
            </p>
          </div>

          <AiVisibilityCalculator 
            defaultIndustry={industry.name}
            onOpenReportModal={onOpenReportModal}
          />
        </div>
      </section>

      {/* 1. Common AI Questions */}
      <section className="py-16 bg-seen-offwhite border-b border-seen-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-seen-accent mb-2 block">
              Prompt Intelligence
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-seen-dark font-display">
              Questions Your Customers Are Asking AI Right Now
            </h2>
            <p className="text-sm sm:text-base text-seen-muted mt-2">
              Consumers bypass search ads and ask conversational questions. Does AI recommend your company for these queries?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industry.commonAiPrompts.map((prompt, i) => (
              <div
                key={prompt}
                className="p-5 rounded-2xl bg-white border border-seen-border flex items-start gap-3.5 shadow-subtle"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-seen-accent flex items-center justify-center font-mono text-xs font-bold flex-shrink-0 mt-0.5">
                  Q{i + 1}
                </div>
                <div>
                  <p className="text-sm font-bold text-seen-dark font-display">
                    "{prompt}"
                  </p>
                  <span className="text-[11px] font-mono text-gray-500 mt-1.5 block">
                    High commercial intent · Evaluated on ChatGPT & Perplexity
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Visibility Challenges */}
      <section className="py-16 bg-white border-b border-seen-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">
              The Pitfalls
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-seen-dark font-display">
              Why Most {industry.name} Businesses Are Omitted by AI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.visibilityChallenges.map((challenge, i) => (
              <div
                key={challenge.title}
                className="bg-seen-offwhite p-6 sm:p-7 rounded-2xl border border-seen-border shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-xs mb-4">
                    !
                  </div>
                  <h3 className="text-lg font-bold text-seen-dark font-display mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-seen-muted leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-gray-400 mt-6 pt-3 border-t border-seen-border/60 block">
                  Hurdle #{i + 1}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. What AIGroSales Does for this Industry */}
      <section className="py-16 bg-seen-offwhite border-b border-seen-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-seen-accent mb-2 block">
              The Solution
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-seen-dark font-display">
              What AIGroSales Does for {industry.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.whatSeenDoes.map((item, i) => (
              <div
                key={item.title}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-seen-border flex flex-col justify-between shadow-subtle"
              >
                <div>
                  <div className="w-8 h-8 rounded-xl bg-seen-dark text-white flex items-center justify-center font-bold text-xs mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-seen-dark font-display mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-seen-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-seen-border/60 flex items-center gap-1.5 text-[11px] font-semibold text-seen-accent">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>AIGroSales Standard Practice</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Sample Dashboard for this Industry */}
      <section className="py-16 bg-seen-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-seen-accent mb-2 block">
              Telemetry Sample
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Sample {industry.name} AI Visibility Telemetry
            </h2>
            <p className="text-xs text-gray-400">
              Internal benchmark telemetry modeling a representative Texas metropolitan provider.
            </p>
          </div>

          <div className="bg-seen-cardDark rounded-2xl border border-seen-borderDark p-6 sm:p-8 shadow-card">
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-seen-surface p-4 rounded-xl border border-seen-borderDark">
                <span className="text-xs font-mono text-gray-400 block mb-1">Baseline Visibility</span>
                <div className="text-3xl font-extrabold font-display text-white">{industry.sampleDashboard.visibilityScore}%</div>
                <span className="text-[10px] text-gray-400 mt-1 block">Of commercial prompts</span>
              </div>
              <div className="bg-seen-surface p-4 rounded-xl border border-seen-borderDark">
                <span className="text-xs font-mono text-gray-400 block mb-1">Recommendation Rate</span>
                <div className="text-3xl font-extrabold font-display text-emerald-400">{industry.sampleDashboard.recommendationRate}%</div>
                <span className="text-[10px] text-gray-400 mt-1 block">Top-3 choice placement</span>
              </div>
              <div className="bg-seen-surface p-4 rounded-xl border border-seen-borderDark">
                <span className="text-xs font-mono text-gray-400 block mb-1">Questions Tracked</span>
                <div className="text-3xl font-extrabold font-display text-blue-400">{industry.sampleDashboard.questionsTracked}</div>
                <span className="text-[10px] text-gray-400 mt-1 block">Local intent variations</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-seen-surface p-5 rounded-xl border border-seen-borderDark">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  Discovered Prompts
                </h4>
                <ul className="space-y-2 text-xs text-gray-300">
                  {industry.sampleDashboard.topDiscovered.map((q) => (
                    <li key={q} className="flex items-center gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-seen-surface p-5 rounded-xl border border-seen-borderDark">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  Immediate Opportunities (Missed)
                </h4>
                <ul className="space-y-2 text-xs text-gray-300">
                  {industry.sampleDashboard.topMissed.map((q) => (
                    <li key={q} className="flex items-center gap-2">
                      <span className="text-amber-400">•</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. $499 Entry Offer + Industry-Specific CTA */}
      <section className="py-20 bg-seen-offwhite text-center border-t border-seen-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl border border-seen-border p-8 sm:p-12 shadow-card mb-10 text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  <Sparkles className="w-3.5 h-3.5" />
                  {industry.name} Diagnostic Entry Offer
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-seen-dark font-display">
                  Get the $499 Comprehensive {industry.name} Audit
                </h3>
                <p className="text-xs sm:text-sm text-seen-muted leading-relaxed">
                  We analyze 50–200 conversational queries specific to {industry.name.toLowerCase()} in your city, map competitor share-of-voice, verify licensing schemas, and outline a 90-day action plan.
                </p>
                <p className="text-xs text-emerald-700 font-bold flex items-center gap-1.5 pt-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% of the $499 is credited back toward your first 3 months of monthly management.</span>
                </p>
              </div>

              <div className="flex flex-col gap-3 flex-shrink-0">
                <OpenReportModalButton
                  options={{ industry: industry.name, tier: PAID_AUDIT_OFFER.name }}
                  className="px-7 py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-seen-dark font-black text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer text-center flex items-center justify-center gap-2"
                >
                  <span>Order $499 Audit ($0 Risk)</span>
                  <ArrowRight className="w-4 h-4" />
                </OpenReportModalButton>
                <OpenReportModalButton
                  options={{ industry: industry.name, tier: 'Free Initial Visibility Scan' }}
                  className="px-7 py-3 rounded-full bg-seen-offwhite hover:bg-seen-dark hover:text-white text-seen-dark font-bold text-xs uppercase tracking-wider transition-all border border-seen-border cursor-pointer text-center"
                >
                  <span>Request Free Scan</span>
                </OpenReportModalButton>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
