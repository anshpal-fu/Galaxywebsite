import { useState } from 'react'
import ContactForm from '../components/ContactForm.jsx'

const Contact = () => {
  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      details: ['contact@venusvisions.com', 'support@venusvisions.com'],
      link: 'mailto:contact@venusvisions.com'
    },
    {
      icon: '📞',
      title: 'Phone',
      details: ['+1 (234) 567-890', '+1 (234) 567-891'],
      link: 'tel:+1234567890'
    },
    {
      icon: '📍',
      title: 'Location',
      details: ['123 Business Ave, Suite 100', 'New York, NY 10001'],
      link: 'https://maps.google.com'
    },
    {
      icon: '🕒',
      title: 'Business Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM'],
      link: null
    }
  ]

  const [activeTab, setActiveTab] = useState('contact')

  return (
    <>
      {/* Hero */}
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
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-[family-name:Playfair_Display] font-bold mb-6 text-white">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Ready to transform your vision into reality? Let's start a conversation about how we can help you achieve your goals.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-6 py-3 rounded-lg transition-colors duration-300 ${
                  activeTab === 'contact'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Contact Form
              </button>
              <button
                onClick={() => setActiveTab('schedule')}
                className={`px-6 py-3 rounded-lg transition-colors duration-300 ${
                  activeTab === 'schedule'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative section-padding bg-black overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="/5.jpg" 
            alt="Cosmic Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-[family-name:Playfair_Display] font-bold mb-8 text-white">Contact Information</h2>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mr-4 border border-cyan-400/30">
                      <span className="text-xl text-cyan-400">{info.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <div key={idx} className="text-gray-300">
                          {info.link && idx === 0 ? (
                            <a href={info.link} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              
            </div>

            {/* Form/Schedule */}
            <div className="lg:col-span-2">
              {activeTab === 'contact' ? (
                <>
                  <h2 className="text-2xl font-[family-name:Playfair_Display] font-bold mb-8 text-white">Send Us a Message</h2>
                  <ContactForm />
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-[family-name:Playfair_Display] font-bold mb-8 text-white">Schedule a Consultation</h2>
                  <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-6 border border-cyan-400/30">
                        <span className="text-3xl text-cyan-400">📅</span>
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-white">Book Your Free Consultation</h3>
                      <p className="text-gray-300">
                        Choose a time that works for you. We'll discuss your goals and challenges, and explore how we can help.
                      </p>
                    </div>
                    <div className="max-w-md mx-auto">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Preferred Date
                          </label>
                          <input
                            type="date"
                            className="w-full px-4 py-3 bg-black/30 border border-cyan-400/30 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-300"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Preferred Time
                          </label>
                          <select className="w-full px-4 py-3 bg-black/30 border border-cyan-400/30 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-300">
                            <option className="bg-black/80">Select a time</option>
                            <option className="bg-black/80">9:00 AM - 10:00 AM</option>
                            <option className="bg-black/80">10:00 AM - 11:00 AM</option>
                            <option className="bg-black/80">11:00 AM - 12:00 PM</option>
                            <option className="bg-black/80">1:00 PM - 2:00 PM</option>
                            <option className="bg-black/80">2:00 PM - 3:00 PM</option>
                            <option className="bg-black/80">3:00 PM - 4:00 PM</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Consultation Type
                          </label>
                          <select className="w-full px-4 py-3 bg-black/30 border border-cyan-400/30 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-300">
                            <option className="bg-black/80">Select consultation type</option>
                            <option className="bg-black/80">Business Consulting</option>
                            <option className="bg-black/80">Life Coaching</option>
                            <option className="bg-black/80">Trade Line Services</option>
                            <option className="bg-black/80">Not Sure Yet</option>
                          </select>
                        </div>
                        <button className="w-full py-4 font-medium rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20">
                          Schedule Consultation
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {/**
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-4">Common Questions</h2>
              <p className="text-gray-600">Quick answers to frequently asked questions</p>
            </div>
            <div className="space-y-6">
              {[
                {
                  q: "How soon will I hear back after submitting a contact form?",
                  a: "We respond to all inquiries within 24 hours during business days. For urgent matters, please call our office directly."
                },
                {
                  q: "Is the initial consultation really free?",
                  a: "Yes! The initial 30-minute consultation is completely free and comes with no obligation. It's an opportunity for us to understand your needs and for you to learn about our services."
                },
                {
                  q: "What should I prepare for the first consultation?",
                  a: "Just bring your questions and an open mind. If you have specific challenges or goals, think about what success would look like for you."
                },
                {
                  q: "Do you offer services internationally?",
                  a: "Yes! We work with clients globally through virtual consultations. Business consulting and life coaching services are available worldwide. Trade line services are currently available in the United States only."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Map */}
      {/**
      <section className="bg-white">
        <div className="h-96 bg-gradient-to-r from-primary-100 to-secondary-100 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-6">📍</div>
            <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
            <p className="text-gray-600">123 Business Ave, Suite 100, New York, NY 10001</p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mt-4"
            >
              Get Directions
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      */}
    </>
  )
}

export default Contact