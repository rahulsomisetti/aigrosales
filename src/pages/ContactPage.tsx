import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight, ShieldCheck, Loader2 } from 'lucide-react';
import { submitContactInquiry } from '../services/leadService';

export const ContactPage: React.FC = () => {
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

  return (
    <div className="bg-seen-offwhite min-h-screen">
      
      {/* Header */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-seen-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-seen-dark text-white mb-4">
              <Mail className="w-3.5 h-3.5 text-seen-accent" />
              Direct Communication
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-seen-dark font-display tracking-tight leading-[1.1]">
              Talk With Our Texas Strategy Team.
            </h1>
            <p className="text-lg sm:text-xl text-seen-muted mt-6 leading-relaxed">
              Have a question about your market's AI visibility or want to discuss a partnership? We respond promptly during business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-seen-dark font-display mb-3">
                  AIGroSales Marketing Headquarters
                </h3>
                <p className="text-sm text-seen-muted leading-relaxed">
                  Headquartered in Central Texas with dedicated operational coverage across the United States.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-seen-border shadow-subtle">
                  <div className="w-10 h-10 rounded-xl bg-seen-offwhite border border-seen-border flex items-center justify-center text-seen-accent flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-seen-muted block">
                      Texas Headquarters
                    </span>
                    <span className="text-sm font-bold text-seen-dark block mt-0.5">
                      El Dorado Blvd, Houston, TX 77059, USA
                    </span>
                    <span className="text-xs text-gray-500">
                      Serving service enterprises nationwide
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-seen-border shadow-subtle">
                  <div className="w-10 h-10 rounded-xl bg-seen-offwhite border border-seen-border flex items-center justify-center text-seen-accent flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-seen-muted block">
                      Phone & Direct Line
                    </span>
                    <a href="tel:+13468699154" className="text-sm font-bold text-seen-dark hover:text-seen-accent transition-colors block mt-0.5">
                      +1 (346) 869-9154
                    </a>
                    <span className="text-xs text-gray-500">
                      Monday–Friday, 8am–6pm CT
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 shadow-subtle">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
                      Instant WhatsApp Chat
                    </span>
                    <a
                      href="https://wa.me/13468699154?text=Hi%20AIGroSales%20team!%20I'd%20like%20to%20learn%20more%20about%20your%20AI%20discovery%20marketing%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-emerald-900 hover:text-emerald-700 transition-colors block mt-0.5"
                    >
                      Chat on WhatsApp (+1 346 869 9154) →
                    </a>
                    <span className="text-xs text-emerald-700">
                      Immediate response during business hours
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-seen-border shadow-subtle">
                  <div className="w-10 h-10 rounded-xl bg-seen-offwhite border border-seen-border flex items-center justify-center text-seen-accent flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-seen-muted block">
                      Direct Inquiries
                    </span>
                    <a href="mailto:hello@aigrosales.com" className="text-sm font-bold text-seen-dark hover:text-seen-accent transition-colors block mt-0.5">
                      hello@aigrosales.com
                    </a>
                    <span className="text-xs text-gray-500">
                      Average response time: 2 hours
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-seen-border text-xs text-seen-muted flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-seen-accent flex-shrink-0 mt-0.5" />
                <p>
                  We do not employ aggressive sales reps. Your conversation will be directly with a marketing strategist who knows your industry.
                </p>
              </div>
            </div>

            {/* Right: Simple Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-seen-border p-8 sm:p-10 shadow-card">
                {submitted ? (
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
                ) : (
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
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
