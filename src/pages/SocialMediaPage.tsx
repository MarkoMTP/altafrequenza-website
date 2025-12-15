import {
  Sparkles,
  Instagram,
  Calendar,
  MessageCircle,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function SocialMediaPage() {
  return (
    <>
      <Helmet>
        <title>
          Elegant Presence™ Social Media for Wedding Planners and Venues | Alta
          Frequenza Marketing
        </title>

        <meta
          name="description"
          content="Elegant Presence™ is a premium social media system for wedding planners and venues. High-end content, consistent posting, and intentional storytelling that attracts serious couples."
        />

        <meta
          name="keywords"
          content="social media for wedding planners, social media for wedding venues, instagram wedding planner, wedding planner marketing, wedding venue marketing, content creation wedding planners"
        />

        <meta property="og:title" content="Elegant Presence™ Social Media" />
        <meta
          property="og:description"
          content="A modern social presence built to attract high-quality couples and communicate taste, expertise, and consistency."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="bg-white pt-20">
        {/* HERO */}
        <section className="min-h-[70vh] flex items-center justify-center px-6 lg:px-12 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 border border-neutral-200 text-sm tracking-wide text-neutral-600">
              <Sparkles size={16} className="text-sky-600" />
              Social Media for Wedding Planners and Venues
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-slate-900 leading-tight mb-8">
              Elegant Presence™
            </h1>

            <p className="text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed mb-10">
              A refined social media system designed for wedding planners and
              venues who want a modern, elevated online presence that
              strengthens trust and attracts high-quality couples.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-sky-600 text-white text-lg rounded-full shadow-md hover:bg-sky-700 transition-all"
            >
              Strengthen Your Online Presence
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="py-24 px-6 lg:px-12 bg-slate-50">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs tracking-[0.25em] text-sky-600 mb-4">
              WHY YOUR PRESENCE MATTERS
            </p>

            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
              Couples decide in seconds whether they trust your brand
            </h2>

            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed mb-16">
              High-quality couples don’t book instantly, they research, compare,
              and decide based on taste, consistency, and trust. Your online
              presence is no longer optional, it is the reference point that
              determines whether they inquire or move on.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Inconsistent Posting",
                  desc: "Silence online makes your brand look inactive and lowers trust instantly.",
                },
                {
                  title: "Weak Storytelling",
                  desc: "Beautiful images alone are not enough. Couples need to understand your process and philosophy.",
                },
                {
                  title: "Generic Visual Identity",
                  desc: "Mismatched colors and random content dilute your professionalism.",
                },
                {
                  title: "Low Engagement",
                  desc: "Visibility without connection is wasted potential. Engagement strengthens trust.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 border border-neutral-200">
                  <div className="text-4xl mb-4">❌</div>
                  <h3 className="text-xl font-medium text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE SYSTEM */}
        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <p className="text-xs tracking-[0.25em] text-sky-600 mb-4">
              OUR APPROACH
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
              Elegant Presence™ done-for-you social media
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              We transform your Instagram into a modern portfolio that reflects
              your style, communicates your value, and builds trust that leads
              to real enquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                icon: <Instagram size={26} />,
                title: "High-end Content Direction",
                desc: "A cohesive aesthetic that reflects your signature style and attracts couples who appreciate quality.",
              },
              {
                icon: <Calendar size={26} />,
                title: "Consistent Posting",
                desc: "We handle planning, scheduling and publishing so your presence stays active and reliable.",
              },
              {
                icon: <MessageCircle size={26} />,
                title: "Relationship Building",
                desc: "Engagement with followers, couples and vendors to strengthen your visibility and network.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 p-8 border border-slate-200 rounded-2xl"
              >
                <div className="text-sky-600 mb-4">{item.icon}</div>
                <h3 className="text-2xl font-serif text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-700">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-xl text-slate-800 mb-2">
              Pricing starts at <strong>€800 per month</strong>
            </p>
            <p className="text-slate-500 mb-10">
              Final pricing depends on posting frequency, content creation and
              platforms.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-slate-900 text-white text-lg rounded-full hover:bg-slate-800 transition-all"
            >
              Request a Custom Quote
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {/* META GROWTH SYSTEM */}
        <section className="py-24 px-6 lg:px-12 bg-slate-900 text-white">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <p className="text-xs tracking-[0.25em] text-sky-400 mb-4">
              OPTIONAL ADD ON
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Meta Growth System™
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A simple expansion layer that uses Meta Ads to amplify your best
              content, reach thousands of couples each month, and strengthen
              visibility across multiple platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-3xl font-serif mb-6">
                Turn visibility into growth
              </h3>
              <p className="text-lg text-slate-300 mb-6">
                Meta Ads allow you to reach couples who already resonate with
                your content and attract new audiences similar to your best
                clients.
              </p>

              <ul className="space-y-3 text-slate-300">
                <li>
                  <CheckCircle size={18} className="inline text-sky-400 mr-2" />
                  Reach thousands of couples each month
                </li>
                <li>
                  <CheckCircle size={18} className="inline text-sky-400 mr-2" />
                  Retarget visitors and warm audiences
                </li>
                <li>
                  <CheckCircle size={18} className="inline text-sky-400 mr-2" />
                  Turn visibility into real enquiries
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 border border-slate-700 rounded-xl">
              <h4 className="text-2xl font-serif mb-4">Example Results</h4>
              <p className="text-slate-300">
                📈 +3,800 followers in three months
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-slate-300 mb-2">
              Add Meta Growth System™ for
            </p>
            <p className="text-3xl text-sky-400 font-serif mb-4">
              €500 per month
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition-all"
            >
              Add to Your Package
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 lg:px-12 bg-sky-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif text-slate-900 mb-6">
              Ready to Elevate Your Online Presence?
            </h2>
            <p className="text-lg text-slate-700 mb-10">
              If you want a modern social presence that attracts the right
              couples and reflects the quality of your work, Elegant Presence™
              is built for you.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all"
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
