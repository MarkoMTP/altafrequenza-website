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
        <title>Wedding Growth System™ | Google Ads for Planners & Venues</title>
        <meta
          name="description"
          content="A structured Google Ads approach built specifically for wedding planners and venues. Designed to bring consistent enquiries from couples actively searching."
        />
        <meta
          name="keywords"
          content="wedding planner marketing, google ads wedding planner, wedding venue google ads, wedding marketing agency, destination wedding ads, wedding ads specialist"
        />
      </Helmet>

      <div className="bg-white pt-20">
        {/* ------------------------------- HERO -------------------------------- */}
        <section className="px-6 lg:px-12 py-32 text-center bg-gradient-to-b from-sky-50 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 text-sm uppercase tracking-wide text-slate-600 mb-8 rounded-full">
              <TrendingUp size={16} className="text-sky-600" />
              Ads System for Wedding Planners & Venues
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6 leading-tight">
              The Wedding Growth System™
            </h1>

            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto mb-6">
              A simple, structured ads system built exclusively for wedding
              planners and venues, designed to bring you consistent enquiries
              from couples actively searching <strong>right now.</strong>
            </p>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
              Most wedding businesses don’t struggle because of their work. They
              struggle because the right couples never find them in time.
              <span className="font-semibold">This system fixes that.</span>
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-sky-600 text-white text-lg hover:bg-sky-700 transition-all rounded-full shadow-md"
            >
              Start Getting Better Enquiries
              <ArrowRight size={22} />
            </Link>
          </div>
        </section>

        {/* ----------------------------- PROBLEM ------------------------------- */}
        <section className="px-6 lg:px-12 py-28 bg-white">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-sky-600 mb-4">
              The Real Problem
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
              You're Getting Clicks, <br className="md:hidden" />
              But Not the Right Couples
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Most wedding ads fail because they reach the wrong audience:
              price-shoppers, DIY brides, or couples looking for day-of only.
              <strong>The Growth System™ eliminates this completely.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-sky-600 mb-3">
                ❌ Broad Targeting
              </h3>
              <p className="text-slate-700">
                Generic keywords attract low-quality enquiries.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-sky-600 mb-3">
                ❌ Wrong Messaging
              </h3>
              <p className="text-slate-700">
                Couples planning real weddings want clarity, expertise, and
                trust.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-sky-600 mb-3">
                ❌ No Optimisation
              </h3>
              <p className="text-slate-700">
                Without filtering search terms, budgets, and regions, ads stay
                unpredictable.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------- WHAT IT DOES --------------------------- */}
        <section className="px-6 lg:px-12 py-24 bg-sky-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-sky-700 mb-4">
              What This System Does
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
              A Predictable Flow of Qualified Enquiries
            </h2>

            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              This isn’t “run some ads and hope.” It’s a structured approach
              based on real inquiry behavior across multiple wedding markets
              worldwide.
            </p>
          </div>

          <ul className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto text-lg text-slate-700">
            <li>✔ Get found by couples actively searching</li>
            <li>✔ Filter out low budgets & non-serious enquiries</li>
            <li>✔ Use messaging that builds trust instantly</li>
            <li>✔ Turn clicks into booked calls</li>
            <li>✔ Keep ads profitable long-term</li>
            <li>✔ Works for planners & venues in all markets</li>
          </ul>
        </section>

        {/* ------------------------------ 3 STEPS ------------------------------ */}
        <section className="px-6 lg:px-12 py-28 bg-white">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-sky-600 mb-4">
              HOW IT WORKS
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900">
              The 3 Core Components
            </h2>
          </div>

          <div className="space-y-28 max-w-5xl mx-auto">
            {/* STEP 1 */}
            <div className="flex justify-center">
              <div className="max-w-3xl w-full">
                <div>
                  <div className="w-14 h-14 flex items-center justify-center bg-sky-600 text-white rounded-full mb-5">
                    <Search size={24} />
                  </div>
                  <h3 className="text-3xl font-serif mb-4">
                    1. High-Intent Targeting
                  </h3>
                  <p className="text-slate-700 text-lg mb-6">
                    We target only the search terms used by couples ready to
                    hire a planner or venue, not people browsing or
                    price-shopping.
                  </p>

                  <ul className="space-y-2 text-slate-700 text-lg">
                    <li>✔ “Luxury wedding planner [city]”</li>
                    <li>✔ “Wedding venue [region]”</li>
                    <li>✔ “Destination wedding [location]”</li>
                    <li>✔ Filters for full planning vs. day-of</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="flex justify-center">
              <div className="max-w-3xl w-full">
                <div>
                  <div className="w-14 h-14 flex items-center justify-center bg-sky-600 text-white rounded-full mb-5">
                    <Target size={24} />
                  </div>
                  <h3 className="text-3xl font-serif mb-4">
                    2. Trust-Based Messaging
                  </h3>

                  <ul className="space-y-2 text-slate-700 text-lg mb-6">
                    <li>✔ Professional, high-trust ad copy</li>
                    <li>✔ Conversion-optimised forms</li>
                    <li>✔ Optional landing page</li>
                    <li>✔ Pre-qualification filters</li>
                  </ul>

                  <p className="text-slate-700 text-lg">
                    Every click is guided toward an enquiry — with clarity and
                    confidence.
                  </p>
                </div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="flex justify-center">
              <div className="max-w-3xl w-full">
                <div>
                  <div className="w-14 h-14 flex items-center justify-center bg-sky-600 text-white rounded-full mb-5">
                    <BarChart size={24} />
                  </div>
                  <h3 className="text-3xl font-serif mb-4">
                    3. Weekly Refinement
                  </h3>

                  <ul className="space-y-2 text-slate-700 text-lg">
                    <li>• Search-term filtering</li>
                    <li>• Keyword refinement</li>
                    <li>• Location performance review</li>
                    <li>• Messaging updates</li>
                    <li>• Budget & bid optimisation</li>
                  </ul>

                  <p className="text-slate-700 text-lg mt-6">
                    Lead quality rises, cost per enquiry drops, and visibility
                    becomes predictable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------ RESULTS ------------------------------ */}
        <section className="px-6 lg:px-12 py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-6xl mx-auto text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-sky-600 mb-4">
              REAL RESULTS
            </p>
            <h2 className="text-4xl font-serif text-slate-900 mb-4">
              Proven Across Multiple Markets
            </h2>
            <p className="text-slate-700 text-lg max-w-3xl mx-auto">
              The system adapts to the US, Europe, Mexico, and more — bringing
              consistent enquiries from couples ready to plan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 bg-white border border-slate-200 rounded-xl">
              <h3 className="text-xl font-serif mb-3">France ↔ US Planner</h3>
              <ul className="space-y-2 text-slate-700">
                <li>
                  <CheckCircle className="inline text-sky-600" /> 50+ enquiries
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" /> 6 bookings
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" /> €120K–190K
                  budgets
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-slate-200 rounded-xl">
              <h3 className="text-xl font-serif mb-3">US ↔ Mexico Planner</h3>
              <ul className="space-y-2 text-slate-700">
                <li>
                  <CheckCircle className="inline text-sky-600" /> 28 enquiries
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" /> 4 bookings
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-slate-200 rounded-xl">
              <h3 className="text-xl font-serif mb-3">Italy Planner</h3>
              <ul className="space-y-2 text-slate-700">
                <li>
                  <CheckCircle className="inline text-sky-600" /> 8 enquiries in
                  6 weeks
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" /> €1,200 ad
                  spend
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ------------------------------ PRICING ------------------------------ */}
        <section className="px-6 lg:px-12 py-28 bg-slate-900 text-white">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-slate-400 mb-4">
              INVESTMENT
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Simple, Transparent Pricing
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-slate-800 p-10 border border-slate-700 rounded-xl">
              <h3 className="text-2xl font-serif text-sky-400 mb-4">
                Wedding Growth System™
              </h3>
              <p className="text-slate-300 mb-6">
                Ongoing optimisation for consistent enquiries.
              </p>

              <ul className="text-slate-300 space-y-2 mb-8">
                <li className="text-slate-400 line-through">€1,780 setup</li>
                <li className="text-white text-xl font-semibold">
                  €980 setup — one time
                </li>
                <li>✔ High-intent targeting strategy</li>
                <li>✔ Campaign build</li>
                <li>✔ Tracking setup</li>
                <li className="bg-sky-900/40 border border-sky-500 text-sky-300 px-4 py-2 rounded-lg font-semibold">
                  ✔ Free Conversion Landing Page{" "}
                  <span className="text-sky-200">(Worth €800)</span>
                </li>
                <li className="pt-4 text-slate-400 line-through">€980/month</li>
                <li className="text-white text-xl font-semibold">€480/month</li>
                <li>✔ Weekly optimisation</li>
                <li>✔ Clear monthly insights</li>
              </ul>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-lg"
              >
                Talk About Your Numbers <ArrowRight size={20} />
              </Link>
            </div>

            <div className="bg-slate-800 p-10 border border-slate-700 rounded-xl">
              <h3 className="text-2xl font-serif text-sky-400 mb-4">
                VIP 24-Hour Launch™ + 3 Months Support
              </h3>
              <p className="text-slate-300 mb-6">
                A premium, fast-launch experience.
              </p>

              <ul className="text-slate-300 space-y-2 mb-8">
                <li className="text-slate-400 line-through">€2,300 one-time</li>
                <li className="text-white text-xl font-semibold">
                  €1,470 — one time
                </li>
                <li>✔ Full campaign in 24 hours</li>
                <li>✔ High-intent strategy</li>
                <li>✔ Tracking + forms</li>

                <li className="pt-4">Includes 3 months:</li>
                <li>✔ Monthly review</li>
                <li>✔ Keyword refinement</li>
                <li>✔ Growth roadmap</li>
              </ul>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-lg"
              >
                Book Your VIP Launch <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* ------------------------------ CTA ------------------------------ */}
        <section className="px-6 lg:px-12 py-24 text-center bg-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl font-serif text-slate-900 mb-6">
              Ready to Bring In Better Enquiries?
            </h3>
            <p className="text-lg text-slate-700 mb-10">
              If you're done with unpredictable leads, The Wedding Growth
              System™ will change how your business attracts couples.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-sky-600 text-white text-lg hover:bg-sky-700 rounded-full shadow-lg"
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
