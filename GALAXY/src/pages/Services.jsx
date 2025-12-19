import { Link } from 'react-router-dom'
import CosmicServiceCard from '../components/CosmicServiceCard.jsx'

const Services = () => {
  const allServices = [
    {
      icon: '💼',
      title: 'Business Consulting',
      description: 'Comprehensive strategic guidance to transform your business operations, overcome challenges, and achieve sustainable growth through data-driven insights and practical solutions.',
      link: '/services/consulting',
      features: [
        'Strategic Planning & Roadmapping',
        'Operational Efficiency Optimization',
        'Market Expansion Strategies',
        'Organizational Restructuring',
        'Performance Metrics & KPIs'
      ],
      category: 'business'
    },
    {
      icon: '🧠',
      title: 'Life Coaching',
      description: 'Transformational personal development programs designed to unlock potential, enhance leadership capabilities, and align mindset with professional goals for lasting success.',
      link: '/services/coaching',
      features: [
        'Executive Leadership Development',
        'Career Transition Coaching',
        'Work-Life Balance Strategies',
        'Confidence & Communication Skills',
        'Goal Setting & Achievement'
      ],
      category: 'personal'
    },
    {
      icon: '📈',
      title: 'Trade Line Services',
      description: 'Professional credit restoration and financial guidance to rebuild creditworthiness, improve financial standing, and achieve excellent credit standards with complete transparency.',
      link: '/services/tradeline',
      features: [
        'Credit Score Analysis & Strategy',
        'Debt Management Solutions',
        'Credit Building Programs',
        'Financial Literacy Education',
        'Long-term Financial Planning'
      ],
      category: 'financial'
    },
    {
      icon: '🤝',
      title: 'Communication Strategy',
      description: 'Develop clear, effective communication frameworks that enhance team collaboration, client relationships, and organizational alignment across all levels.',
      link: '/consulting#communication',
      features: [
        'Internal Communication Systems',
        'Client Communication Protocols',
        'Crisis Communication Planning',
        'Stakeholder Engagement Strategies',
        'Digital Communication Optimization'
      ],
      category: 'business'
    },
    {
      icon: '🎯',
      title: 'Goal Achievement',
      description: 'Structured frameworks for setting, tracking, and achieving personal and professional goals with accountability and measurable progress.',
      link: '/coaching#goals',
      features: [
        'SMART Goal Development',
        'Progress Tracking Systems',
        'Accountability Structures',
        'Milestone Celebrations',
        'Adaptive Goal Adjustment'
      ],
      category: 'personal'
    },
    {
      icon: '🔄',
      title: 'Process Optimization',
      description: 'Streamline your business operations with efficient processes that reduce costs, improve quality, and enhance customer satisfaction.',
      link: '/consulting#process',
      features: [
        'Workflow Analysis & Design',
        'Automation Implementation',
        'Quality Control Systems',
        'Cost Reduction Strategies',
        'Continuous Improvement Cycles'
      ],
      category: 'business'
    }
  ]

  const serviceCategories = [
    { id: 'all', name: 'All Services' },
    { id: 'business', name: 'Business Solutions' },
    { id: 'personal', name: 'Personal Development' },
    { id: 'financial', name: 'Financial Services' }
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We begin with a comprehensive assessment to understand your unique challenges, goals, and opportunities.',
      icon: '🔍'
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Develop a customized roadmap with clear objectives, timelines, and measurable outcomes.',
      icon: '🗺️'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Execute the plan with precision, providing support and adjustments as needed along the way.',
      icon: '🚀'
    },
    {
      number: '04',
      title: 'Growth',
      description: 'Monitor progress, celebrate wins, and optimize strategies for continuous improvement.',
      icon: '📊'
    }
  ]

  const [activeCategory, setActiveCategory] = React.useState('all')

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-[family-name:Playfair_Display] font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive solutions designed to address your unique challenges and drive meaningful progress across all aspects of your business and personal growth.
            </p>
            <Link to="/contact" className="btn-primary">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-4">Service Categories</h2>
            <p className="text-gray-600">Explore our specialized solutions by category</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <CosmicServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach that ensures clarity, efficiency, and measurable results at every stage of our engagement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                  <div className="text-5xl mb-6">{step.icon}</div>
                  <div className="text-4xl font-bold text-primary-200 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">Common questions about our services and process</p>
            </div>
            <div className="space-y-6">
              {[
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-[family-name:Playfair_Display] font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our services can help you achieve your goals and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Schedule a Free Consultation
              </Link>
              <a href="tel:+1234567890" className="btn-outline border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                Call Now: (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services