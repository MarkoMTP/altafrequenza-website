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
          Google Ads for Wedding Planners | More Qualified Wedding Requests
        </title>
        <meta
          name="description"
          content="A Google Ads system for wedding planners designed to generate more qualified wedding requests from couples actively searching for a planner."
        />
        <meta
          name="keywords"
          content="wedding planner marketing, google ads wedding planner, wedding planner leads, destination wedding planner google ads, luxury wedding planner marketing, wedding marketing agency"
        />
      </Helmet>

      <div className="bg-white pt-20">
        {/* ------------------------------- HERO / OUTCOME -------------------------------- */}
        <section className="px-6 lg:px-12 py-32 text-center bg-gradient-to-b from-sky-50 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 text-sm uppercase tracking-wide text-slate-600 mb-8 rounded-full">
              <TrendingUp size={16} className="text-sky-600" />
              Google Ads for Wedding Planners
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6 leading-tight">
              More Qualified Wedding Requests. Less Guesswork.
            </h1>

            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto mb-6">
              We help wedding planners generate a more consistent flow of
              requests from couples actively searching for a planner, instead of
              relying only on referrals, Instagram reach, or slow seasons.
            </p>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
              The goal is simple: bring you more of the right requests, from
              couples who are already looking, already interested, and far more
              likely to take the next step.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-sky-600 text-white text-lg hover:bg-sky-700 transition-all rounded-full shadow-md"
            >
              Book Your Free Consultation
              <ArrowRight size={22} />
            </Link>
          </div>
        </section>

        {/* ----------------------------- MECHANISM ------------------------------- */}
        <section className="px-6 lg:px-12 py-28 bg-white">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-sky-600 mb-4">
              HOW WE GENERATE THE OUTCOME
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
              A Structured System Built Around Buying Intent
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              This is not about pushing ads in front of random people. The
              system is built to place your business in front of couples who are
              already searching for a wedding planner in the location you serve,
              then guide them toward a serious enquiry.
            </p>
          </div>

          <div className="space-y-28 max-w-5xl mx-auto">
            <div className="flex justify-center">
              <div className="max-w-3xl w-full">
                <div>
                  <div className="w-14 h-14 flex items-center justify-center bg-sky-600 text-white rounded-full mb-5">
                    <Search size={24} />
                  </div>
                  <h3 className="text-3xl font-serif mb-4">
                    1. We Put You in Front of Couples Already Searching
                  </h3>
                  <p className="text-slate-700 text-lg mb-6">
                    We target the kinds of searches people make when they are no
                    longer casually browsing, but actively looking for a planner
                    to help them move forward.
                  </p>

                  <ul className="space-y-2 text-slate-700 text-lg">
                    <li>✔ Search intent, not passive scrolling</li>
                    <li>✔ Locations aligned with your market</li>
                    <li>✔ Messaging built around serious enquiries</li>
                    <li>✔ Filtering to reduce low-quality clicks</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="max-w-3xl w-full">
                <div>
                  <div className="w-14 h-14 flex items-center justify-center bg-sky-600 text-white rounded-full mb-5">
                    <Target size={24} />
                  </div>
                  <h3 className="text-3xl font-serif mb-4">
                    2. We Turn Interest Into Requests
                  </h3>

                  <p className="text-slate-700 text-lg mb-6">
                    Getting the click is only the first step. We make sure the
                    message, the page, and the website experience are clear
                    enough that the right couples actually reach out.
                  </p>

                  <ul className="space-y-2 text-slate-700 text-lg">
                    <li>✔ Clear, trust-building ad messaging</li>
                    <li>✔ Conversion-focused landing page</li>
                    <li>✔ Request flow designed to reduce drop-off</li>
                    <li>
                      ✔ Pre-qualification that helps attract better-fit leads
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="max-w-3xl w-full">
                <div>
                  <div className="w-14 h-14 flex items-center justify-center bg-sky-600 text-white rounded-full mb-5">
                    <BarChart size={24} />
                  </div>
                  <h3 className="text-3xl font-serif mb-4">
                    3. We Refine the System Until It Becomes More Predictable
                  </h3>

                  <p className="text-slate-700 text-lg mb-6">
                    Once the system is live, we improve it continuously so lead
                    quality gets stronger, wasted spend gets reduced, and
                    performance becomes steadier over time.
                  </p>

                  <ul className="space-y-2 text-slate-700 text-lg">
                    <li>✔ Search-term filtering</li>
                    <li>✔ Keyword refinement</li>
                    <li>✔ Geographic performance reviews</li>
                    <li>✔ Messaging and conversion adjustments</li>
                    <li>✔ Budget and bid optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------- WHY IT WORKS --------------------------- */}
        <section className="px-6 lg:px-12 py-24 bg-sky-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-sky-700 mb-4">
              WHY THIS WORKS
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
              Because It Reaches Couples at the Exact Moment They’re Looking
            </h2>

            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Many marketing channels depend on timing, algorithms, or luck.
              Search-based advertising works differently: it places you in front
              of people who are already showing intent. That is why it can
              become one of the clearest paths to more consistent wedding
              enquiries.
            </p>
          </div>

          <ul className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto text-lg text-slate-700">
            <li>✔ Couples are already looking for what you offer</li>
            <li>✔ You appear before they enquire elsewhere</li>
            <li>✔ The message speaks to people ready to take action</li>
            <li>✔ Stronger positioning increases trust quickly</li>
            <li>✔ Better-fit enquiries reduce time wasted on poor leads</li>
            <li>✔ Ongoing refinement improves efficiency over time</li>
          </ul>
        </section>

        {/* ------------------------------ DIFFERENTIATOR ------------------------------ */}
        <section className="px-6 lg:px-12 py-28 bg-white">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-sky-600 mb-4">
              WHAT MAKES US DIFFERENT
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
              Not General Marketing. Wedding Industry-Specific Lead Generation.
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Most agencies know how to run ads. Very few understand how couples
              actually choose a wedding planner, what makes them trust one, and
              how to attract enquiries that feel aligned with your level of
              service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-sky-600 mb-3">
                Wedding-Specific Positioning
              </h3>
              <p className="text-slate-700">
                We build campaigns around how couples search for planners, what
                they care about, and what makes them feel confident enough to
                enquire.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-sky-600 mb-3">
                Quality Over Vanity Metrics
              </h3>
              <p className="text-slate-700">
                The goal is not traffic for the sake of traffic. The goal is
                better enquiries, stronger fit, and a system that supports real
                bookings.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-sky-600 mb-3">
                Built for Long-Term Consistency
              </h3>
              <p className="text-slate-700">
                We do not treat this like a short burst of activity. We build
                and refine the system to help you create steadier demand over
                time.
              </p>
            </div>
          </div>
        </section>

        {/* ------------------------------ SOCIAL PROOF ------------------------------ */}
        <section className="px-6 lg:px-12 py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-6xl mx-auto text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-sky-600 mb-4">
              CASE STUDIES
            </p>
            <h2 className="text-4xl font-serif text-slate-900 mb-4">
              Results Across Different Wedding Markets
            </h2>
            <p className="text-slate-700 text-lg max-w-3xl mx-auto">
              Below are example campaign outcomes showing duration, spend,
              enquiries, cost per lead, and weddings booked.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-white border border-slate-200 rounded-xl">
              <h3 className="text-lg font-serif mb-3">
                Italy Destination Planner
              </h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} /> 12
                  months
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} />{" "}
                  €3,000 / month spend
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} /> 144
                  requests
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} />{" "}
                  ~€250 CPL
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} /> 14
                  weddings booked
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-slate-200 rounded-xl">
              <h3 className="text-lg font-serif mb-3">New York City Planner</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} /> 9
                  months
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} />{" "}
                  $1,500 / month spend
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} /> 58
                  requests
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
                  requests
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} />{" "}
                  ~€225 CPL
                </li>
                <li>
                  <CheckCircle className="inline text-sky-600" size={18} /> 4
                  weddings booked
                </li>
              </ul>
            </div>

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
                  requests
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
              Results vary depending on pricing, market, offer strength,
              response speed, and seasonality — but the system is designed to
              create a steadier pipeline of qualified requests.
            </p>
          </div>
        </section>

        {/* ------------------------------ NEXT STEPS / INVESTMENT ------------------------------ */}
        <section className="px-6 lg:px-12 py-28 bg-slate-900 text-white">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-slate-400 mb-4">
              NEXT STEPS
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              See If This Makes Sense for Your Market
            </h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              If your goal is more qualified wedding requests, the next step is
              a conversation about your market, your pricing, and whether this
              system is the right fit for your business.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-800 p-10 border border-slate-700 rounded-xl">
              <h3 className="text-2xl font-serif text-sky-400 mb-4">
                Google Ads Management for Wedding Planners
              </h3>
              <p className="text-slate-300 mb-6">
                Built for planners who want a more predictable way to generate
                serious requests from couples actively looking to book.
              </p>

              <ul className="text-slate-300 space-y-2 mb-8">
                <li className="text-slate-400 line-through">€1,780 setup</li>
                <li className="text-white text-xl font-semibold">
                  €980 setup — one time
                </li>
                <li>✔ Campaign strategy and build</li>
                <li>✔ Tracking setup</li>
                <li className="bg-sky-900/40 border border-sky-500 text-sky-300 px-4 py-2 rounded-lg font-semibold">
                  ✔ Free conversion landing page{" "}
                  <span className="text-sky-200">(Worth €800)</span>
                </li>
                <li className="pt-4 text-slate-400 line-through">€980/month</li>
                <li className="text-white text-xl font-semibold">€480/month</li>
                <li>✔ Weekly optimisation</li>
                <li>✔ Ongoing performance management</li>
                <li>✔ Clear monthly insights</li>
              </ul>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-lg"
              >
                Talk About Your Market <ArrowRight size={20} />
              </Link>

              <p className="text-slate-400 text-sm mt-5">
                Recommended ad spend: €800+/month or equivalent. If it does not
                make sense for your market, we will tell you directly.
              </p>
            </div>
          </div>
        </section>

        {/* ------------------------------ FINAL CTA ------------------------------ */}
        <section className="px-6 lg:px-12 py-24 text-center bg-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl font-serif text-slate-900 mb-6">
              Ready to Build a More Predictable Wedding Requests System?
            </h3>
            <p className="text-lg text-slate-700 mb-10">
              Book a consultation and we’ll look at your market, positioning,
              and whether this is the right path for generating more of the
              right wedding requests.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-sky-600 text-white text-lg hover:bg-sky-700 rounded-full shadow-lg"
            >
              Contact Us
              <ArrowRight size={22} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
