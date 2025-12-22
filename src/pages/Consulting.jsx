import { Link } from 'react-router-dom'
import React from 'react'
const Consulting = () => {
  const services = [
    {
      title: 'Strategic Planning',
      description: 'Develop comprehensive business roadmaps with clear objectives, timelines, and success metrics.',
      features: ['Market Analysis', 'Competitive Strategy', 'Growth Planning', 'Risk Assessment']
    },
    {
      title: 'Operational Excellence',
      description: 'Optimize business processes to improve efficiency, reduce costs, and enhance quality.',
      features: ['Process Mapping', 'Workflow Optimization', 'Quality Systems', 'Cost Reduction']
    },
    {
      title: 'Organizational Development',
      description: 'Build high-performing teams and effective organizational structures for scalable growth.',
      features: ['Team Structure', 'Leadership Development', 'Culture Building', 'Talent Management']
    },
    {
      title: 'Market Expansion',
      description: 'Strategically enter new markets and expand your customer base with confidence.',
      features: ['Market Research', 'Entry Strategy', 'Partnership Development', 'Localization']
    },
    {
      title: 'Financial Strategy',
      description: 'Develop robust financial plans and models to support sustainable growth.',
      features: ['Financial Planning', 'Investment Strategy', 'Cash Flow Management', 'Profit Optimization']
    },
    {
      title: 'Digital Transformation',
      description: 'Leverage technology to modernize operations and create competitive advantages.',
      features: ['Technology Assessment', 'Digital Strategy', 'Implementation Planning', 'Change Management']
    }
  ]

  const caseStudies = [
    {
      company: 'TechStart Inc.',
      challenge: 'Rapid growth causing operational inefficiencies',
      solution: 'Implemented scalable processes and team structure',
      result: '45% increase in operational efficiency',
      timeframe: '4 months'
    },
    {
      company: 'RetailChain Co.',
      challenge: 'Declining market share in competitive landscape',
      solution: 'Developed market differentiation strategy',
      result: '30% revenue growth in 6 months',
      timeframe: '6 months'
    },
    {
      company: 'ServicePro LLC',
      challenge: 'Poor team alignment and communication',
      solution: 'Organizational restructuring and communication framework',
      result: '60% improvement in team productivity',
      timeframe: '3 months'
    }
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden section-padding bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-[family-name:Playfair_Display] font-bold mb-6">
                Business <span className="gradient-text">Consulting</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Strategic guidance to transform your business operations, overcome challenges, and achieve sustainable growth through innovative solutions and practical implementation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Schedule Consultation
                </Link>
                <a href="#services" className="btn-outline">
                  Explore Services
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl p-8 text-white">
              <div className="text-4xl mb-6">📈</div>
              <h3 className="text-2xl font-semibold mb-4">Why Businesses Choose Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    ✓
                  </div>
                  <span>15+ years of industry experience</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    ✓
                  </div>
                  <span>Proven track record of 45% average revenue growth</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    ✓
                  </div>
                  <span>Customized solutions, no one-size-fits-all approach</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-6">Our Strategic Approach</h2>
            <p className="text-xl text-gray-600">
              We combine analytical rigor with creative problem-solving to deliver solutions that work in the real world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔍',
                title: 'Deep Analysis',
                description: 'We start by thoroughly understanding your business, market, and challenges through data analysis and stakeholder interviews.'
              },
              {
                icon: '🎯',
                title: 'Targeted Strategy',
                description: 'Develop customized strategies with clear objectives, measurable outcomes, and practical implementation plans.'
              },
              {
                icon: '🚀',
                title: 'Execution Excellence',
                description: 'Support implementation with hands-on guidance, regular progress reviews, and adaptive strategy adjustments.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-4">Our Consulting Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to address every aspect of your business challenges
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 card-hover">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-blue-500 flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">✓</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-4">Case Studies</h2>
            <p className="text-gray-600">Real results from businesses we've helped transform</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-8 card-hover">
                <div className="text-2xl font-bold text-primary-600 mb-4">{study.company}</div>
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="font-semibold text-gray-700 mb-1">Challenge</div>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700 mb-1">Solution</div>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-primary-600">{study.result}</div>
                      <div className="text-sm text-gray-600">Achieved Result</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">{study.timeframe}</div>
                      <div className="text-sm text-gray-600">Timeframe</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-blue-600">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-[family-name:Playfair_Display] font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your challenges and develop a strategic plan for sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Book Free Strategy Session
              </Link>
              <Link to="/services" className="btn-outline border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Consulting