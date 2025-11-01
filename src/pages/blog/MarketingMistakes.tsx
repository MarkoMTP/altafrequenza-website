import { Helmet } from "react-helmet-async";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPostProps {
  onNavigate: (page: string) => void;
}

export default function MarketingMistakes({ onNavigate }: BlogPostProps) {
  return (
    <>
      <Helmet>
        <title>
          5 Digital Marketing Mistakes Luxury Wedding Planners Must Avoid | Alta
          Frequenza Marketing
        </title>
        <meta
          name="description"
          content="Avoid the most common marketing mistakes luxury wedding planners make. Learn how to position your brand, attract high-end couples, and elevate your marketing strategy with Alta Frequenza Marketing."
        />
        <meta
          name="keywords"
          content="wedding planner marketing, luxury wedding planner, marketing mistakes, destination wedding marketing, Google Ads for wedding planners, wedding planner strategy"
        />
        <meta
          property="og:title"
          content="5 Digital Marketing Mistakes Luxury Wedding Planners Must Avoid | Alta Frequenza Marketing"
        />
        <meta
          property="og:description"
          content="Discover the top 5 marketing mistakes wedding planners make and how to fix them to attract affluent international clients."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://altafrequenzamarketing.com/blog/marketing-mistakes"
        />
        <meta
          property="og:image"
          content="https://altafrequenzamarketing.com/og-marketing-mistakes.jpg"
        />
        <link
          rel="canonical"
          href="https://altafrequenzamarketing.com/blog/marketing-mistakes"
        />
      </Helmet>
      <div className="bg-white pt-20">
        <article className="max-w-4xl mx-auto px-6 lg:px-12 py-24">
          <Link
            to={"/blog"}
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Journal
          </Link>

          <div className="mb-8">
            <p className="text-sm tracking-wide text-amber-600 mb-3">
              Marketing Strategy
            </p>
            <h1 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-6 leading-tight">
              5 Digital Marketing Mistakes Luxury Wedding Planners Must Avoid
            </h1>
            <div className="flex items-center gap-6 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                March 10, 2024
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />6 min read
              </div>
            </div>
          </div>

          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Marketing strategy"
            className="w-full h-96 object-cover mb-12"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Even talented wedding planners with stunning portfolios struggle
              to attract luxury clients when their marketing strategy contains
              critical flaws. These common missteps can sabotage your efforts to
              position yourself as the premier choice for high-net-worth
              couples.
            </p>

            <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">
              Mistake #1: Targeting Too Broadly
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              The biggest mistake luxury wedding planners make is trying to
              appeal to everyone. When your messaging aims for mass appeal, you
              dilute your positioning and fail to resonate with your ideal
              high-end clientele.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              <strong>The Fix:</strong> Be unapologetically specific about who
              you serve. Use language like "discerning couples," "sophisticated
              celebrations," and "elevated experiences." Don't worry about
              alienating budget-conscious clients—they weren't your target
              anyway.
            </p>

            <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">
              Mistake #2: Competing on Price
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Some planners worry their rates are too high and feel compelled to
              offer discounts or emphasize "affordability" in their marketing.
              This is a catastrophic error when targeting luxury clients.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              High-net-worth couples associate low prices with low quality. When
              you compete on price, you immediately position yourself as a
              commodity rather than a premium service provider.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              <strong>The Fix:</strong> Never apologize for your rates. Focus
              your marketing on value, expertise, and results. Confidently
              communicate that exceptional service requires appropriate
              investment.
            </p>

            <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">
              Mistake #3: Inconsistent or Generic Content
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Posting sporadically on social media or using generic stock photos
              signals unprofessionalism to luxury clients. High-net-worth
              couples expect consistency, sophistication, and authenticity in
              every touchpoint.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              <strong>The Fix:</strong> Develop a consistent content strategy
              that showcases your actual work, your process, and your unique
              perspective. Invest in professional photography and create
              editorial-style content that reflects luxury standards.
            </p>

            <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">
              Mistake #4: Ignoring SEO and Local Search
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Many luxury wedding planners assume their clients find them
              exclusively through referrals. While word-of-mouth is valuable,
              affluent couples also conduct extensive online research before
              reaching out.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              If your website doesn't appear for searches like "luxury wedding
              planner [your city]" or "high-end destination wedding
              coordinator," you're invisible to a significant portion of your
              target market.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              <strong>The Fix:</strong> Invest in SEO optimization and strategic
              Google Ads campaigns. Ensure your website includes luxury-specific
              keywords and that your Google Business Profile is fully optimized.
            </p>

            <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">
              Mistake #5: Neglecting the Client Experience in Marketing
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Your marketing should mirror the exceptional experience you
              provide clients. Slow email responses, difficult-to-navigate
              websites, or impersonal communication contradict your claims of
              luxury service.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              <strong>The Fix:</strong> Audit every client touchpoint. Respond
              to inquiries within hours, not days. Ensure your website is
              intuitive and mobile-friendly. Personalize all communication.
              Consider implementing AI tools like the Wedding Concierge to
              provide instant, sophisticated responses 24/7.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-8 my-12">
              <h3 className="text-2xl font-serif text-neutral-900 mb-4">
                The Bottom Line
              </h3>
              <p className="text-lg text-neutral-800 leading-relaxed">
                Marketing to luxury wedding clients requires a fundamentally
                different approach than general wedding planning marketing.
                Avoid these five critical mistakes, and you'll position yourself
                to consistently attract the high-net-worth couples you're meant
                to serve.
              </p>
            </div>

            <div className="mt-16 pt-12 border-t border-neutral-200">
              <h3 className="text-2xl font-serif text-neutral-900 mb-6">
                Let Us Fix Your Marketing Strategy
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                At Alta Frequenza Marketing, we help luxury wedding planners
                avoid these mistakes and implement strategies that actually
                work. Our approach is tailored specifically to the high-end
                wedding market.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-neutral-900 text-lg tracking-wide hover:bg-neutral-100 transition-all"
              >
                Book your free consultation now
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
