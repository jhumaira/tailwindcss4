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
import Enroll from './pages/Enroll'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router basename="/tailwindcss4">
      <ScrollToTop /> {/* ✅ This ensures scroll to top */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-provider" element={<FindProvider />} />
        <Route path="/become-doula" element={<BecomeDoula />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/birth-media" element={<BirthVideosAndPhotos />} />
        <Route path="/global-media" element={<GlobalMedia />} />
        <Route path="/dhikr-cards" element={<DhikrCards />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
