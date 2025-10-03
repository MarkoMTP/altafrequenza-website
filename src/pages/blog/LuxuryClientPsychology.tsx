import { Calendar, Clock, ArrowLeft } from 'lucide-react';

interface BlogPostProps {
  onNavigate: (page: string) => void;
}

export default function LuxuryClientPsychology({ onNavigate }: BlogPostProps) {
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
          <p className="text-sm tracking-wide text-amber-600 mb-3">Client Psychology</p>
          <h1 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-6 leading-tight">
            The Psychology of Luxury Wedding Clients: What High-Net-Worth Couples Really Want
          </h1>
          <div className="flex items-center gap-6 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              March 15, 2024
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              8 min read
            </div>
          </div>
        </div>

        <img
          src="https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Luxury wedding celebration"
          className="w-full h-96 object-cover mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-neutral-700 leading-relaxed mb-8">
            Understanding the mindset of affluent couples is essential for wedding planners who want to position themselves as the premier choice. High-net-worth clients operate differently—their priorities, decision-making processes, and expectations diverge significantly from budget-conscious couples.
          </p>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">They're Buying an Experience, Not Just a Service</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Luxury clients aren't looking for someone to simply coordinate logistics. They're investing in a flawless, unforgettable experience that reflects their taste, status, and values. Every touchpoint—from your initial consultation to the final moments of their wedding—must feel elevated, personalized, and effortless.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            This means your marketing can't focus solely on services rendered. Instead, emphasize the transformation you provide: peace of mind, creative vision brought to life, and a celebration that becomes a cherished memory for generations.
          </p>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">Trust and Credibility Are Non-Negotiable</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            High-net-worth couples have extensive networks and access to insider recommendations. Before they ever contact you, they've likely researched your portfolio, read reviews, and possibly asked trusted friends or colleagues about your reputation.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Your online presence must establish immediate credibility:
          </p>

          <ul className="space-y-3 mb-8 ml-6">
            <li className="text-lg text-neutral-700">Professional website with sophisticated design</li>
            <li className="text-lg text-neutral-700">Portfolio showcasing high-end weddings</li>
            <li className="text-lg text-neutral-700">Testimonials from discerning clients</li>
            <li className="text-lg text-neutral-700">Press features or industry recognition</li>
            <li className="text-lg text-neutral-700">Social media that reflects luxury standards</li>
          </ul>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">They Value Exclusivity and Personalization</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Affluent couples don't want cookie-cutter weddings. They expect deeply personalized service that reflects their unique story, aesthetic preferences, and cultural backgrounds. Generic packages or templated approaches are immediate red flags.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            In your marketing, emphasize your bespoke approach. Avoid language like "packages" or "standard options." Instead, use phrases like "custom design," "tailored experience," and "exclusive service."
          </p>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">Time is Their Most Valuable Asset</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            High-net-worth couples are often exceptionally busy with demanding careers and extensive commitments. They're hiring you precisely because they don't have time to manage wedding details themselves.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Highlight how you streamline the planning process, handle all vendor coordination, and make decisions easy. Emphasize your proactive communication style and ability to anticipate needs before they arise.
          </p>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">They Expect Sophistication in Communication</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            From your initial email response to your consultation presentation, every interaction should reflect professionalism and refinement. Typos, delayed responses, or casual language undermine your positioning as a luxury service provider.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            This extends to your marketing materials. Your website copy, social media captions, and email campaigns should be polished, articulate, and aligned with the aesthetic standards of high-end brands.
          </p>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">Price is Secondary to Value</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Contrary to what many planners assume, luxury clients aren't primarily focused on cost. They're focused on value, quality, and results. If they believe you're the best choice, price becomes a secondary consideration.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Never apologize for your rates or position yourself as "affordable." Instead, confidently communicate the exceptional value you provide and the investment required to deliver excellence.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-8 my-12">
            <h3 className="text-2xl font-serif text-neutral-900 mb-4">Key Takeaway</h3>
            <p className="text-lg text-neutral-800 leading-relaxed">
              Marketing to luxury wedding clients requires a fundamental shift in mindset. Focus less on services and more on the exclusive experience you provide. Build unshakeable credibility through every touchpoint. Communicate with sophistication and confidence. When you position yourself correctly, high-net-worth couples will seek you out—and happily invest in your expertise.
            </p>
          </div>

          <div className="mt-16 pt-12 border-t border-neutral-200">
            <h3 className="text-2xl font-serif text-neutral-900 mb-6">
              Ready to Attract More Luxury Couples?
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              At Alta Frequenza Marketing, we specialize in helping wedding planners position themselves for high-net-worth clientele. Our strategies are designed specifically for the luxury wedding market.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white text-base tracking-wide hover:bg-neutral-800 transition-all"
            >
              Book Your Strategy Session
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
