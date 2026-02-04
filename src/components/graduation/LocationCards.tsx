import { Church, PartyPopper, MapPin, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  {
    id: "mass",
    icon: Church,
    title: "Misa de Acción de Gracias",
    venue: "Catedral Basílica de Zacatecas",
    address: "Centro Histórico, Zacatecas, Zac.",
    time: "10:00 AM",
    mapsUrl: "https://maps.google.com/?q=Catedral+Basílica+de+Zacatecas",
  },
  {
    id: "reception",
    icon: PartyPopper,
    title: "Recepción",
    venue: "Salón de Eventos UAZ",
    address: "Campus UAZ Siglo XXI, Zacatecas, Zac.",
    time: "2:00 PM",
    mapsUrl: "https://maps.google.com/?q=UAZ+Campus+Siglo+XXI",
  },
];

const LocationCards = () => {
  return (
    <section className="py-16 md:py-24 px-4 gradient-navy">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-[0.2em] text-gold font-medium mb-3">
            Ubicaciones
          </h2>
          <p className="text-white/70 text-sm md:text-base">
            Te esperamos en estos lugares especiales
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {locations.map((location, index) => (
            <div
              key={location.id}
              className="group glass-card rounded-2xl p-6 md:p-8 border border-white/10 hover:border-gold/30 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/5"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <location.icon className="w-8 h-8 text-gold" />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-display font-semibold text-white text-center mb-4">
                {location.title}
              </h3>
              
              {/* Venue */}
              <p className="text-gold font-medium text-center mb-4">
                {location.venue}
              </p>
              
              {/* Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
                  <MapPin className="w-4 h-4 text-gold/70" />
                  <span>{location.address}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
                  <Clock className="w-4 h-4 text-gold/70" />
                  <span>{location.time}</span>
                </div>
              </div>
              
              {/* Maps Button */}
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  className="border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground transition-all"
                  onClick={() => window.open(location.mapsUrl, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver en Google Maps
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationCards;
