import React, { useState } from 'react';

const CosmicServiceCard = ({ title, description, features, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative w-full h-80 flex items-center justify-center bg-transparent rounded-xl p-6 transition-all duration-500 ease-out hover:scale-105 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating space particles */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-cyan-400 animate-pulse"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.4,
              animationDuration: `${Math.random() * 4 + 2}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Neon glow effect */}
      <div className="absolute inset-0 rounded-xl bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center text-center h-full justify-center px-4">
        {/* Venus symbol */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white mb-4 shadow-lg shadow-cyan-400/50">
          ♀
        </div>
        
        <h3 className="text-lg font-space font-bold text-white mb-2 text-center">
          {title}
        </h3>
        
        <p className="text-xs text-gray-200 mb-4 leading-relaxed text-center">
          {description}
        </p>
        
        <a 
          href={link}
          className="text-xs text-cyan-300 font-medium transition-all duration-300 group"
        >
          Explore
          <svg className="ml-1 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CosmicServiceCard;