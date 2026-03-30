import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/config/site";

export const Footer = () => {
  return (
    <footer className="relative pt-20 pb-10 border-t border-white/10 footer-pattern" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          {/* Logo & Description */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src="/logo-64.png" 
                alt="QVPN Logo" 
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-xl font-bold text-white">{SITE_CONFIG.brand.name}</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4 max-w-xs">
              {SITE_CONFIG.brand.description}
            </p>
            
            {/* Support Email */}
            <a 
              href={`mailto:${SITE_CONFIG.contact.supportEmail}`}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-6"
            >
              <Mail className="w-4 h-4" />
              {SITE_CONFIG.contact.supportEmail}
            </a>

            {/* Legal Disclosure */}
            <p className="text-xs text-gray-500 max-w-xs">
              {SITE_CONFIG.legal.operatorDisclosure}
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {NAV_LINKS.footer.product.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {NAV_LINKS.footer.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {NAV_LINKS.footer.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {NAV_LINKS.footer.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {SITE_CONFIG.legal.copyrightYear} {SITE_CONFIG.brand.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Operated by {SITE_CONFIG.legal.operatorName}
            </p>
          </div>
          <div className="flex items-center justify-center gap-6 mt-4">
            <Link 
              to="/privacy" 
              className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
              data-testid="footer-privacy"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
              data-testid="footer-terms"
            >
              Terms of Service
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
              data-testid="footer-contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
