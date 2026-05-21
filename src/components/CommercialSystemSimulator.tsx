import { useState } from 'react';
import { Check, AlertTriangle, Cpu, Clock, CheckCircle, ArrowRight, ShieldCheck, FileText, Smartphone } from 'lucide-react';
import { AUDIT_CHECKPOINTS } from '../data';

interface SimulatorProps {
  onSelectAuditAction: (answers: Record<string, boolean>) => void;
}

export default function CommercialSystemSimulator({ onSelectAuditAction }: SimulatorProps) {
  const [answers, setAnswers] = useState<Record<string, boolean>>({
    positioning: true,
    qualification: true,
    proposals: false,
    data_synchronization: true,
    ai_enrichment: false,
  });

  const toggleAnswer = (id: string) => {
    setAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Calculate stats based on negative answers (answering False/Unchecked means they have a leak!)
  // If checked = true means they have the problem! Let's treat answers as "Checked = This is a bottleneck for us"
  const bottlenecksCount = Object.values(answers).filter(Boolean).length;
  const totalQuestions = AUDIT_CHECKPOINTS.length;
  
  // Friction index calculation
  const frictionPercentage = Math.round((bottlenecksCount / totalQuestions) * 100);

  // Estimations
  const estHoursWeeklyWasted = bottlenecksCount * 8.5; // average manual leakage per bottleneck
  const projectedAccuracyBoost = 100 - (bottlenecksCount * 18);

  const getFrictionLabel = (percentage: number) => {
    if (percentage >= 80) return { text: 'HIGH RISK (CRITICAL LEAKAGE)', color: 'text-red-500 border-red-950 bg-red-950/20' };
    if (percentage >= 50) return { text: 'MODERATE RISK (OPERATIONAL FRICTION)', color: 'text-amber-500 border-amber-950 bg-amber-950/20' };
    return { text: 'OPTIMIZED / LOW RISK', color: 'text-green-500 border-green-950 bg-green-950/20' };
  };

  const riskLabel = getFrictionLabel(frictionPercentage);

  return (
    <div id="system-simulator" className="border border-neutral-800 bg-neutral-950 p-6 md:p-10 font-sans text-white rounded-none relative overflow-hidden">
      {/* Decorative Blueprint Grid - Reduced Opacity */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-[0.14]"></div>
      
      {/* Swiss Style Title Header block */}
      <div className="relative z-10 border-b border-neutral-800 pb-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-swiss-red font-mono text-xs tracking-widest font-bold uppercase mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-swiss-red"></span>
            Operational Assessment Matrix
          </div>
          <h3 className="font-display text-2xl font-bold tracking-tight text-neutral-100">
            System Friction Diagnostic Check
          </h3>
          <p className="text-sm text-neutral-400 mt-1 max-w-xl">
            Toggle observed operational scenarios below to estimate your company&rsquo;s current commercial leakage rating.
          </p>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 px-4 py-2 font-mono text-xs text-neutral-400 whitespace-nowrap">
          SYSTEM EFFICIENCY: <span className={frictionPercentage > 50 ? 'text-amber-400' : 'text-green-400'}>{100 - frictionPercentage}% VALUE DETECTABILITY</span>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Checkpoints Interactive List */}
        <div className="lg:col-span-7 space-y-4">
          <div className="text-xs font-mono text-neutral-500 tracking-wider uppercase mb-2">
            SELECT ALL KNOWN BOTTLENECKS
          </div>
          
          {AUDIT_CHECKPOINTS.map((checkpoint) => {
            const isFrictionSource = answers[checkpoint.id];
            return (
              <div 
                key={checkpoint.id}
                onClick={() => toggleAnswer(checkpoint.id)}
                className={`group cursor-pointer border p-4 transition-all duration-200 flex items-start gap-4 ${
                  isFrictionSource 
                    ? 'bg-neutral-900/60 border-swiss-red/60' 
                    : 'bg-neutral-900/10 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div className={`mt-1 flex items-center justify-center h-5 w-5 border flex-shrink-0 transition-colors ${
                  isFrictionSource 
                    ? 'border-swiss-red bg-swiss-red text-white' 
                    : 'border-neutral-600 group-hover:border-neutral-400'
                }`}>
                  {isFrictionSource && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest bg-neutral-900 px-2 py-0.5 border border-neutral-800">
                      {checkpoint.category}
                    </span>
                    <span className={`font-mono text-[9px] px-1.5 py-0.5 font-semibold ${
                      checkpoint.impactLevel === 'CRITICAL' 
                        ? 'text-red-400 bg-red-950/30' 
                        : checkpoint.impactLevel === 'HIGH' 
                        ? 'text-amber-400 bg-amber-950/30' 
                        : 'text-neutral-400 bg-neutral-800'
                    }`}>
                      {checkpoint.impactLevel} IMPACT
                    </span>
                  </div>
                  <h4 className="font-sans text-sm font-medium text-neutral-200">
                    {checkpoint.question}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                    {checkpoint.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Visual Metrics Output */}
        <div className="lg:col-span-5 flex flex-col justify-between border border-neutral-800 bg-neutral-900/30 p-6 relative">
          
          <div>
            <div className="text-xs font-mono text-neutral-500 tracking-wider uppercase mb-4">
              DIAGNOSTIC METRICS FEEDBACK
            </div>

            {/* Huge Friction Score */}
            <div className="mb-6">
              <div className="text-sm font-sans text-neutral-400 mb-1">Commercial Friction Index</div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-5xl font-extrabold tracking-tight text-white">
                  {frictionPercentage}%
                </span>
                <span className="font-mono text-xs text-neutral-500">of business potential locked</span>
              </div>
              <div className={`mt-3 border px-3 py-1.5 text-xs font-mono text-center tracking-wide font-medium ${riskLabel.color}`}>
                {riskLabel.text}
              </div>
            </div>

            {/* Generated Calculations */}
            <div className="space-y-4 border-t border-b border-neutral-800 py-6 my-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-8 w-8 bg-neutral-900 border border-neutral-800 text-neutral-400">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-neutral-500 uppercase">Est. Cost of Manual Overhead</div>
                  <div className="text-sm font-sans font-bold text-neutral-200">
                    {estHoursWeeklyWasted > 0 ? `~${estHoursWeeklyWasted} Hours/Week` : 'Optimized Workflow'}
                  </div>
                  <p className="text-[11px] text-neutral-400">Time spent copying specs & chasing raw emails.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-8 w-8 bg-neutral-900 border border-neutral-800 text-neutral-400">
                  <Cpu className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-neutral-500 uppercase">Operational Modernization Score</div>
                  <div className="text-sm font-sans font-bold text-neutral-200">
                    {bottlenecksCount > 2 ? 'High Infrastructure Opportunity' : 'Incremental Refinements'}
                  </div>
                  <p className="text-[11px] text-neutral-400">Readiness for qualified routing, structured quoting protocols, and CRM sync.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-8 w-8 bg-neutral-900 border border-neutral-800 text-neutral-400">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-neutral-500 uppercase">Credibility Retention Index</div>
                  <div className="text-sm font-sans font-bold text-neutral-200">
                    {projectedAccuracyBoost}% Trust Accuracy
                  </div>
                  <p className="text-[11px] text-neutral-400">Score of perceived trust during strategic procurement visits.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="p-4 bg-neutral-950 border border-neutral-800 space-y-3 mb-4">
              <div className="text-xs font-mono text-neutral-400 flex items-center gap-1.5 font-bold">
                <AlertTriangle className="h-3.5 w-3.5 text-swiss-red" />
                FOR RECOVERY ACTION:
              </div>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                {bottlenecksCount === 0 
                  ? 'Your baseline operation shows healthy attributes. Re-audit if proposal cycle times drift or if high-quality inbound pipelines plateau.' 
                  : `We identified ${bottlenecksCount} distinct friction vectors. Addressing these requires commercial systems architectural restructuring, not simple visual adjustments.`
                }
              </p>
            </div>

            <button
              onClick={() => onSelectAuditAction(answers)}
              className="w-full bg-white hover:bg-neutral-100 transition-colors text-black text-xs font-mono font-bold py-3 uppercase flex items-center justify-center gap-2"
            >
              Apply Findings to Audit Brief
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
