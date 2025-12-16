import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import logoImg from "../assets/logo.png";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY < window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "PROJECTS", path: "/projects" },
    { name: "SERVICES", path: "/services" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-300 ${
        showNav ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 lg:h-32">
            
            <Link
              to="/"
              className="flex items-center transition-opacity hover:opacity-80"
            >
              <img 
                src={logoImg} 
                alt="NPA Architects Logo" 
                className="h-16 lg:h-28 w-auto object-contain" 
              />
            </Link>

            <div className="hidden lg:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium tracking-widest transition-colors uppercase ${
                    isActive(link.path)
                      ? "text-accent"
                      : "text-white hover:text-accent"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white hover:text-accent hover:bg-white/10"
            >
              {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </Button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-[#2A2A2A] shadow-2xl">
            {/* Sidebar Content - Now with flex column and space-between */}
            <div className="flex flex-col justify-between h-full">
              
              {/* Navigation Links at Top */}
              <div className="flex flex-col items-start p-8 pt-24 space-y-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-serif tracking-wider transition-colors uppercase ${
                      isActive(link.path)
                        ? "text-accent font-medium"
                        : "text-white hover:text-accent"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Logo at Bottom */}
              <div className="p-8 border-t border-white/10">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-start transition-opacity hover:opacity-80 mb-6"
                >
                  <img 
                    src={logoImg} 
                    alt="NPA Architects Logo" 
                    className="h-32 w-auto object-contain" 
                  />
                </Link>
                <div className="text-left text-white/70 text-sm leading-relaxed space-y-2">
                  <p className="font-medium text-white">NPA Architects</p>
                  <p className="text-xs">Established in 2000</p>
                  <p className="text-xs">
                    Creating innovative architectural solutions that blend functionality with aesthetic excellence.
                  </p>
                  <p className="text-xs text-white/50 mt-3">
                    © 2000-2025 NPA Architects
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;