
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/9c65e21b-f9ae-4839-b076-509ccc2fa80c.png" 
                alt="ByteMatrix Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold font-space-grotesk text-gradient">
                ByteMatrix
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transform your digital presence with our cutting-edge web development, 
              video editing, and digital marketing solutions. We bring your vision to life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-teal-400" />
                <span className="text-gray-400">info@bytematrix.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-teal-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-teal-400" />
                <span className="text-gray-400">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} ByteMatrix. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
