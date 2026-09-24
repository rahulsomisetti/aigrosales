'use client';

import React, { useState } from 'react';
import { 
  X, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  BarChart3, 
  FileText 
} from 'lucide-react';
import { PAID_AUDIT_OFFER } from '../data/pricingData';

interface SampleReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReportModal: (options?: { industry?: string; tier?: string }) => void;
}

export const SampleReportModal: React.FC<SampleReportModalProps> = ({
  isOpen,
  onClose,
  onOpenReportModal
}) => {
  const [activeTab, setActiveTab] = useState<'executive' | 'prompts' | 'technical' | 'roadmap'>('executive');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-seen-dark/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-seen-border overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-seen-dark text-white border-b border-seen-borderDark flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-seen-accent">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-seen-accent">
                  Interactive Preview
                </span>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-gray-300 font-mono">
                  Confidential Client Telemetry
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold font-display text-white">
                Dallas-Fort Worth HVAC & Home Services Benchmark Report
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close Sample Report"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-seen-border bg-seen-offwhite px-6 overflow-x-auto flex-shrink-0 text-xs font-bold uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('executive')}
            className={`py-3.5 px-4 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'executive'
                ? 'border-seen-accent text-seen-dark bg-white'
                : 'border-transparent text-seen-muted hover:text-seen-dark'
            }`}
          >
            1. Executive Score & Share
          </button>
          <button
            onClick={() => setActiveTab('prompts')}
            className={`py-3.5 px-4 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'prompts'
                ? 'border-seen-accent text-seen-dark bg-white'
                : 'border-transparent text-seen-muted hover:text-seen-dark'
            }`}
          >
            2. Multi-Engine Query Matrix
          </button>
          <button
            onClick={() => setActiveTab('technical')}
            className={`py-3.5 px-4 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'technical'
                ? 'border-seen-accent text-seen-dark bg-white'
                : 'border-transparent text-seen-muted hover:text-seen-dark'
            }`}
          >
            3. Schema & License Audit
          </button>
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`py-3.5 px-4 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'roadmap'
                ? 'border-seen-accent text-seen-dark bg-white'
                : 'border-transparent text-seen-muted hover:text-seen-dark'
            }`}
          >
            4. 90-Day Tactical Roadmap
          </button>
        </div>

        {/* Scrollable Tab Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 text-seen-dark">
          
          {/* TAB 1: EXECUTIVE SCORE & SHARE */}
          {activeTab === 'executive' && (
            <div className="space-y-6 animate-fadeIn">
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-seen-offwhite p-5 rounded-2xl border border-seen-border">
                  <span className="text-xs font-mono uppercase text-gray-500 block mb-1">Baseline Score</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black font-display text-rose-600">28</span>
                    <span className="text-xs text-gray-500 font-mono">/ 100</span>
                  </div>
                  <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-wider text-rose-700 bg-rose-100 px-2 py-0.5 rounded">
                    High Risk · AI Invisible
                  </span>
                  <p className="text-xs text-seen-muted mt-2">
                    Client appeared in only 4 of 50 monitored commercial queries in Collin & Dallas County.
                  </p>
                </div>

                <div className="bg-seen-offwhite p-5 rounded-2xl border border-seen-border">
                  <span className="text-xs font-mono uppercase text-gray-500 block mb-1">Competitor Capture</span>
                  <div className="text-4xl font-black font-display text-amber-600">76%</div>
                  <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                    Lead Leakage
                  </span>
                  <p className="text-xs text-seen-muted mt-2">
                    2 local rivals captured 38 of 50 top recommendation slots across ChatGPT & Perplexity.
                  </p>
                </div>

                <div className="bg-seen-offwhite p-5 rounded-2xl border border-seen-border">
                  <span className="text-xs font-mono uppercase text-gray-500 block mb-1">Projected 90-Day Target</span>
                  <div className="text-4xl font-black font-display text-emerald-600">74+</div>
                  <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Category Dominance
                  </span>
                  <p className="text-xs text-seen-muted mt-2">
                    Forecasted lift upon Schema deployment and TDLR license corroboration.
                  </p>
                </div>
              </div>

              {/* Competitive Share-of-Voice Visual */}
              <div className="p-6 rounded-2xl bg-seen-dark text-white border border-seen-borderDark">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-seen-accent flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    <span>Local Market AI Share-of-Voice (50 High-Intent Queries)</span>
                  </h4>
                  <span className="text-xs text-gray-400 font-mono">Plano & Frisco, TX</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-gray-200">Competitor A (Air Pros DFW)</span>
                      <span className="font-mono text-amber-400">42% (21 mentions)</span>
                    </div>
                    <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-amber-400 h-full rounded-full" style={{ width: '42%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-gray-200">Competitor B (Reliant Air)</span>
                      <span className="font-mono text-blue-400">34% (17 mentions)</span>
                    </div>
                    <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-blue-400 h-full rounded-full" style={{ width: '34%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-white">Subject Client (Benchmark Baseline)</span>
                      <span className="font-mono text-rose-400">8% (4 mentions)</span>
                    </div>
                    <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-rose-500 h-full rounded-full" style={{ width: '8%' }} />
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 text-xs text-gray-400 leading-relaxed">
                  <strong>Key Finding:</strong> The client has 420+ 5-star Google reviews, but AI assistants recommended Competitor A despite having fewer total reviews because Competitor A had machine-readable TDLR licenses and upfront pricing schema.
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: MULTI-ENGINE QUERY MATRIX */}
          {activeTab === 'prompts' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-seen-dark font-display">
                    Prompt Telemetry Excerpt (6 of 50 Tested)
                  </h4>
                  <p className="text-xs text-seen-muted">
                    Prompts tested verbatim across ChatGPT-4o, Claude 3.5 Sonnet, Perplexity Pro, and Google Gemini.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    query: "Who is the most reliable emergency AC repair company in Plano open right now?",
                    chatgpt: "Recommended Air Pros DFW & Reliant Air. Cited 24/7 license records.",
                    clientStatus: "Omitted",
                    reason: "Missing emergency dispatch hours in Schema.org markup"
                  },
                  {
                    query: "Best heat pump replacement company near Frisco with honest warranty?",
                    chatgpt: "Surfaced Trane certified premier dealer list. Client omitted.",
                    clientStatus: "Omitted",
                    reason: "Equipment brand accreditations not codified in JSON-LD"
                  },
                  {
                    query: "Fair priced HVAC contractor in North Dallas who won’t price-gouge?",
                    chatgpt: "Client cited in secondary footnote (#4), but not recommended as top 2.",
                    clientStatus: "Partial",
                    reason: "Reviews praise honesty, but lack structured semantic corroboration"
                  },
                  {
                    query: "Licensed commercial refrigeration repair near Carrollton TX",
                    chatgpt: "Omitted entirely. National directories (Yelp & Angi) filled the prompt.",
                    clientStatus: "Omitted",
                    reason: "Zero commercial schema nodes indexed on client domain"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-seen-border bg-seen-offwhite text-xs space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-bold text-gray-900 text-sm">"{item.query}"</span>
                      <span className={`px-2 py-0.5 rounded font-mono font-bold uppercase text-[10px] ${
                        item.clientStatus === 'Omitted' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {item.clientStatus}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-seen-border/60">
                      <div>
                        <span className="font-semibold text-gray-600 block">AI Model Output:</span>
                        <span className="text-gray-700">{item.chatgpt}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-rose-600 block">Identified Technical Gap:</span>
                        <span className="text-gray-700">{item.reason}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SCHEMA & LICENSE AUDIT */}
          {activeTab === 'technical' && (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <h4 className="text-base font-bold text-seen-dark font-display">
                  Digital Entity & Technical Audit Scorecard
                </h4>
                <p className="text-xs text-seen-muted">
                  How AI crawlers and vector embeddings evaluate your machine-readable architecture.
                </p>
              </div>

              <div className="divide-y divide-seen-border rounded-2xl border border-seen-border overflow-hidden bg-white text-xs">
                
                <div className="p-4 flex items-start justify-between gap-4 bg-rose-50/40">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                      <span className="font-bold text-seen-dark">State Licensing Schema (TDLR TACLA)</span>
                    </div>
                    <p className="text-gray-600">
                      Texas Department of Licensing & Regulation master contractor license number was printed in the website footer, but missing from JSON-LD schema `hasCredential` markup.
                    </p>
                  </div>
                  <span className="px-2 py-1 rounded bg-rose-100 text-rose-800 font-bold uppercase font-mono text-[10px] flex-shrink-0">
                    Fail · Priority 1
                  </span>
                </div>

                <div className="p-4 flex items-start justify-between gap-4 bg-rose-50/40">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                      <span className="font-bold text-seen-dark">Specific Service Area Geo-Coordinates</span>
                    </div>
                    <p className="text-gray-600">
                      Domain used generic "DFW Metro" text rather than exact postal polygon schemas (`geoRadius`, `areaServed`). LLMs defaulted to competitors closer to search intent centroids.
                    </p>
                  </div>
                  <span className="px-2 py-1 rounded bg-rose-100 text-rose-800 font-bold uppercase font-mono text-[10px] flex-shrink-0">
                    Fail · Priority 1
                  </span>
                </div>

                <div className="p-4 flex items-start justify-between gap-4 bg-amber-50/40">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span className="font-bold text-seen-dark">Review Sentiment Lexicon Triangulation</span>
                    </div>
                    <p className="text-gray-600">
                      Client holds 4.9 stars, but reviews cluster around "nice guy" rather than high-intent query signals ("transparent pricing", "weekend dispatch", "compressor replacement warranty").
                    </p>
                  </div>
                  <span className="px-2 py-1 rounded bg-amber-100 text-amber-800 font-bold uppercase font-mono text-[10px] flex-shrink-0">
                    Warning · Priority 2
                  </span>
                </div>

                <div className="p-4 flex items-start justify-between gap-4 bg-emerald-50/40">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="font-bold text-seen-dark">NAP Consistency Across Google & Apple Maps</span>
                    </div>
                    <p className="text-gray-600">
                      Business name, primary phone (+1 346 869 9154), and physical shop address are synchronized across major mapping APIs.
                    </p>
                  </div>
                  <span className="px-2 py-1 rounded bg-emerald-100 text-emerald-800 font-bold uppercase font-mono text-[10px] flex-shrink-0">
                    Pass
                  </span>
                </div>

              </div>
            </div>
          )}

          {/* TAB 4: 90-DAY TACTICAL ROADMAP */}
          {activeTab === 'roadmap' && (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <h4 className="text-base font-bold text-seen-dark font-display">
                  Recommended 90-Day Corrective Sprints
                </h4>
                <p className="text-xs text-seen-muted">
                  How we convert an unverified business into the #1 AI-recommended provider in its market.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl border border-seen-border bg-white shadow-subtle">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold uppercase text-seen-accent">
                      Days 1 – 14 · Sprint 1
                    </span>
                    <span className="px-2 py-0.5 rounded bg-seen-offwhite text-gray-600 text-[10px] font-mono">
                      Foundation
                    </span>
                  </div>
                  <h5 className="text-sm font-bold text-seen-dark font-display mb-1">
                    Custom Schema Architecture & State Licensing Anchor
                  </h5>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Deploy JSON-LD schemas tying TDLR licensing, technician EPA certifications, brand manufacturer dealerships, and explicit postal code polygons into the domain header.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-seen-border bg-white shadow-subtle">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold uppercase text-seen-accent">
                      Days 15 – 45 · Sprint 2
                    </span>
                    <span className="px-2 py-0.5 rounded bg-seen-offwhite text-gray-600 text-[10px] font-mono">
                      Authority Fortification
                    </span>
                  </div>
                  <h5 className="text-sm font-bold text-seen-dark font-display mb-1">
                    Tier-1 Local Citations & Review Sentiment Re-alignment
                  </h5>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Secure corroborating mentions in regional Texas business indices. Implement automated customer review workflows that systematically elicit conversational keywords.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-seen-border bg-white shadow-subtle">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold uppercase text-seen-accent">
                      Days 46 – 90 · Sprint 3
                    </span>
                    <span className="px-2 py-0.5 rounded bg-seen-offwhite text-gray-600 text-[10px] font-mono">
                      Defense & Expansion
                    </span>
                  </div>
                  <h5 className="text-sm font-bold text-seen-dark font-display mb-1">
                    Telemetry Tracking & Competitor Disruption Radar
                  </h5>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Track weekly recommendation share across ChatGPT and Perplexity. Rapidly patch any new conversational queries where competitors begin emerging.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Conversion Bar */}
        <div className="p-6 bg-seen-offwhite border-t border-seen-border flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0">
          <div className="text-xs text-seen-muted text-center sm:text-left">
            <span className="font-bold text-seen-dark block sm:inline mr-2">Ready to run this on your business?</span>
            <span>Available as a complimentary report or full forensic audit.</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenReportModal({ tier: PAID_AUDIT_OFFER.name });
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-seen-dark font-black text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Order $499 Deep Audit ($0 Risk Guarantee)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenReportModal({ tier: 'Free Initial Visibility Scan' });
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-seen-dark hover:bg-seen-accent text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer text-center"
            >
              <span>Request Free 100+ Prompt Report</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
