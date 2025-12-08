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
          content="The Wedding Planner Growth System™ — a proven Google Ads system for wedding planners around the world who want consistent, serious inquiries for full-service weddings."
        />
        <meta
          name="keywords"
          content="wedding planner marketing, Google Ads for wedding planners, wedding planner leads, wedding planner advertising, enquiry system"
        />
        <meta
          property="og:title"
          content="Wedding Planner Growth System™ | Alta Frequenza Marketing"
        />
        <meta
          property="og:description"
          content="A proven lead generation system for wedding planners worldwide who want serious, high-value enquiries for full-service weddings."
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
              Proven Lead Generation for Wedding Planners
            </div>

            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6 text-neutral-900">
              The Wedding Planner <br /> Growth System™
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed max-w-3xl mx-auto mb-10">
              A Google Ads system engineered for wedding planners worldwide who
              want consistent enquiries from couples planning meaningful,
              full-service weddings.
            </p>

            <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-12">
              Imagine checking your inbox each week and seeing new consultation
              requests from couples who are serious, aligned with your style,
              and ready to invest in a professionally planned wedding.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 text-white text-lg tracking-wide hover:bg-neutral-800 transition-all"
            >
              Start Getting Better Enquiries
              <ArrowRight size={22} />
            </Link>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="py-24 px-6 lg:px-12 bg-neutral-900 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest text-neutral-400 mb-3">
              WHY MOST PLANNER ADS DON’T DELIVER
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-10">
              You’re Getting Clicks — But Not the Right Couples
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto mb-16">
              Most planners try Google Ads, get low-budget or DIY enquiries, and
              assume “ads don’t work.” The real problem isn’t ads — it’s using
              the wrong keywords, the wrong message, or no tracking at all. The
              Growth System™ fixes this by focusing on couples planning
              full-service weddings with meaningful budgets.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-neutral-800 p-8 border border-neutral-700">
                <h3 className="text-xl font-semibold mb-3 text-amber-500">
                  ❌ Too Broad Targeting
                </h3>
                <p className="text-neutral-300">
                  Generic keywords attract everyone — especially low-budget
                  couples searching for DIY help or day-of coordination only.
                </p>
              </div>
              <div className="bg-neutral-800 p-8 border border-neutral-700">
                <h3 className="text-xl font-semibold mb-3 text-amber-500">
                  ❌ The Wrong Message
                </h3>
                <p className="text-neutral-300">
                  Most ads sound like price lists. Your ideal couples want
                  clarity, trust, and reassurance — not “packages.”
                </p>
              </div>
              <div className="bg-neutral-800 p-8 border border-neutral-700">
                <h3 className="text-xl font-semibold mb-3 text-amber-500">
                  ❌ No Tracking
                </h3>
                <p className="text-neutral-300">
                  Without tracking, you can’t tell which searches or locations
                  actually produce booked weddings.
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
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-neutral-900 text-white mb-5">
                  <Search size={24} />
                </div>
                <h3 className="text-3xl font-serif text-neutral-900 mb-4">
                  1. Target Only Serious, High-Intent Couples
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  We target searches used by couples actively looking for
                  professional wedding planners — not DIY help, not day-of
                  coordination, not budget planning.
                </p>
                <ul className="space-y-3 text-neutral-700">
                  <li>✔ “Wedding planner near me”</li>
                  <li>✔ “Full-service wedding planner [city]”</li>
                  <li>✔ “Wedding planner Chicago / NYC / LA / Miami”</li>
                  <li>
                    ✔ “Destination wedding planner Mexico / Italy / Hawaii”
                  </li>
                </ul>
                <p className="text-neutral-700 mt-6">
                  The goal is simple: stop paying for low-budget enquiries and
                  focus your ad spend on couples looking for full planning
                  support.
                </p>
              </div>

              <div>
                <p className="text-neutral-700 leading-relaxed">
                  Instead of showing up everywhere, you appear exactly where
                  your ideal couples are searching — by location, budget range,
                  and intent level.
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
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-neutral-900 text-white mb-5">
                  <Target size={24} />
                </div>
                <h3 className="text-3xl font-serif text-neutral-900 mb-4">
                  2. Turn Clicks Into Booked Consultations
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  Traffic alone doesn’t book weddings. We optimize every step to
                  ensure more couples enquire — and book a call with you.
                </p>
                <ul className="space-y-3 text-neutral-700">
                  <li>✔ High-trust ad messaging</li>
                  <li>✔ Smooth enquiry flow</li>
                  <li>✔ Optional landing page for conversions</li>
                  <li>✔ Light pre-qualification filters</li>
                </ul>
                <p className="text-neutral-700 mt-6">
                  Every click matters — we make sure they turn into real
                  conversations with couples who value your expertise.
                </p>
              </div>

              <div className="order-1 md:order-2" />
            </div>

            {/* STEP 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-neutral-900 text-white mb-5">
                  <BarChart size={24} />
                </div>
                <h3 className="text-3xl font-serif text-neutral-900 mb-4">
                  3. Weekly Optimization & Long-Term Growth
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  After launch, we refine the system weekly based on real data,
                  not assumptions.
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li>Keywords & search terms</li>
                  <li>Ad copy + extensions</li>
                  <li>Locations & devices</li>
                  <li>Negative keywords</li>
                  <li>Bid strategies</li>
                </ul>
                <p className="text-neutral-700 mt-6">
                  Lead quality improves, cost per enquiry drops, and your
                  pipeline becomes far more stable — season after season.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS SECTION */}
        <section className="py-24 px-6 lg:px-12 bg-neutral-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest text-neutral-500 mb-3">
                REAL RESULTS
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-4">
                Proven Across Different Markets
              </h2>
              <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
                Whether you're in the US, Europe, Mexico, Asia, or Australia —
                the system adapts to your market and targets your ideal couples.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* CASE STUDY 1 */}
              <div className="bg-white border border-neutral-200 p-8">
                <h3 className="text-xl font-serif text-neutral-900 mb-3">
                  6 Months — France & US Planner
                </h3>
                <ul className="space-y-2 text-neutral-700 mb-4">
                  <li>
                    <CheckCircle className="inline text-amber-600 mr-2" />
                    50+ qualified enquiries
                  </li>
                  <li>
                    <CheckCircle className="inline text-amber-600 mr-2" />6
                    booked weddings
                  </li>
                  <li>
                    <CheckCircle className="inline text-amber-600 mr-2" />
                    Avg budgets €120K–€190K
                  </li>
                </ul>
              </div>

              {/* CASE STUDY 2 */}
              <div className="bg-white border border-neutral-200 p-8">
                <h3 className="text-xl font-serif text-neutral-900 mb-3">
                  4 Months — US & Mexico Planner
                </h3>
                <ul className="space-y-2 text-neutral-700 mb-4">
                  <li>
                    <CheckCircle className="inline text-amber-600 mr-2" />
                    28 qualified enquiries
                  </li>
                  <li>
                    <CheckCircle className="inline text-amber-600 mr-2" />4
                    booked weddings
                  </li>
                </ul>
              </div>

              {/* CASE STUDY 3 */}
              <div className="bg-white border border-neutral-200 p-8">
                <h3 className="text-xl font-serif text-neutral-900 mb-3">
                  6 Weeks — Italy Planner
                </h3>
                <ul className="space-y-2 text-neutral-700 mb-4">
                  <li>
                    <CheckCircle className="inline text-amber-600 mr-2" />8
                    leads in ~1.5 months
                  </li>
                  <li>
                    <CheckCircle className="inline text-amber-600 mr-2" />
                    €1,200 ad spend total
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        {/* PRICING */}
        <section className="py-24 px-6 lg:px-12 bg-neutral-900 text-white">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-neutral-400 mb-3">
              INVESTMENT
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Two ways to work together — depending on whether you want a
              long-term partner managing your enquiries, or a complete system
              built for you in one day with 3 months of support.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            {/* MAIN RETAINER OFFER */}
            <div className="bg-neutral-800 p-10 border border-neutral-700 text-left">
              <h3 className="text-2xl font-serif mb-4 text-amber-500">
                Wedding Planner Growth System™
              </h3>
              <p className="text-neutral-300 mb-6">
                For planners who want ongoing optimisation, stable enquiry flow,
                and a long-term partner improving results every single month.
              </p>

              <ul className="space-y-3 mb-8 text-neutral-300">
                <li>
                  <strong>€980 setup</strong> — one-time
                </li>
                <li>✔ Full high-intent keyword strategy</li>
                <li>✔ Campaign & ad creation</li>
                <li>✔ Conversion tracking & analytics</li>
                <li>✔ Enquiry funnel optimisation</li>
                <li>✔ Landing Page For Free</li>

                <li className="pt-3">
                  <strong>€680/monthly management</strong>
                </li>
                <li>✔ Weekly optimisation</li>
                <li>✔ Search term filtering</li>
                <li>✔ Monthly insights + next steps</li>
              </ul>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-neutral-900 text-base tracking-wide hover:bg-neutral-100 transition-all"
              >
                Talk About Your Numbers
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* VIP ONE-DAY LAUNCH OFFER */}
            <div className="bg-neutral-800 p-10 border border-neutral-700 text-left">
              <h3 className="text-2xl font-serif mb-4 text-amber-500">
                VIP Done In 24 Hours Launch + 3-Month Support
              </h3>
              <p className="text-neutral-300 mb-6">
                A premium, done-in-a-day experience for planners who want the
                entire system built fast — without ongoing monthly management.
              </p>

              <ul className="space-y-3 mb-8 text-neutral-300">
                <li>
                  <strong>€1,500</strong> — one-time
                </li>
                <li>✔ Full campaign setup (delivered in one day)</li>
                <li>✔ High-intent keyword strategy</li>
                <li>✔ Ads, extensions & optimisation rules</li>
                <li>✔ Tracking + conversion pipeline setup</li>
                <li>✔ Enquiry funnel & form optimisation</li>

                <li className="pt-3 font-semibold text-white">
                  Includes 3 Months of Support:
                </li>
                <li>✔ Monthly performance review</li>
                <li>✔ Keyword filter recommendations</li>
                <li>✔ Growth roadmap for scaling</li>
                <li>✔ Support via email for tweaks & questions</li>
              </ul>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-neutral-900 text-base tracking-wide hover:bg-neutral-100 transition-all"
              >
                Book Your VIP Launch
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 lg:px-12 text-center bg-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl font-serif text-neutral-900 mb-6">
              Ready to Bring In Better Enquiries?
            </h3>
            <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
              If you're done with price-shoppers and inconsistent enquiries —
              and want a steady flow of serious couples — the Growth System™ is
              for you.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 text-white text-lg tracking-wide hover:bg-neutral-800 transition-all"
            >
              Book Your Strategy Session
              <ArrowRight size={22} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
