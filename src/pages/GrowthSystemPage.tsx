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
        <title>
          Wedding Growth System™ | Google Ads for $10k+/€10k+ Wedding Planners
        </title>
        <meta
          name="description"
          content="A structured Google Ads system built for wedding planners charging $10k+/€10k+. Designed to bring consistent enquiries from couples actively searching right now."
        />
        <meta
          name="keywords"
          content="wedding planner marketing, google ads wedding planner, high end wedding planner leads, wedding planner google ads, wedding marketing agency, wedding ads specialist"
        />
      </Helmet>

      <div className="bg-white pt-20">
        {/* ------------------------------- HERO -------------------------------- */}
        <section className="px-6 lg:px-12 py-32 text-center bg-gradient-to-b from-sky-50 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 text-sm uppercase tracking-wide text-slate-600 mb-8 rounded-full">
              <TrendingUp size={16} className="text-sky-600" />
              Ads System for €10k / $10k+ Wedding Planners
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6 leading-tight">
              The Wedding Growth System™
            </h1>

            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto mb-6">
              A simple, structured ads system built for wedding planners who
              charge <strong>€10,000+ / $10,000+</strong> — designed to bring
              consistent enquiries from couples actively searching{" "}
              <strong>right now.</strong>
            </p>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
              Referrals and social media can be great… until they slow down.
              This system gives you a predictable way to generate enquiries —
              without relying on luck.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-sky-600 text-white text-lg hover:bg-sky-700 transition-all rounded-full shadow-md"
            >
              Talk About Your Numbers
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
              Demand Feels Random <br className="md:hidden" />
              (Even When Your Work Is Amazing)
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Most planners don’t struggle because of quality — they struggle
              because the right couples don’t find them at the right time. And
              when demand dips, you feel it immediately.
              <strong> The Growth System™ fixes the inconsistency.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-sky-600 mb-3">
                ❌ Unpredictable Referrals
              </h3>
              <p className="text-slate-700">
                Vendor networks and word-of-mouth fluctuate — you can’t control
                them.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-sky-600 mb-3">
                ❌ Algorithm Dependence
              </h3>
              <p className="text-slate-700">
                Social media reach changes constantly, even if you post
                consistently.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-sky-600 mb-3">
                ❌ No Demand Lever
              </h3>
              <p className="text-slate-700">
                Without an acquisition system, growth is guessing — not
                predictable.
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
              A Predictable Flow of High-Intent Enquiries
            </h2>

            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              This isn’t “run some ads and hope.” It’s a structured approach
              built around one thing: capturing couples who are already
              searching for a planner — in your city or your destination market.
            </p>
          </div>

          <ul className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto text-lg text-slate-700">
            <li>✔ Get found by couples actively searching</li>
            <li>✔ Attract higher-budget enquiries (not time-wasters)</li>
            <li>✔ Use messaging that builds trust instantly</li>
            <li>✔ Turn clicks into booked calls</li>
            <li>✔ Keep performance stable long-term</li>
            <li>✔ Works for US big cities and EU destination markets</li>
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
                    hire a planner, not people casually browsing or looking for
                    cheap options.
                  </p>

                  <ul className="space-y-2 text-slate-700 text-lg">
                    <li>✔ “Wedding planner [city]”</li>
                    <li>✔ “Full-service wedding planner [city]”</li>
                    <li>✔ “Destination wedding planner [location]”</li>
                    <li>✔ Filtering to reduce low-intent searches</li>
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
                    <li>✔ Included conversion landing page</li>
                    <li>✔ Pre-qualification prompts</li>
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
                    Lead quality rises, cost per enquiry stabilises, and
                    performance becomes predictable.
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
              EVIDENCE
            </p>
            <h2 className="text-4xl font-serif text-slate-900 mb-4">
              Proven Across Multiple Markets
            </h2>
            <p className="text-slate-700 text-lg max-w-3xl mx-auto">
              KPI-based results (no revenue claims): duration, spend, leads,
              CPL, and weddings booked.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Italy */}
            <div className="p-8 bg-white border border-slate-200 rounded-xl">
              <h3 className="text-lg font-serif mb-3">
                Italy Destination Planner
              </h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} /> 5
                  months
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} />{" "}
                  €1,200 / month spend
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} /> 38
                  leads
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} />{" "}
                  ~€150 CPL
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} /> 5
                  weddings booked
                </li>
              </ul>
            </div>

            {/* NYC */}
            <div className="p-8 bg-white border border-slate-200 rounded-xl">
              <h3 className="text-lg font-serif mb-3">New York City Planner</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} /> 9
                  months
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} />{" "}
                  $1500 / month spend
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} /> 58
                  leads
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} />{" "}
                  ~$220 CPL
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} /> 7
                  weddings booked
                </li>
              </ul>
            </div>

            {/* France + Italy */}
            <div className="p-8 bg-white border border-slate-200 rounded-xl">
              <h3 className="text-lg font-serif mb-3">
                France + Italy Destination Planner
              </h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} /> 3
                  months
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} />{" "}
                  €1,800 / month spend
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} /> 24
                  leads
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} />{" "}
                  ~€225 CPL
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} /> 2
                  weddings booked
                </li>
              </ul>
            </div>

            {/* Mexico */}
            <div className="p-8 bg-white border border-slate-200 rounded-xl">
              <h3 className="text-lg font-serif mb-3">
                Mexico Destination Planner
              </h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} /> 5
                  months
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} />{" "}
                  $1,500 / month spend
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} /> 40
                  leads
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} />{" "}
                  ~$188 CPL
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} /> 4
                  weddings booked
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center mt-14">
            <p className="text-slate-600">
              Results vary by offer, pricing, response speed, and seasonality —
              but the system is built to create a predictable pipeline.
            </p>
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
            <p className="text-slate-300 max-w-3xl mx-auto">
              One system. One goal: consistent, high-intent enquiries.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-800 p-10 border border-slate-700 rounded-xl">
              <h3 className="text-2xl font-serif text-sky-400 mb-4">
                Wedding Growth System™
              </h3>
              <p className="text-slate-300 mb-6">
                Built for planners charging €10k/$10k+ who want a predictable
                enquiry system.
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

              <p className="text-slate-400 text-sm mt-5">
                Recommended ad spend: €1,000+/month (or equivalent). We’ll tell
                you if it doesn’t make sense for your market.
              </p>
            </div>
          </div>
        </section>

        {/* ------------------------------ CTA ------------------------------ */}
        <section className="px-6 lg:px-12 py-24 text-center bg-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl font-serif text-slate-900 mb-6">
              Ready for a Predictable Enquiry System?
            </h3>
            <p className="text-lg text-slate-700 mb-10">
              Book a strategy session. We’ll look at your pricing, market, and
              current positioning — and map the numbers before you spend.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-sky-600 text-white text-lg hover:bg-sky-700 rounded-full shadow-lg"
            >
              Talk About Your Numbers
              <ArrowRight size={22} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
