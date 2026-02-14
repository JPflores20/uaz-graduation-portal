import { GraduationCap, MapPin, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "@/components/ui/sparkles";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* IMAGEN DE FONDO DE GRADUADOS */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          // REEMPLAZA ESTA URL CON LA FOTO REAL DE LOS GRADUADOS
          backgroundImage: "url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay (Capa oscura y granulada) */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/95" />
        <div className="absolute inset-0 bg-noise opacity-[0.05]" />
      </div>

      {/* Partículas Doradas */}
      <Sparkles />

      <div className="container relative z-10 px-4 text-center text-white animate-fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 hover:bg-white/10 transition-colors shadow-2xl">
          <GraduationCap className="w-5 h-5 text-gold" />
          <span className="text-sm font-medium tracking-wide uppercase text-gray-200">Clase 2022 - 2026</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-display">
          Ingeniería de <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-[#F2D06B] to-gold animate-shimmer bg-[length:200%_100%]">
            Software
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light max-w-2xl mx-auto font-display italic">
          Universidad Autónoma de Zacatecas
          <br />
          <span className="text-sm opacity-80 mt-2 block font-sans not-italic">"Francisco García Salinas"</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-5 py-3 rounded-xl backdrop-blur-sm border border-white/5 hover:border-gold/20 transition-all cursor-default">
            <CalendarDays className="w-5 h-5 text-gold" />
            <span className="font-medium">15 de Julio, 2026</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-5 py-3 rounded-xl backdrop-blur-sm border border-white/5 hover:border-gold/20 transition-all cursor-default">
            <MapPin className="w-5 h-5 text-gold" />
            <span className="font-medium">Zacatecas, Zac.</span>
          </div>
        </div>

        <div className="mt-12">
           <Button 
            onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gold hover:bg-[#B5952F] text-primary font-bold text-lg px-8 py-6 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-white/20"
          >
            Confirmar Asistencia
          </Button>
        </div>
      </div>

      {/* Elemento decorativo inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;