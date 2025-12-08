import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-deep-space/80 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center cursor-pointer group"
            onClick={closeMenu}
          >
            {/* Primary Logo: Circular Frame */}
            <div className="relative h-16 w-16 md:h-20 md:w-20 transition-transform duration-300 group-hover:scale-105">
              <img
                src="../images/logo.png"
                alt="Tech Media Spotlight"
                className="h-full w-full object-cover rounded-full border-2 border-white/10 group-hover:border-neon-cyan/50 transition-colors drop-shadow-[0_0_15px_rgba(0,243,255,0.3)]"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-neon-cyan transition-colors font-medium text-sm tracking-wide uppercase">Latest</Link>
              <Link to="/author/Hai%20Dao" className="text-gray-400 hover:text-neon-pink transition-colors font-medium text-sm tracking-wide uppercase">Author</Link>
              <Link to="/contact" className="text-gray-400 hover:text-neon-cyan transition-colors font-medium text-sm tracking-wide uppercase">Contact</Link>
            </nav>
          </div>

          {/* Mobile Menu Button (Visible on small screens) */}
          <div className="md:hidden flex items-center gap-4">
             <button
               onClick={toggleMenu}
               className="text-gray-300 hover:text-white p-2 focus:outline-none"
               aria-label="Toggle menu"
             >
               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-deep-space/95 border-b border-white/10 backdrop-blur-xl animate-in fade-in slide-in-from-top-5 duration-300">
          <nav className="flex flex-col px-4 py-6 space-y-4">
            <Link
              to="/"
              onClick={closeMenu}
              className="text-white hover:text-neon-cyan hover:bg-white/5 px-4 py-3 rounded-lg transition-colors font-medium text-lg tracking-wide uppercase"
            >
              Latest
            </Link>
            <Link
              to="/author/Hai%20Dao"
              onClick={closeMenu}
              className="text-gray-300 hover:text-neon-pink hover:bg-white/5 px-4 py-3 rounded-lg transition-colors font-medium text-lg tracking-wide uppercase"
            >
              Author
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="text-gray-300 hover:text-neon-cyan hover:bg-white/5 px-4 py-3 rounded-lg transition-colors font-medium text-lg tracking-wide uppercase"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}

      {/* Decorative Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-pink to-transparent opacity-50 transform translate-x-1/2"></div>
    </header>
  );
};

export default Header;
