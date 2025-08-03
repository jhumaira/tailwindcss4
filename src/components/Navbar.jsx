import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo + Text */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-16 md:h-20 transition-transform hover:scale-105" 
            />
          </Link>
          <span 
            className="text-[var(--color-dark)] font-heading text-3xl font-semibold tracking-wider"
          >
            Amal AlRahem Birth Circle
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 font-semibold text-dark relative">
          {[
            { to: "/", label: "Home" },
            { to: "/find-provider", label: "Find Advocate" },
            { to: "/become-doula", label: "Become a Doula" },
            { to: "/courses", label: "Courses" },
            { to: "/faq", label: "FAQ" },
            { to: "/birth-media", label: "Birth Media" },
            { to: "/global-media", label: "Global Media" },
            { to: "/dhikr-cards", label: "Dhikr Cards" },
          ].map((link, idx) => (
            <NavLink
              key={idx}
              to={link.to}
              className={({ isActive }) =>
                `relative pb-1 transition-colors hover:text-[var(--color-dark)] ${
                  isActive ? 'text-[var(--color-dark)]' : ''
                }`
              }
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--color-dark)] transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dark text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {[
            { to: "/", label: "Home" },
            { to: "/find-provider", label: "Find Advocate" },
            { to: "/become-doula", label: "Become a Doula" },
            { to: "/courses", label: "Courses" },
            { to: "/faq", label: "FAQ" },
            { to: "/birth-media", label: "Birth Media" },
            { to: "/global-media", label: "Global Media" },
            { to: "/dhikr-cards", label: "Dhikr Cards" },
          ].map((link, idx) => (
            <NavLink
              key={idx}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="block hover:text-[var(--color-dark)]"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
