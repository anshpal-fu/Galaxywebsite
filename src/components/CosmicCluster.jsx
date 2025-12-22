import React, { useState } from 'react';

const CosmicCluster = ({ title, items, isPrivate = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative glass-effect rounded-2xl p-6 card-hover overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background elements */}
      <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full bg-accent-500/20 blur-xl transition-all duration-500 ${isHovered ? 'scale-150' : ''}`}></div>
      <div className={`absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-secondary-500/20 blur-xl transition-all duration-700 ${isHovered ? 'scale-150' : ''}`}></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-[family-name:Playfair_Display] font-bold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
            {title}
          </h3>
          {isPrivate && (
            <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
              Private
            </span>
          )}
        </div>
        
        <div className="grid grid-cols-3 gap-2 mb-4">
          {items.slice(0, 6).map((item, index) => (
            <div 
              key={index} 
              className="aspect-square rounded-lg bg-gradient-to-br from-accent-500/30 to-secondary-500/30 flex items-center justify-center overflow-hidden"
            >
              {item.type === 'image' ? (
                <div className="w-full h-full bg-gradient-to-br from-accent-500/50 to-secondary-500/50"></div>
              ) : (
                <span className="text-lg">{item.icon || '♀'}</span>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex justify-between items-center text-sm text-gray-400">
          <span>{items.length} items</span>
          <span className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-accent-300 mr-1"></span>
            Venus Cluster
          </span>
        </div>
      </div>
    </div>
  );
};

export default CosmicCluster;