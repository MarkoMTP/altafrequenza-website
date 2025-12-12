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
      title: "Wedding Planner Growth System™",
      subtitle: "Google Ads",
      description:
        "A Google Ads system tailored for wedding planners who want a predictable flow of high-intent inquiries from couples seeking a premium, professionally guided wedding - locally or internationally.",
      features: [
        "Precision luxury keyword targeting",
        "High-quality inquiries from US, UK, UAE & beyond",
        "Pre-qualification system for filtering low budgets",
        "Weekly optimization + monthly clarity reports",
      ],
      path: "/growth-system",
    },
    {
      icon: Sparkles,
      title: "Elegant Presence™",
      subtitle: "Social Media Management",
      description:
        "A high-end social media presence crafted to elevate your brand and build trust with couples. Your weddings deserve to look as exquisite online as they do in real life.",
      features: [
        "Curated content for a premium aesthetic",
        "Stories, reels & weekly posting",
        "Brand personality + trust-building captions",
        "Content tailored for international buyers",
      ],
      path: "/social-media",
    },
    {
      icon: Bot,
      title: "AI Wedding Planner Assistant™",
      subtitle: "24/7 AI Lead Capture",
      description:
        "Your on-brand AI assistant that responds instantly to inquiries, qualifies leads, answers questions, and books calls — even when you're busy planning weddings.",
      features: [
        "Instant automated responses",
        "Lead capture + qualification",
        "Fully branded to your voice and process",
        "Works 24/7 for international couples",
      ],
      path: "/ai-chat-assistant",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Alta Frequenza Marketing | Wedding Planner Marketing Agency
        </title>
        <meta
          name="description"
          content="Alta Frequenza Marketing helps destination wedding planners attract predictable, high-quality inquiries from  couples using Google Ads, social media, and automation."
        />
        <meta
          name="keywords"
          content=" wedding planner marketing, Google Ads for wedding planners, destination wedding marketing, social media management wedding planners"
        />
      </Helmet>

      <div className="bg-white">
        {/* HERO */}
        <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 border border-neutral-200 text-sm tracking-wide text-neutral-600">
              <Sparkles size={16} className="text-amber-600" />
              Marketing for Wedding Planners
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-8 text-neutral-900">
              The Only Marketing Agency Built Exclusively for Wedding Planners
              <br />
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-6">
              At Alta Frequenza, we don’t work with “multiple niches.” We
              specialize 100% in wedding planners — their marketing, their
              brand, their growth.
            </p>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white text-base tracking-wide hover:bg-neutral-800 transition-all"
            >
              Book Your Private Strategy Session
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </section>

        {/* IN 2025, BOOKING REQUIRES MORE THAN LEADS */}
        <section className="py-32 px-6 lg:px-12 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-8">
              In 2025, Booking Couples Requires More Than Just Leads
            </h2>

            <p className="text-lg text-neutral-700 mb-6 leading-relaxed max-w-3xl mx-auto">
              Today’s couples don’t inquire after seeing one post, one ad, or
              one testimonial. They research across{" "}
              <strong>8–15 touchpoints</strong> before choosing their wedding
              planner — and they expect consistency, professionalism, and trust
              at every stage.
            </p>

            <p className="text-lg text-neutral-700 mb-6 leading-relaxed max-w-3xl mx-auto">
              This means your entire digital presence must work together: your
              website, Google Ads, and Instagram should all communicate the same
              message: reliability, expertise, and the ability to deliver an
              unforgettable wedding experience.
            </p>

            <p className="italic text-neutral-800 text-lg max-w-3xl mx-auto">
              Leads matter… but trust is what makes couples book.
            </p>
          </div>
        </section>

        {/* WHY GOOGLE ADS WORK */}
        <section className="py-32 px-6 lg:px-12 bg-white border-t border-neutral-200">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-8">
              Why Google Ads Work Exceptionally Well for Wedding Planners
            </h2>

            <p className="text-lg text-neutral-700 mb-6 leading-relaxed max-w-3xl mx-auto">
              Couples search for wedding planners thousands of times every month
              — from “wedding planner Italy” to “planner Lake Como,” “Los
              Angeles Wedding Planner” and everything in between. When they
              search, they are already in <strong>decision-making mode</strong>.
            </p>

            <p className="text-lg text-neutral-700 mb-6 leading-relaxed max-w-3xl mx-auto">
              Google Ads captures couples at the exact moment they want to hire
              someone. They’re not passive scrollers, they’re actively planning,
              comparing, and ready to inquire. That’s why our Google Ads systems
              deliver consistent, high-quality inquiries for planners around the
              world.
            </p>

            <p className="italic text-neutral-800 text-lg max-w-3xl mx-auto">
              With the right strategy, Google becomes your most predictable lead
              engine.
            </p>
          </div>
        </section>

        {/* WHY INSTAGRAM STILL MATTERS */}
        <section className="py-32 px-6 lg:px-12 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-8">
              Why Instagram Still Matters in 2025
            </h2>

            <p className="text-lg text-neutral-700 mb-6 leading-relaxed max-w-3xl mx-auto">
              Even when couples discover you through Google Ads or referrals,
              one of the first things they check is your Instagram. It’s where
              they evaluate your taste, personality, creativity, and
              consistency.
            </p>

            <p className="text-lg text-neutral-700 mb-6 leading-relaxed max-w-3xl mx-auto">
              A polished, well-curated Instagram builds{" "}
              <strong>trust and desire</strong>. It reassures couples that you
              can deliver a celebration worthy of their investment and it
              communicates your brand style far better than text on a website.
            </p>

            <p className="italic text-neutral-800 text-lg max-w-3xl mx-auto">
              Instagram doesn’t create demand, it confirms it.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-sm tracking-widest text-neutral-500 mb-4">
                OUR SERVICES
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">
                Growth Solutions for
                <br />
                Wedding Planners
              </h2>
            </div>

            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-2 gap-12 items-start border-t border-neutral-200 pt-16"
                >
                  <div>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-900 text-white mb-6">
                      <service.icon size={28} />
                    </div>
                    <h3 className="text-3xl font-serif text-neutral-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm tracking-wide text-amber-600 mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link
                      to={service.path}
                      className="inline-flex items-center gap-2 text-neutral-900 hover:gap-3 transition-all"
                    >
                      Learn More <ChevronRight size={16} />
                    </Link>
                  </div>

                  <div className="bg-neutral-50 p-8">
                    <h4 className="text-sm tracking-wide font-medium text-neutral-900 mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-neutral-700"
                        >
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
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

        {/* PACKAGES SECTION */}
        <section className="py-24 px-6 lg:px-12 bg-white border-t border-neutral-200">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <p className="text-sm tracking-widest text-neutral-500 mb-4">
              OUR PACKAGES
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">
              Simple, Clear Packages for Every Stage of Growth
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto mt-6 leading-relaxed">
              Whether you need visibility, enquiries, automation — or all three
              — our packages give you exactly what you need to grow without
              confusion or guesswork.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* PACKAGE 1 */}
            <div className="bg-neutral-50 p-10 border border-neutral-300">
              <h3 className="text-2xl font-serif text-neutral-900 mb-3">
                ⭐ Visibility + Leads Suite
              </h3>
              <p className="text-neutral-600 mb-6">
                Ideal for planners who want predictable enquiries and a polished
                social media presence.
              </p>
              <ul className="space-y-3 text-neutral-700 mb-6">
                <li>✔ Google Ads Growth System™</li>
                <li>✔ Elegant Presence™ Social Media</li>
                <li>✔ Unified brand voice across ads + Instagram</li>
                <li>✔ Visibility and enquiries working together</li>
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-neutral-900 hover:gap-3 transition-all"
              >
                Learn More <ChevronRight size={16} />
              </Link>
            </div>

            {/* PACKAGE 2 */}
            <div className="bg-neutral-50 p-10 border border-neutral-300">
              <h3 className="text-2xl font-serif text-neutral-900 mb-3">
                ⭐ Automation Growth Suite
              </h3>
              <p className="text-neutral-600 mb-6">
                For planners who want enquiries AND automated responses,
                pre-qualification, and booking.
              </p>
              <ul className="space-y-3 text-neutral-700 mb-6">
                <li>✔ Google Ads Growth System™</li>
                <li>✔ AI Wedding Planner Assistant™</li>
                <li>✔ Instant replies + lead qualification</li>
                <li>✔ 24/7 automated follow-up</li>
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-neutral-900 hover:gap-3 transition-all"
              >
                Learn More <ChevronRight size={16} />
              </Link>
            </div>

            {/* PACKAGE 3 */}
            <div className="bg-neutral-50 p-10 border border-neutral-300">
              <h3 className="text-2xl font-serif text-neutral-900 mb-3">
                ⭐ Full Growth Suite
              </h3>
              <p className="text-neutral-600 mb-6">
                The complete growth engine: visibility, enquiries, and
                automation working together.
              </p>
              <ul className="space-y-3 text-neutral-700 mb-6">
                <li>✔ Google Ads Growth System™</li>
                <li>✔ Elegant Presence™ Social Media</li>
                <li>✔ AI Wedding Planner Assistant™</li>
                <li>✔ Your full marketing ecosystem — done for you</li>
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-neutral-900 hover:gap-3 transition-all"
              >
                Learn More <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* FRAMEWORK */}
        <section className="py-32 px-6 lg:px-12 bg-neutral-900 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-8">
              The 3-Pillar Growth Framework
            </h2>

            <p className="text-lg text-neutral-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Our system balances visibility, attraction, and consistency — the
              three elements couples look for when choosing a planner.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700">
                <h3 className="text-xl font-serif mb-4 text-amber-500">
                  Visibility
                </h3>
                <p className="text-neutral-300">
                  Strategic Google Ads positioning so couples searching for a
                  wedding planner find you first — at the exact moment they’re
                  ready to inquire.
                </p>
              </div>

              <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700">
                <h3 className="text-xl font-serif mb-4 text-amber-500">
                  Attraction
                </h3>
                <p className="text-neutral-300">
                  A curated social presence that elevates your brand and makes
                  wealthy couples feel confident and inspired.
                </p>
              </div>

              <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700">
                <h3 className="text-xl font-serif mb-4 text-amber-500">
                  Consistency
                </h3>
                <p className="text-neutral-300">
                  Automation and systems that capture, qualify, and follow up
                  with leads — even while you're planning weddings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDY OPT-IN */}
        <section className="py-24 px-6 lg:px-12 bg-neutral-50 border-t border-b border-neutral-200">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm tracking-widest text-neutral-500 mb-4">
              Case Study
            </p>

            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
              See How We Generated 35 Qualified Luxury Inquiries in 5 Months
            </h2>
            <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
              Discover the exact strategy used to attract high-spending couples
              — with multiple bookings and more in follow-up.
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
                className="flex-1 px-6 py-4 bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors"
              >
                Get the Case Study
              </button>
            </form>

            {status && (
              <p className="mt-4 text-sm text-neutral-700">{status}</p>
            )}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 px-6 lg:px-12 bg-amber-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
              Ready to Attract High-End International Couples?
            </h2>

            <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
              Book a private strategy session and discover how the Wedding
              Planner Growth System™ can turn your business into a predictable,
              high-quality inquiry machine.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 text-white text-lg tracking-wide hover:bg-neutral-800 transition-all"
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
