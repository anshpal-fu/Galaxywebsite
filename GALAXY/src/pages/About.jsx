import { Link } from 'react-router-dom'

const About = () => {
  const values = [
    {
      title: 'Integrity First',
      description: 'We operate with complete transparency and honesty in all our dealings.',
      icon: '🔒'
    },
    {
      title: 'Client Empowerment',
      description: 'Our goal is to equip you with the tools and knowledge for lasting success.',
      icon: '🚀'
    },
    {
      title: 'Innovative Thinking',
      description: 'We challenge conventional approaches to find creative solutions.',
      icon: '💡'
    },
    {
      title: 'Sustainable Results',
      description: 'We focus on long-term impact rather than quick fixes.',
      icon: '🌱'
    }
  ]

  const team = [
    {
      name: 'Alonzo Hayes',
      role: 'Founder & CEO',
      bio: 'With 15+ years in business consulting and personal development.',
      avatar: 'AH'
    },
    {
      name: 'Alex Morgan',
      role: 'Lead Consultant',
      bio: 'Specialized in strategic planning and operational excellence.',
      avatar: 'AM'
    },
    {
      name: 'Jordan Lee',
      role: 'Life Coach',
      bio: 'Expert in leadership development and mindset transformation.',
      avatar: 'JL'
    }
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-[family-name:Playfair_Display] font-bold mb-6">
              About <span className="gradient-text">Venus Visions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're more than consultants—we're your strategic partners in growth, dedicated to transforming visions into measurable progress.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  Venus Visions was founded on a simple yet powerful idea: every business and individual has untapped potential waiting to be realized. We noticed that many organizations had brilliant ideas but struggled to execute them effectively.
                </p>
                <p>
                  Our founder, Alonzo Hayes, spent years observing how businesses with great potential were held back by operational inefficiencies, communication breakdowns, and lack of strategic clarity. This led to the creation of Venus Visions—a consultancy that combines business strategy with personal development.
                </p>
                <p>
                  Today, we serve clients across industries, helping them see what others may overlook and transforming that vision into tangible, measurable progress.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8">
              <div className="text-6xl mb-6">👁️</div>
              <h3 className="text-2xl font-semibold mb-4">Why "Venus Visions"?</h3>
              <p className="text-gray-700">
                In Roman mythology, Venus was the goddess of love, beauty, and prosperity. We chose this name because it represents our core belief: when you have the right vision—clear, beautiful, and focused on growth—prosperity naturally follows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide every decision we make and every solution we provide</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 card-hover text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white">{value.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-4xl mb-6">🎯</div>
            <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-6">Our Mission</h2>
            <blockquote className="text-xl italic mb-8">
              "To empower businesses and individuals by delivering creative, strategic solutions to complex challenges."
            </blockquote>
            <div className="space-y-4">
              <p>We believe in:</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Helping organizations overcome obstacles with innovative perspectives</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Strengthening operations for sustainable growth</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Building strong businesses through empowered individuals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600">The passionate professionals behind Venus Visions</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>

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