import { Hotel, MapPin, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const hotels = [
  {
    name: "Hotel Emporio Zacatecas",
    description: "Ubicación privilegiada frente a Catedral. Ideal si buscas comodidad y lujo.",
    price: "$$$",
    rating: 5,
    address: "Av. Hidalgo 703, Centro Histórico",
    phone: "+52 492 925 6500",
    url: "https://www.emporiohotels.com/zacatecas",
    image: "https://images.trvl-media.com/lodging/1000000/10000/3300/3204/32578500/18818817.jpg?impolicy=resizecrop&rw=1200&ra=fit",
  },
  {
    name: "Hotel Santa Rita",
    description: "Elegancia y spa en el corazón de la ciudad. A 5 minutos caminando del salón.",
    price: "$$$",
    rating: 5,
    address: "Av. Hidalgo 507, Centro Histórico",
    phone: "+52 492 925 4700",
    url: "https://www.hotelsantarita.com/",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/58/63/07/facade.jpg?w=1200&h=-1&s=1",
  },
  {
    name: "Hotel Reyna Soledad",
    description: "Casona colonial tradicional y más económica. Excelente ubicación.",
    price: "$$",
    rating: 4,
    address: "Tacuba 163, Centro Histórico",
    phone: "+52 492 922 3156",
    url: "https://www.hotelreynasoledad.com/",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/49842517.jpg?k=5034637134267605700810790807755333734007357000835560666010078278&o=&hp=1",
  },
];

const Accommodation = () => {
  return (
    <section className="py-20 px-4 bg-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#D4AF37]/10 mb-4">
            <Hotel className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display text-white mb-4">
            Sugerencias de Hospedaje
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Para tu comodidad, hemos seleccionado estas opciones cercanas a los eventos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <div
              key={hotel.name}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-300 hover:transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
                  <span className="text-xs text-white font-medium">{hotel.rating} Estrellas</span>
                </div>
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-white">{hotel.name}</h3>
                  <span className="text-[#D4AF37] font-medium">{hotel.price}</span>
                </div>
                
                <p className="text-sm text-white/60 line-clamp-2">
                  {hotel.description}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="flex items-start gap-2 text-sm text-white/50">
                    <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{hotel.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <span>{hotel.phone}</span>
                  </div>
                </div>

                <Button 
                  asChild
                  className="w-full bg-white/10 hover:bg-[#D4AF37] text-white hover:text-[#1E3D59] border-0 mt-4 transition-all duration-300"
                >
                  <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                    Ver Hotel
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodation;