import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-serif mb-4">Alta Frequenza</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Helping wedding planners attract luxury couples with sophisticated
              digital marketing.
            </p>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/marko-matkovic-6b6b0535a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm"
            >
              <Linkedin size={16} />
              Follow us on LinkedIn
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm tracking-wide mb-4 font-medium">
              Navigation
            </h4>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-neutral-400 hover:text-white text-sm transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-neutral-400 hover:text-white text-sm transition-colors"
              >
                About
              </Link>
              <Link
                to="/growth-system"
                className="block text-neutral-400 hover:text-white text-sm transition-colors"
              >
                Growth System
              </Link>
              <Link
                to="/social-media"
                className="block text-neutral-400 hover:text-white text-sm transition-colors"
              >
                Social Media
              </Link>

              <Link
                to="/assistant"
                className="block text-neutral-400 hover:text-white text-sm transition-colors"
              >
                The Wedding Planner AI Assistant™
              </Link>
              <Link
                to="/blog"
                className="block text-neutral-400 hover:text-white text-sm transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Contact Button */}
          <div>
            <h4 className="text-sm tracking-wide mb-4 font-medium">Contact</h4>
            <Link
              to="/contact"
              className="inline-block px-6 py-2.5 border border-white text-white hover:bg-white hover:text-neutral-900 text-sm tracking-wide transition-all"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-neutral-500 text-sm">
          © {new Date().getFullYear()} Alta Frequenza Marketing. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
