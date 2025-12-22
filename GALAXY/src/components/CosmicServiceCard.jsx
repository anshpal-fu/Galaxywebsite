import { useState } from 'react';

const CosmicServiceCard = ({ title, description, features, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-black backdrop-blur-xl rounded-3xl border border-cyan-400/30 p-8 transition-all duration-700 ease-out hover:scale-[1.02] hover:border-cyan-400/50 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-cyan-400 animate-pulse"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl -z-10"></div>
      
      <div className="relative z-10">
        {/* Venus symbol header */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white">
            ♀
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent ml-4"></div>
        </div>
        
        <h3 className="text-2xl font-space font-bold text-white group-hover:text-cyan-300 transition-all duration-300 mb-6">
          {title}
        </h3>
        
        <p className="text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-3 mb-8">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-4 filter drop-shadow-[0_0_4px_rgba(0,255,255,0.7)]"></div>
              <span className="text-gray-200 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <a 
          href={link}
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-all duration-300 group"
        >
          Explore Cosmic Journey
          <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
        
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-full bg-gradient-to-b from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

export default CosmicServiceCard;