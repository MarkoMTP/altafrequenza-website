import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ConciergePage from './pages/ConciergePage';
import AssistantPage from './pages/AssistantPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import GrowthSystemPage from './pages/GrowthSystemPage';
import SocialMediaPage from './pages/SocialMediaPage';
import LuxuryClientPsychology from './pages/blog/LuxuryClientPsychology';
import MarketingMistakes from './pages/blog/MarketingMistakes';
import InstagramStrategy from './pages/blog/InstagramStrategy';
import GenericAgenciesFail from './pages/blog/GenericAgenciesFail';
import AIAutomationROI from './pages/blog/AIAutomationROI';
import PremiumBrandIdentity from './pages/blog/PremiumBrandIdentity';
import GoogleAdsGuide from './pages/blog/GoogleAdsGuide';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'concierge':
        return <ConciergePage onNavigate={setCurrentPage} />;
      case 'assistant':
        return <AssistantPage onNavigate={setCurrentPage} />;
      case 'blog':
        return <BlogPage onNavigate={setCurrentPage} />;
      case 'contact':
        return <ContactPage />;
      case 'growth-system':
        return <GrowthSystemPage onNavigate={setCurrentPage} />;
      case 'social-media':
        return <SocialMediaPage onNavigate={setCurrentPage} />;
      case 'blog-luxury-client-psychology':
        return <LuxuryClientPsychology onNavigate={setCurrentPage} />;
      case 'blog-marketing-mistakes':
        return <MarketingMistakes onNavigate={setCurrentPage} />;
      case 'blog-instagram-strategy':
        return <InstagramStrategy onNavigate={setCurrentPage} />;
      case 'blog-generic-agencies-fail':
        return <GenericAgenciesFail onNavigate={setCurrentPage} />;
      case 'blog-ai-automation-roi':
        return <AIAutomationROI onNavigate={setCurrentPage} />;
      case 'blog-premium-brand-identity':
        return <PremiumBrandIdentity onNavigate={setCurrentPage} />;
      case 'blog-google-ads-guide':
        return <GoogleAdsGuide onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className="page-transition">
        {renderPage()}
      </div>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
