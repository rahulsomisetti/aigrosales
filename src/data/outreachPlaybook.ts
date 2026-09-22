export interface OutreachEmail {
  touch: number;
  subject: string;
  timing: string;
  preview: string;
  body: string;
  objective: string;
}

export interface OutreachScript {
  channel: string;
  targetRole: string;
  hook: string;
  script: string;
}

export interface ObjectionResponse {
  objection: string;
  response: string;
  closingQuestion: string;
}

export const COLD_OUTREACH_EMAILS: OutreachEmail[] = [
  {
    touch: 1,
    subject: "Quick check: Does ChatGPT recommend {{companyName}} in {{city}}?",
    timing: "Day 1",
    preview: "45% of consumers now use AI tools for local recommendations...",
    objective: "Create curiosity and highlight the 45% consumer shift without hard selling.",
    body: `Hi {{firstName}},

I ran a quick test this morning on ChatGPT and Perplexity for:

"Who is the most reliable {{trade}} in {{city}} with fair pricing?"

Two of your local competitors ({{competitor1}} and {{competitor2}}) came up with specific justifications. {{companyName}} didn’t appear in the top recommendations.

According to BrightLocal’s 2026 consumer research, 45% of consumers now use AI tools for local business recommendations (up from 6% last year).

Would you be open to seeing the 2-minute diagnostic report showing why the AI models picked your competitors over you?

Best,
[Your Name]
AIGroSales | AI Discovery Marketing
+1 346 869 9154`
  },
  {
    touch: 2,
    subject: "Re: Quick check / Here’s what Perplexity said about {{companyName}}",
    timing: "Day 3 (Follow-up)",
    preview: "Took a quick screenshot of the entity discrepancy...",
    objective: "Provide tangible screenshot proof of missing entity or licensing corroboration.",
    body: `Hi {{firstName}},

Following up on my note from Tuesday. 

The main reason AI models are currently omitting {{companyName}} isn’t your reviews—you have great customer feedback. 

It’s data structure:
1. Missing Schema.org LocalBusiness microdata on your primary service pages
2. No direct machine-readable link to your verified state licensing registry
3. Low qualitative review sentiment mentioning emergency dispatch keywords

When those 3 nodes are missing, AI safety filters default to competitors whose data is unambiguous.

I can send over a complimentary 1-page breakdown if you'd like to see the exact queries we tested.

Best,
[Your Name]
+1 346 869 9154`
  },
  {
    touch: 3,
    subject: "Zero-risk option: Our $499 Comprehensive AI Audit",
    timing: "Day 7",
    preview: "100% credited back toward your management...",
    objective: "Introduce the productized $499 entry offer with the 100% credit guarantee.",
    body: `Hi {{firstName}},

If you'd like our team to run an exhaustive 50–200 prompt forensic audit across ChatGPT, Claude, Gemini, and Perplexity for your market, we offer a productized diagnostic:

The AIGroSales Comprehensive AI Visibility Audit ($499 one-time):
• 50–200 live conversational queries tested in {{city}}
• Competitor share-of-voice breakdown
• Full technical Schema and licensing graph audit
• 60-min executive strategy debrief & 90-day action plan

Guarantee: 100% of the $499 fee is credited back toward your first 3 months if you decide to partner with us for monthly management. If not, the complete report and roadmap are yours to keep.

Interested in scheduling this for next week?

Best,
[Your Name]
+1 346 869 9154`
  },
  {
    touch: 4,
    subject: "Closing the loop / 2026 Texas Local AI Readiness Report",
    timing: "Day 12 (Breakup / Value Drop)",
    preview: "Leaving you with our benchmark findings...",
    objective: "Leave lasting value and maintain high professional rapport for future retargeting.",
    body: `Hi {{firstName}},

I haven’t heard back, so I assume optimizing for AI search recommendations isn't a priority right now—totally understand.

I wanted to leave you with our 2026 Local Business AI Readiness Report benchmarking 500+ Texas service companies across ChatGPT and Perplexity:
https://aigrosales.com/insights/texas-local-ai-readiness-report

Feel free to reach out whenever you want to see where {{companyName}} stands as AI assistants continue to capture search market share.

Best regards,
[Your Name]
AIGroSales | AI Discovery Marketing`
  }
];

export const SOCIAL_DM_SCRIPTS: OutreachScript[] = [
  {
    channel: "LinkedIn / Instagram DM",
    targetRole: "Owner / Managing Partner",
    hook: "Saw your recent work in {{city}} — quick question about ChatGPT recommendations",
    script: `Hey {{firstName}}, noticed {{companyName}}'s great reputation in {{city}}. Quick question: have you guys tested what ChatGPT or Perplexity says when someone asks for "best {{trade}} in {{city}}"? 

BrightLocal reported last month that 45% of consumers now use AI for local recommendations. We put together a free 1-minute AI Visibility Score tool that checks if your business shows up. Happy to drop the link if you're curious!`
  },
  {
    channel: "Phone / WhatsApp Outreach",
    targetRole: "Service Manager / Marketing Lead",
    hook: "Is your phone ringing from conversational AI queries yet?",
    script: `Hi {{firstName}}, this is [Name] with AIGroSales. I'm reaching out because when local homeowners ask Siri or ChatGPT who to hire for {{trade}} in {{city}}, your top two competitors are capturing 70% of those recommendations. We run a complimentary 100-prompt audit that pinpoints the missing data nodes. Can I email you a 2-page sample report?`
  }
];

export const OBJECTION_HANDLERS: ObjectionResponse[] = [
  {
    objection: "We already pay an agency for SEO.",
    response: "Traditional SEO focuses on Google's 10 blue links and keyword backlinks. But LLMs don't read web pages like Google bots do—they synthesize entities, state licensing registries, and qualitative sentiment. Over 74% of businesses with top Google rankings are currently invisible on ChatGPT.",
    closingQuestion: "Would it hurt to see our complimentary test of 10 prompts across ChatGPT and Claude to see how much overlap actually exists?"
  },
  {
    objection: "AI search isn't big enough yet in our market.",
    response: "That was true in 2024 when adoption was 6%. But BrightLocal's 2026 U.S. study confirms 45% of consumers now use AI tools for local recommendations, and ChatGPT is now among the top discovery sources. By the time it hits 65%, competitors who optimized their entity graphs will be cemented as the default answer.",
    closingQuestion: "Do you want to see the queries customers in your zip codes are already running?"
  },
  {
    objection: "How do I know this will produce an ROI?",
    response: "In high-ticket trades like yours, a single closed job or case (average ticket of $1,800 to $15,000+) pays for multiple months of our monthly retainer. That is why we offer our $499 entry audit with a 100% credit guarantee—the diagnostic pays for itself when you partner with us.",
    closingQuestion: "Would you like us to run the $499 diagnostic and credit the full amount to your first retainer?"
  }
];
