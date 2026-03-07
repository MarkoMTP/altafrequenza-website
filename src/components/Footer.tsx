import { Link } from "react-router-dom";
import { Linkedin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* BRAND */}
          <div>
            <h3 className="text-3xl font-serif tracking-tight text-white mb-4">
              Alta Frequenza
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Marketing for wedding planners and wedding venues. We help
              businesses in the wedding industry attract more qualified
              enquiries through strategic visibility, strong online positioning,
              and modern marketing systems.
            </p>

            {/* SOCIAL LINKS */}
            <div className="space-y-3 text-sm">
              <a
                href="https://www.linkedin.com/in/marko-matkovic-6b6b0535a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/altafrequenzamarketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors"
              >
                <Instagram size={16} />
                Instagram
              </a>

              <a
                href="https://it.pinterest.com/altafrequenzamarketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors"
              >
                📌 Pinterest
              </a>

              <a
                href="https://www.youtube.com/@WeddingProMarketing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors"
              >
                <Youtube size={16} />
                YouTube
              </a>
            </div>
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
                ["Google Ads Management", "/growth-system"],
                ["Social Media Management", "/social-media"],
                ["Website Creation", "/website"],
                ["AI Lead Assistant", "/ai-chat-assistant"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
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
              Start a Conversation
            </h4>

            <p className="text-slate-400 text-sm mb-6 max-w-xs">
              Tell us about your business and we’ll help you understand what
              marketing approach would make the most sense.
            </p>

            <Link
              to="/contact"
              className="inline-block px-6 py-3 border border-slate-300 text-slate-100 rounded-full hover:bg-slate-800 hover:border-slate-200 transition-all text-sm tracking-wide"
            >
              Book a Strategy Call
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
