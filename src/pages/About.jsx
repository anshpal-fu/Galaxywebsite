import { Link } from 'react-router-dom'
import React from 'react'


const About = () => {
  const values = [
    {
      title: 'Celestial Harmony',
      description: 'Balancing earthly ambitions with cosmic wisdom for holistic growth.',
      icon: '⚖️'
    },
    {
      title: 'Creative Awakening',
      description: 'Unlocking hidden potentials through Venus-inspired innovation.',
      icon: '✨'
    },
    {
      title: 'Mindful Transformation',
      description: 'Guiding conscious evolution through intentional practices.',
      icon: '🧘'
    },
    {
      title: 'Universal Connection',
      description: 'Recognizing our place in the greater cosmic tapestry.',
      icon: '🌌'
    }
  ]

  const team = [
    {
      name: 'Lyra Starweaver',
      role: 'Chief Cosmic Officer',
      bio: 'Bringing 15 years of experience in celestial alignment and cosmic strategy.',
      avatar: '👩‍🚀'
    },
    {
      name: 'Orion Lightbringer',
      role: 'Creative Director',
      bio: 'Specializes in transforming earthly challenges into stellar opportunities.',
      avatar: '👨‍🎨'
    },
    {
      name: 'Nova Dreamwalker',
      role: 'Mindfulness Guide',
      bio: 'Helps clients navigate their inner cosmos through meditation and awareness.',
      avatar: '🧘‍♀️'
    }
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden section-padding">
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="/moon.jpg" 
            alt="Cosmic Moon Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6">
              <span className="mr-2">✨</span> Cosmic Origins
            </div> */}
            <h1 className="text-4xl md:text-5xl font-[family-name:Playfair_Display] font-bold text-white mb-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Aligned with <span className="gradient-text">Venusian Wisdom</span>
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
              Our story began among the stars and continues to unfold with each client we guide toward 
              their cosmic potential.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      {/*
      <section className="section-padding bg-gradient-to-br from-primary-900/70 via-primary-800/60 to-secondary-900/70">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-6 text-white">Our Cosmic Journey</h2>
              <div className="space-y-6 text-gray-100">
                <p className="text-lg">
                  Venus Visions was founded on a profound cosmic principle: every being has untapped celestial potential waiting to be realized. We observed that many individuals and organizations possessed brilliant ideas but struggled to align them with universal energies.
                </p>
                <p>
                  Our founder, Lyra Starweaver, spent years studying the intersection of earthly ambition and cosmic wisdom. This led to the creation of Venus Visions—a consultancy that combines strategic business acumen with spiritual alignment.
                </p>
                <p>
                  Today, we serve clients across dimensions, helping them perceive what others may overlook and transforming that vision into tangible, measurable cosmic progress.
                </p>
              </div>
            </div>
            <div className="glass-effect rounded-2xl p-8">
              <div className="text-6xl mb-6">✨</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Why "Venus Visions"?</h3>
              <p className="text-gray-100">
                In celestial mythology, Venus represents love, beauty, and prosperity. We chose this name because it embodies our core belief: when you align with the right cosmic vision—clear, beautiful, and focused on universal growth—prosperity naturally flows.
              </p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Values */}
      <section className="section-padding bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-secondary-900/80">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-4 text-white">Our Cosmic Principles</h2>
            <p className="text-white max-w-2xl mx-auto">The celestial foundations that guide our cosmic journey and every solution we provide</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 card-hover text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent-500/30 to-secondary-500/30 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white">{value.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-white">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-gradient-to-br from-primary-900/70 via-primary-800/60 to-secondary-900/70">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto glass-effect rounded-2xl p-8 md:p-12">
            <div className="text-4xl mb-6 text-accent-300">✨</div>
            <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-6 text-white">Our Cosmic Mission</h2>
            <blockquote className="text-xl italic mb-8 text-white">
              "To empower beings by aligning earthly ambitions with celestial wisdom, delivering creative solutions to universal challenges."
            </blockquote>
            <div className="space-y-4">
              <p className="text-white">We believe in:</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Helping beings overcome obstacles with cosmic perspectives</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Strengthening universal connections for sustainable growth</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Building strong communities through empowered individuals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600">The passionate professionals behind Venus Visions</p>
          </div>
          {/* <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center card-hover">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <div className="text-primary-600 font-medium mb-4">{member.role}</div>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div> */}
        {/* </div>
      </section> */} 

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's combine your vision with our expertise to create something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Schedule a Consultation
              </Link>
              <Link to="/services" className="btn-outline">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About