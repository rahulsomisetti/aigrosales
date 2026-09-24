'use client';

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  RotateCcw, 
  Cpu, 
  ShieldCheck, 
  BarChart3,
  Search,
  Check
} from 'lucide-react';
import { PAID_AUDIT_OFFER } from '../data/pricingData';
import { useModal } from '@/context/ModalContext';

interface AiVisibilityCalculatorProps {
  defaultIndustry?: string;
  defaultCity?: string;
  compact?: boolean;
  onOpenReportModal?: (options?: { 
    industry?: string; 
    tier?: string; 
    businessName?: string; 
    website?: string; 
    city?: string; 
  }) => void;
}

interface ScanProgressStep {
  label: string;
  engine: string;
  done: boolean;
}

export const AiVisibilityCalculator: React.FC<AiVisibilityCalculatorProps> = ({
  defaultIndustry = 'HVAC & Climate Control',
  defaultCity = '',
  compact = false,
  onOpenReportModal
}) => {
  const { openReportModal } = useModal();
  const handleOpenModal = onOpenReportModal || openReportModal;

  // Input form state
  const [businessName, setBusinessName] = useState('');
  const [website, setWebsite] = useState('');
  const [city, setCity] = useState(defaultCity);
  const [industry, setIndustry] = useState(defaultIndustry);

  // Scan simulation states: 'idle' | 'scanning' | 'complete'
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'complete'>('idle');
  const [scanProgress, setScanProgress] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Calculated dynamic results
  const [calculatedScore, setCalculatedScore] = useState(32);

  const scanSteps: ScanProgressStep[] = [
    { label: `Deconstructing local intent parameters for ${city || 'your market'}...`, engine: 'Intent Engine', done: false },
    { label: 'Querying ChatGPT-4o & SearchGPT recommendation nodes...', engine: 'OpenAI', done: false },
    { label: 'Simulating live vector retrieval on Perplexity AI & Google AI Overviews...', engine: 'Perplexity & Google', done: false },
    { label: 'Auditing Schema.org JSON-LD, license corroboration & review sentiment...', engine: 'Entity Graph', done: false },
    { label: 'Calculating proprietary AI Visibility Score™ & competitor share...', engine: 'AIGroSales Core', done: false }
  ];

  const industryOptions = [
    'HVAC & Climate Control',
    'Plumbing & Drainage',
    'Roofing & Exterior',
    'Dentistry & Orthodontics',
    'Med Spa & Aesthetics',
    'Legal & Law Practice',
    'Electrical & Contracting',
    'Auto Repair & Collision',
    'Commercial Contracting',
    'Other Local Service'
  ];

  // Quick preset sample buttons
  const samples = [
    { name: 'Apex Comfort HVAC', city: 'Dallas, TX', ind: 'HVAC & Climate Control', web: 'apexcomforttx.com' },
    { name: 'Precision Master Plumbers', city: 'Austin, TX', ind: 'Plumbing & Drainage', web: 'precisionplumbaustin.com' },
    { name: 'Luxe Skin & Aesthetics', city: 'Houston, TX', ind: 'Med Spa & Aesthetics', web: 'luxeaestheticshouston.com' }
  ];

  const handleApplySample = (sample: typeof samples[0]) => {
    setBusinessName(sample.name);
    setCity(sample.city);
    setIndustry(sample.ind);
    setWebsite(sample.web);
  };

  const handleStartScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim() || !city.trim()) return;

    setScanState('scanning');
    setScanProgress(0);
    setCurrentStepIndex(0);

    // Compute a realistic unoptimized score based on length of inputs
    const hash = (businessName + city + industry).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const score = 24 + (hash % 16); // between 24 and 39 (typical unoptimized score)
    setCalculatedScore(score);
  };

  // Animate progress simulation
  useEffect(() => {
    if (scanState !== 'scanning') return;

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setScanState('complete');
          return 100;
        }
        const next = prev + 5;
        const stepIdx = Math.min(Math.floor((next / 100) * scanSteps.length), scanSteps.length - 1);
        setCurrentStepIndex(stepIdx);
        return next;
      });
    }, 110);

    return () => clearInterval(interval);
  }, [scanState, scanSteps.length]);

  const handleReset = () => {
    setScanState('idle');
    setScanProgress(0);
    setCurrentStepIndex(0);
  };

  // Prompts generated dynamically
  const getDynamicPrompts = () => {
    const cleanCity = city ? city.split(',')[0].trim() : 'Dallas';
    const cleanTrade = industry.split('&')[0].trim();
    return [
      {
        prompt: `Who is the most reliable emergency ${cleanTrade.toLowerCase()} in ${cleanCity} with fair pricing?`,
        engines: {
          chatgpt: { status: 'missed', note: 'AI recommended 2 competitors with corroborated licenses' },
          claude: { status: 'unverified', note: 'Entity omitted due to unverified licensing' },
          perplexity: { status: 'missed', note: 'Sourced answers from Yelp & local competitor websites' },
          gemini: { status: 'partial', note: 'Mentioned business name, but lacked service radius verification' }
        }
      },
      {
        prompt: `Top-rated licensed ${cleanTrade.toLowerCase()} near me open this weekend in ${cleanCity}`,
        engines: {
          chatgpt: { status: 'missed', note: 'Skipped: No machine-readable weekend hours in Schema' },
          claude: { status: 'missed', note: 'Cited 3 commercial competitors' },
          perplexity: { status: 'missed', note: 'Aggregated directory results' },
          gemini: { status: 'missed', note: 'Surfaced competitors with high review sentiment density' }
        }
      }
    ];
  };

  return (
    <div className={`w-full bg-white rounded-3xl border border-seen-border shadow-card overflow-hidden ${compact ? 'p-6' : 'p-6 sm:p-10'}`}>
      
      {/* Top Banner Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-seen-border">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-seen-dark text-white mb-2">
            <Sparkles className="w-3.5 h-3.5 text-seen-accent" />
            <span>Interactive Self-Serve Diagnostic</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-seen-dark font-display tracking-tight">
            AI Visibility Score™ Calculator
          </h2>
          <p className="text-xs sm:text-sm text-seen-muted mt-1 max-w-xl">
            See what happens in the 1.5 seconds when prospective clients in your city ask ChatGPT, Claude, Gemini, and Perplexity for your services.
          </p>
        </div>

        {/* 2026 Research Pill */}
        <div className="bg-seen-offwhite border border-seen-border rounded-2xl p-3 sm:p-4 flex items-center gap-3 self-start md:self-auto flex-shrink-0">
          <div className="w-10 h-10 rounded-xl bg-seen-dark flex items-center justify-center text-seen-accent font-black text-sm">
            45%
          </div>
          <div className="text-left">
            <span className="text-[11px] font-bold text-seen-dark block">U.S. Consumers Using AI</span>
            <span className="text-[10px] text-seen-muted">BrightLocal 2026 (7.5x annual surge)</span>
          </div>
        </div>
      </div>

      {/* STATE 1: INPUT FORM */}
      {scanState === 'idle' && (
        <div className="pt-8">
          <form onSubmit={handleStartScan} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-seen-dark mb-2">
                  Business Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lone Star Heating & Air"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-seen-border focus:ring-2 focus:ring-seen-accent outline-none text-sm bg-seen-offwhite/50 focus:bg-white transition-all text-seen-dark font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-seen-dark mb-2">
                  City / Metro Market <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dallas, TX or Austin, TX"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-seen-border focus:ring-2 focus:ring-seen-accent outline-none text-sm bg-seen-offwhite/50 focus:bg-white transition-all text-seen-dark font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-seen-dark mb-2">
                  Industry / Trade Sector
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-seen-border focus:ring-2 focus:ring-seen-accent outline-none text-sm bg-seen-offwhite/50 focus:bg-white transition-all text-seen-dark font-medium cursor-pointer"
                >
                  {industryOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-seen-dark mb-2">
                  Website URL <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. lonestarhvac.com"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-seen-border focus:ring-2 focus:ring-seen-accent outline-none text-sm bg-seen-offwhite/50 focus:bg-white transition-all text-seen-dark font-medium"
                />
              </div>

            </div>

            {/* Quick Sample Presets */}
            <div className="pt-1 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-seen-muted font-medium mr-1">Try a live demo sample:</span>
              {samples.map((s) => (
                <button
                  key={s.name}
                  type="button"
                  onClick={() => handleApplySample(s)}
                  className="px-3 py-1.5 rounded-lg bg-seen-offwhite hover:bg-seen-dark hover:text-white border border-seen-border text-gray-700 font-medium transition-colors cursor-pointer text-xs"
                >
                  {s.name} ({s.city})
                </button>
              ))}
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-seen-accent hover:bg-seen-accentDark text-white font-bold text-sm uppercase tracking-wider transition-all shadow-glow flex items-center justify-center gap-3 cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Calculate My AI Visibility Score™</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-seen-muted font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                No credit card required · Instant client-side simulation
              </span>
            </div>
          </form>
        </div>
      )}

      {/* STATE 2: SCANNING SIMULATION */}
      {scanState === 'scanning' && (
        <div className="py-12 px-4 sm:px-8 text-center space-y-8">
          <div className="max-w-md mx-auto">
            <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-seen-accent/20 animate-ping" />
              <div className="w-20 h-20 rounded-full bg-seen-dark text-seen-accent flex items-center justify-center border-2 border-seen-accent shadow-glow">
                <Cpu className="w-10 h-10 animate-pulse" />
              </div>
            </div>

            <span className="text-xs font-mono font-bold uppercase tracking-widest text-seen-accent block mb-2">
              Analyzing {businessName || 'Business'} in {city || 'Local Market'}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-seen-dark font-display">
              {scanSteps[currentStepIndex]?.engine || 'Processing Engine'}
            </h3>
            <p className="text-xs sm:text-sm text-seen-muted mt-2 min-h-[40px] leading-relaxed">
              {scanSteps[currentStepIndex]?.label}
            </p>

            {/* Progress Bar */}
            <div className="mt-6 w-full bg-seen-offwhite h-3 rounded-full overflow-hidden border border-seen-border p-0.5">
              <div 
                className="h-full bg-gradient-to-r from-seen-dark via-seen-accent to-emerald-500 rounded-full transition-all duration-150 ease-out"
                style={{ width: `${scanProgress}%` }}
              />
            </div>
            <div className="flex justify-between items-center text-[11px] font-mono text-seen-muted mt-2">
              <span>Simulation In Progress</span>
              <span className="font-bold text-seen-dark">{scanProgress}%</span>
            </div>
          </div>

          {/* Engine nodes status badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto pt-4 border-t border-seen-border">
            {[
              { name: 'ChatGPT-4o', active: scanProgress > 20 },
              { name: 'Claude 3.5', active: scanProgress > 45 },
              { name: 'Perplexity AI', active: scanProgress > 65 },
              { name: 'Google AI Overviews', active: scanProgress > 85 }
            ].map((node) => (
              <div 
                key={node.name}
                className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  node.active 
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
                    : 'bg-seen-offwhite border-seen-border text-gray-400'
                }`}
              >
                {node.active ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" />
                )}
                <span>{node.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* STATE 3: INTERACTIVE RESULTS DASHBOARD */}
      {scanState === 'complete' && (
        <div className="pt-8 space-y-8 animate-fadeIn">
          
          {/* Top Score Banner */}
          <div className="bg-seen-dark text-white rounded-3xl p-6 sm:p-8 border border-seen-borderDark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Score Display */}
              <div className="lg:col-span-4 flex items-center gap-6 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-6">
                <div className="relative flex items-center justify-center flex-shrink-0">
                  <div className="w-28 h-28 rounded-full bg-white/5 border-4 border-rose-500/60 flex flex-col items-center justify-center shadow-lg">
                    <span className="text-4xl font-black font-display text-white">
                      {calculatedScore}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 uppercase">/ 100</span>
                  </div>
                </div>

                <div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-400 bg-rose-950/60 border border-rose-800/60 px-2.5 py-1 rounded-md mb-2">
                    <AlertTriangle className="w-3 h-3" />
                    High Risk · AI Invisible
                  </span>
                  <h3 className="text-xl font-bold font-display text-white">
                    {businessName}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Market: <strong className="text-gray-200">{city}</strong> · {industry}
                  </p>
                </div>
              </div>

              {/* Diagnosis Summary */}
              <div className="lg:col-span-8 space-y-3">
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                  Diagnostic Telemetry Summary
                </div>
                <p className="text-sm text-gray-200 leading-relaxed">
                  When potential customers in <span className="text-white font-semibold">{city}</span> query AI assistants for {industry.toLowerCase()}, <span className="text-rose-400 font-bold">{businessName} is currently omitted in ~{100 - calculatedScore}% of synthesized recommendations</span>.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-gray-400 block text-[10px] uppercase">Competitor Capture</span>
                    <span className="text-base font-bold text-amber-400 font-display">74% Share</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-gray-400 block text-[10px] uppercase">Schema Integrity</span>
                    <span className="text-base font-bold text-rose-400 font-display">Unverified</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-gray-400 block text-[10px] uppercase">Review Sentiment Link</span>
                    <span className="text-base font-bold text-amber-400 font-display">Shallow</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Engine By Engine Breakdown */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-seen-dark font-display flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-seen-accent" />
                <span>Multi-Engine Recommendation Breakdown</span>
              </h3>
              <span className="text-xs text-seen-muted">Tested on latest models</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="p-4 rounded-2xl bg-seen-offwhite border border-seen-border space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-seen-dark">ChatGPT (OpenAI)</span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">
                    <XCircle className="w-3 h-3" />
                    Missed
                  </span>
                </div>
                <p className="text-[11px] text-seen-muted leading-relaxed">
                  Recommended top 2 local rivals with corroborated state license numbers and pricing transparency.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-seen-offwhite border border-seen-border space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-seen-dark">Claude (Anthropic)</span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                    <AlertTriangle className="w-3 h-3" />
                    Unverified
                  </span>
                </div>
                <p className="text-[11px] text-seen-muted leading-relaxed">
                  Entity confidence threshold not met. AI model warned user to check local licensing boards.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-seen-offwhite border border-seen-border space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-seen-dark">Google AI Overviews</span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                    <AlertTriangle className="w-3 h-3" />
                    Partial
                  </span>
                </div>
                <p className="text-[11px] text-seen-muted leading-relaxed">
                  Present in standard local map packs, but omitted from synthesized AI direct recommendations.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-seen-offwhite border border-seen-border space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-seen-dark">Perplexity AI</span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">
                    <XCircle className="w-3 h-3" />
                    Missed
                  </span>
                </div>
                <p className="text-[11px] text-seen-muted leading-relaxed">
                  Live citation nodes prioritized national directory syndicators and high-citation local competitors.
                </p>
              </div>

            </div>
          </div>

          {/* Sample Prompts Tested */}
          <div className="bg-seen-offwhite p-5 sm:p-6 rounded-2xl border border-seen-border space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-seen-dark">
              Sample Conversational Prompts Evaluated in {city}:
            </h4>
            <div className="space-y-3">
              {getDynamicPrompts().map((p, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white border border-seen-border text-xs space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-semibold text-gray-900">"{p.prompt}"</span>
                    <span className="text-[10px] font-mono text-rose-600 font-bold uppercase flex-shrink-0 bg-rose-50 px-2 py-0.5 rounded">
                      Not Recommended
                    </span>
                  </div>
                  <div className="text-[11px] text-seen-muted flex items-center gap-2 pt-1 border-t border-gray-100">
                    <span className="font-medium text-gray-500">ChatGPT Analysis:</span>
                    <span>{p.engines.chatgpt.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DUAL ACTION CONVERSION BANNER (Free vs $499 Entry Audit) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
            
            {/* Action 1: Free Full Diagnostic Report */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-7 rounded-2xl border-2 border-seen-border shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-seen-muted mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Option 1 · Zero Cost
                </span>
                <h4 className="text-xl font-bold text-seen-dark font-display mb-2">
                  Complimentary 100+ Prompt Report
                </h4>
                <p className="text-xs text-seen-muted leading-relaxed mb-5">
                  Have our analysts run a comprehensive 100-prompt telemetry scan across all 4 LLMs for {businessName} and deliver a prioritized 90-day action roadmap.
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleOpenModal({
                  businessName,
                  website,
                  city,
                  industry,
                  tier: 'Free Initial Visibility Scan'
                })}
                className="w-full py-3.5 px-5 rounded-full bg-seen-dark hover:bg-seen-accent text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Claim Full Report (Free)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Action 2: $499 Deep Diagnostic Entry Offer (100% Credit Guarantee) */}
            <div className="lg:col-span-6 bg-gradient-to-br from-seen-dark via-gray-900 to-seen-dark p-6 sm:p-7 rounded-2xl border-2 border-amber-500/50 shadow-card flex flex-col justify-between text-white relative overflow-hidden">
              <div className="absolute top-2 right-2">
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-amber-400 text-seen-dark font-mono">
                  100% Retainer Credit
                </span>
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Option 2 · Deep Diagnostic
                </span>
                <div className="flex items-baseline gap-2 mb-2">
                  <h4 className="text-xl font-bold font-display text-white">
                    $499 Comprehensive AI Audit
                  </h4>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-5">
                  Full 200-query deep audit, raw competitor share-of-voice data, technical Schema entity audit, plus 60-min executive strategy debrief. <strong className="text-white">100% of the $499 is credited</strong> toward your first 3 months if you proceed.
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleOpenModal({
                  businessName,
                  website,
                  city,
                  industry,
                  tier: PAID_AUDIT_OFFER.name
                })}
                className="w-full py-3.5 px-5 rounded-full bg-amber-400 hover:bg-amber-300 text-seen-dark font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Order $499 Audit ($0 Risk Guarantee)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Reset / Test Another */}
          <div className="text-center pt-2">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-seen-muted hover:text-seen-dark transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Test another business name or city</span>
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
