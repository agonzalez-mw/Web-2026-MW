import React, { useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight, ShieldCheck } from 'lucide-react';
import { MentalidadWebLogo } from './MentalidadWebLogo';

interface NavbarProps {
  onOpenDiagnostic?: () => void;
  onOpenConsultation: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

interface ServiceCategory {
  id: string;
  name: string;
  hasSubmenu: boolean;
  subServices?: string[];
  description?: string;
}

const SERVICE_MENU_CATEGORIES: ServiceCategory[] = [
  {
    id: 'proteccion-datos',
    name: 'Protección de datos',
    hasSubmenu: false,
    description: 'Auditoría, Consent Mode v2, Server-Side Tagging y cumplimiento técnico Ley 21.719 en Chile y estándares globales.'
  },
  {
    id: 'consultoria',
    name: 'Consultoría',
    hasSubmenu: true,
    subServices: [
      'Posicionamiento Web (SEO/GEO/AEO/)',
      'Google Analytics 4',
      'Inteligencia Artificial',
      'Google Tag Manager',
      'Licencias Google Analytics 360'
    ]
  },
  {
    id: 'data',
    name: 'Data',
    hasSubmenu: true,
    subServices: [
      'Full Stack GMP',
      'Real Time Dashboarding/Data',
      'BigQuery'
    ]
  },
  {
    id: 'marketing-digital',
    name: 'Marketing Digital',
    hasSubmenu: true,
    subServices: [
      'Marketing Digital Online (SEM)',
      'Programmatic & Rich Media',
      'Auditoría de Campañas'
    ]
  },
  {
    id: 'marketing-contenido',
    name: 'Marketing de Contenido',
    hasSubmenu: true,
    subServices: [
      'Inbound Marketing - Hubspot',
      'Social Media Marketing'
    ]
  },
  {
    id: 'tecnologia',
    name: 'Tecnología',
    hasSubmenu: true,
    subServices: [
      'Training y Capacitación',
      'Soporte Técnico GMP'
    ]
  },
  {
    id: 'creatividad-desarrollo',
    name: 'Creatividad y Desarrollo',
    hasSubmenu: true,
    subServices: [
      'Desarrollo Web',
      'Diseño de Piezas Creativas'
    ]
  }
];

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDiagnostic,
  onOpenConsultation,
  activeSection,
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState<string | null>('consultoria');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('consultoria');

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    onNavigate(id);
  };

  const selectedCategoryData = SERVICE_MENU_CATEGORIES.find(
    (c) => c.id === activeCategory
  ) || SERVICE_MENU_CATEGORIES[1];

  return (
    <header className="sticky top-0 z-50 bg-[#0a0f1d]/95 backdrop-blur-md border-b border-[#1e293b]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="flex items-center group focus:outline-none transition-transform hover:scale-[1.02] cursor-pointer"
          title="Mentalidad Web - Home"
          aria-label="Mentalidad Web - Inicio"
        >
          <MentalidadWebLogo className="h-8 sm:h-9 w-auto" variant="white" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-7 text-sm font-medium">
          <button
            onClick={() => handleNavClick('inicio')}
            className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeSection === 'inicio' ? 'text-[#74bf28] font-bold' : 'text-slate-300 hover:text-white'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#74bf28]"></span>
            Inicio
          </button>

          {/* Servicios with Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavClick('servicios')}
              className={`transition-colors relative flex items-center gap-1.5 py-2 cursor-pointer ${
                activeSection === 'servicios' || servicesDropdownOpen
                  ? 'text-[#74bf28] font-bold'
                  : 'text-slate-300 hover:text-white'
              }`}
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
            >
              <span>Servicios</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesDropdownOpen ? 'rotate-180 text-[#74bf28]' : 'text-slate-400'
                }`}
              />
            </button>

            {/* Dropdown Menu Container */}
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="flex bg-[#0a0f1d]/98 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl">
                  {/* Left Column: Principal Categories */}
                  <div className="w-64 py-3 bg-[#0a0f1d] border-r border-slate-800/80 flex flex-col">
                    {SERVICE_MENU_CATEGORIES.map((category) => {
                      const isHovered = activeCategory === category.id;
                      return (
                        <div
                          key={category.id}
                          onMouseEnter={() => setActiveCategory(category.id)}
                          className={`flex items-center justify-between px-5 py-2.5 cursor-pointer transition-all duration-150 text-sm select-none ${
                            isHovered
                              ? 'text-white bg-[#141f36] font-semibold'
                              : 'text-slate-300 hover:text-white hover:bg-[#10192e]'
                          }`}
                        >
                          <span
                            className={
                              isHovered
                                ? 'underline underline-offset-4 decoration-[#74bf28] text-white font-medium'
                                : 'text-slate-200'
                            }
                          >
                            {category.name}
                          </span>
                          {category.hasSubmenu && (
                            <ChevronRight
                              className={`w-3.5 h-3.5 transition-transform ${
                                isHovered ? 'text-[#74bf28] translate-x-0.5' : 'text-slate-500'
                              }`}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Right Column: Sub-Services */}
                  <div className="w-80 p-5 bg-[#070b14]/95 flex flex-col">
                    <div className="space-y-1">
                      {selectedCategoryData.subServices ? (
                        <div className="space-y-1">
                          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                            {selectedCategoryData.name}
                          </div>
                          {selectedCategoryData.subServices.map((sub, idx) => (
                            <div
                              key={idx}
                              className="px-3.5 py-2.5 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer flex items-center justify-between group"
                            >
                              <span>{sub}</span>
                              <span className="opacity-0 group-hover:opacity-100 text-[#74bf28] text-xs font-mono transition-opacity">
                                →
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="p-4 rounded-xl bg-[#0e172a] border border-slate-800/80 space-y-2.5">
                          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8ce033] bg-[#74bf28]/15 px-2.5 py-1 rounded-md">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>Protección & Gobernanza</span>
                          </div>
                          <h4 className="text-sm font-bold text-white leading-snug">
                            Cumplimiento Ley 21.719 & Consent Mode v2
                          </h4>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            {selectedCategoryData.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('casos')}
            className={`transition-colors cursor-pointer ${
              activeSection === 'casos' ? 'text-[#74bf28] font-bold' : 'text-slate-300 hover:text-white'
            }`}
          >
            Casos de Éxito
          </button>
          <button
            onClick={() => handleNavClick('clientes')}
            className={`transition-colors cursor-pointer ${
              activeSection === 'clientes' ? 'text-[#74bf28] font-bold' : 'text-slate-300 hover:text-white'
            }`}
          >
            Clientes
          </button>
          <button
            onClick={() => handleNavClick('blog')}
            className={`transition-colors cursor-pointer ${
              activeSection === 'blog' ? 'text-[#74bf28] font-bold' : 'text-slate-300 hover:text-white'
            }`}
          >
            Blog
          </button>
          <button
            onClick={() => handleNavClick('nosotros')}
            className={`transition-colors cursor-pointer ${
              activeSection === 'nosotros' ? 'text-[#74bf28] font-bold' : 'text-slate-300 hover:text-white'
            }`}
          >
            Nosotros
          </button>
        </nav>

        {/* Right Header Actions */}
        <div className="flex items-center space-x-4">
          {/* Direct CTA */}
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center px-4 py-2 text-xs uppercase tracking-wider font-bold rounded bg-[#74bf28] text-[#060a12] hover:bg-[#8ce033] transition shadow-lg green-glow-subtle cursor-pointer"
          >
            Hablemos / Diagnóstico
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0a0f1d] border-b border-[#1e293b] px-4 pt-3 pb-6 space-y-3 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1.5">
            <button
              onClick={() => handleNavClick('inicio')}
              className="text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#74bf28] rounded-md hover:bg-[#111c35]"
            >
              Inicio
            </button>

            {/* Mobile Servicios Accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#74bf28] rounded-md hover:bg-[#111c35] flex items-center justify-between"
              >
                <span>Servicios</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileServicesOpen ? 'rotate-180 text-[#74bf28]' : 'text-slate-400'
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="pl-3 pr-2 py-2 space-y-2 bg-[#070b16] rounded-xl my-1 border border-slate-800">
                  {SERVICE_MENU_CATEGORIES.map((category) => {
                    const isExpanded = mobileActiveCategory === category.id;
                    return (
                      <div key={category.id} className="space-y-1">
                        <button
                          type="button"
                          onClick={() =>
                            setMobileActiveCategory(isExpanded ? null : category.id)
                          }
                          className="w-full text-left px-2 py-1.5 text-xs font-semibold text-slate-200 hover:text-[#74bf28] flex items-center justify-between rounded hover:bg-[#10192e]"
                        >
                          <span>{category.name}</span>
                          {category.hasSubmenu && (
                            <ChevronDown
                              className={`w-3.5 h-3.5 transition-transform ${
                                isExpanded ? 'rotate-180 text-[#74bf28]' : 'text-slate-500'
                              }`}
                            />
                          )}
                        </button>

                        {isExpanded && category.subServices && (
                          <div className="pl-3 py-1 space-y-1 border-l-2 border-slate-800">
                            {category.subServices.map((sub, idx) => (
                              <div
                                key={idx}
                                className="text-[11px] text-slate-400 py-1 px-1.5 hover:text-white"
                              >
                                {sub}
                              </div>
                            ))}
                          </div>
                        )}

                        {isExpanded && !category.subServices && (
                          <div className="pl-3 py-1 text-[11px] text-slate-400 border-l-2 border-slate-800">
                            {category.description}
                          </div>
                        )}
                      </div>
                    );
                  })}
                  <div className="pt-2 border-t border-slate-800">
                    <button
                      onClick={() => handleNavClick('servicios')}
                      className="text-xs font-bold text-[#74bf28] px-2 py-1 hover:underline"
                    >
                      Ir a la página de Servicios →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('casos')}
              className="text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#74bf28] rounded-md hover:bg-[#111c35]"
            >
              Casos de Éxito
            </button>
            <button
              onClick={() => handleNavClick('clientes')}
              className="text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#74bf28] rounded-md hover:bg-[#111c35]"
            >
              Clientes
            </button>
            <button
              onClick={() => handleNavClick('blog')}
              className="text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#74bf28] rounded-md hover:bg-[#111c35]"
            >
              Blog
            </button>
            <button
              onClick={() => handleNavClick('nosotros')}
              className="text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#74bf28] rounded-md hover:bg-[#111c35]"
            >
              Nosotros
            </button>
          </div>
          <div className="pt-3 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full text-center px-4 py-2.5 text-xs uppercase tracking-wider font-bold rounded bg-[#74bf28] text-[#060a12] hover:bg-[#8ce033] transition"
            >
              Hablemos / Diagnóstico
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
