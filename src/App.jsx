import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import FindProvider from './pages/FindProvider'
import BecomeDoula from './pages/BecomeDoula'
import Courses from './pages/Courses'
import FAQ from './pages/FAQ'
import BirthVideosAndPhotos from './pages/BirthVideosAndPhotos'
import GlobalMedia from './pages/GlobalMedia'
import DhikrCards from './pages/DhikrCards'
import Footer from './components/Footer'

function App() {
  return (
    <Router basename="/tailwindcss4">
      {/* Navbar */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-provider" element={<FindProvider />} />
        <Route path="/become-doula" element={<BecomeDoula />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/birth-media" element={<BirthVideosAndPhotos />} />
        <Route path="/global-media" element={<GlobalMedia />} />
        <Route path="/dhikr-cards" element={<DhikrCards />} />

        {/* ✅ Fallback route for 404s */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
