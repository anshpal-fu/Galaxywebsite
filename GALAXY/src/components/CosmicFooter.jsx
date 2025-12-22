import { Link } from 'react-router-dom';

const CosmicFooter = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Business Consulting', path: '/services/consulting' },
    { name: 'Life Coaching', path: '/services/coaching' },
    { name: 'Trade Line Services', path: '/services/tradeline' },
  ];

  return (
    <footer className="relative overflow-hidden bg-black pt-12 pb-6">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="/New Time Scale For The History Of The Moon Published — Forbes.jpg" 
          alt="Moon History Background" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img 
                src="/Gemini_Generated_Image_hn05gshn05gshn05.png" 
                alt="Venus Visions Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-lg font-[family-name:Playfair_Display] font-bold gradient-text">
                Venus Visions
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Empowering businesses and individuals through creative, strategic solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-accent-300 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-400 hover:text-accent-300 transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@venusvisions.com" className="text-gray-400 hover:text-accent-300 transition-colors duration-300 text-sm">
                  info@venusvisions.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="text-gray-400 hover:text-accent-300 transition-colors duration-300 text-sm">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Venus Visions. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-500 hover:text-gray-400 text-sm">
                Privacy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-gray-400 text-sm">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CosmicFooter;