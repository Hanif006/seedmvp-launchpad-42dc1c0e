
import { useEffect, useState } from "react";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      {/* Large blur circle */}
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
      
      {/* Small dot */}
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
    </>
  );
};

export default MouseFollower;
