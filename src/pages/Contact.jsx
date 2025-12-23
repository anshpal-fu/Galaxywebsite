import React, { useState } from 'react'

const Contact = () => {
  const contactInfo = [
    {
      title: 'Email',
      details: ['contact@venusvisions.com', 'support@venusvisions.com'],
      link: 'mailto:contact@venusvisions.com'
    },
    {
      title: 'Phone',
      details: ['+1 (234) 567-890', '+1 (234) 567-891'],
      link: 'tel:+1234567890'
    },
    {
      title: 'Location',
      details: ['123 Business Ave, Suite 100', 'New York, NY 10001'],
      link: 'https://maps.google.com'
    },
    {
      title: 'Business Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM'],
      link: null
    }
  ]

  const [activeTab, setActiveTab] = useState('contact')

  // Contact form functionality with API integration
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "b0cfa795-2076-4023-abec-64287e3310fc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      setResult(" Something went wrong. Try again.");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative section-padding bg-gradient-to-br from-black via-purple-900/20 to-black overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-pulse"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
                animationDuration: `${Math.random() * 4 + 2}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
          
          {/* Floating geometric shapes */}
          {[...Array(8)].map((_, i) => (
            <div 
              key={`shape-${i}`}
              className="absolute rounded-lg bg-cyan-500/5 animate-bounce"
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1,
                borderRadius: i % 2 === 0 ? '0%' : '50%',
                animationDuration: `${Math.random() * 6 + 3}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-[family-name:Playfair_Display] font-bold mb-6 text-white mb-8">
              Get in <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Ready to transform your vision into reality? Let's start a conversation about how we can help you achieve your goals.
            </p>
            <div className="flex justify-center space-x-4 mb-12">
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-8 py-4 rounded-xl transition-all duration-500 ${
                  activeTab === 'contact'
                    ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-lg shadow-cyan-500/30 transform scale-105'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                <span className="text-lg font-medium">Contact Form</span>
              </button>
              <button
                onClick={() => setActiveTab('schedule')}
                className={`px-8 py-4 rounded-xl transition-all duration-500 ${
                  activeTab === 'schedule'
                    ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-lg shadow-cyan-500/30 transform scale-105'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                <span className="text-lg font-medium">Schedule Call</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-8">
              Contact Information
            </h2>
            
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start space-x-6 p-5 rounded-1xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10">

                <div>
                  <h3 className="font-semibold text-2xl text-cyan-400 mb-3">
                    {item.title}
                  </h3>
                  <div className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-300 text-lg">
                        {item.link && (index < 2) ? (
                          <a href={item.link} className="hover:text-cyan-400 transition-colors duration-300">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            

          </div>

          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                {activeTab === 'contact' ? 'Send a Message' : 'Schedule a Call'}
              </h2>
              <p className="text-gray-400">
                {activeTab === 'contact' 
                  ? 'Fill out the form and our team will get back to you within 24 hours.' 
                  : 'Choose a time that works for you and we will call you for a consultation.'}
              </p>
            </div>
            
            {activeTab === 'contact' ? (
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl shadow-cyan-500/10">
                <form
                  onSubmit={onSubmit}
                  className="space-y-6"
                >
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="w-full px-5 py-4 bg-black/30 border border-cyan-400/30 rounded-xl
                                 text-white placeholder-gray-500
                                 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500
                                 transition-all duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full px-5 py-4 bg-black/30 border border-cyan-400/30 rounded-xl
                                 text-white placeholder-gray-500
                                 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500
                                 transition-all duration-300"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      required
                      placeholder="Tell us about your project..."
                      className="w-full px-5 py-4 bg-black/30 border border-cyan-400/30 rounded-xl
                                 text-white placeholder-gray-500
                                 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500
                                 transition-all duration-300 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 font-medium rounded-xl
                               bg-gradient-to-r from-cyan-600 to-purple-600
                               text-white
                               hover:from-cyan-500 hover:to-purple-500
                               transition-all duration-300
                               transform hover:scale-105
                               shadow-lg shadow-cyan-500/20
                               disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  {/* Result */}
                  {result && (
                    <p className="text-center text-sm text-cyan-400 mt-4 animate-pulse">
                      {result}
                    </p>
                  )}
                </form>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl shadow-cyan-500/10">
                <p className="text-gray-300 mb-6 text-center py-4">Schedule a consultation with our team.</p>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-5 py-4 bg-black/30 border border-cyan-400/30 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full px-5 py-4 bg-black/30 border border-cyan-400/30 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Preferred Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      className="w-full px-5 py-4 bg-black/30 border border-cyan-400/30 rounded-xl text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Meeting Purpose
                    </label>
                    <select className="w-full px-5 py-4 bg-black/30 border border-cyan-400/30 rounded-xl text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC40KSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg==')] bg-no-repeat bg-[right_1rem_center] pr-10">
                      <option value="" className="bg-gray-900 text-white">Select a purpose</option>
                      <option value="consultation" className="bg-gray-900 text-white">Business Consultation</option>
                      <option value="coaching" className="bg-gray-900 text-white">Life Coaching</option>
                      <option value="tradelines" className="bg-gray-900 text-white">Trade Line Services</option>
                      <option value="other" className="bg-gray-900 text-white">Other</option>
                    </select>
                  </div>
                  <button
                    type="button"
                    className="w-full py-4 font-medium rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"
                  >
                    Schedule Call
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact
