import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
// Import your logo - save the logo image as 'logo.png' in your assets folder
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Left Column: Logo & Brand */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="NPA Architecture" 
              className="h-32 w-auto mb-4"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              Creating distinctive architectural experiences through timeless design and meticulous attention to detail.
            </p>
          </div>

          {/* Center Column: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">QUICK LINKS</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-gray-400 hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-400 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column: Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">CONTACT</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-gray-400 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                 Honey Indra Apartment Block no.204, 2nd floor Shastri nagar square, next to mahindra showroom,
Nagpur, Maharashtra 440008
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-0.5 text-gray-400 flex-shrink-0" />
                <a href="mailto:info@architect.com" className="text-sm text-gray-400 hover:text-accent transition-colors">
                  nishantpethe.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-0.5 text-gray-400 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-sm text-gray-400 hover:text-accent transition-colors">
                  +91 9822935060
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">&copy; 2025 Architect. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://linkedin.com/company/architect" aria-label="LinkedIn" className="text-gray-500 hover:text-accent transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://instagram.com/architect" aria-label="Instagram" className="text-gray-500 hover:text-accent transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;