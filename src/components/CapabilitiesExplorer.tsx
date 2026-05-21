import { useState } from 'react';
import { SERVICES } from '../data';
import { ArrowUpRight, Code, Shield, Check, ListFilter, TrendingUp, Key } from 'lucide-react';

export default function CapabilitiesExplorer() {
  const [activeTab, setActiveTab] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === activeTab) || SERVICES[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Tab Navigation (Left pane on large screens) */}
      <div className="lg:col-span-4 space-y-2">
        <div className="text-xs font-mono text-neutral-500 tracking-wider uppercase mb-3 px-2">
          SELECT SYSTEM CLASSIFICATION
        </div>
        <div className="flex flex-col gap-1">
          {SERVICES.map((service) => {
            const isActive = service.id === activeTab;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`text-left p-4 transition-all duration-150 flex items-center justify-between border ${
                  isActive
                    ? 'border-neutral-900 bg-neutral-900 text-neutral-50 font-bold'
                    : 'border-transparent text-neutral-500 hover:text-neutral-950 hover:bg-neutral-100/50'
                }`}
              >
                <div>
                  <div className="font-mono text-[9px] tracking-widest text-swiss-red font-semibold mb-1">
                    {service.tag}
                  </div>
                  <div className="font-display text-sm md:text-base tracking-tight">
                    {service.title}
                  </div>
                </div>
                <ArrowUpRight className={`h-4 w-4 transition-transform duration-200 ${
                  isActive ? 'text-swiss-red translate-x-0.5 -translate-y-0.5' : 'text-neutral-300'
                }`} />
              </button>
            );
          })}
        </div>

        {/* Short credentials memo */}
        <div className="p-4 bg-neutral-50 border border-neutral-100 mt-6 sm:block hidden">
          <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1.5 font-bold">
            <Shield className="h-3.5 w-3.5 text-neutral-400" />
            Architectural Guardrail:
          </div>
          <p className="text-[11px] text-neutral-500 leading-relaxed">
            All capabilities utilize modern, zero-dependency, ultra-fast tech stacks (Vite/TypeScript) ready for painless enterprise handover or immediate self-hosting.
          </p>
        </div>
      </div>

      {/* Structured Details Box (Right pane on large screens) */}
      <div className="lg:col-span-8 border border-neutral-200 bg-white p-6 md:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-100 pb-5">
          <div>
            <span className="font-mono text-xs tracking-wider text-swiss-red bg-neutral-50 border border-neutral-100 px-2.5 py-1">
              SPECIFICATION {activeService.tag}
            </span>
            <h3 className="font-display text-2xl font-bold tracking-tight text-neutral-900 mt-3">
              {activeService.title}
            </h3>
          </div>
          <div className="bg-neutral-900 text-white font-mono text-xs px-3 py-2 border border-neutral-800 self-start sm:self-center">
            {activeService.metrics}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-mono text-neutral-400 tracking-wider uppercase mb-2">
            Scope Overview & Positioning
          </h4>
          <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
            {activeService.description}
          </p>
        </div>

        {/* Deliverables checklist */}
        <div>
          <h4 className="text-xs font-mono text-neutral-400 tracking-wider uppercase mb-4">
            Required Technical Deliverables
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {activeService.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 bg-neutral-50 border border-neutral-100/60"
              >
                <div className="h-4.5 w-4.5 bg-neutral-900 text-white flex items-center justify-center p-0.5 mt-0.5">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
                <span className="text-xs font-medium text-neutral-800 leading-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Blueprint Visualizing diagram */}
        <div className="bg-neutral-950 border border-neutral-900 p-4 font-mono text-[10px] text-neutral-400 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] bg-[size:16px_16px] opacity-20"></div>
          
          <div className="relative z-10 flex items-center justify-between mb-2 pb-2 border-b border-neutral-800">
            <span className="flex items-center gap-1.5 text-neutral-400 font-bold">
              <Code className="h-3.5 w-3.5 text-swiss-red" />
              SYSTEM INTEGRATION TOPOLOGY
            </span>
            <span className="text-neutral-500 text-[9px]">SECURED DATA TRANSACTION ROUTE</span>
          </div>

          <div className="relative z-10 grid grid-cols-3 gap-2 text-center text-[9px] py-2">
            <div className="p-2 border border-neutral-800 bg-neutral-900/60">
              <div className="text-neutral-500 uppercase tracking-widest text-[8px] mb-1">USER TOUCHPOINT</div>
              <div className="text-neutral-300 truncate">Symmetric Interface</div>
            </div>
            <div className="p-2 border border-swiss-red bg-neutral-900/90 text-swiss-red">
              <div className="text-swiss-red opacity-80 uppercase tracking-widest text-[8px] mb-1">VALIDATION ENGINE</div>
              <div className="text-neutral-200 truncate">Friction Filter</div>
            </div>
            <div className="p-2 border border-neutral-800 bg-neutral-900/60">
              <div className="text-neutral-500 uppercase tracking-widest text-[8px] mb-1">BUSINESS SYSTEM</div>
              <div className="text-neutral-300 truncate">CRM &amp; ERP Databases</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
