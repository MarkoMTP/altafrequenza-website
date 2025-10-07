import { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Bot,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://hook.eu2.make.com/r8dwvoxpigk5hpc205yy6hjib64b1obt",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      if (res.ok) {
        setStatus("✅ Thanks! Check your email for the case study.");
        setEmail("");
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Network error. Please try again.");
    }
  };

  const services = [
    {
      icon: TrendingUp,
      title: "Wedding Planner Growth System™",
      subtitle: "Google Ads",
      description:
        "Precision-targeted Google Ads campaigns designed exclusively for luxury wedding planners. We position you in front of high-net-worth couples actively searching for elevated planning services.",
      features: [
        "Custom keyword strategy for luxury wedding searches",
        "High-intent lead generation",
        "Conversion-optimized landing pages",
        "Monthly performance analytics and strategy calls",
      ],
      path: "/growth-system",
    },
    {
      icon: Sparkles,
      title: "The Wedding Planner Social Media Package™",
      subtitle: "Social Media Marketing",
      description:
        "Sophisticated social media management that showcases your portfolio and attracts discerning couples. We craft content that reflects the elegance and exclusivity of your brand.",
      features: [
        "Editorial-style content creation",
        "Strategic Instagram & Pinterest presence",
        "Engagement with luxury wedding audiences",
        "Brand storytelling that converts followers into inquiries",
      ],
      path: "/social-media",
    },
    {
      icon: Bot,
      title: "The Wedding SmartForm™",
      subtitle: "AI Lead Capture Automation",
      description:
        "An intelligent form that replaces your traditional contact page. It instantly engages couples, collects detailed wedding information, and automatically qualifies inquiries based on budget and intent — all before you ever speak to them.",
      features: [
        "AI-powered pre-qualification of inquiries",
        "Customizable questions for detailed lead profiles",
        "Automatic lead routing to your inbox or CRM",
        "Integration with your website or landing pages",
      ],
      path: "/concierge",
    },
    {
      icon: Bot,
      title: "AI Planner’s Assistant™",
      subtitle: "AI Chat Concierge for Planners",
      description:
        "A 24/7 virtual assistant that lives on your website to answer FAQs, collect leads, and book consultations in real time — making your brand feel responsive, high-end, and always available.",
      features: [
        "Conversational AI chat that feels human and on-brand",
        "Instant answers to FAQs, pricing, and availability",
        "Calendar integration for instant call booking",
        "Seamless handoff to your team for hot leads",
      ],
      path: "/assistant",
    },
  ];

  const testimonials = [
    {
      name: "Isabella Martinez",
      role: "Founder, Bella Notte Events",
      quote:
        "Since partnering with Alta Frequenza, our average wedding budget has increased by 180%. They understand the luxury market like no other agency.",
      rating: 5,
    },
    {
      name: "Sophie Chen",
      role: "Creative Director, The Refined Affair",
      quote:
        "The Wedding SmartForm™ has transformed how we capture leads. We never miss an inquiry, and the quality scoring saves us countless hours.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 border border-neutral-200 text-sm tracking-wide text-neutral-600">
            <Sparkles size={16} className="text-amber-600" />
            Boutique Marketing for Luxury Wedding Planners
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-8 text-neutral-900">
            Helping Wedding Planners
            <br />
            <span className="italic">Attract Luxury Couples</span>
            <br />
            with Digital Marketing
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            We specialize in positioning elite wedding planners in front of
            high-net-worth couples who value exceptional service and
            unforgettable celebrations.
          </p>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white text-base tracking-wide hover:bg-neutral-800 transition-all"
          >
            Book Your Strategy Session
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </section>

      {/* Section: The Changing Luxury Market */}
      <section className="py-32 px-6 lg:px-12 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-8">
            The Changing Luxury Market
          </h2>
          <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
            Luxury couples have changed. Has your marketing? In 2026–2027,
            affluent couples expect personalization, elegance, and immediacy.
            They're seeking a curator of unforgettable experiences — not just a
            planner.
          </p>
          <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
            Most planners still rely on outdated social tactics or referrals,
            but high-net-worth couples are intentional and digitally
            sophisticated. They research extensively before ever reaching out.
          </p>
          <p className="italic text-neutral-800 text-lg">
            We’ve distilled what works into three pillars:{" "}
            <span className="font-semibold">
              Visibility, Attraction, and Automation.
            </span>
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm tracking-widest text-neutral-500 mb-4">
              OUR SERVICES
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">
              Comprehensive Solutions for
              <br />
              Elite Wedding Planners
            </h2>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-12 items-start border-t border-neutral-200 pt-16"
              >
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-900 text-white mb-6">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-3xl font-serif text-neutral-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm tracking-wide text-amber-600 mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-2 text-neutral-900 hover:gap-3 transition-all"
                  >
                    Learn More <ChevronRight size={16} />
                  </Link>
                </div>

                <div className="bg-neutral-50 p-8">
                  <h4 className="text-sm tracking-wide font-medium text-neutral-900 mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-neutral-700"
                      >
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: The Framework */}
      <section className="py-32 px-6 lg:px-12 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">
            The 3-Pillar System
          </h2>
          <p className="text-lg text-neutral-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            A comprehensive framework that combines visibility, attraction, and
            automation to help planners consistently book high-value weddings.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700">
              <h3 className="text-xl font-serif mb-4 text-amber-500">
                Visibility
              </h3>
              <p className="text-neutral-300">
                Strategic Google Ads positioning that captures high-intent
                searches from affluent couples ready to invest in luxury
                experiences.
              </p>
            </div>
            <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700">
              <h3 className="text-xl font-serif mb-4 text-amber-500">
                Attraction
              </h3>
              <p className="text-neutral-300">
                Editorial social media that elevates your brand and positions
                you as the aspirational choice in your market.
              </p>
            </div>
            <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700">
              <h3 className="text-xl font-serif mb-4 text-amber-500">
                Automation
              </h3>
              <p className="text-neutral-300">
                Intelligent AI systems that qualify leads and book consultations
                — while you focus on creating unforgettable weddings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-sm tracking-widest text-neutral-500 mb-4">
            CLIENT TESTIMONIALS
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">
            Trusted by Elite Wedding Planners
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-neutral-50 p-10 border border-neutral-200"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-amber-600"></div>
                ))}
              </div>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-medium text-neutral-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-neutral-600">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 lg:px-12 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
            Ready to Attract More Luxury Couples?
          </h2>
          <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
            Book a complimentary strategy session to discover how Alta Frequenza
            Marketing can elevate your wedding planning business to new heights.
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
  );
}
