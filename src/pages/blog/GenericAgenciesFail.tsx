import { Calendar, Clock, ArrowLeft } from 'lucide-react';

interface BlogPostProps {
  onNavigate: (page: string) => void;
}

export default function GenericAgenciesFail({ onNavigate }: BlogPostProps) {
  return (
    <div className="bg-white pt-20">
      <article className="max-w-4xl mx-auto px-6 lg:px-12 py-24">
        <button
          onClick={() => onNavigate('blog')}
          className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Journal
        </button>

        <div className="mb-8">
          <p className="text-sm tracking-wide text-amber-600 mb-3">Industry Insights</p>
          <h1 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-6 leading-tight">
            Why Generic Marketing Agencies Fail Wedding Planners
          </h1>
          <div className="flex items-center gap-6 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              February 28, 2024
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              5 min read
            </div>
          </div>
        </div>

        <img
          src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Marketing agency meeting"
          className="w-full h-96 object-cover mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-neutral-700 leading-relaxed mb-8">
            You've invested thousands in a marketing agency, followed their advice diligently, and yet the leads keep disappointing. Budget-conscious couples. Tire-kickers. People who ghost after learning your rates. Sound familiar?
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            The problem isn't you—it's that most marketing agencies don't understand the luxury wedding industry. Here's why specialization matters.
          </p>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">They Use Cookie-Cutter Strategies</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Generic agencies apply the same playbook to every client, whether they're selling software, insurance, or wedding planning services. They run broad Google Ads, create generic content, and optimize for volume rather than quality.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            This approach might work for businesses targeting mass markets, but it's catastrophic for luxury wedding planners. You don't need more leads—you need the right leads. Generic strategies attract everyone except the affluent couples you're positioned to serve.
          </p>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">They Don't Understand Your Ideal Client</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            High-net-worth couples have different priorities, decision-making processes, and expectations than budget-conscious clients. Generic agencies don't understand the psychology of luxury buyers or how to craft messaging that resonates with them.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            They write ad copy about "affordable packages" and "great deals"—language that immediately repels your target audience. Luxury clients aren't looking for discounts; they're looking for exceptional value and expertise.
          </p>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">They Can't Evaluate Quality</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            When a generic agency reports "50 new leads this month," they consider that success. But if 48 of those leads are unqualified inquiries from couples who can't afford your services, you've wasted money and time.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Agencies without luxury wedding expertise can't distinguish between a valuable lead and a tire-kicker. They optimize for metrics that don't matter—clicks, impressions, raw lead volume—while ignoring what actually drives your business: qualified, high-budget couples ready to invest.
          </p>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">They Ignore Industry Nuances</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            The luxury wedding industry has unique seasonal patterns, vendor relationships, and client acquisition cycles. Generic agencies don't understand when affluent couples start planning, which keywords they actually search, or how to position you within the competitive landscape.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            They might rank you for "affordable wedding planner" when you should be dominating searches for "luxury destination wedding coordinator" or "high-end full-service planner."
          </p>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">They Don't Speak Your Language</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Creating content that resonates with luxury wedding audiences requires deep industry knowledge. Generic agencies produce blog posts and social media content that sound sterile and disconnected from your actual expertise.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            They can't tell the difference between a stunning tablescape and a mediocre one. They don't understand design trends, vendor relationships, or the nuances that make a wedding truly exceptional. This lack of knowledge is immediately apparent to discerning couples.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-8 my-12">
            <h3 className="text-2xl font-serif text-neutral-900 mb-4">The Alternative: Specialized Marketing</h3>
            <p className="text-lg text-neutral-800 leading-relaxed mb-4">
              Marketing agencies that specialize exclusively in luxury weddings bring a fundamental advantage: we live and breathe your industry. We understand your ideal client, speak their language, and know exactly how to position you as the premier choice.
            </p>
            <p className="text-lg text-neutral-800 leading-relaxed">
              Our strategies are refined specifically for planners who serve high-net-worth couples. We optimize for quality over quantity, because we understand that one six-figure wedding client is worth more than fifty budget inquiries.
            </p>
          </div>

          <div className="mt-16 pt-12 border-t border-neutral-200">
            <h3 className="text-2xl font-serif text-neutral-900 mb-6">
              Experience the Difference of Specialization
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              At Alta Frequenza Marketing, we work exclusively with luxury wedding planners. Our entire approach is designed around attracting the high-net-worth couples you're meant to serve.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white text-base tracking-wide hover:bg-neutral-800 transition-all"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
