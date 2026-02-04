import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Placeholder audio source - replace with actual music file
  const audioSrc = ""; // Add your audio URL here

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Autoplay might be blocked by browser
          console.log("Autoplay blocked");
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div 
      className={`fixed bottom-24 right-4 z-40 transition-all duration-300 ${
        isExpanded ? "w-64" : "w-14"
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <audio ref={audioRef} src={audioSrc} loop />
      
      <div className="glass-card rounded-full border border-gold/30 bg-primary/90 backdrop-blur-md shadow-lg overflow-hidden">
        <div className="flex items-center h-14">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="w-14 h-14 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors flex-shrink-0"
            aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6 ml-1" />
            )}
          </button>
          
          {/* Expanded Content */}
          <div className={`flex items-center gap-3 pr-4 transition-all duration-300 ${
            isExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"
          }`}>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <Music className="w-4 h-4 text-gold/70 flex-shrink-0" />
                <span className="text-white text-sm truncate">
                  {audioSrc ? "Música de fondo" : "Sin música"}
                </span>
              </div>
            </div>
            
            {/* Mute Button */}
            <button
              onClick={toggleMute}
              className="w-8 h-8 flex items-center justify-center text-gold/70 hover:text-gold transition-colors flex-shrink-0"
              aria-label={isMuted ? "Activar sonido" : "Silenciar"}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
