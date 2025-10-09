import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Growth System", path: "/growth-system" },
    { label: "Social Media", path: "/social-media" },
    { label: "The Wedding SmartForm™", path: "/smartform" },
    { label: "AI Planner’s Assistant™", path: "/ai-chat-assistant" },
    { label: "Blog", path: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-[1.6rem] font-serif tracking-tight hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            Alta Frequenza Marketing
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 ml-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-[0.95rem] font-medium text-neutral-700 hover:text-neutral-900 transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/contact"
              className="ml-4 px-5 py-2 bg-neutral-900 text-white text-[0.9rem] font-medium tracking-wide hover:bg-neutral-800 transition-all rounded-md whitespace-nowrap"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-neutral-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
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
                className="block text-base text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-6 py-3 bg-neutral-900 text-white text-base font-medium tracking-wide hover:bg-neutral-800 transition-all rounded-md"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
