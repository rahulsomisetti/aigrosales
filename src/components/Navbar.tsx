'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

interface NavbarProps {
  onOpenReportModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReportModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openReportModal } = useModal();

  const handleOpenReport = onOpenReportModal || (() => openReportModal());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Dedicated PPC funnels have their own streamlined header/footer
  if (pathname && ['/lp', '/google-ads', '/get-seen'].includes(pathname)) {
    return null;
  }

  const navLinks = [
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Services', path: '/services' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Who We Help', path: '/who-we-help' },
    { label: 'Why AIGroSales', path: '/#why-aigrosales' },
    { label: 'Insights', path: '/insights' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-seen-offwhite/95 backdrop-blur-md shadow-subtle border-b border-seen-border'
          : 'bg-seen-offwhite border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-seen-dark font-display flex items-center gap-1 transition-colors group-hover:text-seen-accent">
                <span className="text-seen-accent">AI</span>GroSales
                <span className="w-1.5 h-1.5 rounded-full bg-seen-accent inline-block"></span>
              </span>
              <span className="text-[10px] tracking-wide font-medium text-seen-muted -mt-0.5 hidden sm:inline-block">
                AI-powered marketing for businesses ready to grow
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.label}
                  href={link.path}
                  className={`text-sm font-medium transition-colors py-1 relative ${
                    isActive
                      ? 'text-seen-accent font-semibold'
                      : 'text-seen-dark/80 hover:text-seen-accent'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-seen-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleOpenReport}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-seen-dark hover:bg-seen-accent text-white text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-glow group cursor-pointer"
            >
              <span>Get Your AI Visibility Report</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-seen-dark hover:bg-seen-warmgray focus:outline-none focus:ring-2 focus:ring-seen-accent cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-seen-border bg-seen-offwhite px-4 pt-3 pb-6 shadow-card animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.path}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-seen-dark hover:bg-seen-warmgray transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-seen-border">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpenReport();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-seen-accent text-white font-semibold text-sm shadow-sm cursor-pointer"
              >
                <span>Get Your AI Visibility Report</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-seen-muted">
                <ShieldCheck className="w-3.5 h-3.5 text-seen-emerald" />
                <span>Texas-focused · Free confidential audit</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
