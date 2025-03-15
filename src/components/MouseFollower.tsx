
import { useEffect, useState } from "react";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const trailLength = 12; // Number of segments in the tail

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  // Update trail positions with a delay effect
  useEffect(() => {
    setTrail(prevTrail => {
      // Add current position to the beginning of trail
      const newPosition = { x: position.x, y: position.y, id: Date.now() };
      const updatedTrail = [newPosition, ...prevTrail].slice(0, trailLength);
      return updatedTrail;
    });
  }, [position]);

  return (
    <>
      {/* Main blur circle behind cursor */}
      <div 
        className="fixed pointer-events-none z-50 rounded-full opacity-30 mix-blend-screen"
        style={{
          transform: `translate(${position.x - 128}px, ${position.y - 128}px)`,
          width: "256px",
          height: "256px",
          background: "radial-gradient(circle, rgba(74, 222, 128, 0.4) 0%, rgba(16, 185, 129, 0.1) 70%, transparent 100%)",
          filter: "blur(20px)",
        }}
      />
      
      {/* Small dot at cursor position */}
      <div 
        className="fixed pointer-events-none z-50 rounded-full mix-blend-screen"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
          width: "8px",
          height: "8px",
          backgroundColor: "#10B981",
          boxShadow: "0 0 10px 2px rgba(16, 185, 129, 0.6)",
        }}
      />

      {/* Dragon tail effect */}
      {trail.map((segment, index) => {
        // Calculate size and opacity based on position in the trail
        const size = Math.max(6, 12 - index * 0.8); 
        const opacity = Math.max(0.1, 1 - index * 0.08);
        const hue = (120 + index * 10) % 360; // Create a gradient from green to blue
        
        return (
          <div
            key={segment.id}
            className="fixed pointer-events-none z-40 rounded-full mix-blend-screen"
            style={{
              transform: `translate(${segment.x - size/2}px, ${segment.y - size/2}px)`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: `hsla(${hue}, 80%, 60%, ${opacity})`,
              boxShadow: `0 0 ${size}px ${size/3}px hsla(${hue}, 90%, 50%, ${opacity * 0.7})`,
              transition: "all 0.05s ease-out",
            }}
          />
        );
      })}
    </>
  );
};

export default MouseFollower;
