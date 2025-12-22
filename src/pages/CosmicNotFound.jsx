import React from 'react';
import { Link } from 'react-router-dom';

const CosmicNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-secondary-500/10 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-primary-500/10 blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container-custom relative z-10 text-center py-16">
        <div className="max-w-2xl mx-auto">
          {/* 404 Graphic */}
          <div className="relative w-64 h-64 mx-auto mb-12">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-500/20 to-secondary-500/20 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-accent-500/30 to-secondary-500/30 animate-pulse delay-300"></div>
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-accent-500/40 to-secondary-500/40 flex items-center justify-center">
              <span className="text-6xl font-bold gradient-text">404</span>
            </div>
            
            {/* Floating planets */}
            <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-pink-500/30 animate-float"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-purple-500/30 animate-float delay-1000"></div>
            <div className="absolute top-1/3 -right-10 w-8 h-8 rounded-full bg-blue-500/30 animate-float delay-500"></div>
          </div>
          
          {/* Content */}
          <h1 className="text-4xl md:text-5xl font-[family-name:Playfair_Display] font-bold text-white mb-6">
            Lost in Cosmic Space
          </h1>
          
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            The page you're seeking has drifted beyond our cosmic reach. 
            Even Venus sometimes disappears behind the sun's brilliance.
          </p>
          
          <div className="glass-effect rounded-2xl p-8 mb-12">
            <p className="text-gray-100 mb-6">
              "Sometimes we must lose ourselves among the stars to find our true path."
            </p>
            <p className="text-gray-300 italic">
              - Venus Wisdom
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary px-8 py-4">
              Return to Venus Base
            </Link>
            <Link to="/contact" className="btn-outline px-8 py-4">
              Signal for Help
            </Link>
          </div>
          
          <div className="mt-12 text-gray-400 text-sm">
            <p>Error Code: COSMIC-NOT-FOUND-404</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CosmicNotFound;