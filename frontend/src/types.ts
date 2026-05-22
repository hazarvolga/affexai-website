export type Language = 'en' | 'de';

export interface ServiceCard {
  id: string;
  title: string;
  tag: string;
  description: string;
  deliverables: string[];
  metrics: string;
}

export interface AuditCheckpoint {
  id: string;
  category: string;
  question: string;
  impactLevel: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  description: string;
}

export interface TimelinePhase {
  phase: string;
  title: string;
  duration: string;
  description: string;
  bullets: string[];
}

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  clientType: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: CaseStudyMetric[];
}

export interface ContactFormData {
  name: string;
  company: string;
  role: string;
  industry: string;
  email: string;
  website: string;
  needs: string[];
  budget: string;
  timeline: string;
  message: string;
}

