import { useState } from 'react';

const CosmicServiceCard = ({ icon, title, description, features, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative glass-effect rounded-2xl p-6 card-hover overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-secondary-500 flex items-center justify-center text-xl">
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
              <span className="text-gray-100 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button className="btn-outline w-full text-sm">
          Explore Cosmic Journey
        </button>
      </div>
    </div>
  );
};

export default CosmicServiceCard;