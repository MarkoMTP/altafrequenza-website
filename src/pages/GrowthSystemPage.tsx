import {
  ArrowRight,
  Search,
  BarChart,
  Target,
  TrendingUp,
  CheckCircle,
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
          content="The most advanced Google Ads system ever built for wedding planners — engineered to attract serious, high-value enquiries worldwide."
        />
      </Helmet>

      <div className="bg-white pt-20">
        {/* -------------------------------- HERO ------------------------------- */}
        <section className="px-6 lg:px-12 py-32 text-center bg-gradient-to-b from-amber-50 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 text-sm uppercase tracking-wide text-neutral-600 mb-8">
              <TrendingUp size={16} className="text-amber-600" />
              Google Ads for Wedding Planners
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-neutral-900 mb-6 leading-tight">
              The Wedding Planner <br /> Growth System™
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed max-w-3xl mx-auto mb-6">
              The most advanced Google Ads system ever created for wedding
              planners — delivering consistent, high-quality enquiries from
              couples planning meaningful, full-service weddings.
            </p>

            <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-12">
              Imagine receiving consultation requests every week from couples
              who are serious, aligned with your style, and ready to invest.
              <span className="font-semibold">
                That's what this system delivers.
              </span>
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 text-white text-lg hover:bg-neutral-800 transition-all"
            >
              Start Getting Better Enquiries
              <ArrowRight size={22} />
            </Link>
          </div>
        </section>

        {/* ---------------------- WHY WE ARE #1 EXPERTS ------------------------- */}
        <section className="px-6 lg:px-12 py-28 bg-neutral-900 text-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif mb-10 text-center">
              Why We’re the #1 Experts in Google Ads for Wedding Planners
            </h2>

            <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto text-center mb-12">
              Most agencies run ads for every niche.
              <span className="font-semibold text-white">
                We’ve run more Google Ads campaigns for wedding planners than
                any agency in the world.
              </span>
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <ul className="space-y-3 text-neutral-200 text-lg">
                <li>• Which keywords attract full-planning vs DIY</li>
                <li>• Which budgets filter out day-of only</li>
                <li>• How lead quality changes by region</li>
              </ul>
              <ul className="space-y-3 text-neutral-200 text-lg">
                <li>• What messaging luxury couples respond to</li>
                <li>• Seasonal patterns in enquiry quality</li>
                <li>• Which cities deliver the highest value clients</li>
              </ul>
            </div>

            <p className="text-neutral-300 text-lg mb-8">
              Our system is built from real performance data across:
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-neutral-300 text-lg">
              <ul className="space-y-2">
                <li>
                  ✔ United States — LA, NYC, Miami, Houston, Chicago, Austin…
                </li>
                <li>✔ Europe — Italy, France, UK, Spain, Switzerland…</li>
                <li>✔ Mexico & Caribbean</li>
              </ul>
              <ul className="space-y-2">
                <li>✔ Middle East</li>
                <li>✔ Asia & Australia</li>
                <li>✔ 20+ wedding markets globally</li>
              </ul>
            </div>

            <p className="italic text-neutral-300 text-center mt-12 text-lg max-w-3xl mx-auto">
              When we say we’re the specialists, it’s because we’ve already seen
              — and solved — every mistake planners make inside Google Ads.
            </p>
          </div>
        </section>

        {/* ------------------------- PROBLEM SECTION --------------------------- */}
        <section className="px-6 lg:px-12 py-24 bg-white">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
              The Real Problem
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
              You’re Getting Clicks —
              <span className="block md:inline">But Not the Right Couples</span>
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Most Google Ads fail because they attract price-shoppers, DIY
              brides, or couples looking only for day-of coordination. The
              Growth System™ fixes that permanently.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-neutral-50 border border-neutral-200 p-8">
              <h3 className="text-xl font-semibold text-amber-600 mb-3">
                ❌ Too Broad Targeting
              </h3>
              <p className="text-neutral-700">
                Generic keywords attract unqualified, low-budget enquiries.
              </p>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 p-8">
              <h3 className="text-xl font-semibold text-amber-600 mb-3">
                ❌ Wrong Messaging
              </h3>
              <p className="text-neutral-700">
                Luxury couples want expertise, clarity, and taste — not
                “packages.”
              </p>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 p-8">
              <h3 className="text-xl font-semibold text-amber-600 mb-3">
                ❌ No Tracking
              </h3>
              <p className="text-neutral-700">
                Without proper tracking, you can’t scale what actually books
                weddings.
              </p>
            </div>
          </div>
        </section>

        {/* ------------------------- HOW IT WORKS ------------------------------ */}
        <section className="px-6 lg:px-12 py-28">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
              HOW IT WORKS
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">
              The Three Steps to a Predictable Enquiry Machine
            </h2>
          </div>

          <div className="space-y-28 max-w-5xl mx-auto">
            {/* STEP 1 */}
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <div className="w-14 h-14 flex items-center justify-center bg-neutral-900 text-white rounded-full mb-5">
                  <Search size={24} />
                </div>
                <h3 className="text-3xl font-serif mb-4">
                  1. Target Only High-Intent Couples
                </h3>
                <p className="text-neutral-700 text-lg mb-6">
                  We target search terms used only by couples ready for
                  professional planning.
                </p>

                <ul className="space-y-2 text-neutral-700 text-lg">
                  <li>✔ “Full-service wedding planner [city]”</li>
                  <li>✔ “Luxury wedding planner [region]”</li>
                  <li>✔ “Wedding planner LA / NYC / Chicago”</li>
                  <li>
                    ✔ “Destination wedding planner Italy / Mexico / Hawaii”
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-neutral-700 text-lg mb-6">
                  You stop paying for day-of, DIY, or budget enquiries. You
                  appear ONLY where qualified couples are searching.
                </p>

                <div className="p-6 bg-neutral-50 border border-neutral-200">
                  <p className="text-sm italic text-neutral-700">
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
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="order-2 md:order-1">
                <div className="w-14 h-14 flex items-center justify-center bg-neutral-900 text-white rounded-full mb-5">
                  <Target size={24} />
                </div>
                <h3 className="text-3xl font-serif mb-4">
                  2. Convert Clicks Into Booked Calls
                </h3>

                <ul className="space-y-2 text-neutral-700 text-lg mb-6">
                  <li>✔ High-trust ad messaging</li>
                  <li>✔ Conversion-optimized forms</li>
                  <li>✔ Optional landing page</li>
                  <li>✔ Pre-qualification filters</li>
                </ul>

                <p className="text-neutral-700 text-lg">
                  Every step is optimized so your enquiries are serious,
                  aligned, and ready.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <div className="w-14 h-14 flex items-center justify-center bg-neutral-900 text-white rounded-full mb-5">
                  <BarChart size={24} />
                </div>
                <h3 className="text-3xl font-serif mb-4">
                  3. Weekly Optimization
                </h3>

                <ul className="space-y-2 text-neutral-700 text-lg">
                  <li>• Keyword refinement</li>
                  <li>• Search-term filtering</li>
                  <li>• Location performance</li>
                  <li>• Messaging updates</li>
                  <li>• Bid strategy improvement</li>
                </ul>

                <p className="text-neutral-700 text-lg mt-6">
                  Lead quality increases, cost drops, and enquiries become
                  predictable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- RESULTS ------------------------------ */}
        <section className="px-6 lg:px-12 py-24 bg-neutral-50">
          <div className="max-w-6xl mx-auto text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
              REAL RESULTS
            </p>
            <h2 className="text-4xl font-serif text-neutral-900 mb-4">
              Proven Across Different Markets
            </h2>
            <p className="text-neutral-700 text-lg max-w-3xl mx-auto">
              The system adapts to the US, Europe, Mexico, Middle East, and
              beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 bg-white border border-neutral-200">
              <h3 className="text-xl font-serif mb-3">France ↔ US Planner</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>
                  <CheckCircle className="inline text-amber-600" /> 50+
                  enquiries
                </li>
                <li>
                  <CheckCircle className="inline text-amber-600" /> 6 bookings
                </li>
                <li>
                  <CheckCircle className="inline text-amber-600" /> €120K–190K
                  budgets
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-neutral-200">
              <h3 className="text-xl font-serif mb-3">US ↔ Mexico Planner</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>
                  <CheckCircle className="inline text-amber-600" /> 28 enquiries
                </li>
                <li>
                  <CheckCircle className="inline text-amber-600" /> 4 bookings
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-neutral-200">
              <h3 className="text-xl font-serif mb-3">Italy Planner</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>
                  <CheckCircle className="inline text-amber-600" /> 8 enquiries
                  in 6 weeks
                </li>
                <li>
                  <CheckCircle className="inline text-amber-600" /> €1,200 ad
                  spend
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ----------------------------- PRICING ------------------------------ */}
        <section className="px-6 lg:px-12 py-28 bg-neutral-900 text-white">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-neutral-400 mb-4">
              INVESTMENT
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Simple, Transparent Pricing
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* RETAINER */}
            <div className="bg-neutral-800 p-10 border border-neutral-700">
              <h3 className="text-2xl font-serif text-amber-500 mb-4">
                Wedding Planner Growth System™
              </h3>
              <p className="text-neutral-300 mb-6">
                Ongoing optimisation & stable enquiries.
              </p>

              <ul className="text-neutral-300 space-y-2 mb-8">
                <li>
                  <strong>€980 setup</strong> — one time
                </li>
                <li>✔ High-intent keyword strategy</li>
                <li>✔ Campaign setup</li>
                <li>✔ Tracking & analytics</li>
                <li>✔ Landing page included</li>
                <li className="pt-4">
                  <strong>€680/month</strong>
                </li>
                <li>✔ Weekly optimisation</li>
                <li>✔ Monthly insights</li>
              </ul>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-900 hover:bg-neutral-100"
              >
                Talk About Your Numbers <ArrowRight size={20} />
              </Link>
            </div>

            {/* VIP */}
            <div className="bg-neutral-800 p-10 border border-neutral-700">
              <h3 className="text-2xl font-serif text-amber-500 mb-4">
                VIP 24-Hour Launch™ + 3-Month Support
              </h3>
              <p className="text-neutral-300 mb-6">
                A premium, done-in-a-day experience.
              </p>

              <ul className="text-neutral-300 space-y-2 mb-8">
                <li>
                  <strong>€1,500</strong> — one time
                </li>
                <li>✔ Full campaign in 24 hours</li>
                <li>✔ High-intent strategy</li>
                <li>✔ Tracking setup</li>
                <li>✔ Form optimisation</li>
                <li className="pt-4">Includes 3 months:</li>
                <li>✔ Monthly review</li>
                <li>✔ Keyword filtering</li>
                <li>✔ Growth roadmap</li>
              </ul>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-900 hover:bg-neutral-100"
              >
                Book Your VIP Launch <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 lg:px-12 py-24 text-center bg-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl font-serif text-neutral-900 mb-6">
              Ready to Bring In Better Enquiries?
            </h3>
            <p className="text-lg text-neutral-700 mb-10">
              If you're done with price-shoppers and unpredictable leads, The
              Growth System™ will change your business.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 text-white text-lg hover:bg-neutral-800"
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
