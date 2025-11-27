import { Helmet } from "react-helmet-async";
import { Heart, Target, Award, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>
          About Alta Frequenza Marketing | Wedding Planner Marketing Experts
        </title>
        <meta
          name="description"
          content="Learn about Alta Frequenza Marketing — a boutique agency helping  wedding planners attract high-end international couples through Google Ads, social media, and AI automation."
        />
        <meta
          name="keywords"
          content="wedding planner marketing, luxury wedding planner, destination wedding marketing, Google Ads for wedding planners, social media for wedding planners, wedding planner AI"
        />
        <meta
          property="og:title"
          content="About Alta Frequenza Marketing |  Wedding Planner Marketing Experts"
        />
        <meta
          property="og:description"
          content="Alta Frequenza Marketing helps  wedding planners grow their luxury clientele through refined marketing and technology."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://altafrequenzamarketing.com/about"
        />
        <meta
          property="og:image"
          content="https://altafrequenzamarketing.com/og-about.jpg"
        />
        <link rel="canonical" href="https://altafrequenzamarketing.com/about" />
      </Helmet>
      <div className="bg-white pt-20">
        <section className="min-h-[70vh] flex items-center justify-center px-6 lg:px-12 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm tracking-widest text-neutral-500 mb-6">
              ABOUT ALTA FREQUENZA
            </p>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8 text-neutral-900">
              A Boutique Marketing Agency
              <br />
              <span className="italic">Dedicated to the wedding industry</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              We exist for one purpose: to help wedding planners attract and
              book consistently couples they deserve to work with.
            </p>
          </div>
        </section>

        <section className="py-24 px-6 lg:px-12 bg-neutral-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
                  Why We Specialize in Wedding Planners
                </h2>
                <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
                  <p>
                    The wedding industry is unique. It requires a deep
                    understanding of affluent consumer psychology, refined
                    aesthetics, and the art of positioning a brand as truly
                    exclusive.
                  </p>
                  <p>
                    Generic marketing agencies treat wedding planners like any
                    other service business. They run cookie-cutter campaigns
                    that attract tire-kickers and budget shoppers.
                  </p>
                  <p>
                    We're different. We've studied the wedding market
                    extensively. We know what high-net-worth couples are looking
                    for, where they search, and what messaging resonates with
                    them.
                  </p>
                  <p>
                    Our singular focus allows us to deliver results that
                    generalist agencies simply cannot match.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-8 border border-neutral-200">
                  <div className="text-4xl font-serif text-amber-600 mb-3">
                    5+
                  </div>
                  <div className="text-neutral-600">
                    Average Amount Of Weddings Booked
                  </div>
                </div>
                <div className="bg-white p-8 border border-neutral-200">
                  <div className="text-4xl font-serif text-amber-600 mb-3">
                    92%
                  </div>
                  <div className="text-neutral-600">Client Retention Rate</div>
                </div>
                <div className="bg-white p-8 border border-neutral-200">
                  <div className="text-4xl font-serif text-amber-600 mb-3">
                    5x
                  </div>
                  <div className="text-neutral-600">Average ROI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm tracking-widest text-neutral-500 mb-4">
                OUR APPROACH
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">
                Three Pillars of Success
              </h2>
            </div>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-neutral-900 text-white flex items-center justify-center">
                    <Target size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-neutral-900 mb-4">
                    Precision Targeting
                  </h3>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    We don't cast a wide net. We use sophisticated targeting
                    strategies to place your brand directly in front of couples
                    who are actively searching for a wedding planner and have
                    the budget to match their vision.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-neutral-900 text-white flex items-center justify-center">
                    <Heart size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-neutral-900 mb-4">
                    Brand Elevation
                  </h3>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    Your marketing should reflect the caliber of weddings you
                    create. We develop sophisticated brand messaging,
                    editorial-style content, and elegant campaigns that position
                    you as the premier choice for discerning couples.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-neutral-900 text-white flex items-center justify-center">
                    <Award size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-neutral-900 mb-4">
                    Cutting-Edge Technology
                  </h3>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    We've developed proprietary AI tools that automate lead
                    capture, qualification, and nurturing — ensuring you never
                    miss a lead, while automatically filtering out unqualified
                    inquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 lg:px-12 bg-neutral-900 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm tracking-widest text-neutral-400 mb-4">
                OUR STORY
              </p>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">
                Built on Expertise, Trust, and Results
              </h2>
            </div>

            <div className="bg-neutral-800 p-12 border border-neutral-700">
              <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                <p>
                  Alta Frequenza Marketing was founded after years of working
                  inside the wedding industry and witnessing a persistent
                  problem: talented wedding planners struggling to attract the
                  caliber of clients their work deserved.
                </p>
                <p>
                  We saw an opportunity to bridge this gap — combining deep
                  industry knowledge with advanced digital marketing strategies
                  and proprietary AI technology.
                </p>
                <p>
                  Today, Alta Frequenza serves some of the most prestigious
                  wedding planning firms worldwide, consistently driving growth
                  and elevating brand perception.
                </p>
                <p className="text-white font-medium pt-4">
                  We're not just a marketing agency—we're your strategic partner
                  in building a thriving luxury wedding planning business.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 lg:px-12 bg-white border-t border-neutral-200">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <div className="w-12 h-px bg-amber-600 mb-8"></div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-neutral-900 leading-tight">
                About the Founder —<br />
                Marko Matković
              </h2>
            </div>

            <div className="space-y-6 text-base md:text-lg text-neutral-700 leading-relaxed">
              <p>
                A software engineer and digital marketing strategist, Marko has
                spent years building AI automations and marketing systems across
                multiple industries.
              </p>
              <p>
                Recognizing that wedding planners deserved marketing systems as
                refined as the celebrations they create, Marko founded Alta
                Frequenza Marketing.
              </p>
              <p className="text-neutral-900 font-medium">
                By combining technical innovation with marketing expertise, he
                developed exclusive systems designed for one purpose: helping
                planners attract and convert high-net-worth couples worldwide.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
              Experience the Alta Frequenza Difference
            </h2>
            <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
              Join the wedding planners who trust us to elevate their marketing
              and grow their luxury clientele.
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
