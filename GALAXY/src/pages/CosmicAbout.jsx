import { useState } from 'react';

const CosmicAbout = () => {
  const [activeTab, setActiveTab] = useState('vision');

  const tabs = [
    { id: 'vision', name: 'Our Cosmic Vision' },
    { id: 'mission', name: 'Mission & Values' },
    { id: 'journey', name: 'Our Journey' },
  ];

  const teamMembers = [
    {
      name: 'Lyra Starweaver',
      role: 'Chief Cosmic Officer',
      bio: 'Bringing 15 years of experience in celestial alignment and cosmic strategy.',
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
      description: 'Balancing earthly ambitions with cosmic wisdom for holistic growth.',
      icon: '⚖️',
    },
    {
      title: 'Creative Awakening',
      description: 'Unlocking hidden potentials through Venus-inspired innovation.',
      icon: '✨',
    },
    {
      title: 'Mindful Transformation',
      description: 'Guiding conscious evolution through intentional practices.',
      icon: '🧘',
    },
    {
      title: 'Universal Connection',
      description: 'Recognizing our place in the greater cosmic tapestry.',
      icon: '🌌',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent-500/10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-secondary-500/10 blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6">
              <span className="mr-2">✨</span> Cosmic Origins
            </div>
            <h1 className="text-4xl md:text-6xl font-[family-name:Playfair_Display] font-bold text-white mb-6">
              Aligned with <span className="gradient-text">Venusian Wisdom</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Our story began among the stars and continues to unfold with each client we guide toward 
              their cosmic potential.
            </p>
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="section-padding bg-gradient-to-br from-primary-900/70 via-primary-800/60 to-secondary-900/70">
        <div className="container-custom">
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
                  <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold gradient-text">
                    Our Cosmic Vision
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    We envision a world where individuals and organizations align with their highest potential 
                    through the harmonious integration of earthly ambition and cosmic wisdom.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Inspired by Venus—the planet of beauty, love, and creativity—we believe that true success 
                    emerges when we honor both our material goals and our spiritual essence.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="glass-effect rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-3">Celestial Guidance</h3>
                      <p className="text-gray-100">
                        Drawing from ancient wisdom and modern insight, we offer pathways that honor both 
                        the practical and the profound.
                      </p>
                    </div>
                    <div className="glass-effect rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-3">Holistic Growth</h3>
                      <p className="text-gray-100">
                        We nurture development that encompasses mind, body, spirit, and cosmic connection 
                        for sustainable transformation.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'mission' && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold gradient-text">
                    Mission & Values
                  </h2>
                  <p className="text-gray-100 text-lg leading-relaxed">
                    Our mission is to empower visionary leaders and creative souls to unlock their cosmic 
                    potential through mindful strategies and Venusian wisdom.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    {values.map((value, index) => (
                      <div key={index} className="glass-effect rounded-xl p-6">
                        <div className="text-3xl mb-4">{value.icon}</div>
                        <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                        <p className="text-gray-100">{value.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'journey' && (
                <div className="space-y-6">
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
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-secondary-900/80">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-[family-name:Playfair_Display] font-bold mb-4">
              <span className="gradient-text">Cosmic Guides</span>
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Meet the stellar team dedicated to illuminating your path through Venusian wisdom
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="glass-effect rounded-2xl p-8 text-center card-hover">
                <div className="text-6xl mb-6">{member.image}</div>
                <h3 className="text-2xl font-[family-name:Playfair_Display] font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-accent-300 font-medium mb-4">{member.role}</p>
                <p className="text-gray-100">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-800 via-secondary-700 to-accent-500">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-[family-name:Playfair_Display] font-bold mb-6">
              Ready to Align with Your <span className="text-white">Cosmic Purpose</span>?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join countless visionaries who have transformed their lives through Venus-inspired guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Begin Your Journey
              </button>
              <button className="btn-outline border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                Connect With Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CosmicAbout;