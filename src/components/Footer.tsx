interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-serif mb-4">Alta Frequenza</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Helping wedding planners attract luxury couples with sophisticated
              digital marketing.
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-wide mb-4 font-medium">
              Navigation
            </h4>
            <div className="space-y-2">
              {["home", "about", "concierge", "assistant", "blog"].map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => onNavigate(page)}
                    className="block text-neutral-400 hover:text-white text-sm transition-colors"
                  >
                    {page === "home"
                      ? "Home"
                      : page === "about"
                      ? "About"
                      : page === "concierge"
                      ? "The Wedding SmartForm™"
                      : page === "assistant"
                      ? "AI Planner's Assistant™"
                      : "Blog"}
                  </button>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="text-sm tracking-wide mb-4 font-medium">Contact</h4>
            <button
              onClick={() => onNavigate("contact")}
              className="inline-block px-6 py-2.5 border border-white text-white hover:bg-white hover:text-neutral-900 text-sm tracking-wide transition-all"
            >
              Book a Consultation
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-neutral-500 text-sm">
          © {new Date().getFullYear()} Alta Frequenza Marketing. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
