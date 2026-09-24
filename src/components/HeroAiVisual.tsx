'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, CheckCircle, Search, ShieldCheck, MapPin, Star, Building2, ChevronRight, RefreshCw } from 'lucide-react';

interface PromptPreset {
  query: string;
  category: string;
  location: string;
  aiEngine: string;
  responseIntro: string;
  highlightedCompany: string;
  highlightRationale: string;
  competitors: { name: string; note: string }[];
}

const PRESETS: PromptPreset[] = [
  {
    query: "Who's the best HVAC company near me?",
    category: "Home Services",
    location: "Dallas-Fort Worth, TX",
    aiEngine: "ChatGPT Search",
    responseIntro: "Based on local licensing records, verified customer response times in North Texas, and review sentiment for emergency AC repairs, here are the top-recommended HVAC providers:",
    highlightedCompany: "Your Business (Optimized with AIGroSales)",
    highlightRationale: "Strongest local signals: TDLR verified license, 4.9★ rating across 380+ reviews, noted for upfront transparent emergency repair pricing and rapid summer dispatch.",
    competitors: [
      { name: "Metro Climate Systems", note: "Established 2011, standard warranty terms, higher weekend dispatch fee" },
      { name: "Apex Air Solutions", note: "Specializes in commercial units, limited residential coverage" }
    ]
  },
  {
    query: "Find me a gentle cosmetic dentist in Austin who takes Delta Dental",
    category: "Healthcare",
    location: "Austin, TX",
    aiEngine: "Perplexity AI",
    responseIntro: "Synthesizing patient satisfaction sentiment, verified in-network insurance status, and cosmetic dentistry certifications in Central Austin:",
    highlightedCompany: "Your Dental Practice (Optimized with AIGroSales)",
    highlightRationale: "Verified in-network Delta Dental Premier provider with structured patient sentiment praising anxiety-free sedation and gentle bedside manner.",
    competitors: [
      { name: "Austin Smile Studio", note: "Out-of-network for Delta, high cosmetic review volume" },
      { name: "Hill Country Family Dental", note: "General dentistry focus, limited cosmetic porcelain veneer portfolio" }
    ]
  },
  {
    query: "Who is the most trustworthy roofer for hail damage in San Antonio?",
    category: "Contractors",
    location: "San Antonio, TX",
    aiEngine: "Google AI Overview",
    responseIntro: "Analyzing storm restoration records, manufacturer certifications, and verified insurance claim dispute ratings across Bexar County:",
    highlightedCompany: "Your Roofing Company (Optimized with AIGroSales)",
    highlightRationale: "Direct GAF Master Elite credential corroboration, A+ BBB rating, verified local presence for 12+ years with no storm-chaser flags in state registries.",
    competitors: [
      { name: "Alamo State Roofing", note: "Standard asphalt shingle installer, variable warranty coverage" },
      { name: "Lone Star Exteriors", note: "Recent entity address change, fewer verified storm claims" }
    ]
  },
  {
    query: "Find an experienced trial attorney in Houston for a commercial dispute",
    category: "Legal Practice",
    location: "Houston, TX",
    aiEngine: "Claude (Anthropic)",
    responseIntro: "Synthesizing State Bar of Texas licensing records, verified trial history, and client dispute sentiment in Harris County:",
    highlightedCompany: "Your Law Practice (Optimized with AIGroSales)",
    highlightRationale: "Verified Texas Board of Legal Specialization certification, 20+ years Houston standing, clean disciplinary record, and documented commercial breach settlements.",
    competitors: [
      { name: "Gulf Coast Legal Partners", note: "General practice, limited commercial trial verdicts" },
      { name: "Bayou City Counsel", note: "Primary focus on personal injury rather than contract arbitration" }
    ]
  }
];

export const HeroAiVisual: React.FC = () => {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [phase, setPhase] = useState<'prompt' | 'analyzing' | 'results'>('results');
  const [activeTab, setActiveTab] = useState<'ChatGPT' | 'Claude' | 'Perplexity' | 'Google AI'>('ChatGPT');

  const currentPreset = PRESETS[activePresetIndex];

  const handleSelectPreset = (index: number) => {
    if (index === activePresetIndex) return;
    setPhase('analyzing');
    setActivePresetIndex(index);
    setTimeout(() => {
      setPhase('results');
    }, 450);
  };

  const signalBadges = [
    { label: 'AI Discovery', status: 'active' },
    { label: 'Local Signals', status: 'verified' },
    { label: 'Reviews', status: 'analyzed' },
    { label: 'Authority', status: 'corroborated' },
    { label: 'Website', status: 'machine-readable' },
    { label: 'Reputation', status: 'indexed' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto lg:max-w-none">
      {/* Interactive Simulation Frame */}
      <div className="relative rounded-2xl bg-seen-cardDark border border-seen-borderDark shadow-2xl overflow-hidden transition-all duration-300">
        
        {/* Browser / AI Window Header */}
        <div className="px-4 sm:px-6 py-3.5 bg-seen-dark/90 border-b border-seen-borderDark flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/70 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/70 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/70 inline-block"></span>
            </div>
            <span className="text-xs font-mono text-gray-400 ml-2 hidden sm:inline-block">
              AI Query Simulation · Live Synthesis
            </span>
          </div>

          {/* Engine Selector */}
          <div className="flex items-center bg-seen-dark rounded-lg p-0.5 border border-seen-borderDark/80">
            {(['ChatGPT', 'Claude', 'Perplexity', 'Google AI'] as const).map((engine) => (
              <button
                key={engine}
                onClick={() => setActiveTab(engine)}
                className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors cursor-pointer ${
                  activeTab === engine
                    ? 'bg-seen-accent text-white font-semibold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {engine}
              </button>
            ))}
          </div>
        </div>

        {/* Content Container */}
        <div className="p-4 sm:p-6 space-y-4">
          
          {/* Preset Prompts Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs scrollbar-none">
            <span className="text-gray-500 font-mono text-[10px] uppercase whitespace-nowrap">
              Test Query:
            </span>
            {PRESETS.map((preset, idx) => (
              <button
                key={preset.category}
                onClick={() => handleSelectPreset(idx)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer border ${
                  activePresetIndex === idx
                    ? 'bg-seen-surface text-white border-seen-accent font-semibold shadow-sm'
                    : 'bg-seen-dark/50 text-gray-400 border-seen-borderDark hover:text-white hover:border-gray-600'
                }`}
              >
                {preset.category}
              </button>
            ))}
          </div>

          {/* User Prompt Bubble */}
          <div className="bg-seen-dark/70 rounded-xl p-3.5 sm:p-4 border border-seen-borderDark/90 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-gray-300 flex-shrink-0 mt-0.5">
              <Search className="w-4 h-4 text-seen-accent" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between text-[11px] text-gray-500 font-mono mb-1">
                <span>Customer in {currentPreset.location} asks {activeTab}:</span>
                <span className="text-seen-accent font-sans">High Purchase Intent</span>
              </div>
              <p className="text-sm sm:text-base font-semibold text-white tracking-tight">
                "{currentPreset.query}"
              </p>
            </div>
          </div>

          {/* AI Response Block */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-gray-400 px-1">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-seen-accent animate-pulse" />
                <span className="font-medium text-gray-300">{activeTab} Assistant Answer</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block"></span>
                Signals Verified
              </span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed px-1">
              {currentPreset.responseIntro}
            </p>

            {/* AIGROSALES-HIGHLIGHTED WINNING BUSINESS CARD */}
            <div className="relative rounded-xl bg-gradient-to-br from-seen-surface to-seen-cardDark border-2 border-seen-accent p-4 sm:p-5 shadow-glow transition-all duration-300">
              
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-seen-accent text-white flex items-center justify-center font-bold text-xs shadow-sm">
                    #1
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-1.5">
                      {currentPreset.highlightedCompany}
                    </h4>
                    <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 inline" /> Recommended First Choice
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-seen-accent/20 border border-seen-accent/40 px-2.5 py-1 rounded-full">
                  <span className="text-[11px] font-bold text-blue-300">
                    AIGroSales Optimized
                  </span>
                </div>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed mt-2 bg-seen-dark/60 p-2.5 rounded-lg border border-seen-borderDark/60">
                "{currentPreset.highlightRationale}"
              </p>

              {/* 6 Micro-Signals Badges */}
              <div className="mt-3 pt-3 border-t border-seen-borderDark/60 flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] font-mono text-gray-400 uppercase mr-1">Signals:</span>
                {signalBadges.map((badge) => (
                  <span
                    key={badge.label}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-seen-dark text-gray-300 border border-seen-borderDark/80"
                  >
                    <span className="w-1 h-1 rounded-full bg-seen-accent inline-block"></span>
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Non-highlighted competitors */}
            <div className="space-y-2 opacity-60 hover:opacity-90 transition-opacity">
              {currentPreset.competitors.map((comp, i) => (
                <div
                  key={comp.name}
                  className="rounded-lg bg-seen-dark/40 border border-seen-borderDark/60 p-2.5 sm:p-3 flex items-start justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-gray-800 text-gray-400 flex items-center justify-center font-mono text-[10px]">
                      #{i + 2}
                    </span>
                    <div>
                      <span className="font-semibold text-gray-300">{comp.name}</span>
                      <p className="text-[11px] text-gray-500">{comp.note}</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-gray-500 font-mono">Secondary</span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Footer info bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-seen-dark border-t border-seen-borderDark flex items-center justify-between text-[11px] text-gray-400 font-mono">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-seen-accent" />
            AI Discovery Knowledge Graph Node
          </span>
          <span className="text-gray-500 hidden sm:inline">
            Confidence: 96.4%
          </span>
        </div>

      </div>
    </div>
  );
};
