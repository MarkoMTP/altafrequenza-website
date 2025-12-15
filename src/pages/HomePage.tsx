import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Bot,
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
      title: "Wedding Growth System™",
      subtitle: "Google Ads & Meta Ads",
      description:
        "Performance-focused ads for planners and venues who want consistent visibility and real inquiries — not random spikes, not 'likes', but couples actively searching for what you offer.",
      features: [
        "High-intent targeting for wedding search terms",
        "Inquiries from local & destination couples",
        "Budgets aligned with booking goals",
        "Weekly optimization + clear reporting",
      ],
      path: "/growth-system",
    },
    {
      icon: Sparkles,
      title: "Elegant Presence™",
      subtitle: "Social Media Management",
      description:
        "Instagram that actually helps you book clients — modern visuals, consistent posting, and trust-building content that makes couples feel confident reaching out.",
      features: [
        "Reels, stories & structured content planning",
        "Modern visual direction and styling",
        "Captions that build trust",
        "Content adapted for international audiences",
      ],
      path: "/social-media",
    },
    {
      icon: Bot,
      title: "AI Wedding Assistant™",
      subtitle: "24/7 Lead Capture",
      description:
        "A simple, on-brand AI assistant that replies instantly, answers key questions, and captures leads while you're planning weddings or hosting events.",
      features: [
        "Instant automated replies",
        "Basic qualification & info capture",
        "Brand-matched tone & answers",
        "Works 24/7 across time zones",
      ],
      path: "/ai-chat-assistant",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Wedding Planner & Venue Marketing Agency | Google Ads, Social Media &
          Lead Generation | Alta Frequenza
        </title>

        <meta
          name="description"
          content="Alta Frequenza is the only marketing agency specialized in wedding planners and wedding venues. We build modern, high-performing marketing systems using Google Ads, social media, and industry expertise to attract high-quality wedding inquiries."
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
      wedding marketing agency,
      destination wedding marketing,
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
          content="Specialized marketing for wedding planners & venues: Google Ads, social media, automation and lead generation."
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
              If You’re Not Visible, Your Competitors Are Booking Your Couples
            </h1>

            <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed mb-8">
              You’re not losing clients because of your work — you’re losing
              them because couples never even find you. We specialize
              exclusively in wedding planners and venues, creating visibility,
              trust, and systems that finally bring the right couples into your
              inbox.
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
            {/* IMAGE */}
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/public/hands.jpg"
                alt="Wedding planner workflow"
                className="w-full h-full object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="text-left">
              <p className="text-xs uppercase tracking-[0.25em] text-sky-600 mb-4 font-semibold">
                THE REAL PROBLEM
              </p>

              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Right Now, Someone Else Is Getting the Inquiry You Should Have
                Gotten
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Couples don’t spend weeks researching every planner. They choose
                the ones they *see first*. The ones who appear on Google, look
                professional, and feel trustworthy in seconds.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                If your marketing is invisible or unclear, couples move on —
                quietly — and book someone else.
              </p>

              <p className="italic text-slate-800 text-lg">
                This isn’t a talent problem. It’s a visibility problem.
              </p>
            </div>
          </div>
        </section>

        {/* GOOGLE ADS SECTION */}
        <section className="py-28 px-6 lg:px-12 bg-white border-t border-slate-200">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* TEXT */}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-sky-600 mb-4 font-semibold">
                GOOGLE ADS & SEARCH
              </p>

              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Your Competitors Are Running Ads. That’s Why They’re Booking
                More.
              </h2>

              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  Most couples start their journey on Google. “Wedding planner
                  near me.” “Wedding venue [your region].” The businesses that
                  appear first get the click — and the inquiry.
                </p>

                <p>
                  Google Ads puts you in those top positions *every single day*,
                  in front of couples who are ready to inquire.
                </p>

                <p className="font-medium text-slate-800">
                  If you’re not showing up there, you’re giving your competitors
                  an advantage.
                </p>
              </div>
            </div>

            {/* IMAGE */}
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/public/ads.jpg"
                alt="Google Ads dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* INSTAGRAM SECTION */}
        <section className="py-28 px-6 lg:px-12 bg-sky-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-sky-700 mb-4 font-semibold">
              SOCIAL MEDIA
            </p>

            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-8">
              Couples Judge You in 5 Seconds. Make Those Seconds Count.
            </h2>

            <div className="flex justify-center mb-10">
              <div className="w-64 h-[420px] bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
                <img
                  src="/public/feed.png"
                  className="w-full h-full object-cover"
                  alt="Instagram feed preview"
                />
              </div>
            </div>

            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Instagram is not “just content.” It’s proof. If your feed looks
              outdated or inconsistent, couples assume your service will be too.
              A strong, modern feed elevates your value and makes inquiries far
              more likely.
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
                  Builds trust before the inquiry
                </p>
              </div>

              <div className="text-center">
                <div className="w-10 h-10 bg-sky-400 text-white rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <Sparkles size={20} />
                </div>
                <p className="text-slate-700 text-sm">
                  Differentiates you from competitors
                </p>
              </div>
            </div>
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
                Real Systems for Real Growth
              </h2>
              <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
                Not hacks. Not trends. Just the three channels that actually
                move the needle for wedding businesses: paid ads, social media,
                and simple automation.
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
                            : "bg-gradient-to-br from-slate-700 to-slate-900"
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
              50 Real Inquiries. No Luck. No Trends. Just Structure.
            </h2>

            <p className="text-lg text-slate-700 mb-10 leading-relaxed">
              A wedding planner used our ad structure and simple content system
              to turn unpredictable months into consistent demand. Nothing
              viral. Nothing random. Just a predictable flow of qualified
              couples.
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
              Visibility Beats Talent When Couples Don’t Know You Exist
            </h2>

            <p className="text-lg text-slate-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              You can be the best planner or venue in your region — but if
              couples don’t see you, they can’t choose you. Visibility brings
              them in. Attraction convinces them. Consistency keeps your inbox
              full.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-xl font-serif mb-3 text-sky-300">
                  Visibility
                </h3>
                <p className="text-slate-200 text-sm md:text-base">
                  Paid ads and search positioning that finally make you visible
                  to couples already searching.
                </p>
              </div>

              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-xl font-serif mb-3 text-sky-300">
                  Attraction
                </h3>
                <p className="text-slate-200 text-sm md:text-base">
                  Strong social presence + modern branding that make couples
                  feel confident choosing you.
                </p>
              </div>

              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-xl font-serif mb-3 text-sky-300">
                  Consistency
                </h3>
                <p className="text-slate-200 text-sm md:text-base">
                  Automation and systems so inquiries are captured, answered,
                  and followed up — without chaos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 px-6 lg:px-12 bg-gradient-to-r from-sky-50 to-slate-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">
              If You Want More Weddings, Start With Your Visibility
            </h2>

            <p className="text-lg text-slate-700 mb-10 leading-relaxed">
              If you’re tired of slow months, unpredictable inquiries, and
              watching competitors book the couples you wanted, it’s time to fix
              the root problem — your visibility.
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
