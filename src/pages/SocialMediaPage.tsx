import {
  Sparkles,
  Instagram,
  Image,
  Calendar,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";

interface SocialMediaPageProps {
  onNavigate: (page: string) => void;
}

export default function SocialMediaPage({ onNavigate }: SocialMediaPageProps) {
  return (
    <div className="bg-white pt-20">
      {/* HERO */}
      <section className="min-h-[70vh] flex items-center justify-center px-6 lg:px-12 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 border border-neutral-200 text-sm tracking-wide text-neutral-600">
            <Sparkles size={16} className="text-amber-600" />
            Social Media for Luxury Wedding Planners
          </div>

          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8 text-neutral-900">
            Elegant Presence™
            <br />
            Social Media Management System
          </h1>

          <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto mb-12">
            Your online presence should feel as refined as the weddings you
            create. We manage your social media end-to-end — transforming your
            profile into a living portfolio that attracts luxury couples and
            builds trust effortlessly.
          </p>

          <Link
            to={"/contact"}
            className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 text-white text-lg tracking-wide hover:bg-neutral-800 transition-all"
          >
            Grow Your Social Presence
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-24 px-6 lg:px-12 bg-neutral-50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm tracking-widest text-neutral-500 mb-4">
            THE CHALLENGE
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
            Luxury Clients Judge You by Your Online Presence
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-16">
            Before they ever click “inquire,” high-end couples spend hours
            researching planners on Instagram and Pinterest. If your content
            doesn’t communicate elegance, precision, and consistency — you lose
            them instantly.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Inconsistent Posting",
                desc: "Irregular content makes your brand look inactive. Luxury clients expect excellence in every detail.",
              },
              {
                title: "Generic Visuals",
                desc: "Stock photos or mismatched colors dilute your identity and reduce credibility.",
              },
              {
                title: "Weak Storytelling",
                desc: "You’re showing what you do — not why it’s valuable or how it feels to work with you.",
              },
              {
                title: "Low Engagement",
                desc: "Even beautiful content needs strategy to reach and connect with your ideal audience.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 border border-neutral-200">
                <div className="text-4xl mb-4">❌</div>
                <h3 className="text-xl font-medium text-neutral-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION — ELEGANT PRESENCE SYSTEM */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-sm tracking-widest text-neutral-500 mb-4">
            OUR SOLUTION
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
            Elegant Presence™ — Done-for-You Social Media Management
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We take over your entire social presence — from strategy to content,
            posting, and engagement. You focus on weddings. We handle the
            visibility.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
          {[
            {
              icon: <Instagram size={28} />,
              title: "Luxury Content Creation",
              desc: "Elegant, cohesive visuals paired with sophisticated captions that express your expertise and style.",
            },
            {
              icon: <Calendar size={28} />,
              title: "Strategic Scheduling",
              desc: "We plan and post consistently — 4–5 posts per week plus Stories, Reels, and Pinterest pins.",
            },
            {
              icon: <MessageCircle size={28} />,
              title: "Active Engagement",
              desc: "We interact with followers, vendors, and prospects to strengthen relationships and visibility.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-neutral-50 p-8 border border-neutral-200 hover:border-amber-600 transition-all"
            >
              <div className="mb-4 text-amber-600">{item.icon}</div>
              <h3 className="text-2xl font-serif text-neutral-900 mb-3">
                {item.title}
              </h3>
              <p className="text-neutral-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-neutral-700 mb-2">
            Packages start from <strong>€750/month</strong>
          </p>
          <p className="text-neutral-500 mb-10">
            Final price depends on platforms managed, posting frequency, and
            level of content creation.
          </p>
          <Link
            to={"/contact"}
            className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 text-white text-lg tracking-wide hover:bg-neutral-800 transition-all"
          >
            Get a Custom Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* META GROWTH SYSTEM ADD-ON */}
      <section className="py-24 px-6 lg:px-12 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-sm tracking-widest text-neutral-400 mb-4">
            OPTIONAL ADD-ON
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Meta Growth System™
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Boost your reach, grow your following, and stay visible to the right
            couples — even when you’re not posting. Our Meta Growth System uses
            Instagram and Facebook Ads to consistently expand your audience and
            convert visibility into real inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto text-left">
          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-neutral-900 mb-6">
              <BarChart3 size={28} />
            </div>
            <h3 className="text-3xl font-serif mb-4">
              Turn Attention Into Growth
            </h3>
            <p className="text-lg text-neutral-300 leading-relaxed mb-6">
              With a refined ad strategy tailored to your brand, we use Meta Ads
              to amplify your best posts, reach thousands of luxury couples each
              month, and ensure your business stays top-of-mind.
            </p>
            <ul className="space-y-3 text-neutral-300">
              <li>
                <CheckCircle size={18} className="inline mr-2 text-amber-500" />
                Reach thousands of luxury couples globally
              </li>
              <li>
                <CheckCircle size={18} className="inline mr-2 text-amber-500" />
                Retarget website visitors and engaged followers
              </li>
              <li>
                <CheckCircle size={18} className="inline mr-2 text-amber-500" />
                Generate qualified inquiries directly from ads
              </li>
            </ul>
          </div>

          <div className="bg-neutral-800 border border-neutral-700 p-8">
            <h4 className="text-2xl font-serif mb-4">Example Client Results</h4>
            <ul className="space-y-4 text-neutral-300">
              <li>📈 +2,800 followers in 3 months</li>
              <li>💬 9 high-quality inquiries</li>
              <li>💍 3 weddings booked worth over €100K</li>
            </ul>
            <p className="text-sm text-neutral-400 mt-6 italic">
              “Marko helped us create consistent leads every month that led to
              bookings.” — <strong>My Tuscan Wedding</strong>
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-neutral-300 mb-4">
            Add Meta Growth System™ to your Social Media package for
          </p>
          <p className="text-3xl font-serif text-amber-500 mb-4">
            €1,000 first month • €500/month ongoing
          </p>
          <p className="text-sm text-neutral-500 mb-8">
            Includes Meta Ads strategy, creative setup, targeting, and
            continuous optimization.
          </p>

          <Link
            to={"/contact"}
            className="inline-flex items-center gap-3 px-10 py-5 bg-amber-600 text-white text-lg tracking-wide hover:bg-amber-700 transition-all"
          >
            Add Meta Growth System™
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* CTA BUNDLE WITH GOOGLE ADS */}
      <section className="py-24 px-6 lg:px-12 bg-amber-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
            Want Full Visibility?
          </h2>
          <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
            Combine Elegant Presence™ with the{" "}
            <strong>Wedding Planner Growth System™</strong> (Google Ads) for
            both brand building and lead generation — and enjoy a{" "}
            <strong>10% bundle discount</strong>.
          </p>
          <Link
            to={"/contact"}
            className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 text-white text-lg tracking-wide hover:bg-neutral-800 transition-all"
          >
            Book Your Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
