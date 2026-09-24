'use client';

import React from 'react';
import { ArrowRight, AlertTriangle, ShieldCheck } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

interface CompetitiveGapProps {
  onOpenReportModal?: () => void;
}

export const CompetitiveGap: React.FC<CompetitiveGapProps> = ({ onOpenReportModal }) => {
  const { openReportModal } = useModal();
  const handleOpen = onOpenReportModal || (() => openReportModal());

  const competitors = [
    { name: 'Competitor A (Regional Leader)', visibility: 61, badge: 'Dominating 34 queries', isUser: false },
    { name: 'Competitor B (Franchise Network)', visibility: 48, badge: 'High third-party citations', isUser: false },
    { name: 'Competitor C (Independent Contractor)', visibility: 42, badge: 'Structured reviews & schema', isUser: false },
    { name: 'Your Business (Current Baseline)', visibility: 24, badge: 'High opportunity gap', isUser: true },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-y border-seen-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Context & Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              <span>The Local Discovery Gap</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-seen-dark font-display leading-[1.15]">
              Your competitors are already showing up.
            </h2>

            <p className="text-base sm:text-lg text-seen-muted leading-relaxed">
              When prospective customers in your town ask ChatGPT or Google AI for recommendations, AI models don’t divide mentions equally. They favor businesses with strong, unambiguous digital authority signals.
            </p>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed bg-seen-offwhite p-4 rounded-xl border border-seen-border">
              We identify where competitors are being discovered, what makes them easier to recommend, and where your business has an opportunity to catch up.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleOpen}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-seen-accent hover:bg-seen-accentDark text-white font-semibold text-sm transition-all shadow-sm hover:shadow-glow group cursor-pointer"
              >
                <span>Find Your Gap</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Benchmark Table */}
          <div className="lg:col-span-7">
            <div className="bg-seen-offwhite rounded-2xl border border-seen-border p-6 sm:p-8 shadow-card">
              
              <div className="flex items-center justify-between border-b border-seen-border pb-4 mb-6">
                <div>
                  <h3 className="text-base font-bold text-seen-dark font-display">
                    Local Market AI Visibility Benchmark
                  </h3>
                  <span className="text-xs text-seen-muted">
                    Based on 120+ tested conversational prompts in a typical Texas metro
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-white border border-seen-border text-gray-600">
                  AI Share of Voice
                </span>
              </div>

              {/* Comparison Rows */}
              <div className="space-y-4">
                {competitors.map((item) => (
                  <div
                    key={item.name}
                    className={`p-4 rounded-xl border transition-all ${
                      item.isUser
                        ? 'bg-white border-2 border-seen-accent shadow-sm'
                        : 'bg-white/70 border-seen-border hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className={`w-2.5 h-2.5 rounded-full ${
                          item.isUser ? 'bg-seen-accent animate-pulse' : 'bg-gray-400'
                        }`} />
                        <span className={`text-sm font-bold ${
                          item.isUser ? 'text-seen-dark' : 'text-gray-700'
                        }`}>
                          {item.name}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 font-mono hidden sm:inline">
                          {item.badge}
                        </span>
                        <span className={`text-base sm:text-lg font-extrabold font-display ${
                          item.isUser ? 'text-seen-accent' : 'text-seen-dark'
                        }`}>
                          {item.visibility}%
                        </span>
                      </div>
                    </div>

                    {/* Visual Progress Bar */}
                    <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                      <div
                        className={`h-2.5 rounded-full transition-all duration-700 ${
                          item.isUser ? 'bg-seen-accent' : 'bg-gray-400'
                        }`}
                        style={{ width: `${item.visibility}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Callout */}
              <div className="mt-6 pt-4 border-t border-seen-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-seen-muted">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-seen-accent" />
                  <span>The top 3 competitors capture over 70% of AI recommendations</span>
                </div>
                <span className="font-semibold text-seen-accent">
                  Closing this gap is achievable in 60-90 days
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
