import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  BarChart3, 
  Cpu, 
  MapPin, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';
import { HeroAiVisual } from '../components/HeroAiVisual';
import { ServiceCards } from '../components/ServiceCards';
import { ProductDashboard } from '../components/ProductDashboard';
import { CompetitiveGap } from '../components/CompetitiveGap';
import { WhoWeHelpGrid } from '../components/WhoWeHelpGrid';
import { CaseStudySection } from '../components/CaseStudySection';
import { FaqAccordion } from '../components/FaqAccordion';
import { AiVisibilityCalculator } from '../components/AiVisibilityCalculator';

interface HomePageProps {
  onOpenReportModal: (options?: string | { 
    industry?: string; 
    tier?: string; 
    businessName?: string; 
    website?: string; 
    city?: string; 
  }, tier?: string) => void;
  onOpenSampleReport?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  onOpenReportModal,
  onOpenSampleReport 
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-seen-offwhite">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-gradient pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Col: Hero Copy */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-seen-dark text-white shadow-sm">
                <span className="w-2 h-2 rounded-full bg-seen-accent animate-pulse" />
                <span>AI-POWERED MARKETING FOR BUSINESSES READY TO GROW</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-seen-dark font-display leading-[1.08] tracking-tight">
                Get Seen by AI. <br className="hidden sm:inline" />
                <span className="text-seen-accent">Get Chosen</span> by Customers.
              </h1>

              {/* Supporting Copy */}
              <p className="text-lg sm:text-xl text-seen-muted max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                More people are asking AI where to eat, who to hire, what to buy and which businesses to trust. AIGroSales helps your business become easier for AI to discover, understand and recommend to customers ready to buy.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => onOpenReportModal()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-seen-accent hover:bg-seen-accentDark text-white font-semibold text-base transition-all shadow-sm hover:shadow-glow group cursor-pointer"
                >
                  <span>Get Your AI Visibility Report</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <Link
                  to="/how-it-works"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-seen-warmgray text-seen-dark font-semibold text-base transition-colors border border-seen-border"
                >
                  <span>See How It Works</span>
                </Link>
              </div>

              {/* Micro-Trust Signals */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-seen-muted font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-seen-accent" />
                  Texas & US Local Focus
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Free 100+ Prompt Audit
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-gray-500" />
                  Results in 1 Business Day
                </span>
              </div>

            </div>

            {/* Right Col: Sophisticated Interactive AI Visual */}
            <div className="lg:col-span-6">
              <HeroAiVisual />
            </div>

          </div>
        </div>
      </section>

      {/* 2. SECTION: THE BEHAVIOR HAS CHANGED */}
      <section className="py-20 lg:py-28 bg-white border-y border-seen-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-seen-accent mb-3 block">
              Shift in Search
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-seen-dark font-display tracking-tight leading-tight">
              Your customers are asking AI now.
            </h2>
            <p className="text-base sm:text-lg text-seen-muted mt-4 leading-relaxed">
              Search used to mean typing into Google and clicking a link. Increasingly, customers are asking AI to do the research for them.
            </p>

            {/* BrightLocal 2026 Stat Callout */}
            <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-seen-dark text-white border border-seen-borderDark shadow-card text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-2xl mx-auto">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-800">
                    BrightLocal 2026 U.S. Research
                  </span>
                  <span className="text-[11px] text-gray-400 font-mono">Surge from 6% to 45%</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-200 leading-snug">
                  <strong>45% of U.S. consumers now use AI tools for local business recommendations</strong> (up from 6% last year). ChatGPT is now among the leading sources for local discovery.
                </p>
              </div>
              <div className="text-right sm:border-l sm:border-seen-borderDark sm:pl-4 flex-shrink-0">
                <span className="text-2xl font-black text-seen-accent font-display block">45%</span>
                <span className="text-[10px] text-gray-400 uppercase font-semibold">Adoption Rate</span>
              </div>
            </div>
          </div>

          {/* 4 Cards with real Texas queries */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-seen-offwhite border border-seen-border hover:border-seen-accent/50 transition-all shadow-subtle flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-seen-accent flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <p className="text-base font-bold text-seen-dark font-display leading-snug">
                  "Find me a good dentist in Austin."
                </p>
                <p className="text-xs text-seen-muted">
                  AI reads patient sentiment, sedation options, and verified Delta Dental network status.
                </p>
              </div>
              <span className="text-[11px] font-mono text-gray-400 mt-6 pt-3 border-t border-seen-border/60 block">
                Healthcare Intent
              </span>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-seen-offwhite border border-seen-border hover:border-seen-accent/50 transition-all shadow-subtle flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-seen-accent flex items-center justify-center font-bold text-xs">
                  02
                </div>
                <p className="text-base font-bold text-seen-dark font-display leading-snug">
                  "What's the best HVAC company near Dallas?"
                </p>
                <p className="text-xs text-seen-muted">
                  AI evaluates emergency dispatch speed, TDLR licenses, and flat-rate repair reviews.
                </p>
              </div>
              <span className="text-[11px] font-mono text-gray-400 mt-6 pt-3 border-t border-seen-border/60 block">
                Urgent Home Repair
              </span>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-seen-offwhite border border-seen-border hover:border-seen-accent/50 transition-all shadow-subtle flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-seen-accent flex items-center justify-center font-bold text-xs">
                  03
                </div>
                <p className="text-base font-bold text-seen-dark font-display leading-snug">
                  "Where should I take my family for dinner in Houston?"
                </p>
                <p className="text-xs text-seen-muted">
                  AI filters patio seating, parking convenience, allergen handling, and child friendliness.
                </p>
              </div>
              <span className="text-[11px] font-mono text-gray-400 mt-6 pt-3 border-t border-seen-border/60 block">
                Hospitality & Dining
              </span>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-2xl bg-seen-offwhite border border-seen-border hover:border-seen-accent/50 transition-all shadow-subtle flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-seen-accent flex items-center justify-center font-bold text-xs">
                  04
                </div>
                <p className="text-base font-bold text-seen-dark font-display leading-snug">
                  "Who are the best personal injury lawyers in San Antonio?"
                </p>
                <p className="text-xs text-seen-muted">
                  AI synthesizes courtroom verdicts, board specializations, and corridor crash experience.
                </p>
              </div>
              <span className="text-[11px] font-mono text-gray-400 mt-6 pt-3 border-t border-seen-border/60 block">
                High-Value Professional
              </span>
            </div>

          </div>

          {/* Visual Transition: Traditional Search vs AI Discovery */}
          <div className="bg-seen-dark text-white rounded-2xl p-8 sm:p-12 border border-seen-borderDark">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              {/* Old Search */}
              <div className="p-6 rounded-xl bg-seen-surface border border-seen-borderDark/80 opacity-70">
                <span className="text-xs uppercase font-mono tracking-wider text-gray-400 block mb-2">
                  Yesterday: Traditional Search
                </span>
                <h4 className="text-lg font-bold text-gray-200 mb-3">
                  10 Blue Links & Cluttered Ads
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Users sifted through sponsored ads, spammy directories, and fragmented review pages. High friction, low context, and endless tabs.
                </p>
              </div>

              {/* New AI Discovery */}
              <div className="p-6 rounded-xl bg-seen-cardDark border-2 border-seen-accent relative shadow-glow">
                <span className="text-xs uppercase font-mono tracking-wider text-blue-300 block mb-2">
                  Today: AI Discovery
                </span>
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <span>Synthesized Answers & Direct Recommendations</span>
                  <Sparkles className="w-4 h-4 text-seen-accent" />
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  AI acts as an intelligent concierge: synthesizing dozens of web sources into 2-3 vetted businesses. If your signals aren’t machine-readable, you don’t exist in that answer.
                </p>
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-seen-borderDark text-center max-w-2xl mx-auto">
              <p className="text-base sm:text-lg font-semibold text-white">
                The question isn't whether AI is changing discovery. <br className="hidden sm:inline" />
                It's whether your business will be part of the answer.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SECTION: WHAT IS AI DISCOVERY? */}
      <section className="py-20 lg:py-28 bg-seen-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-seen-accent mb-3 block">
              Core Concept
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-seen-dark font-display tracking-tight leading-[1.15]">
              The new front door to your business.
            </h2>
            <p className="text-base sm:text-lg text-seen-muted mt-4 leading-relaxed">
              AI Discovery Marketing is the systematic optimization of your digital entity, licensing records, review sentiment, and local authority so AI models actively cite and recommend you.
            </p>
          </div>

          {/* 4-Step Horizontal Process */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            {/* Step 01 */}
            <div className="bg-white p-7 rounded-2xl border border-seen-border shadow-card relative">
              <span className="text-2xl font-black font-display text-seen-accent block mb-4">
                01
              </span>
              <h3 className="text-xl font-bold text-seen-dark font-display mb-2">
                Customer Asks
              </h3>
              <p className="text-sm text-seen-muted leading-relaxed">
                A potential customer asks an AI assistant what to buy, where to go, or who to hire for an immediate local need.
              </p>
            </div>

            {/* Step 02 */}
            <div className="bg-white p-7 rounded-2xl border border-seen-border shadow-card relative">
              <span className="text-2xl font-black font-display text-seen-accent block mb-4">
                02
              </span>
              <h3 className="text-xl font-bold text-seen-dark font-display mb-2">
                AI Researches
              </h3>
              <p className="text-sm text-seen-muted leading-relaxed">
                AI evaluates information from across the web: entity nodes, review sentiment, verified licensing registries, and third-party citations.
              </p>
            </div>

            {/* Step 03 */}
            <div className="bg-white p-7 rounded-2xl border border-seen-border shadow-card relative">
              <span className="text-2xl font-black font-display text-seen-accent block mb-4">
                03
              </span>
              <h3 className="text-xl font-bold text-seen-dark font-display mb-2">
                Businesses Get Recommended
              </h3>
              <p className="text-sm text-seen-muted leading-relaxed">
                A concise shortlist of 2 to 3 businesses is presented with clear, trustworthy rationales.
              </p>
            </div>

            {/* Step 04 */}
            <div className="bg-white p-7 rounded-2xl border border-seen-border shadow-card relative">
              <span className="text-2xl font-black font-display text-seen-accent block mb-4">
                04
              </span>
              <h3 className="text-xl font-bold text-seen-dark font-display mb-2">
                Customers Choose
              </h3>
              <p className="text-sm text-seen-muted leading-relaxed">
                The high-intent recommendation converts into a direct phone call, consultation booking, or new customer.
              </p>
            </div>

          </div>

          {/* Credibility & Anti-Hype Note */}
          <div className="p-5 rounded-2xl bg-white border border-seen-border/80 flex items-start gap-3.5 max-w-3xl mb-10">
            <ShieldCheck className="w-5 h-5 text-seen-accent flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              <strong className="text-seen-dark">AI Visibility + Digital Authority, Not "GEO Tricks":</strong> AIGroSales doesn't rely on short-lived gimmicks. Consumers discover businesses through AI, then verify them across Google, websites, and reviews. We build the comprehensive machine-readable entity data, verified licensing, and genuine local reputation that convinces both AI engines and real human buyers.
            </p>
          </div>

          {/* Answer-First Entity Definition & GEO Fact Sheet */}
          <article className="p-7 sm:p-8 rounded-3xl bg-white border border-seen-border shadow-card" aria-label="AI Quick Facts and Entity Definition">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-seen-accent mb-3">
              <Cpu className="w-4 h-4" />
              <span>Answer-First AI Knowledge Extraction & Entity Snapshot</span>
            </div>
            <h3 className="text-2xl font-black text-seen-dark font-display mb-4">
              Direct Answers for AI Engines & Evaluators
            </h3>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
              <div className="p-4 rounded-xl bg-seen-offwhite border border-seen-border/70 space-y-1.5">
                <dt className="font-bold text-seen-dark">What is AIGroSales?</dt>
                <dd className="text-xs sm:text-sm text-seen-muted leading-relaxed">
                  <strong className="text-seen-dark">AIGroSales is an AI discovery marketing and digital entity optimization agency</strong> based in Houston, Texas, serving local trades, medical practices, and professional firms across the United States.
                </dd>
              </div>
              <div className="p-4 rounded-xl bg-seen-offwhite border border-seen-border/70 space-y-1.5">
                <dt className="font-bold text-seen-dark">How do AI models decide which businesses to recommend?</dt>
                <dd className="text-xs sm:text-sm text-seen-muted leading-relaxed">
                  <strong className="text-seen-dark">AI models evaluate three core pillars:</strong> machine-readable Schema.org entity graphs, third-party corroboration across state licensing boards, and qualitative sentiment patterns in customer reviews.
                </dd>
              </div>
              <div className="p-4 rounded-xl bg-seen-offwhite border border-seen-border/70 space-y-1.5">
                <dt className="font-bold text-seen-dark">What are the primary deliverables in the $499 AI Visibility Audit?</dt>
                <dd className="text-xs sm:text-sm text-seen-muted leading-relaxed">
                  <strong className="text-seen-dark">The audit delivers a 100+ prompt benchmark</strong> across ChatGPT, Claude, Gemini, and Perplexity, competitor recommendation share-of-voice, schema error mapping, and a prioritized 90-day action plan.
                </dd>
              </div>
              <div className="p-4 rounded-xl bg-seen-offwhite border border-seen-border/70 space-y-1.5">
                <dt className="font-bold text-seen-dark">How does AIGroSales validate external business entities?</dt>
                <dd className="text-xs sm:text-sm text-seen-muted leading-relaxed">
                  <strong className="text-seen-dark">We anchor businesses to verified knowledge graph nodes</strong>, harmonize NAP across 60+ Tier-1 directories, validate state licenses (TDLR, TSBPE, Bar), and implement Schema.org JSON-LD microdata.
                </dd>
              </div>
            </dl>
          </article>

        </div>
      </section>

      {/* Interactive AI Visibility Score™ Calculator Section */}
      <section className="py-16 sm:py-24 bg-seen-offwhite border-b border-seen-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-seen-accent mb-2 block">
              Instant Self-Serve Check
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-seen-dark font-display tracking-tight">
              Calculate Your AI Visibility Score™
            </h2>
            <p className="text-sm sm:text-base text-seen-muted mt-3">
              Test your business in real time across ChatGPT, Claude, Gemini, and Perplexity before your competitors capture the recommendation slot.
            </p>
          </div>

          <AiVisibilityCalculator onOpenReportModal={onOpenReportModal} />
        </div>
      </section>

      {/* 4. SECTION: WHAT AIGROSALES DOES (6 Service Cards) */}
      <ServiceCards />

      {/* 5. SECTION: SHOW THE PRODUCT (Dashboard) */}
      <section className="py-20 lg:py-28 bg-seen-dark text-white border-y border-seen-borderDark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-seen-accent mb-3 block">
              Visibility Intelligence
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-[1.15]">
              Know where you stand.
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mt-4 leading-relaxed">
              Stop wondering if AI knows about your business. Get clear, quantified tracking of your AI visibility, recommendation rate, and competitor share of voice across every major model.
            </p>
          </div>

          {/* Interactive Live Mockup */}
          <ProductDashboard />

        </div>
      </section>

      {/* 6. SECTION: THE COMPETITIVE GAP */}
      <CompetitiveGap onOpenReportModal={onOpenReportModal} />

      {/* 7. SECTION: WHO WE HELP */}
      <WhoWeHelpGrid />

      {/* 8. SECTION: HOW IT WORKS */}
      <section className="py-20 lg:py-28 bg-seen-offwhite border-t border-seen-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-seen-accent mb-3 block">
              Our Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-seen-dark font-display tracking-tight leading-[1.15]">
              Simple for you. Sophisticated behind the scenes.
            </h2>
            <p className="text-base sm:text-lg text-seen-muted mt-4 leading-relaxed">
              You don’t need to learn prompt engineering or entity graphs. We handle the complex technical architecture while you focus on serving your customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl border border-seen-border shadow-card flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-xl bg-seen-dark text-white flex items-center justify-center font-bold text-sm mb-6">
                  1
                </span>
                <h3 className="text-xl font-bold text-seen-dark font-display mb-3">
                  We Find Your Blind Spots
                </h3>
                <p className="text-sm text-seen-muted leading-relaxed">
                  We test the questions your customers are asking AI across ChatGPT, Google AI, and Perplexity in your geographic market.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-seen-border/60 text-xs font-mono text-gray-500">
                Phase 1: Full Discovery Audit
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl border border-seen-border shadow-card flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-xl bg-seen-dark text-white flex items-center justify-center font-bold text-sm mb-6">
                  2
                </span>
                <h3 className="text-xl font-bold text-seen-dark font-display mb-3">
                  We Build Your Visibility
                </h3>
                <p className="text-sm text-seen-muted leading-relaxed">
                  We improve the information, authority, reputation and digital signals surrounding your business across machine-readable nodes.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-seen-border/60 text-xs font-mono text-gray-500">
                Phase 2: Signal Fortification
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl border border-seen-border shadow-card flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-xl bg-seen-dark text-white flex items-center justify-center font-bold text-sm mb-6">
                  3
                </span>
                <h3 className="text-xl font-bold text-seen-dark font-display mb-3">
                  We Track the Change
                </h3>
                <p className="text-sm text-seen-muted leading-relaxed">
                  You get ongoing visibility reporting, competitor surveillance, and proactive optimization recommendations as AI models evolve.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-seen-border/60 text-xs font-mono text-gray-500">
                Phase 3: Continuous Monitoring
              </div>
            </div>

          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onOpenReportModal()}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-seen-dark hover:bg-seen-accent text-white font-semibold text-sm transition-all shadow-sm cursor-pointer"
            >
              <span>Get Started with an Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 9. SECTION: WHY AIGROSALES */}
      <section id="why-aigrosales" className="py-20 lg:py-28 bg-white border-t border-seen-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-seen-accent mb-3 block">
              The AIGroSales Difference
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-seen-dark font-display tracking-tight leading-[1.15]">
              Marketing is changing. Your strategy should too.
            </h2>
            <p className="text-base sm:text-lg text-seen-muted mt-4 leading-relaxed">
              We are not a retrofitted 2012 SEO agency running backlink spam. We are built specifically for the generative search era.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Diff 1 */}
            <div className="p-8 rounded-2xl bg-seen-offwhite border border-seen-border">
              <div className="w-12 h-12 rounded-xl bg-seen-accent/10 border border-seen-accent/20 flex items-center justify-center text-seen-accent mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-seen-dark font-display mb-3">
                Built for AI Discovery
              </h3>
              <p className="text-sm sm:text-base text-seen-muted leading-relaxed">
                We're focused specifically on the way customers increasingly discover businesses through AI assistants and conversational models, not outdated 10-link algorithms.
              </p>
            </div>

            {/* Diff 2 */}
            <div className="p-8 rounded-2xl bg-seen-offwhite border border-seen-border">
              <div className="w-12 h-12 rounded-xl bg-seen-accent/10 border border-seen-accent/20 flex items-center justify-center text-seen-accent mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-seen-dark font-display mb-3">
                Built for Local Businesses
              </h3>
              <p className="text-sm sm:text-base text-seen-muted leading-relaxed">
                No enterprise jargon. No giant retainers. Just practical marketing focused on being found by paying customers in your local service area.
              </p>
            </div>

            {/* Diff 3 */}
            <div className="p-8 rounded-2xl bg-seen-offwhite border border-seen-border">
              <div className="w-12 h-12 rounded-xl bg-seen-accent/10 border border-seen-accent/20 flex items-center justify-center text-seen-accent mb-6">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-seen-dark font-display mb-3">
                Measurable
              </h3>
              <p className="text-sm sm:text-base text-seen-muted leading-relaxed">
                We track AI visibility, recommendations, competitors and opportunities with real prompt telemetry, not vague vanity metrics.
              </p>
            </div>

            {/* Diff 4 */}
            <div className="p-8 rounded-2xl bg-seen-offwhite border border-seen-border">
              <div className="w-12 h-12 rounded-xl bg-seen-accent/10 border border-seen-accent/20 flex items-center justify-center text-seen-accent mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-seen-dark font-display mb-3">
                Human Strategy. AI-Powered Execution.
              </h3>
              <p className="text-sm sm:text-base text-seen-muted leading-relaxed">
                AI helps us work faster. Experienced marketers decide what actually matters. You get dedicated human guidance tailored to your trade and market.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 10. SECTION: RESULTS / CASE STUDY PLACEHOLDER */}
      <CaseStudySection 
        onOpenReportModal={onOpenReportModal} 
        onOpenSampleReport={onOpenSampleReport} 
      />

      {/* 11. SECTION: PRICING TIERS PREVIEW */}
      <section className="py-20 lg:py-28 bg-seen-offwhite border-t border-seen-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-seen-accent mb-3 block">
                Transparent Pricing
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-seen-dark font-display tracking-tight leading-[1.15]">
                Retainers Built for Measurable Local AI Growth.
              </h2>
              <p className="text-base sm:text-lg text-seen-muted mt-4 leading-relaxed">
                No opaque contracts or lock-ins. Every package includes foundational schema structuring, continuous multi-engine prompt benchmarking, and verifiable recommendation tracking.
              </p>
            </div>
            <div>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-seen-dark hover:bg-seen-accent text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Full Comparison Matrix</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Diagnostic Entry Offer Hook */}
          <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-seen-dark text-white border-2 border-seen-accent shadow-premium flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800">
                100% Credited Toward Retainer
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-display text-white">
                Start with the $499 Comprehensive AI Visibility Audit
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-xl leading-relaxed">
                Test your business against 50–200 conversational queries across ChatGPT, Claude, and Google AI. When you partner with us for monthly management within 30 days, <span className="text-emerald-400 font-bold">your entire $499 audit fee is credited 100%</span> toward your retainers.
              </p>
            </div>
            <button
              onClick={() => onOpenReportModal(undefined, 'Comprehensive $499 AI Audit (Credited Toward Retainer)')}
              className="whitespace-nowrap px-7 py-3.5 rounded-xl bg-seen-accent hover:bg-seen-accentDark text-white font-bold text-xs uppercase tracking-wider transition-all shadow-glow cursor-pointer"
            >
              Order $499 Audit
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Starter Plan */}
            <div className="bg-white rounded-3xl border border-seen-border p-8 shadow-card flex flex-col justify-between hover:shadow-card-hover transition-all">
              <div>
                <span className="text-xs font-mono font-bold text-seen-accent uppercase block mb-2">Tier 01 · 90-Day Sprint</span>
                <h3 className="text-2xl font-bold text-seen-dark font-display mb-1">Starter Foundation</h3>
                <p className="text-xs text-seen-muted mb-6">
                  Ideal for single-location trades & solo practices establishing baseline AI presence.
                </p>

                <div className="p-4 rounded-xl bg-seen-offwhite border border-seen-border mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-seen-dark font-display">$499</span>
                    <span className="text-xs text-seen-muted">/ month</span>
                  </div>
                  <span className="text-[11px] text-emerald-700 font-semibold block mt-1">
                    $399/mo on annual billing
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-gray-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Quarterly 50+ prompt AI visibility benchmark</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Core Schema.org microdata (LocalBusiness & NAP)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Top 25 regional and Texas trade directories</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Monthly AI recommendation scorecard</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-seen-border">
                <button
                  onClick={() => onOpenReportModal(undefined, 'Starter Foundation')}
                  className="w-full py-3 rounded-xl bg-seen-dark hover:bg-seen-accent text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Select Starter
                </button>
              </div>
            </div>

            {/* Growth Plan - Most Popular */}
            <div className="bg-seen-cardDark rounded-3xl border-2 border-seen-accent p-8 shadow-premium flex flex-col justify-between text-white relative lg:-translate-y-2">
              <div className="absolute -top-3.5 right-8 bg-seen-accent text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-glow">
                Flagship Sweet Spot · Most Popular
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-blue-300 uppercase block mb-2">Tier 02 · Market Leader</span>
                <h3 className="text-2xl font-bold text-white font-display mb-1">Growth & Leader</h3>
                <p className="text-xs text-gray-300 mb-6">
                  For growing businesses & contractors in competitive Texas metros wanting category dominance.
                </p>

                <div className="p-4 rounded-xl bg-seen-surface border border-seen-borderDark mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white font-display">$999</span>
                    <span className="text-xs text-gray-400">/ month</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-semibold block mt-1">
                    $799/mo on annual billing (Save $2,400/yr)
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-gray-200">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Bi-weekly 150+ prompt multi-engine audits</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Full semantic knowledge graph schema (Services & Area)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>3 conversational Q&A landing pages built for voice & AI</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Review sentiment optimization & competitor radar</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Monthly 1-on-1 strategy call with senior marketer</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-seen-borderDark">
                <button
                  onClick={() => onOpenReportModal(undefined, 'Growth & Market Leader')}
                  className="w-full py-3 rounded-xl bg-seen-accent hover:bg-seen-accentDark text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-glow cursor-pointer"
                >
                  Choose Growth Plan
                </button>
              </div>
            </div>

            {/* Dominance Plan */}
            <div className="bg-white rounded-3xl border border-seen-border p-8 shadow-card flex flex-col justify-between hover:shadow-card-hover transition-all">
              <div>
                <span className="text-xs font-mono font-bold text-seen-accent uppercase block mb-2">Tier 03 · Multi-Location</span>
                <h3 className="text-2xl font-bold text-seen-dark font-display mb-1">Category Dominance</h3>
                <p className="text-xs text-seen-muted mb-6">
                  For high-ticket practices & multi-location regional leaders requiring full surveillance.
                </p>

                <div className="p-4 rounded-xl bg-seen-offwhite border border-seen-border mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-seen-dark font-display">$1,999</span>
                    <span className="text-xs text-seen-muted">/ month</span>
                  </div>
                  <span className="text-[11px] text-emerald-700 font-semibold block mt-1">
                    $1,699/mo on annual billing
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-gray-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Weekly continuous 300+ prompt surveillance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Up to 3 distinct locations or service zones</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Wikidata entity anchoring & active review defense</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Bi-weekly executive consultation & VIP hotline</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-seen-border">
                <button
                  onClick={() => onOpenReportModal(undefined, 'Category Dominance')}
                  className="w-full py-3 rounded-xl bg-seen-dark hover:bg-seen-accent text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Select Dominance
                </button>
              </div>
            </div>

          </div>

          <div className="mt-8 text-center">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-seen-accent hover:text-seen-accentDark transition-colors"
            >
              <span>Explore all services, deliverables, and full comparison matrix</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 12. SECTION: FAQ */}
      <FaqAccordion />

      {/* 12. FINAL CTA: POWERFUL DARK SECTION */}
      <section className="py-20 lg:py-28 bg-seen-dark text-white relative overflow-hidden border-t border-seen-borderDark">
        {/* Subtle grid and accent circle */}
        <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-radial-dark pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-seen-accent/20 text-blue-300 border border-seen-accent/30 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Texas & US Local Businesses
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white font-display tracking-tight leading-[1.1]">
            Ready to see how AI sees your business?
          </h2>

          <p className="text-base sm:text-xl text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
            Get a snapshot of how your business appears when potential customers ask AI for recommendations.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenReportModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-seen-accent hover:bg-seen-accentDark text-white font-bold text-base transition-all shadow-glow group cursor-pointer"
            >
              <span>Get Your AI Visibility Report</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <p className="text-xs sm:text-sm text-gray-400 mt-4 font-medium">
            No long sales pitch. Just your visibility, your competitors and your opportunities.
          </p>

        </div>
      </section>

    </div>
  );
};
