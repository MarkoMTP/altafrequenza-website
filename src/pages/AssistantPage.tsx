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
          content="The Smart Wedding Assistant™ helps wedding planners respond instantly to couples 24/7 — answering questions, collecting details, and booking consultations automatically."
        />
        <meta
          name="keywords"
          content="AI wedding planner assistant, wedding planner chatbot, wedding automation, AI for wedding planners, destination wedding marketing"
        />
      </Helmet>

      <div className="bg-white pt-20">
        {/* HERO */}
        <section className="min-h-[70vh] flex items-center justify-center px-6 lg:px-12 py-24">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 border border-slate-300 text-sm tracking-wide text-slate-600">
              <Sparkles size={16} className="text-sky-600" />
              Your 24/7 Digital Assistant for Wedding Planners
            </div>

            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8 text-slate-900">
              The Smart Wedding Assistant™
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12">
              A refined digital assistant that welcomes couples, responds
              instantly, collects details, and guides them to book a
              consultation — all in your brand’s tone.
            </p>

            <Link
              to={"/contact"}
              className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white text-lg rounded-full hover:bg-slate-800 transition-all"
            >
              Add The Smart Wedding Assistant™ to Your Website
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {/* VISUAL CHAT MOCKUP */}
        <section className="py-24 px-6 lg:px-12 bg-slate-50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* Chat Example */}
            <div className="mx-auto w-full max-w-[480px]">
              <div className="rounded-[28px] overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
                {/* Header */}
                <div className="relative bg-gradient-to-r from-sky-600 to-sky-500 text-white px-5 sm:px-6 py-5">
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
                <div className="h-[440px] overflow-y-auto bg-white px-4 sm:px-5 py-5">
                  <div className="max-w-[88%]">
                    <div className="bg-white shadow-sm rounded-2xl p-4 border border-slate-200">
                      <p className="text-[13.5px] text-slate-800">
                        Hi there 👋 I’m your Smart Wedding Assistant from{" "}
                        <span className="font-medium">Serafina Weddings</span>.
                        We design elegant destination weddings across Italy. How
                        can I assist you today?
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
                          className="rounded-full bg-sky-100 text-sky-900 text-[13px] px-4 py-2 border border-sky-200 shadow-inner cursor-not-allowed"
                        >
                          {label}
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="max-w-[88%] mt-6">
                    <div className="bg-white shadow-sm rounded-2xl p-4 border border-slate-200">
                      <p className="text-[13.5px] text-slate-800">
                        Our full-service planning covers venue scouting, vendor
                        management, design, and coordination — everything for a
                        seamless celebration.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Input */}
                <div className="bg-slate-100 border-t border-sky-200 px-4 sm:px-5 py-3">
                  <div className="flex items-center gap-2">
                    <input
                      disabled
                      placeholder="Type your message..."
                      className="flex-1 bg-white border border-slate-200 rounded-xl px-3 py-2 text-[13.5px] text-slate-700 placeholder:text-slate-500 cursor-not-allowed"
                    />
                    <button
                      disabled
                      className="p-2 rounded-full bg-sky-100 border border-sky-200 text-sky-800 cursor-not-allowed"
                    >
                      <Mic size={16} />
                    </button>
                    <button
                      disabled
                      className="p-2 rounded-full bg-sky-100 border border-sky-200 text-sky-800 cursor-not-allowed"
                    >
                      <Headphones size={16} />
                    </button>
                    <button
                      disabled
                      className="p-2 rounded-full bg-sky-100 border border-sky-200 text-sky-800 cursor-not-allowed"
                    >
                      <Send size={16} />
                    </button>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-white border-t border-slate-200">
                  <div className="text-[11px] text-slate-500 px-4 py-2 text-center">
                    Powered by Alta Frequenza Marketing
                  </div>
                  <div className="flex items-center justify-around px-4 py-3 text-slate-600">
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

              {/* CTA under mockup */}
              <div className="mt-8 text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-sky-600 text-white text-lg rounded-full hover:bg-sky-700 transition-all"
                >
                  Want a demo with your branding for free?
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            {/* Text Column */}
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
                Elegant Conversations. Instant Results.
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Every couple wants to feel heard. The Smart Wedding Assistant™
                responds instantly with warmth and clarity, reflecting your tone
                perfectly.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                It doesn’t just answer questions, it captures details, qualifies
                interest, and guides couples to book a consultation at the ideal
                moment.
              </p>
            </div>
          </div>
        </section>

        {/* WHY IT WORKS */}
        <section className="py-24 px-6 lg:px-12 bg-white">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <p className="text-sm tracking-widest text-slate-500 mb-4">
              WHY IT WORKS
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900">
              Why The Smart Wedding Assistant™ Converts So Well
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-8 text-lg text-slate-700 leading-relaxed">
            <p>
              <span className="font-medium">
                Couples expect instant replies.
              </span>
              The planner who responds first usually earns the booking.
            </p>
            <p>
              <span className="font-medium">It engages emotionally.</span>
              When excitement peaks, the Assistant keeps them connected.
            </p>
            <p>
              <span className="font-medium">It sounds just like you.</span>
              Trained on your tone, your content, your elegance.
            </p>
            <p>
              <span className="font-medium">
                It filters inquiries automatically.
              </span>
              You speak only with couples who are serious and aligned.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 px-6 lg:px-12 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm tracking-widest text-slate-500 mb-4">
                HOW IT WORKS
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900">
                A Seamless Extension of Your Brand
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "An Elegant First Impression",
                  text: "A subtle, inviting chat bubble appears on your site, reflecting your brand identity.",
                },
                {
                  step: "02",
                  title: "Smart Human-Like Conversations",
                  text: "It answers naturally, with empathy and precision.",
                },
                {
                  step: "03",
                  title: "Effortless Lead Capture",
                  text: "It collects details and directs couples to book consultations seamlessly.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-white p-8 border border-slate-200"
                >
                  <div className="text-5xl font-serif text-sky-600 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PERSONALIZATION */}
        <section className="py-24 px-6 lg:px-12 bg-white">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <p className="text-sm tracking-widest text-slate-500 mb-4">
              BRAND PERSONALIZATION
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900">
              Built to Speak Like You
            </h2>
          </div>

          <div className="max-w-4xl mx-auto text-lg text-slate-700 leading-relaxed space-y-6 text-center">
            <p>
              Every Smart Wedding Assistant™ is custom-designed, trained on your
              brand’s language, your process, and the way you speak to couples.
            </p>
            <p>
              It learns your tone, your style, and how you explain your
              services. Within days, it becomes a natural extension of your
              business.
            </p>
            <p className="font-medium">
              The result is warm, natural conversations that build trust
              instantly.
            </p>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-24 px-6 lg:px-12 bg-slate-900 text-white">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <p className="text-sm tracking-widest text-slate-400 mb-4">
              KEY BENEFITS
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Why Planners Love It
            </h2>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Clock className="text-sky-400 mb-4" size={32} />,
                title: "Reclaim Your Time",
                text: "Automate first-touch communication and focus on delivering exceptional events.",
              },
              {
                icon: <CheckCircle className="text-sky-400 mb-4" size={32} />,
                title: "Capture Every Lead",
                text: "Instant responses across time zones turn late-night visitors into qualified inquiries.",
              },
              {
                icon: <MessageSquare className="text-sky-400 mb-4" size={32} />,
                title: "Guide Couples Smoothly",
                text: "Structured, helpful conversations lead couples toward booking naturally.",
              },
              {
                icon: <Sparkles className="text-sky-400 mb-4" size={32} />,
                title: "Elevate Brand Perception",
                text: "Fast, elegant communication reinforces professionalism and trust.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="bg-slate-800 p-8 border border-slate-700"
              >
                {b.icon}
                <h3 className="text-xl font-medium mb-3">{b.title}</h3>
                <p className="text-slate-300 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 px-6 lg:px-12 bg-sky-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
              Offer Instant, Personalized Service
            </h2>
            <p className="text-lg text-slate-700 mb-10 leading-relaxed">
              Stop losing inquiries to slow responses. Your Smart Wedding
              Assistant™ becomes a warm first touchpoint that never sleeps.
            </p>
            <Link
              to={"/contact"}
              className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white text-lg rounded-full hover:bg-slate-800 transition-all"
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
