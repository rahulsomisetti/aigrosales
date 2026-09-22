import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { INSIGHTS } from '../data/insights';
import { 
  ArrowRight, 
  Clock, 
  BookOpen, 
  Sparkles, 
  FileText, 
  Download 
} from 'lucide-react';

interface InsightsPageProps {
  onOpenReportModal: () => void;
  onOpenSampleReport?: () => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ 
  onOpenReportModal,
  onOpenSampleReport 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Market Shifts', 'Technical Strategy', 'Best Practices', 'Research', 'Case Analysis'];

  const filteredArticles = selectedCategory === 'All'
    ? INSIGHTS
    : INSIGHTS.filter(a => a.category === selectedCategory);

  const downloadableGuides = [
    {
      title: 'The 2026 Local Business Guide to AI Discovery & GEO',
      type: 'Executive Whitepaper',
      desc: 'How LLMs construct local entity graphs and why traditional SEO backlinks fail in conversational search.',
      readTime: '12 min read'
    },
    {
      title: 'Texas Contractor Prompt Matrix: 100 Commercial AI Queries',
      type: 'Tactical Cheat Sheet',
      desc: 'The exact conversational queries homeowners use on ChatGPT & Perplexity for HVAC, Plumbing, and Roofing.',
      readTime: '8 min read'
    },
    {
      title: 'BrightLocal 2026 Research Brief: The 7.5x AI Surge',
      type: 'Industry Research Summary',
      desc: 'Data breakdown showing 45% of U.S. consumers now using AI for local business recommendations.',
      readTime: '6 min read'
    }
  ];

  return (
    <div className="bg-seen-offwhite min-h-screen">
      
      {/* Header */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-seen-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-seen-dark text-white mb-4">
                <BookOpen className="w-3.5 h-3.5 text-seen-accent" />
                Intelligence & Strategy Hub
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-seen-dark font-display tracking-tight leading-[1.1]">
                AIGroSales Insights.
              </h1>
              <p className="text-lg sm:text-xl text-seen-muted mt-6 leading-relaxed">
                Research, benchmarks, and tactical guides on how AI search engines evaluate, discover, and recommend businesses in 2026.
              </p>
            </div>

            {onOpenSampleReport && (
              <div className="flex-shrink-0">
                <button
                  onClick={onOpenSampleReport}
                  className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-seen-dark hover:bg-seen-accent text-white font-bold text-xs uppercase tracking-wider transition-all shadow-card cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-seen-accent" />
                  <span>Preview 12-Page Sample Report</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Resource & Guide Download Bar */}
      <section className="bg-seen-dark text-white py-12 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-seen-accent" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-seen-accent">
                Executive Strategy Briefs & Field Resources
              </span>
            </div>
            <span className="text-xs text-gray-400 font-mono">Complimentary Strategy Downloads</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {downloadableGuides.map((guide) => (
              <div
                key={guide.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-blue-300 block mb-1">
                    {guide.type} · {guide.readTime}
                  </span>
                  <h3 className="text-base font-bold font-display text-white mb-2 leading-snug">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {guide.desc}
                  </p>
                </div>

                <button
                  onClick={onOpenReportModal}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-seen-accent hover:text-white transition-colors pt-2 border-t border-white/10 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Access Intelligence Brief</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content & Categories */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-seen-dark text-white border-seen-dark shadow-sm'
                    : 'bg-white text-seen-muted border-seen-border hover:text-seen-dark hover:border-gray-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art) => (
              <article
                key={art.slug}
                className="bg-white rounded-3xl border border-seen-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={art.featuredImage}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-seen-dark/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold text-white">
                      {art.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-seen-muted font-medium">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {art.readTime}
                      </span>
                      <span>•</span>
                      <span>{art.publishedAt}</span>
                    </div>

                    <h2 className="text-xl font-bold text-seen-dark font-display group-hover:text-seen-accent transition-colors leading-snug">
                      <Link to={`/insights/${art.slug}`}>
                        {art.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-seen-muted leading-relaxed line-clamp-3">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-seen-border/60 mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={art.author.avatar}
                      alt={art.author.name}
                      className="w-6 h-6 rounded-full object-cover border border-seen-border"
                    />
                    <span className="text-xs font-medium text-seen-dark">
                      {art.author.name}
                    </span>
                  </div>

                  <Link
                    to={`/insights/${art.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-seen-accent group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter / Report Callout */}
          <div className="mt-16 bg-white rounded-3xl border border-seen-border p-8 sm:p-12 shadow-card flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-seen-accent mb-2 block">
                Stay Ahead of Search Shifts
              </span>
              <h3 className="text-2xl font-bold text-seen-dark font-display">
                Want to know when AI models update in Texas?
              </h3>
              <p className="text-sm text-seen-muted mt-2">
                We publish quarterly prompt telemetry briefs and breaking model updates for US service businesses.
              </p>
            </div>
            <button
              onClick={onOpenReportModal}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-seen-dark hover:bg-seen-accent text-white text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>Get Your AI Visibility Report</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
