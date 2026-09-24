'use client';

import React, { useState } from 'react';
import { 
  ArrowRight, 
  TrendingUp, 
  Info, 
  ShieldCheck, 
  CheckCircle2, 
  FileText
} from 'lucide-react';
import { useModal } from '@/context/ModalContext';

interface CaseStudySectionProps {
  onOpenReportModal?: (options?: { industry?: string; tier?: string }) => void;
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
  const { openReportModal, openSampleReport } = useModal();

  const handleOpenReport = onOpenReportModal || openReportModal;
  const handleOpenSample = onOpenSampleReport || openSampleReport;

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
        'Established neighborhood entity citations across 18 regional DFW home improvement authorities.',
        'Implemented conversational Q&A schema addressing common summer AC emergency queries.'
      ],
      beforeScore: 19,
      afterScore: 54,
      promptCount: 142,
      economicRoi: 'Avg. ticket value: $8,400 (Estimated additional seasonal revenue: $92,000+)',
      relativeLift: '+184% Relative Lift'
    },
    {
      id: 'dental',
      industry: 'Dentistry & Orthodontics',
      market: 'Austin Metro Area',
      title: 'Private Family & Cosmetic Dental Practice',
      background: 'A modern Central Austin dental practice was completely excluded from ChatGPT and Perplexity recommendations for high-value cosmetic and sedation dentistry inquiries.',
      interventions: [
        'Deployed Dentist Schema microdata articulating accepted PPO insurances and sedation credentials.',
        'Secured local health entity corroboration across Austin medical registries.',
        'Restructured cosmetic porcelain veneer and clear aligner pages for machine parsing.'
      ],
      beforeScore: 14,
      afterScore: 48,
      promptCount: 96,
      economicRoi: 'Patient lifetime value: $6,200 (14 additional new patient consults in month 3)',
      relativeLift: '+242% Relative Lift'
    },
    {
      id: 'roofing',
      industry: 'Roofing & Restoration',
      market: 'Greater Houston Area',
      title: 'Commercial & Residential Roofing Contractor',
      background: 'Despite an A+ BBB rating, an established roofing contractor was invisible on AI search summaries for post-storm insurance claim inspections.',
      interventions: [
        'Integrated manufacturer certification credentials (GAF, Owens Corning) into knowledge graphs.',
        'Constructed neighborhood storm-restoration landing schema across Harris and Montgomery Counties.',
        'Built review sentiment signals emphasizing insurance adjustor collaboration integrity.'
      ],
      beforeScore: 22,
      afterScore: 58,
      promptCount: 110,
      economicRoi: 'Avg. residential claim: $14,500 (Captured 6 high-value full roof replacements)',
      relativeLift: '+163% Relative Lift'
    },
    {
      id: 'legal',
      industry: 'Personal Injury Law',
      market: 'San Antonio & Bexar County',
      title: 'Boutique Personal Injury Law Firm',
      background: 'Paying upwards of $320 per Google Ads click, this boutique firm received zero organic AI mentions when users asked ChatGPT for experienced trial attorneys.',
      interventions: [
        'Encoded Texas Board of Legal Specialization credentials into verified entity schema.',
        'Transformed published verdicts and case summaries into machine-readable format.',
        'Developed corridor-specific citations along the I-35 commercial trucking route.'
      ],
      beforeScore: 11,
      afterScore: 41,
      promptCount: 130,
      economicRoi: 'Saved estimated $12,000/mo in paid Google Ads while generating 4 signed cases',
      relativeLift: '+272% Relative Lift'
    },
    {
      id: 'medspa',
      industry: 'Medical Aesthetics',
      market: 'Dallas (Highland Park & Uptown)',
      title: 'Luxury Aesthetics & Laser Clinic',
      background: 'High visual social engagement failed to translate into AI search discovery for clients seeking natural injectable results and RF microneedling.',
      interventions: [
        'Implemented supervising physician Board Certification and Medical Director schemas.',
        'Cataloged FDA-cleared devices and premium injectable formulations into structured offerings.',
        'Cultivated qualitative sentiment markers in patient testimonials for subtle, natural outcomes.'
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
              type="button"
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
                  type="button"
                  onClick={() => handleOpenReport({ industry: activeCase.industry })}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-seen-dark hover:bg-seen-accent text-white font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
                >
                  <span>Check Your {activeCase.industry} Standing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleOpenSample}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-seen-offwhite text-seen-dark border border-seen-border font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-seen-accent" />
                  <span>Preview 12-Page Sample Report</span>
                </button>
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
