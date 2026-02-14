import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Sparkle {
  id: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
}

export const Sparkles = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const createSparkle = () => {
      const sparkle: Sparkle = {
        id: Math.random().toString(36).substr(2, 9),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1, // 1px to 4px
        opacity: Math.random(),
        duration: Math.random() * 1.5 + 1.5, // 1.5s to 3s
      };
      setSparkles((prev) => [...prev.slice(-50), sparkle]); // Keep max 50 sparkles
    };

    const interval = setInterval(createSparkle, 200); // New sparkle every 200ms
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-[5]">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0], // Make it fully opaque at peak
            scale: [0, 1.5, 0], // Slightly larger scale
            y: [0, -50], // Move up more
          }}
          transition={{ 
            duration: sparkle.duration, 
            ease: "easeInOut",
            times: [0, 0.5, 1] 
          }}
          style={{
            position: "absolute",
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: sparkle.size * 1.5, // 50% larger base size
            height: sparkle.size * 1.5,
            borderRadius: "50%",
            backgroundColor: "#FFD700", // Brighter Gold (CSS Gold is D4AF37, this is brighter)
            boxShadow: "0 0 8px #FFD700", // Stronger glow
          }}
        />
      ))}
    </div>
  );
};
