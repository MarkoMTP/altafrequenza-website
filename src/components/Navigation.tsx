import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'AI Wedding Concierge™', page: 'concierge' },
    { label: "AI Planner's Assistant™", page: 'assistant' },
    { label: 'Blog', page: 'blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => onNavigate('home')}
            className="text-2xl font-serif tracking-tight hover:opacity-70 transition-opacity"
          >
            Alta Frequenza
          </button>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`text-sm tracking-wide transition-colors ${
                  currentPage === item.page
                    ? 'text-neutral-900 font-medium'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-2.5 bg-neutral-900 text-white text-sm tracking-wide hover:bg-neutral-800 transition-colors"
            >
              Book Consultation
            </button>
          </div>

          <button
            className="lg:hidden text-neutral-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200">
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  onNavigate(item.page);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left text-base transition-colors ${
                  currentPage === item.page
                    ? 'text-neutral-900 font-medium'
                    : 'text-neutral-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full px-6 py-3 bg-neutral-900 text-white text-base tracking-wide hover:bg-neutral-800 transition-colors"
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
