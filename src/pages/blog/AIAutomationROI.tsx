import { Helmet } from "react-helmet-async";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPostProps {
  onNavigate: (page: string) => void;
}

export default function AIAutomationROI({ onNavigate }: BlogPostProps) {
  return (
    <>
      <Helmet>
        <title>
          The ROI of AI Automation for Wedding Planners | Alta Frequenza
          Marketing
        </title>
        <meta
          name="description"
          content="Discover how AI automation transforms luxury wedding planning by increasing qualified leads, saving time, and boosting ROI. Learn how wedding planners can use AI to grow smarter."
        />
        <meta
          name="keywords"
          content="AI wedding planner, AI automation, wedding planner marketing, wedding planner chatbot, wedding planner lead generation, luxury wedding marketing"
        />
        <meta
          property="og:title"
          content="The ROI of AI Automation for Wedding Planners | Alta Frequenza Marketing"
        />
        <meta
          property="og:description"
          content="Learn how AI tools deliver real ROI for luxury wedding planners — from tripled qualified leads to massive time savings."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://altafrequenzamarketing.com/blog/ai-automation-roi"
        />
        <meta
          property="og:image"
          content="https://altafrequenzamarketing.com/og-ai-automation.jpg"
        />
        <link
          rel="canonical"
          href="https://altafrequenzamarketing.com/blog/ai-automation-roi"
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
              Technology
            </p>
            <h1 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-6 leading-tight">
              The ROI of AI Automation for Wedding Planners
            </h1>
            <div className="flex items-center gap-6 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                February 20, 2024
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />6 min read
              </div>
            </div>
          </div>

          <img
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="AI technology"
            className="w-full h-96 object-cover mb-12"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              AI automation tools are transforming how elite wedding planners
              capture and qualify leads. The results speak for themselves: more
              qualified inquiries, dramatically reduced administrative time, and
              increased revenue per client.
            </p>

            <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">
              The Problem: Lost Leads and Wasted Time
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Every luxury wedding planner faces two persistent challenges:
            </p>

            <ul className="space-y-3 mb-8 ml-6">
              <li className="text-lg text-neutral-700">
                <strong>Lost opportunities:</strong> Couples visit your website
                at midnight or on weekends. If they don't get immediate
                responses, they move on to competitors.
              </li>
              <li className="text-lg text-neutral-700">
                <strong>Wasted time:</strong> You spend hours answering the same
                questions repeatedly, qualifying leads, and scheduling
                consultations—time that could be spent on actual wedding
                planning.
              </li>
            </ul>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              AI automation solves both problems simultaneously.
            </p>

            <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">
              How AI Wedding Concierge Works
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              When a couple visits your website, an AI-powered concierge engages
              them in natural conversation. It asks strategic questions about
              their wedding date, location, guest count, budget, and
              vision—capturing detailed information that helps you prepare for
              consultations.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              But here's where it gets powerful: the AI doesn't just collect
              information. It automatically assigns quality scores based on
              budget indicators, timeline, and level of engagement. You
              instantly know which inquiries are serious, high-budget couples
              versus casual browsers.
            </p>

            <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">
              Real ROI: What Wedding Planners Are Seeing
            </h2>

            <div className="bg-neutral-50 p-8 my-8 border border-neutral-200">
              <h3 className="text-xl font-medium text-neutral-900 mb-6">
                Average Results After 6 Months:
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-serif text-amber-600 mb-2">
                    3x
                  </div>
                  <p className="text-neutral-700">
                    Increase in qualified leads
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-serif text-amber-600 mb-2">
                    85%
                  </div>
                  <p className="text-neutral-700">
                    Time saved on lead qualification
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-serif text-amber-600 mb-2">
                    40%
                  </div>
                  <p className="text-neutral-700">More consultation bookings</p>
                </div>
                <div>
                  <div className="text-4xl font-serif text-amber-600 mb-2">
                    $45k
                  </div>
                  <p className="text-neutral-700">
                    Additional average revenue per year
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">
              Time Savings Translate to Revenue
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Consider how you currently spend your time:
            </p>

            <ul className="space-y-3 mb-8 ml-6">
              <li className="text-lg text-neutral-700">
                Answering FAQ emails from website visitors
              </li>
              <li className="text-lg text-neutral-700">
                Scheduling consultation calls back and forth
              </li>
              <li className="text-lg text-neutral-700">
                Qualifying leads to determine if they're a good fit
              </li>
              <li className="text-lg text-neutral-700">
                Responding to after-hours inquiries the next morning (when the
                couple has already moved on)
              </li>
            </ul>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              AI automation handles all of this instantly and automatically. The
              hours you reclaim can be invested in higher-value activities:
              refining your service offerings, networking with luxury vendors,
              or actually planning weddings.
            </p>

            <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">
              Improved Lead Quality = Higher Conversion Rates
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              When you know a lead's budget, timeline, and priorities before
              your first conversation, consultations become dramatically more
              effective. You're not wasting time on couples who can't afford
              your services or aren't ready to commit.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Wedding planners using AI automation report conversion rates 2-3x
              higher than traditional inquiry forms, specifically because
              they're only speaking with pre-qualified, serious couples.
            </p>

            <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">
              The Competitive Advantage
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              While your competitors are still using generic contact forms and
              responding to inquiries during business hours, you're providing an
              elevated, personalized experience 24/7. This difference is
              immediately apparent to luxury couples—and often the deciding
              factor in who they hire.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-8 my-12">
              <h3 className="text-2xl font-serif text-neutral-900 mb-4">
                Is AI Automation Worth It?
              </h3>
              <p className="text-lg text-neutral-800 leading-relaxed">
                For luxury wedding planners, the ROI is undeniable. The
                combination of increased lead volume, improved lead quality,
                massive time savings, and elevated client experience makes AI
                automation one of the highest-leverage investments you can make
                in your business.
              </p>
            </div>

            <div className="mt-16 pt-12 border-t border-neutral-200">
              <h3 className="text-2xl font-serif text-neutral-900 mb-6">
                Add AI Automation to Your Business
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                Our AI Concierge Suite includes both lead capture and FAQ
                chatbot functionality, specifically designed for luxury wedding
                planners. Start capturing and qualifying leads 24/7.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-neutral-900 text-lg tracking-wide hover:bg-neutral-100 transition-all"
              >
                Learn more about AI tools
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
