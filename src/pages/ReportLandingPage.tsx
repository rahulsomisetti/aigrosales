import { 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  FileText
} from 'lucide-react';
import { AiVisibilityCalculator } from '../components/AiVisibilityCalculator';
import { PAID_AUDIT_OFFER } from '../data/pricingData';

interface ReportLandingPageProps {
  onOpenReportModal: (options?: { 
    industry?: string; 
    tier?: string; 
    businessName?: string; 
    website?: string; 
    city?: string; 
  }) => void;
  onOpenSampleReport?: () => void;
}

export const ReportLandingPage: React.FC<ReportLandingPageProps> = ({ 
  onOpenReportModal,
  onOpenSampleReport 
}) => {
  const reportFeatures = [
    {
      title: '100+ Local Conversational Prompts',
      desc: 'We test real prompts customers type into ChatGPT, Google AI, and Perplexity for your specific service and geography.'
    },
    {
      title: 'Competitor Share-of-Recommendation',
      desc: 'See which local rivals are capturing the top recommendation spot and why the AI model chose them over you.'
    },
    {
      title: 'Digital Entity & Schema Audit',
      desc: 'Discover data conflicts, missing state license anchors, and Schema.org errors preventing AI crawlers from indexing you.'
    },
    {
      title: 'Prioritized 90-Day Action Roadmap',
      desc: 'Concrete, plain-English steps to strengthen your local authority and position your business for AI recommendation.'
    }
  ];

  return (
    <div className="bg-seen-offwhite min-h-screen">
      
      {/* Hero Section with Interactive Calculator */}
      <section className="pt-12 pb-20 lg:pt-16 lg:pb-28 bg-white border-b border-seen-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-radial-gradient pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-seen-dark text-white">
              <Sparkles className="w-3.5 h-3.5 text-seen-accent" />
              <span>Complimentary Strategic Benchmark & Audit</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-seen-dark font-display tracking-tight leading-[1.1]">
              AI Visibility Report & Audit.
            </h1>

            <p className="text-base sm:text-lg text-seen-muted max-w-2xl mx-auto leading-relaxed">
              Find out how often your business is recommended when local customers ask AI assistants who to hire in your market. Test your brand below in real time.
            </p>
          </div>

          {/* Interactive AI Visibility Score™ Calculator Component */}
          <div className="max-w-4xl mx-auto">
            <AiVisibilityCalculator onOpenReportModal={onOpenReportModal} />
          </div>

        </div>
      </section>

      {/* What's Inside the In-Depth Report */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-seen-accent mb-2 block">
                Deliverables
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-seen-dark font-display tracking-tight">
                What You Receive in Your Full Audit
              </h2>
              <p className="text-base text-seen-muted mt-3">
                We compile real telemetry and multi-engine audits, not automated superficial vanity metrics.
              </p>
            </div>

            {onOpenSampleReport && (
              <button
                onClick={onOpenSampleReport}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-seen-dark hover:bg-seen-accent text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer whitespace-nowrap self-start sm:self-auto"
              >
                <FileText className="w-4 h-4 text-seen-accent" />
                <span>Preview 12-Page Sample Report</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reportFeatures.map((feat, i) => (
              <div
                key={feat.title}
                className="bg-white p-8 rounded-3xl border border-seen-border shadow-card flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-seen-offwhite border border-seen-border flex items-center justify-center font-bold text-sm text-seen-accent flex-shrink-0 mt-0.5">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-seen-dark font-display mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-seen-muted leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sample Report Excerpt Visual with $499 Entry Callout */}
          <div className="mt-16 bg-seen-dark text-white rounded-3xl p-8 sm:p-12 border border-seen-borderDark">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-amber-400 font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Productized Entry Diagnostic
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  Need a Comprehensive Multi-Engine Audit Right Away?
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed max-w-2xl">
                  Order our <strong>{PAID_AUDIT_OFFER.name}</strong> for <strong>${PAID_AUDIT_OFFER.price}</strong>. We evaluate 50–200 conversational queries across Claude, ChatGPT, Gemini, and Perplexity, unmask competitor share-of-voice, audit your full JSON-LD schema entity graph, and conduct a 60-minute executive strategy debrief.
                </p>
                <p className="text-xs text-amber-300/90 font-medium">
                  {PAID_AUDIT_OFFER.creditGuarantee}
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <button
                  onClick={() => onOpenReportModal({ tier: PAID_AUDIT_OFFER.name })}
                  className="w-full py-3.5 px-6 rounded-full bg-amber-400 hover:bg-amber-300 text-seen-dark font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm text-center"
                >
                  <span>Order $499 Audit ($0 Risk)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenReportModal({ tier: 'Free Initial Visibility Scan' })}
                  className="w-full py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/20 text-center"
                >
                  <span>Request Free Scan</span>
                </button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-seen-borderDark flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                100% Confidential · Human analyst reviewed
              </span>
              <span>BrightLocal 2026 methodology · 7.5x annual consumer AI adoption</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
