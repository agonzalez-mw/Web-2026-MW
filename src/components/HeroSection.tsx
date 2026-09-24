import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import heroBg from '../assets/images/fondohero.jpg';

interface HeroSlide {
  id: string;
  serviceId?: string;
  titlePrefix: string;
  highlightText: string;
  titleSuffix: string;
  subtitle: string;
  highlightPhrase?: string;
}

const HERO_SLIDE: HeroSlide = {
  id: 'consultoria',
  serviceId: 'consultoria',
  titlePrefix: 'Transformamos tus datos en ',
  highlightText: 'resultados de negocio',
  titleSuffix: ' escalables.',
  subtitle: 'Somos el Partner Estratégico en Marketing Digital que tu empresa necesita. Integramos analítica avanzada (GA4), Inteligencia Artificial, campañas y Full Stack GMP para maximizar el retorno de tu inversión publicitaria.'
};

interface HeroSectionProps {
  onNavigateToServices: () => void;
  onLeadSuccess: (leadData: { name: string; email: string; company: string; service: string }) => void;
  onSelectService?: (serviceId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigateToServices,
  onLeadSuccess,
  onSelectService
}) => {
  const currentSlide = HERO_SLIDE;

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: 'ga4',
    message: '',
    consent: true
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) return;

    setFormSubmitted(true);
    onLeadSuccess({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      service: formData.service
    });
  };

  return (
    <section className="relative bg-[#0a0f1d] text-white overflow-hidden py-12 lg:py-16 border-b border-[#1e293b]/50" id="inicio">
      {/* Background Image fija con difuminado y gradientes cinematográficos */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#0a0f1d]">
        <img
          src={heroBg}
          alt="Mentalidad Web Inteligencia y Datos"
          className="w-full h-full object-cover object-center"
        />
        {/* Difuminado y atenuación balanceada */}
        <div className="absolute inset-0 bg-[#0a0f1d]/45 backdrop-blur-[2px]" />
        {/* Gradientes direccionales para perfecta legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060a12]/75 via-[#0a0f1d]/45 to-[#060a12]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d]/90 via-transparent to-[#0a0f1d]/40" />
      </div>

      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#74bf28]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Hero Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {/* Title & Subtitle Container */}
            <div className="flex flex-col justify-center space-y-4">
              {/* Hero Main Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white leading-[1.18]">
                {currentSlide.titlePrefix}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#74bf28] via-[#8ce033] to-emerald-400">
                  {currentSlide.highlightText}
                </span>
                {currentSlide.titleSuffix}
              </h1>

              {/* Hero Subtitle with key services highlighted */}
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                Somos el Partner Estratégico en Marketing Digital que tu empresa necesita. Integramos{' '}
                <span className="text-white font-semibold underline decoration-[#74bf28] decoration-2 underline-offset-4">
                  analítica avanzada (GA4)
                </span>
                ,{' '}
                <span className="text-white font-semibold underline decoration-[#74bf28] decoration-2 underline-offset-4">
                  Inteligencia Artificial
                </span>
                ,{' '}
                <span className="text-white font-semibold underline decoration-[#74bf28] decoration-2 underline-offset-4">
                  campañas
                </span>{' '}
                y{' '}
                <span className="text-white font-semibold underline decoration-[#74bf28] decoration-2 underline-offset-4">
                  Full Stack GMP
                </span>{' '}
                para maximizar el retorno de tu inversión publicitaria.
              </p>
            </div>

            {/* Twin CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#contacto"
                className="px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[#060a12] bg-[#74bf28] hover:bg-[#8ce033] rounded transition duration-200 shadow-lg green-glow inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Agendar Consultoría</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={onNavigateToServices}
                className="px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-[#111c35] hover:bg-[#1e293b] border border-slate-700 rounded transition duration-200 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Ver Servicios</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Certifications Grid */}
            <div className="pt-4">
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Ecosistema Tecnológico & Certificaciones Oficiales
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-[#111c35]/80 border border-slate-700/70 rounded-lg text-center flex flex-col items-center justify-center hover:border-[#74bf28] transition">
                  <span className="text-xs font-bold text-white">Google Partner</span>
                  <span className="text-[10px] text-[#74bf28] font-medium">Premier 2025 (Top 3%)</span>
                </div>
                <div className="p-3 bg-[#111c35]/80 border border-slate-700/70 rounded-lg text-center flex flex-col items-center justify-center hover:border-cyan-400 transition">
                  <span className="text-xs font-bold text-white">Google Cloud</span>
                  <span className="text-[10px] text-slate-400 font-medium">Analytics Certified</span>
                </div>
                <div className="p-3 bg-[#111c35]/80 border border-slate-700/70 rounded-lg text-center flex flex-col items-center justify-center hover:border-[#74bf28] transition">
                  <span className="text-xs font-bold text-white">GMP Partner</span>
                  <span className="text-[10px] text-[#74bf28] font-medium">Full Stack Sales & Resell</span>
                </div>
                <div className="p-3 bg-[#111c35]/80 border border-slate-700/70 rounded-lg text-center flex flex-col items-center justify-center hover:border-amber-400 transition">
                  <span className="text-xs font-bold text-white">HubSpot</span>
                  <span className="text-[10px] text-slate-400 font-medium">Solutions Partner</span>
                </div>
              </div>
            </div>

          </div>

          {/* Hero Right Column: The Signature High-Tech Lead Form */}
          <div className="lg:col-span-5" id="contacto">
            <div className="bg-slate-100/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl relative border border-white/60">
              <div className="mb-5">
                <h2 className="text-2xl font-extrabold text-slate-900">Cuéntanos tu Desafío</h2>
                <p className="text-xs text-slate-600 mt-1">
                  Te ayudamos a encontrar la mejor solución.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 bg-white/95 rounded-xl border border-slate-200 text-center space-y-3 shadow-inner">
                  <div className="w-12 h-12 rounded-full bg-[#74bf28]/20 text-[#58991b] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">¡Requerimiento Recibido con Éxito!</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Hemos asignado tu caso a un <strong>Lead Solution Consultant</strong> de Mentalidad Web. Te contactaremos en menos de 24 horas hábiles a <span className="text-[#58991b] font-semibold">{formData.email}</span>.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-3 text-xs text-slate-500 hover:text-slate-900 underline cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="lead-name">
                      Nombre y Apellido *
                    </label>
                    <input
                      id="lead-name"
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Andrea Morales"
                      className="w-full text-xs rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-[#74bf28] focus:ring-1 focus:ring-[#74bf28] px-3 py-2.5 shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="lead-email">
                      Email Corporativo *
                    </label>
                    <input
                      id="lead-email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="amorales@empresa.cl"
                      className="w-full text-xs rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-[#74bf28] focus:ring-1 focus:ring-[#74bf28] px-3 py-2.5 shadow-xs"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="lead-company">
                        Empresa / Organización *
                      </label>
                      <input
                        id="lead-company"
                        required
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Ej. Retail Group S.A."
                        className="w-full text-xs rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-[#74bf28] focus:ring-1 focus:ring-[#74bf28] px-3 py-2.5 shadow-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="lead-phone">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        id="lead-phone"
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+56 9 1234 5678"
                        className="w-full text-xs rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-[#74bf28] focus:ring-1 focus:ring-[#74bf28] px-3 py-2.5 shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="lead-service">
                      Área de Interés Principal
                    </label>
                    <select
                      id="lead-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full text-xs rounded-lg bg-white border border-slate-300 text-slate-900 focus:border-[#74bf28] px-3 py-2.5 shadow-xs"
                    >
                      <option value="ga4">Google Analytics 4 & GA360 / GTM Server-Side</option>
                      <option value="ley-datos">Cumplimiento Ley 21.719 & Consent Mode v2</option>
                      <option value="bigquery">BigQuery, Data Engineering & Dashboards</option>
                      <option value="sem-dv360">Marketing Digital & Programmatic DV360</option>
                      <option value="ia-predictive">Modelos Predictivos & IA Aplicada</option>
                      <option value="hubspot">HubSpot, Inbound & Lead Scoring</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="lead-message">
                      Breve descripción de tu objetivo
                    </label>
                    <textarea
                      id="lead-message"
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Cuéntanos sobre tus herramientas actuales, tiempos esperados o volumen de tráfico..."
                      className="w-full text-xs rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-[#74bf28] focus:ring-1 focus:ring-[#74bf28] px-3 py-2 shadow-xs"
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-2 pt-1">
                    <input
                      id="lead-consent"
                      required
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 rounded border-slate-300 bg-white text-[#74bf28] focus:ring-[#74bf28]"
                    />
                    <label className="text-[11px] text-slate-600 leading-tight cursor-pointer" htmlFor="lead-consent">
                      Autorizo el tratamiento de mis datos de contacto para la coordinación de esta consultoría según la{' '}
                      <span className="underline text-[#58991b] font-medium">Ley de Datos 21.719</span>.
                    </label>
                  </div>

                  {/* Contrast Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-white font-extrabold uppercase tracking-wider text-xs rounded-lg shadow-lg hover:shadow-xl transition duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Solicitar Diagnóstico</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-center pt-1">
                    <span className="text-[10px] text-slate-500 flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#58991b]" />
                      Respuesta garantizada en menos de 24 horas por un Lead Solution Consultant.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
