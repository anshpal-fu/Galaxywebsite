import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard.jsx'

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

  const stats = [
    { value: '95%', label: 'Client Satisfaction Rate' },
    { value: '150+', label: 'Projects Completed' },
    { value: '45%', label: 'Average Revenue Growth' },
    { value: '24/7', label: 'Support Available' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="absolute inset-0 bg-gray-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-6">
                <span className="mr-2">✨</span> Transforming Visions into Reality
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:Playfair_Display] font-bold text-gray-900 mb-6">
                Empowering <span className="gradient-text">Vision</span>,<br />
                Delivering <span className="gradient-text">Progress</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                At Venus Visions, we transform complex challenges into measurable success through creative, strategic solutions designed for sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services" className="btn-primary">
                  Explore Our Services
                </Link>
                <Link to="/contact" className="btn-outline">
                  Book Free Consultation
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-up animate-delay-300">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                      <span className="text-2xl text-white">✨</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Strategic Vision</h3>
                      <p className="text-gray-600">Seeing what others may overlook and identifying opportunities</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center">
                      <span className="text-2xl text-white">🚀</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Measurable Progress</h3>
                      <p className="text-gray-600">Turning vision into tangible, measurable business results</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary-500 to-accent-500 flex items-center justify-center">
                      <span className="text-2xl text-white">🌟</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Sustainable Growth</h3>
                      <p className="text-gray-600">Building foundations for long-term success and scalability</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-accent-100 animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-primary-100 animate-float animate-delay-100"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="glass-effect rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl text-white">👁️</span>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-[family-name:Playfair_Display] font-bold mb-4">Our Mission</h2>
                  <p className="text-lg text-gray-700">
                    At Venus Visions, our mission is to empower businesses and individuals by delivering creative, 
                    strategic solutions to complex challenges. We are deeply passionate about helping organizations 
                    that seek innovative perspectives to overcome their current obstacles, strengthen their operations, 
                    and achieve sustainable growth.
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Clear Communication</h4>
                    <p className="text-gray-600">Transparent dialogue that builds trust and understanding</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Strategic Insight</h4>
                    <p className="text-gray-600">Data-driven decisions that create competitive advantages</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">System Integration</h4>
                    <p className="text-gray-600">Understanding how people and systems interact for optimal results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-[family-name:Playfair_Display] font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions designed for your unique growth journey. We provide comprehensive support across business, personal, and financial domains.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-4">Client Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Hear from businesses and individuals we've helped transform and achieve their goals</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg card-hover">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <div className="text-2xl text-primary-300 mb-4">"</div>
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div className="flex text-accent-500">
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

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm mb-8">
              <span className="mr-2">🚀</span>
              Ready to Transform Your Business?
            </div>
            <h2 className="text-3xl md:text-5xl font-[family-name:Playfair_Display] font-bold mb-8">
              Let's Turn Your Vision into <span className="text-accent-300">Measurable Success</span>
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Schedule your free consultation today and discover how our strategic solutions can drive your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Start Your Journey
              </Link>
              <Link to="/services" className="btn-outline border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                Explore All Services
              </Link>
            </div>
            <p className="mt-8 text-white/80 text-sm">
              No commitment required • 30-minute consultation • Customized strategy session
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home