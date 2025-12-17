import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

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

// Scroll to top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <ScrollToTop />

        <div className="page-transition">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/smartform" element={<ConciergePage />} />
            <Route path="/ai-chat-assistant" element={<AssistantPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/growth-system" element={<GrowthSystemPage />} />
            <Route path="/social-media" element={<SocialMediaPage />} />
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

            {/* Catch-all redirect to home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
