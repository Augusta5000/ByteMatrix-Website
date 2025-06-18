
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/lovable-uploads/9c65e21b-f9ae-4839-b076-509ccc2fa80c.png" 
              alt="ByteMatrix Logo" 
              className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-2xl font-bold font-space-grotesk text-gradient">
              ByteMatrix
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-teal-600 ${
                  location.pathname === link.path
                    ? 'text-teal-600'
                    : isScrolled ? 'text-gray-700' : 'text-gray-800'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full"></span>
                )}
              </Link>
            ))}
            <Button className="bg-gradient-teal hover:shadow-lg transition-all duration-300">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 text-base font-medium transition-colors hover:text-teal-600 hover:bg-gray-50 ${
                  location.pathname === link.path ? 'text-teal-600 bg-teal-50' : 'text-gray-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 py-3">
              <Button className="w-full bg-gradient-teal">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
