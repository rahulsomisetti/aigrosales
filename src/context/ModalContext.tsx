'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { LeadModal } from '@/components/LeadModal';
import { SampleReportModal } from '@/components/SampleReportModal';

export interface ModalPrefillOptions {
  industry?: string;
  tier?: string;
  businessName?: string;
  website?: string;
  city?: string;
}

interface ModalContextType {
  openReportModal: (options?: string | ModalPrefillOptions, tier?: string) => void;
  closeReportModal: () => void;
  openSampleReport: () => void;
  closeSampleReport: () => void;
  isReportModalOpen: boolean;
  isSampleReportOpen: boolean;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [sampleReportOpen, setSampleReportOpen] = useState(false);
  const [prefillIndustry, setPrefillIndustry] = useState<string | undefined>(undefined);
  const [prefillTier, setPrefillTier] = useState<string | undefined>(undefined);
  const [prefillBusinessName, setPrefillBusinessName] = useState<string | undefined>(undefined);
  const [prefillWebsite, setPrefillWebsite] = useState<string | undefined>(undefined);
  const [prefillCity, setPrefillCity] = useState<string | undefined>(undefined);

  const openReportModal = (
    industryOrOptions?: string | ModalPrefillOptions,
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

  const closeReportModal = () => {
    setReportModalOpen(false);
    setPrefillIndustry(undefined);
    setPrefillTier(undefined);
    setPrefillBusinessName(undefined);
    setPrefillWebsite(undefined);
    setPrefillCity(undefined);
  };

  const openSampleReport = () => setSampleReportOpen(true);
  const closeSampleReport = () => setSampleReportOpen(false);

  return (
    <ModalContext.Provider
      value={{
        openReportModal,
        closeReportModal,
        openSampleReport,
        closeSampleReport,
        isReportModalOpen: reportModalOpen,
        isSampleReportOpen: sampleReportOpen,
      }}
    >
      {children}
      <LeadModal
        isOpen={reportModalOpen}
        onClose={closeReportModal}
        prefillIndustry={prefillIndustry}
        prefillTier={prefillTier}
        prefillBusinessName={prefillBusinessName}
        prefillWebsite={prefillWebsite}
        prefillCity={prefillCity}
      />
      <SampleReportModal
        isOpen={sampleReportOpen}
        onClose={closeSampleReport}
        onOpenReportModal={openReportModal}
      />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
