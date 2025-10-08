
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="text-2xl font-bold text-slate-100 hover:text-cyan-400 transition-colors">
            Mahmoud Samnejad
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map(link => (
              <a key={link.name} href={link.href} className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-100 z-50">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-0 left-0 w-full h-screen bg-slate-900 transition-transform duration-300 ease-in-out transform ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 pt-20">
            {NAV_LINKS.map(link => (
              <a key={link.name} href={link.href} className="text-2xl text-slate-300 hover:text-cyan-400 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
