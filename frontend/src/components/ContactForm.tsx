import React, { useState, useEffect } from 'react';
import { Send, Check, ShieldCheck, CheckCircle } from 'lucide-react';
import { ContactFormData, Language } from '../types';
import { LOCALIZED_UI_STRINGS } from '../data';

interface ContactFormProps {
  lang: Language;
  prefilledAuditData: Record<string, boolean> | null;
  onClearPrefill: () => void;
}

const PENDING_INPUT: Record<Language, string> = {
  en: 'PENDING_INPUT',
  de: 'WARTE_AUF_EINGABE'
};

const NOT_DECLARED: Record<Language, string> = {
  en: 'NOT_DECLARED',
  de: 'NICHT_ANGEGEBEN'
};

export default function ContactForm({ lang, prefilledAuditData, onClearPrefill }: ContactFormProps) {
  const ui = LOCALIZED_UI_STRINGS[lang].contact.form;

  const [form, setForm] = useState<ContactFormData>({
    name: '',
    company: '',
    role: '',
    industry: '',
    email: '',
    website: '',
    needs: [],
    budget: '10k-25k',
    timeline: 'moderate',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Apply prefilled audit details if the user clicked the CTA on the simulator
  useEffect(() => {
    if (prefilledAuditData) {
      const activeLeaks = Object.entries(prefilledAuditData)
        .filter(([_, isFriction]) => isFriction)
        .map(([id]) => id);

      const mapping: Record<string, string> = {
        positioning: 'presence',
        qualification: 'ai-qualification',
        proposals: 'proposal-auto',
        data_synchronization: 'operations-arch',
        ai_enrichment: 'ai-qualification'
      };

      const customNeeds = Array.from(new Set(activeLeaks.map(leakId => mapping[leakId]).filter(Boolean)));
      
      const briefMessage = lang === 'en'
        ? `Integrated Diagnostic Inputs:\n` +
          `- Current Operational Bottlenecks Detected: ${activeLeaks.map(l => l.toUpperCase().replace('_', ' ')).join(', ')}.\n` + 
          `Please prioritize these sectors during the Commercial systems mapping phase.`
        : `Integrierte Diagnose-Eingaben:\n` +
          `- Erkannte operative Engpässe: ${activeLeaks.map(l => l.toUpperCase().replace('_', ' ')).join(', ')}.\n` + 
          `Bitte priorisieren Sie diese Bereiche während der Systemarchitektur-Auditphase.`;

      setForm(prev => ({
        ...prev,
        needs: customNeeds.length > 0 ? customNeeds : prev.needs,
        message: briefMessage
      }));
    }
  }, [prefilledAuditData, lang]);

  const toggleNeed = (value: string) => {
    setForm(prev => {
      const needs = prev.needs.includes(value)
        ? prev.needs.filter(n => n !== value)
        : [...prev.needs, value];
      return { ...prev, needs };
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company || !form.role || !form.industry) {
      alert(ui.validationError);
      return;
    }

    setIsSubmitting(true);
    // Simulating secure enterprise handshake
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1800);
  };

  const resetForm = () => {
    setForm({
      name: '',
      company: '',
      role: '',
      industry: '',
      email: '',
      website: '',
      needs: [],
      budget: '10k-25k',
      timeline: 'moderate',
      message: ''
    });
    setIsSubmitted(false);
    onClearPrefill();
  };

  const needsOptions = [
    { value: 'presence', label: ui.needsOptions.presence },
    { value: 'ai-qualification', label: ui.needsOptions.qualification },
    { value: 'proposal-auto', label: ui.needsOptions.proposal },
    { value: 'operations-arch', label: ui.needsOptions.operations }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      
      {/* Informative Form Panel */}
      <div className="lg:col-span-7 bg-white border border-neutral-200 p-6 md:p-8 flex flex-col justify-between">
        
        {isSubmitted ? (
          <div className="text-center py-12 px-4 space-y-6 flex-1 flex flex-col justify-center items-center">
            <div className="h-14 w-14 bg-neutral-900 text-white rounded-none flex items-center justify-center mb-2 border border-neutral-800">
              <CheckCircle className="h-8 w-8 text-swiss-red" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-2xl font-bold tracking-tight text-neutral-900">
                {ui.successTitle}
              </h3>
              <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                {ui.successDesc}
              </p>
            </div>
            
            <div className="bg-neutral-50 p-4 border border-neutral-100 text-left font-mono text-[11px] text-neutral-500 w-full max-w-sm rounded-none">
              <span className="font-bold text-neutral-700 block mb-1">{ui.recordSummary}</span>
              ID: AX-{Math.floor(Math.random() * 90000 + 10000)}<br />
              {ui.summaryFields.client}: {form.company}<br />
              {ui.summaryFields.role}: {form.role}<br />
              {ui.summaryFields.industry}: {form.industry}<br />
              {ui.summaryFields.budget}: {ui.budgetOptions.find(b => b.value === form.budget)?.label}
            </div>

            <button
              onClick={resetForm}
              className="px-6 py-2.5 bg-neutral-900 hover:bg-neutral-850 text-white transition-colors text-xs font-mono font-bold uppercase"
            >
              {lang === 'en' ? 'Request Diagnostic' : 'Neue Anfrage stellen'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {prefilledAuditData && (
              <div className="p-3 bg-neutral-950 border border-swiss-red text-neutral-100 text-xs font-mono flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-swiss-red animate-pulse"></span>
                  {ui.prefillActive}
                </span>
                <button 
                  type="button" 
                  onClick={onClearPrefill} 
                  className="text-[10px] text-zinc-400 hover:text-white underline decoration-swiss-red"
                >
                  {ui.clearPrefill}
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider mb-1.5">
                  {ui.name} <span className="text-swiss-red">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  required
                  placeholder={ui.namePlaceholder}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-950 text-sm placeholder-neutral-400"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider mb-1.5">
                  {ui.company} <span className="text-swiss-red">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleInputChange}
                  required
                  placeholder={ui.companyPlaceholder}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-950 text-sm placeholder-neutral-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider mb-1.5">
                  {ui.role} <span className="text-swiss-red">*</span>
                </label>
                <input
                  type="text"
                  name="role"
                  value={form.role}
                  onChange={handleInputChange}
                  required
                  placeholder={ui.rolePlaceholder}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-950 text-sm placeholder-neutral-400"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider mb-1.5">
                  {ui.industry} <span className="text-swiss-red">*</span>
                </label>
                <input
                  type="text"
                  name="industry"
                  value={form.industry}
                  onChange={handleInputChange}
                  required
                  placeholder={ui.industryPlaceholder}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-950 text-sm placeholder-neutral-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider mb-1.5">
                  {ui.email} <span className="text-swiss-red">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  required
                  placeholder={ui.emailPlaceholder}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-950 text-sm placeholder-neutral-400"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider mb-1.5">
                  {ui.website}
                </label>
                <input
                  type="url"
                  name="website"
                  value={form.website}
                  onChange={handleInputChange}
                  placeholder={ui.websitePlaceholder}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-950 text-sm placeholder-neutral-400"
                />
              </div>
            </div>

            {/* Selection Grid for Needs */}
            <div>
              <label className="block text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider mb-2">
                {ui.needs}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {needsOptions.map((option) => {
                  const selected = form.needs.includes(option.value);
                  return (
                    <button
                      type="button"
                      key={option.value}
                      onClick={() => toggleNeed(option.value)}
                      className={`text-left p-3 border text-xs font-medium flex items-center justify-between transition-colors ${
                        selected
                          ? 'border-neutral-900 bg-neutral-900 text-white font-bold'
                          : 'border-neutral-100 bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                      }`}
                    >
                      <span>{option.label}</span>
                      <div className={`h-4 w-4 border flex items-center justify-center ${
                        selected ? 'border-swiss-red bg-swiss-red' : 'border-neutral-300'
                      }`}>
                        {selected && <Check className="h-2.5 w-2.5 text-white stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Budget options and timelines */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider mb-1.5">
                  {ui.budget}
                </label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-950 text-xs font-mono"
                >
                  {ui.budgetOptions.map((tier) => (
                    <option key={tier.value} value={tier.value}>
                      {tier.label}
                    </option>
                  ))}
                </select>
                <span className="text-[10px] text-neutral-400 leading-none mt-1.5 block">
                  {ui.budgetHelp}
                </span>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider mb-1.5">
                  {ui.timeline}
                </label>
                <select
                  name="timeline"
                  value={form.timeline}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-950 text-xs font-mono"
                >
                  {ui.timelineOptions.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider mb-1.5">
                {ui.challenge} <span className="text-swiss-red">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder={ui.challengePlaceholder}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-950 text-sm placeholder-neutral-400"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 transition-colors text-white py-3.5 text-xs font-mono font-bold uppercase flex items-center justify-center gap-2 ${
                isSubmitting ? 'opacity-70 pointer-events-none' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-pulse">{ui.submitting}</span>
                </>
              ) : (
                <>
                  {ui.submit}
                  <Send className="h-3.5 w-3.5 text-swiss-red" />
                </>
              )}
            </button>

          </form>
        )}
      </div>

      {/* Right Side Code Terminal Preview */}
      <div className="lg:col-span-5 bg-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between text-white font-mono text-xs relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] bg-[size:12px_12px] opacity-20 pointer-events-none"></div>
        
        <div>
          <div className="flex items-center justify-between border-b border-neutral-900 pb-3 mb-4">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-neutral-800"></span>
              <span className="h-2 w-2 rounded-full bg-neutral-800"></span>
              <span className="h-2 w-2 rounded-full bg-neutral-800"></span>
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-bold ml-2">{ui.summaryTitle}</span>
            </div>
            <span className="text-[9px] text-swiss-red font-bold">{ui.state}</span>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-zinc-600">{ui.summaryFields.qualification}</span>
              <pre className="text-[10px] text-zinc-300 bg-zinc-900/45 p-2 border border-zinc-900 mt-1 overflow-x-auto">
{`{
  vendor: "AFFEXAI",
  client_entity: "${form.company || PENDING_INPUT[lang]}",
  role: "${form.role || PENDING_INPUT[lang]}",
  industry: "${form.industry || PENDING_INPUT[lang]}",
  poc_email: "${form.email || PENDING_INPUT[lang]}",
  poc_name: "${form.name || PENDING_INPUT[lang]}",
  website_domain: "${form.website || NOT_DECLARED[lang]}"
}`}
              </pre>
            </div>

            <div>
              <span className="text-zinc-600">{ui.summaryFields.notes}</span>
              <pre className="text-[10px] text-zinc-300 bg-zinc-900/45 p-2 border border-zinc-900 mt-1">
{`{
  critical_budget_tier: "${form.budget}",
  estimated_timeline: "${form.timeline}",
  ${ui.summaryFields.modules}: [
    ${form.needs.map(n => `"${n}"`).join(',\n    ') || ui.summaryFields.modulesPlaceholder}
  ]
}`}
              </pre>
            </div>

            <div>
              <span className="text-zinc-600">{ui.summaryFields.challenge}</span>
              <p className="text-[10px] text-zinc-400 leading-tight bg-neutral-900/80 p-2 mt-1 border border-neutral-900 max-h-24 overflow-y-auto">
                {form.message ? form.message : ui.summaryFields.challengePlaceholder}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-neutral-900 mt-6 space-y-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-swiss-red flex-shrink-0" />
            <span className="text-[10px] text-neutral-400 font-sans leading-relaxed">
              <strong>{ui.agreementTitle}</strong> {ui.agreementDesc}
            </span>
          </div>
        </div>

      </div>

    </div>
  );
}
