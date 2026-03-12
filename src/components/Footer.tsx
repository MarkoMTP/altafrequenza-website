import { Link } from "react-router-dom";
import { Linkedin, Instagram, Youtube, ArrowRight, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-slate text-white/50 py-32 relative overflow-hidden">
      {/* Decorative Gold Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-32">
          {/* BRAND POSITIONING */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block text-3xl font-serif tracking-tighter text-white mb-10 group">
              Alta <span className="text-luxury-gold group-hover:italic transition-all duration-500">Frequenza</span>
            </Link>

            <p className="text-lg font-light leading-relaxed mb-12 max-w-md">
              Specialized marketing support for wedding planners and wedding venues. Precision-built systems for more qualified wedding requests.
            </p>

            <div className="flex gap-4">
              {[
                { icon: Linkedin, url: "https://www.linkedin.com/in/marko-matkovic-6b6b0535a" },
                { icon: Instagram, url: "https://www.instagram.com/altafrequenzamarketing/" },
                { icon: Youtube, url: "https://www.youtube.com/@WeddingProMarketing" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-white/40 hover:text-luxury-gold hover:border-luxury-gold transition-all duration-500 bg-white/5 backdrop-blur-sm shadow-xl"
                >
                  <social.icon size={18} />
                </a>
              ))}
              <a
                href="https://it.pinterest.com/altafrequenzamarketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-white/40 hover:text-luxury-gold hover:border-luxury-gold transition-all duration-500 bg-white/5 backdrop-blur-sm text-sm font-bold shadow-xl"
              >
                PT
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-gold mb-10">
                Services
              </h4>
              <ul className="space-y-6">
                {[
                  ["Google Ads", "/google-ads"],
                  ["Social Media", "/social-media"],
                  ["Website", "/website"],
                  ["AI Assistant", "/ai-chat-assistant"],
                ].map(([label, path]) => (
                  <li key={path}>
                    <Link
                      to={path}
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-300"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-gold mb-10">
                Company
              </h4>
              <ul className="space-y-6">
                {[
                  ["About", "/about"],
                  ["Blog", "/blog"],
                  ["Contact", "/contact"],
                ].map(([label, path]) => (
                  <li key={path}>
                    <Link
                      to={path}
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-300"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ACQUISITION CARD */}
          <div className="lg:col-span-4">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[4rem] shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 text-luxury-gold/10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                  <Sparkles size={60} />
               </div>
              <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-luxury-gold mb-6">
                 Start a Conversation
              </h4>
              <p className="text-sm text-white/40 mb-10 font-light leading-relaxed">
                Tell us about your business and we’ll help you understand what marketing approach would make the most sense.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-luxury-slate text-[10px] uppercase tracking-[0.3em] font-bold rounded-full hover:bg-luxury-gold transition-all duration-500 shadow-[0_20px_50px_-10px_rgba(255,255,255,0.1)]"
              >
                Book a Strategy Call
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* SUBFOOTER */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20">
            © {currentYear} Alta Frequenza Corporate EC. All rights reserved.
          </div>
          
          <div className="flex gap-12 text-[10px] uppercase tracking-[0.3em] font-bold text-white/20">
            <Link to="/contact" className="hover:text-luxury-gold transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-luxury-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
      
      {/* Background Graphic */}
      <div className="absolute bottom-0 right-0 p-20 opacity-[0.02] pointer-events-none select-none">
         <h2 className="text-[30vw] font-serif leading-none">AF</h2>
      </div>
    </footer>
  );
}
