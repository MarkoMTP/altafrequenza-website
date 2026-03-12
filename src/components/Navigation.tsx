import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.height = "auto";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.height = "auto";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Google Ads", path: "/google-ads" },
    { label: "Social Media", path: "/social-media" },
    { label: "Website", path: "/website" },
    { label: "AI Assistant", path: "/ai-chat-assistant" },
    { label: "Blog", path: "/blog" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: { duration: 0.3 }
    },
    opened: {
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
          scrolled || mobileMenuOpen
            ? "bg-white border-b border-luxury-gold/10 py-4 shadow-sm" 
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center bg-transparent">
            <Link
              to="/"
              className="text-2xl md:text-3xl font-serif text-luxury-slate tracking-titer transition-all hover:opacity-70 group relative z-[10001]"
            >
              Alta <span className="text-luxury-gold group-hover:italic transition-all duration-500">Frequenza</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all relative group ${
                    location.pathname === item.path 
                      ? "text-luxury-gold" 
                      : "text-luxury-slate/60 hover:text-luxury-slate"
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1.5 left-0 h-[1px] bg-luxury-gold transition-all duration-500 ${
                    location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              ))}

              <Link
                to="/contact"
                className="px-8 py-3.5 bg-luxury-slate text-white text-[10px] uppercase tracking-[0.3em] font-bold rounded-full hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-500 shadow-xl"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <button
              className="lg:hidden text-luxury-slate p-2 relative z-[10001] flex items-center justify-center bg-transparent border-none outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} className="text-luxury-slate" /> : <Menu size={28} className="text-luxury-slate" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY - MOVED OUTSIDE HEADER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="fixed inset-0 bg-white z-[9998] flex flex-col pt-32 pb-12 px-12 overflow-y-auto"
            style={{ minHeight: '100vh', width: '100vw' }}
          >
             <div className="flex flex-col items-center justify-center space-y-8 w-full my-auto">
                {navItems.concat([{ label: "Contact", path: "/contact" }]).map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                    className="w-full text-center"
                  >
                    <Link
                      to={item.path}
                      className={`text-3xl font-serif transition-all block py-2 ${
                         location.pathname === item.path ? "text-luxury-gold italic" : "text-luxury-slate"
                      } active:text-luxury-gold`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
             </div>
             
             {/* Decorative AF branding in mobile menu footer */}
             <div className="mt-auto pt-10 text-center opacity-[0.05] select-none pointer-events-none">
                <span className="text-[25vw] font-serif leading-none block">AF</span>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
