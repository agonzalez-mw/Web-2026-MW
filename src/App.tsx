/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ClientTrustBar } from './components/ClientTrustBar';
import { ServicesSection } from './components/ServicesSection';
import { MetricsBanner } from './components/MetricsBanner';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { FeaturedCaseSection } from './components/FeaturedCaseSection';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { ArticleDetailPage } from './components/ArticleDetailPage';
import { ConsultationModal } from './components/ConsultationModal';
import { DiagnosticToolModal } from './components/DiagnosticToolModal';
import { ServicesPage } from './components/ServicesPage';
import { CaseStudiesPage } from './components/CaseStudiesPage';
import { ClientsPage } from './components/ClientsPage';
import { BlogPage } from './components/BlogPage';
import { AboutPage } from './components/AboutPage';
import { ServiceItem, BlogPost } from './types';
import { SERVICES_LIST, SERVICES_CATEGORIES, EXTENDED_BLOG_POSTS } from './data/martechData';
import { CheckCircle, X } from 'lucide-react';

type AppPage = 'home' | 'servicios' | 'casos' | 'clientes' | 'blog' | 'nosotros';

export default function App() {
  const allServices = useMemo(() => {
    const list: ServiceItem[] = [...SERVICES_LIST];
    SERVICES_CATEGORIES.forEach(cat => {
      cat.services.forEach(srv => {
        if (!list.some(s => s.id === s.id)) {
          list.push(srv);
        }
      });
    });
    return list;
  }, []);

  const [currentPage, setCurrentPage] = useState<AppPage>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (['servicios', 'casos', 'clientes', 'blog', 'nosotros'].includes(hash)) {
        return hash as AppPage;
      }
      if (hash === 'inicio') {
        return 'home';
      }
    }
    // Default to 'servicios' or 'home'
    return 'servicios';
  });

  const [activeSection, setActiveSection] = useState<string>(() => {
    return currentPage === 'home' ? 'inicio' : currentPage;
  });

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('servicio-')) {
        const sId = hash.replace('servicio-', '');
        const found = SERVICES_LIST.find(s => s.id === sId) || 
          SERVICES_CATEGORIES.flatMap(c => c.services).find(s => s.id === sId);
        if (found) return found;
      }
    }
    return null;
  });

  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('articulo-')) {
        const aId = hash.replace('articulo-', '');
        const found = EXTENDED_BLOG_POSTS.find(p => p.id === aId);
        if (found) return found;
      }
    }
    return null;
  });
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [consultationServiceTopic, setConsultationServiceTopic] = useState<string | undefined>(undefined);
  
  // Toast notification for lead capture
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // 0.3s Page Transition Loading State
  const [isPageLoading, setIsPageLoading] = useState(false);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const triggerPageTransition = () => {
    setIsPageLoading(true);
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }
    transitionTimeoutRef.current = setTimeout(() => {
      setIsPageLoading(false);
    }, 300); // exactly 0.3 seconds
  };

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  // Sync with browser hash changes (back/forward navigation)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      
      if (hash.startsWith('articulo-')) {
        const aId = hash.replace('articulo-', '');
        const found = EXTENDED_BLOG_POSTS.find(p => p.id === aId);
        if (found) {
          triggerPageTransition();
          setSelectedArticle(found);
          setSelectedService(null);
          setActiveSection('blog');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }

      if (hash.startsWith('servicio-')) {
        const sId = hash.replace('servicio-', '');
        const found = allServices.find(s => s.id === sId);
        if (found) {
          triggerPageTransition();
          setSelectedArticle(null);
          setSelectedService(found);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }

      const validPages: Record<string, AppPage> = {
        'servicios': 'servicios',
        'casos': 'casos',
        'clientes': 'clientes',
        'blog': 'blog',
        'nosotros': 'nosotros',
        'inicio': 'home'
      };

      if (validPages[hash]) {
        triggerPageTransition();
        setSelectedArticle(null);
        setSelectedService(null);
        setCurrentPage(validPages[hash]);
        setActiveSection(hash === 'inicio' ? 'inicio' : hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [allServices]);

  const handleNavigate = (sectionId: string) => {
    setSelectedService(null);
    setSelectedArticle(null);
    const validPages: Record<string, AppPage> = {
      'servicios': 'servicios',
      'casos': 'casos',
      'clientes': 'clientes',
      'blog': 'blog',
      'nosotros': 'nosotros',
      'inicio': 'home'
    };

    if (validPages[sectionId]) {
      triggerPageTransition();
      const targetPage = validPages[sectionId];
      setCurrentPage(targetPage);
      setActiveSection(sectionId);
      window.location.hash = `#${sectionId}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Navigating to internal anchors (e.g. 'contacto')
    setActiveSection(sectionId);
    if (currentPage !== 'home') {
      triggerPageTransition();
      setCurrentPage('home');
      window.location.hash = `#${sectionId}`;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.location.hash = `#${sectionId}`;
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    triggerPageTransition();
    setSelectedArticle(null);
    setSelectedService(service);
    window.location.hash = `#servicio-${service.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (post: BlogPost) => {
    triggerPageTransition();
    setSelectedService(null);
    setSelectedArticle(post);
    setActiveSection('blog');
    window.location.hash = `#articulo-${post.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLeadSuccess = (leadData: { name: string; email: string; company: string; service: string }) => {
    setToastMessage(`¡Gracias ${leadData.name}! Tu solicitud para ${leadData.company} (${leadData.service}) ha sido recibida.`);
    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  const handleBookService = (serviceName: string) => {
    setConsultationServiceTopic(serviceName);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-[#74bf28] selection:text-[#060a12]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0a0f1d] border border-[#74bf28] text-white p-4 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300 max-w-md">
          <CheckCircle className="w-5 h-5 text-[#74bf28] shrink-0" />
          <p className="text-xs text-slate-200 leading-snug">{toastMessage}</p>
          <button
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white ml-auto cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
        onOpenConsultation={() => {
          setConsultationServiceTopic(undefined);
          setIsConsultationOpen(true);
        }}
      />

      {/* Main Page Flow Matching Wireframe & Screens */}
      <main className="flex-1">
        {selectedArticle ? (
          <ArticleDetailPage
            post={selectedArticle}
            onBack={() => {
              triggerPageTransition();
              setSelectedArticle(null);
              handleNavigate('blog');
            }}
            onSelectArticle={handleSelectArticle}
            onOpenConsultation={(topic) => {
              setConsultationServiceTopic(topic || `Artículo: ${selectedArticle.title}`);
              setIsConsultationOpen(true);
            }}
            onNavigateHome={() => {
              triggerPageTransition();
              setSelectedArticle(null);
              handleNavigate('inicio');
            }}
          />
        ) : selectedService ? (
          <ServiceDetailPage
            service={selectedService}
            onBack={() => {
              triggerPageTransition();
              setSelectedService(null);
              window.location.hash = '#servicios';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenConsultation={(topic) => {
              setConsultationServiceTopic(topic || selectedService.title);
              setIsConsultationOpen(true);
            }}
            onSelectCaseStudy={() => {
              triggerPageTransition();
              setSelectedService(null);
              handleNavigate('casos');
            }}
            onLeadSuccess={handleLeadSuccess}
          />
        ) : (
          <>
            {currentPage === 'servicios' && (
              <ServicesPage
                onSelectService={handleSelectService}
                onOpenConsultation={(topic) => {
                  setConsultationServiceTopic(topic);
                  setIsConsultationOpen(true);
                }}
                onNavigateHome={() => handleNavigate('inicio')}
              />
            )}

            {currentPage === 'casos' && (
              <CaseStudiesPage
                onOpenConsultation={(topic) => {
                  setConsultationServiceTopic(topic || 'Casos de Éxito');
                  setIsConsultationOpen(true);
                }}
                onNavigateHome={() => handleNavigate('inicio')}
              />
            )}

            {currentPage === 'clientes' && (
              <ClientsPage
                onOpenConsultation={(topic) => {
                  setConsultationServiceTopic(topic || 'Clientes y Alianzas');
                  setIsConsultationOpen(true);
                }}
                onNavigateHome={() => handleNavigate('inicio')}
              />
            )}

            {currentPage === 'blog' && (
              <BlogPage
                onSelectArticle={handleSelectArticle}
                onOpenConsultation={(topic) => {
                  setConsultationServiceTopic(topic || 'Blog e Insights');
                  setIsConsultationOpen(true);
                }}
                onNavigateHome={() => handleNavigate('inicio')}
              />
            )}

            {currentPage === 'nosotros' && (
              <AboutPage
                onOpenConsultation={(topic) => {
                  setConsultationServiceTopic(topic || 'Nosotros / Mentalidad Web');
                  setIsConsultationOpen(true);
                }}
                onNavigateHome={() => handleNavigate('inicio')}
              />
            )}

            {currentPage === 'home' && (
              <>
                {/* Screen 1: Hero with Live Telemetry, Ecosystem Badges & High-Tech Conversion Form */}
                <HeroSection
                  onNavigateToServices={() => handleNavigate('servicios')}
                  onLeadSuccess={handleLeadSuccess}
                  onSelectService={(sId) => {
                    const srv = allServices.find((s) => s.id === sId);
                    if (srv) {
                      handleSelectService(srv);
                    } else {
                      handleNavigate('servicios');
                    }
                  }}
                />

                {/* Client Validation Bar */}
                <ClientTrustBar
                  onSelectClientCase={() => handleNavigate('clientes')}
                />

                {/* Screen 2: MarTech Services Grid (3x2) */}
                <ServicesSection
                  onSelectService={handleSelectService}
                  onNavigateToAllServices={() => handleNavigate('servicios')}
                />

                {/* Quantitative Impact Metric Banner */}
                <MetricsBanner />

                {/* Screen 3: Methodology (Cómo Trabajamos) */}
                <HowWeWorkSection />

                {/* Screen 4: High Scale Featured Case Studies with Interactive Switcher */}
                <FeaturedCaseSection
                  onOpenConsultation={() => {
                    setConsultationServiceTopic('Caso de Éxito Similar');
                    setIsConsultationOpen(true);
                  }}
                  onNavigateToAllCases={() => handleNavigate('casos')}
                />

                {/* Screen 5: Mentalidad Insights Blog */}
                <BlogSection
                  onSelectArticle={handleSelectArticle}
                  onNavigateToAllArticles={() => handleNavigate('blog')}
                />
              </>
            )}
          </>
        )}
      </main>

      {/* Screen 6: Full Footer with Office Address, Services & Certifications */}
      <Footer
        onOpenConsultation={() => {
          setConsultationServiceTopic(undefined);
          setIsConsultationOpen(true);
        }}
        onNavigate={handleNavigate}
        onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
      />

      {/* Interactive Modals & Multi-Screen Tools */}
      
      {/* Modal 1: Consultation & Meeting Booking Calendar */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        defaultService={consultationServiceTopic}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* Modal 3: Interactive Ley 21.719 & MarTech Diagnostic Tool */}
      <DiagnosticToolModal
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
        onOpenConsultation={() => {
          setConsultationServiceTopic('Resultado Test Ley 21.719');
          setIsConsultationOpen(true);
        }}
      />

      {/* 0.3s Page Transition Loading Spinner (Rueda de Carga) */}
      {isPageLoading && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white/70 backdrop-blur-xs transition-opacity duration-150 animate-in fade-in"
          role="status"
          aria-live="polite"
          aria-label="Cargando página"
        >
          <div className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/95 border border-slate-200/90 shadow-2xl backdrop-blur-md animate-in zoom-in-95 duration-100 select-none">
            {/* Elegant rotating ring loader with brand green accent */}
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[3px] border-slate-100" />
              <div className="absolute inset-0 rounded-full border-[3px] border-[#74bf28] border-t-transparent animate-spin" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#74bf28]" />
            </div>
            <span className="text-[11px] font-bold text-slate-700 tracking-wider uppercase font-mono">
              Cargando...
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
