
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { label: 'Services', href: '/#services' },
    { label: 'About Us', href: '/about' },
  ];
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4 ${
        isScrolled ? 'bg-white/80 dark:bg-slate-900/80 shadow-sm backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Logo size="md" />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.href} 
                className="text-gray-700 hover:text-eva-blue transition-colors dark:text-gray-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <Link to="/login" className="btn-secondary !py-2 !px-5">
              Log In
            </Link>
            <Link to="/signup" className="btn-primary !py-2 !px-5">
              Sign Up
            </Link>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-200"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-slate-900 shadow-lg p-4 glass animate-fade-in">
          <div className="flex flex-col space-y-3 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-gray-800 py-2 px-3 rounded hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/login"
              className="py-2 px-3 rounded hover:bg-gray-100 text-gray-800 dark:text-gray-200 dark:hover:bg-slate-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="py-2 px-3 bg-eva-blue text-white rounded-md hover:bg-eva-blue/90"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
