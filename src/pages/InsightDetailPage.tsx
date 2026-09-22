import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { INSIGHTS } from '../data/insights';
import { ArrowRight, ChevronLeft, Clock, Share2, ShieldCheck, Sparkles } from 'lucide-react';

interface InsightDetailPageProps {
  onOpenReportModal: () => void;
}

export const InsightDetailPage: React.FC<InsightDetailPageProps> = ({ onOpenReportModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? INSIGHTS.find(a => a.slug === slug) : null;

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  return (
    <div className="bg-seen-offwhite min-h-screen pb-24">
      
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          to="/insights"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-seen-muted hover:text-seen-dark transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to All Insights</span>
        </Link>
      </div>

      {/* Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Header Metadata */}
        <div className="space-y-4 mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-seen-accent/10 text-seen-accent border border-seen-accent/20">
            {article.category}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-seen-dark font-display tracking-tight leading-[1.15]">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-seen-muted leading-relaxed">
            {article.excerpt}
          </p>

          <div className="pt-4 border-t border-seen-border flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-10 h-10 rounded-full object-cover border border-seen-border"
              />
              <div>
                <span className="text-sm font-bold text-seen-dark block">
                  {article.author.name}
                </span>
                <span className="text-xs text-seen-muted">
                  {article.author.role} · {article.publishedAt}
                </span>
              </div>
            </div>

            <span className="text-xs text-seen-muted font-mono flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden mb-12 shadow-card border border-seen-border max-h-[460px]">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="bg-white rounded-3xl border border-seen-border p-8 sm:p-12 shadow-card space-y-6 text-base sm:text-lg text-gray-800 leading-relaxed font-sans">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Inline CTA Callout */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-seen-dark text-white border border-seen-borderDark space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-300">
              <Sparkles className="w-4 h-4" />
              <span>Put This Research into Practice</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Where does your business appear in AI search?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl">
              Don’t guess how ChatGPT or Perplexity represents your business. Get a comprehensive AI Visibility Report benchmarking your trade across 100+ local queries.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenReportModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-seen-accent hover:bg-seen-accentDark text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Get Your AI Visibility Report</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </article>

    </div>
  );
};
