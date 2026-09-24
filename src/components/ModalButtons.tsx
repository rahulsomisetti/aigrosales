'use client';

import React from 'react';
import { useModal, ModalPrefillOptions } from '@/context/ModalContext';

export interface OpenReportModalButtonProps {
  children: React.ReactNode;
  className?: string;
  options?: string | ModalPrefillOptions;
  tier?: string;
  title?: string;
  'aria-label'?: string;
}

export function OpenReportModalButton({
  children,
  className,
  options,
  tier,
  title,
  'aria-label': ariaLabel,
}: OpenReportModalButtonProps) {
  const { openReportModal } = useModal();
  return (
    <button
      type="button"
      onClick={() => openReportModal(options, tier)}
      className={className}
      title={title}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export interface OpenSampleReportButtonProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  'aria-label'?: string;
}

export function OpenSampleReportButton({
  children,
  className,
  title,
  'aria-label': ariaLabel,
}: OpenSampleReportButtonProps) {
  const { openSampleReport } = useModal();
  return (
    <button
      type="button"
      onClick={() => openSampleReport()}
      className={className}
      title={title}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
