import React, { useState, useEffect } from 'react';

const CosmicLoader = ({ isLoading = false, children }) => {
  const [isVisible, setIsVisible] = useState(isLoading);
  const [showContent, setShowContent] = useState(!isLoading);

  useEffect(() => {
    if (!isLoading) {
      // Start fade out animation
      setIsVisible(false);
      
      // After animation completes, show content
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 300);
      
      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
      setShowContent(false);
    }
  }, [isLoading]);

  if (showContent && !isLoading) {
    return children;
  }

  return (
    <div className="relative min-h-screen">
      {/* Content (behind loader when loading) */}
      <div className={`${showContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
        {children}
      </div>

      {/* Cosmic Loader Overlay */}
      {(isLoading || isVisible) && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center">
            {/* Venus Symbol Spinner */}
            <div className="relative w-24 h-24 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full border-4 border-accent-500/30"></div>
              <div className="absolute inset-0 rounded-full border-4 border-accent-500 border-t-transparent animate-spin"></div>
              <div className="absolute inset-4 rounded-full border-4 border-secondary-500/30"></div>
              <div className="absolute inset-4 rounded-full border-4 border-secondary-500 border-t-transparent animate-spin-reverse"></div>
              
              {/* Venus Symbol */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl text-accent-300">♀</span>
              </div>
            </div>
            
            {/* Loading Text */}
            <div className="space-y-4">
              <h2 className="text-2xl font-[family-name:Playfair_Display] font-bold gradient-text">
                Aligning with Cosmic Energies
              </h2>
              <p className="text-gray-300">
                Connecting to the wisdom of Venus...
              </p>
              
              {/* Particle Effects */}
              <div className="flex justify-center space-x-2 mt-6">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CosmicLoader;