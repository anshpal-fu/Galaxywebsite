import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CosmicAbout = () => {
  const [activeTab, setActiveTab] = useState('vision');

  const tabs = [
    { id: 'vision', name: 'Our Vision' },
    { id: 'mission', name: 'Mission & Values' },
    /* { id: 'journey', name: 'Our Journey' }, - Commented out as per user request */
  ];

  const teamMembers = [
    {
      name: 'Lyra Starweaver',
      role: 'Chief Officer',
      bio: 'Bringing 15 years of experience in celestial alignment and strategy.',
      image: '👩‍🚀',
    },
    {
      name: 'Orion Lightbringer',
      role: 'Creative Director',
      bio: 'Specializes in transforming earthly challenges into stellar opportunities.',
      image: '👨‍🎨',
    },
    {
      name: 'Nova Dreamwalker',
      role: 'Mindfulness Guide',
      bio: 'Helps clients navigate their inner cosmos through meditation and awareness.',
      image: '🧘‍♀️',
    },
  ];

  const values = [
    {
      title: 'Celestial Harmony',
      description: 'Balancing earthly ambitions with universal wisdom for holistic growth.'
    },
    {
      title: 'Creative Awakening',
      description: 'Unlocking hidden potentials through Venus-inspired innovation.'
    },
    {
      title: 'Mindful Transformation',
      description: 'Guiding conscious evolution through intentional practices.'
    },
    {
      title: 'Universal Connection',
      description: 'Recognizing our place in the greater universal tapestry.'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden section-padding">
        {/* Cosmic particles background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full animate-twinkle"
              style={{
                backgroundColor: '#e0f7ff',
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
            src="/moon.jpg" 
            alt="Moon Background" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
              
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-sm font-medium mb-6 animate-fade-up">
              <span className="mr-2">✨</span> Origins
            </div>
            <div className="animate-cosmic-entrance">
              <div className="inline-block p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 mb-6 w-full">
                <h1 className="text-4xl md:text-6xl font-[family-name:Playfair_Display] font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] whitespace-nowrap">
                  Aligned with <span className="gradient-text">Venusian Wisdom</span>
                </h1>
              </div>
              <div className="inline-block p-4 rounded-xl bg-black/30 backdrop-blur-sm border border-white/5 mb-12">
                <p className="text-xl text-gray-100 max-w-3xl mx-auto drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                  Our story began among the stars and continues to unfold with each client we guide toward 
                  their potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="relative overflow-hidden section-padding">
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="/8.jpg" 
            alt="Cosmic Background" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-12">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-accent-500 to-secondary-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="glass-effect rounded-2xl p-8">
              {activeTab === 'vision' && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    Our Vision
                  </h2>
                  <p className="text-gray-100 text-lg leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                    We envision a world where individuals and organizations align with their highest potential 
                    through the harmonious integration of earthly ambition and  wisdom.
                  </p>
                  <p className="text-gray-100 text-lg leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                    Inspired by Venus—the planet of beauty, love, and creativity—we believe that true success 
                    emerges when we honor both our material goals and our spiritual essence.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="glass-effect rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-3 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">Celestial Guidance</h3>
                      <p className="text-gray-100 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                        Drawing from ancient wisdom and modern insight, we offer pathways that honor both 
                        the practical and the profound.
                      </p>
                    </div>
                    <div className="glass-effect rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-3 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">Holistic Growth</h3>
                      <p className="text-gray-100 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                        We nurture development that encompasses mind, body, spirit, and connection 
                        for sustainable transformation.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'mission' && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    Mission & Values
                  </h2>
                  <p className="text-gray-100 text-lg leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                    Our mission is to empower visionary leaders and creative souls to unlock their
                    potential through mindful strategies and Venusian wisdom.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    {values.map((value, index) => (
                      <div key={index} className="glass-effect rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] mb-4">{value.title}</h3>
                        <p className="text-gray-100 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">{value.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'journey' && (
                <div className="space-y-6">
                  {/* Our Cosmic Journey content commented out as per user request */}
                  {/*
                  <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold gradient-text">
                    Our Cosmic Journey
                  </h2>
                  <p className="text-gray-100 text-lg leading-relaxed">
                    Founded in 2018 during a rare Venus transit, Venus Visions emerged from a profound 
                    realization that our greatest challenges often hold the seeds of our most beautiful 
                    transformations.
                  </p>
                  
                  <div className="space-y-8 mt-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-500/20 flex items-center justify-center mr-6">
                        <span className="text-accent-300 font-bold">2018</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Cosmic Conception</h3>
                        <p className="text-gray-100">
                          During a rare Venus transit, our founder experienced a vision of bridging 
                          earthly ambition with celestial wisdom.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-500/20 flex items-center justify-center mr-6">
                        <span className="text-accent-300 font-bold">2020</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Stellar Launch</h3>
                        <p className="text-gray-100">
                          Officially launched our services, guiding our first cohort of visionary leaders 
                          through transformative journeys.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-500/20 flex items-center justify-center mr-6">
                        <span className="text-accent-300 font-bold">2023</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Galactic Expansion</h3>
                        <p className="text-gray-100">
                          Expanded our offerings to include digital experiences and reached clients 
                          across multiple galaxies (and continents).
                        </p>
                      </div>
                    </div>
                  </div>
                  */}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="relative overflow-hidden section-padding">
        {/* Background image */}
        {/* <div className="absolute inset-0">
          <img 
            src="/8.jpg" 
            alt="Cosmic Background" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        {/* Overlay for better text visibility */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-[family-name:Playfair_Display] font-bold mb-4">
              <span className="text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Guides</span>
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
              Meet the stellar team dedicated to illuminating your path through Venusian wisdom
            </p>
          </div> */} 
{/*           
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="glass-effect rounded-2xl p-8 text-center card-hover">
                <div className="text-6xl mb-6">{member.image}</div>
                <h3 className="text-2xl font-[family-name:Playfair_Display] font-bold text-white mb-2 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                  {member.name}
                </h3>
                <p className="text-accent-300 font-medium mb-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">{member.role}</p>
                <p className="text-gray-100 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */} 

      {/* Closing CTA */}
      <section className="relative section-padding bg-black overflow-hidden">
        {/* Animated background stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
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
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-black/30 backdrop-blur-sm border border-cyan-400/30 mb-8">
              <span className="mr-2">🚀</span>
              Ready to Align with Your <span className="text-white"> Purpose</span>?
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:Playfair_Display] font-bold mb-6">
              Ready to Align with Your <span className="text-cyan-400">Purpose</span>?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Join countless visionaries who have transformed their lives through Venus-inspired guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 text-lg font-medium rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20">
                Begin Your Journey
              </Link>
              <Link to="/contact" className="px-8 py-4 text-lg font-medium rounded-xl border border-cyan-400/50 text-white hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm">
                Connect With Us
              </Link>
            </div>
            <p className="mt-8 text-white/80 text-sm">
              No commitment required • 30-minute  alignment • Customized Venusian strategy
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CosmicAbout;