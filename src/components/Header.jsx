import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Get started', path: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-lg border-b border-white/10">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/Gemini_Generated_Image_hn05gshn05gshn05.png" 
              alt="Venus Visions Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-[family-name:Playfair_Display] font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Venus Visions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-white hover:text-accent-300 transition-colors duration-300 ${
                    isActive ? 'text-accent-300 font-medium' : ''
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden animate-slide-in bg-primary-900/95 backdrop-blur-lg">
            <div className="px-4 pt-2 pb-4 space-y-1 border-t border-white/10">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  to={item.path} 
                  className="block px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="block px-3 py-2 rounded-lg bg-gradient-to-r from-accent-500 to-secondary-500 text-white text-center mt-4 hover:from-accent-400 hover:to-secondary-400 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
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