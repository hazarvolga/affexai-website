import { useState } from 'react';
import { ShieldCheck, ArrowRight, Building, Settings, FileSpreadsheet } from 'lucide-react';

interface CaseStudy {
  id: string;
  number: string;
  title: string;
  clientType: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: { label: string; value: string }[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-01',
    number: '01',
    title: 'Custom Engineering & Turbine Manufacturer',
    clientType: 'Industrial Machinery & Precision Engineering',
    challenge: 'An outdated, slow digital presentation generated low pre-qualification trust among serious procurement managers. High-value sales cycles were delayed by endless back-and-forth emails seeking basic technical variables.',
    solution: 'Designed and deployed a modern Executive Credibility system alongside a secure parameter-based qualification intake. Configured active schema documentation layouts that instantly validated the manufacturer’s technical capabilities to institutional buyers.',
    outcome: 'Eliminated manual email qualification of leads by 65%. Increased response velocity with high-intent enterprise pipeline routed directly to core technical partners in under 5 minutes.',
    metrics: [
      { label: 'Qualification Latency', value: '-65%' },
      { label: 'Technical Score Alignment', value: '100%' },
      { label: 'Manual Response Time', value: '<5 Min' }
    ]
  },
  {
    id: 'case-02',
    number: '02',
    title: 'Heavy Infrastructure & Construction Consortium',
    clientType: 'International Energy & Civil Infrastructure Projects',
    challenge: 'Generating technical pricing proposals consumed up to 18 hours per tender of senior engineering manpower. Multiple versions of quotes were scattered across legacy offline Excel spreadsheets with significant data-entry risk.',
    solution: 'Configured a parameter-driven Commercial Proposal Automation engine. Unified complex product formulas, pricing rules, and safety factor calculations into a secure, browser-based administrative interface for engineering directors.',
    outcome: 'Reduced multi-day bidding and quotation labor to less than 15 minutes. Safeguarded margins by enforcing validated pricing algorithms locked behind secure database protocols.',
    metrics: [
      { label: 'Quoting Labor Saved', value: '80%' },
      { label: 'Data Transcription Errors', value: '0%' },
      { label: 'Tender Prep Duration', value: '<15 Min' }
    ]
  }
];

export default function SelectedWork() {
  const [activeId, setActiveId] = useState<string>('case-01');

  const selectedCase = CASE_STUDIES.find(c => c.id === activeId) || CASE_STUDIES[0];

  return (
    <div id="case-studies" className="border border-neutral-200 bg-white p-6 md:p-10 font-sans">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-200 pb-6 mb-8">
        <div>
          <span className="font-mono text-xs text-swiss-red tracking-widest font-bold uppercase block mb-1">
            [ VERIFIED SYSTEMS ENGAGEMENTS ]
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-neutral-950">
            Selected Case Studies
          </h3>
          <p className="text-sm text-neutral-500 mt-1 max-w-xl">
            Real outcomes delivered for industrial and technical organizations. We align presentation credibility with robust back-office automation rules.
          </p>
        </div>

        {/* System tabs selector */}
        <div className="flex bg-neutral-100 p-1 border border-neutral-200">
          {CASE_STUDIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              className={`px-3 py-1.5 text-xs font-mono font-bold uppercase transition-all duration-150 ${
                activeId === c.id 
                  ? 'bg-neutral-950 text-white' 
                  : 'text-neutral-500 hover:text-neutral-850'
              }`}
            >
              Case {c.number}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: System Details structured precisely as requested */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4">
            <h4 className="font-display text-lg font-bold text-neutral-900 border-b border-neutral-100 pb-2">
              {selectedCase.title}
            </h4>

            <div className="space-y-4 text-sm">
              <div>
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider block mb-1">
                  Client Type
                </span>
                <p className="font-medium text-neutral-800">
                  {selectedCase.clientType}
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider block mb-1">
                  Challenge
                </span>
                <p className="text-neutral-600 leading-relaxed">
                  {selectedCase.challenge}
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider block mb-1">
                  Solution
                </span>
                <p className="text-neutral-600 leading-relaxed">
                  {selectedCase.solution}
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider block mb-1">
                  Outcome
                </span>
                <p className="text-neutral-700 leading-relaxed font-medium">
                  {selectedCase.outcome}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Operational Outcome Panel */}
        <div className="lg:col-span-5 border border-neutral-200 bg-neutral-950 p-6 text-white font-mono text-xs relative overflow-hidden min-h-[340px] flex flex-col justify-between">
          {/* Blueprint Grid - Muted opacity to reduce intensity */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-30"></div>

          <div className="relative z-10 flex items-center justify-between border-b border-zinc-800 pb-3 mb-6">
            <span className="text-[10px] text-neutral-400 flex items-center gap-1.5 uppercase tracking-widest font-bold">
              <ShieldCheck className="h-4 w-4 text-swiss-red" />
              Impact Telemetry
            </span>
            <span className="text-[9px] text-neutral-400 bg-neutral-900 px-2 py-0.5 border border-neutral-800">
              CASE {selectedCase.number} AUDIT
            </span>
          </div>

          <div className="relative z-10 flex-1 space-y-6">
            <div className="text-[11px] text-zinc-400 leading-relaxed uppercase">
              System installation verified: Standard pre-qualification parameters successfully executed with modern database constraints.
            </div>

            <div className="grid grid-cols-1 gap-3">
              {selectedCase.metrics.map((m, idx) => (
                <div key={idx} className="bg-neutral-900 p-3 border border-neutral-850 flex items-center justify-between">
                  <span className="text-[10px] text-neutral-400 uppercase">{m.label}</span>
                  <span className="text-sm font-sans font-extrabold text-white text-right">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 border-t border-zinc-900 pt-3 mt-6 text-[9px] text-zinc-500 flex justify-between items-center">
            <span>AUDIT REFERENCE: {selectedCase.id.toUpperCase()}</span>
            <span className="text-swiss-red font-bold">VERIFIED RATING</span>
          </div>
        </div>
      </div>
    </div>
  );
}
