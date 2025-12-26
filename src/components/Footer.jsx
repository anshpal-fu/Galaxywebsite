import { Link } from 'react-router-dom'

const Footer = () => {
  const services = [
    { name: 'Business Consulting', path: '/services/consulting' },
    { name: 'Life Coaching', path: '/services/coaching' },
    { name: 'Trade Line Services', path: '/services/tradeline' },
  ]

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Blog & Insights', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Facebook', icon: '👍', url: '#' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">VV</span>
                </div>
                <span className="text-xl font-[family-name:Playfair_Display] font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Venus Visions</span>
              </Link>
              <p className="text-gray-400 mb-6">
                Empowering businesses and individuals through strategic solutions for sustainable growth.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link 
                      to={service.path}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.path}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-medium mb-1">Email</div>
                  <a 
                    href="mailto:contact@venusvisions.com" 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    contact@venusvisions.com
                  </a>
                </div>
                <div>
                  <div className="font-medium mb-1">Phone</div>
                  <a 
                    href="tel:+1234567890" 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
                <div>
                  <div className="font-medium mb-1">Location</div>
                  <div className="text-gray-400">
                    123 Business Ave, Suite 100<br />
                    New York, NY 10001
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Venus Visions. All rights reserved.</p>
            <div className="mt-2 text-sm">
              <Link to="/privacy" className="hover:text-gray-400 transition-colors duration-300 mr-4">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-gray-400 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer