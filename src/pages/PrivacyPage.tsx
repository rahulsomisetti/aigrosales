import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronLeft } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-seen-offwhite min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link
          to="/"
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
              Privacy Policy
            </h1>
            <p className="text-xs text-seen-muted mt-2 font-mono">
              Last updated: September 2026 · AIGroSales Marketing LLC
            </p>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            <h2 className="text-lg font-bold text-seen-dark font-display">1. Information We Collect</h2>
            <p>
              When you request an AI Visibility Report or communicate with AIGroSales, we collect information you voluntarily provide, including your name, business name, work email address, telephone number, business website, and geographic service locations.
            </p>

            <h2 className="text-lg font-bold text-seen-dark font-display">2. How We Use Your Information</h2>
            <p>
              We use your information exclusively to perform local AI visibility benchmarks, diagnose entity data discrepancies, prepare your confidential audit report, and communicate with you regarding our marketing services. We do not sell, rent, or trade your contact details to third-party brokers or advertisers.
            </p>

            <h2 className="text-lg font-bold text-seen-dark font-display">3. Public Digital Entity Data</h2>
            <p>
              To evaluate how AI models discover your business, AIGroSales queries publicly available knowledge graphs, search engine indexes, state licensing registries, and third-party review repositories. This analysis evaluates public commercial information only.
            </p>

            <h2 className="text-lg font-bold text-seen-dark font-display">4. Data Security</h2>
            <p>
              We maintain appropriate technical, administrative, and physical safeguards designed to protect the personal and business information submitted through our website against unauthorized access or disclosure.
            </p>

            <h2 className="text-lg font-bold text-seen-dark font-display">5. Contact</h2>
            <p>
              If you have questions regarding this Privacy Policy or your data, please contact us at <a href="mailto:privacy@aigrosales.com" className="text-seen-accent font-semibold underline">privacy@aigrosales.com</a>.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
