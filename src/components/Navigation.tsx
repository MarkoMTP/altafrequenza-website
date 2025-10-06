import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation(); // Get the current route

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "The Wedding SmartForm™", path: "/smartform" },
    { label: "AI Planner's Assistant™", path: "/ai-chat-assistant" },
    { label: "Blog", path: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-serif tracking-tight hover:opacity-70 transition-opacity"
          >
            Alta Frequenza Marketing
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm tracking-wide transition-colors ${
                  pathname === item.path
                    ? "text-neutral-900 font-medium"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-neutral-900 text-white text-sm tracking-wide hover:bg-neutral-800 transition-colors"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-neutral-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200">
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left text-base transition-colors ${
                  pathname === item.path
                    ? "text-neutral-900 font-medium"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full px-6 py-3 bg-neutral-900 text-white text-base tracking-wide hover:bg-neutral-800 transition-colors text-center"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
