'use client';

import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import { submitContactInquiry } from '@/services/leadService';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await submitContactInquiry(formData);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 border border-emerald-200">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h4 className="text-2xl font-bold text-seen-dark font-display">
          Message Received
        </h4>
        <p className="text-sm text-seen-muted max-w-md mx-auto">
          Thank you, {formData.name}. An AIGroSales strategist will review your inquiry and follow up at {formData.email} shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h3 className="text-xl font-bold text-seen-dark font-display mb-2">
        Send a Direct Note
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-seen-dark mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-seen-border focus:ring-2 focus:ring-seen-accent focus:border-seen-accent outline-none text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-seen-dark mb-1.5">
            Work Email *
          </label>
          <input
            type="email"
            required
            placeholder="you@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-seen-border focus:ring-2 focus:ring-seen-accent focus:border-seen-accent outline-none text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-seen-dark mb-1.5">
            Business Name
          </label>
          <input
            type="text"
            placeholder="Your Business"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-seen-border focus:ring-2 focus:ring-seen-accent focus:border-seen-accent outline-none text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-seen-dark mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="(346) 869-9154"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-seen-border focus:ring-2 focus:ring-seen-accent focus:border-seen-accent outline-none text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-seen-dark mb-1.5">
          How can we help?
        </label>
        <textarea
          rows={4}
          required
          placeholder="Tell us about your business, current marketing challenges, or questions regarding AI discovery."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-seen-border focus:ring-2 focus:ring-seen-accent focus:border-seen-accent outline-none text-sm"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 rounded-xl bg-seen-dark hover:bg-seen-accent text-white font-semibold text-sm transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-2 disabled:opacity-75"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
};
