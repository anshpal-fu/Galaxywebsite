import { Link } from 'react-router-dom'
import React from 'react'

const Tradeline = () => {
  const services = [
    {
      title: 'Credit Analysis & Strategy',
      description: 'Comprehensive review of your credit profile with personalized improvement strategy.',
      time: '1-2 weeks',
      includes: [
        'Full Credit Report Analysis',
        'Score Improvement Plan',
        'Priority Action Items',
        'Timeline Projection'
      ]
    },
    {
      title: 'Credit Repair & Dispute',
      description: 'Professional dispute of inaccurate items and negotiation with creditors.',
      time: '3-6 months',
      includes: [
        'Dispute Letter Preparation',
        'Creditor Negotiation',
        'Document Management',
        'Progress Tracking'
      ]
    },
    {
      title: 'Credit Building Program',
      description: 'Strategic establishment of positive credit history and tradelines.',
      time: '6-12 months',
      includes: [
        'Tradeline Strategy',
        'Credit Mix Optimization',
        'Utilization Management',
        'Monitoring & Alerts'
      ]
    },
    {
      title: 'Financial Education',
      description: 'Comprehensive education on credit management and financial best practices.',
      time: 'Ongoing',
      includes: [
        'Personalized Coaching',
        'Budget Planning',
        'Debt Management',
        'Financial Goal Setting'
      ]
    }
  ]

  const results = [
    {
      score: '580 → 720',
      time: '8 months',
      description: 'Removed 6 negative items and established 3 new tradelines'
    },
    {
      score: '620 → 780',
      time: '12 months',
      description: 'Disputed 8 inaccuracies and optimized credit utilization'
    },
    {
      score: '550 → 700',
      time: '9 months',
      description: 'Cleared collections and built positive payment history'
    }
  ]

  const steps = [
    {
      number: '1',
      title: 'Initial Consultation',
      description: 'Free assessment of your current credit situation and goals'
    },
    {
      number: '2',
      title: 'Strategy Development',
      description: 'Customized plan with clear action items and timeline'
    },
    {
      number: '3',
      title: 'Implementation',
      description: 'Professional handling of disputes and credit building activities'
    },
    {
      number: '4',
      title: 'Monitoring & Adjustment',
      description: 'Regular progress reviews and strategy optimization'
    }
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden section-padding bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-[family-name:Playfair_Display] font-bold mb-6">
                Trade Line <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional credit restoration and financial guidance to rebuild creditworthiness, improve financial standing, and achieve excellent credit standards with complete transparency and integrity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Start Credit Repair
                </Link>
                <a href="#services" className="btn-outline">
                  View Services
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-4xl mb-6">📊</div>
              <h3 className="text-2xl font-semibold mb-4">Why Choose Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
                    ✓
                  </div>
                  <span>100% legal and ethical credit repair methods</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
                    ✓
                  </div>
                  <span>Complete transparency in pricing and process</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
                    ✓
                  </div>
                  <span>Personalized strategies for your unique situation</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
                    ✓
                  </div>
                  <span>Ongoing education for long-term financial health</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Importance */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-6">Why Credit Matters</h2>
            <p className="text-xl text-gray-600">
              Your credit score affects every aspect of your financial life, from loan approvals to insurance rates.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏠',
                title: 'Home Ownership',
                description: 'Better credit means better mortgage rates and approval chances.'
              },
              {
                icon: '🚗',
                title: 'Auto Loans',
                description: 'Lower interest rates and better terms on vehicle financing.'
              },
              {
                icon: '💼',
                title: 'Employment',
                description: 'Many employers check credit for certain positions.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-4">Our 4-Step Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A clear, transparent approach to improving your credit and financial health
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 text-center h-full">
                  <div className="text-5xl font-bold text-primary-200 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive credit solutions tailored to your specific needs and goals
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-8 card-hover">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  <div className="bg-primary-50 text-primary-600 px-4 py-2 rounded-lg">
                    {service.time}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-3">Includes:</div>
                  <ul className="space-y-3">
                    {service.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/contact"
                  className="block text-center mt-8 btn-primary"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-4">Real Credit Improvements</h2>
            <p className="text-gray-600">Actual results achieved by our clients</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center">
                <div className="text-4xl font-bold gradient-text mb-4">{result.score}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Score Increase</div>
                <div className="text-gray-600 mb-6">Achieved in {result.time}</div>
                <p className="text-gray-700">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">⚖️</span>
            </div>
            <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-6">Legal & Ethical Compliance</h2>
            <div className="text-left space-y-6">
              <p className="text-gray-700">
                We operate in full compliance with all federal and state credit repair laws, including:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Credit Repair Organizations Act (CROA):</strong> We provide all required disclosures and honor cancellation rights.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Fair Credit Reporting Act (FCRA):</strong> We follow proper dispute procedures and respect consumer rights.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Transparent Pricing:</strong> No hidden fees or upfront payments before services are rendered.</span>
                </li>
              </ul>
              <p className="text-gray-600 text-sm">
                *Results may vary based on individual circumstances. We cannot guarantee specific score improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-[family-name:Playfair_Display] font-bold mb-6">
              Start Your Credit Journey Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Take control of your financial future with professional credit guidance and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Free Credit Assessment
              </Link>
              <a href="tel:+1234567890" className="btn-outline border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                Call to Learn More
              </a>
            </div>
            <p className="mt-8 text-white/80 text-sm">
              Free initial consultation • No upfront fees • Complete transparency
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Tradeline