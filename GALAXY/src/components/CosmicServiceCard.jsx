import { useState } from 'react';

const CosmicServiceCard = ({ icon, title, description, features, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative glass-effect rounded-2xl p-6 card-hover overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background elements */}
      <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full bg-accent-500/20 blur-xl transition-all duration-500 ${isHovered ? 'scale-150' : ''}`}></div>
      <div className={`absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-secondary-500/20 blur-xl transition-all duration-700 ${isHovered ? 'scale-150' : ''}`}></div>
      
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500 to-secondary-500 flex items-center justify-center text-2xl">
            {icon}
          </div>
          <h3 className="text-xl font-[family-name:Playfair_Display] font-bold ml-4 gradient-text">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-100 mb-6">
          {description}
        </p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent-300 mr-3"></span>
              <span className="text-gray-100">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button className="btn-outline w-full">
          Explore Cosmic Journey
        </button>
      </div>
      
      {/* Decorative planet element */}
      <div className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-accent-300 transition-all duration-300 ${isHovered ? 'scale-150 opacity-80' : ''}`}></div>
      <div className={`absolute bottom-6 left-6 w-2 h-2 rounded-full bg-secondary-300 transition-all duration-500 ${isHovered ? 'scale-150 opacity-80' : ''}`}></div>
    </div>
  );
};

export default CosmicServiceCard;