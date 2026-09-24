import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  ShieldCheck, 
  Sparkles,
  TrendingUp,
  Award
} from 'lucide-react';
import { OpenReportModalButton } from '@/components/ModalButtons';

interface HowItWorksPageProps {
  onOpenReportModal?: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onOpenReportModal }) => {
  const comparisonRows = [
    {
      factor: 'Primary Target',
      traditionalSeo: 'Web crawlers indexing HTML pages & keyword density',
      aiDiscovery: 'LLMs synthesizing entities, licensing, & qualitative sentiment'
    },
    {
      factor: 'How Results Appear',
      traditionalSeo: 'A list of 10 blue links with sponsored pay-per-click ads above',
      aiDiscovery: 'A single, synthesized direct recommendation with 2-3 vetted businesses'
    },
    {
      factor: 'Key Ranking Signals',
      traditionalSeo: 'Backlink volume, H1/H2 keywords, meta descriptions',
      aiDiscovery: 'Corroborated state licenses, structured entity graphs, third-party citation density'
    },
    {
      factor: 'Customer Behavior',
      traditionalSeo: 'Short robotic keywords ("plumber dallas")',
      aiDiscovery: 'Conversational dilemmas ("My pipe burst at 2am, who won’t price-gouge?")'
    },
    {
      factor: 'Tolerance for Low Quality',
      traditionalSeo: 'Spammy blog networks and doorway pages can temporarily rank',
      aiDiscovery: 'Safety filters flag unverified businesses and omit uncorroborated claims'
    },
    {
      factor: 'Customer Verification Path',
      traditionalSeo: 'User clicks 2-3 links directly from search engine result pages',
      aiDiscovery: 'AI synthesizes recommendation; user cross-verifies against website, licensing, & Google before calling'
    }
  ];

  return (
    <div className="bg-seen-offwhite">
      
      {/* Page Header */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-seen-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-seen-dark text-white mb-4">
              <Cpu className="w-3.5 h-3.5 text-seen-accent" />
              The AI Discovery Framework
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-seen-dark font-display tracking-tight leading-[1.1]">
              How AI Discovery Actually Works.
            </h1>
            <p className="text-lg sm:text-xl text-seen-muted mt-6 leading-relaxed">
              When someone asks an AI assistant for a local service, the model doesn't Google it and click around. It evaluates structured knowledge, corroborated records, and real sentiment. Here is the architecture behind it.
            </p>
          </div>
        </div>
      </section>

      {/* 2026 Research & Authority Philosophy Callout */}
      <section className="bg-seen-dark text-white py-12 sm:py-16 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-seen-accent text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4" />
                BrightLocal 2026 Consumer Study (Industry Projection)
              </div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl sm:text-5xl font-black font-display text-white">45%</span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 font-mono bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                  <TrendingUp className="w-3 h-3" />
                  from 6% in 2025
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                45% of U.S. consumers now rely on conversational AI tools (with ChatGPT leading) for local recommendations — a <span className="text-white font-semibold">7.5x annual surge</span> (industry research methodology reference).
              </p>
            </div>

            <div className="lg:col-span-7 space-y-3">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-seen-accent">
                <Award className="w-3.5 h-3.5" />
                Strategic Positioning · Digital Authority Over Hacks
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                AI Visibility + Real Digital Authority, Not “GEO Tricks”
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                AI engines ignore shallow keyword tactics and doorway pages. They evaluate verified state licenses, authoritative JSON-LD schema graphs, consistent multi-platform citations, and qualitative review sentiment.
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                Crucially: when AI recommends your business, consumers still verify through Google, your website, and customer reviews before reaching out. AIGroSales engineers the holistic authority that convinces both the AI and the human buyer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes: The 4 LLM Evaluation Stages */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-seen-accent mb-2 block">
              The Machine Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-seen-dark font-display tracking-tight">
              What happens in the 1.5 seconds after a customer asks AI:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-7 rounded-2xl border border-seen-border shadow-card relative">
              <span className="w-10 h-10 rounded-xl bg-seen-offwhite border border-seen-border flex items-center justify-center font-bold text-sm text-seen-dark mb-5">
                01
              </span>
              <h3 className="text-lg font-bold text-seen-dark font-display mb-2">
                Prompt Deconstruction
              </h3>
              <p className="text-xs sm:text-sm text-seen-muted leading-relaxed">
                The AI extracts intent parameters: geographic radius, urgency, requested certifications, budget signals, and specific service categories.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-seen-border shadow-card relative">
              <span className="w-10 h-10 rounded-xl bg-seen-offwhite border border-seen-border flex items-center justify-center font-bold text-sm text-seen-dark mb-5">
                02
              </span>
              <h3 className="text-lg font-bold text-seen-dark font-display mb-2">
                Entity Retrieval (RAG)
              </h3>
              <p className="text-xs sm:text-sm text-seen-muted leading-relaxed">
                The model queries its vector database and live web retrieval nodes to gather business entities matching the parameters in the local market.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-seen-border shadow-card relative">
              <span className="w-10 h-10 rounded-xl bg-seen-offwhite border border-seen-border flex items-center justify-center font-bold text-sm text-seen-dark mb-5">
                03
              </span>
              <h3 className="text-lg font-bold text-seen-dark font-display mb-2">
                Corroboration & Filtering
              </h3>
              <p className="text-xs sm:text-sm text-seen-muted leading-relaxed">
                The model verifies licenses, checks third-party directories, and analyzes review sentiment for authenticity and consistency.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-seen-border shadow-card relative">
              <span className="w-10 h-10 rounded-xl bg-seen-offwhite border border-seen-border flex items-center justify-center font-bold text-sm text-seen-dark mb-5">
                04
              </span>
              <h3 className="text-lg font-bold text-seen-dark font-display mb-2">
                Synthesis & Selection
              </h3>
              <p className="text-xs sm:text-sm text-seen-muted leading-relaxed">
                The highest-confidence businesses are presented to the user with concise, evidence-backed justifications.
              </p>
            </div>

          </div>

          <div className="mt-8 p-5 rounded-2xl bg-white border border-seen-border/80 flex items-start gap-3.5 max-w-3xl">
            <ShieldCheck className="w-5 h-5 text-seen-accent flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              <strong>The Takeaway:</strong> If your business has mismatched phone numbers, missing license schema, or unverified service areas, the AI’s confidence drops and it recommends a competitor with cleaner data.
            </p>
          </div>

        </div>
      </section>

      {/* Comparative Matrix: SEO vs AI Discovery */}
      <section className="py-20 bg-white border-y border-seen-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-seen-accent mb-2 block">
              Side-by-Side Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-seen-dark font-display tracking-tight">
              Traditional SEO vs. AI Discovery Marketing
            </h2>
            <p className="text-base text-seen-muted mt-3">
              Why traditional SEO tactics no longer guarantee visibility in conversational search.
            </p>
          </div>

          {/* Table */}
          <div className="bg-seen-offwhite rounded-2xl border border-seen-border overflow-hidden shadow-subtle">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-seen-border bg-white text-xs font-bold uppercase tracking-wider text-seen-dark">
                    <th className="p-4 sm:p-6 w-1/4">Factor</th>
                    <th className="p-4 sm:p-6 w-3/8 text-gray-500">Traditional SEO</th>
                    <th className="p-4 sm:p-6 w-3/8 text-seen-accent bg-blue-50/50">AIGroSales AI Marketing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-seen-border text-xs sm:text-sm">
                  {comparisonRows.map((row) => (
                    <tr key={row.factor} className="hover:bg-white/70 transition-colors">
                      <td className="p-4 sm:p-6 font-bold text-seen-dark align-top">
                        {row.factor}
                      </td>
                      <td className="p-4 sm:p-6 text-gray-600 align-top leading-relaxed">
                        {row.traditionalSeo}
                      </td>
                      <td className="p-4 sm:p-6 text-seen-dark font-medium bg-blue-50/30 align-top leading-relaxed">
                        {row.aiDiscovery}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* The 3-Phase AIGroSales Implementation Plan */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-seen-accent mb-2 block">
              Client Engagement
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-seen-dark font-display tracking-tight">
              Our 90-Day Implementation Roadmap
            </h2>
            <p className="text-base text-seen-muted mt-3">
              How we take your business from AI-invisible to regularly recommended.
            </p>
          </div>

          <div className="space-y-8">
            
            {/* Phase 1 */}
            <div className="bg-white rounded-2xl border border-seen-border p-8 sm:p-10 shadow-card">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-seen-accent block mb-1">
                    Days 1 – 14 · Phase 1
                  </span>
                  <h3 className="text-2xl font-bold text-seen-dark font-display">
                    Comprehensive Discovery Audit & Prompt Baseline
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-seen-offwhite border border-seen-border text-gray-600 self-start">
                  Baseline Deliverable
                </span>
              </div>
              <p className="text-sm sm:text-base text-seen-muted leading-relaxed mb-6">
                We test 100+ conversational prompts specific to your trade and city across Anthropic Claude, ChatGPT, Google AI, and Perplexity. We catalog your current visibility rate, map your competitors, and audit every node of your digital entity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-seen-border/60 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100+ Prompt Matrix</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Competitor Share-of-Voice</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Entity Discrepancy Map</span>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white rounded-2xl border border-seen-border p-8 sm:p-10 shadow-card">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-seen-accent block mb-1">
                    Days 15 – 60 · Phase 2
                  </span>
                  <h3 className="text-2xl font-bold text-seen-dark font-display">
                    Entity Structuring, Schema & Signal Fortification
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-seen-offwhite border border-seen-border text-gray-600 self-start">
                  Core Implementation
                </span>
              </div>
              <p className="text-sm sm:text-base text-seen-muted leading-relaxed mb-6">
                We deploy machine-readable Schema.org microdata, harmonize your business credentials with state licensing bodies (e.g. TDLR, TSBPE), fortify high-trust regional citations, and structure your website's conversational Q&A architecture.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-seen-border/60 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Custom JSON-LD Schemas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>State License Linking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>60+ Tier-1 Citations</span>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white rounded-2xl border border-seen-border p-8 sm:p-10 shadow-card">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-seen-accent block mb-1">
                    Days 61+ · Phase 3
                  </span>
                  <h3 className="text-2xl font-bold text-seen-dark font-display">
                    Ongoing Intelligence, Model Tracking & Defense
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-seen-offwhite border border-seen-border text-gray-600 self-start">
                  Continuous Retainer
                </span>
              </div>
              <p className="text-sm sm:text-base text-seen-muted leading-relaxed mb-6">
                AI search updates rapidly. We track your recommendation share each month, alert you to competitor attempts to outrank you on high-value queries, and continuously tune your digital presence as LLMs release new model versions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-seen-border/60 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Monthly Telemetry Reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Competitor Movement Radar</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Emerging Prompt Mapping</span>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <OpenReportModalButton
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-seen-dark hover:bg-seen-accent text-white font-bold text-sm transition-all shadow-sm cursor-pointer"
            >
              <span>Request Free Initial AI Scan</span>
              <ArrowRight className="w-4 h-4" />
            </OpenReportModalButton>
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-seen-offwhite text-seen-dark border border-seen-border font-bold text-sm transition-all shadow-sm"
            >
              <span>View $499 Deep Audit (100% Retainer Credit)</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};
