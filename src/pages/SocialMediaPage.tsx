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
          Social Media Management for Wedding Planners and Venues | Alta
          Frequenza Marketing
        </title>

        <meta
          name="description"
          content="Social media management for wedding planners and venues designed to build trust, strengthen positioning, and turn your online presence into a source of better wedding enquiries."
        />

        <meta
          name="keywords"
          content="social media for wedding planners, social media for wedding venues, instagram wedding planner, wedding planner marketing, wedding venue marketing, content creation wedding planners"
        />

        <meta
          property="og:title"
          content="Social Media Management for Wedding Planners and Venues"
        />
        <meta
          property="og:description"
          content="A structured social media system built to strengthen trust, improve positioning, and attract better wedding enquiries."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="bg-white pt-20">
        {/* HERO / OUTCOME */}
        <section className="min-h-[70vh] flex items-center justify-center px-6 lg:px-12 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 border border-neutral-200 text-sm tracking-wide text-neutral-600">
              <Sparkles size={16} className="text-sky-600" />
              Social Media for Wedding Planners and Venues
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-slate-900 leading-tight mb-8">
              A Social Presence That Builds Trust Before Couples Even Contact
              You
            </h1>

            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed mb-10">
              We help wedding planners and venues create a stronger online
              presence that makes them look more established, more trustworthy,
              and more worth contacting the moment couples discover their brand.
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

        {/* MECHANISM */}
        <section className="py-24 px-6 lg:px-12 bg-slate-50">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs tracking-[0.25em] text-sky-600 mb-4">
              HOW WE CREATE THE OUTCOME
            </p>

            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
              We Turn Your Instagram Into a Trust-Building Sales Asset
            </h2>

            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed mb-16">
              This is not about posting for the sake of posting. We structure
              your presence so that when couples land on your profile, they
              instantly understand your style, your level, and why you feel like
              the right choice.
            </p>

            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto text-left">
              {[
                {
                  icon: <Instagram size={26} />,
                  title: "1. Stronger Brand Presentation",
                  desc: "We create a more polished, cohesive profile that makes your business feel more premium and more credible at first glance.",
                },
                {
                  icon: <Calendar size={26} />,
                  title: "2. Consistent Content Structure",
                  desc: "We plan and manage content so your brand stays visible, active, and reliable instead of looking inconsistent or forgotten.",
                },
                {
                  icon: <MessageCircle size={26} />,
                  title: "3. Content That Moves Couples Closer",
                  desc: "Your content is shaped to build trust, communicate value, and make enquiries feel like the natural next step.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-8 border border-slate-200 rounded-2xl"
                >
                  <div className="text-sky-600 mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-serif text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY IT WORKS */}
        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <p className="text-xs tracking-[0.25em] text-sky-600 mb-4">
              WHY THIS WORKS
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
              Because Couples Judge the Experience Before They Ever Contact You
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              High-quality couples do not just look at photos. They read the
              room. They pay attention to consistency, taste, structure, and how
              professionally a brand presents itself online. A stronger social
              presence increases confidence before the first message is ever
              sent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Higher Trust",
                desc: "A polished and active profile makes your business feel more established and more dependable.",
              },
              {
                title: "Stronger Perceived Value",
                desc: "Better presentation helps couples see your service as more premium before they even speak with you.",
              },
              {
                title: "Better Positioning",
                desc: "Clearer content helps differentiate you from competitors who look inconsistent or generic.",
              },
              {
                title: "More Enquiry Readiness",
                desc: "When couples trust what they see, reaching out feels easier and safer.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 p-8 border border-neutral-200 rounded-2xl"
              >
                <div className="text-4xl mb-4">✔</div>
                <h3 className="text-xl font-medium text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT MAKES US DIFFERENT */}
        <section className="py-24 px-6 lg:px-12 bg-white border-t border-slate-200">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <p className="text-xs tracking-[0.25em] text-sky-600 mb-4">
              WHAT MAKES US DIFFERENT
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
              Not Generic Social Media Management
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Most social media services focus on posting more. We focus on
              helping wedding planners and venues look more trustworthy, more
              refined, and more attractive to the kind of couples they actually
              want to book.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Wedding Industry-Specific",
                desc: "We understand how couples choose planners and venues, and we shape your content around that decision-making process.",
              },
              {
                title: "Built Around Enquiries, Not Just Aesthetics",
                desc: "A beautiful feed matters, but the real goal is helping couples feel confident enough to contact you.",
              },
              {
                title: "Positioning-Focused",
                desc: "We do not just fill a content calendar. We help build a stronger brand presence that supports premium perception.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 p-8 border border-slate-200 rounded-2xl"
              >
                <h3 className="text-2xl font-serif text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SOCIAL PROOF / CASE STUDIES */}
        <section className="py-24 px-6 lg:px-12 bg-slate-900 text-white">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <p className="text-xs tracking-[0.25em] text-sky-400 mb-4">
              CASE STUDIES
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Stronger Presence. Better Signals. Better Results.
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Social media performance should not be judged only by likes. What
              matters is whether the brand looks stronger, reaches the right
              people, and supports more enquiries over time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-slate-800 p-8 border border-slate-700 rounded-xl">
              <h4 className="text-2xl font-serif mb-4">
                Destination Wedding Planner
              </h4>
              <ul className="space-y-3 text-slate-300">
                <li>
                  <CheckCircle size={18} className="inline text-sky-400 mr-2" />
                  More consistent posting and brand presence
                </li>
                <li>
                  <CheckCircle size={18} className="inline text-sky-400 mr-2" />
                  Stronger positioning for luxury destination couples
                </li>
                <li>
                  <CheckCircle size={18} className="inline text-sky-400 mr-2" />
                  Better trust signals before enquiry
                </li>
                <li>
                  <CheckCircle size={18} className="inline text-sky-400 mr-2" />
                  Content that supported overall lead generation efforts
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 border border-slate-700 rounded-xl">
              <h4 className="text-2xl font-serif mb-4">Liz Tuson</h4>
              <p className="inline text-sky-400 mr-2">
                Marko has been fantastic in helping boost my business and online
                presence as a wedding planner in Italy. He immediately
                understood my style and the image I wanted to convey. After only
                a few months, I’ve already seen an increase in enquiries that
                has led to new bookings. I highly recommend Alta Frequenza!
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center mt-14">
            <p className="text-slate-400">
              Results vary depending on current brand strength, content quality,
              posting frequency, market positioning, and how well the rest of
              the business converts interest into enquiries.
            </p>
          </div>
        </section>

        {/* NEXT STEPS */}
        <section className="py-24 px-6 lg:px-12 bg-sky-50">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs tracking-[0.25em] text-sky-600 mb-4">
              NEXT STEPS
            </p>

            <h2 className="text-4xl font-serif text-slate-900 mb-6">
              Let’s See What Your Brand Could Look Like With the Right Structure
            </h2>

            <p className="text-lg text-slate-700 mb-6 max-w-3xl mx-auto">
              If your current Instagram does not fully reflect the level of your
              work, we can help you build a stronger, more consistent presence
              that supports better enquiries and a better first impression.
            </p>

            <p className="text-xl text-slate-800 mb-2">
              Pricing starts at <strong>€800 per month</strong>
            </p>
            <p className="text-slate-500 mb-10">
              Final pricing depends on posting frequency, content creation
              needs, and overall scope.
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
