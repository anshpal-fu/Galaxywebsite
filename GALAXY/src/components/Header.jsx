import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Contact', path: '/contact' },
  ]

  const serviceItems = [
    { name: 'Business Consulting', path: '/services/consulting' },
    { name: 'Life Coaching', path: '/services/coaching' },
    { name: 'Trade Line Services', path: '/services/tradeline' },
  ]

  return (
    <header className="sticky top-0 z-50 glass-effect shadow-lg border-b border-white/10">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/Gemini_Generated_Image_hn05gshn05gshn05.png" 
              alt="Venus Visions Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-xl font-[family-name:Playfair_Display] font-bold gradient-text">
              Venus Visions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center space-x-1 text-white hover:text-accent-300 transition-colors duration-300"
                  >
                    <span>{item.name}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-white hover:text-accent-300 transition-colors duration-300 ${
                        isActive ? 'text-accent-300 font-medium' : ''
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
                
                {item.hasDropdown && (
                  <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 mt-4 py-2">
                      {serviceItems.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-300"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" className="btn-primary">
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden animate-slide-in">
            <div className="px-4 pt-2 pb-4 space-y-1 border-t border-white/10">
              <Link to="/" className="block px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300">Home</Link>
              <Link to="/about" className="block px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300">About</Link>
              
              <div className="px-3 py-2">
                <div className="font-medium text-white mb-2">Services</div>
                <div className="space-y-1 ml-4">
                  <Link to="/services/consulting" className="block px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300">Business Consulting</Link>
                  <Link to="/services/coaching" className="block px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300">Life Coaching</Link>
                  <Link to="/services/tradeline" className="block px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300">Trade Line Services</Link>
                </div>
              </div>
              
              <Link to="/contact" className="block px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300">Contact</Link>
              <Link to="/contact" className="block px-3 py-2 rounded-lg bg-primary-600 text-white text-center mt-4 hover:bg-primary-700 transition-colors duration-300">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header