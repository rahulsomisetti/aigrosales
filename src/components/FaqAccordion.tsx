'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string | React.ReactNode;
}

const FAQS: FaqItem[] = [
  {
    question: 'What exactly is AI Discovery Marketing?',
    answer: (
      <span>
        <strong>AI Discovery Marketing is the systematic optimization of your business’s structured data, entity authority, and review sentiment for generative AI engines.</strong> When potential customers ask conversational questions in AI assistants (like ChatGPT, Perplexity, Claude, or Google AI Overviews), this optimization ensures your business is discovered, understood, and recommended as the trusted local choice.
      </span>
    )
  },
  {
    question: 'Can you guarantee that ChatGPT will recommend my business?',
    answer: (
      <span>
        <strong>No, AI recommendations cannot be honestly guaranteed by anyone.</strong> Large language models are probabilistic systems with proprietary algorithms. Anyone promising a "guaranteed #1 ranking on ChatGPT" is being deceptive. Our role is to optimize your verified entity credentials, licensing signals, and citation authority so AI models have the highest confidence data when evaluating your category.
      </span>
    )
  },
  {
    question: 'Does this replace traditional SEO?',
    answer: (
      <span>
        <strong>No, AI Discovery Marketing strengthens and modernizes your existing SEO rather than replacing it.</strong> Traditional SEO prioritizes keywords and 10 blue links on Google. AI discovery optimizes semantic knowledge graphs, qualitative review sentiment, and entity corroboration across the web. The two disciplines work hand-in-hand.
      </span>
    )
  },
  {
    question: 'Which AI platforms do you monitor?',
    answer: (
      <span>
        <strong>We monitor all primary consumer and enterprise AI assistants.</strong> This includes OpenAI ChatGPT (Search & GPT-4o), Anthropic Claude (Claude 3.5 & 3.7 with live web search), Google AI Overviews & Gemini, Perplexity AI, Microsoft Copilot, and Apple Intelligence.
      </span>
    )
  },
  {
    question: 'How long does it take to see results?',
    answer: (
      <span>
        <strong>Clients typically observe initial AI visibility benchmark gains within 60 to 90 days.</strong> Knowledge graph schema updates and directory citation synchronizations require 30 to 60 days to propagate across AI crawler retraining and live-indexing cycles.
      </span>
    )
  },
  {
    question: 'Do I need to change or rebuild my website?',
    answer: (
      <span>
        <strong>No, a full website rebuild is rarely required.</strong> Our AI Visibility Audit pinpoints high-leverage enhancements—primarily implementing machine-readable JSON-LD schema, publishing an llms.txt file, clarifying geographic service areas, and adding answer-first Q&A sections.
      </span>
    )
  },
  {
    question: 'Do you work with small and local businesses?',
    answer: (
      <span>
        <strong>Yes, local and regional service businesses are our primary focus.</strong> We specialize in high-value local trades—HVAC contractors, plumbers, roofers, dentists, med spas, law firms, and independent practices—who need local customer acquisition without enterprise bloat.
      </span>
    )
  }
];

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-t border-seen-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-seen-offwhite text-seen-dark border border-seen-border mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-seen-accent" />
            <span>Straightforward Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-seen-dark font-display tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-seen-muted mt-3">
            No jargon. No exaggerated promises. Just how AI discovery works for your business.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="border border-seen-border rounded-2xl overflow-hidden transition-all bg-seen-offwhite/50 hover:bg-seen-offwhite"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-seen-dark font-display">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-seen-border flex items-center justify-center text-seen-dark transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? 'rotate-180 bg-seen-dark text-white border-seen-dark' : 'bg-white'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-gray-700 leading-relaxed border-t border-seen-border/60 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Credibility reminder box */}
        <div className="mt-10 p-5 rounded-2xl bg-seen-offwhite border border-seen-border flex items-start gap-3.5 text-xs sm:text-sm text-seen-muted">
          <ShieldCheck className="w-5 h-5 text-seen-accent flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-seen-dark">Our Trust Pledge:</strong> AIGroSales never uses black-hat prompt injection, synthetic bot reviews, or deceptive claims. We build lasting local authority that withstands ongoing model updates from OpenAI, Google, and Perplexity.
          </p>
        </div>

      </div>
    </section>
  );
};
