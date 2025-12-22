import React from 'react';
import { Link } from 'react-router-dom';

const CosmicHero = () => {
  return (
    <section className="relative overflow-hidden section-padding">
      {/* Cosmic particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              backgroundColor: '#fff',
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="/download (4).jpg" 
          alt="Cosmic Background" 
          className="w-full h-full object-cover shadow-2xl opacity-70"
        />
      </div>
      
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-cosmic-entrance">
            <div className="inline-block p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:Playfair_Display] font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Unlock Your <span className="gradient-text">Cosmic</span> Potential<br />
                Through <span className="gradient-text">Venus Wisdom</span>
              </h1>
            </div>
            {/* <div className="inline-block p-4 rounded-xl bg-black/30 backdrop-blur-sm border border-white/5 mb-10">
              <p className="text-xl text-gray-100 max-w-2xl mx-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                Embrace the transformative power of Venus - where creativity meets cosmic consciousness, 
                and personal growth aligns with universal harmony.
              </p>
            </div> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn-primary animate-pulse-glow">
                Begin Your Journey
              </Link>
              <Link to="/contact" className="btn-outline">
                Connect With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CosmicHero;