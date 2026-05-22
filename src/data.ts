import { ServiceCard, AuditCheckpoint, TimelinePhase, CaseStudy, Language } from './types';

export const SERVICES: Record<Language, ServiceCard[]> = {
  en: [
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
        'Commercial Data Intake Frameworks',
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
  ],
  de: [
    {
      id: 'b2b-presence',
      tag: 'SYSTEM 01',
      title: 'Executive Credibility Infrastruktur',
      description: 'Digitale Hochsicherheits-Strukturen für hochtechnologische B2B-Unternehmen, in denen technische Präzision, Fachkompetenz und unternehmerische Glaubwürdigkeit über Kapitalallokationen entscheiden.',
      deliverables: [
        'Präzise strukturierte Swiss-Grid Visual Frameworks',
        'Technische Schemata & High-Consequence System-Mappings',
        'Optimierung der Kernperformance & Antwortgeschwindigkeiten',
        'Institutionelles Vertrauen & visuelle Qualifizierungsnachweise'
      ],
      metrics: '99,9% Uptime | <1,2s Core-Index Latenz'
    },
    {
      id: 'ai-qualification',
      tag: 'SYSTEM 02',
      title: 'Lead-Qualifizierungssysteme',
      description: 'Automatisierte Filterung eingehender Anfragen, komplexe technische Kriterienbewertungen, Profilverifizierung und direktes Routing qualifizierter Leads in Ihr CRM.',
      deliverables: [
        'Automatisierte Erkennung eingehender Anfragen',
        'Kontextsensitive Analyse von Ausschreibungsunterlagen',
        'Frameworks zur strukturierten kaufmännischen Datenaufnahme',
        'Enterprise-Systemkoppelungen (HubSpot, Salesforce, Pipedrive)'
      ],
      metrics: '-65% Latenzzeit bei Lead-Qualifizierung'
    },
    {
      id: 'proposal-auto',
      tag: 'SYSTEM 03',
      title: 'Automatisierung von Angebotsprozessen',
      description: 'Maßgeschneiderte Pipelines, die Produktspezifikationen, technische Parameter und Preismatrizen in standardisierte, rechtskonforme Großkunden-Angebote überführen.',
      deliverables: [
        'Dynamische, parametergesteuerte Angebotsgeneratoren',
        'Automatisierte, mehrstufige Freigabeprozesse (Multi-Tier)',
        'Symmetrische Datenbank- & Bestands-Synchronisation',
        'Web-Konfiguratoren zur Eliminierung stundenlanger Excel-Handarbeit'
      ],
      metrics: 'Reduziert manuellen Preiskalkulationsaufwand um bis zu 80%'
    },
    {
      id: 'operations-arch',
      tag: 'SYSTEM 04',
      title: 'Kaufmännische Systemarchitektur',
      description: 'Schlanke Integrationsbrücken, die Ihre Vertriebskanäle direkt mit der operativen Abwicklung verbinden, um Übergabereibungen und Engpässe zu eliminieren.',
      deliverables: [
        'Standardisierte, abteilungsübergreifende Datenkanäle',
        'Symmetrische Synchronisation von DB-Transaktionen',
        'Validierte Protokollierung bei der Projektabgabe',
        'Modernisierung veralteter technologischer Infrastruktur'
      ],
      metrics: '100% strukturelle Synchronisationsintegrität'
    }
  ]
};

export const AUDIT_CHECKPOINTS: Record<Language, AuditCheckpoint[]> = {
  en: [
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
      category: 'Commercial Intake Automation',
      question: 'Is your firm ignoring structured ingestion frameworks to parse incoming client tender blueprints, RFQs, or custom request drafts?',
      impactLevel: 'MEDIUM',
      description: 'Modern pre-parsing engines reading complex 50-page tenders instantly flag operational conflicts, regulatory gaps, or contract anomalies.'
    }
  ],
  de: [
    {
      id: 'positioning',
      category: 'Glaubwürdigkeits-Infrastruktur',
      question: 'Erklärt Ihr digitales System ohne leere Marketing-Floskeln präzise, was Sie entwickeln, für wen Sie es entwickeln und welche Spezifikationen Sie einhalten?',
      impactLevel: 'CRITICAL',
      description: 'Vage Formulierungen schrecken Einkäufer in der Industrie ab. Diese suchen gezielt nach verifizierten technischen Qualifikationen, Toleranzen und Fachkompetenz.'
    },
    {
      id: 'qualification',
      category: 'Lead-Qualifizierung',
      question: 'Werden eingehende Anfragen automatisch anhand branchenspezifischer Parameter vorvalidiert, bevor Termine in den Kalendern Ihrer technischen Leiter gebucht werden?',
      impactLevel: 'HIGH',
      description: 'Ungefilterte Buchungen verschwenden wertvolle Arbeitsstunden der Partner für irrelevante Termine und lenken den Fokus von hochqualifizierten Kundenangeboten ab.'
    },
    {
      id: 'proposals',
      category: 'Kaufmännische Prozesse',
      question: 'Erfordert die Erstellung eines individuellen Angebots mehr als 30 Minuten manuelle Schreibarbeit durch Ihre leitenden Ingenieure oder Partner?',
      impactLevel: 'CRITICAL',
      description: 'Repetitive, administrative Angebotserstellung bindet teure technische Fachkräfte, die ansonsten für Kundenprojekte, Produktentwicklung oder kundennahe Aufgaben frei wären.'
    },
    {
      id: 'data_synchronization',
      category: 'Systemintegration',
      question: 'Sind Projektspezifikationen und Bestandsdaten über verstreute E-Mails, Chat-Verläufe und ungekoppelte Speichersysteme verteilt?',
      impactLevel: 'HIGH',
      description: 'Isolierte Datensilos führen zu Verzögerungen. Lücken im Projektumfang bleiben unbemerkt, was zu Lieferverzögerungen und teuren nachträglichen Korrekturen führt.'
    },
    {
      id: 'ai_enrichment',
      category: 'Automatisierung des Inputs',
      question: 'Ignoriert Ihr Unternehmen strukturierte Ingestions-Frameworks zur automatischen Analyse von Kundenplänen, Ausschreibungen (RFQs) oder individuellen Entwürfen?',
      impactLevel: 'MEDIUM',
      description: 'Moderne Voranalyse-Engines können komplexe, 50-seitige Ausschreibungen sofort durchleuten und betriebliche Konflikte, regulatorische Lücken oder Vertragsanomalien aufdecken.'
    }
  ]
};

export const TIMELINE_PHASES: Record<Language, TimelinePhase[]> = {
  en: [
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
      title: 'Interface & Workflow Build',
      duration: 'Week 5 — Week 8',
      description: 'Developing high-speed, pixel-perfect user interfaces and connecting automation connectors to secure databases.',
      bullets: [
        'Building ultra-fast responsive React interfaces',
        'Configuring automated qualification questionnaires and calculators',
        'Writing secure background routines or server proxies to connect workflow services',
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
        'Commercial review reporting and secure lead delivery',
        'Quarterly system efficiency scaling audits'
      ]
    }
  ],
  de: [
    {
      phase: 'PHASE 01',
      title: 'Discovery & Kommerzielles Audit',
      duration: 'Woche 1 — Woche 2',
      description: 'Eine tiefgehende forensische Erfassung Ihrer digitalen Positionierung, eingehenden Lead-Kanäle, manuellen Reibungspunkte und technischen Altschulden.',
      bullets: [
        'Diagnostische Interviews mit Vertriebs- und Projektteams',
        'Umfassende Analyse der kommerziellen Positionierung und Ansprache',
        'Symptomatische Erfassung manueller Angebots- und Qualifizierungsengpässe',
        'Formales Audit-Dokument mit konkreten technischen Optimierungspotenzialen'
      ]
    },
    {
      phase: 'PHASE 02',
      title: 'UX, Positionierung & Systemarchitektur',
      duration: 'Woche 3 — Woche 4',
      description: 'Übersetzung der Erkenntnisse in konkrete User-Flow-Diagramme, Inhaltsstrukturen und präzise technische Spezifikationen.',
      bullets: [
        'Symmetrische Inhaltsarchitektur und Sitemap-Strukturen',
        'Wireframing interaktiver Formulare und technischer Systemschnittstellen',
        'Erstellung präziser, industriespezifischer Fach- und Marketingtexte',
        'Konzeption der systemischen Schnittstellenkarte zwischen Frontend und CRM'
      ]
    },
    {
      phase: 'PHASE 03',
      title: 'Interface-Entwicklung & Workflow-Setup',
      duration: 'Woche 5 — Woche 8',
      description: 'Entwicklung extrem schneller, pixelgenauer Benutzeroberflächen und Ankopplung sicherer Automations-Konnektoren.',
      bullets: [
        'Entwicklung performanter, responsiver React-Interfaces',
        'Konfiguration automatisierter Qualifizierungs-Formulare und Tarifrechner',
        'Entwicklung sicherer Hintergrundroutinen und Server-Proxies für Workflow-Tools',
        'Umfassende Integrationstests für E-Mails, Kalendersysteme und CRM-Kanäle'
      ]
    },
    {
      phase: 'PHASE 04',
      title: 'Optimierung & Kontinuierliche Skalierung',
      duration: 'Fortlaufend',
      description: 'Deployment des Gesamtsystems auf robuster Infrastruktur, Einweisung des Teams und fortlaufendes Tuning.',
      bullets: [
        'Unterbrechungsfreier System-Cutover auf modernen Cloud-Servern',
        'Geschwindigkeitsprüfungen und Schema-Validierungen nach dem Start',
        'Regelmäßiges Effizienz-Reporting und optimierte Lead-Zustellung',
        'Vierteljährliche Audits zur kaufmännischen Systemeffizienz'
      ]
    }
  ]
};

export const PROCESS_STEPS: Record<Language, { unit: string; title: string; label: string }[]> = {
  en: [
    { unit: '01', title: 'Diagnose', label: 'Commercial Audit & Friction Mapping' },
    { unit: '02', title: 'Position', label: 'Structured Technical Messaging Design' },
    { unit: '03', title: 'Design', label: 'Swiss-Grid High-Credibility UX' },
    { unit: '04', title: 'Build', label: 'Ultra-Fast Responsive React Interfaces' },
    { unit: '05', title: 'Automate', label: 'Lead Qualification & Proposal Pipelines' },
    { unit: '06', title: 'Optimize', label: 'Continuous Review & Conversion Tuning' }
  ],
  de: [
    { unit: '01', title: 'Diagnostizieren', label: 'Vertriebsaudit & Reibungsanalyse' },
    { unit: '02', title: 'Positionieren', label: 'Strukturiertes technisches Messaging' },
    { unit: '03', title: 'Gestalten', label: 'Hochwertiges Swiss-Grid UX-Design' },
    { unit: '04', title: 'Bauen', label: 'Ultra-schnelle responsive React-Schnittstellen' },
    { unit: '05', title: 'Automatisieren', label: 'Qualifizierungs- & Angebotspipelines' },
    { unit: '06', title: 'Optimieren', label: 'Fortlaufendes Monitoring & Conversion-Feintuning' }
  ]
};

export const TARGET_CLIENTS: Record<Language, { title: string; desc: string }[]> = {
  en: [
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
  ],
  de: [
    {
      title: 'Ingenieurbüros',
      desc: 'Unternehmen mit hochkomplexen technischen Angeboten, die absolute Präzision benötigen, um Marktführerschaft zu behaupten und Vorstands-Prüfungen zu bestehen.'
    },
    {
      title: 'Industriezulieferer',
      desc: 'B2B-Anbieter, die strukturelle Angebotssysteme benötigen, um fehleranfällige Excel-Tabellen durch automatisierte, parametergesteuerte Preiskalkulationen zu ersetzen.'
    },
    {
      title: 'Technische Dienstleister',
      desc: 'Spezialisierte B2B-Beratungshäuser und Labore, die margenstarke Service Level Agreements (SLAs) für Großkonzerne abwickeln.'
    },
    {
      title: 'Infrastrukturunternehmen',
      desc: 'Generalunternehmer für komplexe Großprojekte, die digitale Glaubwürdigkeitssysteme benötigen, um das Vertrauen öffentlicher und privater Partner zu gewinnen.'
    },
    {
      title: 'Fertigungsbetriebe',
      desc: 'Fabriken und Lohnfertiger, die einkaufsbereite Web-Schnittstellen mit minimaler Antwortlatenz zur Direktbestellung benötigen.'
    }
  ]
};

export const WHY_US_PILLARS: Record<Language, { num: string; title: string; desc: string }[]> = {
  en: [
    {
      num: '01',
      title: 'Principal-Led Execution',
      desc: 'You partner directly with founding systems consultants who have engineered real operational pipelines. No junior account managers, no billing markup, and no communication latency.'
    },
    {
      num: '02',
      title: 'Automation as Serious Leverage',
      desc: 'We do not sell gimmicky demos or generic automation theater. We custom-engineer back-office workflows, request ingestion parses, and database-level rules.'
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
  ],
  de: [
    {
      num: '01',
      title: 'Führung durch erfahrene Berater',
      desc: 'Sie arbeiten direkt mit den gründenden Systemberatern zusammen, die bereits reale Vertriebspipelines entwickelt haben. Keine Junior-Kundenbetreuer, keine künstlichen Aufschläge und keine Kommunikationsverluste.'
    },
    {
      num: '02',
      title: 'Automation als echter Hebel',
      desc: 'Wir verkaufen keine Spielereien oder oberflächliche Vertriebs-Show. Wir entwickeln maßgeschneiderte Back-Office-Workflows, automatisierte Parsing-Systeme und robuste Datenbanken.'
    },
    {
      num: '03',
      title: 'Kaufmännische Netto-Klarheit',
      desc: 'Wir verknüpfen Systemparameter direkt mit geschäftlichen Erfolgen. Ihre digitale Architektur ist entweder ein aktives Werkzeug, das qualifizierte Deals bucht, oder sie ist nur ein Kostenfaktor.'
    },
    {
      num: '04',
      title: 'Wir verkaufen keine Stunden',
      desc: 'Alle Implementierungen orientieren sich an messbaren operativen Kriterien. Wir analysieren Schwachstellen, entwerfen das System neu, bauen es und übergeben Ihnen die Schlüssel.'
    }
  ]
};

export const CASE_STUDIES: Record<Language, CaseStudy[]> = {
  en: [
    {
      id: 'case-01',
      number: '01',
      title: 'Engineering Commercial Presence Transformation',
      clientType: 'Technical B2B Commercial Credibility',
      challenge: 'A technical B2B business needed stronger digital credibility and clearer commercial positioning.',
      solution: 'Rebuilt the commercial-facing digital presence with trust-first architecture, sharper messaging, and premium responsive frontend execution.',
      outcome: 'Created a stronger executive-facing commercial presentation foundation for technical sales conversations.',
      metrics: [
        { label: 'Credibility Layer', value: 'Upgraded' },
        { label: 'Commercial Positioning', value: 'Sharper' },
        { label: 'Sales Conversation Base', value: 'Stronger' }
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
  ],
  de: [
    {
      id: 'case-01',
      number: '01',
      title: 'Neuausrichtung des digitalen B2B-Auftritts für Ingenieursdienstleister',
      clientType: 'Technische B2B-Glaubwürdigkeit & Marktpräsenz',
      challenge: 'Ein spezialisiertes Ingenieurunternehmen benötigte eine stärkere digitale Glaubwürdigkeit und eine klarere kaufmännische Positionierung für Großkunden.',
      solution: 'Kompletter Neuaufbau des vertriebsgerichteten Online-Auftritts mit Fokus auf technischer Autorität, exzellentem Swiss-Grid UI und überzeugender fachlicher Ansprache.',
      outcome: 'Etablierung eines extrem starken Fundaments für kaufmännische Verhandlungen auf C-Level-Ebene.',
      metrics: [
        { label: 'Vertrauensebene', value: 'Optimiert' },
        { label: 'Vertriebliche Klarheit', value: 'Gestärkt' },
        { label: 'Verhandlungsbasis', value: 'Klarer' }
      ]
    },
    {
      id: 'case-02',
      number: '02',
      title: 'Großprojekt-Kalkulation für ein internationales Baukonsortium',
      clientType: 'Großprojekte in den Sektoren Energie & Zivile Infrastruktur',
      challenge: 'Die Angebotserstellung für hochkomplexe Ausschreibungen band bis zu 18 Stunden teure Ingenieurszeit pro Gebot. Angebote wurden fehleranfällig über verschiedene Excel-Versionen verteilt gepflegt.',
      solution: 'Implementierung einer parametergesteuerten Pipeline zur automatisierten Angebotserstellung. Zusammenführung komplexer Produktformeln, Toleranzgrenzen und Sicherheitskalkulationen in einer sicheren, webbasierten Admin-Oberfläche.',
      outcome: 'Verkürzung des Angebotsprozesses von mehreren Arbeitstagen auf unter 15 Minuten bei gleichzeitiger Absicherung der Margen durch unveränderbare Datenbank-Preiskalkulationen.',
      metrics: [
        { label: 'Zeitersparnis Angebot', value: '80%' },
        { label: 'Übertragungsfehler', value: '0%' },
        { label: 'Bearbeitungsdauer Gebot', value: '<15 Min' }
      ]
    }
  ]
};

export const LOCALIZED_UI_STRINGS = {
  en: {
    nav: {
      capabilities: 'Capabilities',
      diagnosis: 'The Diagnosis',
      work: 'Selected Work',
      process: 'Process',
      diagnosticTool: 'Diagnostic Tool',
      cta: 'Request Diagnostic'
    },
    hero: {
      vp: 'CORE VALUE PROPOSITION DECLARATION',
      subtext: 'PRINCIPAL-LED CONSULTANCY // SPECIFICATION PROTECTION SECURED BY DIRECT NDAS',
      consultancy: 'Commercial Systems Consultancy',
      h1: 'Commercial Systems for Technical B2B Companies',
      p: 'We help technical B2B firms improve credibility, lead qualification, and proposal workflows.',
      focus: 'SYSTEM FOCUS ARCHITECTURE CAPABILITIES:',
      focusItems: [
        'Executive Credibility Infrastructure',
        'Lead Qualification Systems',
        'Commercial Proposal Automation',
        'Commercial Systems Architecture'
      ],
      trust: [
        { title: 'ESTABLISHMENT', desc: 'Founder-led consultancy' },
        { title: 'TRACK RECORD', desc: '20+ years execution experience' },
        { title: 'CAPACITY CAP', desc: 'Selective technical B2B engagements' },
        { title: 'COMPATIBILITY', desc: 'Focused on credibility and qualification' },
        { title: 'SCALE', desc: 'Proposal workflows and commercial modernization' }
      ],
      ctas: {
        diagnostic: 'Request Diagnostic',
        capabilities: 'View Capabilities'
      },
      telemetry: {
        title: 'Commercial Pipeline Intelligence',
        badge: 'SYSTEM VIABILITY',
        efficiency: 'COMMERCIAL VALUE EFFICIENCY',
        conversion: 'DIRECT CONVERSION CONVERGENCE',
        verification: 'PIPELINE VERIFICATION',
        verificationVal: 'PRE-QUALIFIED LEADS ONLY',
        velocity: 'BID VELOCITY',
        velocityVal: '-18.4 HOURS PER QUOTE',
        status: 'COMMERCIAL TELEMETRY: ACTIVE',
        recovery: 'SECURE DISCOVERY',
        explainer: 'This architecture is designed mathematically to diagnose pipeline friction, filtering unstructured corporate inbound traffic into clean, pre-validated contracts ready for your CRM.'
      }
    },
    problem: {
      tag: 'RE-VALUING THE CHANNEL',
      h2: 'Your commercial system is where revenue momentum leaks.',
      p: 'Many technical firms look credible offline but lose momentum across fragmented positioning, qualification, proposal, and handover workflows. Buyers do not experience one clear commercial system.',
      pillars: [
        {
          title: '1. Vague Technical Positioning',
          desc: 'Outdated messaging and weak positioning fail to provide technical buyers and engineers the specifications they require.'
        },
        {
          title: '2. Scattered Manual Sourcing',
          desc: 'Manual, chaotic lead handling, slow proposal workflows, and disconnected documents that rely heavily on single salespeople.'
        },
        {
          title: '3. No Intake Infrastructure',
          desc: 'No structured inquiry capture, routing logic, or first-response framework, resulting in slow quoting responses and poor initial conversion feedback.'
        },
        {
          title: '4. Invisible ROI Pipelines',
          desc: 'No structured conversion tracing, turning modernization work into a dark cost rather than a measurable commercial asset.'
        }
      ],
      truthTitle: 'THE TRUTH OF THE B2B CYCLE:',
      truthDesc: 'If a buyer cannot verify your technical capability inside 30 seconds, or if they have to wait 5 days for a response to an RFQ, they do not email you. They email your German competitor who has built a transparent sales system.'
    },
    capabilities: {
      tag: 'WHAT WE BUILD — MODULAR ARCHITECTURE',
      h2: 'Our Capabilities',
      p: 'We design and implement custom standalone digital systems that align perfectly with enterprise sales teams.',
      explorer: {
        select: 'SELECT SYSTEM CLASSIFICATION',
        shield: 'Architectural Guardrail:',
        shieldDesc: 'All capabilities utilize modern, zero-dependency, ultra-fast tech stacks (Vite/TypeScript) ready for painless enterprise handover or immediate self-hosting.',
        spec: 'SPECIFICATION',
        scope: 'Scope Overview & Positioning',
        deliverables: 'Required Technical Deliverables',
        topology: 'SYSTEM INTEGRATION TOPOLOGY',
        route: 'SECURED DATA TRANSACTION ROUTE',
        stages: ['Symmetric Interface', 'Friction Filter', 'CRM & ERP Databases'],
        touchpoint: 'USER TOUCHPOINT',
        engine: 'VALIDATION ENGINE',
        business: 'BUSINESS SYSTEM'
      }
    },
    signature: {
      tag: 'SIGNATURE PRODUCTIZED SERVICES',
      h2: 'Commercial Systems Audit',
      subtitle: 'A focused diagnostic engagement for technical B2B companies before modernizing commercial systems.',
      blueprintTitle: 'The Systems Audit Blueprint includes:',
      price: '€3,500 FIXED PRICE',
      bullets: [
        '<strong>Credibility & Positioning Audit:</strong> Correct vocabulary gaps and missing technical proofs.',
        '<strong>Lead Flow Analysis:</strong> Dissect response latency and identification loops from first visit.',
        '<strong>Proposal Workflow Mapping:</strong> Find automated parameters to reduce repeating manual specs work.',
        '<strong>Intake Automation Roadmap:</strong> Practical mapping for parsing inquiries and routing commercial context.'
      ],
      status: 'AVAILABLE AS A PAID DIAGNOSTIC ENGAGEMENT',
      cta: 'Request Diagnostic'
    },
    simulator: {
      tag: 'INTERACTIVE SYSTEMS AUDIT BENCHMARK',
      h2: 'Measure Your System Leakage',
      p: 'Before planning visual design or implementation work, calculate structural pipeline frictions. Select your current status indicators below to compute real-time overhead estimates.',
      widget: {
        tag: 'Operational Assessment Matrix',
        h3: 'System Friction Diagnostic Check',
        desc: 'Toggle observed operational scenarios below to estimate your company\'s current commercial leakage rating.',
        valueText: 'VALUE DETECTABILITY',
        selectBottlenecks: 'SELECT ALL KNOWN BOTTLENECKS',
        impact: 'IMPACT',
        metricsTitle: 'DIAGNOSTIC METRICS FEEDBACK',
        frictionIndex: 'Commercial Friction Index',
        frictionSub: 'of business potential locked',
        weeklyWasted: 'Est. Cost of Manual Overhead',
        weeklyHours: 'Hours/Week',
        weeklyOptimized: 'Optimized Workflow',
        weeklySub: 'Time spent copying specs & chasing raw emails.',
        modernizationTitle: 'Operational Modernization Score',
        modernizationHigh: 'High Infrastructure Opportunity',
        modernizationLow: 'Incremental Refinements',
        modernizationSub: 'Readiness for qualified routing, structured quoting protocols, and CRM sync.',
        accuracyTitle: 'Credibility Retention Index',
        accuracySub: 'Score of perceived trust during strategic procurement visits.',
        trustSuffix: 'Trust Accuracy',
        recoveryTitle: 'FOR RECOVERY ACTION:',
        recoveryHealthy: 'Your baseline operation shows healthy attributes. Re-audit if proposal cycle times drift or if high-quality inbound pipelines plateau.',
        recoveryFriction: 'We identified {count} distinct friction vectors. Addressing these requires commercial systems architectural restructuring, not simple visual adjustments.',
        cta: 'Apply Findings to Audit Brief'
      }
    },
    implementation: {
      tag: 'B2B OPERATION DELIVERY CYCLES',
      h2: 'From audit to implementation',
      p: 'We structure your commercial modernization into 4 rigid, measurable deployment phases with continuous support.',
      widget: {
        tag: 'ENGAGEMENT BENCHMARK: 8-WEEKS TOTAL DELIVERY',
        sub: '*Subject to technical integration density',
        output: 'OUTPUT VERIFIED'
      }
    },
    target: {
      tag: 'EXPLICIT ENGAGEMENT FIT',
      h2: 'Who We Work With',
      warning: 'THIS IS NOT FOR LOCAL RETAIL SHOPS, SIMPLE BROCHURES, OR PORTFOLIO HOSTING.'
    },
    caseStudies: {
      tag: 'REALITY VALIDATION & SPEC PROTOCOLS',
      h2: 'Selected Work',
      p: 'Interactive structural preview representing our core system positioning standards.',
      widget: {
        tag: '[ VERIFIED SYSTEMS ENGAGEMENTS ]',
        h3: 'Selected Case Studies',
        desc: 'Real outcomes delivered for industrial and technical organizations. We align presentation credibility with robust back-office automation rules.',
        clientType: 'Client Type',
        challenge: 'Challenge',
        solution: 'Solution',
        outcome: 'Outcome',
        snapshot: 'Diagnostic Snapshot',
        caseAudit: 'CASE {num} AUDIT',
        verified: 'System installation verified: Standard pre-qualification parameters successfully executed with modern database constraints.',
        ref: 'AUDIT REFERENCE: {ref}',
        rating: 'VERIFIED RATING'
      }
    },
    whyUs: {
      tag: 'THE PRINCIPAL-LED METHODOLOGY',
      h2: 'Why AFFEXAI',
      quote: '"We don\'t sell hours. We deploy functional commercial systems."',
      metricTitle: 'OPERATIONAL STATEMENT METRIC',
      blockquote: '"A standard agency operates on utilization metrics — billing as many human hours as possible, dragging projects out over quarters. We operate on structural speed. We deploy modern, compiled business systems that perform with maximum credibility and require no ongoing maintenance."',
      author: '— AFFEXAI FOUNDING PRINCIPALS',
      compliance: 'DACH-COMPLIANCE SECURED',
      complianceDesc: 'Our builds operate with absolute cookie compliance, decentralized architectures, and standard HTTPS/TLS endpoints out of the box.'
    },
    principalStory: {
      tag: 'EXECUTIVE TRUST ARCHITECTURE',
      h2: 'Principal-Led Partnership',
      p1: 'Founder-led boutique consultancy for technical businesses that need clarity, credibility, and smarter commercial systems.',
      p2: 'We are founding commercial systems engineers, not account managers. We partner exclusively with technical, industrial, and engineering firms to translate their hard-earned offline domain authority into highly credible digital positioning and automated lead qualification channels.',
      p3: 'By choosing elite, principal-only engagement, you eliminate the overhead, communication gaps, and misaligned incentives of generic agencies. We execute directly under strict NDAs, securing your intellectual advantages at every level.'
    },
    process: {
      tag: 'RECURRING SYSTEMATIC ROUTINES',
      h2: 'Our 6-Step Engine',
      p: 'From identification to final continuous tuning.'
    },
    footer: {
      vp: 'COMMERCIAL SYSTEMS CONSULTANCY FOR TECHNICAL B2B FIRMS // FOUNDER-LED // DACH-READY ARCHITECTURE',
      p: 'We engineer functional commercial infrastructure for technical and industrial organisations, solving lead qualification and quoting problems at the core.',
      anchors: 'CORE ANCHORS',
      rights: '© {year} AFFEXAI. All rights reserved. Precise Swiss-Grid Engineering Design Execution.'
    },
    contact: {
      tag: 'PROCUREMENT BRIEF TRANSMISSION INTAKE',
      h2: 'Request Diagnostic',
      p: 'Transmit your criteria using our structured briefing handler. Selected answers from the pipeline calculator above auto-populate below.',
      form: {
        successTitle: 'Diagnostic Request Logged',
        successDesc: 'Thank you for your structured request. Your commercial review notes have been received. A principal systems consultant from AFFEXAI will review your brief and reach out within 1 business day.',
        recordSummary: 'RECORD SUMMARY:',
        prefillActive: 'Diagnostic Snapshot Added Successfully.',
        clearPrefill: 'Clear Prefill',
        name: 'Name',
        namePlaceholder: 'e.g. Dr. Arthur Lindt',
        company: 'Corporate Entity / Company',
        companyPlaceholder: 'e.g. Lindt Advanced Metallurgy',
        role: 'Role / Position',
        rolePlaceholder: 'e.g. Managing Director / Partner',
        industry: 'Industry',
        industryPlaceholder: 'e.g. Engineering, Machinery, Civil Contracting',
        email: 'Business Email Address',
        emailPlaceholder: 'e.g. a.lindt@metallurgy.de',
        website: 'Company Website / Current Digital Presence',
        websitePlaceholder: 'e.g. https://www.metallurgy.de',
        needs: 'Commercial Systems Scope (Select all that apply)',
        needsOptions: {
          presence: 'Executive Credibility Architecture',
          qualification: 'Lead Qualification Systems',
          proposal: 'Commercial Proposal Automation',
          operations: 'Commercial Systems Architecture'
        },
        budget: 'Budget Range',
        budgetHelp: 'Commercial modernization architecture starts from €5,000.',
        budgetOptions: [
          { value: '5k-10k', label: '€5k–€10k' },
          { value: '10k-25k', label: '€10k–€25k' },
          { value: '25k-50k', label: '€25k–€50k' },
          { value: '50k+', label: '€50k+' }
        ],
        timeline: 'Desired Timeline',
        timelineOptions: [
          { value: 'immediate', label: 'Immediate (< 4 weeks)' },
          { value: 'moderate', label: 'Within 2 months' },
          { value: 'planning', label: 'Flexible / Discovery Phase first' }
        ],
        challenge: 'Primary Challenge',
        challengePlaceholder: 'Detail current pipeline setups, proposal labor burdens, manual friction, or data-handshake gaps...',
        submitting: 'ENGAGING SECURE HANDSHAKE...',
        submit: 'Request Diagnostic',
        summaryTitle: 'ASSESSMENT SUMMARY',
        state: 'STATE: INGEST',
        summaryFields: {
          client: 'Client',
          role: 'Role',
          industry: 'Industry',
          budget: 'Budget Tier',
          qualification: '// Qualification Summary',
          notes: '// Commercial Review Notes',
          modules: 'selected_modules',
          modulesPlaceholder: '// Choose modules on left',
          challenge: '// Primary Challenge Summary',
          challengePlaceholder: 'Awaiting challenge inputs...'
        },
        agreementTitle: 'DACH-Ready Agreement Framework:',
        agreementDesc: 'We sign strict NDAs prior to any technical architecture audits or code discovery. Your intellectual property remains absolute.',
        validationError: 'Please fill in all required operational identifiers: Name, Company, Role, Industry, and Email.'
      }
    }
  },
  de: {
    nav: {
      capabilities: 'Leistungen',
      diagnosis: 'Die Diagnose',
      work: 'Referenzen',
      process: 'Prozess',
      diagnosticTool: 'Diagnose-Tool',
      cta: 'Diagnose anfordern'
    },
    hero: {
      vp: 'ERKLÄRUNG DES ZENTRALEN WERTANGEBOTS',
      subtext: 'BERATUNG DURCH DIE GRÜNDER // SPEZIFIKATIONSSCHUTZ DURCH DIREKTE NDAS',
      consultancy: 'Kommerzielle Systemberatung',
      h1: 'Kaufmännische Systeme für technische B2B-Unternehmen',
      p: 'Wir unterstützen technische B2B-Unternehmen bei der Optimierung von digitaler Glaubwürdigkeit, Lead-Qualifizierung und Angebots-Workflows.',
      focus: 'SCHWERPUNKTE DER SYSTEMARCHITEKTUR:',
      focusItems: [
        'Executive Credibility Infrastruktur',
        'Lead-Qualifizierungssysteme',
        'Automatisierung von Angebotsprozessen',
        'Kaufmännische Systemarchitektur'
      ],
      trust: [
        { title: 'GRÜNDUNG', desc: 'Inhabergeführte Beratung' },
        { title: 'ERFAHRUNG', desc: 'Über 20 Jahre Umsetzungskompetenz' },
        { title: 'KAPAZITÄT', desc: 'Fokus auf ausgewählte B2B-Projekte' },
        { title: 'FOKUS', desc: 'Spezialisiert auf Glaubwürdigkeit und Lead-Qualifizierung' },
        { title: 'LEISTUNGEN', desc: 'Angebotsautomatisierung & kaufmännische Modernisierung' }
      ],
      ctas: {
        diagnostic: 'Diagnose anfordern',
        capabilities: 'Leistungen ansehen'
      },
      telemetry: {
        title: 'Vertriebspipeline-Analytik',
        badge: 'SYSTEM-KAPAZITÄT',
        efficiency: 'PROZESS-EFFIZIENZ',
        conversion: 'DIREKTE CONVERSION-KONVERGENZ',
        verification: 'PIPELINE-VALIDIERUNG',
        verificationVal: 'NUR VORQUALIFIZIERTE LEADS',
        velocity: 'ANGEBOTS-GESCHWINDIGKEIT',
        velocityVal: '-18,4 STUNDEN PRO ANGEBOT',
        status: 'VERTRİEBS-TELEMETRİE: AKTIV',
        recovery: 'SICHERE ANALYSE',
        explainer: 'Diese Architektur wurde mathematisch entwickelt, um Reibungsverluste in Ihrer Pipeline zu diagnostizieren. Unstrukturierte Großkunden-Anfragen werden automatisch gefiltert und bereinigt in Ihr CRM übertragen.'
      }
    },
    problem: {
      tag: 'DAS VERTRIEBS-FUNDAMENT NEU DENKEN',
      h2: 'In kaufmännischen Systemen gehen oft wertvolle Deals verloren.',
      p: 'Viele hochspezialisierte Firmen wirken offline absolut überzeugend, verlieren jedoch digital an Dynamik durch Lücken in der Positionierung, Qualifizierung, Angebotserstellung und Projektabgabe. Kunden erleben kein einheitliches, klares kaufmännisches System.',
      pillars: [
        {
          title: '1. Vage technische Positionierung',
          desc: 'Veraltete Formulierungen und schwache Positionierung liefern Einkäufern und Ingenieuren nicht die konkreten Spezifikationen, die sie für eine Entscheidung benötigen.'
        },
        {
          title: '2. Fragmentierte manuelle Abläufe',
          desc: 'Manuelle, chaotische Lead-Bearbeitung, langsame Angebotsprozesse und unzusammenhängende Dokumente, die zu stark von einzelnen Vertrieblern abhängen.'
        },
        {
          title: '3. Fehlende Ingestions-Infrastruktur',
          desc: 'Keine strukturierte Anfrageerfassung, kein Routing-Algorithmus und kein schnelles Antwort-Framework. Das führt zu langsamer Angebotserstellung und schlechter Conversion.'
        },
        {
          title: '4. Unsichtbare ROI-Pipelines',
          desc: 'Kein strukturiertes Conversion-Tracking, was Modernisierungen zu einem reinen Kostenfaktor macht, anstatt sie als messbaren kaufmännischen Hebel zu etablieren.'
        }
      ],
      truthTitle: 'DIE REALITÄT DES B2B-VERTRIEBS:',
      truthDesc: 'Wenn ein Einkäufer Ihre technische Kompetenz nicht innerhalb von 30 Sekunden verifizieren kann oder 5 Tage auf eine Rückmeldung warten muss, schreibt er Ihnen keine E-Mail. Er beauftragt direkt Ihren Mitbewerber, der ein transparentes und schnelles Sales-System etabliert hat.'
    },
    capabilities: {
      tag: 'UNSERE SYSTEM-BAUSTEINE — MODULARE ARCHITEKTUR',
      h2: 'Unsere Leistungen',
      p: 'Wir konzipieren und implementieren maßgeschneiderte, eigenständige Digitalsysteme für anspruchsvolle B2B-Vertriebsteams.',
      explorer: {
        select: 'SYSTEM-KLASSIFIZIERUNG AUSWÄHLEN',
        shield: 'Architektonischer Grundpfeiler:',
        shieldDesc: 'Alle Systemlösungen basieren auf modernen, abhängigkeitsfreien und extrem schnellen Tech-Stacks (Vite/TypeScript) für ein müheloses Hosting.',
        spec: 'SPEZIFIKATION',
        scope: 'Leistungsumfang & Positionierung',
        deliverables: 'Erforderliche technische Leistungen',
        topology: 'SYSTEMINTEGRATIONS-TOPOLOGIE',
        route: 'GESICHERTER DATENTRANSAKTIONS-PFAD',
        stages: ['Schnittstelle', 'Reibungsfilter', 'CRM- & ERP-Datenbanken'],
        touchpoint: 'BENUTZER-TOUCHPOINT',
        engine: 'VALIDIERUNGS-ENGINE',
        business: 'BUSINESS-SYSTEM'
      }
    },
    signature: {
      tag: 'STRUKTURIERTE EINSTEIGER-LEISTUNG',
      h2: 'Kommerzielles System-Audit',
      subtitle: 'Ein fokussiertes Diagnose-Audit für technische B2B-Unternehmen vor der Modernisierung ihrer Vertriebssysteme.',
      blueprintTitle: 'Das System-Audit umfasst konkret:',
      price: '3.500 € FESTPREIS',
      bullets: [
        '<strong>Glaubwürdigkeits- & Positionierungs-Audit:</strong> Behebung von Lücken in Fachvokabular und technischen Nachweisen.',
        '<strong>Lead-Flow-Analyse:</strong> Untersuchung von Reaktionszeiten und Kommunikationsschleifen ab dem Erstkontakt.',
        '<strong>Angebots-Workflow-Mapping:</strong> Ermittlung von Automationspotenzialen zur Reduzierung manueller Excel-Arbeit.',
        '<strong>Roadmap zur Ingestions-Automation:</strong> Praktisches Konzept zur automatisierten Erfassung und Weiterleitung von Kundenanfragen.'
      ],
      status: 'ALS DIAGNOSTISCHES AUDIT BUCHBAR',
      cta: 'Audit anfordern'
    },
    simulator: {
      tag: 'INTERAKTIVER PIPELINE-BELASTUNGSTEST',
      h2: 'Messen Sie Ihre Systemverluste',
      p: 'Berechnen Sie die strukturellen Reibungsverluste Ihrer Vertriebspipeline vor der detaillierten Design- oder Implementierungsplanung. Wählen Sie Ihre Problembereiche aus, um Echtzeit-Overhead-Schätzungen zu erhalten.',
      widget: {
        tag: 'Operative Bewertungsmatrix',
        h3: 'System-Reibungstest',
        desc: 'Wählen Sie zutreffende Szenarien aus, um die geschätzten kaufmännischen Pipeline-Verluste Ihres Unternehmens zu ermitteln.',
        valueText: 'WERT-ERKENNUNG',
        selectBottlenecks: 'ALLE ENGKÄSSE AUSWÄHLEN',
        impact: 'AUSWIRKUNG',
        metricsTitle: 'DIAGNOSTISCHES FEEDBACK',
        frictionIndex: 'Vertriebs-Reibungsindex',
        frictionSub: 'Ihres Potenzials sind blockiert',
        weeklyWasted: 'Geschätzte manuelle Overhead-Kosten',
        weeklyHours: 'Std./Woche',
        weeklyOptimized: 'Optimierter Workflow',
        weeklySub: 'Zeitaufwand für Excel-Copy-Paste & E-Mail-Rückfragen.',
        modernizationTitle: 'Modernisierungs-Potenzial',
        modernizationHigh: 'Großer technologischer Hebel',
        modernizationLow: 'Feinschliff erforderlich',
        modernizationSub: 'Bereitschaft für automatisiertes Routing, strukturierte Angebote und CRM-Synchronisation.',
        accuracyTitle: 'Vertrauensverlust-Index',
        accuracySub: 'Gefühlte Glaubwürdigkeit bei strategischen Einkäufern.',
        trustSuffix: 'Kunden-Vertrauen',
        recoveryTitle: 'HANDLUNGSEMPFEHLUNG:',
        recoveryHealthy: 'Ihre kaufmännischen Basissysteme arbeiten stabil. Wiederholen Sie das Audit bei steigenden Angebotslaufzeiten oder stagnierenden Pipelines.',
        recoveryFriction: 'Wir haben {count} eindeutige Reibungsverluste identifiziert. Diese zu beheben erfordert eine systemische Restrukturierung, keine rein optischen Design-Korrekturen.',
        cta: 'Ergebnisse in Anfrage übernehmen'
      }
    },
    implementation: {
      tag: 'B2B-PROJEKTABWICKLUNG',
      h2: 'Vom Audit zur fertigen Systemlösung',
      p: 'Wir gliedern Ihre kommerzielle Modernisierung in 4 klar definierte, messbare Bereitstellungsphasen mit fortlaufender Begleitung.',
      widget: {
        tag: 'PROJEKT-BENCHMARK: KONTROLLIERTE 8 WOCHEN LIEFERZEIT',
        sub: '*Abhängig von der technologischen Integrationstiefe',
        output: 'PHASEN-ERGEBNIS VERIFIZIERT'
      }
    },
    target: {
      tag: 'KLARE PROJEKT-PASSUNG',
      h2: 'Für wen wir arbeiten',
      warning: 'UNSERE LEISTUNGEN SIND NICHT FÜR LOKALE EINZELHÄNDLER, EINFACHE SEITEN ODER PORTFOLIO-HOSTING GEEIGNET.'
    },
    caseStudies: {
      tag: 'REALITÄTS-CHECK & VERIFIZIERTE PROTOKOLLE',
      h2: 'Erfolgsgeschichten',
      p: 'Interaktive Vorschau realer Projektergebnisse nach unseren hohen Integrations- und Positionierungsstandards.',
      widget: {
        tag: '[ VERIFIZIERTE SYSTEM-PROJEKTE ]',
        h3: 'Referenzprojekte',
        desc: 'Reale Ergebnisse für Industrie- und B2B-Unternehmen. Wir verbinden digitale Glaubwürdigkeit mit robuster Back-Office-Automatisierung.',
        clientType: 'Kunden-Kategorie',
        challenge: 'Ausgangslage',
        solution: 'System-Lösung',
        outcome: 'Ergebnis',
        snapshot: 'Projekt-Zusammenfassung',
        caseAudit: 'FALLBEISPIEL {num} PRÜFUNG',
        verified: 'Systeminstallation verifiziert: Standardisierte Qualifizierungsparameter erfolgreich in modernen Datenbankstrukturen implementiert.',
        ref: 'AUDIT-REFERENZ: {ref}',
        rating: 'BESTÄTIGTE QUALITÄT'
      }
    },
    whyUs: {
      tag: 'METHODE: FOKUS AUF IMPLEMENTIERUNG',
      h2: 'Warum AFFEXAI',
      quote: '"Wir verkaufen keine Stunden. Wir liefern einsatzfähige, moderne kaufmännische Systeme."',
      metricTitle: 'OPERATIVE LEISTUNGSKENNZAHL',
      blockquote: '"Klassische Agenturen arbeiten nach Auslastungsmetriken — sie rechnen möglichst viele Arbeitsstunden ab und ziehen Projekte über Quartale. Wir arbeiten nach Umsetzungsgeschwindigkeit. Wir implementieren hochmoderne, geschlossene Business-Systeme, die maximale Glaubwürdigkeit ausstrahlen und wartungsfrei laufen."',
      author: '— DIE AFFEXAI-GRÜNDER',
      compliance: 'DACH-KONFORMITÄT GARANTIERT',
      complianceDesc: 'Unsere Systeme arbeiten standardmäßig absolut cookie-konform, mit dezentralen Architekturen und gesicherten HTTPS/TLS-Endpunkten.'
    },
    principalStory: {
      tag: 'MANAGEMENT-VERTRAUENSARCHITEKTUR',
      h2: 'Partnerschaft auf Augenhöhe',
      p1: 'Inhabergeführte Systemberatung für technische B2B-Unternehmen, die kaufmännische Klarheit, digitale Präsenz und automatisierte Pipelines benötigen.',
      p2: 'Wir sind beratende Systemingenieure, keine klassischen Agentur-Kundenbetreuer. Wir arbeiten ausschließlich mit Technologie- und Industrieunternehmen zusammen, um deren starke Offline-Marktposition in hochgradig glaubwürdige Online-Positionierung und automatisierte Lead-Qualifizierungs-Kanäle zu übersetzen.',
      p3: 'Durch die direkte Zusammenarbeit mit uns eliminieren Sie Kommunikationsverluste, hohe Nebenkosten und falsche Anreize klassischer Agenturen. Wir arbeiten strikt unter NDAs und sichern Ihre Wettbewerbsvorteile auf allen Ebenen ab.'
    },
    process: {
      tag: 'SYSTEMATISCHE ROUTINEN',
      h2: 'Unser 6-Stufen-System',
      p: 'Von der detaillierten Diagnose bis zur kontinuierlichen Optimierung.'
    },
    footer: {
      vp: 'KOMMERZIELLE SYSTEMBERATUNG FÜR TECHNISCHE B2B-UNTERNEHMEN // INHABERGEFÜHRT // DACH-READY SYSTEME',
      p: 'Wir entwickeln funktionale kaufmännische Infrastrukturen für Technologie- und Industrieunternehmen und lösen Probleme bei Lead-Qualifizierung und Angebotserstellung an der Wurzel.',
      anchors: 'ZENTRALE NAVIGATİON',
      rights: '© {year} AFFEXAI. Alle Rechte vorbehalten. Präzise Ausführung nach Schweizer Grid-Engineering-Standards.'
    },
    contact: {
      tag: 'KAUFMÄNNISCHER SYSTEM-BRIEFING-INGEST',
      h2: 'Anfrage stellen',
      p: 'Übermitteln Sie Ihre Rahmenbedingungen über unser strukturiertes Formular. Die Ergebnisse des Pipeline-Rechners oben werden automatisch übernommen.',
      form: {
        successTitle: 'Anfrage erfolgreich registriert',
        successDesc: 'Vielen Dank für Ihre strukturierte Anfrage. Ihre kaufmännischen Rahmenbedingungen wurden registriert. Ein beratender Systemingenieur von AFFEXAI wird Ihr Briefing analysieren und sich innerhalb eines Werktages mit Ihnen in Verbindung setzen.',
        recordSummary: 'BRIEFING-ÜBERSICHT:',
        prefillActive: 'Diagnose-Daten erfolgreich übernommen.',
        clearPrefill: 'Daten zurücksetzen',
        name: 'Name',
        namePlaceholder: 'z.B. Dr. Arthur Lindt',
        company: 'Unternehmen / Gesellschaft',
        companyPlaceholder: 'z.B. Lindt Advanced Metallurgy GmbH',
        role: 'Position / Rolle',
        rolePlaceholder: 'z.B. Geschäftsführer / Partner',
        industry: 'Branche',
        industryPlaceholder: 'z.B. Maschinenbau, Spezialtiefbau, Automatisierung',
        email: 'Geschäftliche E-Mail-Adresse',
        emailPlaceholder: 'z.B. a.lindt@metallurgy.de',
        website: 'Unternehmens-Website / Online-Präsenz',
        websitePlaceholder: 'z.B. https://www.metallurgy.de',
        needs: 'Gewünschte Lösungsbereiche (Mehrfachauswahl möglich)',
        needsOptions: {
          presence: 'Executive Credibility Infrastruktur',
          qualification: 'Lead-Qualifizierungssysteme',
          proposal: 'Automatisierung von Angebotsprozessen',
          operations: 'Kaufmännische Systemarchitektur'
        },
        budget: 'Budgetrahmen',
        budgetHelp: 'Systemarchitekturen und Automationsprojekte starten ab 5.000 €.',
        budgetOptions: [
          { value: '5k-10k', label: '5.000 € – 10.000 €' },
          { value: '10k-25k', label: '10.000 € – 25.000 €' },
          { value: '25k-50k', label: '25.000 € – 50.000 €' },
          { value: '50k+', label: 'Über 50.000 €' }
        ],
        timeline: 'Zeithorizont',
        timelineOptions: [
          { value: 'immediate', label: 'Sofort (< 4 Wochen)' },
          { value: 'moderate', label: 'Innerhalb von 2 Monaten' },
          { value: 'planning', label: 'Flexibel / Zuerst strategisches Audit' }
        ],
        challenge: 'Hauptsächliche Herausforderung',
        challengePlaceholder: 'Beschreiben Sie Ihre aktuelle Pipeline-Struktur, den manuellen Aufwand bei Angeboten, Datenbrüche oder Probleme bei der Übergabe...',
        submitting: 'VERBINDUNG WIRD HERGESTELLT...',
        submit: 'Diagnose anfordern',
        summaryTitle: 'DATENSATZ-ÜBERSICHT',
        state: 'STATUS: EINGANG',
        summaryFields: {
          client: 'Unternehmen',
          role: 'Rolle',
          industry: 'Branche',
          budget: 'Budgetklasse',
          qualification: '// Qualifizierungs-Übersicht',
          notes: '// Kaufmännische Review-Notizen',
          modules: 'gewaehlte_module',
          modulesPlaceholder: '// Bitte links Module auswählen',
          challenge: '// Kernproblem-Zusammenfassung',
          challengePlaceholder: 'Warten auf Dateneingabe...'
        },
        agreementTitle: 'Vertraglicher Sicherheitsrahmen (DACH):',
        agreementDesc: 'Wir unterzeichnen vor jeder detaillierten Systemanalyse oder Code-Durchsicht eine strikte Vertraulichkeitserklärung (NDA). Ihr geistiges Eigentum bleibt geschützt.',
        validationError: 'Bitte füllen Sie alle erforderlichen Pflichtfelder aus: Name, Unternehmen, Rolle, Branche und E-Mail.'
      }
    }
  }
};
