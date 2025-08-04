import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
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
import Newsletter from './pages/Newsletter'
import Login from './pages/Login'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Load login state from localStorage
  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated")
    if (storedAuth === "true") {
      setIsAuthenticated(true)
    }
  }, [])

  // Update localStorage whenever login state changes
  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated)
  }, [isAuthenticated])

  return (
    <Router basename="/tailwindcss4">
      <ScrollToTop />

      {/* Show Navbar only after login */}
      {isAuthenticated && <Navbar setIsAuthenticated={setIsAuthenticated} />}

      <Routes>
        {/* Login Route: Only show when NOT authenticated */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/home" replace />
            ) : (
              <Login setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/find-provider"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <FindProvider />
            </ProtectedRoute>
          }
        />
        <Route
          path="/become-doula"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <BecomeDoula />
            </ProtectedRoute>
          }
        />
        <Route
          path="/courses"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Courses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/faq"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <FAQ />
            </ProtectedRoute>
          }
        />
        <Route
          path="/birth-media"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <BirthVideosAndPhotos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/global-media"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <GlobalMedia />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dhikr-cards"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <DhikrCards />
            </ProtectedRoute>
          }
        />
        <Route
          path="/enroll"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Enroll />
            </ProtectedRoute>
          }
        />
        <Route
          path="/newsletter"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Newsletter />
            </ProtectedRoute>
          }
        />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Show Footer only after login */}
      {isAuthenticated && <Footer />}
    </Router>
  )
}

export default App
