import React, { useState } from 'react';
import { BlogPost } from '../types';
import { EXTENDED_BLOG_POSTS } from '../data/martechData';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  User, 
  Check, 
  Share2, 
  CheckCircle2, 
  ArrowRight, 
  Bookmark, 
  Linkedin, 
  Twitter, 
  Link as LinkIcon,
  ShieldCheck,
  Sparkles,
  MessageSquare
} from 'lucide-react';

interface ArticleDetailPageProps {
  post: BlogPost;
  onBack: () => void;
  onSelectArticle: (post: BlogPost) => void;
  onOpenConsultation: (topic?: string) => void;
  onNavigateHome: () => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  post,
  onBack,
  onSelectArticle,
  onOpenConsultation,
  onNavigateHome
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  // Find 3 related articles (different from the current one)
  const relatedPosts = EXTENDED_BLOG_POSTS
    .filter((item) => item.id !== post.id)
    .slice(0, 3);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      const url = `${window.location.origin}${window.location.pathname}#articulo-${post.id}`;
      navigator.clipboard?.writeText(url).then(() => {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      }).catch(() => {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      });
    }
  };

  const handleShareLinkedIn = () => {
    if (typeof window !== 'undefined') {
      const url = encodeURIComponent(`${window.location.origin}${window.location.pathname}#articulo-${post.id}`);
      const title = encodeURIComponent(post.title);
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'noopener,noreferrer');
    }
  };

  const handleShareTwitter = () => {
    if (typeof window !== 'undefined') {
      const url = encodeURIComponent(`${window.location.origin}${window.location.pathname}#articulo-${post.id}`);
      const text = encodeURIComponent(`${post.title} vía @MentalidadWeb`);
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <article className="min-h-screen bg-white text-slate-800">
      
      {/* 1. TOP BREADCRUMB & BACK NAVIGATION BAR */}
      <div className="bg-slate-50 border-b border-slate-200 sticky top-16 z-30 backdrop-blur-md bg-slate-50/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-600 truncate mr-4">
            <button
              onClick={onBack}
              className="font-bold text-slate-700 hover:text-[#58991b] transition flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <ArrowLeft className="w-4 h-4 text-[#74bf28]" />
              <span>Volver al Blog</span>
            </button>
            <span className="text-slate-300">/</span>
            <button
              onClick={onNavigateHome}
              className="text-slate-400 hover:text-slate-600 transition hidden sm:inline"
            >
              Inicio
            </button>
            <span className="text-slate-300 hidden sm:inline">/</span>
            <button
              onClick={onBack}
              className="text-slate-400 hover:text-slate-600 transition hidden md:inline"
            >
              Blog & Insights
            </button>
            <span className="text-slate-300 hidden md:inline">/</span>
            <span className="font-semibold text-slate-900 truncate">
              {post.category}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopyLink}
              className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium flex items-center gap-1.5 shadow-2xs transition cursor-pointer"
              title="Copiar enlace del artículo"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#58991b]" />
                  <span className="text-[#58991b] font-bold">¡Copiado!</span>
                </>
              ) : (
                <>
                  <LinkIcon className="w-3.5 h-3.5 text-slate-500" />
                  <span className="hidden sm:inline">Compartir</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 2. ARTICLE HERO SECTION */}
      <header className="bg-gradient-to-b from-slate-900 via-[#0a0f1d] to-[#0d1627] text-white py-12 lg:py-18 relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#74bf28]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          
          {/* Metadata pill badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#74bf28]/20 text-[#8ce033] border border-[#74bf28]/40 text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-xs text-slate-300 flex items-center gap-1.5 font-medium">
              <Calendar className="w-3.5 h-3.5 text-[#74bf28]" />
              {post.date}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs text-slate-300 flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#74bf28]" />
              {post.readTime}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.18]">
            {post.title}
          </h1>

          {/* Subtitle / Executive Summary */}
          {post.summary && (
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              {post.summary}
            </p>
          )}

          {/* Author Bar */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#74bf28] to-[#58991b] text-[#060a12] font-black text-sm flex items-center justify-center shadow-md">
                {post.author.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>{post.author}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#74bf28]" />
                  <span className="text-[11px] font-normal text-[#8ce033]">Lead MarTech Strategist</span>
                </div>
                <div className="text-xs text-slate-400">
                  Mentalidad Web • Google Premier Partner (Top 3% LATAM)
                </div>
              </div>
            </div>

            {/* Social Share Buttons */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 mr-1 hidden sm:inline">Compartir:</span>
              <button
                onClick={handleShareLinkedIn}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#0077b5] text-slate-300 hover:text-white flex items-center justify-center transition cursor-pointer"
                title="Compartir en LinkedIn"
                aria-label="Compartir en LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </button>
              <button
                onClick={handleShareTwitter}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition cursor-pointer"
                title="Compartir en X / Twitter"
                aria-label="Compartir en X / Twitter"
              >
                <Twitter className="w-4 h-4" />
              </button>
              <button
                onClick={handleCopyLink}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition cursor-pointer"
                title="Copiar enlace"
                aria-label="Copiar enlace"
              >
                {copiedLink ? <Check className="w-4 h-4 text-[#8ce033]" /> : <LinkIcon className="w-4 h-4" />}
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* 3. MAIN CONTENT LAYOUT (Body + Sticky Sidebar) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Main Article Body (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Featured Image */}
            {post.imageUrl && (
              <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-md">
                <img
                  src={post.imageUrl}
                  alt={post.imageAlt || post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[460px] object-cover"
                />
                {post.imageAlt && (
                  <div className="p-3 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 italic text-center">
                    {post.imageAlt}
                  </div>
                )}
              </div>
            )}

            {/* Key Takeaways Box (Conclusiones Ejecutivas Clave) */}
            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
              <div className="p-6 sm:p-7 bg-emerald-50/70 border border-emerald-200/90 rounded-2xl shadow-2xs space-y-3.5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#74bf28]/20 flex items-center justify-center text-[#58991b]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#4c8716]">
                    Conclusiones Ejecutivas Clave
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {post.keyTakeaways.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#74bf28] shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Article Text Content */}
            <div className="prose prose-slate max-w-none space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              {post.content.map((paragraph, index) => {
                // First paragraph highlighted as lead intro
                if (index === 0) {
                  return (
                    <p
                      key={index}
                      className="text-lg sm:text-xl font-medium text-slate-900 leading-relaxed border-l-4 border-[#74bf28] pl-4 italic bg-slate-50/60 py-2 rounded-r-lg"
                    >
                      {paragraph}
                    </p>
                  );
                }

                return (
                  <p key={index} className="text-slate-700 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* In-Article Conversion Callout */}
            <div className="rounded-2xl bg-gradient-to-br from-[#0a0f1d] via-[#101b33] to-[#0a0f1d] p-6 sm:p-8 text-white border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#74bf28]/20 text-[#8ce033] text-[10px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  <span>Diagnóstico Estratégico</span>
                </div>
                <h4 className="text-lg sm:text-xl font-extrabold text-white">
                  ¿Quieres implementar este análisis en tu empresa?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
                  Nuestros consultores senior evalúan tu arquitectura actual y te entregan un roadmap priorizado sin costo.
                </p>
              </div>

              <button
                onClick={() => onOpenConsultation(`Consulta sobre artículo: ${post.title}`)}
                className="shrink-0 px-6 py-3.5 rounded-xl bg-[#74bf28] hover:bg-[#8ce033] text-[#060a12] font-black text-xs uppercase tracking-wider shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
              >
                <span>Agendar Diagnóstico</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Author Profile Footer Card */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#58991b] to-[#74bf28] text-[#060a12] font-black text-lg flex items-center justify-center shrink-0 shadow-md">
                {post.author.slice(0, 2).toUpperCase()}
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900">
                  Escrito por {post.author}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Consultor senior en Mentalidad Web. Especialista en arquitectura de datos First-Party, gobernanza bajo la Ley 21.719, analítica avanzada con Google Cloud Platform y optimización de medios con IA.
                </p>
              </div>
            </div>

            {/* Back button at article end */}
            <div className="pt-4 flex items-center justify-between border-t border-slate-200">
              <button
                onClick={onBack}
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#58991b] transition cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 text-[#74bf28]" />
                <span>Volver a la lista de noticias y artículos</span>
              </button>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-xs text-slate-400 hover:text-slate-700 transition cursor-pointer font-medium"
              >
                ↑ Volver al inicio del artículo
              </button>
            </div>

          </div>

          {/* Sticky Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
            
            {/* Quick Consultation Box */}
            <div className="p-6 rounded-2xl bg-[#0a0f1d] text-white border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#74bf28] animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8ce033]">
                  Consultoría MarTech
                </span>
              </div>

              <h4 className="text-base font-extrabold text-white">
                ¿Dudas sobre {post.category.toLowerCase()}?
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed">
                Agenda 30 minutos con un consultor especializado para evaluar el impacto específico en tu industria y stack tecnológico.
              </p>

              <button
                onClick={() => onOpenConsultation(`Diagnóstico para ${post.category}`)}
                className="w-full py-3 rounded-xl bg-[#74bf28] hover:bg-[#8ce033] text-[#060a12] font-black text-xs uppercase tracking-wider shadow-md transition transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Hablar con un consultor</span>
              </button>
            </div>

            {/* About Mentalidad Web */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Sobre Mentalidad Web
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Más de 15 años acelerando empresas líderes en Chile y Latinoamérica. Google Premier Partner (Top 3%), especialistas certificados en Google Marketing Platform, Google Cloud y cumplimiento normativo de datos.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Certificaciones:</span>
                <span className="font-bold text-slate-800">GMP • GCP • GA4</span>
              </div>
            </div>

            {/* Newsletter Subscription inside sidebar */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <h4 className="text-xs font-bold text-slate-900">
                Suscríbete a Mentalidad Insights
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Recibe quincenalmente en tu correo nuestros análisis normativos, arquitecturas cloud y casos de estudio.
              </p>
              <button
                onClick={() => onOpenConsultation('Suscripción a Newsletter y Alertas MarTech')}
                className="w-full py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs transition cursor-pointer"
              >
                Suscribirme con mi correo
              </button>
            </div>

          </aside>

        </div>
      </div>

      {/* 4. RELATED ARTICLES (3 items) */}
      <section className="bg-slate-50 border-t border-slate-200 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#74bf28]">
                CONTENIDO RELACIONADO
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-1">
                Más análisis y noticias de interés
              </h2>
            </div>

            <button
              onClick={onBack}
              className="text-xs font-bold text-[#58991b] hover:text-[#74bf28] flex items-center gap-1 cursor-pointer"
            >
              <span>Ver todos los artículos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <div
                key={related.id}
                onClick={() => onSelectArticle(related)}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-200 group flex flex-col justify-between cursor-pointer hover:border-[#74bf28]"
              >
                <div>
                  {related.imageUrl && (
                    <div className="h-44 overflow-hidden bg-slate-950 relative">
                      <img
                        src={related.imageUrl}
                        alt={related.imageAlt || related.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-xs text-[10px] font-bold text-white uppercase tracking-wider">
                        {related.category}
                      </div>
                    </div>
                  )}

                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                      <span>{related.date}</span>
                      <span>•</span>
                      <span>{related.readTime}</span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#58991b] transition-colors leading-snug line-clamp-2">
                      {related.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {related.summary}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 flex items-center text-xs font-bold text-[#58991b] group-hover:text-[#74bf28] transition-colors gap-1.5">
                  <span>Leer artículo completo</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </article>
  );
};
