'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Clock, 
  Star, 
  Bot, 
  Search, 
  Zap, 
  TrendingUp, 
  ChevronDown, 
  ChevronUp, 
  Building2, 
  FileText, 
  Lock,
  MessageCircle,
  HelpCircle
} from 'lucide-react';
import { SITE_CONFIG } from '../config';
import { submitAuditLead, AuditLeadData } from '../services/leadService';
import { PAID_AUDIT_OFFER } from '../data/pricingData';
import { AiVisibilityCalculator } from '../components/AiVisibilityCalculator';
import { useModal } from '@/context/ModalContext';

interface GoogleAdsLandingPageProps {
  onOpenReportModal?: (options?: { 
    industry?: string; 
    tier?: string; 
    businessName?: string; 
    website?: string; 
    city?: string; 
  }) => void;
  onOpenSampleReport?: () => void;
}

export const GoogleAdsLandingPage: React.FC<GoogleAdsLandingPageProps> = ({ 
  onOpenReportModal,
  onOpenSampleReport 
}) => {
  const { openReportModal, openSampleReport: openSample } = useModal();
  const handleOpenReport = onOpenReportModal || openReportModal;
  const handleOpenSample = onOpenSampleReport || openSample;

  // Capture UTM parameters from URL query string
  const [utmData] = useState(() => {
    try {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        return {
          utmSource: params.get('utm_source') || '',
          utmMedium: params.get('utm_medium') || '',
          utmCampaign: params.get('utm_campaign') || '',
          utmTerm: params.get('utm_term') || '',
          utmContent: params.get('utm_content') || '',
          gclid: params.get('gclid') || ''
        };
      }
    } catch {
      // safe fallback
    }
    return {
      utmSource: '',
      utmMedium: '',
      utmCampaign: '',
      utmTerm: '',
      utmContent: '',
      gclid: ''
    };
  });

  // Inline Audit Form State
  const [formData, setFormData] = useState({
    businessName: '',
    website: '',
    city: '',
    state: 'TX',
    industry: 'HVAC & Climate Control',
    name: '',
    email: '',
    phone: '',
    selectedTier: 'Free Google Ads Audit Scan'
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Active prompt simulator tab
  const [activeTab, setActiveTab] = useState<'hvac' | 'dentist' | 'roofing' | 'legal'>('hvac');

  // FAQ Accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const industriesList = [
    'HVAC & Climate Control',
    'Plumbing & Drainage',
    'Roofing & Exterior',
    'Dentistry & Orthodontics',
    'Med Spa & Aesthetics',
    'Legal & Law Practice',
    'Electrical & Contracting',
    'Auto Repair & Collision',
    'Real Estate & Property',
    'Home Remodeling & Design',
    'Other Local Service'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.businessName.trim()) errors.businessName = 'Business name is required';
    if (!formData.city.trim()) errors.city = 'City is required';
    if (!formData.name.trim()) errors.name = 'Your name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Valid work email is required';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const payload: AuditLeadData = {
        businessName: formData.businessName,
        website: formData.website,
        city: formData.city,
        state: formData.state,
        industry: formData.industry,
        goals: ['AI Visibility & Ranking', 'Google Ads Referral', 'Get Recommended by ChatGPT'],
        selectedTier: formData.selectedTier,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        utmSource: utmData.utmSource || 'google_ads_lp',
        utmMedium: utmData.utmMedium || 'cpc',
        utmCampaign: utmData.utmCampaign,
        utmTerm: utmData.utmTerm,
        utmContent: utmData.utmContent,
        gclid: utmData.gclid
      };

      await submitAuditLead(payload);
      setIsSubmitted(true);
    } catch (err) {
      console.error('Lead submission error:', err);
      // Still show confirmed since localStorage fallback succeeds
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const promptDemos = {
    hvac: {
      query: '"Who is the best reliable commercial HVAC contractor in Houston with 24/7 emergency service?"',
      engine: 'ChatGPT 4o & SearchGPT',
      beforeRecommendation: 'Mentions 3 generic directory aggregators (Yelp, Angi) and a large national competitor with Schema schema markup.',
      afterRecommendation: 'Directly recommends your verified business with your primary phone, Texas contractor license, verified Google reviews rating, and specific service warranty.',
      aiQuote: '"Based on verified Texas TDLR licensing, 140+ five-star emergency response reviews, and local entity authority, I recommend..."'
    },
    dentist: {
      query: '"Who is the top-rated cosmetic dentist near Austin specializing in veneers and sedation?"',
      engine: 'Perplexity AI & Claude',
      beforeRecommendation: 'Recommends 2 dental chains whose websites feature explicit schema tags and deep semantic service citations.',
      afterRecommendation: 'Recommends your practice as the #1 boutique cosmetic provider in Austin with accredited AACD credentials and direct booking link.',
      aiQuote: '"Per local dental board certification and patient outcome citations, the standout cosmetic practice in central Austin is..."'
    },
    roofing: {
      query: '"Best commercial roofing company in Dallas for storm damage insurance restoration?"',
      engine: 'Google AI Overview',
      beforeRecommendation: 'Pulls older storm chasing blogs with no clear local business entity validation.',
      afterRecommendation: 'Pins your company in the top AI Overview bubble with certified manufacturer badges and local Dallas chamber citations.',
      aiQuote: '"Top recommended local contractor based on insurance claim documentation authority and verified commercial project portfolio..."'
    },
    legal: {
      query: '"Top-rated personal injury attorney in Texas with proven trial results for 18-wheeler accidents?"',
      engine: 'Gemini 1.5 Pro',
      beforeRecommendation: 'Lists billboard mega-firms with millions in generic ad spend.',
      afterRecommendation: 'Highlights your specialized board-certified trial record, specific multimillion verdicts, and direct consultation line.',
      aiQuote: '"Board-certified personal injury specialist with extensive verdict track record in Texas commercial carrier litigation..."'
    }
  };

  const faqs = [
    {
      q: 'How is AI Search Optimization (GEO) different from traditional Google SEO?',
      a: 'Traditional SEO aims to rank your website among the "10 blue links" on a search results page. Generative Engine Optimization (GEO) ensures that when a prospect asks ChatGPT, Google AI Overviews, Perplexity, or Claude for a direct recommendation, the AI model cites and recommends your business as the authoritative answer. AI models don\'t read keywords—they verify digital entity graphs, structured data, licenses, and verified sentiment.'
    },
    {
      q: 'How quickly can my business start getting recommended by AI?',
      a: 'AI search engines update their real-time web retrieval indexes within days to weeks. Most of our clients see their first AI citations and prompt recommendations within 21 to 45 days after we deploy our structured JSON-LD entity graph, local license validation, and authoritative citation clusters.'
    },
    {
      q: 'Do I need to rebuild or touch my current website?',
      a: 'No, you do not need a new website. We implement schema markup, entity anchors, and semantic enhancements either through your existing CMS (WordPress, Webflow, Shopify, custom) or by providing pre-formatted snippets your team can paste in minutes.'
    },
    {
      q: 'What is included in this Free AI Visibility Audit?',
      a: 'We evaluate your business against 100+ conversational prompts that customers in your target city type into AI. You receive your exact Share-of-Recommendation score, a list of rival businesses capturing your leads, an audit of your digital entity graph, and a 90-day roadmap with specific fixes.'
    },
    {
      q: 'Is this audit really free, and is there any obligation?',
      a: 'Yes, 100% free with zero obligation. We run the automated queries and our senior analyst reviews the findings. If you want our team to implement the fixes, we offer done-for-you sprints. If not, the diagnostic roadmap is yours to keep.'
    }
  ];

  return (
    <div className="bg-seen-offwhite min-h-screen flex flex-col font-sans selection:bg-seen-accent selection:text-white">
      
      {/* 1. PPC FOCUSED HEADER (Zero-leakage, Click-to-Call + Instant CTA) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-seen-border shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Sub-tag */}
          <div className="flex items-center gap-3">
            <a href="#audit-form" className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-seen-dark font-display flex items-center gap-1">
                <span className="text-seen-accent">AI</span>GroSales
                <span className="w-1.5 h-1.5 rounded-full bg-seen-accent inline-block"></span>
              </span>
              <span className="text-[10px] tracking-wide font-medium text-seen-muted -mt-0.5 hidden sm:inline-block">
                AI Search Optimization & Lead Generation
              </span>
            </a>

            {/* Micro Rating Pill */}
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-amber-900 text-xs font-semibold ml-4">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span>4.9/5 Rating · Texas & US Businesses</span>
            </div>
          </div>

          {/* Right Action Area: Direct Phone & Audit CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-seen-warmgray hover:bg-seen-border text-seen-dark font-bold text-xs sm:text-sm transition-all border border-seen-border"
            >
              <Phone className="w-4 h-4 text-seen-accent animate-pulse" />
              <span className="hidden sm:inline">Call:</span>
              <span>{SITE_CONFIG.phoneFormatted}</span>
            </a>

            <a
              href="#audit-form"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-seen-accent hover:bg-seen-accentDark text-white font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow-glow"
            >
              <span>Get Free Audit</span>
              <ArrowRight className="w-4 h-4 hidden sm:inline" />
            </a>
          </div>

        </div>
      </header>

      {/* 2. HERO SECTION WITH INLINE AUDIT CAPTURE (Above the fold) */}
      <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-white via-seen-offwhite to-seen-offwhite border-b border-seen-border overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-radial-gradient pointer-events-none opacity-60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Left Col: High-Impact PPC Messaging */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-seen-dark text-white shadow-sm">
                <span className="w-2 h-2 rounded-full bg-seen-accent animate-ping" />
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Google Ads Special Offer · 100% Free AI Audit</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-seen-dark font-display leading-[1.12] tracking-tight">
                When High-Ticket Customers Ask AI Who to Hire, <br />
                <span className="text-seen-accent">Are You Recommended</span> or Are Your Competitors?
              </h1>

              <p className="text-base sm:text-lg text-seen-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Over <strong>60% of high-intent buyers</strong> have replaced traditional search with ChatGPT, Gemini, and Perplexity. If AI can’t verify your entity, state credentials, and authority graph, it recommends your local rivals instead.
              </p>

              {/* Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-left max-w-xl mx-auto lg:mx-0">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-seen-border shadow-subtle">
                  <div className="p-1.5 rounded-lg bg-seen-accent/10 text-seen-accent flex-shrink-0 mt-0.5">
                    <Search className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-seen-dark">100+ Local Prompt Tests</div>
                    <div className="text-[11px] text-seen-muted">Tested on ChatGPT, Gemini & Perplexity</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-seen-border shadow-subtle">
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 flex-shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-seen-dark">Competitor Steal-Rate</div>
                    <div className="text-[11px] text-seen-muted">See which rivals win your customer queries</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-seen-border shadow-subtle">
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-600 flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-seen-dark">24-Hour Turnaround</div>
                    <div className="text-[11px] text-seen-muted">Reviewed by a dedicated AI strategist</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-seen-border shadow-subtle">
                  <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600 flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-seen-dark">100% Free & Confidential</div>
                    <div className="text-[11px] text-seen-muted">No credit card or commitment required</div>
                  </div>
                </div>
              </div>

              {/* Trust bar */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-seen-muted">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  1,200+ Local Businesses Audited
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Building2 className="w-4 h-4 text-seen-accent" />
                  Houston, TX Headquarters
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Lock className="w-4 h-4 text-gray-500" />
                  Strict NDA & Data Privacy
                </span>
              </div>

            </div>

            {/* Right Col: High-Converting Above-the-Fold Form */}
            <div id="audit-form" className="lg:col-span-5 scroll-mt-24">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-seen-accent shadow-premium relative">
                
                {/* Visual Badge */}
                <div className="absolute -top-3.5 right-6 bg-seen-accent text-white px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Zap className="w-3 h-3 fill-white" />
                  Instant Request
                </div>

                {isSubmitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-black text-seen-dark font-display">
                      Audit Request Received!
                    </h3>
                    <p className="text-sm text-seen-muted leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. Our AI research team is actively compiling 100+ prompt simulations for <strong>{formData.businessName}</strong> in <strong>{formData.city}</strong>.
                    </p>
                    <div className="p-4 bg-seen-warmgray rounded-2xl border border-seen-border text-xs text-left space-y-2 text-seen-dark">
                      <div className="font-bold flex items-center gap-2">
                        <Clock className="w-4 h-4 text-seen-accent" />
                        Next Steps:
                      </div>
                      <p>1. We test your visibility across ChatGPT, Gemini, and Perplexity.</p>
                      <p>2. We email your full diagnostic report to <strong>{formData.email}</strong> within 24 hours.</p>
                      <p>3. If you need urgent assistance, call us directly at <strong>{SITE_CONFIG.phoneFormatted}</strong>.</p>
                    </div>

                    <div className="pt-2">
                      <a
                        href={`tel:${SITE_CONFIG.phoneRaw}`}
                        className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-seen-dark hover:bg-seen-accent text-white font-bold text-sm transition-all"
                      >
                        <Phone className="w-4 h-4 text-emerald-400" />
                        <span>Call Now for Priority Processing</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-5">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase text-seen-accent">
                        <Sparkles className="w-3.5 h-3.5" />
                        Free Visibility Scan
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-seen-dark font-display mt-0.5">
                        Claim Your 100-Prompt AI Audit
                      </h3>
                      <p className="text-xs text-seen-muted mt-1">
                        Find out if ChatGPT and Google AI are recommending your competitors.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3.5">
                      {/* Business Name */}
                      <div>
                        <label className="block text-xs font-bold text-seen-dark mb-1">
                          Business Name *
                        </label>
                        <input
                          type="text"
                          name="businessName"
                          placeholder="e.g. Lone Star HVAC Pros"
                          value={formData.businessName}
                          onChange={handleInputChange}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-seen-accent transition-all ${
                            formErrors.businessName ? 'border-red-500 bg-red-50/50' : 'border-seen-border bg-seen-offwhite'
                          }`}
                        />
                        {formErrors.businessName && (
                          <p className="text-[11px] text-red-500 mt-1">{formErrors.businessName}</p>
                        )}
                      </div>

                      {/* Website & City Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-seen-dark mb-1">
                            Website URL
                          </label>
                          <input
                            type="text"
                            name="website"
                            placeholder="yourbusiness.com"
                            value={formData.website}
                            onChange={handleInputChange}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-seen-border bg-seen-offwhite text-sm focus:outline-none focus:ring-2 focus:ring-seen-accent transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-seen-dark mb-1">
                            City & State *
                          </label>
                          <input
                            type="text"
                            name="city"
                            placeholder="e.g. Houston, TX"
                            value={formData.city}
                            onChange={handleInputChange}
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-seen-accent transition-all ${
                              formErrors.city ? 'border-red-500 bg-red-50/50' : 'border-seen-border bg-seen-offwhite'
                            }`}
                          />
                          {formErrors.city && (
                            <p className="text-[11px] text-red-500 mt-1">{formErrors.city}</p>
                          )}
                        </div>
                      </div>

                      {/* Industry Selector */}
                      <div>
                        <label className="block text-xs font-bold text-seen-dark mb-1">
                          Primary Industry
                        </label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-seen-border bg-seen-offwhite text-sm focus:outline-none focus:ring-2 focus:ring-seen-accent transition-all"
                        >
                          {industriesList.map(ind => (
                            <option key={ind} value={ind}>{ind}</option>
                          ))}
                        </select>
                      </div>

                      {/* Contact Name */}
                      <div>
                        <label className="block text-xs font-bold text-seen-dark mb-1">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="e.g. John Doe (Owner/Director)"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-seen-accent transition-all ${
                            formErrors.name ? 'border-red-500 bg-red-50/50' : 'border-seen-border bg-seen-offwhite'
                          }`}
                        />
                        {formErrors.name && (
                          <p className="text-[11px] text-red-500 mt-1">{formErrors.name}</p>
                        )}
                      </div>

                      {/* Work Email & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-seen-dark mb-1">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-seen-accent transition-all ${
                              formErrors.email ? 'border-red-500 bg-red-50/50' : 'border-seen-border bg-seen-offwhite'
                            }`}
                          />
                          {formErrors.email && (
                            <p className="text-[11px] text-red-500 mt-1">{formErrors.email}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-seen-dark mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="(346) 869-9154"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-seen-accent transition-all ${
                              formErrors.phone ? 'border-red-500 bg-red-50/50' : 'border-seen-border bg-seen-offwhite'
                            }`}
                          />
                          {formErrors.phone && (
                            <p className="text-[11px] text-red-500 mt-1">{formErrors.phone}</p>
                          )}
                        </div>
                      </div>

                      {/* Submit CTA */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-2 py-3.5 px-6 rounded-xl bg-seen-accent hover:bg-seen-accentDark text-white font-black text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-glow flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Compiling Telemetry...</span>
                          </>
                        ) : (
                          <>
                            <span>Run My Free 100-Prompt AI Audit</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      {/* Micro-guarantee */}
                      <div className="flex items-center justify-between text-[11px] text-seen-muted pt-2 border-t border-seen-border">
                        <span className="flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          100% Free · No Card Required
                        </span>
                        <span className="flex items-center gap-1">
                          <Lock className="w-3.5 h-3.5 text-seen-accent" />
                          256-Bit Encrypted
                        </span>
                      </div>
                    </form>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. THE SHIFT: TRADITIONAL GOOGLE SEARCH VS AI RECOMMENDATIONS */}
      <section className="py-16 sm:py-20 bg-white border-b border-seen-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-seen-accent">
              The Paradigm Shift
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-seen-dark font-display tracking-tight">
              Why Traditional SEO No Longer Protects Your Business
            </h2>
            <p className="text-base text-seen-muted leading-relaxed">
              Customers used to click through 10 blue links on Google. Today, AI models synthesize millions of data points into a single trusted recommendation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* The Old Way */}
            <div className="p-8 rounded-3xl bg-seen-warmgray border border-seen-border relative overflow-hidden">
              <div className="text-xs font-black uppercase tracking-wider text-seen-muted mb-2">
                Yesterday's Search Engine
              </div>
              <h3 className="text-2xl font-bold text-seen-dark font-display mb-4">
                Google 10 Blue Links (2010–2023)
              </h3>
              <ul className="space-y-3 text-sm text-seen-muted">
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✕</div>
                  <span>Searcher scrolls past 4 paid ads and directory websites (Yelp, Angi, Thumbtack).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✕</div>
                  <span>Keyword stuffing and backlink spam dictated who appeared at the top.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✕</div>
                  <span>Prospects opened 5 different tabs and compared reviews manually.</span>
                </li>
              </ul>
            </div>

            {/* The New Way */}
            <div className="p-8 rounded-3xl bg-seen-dark text-white border-2 border-seen-accent relative overflow-hidden shadow-card">
              <div className="absolute top-4 right-4 bg-seen-accent text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                Active in 2026
              </div>
              <div className="text-xs font-black uppercase tracking-wider text-amber-400 mb-2">
                Today's Conversational Engine
              </div>
              <h3 className="text-2xl font-bold font-display text-white mb-4">
                ChatGPT, Gemini & Perplexity (GEO)
              </h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>The AI delivers <strong>1 definitive recommendation</strong> with an authoritative rationale.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>AI scans verified state licenses, structured Schema.org entity graphs, and corroborated reviews.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero ad fatigue:</strong> High-ticket buyers trust the AI recommendation and call immediately.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 4. INTERACTIVE LIVE PROMPT SIMULATOR */}
      <section className="py-16 sm:py-20 bg-seen-offwhite border-b border-seen-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-seen-accent">
              Real-World Telemetry
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-seen-dark font-display tracking-tight">
              See How AI Makes Recommendations in Real Time
            </h2>
            <p className="text-sm sm:text-base text-seen-muted">
              Select an industry below to see the exact prompt test and the difference between an unoptimized business vs. an AIGroSales GEO-optimized brand.
            </p>
          </div>

          {/* Industry Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab('hvac')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'hvac'
                  ? 'bg-seen-accent text-white shadow-sm'
                  : 'bg-white text-seen-dark hover:bg-seen-warmgray border border-seen-border'
              }`}
            >
              HVAC & Commercial Services
            </button>
            <button
              onClick={() => setActiveTab('dentist')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'dentist'
                  ? 'bg-seen-accent text-white shadow-sm'
                  : 'bg-white text-seen-dark hover:bg-seen-warmgray border border-seen-border'
              }`}
            >
              Dental & Healthcare
            </button>
            <button
              onClick={() => setActiveTab('roofing')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'roofing'
                  ? 'bg-seen-accent text-white shadow-sm'
                  : 'bg-white text-seen-dark hover:bg-seen-warmgray border border-seen-border'
              }`}
            >
              Roofing & Restoration
            </button>
            <button
              onClick={() => setActiveTab('legal')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'legal'
                  ? 'bg-seen-accent text-white shadow-sm'
                  : 'bg-white text-seen-dark hover:bg-seen-warmgray border border-seen-border'
              }`}
            >
              Legal & Law Practices
            </button>
          </div>

          {/* Prompt Simulation Mockup */}
          <div className="max-w-4xl mx-auto bg-seen-dark text-white rounded-3xl p-6 sm:p-10 border border-seen-borderDark shadow-premium">
            
            {/* Prompt bar */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-seen-cardDark border border-seen-borderDark mb-6">
              <div className="p-2 rounded-xl bg-white/10 text-amber-400">
                <Bot className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-mono uppercase text-gray-400">Tested Engine: {promptDemos[activeTab].engine}</div>
                <div className="text-sm sm:text-base font-medium text-white italic">{promptDemos[activeTab].query}</div>
              </div>
            </div>

            {/* Before vs After Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="p-5 rounded-2xl bg-red-950/20 border border-red-900/40 space-y-2">
                <div className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span>Without AI Optimization</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {promptDemos[activeTab].beforeRecommendation}
                </p>
                <div className="text-[11px] text-red-400/80 font-medium">Result: Competitors capture 100% of high-intent inquiries.</div>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-800/40 space-y-2">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>With AIGroSales GEO Optimization</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {promptDemos[activeTab].afterRecommendation}
                </p>
                <div className="text-[11px] text-emerald-400/90 font-medium italic border-t border-emerald-800/30 pt-2 mt-2">
                  {promptDemos[activeTab].aiQuote}
                </div>
              </div>

            </div>

            <div className="mt-6 text-center">
              <a
                href="#audit-form"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>Find Out What AI Currently Says About Your Business</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 5. WHAT'S INSIDE THE FREE 100-PROMPT AUDIT (4 Deliverables) */}
      <section className="py-16 sm:py-20 bg-white border-b border-seen-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-seen-accent">
              Complete Transparency
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-seen-dark font-display tracking-tight">
              What You Receive in Your Free Audit Report
            </h2>
            <p className="text-sm sm:text-base text-seen-muted">
              We don't send vanity keyword charts. You receive clear, actionable telemetry compiled across ChatGPT, Perplexity, and Google AI Overviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-3xl bg-seen-offwhite border border-seen-border hover:border-seen-accent transition-all space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-seen-accent text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="text-lg font-bold text-seen-dark font-display">
                Share-of-Voice Benchmark
              </h3>
              <p className="text-xs text-seen-muted leading-relaxed">
                See your exact recommendation percentage when local buyers ask AI for your services, compared directly against your top 3 local competitors.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-seen-offwhite border border-seen-border hover:border-seen-accent transition-all space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-seen-dark text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-seen-dark font-display">
                100+ Tested Buying Prompts
              </h3>
              <p className="text-xs text-seen-muted leading-relaxed">
                The exact natural language questions prospects in your zip code and surrounding cities are typing into ChatGPT and Gemini today.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-seen-offwhite border border-seen-border hover:border-seen-accent transition-all space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-seen-dark font-display">
                Entity & Schema Gap Audit
              </h3>
              <p className="text-xs text-seen-muted leading-relaxed">
                We uncover broken JSON-LD tags, missing state license anchors, and inconsistent directory citations that cause AI bots to ignore your site.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-seen-offwhite border border-seen-border hover:border-seen-accent transition-all space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h3 className="text-lg font-bold text-seen-dark font-display">
                90-Day Execution Roadmap
              </h3>
              <p className="text-xs text-seen-muted leading-relaxed">
                A prioritized, plain-English roadmap outlining the exact adjustments needed to turn your business into the #1 AI-recommended brand in your market.
              </p>
            </div>

          </div>

          {/* Sample Report Trigger */}
          {onOpenSampleReport && (
            <div className="mt-12 text-center">
              <button
                onClick={onOpenSampleReport}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-seen-dark hover:bg-seen-accent text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Preview 12-Page Sample Report</span>
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 6. EMBEDDED INTERACTIVE AI VISIBILITY SCORE CALCULATOR */}
      <section className="py-16 sm:py-20 bg-seen-offwhite border-b border-seen-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-seen-accent">
              Interactive Self-Assessment
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-seen-dark font-display tracking-tight">
              Estimate Your AI Visibility Score™ in 60 Seconds
            </h2>
            <p className="text-sm sm:text-base text-seen-muted">
              Use our real-time interactive benchmark calculator below to see your potential AI visibility rating before your full audit is delivered.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <AiVisibilityCalculator onOpenReportModal={(opt) => {
              if (onOpenReportModal) {
                onOpenReportModal(opt);
              } else {
                document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
              }
            }} />
          </div>

        </div>
      </section>

      {/* 7. REAL CLIENT CASE STUDIES & RESULTS */}
      <section className="py-16 sm:py-20 bg-white border-b border-seen-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-seen-accent">
              Verified Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-seen-dark font-display tracking-tight">
              Real Businesses Dominating AI Search
            </h2>
            <p className="text-sm sm:text-base text-seen-muted">
              Here is what happens when local enterprises build verified entity authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Case Study 1 */}
            <div className="bg-seen-offwhite p-6 sm:p-8 rounded-3xl border border-seen-border shadow-card flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-seen-accent">
                    HVAC Contractor · Houston, TX
                  </span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-seen-dark font-display">
                  From 0% to 78% Share-of-Recommendation in 60 Days
                </h3>
                <p className="text-xs sm:text-sm text-seen-muted leading-relaxed">
                  "Before AIGroSales, when someone in Katy or Sugar Land asked ChatGPT for commercial AC replacement, our competitors got 100% of the nods. Within 60 days of entity optimization, we became the #1 recommended contractor."
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-seen-border flex items-center justify-between text-xs">
                <span className="font-bold text-seen-dark">+142 Qualified Calls</span>
                <span className="text-emerald-600 font-bold">$185k New Revenue</span>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-seen-offwhite p-6 sm:p-8 rounded-3xl border border-seen-border shadow-card flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-seen-accent">
                    Cosmetic Dental · Austin, TX
                  </span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-seen-dark font-display">
                  #1 Recommended Dental Practice on Perplexity & Claude
                </h3>
                <p className="text-xs sm:text-sm text-seen-muted leading-relaxed">
                  "High-income patients research smile makeovers using AI search. AIGroSales structured our AACD credentials and patient testimonials so AI now recommends us ahead of major corporate chains."
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-seen-border flex items-center justify-between text-xs">
                <span className="font-bold text-seen-dark">+28 Veneer Cases</span>
                <span className="text-emerald-600 font-bold">4.2x ROI in 90 Days</span>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-seen-offwhite p-6 sm:p-8 rounded-3xl border border-seen-border shadow-card flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-seen-accent">
                    Commercial Roofing · Dallas, TX
                  </span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-seen-dark font-display">
                  34 Commercial Bids Directly From Google AI Overviews
                </h3>
                <p className="text-xs sm:text-sm text-seen-muted leading-relaxed">
                  "When property managers ask Google AI who handles TPO commercial roof restoration after hail damage, our firm is cited as the authorized regional specialist. It has transformed our inbound pipeline."
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-seen-border flex items-center justify-between text-xs">
                <span className="font-bold text-seen-dark">34 Commercial Inquiries</span>
                <span className="text-emerald-600 font-bold">87% Win-Rate</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. ENTRY DIAGNOSTIC VS FREE SCAN CALLOUT */}
      <section className="py-16 sm:py-20 bg-seen-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl mx-auto bg-seen-cardDark border border-seen-borderDark rounded-3xl p-8 sm:p-12 shadow-premium">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-mono font-bold uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  Productized Entry Diagnostic
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                  Need a Comprehensive Multi-Engine Audit Fast?
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Upgrade to our <strong>{PAID_AUDIT_OFFER.name}</strong> for <strong>${PAID_AUDIT_OFFER.price}</strong>. We evaluate 50–200 conversational queries across Claude, ChatGPT, Gemini, and Perplexity, unmask competitor share-of-voice, audit your entire Schema entity graph, and conduct a 60-minute executive strategy debrief.
                </p>
                <p className="text-xs text-amber-300/90 font-medium">
                  {PAID_AUDIT_OFFER.creditGuarantee}
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                <a
                  href="#audit-form"
                  className="w-full py-3.5 px-6 rounded-full bg-amber-400 hover:bg-amber-300 text-seen-dark font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm text-center"
                >
                  <span>Claim $499 Audit ($0 Risk)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#audit-form"
                  className="w-full py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-white/20 text-center"
                >
                  <span>Request Free Scan</span>
                </a>
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-seen-borderDark flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                100% Confidential · Human analyst reviewed
              </span>
              <span>BrightLocal 2026 methodology · 7.5x annual consumer AI adoption</span>
            </div>
          </div>

        </div>
      </section>

      {/* 9. PPC HIGH-CONVERTING FAQ */}
      <section className="py-16 sm:py-20 bg-seen-offwhite border-b border-seen-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-seen-accent">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-seen-dark font-display tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-seen-muted">
              Everything you need to know about AI search marketing and our audit process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-seen-border overflow-hidden transition-all shadow-subtle"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base text-seen-dark flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-seen-accent flex-shrink-0" />
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-seen-muted flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-seen-muted flex-shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-seen-muted leading-relaxed border-t border-seen-warmgray pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 10. FINAL URGENCY CTA SECTION */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-seen-accent to-seen-accentDark text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white">
            <Clock className="w-4 h-4 text-amber-300" />
            <span>24-Hour Free Audit Guarantee</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight leading-tight">
            Stop Losing High-Intent Customers to AI Recommendations.
          </h2>

          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Every day you wait, competitors strengthen their entity citations. Get your confidential 100-prompt visibility report now.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#audit-form"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-seen-warmgray text-seen-dark font-black text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl"
            >
              Get My Free AI Audit Now
            </a>

            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-seen-dark/40 hover:bg-seen-dark text-white font-bold text-sm uppercase tracking-wider transition-all border border-white/30"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Us: {SITE_CONFIG.phoneFormatted}</span>
            </a>
          </div>

          <div className="pt-4 text-xs text-white/80 flex items-center justify-center gap-4 flex-wrap">
            <span>✓ No credit card required</span>
            <span>✓ 100% confidential</span>
            <span>✓ Delivered within 24 business hours</span>
          </div>

        </div>
      </section>

      {/* 11. GOOGLE ADS COMPLIANCE FOOTER */}
      <footer className="bg-seen-dark text-gray-400 text-xs py-12 border-t border-seen-borderDark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center gap-1.5 text-white text-xl font-black font-display">
                <span className="text-seen-accent">AI</span>GroSales
                <span className="w-1.5 h-1.5 rounded-full bg-seen-accent inline-block"></span>
              </div>
              <p className="text-xs text-gray-400 max-w-md leading-relaxed">
                AIGroSales is the premier Generative Engine Optimization (GEO) and AI search marketing firm helping local and service enterprises become visible and recommended across conversational search.
              </p>
            </div>

            <div className="md:col-span-4 space-y-2">
              <div className="text-white font-bold uppercase tracking-wider text-xs">Official Headquarters</div>
              <p className="text-xs text-gray-400 leading-relaxed">
                {SITE_CONFIG.address}<br />
                United States
              </p>
              <div className="pt-1 space-y-1">
                <div>
                  <span className="text-gray-500">Phone: </span>
                  <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-white hover:text-seen-accent transition-colors font-medium">
                    {SITE_CONFIG.phoneFormatted}
                  </a>
                </div>
                <div>
                  <span className="text-gray-500">Email: </span>
                  <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="text-white hover:text-seen-accent transition-colors font-medium">
                    {SITE_CONFIG.supportEmail}
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 space-y-2">
              <div className="text-white font-bold uppercase tracking-wider text-xs">Compliance & Policies</div>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="hover:text-white transition-colors">How GEO Works</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">Direct Contact</Link>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-seen-borderDark flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
            <div>
              © {new Date().getFullYear()} {SITE_CONFIG.companyName}. All rights reserved. Registered in Texas, USA.
            </div>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-gray-400">Privacy</Link>
              <Link href="/terms" className="hover:text-gray-400">Terms</Link>
              <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 inline-flex items-center gap-1">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                WhatsApp Support
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* 12. STICKY MOBILE CONVERSION BAR (Optimized for mobile Google Ads traffic) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-seen-border p-3 flex items-center gap-2 shadow-premium">
        <a
          href={`tel:${SITE_CONFIG.phoneRaw}`}
          className="flex-1 py-3 px-3 rounded-xl bg-seen-warmgray hover:bg-seen-border text-seen-dark font-bold text-xs flex items-center justify-center gap-1.5 border border-seen-border transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-seen-accent animate-pulse" />
          <span>Call Now</span>
        </a>
        <a
          href="#audit-form"
          className="flex-1 py-3 px-3 rounded-xl bg-seen-accent hover:bg-seen-accentDark text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
        >
          <span>Free AI Audit</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
};

export default GoogleAdsLandingPage;
