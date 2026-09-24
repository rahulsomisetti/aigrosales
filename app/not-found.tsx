import Link from 'next/link';
import { ArrowRight, Home, Search, Layers, BookOpen } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-seen-offwhite min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-seen-border shadow-card">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-seen-dark text-white">
          <span className="w-2 h-2 rounded-full bg-seen-accent animate-pulse" />
          <span>404 · Page Not Found</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-seen-dark font-display tracking-tight leading-tight">
          This page couldn't be discovered.
        </h1>

        <p className="text-base sm:text-lg text-seen-muted max-w-md mx-auto leading-relaxed">
          The link you followed might be outdated or the page has moved. Let's get you back on track to exploring AI discovery.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left">
          <Link
            href="/"
            className="flex items-center gap-3 p-4 rounded-xl border border-seen-border hover:border-seen-accent hover:bg-blue-50/50 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-seen-accent flex items-center justify-center flex-shrink-0 group-hover:bg-seen-accent group-hover:text-white transition-colors">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-bold text-seen-dark block">Homepage</span>
              <span className="text-xs text-seen-muted">Return to overview</span>
            </div>
          </Link>

          <Link
            href="/services"
            className="flex items-center gap-3 p-4 rounded-xl border border-seen-border hover:border-seen-accent hover:bg-blue-50/50 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-seen-accent flex items-center justify-center flex-shrink-0 group-hover:bg-seen-accent group-hover:text-white transition-colors">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-bold text-seen-dark block">Our Services</span>
              <span className="text-xs text-seen-muted">AI marketing capabilities</span>
            </div>
          </Link>

          <Link
            href="/who-we-help"
            className="flex items-center gap-3 p-4 rounded-xl border border-seen-border hover:border-seen-accent hover:bg-blue-50/50 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-seen-accent flex items-center justify-center flex-shrink-0 group-hover:bg-seen-accent group-hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-bold text-seen-dark block">Who We Help</span>
              <span className="text-xs text-seen-muted">Industry-specific solutions</span>
            </div>
          </Link>

          <Link
            href="/insights"
            className="flex items-center gap-3 p-4 rounded-xl border border-seen-border hover:border-seen-accent hover:bg-blue-50/50 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-seen-accent flex items-center justify-center flex-shrink-0 group-hover:bg-seen-accent group-hover:text-white transition-colors">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-bold text-seen-dark block">Insights & Research</span>
              <span className="text-xs text-seen-muted">AI search analysis</span>
            </div>
          </Link>
        </div>

        <div className="pt-4 border-t border-seen-border">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-seen-accent hover:text-seen-accentDark transition-colors"
          >
            <span>Need direct assistance? Contact our Texas team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
