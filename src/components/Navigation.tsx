
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Instagram, Facebook } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 py-6 px-6 md:px-12",
        isScrolled 
          ? "bg-white bg-opacity-90 backdrop-blur-sm shadow-sm py-4" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-serif text-2xl md:text-3xl text-photo-dark">
          <span className={cn("transition-all duration-300", isScrolled ? "" : "text-white text-shadow")}>Elegance</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "nav-link text-sm font-medium transition-colors",
                location.pathname === link.path 
                  ? "text-photo-accent" 
                  : isScrolled ? "text-photo-dark hover:text-photo-accent" : "text-white hover:text-white/80",
              )}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex items-center space-x-4 ml-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "transition-opacity hover:opacity-70",
                isScrolled ? "text-photo-dark" : "text-white"
              )}
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "transition-opacity hover:opacity-70",
                isScrolled ? "text-photo-dark" : "text-white"
              )}
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "lg:hidden flex flex-col justify-center items-center space-y-1.5 focus:outline-none",
            isScrolled ? "text-photo-dark" : "text-white"
          )}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span 
            className={cn(
              "block h-0.5 w-6 transition-all duration-300", 
              isScrolled ? "bg-photo-dark" : "bg-white",
              isMobileMenuOpen && "rotate-45 translate-y-2"
            )} 
          />
          <span 
            className={cn(
              "block h-0.5 w-6 transition-all duration-300", 
              isScrolled ? "bg-photo-dark" : "bg-white",
              isMobileMenuOpen && "opacity-0"
            )} 
          />
          <span 
            className={cn(
              "block h-0.5 w-6 transition-all duration-300", 
              isScrolled ? "bg-photo-dark" : "bg-white",
              isMobileMenuOpen && "-rotate-45 -translate-y-2"
            )} 
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-white bg-opacity-95 flex flex-col justify-center items-center transition-all duration-300 z-40",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-lg font-medium",
                location.pathname === link.path
                  ? "text-photo-accent"
                  : "text-photo-dark hover:text-photo-accent"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex items-center space-x-6 mt-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-photo-dark hover:text-photo-accent transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-photo-dark hover:text-photo-accent transition-colors"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
