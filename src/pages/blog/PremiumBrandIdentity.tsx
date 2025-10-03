import { Calendar, Clock, ArrowLeft } from 'lucide-react';

interface BlogPostProps {
  onNavigate: (page: string) => void;
}

export default function PremiumBrandIdentity({ onNavigate }: BlogPostProps) {
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
          <p className="text-sm tracking-wide text-amber-600 mb-3">Branding</p>
          <h1 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-6 leading-tight">
            Crafting a Premium Brand Identity for Your Planning Business
          </h1>
          <div className="flex items-center gap-6 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              February 15, 2024
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              9 min read
            </div>
          </div>
        </div>

        <img
          src="https://images.pexels.com/photos/2072179/pexels-photo-2072179.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Premium branding"
          className="w-full h-96 object-cover mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-neutral-700 leading-relaxed mb-8">
            Your brand is your most valuable asset as a luxury wedding planner. It's the invisible thread connecting every touchpoint—from your website to your consultation style to how you respond to emails. When done correctly, a premium brand identity attracts ideal clients, commands higher rates, and positions you as the obvious choice for discerning couples.
          </p>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">What Is a Brand, Really?</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Your brand isn't your logo or color palette—though those matter. Your brand is the sum total of how people perceive and experience your business. It's the feeling couples get when they visit your website, the impression they form during consultations, and the story they tell friends when recommending you.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            For luxury wedding planners, your brand must consistently communicate: sophistication, expertise, exclusivity, and trustworthiness.
          </p>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">Start With Positioning</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Before designing anything, get crystal clear on your positioning:
          </p>

          <ul className="space-y-3 mb-8 ml-6">
            <li className="text-lg text-neutral-700"><strong>Who exactly do you serve?</strong> Be specific. "Couples planning weddings" is too broad. "High-net-worth couples planning sophisticated destination weddings" is precise.</li>
            <li className="text-lg text-neutral-700"><strong>What makes you different?</strong> Every successful luxury planner has a unique approach, aesthetic, or specialization. Identify yours.</li>
            <li className="text-lg text-neutral-700"><strong>What transformation do you provide?</strong> You're not just coordinating logistics—you're creating an experience, reducing stress, bringing visions to life.</li>
          </ul>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Your answers to these questions become the foundation of every branding decision.
          </p>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">Visual Identity: More Than Pretty Colors</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Your visual brand should immediately communicate luxury. This means:
          </p>

          <ul className="space-y-3 mb-8 ml-6">
            <li className="text-lg text-neutral-700"><strong>Sophisticated typography:</strong> Choose elegant serif fonts paired with clean sans-serifs. Avoid trendy or playful fonts that undermine premium positioning.</li>
            <li className="text-lg text-neutral-700"><strong>Refined color palette:</strong> Neutrals with metallic accents (gold, silver, rose gold) communicate luxury. Avoid bright, saturated colors unless they're integral to your unique aesthetic.</li>
            <li className="text-lg text-neutral-700"><strong>Professional photography:</strong> Invest in high-quality images of your work. Amateur iPhone shots don't belong on a luxury website.</li>
            <li className="text-lg text-neutral-700"><strong>Generous white space:</strong> Luxury brands embrace space. Avoid cluttered designs that feel busy or overwhelming.</li>
          </ul>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">The Language of Luxury</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            How you communicate matters enormously. Luxury brands use specific language patterns:
          </p>

          <div className="bg-neutral-50 p-6 my-8 border border-neutral-200">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-neutral-900 mb-3">Avoid:</h4>
                <ul className="space-y-2 text-neutral-700">
                  <li>• "Affordable packages"</li>
                  <li>• "Great deals"</li>
                  <li>• "Budget-friendly options"</li>
                  <li>• "Cheap prices"</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-neutral-900 mb-3">Use Instead:</h4>
                <ul className="space-y-2 text-neutral-700">
                  <li>• "Bespoke experiences"</li>
                  <li>• "Investment in excellence"</li>
                  <li>• "Tailored to your vision"</li>
                  <li>• "Exclusive services"</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Your website copy, social media captions, and email communication should all reflect sophistication and confidence. Speak to your ideal clients in language that resonates with their values and expectations.
          </p>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">Consistency Across Every Touchpoint</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Luxury clients are exceptionally observant. Every interaction with your brand should feel cohesive:
          </p>

          <ul className="space-y-3 mb-8 ml-6">
            <li className="text-lg text-neutral-700">Your website design, navigation, and user experience</li>
            <li className="text-lg text-neutral-700">Social media aesthetic and content quality</li>
            <li className="text-lg text-neutral-700">Email communication style and response time</li>
            <li className="text-lg text-neutral-700">Consultation presentation materials</li>
            <li className="text-lg text-neutral-700">Contracts and proposals</li>
            <li className="text-lg text-neutral-700">Client communication throughout planning</li>
          </ul>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            If your Instagram is elegant but your emails are casual and typo-filled, the disconnect undermines your positioning.
          </p>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">The Client Experience Is Your Brand</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Premium branding extends far beyond marketing materials. The actual experience of working with you must match the promises your brand makes.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            This means:
          </p>

          <ul className="space-y-3 mb-8 ml-6">
            <li className="text-lg text-neutral-700">Responding to inquiries quickly and professionally</li>
            <li className="text-lg text-neutral-700">Conducting consultations that feel exclusive and personalized</li>
            <li className="text-lg text-neutral-700">Providing detailed, beautifully designed proposals</li>
            <li className="text-lg text-neutral-700">Communicating proactively throughout the planning process</li>
            <li className="text-lg text-neutral-700">Delivering flawless execution on wedding day</li>
          </ul>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            The most beautiful branding in the world can't compensate for mediocre service. Excellence must permeate everything you do.
          </p>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">Evolve, But Stay True</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Your brand should evolve as your business grows and your aesthetic refines. However, dramatic pivots confuse your audience and undermine the equity you've built.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Make incremental improvements while staying true to your core positioning and values. Luxury clients appreciate consistency and reliability.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-8 my-12">
            <h3 className="text-2xl font-serif text-neutral-900 mb-4">The Bottom Line</h3>
            <p className="text-lg text-neutral-800 leading-relaxed">
              Your brand is the most powerful tool you have for attracting luxury clients and commanding premium rates. Invest in getting it right—from visual identity to messaging to client experience. When your brand authentically reflects the caliber of your work, the right couples will seek you out and gladly invest in your expertise.
            </p>
          </div>

          <div className="mt-16 pt-12 border-t border-neutral-200">
            <h3 className="text-2xl font-serif text-neutral-900 mb-6">
              Need Help Elevating Your Brand?
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              We help luxury wedding planners develop sophisticated brand identities that attract high-net-worth couples. From positioning to visual design to messaging strategy, we ensure every touchpoint reflects your premium positioning.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white text-base tracking-wide hover:bg-neutral-800 transition-all"
            >
              Schedule a Brand Strategy Session
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
