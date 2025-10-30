"use client";
import React, { useState } from "react";
// import { motion } from "@/components/motion";
import { Javascript, React as ReactIcon, Html5, Css3, FileJson, Database } from "lucide-react";

const DeveloperIllustration = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Floating animation for tech icons
  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  };

  // Orbit positions for tech icons
  const orbitPositions = [
    { rotate: 0, delay: 0 },
    { rotate: 60, delay: 0.1 },
    { rotate: 120, delay: 0.2 },
    { rotate: 180, delay: 0.3 },
    { rotate: 240, delay: 0.4 },
    { rotate: 300, delay: 0.5 },
  ];

  const techIcons = [
    { Icon: Javascript, color: "#F7DF1E" },
    { Icon: ReactIcon, color: "#61DAFB" },
    { Icon: Html5, color: "#E34F26" },
    { Icon: Css3, color: "#1572B6" },
    { Icon: FileJson, color: "#FF7F50" },
    { Icon: Database, color: "#4DB33D" },
  ];

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Orbiting Tech Icons */}
      {techIcons.map(({ Icon, color }, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            transformOrigin: "center center",
            transform: `rotate(${orbitPositions[index].rotate}deg) translateX(120px)`,
          }}
          animate={floatingAnimation}
          transition={{ delay: orbitPositions[index].delay }}
        >
          <Icon size={32} color={color} className="transform -rotate-[60deg] transition-transform hover:scale-125" />
        </div>
      ))}

      {/* Developer Illustration */}
      <div className="relative" onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} animate={isHovered ? { y: -10 } : { y: 0 }} transition={{ duration: 0.3 }}>
        {/* Desk */}
        <div className="w-64 h-4 bg-gray-800 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2" />

        {/* Computer */}
        <div className="w-40 h-32 bg-gray-800 rounded-lg absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="w-36 h-28 bg-blue-500 m-2 rounded overflow-hidden">
            {/* Code Lines Animation */}
            <div className="flex flex-col gap-1 p-2" animate={{ y: [-50, 0] }} transition={{ duration: 8, repeat: Infinity }}>
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="h-2 rounded"
                  style={{
                    width: `${Math.random() * 50 + 50}%`,
                    backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.25})`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Character */}
        <div className="relative" animate={isHovered ? { rotate: [-2, 2] } : { rotate: 0 }} transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}>
          {/* Body */}
          <div className="w-24 h-40 bg-blue-600 rounded-t-full absolute bottom-8 left-1/2 transform -translate-x-1/2" />

          {/* Head */}
          <div className="w-20 h-20 bg-[#FFD3B5] rounded-full absolute bottom-40 left-1/2 transform -translate-x-1/2">
            {/* Face */}
            <div className="relative w-full h-full">
              {/* Eyes */}
              <div className="absolute top-8 left-4 w-3 h-3 bg-black rounded-full" />
              <div className="absolute top-8 right-4 w-3 h-3 bg-black rounded-full" />

              {/* Smile */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-4 border-b-2 border-black rounded-full" />
            </div>
          </div>

          {/* Arms */}
          <div className="w-8 h-20 bg-blue-600 absolute bottom-20 left-8 origin-top" animate={isHovered ? { rotate: [-10, 10] } : { rotate: 0 }} transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }} />
          <div className="w-8 h-20 bg-blue-600 absolute bottom-20 right-8 origin-top" animate={isHovered ? { rotate: [10, -10] } : { rotate: 0 }} transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }} />
        </div>
      </div>
    </div>
  );
};

export default DeveloperIllustration;
