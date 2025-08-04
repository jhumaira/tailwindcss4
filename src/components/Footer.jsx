import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-10 mt-16">
      <div className="container mx-auto grid md:grid-cols-4 gap-10 px-6">
        {/* Logo and Description */}
        <div>
          <img src={logo} alt="Logo" className="h-12 mb-4" />
          <p className="text-sm text-gray-300">
            Empowering women worldwide through holistic doula and midwifery training, 
            combining tradition, compassion, and education for safe, natural births.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><NavLink to="/" className="hover:text-primary">Home</NavLink></li>
            <li><NavLink to="/courses" className="hover:text-primary">Courses</NavLink></li>
            <li><NavLink to="/faq" className="hover:text-primary">FAQ</NavLink></li>
            <li><NavLink to="/find-provider" className="hover:text-primary">Find Advocate</NavLink></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-300">
            <li><NavLink to="/birth-media" className="hover:text-primary">Birth Media</NavLink></li>
            <li><NavLink to="/global-media" className="hover:text-primary">Global Media</NavLink></li>
            <li><NavLink to="/dhikr-cards" className="hover:text-primary">Dhikr Cards</NavLink></li>
            <li><NavLink to="/become-doula" className="hover:text-primary">Become a Doula</NavLink></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Join Our Newsletter</h3>
          <p className="text-sm text-gray-300 mb-4">
            Stay updated on courses, events, and birth resources.
          </p>
          <NavLink
            to="/newsletter"
            className="inline-block bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition text-center"
          >
            Go to Newsletter
          </NavLink>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Holistic Birth Collective. All rights reserved.
      </div>
    </footer>
  )
}
