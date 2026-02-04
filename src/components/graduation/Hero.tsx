import { GraduationCap, MapPin, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        {/* Overlay (Capa oscura) con los colores de la UAZ para dar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E3D59]/80 via-[#1E3D59]/60 to-[#1E3D59]/90" />
      </div>

      <div className="container relative z-10 px-4 text-center text-white animate-fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 hover:bg-white/20 transition-colors">
          <GraduationCap className="w-5 h-5 text-[#D4AF37]" />
          <span className="text-sm font-medium tracking-wide uppercase">Clase 2022 - 2026</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Ingeniería de <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D06B]">
            Software
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light max-w-2xl mx-auto">
          Universidad Autónoma de Zacatecas
          <br />
          <span className="text-sm opacity-80 mt-2 block">"Francisco García Salinas"</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <div className="flex items-center gap-2 text-gray-300 bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm">
            <CalendarDays className="w-5 h-5 text-[#D4AF37]" />
            <span>15 de Julio, 2026</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm">
            <MapPin className="w-5 h-5 text-[#D4AF37]" />
            <span>Zacatecas, Zac.</span>
          </div>
        </div>

        <div className="mt-12">
           <Button 
            onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#D4AF37] hover:bg-[#B5952F] text-[#1E3D59] font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-[#D4AF37]/20 hover:scale-105 transition-all duration-300"
          >
            Confirmar Asistencia
          </Button>
        </div>
      </div>

      {/* Elemento decorativo inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A1929] to-transparent z-10" />
    </section>
  );
};

export default Hero;