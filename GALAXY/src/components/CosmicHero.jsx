import { Link } from 'react-router-dom';

const CosmicHero = () => {
  return (
    <section className="relative overflow-hidden section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-secondary-500/10 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-primary-500/10 blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6">
              <span className="mr-2">✨</span> Cosmic Transformation Awaits
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:Playfair_Display] font-bold text-white mb-6">
              Unlock Your <span className="gradient-text">Cosmic</span> Potential<br />
              Through <span className="gradient-text">Venus Wisdom</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl">
              Embrace the transformative power of Venus - where creativity meets cosmic consciousness, 
              and personal growth aligns with universal harmony.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="btn-primary">
                Begin Your Journey
              </Link>
              <Link to="/contact" className="btn-outline">
                Connect With Us
              </Link>
            </div>
          </div>
          
          <div className="relative animate-fade-up animate-delay-300">
            <div className="relative z-10 glass-effect rounded-2xl p-8 backdrop-blur-xl">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                    <span className="text-2xl text-white">♀</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">Creative Vision</h3>
                    <p className="text-gray-100">Unlock hidden potentials through cosmic alignment</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center">
                    <span className="text-2xl text-white">🧘</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">Mindful Growth</h3>
                    <p className="text-gray-100">Transform through conscious awareness</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary-500 to-accent-500 flex items-center justify-center">
                    <span className="text-2xl text-white">🌟</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">Celestial Wisdom</h3>
                    <p className="text-gray-100">Align with universal energies for success</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating celestial elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-accent-500/20 animate-float"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-secondary-500/20 animate-float animate-delay-1000"></div>
            <div className="absolute top-1/3 -left-10 w-16 h-16 rounded-full bg-primary-500/20 animate-float animate-delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CosmicHero;