'use client';

import React, { useState } from 'react';
import { 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle, 
  BarChart3, 
  Layers, 
  Users, 
  ArrowUpRight,
  Filter
} from 'lucide-react';

type Timeframe = '30D' | '90D' | 'YTD';
type FilterType = 'All' | 'Discovered' | 'Opportunities';

interface TimeframeData {
  label: string;
  timeRangeDescription: string;
  aiVisibility: {
    rate: number;
    growth: string;
    description: string;
  };
  recommendationRate: {
    rate: number;
    growth: string;
    description: string;
  };
  questionsTracked: {
    count: number;
    description: string;
  };
  competitorsMonitored: {
    count: number;
    description: string;
  };
  platforms: Array<{
    name: string;
    rate: number;
    growth: string;
    color: string;
  }>;
  additionalDiscoveredCount: number;
  discoveredQueries: Array<{
    query: string;
    intent: string;
    volume: string;
    rank: string;
  }>;
  opportunityQueries: Array<{
    query: string;
    intent: string;
    gap: string;
    priority: string;
  }>;
}

const DASHBOARD_DATA: Record<Timeframe, TimeframeData> = {
  '30D': {
    label: 'Last 30 Days',
    timeRangeDescription: 'Rolling 30-day monitoring window',
    aiVisibility: {
      rate: 34,
      growth: '+14%',
      description: 'Across 127 local commercial prompts'
    },
    recommendationRate: {
      rate: 28,
      growth: '+9%',
      description: 'Positioned as Top 3 solution'
    },
    questionsTracked: {
      count: 127,
      description: 'High-intent customer questions'
    },
    competitorsMonitored: {
      count: 14,
      description: 'DFW metro area rivals'
    },
    platforms: [
      { name: 'ChatGPT', rate: 34, growth: '+12%', color: 'bg-emerald-500' },
      { name: 'Claude (Anthropic)', rate: 38, growth: '+16%', color: 'bg-amber-500' },
      { name: 'Google AI', rate: 31, growth: '+8%', color: 'bg-blue-500' },
      { name: 'Perplexity', rate: 36, growth: '+15%', color: 'bg-indigo-500' },
      { name: 'Gemini', rate: 27, growth: '+5%', color: 'bg-purple-500' },
    ],
    additionalDiscoveredCount: 38,
    discoveredQueries: [
      { query: 'Best HVAC company in Dallas', intent: 'High Commercial', volume: '1,450/mo', rank: 'Top Pick' },
      { query: 'Emergency AC repair in Plano', intent: 'Immediate Service', volume: '920/mo', rank: 'Recommended #1' },
      { query: 'AC installation near Frisco', intent: 'High-Ticket Replacement', volume: '740/mo', rank: 'Recommended #2' },
    ],
    opportunityQueries: [
      { query: 'Best HVAC company near me', intent: 'Hyper-Local Proximity', gap: 'Missing sub-neighborhood entity data', priority: 'High' },
      { query: 'Affordable AC replacement Dallas', intent: 'Financing Intent', gap: 'Payment options not in schema', priority: 'Urgent' },
      { query: 'Commercial HVAC Dallas', intent: 'B2B Contract', gap: 'License class not linked to state database', priority: 'Medium' },
    ]
  },
  '90D': {
    label: 'Last 90 Days',
    timeRangeDescription: 'Quarterly performance benchmark',
    aiVisibility: {
      rate: 29,
      growth: '+22%',
      description: 'Quarterly aggregate across 114 prompts'
    },
    recommendationRate: {
      rate: 24,
      growth: '+17%',
      description: 'Consistently cited in top answers'
    },
    questionsTracked: {
      count: 114,
      description: 'Quarterly evaluated prompts'
    },
    competitorsMonitored: {
      count: 14,
      description: 'DFW metro area rivals'
    },
    platforms: [
      { name: 'ChatGPT', rate: 29, growth: '+18%', color: 'bg-emerald-500' },
      { name: 'Claude (Anthropic)', rate: 32, growth: '+21%', color: 'bg-amber-500' },
      { name: 'Google AI', rate: 26, growth: '+14%', color: 'bg-blue-500' },
      { name: 'Perplexity', rate: 30, growth: '+19%', color: 'bg-indigo-500' },
      { name: 'Gemini', rate: 22, growth: '+11%', color: 'bg-purple-500' },
    ],
    additionalDiscoveredCount: 29,
    discoveredQueries: [
      { query: 'Commercial AC maintenance Dallas', intent: 'B2B Retainer', volume: '1,120/mo', rank: 'Top Pick' },
      { query: 'Heat pump repair McKinney TX', intent: 'Seasonal Surge', volume: '860/mo', rank: 'Recommended #1' },
      { query: 'Ductless mini split installer Dallas', intent: 'High-Ticket Replacement', volume: '620/mo', rank: 'Recommended #2' },
    ],
    opportunityQueries: [
      { query: 'Same-day AC repair Dallas TX', intent: 'Immediate Service', gap: 'Operating hours schema conflict', priority: 'Urgent' },
      { query: 'Commercial rooftop HVAC repair', intent: 'B2B Contract', gap: 'EPA certification citation unindexed', priority: 'High' },
      { query: 'Emergency furnace fix near me', intent: 'Winter Readiness', gap: '24/7 emergency schema tag missing', priority: 'Medium' },
    ]
  },
  'YTD': {
    label: 'Year to Date',
    timeRangeDescription: 'Cumulative annual progression from baseline',
    aiVisibility: {
      rate: 42,
      growth: '+38%',
      description: 'Cumulative baseline across 148 prompts'
    },
    recommendationRate: {
      rate: 35,
      growth: '+28%',
      description: '#1 Ranked local market authority'
    },
    questionsTracked: {
      count: 148,
      description: 'Annual prompt repository'
    },
    competitorsMonitored: {
      count: 16,
      description: 'North Texas & regional rivals'
    },
    platforms: [
      { name: 'ChatGPT', rate: 42, growth: '+29%', color: 'bg-emerald-500' },
      { name: 'Claude (Anthropic)', rate: 46, growth: '+34%', color: 'bg-amber-500' },
      { name: 'Google AI', rate: 38, growth: '+23%', color: 'bg-blue-500' },
      { name: 'Perplexity', rate: 44, growth: '+31%', color: 'bg-indigo-500' },
      { name: 'Gemini', rate: 33, growth: '+18%', color: 'bg-purple-500' },
    ],
    additionalDiscoveredCount: 54,
    discoveredQueries: [
      { query: 'Best HVAC company in Dallas', intent: 'High Commercial', volume: '1,450/mo', rank: 'Top Pick' },
      { query: 'Commercial HVAC replacement Dallas', intent: 'Institutional Project', volume: '1,840/mo', rank: 'Top Pick' },
      { query: 'Top AC repair North Texas', intent: 'Regional Authority', volume: '1,290/mo', rank: 'Recommended #1' },
    ],
    opportunityQueries: [
      { query: 'Variable speed AC financing Dallas', intent: 'Financing Intent', gap: 'Zero-interest financing schema unindexed', priority: 'High' },
      { query: 'LEED certified HVAC contractors TX', intent: 'Eco & Industrial', gap: 'Green building directory citation gap', priority: 'High' },
      { query: 'Chiller plant maintenance DFW', intent: 'Industrial B2B', gap: 'Industrial facility portfolio anchor missing', priority: 'Medium' },
    ]
  }
};

export const ProductDashboard: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('All');
  const [timeframe, setTimeframe] = useState<Timeframe>('30D');

  const current = DASHBOARD_DATA[timeframe];

  return (
    <div className="w-full bg-seen-cardDark rounded-2xl border border-seen-borderDark shadow-premium p-4 sm:p-7 text-white">
      
      {/* Top Bar / Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-seen-borderDark/80 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-seen-accent/20 border border-seen-accent/40 flex items-center justify-center text-seen-accent">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold font-display tracking-tight text-white">
                AIGroSales AI Visibility
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                LIVE MONITORING
              </span>
            </div>
            <p className="text-xs text-gray-400">
              Target Entity: Dallas HVAC & Air Quality Services · Market: North Texas
            </p>
          </div>
        </div>

        {/* Timeframe selector with explanatory tooltip/label */}
        <div className="flex flex-col sm:items-end gap-1">
          <div className="flex items-center self-start sm:self-auto bg-seen-dark rounded-lg p-1 border border-seen-borderDark">
            {(['30D', '90D', 'YTD'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTimeframe(t)}
                className={`px-3.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  timeframe === t
                    ? 'bg-seen-accent text-white shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
                title={t === '30D' ? 'Last 30 Days (Rolling)' : t === '90D' ? 'Last 90 Days (Quarterly)' : 'Year to Date (Cumulative)'}
              >
                {t}
              </button>
            ))}
          </div>
          <span className="text-[10px] font-mono text-seen-accent">
            {current.label} · {current.timeRangeDescription}
          </span>
        </div>
      </div>

      {/* 4 Core Metrics Cards (Dynamic per timeframe) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-6">
        
        {/* Metric 1 */}
        <div className="bg-seen-dark/80 rounded-xl p-4 border border-seen-borderDark/90 relative overflow-hidden transition-all">
          <div className="flex items-center justify-between text-xs text-gray-400 mb-1 font-medium">
            <span>AI Visibility</span>
            <span className="text-emerald-400 font-mono text-[11px] flex items-center font-bold">
              <TrendingUp className="w-3 h-3 mr-0.5" /> {current.aiVisibility.growth}
            </span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            {current.aiVisibility.rate}%
          </div>
          <div className="w-full bg-gray-800 h-1.5 rounded-full mt-3 overflow-hidden">
            <div 
              className="bg-seen-accent h-1.5 rounded-full transition-all duration-500" 
              style={{ width: `${current.aiVisibility.rate}%` }} 
            />
          </div>
          <span className="text-[10px] text-gray-500 mt-2 block">
            {current.aiVisibility.description}
          </span>
        </div>

        {/* Metric 2 */}
        <div className="bg-seen-dark/80 rounded-xl p-4 border border-seen-borderDark/90 relative overflow-hidden transition-all">
          <div className="flex items-center justify-between text-xs text-gray-400 mb-1 font-medium">
            <span>Recommendation Rate</span>
            <span className="text-emerald-400 font-mono text-[11px] flex items-center font-bold">
              <TrendingUp className="w-3 h-3 mr-0.5" /> {current.recommendationRate.growth}
            </span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            {current.recommendationRate.rate}%
          </div>
          <div className="w-full bg-gray-800 h-1.5 rounded-full mt-3 overflow-hidden">
            <div 
              className="bg-emerald-500 h-1.5 rounded-full transition-all duration-500" 
              style={{ width: `${current.recommendationRate.rate}%` }} 
            />
          </div>
          <span className="text-[10px] text-gray-500 mt-2 block">
            {current.recommendationRate.description}
          </span>
        </div>

        {/* Metric 3 */}
        <div className="bg-seen-dark/80 rounded-xl p-4 border border-seen-borderDark/90 relative overflow-hidden transition-all">
          <div className="flex items-center justify-between text-xs text-gray-400 mb-1 font-medium">
            <span>Questions Tracked</span>
            <Layers className="w-3.5 h-3.5 text-seen-accent" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            {current.questionsTracked.count}
          </div>
          <span className="text-[10px] text-gray-400 mt-4 block">
            {current.questionsTracked.description}
          </span>
        </div>

        {/* Metric 4 */}
        <div className="bg-seen-dark/80 rounded-xl p-4 border border-seen-borderDark/90 relative overflow-hidden transition-all">
          <div className="flex items-center justify-between text-xs text-gray-400 mb-1 font-medium">
            <span>Competitors Monitored</span>
            <Users className="w-3.5 h-3.5 text-blue-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            {current.competitorsMonitored.count}
          </div>
          <span className="text-[10px] text-gray-400 mt-4 block">
            {current.competitorsMonitored.description}
          </span>
        </div>

      </div>

      {/* AI Platforms Breakdown Grid (Dynamic per timeframe) */}
      <div className="bg-seen-dark/60 rounded-xl p-4 sm:p-5 border border-seen-borderDark mb-6">
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <span>AI Platforms Share of Voice</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/10">
              {current.label}
            </span>
          </span>
          <span className="text-[11px] font-mono text-gray-500 font-normal">Updated live from API crawler</span>
        </h4>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {current.platforms.map((p) => (
            <div key={p.name} className="p-3 rounded-lg bg-seen-surface border border-seen-borderDark/80 transition-all">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-gray-200">{p.name}</span>
                <span className="text-emerald-400 font-mono text-[11px] font-bold">{p.growth}</span>
              </div>
              <div className="text-xl font-bold font-display text-white">{p.rate}%</div>
              <div className="w-full bg-gray-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div 
                  className={`${p.color} h-1.5 rounded-full transition-all duration-500`} 
                  style={{ width: `${p.rate}%` }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Selector for Queries & Opportunities */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-seen-borderDark/50">
        <div className="flex items-center gap-2">
          <Filter className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-xs font-medium text-gray-400">View Category:</span>
          <div className="flex items-center gap-1.5">
            {(['All', 'Discovered', 'Opportunities'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFilter(f)}
                className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                  selectedFilter === f
                    ? 'bg-white/15 text-white font-semibold'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {f === 'All' ? 'All Queries' : f === 'Discovered' ? 'Discovered Wins' : 'Action Gaps'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Discovered Questions & Opportunities Grid */}
      <div className={`grid gap-6 ${selectedFilter === 'All' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
        
        {/* Questions where you are being discovered */}
        {(selectedFilter === 'All' || selectedFilter === 'Discovered') && (
          <div className="bg-seen-dark/80 rounded-xl p-4 sm:p-5 border border-seen-borderDark flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Questions Where You're Being Discovered
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-gray-400">Active Wins</span>
              </div>

              <div className="space-y-2.5">
                {current.discoveredQueries.map((item) => (
                  <div 
                    key={item.query}
                    className="p-3 rounded-lg bg-seen-surface/90 border border-seen-borderDark flex items-start justify-between gap-3 text-xs"
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-white block">{item.query}</span>
                        <span className="text-[11px] text-gray-400">{item.intent} · Est. Search: {item.volume}</span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-300 whitespace-nowrap">
                      {item.rank}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-seen-borderDark/60 text-[11px] text-gray-400 flex items-center justify-between">
              <span>+ {current.additionalDiscoveredCount} additional discovered queries in {current.label}</span>
              <span className="text-seen-accent font-medium flex items-center">
                Full Telemetry <ArrowUpRight className="w-3 h-3 ml-0.5" />
              </span>
            </div>
          </div>
        )}

        {/* Opportunities to capture */}
        {(selectedFilter === 'All' || selectedFilter === 'Opportunities') && (
          <div className="bg-seen-dark/80 rounded-xl p-4 sm:p-5 border border-seen-borderDark flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    High-Value Opportunities (Current Gaps)
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-gray-400">Action Items</span>
              </div>

              <div className="space-y-2.5">
                {current.opportunityQueries.map((item) => (
                  <div 
                    key={item.query}
                    className="p-3 rounded-lg bg-seen-surface/90 border border-seen-borderDark flex items-start justify-between gap-3 text-xs"
                  >
                    <div className="flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-white block">• {item.query}</span>
                        <span className="text-[11px] text-gray-400">Fix: {item.gap}</span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/10 text-amber-300 whitespace-nowrap">
                      {item.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-seen-borderDark/60 text-[11px] text-gray-400 flex items-center justify-between">
              <span>Identified by AIGroSales Entity Gap Scanner</span>
              <span className="text-amber-400 font-medium flex items-center">
                Optimize Gaps <ArrowUpRight className="w-3 h-3 ml-0.5" />
              </span>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
