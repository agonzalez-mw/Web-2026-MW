import React, { useState } from 'react';
import { Search, MessageSquare, Bot, Sparkles, CheckCircle2 } from 'lucide-react';

export const SeoAeoGeoVennSection: React.FC = () => {
  const [activeArea, setActiveArea] = useState<'all' | 'seo' | 'aeo' | 'geo'>('all');

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#74bf28]/15 border border-[#74bf28]/30 text-[#4c8716] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sinergia de Posicionamiento Integral</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Nuevo Ecosistema de Visibilidad: <span className="text-[#4c8716]">SEO + GEO + AEO</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-semibold max-w-2xl mx-auto">
            No elegimos uno. Integramos los tres para una Cobertura Total.
          </p>
        </div>

        {/* Content Grid: Left Interactive SVG Diagram + Right Strategic Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Crisp SVG Venn Diagram matching the uploaded graphic */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[460px] aspect-square select-none">
              <svg
                viewBox="0 0 540 500"
                className="w-full h-full drop-shadow-xl overflow-visible"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="venn-shadow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.15" />
                  </filter>
                  <filter id="center-shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="3" stdDeviation="5" floodOpacity="0.3" />
                  </filter>
                </defs>

                {/* Circles Group with mix-blend-multiply to recreate exact overlap colors */}
                <g style={{ mixBlendMode: 'multiply' }}>
                  {/* 1. SEO Circle (Top-Left) - Light green #8fbf4c */}
                  <circle
                    cx="205"
                    cy="185"
                    r="140"
                    fill={activeArea === 'seo' || activeArea === 'all' ? '#8fbf4c' : '#b2cca0'}
                    fillOpacity="0.88"
                    className="cursor-pointer transition-all duration-200"
                    onMouseEnter={() => setActiveArea('seo')}
                    onMouseLeave={() => setActiveArea('all')}
                  />

                  {/* 2. AEO Circle (Top-Right) - Bright lime-green #a2d238 */}
                  <circle
                    cx="335"
                    cy="185"
                    r="140"
                    fill={activeArea === 'aeo' || activeArea === 'all' ? '#a2d238' : '#cce591'}
                    fillOpacity="0.88"
                    className="cursor-pointer transition-all duration-200"
                    onMouseEnter={() => setActiveArea('aeo')}
                    onMouseLeave={() => setActiveArea('all')}
                  />

                  {/* 3. GEO Circle (Bottom-Center) - Vibrant emerald #389d42 */}
                  <circle
                    cx="270"
                    cy="295"
                    r="140"
                    fill={activeArea === 'geo' || activeArea === 'all' ? '#389d42' : '#88c98e'}
                    fillOpacity="0.88"
                    className="cursor-pointer transition-all duration-200"
                    onMouseEnter={() => setActiveArea('geo')}
                    onMouseLeave={() => setActiveArea('all')}
                  />
                </g>

                {/* Central Lens (Cobertura Total) - Distinct deep navy ellipse/circle */}
                <ellipse
                  cx="270"
                  cy="225"
                  rx="48"
                  ry="42"
                  fill="#0e2a47"
                  filter="url(#center-shadow)"
                  className="cursor-pointer transition-transform hover:scale-105"
                  onMouseEnter={() => setActiveArea('all')}
                />

                {/* Text: SEO */}
                <g
                  className="pointer-events-none text-center"
                  style={{ textAnchor: 'middle' }}
                >
                  <text
                    x="175"
                    y="170"
                    fill="#ffffff"
                    fontSize="28"
                    fontWeight="800"
                    letterSpacing="0.5"
                  >
                    SEO
                  </text>
                  <text
                    x="175"
                    y="196"
                    fill="#f1f8e9"
                    fontSize="13"
                    fontWeight="600"
                  >
                    Google & Clics
                  </text>
                </g>

                {/* Text: AEO */}
                <g
                  className="pointer-events-none text-center"
                  style={{ textAnchor: 'middle' }}
                >
                  <text
                    x="365"
                    y="170"
                    fill="#ffffff"
                    fontSize="28"
                    fontWeight="800"
                    letterSpacing="0.5"
                  >
                    AEO
                  </text>
                  <text
                    x="365"
                    y="196"
                    fill="#f1f8e9"
                    fontSize="13"
                    fontWeight="600"
                  >
                    Voice & Snippets
                  </text>
                </g>

                {/* Text: GEO */}
                <g
                  className="pointer-events-none text-center"
                  style={{ textAnchor: 'middle' }}
                >
                  <text
                    x="270"
                    y="340"
                    fill="#ffffff"
                    fontSize="28"
                    fontWeight="800"
                    letterSpacing="0.5"
                  >
                    GEO
                  </text>
                  <text
                    x="270"
                    y="366"
                    fill="#f1f8e9"
                    fontSize="13"
                    fontWeight="600"
                  >
                    AI & LLMs
                  </text>
                </g>

                {/* Text: Cobertura Total (Center) */}
                <g
                  className="pointer-events-none text-center"
                  style={{ textAnchor: 'middle' }}
                >
                  <text
                    x="270"
                    y="222"
                    fill="#ffffff"
                    fontSize="12.5"
                    fontWeight="800"
                    letterSpacing="0.3"
                  >
                    Cobertura
                  </text>
                  <text
                    x="270"
                    y="238"
                    fill="#ffffff"
                    fontSize="12.5"
                    fontWeight="800"
                    letterSpacing="0.3"
                  >
                    Total
                  </text>
                </g>
              </svg>
            </div>
          </div>

          {/* Right Column: Ordered, Beautiful Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Card 1: SEO */}
            <div
              onMouseEnter={() => setActiveArea('seo')}
              onMouseLeave={() => setActiveArea('all')}
              className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                activeArea === 'seo'
                  ? 'bg-emerald-50/70 border-[#74bf28] shadow-md translate-x-1'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#8fbf4c]/15 text-[#527d21] font-black flex items-center justify-center shrink-0">
                  <Search className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-extrabold text-slate-950">
                      SEO (Search Engine Optimization)
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 font-semibold">La base técnica.</strong> Posicionamiento en listados de Google para atraer tráfico mediante clics.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: AEO */}
            <div
              onMouseEnter={() => setActiveArea('aeo')}
              onMouseLeave={() => setActiveArea('all')}
              className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                activeArea === 'aeo'
                  ? 'bg-lime-50/70 border-[#a2d238] shadow-md translate-x-1'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#a2d238]/20 text-[#608513] font-black flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-extrabold text-slate-950">
                      AEO (Answer Engine Optimization)
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 font-semibold">La respuesta directa.</strong> Optimización para asistentes de voz y “Posición Cero” (Featured Snippets). El objetivo es ser la respuesta.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: GEO */}
            <div
              onMouseEnter={() => setActiveArea('geo')}
              onMouseLeave={() => setActiveArea('all')}
              className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                activeArea === 'geo'
                  ? 'bg-emerald-50/70 border-[#389d42] shadow-md translate-x-1'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#389d42]/15 text-[#24692c] font-black flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-extrabold text-slate-950">
                      GEO (Generative Engine Optimization)
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 font-semibold">La autoridad semántica.</strong> Estructura la información para que modelos como ChatGPT y Gemini citen y recomienden su marca.
                  </p>
                </div>
              </div>
            </div>

            {/* Integration Banner: Cobertura Total */}
            <div className="p-4 rounded-xl bg-[#0e2a47] text-white flex items-center gap-3 shadow-sm border border-slate-700/60">
              <CheckCircle2 className="w-5 h-5 text-[#74bf28] shrink-0" />
              <div className="text-xs sm:text-[13px] leading-snug">
                <strong className="text-[#8ce033] font-bold">Cobertura Total:</strong> Aseguramos que tu marca aparezca en las tres dimensiones de búsqueda actual: listados web, respuestas por voz y síntesis generativa por IA.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
