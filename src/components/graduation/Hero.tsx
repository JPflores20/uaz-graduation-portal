import { GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 gradient-overlay" />
      </div>
      
      {/* Decorative Gold Lines */}
      <div className="absolute top-20 left-0 w-32 h-1 gold-shimmer" />
      <div className="absolute top-24 left-0 w-20 h-0.5 bg-gold/50" />
      <div className="absolute bottom-20 right-0 w-32 h-1 gold-shimmer" />
      <div className="absolute bottom-24 right-0 w-20 h-0.5 bg-gold/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* UAZ Logo Placeholder */}
        <div className="animate-fade-up mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/10 backdrop-blur-sm border-2 border-gold/50">
            <GraduationCap className="w-12 h-12 md:w-16 md:h-16 text-gold" />
          </div>
        </div>
        
        {/* University Name */}
        <h2 className="animate-fade-up-delay-1 text-sm md:text-base uppercase tracking-[0.3em] text-gold font-medium mb-4">
          Universidad Autónoma de Zacatecas
        </h2>
        
        {/* Decorative Divider */}
        <div className="animate-fade-up-delay-1 flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-gold/60" />
          <div className="w-2 h-2 rotate-45 bg-gold" />
          <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-gold/60" />
        </div>
        
        {/* Class Name */}
        <h1 className="animate-fade-up-delay-2 font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          Generación
          <span className="block text-gold gold-shimmer bg-clip-text">2022 — 2026</span>
        </h1>
        
        {/* Major */}
        <p className="animate-fade-up-delay-3 text-lg md:text-2xl text-white/90 font-light tracking-wide mb-8">
          Ingeniería de Software
        </p>
        
        {/* Invitation Text */}
        <p className="animate-fade-up-delay-3 text-white/70 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
          Te invitamos a celebrar con nosotros este momento tan especial en nuestras vidas
        </p>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
