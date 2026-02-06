import Hero from "@/components/graduation/Hero";
import Countdown from "@/components/graduation/Countdown";
import LocationCards from "@/components/graduation/LocationCards";
import Itinerary from "@/components/graduation/Itinerary";
import DressCode from "@/components/graduation/DressCode";
import GiftSection from "@/components/graduation/GiftSection";
import PhotoGallery from "@/components/graduation/PhotoGallery";
import MusicPlayer from "@/components/graduation/MusicPlayer";
import WhatsAppRSVP from "@/components/graduation/WhatsAppRSVP";
// Importamos los nuevos componentes
import Mentors from "@/components/graduation/Mentors";
import Accommodation from "@/components/graduation/Accommodation";

const GraduationInvite = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Hero Section */}
      <Hero />
      
      {/* Countdown Timer */}
      <Countdown />
      
      {/* Location Cards */}
      <LocationCards />

      {/* AGREGADO: Sugerencias de Hospedaje (Ideal después de la ubicación) */}
      <Accommodation />
      
      {/* Event Itinerary */}
      <Itinerary />
      
      {/* Dress Code */}
      <DressCode />

      {/* AGREGADO: Mentores (Buen lugar antes de los regalos) */}
      <Mentors />
      
      {/* Gift Registry */}
      <GiftSection />
      
      {/* Photo Gallery */}
      <PhotoGallery />
      
      {/* RSVP Section */}
      <WhatsAppRSVP />
      
      {/* Music Player - Floating */}
      <MusicPlayer />
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center gradient-navy">
        <p className="text-white/50 text-sm">
          Con cariño, Generación 2022-2026
        </p>
        <p className="text-gold/70 text-xs mt-2">
          Ingeniería de Software — UAZ
        </p>
      </footer>
    </div>
  );
};

export default GraduationInvite;