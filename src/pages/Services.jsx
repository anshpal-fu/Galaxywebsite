import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CosmicServiceCard from '../components/CosmicServiceCard.jsx'

const Services = () => {
  const allServices = [
    {
      title: 'Business Consulting',
      description: 'Comprehensive strategic guidance to transform your business operations, overcome challenges, and achieve sustainable growth through data-driven insights and practical solutions.',
      link: '/services/consulting',
      features: [
        'Strategic Planning & Roadmapping',
        'Operational Efficiency Optimization',
        'Market Expansion Strategies',
        'Organizational Restructuring',
        'Performance Metrics & KPIs'
      ]
    },
    {
      title: 'Life Coaching',
      description: 'Transformational personal development programs designed to unlock potential, enhance leadership capabilities, and align mindset with professional goals for lasting success.',
      link: '/services/coaching',
      features: [
        'Executive Leadership Development',
        'Career Transition Coaching',
        'Work-Life Balance Strategies',
        'Confidence & Communication Skills',
        'Goal Setting & Achievement'
      ]
    },
    {
      title: 'Tradeline',
      description: 'Professional credit restoration and financial guidance to rebuild creditworthiness, improve financial standing, and achieve excellent credit standards with complete transparency.',
      link: '/services/tradeline',
      features: [
        'Credit Score Analysis & Strategy',
        'Debt Management Solutions',
        'Credit Building Programs',
        'Financial Literacy Education',
        'Long-term Financial Planning'
      ]
    },
    {
      title: 'Business Private Charity',
      description: 'Specialized charitable services for businesses looking to make a positive impact in their communities while aligning with their corporate values and mission.',
      link: '/services/charity',
      features: [
        'Charitable Strategy Development',
        'Community Impact Assessment',
        'CSR Program Implementation',
        'Partnership Facilitation',
        'Impact Measurement & Reporting'
      ]
    }
  ]

  // const serviceCategories = [
  //   { id: 'all', name: 'All Services' },
  //   { id: 'business', name: 'Business Solutions' },
  //   { id: 'personal', name: 'Personal Development' },
  //   { id: 'financial', name: 'Financial Services' }
  // ]

  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We begin with a comprehensive assessment to understand your unique challenges, goals, and opportunities.'
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Develop a customized roadmap with clear objectives, timelines, and measurable outcomes.'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Execute the plan with precision, providing support and adjustments as needed along the way.'
    },
    {
      number: '04',
      title: 'Growth',
      description: 'Monitor progress, celebrate wins, and optimize strategies for continuous improvement.'
    }
  ]

  const [activeCategory, setActiveCategory] = useState('all')

  // Show all services since we're not using categories
  const filteredServices = allServices

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden section-padding bg-black">
        {/* Cosmic particles background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full animate-twinkle"
              style={{
                backgroundColor: '#4deeea',
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: 'url(/mars.jpg)' }}></div>
              
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-cosmic-entrance">
              <h1 className="text-4xl md:text-5xl font-[family-name:Playfair_Display] font-bold mb-6 text-white">
                Our <span className="text-cyan-400">Services</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Comprehensive solutions designed to address your unique challenges and drive meaningful progress across all aspects of your business and personal growth.
              </p>
              <Link to="/contact" className="btn-primary animate-pulse-glow">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          {/* <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              OUR SERVICES
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our range of services designed to elevate your business and personal growth.
            </p>
          </div> */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => {
              // Define pastel colors for each card
              const pastelColors = [
                'bg-blue-500/20', // Light blue
                'bg-orange-500/20', // Peach
                'bg-purple-500/20', // Lavender
                'bg-green-500/20'  // Mint
              ];
              
              // Define some sample tags for each service
              const serviceTags = [
                ['UI/UX Design', 'Prototyping', 'User Research'],
                ['Brand Identity', 'Print Design', 'Illustration'],
                ['SEO Strategy', 'Content Marketing', 'Social Media'],
                ['Financial Planning', 'Investment', 'Risk Management']
              ];
              
              return (
                <div key={index} className="p-6">
                  <div className={`${pastelColors[index]} rounded-2xl shadow-sm p-6 h-full transition-all duration-300 hover:shadow-md`}>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-white mb-4">{service.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {serviceTags[index].map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link to="/contact" className="flex items-center justify-between pt-4 border-t border-gray-700/50 hover:border-cyan-400/50 transition-colors duration-300">
                      <span className="text-white font-medium">Explore</span>
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden section-padding bg-black">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/Saturn.jpg)' }}></div>
              
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-4 text-white">Our Process</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              A structured approach that ensures clarity, efficiency, and measurable results at every stage of our engagement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 shadow-lg h-full border border-gray-700/30 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-cyan-400/20 hover:shadow-xl">
                  <div className="text-4xl font-bold text-cyan-300 mb-4 transition-all duration-300 group-hover:text-white">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-4 text-white transition-all duration-300 group-hover:text-cyan-200">{step.title}</h3>
                  <p className="text-white transition-all duration-300 group-hover:text-gray-100">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-cyan-400"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {/*
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-500">Common questions about our services and process</p>
            </div>
            <div className="space-y-6">
              {
                [
                  {
                    q: "How do I know which service is right for me?",
                    a: "We start with a complimentary consultation to understand your specific challenges and goals. Based on our discussion, we'll recommend the most suitable service or combination of services for your situation."
                  },
                  {
                    q: "What's the typical duration of engagement?",
                    a: "It varies based on the service and your goals. Business consulting engagements typically last 3-6 months, while life coaching may continue for 6-12 months. Trade line services usually show significant results within 3-9 months."
                  },
                  {
                    q: "Do you offer custom packages?",
                    a: "Yes! Many clients benefit from customized packages that combine elements from different services. We'll work with you to create a tailored solution that addresses your unique needs."
                  },
                  {
                    q: "What makes Venus Visions different from other consultancies?",
                    a: "We combine business strategy with personal development, recognizing that empowered individuals build successful businesses. Our holistic approach addresses both operational challenges and human factors."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600 font-semibold mr-4 flex-shrink-0">
                        Q
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-lg bg-secondary-100 flex items-center justify-center text-secondary-600 font-semibold mr-4 flex-shrink-0">
                            A
                          </div>
                          <p className="text-gray-700">{faq.a}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      */}

      {/* CTA */}
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
              No commitment required • 30-minute alignment • Customized Venusian strategy
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services