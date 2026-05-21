import { ServiceCard, AuditCheckpoint, TimelinePhase } from './types';

export const SERVICES: ServiceCard[] = [
  {
    id: 'b2b-presence',
    tag: 'SYSTEM 01',
    title: 'Executive Credibility Infrastructure',
    description: 'High-trust digital structures for technical organizations where engineering accuracy, domain authority, and corporate credibility dictate capital allocation decisions.',
    deliverables: [
      'Engineered Swiss-Grid Visual Frameworks',
      'Technical Schema & High-Consequence System Maps',
      'Core Performance & Operational Response Tuning',
      'Institutional Trust & Pre-Qualification Visuals'
    ],
    metrics: '99.9% Uptime | <1.2s Core Index Latency'
  },
  {
    id: 'ai-qualification',
    tag: 'SYSTEM 02',
    title: 'Lead Qualification Systems',
    description: 'Automated inbound intent filtering, complex technical criteria evaluations, profile verification, and clean CRM opportunity routing.',
    deliverables: [
      'Automated Inbound Request Identification',
      'Context-Aware Procurement Document Analysis',
      'Multi-Source Data Ingestion Frameworks',
      'Enterprise Handshakes (HubSpot, Salesforce, Pipedrive)'
    ],
    metrics: '-65% Qualification Response Latency'
  },
  {
    id: 'proposal-auto',
    tag: 'SYSTEM 03',
    title: 'Commercial Proposal Automation',
    description: 'Engineered pipelines that unify product specifications, technical parameters, and pricing matrices into standardized, compliant enterprise proposals.',
    deliverables: [
      'Dynamic Parameter-Driven Quotation Generators',
      'Automated Multi-Tier Authorization Pipelines',
      'Symmetric Database & Inventory Synchronization',
      'Configurators Replacing Multi-Hour Excel Work'
    ],
    metrics: 'Reduces manual pricing labor by up to 80%'
  },
  {
    id: 'operations-arch',
    tag: 'SYSTEM 04',
    title: 'Commercial Systems Architecture',
    description: 'Zero-bloat bridges connecting commercial pipelines with engineering and operational reality, removing post-sale friction and delivery bottlenecks.',
    deliverables: [
      'Standardized Cross-Department Channels',
      'Symmetric Database Transaction Syncing',
      'Validated Handover Logging Protocols',
      'Legacy Tech Infrastructure Modernization'
    ],
    metrics: '100% Structural Sync Integrity'
  }
];

export const AUDIT_CHECKPOINTS: AuditCheckpoint[] = [
  {
    id: 'positioning',
    category: 'Credibility Infrastructure',
    question: 'Does your digital system explain what you engineer, who you engineer it for, and your precise specifications without empty marketing buzzwords?',
    impactLevel: 'CRITICAL',
    description: 'Vague text alienates industrial procurement decision-makers, who search strictly for verified technical qualifications, tolerances, and domain specialism.'
  },
  {
    id: 'qualification',
    category: 'Lead Qualification',
    question: 'Are incoming inquiries automatically pre-validated using industry-specific parameters before securing slots on your technical directors’ calendars?',
    impactLevel: 'HIGH',
    description: 'Unfiltered bookings waste precious founding partner hours on low-ticket or irrelevant meetings, diverting focus from highly qualified client bids.'
  },
  {
    id: 'proposals',
    category: 'Commercial Operations',
    question: 'Does compiling a custom commercial proposal require your key engineering leads or partners over 30 minutes of manual transcription?',
    impactLevel: 'CRITICAL',
    description: 'Repetitive clerical bidding drains expensive technical talent from client delivery, proprietary project design, and strategic operations.'
  },
  {
    id: 'data_synchronization',
    category: 'Systems Integration',
    question: 'Are project specifications and inventory metrics segmented across scattered emails, chat threads, and unlinked storage units?',
    impactLevel: 'HIGH',
    description: 'Disconnected data silos create operational latency. Scope gaps go unnoticed, leading to delivery delays and expensive custom corrections.'
  },
  {
    id: 'ai_enrichment',
    category: 'Ingestion Automation',
    question: 'Is your firm ignoring automated ingestion frameworks to parse incoming client tender blueprints, RFQs, or custom request drafts?',
    impactLevel: 'MEDIUM',
    description: 'Modern pre-parsing engines reading complex 50-page tenders instantly flag operational conflicts, regulatory gaps, or contract anomalies.'
  }
];

export const TIMELINE_PHASES: TimelinePhase[] = [
  {
    phase: 'PHASE 01',
    title: 'Discovery & Commercial Audit',
    duration: 'Week 1 — Week 2',
    description: 'A deep forensic mapping of your digital positioning, incoming lead vectors, manual friction points, and infrastructure debt.',
    bullets: [
      'Diagnostic interviews with core sales & delivery teams',
      'Comprehensive content and commercial messaging critique',
      'Symptomatic mapping of manual proposal/qualification bottlenecks',
      'Formal Audit Document detailing immediate technical opportunities'
    ]
  },
  {
    phase: 'PHASE 02',
    title: 'UX, Positioning & System Architecture',
    duration: 'Week 3 — Week 4',
    description: 'Translating findings into concrete user flow diagrams, content structures, and clear technical specifications.',
    bullets: [
      'Symmetric content organization & site architecture maps',
      'Wireframing interactive forms and technical system interfaces',
      'Drafting precise, industrial-standard technical copywriting',
      'Drafting the integration map between your frontend and CRM'
    ]
  },
  {
    phase: 'PHASE 03',
    title: 'Frontend & Workflow Build',
    duration: 'Week 5 — Week 8',
    description: 'Developing high-speed, pixel-perfect user interfaces and connecting automation connectors to secure databases.',
    bullets: [
      'Building ultra-fast responsive React web systems',
      'Configuring automated qualification questionnaires and calculators',
      'Writing secure background routines or server proxies to connect AI features',
      'Rigorous integration testing of email, client calendars, and CRM channels'
    ]
  },
  {
    phase: 'PHASE 04',
    title: 'Optimization & Delivery Success',
    duration: 'Ongoing',
    description: 'Deploying the system onto reliable infrastructure, educating team members, and tuning key components.',
    bullets: [
      'Smooth cutover with zero downtime on modern servers',
      'Post-launch speed checkups and schema validation',
      'Interactive dashboard telemetry and secure lead delivery',
      'Quarterly system efficiency scaling audits'
    ]
  }
];

export const PROCESS_STEPS = [
  { unit: '01', title: 'Diagnose', label: 'Commercial Audit & Friction Mapping' },
  { unit: '02', title: 'Position', label: 'Structured Technical Messaging Design' },
  { unit: '03', title: 'Design', label: 'Swiss-Grid High-Credibility UX' },
  { unit: '04', title: 'Build', label: 'Ultra-Fast Responsive React Frontend' },
  { unit: '05', title: 'Automate', label: 'Lead Ingestion & Proposal Pipelines' },
  { unit: '06', title: 'Optimize', label: 'Continuous Telemetry & Conversion Tuning' }
];

export const TARGET_CLIENTS = [
  {
    title: 'Engineering Firms',
    desc: 'Organizations with sophisticated technical offerings that require absolute precision to claim market authority and pass executive evaluation.'
  },
  {
    title: 'Industrial Suppliers',
    desc: 'B2B vendors requiring structural quotation systems to replace error-prone spreadsheets with automated parameter-driven pricing pipelines.'
  },
  {
    title: 'Technical Service Businesses',
    desc: 'Specialized corporate consultancies and laboratories handling high-value enterprise service level agreements.'
  },
  {
    title: 'Infrastructure Companies',
    desc: 'Contractors managing complex capital projects who need structured digital credibility systems to secure high-trust public-private partnerships.'
  },
  {
    title: 'Manufacturing Operations',
    desc: 'Factories and custom parts builders requiring direct procurement-ready interfaces with zero communication delay.'
  }
];

export const WHY_US_PILLARS = [
  {
    num: '01',
    title: 'Principal-Led Execution',
    desc: 'You partner directly with founding systems consultants who have engineered real operational pipelines. No junior account managers, no billing markup, and no communication latency.'
  },
  {
    num: '02',
    title: 'Automation as Serious Leverage',
    desc: 'We do not build gimmicky chatbots or add generic AI illustrations. We custom-engineer back-office workflows, request ingestion parses, and database-level rules.'
  },
  {
    num: '03',
    title: 'Commercial Clarity Over Fluff',
    desc: 'We map system parameters to commercial outcomes. Your digital architecture is either an active asset that filters and books qualified pipeline, or it is a cost.'
  },
  {
    num: '04',
    title: 'We Don’t Sell Hours',
    desc: 'All custom installations are targeted to precise operational criteria. We diagnose failure modes, redesign system architecture, build, and hand over the keys.'
  }
];
