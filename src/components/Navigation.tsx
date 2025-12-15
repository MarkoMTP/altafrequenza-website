import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "The Growth System™", path: "/growth-system" },
    { label: "Elegant Presence™", path: "/social-media" },
    { label: "The Wedding Planner AI Assistant™", path: "/ai-chat-assistant" },
    { label: "Blog", path: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* LOGO */}
          <Link
            to="/"
            className="text-[1.75rem] font-serif tracking-tight text-slate-900 hover:text-sky-600 transition-colors whitespace-nowrap"
          >
            Alta Frequenza
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center space-x-8 ml-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-[0.95rem] font-medium text-slate-700 hover:text-sky-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/contact"
              className="ml-4 px-5 py-2 bg-slate-900 text-white text-[0.9rem] rounded-full hover:bg-slate-800 transition-all"
            >
              Contact
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-sm">
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base text-slate-700 hover:text-sky-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-6 py-3 bg-slate-900 text-white text-base rounded-full hover:bg-slate-800 transition-all"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
