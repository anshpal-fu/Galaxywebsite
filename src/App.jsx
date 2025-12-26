import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header.jsx'
import CosmicFooter from './components/CosmicFooter.jsx'
import CosmicLoader from './components/CosmicLoader.jsx'
import Home from './pages/Home.jsx'
import CosmicAbout from './pages/CosmicAbout.jsx'
import Services from './pages/Services.jsx'
import Consulting from './pages/Consulting.jsx'
import Tradeline from './pages/Tradeline.jsx'
import Contact from './pages/Contact.jsx'
import CosmicNotFound from './pages/CosmicNotFound.jsx'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <CosmicLoader isLoading={false}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<CosmicAbout />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/consulting" element={<Consulting />} />
            <Route path="/services/tradeline" element={<Tradeline />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<CosmicNotFound />} />
          </Routes>
        </CosmicLoader>
      </main>
      <CosmicFooter />
    </div>
  )
}

export default App