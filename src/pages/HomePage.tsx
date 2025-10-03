import { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Bot,
  ChevronRight,
} from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [email, setEmail] = useState("");

  const [status, setStatus] = useState("");

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://hook.eu2.make.com/r8dwvoxpigk5hpc205yy6hjib64b1obt",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (res.ok) {
        setStatus("✅ Thanks! Check your email for the case study.");
        setEmail(""); // clear input after success
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
        "Monthly performance analytics",
      ],
      page: "growth-system",
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
        "Brand storytelling that converts",
      ],
      page: "social-media",
    },
    {
      icon: Bot,
      title: "AI Concierge Suite™",
      subtitle: "Exclusive AI Automation",
      description:
        "Revolutionary AI-powered tools that work 24/7 to capture, qualify, and nurture luxury wedding leads. The future of client acquisition is here.",
      features: [
        "AI Wedding Concierge™ for lead capture",
        "AI Planner's Assistant™ for instant responses",
        "Automatic lead quality scoring",
        "Seamless integration with your website",
      ],
      page: "concierge",
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
        "The AI Concierge has transformed how we capture leads. We never miss an inquiry, and the quality scoring saves us countless hours.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-white">
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

          <button
            onClick={() => onNavigate("contact")}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white text-base tracking-wide hover:bg-neutral-800 transition-all"
          >
            Book Your Strategy Session
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-white border-t border-b border-neutral-200">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="pt-16 text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-relaxed text-neutral-900 mb-12 tracking-tight">
                Alta Frequenza Marketing is the only agency in the world
                dedicated exclusively to luxury wedding planners.
              </h2>

              <div className="prose prose-lg mx-auto text-neutral-700 leading-loose space-y-6 text-center max-w-3xl">
                <p className="text-base md:text-lg">
                  We understand this industry like no one else, and every system
                  we build is designed with one purpose: to help planners
                  attract and secure the world's most discerning couples.
                </p>

                <p className="text-base md:text-lg">
                  With our proprietary marketing frameworks and next-generation
                  AI solutions, we're revolutionizing how planners grow — from
                  intelligent lead capture to high-converting ad systems and
                  social strategies that build prestige.
                </p>

                <p className="text-base md:text-lg italic">
                  And this is just the beginning. Our suite of bespoke tools and
                  applications will continue to expand, setting a new standard
                  for how the wedding planning industry connects with elite
                  clients worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-neutral-500 mb-4">
              WHY ALTA FREQUENZA
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
              The Only Agency Built Exclusively
              <br />
              for Luxury Wedding Planners
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              We don't do generic marketing. We understand the nuances of the
              luxury wedding industry, the psychology of high-net-worth couples,
              and what it takes to position your brand as the premier choice for
              discerning clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-neutral-200">
              <div className="text-5xl font-serif mb-4 text-amber-600">01</div>
              <h3 className="text-xl font-medium mb-3 text-neutral-900">
                Industry Specialization
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Unlike general marketing agencies, we live and breathe luxury
                weddings. Our strategies are refined specifically for planners
                who serve high-end clientele.
              </p>
            </div>

            <div className="bg-white p-8 border border-neutral-200">
              <div className="text-5xl font-serif mb-4 text-amber-600">02</div>
              <h3 className="text-xl font-medium mb-3 text-neutral-900">
                Proven Results
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Our clients consistently report increased booking rates, higher
                average wedding budgets, and a steady flow of qualified luxury
                leads.
              </p>
            </div>

            <div className="bg-white p-8 border border-neutral-200">
              <div className="text-5xl font-serif mb-4 text-amber-600">03</div>
              <h3 className="text-xl font-medium mb-3 text-neutral-900">
                Cutting-Edge AI Tools
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                We've developed proprietary AI solutions that automate lead
                capture and qualification, giving you more time to focus on
                creating unforgettable weddings.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                  <button
                    onClick={() => onNavigate(service.page)}
                    className="inline-flex items-center gap-2 text-neutral-900 hover:gap-3 transition-all"
                  >
                    Learn More <ChevronRight size={16} />
                  </button>
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

      <section className="py-24 px-6 lg:px-12 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-widest text-neutral-400 mb-4">
            EXCLUSIVE CASE STUDY
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            How We Helped a Boutique Planner
            <br />
            Triple Their Luxury Bookings
          </h2>
          <p className="text-lg text-neutral-300 mb-12 leading-relaxed">
            Discover the exact strategies we used to transform a talented
            wedding planner into the go-to choice for high-net-worth couples in
            their market.
          </p>

          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-white text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-amber-600 text-white hover:bg-amber-700 transition-colors whitespace-nowrap"
              >
                Get Case Study
              </button>
            </div>
            {status && (
              <p className="mt-2 text-sm text-neutral-700">{status}</p>
            )}
          </form>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-neutral-500 mb-4">
              CLIENT TESTIMONIALS
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">
              Trusted by Elite Wedding Planners
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
            Ready to Attract More
            <br />
            Luxury Couples?
          </h2>
          <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
            Book a complimentary strategy session to discover how Alta Frequenza
            Marketing can elevate your wedding planning business to new heights.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 text-white text-lg tracking-wide hover:bg-neutral-800 transition-all"
          >
            Book Your Consultation
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
