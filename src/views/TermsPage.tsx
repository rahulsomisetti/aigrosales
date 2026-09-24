import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ChevronLeft } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-seen-offwhite min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-seen-muted hover:text-seen-dark transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="bg-white rounded-3xl border border-seen-border p-8 sm:p-12 shadow-card space-y-6">
          <div className="border-b border-seen-border pb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-seen-accent block mb-2">
              Legal & Transparency
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-seen-dark font-display">
              Terms of Service
            </h1>
            <p className="text-xs text-seen-muted mt-2 font-mono">
              Last updated: September 2026 · AIGroSales Marketing LLC
            </p>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            <h2 className="text-lg font-bold text-seen-dark font-display">1. Nature of Services</h2>
            <p>
              AIGroSales provides AI-powered marketing for businesses ready to grow, digital entity optimization, citation management, and visibility telemetry for local businesses. AIGroSales is an independent marketing consultancy and is not affiliated with, sponsored by, or endorsed by OpenAI, Google, Anthropic, Perplexity, or Microsoft.
            </p>

            <h2 className="text-lg font-bold text-seen-dark font-display">2. No Guaranteed Algorithmic Outcomes</h2>
            <p>
              AI assistants, large language models, and search engines operate using dynamic, probabilistic systems outside the direct control of AIGroSales or any third-party agency. AIGroSales does not warrant or guarantee that any business will achieve a specific position, first-place recommendation, or guaranteed percentage of AI answers. We optimize the verifiable digital signals, schemas, and authority factors that influence model output.
            </p>

            <h2 className="text-lg font-bold text-seen-dark font-display">3. Accuracy of Client Information</h2>
            <p>
              Clients are solely responsible for ensuring that all business information provided to AIGroSales—including state licensing numbers, corporate registrations, insurance documentation, and service radii—is truthful, accurate, and compliant with applicable state and federal laws.
            </p>

            <h2 className="text-lg font-bold text-seen-dark font-display">4. Intellectual Property</h2>
            <p>
              All proprietary auditing methodologies, schemas, and brand assets created by AIGroSales remain the intellectual property of AIGroSales Marketing LLC.
            </p>

            <h2 className="text-lg font-bold text-seen-dark font-display">5. Jurisdiction</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law principles.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
