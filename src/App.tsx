import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Layout
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Main pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ConciergePage from "./pages/ConciergePage";
import AssistantPage from "./pages/AssistantPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import GrowthSystemPage from "./pages/GrowthSystemPage";
import SocialMediaPage from "./pages/SocialMediaPage";

// Blog posts
import LuxuryClientPsychology from "./pages/blog/LuxuryClientPsychology";
import MarketingMistakes from "./pages/blog/MarketingMistakes";
import InstagramStrategy from "./pages/blog/InstagramStrategy";
import GenericAgenciesFail from "./pages/blog/GenericAgenciesFail";
import AIAutomationROI from "./pages/blog/AIAutomationROI";
import PremiumBrandIdentity from "./pages/blog/PremiumBrandIdentity";
import GoogleAdsGuide from "./pages/blog/GoogleAdsGuide";
import MarketingPartnerPage from "./pages/MarketingPartnerPage";
import InstagramProofForWeddingPlanners from "./pages/blog/WhyInstagramMatters";
import WebsitesPage from "./pages/Website";

// Scroll to top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div 
      id="custom-cursor" 
      className="custom-cursor hidden md:block"
      style={{ top: '-10px', left: '-10px' }}
    />
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-luxury-champagne selection:bg-luxury-gold/30">
        <CustomCursor />
        <Navigation />
        <ScrollToTop />
        <Analytics />
        <SpeedInsights />

        <main>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/smartform" element={<ConciergePage />} />
            <Route path="/ai-chat-assistant" element={<AssistantPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/google-ads" element={<GrowthSystemPage />} />
            <Route path="/social-media" element={<SocialMediaPage />} />
            <Route path="/website" element={<WebsitesPage />} />
            <Route
              path="/marketing-partner"
              element={<MarketingPartnerPage />}
            />

            {/* Blog Posts */}
            <Route
              path="/blog/luxury-client-psychology"
              element={<LuxuryClientPsychology />}
            />
            <Route
              path="/blog/marketing-mistakes"
              element={<MarketingMistakes />}
            />
            <Route
              path="/blog/instagram-strategy"
              element={<InstagramStrategy />}
            />
            <Route
              path="/blog/generic-agencies-fail"
              element={<GenericAgenciesFail />}
            />
            <Route
              path="/blog/ai-automation-roi"
              element={<AIAutomationROI />}
            />
            <Route
              path="/blog/premium-brand-identity"
              element={<PremiumBrandIdentity />}
            />
            <Route path="/blog/google-ads-guide" element={<GoogleAdsGuide />} />
            <Route
              path="/blog/why-socialmedia-matters"
              element={<InstagramProofForWeddingPlanners />}
            />

            {/* Catch-all redirect to home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
