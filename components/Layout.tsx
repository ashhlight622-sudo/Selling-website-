import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { NAV_ITEMS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (path: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
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
    <div className="min-h-screen flex flex-col font-sans text-musket-dark bg-musket-cream selection:bg-musket-gold selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-musket-cream/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button 
            onClick={() => onNavigate('/')} 
            className={`font-serif text-2xl md:text-3xl tracking-widest font-bold uppercase transition-colors ${
              scrolled || mobileMenuOpen ? 'text-musket-dark' : 'text-musket-dark md:text-white'
            }`}
          >
            The Musket Room
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`text-sm tracking-widest uppercase hover:text-musket-gold transition-colors ${
                  currentPage === item.path ? 'text-musket-gold underline underline-offset-4' : (scrolled ? 'text-musket-dark' : 'text-white')
                }`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href="mailto:reservations@musketroom.com"
              className={`border px-6 py-2 text-xs uppercase tracking-widest transition-all ${
                scrolled 
                  ? 'border-musket-dark text-musket-dark hover:bg-musket-dark hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-musket-dark'
              }`}
            >
              Reserve
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
             <div className="space-y-2">
                <span className={`block w-8 h-0.5 transition-colors ${mobileMenuOpen || scrolled ? 'bg-musket-dark' : 'bg-musket-dark'}`}></span>
                <span className={`block w-8 h-0.5 transition-colors ${mobileMenuOpen || scrolled ? 'bg-musket-dark' : 'bg-musket-dark'}`}></span>
                <span className={`block w-8 h-0.5 transition-colors ${mobileMenuOpen || scrolled ? 'bg-musket-dark' : 'bg-musket-dark'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-musket-cream z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  onNavigate(item.path);
                  setMobileMenuOpen(false);
                }}
                className="font-serif text-3xl text-musket-dark hover:text-musket-gold transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-musket-dark text-musket-cream py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h3 className="font-serif text-2xl mb-6">The Musket Room</h3>
            <p className="font-light leading-relaxed text-musket-gray">
              A celebrated neighborhood restaurant offering a globally inspired menu in a warm, refined setting.
            </p>
          </div>
          <div>
            <h4 className="uppercase tracking-widest text-xs font-bold mb-6 text-white">Contact</h4>
            <p className="mb-2">265 Elizabeth Street, New York, NY 10012</p>
            <p className="mb-2">212-219-0764</p>
            <p className="mb-2">reservations@musketroom.com</p>
          </div>
          <div>
            <h4 className="uppercase tracking-widest text-xs font-bold mb-6 text-white">Hours</h4>
            <p className="mb-2">Tuesday — Saturday</p>
            <p>5:00 PM — 11:00 PM</p>
            <p className="text-sm text-musket-gray mt-4">Happy Hour: 5:00 PM - 7:00 PM</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-musket-gray/20 text-center text-xs text-musket-gray uppercase tracking-widest">
          © {new Date().getFullYear()} Musket Hospitality LLC
        </div>
      </footer>
    </div>
  );
};
