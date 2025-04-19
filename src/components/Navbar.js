import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className=" rounded-full p-1 mr-3">
              <img src="/images/logo.png" alt="Logo" className="w-9 h-8" />
            </div>
            <button
              className="text-2xl font-bold tracking-wide cursor-pointer"
              onClick={() => setCurrentPage('home')}
            >
              MoCo Bridged
            </button>
          </div>

          {/* Spacer for mobile */}
          <div className="md:hidden"></div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <button
              className={`${currentPage === 'home' ? 'font-bold' : ''} hover:text-blue-200 transition-colors`}
              onClick={() => setCurrentPage('home')}
            >
              Home
            </button>
            <button
              className={`${currentPage === 'resources' ? 'font-bold' : ''} hover:text-blue-200 transition-colors`}
              onClick={() => setCurrentPage('resources')}
            >
              Resources
            </button>
            <button
              className={`${currentPage === 'about' ? 'font-bold' : ''} hover:text-blue-200 transition-colors`}
              onClick={() => setCurrentPage('about')}
            >
              About
            </button>

          </div>

          {/* Right side spacer for desktop */}
          <div className="hidden md:block w-40"></div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-3 md:hidden">
            <div className="flex flex-col space-y-3 pb-3">
              <button
                className={`${currentPage === 'home' ? 'font-bold' : ''} hover:text-blue-200 transition-colors`}
                onClick={() => {
                  setCurrentPage('home');
                  setIsMobileMenuOpen(false);
                }}
              >
                Home
              </button>
              <button
                className={`${currentPage === 'resources' ? 'font-bold' : ''} hover:text-blue-200 transition-colors`}
                onClick={() => {
                  setCurrentPage('resources');
                  setIsMobileMenuOpen(false);
                }}
              >
                Resources
              </button>
              <button
                className={`${currentPage === 'about' ? 'font-bold' : ''} hover:text-blue-200 transition-colors`}
                onClick={() => {
                  setCurrentPage('about');
                  setIsMobileMenuOpen(false);
                }}
              >
                About
              </button>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;