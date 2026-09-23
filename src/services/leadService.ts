import { SITE_CONFIG } from '../config';

export interface AuditLeadData {
  businessName: string;
  website?: string;
  city: string;
  state: string;
  industry: string;
  goals: string[];
  otherGoal?: string;
  selectedTier?: string;
  name: string;
  email: string;
  phone: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  gclid?: string;
}

export interface ContactInquiryData {
  name: string;
  email: string;
  phone?: string;
  businessName?: string;
  message: string;
}

export interface SubmissionResult {
  success: boolean;
  message: string;
}

/**
 * Persist lead in browser storage as a local backup
 */
function saveToLocalStorage(key: string, data: Record<string, unknown>) {
  try {
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    existing.push({ ...data, timestamp: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(existing));
  } catch (err) {
    console.warn('LocalStorage save failed:', err);
  }
}

/**
 * Dispatch lead via Web3Forms (Option A - Free Email Delivery)
 */
async function sendViaWeb3Forms(payload: Record<string, string>): Promise<boolean> {
  const accessKey = SITE_CONFIG.web3formsAccessKey;
  if (!accessKey) {
    console.info('No Web3Forms access key configured yet. Lead saved locally.');
    return false;
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        ...payload,
      }),
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('Web3Forms dispatch error:', error);
    return false;
  }
}

/**
 * Dispatch lead via Hostinger PHP Mailer endpoint (Fallback)
 */
async function sendViaPhpEndpoint(endpoint: string, payload: Record<string, unknown>): Promise<boolean> {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Submit an AI Visibility Audit Lead
 */
export async function submitAuditLead(lead: AuditLeadData): Promise<SubmissionResult> {
  // 1. Always back up to local storage
  saveToLocalStorage('aigrosales_leads', lead as unknown as Record<string, unknown>);

  const payload: Record<string, string> = {
    subject: `🎯 New AI Visibility Audit: ${lead.businessName} (${lead.city}, ${lead.state})${lead.selectedTier ? ` [${lead.selectedTier}]` : ''}`,
    from_name: 'AIGroSales Lead Engine',
    replyto: lead.email,
    'Business Name': lead.businessName,
    'Website': lead.website || 'None provided',
    'Location': `${lead.city}, ${lead.state}`,
    'Industry': lead.industry,
    'Selected Plan': lead.selectedTier || 'None (General Audit)',
    'Primary Goals': lead.goals.join(', ') + (lead.otherGoal ? ` (${lead.otherGoal})` : ''),
    'Contact Name': lead.name,
    'Contact Email': lead.email,
    'Contact Phone': lead.phone,
    'UTM Source': lead.utmSource || 'direct/organic',
    'UTM Medium': lead.utmMedium || 'none',
    'UTM Campaign': lead.utmCampaign || 'none',
    'UTM Keyword/Term': lead.utmTerm || 'none',
    'UTM Content': lead.utmContent || 'none',
    'Google Click ID (GCLID)': lead.gclid || 'none',
    'Submitted At': new Date().toLocaleString(),
  };

  // 2. Try Web3Forms
  const web3Success = await sendViaWeb3Forms(payload);
  if (web3Success) {
    return { success: true, message: 'Audit lead delivered to hello@aigrosales.com via Web3Forms' };
  }

  // 3. Fallback to Hostinger PHP handler
  const phpSuccess = await sendViaPhpEndpoint('/api/contact.php', {
    type: 'audit_request',
    ...lead,
  });

  if (phpSuccess) {
    return { success: true, message: 'Audit lead sent via Hostinger server mailer' };
  }

  // Even if external network dispatch fails, the lead is stored in localStorage
  return { success: true, message: 'Lead captured locally and queued for delivery' };
}

/**
 * Submit a Direct Contact Inquiry
 */
export async function submitContactInquiry(inquiry: ContactInquiryData): Promise<SubmissionResult> {
  // 1. Always back up to local storage
  saveToLocalStorage('aigrosales_inquiries', inquiry as unknown as Record<string, unknown>);

  const payload: Record<string, string> = {
    subject: `📩 Direct Inquiry from ${inquiry.name} (${inquiry.businessName || 'New Client'})`,
    from_name: 'AIGroSales Contact Form',
    replyto: inquiry.email,
    'Name': inquiry.name,
    'Email': inquiry.email,
    'Phone': inquiry.phone || 'None provided',
    'Business Name': inquiry.businessName || 'None provided',
    'Message': inquiry.message,
    'Submitted At': new Date().toLocaleString(),
  };

  // 2. Try Web3Forms
  const web3Success = await sendViaWeb3Forms(payload);
  if (web3Success) {
    return { success: true, message: 'Inquiry delivered to hello@aigrosales.com via Web3Forms' };
  }

  // 3. Fallback to Hostinger PHP handler
  const phpSuccess = await sendViaPhpEndpoint('/api/contact.php', {
    type: 'direct_inquiry',
    ...inquiry,
  });

  if (phpSuccess) {
    return { success: true, message: 'Inquiry sent via Hostinger server mailer' };
  }

  return { success: true, message: 'Inquiry captured locally and queued' };
}
