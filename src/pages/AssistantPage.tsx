import {
  MessageSquare,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  Send,
  Mic,
  Headphones,
  Home,
  MessageCircle,
  HelpCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface AssistantPageProps {
  onNavigate: (page: string) => void;
}

export default function AssistantPage({ onNavigate }: AssistantPageProps) {
  return (
    <>
      <Helmet>
        <title>The Smart Wedding Assistant™ | Alta Frequenza Marketing</title>
        <meta
          name="description"
          content="The Smart Wedding Assistant™ helps luxury wedding planners respond instantly to couples 24/7 — answering questions, collecting details, and booking consultations automatically."
        />
        <meta
          name="keywords"
          content="AI wedding planner assistant, wedding planner chatbot, luxury wedding automation, AI for wedding planners, destination wedding marketing"
        />
        <meta
          property="og:title"
          content="The Smart Wedding Assistant™ | Alta Frequenza Marketing"
        />
        <meta
          property="og:description"
          content="Offer instant, intelligent responses to couples — 24/7. Capture details and book calls effortlessly with The Smart Wedding Assistant™."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://altafrequenzamarketing.com/assistant"
        />
        <meta
          property="og:image"
          content="https://altafrequenzamarketing.com/og-assistant.jpg"
        />
        <link
          rel="canonical"
          href="https://altafrequenzamarketing.com/assistant"
        />
      </Helmet>

      <div className="bg-white pt-20">
        {/* HERO */}
        <section className="min-h-[70vh] flex items-center justify-center px-6 lg:px-12 py-24">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 border border-neutral-200 text-sm tracking-wide text-neutral-600">
              <Sparkles size={16} className="text-amber-600" />
              Your 24/7 Digital Assistant for Wedding Planners
            </div>

            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8 text-neutral-900">
              The Smart Wedding Assistant™
            </h1>

            <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto mb-12">
              A beautifully designed digital assistant that welcomes couples,
              answers instantly, collects details, and guides them to book a
              consultation — in your brand’s tone, day or night.
            </p>

            <Link
              to={"/contact"}
              className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 text-white text-lg tracking-wide hover:bg-neutral-800 transition-all"
            >
              Add The Smart Wedding Assistant™ to Your Website
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {/* VISUAL CHAT MOCKUP */}
        <section className="py-24 px-6 lg:px-12 bg-neutral-50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* Chat Example */}
            <div className="mx-auto w-full max-w-[480px]">
              <div className="rounded-[28px] overflow-hidden shadow-xl border border-neutral-200 bg-amber-50">
                {/* Header */}
                <div className="relative bg-gradient-to-r from-amber-700 to-yellow-500 text-white px-5 sm:px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <ChevronLeft size={18} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">
                        Serafina Weddings
                      </div>
                      <div className="text-xs text-white/80">
                        Your Smart Wedding Assistant
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Sparkles size={18} />
                    </div>
                  </div>
                </div>

                {/* Conversation */}
                <div className="h-[440px] overflow-y-auto bg-[#fffdf7] px-4 sm:px-5 py-5">
                  <div className="max-w-[88%]">
                    <div className="bg-white shadow-sm rounded-2xl p-4 border border-neutral-100">
                      <p className="text-[13.5px] text-neutral-800">
                        Hi there 👋 I’m your Smart Wedding Assistant from{" "}
                        <span className="font-medium">Serafina Weddings</span>.
                        We design elegant destination weddings across Italy —
                        from Lake Como to the Amalfi Coast. How can I help you
                        today?
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    {[
                      "View Planning Packages",
                      "Schedule a Consultation",
                      "See Our Favorite Venues",
                    ].map((label) => (
                      <div key={label}>
                        <button
                          disabled
                          className="rounded-full bg-amber-100 text-amber-900 text-[13px] px-4 py-2 border border-amber-200 shadow-inner cursor-not-allowed"
                        >
                          {label}
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="max-w-[88%] mt-6">
                    <div className="bg-white shadow-sm rounded-2xl p-4 border border-neutral-100">
                      <p className="text-[13.5px] text-neutral-800">
                        Our full-service planning covers venue scouting, vendor
                        management, design, and on-the-day coordination —
                        everything you need for a seamless celebration.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Input */}
                <div className="bg-[#fff8e9] border-t border-amber-200 px-4 sm:px-5 py-3">
                  <div className="flex items-center gap-2">
                    <input
                      disabled
                      placeholder="Type your message..."
                      className="flex-1 bg-white/70 border border-amber-200 rounded-xl px-3 py-2 text-[13.5px] text-neutral-700 placeholder:text-amber-900/50 cursor-not-allowed"
                    />
                    <button
                      disabled
                      className="p-2 rounded-full bg-amber-100 border border-amber-200 text-amber-800 cursor-not-allowed"
                    >
                      <Mic size={16} />
                    </button>
                    <button
                      disabled
                      className="p-2 rounded-full bg-amber-100 border border-amber-200 text-amber-800 cursor-not-allowed"
                    >
                      <Headphones size={16} />
                    </button>
                    <button
                      disabled
                      className="p-2 rounded-full bg-amber-100 border border-amber-200 text-amber-800 cursor-not-allowed"
                    >
                      <Send size={16} />
                    </button>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-white border-t border-neutral-200">
                  <div className="text-[11px] text-neutral-500 px-4 py-2 text-center">
                    Powered by Alta Frequenza Marketing
                  </div>
                  <div className="flex items-center justify-around px-4 py-3 text-neutral-600">
                    <div className="flex flex-col items-center gap-1 text-xs">
                      <Home size={18} />
                      <span>Home</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-xs">
                      <MessageCircle size={18} />
                      <span>Chats</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-xs">
                      <HelpCircle size={18} />
                      <span>FAQ</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA under visual */}
              <div className="mt-8 text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-amber-600 text-white text-lg rounded-full hover:bg-amber-700 transition-all"
                >
                  Want to see a demo with your branding — for free?
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            {/* Text Column */}
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
                Elegant Conversations. Instant Results.
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Every couple wants to feel heard — even before they meet you.
                The Smart Wedding Assistant™ responds instantly with warmth,
                clarity, and detail, mirroring your brand voice perfectly.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                It doesn’t just answer questions — it qualifies, captures
                details like wedding date, location, and guest count, and guides
                couples to book a consultation when interest peaks.
              </p>
            </div>
          </div>
        </section>

        {/* WHY IT WORKS */}
        <section className="py-24 px-6 lg:px-12 bg-white">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <p className="text-sm tracking-widest text-neutral-500 mb-4">
              WHY IT WORKS
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">
              Why The Smart Wedding Assistant™ Converts So Well
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-8 text-lg text-neutral-700 leading-relaxed">
            <p>
              <span className="font-medium">
                Couples expect instant answers.
              </span>
              High-end clients rarely wait for replies. The planner who responds
              first usually earns the booking.
            </p>
            <p>
              <span className="font-medium">
                Emotion drives early decisions.
              </span>
              When excitement peaks, the Assistant keeps them engaged and
              connected — before they explore other planners.
            </p>
            <p>
              <span className="font-medium">It mirrors your expertise.</span>
              Because it’s trained on your brand’s language, every conversation
              feels confident, warm, and authentic.
            </p>
            <p>
              <span className="font-medium">
                It qualifies leads automatically.
              </span>
              No more back-and-forth with unready inquiries — you speak only
              with couples who are serious and aligned with your services.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 px-6 lg:px-12 bg-neutral-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm tracking-widest text-neutral-500 mb-4">
                HOW IT WORKS
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">
                A Seamless Extension of Your Brand Experience
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "An Elegant First Impression",
                  text: "A refined chat bubble appears on your site — subtle, inviting, and on-brand.",
                },
                {
                  step: "02",
                  title: "Smart Conversations That Feel Human",
                  text: "It answers with empathy and precision, reflecting your brand’s personality.",
                },
                {
                  step: "03",
                  title: "Effortless Lead Capture",
                  text: "Collects details and smoothly directs couples to book a consultation or call.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-white p-8 border border-neutral-200"
                >
                  <div className="text-5xl font-serif text-amber-600 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-neutral-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRAINED TO SPEAK LIKE YOU */}
        <section className="py-24 px-6 lg:px-12 bg-white">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <p className="text-sm tracking-widest text-neutral-500 mb-4">
              BRAND PERSONALIZATION
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">
              Trained to Speak Like You
            </h2>
          </div>

          <div className="max-w-4xl mx-auto text-lg text-neutral-700 leading-relaxed space-y-6 text-center">
            <p>
              Every Smart Wedding Assistant™ is built from scratch — tailored to
              your brand, your tone, and your process. We study your website,
              social content, and service flow to teach your Assistant how{" "}
              <span className="italic">you</span> communicate.
            </p>
            <p>
              It learns your style, the language you use with couples, and how
              you explain your packages. Within days, it becomes an intelligent
              reflection of your business — answering questions and guiding
              couples just as you would.
            </p>
            <p className="font-medium">
              The result? Conversations that feel human, warm, and aligned with
              your brand — while saving you hours every week.
            </p>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-24 px-6 lg:px-12 bg-neutral-900 text-white">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <p className="text-sm tracking-widest text-neutral-400 mb-4">
              KEY BENEFITS
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Why Wedding Planners Love It
            </h2>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Clock className="text-amber-600 mb-4" size={32} />,
                title: "Reclaim Your Creative Time",
                text: "Automate FAQs and first-touch inquiries while you focus on creating unforgettable events.",
              },
              {
                icon: <CheckCircle className="text-amber-600 mb-4" size={32} />,
                title: "Capture Every Opportunity",
                text: "It responds instantly across time zones — turning midnight visitors into qualified leads.",
              },
              {
                icon: (
                  <MessageSquare className="text-amber-600 mb-4" size={32} />
                ),
                title: "Guide Couples Effortlessly",
                text: "Every response builds trust and leads them smoothly toward booking a consultation.",
              },
              {
                icon: <Sparkles className="text-amber-600 mb-4" size={32} />,
                title: "Elevate Your Brand Presence",
                text: "Fast, elegant communication reflects professionalism and exclusivity.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="bg-neutral-800 p-8 border border-neutral-700 text-left"
              >
                {b.icon}
                <h3 className="text-xl font-medium mb-3">{b.title}</h3>
                <p className="text-neutral-300 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 px-6 lg:px-12 bg-amber-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
              Offer Immediate, Personalized Service — Even While You Sleep
            </h2>
            <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
              Stop losing luxury leads to slow responses. The Smart Wedding
              Assistant™ greets couples instantly, answers beautifully, and
              guides them to book — all in your voice.
            </p>
            <Link
              to={"/contact"}
              className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 text-white text-lg tracking-wide hover:bg-neutral-800 transition-all"
            >
              Request Your Free Personalized Demo
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
