import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Sparkles, 
  Database,
  ExternalLink,
  FileCode,
  Globe 
} from 'lucide-react';
import { OpenReportModalButton } from '@/components/ModalButtons';

interface AboutPageProps {
  onOpenReportModal?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenReportModal }) => {
  return (
    <div className="bg-seen-offwhite">
      
      {/* Header */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-seen-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-seen-dark text-white mb-4">
              <Sparkles className="w-3.5 h-3.5 text-seen-accent" />
              The AIGroSales Story
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-seen-dark font-display tracking-tight leading-[1.1]">
              Built for the Next Generation of Search.
            </h1>
            <p className="text-lg sm:text-xl text-seen-muted mt-6 leading-relaxed">
              We started AIGroSales because we saw the biggest transformation in consumer behavior since 1998: people stopped clicking through ten blue links and started asking AI who to hire.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-bold text-seen-dark font-display">
                The Shift From Keywords to Knowledge Graphs
              </h2>

              <p>
                For over two decades, local marketing was dominated by a familiar formula: bid on Google AdWords, optimize title tags, buy directories, and collect 5-star reviews.
              </p>

              <p>
                In 2024 and 2025, that began breaking down. With ChatGPT, Perplexity, and Google AI Overviews handling hundreds of millions of daily queries, customers began asking detailed, natural language questions: <em>"Find me a dependable Dallas plumber who won’t charge an arm and a leg after hours."</em>
              </p>

              <p>
                The AI answers these questions not by indexing pages, but by evaluating structured entities, cross-referencing state license registries, and analyzing customer sentiment nuances.
              </p>

              <p>
                Traditional marketing agencies were caught unprepared, continuing to sell outdated keyword packages. We launched <strong>AIGroSales</strong> — AI-powered marketing for businesses ready to grow.
              </p>

              <div className="pt-6 border-t border-seen-border">
                <h3 className="text-xl font-bold text-seen-dark font-display mb-4">
                  Why Texas First?
                </h3>
                <p className="text-sm sm:text-base text-seen-muted leading-relaxed">
                  Texas represents the most dynamic, fast-growing local business economy in the nation. From Dallas-Fort Worth to Greater Austin, Houston, and San Antonio, thousands of high-value service contractors, medical practices, and professionals compete in dense markets. It is the perfect proving ground for next-generation discovery marketing. While we serve businesses nationwide, our roots and primary benchmarks originate in Texas.
                </p>
              </div>
            </div>

            {/* Right Card: Principles & Guarantees */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white rounded-3xl border border-seen-border p-8 shadow-card space-y-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-seen-accent">
                  <ShieldCheck className="w-4 h-4" />
                  <span>The AIGroSales Trust Principles</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-bold text-seen-dark font-display">
                      1. No False Guarantees
                    </h4>
                    <p className="text-xs text-seen-muted mt-1 leading-relaxed">
                      We never claim to "own" or "hack" ChatGPT or Google. We build legitimate, machine-readable digital authority that models reward organically.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-seen-border/60">
                    <h4 className="text-base font-bold text-seen-dark font-display">
                      2. Measurable Telemetry
                    </h4>
                    <p className="text-xs text-seen-muted mt-1 leading-relaxed">
                      We test actual conversational prompts, tracking before-and-after recommendation rates so you see concrete progress.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-seen-border/60">
                    <h4 className="text-base font-bold text-seen-dark font-display">
                      3. Human Strategy + AI Speed
                    </h4>
                    <p className="text-xs text-seen-muted mt-1 leading-relaxed">
                      We use AI tools for rapid data ingestion, but senior American marketers craft the strategy and communicate with you directly.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-seen-border">
                  <OpenReportModalButton
                    className="w-full py-3 rounded-xl bg-seen-dark hover:bg-seen-accent text-white font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer text-center"
                  >
                    Get Your AI Visibility Report
                  </OpenReportModalButton>
                </div>
              </div>

              {/* Texas Badge */}
              <div className="bg-seen-dark text-white p-6 rounded-2xl border border-seen-borderDark flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-seen-accent/20 border border-seen-accent/40 flex items-center justify-center text-seen-accent flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-gray-400 block">Headquarters</span>
                  <span className="text-sm font-bold text-white">El Dorado Blvd, Houston, TX 77059, USA</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Entity Validation & Disambiguation Section */}
      <section className="py-16 lg:py-24 bg-white border-t border-seen-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-seen-offwhite text-seen-accent border border-seen-border mb-3">
              <Database className="w-3.5 h-3.5" />
              Entity Disambiguation & Validation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-seen-dark font-display tracking-tight">
              Knowledge Graph & Corporate Entity Verification
            </h2>
            <p className="text-base text-seen-muted mt-3 leading-relaxed">
              To guarantee zero hallucination in AI retrieval systems and search graphs, AIGroSales maintains verified entity validation credentials, canonical schemas, and external knowledge links.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Entity Block 1: Legal & NAP */}
            <div className="p-6 rounded-2xl bg-seen-offwhite border border-seen-border space-y-4">
              <div className="flex items-center gap-2 text-seen-dark font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-seen-accent" />
                <span>Legal Entity & NAP</span>
              </div>
              <ul className="text-xs sm:text-sm space-y-2 text-gray-700">
                <li><strong className="text-seen-dark">Legal Name:</strong> AIGroSales Marketing LLC</li>
                <li><strong className="text-seen-dark">Operating Brand:</strong> AIGroSales</li>
                <li><strong className="text-seen-dark">Headquarters:</strong> El Dorado Blvd, Houston, TX 77059, USA</li>
                <li><strong className="text-seen-dark">Coordinates:</strong> 29.5636° N, -95.1275° W</li>
                <li><strong className="text-seen-dark">Phone:</strong> +1 (346) 869-9154</li>
                <li><strong className="text-seen-dark">Email:</strong> hello@aigrosales.com</li>
              </ul>
            </div>

            {/* Entity Block 2: Industry Classifications */}
            <div className="p-6 rounded-2xl bg-seen-offwhite border border-seen-border space-y-4">
              <div className="flex items-center gap-2 text-seen-dark font-bold text-sm">
                <Globe className="w-4 h-4 text-seen-accent" />
                <span>Industry Classifications</span>
              </div>
              <ul className="text-xs sm:text-sm space-y-2 text-gray-700">
                <li><strong className="text-seen-dark">Primary NAICS:</strong> 541810 (Advertising Agencies)</li>
                <li><strong className="text-seen-dark">Secondary NAICS:</strong> 541511 (Custom Computer Programming)</li>
                <li><strong className="text-seen-dark">ISIC V4:</strong> 7310 (Advertising)</li>
                <li><strong className="text-seen-dark">Jurisdiction:</strong> Texas, United States</li>
                <li><strong className="text-seen-dark">Target Scope:</strong> US Local & Regional Service Enterprises</li>
              </ul>
            </div>

            {/* Entity Block 3: Machine-Readable Endpoints */}
            <div className="p-6 rounded-2xl bg-seen-offwhite border border-seen-border space-y-4">
              <div className="flex items-center gap-2 text-seen-dark font-bold text-sm">
                <FileCode className="w-4 h-4 text-seen-accent" />
                <span>Machine-Readable Endpoints</span>
              </div>
              <div className="space-y-2.5 text-xs sm:text-sm">
                <a 
                  href="/robots.txt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-seen-border hover:border-seen-accent transition-colors text-seen-dark font-medium group"
                >
                  <span className="font-mono text-xs">/robots.txt</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-seen-accent" />
                </a>
                <a 
                  href="/llms.txt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-seen-border hover:border-seen-accent transition-colors text-seen-dark font-medium group"
                >
                  <span className="font-mono text-xs">/llms.txt</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-seen-accent" />
                </a>
                <a 
                  href="/entity-validation.json" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-seen-border hover:border-seen-accent transition-colors text-seen-dark font-medium group"
                >
                  <span className="font-mono text-xs">/entity-validation.json</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-seen-accent" />
                </a>
                <a 
                  href="/sitemap.xml" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-seen-border hover:border-seen-accent transition-colors text-seen-dark font-medium group"
                >
                  <span className="font-mono text-xs">/sitemap.xml</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-seen-accent" />
                </a>
              </div>
            </div>

          </div>

          {/* Wikidata Entity Anchors */}
          <div className="mt-8 p-6 rounded-2xl bg-seen-offwhite border border-seen-border">
            <h4 className="text-xs font-bold uppercase tracking-wider text-seen-muted mb-3">
              Knowledge Graph Semantic Topic Anchors (Wikidata)
            </h4>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-md bg-white border border-seen-border font-mono text-gray-700">
                Artificial Intelligence (Q11660)
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-seen-border font-mono text-gray-700">
                Search Engine Optimization (Q180711)
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-seen-border font-mono text-gray-700">
                Large Language Model (Q115305900)
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-seen-border font-mono text-gray-700">
                Generative AI (Q117211832)
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-seen-border font-mono text-gray-700">
                Local Search (Q6664210)
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-seen-border font-mono text-gray-700">
                Knowledge Graph (Q33002955)
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-seen-border font-mono text-gray-700">
                Entity Disambiguation (Q5381832)
              </span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
