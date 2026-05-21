import { TIMELINE_PHASES } from '../data';
import { Calendar, Layers, ShieldCheck, ArrowRight, Hourglass } from 'lucide-react';

export default function Timeline() {
  return (
    <div className="space-y-8 font-sans">
      <div className="border border-neutral-200 bg-neutral-50 p-4 md:p-6 mb-8 flex flex-col sm:flex-row items-baseline justify-between gap-2">
        <div className="flex items-center gap-2">
          <Hourglass className="h-4 w-4 text-swiss-red" />
          <span className="text-xs font-mono font-bold tracking-widest text-neutral-800 uppercase">
            ENGAGEMENT BENCHMARK: 8-WEEKS TOTAL DELIVERY
          </span>
        </div>
        <span className="text-[10px] font-mono text-neutral-400 uppercase">
          *Subject to technical integration density
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {TIMELINE_PHASES.map((phase, idx) => (
          <div 
            key={idx}
            className="border border-neutral-200 bg-white p-6 relative flex flex-col justify-between hover:border-neutral-400 transition-colors"
          >
            {/* Red header accent border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-neutral-100 hover:bg-swiss-red transition-colors"></div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3 mb-1">
                <span className="font-mono text-xs text-swiss-red font-bold">
                  {phase.phase}
                </span>
                <span className="font-mono text-[10px] text-neutral-500 bg-neutral-50 px-2 py-0.5 border border-neutral-100">
                  {phase.duration}
                </span>
              </div>

              <h4 className="font-display text-base font-bold text-neutral-900 tracking-tight">
                {phase.title}
              </h4>

              <p className="text-xs text-neutral-600 leading-relaxed">
                {phase.description}
              </p>

              <hr className="border-neutral-100" />

              <ul className="space-y-2">
                {phase.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-1.5 text-[11px] text-neutral-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 mt-1.5 flex-shrink-0"></span>
                    <span className="leading-tight">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-50 text-[9px] font-mono text-neutral-400 flex items-center gap-1">
              <span>OUTPUT VERIFIED</span>
              <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
