import {
  ArrowRight,
  Search,
  BarChart,
  Target,
  TrendingUp,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function GrowthSystemPage() {
  return (
    <>
      <Helmet>
        <title>Wedding Planner Growth System™ | Alta Frequenza Marketing</title>
        <meta
          name="description"
          content="The Wedding Planner Growth System™ by Alta Frequenza Marketing — a proven Google Ads strategy for wedding planners who want consistent, serious inquiries for weddings starting from €70K and up."
        />
        <meta
          name="keywords"
          content="wedding planner marketing, Google Ads for wedding planners, destination wedding planner leads, wedding planner growth system, high budget wedding marketing"
        />
        <meta
          property="og:title"
          content="Wedding Planner Growth System™ | Alta Frequenza Marketing"
        />
        <meta
          property="og:description"
          content="A proven lead generation system for wedding planners attracting serious, high-budget couples for destination and local weddings."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://altafrequenzamarketing.com/" />
        <meta
          property="og:image"
          content="https://altafrequenzamarketing.com/og-image.jpg"
        />
      </Helmet>

      <div className="bg-white pt-20">
        {/* HERO */}
        <section className="min-h-[80vh] flex items-center justify-center px-6 lg:px-12 py-24 bg-gradient-to-b from-amber-50 to-white">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 text-sm uppercase tracking-wide text-neutral-700">
              <TrendingUp size={16} className="text-amber-600" />
              Proven Lead Generation for Wedding Planners
            </div>

            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6 text-neutral-900">
              The Wedding Planner <br /> Growth System™
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed max-w-3xl mx-auto mb-10">
              A google ads system engineered for wedding planners who want
              consistent enquiries from couples planning high-value weddings.
            </p>

            <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-12">
              Imagine checking your inbox each week and seeing new consultation
              requests from couples who are serious, aligned with your style,
              and already budgeting for full-service planning.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 text-white text-lg tracking-wide hover:bg-neutral-800 transition-all"
            >
              Start Getting Better Enquiries
              <ArrowRight size={22} />
            </Link>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="py-24 px-6 lg:px-12 bg-neutral-900 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest text-neutral-400 mb-3">
              WHY MOST PLANNER ADS DON&apos;T DELIVER
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-10">
              You’re Getting Clicks — But Not the Right Couples
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto mb-16">
              Most planners who try Google Ads end up with price-shopping leads
              and small budgets, then assume “ads don’t work.” The problem isn’t
              ads — it’s the strategy. The Wedding Planner Growth System™ is
              designed to bring you couples planning meaningful, design-driven
              weddings (not €10K backyard parties).
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-neutral-800 p-8 border border-neutral-700">
                <h3 className="text-xl font-semibold mb-3 text-amber-500">
                  ❌ Too Broad Targeting
                </h3>
                <p className="text-neutral-300">
                  Generic keywords attract everyone, including couples looking
                  for low-budget or DIY solutions.
                </p>
              </div>
              <div className="bg-neutral-800 p-8 border border-neutral-700">
                <h3 className="text-xl font-semibold mb-3 text-amber-500">
                  ❌ The Wrong Message
                </h3>
                <p className="text-neutral-300">
                  Most ads sound like price lists. Your ideal couples want
                  clarity, confidence, and a sense that you “get” their vision.
                </p>
              </div>
              <div className="bg-neutral-800 p-8 border border-neutral-700">
                <h3 className="text-xl font-semibold mb-3 text-amber-500">
                  ❌ No Real Tracking
                </h3>
                <p className="text-neutral-300">
                  Without proper tracking, you can’t see which searches,
                  locations, or ads actually lead to booked weddings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-neutral-500 mb-3">
              HOW IT WORKS
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">
              The Three Steps to a Predictable Lead Machine
            </h2>
          </div>

          <div className="space-y-20 max-w-6xl mx-auto">
            {/* STEP 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-neutral-900 text-white mb-5">
                  <Search size={24} />
                </div>
                <h3 className="text-3xl font-serif text-neutral-900 mb-4">
                  1. Target Only Serious, High-Budget Couples
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  We build campaigns around searches used by couples actively
                  looking for full-service planning in desirable destinations —
                  both in Europe and the US.
                </p>
                <ul className="space-y-3 text-neutral-700">
                  <li>
                    ✔ “Wedding planner Italy” / “Amalfi Coast wedding planner”
                  </li>
                  <li>
                    ✔ “Destination wedding planner Greece / Spain / Portugal”
                  </li>
                  <li>✔ “Napa wedding planner” / “New York wedding planner”</li>
                  <li>
                    ✔ “Cabo / Hawaii / Miami destination wedding planning”
                  </li>
                </ul>
                <p className="text-neutral-700 mt-6">
                  The goal is simple: filter out low-budget enquiries and focus
                  your ad spend on couples planning weddings from around €70K
                  upwards.
                </p>
              </div>
              <div>
                <p className="text-neutral-700 leading-relaxed">
                  Instead of showing up everywhere, you appear exactly where
                  your best couples are searching — by location, intent, and
                  budget level.
                </p>
                <div className="mt-6 p-6 bg-white border border-neutral-300">
                  <p className="text-sm italic text-neutral-600">
                    “Marko helped us generate consistent leads every month —
                    real couples who booked weddings through our campaigns.”
                  </p>
                  <p className="text-sm text-right mt-3 text-neutral-500">
                    — My Tuscan Wedding
                  </p>
                </div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-neutral-900 text-white mb-5">
                  <Target size={24} />
                </div>
                <h3 className="text-3xl font-serif text-neutral-900 mb-4">
                  2. Turn Clicks Into Booked Consultations
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  Good traffic is only half the game. We structure the journey
                  so the right couples don’t just click — they enquire and book
                  a call.
                </p>
                <ul className="space-y-3 text-neutral-700">
                  <li>
                    ✔ Clear, confident ad messaging that reflects your style
                  </li>
                  <li>✔ Simple, friction-free enquiry process</li>
                  <li>
                    ✔ Optional landing page focused on booking consultations
                  </li>
                  <li>✔ Light pre-qualification so you don’t waste time</li>
                </ul>
                <p className="text-neutral-700 mt-6">
                  Every click costs money; we design the funnel so more of them
                  turn into real conversations with the kind of couples you
                  actually want to work with.
                </p>
              </div>
              <div />
            </div>

            {/* STEP 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-neutral-900 text-white mb-5">
                  <BarChart size={24} />
                </div>
                <h3 className="text-3xl font-serif text-neutral-900 mb-4">
                  3. Weekly Optimization & Long-Term Growth
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  Once the system is live, we continually refine it based on
                  real data — not guesswork.
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li>Keywords & search terms</li>
                  <li>Ad copy and extensions</li>
                  <li>Locations & devices</li>
                  <li>Negative keywords to block bad traffic</li>
                  <li>Bid strategies and budget allocation</li>
                </ul>
                <p className="text-neutral-700 mt-6">
                  Over time, your cost per lead drops, lead quality improves,
                  and your pipeline becomes more stable season after season.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS / CASE STUDIES */}
        <section className="py-24 px-6 lg:px-12 bg-neutral-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest text-neutral-500 mb-3">
                REAL-WORLD RESULTS
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-4">
                A System That Works Over Weeks and Months
              </h2>
              <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
                From fast early wins to long-term consistency, the Growth
                System™ is engineered to bring you serious enquiries — not just
                vanity metrics.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* 6-MONTH CASE STUDY */}
              <div className="bg-white border border-neutral-200 p-8">
                <h3 className="text-xl font-serif text-neutral-900 mb-3">
                  6 Months — Destination Planner in France
                </h3>
                <p className="text-sm uppercase tracking-wide text-amber-600 mb-4">
                  Established planner, mix of US & EU couples
                </p>
                <ul className="space-y-2 text-neutral-700 mb-4">
                  <li>
                    <CheckCircle
                      className="inline-block mr-2 text-amber-600"
                      size={18}
                    />
                    50+ qualified enquiries
                  </li>
                  <li>
                    <CheckCircle
                      className="inline-block mr-2 text-amber-600"
                      size={18}
                    />
                    5 booked weddings
                  </li>
                  <li>
                    <CheckCircle
                      className="inline-block mr-2 text-amber-600"
                      size={18}
                    />
                    Average budget around €200K+
                  </li>
                  <li>
                    <CheckCircle
                      className="inline-block mr-2 text-amber-600"
                      size={18}
                    />
                    Well over €100K in net profit generated
                  </li>
                </ul>
                <p className="text-sm text-neutral-600">
                  A strong example of what happens when the system runs over a
                  full season with ongoing optimization.
                </p>
              </div>

              {/* 4-MONTH CASE STUDY */}
              <div className="bg-white border border-neutral-200 p-8">
                <h3 className="text-xl font-serif text-neutral-900 mb-3">
                  4 Months — Mexico Wedding Planner
                </h3>
                <p className="text-sm uppercase tracking-wide text-amber-600 mb-4">
                  Growing planner, mid to high-range budgets
                </p>
                <ul className="space-y-2 text-neutral-700 mb-4">
                  <li>
                    <CheckCircle
                      className="inline-block mr-2 text-amber-600"
                      size={18}
                    />
                    18 qualified enquiries
                  </li>
                  <li>
                    <CheckCircle
                      className="inline-block mr-2 text-amber-600"
                      size={18}
                    />
                    3 booked weddings
                  </li>
                  <li>
                    <CheckCircle
                      className="inline-block mr-2 text-amber-600"
                      size={18}
                    />
                    Budgets ranging from ~€70K to €150K
                  </li>
                </ul>
                <p className="text-sm text-neutral-600">
                  A realistic mid-term snapshot: a healthy mix of solid budgets
                  and strong lead quality while building visibility.
                </p>
              </div>

              {/* 1.5-MONTH CASE STUDY */}
              <div className="bg-white border border-neutral-200 p-8">
                <h3 className="text-xl font-serif text-neutral-900 mb-3">
                  6 Weeks — Planner in Tuscany
                </h3>
                <p className="text-sm uppercase tracking-wide text-amber-600 mb-4">
                  New campaign, quick traction
                </p>
                <ul className="space-y-2 text-neutral-700 mb-4">
                  <li>
                    <CheckCircle
                      className="inline-block mr-2 text-amber-600"
                      size={18}
                    />
                    8 qualified leads in ~1.5 months
                  </li>
                  <li>
                    <CheckCircle
                      className="inline-block mr-2 text-amber-600"
                      size={18}
                    />
                    Approx. €1,200 in ad spend
                  </li>
                  <li>
                    <CheckCircle
                      className="inline-block mr-2 text-amber-600"
                      size={18}
                    />
                    Leads from US & UK couples planning Italy weddings
                  </li>
                </ul>
                <p className="text-sm text-neutral-600">
                  A good example of fast, early results while the campaign is
                  still in its learning and scaling phase.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-neutral-900 to-neutral-950 text-white">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-neutral-400 mb-3">
              INVESTMENT
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              One Clear Offer. No Confusion.
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Simple, transparent pricing designed for planners who want
              serious, trackable results — not endless retainers with vague
              promises.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-[3fr,2fr] gap-12 items-start">
            <div className="bg-neutral-800 p-10 border border-neutral-700 text-left">
              <h3 className="text-2xl font-serif mb-4 text-amber-500">
                The Wedding Planner Growth System™
              </h3>
              <p className="text-neutral-300 mb-6">
                The complete Google Ads solution for planners who want a
                reliable flow of enquiries from couples planning weddings from
                around €70K upwards.
              </p>
              <ul className="space-y-3 mb-8 text-neutral-300">
                <li>
                  <strong>€980 setup</strong> — one-time
                </li>
                <li>✔ Full keyword & market strategy</li>
                <li>✔ Campaign & ad copy creation</li>
                <li>✔ Technical setup & tracking</li>
                <li>✔ Funnel and enquiry structure</li>
                <li className="pt-3">
                  <strong>€380/month management</strong>
                </li>
                <li>✔ Weekly optimization</li>
                <li>✔ Monthly reporting in plain language</li>
                <li>✔ Lead quality monitoring & improvement</li>
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-neutral-900 text-base tracking-wide hover:bg-neutral-100 transition-all"
              >
                Talk About Your Numbers
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* ADD ONS */}
            <div className="space-y-8">
              <h3 className="text-2xl font-serif mb-2">Optional Add-Ons</h3>
              <p className="text-neutral-300 mb-4">
                Keep it simple with just the Growth System™ — or layer on extras
                if you want a more complete setup.
              </p>
              <div className="grid gap-6">
                <div className="bg-neutral-800 p-6 border border-neutral-700">
                  <Sparkles className="text-amber-500 mb-3" size={28} />
                  <h4 className="text-xl mb-2">Landing Page</h4>
                  <p className="text-neutral-400">
                    +€800 — A clean, conversion-focused page that reflects your
                    style and makes it easy for couples to enquire and book a
                    call.
                  </p>
                </div>
                <div className="bg-neutral-800 p-6 border border-neutral-700">
                  <Target className="text-amber-500 mb-3" size={28} />
                  <h4 className="text-xl mb-2">AI Wedding Planner Assistant</h4>
                  <p className="text-neutral-400">
                    +€1,500 setup + €150/mo — A fully branded assistant trained
                    on your business that answers FAQs, pre-qualifies leads, and
                    helps couples book calls 24/7.
                  </p>
                </div>
                <div className="bg-neutral-800 p-6 border border-neutral-700">
                  <BarChart className="text-amber-500 mb-3" size={28} />
                  <h4 className="text-xl mb-2">Monthly Strategy Call</h4>
                  <p className="text-neutral-400">
                    +€150/mo — A dedicated session to review performance, refine
                    positioning, and plan your next moves based on real data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 lg:px-12 text-center bg-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl font-serif text-neutral-900 mb-6">
              Ready to Fill Your Calendar With Better Enquiries?
            </h3>
            <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
              If you’re tired of random enquiries, price-shoppers, and slow
              seasons — and want a clear, measurable system bringing in serious
              couples — we should talk.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 text-white text-lg tracking-wide hover:bg-neutral-800 transition-all"
            >
              Book Your Private Strategy Session
              <ArrowRight size={22} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
