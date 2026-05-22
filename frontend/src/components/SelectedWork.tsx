import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { CASE_STUDIES, LOCALIZED_UI_STRINGS } from '../data';
import { Language } from '../types';

interface SelectedWorkProps {
  lang: Language;
}

export default function SelectedWork({ lang }: SelectedWorkProps) {
  const caseStudies = CASE_STUDIES[lang];
  const ui = LOCALIZED_UI_STRINGS[lang].caseStudies.widget;
  const [activeId, setActiveId] = useState<string>('case-01');

  const selectedCase = caseStudies.find(c => c.id === activeId) || caseStudies[0];

  return (
    <div id="case-studies" className="border border-neutral-200 bg-white p-6 md:p-10 font-sans">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-200 pb-6 mb-8">
        <div>
          <span className="font-mono text-xs text-swiss-red tracking-widest font-bold uppercase block mb-1">
            {ui.tag}
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-neutral-950">
            {ui.h3}
          </h3>
          <p className="text-sm text-neutral-500 mt-1 max-w-xl">
            {ui.desc}
          </p>
        </div>

        {/* System tabs selector */}
        <div className="flex bg-neutral-100 p-1 border border-neutral-200">
          {caseStudies.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              className={`px-3 py-1.5 text-xs font-mono font-bold uppercase transition-all duration-150 whitespace-nowrap ${
                activeId === c.id 
                  ? 'bg-neutral-950 text-white' 
                  : 'text-neutral-500 hover:text-neutral-850'
              }`}
            >
              {lang === 'en' ? `Case ${c.number}` : `Projekt ${c.number}`}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: System Details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4">
            <h4 className="font-display text-lg font-bold text-neutral-900 border-b border-neutral-100 pb-2">
              {selectedCase.title}
            </h4>

            <div className="space-y-4 text-sm">
              <div>
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider block mb-1">
                  {ui.clientType}
                </span>
                <p className="font-medium text-neutral-800">
                  {selectedCase.clientType}
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider block mb-1">
                  {ui.challenge}
                </span>
                <p className="text-neutral-600 leading-relaxed">
                  {selectedCase.challenge}
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider block mb-1">
                  {ui.solution}
                </span>
                <p className="text-neutral-600 leading-relaxed">
                  {selectedCase.solution}
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider block mb-1">
                  {ui.outcome}
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
          {/* Blueprint Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-30"></div>

          <div className="relative z-10 flex items-center justify-between border-b border-zinc-800 pb-3 mb-6">
            <span className="text-[10px] text-neutral-400 flex items-center gap-1.5 uppercase tracking-widest font-bold">
              <ShieldCheck className="h-4 w-4 text-swiss-red" />
              {ui.snapshot}
            </span>
            <span className="text-[9px] text-neutral-400 bg-neutral-900 px-2 py-0.5 border border-neutral-800">
              {ui.caseAudit.replace('{num}', selectedCase.number)}
            </span>
          </div>

          <div className="relative z-10 flex-1 space-y-6">
            <div className="text-[11px] text-zinc-400 leading-relaxed uppercase">
              {ui.verified}
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
            <span>{ui.ref.replace('{ref}', selectedCase.id.toUpperCase())}</span>
            <span className="text-swiss-red font-bold">{ui.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
