
import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-deep-space/80 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center cursor-pointer group"
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
             <button className="text-gray-300 hover:text-white p-2">
               <Menu className="w-6 h-6" />
             </button>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-pink to-transparent opacity-50 transform translate-x-1/2"></div>
    </header>
  );
};

export default Header;
