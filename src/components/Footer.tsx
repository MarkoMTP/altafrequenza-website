import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* BRAND */}
          <div>
            <h3 className="text-3xl font-serif text-white mb-4">
              Alta Frequenza
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              A modern marketing agency for wedding planners and wedding venues.
              We help you attract consistent, high-quality couples with
              strategic advertising, refined social media, and intelligent
              automation.
            </p>

            <a
              href="https://www.linkedin.com/in/marko-matkovic-6b6b0535a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors text-sm"
            >
              <Linkedin size={16} />
              Connect on LinkedIn
            </a>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-sm tracking-wide mb-4 font-medium text-slate-300">
              Navigation
            </h4>
            <div className="space-y-2">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Growth System", "/growth-system"],
                ["Elegant Presence", "/social-media"],
                ["AI Assistant", "/ai-chat-assistant"],
                ["Marketing Partner", "/marketing-partner"],
                ["Blog", "/blog"],
              ].map(([label, path]) => (
                <Link
                  key={path}
                  to={path}
                  className="block text-slate-400 hover:text-sky-400 text-sm transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm tracking-wide mb-4 font-medium text-slate-300">
              Contact
            </h4>

            <Link
              to="/contact"
              className="inline-block px-6 py-3 border border-slate-300 text-slate-100 rounded-full hover:bg-slate-800 hover:border-slate-200 transition-all text-sm tracking-wide"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Alta Frequenza Marketing. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
