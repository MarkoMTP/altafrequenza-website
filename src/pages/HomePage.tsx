import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Bot,
  Monitor,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://hook.eu2.make.com/r8dwvoxpigk5hpc205yy6hjib64b1obt",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      if (res.ok) {
        setStatus("✅ Thanks! Check your email for the guide.");
        setEmail("");
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Network error. Please try again.");
    }
  };

  const services = [
    {
      icon: TrendingUp,
      title: "Google Ads for Wedding Planners & Venues",
      subtitle: "Get found by couples already searching",
      description:
        "We build Google Ads systems around the psychology of couples actively searching for a planner or venue, so your business appears at the exact moment they are ready to take action and send a wedding request.",
      features: [
        "Campaigns built around high intent wedding searches",
        "Messaging shaped around how couples choose who to contact",
        "Ongoing optimisation based on performance and lead quality",
        "Strategy adapted to search behaviour, SEO shifts, and newer discovery trends",
      ],
      path: "/google-ads",
    },
    {
      icon: Sparkles,
      title: "Social Media Management",
      subtitle: "Build trust before couples even contact you",
      description:
        "We create a stronger social presence using the psychology of trust, taste, and first impressions, so couples discover your brand, feel more confident in your level, and become more likely to send a wedding request.",
      features: [
        "Content structured around trust and premium positioning",
        "Messaging tailored to how couples emotionally evaluate brands",
        "Consistent posting that strengthens visibility and credibility",
        "Creative direction designed for wedding planners and venues specifically",
      ],
      path: "/social-media",
    },
    {
      icon: Monitor,
      title: "Websites & Landing Pages",
      subtitle: "Turn more visitors into wedding requests",
      description:
        "Using the psychology of couples searching for a planner or venue, we structure websites and landing pages to move visitors from first impression to trust to contact in the most efficient way possible.",
      features: [
        "Modern websites built for luxury positioning and conversion",
        "Page structure based on how couples browse, compare, and decide",
        "SEO foundations adapted to newer search updates and GEO visibility in AI chatbots",
        "Landing pages designed to convert more traffic into wedding requests",
      ],
      path: "/website",
    },
    {
      icon: Bot,
      title: "AI Wedding Assistant",
      subtitle: "Capture leads even when you're unavailable",
      description:
        "An AI assistant that helps answer questions, guide interested couples, and capture leads on your website while you're busy planning weddings, in meetings, or offline.",
      features: [
        "Instant replies to common questions",
        "Lead capture from website visitors",
        "On brand tone and messaging",
        "Available 24/7 across time zones",
      ],
      path: "/ai-chat-assistant",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Wedding Planner & Venue Marketing Agency | Google Ads, Social Media,
          Websites & Lead Generation | Alta Frequenza
        </title>

        <meta
          name="description"
          content="Alta Frequenza helps wedding planners and wedding venues attract more wedding requests through strategic marketing, stronger positioning, modern websites, SEO, GEO, and better online visibility."
        />

        <meta
          name="keywords"
          content="
      wedding planner marketing,
      wedding venue marketing,
      wedding planner google ads,
      google ads for wedding planners,
      google ads for wedding venues,
      wedding planner social media,
      wedding venue social media,
      wedding planner website design,
      wedding venue website design,
      destination wedding planner website,
      SEO for wedding planners,
      GEO for wedding businesses,
      wedding marketing agency,
      marketing for wedding planners,
      marketing for wedding venues
    "
        />

        <meta
          property="og:title"
          content="Wedding Planner & Venue Marketing Agency"
        />
        <meta
          property="og:description"
          content="Specialized marketing for wedding planners and venues to help them attract more wedding requests and book more of the right couples."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
      </Helmet>

      <div className="bg-white text-slate-900">
        {/* HERO */}
        <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20 bg-gradient-to-b from-sky-50 via-white to-slate-50">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 text-sm tracking-wide rounded-full shadow-sm">
              <Sparkles size={16} />
              Marketing for Wedding Planners & Venues
            </div>

            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8 text-slate-900">
              Turn Your Marketing Into a Consistent Source of Wedding Requests
            </h1>

            <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed mb-8">
              We help wedding planners and wedding venues become easier to
              discover, more trusted at first glance, and more likely to receive
              wedding requests from couples already planning their wedding.
            </p>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-sky-600 text-white text-base tracking-wide hover:bg-sky-700 transition-all rounded-full shadow-lg"
            >
              Book a Strategy Session
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </section>

        {/* WHY VISIBILITY MATTERS */}
        <section className="py-28 px-6 lg:px-12 bg-slate-50 border-t border-slate-200">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://www.dropbox.com/scl/fi/nb6q6owhc1ig8pqlqp5z3/pexels-westernsydneyweddings-34525884.jpg?rlkey=79mvrch0bt7pnydwtpbx5h491&st=uuxgthdo&raw=1"
                alt="Wedding planner workflow"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-left">
              <p className="text-xs uppercase tracking-[0.25em] text-sky-600 mb-4 font-semibold">
                THE REAL PROBLEM
              </p>

              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                The Best Wedding Businesses Are Not Always the Ones Getting
                Contacted
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Couples rarely compare every planner or venue in a region.
                Usually, they contact the first few businesses that feel
                visible, professional, and trustworthy.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                If your business is hard to find or your online presence feels
                unclear, many couples simply move on without ever contacting
                you.
              </p>

              <p className="italic text-slate-800 text-lg">
                This is not just a service problem. It is often a visibility and
                trust problem.
              </p>
            </div>
          </div>
        </section>

        {/* DISCOVERY SECTION */}
        <section className="py-28 px-6 lg:px-12 bg-white border-t border-slate-200">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-sky-600 mb-4 font-semibold">
                HOW COUPLES DISCOVER YOU
              </p>

              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Most Couples Begin Their Search Online
              </h2>

              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  Before couples contact you, they search. They look for
                  planners, venues, ideas, and inspiration in the exact region
                  where they want to get married.
                </p>

                <p>
                  The businesses that get discovered first are usually the ones
                  that receive the first wedding requests and stay in the
                  running.
                </p>

                <p className="font-medium text-slate-800">
                  When your marketing is structured properly, couples searching
                  for weddings in your area are far more likely to find you
                  first.
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://www.dropbox.com/scl/fi/t8d3dzw1iy4498x5q7k26/ads.jpg?rlkey=uohsisrqbm7w8bwpezz60j61d&st=8at1dxhe&raw=1"
                alt="Search visibility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* FIRST IMPRESSIONS SECTION */}
        <section className="py-28 px-6 lg:px-12 bg-sky-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-sky-700 mb-4 font-semibold">
              FIRST IMPRESSIONS
            </p>

            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-8">
              Couples Form an Opinion About Your Brand in Seconds
            </h2>

            <div className="flex justify-center mb-10">
              <div className="w-64 h-[420px] bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
                <img
                  src="https://www.dropbox.com/scl/fi/jefa1g9vd54uzgl13lppv/Screenshot-2025-12-15-at-22.02.35.png?rlkey=pvgb938zsmgkjkw2mism7d60l&st=7r4ad30r&raw=1"
                  className="w-full h-full object-cover"
                  alt="Instagram feed preview"
                />
              </div>
            </div>

            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Before reaching out, many couples will quickly look at your
              website, your Instagram, and the way your brand presents itself. A
              stronger online presence increases confidence and makes a wedding
              request feel like a safer next step.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-10">
              <div className="text-center">
                <div className="w-10 h-10 bg-sky-400 text-white rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <Sparkles size={20} />
                </div>
                <p className="text-slate-700 text-sm">
                  Raises perceived value instantly
                </p>
              </div>

              <div className="text-center">
                <div className="w-10 h-10 bg-sky-400 text-white rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <Sparkles size={20} />
                </div>
                <p className="text-slate-700 text-sm">
                  Builds trust before the first message
                </p>
              </div>

              <div className="text-center">
                <div className="w-10 h-10 bg-sky-400 text-white rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <Sparkles size={20} />
                </div>
                <p className="text-slate-700 text-sm">
                  Helps you stand out from similar competitors
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SMALL DIFFERENTIATOR SECTION */}
        <section className="py-24 px-6 lg:px-12 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-sky-600 mb-4 font-semibold">
              WHY ALTA FREQUENZA
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">
              Built Specifically for Wedding Planners and Venues
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Unlike general marketing agencies, we work specifically with
              wedding planners and wedding venues. That means the messaging, the
              positioning, the website structure, and the strategy are shaped
              around how couples actually choose who to contact in the wedding
              industry. We also adapt our work to newer SEO changes and GEO,
              helping your business stay visible both in search engines and in
              AI driven discovery.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-24 px-6 lg:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.25em] text-sky-600 mb-4 font-semibold">
                OUR SERVICES
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">
                The Systems Behind More Wedding Requests
              </h2>
              <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
                We help wedding businesses become easier to find, stronger at
                first impression, and more consistent in turning online
                attention into real wedding requests.
              </p>
            </div>

            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-2 gap-12 items-start border-t border-slate-200 pt-16"
                >
                  <div>
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl text-white mb-6 shadow-md
                        ${
                          index === 0
                            ? "bg-gradient-to-br from-sky-400 to-sky-600"
                            : index === 1
                            ? "bg-gradient-to-br from-indigo-400 to-indigo-600"
                            : index === 2
                            ? "bg-gradient-to-br from-slate-700 to-slate-900"
                            : "bg-gradient-to-br from-emerald-500 to-emerald-700"
                        }
                      `}
                    >
                      <service.icon size={28} />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-serif text-slate-900 mb-2">
                      {service.title}
                    </h3>

                    <p className="text-sm tracking-wide text-sky-700 mb-4 uppercase">
                      {service.subtitle}
                    </p>

                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <Link
                      to={service.path}
                      className="inline-flex items-center gap-2 text-sky-700 hover:text-sky-900 hover:gap-3 transition-all text-sm font-medium"
                    >
                      Learn More <ChevronRight size={16} />
                    </Link>
                  </div>

                  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                    <h4 className="text-sm tracking-wide font-semibold text-slate-900 mb-4 uppercase">
                      Key Features
                    </h4>

                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-slate-700 text-sm md:text-base"
                        >
                          <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDY */}
        <section className="py-24 px-6 lg:px-12 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-sky-600 mb-4 font-semibold">
              CASE STUDY
            </p>

            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">
              Real Wedding Requests. More Predictability. Less Guesswork.
            </h2>

            <p className="text-lg text-slate-700 mb-10 leading-relaxed">
              We helped a wedding business create a more consistent flow of
              wedding requests by improving visibility, structure, and the way
              couples experienced the brand online.
            </p>

            <form
              onSubmit={handleEmailSubmit}
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 bg-white border border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-full"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-sky-600 text-white font-medium hover:bg-sky-700 transition-colors rounded-full shadow-md"
              >
                Get the Case Study
              </button>
            </form>

            {status && <p className="mt-4 text-sm text-slate-700">{status}</p>}
          </div>
        </section>

        {/* FRAMEWORK */}
        <section className="py-28 px-6 lg:px-12 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-sky-300 mb-4 font-semibold">
              OUR APPROACH
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              More Visibility. More Trust. More Consistent Wedding Requests.
            </h2>

            <p className="text-lg text-slate-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              Couples need to discover you, trust you quickly, and feel
              confident enough to contact you. Our approach is built around
              those three steps.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-xl font-serif mb-3 text-sky-300">
                  Visibility
                </h3>
                <p className="text-slate-200 text-sm md:text-base">
                  Help your business appear where couples are already looking
                  for planners and venues across search, social, SEO, and newer
                  AI driven discovery.
                </p>
              </div>

              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-xl font-serif mb-3 text-sky-300">Trust</h3>
                <p className="text-slate-200 text-sm md:text-base">
                  Create a stronger online presence that makes your brand feel
                  credible, polished, premium, and worth contacting.
                </p>
              </div>

              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-xl font-serif mb-3 text-sky-300">
                  Conversion
                </h3>
                <p className="text-slate-200 text-sm md:text-base">
                  Build systems that turn attention into wedding requests more
                  efficiently by matching how couples actually browse, compare,
                  and decide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 px-6 lg:px-12 bg-gradient-to-r from-sky-50 to-slate-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">
              Ready to Attract More Wedding Requests?
            </h2>

            <p className="text-lg text-slate-700 mb-10 leading-relaxed">
              If you want your marketing to stop feeling inconsistent and start
              bringing in more of the right couples, the next step is a simple
              conversation to see what would make the most sense for your
              business.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-sky-600 text-white text-lg tracking-wide hover:bg-sky-700 transition-all rounded-full shadow-lg"
            >
              Book Your Consultation
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
