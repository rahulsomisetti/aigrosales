import React from 'react';
import { Link } from 'react-router-dom';
import { INDUSTRIES } from '../data/industries';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';

interface WhoWeHelpPageProps {
  onOpenReportModal: () => void;
}

export const WhoWeHelpPage: React.FC<WhoWeHelpPageProps> = ({ onOpenReportModal }) => {
  const industriesArray = Object.values(INDUSTRIES);

  return (
    <div className="bg-seen-offwhite">
      
      {/* Header */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-seen-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-seen-dark text-white mb-4">
              <MapPin className="w-3.5 h-3.5 text-seen-accent" />
              Specialized Industry Verticals
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-seen-dark font-display tracking-tight leading-[1.1]">
              Built for Businesses That Depend on Local Trust.
            </h1>
            <p className="text-lg sm:text-xl text-seen-muted mt-6 leading-relaxed">
              We specialize in service businesses where customer transactions are high-value, high-trust, and immediate. Discover how AI search operates in your specific trade.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 p-3.5 rounded-2xl bg-seen-offwhite border border-seen-border text-xs text-seen-dark font-medium">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-seen-dark text-seen-accent font-bold">
                <Sparkles className="w-4 h-4" />
              </span>
              <span>
                <strong>BrightLocal 2026 U.S. Consumer Study:</strong> 45% of consumers now use AI tools for local recommendations (up from 6% in 2025).
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesArray.map((ind) => (
              <div
                key={ind.slug}
                className="bg-white rounded-3xl border border-seen-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={ind.heroImage}
                      alt={ind.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-seen-dark/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 text-xs font-semibold text-white bg-seen-dark/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/20">
                      {ind.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-3">
                    <h3 className="text-2xl font-bold text-seen-dark font-display">
                      {ind.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-seen-muted leading-relaxed line-clamp-3">
                      {ind.tagline}
                    </p>

                    {/* Common query preview */}
                    <div className="pt-2">
                      <span className="text-[11px] font-mono text-gray-400 uppercase block mb-1.5">
                        Top Customer Prompt:
                      </span>
                      <p className="text-xs font-semibold text-gray-800 bg-seen-offwhite p-2.5 rounded-lg border border-seen-border">
                        "{ind.commonAiPrompts[0]}"
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/industries/${ind.slug}`}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-seen-offwhite hover:bg-seen-dark text-seen-dark hover:text-white transition-all text-xs font-bold uppercase tracking-wider group"
                  >
                    <span>View {ind.name} Strategy</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="mt-16 bg-seen-dark text-white rounded-3xl p-8 sm:p-12 border border-seen-borderDark flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold font-display text-white">
                Don’t see your exact trade listed?
              </h3>
              <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                If your business relies on local customers in a defined geographic radius, AI Discovery Marketing applies to you. We work with auto repair shops, commercial contractors, veterinarians, and more.
              </p>
            </div>
            <button
              onClick={onOpenReportModal}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-seen-accent hover:bg-seen-accentDark text-white text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap self-start md:self-auto cursor-pointer"
            >
              <span>Get Custom Industry Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
