import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
      {/* Sticky Header - hidden on dedicated PPC landing page to eliminate link leakage */}
      {!isPpcLandingPage && <Navbar onOpenReportModal={() => handleOpenReportModal()} />}

      {/* Dynamic Route Content */}
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
          
          {/* Dedicated Google Ads PPC Funnels */}
          <Route path="/lp" element={<GoogleAdsLandingPage onOpenReportModal={(opt) => handleOpenReportModal(opt)} onOpenSampleReport={() => setSampleReportOpen(true)} />} />
          <Route path="/google-ads" element={<GoogleAdsLandingPage onOpenReportModal={(opt) => handleOpenReportModal(opt)} onOpenSampleReport={() => setSampleReportOpen(true)} />} />
          <Route path="/get-seen" element={<GoogleAdsLandingPage onOpenReportModal={(opt) => handleOpenReportModal(opt)} onOpenSampleReport={() => setSampleReportOpen(true)} />} />

          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<HomePage onOpenReportModal={(opt, tier) => handleOpenReportModal(opt, tier)} onOpenSampleReport={() => setSampleReportOpen(true)} />} />
        </Routes>
      </main>

      {/* Global Footer - hidden on dedicated PPC landing page (which has its own streamlined compliance footer) */}
      {!isPpcLandingPage && <Footer onOpenReportModal={() => handleOpenReportModal()} />}

      {/* Global Multi-Step Lead Capture Modal */}
      <LeadModal
        isOpen={reportModalOpen}
        onClose={handleCloseReportModal}
        prefillIndustry={prefillIndustry}
        prefillTier={prefillTier}
        prefillBusinessName={prefillBusinessName}
        prefillWebsite={prefillWebsite}
        prefillCity={prefillCity}
      />

      {/* Global Interactive Sample Report Viewer Modal */}
      <SampleReportModal
        isOpen={sampleReportOpen}
        onClose={() => setSampleReportOpen(false)}
        onOpenReportModal={handleOpenReportModal}
      />

      {/* Global WhatsApp Quick Chat Widget (hidden on PPC page to avoid multiple floating overlays) */}
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
