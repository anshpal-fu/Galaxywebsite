import React from 'react'
import { Link } from 'react-router-dom'
import CosmicServiceCard from '../components/CosmicServiceCard.jsx'
import VenusMeditation from '../components/VenusMeditation.jsx'
import CosmicHero from '../components/CosmicHero.jsx'
import CosmicCluster from '../components/CosmicCluster.jsx'
import CosmicGallery from '../components/CosmicGallery.jsx'
import CosmicSearch from '../components/CosmicSearch.jsx'
// import ContactForm from '../components/ContactForm.jsx'
const Home = () => {
  const services = [
    {
      icon: '💼',
      title: 'Business Consulting',
      description: 'Strategic guidance to overcome operational challenges and achieve sustainable growth through innovative solutions and practical implementation.',
      link: '/services/consulting',
      features: ['Strategic Planning', 'Operational Excellence', 'Growth Strategies', 'Process Optimization']
    },
    {
      icon: '🧠',
      title: 'Life Coaching',
      description: 'Personal development and leadership growth for empowered individuals and teams. Transform mindset and unlock potential for professional success.',
      link: '/services/coaching',
      features: ['Leadership Development', 'Mindset Alignment', 'Personal Growth', 'Career Transition']
    },
    {
      icon: '📈',
      title: 'Trade Line Services',
      description: 'Rebuild and strengthen credit with integrity and transparency. Professional guidance from challenged standing to excellent credit standards.',
      link: '/services/tradeline',
      features: ['Credit Repair', 'Financial Planning', 'Credit Building', 'Debt Management']
    }
  ]

  const testimonials = [
    {
      quote: "Venus Visions transformed our business approach. Their strategic insights helped us increase revenue by 45% in just 6 months.",
      author: "Sarah Johnson",
      role: "CEO, TechInnovate",
      avatar: "SJ"
    },
    {
      quote: "The life coaching sessions were transformative. I developed leadership skills I never knew I had and now lead a team of 20+.",
      author: "Michael Chen",
      role: "Marketing Director",
      avatar: "MC"
    },
    {
      quote: "Their credit repair service helped me go from a 580 to 780 credit score in 12 months. Life-changing financial freedom!",
      author: "David Rodriguez",
      role: "Small Business Owner",
      avatar: "DR"
    }
  ]

  const clusters = [
    { 
      title: 'Creative Vision', 
      items: [
        { type: 'image' },
        { type: 'text' },
        { type: 'image' },
        { type: 'text' },
        { type: 'image' },
        { type: 'text' }
      ],
      isPrivate: false
    },
    { 
      title: 'Mindfulness Practices', 
      items: [
        { type: 'image' },
        { type: 'text' },
        { type: 'image' },
        { type: 'text' },
        { type: 'image' },
        { type: 'text' }
      ],
      isPrivate: true
    },
    { 
      title: 'Business Growth', 
      items: [
        { type: 'image' },
        { type: 'text' },
        { type: 'image' },
        { type: 'text' },
        { type: 'image' },
        { type: 'text' }
      ],
      isPrivate: false
    }
  ]

  const galleryItems = [
    { 
      title: 'Venusian Wisdom', 
      category: 'Inspiration', 
      type: 'image', 
      date: '2023-06-15'
    },
    { 
      title: 'Cosmic Creativity', 
      category: 'Art', 
      type: 'image', 
      date: '2023-05-22'
    },
    { 
      title: 'Mindful Moments', 
      category: 'Practice', 
      type: 'text', 
      date: '2023-04-18'
    },
    { 
      title: 'Strategic Insights', 
      category: 'Business', 
      type: 'text', 
      date: '2023-03-30'
    },
    { 
      title: 'Celestial Harmony', 
      category: 'Music', 
      type: 'image', 
      date: '2023-02-14'
    },
    { 
      title: 'Growth Journey', 
      category: 'Personal', 
      type: 'image', 
      date: '2023-01-05'
    },
    { 
      title: 'Creative Flow', 
      category: 'Process', 
      type: 'text', 
      date: '2022-12-20'
    },
    { 
      title: 'Universal Connection', 
      category: 'Philosophy', 
      type: 'text', 
      date: '2022-11-11'
    }
  ]

  return (
    <>
      <CosmicHero />
                
      {/* Mission Section */}
      <section className="relative overflow-hidden section-padding">
        
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="/mission-bg.jpg" 
            alt="Mission Background" 
            className="w-full h-full object-cover shadow-2xl opacity-60"
          />
        </div>
              
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        
        <div className="container-custom relative z-10">
    <div className="max-w-6xl mx-auto">
      <div className="glass-effect rounded-2xl p-8 md:p-12 shadow-lg">

        <div className="text-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-[family-name:Playfair_Display] font-bold mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-white">
              At Venus Visions, our mission is to empower businesses and individuals by delivering creative,
              strategic solutions to complex challenges.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-white mb-3">Clear Communication</h4>
              <p className="text-white">
                Transparent dialogue that builds trust and understanding
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3">Strategic Insight</h4>
              <p className="text-white">
                Data-driven decisions that create competitive advantages
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3">System Integration</h4>
              <p className="text-white">
                Understanding how people and systems interact
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


      {/* Cosmic Search Section
      <section className="relative overflow-hidden section-padding">
        {/* Background image */}
        {/* <div className="absolute inset-0">
          <img 
            src="/FreeVectors.jpg" 
            alt="Cosmic Background" 
            className="w-full h-full object-cover shadow-2xl"
          />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[family-name:Playfair_Display] font-bold text-white mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Explore the Cosmic Universe</h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">Discover insights, inspiration, and wisdom from our curated collection</p>
          </div>
          <div className="mb-12">
            <CosmicSearch />
          </div>
        </div>
      // </section> */} 

      {/* Cosmic Clusters */}
      {/*
      <section className="section-padding bg-gradient-to-br from-primary-900/50 via-primary-800/40 to-secondary-900/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[family-name:Playfair_Display] font-bold text-white mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Curated Clusters</h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">Organized collections of wisdom and inspiration</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {clusters.map((cluster, index) => (
              <CosmicCluster 
                key={index}
                title={cluster.title}
                items={cluster.items}
                isPrivate={cluster.isPrivate}
              />
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Cosmic Gallery */}
      {/*
      <section className="section-padding bg-gradient-to-br from-primary-900/40 via-primary-800/30 to-secondary-900/40">
        <div className="container-custom">
          <CosmicGallery items={galleryItems} />
        </div>
      </section>
      */}

      {/* Services Section */}
      <section className="relative section-padding bg-black overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="/Le paysage nocturne des galaxies _ Photo Gratuite.jpg" 
            alt="Cosmic Background" 
            className="w-full h-full object-cover shadow-2xl opacity-60"
          />
        </div>
              
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-[family-name:Playfair_Display] font-bold text-white mb-4">Our Core Services</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Specialized solutions designed for your unique growth journey. We provide comprehensive support across business, personal, and financial domains.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="relative group rounded-2xl bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 backdrop-blur-xl border border-white/20 overflow-hidden transition-all duration-500 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="p-8 relative z-10">

                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-6 font-[family-name:Playfair_Display]">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6 space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                        <span className="text-white">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <Link 
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group-hover:text-cyan-300"
                  >
                    Explore Journey 
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="px-8 py-4 text-lg font-medium rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/*
      <section className="section-padding bg-gradient-to-br from-primary-900/60 via-primary-800/50 to-secondary-900/60">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-4">Client Success Stories</h2>
            <p className="text-gray-100 max-w-2xl mx-auto">Hear from businesses and individuals we've helped transform and achieve their goals</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-effect rounded-2xl p-8 shadow-lg card-hover">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-700 flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-gray-100 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <div className="text-2xl text-accent-300 mb-4">"</div>
                <p className="text-gray-100 mb-6 italic">{testimonial.quote}</p>
                <div className="flex text-accent-300">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Venus Meditation Section */}
      {/*
      <section className="section-padding bg-gradient-to-br from-primary-900/70 via-primary-800/60 to-secondary-900/70">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[family-name:Playfair_Display] font-bold mb-4">Cosmic Mindfulness Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Connect with the energy of Venus through guided meditation and mindful breathing
            </p>
          </div>
          <VenusMeditation />
        </div>
      </section>
      */}

      {/* Contact Form Section
      <section className="relative section-padding bg-black overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-[family-name:Playfair_Display] font-bold mb-4 text-white">Get in Touch</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to begin your cosmic journey? Reach out to us and let's discuss how we can help you achieve your goals.
            </p>
          </div>
          <div className="max-w-2xl mx-auto bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
            <ContactForm />
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
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
              Ready to Align with Forces?
            </div>
            <h2 className="text-3xl md:text-5xl font-[family-name:Playfair_Display] font-bold mb-8">
              Let's Turn Your Vision into <span className="text-cyan-400">Celestial Success</span>
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Schedule your free Venus-aligned consultation today and discover how our cosmic wisdom can elevate your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 text-lg font-medium rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20">
                Begin Your Journey
              </Link>
              <Link to="/services" className="px-8 py-4 text-lg font-medium rounded-xl border border-cyan-400/50 text-white hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm">
                Explore Celestial Services
              </Link>
            </div>
            <p className="mt-8 text-white/80 text-sm">
              No commitment required • 30-minute cosmic alignment • Customized Venusian strategy
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home