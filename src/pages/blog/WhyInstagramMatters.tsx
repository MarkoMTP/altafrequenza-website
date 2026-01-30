import { Helmet } from "react-helmet-async";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPostProps {
  onNavigate: (page: string) => void;
}

export default function InstagramProofForWeddingPlanners({
  onNavigate,
}: BlogPostProps) {
  return (
    <>
      <Helmet>
        <title>
          Why Instagram Helps You Win Against Other Wedding Planners | Alta
          Frequenza Marketing
        </title>
        <meta
          name="description"
          content="A website and ads can get attention — but Instagram builds credibility. Learn how wedding planners use Instagram as proof to win trust, charge more, and stand out from competitors."
        />
        <meta
          name="keywords"
          content="wedding planner instagram, wedding planner marketing, wedding planner branding, destination wedding planner, luxury wedding planner, wedding planner content strategy, instagram credibility"
        />
        <meta
          property="og:title"
          content="Why Instagram Helps You Win Against Other Wedding Planners | Alta Frequenza Marketing"
        />
        <meta
          property="og:description"
          content="Couples use Instagram to decide who feels real, active, and trusted. Here’s how planners use it as proof to stand out and justify premium pricing."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://altafrequenzamarketing.com/blog/instagram-helps-you-win"
        />
        <meta
          property="og:image"
          content="https://altafrequenzamarketing.com/og-instagram-proof.jpg"
        />
        <link
          rel="canonical"
          href="https://altafrequenzamarketing.com/blog/instagram-helps-you-win"
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
              Branding & Trust
            </p>
            <h1 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-6 leading-tight">
              Why Instagram Helps You Win Against Other Wedding Planners
            </h1>
            <div className="flex items-center gap-6 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                January 30, 2026
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />6 min read
              </div>
            </div>
          </div>

          <img
            src="https://images.pexels.com/photos/1679825/pexels-photo-1679825.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Wedding planner Instagram presence"
            className="w-full h-96 object-cover mb-12"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Anyone can be “incognito” online and call themselves an expert.
              <br />
              A website alone doesn’t prove much. Ads don’t prove credibility.
              <br />
              <strong>Instagram does.</strong>
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Couples don’t browse wedding planners like they browse furniture.
              They’re looking for someone they can trust with one of the most
              emotional (and expensive) moments of their lives.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              And Instagram helps them answer one simple question fast:
              <br />
              <span className="font-medium text-neutral-900">
                “Is this planner real, active, and trusted?”
              </span>
            </p>

            <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">
              The Modern Reality: Couples Eliminate Fast
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Most planners think the decision is logical: portfolio, price,
              location, experience. But in reality, the first filter is much
              more basic:
              <strong> do I feel safe reaching out?</strong>
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              When a planner has no presence, inconsistent content, or generic
              posts, couples don’t debate.
              <strong> They eliminate.</strong>
            </p>

            <div className="bg-neutral-50 p-8 my-10 border border-neutral-200">
              <h3 className="text-xl font-medium text-neutral-900 mb-4">
                The silent comparison happening in their head:
              </h3>
              <ul className="space-y-3 ml-6">
                <li className="text-lg text-neutral-700">
                  Planner A: active feed, recent weddings, real moments, clear
                  style
                </li>
                <li className="text-lg text-neutral-700">
                  Planner B: last post 9 months ago, stock-looking graphics,
                  vague captions
                </li>
              </ul>
              <p className="text-lg text-neutral-700 leading-relaxed mt-6">
                They don’t “research more.” They just go with Planner A.
              </p>
            </div>

            <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">
              Instagram Isn’t About Visibility. It’s About Proof.
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Visibility gets you seen. Proof gets you chosen.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Your website can be beautiful. Your ads can be well-targeted. But
              couples still ask themselves: “What happens after I inquire?”
              Instagram is where you show the answer.
            </p>

            <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">
              What a Strong Instagram Presence Does (Immediately)
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              A strong Instagram presence does three things without you saying a
              word:
            </p>

            <ul className="space-y-3 mb-8 ml-6">
              <li className="text-lg text-neutral-700">
                <strong>It builds trust before the first contact</strong> — so
                the inquiry feels safe and “obvious.”
              </li>
              <li className="text-lg text-neutral-700">
                <strong>It makes you look more professional</strong> than
                planners with weak, outdated, or messy profiles.
              </li>
              <li className="text-lg text-neutral-700">
                <strong>It justifies higher prices</strong> because premium
                positioning is felt, not explained.
              </li>
            </ul>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-8 my-12">
              <h3 className="text-2xl font-serif text-neutral-900 mb-4">
                The easiest way to think about it:
              </h3>
              <p className="text-lg text-neutral-800 leading-relaxed">
                Your website tells them what you offer.
                <br />
                Your ads bring them to you.
                <br />
                <strong>
                  Instagram convinces them you’re the right choice.
                </strong>
              </p>
            </div>

            <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">
              “But I’m Not an Influencer” — Good. You Don’t Need to Be.
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Most wedding planners assume Instagram means dancing reels and
              talking to camera.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              For premium planners, the goal is different:
              <strong>
                {" "}
                create a profile that looks like a living portfolio
              </strong>
              — updated, consistent, and clearly positioned.
            </p>

            <div className="bg-neutral-50 p-8 my-10 border border-neutral-200">
              <h3 className="text-xl font-medium text-neutral-900 mb-5">
                What “proof content” looks like:
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-lg text-neutral-700">
                    <strong>Real wedding moments</strong>
                    <br />
                    Not just styled shoots — real couples, real energy.
                  </p>
                </div>
                <div>
                  <p className="text-lg text-neutral-700">
                    <strong>Behind-the-scenes</strong>
                    <br />
                    Tablescapes, timelines, vendor coordination, venue
                    walk-throughs.
                  </p>
                </div>
                <div>
                  <p className="text-lg text-neutral-700">
                    <strong>Client reactions / testimonials</strong>
                    <br />
                    Screenshots, voice notes, short quotes, outcome-focused.
                  </p>
                </div>
                <div>
                  <p className="text-lg text-neutral-700">
                    <strong>Your taste and standards</strong>
                    <br />
                    Venues you choose, details you notice, decisions you make.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">
              The “Premium Effect”: Instagram Makes Price Feel Reasonable
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Couples don’t pay premium prices because you said “luxury.” They
              pay because your brand makes it feel inevitable.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              When your Instagram communicates taste, consistency, and
              real-world execution, your fee becomes contextually “normal” for
              the level of experience you’re selling.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              When it doesn’t, couples experience friction:
              <strong> “Why is this expensive?”</strong>
            </p>

            <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">
              A Simple Standard: If You Go Quiet, You Look Risky
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Even if you’re fully booked, an inactive Instagram makes you look
              uncertain: maybe you’re not operating anymore, maybe you’re not in
              demand, maybe the business is inconsistent.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              This isn’t fair — but it’s how couples interpret signals.
              Instagram is a trust machine. And silence breaks trust.
            </p>

            <div className="mt-16 pt-12 border-t border-neutral-200">
              <h3 className="text-2xl font-serif text-neutral-900 mb-6">
                Want Your Instagram to Support Your Positioning?
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                If Instagram isn’t building trust and making your pricing feel
                justified, you don’t need “more content.”
                <br />
                You need the right proof, in the right structure, posted
                consistently.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-neutral-900 text-lg tracking-wide hover:bg-neutral-100 transition-all"
              >
                DM us / Let’s fix your Instagram positioning
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
