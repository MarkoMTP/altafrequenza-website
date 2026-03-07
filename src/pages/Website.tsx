import {
  ArrowRight,
  Monitor,
  MousePointerClick,
  Layout,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function WebsitesPage() {
  return (
    <>
      <Helmet>
        <title>
          Websites & Landing Pages for Wedding Planners | Alta Frequenza
        </title>

        <meta
          name="description"
          content="Modern websites and landing pages for wedding planners designed to turn interested visitors into high quality wedding requests."
        />

        <meta
          name="keywords"
          content="wedding planner website design, destination wedding planner website, wedding landing pages, luxury wedding planner website, conversion website wedding planner"
        />
      </Helmet>

      <div className="bg-white pt-20">
        <section className="px-6 lg:px-12 py-32 text-center bg-gradient-to-b from-sky-50 to-white">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 text-sm uppercase tracking-wide text-slate-600 mb-8 rounded-full">
              <Monitor size={16} className="text-sky-600" />
              Websites for Wedding Planners
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6 leading-tight">
              Turn Your Website Into a Steady Source of High Quality Wedding
              Requests
            </h1>

            <p className="text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto mb-8">
              We help wedding planners go from a slow, outdated website that
              attracts low budget requests and confuses couples to a modern
              luxury website that turns interested visitors into qualified
              wedding requests.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-sky-600 text-white text-lg hover:bg-sky-700 transition-all rounded-full shadow-md"
            >
              Discuss Your Website
              <ArrowRight size={22} />
            </Link>
          </div>
        </section>

        <section className="px-6 lg:px-12 py-24 bg-white">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-sky-600 mb-4">
              HOW WE CREATE THE RESULT
            </p>

            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
              We Redesign the Entire Visitor Journey
            </h2>

            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              We build conversion focused websites specifically for wedding
              planners or venues, where every page is structured to guide
              couples from inspiration, to trust, to wedding request.
            </p>
          </div>

          <div className="space-y-24 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-14 h-14 flex items-center justify-center bg-sky-600 text-white rounded-full mb-5">
                  <Layout size={24} />
                </div>

                <h3 className="text-3xl font-serif mb-4">
                  1. A Modern Website Built for Luxury Positioning
                </h3>

                <p className="text-slate-700 text-lg mb-6">
                  The first thing couples notice is how your website feels. If
                  it looks old, cluttered, or difficult to use, they immediately
                  question the level of service behind it.
                </p>

                <ul className="space-y-2 text-slate-700 text-lg">
                  <li>✔ Fast, modern design</li>
                  <li>✔ Premium visual presentation</li>
                  <li>✔ Mobile first experience</li>
                  <li>✔ A stronger first impression from the first second</li>
                </ul>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80"
                  alt="Elegant website design for wedding planners"
                  className="w-full h-[320px] object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80"
                  alt="Couple browsing wedding planner website"
                  className="w-full h-[320px] object-cover"
                />
              </div>

              <div className="order-1 md:order-2">
                <div className="w-14 h-14 flex items-center justify-center bg-sky-600 text-white rounded-full mb-5">
                  <MousePointerClick size={24} />
                </div>

                <h3 className="text-3xl font-serif mb-4">
                  2. Clear Storytelling That Builds Trust
                </h3>

                <p className="text-slate-700 text-lg mb-6">
                  Most planners/venues show beautiful weddings, but couples
                  still leave unsure. We make the message clearer, so the right
                  visitors understand your value, your style, and why you feel
                  worth contacting.
                </p>

                <ul className="space-y-2 text-slate-700 text-lg">
                  <li>✔ Clear messaging for high end destination couples</li>
                  <li>✔ Stronger trust throughout the page</li>
                  <li>✔ Pages structured around decision making</li>
                  <li>✔ A smoother path toward contacting you</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-14 h-14 flex items-center justify-center bg-sky-600 text-white rounded-full mb-5">
                  <TrendingUp size={24} />
                </div>

                <h3 className="text-3xl font-serif mb-4">
                  3. A Website That Converts More of the Traffic You Already
                  Have
                </h3>

                <p className="text-slate-700 text-lg mb-6">
                  If you are already running Google Ads, posting on Instagram,
                  or getting referrals, a stronger website helps convert more of
                  that traffic into real wedding requests.
                </p>

                <ul className="space-y-2 text-slate-700 text-lg">
                  <li>
                    ✔ Inquiry forms designed to attract better budget weddings
                  </li>
                  <li>✔ Better page structure for conversions</li>
                  <li>
                    ✔ Faster loading speed and stronger mobile performance
                  </li>
                  <li>✔ SEO foundations so couples can actually find you</li>
                </ul>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80"
                  alt="Wedding planner working on laptop"
                  className="w-full h-[320px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-12 py-24 bg-sky-50">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-sky-700 mb-4">
              WHY THIS WORKS
            </p>

            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
              Because Most Wedding Planner/Venue Websites Work Like Portfolios,
              Not Client Acquisition Systems
            </h2>

            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Many wedding websites look nice, but they do not guide couples
              through the decision process. So couples browse, feel unsure, and
              leave. When a website is structured correctly, it builds trust
              quickly, positions you as a premium planner/venue, and makes
              contacting you feel like the natural next step.
            </p>
          </div>

          <ul className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto text-lg text-slate-700">
            <li>✔ Stronger first impression</li>
            <li>✔ More trust from high quality couples</li>
            <li>✔ Better conversion from traffic you already have</li>
            <li>✔ Fewer confused visitors leaving the site</li>
            <li>✔ A clearer premium position in your market</li>
            <li>✔ More wedding requests from the right type of couples</li>
          </ul>
        </section>

        <section className="px-6 lg:px-12 py-28 bg-white">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-sky-600 mb-4">
              WHAT MAKES US DIFFERENT
            </p>

            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
              Not Just a Beautiful Website
            </h2>

            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Most designers focus on making a site look good. We focus on
              making it perform. That means building websites specifically for
              wedding planners or venues, with the psychology, structure, and
              flow needed to turn visitors into wedding requests.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-sky-600 mb-3">
                Built for Wedding Planners and Venues
              </h3>
              <p className="text-slate-700">
                Your site is shaped around how couples actually choose a
                planner, not around generic design trends.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-sky-600 mb-3">
                Focused on Better Wedding Requests
              </h3>
              <p className="text-slate-700">
                The goal is not just more traffic. The goal is more of the right
                couples contacting you.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-sky-600 mb-3">
                Designed to Work With Your Marketing
              </h3>
              <p className="text-slate-700">
                Whether visitors come from ads, Instagram, Pinterest, or
                referrals, the site is built to convert more of them.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-12 py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-sky-600 mb-4">
              CASE STUDIES
            </p>

            <h2 className="text-4xl font-serif text-slate-900 mb-6">
              Real Improvements in Wedding Requests
            </h2>

            <p className="text-lg text-slate-700">
              When a website is structured correctly, couples understand your
              value faster, trust the brand more, and feel confident sending a
              wedding request.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* ITALY DESTINATION PLANNER */}
            <div className="bg-white p-8 border border-slate-200 rounded-xl shadow-sm">
              <div className="rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80"
                  alt="Destination wedding planner website example"
                  className="w-full h-[220px] object-cover"
                />
              </div>

              <h3 className="text-xl font-serif mb-4">
                Italian Destination Wedding Planner
              </h3>

              <ul className="space-y-2 text-slate-700">
                <li>
                  <CheckCircle size={18} className="inline text-sky-600 mr-2" />
                  Website redesigned with modern luxury positioning
                </li>

                <li>
                  <CheckCircle size={18} className="inline text-sky-600 mr-2" />
                  Clearer structure guiding couples toward contacting the
                  planner
                </li>

                <li>
                  <CheckCircle size={18} className="inline text-sky-600 mr-2" />
                  Wedding requests increased from 5 per month to 11 per month
                </li>

                <li>
                  <CheckCircle size={18} className="inline text-sky-600 mr-2" />
                  Higher average wedding budgets after redesign
                </li>
              </ul>
            </div>

            {/* NEW YORK PLANNER */}
            <div className="bg-white p-8 border border-slate-200 rounded-xl shadow-sm">
              <div className="rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80"
                  alt="Luxury wedding planner website example"
                  className="w-full h-[220px] object-cover"
                />
              </div>

              <h3 className="text-xl font-serif mb-4">
                New York Wedding Planner
              </h3>

              <ul className="space-y-2 text-slate-700">
                <li>
                  <CheckCircle size={18} className="inline text-sky-600 mr-2" />
                  Outdated portfolio style website replaced with conversion
                  structure
                </li>

                <li>
                  <CheckCircle size={18} className="inline text-sky-600 mr-2" />
                  Stronger messaging for high end couples
                </li>

                <li>
                  <CheckCircle size={18} className="inline text-sky-600 mr-2" />
                  Wedding requests increased from 8 per month to 17 per month
                </li>

                <li>
                  <CheckCircle size={18} className="inline text-sky-600 mr-2" />
                  More qualified couples reaching out through the website
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-12 py-28 bg-slate-900 text-white">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-slate-400 mb-4">
              NEXT STEPS
            </p>

            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              See What Your Website Could Be Doing Better
            </h2>

            <p className="text-slate-300 max-w-3xl mx-auto text-lg">
              Solutions like this typically start around €1,800 depending on the
              size of the site and the level of optimization. The next step is a
              short call where we look at your current website, identify where
              couples are dropping off, and outline exactly how we would
              redesign it to increase wedding requests and attract higher budget
              weddings.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-800 p-10 border border-slate-700 rounded-xl">
              <h3 className="text-2xl font-serif text-sky-400 mb-4">
                Websites and Landing Pages for Wedding Planners and Venues
              </h3>

              <p className="text-slate-300 mb-6">
                Built for planners/venues who want a more modern online presence
                and a website that turns more visitors into high quality wedding
                requests.
              </p>

              <ul className="text-slate-300 space-y-2 mb-8">
                <li>✔ Modern luxury design</li>
                <li>✔ Conversion focused structure</li>
                <li>✔ Mobile and speed optimization</li>
                <li>✔ Inquiry forms designed for better fit couples</li>
                <li>✔ SEO foundations</li>
                <li>✔ Built around trust, positioning, and requests</li>
              </ul>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-lg"
              >
                Book a Short Call
                <ArrowRight size={20} />
              </Link>

              <p className="text-slate-400 text-sm mt-5">
                If it looks like a good fit, we secure the investment and begin
                building the new site.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
