import React, { useState } from 'react'

const Contact = () => {
  const contactInfo = [
    {
      title: 'Email',
      details: ['alonzohayes01@gmail.com'],
      link: 'mailto:alonzo.hayes01@gmail.com'
    },
    {
      title: 'Phone',
      details: ['443-336-0934'],
      link: 'tel:443-336-0934'
    },
    {
      title: 'Location',
      details: ['8465 W Sahara Avenue Suite 111-5036', 'Las Vegas, NV 89177'],
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
    formData.append("access_key", "813981e0-c454-4433-a480-819440169b19");

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
            
            {/* Social Links */}
            <div className="pt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/zosyckworld" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/20">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@Zodawg81" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/20">
                  <span className="sr-only">YouTube</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

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
