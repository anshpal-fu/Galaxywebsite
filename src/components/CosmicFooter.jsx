import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CosmicFooter = () => {
  const currentYear = new Date().getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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
        </div>

        <div className="border-t border-white/10 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Venus Visions. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <button 
                onClick={() => openModal('privacy')}
                className="text-gray-500 hover:text-gray-400 text-sm"
              >
                Privacy
              </button>
              <button 
                onClick={() => openModal('terms')}
                className="text-gray-500 hover:text-gray-400 text-sm"
              >
                Terms
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-primary-900 to-secondary-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-[family-name:Playfair_Display] font-bold text-white">
                  {modalContent === 'terms' ? 'Terms of Service' : 'Privacy Policy'}
                </h2>
                <button 
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="text-gray-300">
                {modalContent === 'terms' ? (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Terms of Service</h3>
                    <p className="mb-4">Welcome to Venus Visions. These terms govern your use of our services and website.</p>
                    <h4 className="text-lg font-semibold mb-2">1. Services</h4>
                    <p className="mb-4">We provide business consulting, life coaching, and trade line services to help you achieve your goals.</p>
                    <h4 className="text-lg font-semibold mb-2">2. User Responsibilities</h4>
                    <p className="mb-4">You agree to provide accurate information and use our services in accordance with applicable laws.</p>
                    <h4 className="text-lg font-semibold mb-2">3. Limitation of Liability</h4>
                    <p className="mb-4">Our liability is limited to the fullest extent permitted by law.</p>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Privacy Policy</h3>
                    <p className="mb-4">Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>
                    <h4 className="text-lg font-semibold mb-2">1. Information We Collect</h4>
                    <p className="mb-4">We collect information you provide directly to us, such as when you contact us or use our services.</p>
                    <h4 className="text-lg font-semibold mb-2">2. How We Use Information</h4>
                    <p className="mb-4">We use your information to provide our services, communicate with you, and improve our offerings.</p>
                    <h4 className="text-lg font-semibold mb-2">3. Data Protection</h4>
                    <p className="mb-4">We implement industry-standard security measures to protect your information.</p>
                  </div>
                )}
              </div>
              <div className="mt-8 flex justify-end">
                <button 
                  onClick={closeModal}
                  className="btn-primary px-6 py-2"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default CosmicFooter;