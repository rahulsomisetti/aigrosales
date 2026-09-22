import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Loader2, Sparkles, AlertCircle, Shield } from 'lucide-react';
import { submitAuditLead } from '../services/leadService';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillIndustry?: string;
  prefillTier?: string;
  prefillBusinessName?: string;
  prefillWebsite?: string;
  prefillCity?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({ 
  isOpen, 
  onClose, 
  prefillIndustry, 
  prefillTier,
  prefillBusinessName,
  prefillWebsite,
  prefillCity
}) => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    businessName: prefillBusinessName || '',
    website: prefillWebsite || '',
    city: prefillCity || '',
    state: 'TX',
    industry: prefillIndustry || 'HVAC & Climate Control',
    selectedTier: prefillTier || '',
    goals: [] as string[],
    otherGoal: '',
    name: '',
    email: '',
    phone: '',
  });

  // Sync props when modal opens
  React.useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        businessName: prefillBusinessName || prev.businessName,
        website: prefillWebsite || prev.website,
        city: prefillCity || prev.city,
        industry: prefillIndustry || prev.industry,
        selectedTier: prefillTier || prev.selectedTier
      }));
    }
  }, [isOpen, prefillIndustry, prefillTier, prefillBusinessName, prefillWebsite, prefillCity]);

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

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
    'Other Local Service'
  ];

  const goalsList = [
    'More customers',
    'More local visibility',
    'More leads',
    'More bookings',
    'Better AI visibility',
    'Other'
  ];

  const toggleGoal = (goal: string) => {
    setFormData(prev => {
      const exists = prev.goals.includes(goal);
      return {
        ...prev,
        goals: exists ? prev.goals.filter(g => g !== goal) : [...prev.goals, goal]
      };
    });
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (formData.goals.length === 0) newErrors.goals = 'Please select at least one primary goal';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Your name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid work email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required for verification';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsSubmitting(true);
    try {
      await submitAuditLead(formData);
    } catch (err) {
      console.error('Lead submission error:', err);
    } finally {
      setIsSubmitting(false);
      setIsComplete(true);
    }
  };

  const resetAndClose = () => {
    setStep(1);
    setIsComplete(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-seen-dark/80 backdrop-blur-sm transition-opacity"
        onClick={resetAndClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full border border-seen-border z-10 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-seen-border flex items-center justify-between bg-seen-offwhite">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-seen-accent/10 text-seen-accent">
                <Sparkles className="w-3.5 h-3.5" />
                AI Visibility Audit
              </span>
              {formData.selectedTier ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Plan: {formData.selectedTier}
                </span>
              ) : (
                <span className="text-xs text-seen-muted font-medium">Free Confidential Report</span>
              )}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-seen-dark font-display mt-1">
              {isComplete 
                ? 'Your Audit Request is Confirmed'
                : step === 1 
                  ? 'Step 1: Tell us about your business' 
                  : step === 2 
                    ? 'Step 2: Tell us what you want' 
                    : 'Step 3: Where should we send your report?'}
            </h3>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 text-seen-muted hover:text-seen-dark rounded-lg hover:bg-seen-warmgray transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        {!isComplete && (
          <div className="w-full bg-seen-warmgray h-1">
            <div 
              className="bg-seen-accent h-1 transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isComplete ? (
            /* Confirmation Screen */
            <div className="space-y-6 text-center py-2 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-seen-emerald border border-emerald-200">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-seen-dark font-display">
                  We’ve Initiated Your AI Visibility Benchmark
                </h4>
                <p className="text-sm text-seen-muted mt-2 max-w-md mx-auto leading-relaxed">
                  Our system is actively compiling conversational queries for <strong className="text-seen-dark">{formData.businessName}</strong> across ChatGPT, Perplexity, and Google AI in <strong className="text-seen-dark">{formData.city}, {formData.state}</strong>.
                </p>
              </div>

              {/* Preliminary Snapshot Card */}
              <div className="bg-seen-offwhite border border-seen-border rounded-xl p-4 text-left space-y-3">
                <div className="flex items-center justify-between text-xs text-seen-muted font-medium border-b border-seen-border/70 pb-2">
                  <span>Target Market: {formData.city}, {formData.state}</span>
                  <span className="text-seen-accent font-semibold">Priority Queue #128</span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="text-gray-500 block">Sector</span>
                    <span className="font-semibold text-seen-dark">{formData.industry}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Report Delivery</span>
                    <span className="font-semibold text-seen-dark truncate block">{formData.email}</span>
                  </div>
                  {formData.selectedTier && (
                    <div>
                      <span className="text-gray-500 block">Selected Tier</span>
                      <span className="font-semibold text-seen-accent">{formData.selectedTier}</span>
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <p className="text-xs text-gray-600 bg-white p-2.5 rounded-lg border border-seen-border/60">
                    💡 <strong>What happens next:</strong> A senior AIGroSales marketing specialist will review your AI entity signals, evaluate competitor visibility in your market, and email your full report within 1 business day.
                  </p>
                </div>
              </div>

              {/* Direct WhatsApp Option */}
              <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-left flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs">
                  <span className="font-bold text-emerald-900 block">Want Immediate Answers?</span>
                  <span className="text-emerald-700">Message our Texas strategist directly on WhatsApp.</span>
                </div>
                <a
                  href={`https://wa.me/13468699154?text=${encodeURIComponent(
                    `Hi AIGroSales! I just requested an AI Visibility Audit for ${formData.businessName || 'my business'} in ${formData.city || 'Texas'}. I'd love to discuss our AI presence.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold whitespace-nowrap transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <button
                onClick={resetAndClose}
                className="w-full py-3 rounded-xl bg-seen-dark hover:bg-seen-accent text-white font-semibold text-sm transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-seen-dark mb-1.5">
                      Business Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Lone Star Comfort HVAC"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-seen-border focus:ring-2 focus:ring-seen-accent focus:border-seen-accent outline-none text-sm transition-all"
                    />
                    {errors.businessName && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.businessName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-seen-dark mb-1.5">
                      Website URL
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. lonestarcomfort.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-seen-border focus:ring-2 focus:ring-seen-accent focus:border-seen-accent outline-none text-sm transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-seen-dark mb-1.5">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Dallas"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-seen-border focus:ring-2 focus:ring-seen-accent focus:border-seen-accent outline-none text-sm transition-all"
                      />
                      {errors.city && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.city}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-seen-dark mb-1.5">
                        State
                      </label>
                      <select
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-seen-border focus:ring-2 focus:ring-seen-accent focus:border-seen-accent outline-none text-sm transition-all bg-white"
                      >
                        <option value="TX">Texas (TX)</option>
                        <option value="FL">Florida (FL)</option>
                        <option value="GA">Georgia (GA)</option>
                        <option value="NC">North Carolina (NC)</option>
                        <option value="AZ">Arizona (AZ)</option>
                        <option value="CO">Colorado (CO)</option>
                        <option value="CA">California (CA)</option>
                        <option value="NY">New York (NY)</option>
                        <option value="OTHER">Other US State</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-seen-dark mb-1.5">
                      Industry
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-seen-border focus:ring-2 focus:ring-seen-accent focus:border-seen-accent outline-none text-sm transition-all bg-white"
                    >
                      {industriesList.map((ind) => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <p className="text-sm text-seen-muted">
                    Select what outcomes matter most to your business right now:
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {goalsList.map((goal) => {
                      const isSelected = formData.goals.includes(goal);
                      return (
                        <button
                          key={goal}
                          type="button"
                          onClick={() => toggleGoal(goal)}
                          className={`p-3 rounded-xl border text-left text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? 'bg-seen-accent/10 border-seen-accent text-seen-dark font-semibold'
                              : 'bg-seen-offwhite border-seen-border text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          <span>{goal}</span>
                          <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                            isSelected ? 'bg-seen-accent text-white border-seen-accent' : 'border-gray-400'
                          }`}>
                            {isSelected && '✓'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.goals && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.goals}
                    </p>
                  )}

                  {formData.goals.includes('Other') && (
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-seen-dark mb-1.5">
                        Tell us more (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="Specific priorities or questions"
                        value={formData.otherGoal}
                        onChange={(e) => setFormData({ ...formData, otherGoal: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-seen-border focus:ring-2 focus:ring-seen-accent focus:border-seen-accent outline-none text-sm transition-all"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="bg-seen-offwhite p-3 rounded-xl border border-seen-border text-xs text-seen-muted flex items-center gap-2">
                    <Shield className="w-4 h-4 text-seen-accent flex-shrink-0" />
                    <span>Your contact details are strictly confidential. We hate spam and will never share your information.</span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-seen-dark mb-1.5">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-seen-border focus:ring-2 focus:ring-seen-accent focus:border-seen-accent outline-none text-sm transition-all"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-seen-dark mb-1.5">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@lonestarcomfort.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-seen-border focus:ring-2 focus:ring-seen-accent focus:border-seen-accent outline-none text-sm transition-all"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-seen-dark mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="(346) 869-9154"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-seen-border focus:ring-2 focus:ring-seen-accent focus:border-seen-accent outline-none text-sm transition-all"
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 flex items-center justify-between gap-3 border-t border-seen-border">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-seen-muted hover:text-seen-dark transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                ) : <div />}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-seen-accent hover:bg-seen-accentDark text-white text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-seen-accent hover:bg-seen-accentDark text-white text-sm font-semibold transition-all disabled:opacity-75 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Analyzing Digital Footprint...</span>
                      </>
                    ) : (
                      <>
                        <span>Generate AI Visibility Report</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
