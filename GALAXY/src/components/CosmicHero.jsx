import { Link } from 'react-router-dom';

const CosmicHero = () => {
  return (
    <section className="relative overflow-hidden section-padding bg-black">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="/Gemini_Generated_Image_mw1vwjmw1vwjmw1v.png" 
          alt="Cosmic Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:Playfair_Display] font-bold text-white mb-6">
              Unlock Your <span className="gradient-text">Cosmic</span> Potential<br />
              Through <span className="gradient-text">Venus Wisdom</span>
            </h1>
            <p className="text-xl text-gray-100 mb-10 max-w-2xl mx-auto">
              Embrace the transformative power of Venus - where creativity meets cosmic consciousness, 
              and personal growth aligns with universal harmony.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn-primary">
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