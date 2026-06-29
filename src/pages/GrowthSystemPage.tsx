import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  MousePointerClick,
  RefreshCcw,
  Search,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";

type GrowthPackage = {
  name: string;
  label: string;
  oldPrice?: string;
  price: string;
  description: string;
  includes: string[];
  cta: string;
  featured: boolean;
};

export default function GrowthSystemPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleEmailSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://hook.eu2.make.com/r8dwvoxpigk5hpc205yy6hjib64b1obt",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        },
      );

      if (res.ok) {
        setStatus("Thanks. Check your email for the case study.");
        setEmail("");
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Network error. Please try again.");
    }
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.14 } },
  };

  const systemSteps = [
    {
      icon: Search,
      title: "Capture Couples Already Searching",
      description:
        "Google Search campaigns put your planning business in front of couples actively looking for a destination or luxury wedding planner.",
      bullets: [
        "High-intent search campaigns",
        "Keyword and search term optimisation",
        "Filtering to reduce wasted clicks",
      ],
    },
    {
      icon: MousePointerClick,
      title: "Turn Clicks Into Wedding Requests",
      description:
        "A custom landing page and lead magnet create a clearer path from first interest to serious wedding request.",
      bullets: [
        "Campaign-specific landing page",
        "Lead magnet included",
        "Wedding request flow recommendations",
      ],
    },
    {
      icon: RefreshCcw,
      title: "Bring Warm Couples Back",
      description:
        "Meta Ads and retargeting keep your brand visible while couples compare planners and decide who to contact.",
      bullets: [
        "Meta Ads management",
        "Website visitor retargeting",
        "Instagram/Facebook retargeting when available",
      ],
    },
    {
      icon: BarChart3,
      title: "Optimise Toward Real Bookings",
      description:
        "We review campaign performance, lead quality, request flow, and pipeline signals so the system improves around real opportunities.",
      bullets: [
        "Tracking setup/check",
        "Lead-quality review",
        "Monthly pipeline review",
      ],
    },
  ];

  const packages: GrowthPackage[] = [
    {
      name: "Search Foundation",
      label: "One-channel system",

      price: "€990 first month, then €650/month",
      description:
        "For planners who want to start lean with Google Search and capture couples already looking for a planner.",
      includes: [
        "High-intent Google Search campaigns",
        "Keyword research and negative keywords",
        "Search term optimisation",
        "Conversion tracking setup/check",
        "Campaign-specific landing page",
        "Lead magnet",
        "Monthly performance review",
      ],
      cta: "Start With Search Foundation",
      featured: false,
    },
    {
      name: "Planner Growth System",
      label: "Multi-channel system",

      price: "€1,440 first month, then €990/month",
      description:
        "For planners who want Google Search, Meta Ads, and retargeting working together to create more touchpoints before couples decide.",
      includes: [
        "Everything in Search Foundation",
        "Meta Ads setup and management",
        "Retargeting campaigns for warm visitors",
        "Instagram/Facebook engagement retargeting when available",
        "Audience and creative testing",
        "Meta tracking setup/check",
        "Monthly pipeline and lead-quality review",
      ],
      cta: "Build the Growth System",
      featured: true,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Planner Growth System | Alta Frequenza</title>
        <meta
          name="description"
          content="A growth system for destination and luxury wedding planners who want more qualified wedding requests and booked weddings through Google Search, Meta Ads, retargeting, landing pages, lead magnets, and wedding request flow strategy."
        />
        <meta
          name="keywords"
          content="planner growth system, luxury wedding planner marketing, destination wedding planner marketing, qualified wedding requests, wedding planner Google Ads, wedding planner Meta Ads, wedding planner retargeting, wedding planner lead magnet"
        />
        <meta
          property="og:title"
          content="Planner Growth System | Alta Frequenza"
        />
        <meta
          property="og:description"
          content="A growth system for destination and luxury wedding planners who want more qualified wedding requests and booked weddings."
        />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/logo.png" />
      </Helmet>

      <div className="bg-luxury-champagne text-luxury-slate selection:bg-luxury-gold/30 pt-20 sm:pt-24 min-h-screen">
        {/* HERO */}
        <section className="relative px-5 sm:px-6 lg:px-12 py-16 sm:py-20 md:py-32 overflow-hidden border-b border-luxury-gold/5">
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-luxury-gold/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-luxury-ethereal/10 blur-[150px] rounded-full animate-pulse" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeIn}
                className="inline-flex max-w-full items-center justify-center gap-3 px-5 sm:px-6 py-2 glass border border-luxury-gold/20 text-[10px] uppercase tracking-[0.22em] sm:tracking-[0.4em] text-luxury-gold mb-8 sm:mb-10 rounded-[2rem] sm:rounded-full font-bold shadow-sm text-center leading-relaxed"
              >
                <Sparkles size={14} />
                Wedding Planner Growth System
              </motion.div>

              <motion.h1
                variants={fadeIn}
                className="text-[2.6rem] sm:text-5xl md:text-8xl font-serif text-luxury-slate mb-7 sm:mb-10 leading-[1.05] tracking-tight"
              >
                More Qualified Wedding Requests.{" "}
                <span className="text-luxury-gold italic">
                  More Booked Weddings.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeIn}
                className="text-lg sm:text-xl md:text-2xl text-luxury-slate/60 leading-relaxed mb-10 font-light italic"
              >
                A request-building system for destination and luxury wedding
                planners who want a steadier season, better-budget couples, and
                more control over the weddings they book.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-4 mb-10"
              >
                <Link
                  to="/free-wedding-business-analysis"
                  className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 sm:gap-4 px-5 sm:px-10 py-5 bg-luxury-slate text-white text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.3em] font-bold hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-700 rounded-[1.5rem] sm:rounded-full shadow-2xl overflow-hidden text-center leading-relaxed"
                >
                  <span className="relative z-10">
                    Request a Free Wedding Business Analysis
                  </span>
                  <ArrowRight
                    size={18}
                    className="relative z-10 flex-shrink-0 group-hover:translate-x-2 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                </Link>

                <a
                  href="#packages"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-3 px-5 sm:px-8 py-5 border border-luxury-gold/20 text-luxury-slate text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.3em] font-bold hover:bg-white transition-all duration-500 rounded-[1.5rem] sm:rounded-full text-center leading-relaxed"
                >
                  See Packages
                </a>
              </motion.div>

              <motion.p
                variants={fadeIn}
                className="text-[10px] uppercase tracking-[0.14em] sm:tracking-[0.3em] text-luxury-slate/40 font-bold leading-relaxed"
              >
                Built for destination and luxury planners serving couples with
                serious budgets.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative h-[430px] sm:min-h-[560px]"
            >
              <div className="absolute inset-x-0 sm:inset-x-8 top-0 h-[280px] sm:h-[420px] rounded-[2rem] sm:rounded-[4rem] overflow-hidden border border-luxury-gold/10 shadow-2xl">
                <img
                  src="/111.jpg"
                  alt="Luxury destination wedding villa ceremony"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-luxury-slate/15" />
              </div>

              <div className="absolute left-0 bottom-0 w-32 h-44 sm:w-64 sm:h-80 rounded-[1.5rem] sm:rounded-[3rem] overflow-hidden border border-white/70 shadow-2xl bg-white p-1.5 sm:p-2">
                <img
                  src="/222.jpg"
                  alt="Couple at a luxury destination wedding"
                  className="w-full h-full object-cover rounded-[1.1rem] sm:rounded-[2.5rem]"
                />
              </div>

              <div className="absolute right-0 bottom-5 sm:bottom-12 w-[min(15.5rem,78vw)] sm:w-[min(18rem,82vw)] rounded-[1.5rem] sm:rounded-[3rem] bg-white/90 backdrop-blur-xl border border-luxury-gold/10 shadow-2xl p-4 sm:p-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-luxury-slate text-white flex items-center justify-center mb-4 sm:mb-6">
                  <TrendingUp size={22} />
                </div>
                <p className="text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.3em] text-luxury-gold font-bold mb-3 sm:mb-4 leading-relaxed">
                  Season stability
                </p>
                <p className="text-luxury-slate/60 text-sm leading-relaxed font-light">
                  Built around how serious couples search, compare, return, and
                  request consultations.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROBLEM + CONSEQUENCE */}
        <section className="py-16 sm:py-20 md:py-36 px-5 sm:px-6 lg:px-12 bg-luxury-slate text-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <p className="text-[10px] uppercase tracking-[0.24em] sm:tracking-[0.4em] text-luxury-gold mb-10 font-bold">
                The problem
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-7xl font-serif mb-10 tracking-tight leading-tight">
                Beautiful work does not guarantee{" "}
                <span className="text-luxury-gold italic">
                  a stable season.
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-white/50 font-light leading-relaxed max-w-3xl mx-auto">
                You can have a strong portfolio, happy clients, and a refined
                brand — but still feel unsure where the next right-budget
                wedding will come from.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Requests come in, but too many are not the budget, style, or type of wedding you actually want.",
                "One season feels full, then the next season feels uncertain again.",
                "Couples visit your website or Instagram, compare you, and disappear without sending a serious request.",
                "You depend too much on referrals, Instagram, or word of mouth instead of a system you can measure.",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-7 sm:p-9"
                >
                  <div className="text-4xl font-serif text-luxury-gold mb-6">
                    0{index + 1}
                  </div>
                  <p className="text-lg sm:text-xl font-light leading-relaxed text-white/65">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW THE SYSTEM WORKS */}
        <section className="py-16 sm:py-20 md:py-40 px-5 sm:px-6 lg:px-12 bg-white">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <p className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold mb-8">
              How the system works
            </p>

            <h2 className="text-4xl md:text-6xl font-serif text-luxury-slate mb-10 tracking-tight">
              A system built around{" "}
              <span className="text-luxury-gold italic">
                how couples actually choose.
              </span>
            </h2>

            <p className="text-xl text-luxury-slate/60 max-w-3xl mx-auto font-light leading-relaxed">
              We connect Google Search, a custom landing page, lead magnet, Meta
              Ads, retargeting, and lead-quality review into one clearer path
              toward real wedding requests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {systemSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-luxury-champagne/30 rounded-[2rem] sm:rounded-[3rem] border border-luxury-gold/10 p-7 sm:p-10"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-luxury-slate text-white flex items-center justify-center mb-8 shadow-xl">
                  <step.icon size={25} />
                </div>

                <h3 className="text-2xl sm:text-4xl font-serif text-luxury-slate leading-tight mb-5">
                  {step.title}
                </h3>

                <p className="text-luxury-slate/55 text-base sm:text-lg font-light leading-relaxed mb-8">
                  {step.description}
                </p>

                <div className="space-y-4">
                  {step.bullets.map((item) => (
                    <div key={item} className="flex items-start gap-3 group">
                      <CheckCircle
                        size={18}
                        className="text-luxury-gold mt-1 group-hover:scale-110 transition-transform"
                      />
                      <span className="text-sm font-medium text-luxury-slate/65 tracking-wide leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* DREAM OUTCOME */}
        <section className="py-16 sm:py-20 md:py-36 px-5 sm:px-6 lg:px-12 bg-luxury-champagne">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <p className="text-[10px] uppercase tracking-[0.24em] sm:tracking-[0.4em] text-luxury-gold mb-10 font-bold">
                The outcome
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-7xl font-serif text-luxury-slate mb-10 tracking-tight leading-tight">
                Build a season you can plan around — with weddings at{" "}
                <span className="text-luxury-gold italic">
                  the budgets you actually want.
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-luxury-slate/60 font-light leading-relaxed mb-10 max-w-3xl">
                The goal is not to wonder every year whether you will book
                enough of the right weddings. The goal is to create a steadier
                flow of serious wedding requests, so you can approach your
                season with more confidence, better budget opportunities, and
                more control over which couples you take on.
              </p>

              <Link
                to="/contact"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 sm:gap-4 px-5 sm:px-10 py-5 bg-luxury-slate text-white text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.3em] font-bold rounded-[1.5rem] sm:rounded-full hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-500 text-center"
              >
                See What Is Possible
                <ArrowRight
                  size={17}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 rounded-[2rem] sm:rounded-[3rem] bg-white p-6 sm:p-12 border border-luxury-gold/10 shadow-2xl"
            >
              <Sparkles size={32} className="text-luxury-gold mb-10" />

              <p className="text-2xl sm:text-4xl font-serif text-luxury-slate italic leading-tight mb-8">
                Stop hoping the right weddings come in. Start building a system
                that helps attract them.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "A more stable flow of serious wedding requests",
                  "More opportunities at the budget level you want",
                  "Less dependence on referrals, Instagram, or seasonal luck",
                  "More control over the weddings you choose to accept",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="text-luxury-gold mt-1 flex-shrink-0"
                    />
                    <p className="text-luxury-slate/60 text-base font-light leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 text-center sm:grid-cols-3">
                {["Stability", "Better Budgets", "Control"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-luxury-champagne/60 px-3 py-4 text-[10px] uppercase tracking-[0.14em] sm:tracking-[0.18em] font-bold text-luxury-slate/45"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* RESULTS + CASE STUDY FORM */}
        <section className="py-16 sm:py-20 md:py-40 px-5 sm:px-6 lg:px-12 bg-luxury-slate text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-luxury-gold/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-start">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] sm:tracking-[0.4em] text-luxury-gold mb-10 font-bold">
                  Campaign results
                </p>

                <h2 className="text-3xl sm:text-4xl md:text-7xl font-serif mb-8 tracking-tight leading-tight">
                  Built around the result that matters:{" "}
                  <span className="text-luxury-gold italic">
                    booked weddings.
                  </span>
                </h2>

                <p className="text-lg sm:text-xl text-white/50 font-light leading-relaxed mb-12 max-w-2xl">
                  Our campaigns are built to help planners create steadier
                  request flow, stronger-fit couples, and more booked weddings —
                  not just more clicks.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      value: "100+",
                      label: "weddings booked",
                      description:
                        "Across wedding planner campaigns and client work.",
                    },
                    {
                      value: "€1M+",
                      label: "client revenue created",
                      description:
                        "From booked weddings influenced by our systems.",
                    },
                  ].map((result, index) => (
                    <motion.div
                      key={result.label}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="rounded-[1.75rem] sm:rounded-[2.25rem] border border-white/10 bg-white/5 p-6 sm:p-8 shadow-sm"
                    >
                      <p className="text-5xl sm:text-6xl font-serif text-luxury-gold mb-5 tracking-tight">
                        {result.value}
                      </p>

                      <p className="text-[10px] uppercase tracking-[0.22em] sm:tracking-[0.28em] font-bold mb-4 leading-relaxed text-white/60">
                        {result.label}
                      </p>

                      <p className="text-sm font-light leading-relaxed text-white/45">
                        {result.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <p className="text-xs text-white/30 font-light leading-relaxed mt-8 max-w-2xl">
                  Results vary depending on market, budget, positioning,
                  website, follow-up, availability, and sales process.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:sticky lg:top-32 rounded-[2rem] sm:rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-12 lg:p-14 text-center shadow-2xl"
              >
                <p className="text-[10px] uppercase tracking-[0.22em] sm:tracking-[0.4em] text-luxury-gold mb-8 sm:mb-10 font-bold">
                  Free case study
                </p>

                <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif mb-8 leading-tight tracking-tight">
                  See How We Helped a Wedding Planner Build a More Stable Season
                </h3>

                <p className="text-lg sm:text-xl text-white/45 mb-10 font-light leading-relaxed">
                  Receive the full breakdown of how we helped a wedding planner
                  generate consistent wedding requests, attract better-fit
                  couples, and fill her season more calmly.
                </p>

                <form
                  onSubmit={handleEmailSubmit}
                  className="relative bg-white/5 p-3 sm:p-4 rounded-[1.5rem] sm:rounded-full border border-white/10 flex flex-col sm:flex-row gap-3 sm:gap-4"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address..."
                    required
                    className="flex-1 px-4 sm:px-8 py-4 sm:py-5 bg-transparent text-white placeholder-white/20 focus:outline-none text-sm tracking-[0.12em] sm:tracking-widest uppercase font-bold"
                  />
                  <button
                    type="submit"
                    className="px-5 sm:px-12 py-5 bg-luxury-gold text-luxury-slate text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.3em] font-bold hover:bg-white transition-all rounded-[1.25rem] sm:rounded-full shadow-2xl"
                  >
                    Send Me the Case Study
                  </button>
                </form>

                {status && (
                  <p className="mt-8 text-xs font-bold uppercase tracking-widest text-luxury-gold">
                    {status}
                  </p>
                )}

                <Link
                  to="/case-studies"
                  className="mt-10 inline-flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.14em] sm:tracking-[0.3em] font-bold text-white/45 hover:text-luxury-gold transition-colors"
                >
                  View More Client Results <ArrowRight size={14} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <section
          id="packages"
          className="py-16 sm:py-20 md:py-40 px-5 sm:px-6 lg:px-12 bg-luxury-champagne border-y border-luxury-gold/5"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <p className="text-[10px] uppercase tracking-[0.24em] sm:tracking-[0.4em] text-luxury-gold mb-10 font-bold">
                Planner growth packages
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-7xl font-serif text-luxury-slate mb-8 tracking-tight leading-tight">
                Choose how aggressively you want to{" "}
                <span className="text-luxury-gold italic">
                  build your request flow.
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-luxury-slate/55 max-w-4xl mx-auto font-light leading-relaxed">
                Both packages include a campaign-specific landing page and lead
                magnet. The difference is how many channels we use to reach,
                re-engage, and convert serious couples.
              </p>

              <div className="mt-10 inline-flex w-full sm:w-auto flex-col sm:flex-row items-center justify-center gap-3 rounded-[1.5rem] sm:rounded-[2rem] border border-luxury-gold/20 bg-white/60 px-5 sm:px-6 py-4 text-center">
                <span className="text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.24em] text-luxury-gold font-bold">
                  Limited availability
                </span>
                <span className="hidden sm:block w-px h-5 bg-luxury-gold/20" />
                <span className="text-sm text-luxury-slate/55 font-light leading-relaxed">
                  Only 3 planner spots available as of May 10, 2026.
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
              {packages.map((offer, index) => (
                <motion.div
                  key={offer.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] border p-6 sm:p-10 lg:p-12 shadow-sm ${
                    offer.featured
                      ? "bg-luxury-slate text-white border-luxury-slate shadow-2xl"
                      : "bg-white text-luxury-slate border-luxury-gold/10"
                  }`}
                >
                  {offer.featured && (
                    <div className="absolute top-0 right-0 w-56 h-56 bg-luxury-gold/10 blur-[90px] rounded-full -translate-y-1/3 translate-x-1/3" />
                  )}

                  {offer.featured && (
                    <div className="relative z-10 mb-6 inline-flex rounded-full bg-luxury-gold px-4 sm:px-5 py-2 text-[10px] uppercase tracking-[0.14em] sm:tracking-[0.18em] font-bold text-luxury-slate sm:absolute sm:top-8 sm:right-8 sm:mb-0">
                      More complete
                    </div>
                  )}

                  <div className="relative z-10">
                    <p className="text-[10px] uppercase tracking-[0.22em] sm:tracking-[0.3em] text-luxury-gold font-bold mb-5 leading-relaxed">
                      {offer.label}
                    </p>

                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight mb-6 pr-0 sm:pr-24">
                      {offer.name}
                    </h3>

                    <div
                      className={`rounded-[2rem] border p-6 mb-8 ${
                        offer.featured
                          ? "border-white/10 bg-white/5"
                          : "border-luxury-gold/10 bg-luxury-champagne/40"
                      }`}
                    >
                      {offer.oldPrice && (
                        <p
                          className={`text-sm line-through mb-2 ${
                            offer.featured
                              ? "text-white/30"
                              : "text-luxury-slate/30"
                          }`}
                        >
                          {offer.oldPrice}
                        </p>
                      )}

                      <p className="text-2xl sm:text-3xl font-serif mb-2">
                        {offer.price}
                      </p>

                      <p
                        className={`text-xs font-light ${
                          offer.featured
                            ? "text-white/45"
                            : "text-luxury-slate/45"
                        }`}
                      >
                        Ad spend separate. Discounted launch pricing for the
                        next 3 planner spots.
                      </p>
                    </div>

                    <p
                      className={`text-base sm:text-lg font-light leading-relaxed mb-8 ${
                        offer.featured
                          ? "text-white/60"
                          : "text-luxury-slate/55"
                      }`}
                    >
                      {offer.description}
                    </p>

                    <div className="space-y-4 mb-10">
                      {offer.includes.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle
                            size={17}
                            className="text-luxury-gold mt-1 flex-shrink-0"
                          />
                          <p
                            className={`text-sm leading-relaxed font-light ${
                              offer.featured
                                ? "text-white/65"
                                : "text-luxury-slate/55"
                            }`}
                          >
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className={`group relative inline-flex w-full items-center justify-center gap-3 px-5 sm:px-6 py-5 text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.3em] font-bold rounded-[1.5rem] sm:rounded-full overflow-hidden text-center leading-relaxed transition-all duration-700 ${
                        offer.featured
                          ? "bg-white text-luxury-slate hover:bg-luxury-gold"
                          : "bg-luxury-slate text-white hover:bg-luxury-gold hover:text-luxury-slate"
                      }`}
                    >
                      <span className="relative z-10">{offer.cta}</span>
                      <ArrowRight
                        size={17}
                        className="relative z-10 flex-shrink-0 group-hover:translate-x-2 transition-transform duration-500"
                      />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                to="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 px-5 sm:px-8 py-5 border border-luxury-gold/25 text-luxury-slate text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.3em] font-bold rounded-[1.5rem] sm:rounded-full hover:bg-white transition-all duration-500 text-center"
              >
                Not Sure Which Package Fits?
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 sm:py-20 md:py-40 px-5 sm:px-6 lg:px-12 bg-luxury-slate text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src="/destination-wedding-ceremony.jpeg"
              alt="Luxury destination wedding ceremony"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-luxury-slate/80" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="flex justify-center mb-10">
              <div className="w-16 h-16 rounded-3xl bg-luxury-gold text-luxury-slate flex items-center justify-center shadow-2xl">
                <Star size={26} />
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-8xl font-serif mb-10 sm:mb-12 tracking-tight leading-[1.1]">
              Want to see which option makes sense for your{" "}
              <span className="text-luxury-gold italic">wedding business?</span>
            </h2>

            <p className="text-base sm:text-xl text-white/50 mb-12 sm:mb-16 font-light leading-relaxed max-w-4xl mx-auto">
              Request a Free Wedding Business Analysis and we will review your
              visibility, website, positioning, and wedding request flow before
              recommending the best next step.
            </p>

            <Link
              to="/free-wedding-business-analysis"
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 sm:gap-6 px-5 sm:px-12 py-6 bg-white text-luxury-slate text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.3em] font-bold hover:bg-luxury-gold transition-all duration-700 rounded-[1.5rem] sm:rounded-full shadow-2xl overflow-hidden text-center leading-relaxed"
            >
              <span className="relative z-10 flex items-center justify-center gap-3 sm:gap-5">
                Request a Free Wedding Business Analysis
                <ArrowRight
                  size={22}
                  className="flex-shrink-0 group-hover:translate-x-2 transition-transform duration-700"
                />
              </span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
