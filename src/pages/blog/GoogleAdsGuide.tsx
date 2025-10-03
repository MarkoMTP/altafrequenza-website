import { Calendar, Clock, ArrowLeft } from 'lucide-react';

interface BlogPostProps {
  onNavigate: (page: string) => void;
}

export default function GoogleAdsGuide({ onNavigate }: BlogPostProps) {
  return (
    <div className="bg-white pt-20">
      <article className="max-w-4xl mx-auto px-6 lg:px-12 py-24">
        <button
          onClick={() => onNavigate('blog')}
          className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Journal
        </button>

        <div className="mb-8">
          <p className="text-sm tracking-wide text-amber-600 mb-3">Paid Advertising</p>
          <h1 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-6 leading-tight">
            Google Ads for Wedding Planners: A Complete Guide
          </h1>
          <div className="flex items-center gap-6 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              February 10, 2024
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              10 min read
            </div>
          </div>
        </div>

        <img
          src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Google Ads strategy"
          className="w-full h-96 object-cover mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-neutral-700 leading-relaxed mb-8">
            Master Google Ads to consistently attract high-quality leads who are ready to invest in exceptional planning services. This comprehensive guide covers everything luxury wedding planners need to know to run profitable campaigns.
          </p>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">Why Google Ads for Wedding Planners?</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            When high-net-worth couples start planning their weddings, they turn to Google. They search for wedding planners, research vendors, and compare options—all through search engines.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Google Ads allows you to appear at the exact moment couples are actively searching for your services. Unlike social media, where you're interrupting people's browsing, Google Ads connects you with high-intent prospects who are ready to hire a planner.
          </p>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">Step 1: Choose Luxury-Specific Keywords</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Generic keywords like "wedding planner" attract everyone—including couples who can't afford luxury services. Your keyword strategy should focus exclusively on searches indicating high-end intent.
          </p>

          <div className="bg-neutral-50 p-6 my-8 border border-neutral-200">
            <h4 className="font-medium text-neutral-900 mb-4">Recommended Keywords:</h4>
            <ul className="space-y-2 text-neutral-700">
              <li>• "Luxury wedding planner [city]"</li>
              <li>• "High-end wedding coordinator [city]"</li>
              <li>• "Full-service luxury wedding planning"</li>
              <li>• "Destination wedding planner luxury"</li>
              <li>• "Elite wedding planning services"</li>
              <li>• "Sophisticated wedding planner"</li>
            </ul>
          </div>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Use Google's Keyword Planner to identify search volume and competition, but prioritize quality over quantity. A hundred clicks from luxury-intent searches are more valuable than a thousand generic clicks.
          </p>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">Step 2: Write Premium Ad Copy</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Your ad copy must immediately communicate luxury positioning. Avoid language that emphasizes affordability or discounts.
          </p>

          <div className="bg-white p-6 my-8 border-2 border-neutral-300">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">Ad</span>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-medium text-neutral-900 mb-1">
                  Elite Wedding Planning | Flawless Luxury Celebrations
                </h4>
                <p className="text-sm text-green-700 mb-2">www.yoursite.com/luxury-services</p>
                <p className="text-sm text-neutral-700">
                  Discerning couples trust us to orchestrate sophisticated, unforgettable weddings. Full-service planning for elevated experiences.
                </p>
                <div className="mt-3 space-y-1">
                  <p className="text-xs text-neutral-700">✓ Bespoke Design & Planning</p>
                  <p className="text-xs text-neutral-700">✓ Curated Vendor Selection</p>
                  <p className="text-xs text-neutral-700">✓ Flawless Execution</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">Step 3: Create Conversion-Optimized Landing Pages</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Never send paid traffic to your homepage. Create dedicated landing pages that speak directly to the search intent and guide visitors toward booking a consultation.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Essential landing page elements:
          </p>

          <ul className="space-y-3 mb-8 ml-6">
            <li className="text-lg text-neutral-700"><strong>Hero section:</strong> Clear headline reinforcing luxury positioning</li>
            <li className="text-lg text-neutral-700"><strong>Trust indicators:</strong> Testimonials, portfolio highlights, press features</li>
            <li className="text-lg text-neutral-700"><strong>Service overview:</strong> What you offer and how you transform their experience</li>
            <li className="text-lg text-neutral-700"><strong>Strong CTA:</strong> "Book Your Consultation" button prominently displayed</li>
            <li className="text-lg text-neutral-700"><strong>Premium design:</strong> Sophisticated visuals that match luxury expectations</li>
          </ul>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">Step 4: Set Up Proper Tracking</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            You can't optimize what you don't measure. Install conversion tracking to understand which keywords, ads, and landing pages drive actual consultation requests.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Key metrics to track:
          </p>

          <ul className="space-y-3 mb-8 ml-6">
            <li className="text-lg text-neutral-700">Cost per click (CPC)</li>
            <li className="text-lg text-neutral-700">Click-through rate (CTR)</li>
            <li className="text-lg text-neutral-700">Conversion rate (form submissions)</li>
            <li className="text-lg text-neutral-700">Cost per acquisition (CPA)</li>
            <li className="text-lg text-neutral-700">Return on ad spend (ROAS)</li>
          </ul>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">Step 5: Budget and Bidding Strategy</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Luxury wedding planner keywords are competitive, but the ROI justifies the investment. A single high-end wedding client can generate $20k-$50k+ in revenue, making even expensive clicks profitable.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            <strong>Recommended starting budget:</strong> $2,000-$5,000 per month. This allows enough data collection to optimize effectively while maintaining visibility in competitive markets.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            <strong>Bidding strategy:</strong> Start with "Maximize Conversions" bidding to allow Google's algorithm to optimize for results. Once you have sufficient data, switch to Target CPA bidding.
          </p>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">Step 6: Continuous Optimization</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Successful Google Ads campaigns require ongoing refinement:
          </p>

          <ul className="space-y-3 mb-8 ml-6">
            <li className="text-lg text-neutral-700">Review search terms weekly and add negative keywords to filter out unqualified traffic</li>
            <li className="text-lg text-neutral-700">Pause underperforming keywords and scale winners</li>
            <li className="text-lg text-neutral-700">A/B test ad variations to improve click-through rates</li>
            <li className="text-lg text-neutral-700">Optimize landing pages based on conversion data</li>
            <li className="text-lg text-neutral-700">Adjust bids based on device, location, and time of day performance</li>
          </ul>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">Common Mistakes to Avoid</h2>

          <ul className="space-y-4 mb-8 ml-6">
            <li className="text-lg text-neutral-700"><strong>Targeting too broadly:</strong> Focus on luxury-specific searches only</li>
            <li className="text-lg text-neutral-700"><strong>Using generic landing pages:</strong> Create dedicated pages for paid traffic</li>
            <li className="text-lg text-neutral-700"><strong>Ignoring mobile experience:</strong> Most searches happen on mobile devices</li>
            <li className="text-lg text-neutral-700"><strong>Setting and forgetting:</strong> Campaigns require active management</li>
            <li className="text-lg text-neutral-700"><strong>Competing on price in ads:</strong> Emphasize value and expertise instead</li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-8 my-12">
            <h3 className="text-2xl font-serif text-neutral-900 mb-4">The Bottom Line</h3>
            <p className="text-lg text-neutral-800 leading-relaxed">
              Google Ads, when executed correctly, provides a consistent stream of high-quality leads for luxury wedding planners. The key is targeting the right keywords, crafting premium messaging, and continuously optimizing based on data. Done right, the ROI can be extraordinary.
            </p>
          </div>

          <div className="mt-16 pt-12 border-t border-neutral-200">
            <h3 className="text-2xl font-serif text-neutral-900 mb-6">
              Let Us Manage Your Google Ads
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              Our Wedding Planner Growth System™ handles every aspect of Google Ads management—from keyword strategy to landing page design to ongoing optimization. We specialize exclusively in luxury wedding planners.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white text-base tracking-wide hover:bg-neutral-800 transition-all"
            >
              Learn About Our Google Ads Service
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
