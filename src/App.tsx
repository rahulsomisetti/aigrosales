import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';
import { SampleReportModal } from './components/SampleReportModal';
import { ScrollToTop } from './components/ScrollToTop';
import { WhatsAppWidget } from './components/WhatsAppWidget';

// Pages
import { HomePage } from './pages/HomePage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ServicesPage } from './pages/ServicesPage';
import { PricingPage } from './pages/PricingPage';
import { WhoWeHelpPage } from './pages/WhoWeHelpPage';
import { IndustryDetailPage } from './pages/IndustryDetailPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { InsightDetailPage } from './pages/InsightDetailPage';
import { ContactPage } from './pages/ContactPage';
import { ReportLandingPage } from './pages/ReportLandingPage';
import { GoogleAdsLandingPage } from './pages/GoogleAdsLandingPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

const SEO: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata: Record<string, { title: string; description: string }> = {
      '/': {
        title: 'AIGroSales | AI-Powered Marketing for Businesses Ready to Grow',
        description: 'AIGroSales helps local and growing businesses become visible and recommended when customers use AI assistants and search.'
      },
      '/services': {
        title: 'AI Marketing Services for Local Businesses | AIGroSales',
        description: 'AI visibility, entity optimization, local authority, reputation and AI search marketing services for growing businesses.'
      },
      '/pricing': {
        title: 'AI Marketing Pricing | AIGroSales',
        description: 'Explore AIGroSales AI discovery marketing and visibility management plans for local and professional service businesses.'
      },
      '/how-it-works': {
        title: 'How AI Discovery Marketing Works | AIGroSales',
        description: 'See how AIGroSales improves business visibility across AI assistants, search and local discovery.'
      },
      '/who-we-help': {
        title: 'Industries We Help | AIGroSales',
        description: 'AI discovery marketing for HVAC, plumbing, roofing, dental, legal, med spa and other local service businesses.'
      },
      '/about': {
        title: 'About AIGroSales | AI Discovery Marketing',
        description: 'Learn about AIGroSales and our approach to AI discovery, entity authority and local business growth.'
      },
      '/insights': {
        title: 'AI Marketing Insights | AIGroSales',
        description: 'Research and practical insights on AI search, local discovery, entity optimization and generative engine visibility.'
      },
      '/contact': {
        title: 'Contact AIGroSales | AI Marketing & Growth',
        description: 'Talk to AIGroSales about AI visibility, local discovery and growth marketing for your business.'
      },
      '/ai-visibility-report': {
        title: 'AI Visibility Report | AIGroSales',
        description: 'See how your business appears across AI search and recommendation systems with an AIGroSales visibility report.'
      }
    };

    const industryNames: Record<string, string> = {
      hvac: 'HVAC Companies',
      plumbing: 'Plumbing Companies',
      roofing: 'Roofing Companies',
      dental: 'Dental Practices',
      'law-firms': 'Law Firms',
      'med-spa': 'Med Spas'
    };

    const industryMatch = pathname.match(/^\/industries\/([^/]+)$/);
    if (industryMatch && industryNames[industryMatch[1]]) {
      const name = industryNames[industryMatch[1]];
      metadata[pathname] = {
        title: `AI Marketing for ${name} | AIGroSales`,
        description: `Help your ${name.toLowerCase()} become more visible and discoverable when customers use AI assistants and search.`
      };
    }

    const insightMatch = pathname.match(/^\/insights\/([^/]+)$/);
    if (insightMatch) {
      metadata[pathname] = {
        title: 'AI Search & Marketing Insights | AIGroSales',
        description: 'Practical research and strategy on AI discovery marketing, local search and digital entity optimization.'
      };
    }

    const data = metadata[pathname] ?? metadata['/'];
    document.title = data.title;

    const setMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('description', data.description);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://aigrosales.com${pathname === '/' ? '/' : pathname}`;
  }, [pathname]);

  return null;
};

function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center bg-seen-offwhite">
      <p className="text-xs font-bold uppercase tracking-widest text-seen-accent mb-3">404</p>
      <h1 className="text-3xl font-black text-seen-dark font-display">Page not found</h1>
      <p className="mt-3 text-sm text-seen-muted">The page you requested does not exist.</p>
      <a href="/" className="mt-6 px-6 py-3 rounded-full bg-seen-dark text-white text-sm font-semibold">Back to AIGroSales</a>
    </div>
  );
}

function AppContent() {
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [sampleReportOpen, setSampleReportOpen] = useState(false);
  const [prefillIndustry, setPrefillIndustry] = useState<string | undefined>(undefined);
  const [prefillTier, setPrefillTier] = useState<string | undefined>(undefined);
  const [prefillBusinessName, setPrefillBusinessName] = useState<string | undefined>(undefined);
  const [prefillWebsite, setPrefillWebsite] = useState<string | undefined>(undefined);
  const [prefillCity, setPrefillCity] = useState<string | undefined>(undefined);

  const location = useLocation();
  const isPpcLandingPage = ['/lp', '/google-ads', '/get-seen'].includes(location.pathname);

  const handleOpenReportModal = (
    industryOrOptions?: string | { industry?: string; tier?: string; businessName?: string; website?: string; city?: string },
    tier?: string
  ) => {
    if (typeof industryOrOptions === 'object' && industryOrOptions !== null) {
      setPrefillIndustry(industryOrOptions.industry);
      setPrefillTier(industryOrOptions.tier);
      setPrefillBusinessName(industryOrOptions.businessName);
      setPrefillWebsite(industryOrOptions.website);
      setPrefillCity(industryOrOptions.city);
    } else {
      setPrefillIndustry(industryOrOptions);
      setPrefillTier(tier);
      setPrefillBusinessName(undefined);
      setPrefillWebsite(undefined);
      setPrefillCity(undefined);
    }
    setReportModalOpen(true);
  };

  const handleCloseReportModal = () => {
    setReportModalOpen(false);
    setPrefillIndustry(undefined);
    setPrefillTier(undefined);
    setPrefillBusinessName(undefined);
    setPrefillWebsite(undefined);
    setPrefillCity(undefined);
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-seen-accent selection:text-white">
      <SEO />
      {!isPpcLandingPage && <Navbar onOpenReportModal={() => handleOpenReportModal()} />}

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onOpenReportModal={(opt, tier) => handleOpenReportModal(opt, tier)} onOpenSampleReport={() => setSampleReportOpen(true)} />} />
          <Route path="/how-it-works" element={<HowItWorksPage onOpenReportModal={() => handleOpenReportModal()} />} />
          <Route path="/services" element={<ServicesPage onOpenReportModal={(ind, tier) => handleOpenReportModal(ind, tier)} />} />
          <Route path="/pricing" element={<PricingPage onOpenReportModal={(ind, tier) => handleOpenReportModal(ind, tier)} />} />
          <Route path="/who-we-help" element={<WhoWeHelpPage onOpenReportModal={() => handleOpenReportModal()} />} />
          <Route path="/industries/:slug" element={<IndustryDetailPage onOpenReportModal={(opt) => handleOpenReportModal(opt)} />} />
          <Route path="/about" element={<AboutPage onOpenReportModal={() => handleOpenReportModal()} />} />
          <Route path="/insights" element={<InsightsPage onOpenReportModal={() => handleOpenReportModal()} onOpenSampleReport={() => setSampleReportOpen(true)} />} />
          <Route path="/insights/:slug" element={<InsightDetailPage onOpenReportModal={() => handleOpenReportModal()} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ai-visibility-report" element={<ReportLandingPage onOpenReportModal={(opt) => handleOpenReportModal(opt)} onOpenSampleReport={() => setSampleReportOpen(true)} />} />
          <Route path="/lp" element={<GoogleAdsLandingPage onOpenReportModal={(opt) => handleOpenReportModal(opt)} onOpenSampleReport={() => setSampleReportOpen(true)} />} />
          <Route path="/google-ads" element={<GoogleAdsLandingPage onOpenReportModal={(opt) => handleOpenReportModal(opt)} onOpenSampleReport={() => setSampleReportOpen(true)} />} />
          <Route path="/get-seen" element={<GoogleAdsLandingPage onOpenReportModal={(opt) => handleOpenReportModal(opt)} onOpenSampleReport={() => setSampleReportOpen(true)} />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />

          {/* Preserve previously published industry URLs and redirect them to canonical routes. */}
          <Route path="/who-we-help/hvac" element={<Navigate to="/industries/hvac" replace />} />
          <Route path="/who-we-help/plumbing" element={<Navigate to="/industries/plumbing" replace />} />
          <Route path="/who-we-help/roofing" element={<Navigate to="/industries/roofing" replace />} />
          <Route path="/who-we-help/dental" element={<Navigate to="/industries/dental" replace />} />
          <Route path="/who-we-help/legal" element={<Navigate to="/industries/law-firms" replace />} />
          <Route path="/who-we-help/medspa" element={<Navigate to="/industries/med-spa" replace />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {!isPpcLandingPage && <Footer onOpenReportModal={() => handleOpenReportModal()} />}

      <LeadModal
        isOpen={reportModalOpen}
        onClose={handleCloseReportModal}
        prefillIndustry={prefillIndustry}
        prefillTier={prefillTier}
        prefillBusinessName={prefillBusinessName}
        prefillWebsite={prefillWebsite}
        prefillCity={prefillCity}
      />

      <SampleReportModal
        isOpen={sampleReportOpen}
        onClose={() => setSampleReportOpen(false)}
        onOpenReportModal={handleOpenReportModal}
      />

      {!isPpcLandingPage && <WhatsAppWidget />}
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
