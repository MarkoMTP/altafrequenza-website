import { Helmet } from "react-helmet-async";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>
          About Marko Matković | Wedding Planner & Venue Marketing Specialist |
          Alta Frequenza
        </title>

        <meta
          name="description"
          content="Learn more about Marko Matković, founder of Alta Frequenza — a marketing agency specialized in wedding planners and wedding venues. Discover why Alta Frequenza was created and how our focused approach helps wedding businesses get the visibility and inquiries they deserve."
        />

        <meta
          name="keywords"
          content="
            about alta frequenza,
            about marko matkovic,
            wedding planner marketing,
            wedding venue marketing,
            marketing for wedding planners,
            marketing for wedding venues,
            google ads wedding planner,
            social media for wedding planners
          "
        />

        <meta
          property="og:title"
          content="About Alta Frequenza | Wedding Planner & Venue Marketing"
        />
        <meta
          property="og:description"
          content="Founded by Marko Matković, Alta Frequenza focuses exclusively on helping wedding planners and venues grow through specialized marketing systems."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
      </Helmet>

      <div className="bg-white text-slate-900">
        {/* HERO */}
        <section className="min-h-[60vh] flex items-center px-6 lg:px-12 pt-24 pb-16 bg-gradient-to-b from-sky-50 via-white to-slate-50">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1.3fr,1fr] gap-12 items-center">
            {/* TEXT */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 text-xs tracking-[0.25em] rounded-full shadow-sm uppercase font-semibold">
                <Sparkles size={16} />
                About Alta Frequenza
              </div>

              <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6 text-slate-900">
                I'm Marko Matković and I built a marketing system made
                specifically for wedding planners and venues.
              </h1>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Most agencies work with restaurants, real estate, dentists,
                e-commerce… I chose one world and went all-in: wedding
                businesses.
              </p>

              <p className="text-base text-slate-700 leading-relaxed">
                Because planners and venues don’t need random marketing. They
                need clarity, trust, and a predictable flow of the right
                couples.
              </p>
            </div>

            {/* FOUNDER IMAGE / CARD */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm bg-white border border-slate-200 rounded-3xl shadow-md p-6 flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-full overflow-hidden mb-4 bg-slate-100">
                  <img
                    src="https://www.dropbox.com/scl/fi/hsv6bsy3n85vbmxyljd4h/myself.JPG?rlkey=93y62fxttby3uwmzwj0or1k39&st=kjs4nish&raw=1"
                    alt="Founder, Marko Matković"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-serif text-slate-900 mb-1">
                  Marko Matković
                </h2>
                <p className="text-xs tracking-[0.2em] uppercase text-sky-700 mb-3">
                  Founder · Alta Frequenza
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Specialized in marketing for wedding planners & venues,
                  working with businesses across different regions and markets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ORIGIN STORY */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-sky-600 mb-4 font-semibold">
              HOW ALTA FREQUENZA STARTED
            </p>

            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">
              From “invisible” talent to a specialized partner for wedding
              businesses
            </h2>

            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>
                Before officially launching Alta Frequenza Marketing, I was
                already working behind the scenes with wedding planners and
                venues, while also managing marketing for my family’s business.
              </p>

              <p>
                After working with a dozen venues and wedding planners, I kept
                seeing the same pattern: incredible work, beautiful weddings and
                happy couples but inconsistent inquiries and visibility.
              </p>

              <p>
                Couples search differently. They compare differently. They book
                differently. And no general marketing agency truly understood
                that.
              </p>

              <p>
                That’s why in <strong>2025</strong>, I officially launched{" "}
                <strong>Alta Frequenza Marketing</strong>, not as a generic
                agency, but as a specialist focused only on wedding planners and
                wedding venues. The goal was simple: build a system that finally
                matches the quality of your work with the visibility you
                deserve.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT MAKES YOU DIFFERENT */}
        <section className="py-20 px-6 lg:px-12 bg-slate-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-sky-600 mb-4 font-semibold">
              WHY I CHOSE ONE INDUSTRY
            </p>

            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">
              I don’t try to be the best at everything, just at wedding
              marketing.
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              While most agencies split their attention across 20 different
              niches, I decided to master one:{" "}
              <strong>wedding planners and venues</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-10 text-slate-700 text-sm md:text-base">
              <div className="space-y-3">
                <p>
                  I’ve built a system around how couples really behave when
                  they’re planning a wedding:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    What high-budget and mid-budget couples actually search for
                  </li>
                  <li>
                    How destination couples compare planners in different
                    regions
                  </li>
                  <li>
                    Why some locations convert instantly and others need more
                    trust-building
                  </li>
                  <li>Which keywords help filter out low-budget leads</li>
                </ul>
              </div>

              <div className="space-y-3">
                <p>
                  I also focus on how your online presence supports those
                  decisions:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>How Instagram influences the final choice</li>
                  <li>
                    What kind of content makes couples feel safe reaching out
                  </li>
                  <li>
                    How to make your brand look as professional as the weddings
                    you plan
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-8 text-lg text-slate-800 leading-relaxed">
              This specialization is why the system works and it’s built on real
              inquiry behavior, not guesswork.
            </p>
          </div>
        </section>

        {/* MISSION & PHILOSOPHY */}
        <section className="py-24 px-6 lg:px-12 bg-slate-900 text-white">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-sky-300 mb-4 font-semibold">
              MY PHILOSOPHY
            </p>

            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Helping wedding planners and venues get the clients their work
              deserves
            </h2>

            <div className="space-y-5 text-lg text-slate-100 leading-relaxed">
              <p>
                My mission is simple:{" "}
                <strong>
                  help wedding businesses get the right couples, consistently
                </strong>
                .
              </p>

              <p>
                I don’t believe planners should lose clients to competitors with
                weaker work but better marketing. Yet that’s what happens every
                day when visibility and trust are missing.
              </p>

              <p>
                Marketing should feel predictable, not chaotic. It should
                support your business, not drain your time or energy. And it
                should be built around how couples actually choose a planner and
                not around the latest social trend.
              </p>

              <p>For me, everything comes back to three things:</p>

              <ul className="space-y-2 list-disc list-inside text-slate-100">
                <li>
                  <strong>Visibility</strong> — so couples can finally see you.
                </li>
                <li>
                  <strong>Trust</strong> — so they feel safe choosing you.
                </li>
                <li>
                  <strong>Consistency</strong> — so inquiries don’t depend on
                  luck or “good months”.
                </li>
              </ul>

              <p>
                When those three work together, your business stops relying on
                chance and starts growing on purpose.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 lg:px-12 bg-gradient-to-r from-sky-50 to-slate-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">
              If you’re serious about growing your wedding business, let’s talk.
            </h2>

            <p className="text-lg text-slate-700 mb-10 leading-relaxed">
              Whether you’re a planner or a venue, if you want clearer
              marketing, stronger visibility, and more aligned couples in your
              inbox, I’d be happy to see if we’re a good fit to work together.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-sky-600 text-white text-lg tracking-wide hover:bg-sky-700 transition-all rounded-full shadow-lg"
            >
              Book a Strategy Session
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
