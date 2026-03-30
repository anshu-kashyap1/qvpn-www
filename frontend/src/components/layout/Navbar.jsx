import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG, NAV_LINKS } from "@/config/site";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (href) => {
    if (href.startsWith("/#")) {
      return location.pathname === "/" && location.hash === href.substring(1);
    }
    return location.pathname === href;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-blur" : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" data-testid="logo">
            <img 
              src="/logo-180-alt.png" 
              alt="QVPN Logo" 
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-xl font-bold text-white">{SITE_CONFIG.brand.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.main.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm transition-colors duration-200 ${
                  isActive(link.href) ? "text-white" : "text-gray-400 hover:text-white"
                }`}
                data-testid={`nav-${link.name.toLowerCase().replace(/\s/g, '-')}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact">
              <Button 
                variant="ghost" 
                className="text-gray-400 hover:text-white hover:bg-white/10"
                data-testid="nav-contact-btn"
              >
                Contact
              </Button>
            </Link>
            <Button 
              className="btn-gradient"
              data-testid="nav-get-started-btn"
              onClick={() => window.location.href = SITE_CONFIG.appLinks.googlePlay}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu md:hidden" data-testid="mobile-menu">
          <div className="pt-20 px-6">
            {NAV_LINKS.main.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block py-4 text-lg text-gray-400 hover:text-white border-b border-white/10"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block py-4 text-lg text-gray-400 hover:text-white border-b border-white/10"
            >
              Contact
            </Link>
            <div className="mt-8 space-y-4">
              <Button className="w-full btn-gradient">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
