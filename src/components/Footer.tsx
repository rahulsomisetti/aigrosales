'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck, MapPin, Phone } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

interface FooterProps {
  onOpenReportModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReportModal }) => {
  const pathname = usePathname();
  const { openReportModal } = useModal();

  const handleOpenReport = onOpenReportModal || (() => openReportModal());

  // Hide on dedicated PPC funnels which have their own streamlined conversion footer
  if (pathname && ['/lp', '/google-ads', '/get-seen'].includes(pathname)) {
    return null;
  }

  return (
    <footer className="bg-seen-dark text-white pt-20 pb-12 border-t border-seen-borderDark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-seen-borderDark/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group focus:outline-none">
              <span className="text-3xl font-black tracking-tight text-white font-display flex items-center gap-1">
                <span className="text-seen-accent">AI</span>GroSales
                <span className="w-2 h-2 rounded-full bg-seen-accent inline-block"></span>
              </span>
              <span className="text-xs font-medium text-gray-400 block mt-1">
                AI-powered marketing for businesses ready to grow
              </span>
            </Link>
            
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              We help ambitious small and local businesses become easier for AI assistants to discover, understand, and recommend when prospective customers ask who to hire.
            </p>

            <div className="pt-2 space-y-1.5 text-xs font-medium text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-seen-accent flex-shrink-0" />
                <span>El Dorado Blvd, Houston, TX 77059, USA</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <Phone className="w-4 h-4 text-seen-accent flex-shrink-0" />
                <a href="tel:+13468699154" className="hover:text-white transition-colors">
                  +1 (346) 869-9154
                </a>
                <span className="text-gray-600">·</span>
                <a
                  href="https://wa.me/13468699154?text=Hi%20AIGroSales%20team!%20I'd%20like%20to%20learn%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
                >
                  WhatsApp Us
                </a>
                <span className="text-gray-600">·</span>
                <a
                  href="https://www.linkedin.com/company/aigrosales/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A66C2] hover:text-blue-400 transition-colors font-semibold inline-flex items-center gap-1"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={handleOpenReport}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-seen-accent hover:bg-seen-accentDark text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Get Your AI Visibility Report
              </button>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About AIGroSales
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/who-we-help" className="text-gray-400 hover:text-white transition-colors">
                  Who We Help
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing & Tiers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/aigrosales/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#audit" className="text-gray-400 hover:text-white transition-colors">
                  AI Visibility Audit
                </Link>
              </li>
              <li>
                <Link href="/services#entity" className="text-gray-400 hover:text-white transition-colors">
                  Digital Entity Optimization
                </Link>
              </li>
              <li>
                <Link href="/services#authority" className="text-gray-400 hover:text-white transition-colors">
                  Local Authority & Signals
                </Link>
              </li>
              <li>
                <Link href="/services#website" className="text-gray-400 hover:text-white transition-colors">
                  Website Architecture
                </Link>
              </li>
              <li>
                <Link href="/services#reputation" className="text-gray-400 hover:text-white transition-colors">
                  Reputation & Reviews
                </Link>
              </li>
              <li>
                <Link href="/services#monitoring" className="text-gray-400 hover:text-white transition-colors">
                  AI Monitoring
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">
              Resources & Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/insights" className="text-gray-400 hover:text-white transition-colors">
                  Insights & Research
                </Link>
              </li>
              <li>
                <Link href="/ai-visibility-report" className="text-gray-400 hover:text-white transition-colors">
                  AI Discovery Report
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2 font-medium text-gray-400">
            <span className="font-bold text-white tracking-wide font-display">AIGroSales</span>
            <span>—</span>
            <span>AI-powered marketing for businesses ready to grow.</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/aigrosales/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AIGroSales on LinkedIn"
              className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <span className="inline-flex items-center gap-1.5 text-gray-400">
              <ShieldCheck className="w-3.5 h-3.5 text-seen-accent" />
              Texas · USA
            </span>
            <span>© {new Date().getFullYear()} AIGroSales Marketing LLC. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
