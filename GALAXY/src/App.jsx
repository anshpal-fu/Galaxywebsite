import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import CosmicFooter from './components/CosmicFooter.jsx'
import CosmicLoader from './components/CosmicLoader.jsx'
import Home from './pages/Home.jsx'
import CosmicAbout from './pages/CosmicAbout.jsx'
import Services from './pages/Services.jsx'
import Consulting from './pages/Consulting.jsx'
import Coaching from './pages/Coaching.jsx'
import Tradeline from './pages/Tradeline.jsx'
import Contact from './pages/Contact.jsx'
import CosmicNotFound from './pages/CosmicNotFound.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      
      <Header />
      <main className="flex-grow">
        <CosmicLoader isLoading={false}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<CosmicAbout />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/consulting" element={<Consulting />} />
            <Route path="/services/coaching" element={<Coaching />} />
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