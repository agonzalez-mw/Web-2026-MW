import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ProcessStep {
  id: number;
  num: string;
  displayNum: string;
  tag: string;
  title: string;
  description: string;
  color: string;
  badge: string;
  deliverables: string[];
}

export const HowWeWorkSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: ProcessStep[] = [
    {
      id: 0,
      num: '01',
      displayNum: '01',
      tag: '1.',
      title: 'Diagnóstico:',
      description:
        'Auditamos tu recolección de datos, cuentas publicitarias y ecosistema tecnológico actual.',
      color: '#29334d', // Dark Navy from reference image top-left
      badge: 'Auditoría 360°',
      deliverables: [
        'Auditoría técnica de contenedores GTM y GA4.',
        'Mapeo de PII y cumplimiento Ley 21.719 / GDPR.',
        'Chequeo de discrepancias CRM vs plataformas de medios.'
      ]
    },
    {
      id: 1,
      num: '02',
      displayNum: '02',
      tag: '2.',
      title: 'Plan Estratégico:',
      description:
        'Definimos KPIs de negocio y trazamos una hoja de ruta técnica con prioridades claras.',
      color: '#ff4328', // Bright Coral Red from reference image bottom-left
      badge: 'Blueprint Técnico',
      deliverables: [
        'Definición de KPIs de negocio y metas comerciales.',
        'Diseño de arquitectura técnica y especificación Data Layer.',
        'Roadmap con prioridades claras y sprints planificados.'
      ]
    },
    {
      id: 2,
      num: '03',
      displayNum: '03',
      tag: '3.',
      title: 'Ejecución:',
      description:
        'Implementamos soluciones y activamos campañas mediante sprints ágiles y transparentes.',
      color: '#ff371e', // Vivid Red-Orange from reference image top-right
      badge: 'Sprints Quincenales',
      deliverables: [
        'Implementación ágil de soluciones de medición.',
        'Activación de campañas en plataformas de medios.',
        'QA riguroso en staging y gobernanza de datos.'
      ]
    },
    {
      id: 3,
      num: '04',
      displayNum: '04',
      tag: '4.',
      title: 'Optimización (Ongoing):',
      description:
        'Monitoreamos resultados en tiempo real (Dashboards) para escalar tu rendimiento continuamente.',
      color: '#ff6e3a', // Warm Orange from reference image bottom-right
      badge: 'Crecimiento Sostenible',
      deliverables: [
        'Dashboards en Looker Studio en tiempo real.',
        'Monitoreo continuo de anomalías y performance.',
        'Optimización continua para escalar el ROAS.'
      ]
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200 overflow-hidden relative" id="nosotros">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching corporate presentation tone */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#74bf28]/15 text-[#58991b] border border-[#74bf28]/30 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>METODOLOGÍA DE TRABAJO</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Cómo trabajamos
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 font-normal">
            Metodología estructurada de escalamiento digital con entregables garantizados en cada etapa.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MAIN INFOGRAPHIC CONTAINER: MATCHING EXACTLY THE REFERENCE IMAGE */}
        {/* Left 2 Text Blocks | Center Double-Ring with Gear & 4 Circles | Right 2 Text Blocks */}
        {/* ========================================================================= */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Desktop & Large Tablet Layout */}
          <div className="hidden md:grid grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* LEFT COLUMN: Steps 01 (Top-Left) and 03 (Bottom-Left) */}
            <div className="col-span-4 flex flex-col justify-between h-[360px] text-right py-3">
              
              {/* Item 01 (Top-Left) */}
              <div
                onClick={() => setActiveStep(0)}
                onMouseEnter={() => setActiveStep(0)}
                className={`cursor-pointer transition-all duration-300 p-4 rounded-2xl ${
                  activeStep === 0
                    ? 'bg-slate-50 border-r-4 border-[#29334d] -translate-x-1 shadow-xs'
                    : 'hover:bg-slate-50/70'
                }`}
              >
                <div className="flex items-center justify-end gap-2 mb-1">
                  <span className="text-3xl sm:text-4xl font-black text-[#58991b] leading-none tracking-tight">
                    {steps[0].tag}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug mb-1.5">
                  {steps[0].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {steps[0].description}
                </p>
              </div>

              {/* Item 03 (Bottom-Left) */}
              <div
                onClick={() => setActiveStep(2)}
                onMouseEnter={() => setActiveStep(2)}
                className={`cursor-pointer transition-all duration-300 p-4 rounded-2xl ${
                  activeStep === 2
                    ? 'bg-slate-50 border-r-4 border-[#ff371e] -translate-x-1 shadow-xs'
                    : 'hover:bg-slate-50/70'
                }`}
              >
                <div className="flex items-center justify-end gap-2 mb-1">
                  <span className="text-3xl sm:text-4xl font-black text-[#58991b] leading-none tracking-tight">
                    {steps[2].tag}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug mb-1.5">
                  {steps[2].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {steps[2].description}
                </p>
              </div>

            </div>

            {/* CENTER COLUMN: Central Double-Ring & 4 Circular Number Nodes with Central Gear */}
            <div className="col-span-4 flex items-center justify-center relative">
              <div className="w-[340px] h-[340px] relative select-none">
                <svg
                  viewBox="0 0 340 340"
                  className="w-full h-full overflow-visible drop-shadow-sm"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <filter id="circle-shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.14" />
                    </filter>
                    <filter id="gear-shadow" x="-10%" y="-10%" width="120%" height="120%">
                      <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000000" floodOpacity="0.06" />
                    </filter>
                  </defs>

                  {/* Concentric Double Rings (in vibrant Coral/Orange as in reference image) */}
                  {/* Outer Ring */}
                  <circle
                    cx="170"
                    cy="170"
                    r="98"
                    stroke="#ff4a2b"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    className="opacity-95"
                  />
                  {/* Inner Ring */}
                  <circle
                    cx="170"
                    cy="170"
                    r="84"
                    stroke="#ff4a2b"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    className="opacity-95"
                  />

                  {/* Central Delicate Gear/Cog Icon (outline, matching reference image) */}
                  <g transform="translate(170, 170)" filter="url(#gear-shadow)">
                    {/* 8 Gear Teeth */}
                    <path
                      d="
                        M -6,-28 L 6,-28 L 8,-23 L 13,-21 L 18,-25 L 25,-18 L 21,-13 L 23,-8 L 28,-6 L 28,6 L 23,8 L 21,13 L 25,18 L 18,25 L 13,21 L 8,23 L 6,28 L -6,28 L -8,23 L -13,21 L -18,25 L -25,18 L -21,13 L -23,8 L -28,6 L -28,-6 L -23,-8 L -21,-13 L -25,-18 L -18,-25 L -13,-21 L -8,-23 Z
                      "
                      stroke="#cbd5e1"
                      strokeWidth="2.2"
                      fill="#ffffff"
                      strokeLinejoin="round"
                    />
                    {/* Center hole of the gear */}
                    <circle cx="0" cy="0" r="10" stroke="#cbd5e1" strokeWidth="2.2" fill="#f8fafc" />
                  </g>

                  {/* ======================================================= */}
                  {/* 4 CIRCULAR NUMBER NODES: 01 (Top-Left), 02 (Top-Right), */}
                  {/*                          03 (Bottom-Left), 04 (Bottom-Right) */}
                  {/* ======================================================= */}

                  {/* 1. TOP-LEFT CIRCLE (Step 01) */}
                  <g
                    className="cursor-pointer transition-transform duration-200 hover:scale-105"
                    onClick={() => setActiveStep(0)}
                    onMouseEnter={() => setActiveStep(0)}
                  >
                    <circle
                      cx="112"
                      cy="112"
                      r="46"
                      fill={steps[0].color}
                      filter="url(#circle-shadow)"
                      stroke={activeStep === 0 ? '#ffffff' : 'transparent'}
                      strokeWidth="3.5"
                    />
                    <text
                      x="112"
                      y="123"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="32"
                      fontWeight="900"
                      fontFamily="system-ui, -apple-system, sans-serif"
                      letterSpacing="-0.5"
                    >
                      {steps[0].displayNum}
                    </text>
                  </g>

                  {/* 2. TOP-RIGHT CIRCLE (Step 02) */}
                  <g
                    className="cursor-pointer transition-transform duration-200 hover:scale-105"
                    onClick={() => setActiveStep(1)}
                    onMouseEnter={() => setActiveStep(1)}
                  >
                    <circle
                      cx="228"
                      cy="112"
                      r="46"
                      fill={steps[1].color}
                      filter="url(#circle-shadow)"
                      stroke={activeStep === 1 ? '#ffffff' : 'transparent'}
                      strokeWidth="3.5"
                    />
                    <text
                      x="228"
                      y="123"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="32"
                      fontWeight="900"
                      fontFamily="system-ui, -apple-system, sans-serif"
                      letterSpacing="-0.5"
                    >
                      {steps[1].displayNum}
                    </text>
                  </g>

                  {/* 3. BOTTOM-LEFT CIRCLE (Step 03) */}
                  <g
                    className="cursor-pointer transition-transform duration-200 hover:scale-105"
                    onClick={() => setActiveStep(2)}
                    onMouseEnter={() => setActiveStep(2)}
                  >
                    <circle
                      cx="112"
                      cy="228"
                      r="46"
                      fill={steps[2].color}
                      filter="url(#circle-shadow)"
                      stroke={activeStep === 2 ? '#ffffff' : 'transparent'}
                      strokeWidth="3.5"
                    />
                    <text
                      x="112"
                      y="239"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="32"
                      fontWeight="900"
                      fontFamily="system-ui, -apple-system, sans-serif"
                      letterSpacing="-0.5"
                    >
                      {steps[2].displayNum}
                    </text>
                  </g>

                  {/* 4. BOTTOM-RIGHT CIRCLE (Step 04) */}
                  <g
                    className="cursor-pointer transition-transform duration-200 hover:scale-105"
                    onClick={() => setActiveStep(3)}
                    onMouseEnter={() => setActiveStep(3)}
                  >
                    <circle
                      cx="228"
                      cy="228"
                      r="46"
                      fill={steps[3].color}
                      filter="url(#circle-shadow)"
                      stroke={activeStep === 3 ? '#ffffff' : 'transparent'}
                      strokeWidth="3.5"
                    />
                    <text
                      x="228"
                      y="239"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="32"
                      fontWeight="900"
                      fontFamily="system-ui, -apple-system, sans-serif"
                      letterSpacing="-0.5"
                    >
                      {steps[3].displayNum}
                    </text>
                  </g>

                </svg>
              </div>
            </div>

            {/* RIGHT COLUMN: Steps 02 (Top-Right) and 04 (Bottom-Right) */}
            <div className="col-span-4 flex flex-col justify-between h-[360px] text-left py-3">
              
              {/* Item 02 (Top-Right) */}
              <div
                onClick={() => setActiveStep(1)}
                onMouseEnter={() => setActiveStep(1)}
                className={`cursor-pointer transition-all duration-300 p-4 rounded-2xl ${
                  activeStep === 1
                    ? 'bg-slate-50 border-l-4 border-[#ff4328] translate-x-1 shadow-xs'
                    : 'hover:bg-slate-50/70'
                }`}
              >
                <div className="flex items-center justify-start gap-2 mb-1">
                  <span className="text-3xl sm:text-4xl font-black text-[#58991b] leading-none tracking-tight">
                    {steps[1].tag}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug mb-1.5">
                  {steps[1].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {steps[1].description}
                </p>
              </div>

              {/* Item 04 (Bottom-Right) */}
              <div
                onClick={() => setActiveStep(3)}
                onMouseEnter={() => setActiveStep(3)}
                className={`cursor-pointer transition-all duration-300 p-4 rounded-2xl ${
                  activeStep === 3
                    ? 'bg-slate-50 border-l-4 border-[#ff6e3a] translate-x-1 shadow-xs'
                    : 'hover:bg-slate-50/70'
                }`}
              >
                <div className="flex items-center justify-start gap-2 mb-1">
                  <span className="text-3xl sm:text-4xl font-black text-[#58991b] leading-none tracking-tight">
                    {steps[3].tag}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug mb-1.5">
                  {steps[3].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {steps[3].description}
                </p>
              </div>

            </div>

          </div>

          {/* ========================================================================= */}
          {/* MOBILE & TABLET LAYOUT (< md) */}
          {/* ========================================================================= */}
          <div className="md:hidden space-y-8">
            {/* Center Graphic */}
            <div className="w-[280px] h-[280px] mx-auto relative select-none">
              <svg
                viewBox="0 0 340 340"
                className="w-full h-full overflow-visible drop-shadow-sm"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Rings */}
                <circle cx="170" cy="170" r="98" stroke="#ff4a2b" strokeWidth="6" fill="none" />
                <circle cx="170" cy="170" r="84" stroke="#ff4a2b" strokeWidth="6" fill="none" />

                {/* Gear */}
                <g transform="translate(170, 170)">
                  <path
                    d="M -6,-28 L 6,-28 L 8,-23 L 13,-21 L 18,-25 L 25,-18 L 21,-13 L 23,-8 L 28,-6 L 28,6 L 23,8 L 21,13 L 25,18 L 18,25 L 13,21 L 8,23 L 6,28 L -6,28 L -8,23 L -13,21 L -18,25 L -25,18 L -21,13 L -23,8 L -28,6 L -28,-6 L -23,-8 L -21,-13 L -25,-18 L -18,-25 L -13,-21 L -8,-23 Z"
                    stroke="#cbd5e1"
                    strokeWidth="2.2"
                    fill="#ffffff"
                  />
                  <circle cx="0" cy="0" r="10" stroke="#cbd5e1" strokeWidth="2.2" fill="#f8fafc" />
                </g>

                {/* 4 Circles (Top-Left: 01, Top-Right: 02, Bottom-Left: 03, Bottom-Right: 04) */}
                <g onClick={() => setActiveStep(0)}>
                  <circle cx="112" cy="112" r="46" fill={steps[0].color} stroke={activeStep === 0 ? '#ffffff' : 'transparent'} strokeWidth="3" />
                  <text x="112" y="123" textAnchor="middle" fill="#ffffff" fontSize="32" fontWeight="900">{steps[0].displayNum}</text>
                </g>
                <g onClick={() => setActiveStep(1)}>
                  <circle cx="228" cy="112" r="46" fill={steps[1].color} stroke={activeStep === 1 ? '#ffffff' : 'transparent'} strokeWidth="3" />
                  <text x="228" y="123" textAnchor="middle" fill="#ffffff" fontSize="32" fontWeight="900">{steps[1].displayNum}</text>
                </g>
                <g onClick={() => setActiveStep(2)}>
                  <circle cx="112" cy="228" r="46" fill={steps[2].color} stroke={activeStep === 2 ? '#ffffff' : 'transparent'} strokeWidth="3" />
                  <text x="112" y="239" textAnchor="middle" fill="#ffffff" fontSize="32" fontWeight="900">{steps[2].displayNum}</text>
                </g>
                <g onClick={() => setActiveStep(3)}>
                  <circle cx="228" cy="228" r="46" fill={steps[3].color} stroke={activeStep === 3 ? '#ffffff' : 'transparent'} strokeWidth="3" />
                  <text x="228" y="239" textAnchor="middle" fill="#ffffff" fontSize="32" fontWeight="900">{steps[3].displayNum}</text>
                </g>
              </svg>
            </div>

            {/* Mobile Cards for the 4 Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {steps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-4 rounded-2xl border transition-all ${
                    activeStep === idx
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white shrink-0 shadow-xs"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.displayNum}
                    </span>
                    <span className={`text-2xl font-black ${activeStep === idx ? 'text-[#8ce033]' : 'text-[#58991b]'}`}>
                      {step.tag}
                    </span>
                  </div>
                  <h4 className={`text-sm sm:text-base font-bold leading-snug mb-1 ${activeStep === idx ? 'text-white' : 'text-slate-900'}`}>
                    {step.title}
                  </h4>
                  <p className={`text-xs leading-relaxed ${activeStep === idx ? 'text-slate-300' : 'text-slate-500'}`}>
                    {step.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
