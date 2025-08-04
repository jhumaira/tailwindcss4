import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useState, useEffect } from 'react';
import LogoutButton from "./LogoutButton";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Shrinks logo after scrolling 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo + Text */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Logo"
            className={`transition-all duration-300 ${
              isScrolled ? 'h-12 md:h-14' : 'h-16 md:h-20'
            }`}
          />
          <span
            className="text-[var(--color-dark)] font-heading text-3xl font-semibold tracking-wider"
          >
            Amal AlRahem Birth Circle
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 font-semibold text-dark relative">
          {[
            { to: '/', label: 'Home' },
            { to: '/find-provider', label: 'Find Advocate' },
            { to: '/become-doula', label: 'Become a Doula' },
            { to: '/courses', label: 'Courses' },
            { to: '/faq', label: 'FAQ' },
            { to: '/birth-media', label: 'Birth Media' },
            { to: '/global-media', label: 'Global Media' },
            { to: '/dhikr-cards', label: 'Dhikr Cards' },
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
            { to: '/', label: 'Home' },
            { to: '/find-provider', label: 'Find Advocate' },
            { to: '/become-doula', label: 'Become a Doula' },
            { to: '/courses', label: 'Courses' },
            { to: '/faq', label: 'FAQ' },
            { to: '/birth-media', label: 'Birth Media' },
            { to: '/global-media', label: 'Global Media' },
            { to: '/dhikr-cards', label: 'Dhikr Cards' },
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
  );
}
