import {
  Sparkles,
  Instagram,
  Calendar,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Award,
  Zap,
  Crown,
  Plus,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function SocialMediaPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const packages = [
    {
      icon: <Award size={16} />,
      label: "Basic",
      price: "€750",
      period: "/ Month",
      description:
        "For planners ready to build a consistent, polished presence that earns trust before couples even reach out.",
      platforms: "Instagram + Pinterest",
      features: [
        "12 posts/month (3 per week)",
        "4 Reels/month (1 per week, included in posts)",
        "8 Stories/month (2 per week)",
        "Caption writing + hashtag optimisation",
        "Scheduling + publishing",
        "Monthly performance report",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      icon: <Zap size={16} />,
      label: "Growth",
      price: "€1,150",
      period: "/ Month",
      description:
        "For planners scaling their visibility across multiple platforms with a real content engine behind them.",
      platforms: "Instagram + Facebook + Pinterest + TikTok",
      features: [
        "16 posts/month (6 of which are Reels)",
        "12 Stories/month (3 per week)",
        "Caption writing + hashtag optimisation",
        "Scheduling + publishing across all 4 platforms",
        "Monthly strategy call",
        "Monthly performance report",
      ],
      cta: "Get Started",
      highlighted: true,
    },
    {
      icon: <Crown size={16} />,
      label: "Authority",
      price: "€2,000",
      period: "/ Month",
      description:
        "For planners who want a full-service brand system — not just content, but a personal brand that positions them as the go-to in their market.",
      platforms:
        "Instagram + Facebook + Pinterest + TikTok + YouTube Shorts + Google Business + LinkedIn",
      features: [
        "~24 posts/month (8 Reels + 16 posts)",
        "Daily Stories",
        "2 Reels per week (8/month)",
        "Full engagement management (DMs + comments)",
        "Personal brand strategy & development",
        "Monthly content scripts (Reels, TikToks, talking-head videos)",
        "Brand voice document — tone, messaging, visual direction",
        "Content ideas tailored to your ideal couple",
        "Bi-weekly strategy calls",
        "Monthly analytics report",
        "Content calendar delivered in advance",
      ],
      cta: "Apply Now",
      highlighted: false,
    },
  ];

  const addOns = [
    { name: "Extra Reel", price: "€150", note: "per reel" },
    { name: "Instagram Profile Audit", price: "€200", note: "one-time" },
    { name: "Content Strategy Document", price: "€300", note: "one-time" },
    { name: "Google Business Management", price: "€150", note: "per month" },
    { name: "Extra Platform", price: "€100", note: "per month" },
  ];

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
          content="A structured social media system built to strengthen trust, improve positioning, and attract better wedding inquiries for professionals and venues."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/logo.png" />
      </Helmet>

      <div className="bg-luxury-champagne text-luxury-slate selection:bg-luxury-gold/30 pt-20 md:pt-24 min-h-screen font-light">
        {/* HERO / OUTCOME */}
        <section className="relative min-h-[calc(100svh-5rem)] md:min-h-[80vh] flex items-center justify-center px-5 sm:px-6 lg:px-12 py-20 sm:py-28 lg:py-32 overflow-hidden border-b border-luxury-gold/5">
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-luxury-gold/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-luxury-ethereal/10 blur-[150px] rounded-full animate-pulse" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-5xl mx-auto"
            >
              <motion.div
                variants={fadeIn}
                className="inline-flex max-w-full items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 glass border border-luxury-gold/20 text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.4em] text-luxury-gold mb-6 sm:mb-12 rounded-full font-bold shadow-sm leading-relaxed"
              >
                <Sparkles size={14} className="flex-shrink-0" />
                <span className="min-w-0">
                  Social Media for Wedding Planners and Venues
                </span>
              </motion.div>

              <motion.h1
                variants={fadeIn}
                className="text-4xl sm:text-5xl md:text-8xl font-serif text-luxury-slate mb-6 sm:mb-10 leading-[1.05] tracking-tight"
              >
                A Social Presence That Builds{" "}
                <span className="text-luxury-gold italic">Trust</span> Before
                Couples Even Contact You
              </motion.h1>

              <motion.p
                variants={fadeIn}
                className="text-base sm:text-xl md:text-2xl text-luxury-slate/60 leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-16 font-light italic"
              >
                We help wedding planners and venues create a stronger online
                presence that makes them look more established, more
                trustworthy, and more worth contacting the moment couples
                discover their brand.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 sm:gap-4 px-5 sm:px-12 py-4 sm:py-6 bg-luxury-slate text-white text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.3em] font-bold md:hover:bg-luxury-gold md:hover:text-luxury-slate md:transition-colors md:duration-500 rounded-full shadow-2xl group w-full sm:w-auto leading-relaxed text-center"
                >
                  Strengthen Your Online Presence
                  <ArrowRight
                    size={20}
                    className="flex-shrink-0 md:group-hover:translate-x-2 md:transition-transform md:duration-500"
                  />
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("packages")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center gap-3 sm:gap-4 px-5 sm:px-12 py-4 sm:py-6 bg-transparent border border-luxury-slate/20 text-luxury-slate text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.3em] font-bold md:hover:bg-luxury-slate md:hover:border-luxury-slate md:hover:text-white md:transition-colors md:duration-500 rounded-full w-full sm:w-auto group leading-relaxed text-center"
                >
                  View Packages
                  <ArrowRight
                    size={20}
                    className="flex-shrink-0 md:group-hover:translate-x-2 md:transition-transform md:duration-500"
                  />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* MECHANISM */}
        <section className="px-5 sm:px-6 lg:px-12 py-24 sm:py-28 lg:py-32 bg-white relative">
          <div className="max-w-5xl mx-auto text-center mb-14 sm:mb-24">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[9px] sm:text-[10px] uppercase tracking-[0.24em] sm:tracking-[0.4em] text-luxury-gold font-bold mb-6 sm:mb-8"
            >
              HOW WE CREATE THE OUTCOME
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-6xl font-serif text-luxury-slate mb-6 sm:mb-10 tracking-tight leading-tight"
            >
              We Turn Your Instagram Into a{" "}
              <span className="text-luxury-gold italic">Trust-Building</span>{" "}
              Sales Asset
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-base sm:text-xl text-luxury-slate/60 max-w-3xl mx-auto font-light leading-relaxed italic"
            >
              This is not about posting for the sake of posting. We structure
              your presence so that when couples land on your profile, they
              instantly understand your style, your level, and why you feel like
              the right choice.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-12 max-w-7xl mx-auto">
            {[
              {
                icon: <Instagram size={28} />,
                title: "1. Stronger Brand Presentation",
                desc: "We create a more polished, cohesive profile that makes your business feel more premium and more credible at first glance.",
              },
              {
                icon: <Calendar size={28} />,
                title: "2. Consistent Content Structure",
                desc: "We plan and manage content so your brand stays visible, active, and reliable instead of looking inconsistent or forgotten.",
              },
              {
                icon: <MessageCircle size={28} />,
                title: "3. Content That Moves Couples Closer",
                desc: "Your content is shaped to build trust, communicate value, and make enquiries feel like the natural next step.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-luxury-champagne/10 p-7 sm:p-10 lg:p-12 rounded-[2rem] sm:rounded-[3.5rem] border border-luxury-gold/10 group md:hover:bg-luxury-slate md:hover:text-white md:transition-all md:duration-700 shadow-sm"
              >
                <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-2xl bg-luxury-slate text-white flex items-center justify-center mb-6 sm:mb-10 md:group-hover:bg-luxury-gold md:transition-colors md:duration-700 shadow-xl">
                  {item.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-serif text-luxury-slate mb-5 sm:mb-6 md:group-hover:text-luxury-gold md:transition-colors md:duration-700 italic">
                  {item.title}
                </h3>
                <p className="text-luxury-slate/50 font-light leading-relaxed text-sm md:group-hover:text-white/60 md:transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY IT WORKS */}
        <section className="px-5 sm:px-6 lg:px-12 py-24 sm:py-28 lg:py-32 bg-luxury-slate text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-luxury-gold/10 blur-[150px] rounded-full" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10 mb-12 sm:mb-20">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[9px] sm:text-[10px] uppercase tracking-[0.24em] sm:tracking-[0.4em] text-luxury-gold font-bold mb-6 sm:mb-8"
            >
              WHY THIS WORKS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-6xl font-serif mb-6 sm:mb-10 tracking-tight leading-tight"
            >
              Because Couples Judge the Experience Before They{" "}
              <span className="text-luxury-gold italic">Ever Contact</span> You
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-base sm:text-xl text-white/50 max-w-4xl mx-auto font-light leading-relaxed mb-10 sm:mb-16 italic"
            >
              High-quality couples do not just look at photos. They read the
              room. They pay attention to consistency, taste, structure, and how
              professionally a brand presents itself online. A stronger social
              presence increases confidence before the first message is ever
              sent.
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 text-left">
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
                  className="p-7 sm:p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] sm:rounded-[3rem] group md:hover:bg-luxury-gold/10 md:transition-all md:duration-700"
                >
                  <div className="w-10 h-10 rounded-full bg-luxury-gold/20 flex items-center justify-center text-luxury-gold mb-6 sm:mb-8 md:group-hover:scale-110 md:transition-transform">
                    <CheckCircle size={20} />
                  </div>
                  <h3 className="text-lg font-serif mb-4 italic tracking-wide md:group-hover:text-luxury-gold md:transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-sm font-light leading-relaxed md:group-hover:text-white/60 md:transition-colors">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT MAKES US DIFFERENT */}
        <section className="px-5 sm:px-6 lg:px-12 py-24 sm:py-28 lg:py-32 bg-luxury-champagne">
          <div className="max-w-5xl mx-auto text-center mb-14 sm:mb-24">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[9px] sm:text-[10px] uppercase tracking-[0.24em] sm:tracking-[0.4em] text-luxury-gold font-bold mb-6 sm:mb-10"
            >
              WHAT MAKES US DIFFERENT
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-7xl font-serif text-luxury-slate mb-6 sm:mb-10 tracking-tight leading-tight"
            >
              Not Generic{" "}
              <span className="text-luxury-gold italic">Social Media</span>{" "}
              Management
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-base sm:text-xl text-luxury-slate/60 max-w-4xl mx-auto font-light leading-relaxed italic"
            >
              Most social media services focus on posting more. We focus on
              helping wedding planners and venues look more trustworthy, more
              refined, and more attractive to the kind of couples they actually
              want to book.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-12 max-w-7xl mx-auto">
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
                className="bg-white p-7 sm:p-10 lg:p-12 rounded-[2rem] sm:rounded-[3.5rem] border border-luxury-gold/10 shadow-sm md:hover:shadow-2xl md:transition-all md:duration-700"
              >
                <div className="text-luxury-gold font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.4em] mb-6 sm:mb-10">
                  Pillar 0{i + 1}
                </div>
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-[0.08em] sm:tracking-[0.1em] text-luxury-slate mb-5 sm:mb-6 leading-snug">
                  {item.title}
                </h3>
                <p className="text-luxury-slate/50 font-light leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12 sm:mt-20">
            <button
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("packages")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 sm:gap-4 px-5 sm:px-12 py-4 sm:py-6 bg-luxury-slate text-white text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.4em] font-bold rounded-full md:hover:bg-luxury-gold md:hover:text-luxury-slate md:transition-colors md:duration-500 group leading-relaxed text-center"
            >
              See Our Packages
              <ArrowRight
                size={20}
                className="flex-shrink-0 md:group-hover:translate-x-2 md:transition-transform md:duration-500"
              />
            </button>
          </div>
        </section>

        {/* PACKAGES */}
        <section
          id="packages"
          className="px-5 sm:px-6 lg:px-12 py-24 sm:py-28 lg:py-32 bg-luxury-slate text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-luxury-gold opacity-[0.03] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-luxury-gold opacity-[0.02] rounded-full blur-[120px]" />

          <div className="max-w-5xl mx-auto text-center mb-14 sm:mb-24 relative z-10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[9px] sm:text-[10px] uppercase tracking-[0.24em] sm:tracking-[0.4em] text-luxury-gold font-bold mb-6 sm:mb-10"
            >
              PACKAGES
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-7xl font-serif mb-6 sm:mb-10 tracking-tight leading-tight"
            >
              Choose the Right{" "}
              <span className="text-luxury-gold italic">Level</span> for Where
              You Are
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-base sm:text-xl text-white/40 max-w-4xl mx-auto font-light leading-relaxed italic border-l border-luxury-gold/30 pl-5 sm:pl-8"
            >
              Every package is built exclusively for wedding professionals. No
              generalist content. No copy-paste strategy. Just a presence that
              reflects the level of your work.
            </motion.p>
          </div>

          {/* Three Package Cards */}
          <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`relative flex flex-col p-7 sm:p-10 lg:p-12 rounded-[2rem] sm:rounded-[3.5rem] border shadow-2xl md:transition-all md:duration-700 ${
                  pkg.highlighted
                    ? "bg-luxury-gold/10 border-luxury-gold/40 scale-[1.02]"
                    : "bg-white/5 backdrop-blur-3xl border-white/10 md:hover:border-luxury-gold/20"
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 sm:px-6 py-1.5 bg-luxury-gold text-luxury-slate text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.4em] font-bold rounded-full whitespace-nowrap shadow-lg">
                    Most Popular
                  </div>
                )}

                {/* Label */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-luxury-gold/50 text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.4em] font-bold text-luxury-gold mb-6 sm:mb-8 rounded-full w-fit">
                  {pkg.icon} {pkg.label}
                </div>

                {/* Price */}
                <div className="mb-5 sm:mb-6 text-left">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-serif text-white tracking-tighter">
                    {pkg.price}
                    <span className="text-xs sm:text-sm uppercase tracking-widest text-luxury-gold ml-3">
                      {pkg.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/50 font-light italic text-sm leading-relaxed mb-6 border-l border-luxury-gold/30 pl-5">
                  {pkg.description}
                </p>

                {/* Platforms */}
                <div className="mb-6 sm:mb-8">
                  <p className="text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.35em] text-luxury-gold font-bold mb-2">
                    Platforms
                  </p>
                  <p className="text-white/60 text-xs font-light leading-relaxed">
                    {pkg.platforms}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 sm:mb-10 flex-grow">
                  {pkg.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm font-light text-white/70 leading-relaxed"
                    >
                      <CheckCircle
                        size={14}
                        className="text-luxury-gold flex-shrink-0 mt-0.5"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/contact"
                  className={`inline-flex items-center justify-center gap-3 sm:gap-4 px-5 sm:px-10 py-4 sm:py-5 text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.4em] font-bold rounded-full md:transition-colors md:duration-500 w-full group leading-relaxed text-center ${
                    pkg.highlighted
                      ? "bg-luxury-gold text-luxury-slate md:hover:bg-white md:hover:text-luxury-slate"
                      : "bg-white/10 text-white border border-white/20 md:hover:bg-luxury-gold md:hover:text-luxury-slate md:hover:border-luxury-gold"
                  }`}
                >
                  {pkg.cta}
                  <ArrowRight
                    size={16}
                    className="flex-shrink-0 md:group-hover:translate-x-1 md:transition-transform md:duration-500"
                  />
                </Link>
              </div>
            ))}
          </div>

          {/* ADD-ONS */}
          <div className="max-w-4xl mx-auto relative z-10 mt-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] sm:rounded-[3rem] p-7 sm:p-10 lg:p-14">
              <div className="flex items-center gap-3 mb-6 sm:mb-10">
                <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center text-luxury-gold">
                  <Plus size={16} />
                </div>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.4em] text-luxury-gold font-bold">
                  Add-Ons
                </p>
              </div>
              <p className="text-white/50 font-light italic text-sm leading-relaxed mb-8 sm:mb-10 max-w-xl">
                Need something extra? Add any of the below to your existing
                package at any time.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {addOns.map((addon, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-1 p-5 sm:p-6 bg-white/5 border border-white/10 rounded-2xl md:hover:border-luxury-gold/30 md:hover:bg-luxury-gold/5 md:transition-all md:duration-500"
                  >
                    <span className="text-white/80 text-sm font-light">
                      {addon.name}
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-luxury-gold font-serif text-2xl">
                        {addon.price}
                      </span>
                      <span className="text-white/30 text-[10px] uppercase tracking-widest">
                        {addon.note}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="max-w-3xl mx-auto text-center mt-12 sm:mt-20 relative z-10">
            <p className="text-white/30 text-sm font-light italic mb-6 sm:mb-8 leading-relaxed">
              Not sure which package is right for you? Book a free 20-minute
              clarity call and we'll help you figure it out.
            </p>
            <Link
              to="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 sm:gap-4 px-5 sm:px-14 py-4 sm:py-6 bg-luxury-gold text-luxury-slate text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.4em] font-bold rounded-full md:hover:bg-white md:transition-colors md:duration-500 group shadow-2xl leading-relaxed text-center"
            >
              Book a Free Clarity Call
              <ArrowRight
                size={20}
                className="flex-shrink-0 md:group-hover:translate-x-2 md:transition-transform md:duration-500"
              />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
