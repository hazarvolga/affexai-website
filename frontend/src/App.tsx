/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Layers, 
  ShieldCheck, 
  Briefcase, 
  TrendingUp, 
  CheckCircle, 
  Cpu, 
  Code, 
  ChevronRight, 
  Compass, 
  Terminal, 
  FileCheck,
  AlertTriangle,
  MapPin,
  Clock,
  ArrowUpRight
} from 'lucide-react';

import { SERVICES, TARGET_CLIENTS, PROCESS_STEPS, WHY_US_PILLARS, LOCALIZED_UI_STRINGS } from './data';
import { Language } from './types';
import CommercialSystemSimulator from './components/CommercialSystemSimulator';
import CapabilitiesExplorer from './components/CapabilitiesExplorer';
import SelectedWork from './components/SelectedWork';
import Timeline from './components/Timeline';
import ContactForm from './components/ContactForm';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prefilledAudit, setPrefilledAudit] = useState<Record<string, boolean> | null>(null);

  const handleAuditActionApplied = (answers: Record<string, boolean>) => {
    setPrefilledAudit(answers);
    // Scroll smoothly to contact section
    const contactSection = document.getElementById('audit-brief-intake');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-brand-50 text-neutral-900 selection:bg-swiss-red selection:text-white font-sans antialiased">
      
      {/* Premium Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Brand Logo & Tag */}
            <div 
              onClick={() => scrollToSection('hero')} 
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="bg-swiss-red text-white h-7 w-7 flex items-center justify-center font-bold font-display text-sm relative">
                A
                <span className="absolute bottom-0 right-0 h-1.5 w-1.5 bg-white"></span>
              </div>
              <div>
                <span className="font-display text-base font-extrabold tracking-widest block leading-none">
                  AFFEXAI
                </span>
                <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest block mt-1 leading-none">
                  {LOCALIZED_UI_STRINGS[lang].hero.consultancy}
                </span>
              </div>
            </div>

            {/* Desktop Navigation links */}
            <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider uppercase font-medium">
              <button onClick={() => scrollToSection('capabilities')} className="text-neutral-400 hover:text-white transition-colors cursor-pointer">
                {LOCALIZED_UI_STRINGS[lang].nav.capabilities}
              </button>
              <button onClick={() => scrollToSection('problem')} className="text-neutral-400 hover:text-white transition-colors cursor-pointer">
                {LOCALIZED_UI_STRINGS[lang].nav.diagnosis}
              </button>
              <button onClick={() => scrollToSection('case-studies')} className="text-neutral-400 hover:text-white transition-colors cursor-pointer">
                {LOCALIZED_UI_STRINGS[lang].nav.work}
              </button>
              <button onClick={() => scrollToSection('implementation')} className="text-neutral-400 hover:text-white transition-colors cursor-pointer">
                {LOCALIZED_UI_STRINGS[lang].nav.process}
              </button>
              <button onClick={() => scrollToSection('audit-section')} className="text-neutral-300 hover:text-swiss-red transition-colors flex items-center gap-1 font-bold cursor-pointer">
                <span className="h-2 w-2 rounded-full bg-swiss-red animate-pulse"></span>
                {LOCALIZED_UI_STRINGS[lang].nav.diagnosticTool}
              </button>
            </nav>

            {/* Header Right CTA & Language Switcher */}
            <div className="hidden md:flex items-center gap-4">
              {/* Premium minimalist Swiss-style language switcher */}
              <div className="flex items-center gap-1 font-mono text-[10px] border border-neutral-800 p-0.5 bg-neutral-950">
                <button 
                  onClick={() => setLang('en')} 
                  className={`px-1.5 py-0.5 transition-all cursor-pointer ${lang === 'en' ? 'bg-swiss-red text-white font-bold' : 'text-neutral-400 hover:text-white'}`}
                >
                  EN
                </button>
                <span className="text-neutral-800 select-none">//</span>
                <button 
                  onClick={() => setLang('de')} 
                  className={`px-1.5 py-0.5 transition-all cursor-pointer ${lang === 'de' ? 'bg-swiss-red text-white font-bold' : 'text-neutral-400 hover:text-white'}`}
                >
                  DE
                </button>
              </div>

              <button 
                onClick={() => scrollToSection('audit-brief-intake')}
                className="bg-white hover:bg-neutral-100 transition-colors text-black text-[11px] font-mono font-bold px-4 py-2 uppercase tracking-wider"
              >
                {LOCALIZED_UI_STRINGS[lang].nav.cta}
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-neutral-400 hover:text-white p-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Dropdown Panels */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-900 bg-neutral-950 p-4 space-y-3 font-mono text-xs uppercase tracking-wider">
            {/* Mobile Language Switcher overlay */}
            <div className="flex items-center justify-between pb-2 border-b border-neutral-900">
              <span className="text-neutral-500 text-[10px]">LANGUAGE // SPRACHE</span>
              <div className="flex items-center gap-1 font-mono text-[10px] border border-neutral-800 p-0.5 bg-neutral-950">
                <button 
                  onClick={() => setLang('en')} 
                  className={`px-2.5 py-0.5 transition-all cursor-pointer ${lang === 'en' ? 'bg-swiss-red text-white font-bold' : 'text-neutral-400'}`}
                >
                  EN
                </button>
                <span className="text-neutral-850 select-none">//</span>
                <button 
                  onClick={() => setLang('de')} 
                  className={`px-2.5 py-0.5 transition-all cursor-pointer ${lang === 'de' ? 'bg-swiss-red text-white font-bold' : 'text-neutral-400'}`}
                >
                  DE
                </button>
              </div>
            </div>

            <button 
              onClick={() => scrollToSection('capabilities')} 
              className="block w-full text-left py-2 text-neutral-400 hover:text-white"
            >
              {LOCALIZED_UI_STRINGS[lang].nav.capabilities}
            </button>
            <button 
              onClick={() => scrollToSection('problem')} 
              className="block w-full text-left py-2 text-neutral-400 hover:text-white"
            >
              {LOCALIZED_UI_STRINGS[lang].nav.diagnosis}
            </button>
            <button 
              onClick={() => scrollToSection('case-studies')} 
              className="block w-full text-left py-2 text-neutral-400 hover:text-white"
            >
              {LOCALIZED_UI_STRINGS[lang].nav.work}
            </button>
            <button 
              onClick={() => scrollToSection('implementation')} 
              className="block w-full text-left py-2 text-neutral-400 hover:text-white"
            >
              {LOCALIZED_UI_STRINGS[lang].nav.process}
            </button>
            <button 
              onClick={() => scrollToSection('audit-section')} 
              className="block w-full text-left py-2 text-swiss-red font-bold"
            >
              {LOCALIZED_UI_STRINGS[lang].nav.diagnosticTool}
            </button>
            <div className="pt-2 border-t border-neutral-900">
              <button 
                onClick={() => scrollToSection('audit-brief-intake')}
                className="w-full bg-swiss-red text-center text-white py-2.5 font-bold uppercase"
              >
                {LOCALIZED_UI_STRINGS[lang].nav.cta}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* SECTION 1: IMMERSIVE DARK HERO SECTION */}
      <section id="hero" className="bg-neutral-950 text-white relative overflow-hidden py-16 lg:py-28">
        {/* Abstract Architectural Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.15] pointer-events-none"></div>
        <div className="absolute top-1/4 right-1/4 h-[400px] w-[400px] bg-swiss-red/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 lg:space-y-16">
          
          {/* Top visual micro bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-900 pb-6">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-swiss-red"></span>
              <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest font-bold">
                {LOCALIZED_UI_STRINGS[lang].hero.vp}
              </span>
            </div>
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
              {LOCALIZED_UI_STRINGS[lang].hero.subtext}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Direct Headline Copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs text-swiss-red tracking-widest font-bold uppercase block">
                [ {LOCALIZED_UI_STRINGS[lang].hero.consultancy} ]
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-neutral-50">
                {LOCALIZED_UI_STRINGS[lang].hero.h1}
              </h1>
              <p className="font-sans text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
                {LOCALIZED_UI_STRINGS[lang].hero.p}
              </p>

              {/* Real-world trust bar inside hero */}
              <div className="bg-neutral-900/60 border border-neutral-800/80 p-4 space-y-2">
                <span className="font-mono text-[9px] text-neutral-500 tracking-wider block uppercase">
                  {LOCALIZED_UI_STRINGS[lang].hero.focus}
                </span>
                <p className="text-xs font-mono text-neutral-300 flex flex-wrap gap-x-4 gap-y-1.5 font-medium">
                  {LOCALIZED_UI_STRINGS[lang].hero.focusItems.map((item, idx) => (
                    <span key={idx}>● {item}</span>
                  ))}
                </p>
              </div>

              {/* Trust signals above fold */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 pt-4 border-t border-neutral-900">
                {LOCALIZED_UI_STRINGS[lang].hero.trust.map((item, idx) => (
                  <div key={idx}>
                    <span className="font-mono text-[9px] text-swiss-red uppercase block font-bold mb-0.5">{item.title}</span>
                    <span className="text-neutral-400 text-[11px] leading-tight block">{item.desc}</span>
                  </div>
                ))}
              </div>

              {/* Main CTA buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button 
                  onClick={() => scrollToSection('audit-brief-intake')}
                  className="bg-swiss-red hover:bg-[#b01e13] transition-colors text-white py-3.5 px-6 text-xs font-mono font-bold uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer"
                >
                  {LOCALIZED_UI_STRINGS[lang].hero.ctas.diagnostic}
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => scrollToSection('capabilities')}
                  className="border border-neutral-700 hover:border-neutral-400 bg-neutral-950 hover:bg-neutral-900 transition-colors text-white py-3.5 px-6 text-xs font-mono uppercase tracking-widest text-center cursor-pointer"
                >
                  {LOCALIZED_UI_STRINGS[lang].hero.ctas.capabilities}
                </button>
              </div>
            </div>

            {/* Right side: Modern commercial systems diagnostic intelligence panel */}
            <div className="lg:col-span-5">
              <div className="border border-neutral-800 bg-neutral-900/40 p-5 font-mono text-[10px] text-neutral-300 relative space-y-4 rounded-none overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] bg-[size:12px_12px] opacity-10 pointer-events-none"></div>
                
                <div className="relative z-10 flex items-center justify-between border-b border-neutral-800 pb-3">
                  <span className="flex items-center gap-1.5 text-neutral-300 font-bold uppercase tracking-wider">
                    <Layers className="h-4 w-4 text-swiss-red" />
                    {LOCALIZED_UI_STRINGS[lang].hero.telemetry.title}
                  </span>
                  <span className="text-[9px] text-zinc-400 bg-neutral-950 px-1.5 py-0.5 border border-neutral-850 font-medium">
                    {LOCALIZED_UI_STRINGS[lang].hero.telemetry.badge}
                  </span>
                </div>

                <div className="relative z-10 space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[9px] text-neutral-500 font-bold">
                      <span>{LOCALIZED_UI_STRINGS[lang].hero.telemetry.efficiency}</span>
                      <span>{LOCALIZED_UI_STRINGS[lang].hero.telemetry.conversion}</span>
                    </div>
                    <div className="h-1.5 bg-neutral-800 w-full">
                      <div className="h-full bg-swiss-red w-4/5"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[9px]">
                    <div className="bg-neutral-950 p-2.5 border border-neutral-850">
                      <span className="text-neutral-500 uppercase font-bold text-[8px] block">
                        {LOCALIZED_UI_STRINGS[lang].hero.telemetry.verification}
                      </span>
                      <span className="text-neutral-200">
                        {LOCALIZED_UI_STRINGS[lang].hero.telemetry.verificationVal}
                      </span>
                    </div>
                    <div className="bg-neutral-950 p-2.5 border border-neutral-850">
                      <span className="text-neutral-500 uppercase font-bold text-[8px] block">
                        {LOCALIZED_UI_STRINGS[lang].hero.telemetry.velocity}
                      </span>
                      <span className="text-neutral-200">
                        {LOCALIZED_UI_STRINGS[lang].hero.telemetry.velocityVal}
                      </span>
                    </div>
                  </div>

                  <div className="bg-neutral-950 p-2 border border-neutral-850 flex items-center justify-between text-[9px] text-zinc-400 space-x-2">
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
                      <span>{LOCALIZED_UI_STRINGS[lang].hero.telemetry.status}</span>
                    </div>
                    <span className="text-neutral-500">
                      {LOCALIZED_UI_STRINGS[lang].hero.telemetry.recovery}
                    </span>
                  </div>
                </div>

                <div className="relative z-10 text-[9px] text-neutral-500 leading-relaxed border-t border-neutral-800 pt-3">
                  {LOCALIZED_UI_STRINGS[lang].hero.telemetry.explainer}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2: SHARP PROBLEM SECTION */}
      <section id="problem" className="py-20 lg:py-28 bg-white border-b border-neutral-200 text-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Lefthand Header */}
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs text-swiss-red tracking-widest font-bold uppercase block">
                [ {LOCALIZED_UI_STRINGS[lang].problem.tag} ]
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-955 leading-none">
                {LOCALIZED_UI_STRINGS[lang].problem.h2}
              </h2>
              <div className="h-1 w-12 bg-swiss-red"></div>
            </div>

            {/* Righthand Brutal Diagnosis Details */}
            <div className="lg:col-span-7 space-y-6 text-neutral-700">
              <p className="text-base sm:text-lg font-medium text-neutral-950 leading-relaxed">
                {LOCALIZED_UI_STRINGS[lang].problem.p}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {LOCALIZED_UI_STRINGS[lang].problem.pillars.map((pillar, idx) => (
                  <div key={idx} className="space-y-2 border-l border-neutral-200 pl-4 py-1 hover:border-swiss-red transition-colors">
                    <h4 className="font-display text-sm font-bold text-neutral-900 tracking-wider uppercase">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-neutral-50 border border-neutral-200/80 text-xs font-mono font-medium text-neutral-700 flex items-start gap-3 mt-4">
                <AlertTriangle className="h-5 w-5 text-swiss-red flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-neutral-950 font-bold uppercase block mb-1">
                    {LOCALIZED_UI_STRINGS[lang].problem.truthTitle}
                  </strong>
                  {LOCALIZED_UI_STRINGS[lang].problem.truthDesc}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: WHAT WE DO (CAPABILITIES EXPLORER) */}
      <section id="capabilities" className="py-20 lg:py-28 bg-brand-50 text-neutral-900 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-6">
            <div>
              <span className="font-mono text-xs text-swiss-red tracking-widest font-bold uppercase block mb-2">
                {LOCALIZED_UI_STRINGS[lang].capabilities.tag}
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-none">
                {LOCALIZED_UI_STRINGS[lang].capabilities.h2}
              </h2>
            </div>
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest max-w-sm sm:text-right">
              {LOCALIZED_UI_STRINGS[lang].capabilities.p}
            </p>
          </div>

          <CapabilitiesExplorer lang={lang} />

        </div>
      </section>

      {/* SECTION 4: PRODUCTIZED CONSULTING OFFER ("COMMERCIAL SYSTEMS AUDIT") */}
      <section id="signature-offer" className="py-20 lg:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs text-swiss-red tracking-widest font-bold uppercase block">
                [ {LOCALIZED_UI_STRINGS[lang].signature.tag} ]
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950">
                {LOCALIZED_UI_STRINGS[lang].signature.h2}
              </h2>
              <div className="font-mono text-xs tracking-widest text-neutral-500 uppercase mt-2">
                {LOCALIZED_UI_STRINGS[lang].signature.subtitle}
              </div>
            </div>

            <div className="lg:col-span-7 bg-neutral-50 border border-neutral-200 p-6 md:p-8 space-y-6 flex flex-col justify-between">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-neutral-200">
                <div className="text-neutral-900 font-bold font-sans">
                  {LOCALIZED_UI_STRINGS[lang].signature.blueprintTitle}
                </div>
                <div className="bg-neutral-950 text-white font-mono text-sm px-4 py-1.5 font-bold border border-neutral-800">
                  {LOCALIZED_UI_STRINGS[lang].signature.price}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {LOCALIZED_UI_STRINGS[lang].signature.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle className="h-4.5 w-4.5 text-swiss-red flex-shrink-0 mt-0.5" />
                    <span dangerouslySetInnerHTML={{ __html: bullet }}></span>
                  </div>
                ))}
              </div>

              <div className="border-t border-neutral-200 pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs font-mono text-neutral-500">
                  {LOCALIZED_UI_STRINGS[lang].signature.status}
                </span>
                <button
                  onClick={() => scrollToSection('audit-section')}
                  className="bg-neutral-950 hover:bg-neutral-800 transition-colors text-white py-2 px-4 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  {LOCALIZED_UI_STRINGS[lang].signature.cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5: INTERACTIVE PIPELINE FRICTION SIMULATOR */}
      <section id="audit-section" className="py-20 lg:py-24 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="font-mono text-xs text-swiss-red tracking-widest font-bold uppercase">
              {LOCALIZED_UI_STRINGS[lang].simulator.tag}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-50">
              {LOCALIZED_UI_STRINGS[lang].simulator.h2}
            </h2>
            <p className="text-sm text-neutral-400">
              {LOCALIZED_UI_STRINGS[lang].simulator.p}
            </p>
          </div>

          <CommercialSystemSimulator lang={lang} onSelectAuditAction={handleAuditActionApplied} />

        </div>
      </section>

      {/* SECTION 6: FROM AUDIT TO IMPLEMENTATION TIMELINE */}
      <section id="implementation" className="py-20 lg:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl">
            <span className="font-mono text-xs text-swiss-red tracking-widest font-bold uppercase block mb-2">
              {LOCALIZED_UI_STRINGS[lang].implementation.tag}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-neutral-955 tracking-tight">
              {LOCALIZED_UI_STRINGS[lang].implementation.h2}
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              {LOCALIZED_UI_STRINGS[lang].implementation.p}
            </p>
          </div>

          <Timeline lang={lang} />

        </div>
      </section>

      {/* SECTION 7: TARGET CLIENTS ("WHO WE WORK WITH") */}
      <section id="target-clients" className="py-20 lg:py-28 bg-brand-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="border-b border-neutral-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-swiss-red tracking-widest font-bold uppercase block mb-1">
                {LOCALIZED_UI_STRINGS[lang].target.tag}
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-none">
                {LOCALIZED_UI_STRINGS[lang].target.h2}
              </h2>
            </div>
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest max-w-sm sm:text-right leading-relaxed font-bold">
              {LOCALIZED_UI_STRINGS[lang].target.warning}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TARGET_CLIENTS[lang].map((client, idx) => (
              <div 
                key={idx}
                className="border border-neutral-200 bg-white p-6 flex flex-col justify-between hover:border-neutral-400 transition-colors"
              >
                <div className="space-y-3">
                  <div className="h-5.5 w-5.5 bg-neutral-900/10 text-neutral-905 flex items-center justify-center text-xs font-mono font-bold text-neutral-900 rounded-none">
                    0{idx+1}
                  </div>
                  <h3 className="font-display text-base font-bold text-neutral-955 tracking-tight">
                    {client.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {client.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 8: CASE STUDY / SELECTED WORK */}
      <section id="case-studies" className="py-20 lg:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl">
            <span className="font-mono text-xs text-swiss-red tracking-widest font-bold uppercase block mb-2">
              {LOCALIZED_UI_STRINGS[lang].caseStudies.tag}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-neutral-955 tracking-tight">
              {LOCALIZED_UI_STRINGS[lang].caseStudies.h2}
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              {LOCALIZED_UI_STRINGS[lang].caseStudies.p}
            </p>
          </div>

          <SelectedWork lang={lang} />

        </div>
      </section>

      {/* SECTION 9: WHY AFFEXAI */}
      <section id="why-us" className="py-20 lg:py-28 bg-neutral-950 text-white relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px] opacity-[0.08] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="border-b border-neutral-900 pb-6 text-center lg:text-left">
            <span className="font-mono text-xs text-swiss-red tracking-widest font-bold uppercase block mb-2">
              {LOCALIZED_UI_STRINGS[lang].whyUs.tag}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-neutral-100 tracking-tight leading-none">
              {LOCALIZED_UI_STRINGS[lang].whyUs.h2}
            </h2>
            <p className="text-sm font-mono text-swiss-red mt-3 uppercase tracking-wider font-bold">
              {LOCALIZED_UI_STRINGS[lang].whyUs.quote}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Standard B2B Rules List */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {WHY_US_PILLARS[lang].map((pillar, idx) => (
                <div 
                  key={idx}
                  className="bg-neutral-900/40 border border-neutral-900 p-6 space-y-3 relative hover:border-neutral-800 transition-colors"
                >
                  <span className="font-mono text-xs text-swiss-red font-bold">
                    [ PILLAR {pillar.num} ]
                  </span>
                  <h4 className="font-display text-base font-bold text-neutral-100 tracking-tight">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Custom visual Swiss grid layout explaining Outcomes */}
            <div className="lg:col-span-5 bg-neutral-900 border border-neutral-800 p-6 space-y-6">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest font-bold border-b border-neutral-800 pb-3">
                {LOCALIZED_UI_STRINGS[lang].whyUs.metricTitle}
              </div>
              <blockquote className="space-y-4">
                <p className="font-display text-lg font-bold text-neutral-100 leading-snug">
                  {LOCALIZED_UI_STRINGS[lang].whyUs.blockquote}
                </p>
                <div className="font-mono text-[10px] text-zinc-500 uppercase">
                  {LOCALIZED_UI_STRINGS[lang].whyUs.author}
                </div>
              </blockquote>

              <div className="p-4 bg-neutral-950 border border-neutral-850 text-xs font-mono text-neutral-400">
                <span className="text-white font-bold block mb-1">{LOCALIZED_UI_STRINGS[lang].whyUs.compliance}</span>
                {LOCALIZED_UI_STRINGS[lang].whyUs.complianceDesc}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 9.5: PRINCIPAL STORY SECTION - SHORT & CONFIDENT */}
      <section id="principal-story" className="py-20 lg:py-24 bg-white text-neutral-950 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-3">
              <span className="font-mono text-xs text-swiss-red tracking-widest font-bold uppercase block">
                [ {LOCALIZED_UI_STRINGS[lang].principalStory.tag} ]
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-955 leading-none">
                {LOCALIZED_UI_STRINGS[lang].principalStory.h2}
              </h2>
              <div className="h-1 w-12 bg-swiss-red mt-4"></div>
            </div>

            <div className="lg:col-span-7 space-y-4 text-neutral-800 text-sm md:text-base leading-relaxed">
              <p className="font-display text-lg font-bold text-neutral-955">
                {LOCALIZED_UI_STRINGS[lang].principalStory.p1}
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {LOCALIZED_UI_STRINGS[lang].principalStory.p2}
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {LOCALIZED_UI_STRINGS[lang].principalStory.p3}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 10: PROCESS STEPS (6 STEPS IN GRAPHIC) */}
      <section id="process-steps" className="py-20 lg:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="font-mono text-xs text-swiss-red tracking-widest font-bold uppercase">
              {LOCALIZED_UI_STRINGS[lang].process.tag}
            </span>
            <h2 className="font-display text-3xl font-extrabold text-neutral-955 tracking-tight">
              {LOCALIZED_UI_STRINGS[lang].process.h2}
            </h2>
            <p className="text-xs text-neutral-500 font-mono uppercase tracking-widest">
              {LOCALIZED_UI_STRINGS[lang].process.p}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {PROCESS_STEPS[lang].map((step, idx) => (
              <div 
                key={idx}
                className="bg-neutral-50 border border-neutral-100 p-5 space-y-3 hover:bg-neutral-900 hover:text-white group transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xs text-swiss-red font-bold group-hover:text-white">
                    {step.unit}
                  </div>
                  <h4 className="font-display text-base font-bold text-neutral-900 tracking-tight group-hover:text-white pt-2">
                    {step.title}
                  </h4>
                </div>
                <p className="text-[10px] uppercase font-mono text-neutral-400 group-hover:text-neutral-500 mt-2 font-medium">
                  {step.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 11: CTA SECTION */}
      <section className="py-16 bg-neutral-950 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">
            {LOCALIZED_UI_STRINGS[lang].ctaBlock.h2}
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
            {LOCALIZED_UI_STRINGS[lang].ctaBlock.p}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <button
              onClick={() => scrollToSection('audit-section')}
              className="bg-white text-black hover:bg-neutral-100 transition-colors py-3 px-6 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
            >
              {LOCALIZED_UI_STRINGS[lang].ctaBlock.cta}
              <ArrowRight className="h-4 w-4 text-swiss-red" />
            </button>
            <button
              onClick={() => scrollToSection('audit-brief-intake')}
              className="border border-neutral-800 bg-neutral-900 text-neutral-300 hover:bg-neutral-800 transition-colors py-3 px-6 text-xs font-mono uppercase tracking-wider text-center cursor-pointer"
            >
              {LOCALIZED_UI_STRINGS[lang].ctaBlock.secondary}
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 12: DUAL INPUT SUBMISSION & INGESTION BLOCK (CONTACT) */}
      <section id="audit-brief-intake" className="py-20 lg:py-28 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center sm:text-left space-y-2 border-b border-neutral-200 pb-5">
            <span className="font-mono text-xs text-swiss-red tracking-widest font-bold uppercase">
              {LOCALIZED_UI_STRINGS[lang].contact.tag}
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-neutral-955 tracking-tight leading-none pt-2">
              {LOCALIZED_UI_STRINGS[lang].contact.h2}
            </h2>
            <p className="text-sm text-neutral-500 mt-1">
              {LOCALIZED_UI_STRINGS[lang].contact.p}
            </p>
          </div>

          <ContactForm 
            lang={lang}
            prefilledAuditData={prefilledAudit} 
            onClearPrefill={() => setPrefilledAudit(null)} 
          />

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-955 text-white py-12 border-t border-neutral-900 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-neutral-900 pb-8">
            
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-swiss-red text-white h-6 w-6 flex items-center justify-center font-bold font-display text-xs">A</div>
                <span className="font-display text-sm font-bold tracking-widest">AFFEXAI</span>
              </div>
              <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest leading-relaxed">
                {LOCALIZED_UI_STRINGS[lang].footer.vp}
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
                {LOCALIZED_UI_STRINGS[lang].footer.p}
              </p>
            </div>

            <div className="md:col-span-3 space-y-3">
              <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                {LOCALIZED_UI_STRINGS[lang].footer.anchors}
              </div>
              <ul className="text-xs font-mono space-y-2 uppercase text-neutral-400">
                <li><button onClick={() => scrollToSection('hero')} className="hover:text-white text-left">{LOCALIZED_UI_STRINGS[lang].footer.legal.impressum === 'IMPRESSUM' ? 'Home' : 'Startseite'}</button></li>
                <li><button onClick={() => scrollToSection('capabilities')} className="hover:text-white text-left">{LOCALIZED_UI_STRINGS[lang].nav.capabilities}</button></li>
                <li><button onClick={() => scrollToSection('implementation')} className="hover:text-white text-left">{LOCALIZED_UI_STRINGS[lang].nav.process}</button></li>
                <li><button onClick={() => scrollToSection('case-studies')} className="hover:text-white text-left">{LOCALIZED_UI_STRINGS[lang].nav.work}</button></li>
                <li><button onClick={() => scrollToSection('audit-brief-intake')} className="hover:text-white text-left">{LOCALIZED_UI_STRINGS[lang].nav.cta}</button></li>
              </ul>
            </div>

            <div className="md:col-span-4 space-y-3 text-neutral-400 text-xs">
              <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                {LOCALIZED_UI_STRINGS[lang].footer.locationsTitle}
              </div>
              <div className="space-y-1 leading-relaxed">
                {LOCALIZED_UI_STRINGS[lang].footer.locations.map((loc, idx) => (
                  <div key={idx} className={idx === 2 ? "text-zinc-500 mt-2 font-mono text-[10px]" : ""}>
                    {loc}
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-zinc-500 gap-4">
            <div>
              {LOCALIZED_UI_STRINGS[lang].footer.rights.replace('{year}', new Date().getFullYear().toString())}
            </div>
            <div className="flex gap-4">
              <span className="hover:text-neutral-300 pointer-events-none">{LOCALIZED_UI_STRINGS[lang].footer.legal.impressum}</span>
              <span className="hover:text-neutral-300 pointer-events-none">{LOCALIZED_UI_STRINGS[lang].footer.legal.datenschutz}</span>
              <span className="hover:text-neutral-300 pointer-events-none">{LOCALIZED_UI_STRINGS[lang].footer.legal.version}</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
