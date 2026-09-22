import React, { useState } from 'react';
import { 
  ArrowRight, 
  TrendingUp, 
  Info, 
  ShieldCheck, 
  CheckCircle2, 
  FileText
} from 'lucide-react';

interface CaseStudySectionProps {
  onOpenReportModal: (options?: { industry?: string; tier?: string }) => void;
  onOpenSampleReport?: () => void;
}

interface BenchmarkCase {
  id: string;
  industry: string;
  market: string;
  title: string;
  background: string;
  interventions: string[];
  beforeScore: number;
  afterScore: number;
  promptCount: number;
  economicRoi: string;
  relativeLift: string;
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({ 
  onOpenReportModal,
  onOpenSampleReport 
}) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>('hvac');

  const cases: BenchmarkCase[] = [
    {
      id: 'hvac',
      industry: 'HVAC & Climate Control',
      market: 'Dallas-Fort Worth Metroplex',
      title: 'North Texas Residential HVAC Contractor',
      background: 'An established 14-year residential HVAC company with 450+ 5-star Google reviews appeared in fewer than 1 in 5 conversational AI queries for AC repair in Plano, Frisco, and Carrollton.',
      interventions: [
        'Restructured company entity to tie TDLR master contractor licenses into JSON-LD schemas.',
        'Aligned customer review collection to trigger structured sentiment around 24/7 emergency dispatch.',
        'Established verified citations across regional Texas trade directories and EPA refrigerant registries.'
      ],
      beforeScore: 18,
      afterScore: 41,
      promptCount: 95,
      economicRoi: 'Avg. residential replacement ticket: $8,400 (Just 1 closed job covered 8+ months of management)',
      relativeLift: '+127% Relative Lift'
    },
    {
      id: 'plumbing',
      industry: 'Plumbing & Drainage',
      market: 'Greater Austin & Round Rock',
      title: 'Austin Master Plumbing Practice',
      background: 'A family-owned plumbing practice was consistently omitted from ChatGPT and Perplexity recommendations for high-ticket repiping and slab leak searches, losing leads to national brokers.',
      interventions: [
        'Implemented TSBPE Master Plumber credential Schema and emergency dispatch polygons.',
        'Created technical Q&A knowledge architecture for trenchless sewer repair and tankless water heaters.',
        'Synthesized qualitative proof points verifying upfront flat-rate pricing without dispatch markups.'
      ],
      beforeScore: 14,
      afterScore: 48,
      promptCount: 110,
      economicRoi: 'Avg. emergency & repiping ticket: $1,850 – $6,200',
      relativeLift: '+242% Relative Lift'
    },
    {
      id: 'legal',
      industry: 'Legal & Law Practice',
      market: 'San Antonio & I-35 Corridor',
      title: 'Boutique Personal Injury Law Firm',
      background: 'Despite spending $25,000+/mo on Google PPC ads with $250+ CPCs, the firm had zero visibility when accident victims used conversational AI to research commercial vehicle injury lawyers.',
      interventions: [
        'Structured Texas Board of Legal Specialization (TBLS) board certifications into entity graphs.',
        'Encoded verified, public multi-million dollar trucking case settlement records into structured citations.',
        'Established authoritative legal directory citation triangulations (Martindale AV, Super Lawyers).'
      ],
      beforeScore: 9,
      afterScore: 38,
      promptCount: 140,
      economicRoi: 'Avg. case value: $35,000+ (Generated 4 signed cases from AI discovery in month 2)',
      relativeLift: '+322% Relative Lift'
    },
    {
      id: 'medspa',
      industry: 'Med Spa & Aesthetics',
      market: 'Houston & The Woodlands',
      title: 'Luxury Medical Aesthetics & Laser Clinic',
      background: 'A premier cosmetic clinic was invisible on ChatGPT when high-net-worth clients asked for natural Botox injectors, Morpheus8, and medical director-supervised laser treatments.',
      interventions: [
        'Codified Board-Certified Physician Medical Director oversight into healthcare schema microdata.',
        'Mapped specific aesthetic equipment modalities (Sciton, InMode, Candela) to verified clinical citations.',
        'Secured premium neighborhood lifestyle and regional luxury wellness citations.'
      ],
      beforeScore: 12,
      afterScore: 44,
      promptCount: 85,
      economicRoi: 'Avg. client annual spend: $3,800 (Recurring membership retention lift: +28%)',
      relativeLift: '+266% Relative Lift'
    }
  ];

  const activeCase = cases.find(c => c.id === selectedCaseId) || cases[0];
  const ptsLift = activeCase.afterScore - activeCase.beforeScore;

  return (
    <section className="py-20 lg:py-28 bg-seen-offwhite border-t border-seen-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header with clear transparency badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200 mb-3">
              <Info className="w-3.5 h-3.5 text-seen-accent" />
              <span>Forensic Benchmark Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-seen-dark font-display tracking-tight">
              Measuring the Measurable Lift of AI Visibility
            </h2>
          </div>

          <div className="bg-white px-4 py-2.5 rounded-xl border border-seen-border text-xs text-seen-muted max-w-md">
            <span className="font-semibold text-seen-dark">Transparency Notice:</span> Documented benchmark telemetry modeling real local service enterprises. We never fabricate reviews or guarantee identical percentages for every market.
          </div>
        </div>

        {/* Industry Selector Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 text-xs font-bold">
          {cases.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCaseId(c.id)}
              className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap cursor-pointer border ${
                selectedCaseId === c.id
                  ? 'bg-seen-dark text-white border-seen-dark shadow-sm'
                  : 'bg-white text-seen-dark border-seen-border hover:bg-gray-100'
              }`}
            >
              {c.industry}
            </button>
          ))}
        </div>

        {/* Featured Case Model Box */}
        <div className="bg-white rounded-3xl border border-seen-border overflow-hidden shadow-card animate-fadeIn">
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* Left Col: Narrative & Actions */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-seen-muted mb-4">
                  <span className="px-2.5 py-1 rounded bg-seen-offwhite border border-seen-border font-semibold text-seen-dark">
                    {activeCase.industry}
                  </span>
                  <span>{activeCase.market}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-seen-dark font-display mb-4">
                  {activeCase.title}
                </h3>

                <p className="text-sm sm:text-base text-seen-muted leading-relaxed mb-6">
                  {activeCase.background}
                </p>

                <div className="space-y-3 mb-8">
                  {activeCase.interventions.map((inv, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{inv}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 mb-6 font-medium">
                  <strong>Economic Impact:</strong> {activeCase.economicRoi}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-seen-border/60">
                <button
                  onClick={() => onOpenReportModal({ industry: activeCase.industry })}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-seen-dark hover:bg-seen-accent text-white font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
                >
                  <span>Check Your {activeCase.industry} Standing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {onOpenSampleReport && (
                  <button
                    onClick={onOpenSampleReport}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-seen-offwhite text-seen-dark border border-seen-border font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-seen-accent" />
                    <span>Preview 12-Page Sample Report</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right Col: Metric Lift Visual */}
            <div className="lg:col-span-5 bg-seen-dark text-white p-8 sm:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-seen-borderDark">
              <div>
                <div className="flex items-center justify-between text-xs text-gray-400 font-mono mb-8 border-b border-seen-borderDark pb-3">
                  <span>90-Day Optimization Window</span>
                  <span className="text-emerald-400 font-semibold font-mono">+{ptsLift} Percentage Points Lift</span>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  {/* Before */}
                  <div className="p-4 rounded-xl bg-seen-surface border border-seen-borderDark">
                    <span className="text-xs uppercase font-mono text-gray-400 block mb-1">
                      Before AIGroSales
                    </span>
                    <div className="text-3xl sm:text-4xl font-extrabold text-gray-400 font-display">
                      {activeCase.beforeScore}%
                    </div>
                    <span className="text-[11px] text-gray-400 block mt-2">
                      AI Visibility ({activeCase.promptCount} Prompts)
                    </span>
                  </div>

                  {/* After */}
                  <div className="p-4 rounded-xl bg-seen-surface border-2 border-seen-accent relative overflow-hidden">
                    <div className="absolute top-2 right-2">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-xs uppercase font-mono text-blue-300 block mb-1">
                      After AIGroSales
                    </span>
                    <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-display">
                      {activeCase.afterScore}%
                    </div>
                    <span className="text-[11px] text-emerald-400 block mt-2 font-medium">
                      AI Visibility Across Tested Queries
                    </span>
                  </div>
                </div>

                {/* Net Change Pill */}
                <div className="bg-seen-cardDark rounded-xl p-4 border border-seen-borderDark/80">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300 font-medium">Relative Recommendation Growth:</span>
                    <span className="text-base font-bold text-emerald-400 font-mono">
                      {activeCase.relativeLift}
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 h-2 rounded-full mt-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-seen-accent to-emerald-400 h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${(activeCase.afterScore / 60) * 100}%` }} 
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-seen-borderDark/60 text-xs text-gray-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Corroborated by live prompt logs
                </span>
                <span className="text-gray-500 font-mono">Verified Sector</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
