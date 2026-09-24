import React, { useState } from 'react';
import { MapPin, Mail, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { MentalidadWebLogo } from './MentalidadWebLogo';

interface FooterProps {
  onOpenConsultation: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenDiagnostic: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenConsultation,
  onNavigate,
  onOpenDiagnostic
}) => {
  const [footerFormData, setFooterFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: 'ga4',
    message: '',
    consent: true
  });
  const [footerSubmitted, setFooterSubmitted] = useState(false);

  const handleFooterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFooterSubmitted(true);
  };

  return (
    <>
      {/* Full-width CTA Banner */}
      <section className="bg-gradient-to-r from-[#20552b] via-[#2f7a3f] to-[#1f562c] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
                ¿Hablamos 30 minutos de tu proyecto?
              </h2>
              <p className="text-sm sm:text-base text-emerald-100 font-normal">
                Sin compromiso. Salimos de la llamada con 3 acciones concretas.
              </p>
            </div>
            <div className="shrink-0">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#060a12] hover:bg-black text-white font-extrabold text-sm uppercase tracking-wider rounded-lg shadow-xl border border-white/20 transition duration-200 cursor-pointer"
              >
                <span>Agendar llamada</span>
                <ArrowRight className="w-4 h-4 ml-2 text-[#74bf28]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#0a0f1d] text-slate-400 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* 1. Formulario de Contacto (como en el banner) */}
            <div className="lg:col-span-5" id="contacto-footer">
              <div className="bg-[#111c35]/95 border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-sm">
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    Cuéntanos tu Desafío
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Te ayudamos a encontrar la mejor solución.
                  </p>
                </div>

                {footerSubmitted ? (
                  <div className="p-6 bg-[#0a0f1d] rounded-xl border border-slate-700 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#74bf28]/20 text-[#74bf28] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-base font-bold text-white">¡Requerimiento Recibido con Éxito!</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Hemos asignado tu caso a un <strong>Lead Solution Consultant</strong> de Mentalidad Web. Te contactaremos en menos de 24 horas hábiles a <span className="text-[#8ce033] font-semibold">{footerFormData.email}</span>.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFooterSubmitted(false)}
                      className="mt-2 text-xs text-slate-400 hover:text-white underline cursor-pointer"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFooterSubmit} className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1" htmlFor="footer-name">
                        Nombre y Apellido *
                      </label>
                      <input
                        id="footer-name"
                        required
                        type="text"
                        value={footerFormData.name}
                        onChange={(e) => setFooterFormData({ ...footerFormData, name: e.target.value })}
                        placeholder="Ej. Andrea Morales"
                        className="w-full text-xs rounded-lg bg-[#0a0f1d] border border-slate-700 text-white placeholder-slate-500 focus:border-[#74bf28] focus:ring-1 focus:ring-[#74bf28] px-3 py-2 shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1" htmlFor="footer-email">
                        Email Corporativo *
                      </label>
                      <input
                        id="footer-email"
                        required
                        type="email"
                        value={footerFormData.email}
                        onChange={(e) => setFooterFormData({ ...footerFormData, email: e.target.value })}
                        placeholder="amorales@empresa.cl"
                        className="w-full text-xs rounded-lg bg-[#0a0f1d] border border-slate-700 text-white placeholder-slate-500 focus:border-[#74bf28] focus:ring-1 focus:ring-[#74bf28] px-3 py-2 shadow-xs"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-300 mb-1" htmlFor="footer-company">
                          Empresa / Organización *
                        </label>
                        <input
                          id="footer-company"
                          required
                          type="text"
                          value={footerFormData.company}
                          onChange={(e) => setFooterFormData({ ...footerFormData, company: e.target.value })}
                          placeholder="Ej. Retail Group S.A."
                          className="w-full text-xs rounded-lg bg-[#0a0f1d] border border-slate-700 text-white placeholder-slate-500 focus:border-[#74bf28] focus:ring-1 focus:ring-[#74bf28] px-3 py-2 shadow-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-300 mb-1" htmlFor="footer-phone">
                          Teléfono / WhatsApp *
                        </label>
                        <input
                          id="footer-phone"
                          required
                          type="tel"
                          value={footerFormData.phone}
                          onChange={(e) => setFooterFormData({ ...footerFormData, phone: e.target.value })}
                          placeholder="+56 9 1234 5678"
                          className="w-full text-xs rounded-lg bg-[#0a0f1d] border border-slate-700 text-white placeholder-slate-500 focus:border-[#74bf28] focus:ring-1 focus:ring-[#74bf28] px-3 py-2 shadow-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1" htmlFor="footer-service">
                        Área de Interés Principal
                      </label>
                      <select
                        id="footer-service"
                        value={footerFormData.service}
                        onChange={(e) => setFooterFormData({ ...footerFormData, service: e.target.value })}
                        className="w-full text-xs rounded-lg bg-[#0a0f1d] border border-slate-700 text-white focus:border-[#74bf28] px-3 py-2 shadow-xs"
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
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1" htmlFor="footer-message">
                        Breve descripción de tu objetivo
                      </label>
                      <textarea
                        id="footer-message"
                        rows={2}
                        value={footerFormData.message}
                        onChange={(e) => setFooterFormData({ ...footerFormData, message: e.target.value })}
                        placeholder="Cuéntanos sobre tus herramientas actuales, tiempos o metas..."
                        className="w-full text-xs rounded-lg bg-[#0a0f1d] border border-slate-700 text-white placeholder-slate-500 focus:border-[#74bf28] focus:ring-1 focus:ring-[#74bf28] px-3 py-2 shadow-xs"
                      ></textarea>
                    </div>

                    <div className="flex items-start gap-2 pt-0.5">
                      <input
                        id="footer-consent"
                        required
                        type="checkbox"
                        checked={footerFormData.consent}
                        onChange={(e) => setFooterFormData({ ...footerFormData, consent: e.target.checked })}
                        className="mt-0.5 rounded border-slate-700 bg-[#0a0f1d] text-[#74bf28] focus:ring-[#74bf28]"
                      />
                      <label className="text-[10px] text-slate-400 leading-tight cursor-pointer" htmlFor="footer-consent">
                        Autorizo el tratamiento de mis datos de contacto para esta consultoría según la{' '}
                        <span className="underline text-[#74bf28]">Ley de Datos 21.719</span>.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-white font-extrabold uppercase tracking-wider text-xs rounded-lg shadow-lg hover:shadow-xl transition duration-200 flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      <span>Solicitar Diagnóstico</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="text-center pt-0.5">
                      <span className="text-[10px] text-slate-400 flex items-center justify-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#74bf28]" />
                        Respuesta garantizada en menos de 24 horas hábiles.
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Columna Derecha: Brand + Servicios + Legal (Arriba) y Certificaciones a lo largo (Abajo) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              
              {/* Bloque Superior: Secciones 2, 3 y 4 */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
                
                {/* 2. Brand & Description */}
                <div className="sm:col-span-5 space-y-4">
                  <div className="flex items-center">
                    <MentalidadWebLogo className="h-8 w-auto" variant="white" />
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Consultora y Agencia MarTech Premier en Latinoamérica. Impulsamos el crecimiento empresarial a través de analítica avanzada, inteligencia artificial y marketing de alto desempeño.
                  </p>

                  <div className="pt-2 text-slate-400 space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#74bf28] shrink-0 mt-0.5" />
                      <span>Villavicencio 361 Of. 114, Lastarria, Santiago, Chile</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-[#74bf28] shrink-0" />
                      <a href="mailto:contacto@mentalidadweb.com" className="hover:text-white transition">
                        contacto@mentalidadweb.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* 3. Servicios Clave */}
                <div className="sm:col-span-4">
                  <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
                    SERVICIOS CLAVE
                  </h4>
                  <ul className="space-y-2.5">
                    <li>
                      <button onClick={() => onNavigate('servicios')} className="hover:text-[#74bf28] transition cursor-pointer text-left">
                        Data & Analítica GA4
                      </button>
                    </li>
                    <li>
                      <button onClick={() => onNavigate('servicios')} className="hover:text-[#74bf28] transition cursor-pointer text-left">
                        Marketing Digital & Performance
                      </button>
                    </li>
                    <li>
                      <button onClick={() => onNavigate('servicios')} className="hover:text-[#74bf28] transition cursor-pointer text-left">
                        IA Assessment & Automatización
                      </button>
                    </li>
                    <li>
                      <button onClick={onOpenDiagnostic} className="hover:text-[#8ce033] transition flex items-center gap-1 cursor-pointer">
                        <span>Ley de Datos 21.719</span>
                        <span className="text-[9px] px-1 py-0.2 bg-[#74bf28]/20 text-[#8ce033] rounded">Test</span>
                      </button>
                    </li>
                    <li>
                      <button onClick={() => onNavigate('servicios')} className="hover:text-[#74bf28] transition cursor-pointer text-left">
                        Cloud Analytics & GCP
                      </button>
                    </li>
                  </ul>
                </div>

                {/* 4. Legal & Privacidad */}
                <div className="sm:col-span-3">
                  <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
                    LEGAL & PRIVACIDAD
                  </h4>
                  <ul className="space-y-2.5">
                    <li>
                      <span className="text-slate-400 hover:text-white transition cursor-default">Política de Privacidad</span>
                    </li>
                    <li>
                      <span className="text-slate-400 hover:text-white transition cursor-default">Cumplimiento Ley 21.719</span>
                    </li>
                    <li>
                      <span className="text-slate-400 hover:text-white transition cursor-default">Términos de Servicio</span>
                    </li>
                    <li>
                      <span className="text-slate-400 hover:text-white transition cursor-default">Seguridad de Datos</span>
                    </li>
                  </ul>
                </div>

              </div>

              {/* 5. Certificaciones "A lo largo" (Ocupando todo el ancho inferior bajo 2, 3 y 4) */}
              <div className="pt-6 border-t border-slate-800/80">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block mb-3">
                  CERTIFICACIONES & PARTNERSHIPS
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111c35] text-[11px] font-semibold text-slate-200 border border-slate-700/80 shadow-xs hover:border-[#74bf28]/50 transition">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]"></span>
                    Google Premier
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111c35] text-[11px] font-semibold text-[#8ce033] border border-[#74bf28]/40 shadow-xs hover:border-[#74bf28] transition">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#74bf28]"></span>
                    GMP Partner
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111c35] text-[11px] font-semibold text-slate-200 border border-slate-700/80 shadow-xs hover:border-[#4285F4]/50 transition">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]"></span>
                    Google Cloud Partner
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111c35] text-[11px] font-semibold text-slate-200 border border-slate-700/80 shadow-xs hover:border-[#0081FB]/50 transition">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0081FB]"></span>
                    Meta Business Partner
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111c35] text-[11px] font-semibold text-amber-300/90 border border-amber-500/30 shadow-xs hover:border-amber-400 transition">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59]"></span>
                    HubSpot Solutions
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111c35] text-[11px] font-semibold text-emerald-300/90 border border-emerald-500/30 shadow-xs hover:border-emerald-400 transition">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    ISO 27001 Certified
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* 6. Mantener 6: Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#74bf28]" />
              <span>© {new Date().getFullYear()} Mentalidad Web SpA. Todos los derechos reservados.</span>
            </div>
            <div className="flex space-x-6 text-slate-400">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#74bf28] transition uppercase tracking-wider font-semibold"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#74bf28] transition uppercase tracking-wider font-semibold"
              >
                X (Twitter)
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#74bf28] transition uppercase tracking-wider font-semibold"
              >
                YouTube
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#74bf28] transition uppercase tracking-wider font-semibold"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
