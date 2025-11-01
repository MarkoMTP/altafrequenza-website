import {
  ArrowRight,
  Search,
  BarChart,
  Target,
  TrendingUp,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function GrowthSystemPage() {
  return (
    <>
      <Helmet>
        <title>Wedding Planner Growth System™ | Alta Frequenza Marketing</title>
        <meta
          name="description"
          content="Discover the Wedding Planner Growth System™ by Alta Frequenza Marketing — a proven Google Ads strategy for luxury wedding planners attracting high-end international couples."
        />
        <meta
          name="keywords"
          content="wedding planner marketing, Google Ads for wedding planners, luxury wedding planner leads, destination wedding planner marketing, wedding planner growth system"
        />
        <meta
          property="og:title"
          content="Wedding Planner Growth System™ | Alta Frequenza Marketing"
        />
        <meta
          property="og:description"
          content="A proven lead generation system for luxury wedding planners attracting high-spending international couples."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://altafrequenzamarketing.com/" />
        <meta
          property="og:image"
          content="https://altafrequenzamarketing.com/og-image.jpg"
        />
      </Helmet>
      <div className="bg-white pt-20">
        {/* HERO */}
        <section className="min-h-[80vh] flex items-center justify-center px-6 lg:px-12 py-24 bg-gradient-to-b from-amber-50 to-white">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 text-sm uppercase tracking-wide text-neutral-700">
              <TrendingUp size={16} className="text-amber-600" />
              Proven Lead Generation for Luxury Wedding Planners
            </div>

            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6 text-neutral-900">
              The Wedding Planner
              <br />
              Growth System™
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed max-w-3xl mx-auto mb-10">
              A Google Ads system engineered for{" "}
              <span className="font-semibold">
                destination wedding planners
              </span>
              who want a steady stream of qualified international couples —
              ready to book weddings in the{" "}
              <span className="font-semibold">€150K–€1M range</span>.
            </p>

            <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-12">
              Imagine waking up to consultation requests from high-spending
              couples every week — no guesswork, no chasing inquiries, just
              consistent leads from clients who already want your service.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 text-white text-lg tracking-wide hover:bg-neutral-800 transition-all"
            >
              Get Luxury Leads On Autopilot
              <ArrowRight size={22} />
            </Link>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="py-24 px-6 lg:px-12 bg-neutral-900 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest text-neutral-400 mb-3">
              WHY MOST ADS FAIL
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-10">
              You’re Probably Paying for Clicks — Not Clients
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto mb-16">
              Most planners try Google Ads once, get clicks from couples with
              €15K budgets, and decide “ads don’t work.” The truth? You just
              targeted the wrong people. The Growth System™ is designed for{" "}
              <span className="text-white font-semibold">
                high-intent, high-budget clients only
              </span>
              .
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-neutral-800 p-8 border border-neutral-700">
                <h3 className="text-xl font-semibold mb-3 text-amber-500">
                  ❌ Too Broad Targeting
                </h3>
                <p className="text-neutral-300">
                  Standard keywords bring in everyone — including couples
                  looking for planners under €10K.
                </p>
              </div>
              <div className="bg-neutral-800 p-8 border border-neutral-700">
                <h3 className="text-xl font-semibold mb-3 text-amber-500">
                  ❌ Weak Messaging
                </h3>
                <p className="text-neutral-300">
                  Most ads sound like price lists, not luxury experiences. Your
                  clients want emotion, not discounts.
                </p>
              </div>
              <div className="bg-neutral-800 p-8 border border-neutral-700">
                <h3 className="text-xl font-semibold mb-3 text-amber-500">
                  ❌ No Tracking or Insight
                </h3>
                <p className="text-neutral-300">
                  You can’t optimize what you can’t measure — we install full
                  conversion tracking to know which clicks book.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-neutral-500 mb-3">
              HOW IT WORKS
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">
              The Three Steps to a Predictable Lead Machine
            </h2>
          </div>

          <div className="space-y-20 max-w-6xl mx-auto">
            {/* STEP 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-900 text-white mb-6">
                  <Search size={28} />
                </div>
                <h3 className="text-3xl font-serif text-neutral-900 mb-4">
                  1. Target Only High-Spending Couples
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  We use advanced keyword segmentation to show your ads only to
                  couples searching for planners in exclusive destinations —
                  Tuscany, Amalfi, Lake Como, Provence, Santorini.
                </p>
                <ul className="space-y-3 text-neutral-700">
                  <li>✔ “Luxury wedding planner Italy”</li>
                  <li>✔ “Destination wedding designer Amalfi Coast”</li>
                  <li>✔ “High-end full-service wedding planning”</li>
                </ul>
              </div>

              <div className="bg-neutral-50 p-8 border border-neutral-200">
                <p className="text-neutral-700 leading-relaxed">
                  Every ad is crafted with a luxury narrative, not sales talk —
                  connecting emotionally with couples who care about taste,
                  status, and trust.
                </p>
                <div className="mt-6 p-6 bg-white border border-neutral-300">
                  <p className="text-sm italic text-neutral-600">
                    “Marko helped us generate consistent leads every month —
                    real couples who booked weddings through our campaigns.”
                  </p>
                  <p className="text-sm text-right mt-3 text-neutral-500">
                    — My Tuscan Wedding
                  </p>
                </div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-neutral-50 p-8 border border-neutral-200">
                <h3 className="text-3xl font-serif text-neutral-900 mb-4">
                  2. Convert Clicks Into Booked Calls
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  We optimize every touchpoint — ad copy, form flow, thank-you
                  page — so that inquiries don’t just fill your inbox, they book
                  consultations.
                </p>
                <ul className="space-y-3 text-neutral-700">
                  <li>✔ Conversion-focused landing page (optional add-on)</li>
                  <li>✔ Clear CTA strategy & follow-up structure</li>
                  <li>✔ Pre-qualification system for serious couples</li>
                </ul>
              </div>

              <div className="order-1 md:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-900 text-white mb-6">
                  <Target size={28} />
                </div>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Every click is a potential €100K+ wedding — we make sure none
                  go to waste.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-900 text-white mb-6">
                  <BarChart size={28} />
                </div>
                <h3 className="text-3xl font-serif text-neutral-900 mb-4">
                  3. Continuous Optimization & Growth
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  We track and refine campaigns every week — improving ROI,
                  testing new keywords, and scaling your visibility as inquiries
                  grow.
                </p>
                <p className="text-neutral-700">
                  You’ll receive a clean monthly video breakdown with insights
                  and next steps — no technical jargon, just clarity.
                </p>
              </div>

              <div className="bg-neutral-900 text-white p-8">
                <h4 className="text-2xl font-serif mb-6">Client Snapshot</h4>
                <div className="space-y-6">
                  <div className="flex justify-between">
                    <span className="text-neutral-300">
                      Qualified Leads (6 mo)
                    </span>
                    <span className="text-3xl font-serif text-amber-600">
                      50+
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-300">Booked Weddings</span>
                    <span className="text-3xl font-serif text-amber-600">
                      5
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-300">
                      Avg. Wedding Budget
                    </span>
                    <span className="text-3xl font-serif text-amber-600">
                      €200K+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-neutral-900 to-neutral-950 text-white">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-neutral-400 mb-3">
              INVESTMENT
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Choose Your Growth Package
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Whether you want to start generating luxury leads immediately or
              scale your visibility across all platforms — we’ve built options
              that fit your growth stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* GOOGLE ADS PLAN */}
            <div className="bg-neutral-800 p-10 border border-neutral-700 text-left">
              <h3 className="text-2xl font-serif mb-4 text-amber-500">
                Wedding Planner Growth System™
              </h3>
              <p className="text-neutral-300 mb-6">
                Generate qualified inquiries from high-spending couples
                searching for wedding planners in Italy, France, and beyond.
              </p>
              <ul className="space-y-3 mb-6 text-neutral-300">
                <li>✅ €1,000 setup</li>
                <li>✅ €500/month management</li>
                <li>✅ Full optimization, tracking & reporting</li>
              </ul>
              <p className="text-neutral-400 italic">
                Perfect for planners focused on lead generation.
              </p>
            </div>

            {/* BUNDLE */}
            <div className="bg-amber-600 text-neutral-900 p-10 border border-amber-500 text-left shadow-xl">
              <h3 className="text-2xl font-serif mb-4">
                Signature Growth Suite (Google + Meta)
              </h3>
              <p className="text-neutral-800 mb-6">
                Combine the power of search and social. Google brings the leads,
                Meta keeps your brand visible and trusted. Together, they build
                unstoppable momentum.
              </p>
              <ul className="space-y-3 mb-6">
                <li>💼 €1,500 setup (instead of €2,000)</li>
                <li>💎 €850/month total (instead of €1,000)</li>
                <li>✨ Full funnel optimization + retargeting synergy</li>
              </ul>
              <p className="text-neutral-800 italic">
                Save €650 and scale both visibility and leads simultaneously.
              </p>
            </div>
          </div>

          {/* ADD ONS */}
          <div className="max-w-5xl mx-auto mt-20 text-center">
            <h3 className="text-2xl font-serif mb-8">Optional Add-Ons</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-neutral-800 p-6 border border-neutral-700">
                <Sparkles className="text-amber-500 mb-3" size={28} />
                <h4 className="text-xl mb-2">Landing Page Build</h4>
                <p className="text-neutral-400">
                  +€500 — conversion-optimized & styled for luxury clients
                </p>
              </div>
              <div className="bg-neutral-800 p-6 border border-neutral-700">
                <Target className="text-amber-500 mb-3" size={28} />
                <h4 className="text-xl mb-2">Retargeting Boost</h4>
                <p className="text-neutral-400">
                  +€250 — remarket to warm audiences automatically
                </p>
              </div>
              <div className="bg-neutral-800 p-6 border border-neutral-700">
                <BarChart className="text-amber-500 mb-3" size={28} />
                <h4 className="text-xl mb-2">Monthly Strategy Call</h4>
                <p className="text-neutral-400">
                  +€150/mo — deep-dive optimization & scaling insights
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 lg:px-12 text-center bg-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl font-serif text-neutral-900 mb-6">
              Ready to Attract Couples Who Value Excellence?
            </h3>
            <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
              Book a free strategy call to see how the Wedding Planner Growth
              System™ can turn your expertise into consistent, high-quality
              leads every single month.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 text-white text-lg tracking-wide hover:bg-neutral-800 transition-all"
            >
              Book Your Strategy Call
              <ArrowRight size={22} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
