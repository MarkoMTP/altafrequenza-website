import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Bot,
  Monitor,
  Star,
  Quote,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";

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
        },
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
      title: "Wedding Planner Growth System",
      subtitle: "Attract better couples and book more dream weddings",
      description:
        "A request-building system for destination and luxury wedding planners that connects Google Search, Meta Ads, retargeting, a custom landing page, lead magnet, tracking, and wedding request-flow strategy.",
      features: [
        "Google Search campaigns for couples already looking",
        "Meta Ads and retargeting to bring warm couples back",
        "Campaign-specific landing page and lead magnet included",
        "Tracking and lead-quality review focused on real booking opportunities",
      ],
      path: "/wedding-planner-growth-system",
    },
    {
      icon: Sparkles,
      title: "Social Media Management",
      subtitle: "Build trust before couples even contact you",
      description:
        "We create a stronger social presence using the psychology of trust, taste, and first impressions, so couples discover your brand, feel more confident in your level, and become more likely to send a wedding request.",
      features: [
        "Content structured around trust and luxury positioning",
        "Messaging tailored to how couples emotionally evaluate brands",
        "Consistent posting that strengthens visibility and credibility",
        "Creative direction designed for wedding planners and venues specifically",
      ],
      path: "/social-media",
    },
    {
      icon: Monitor,
      title: "Websites & Landing Pages",
      subtitle: "Turn more visitors into wedding requests",
      description:
        "Using the psychology of couples searching for a planner or venue, we structure websites and landing pages to move visitors from first impression to trust to contact in the most efficient way possible.",
      features: [
        "Modern websites built for luxury positioning and conversion",
        "Page structure based on how couples browse, compare, and decide",
        "SEO foundations adapted to newer search updates and GEO visibility in AI chatbots",
        "Landing pages designed to convert more traffic into wedding requests",
      ],
      path: "/website",
    },
    {
      icon: Bot,
      title: "AI Wedding Assistant",
      subtitle: "Capture leads even when you're unavailable",
      description:
        "An AI assistant that helps answer questions, guide interested couples, and capture leads on your website while you're busy planning weddings, in meetings, or offline.",
      features: [
        "Instant replies to common questions",
        "Lead capture from website visitors",
        "On brand tone and messaging",
        "Available 24/7 across time zones",
      ],
      path: "/ai-chat-assistant",
    },
  ];

  const caseStudies = [
    {
      label: "Destination Wedding Planner — France",
      headline: "5 destination weddings booked. ~€100K planning revenue.",
      subheadline: "6 months. €8K total ad spend.",
      description:
        "A destination wedding planner working across France had strong creative work and a beautiful portfolio, but her inquiry flow was inconsistent. We built a growth system around couples actively researching luxury destination weddings in France, improved the path from search to trust, and refined the messaging around her premium multi-location planning experience.",
      stats: [
        { value: "55", label: "Qualified requests generated" },
        { value: "5", label: "Destination weddings booked" },
        { value: "~€100K", label: "Estimated planning revenue" },
        { value: "6mo", label: "Timeframe" },
      ],
      services: ["Growth System", "Landing Page"],
    },
    {
      label: "Luxury Wedding Planner — New York, USA",
      headline: "9 high-end weddings booked. ~$290K planning revenue.",
      subheadline: "10 months. $27K total ad spend.",
      description:
        "This New York-based luxury planner was already established, but growth depended heavily on referrals and word of mouth. We built a more predictable growth system around high-intent search, refined the positioning for affluent couples, and created a clearer request flow so serious clients could find the brand, understand the value, and inquire with more confidence.",
      stats: [
        { value: "64", label: "Qualified requests generated" },
        { value: "9", label: "High-end weddings booked" },
        { value: "~$290K", label: "Estimated planning revenue" },
        { value: "10mo", label: "Timeframe" },
      ],
      services: ["Growth System", "Landing Page"],
    },
    {
      label: "Destination Wedding Planner — Tuscany, Italy",
      headline: "3 luxury weddings booked. ~€45K planning revenue.",
      subheadline: "4 months. €4.5K total investment.",
      description:
        "Working with a lower budget than most of our clients, this Tuscany-based planner needed a more efficient way to attract serious international couples without depending only on referrals. We built a focused request system around high-intent search, clearer messaging, and a stronger inquiry path designed to help pre-qualify couples before they reached her inbox.",
      stats: [
        { value: "24", label: "Qualified requests generated" },
        { value: "3", label: "Luxury weddings booked" },
        { value: "~€45K", label: "Estimated planning revenue" },
        { value: "4mo", label: "Timeframe" },
      ],
      services: ["Growth System", "Landing Page"],
    },
    {
      label: "Destination Wedding Planner — Italy Multi-Region",
      headline: "10 destination weddings booked. ~€180K planning revenue.",
      subheadline: "12 months. €33K total investment.",
      description:
        "Our most complete engagement. Over a full year, we built and optimised a growth system across search, website improvements, landing page copy, and social positioning. The goal was not occasional spikes, but a more consistent pipeline of qualified wedding requests from better-fit international couples planning weddings across Italy’s most desirable regions.",
      stats: [
        { value: "82", label: "Qualified requests generated" },
        { value: "10", label: "Destination weddings booked" },
        { value: "~€180K", label: "Estimated planning revenue" },
        { value: "12mo", label: "Timeframe" },
      ],
      services: ["Growth System", "Website", "Social Media"],
    },
    {
      label: "Luxury Wedding Planner — Los Angeles, USA",
      headline: "From 8–10 weddings to 15 booked in one season.",
      subheadline: "7 months. Full-season growth system.",
      description:
        "This Los Angeles luxury planner was already respected in her market, but her seasons were not as predictable as they should have been. Most years, she averaged around 8–10 high-budget weddings, with growth still depending heavily on referrals, Instagram visibility, and vendor relationships. We built a growth system designed to attract more serious high-budget couples, sharpened her positioning, and improved the inquiry journey. Within 7 months, she booked out her season with 15 high-end weddings.",
      stats: [
        { value: "52", label: "Qualified requests generated" },
        { value: "15", label: "High-end weddings booked" },
        { value: "+5–7", label: "Additional bookings vs. average season" },
        { value: "7mo", label: "Timeframe" },
      ],
      services: ["Growth System", "Landing Page", "Positioning"],
    },
  ];
  const testimonials = [
    {
      quote:
        "From the very beginning I found the agency extremely professional and genuinely attentive to the needs of planners in the wedding industry. In just a few weeks I was already receiving many high-quality, well-targeted enquiries. The expertise and strategic approach truly stand out.",
      author: "Vanessa",
      role: "Vanessa Wedding Planner & Events",
    },
    {
      quote:
        "Marko immediately understood my style and the image I wanted to convey. After only a few months I had already seen an increase in enquiries that led to new bookings. If you are a wedding planner looking to grow, I highly recommend Alta Frequenza.",
      author: "Liz Tuson",
      role: "Dreaming Out Loud — Wedding Planner, Italy",
    },
    {
      quote:
        "Marko is wonderful — very earnest, and someone you can genuinely trust to look after your business. I am happy with the results and would recommend him without hesitation.",
      author: "Gina Rodriguez",
      role: "My Tuscan Wedding",
    },
  ];

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <>
      <Helmet>
        <title>
          Alta Frequenza | Marketing for Destination & Luxury Wedding Planners
        </title>
        <meta
          name="description"
          content="Alta Frequenza helps destination wedding planners, luxury wedding planners, U.S. wedding planners, high-end regional planners, and wedding venues attract stronger-budget couples and book more dream weddings through growth systems, social media, websites, and AI assistants."
        />
        <meta
          name="keywords"
          content="destination wedding planner marketing, luxury wedding planner marketing, U.S. wedding planner marketing, regional wedding planner marketing, high-end wedding planner marketing, wedding planner growth system, wedding planner lead generation, wedding planner website design, wedding planner social media, wedding venue marketing, marketing for destination wedding planners, marketing for luxury wedding planners, Google Ads for wedding planners, Meta Ads for wedding planners, wedding request system, wedding bookings marketing, dream wedding clients, luxury wedding marketing agency"
        />
        <meta
          property="og:title"
          content="Alta Frequenza | Marketing for Destination & Luxury Wedding Planners"
        />
        <meta
          property="og:description"
          content="Helping destination and luxury wedding planners elevate their brand, attract stronger-budget couples, and book more dream weddings."
        />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/logo.png" />
      </Helmet>

      <div className="bg-luxury-champagne text-luxury-slate selection:bg-luxury-gold/30 pt-24 min-h-screen">
        {/* HERO */}
        <section className="relative h-screen flex items-center justify-center px-6 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-luxury-gold/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-luxury-ethereal/10 blur-[150px] rounded-full animate-pulse" />
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeIn}
                className="mb-10 inline-flex items-center gap-3 px-6 py-2 glass border border-luxury-gold/20 text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold rounded-full shadow-sm"
              >
                <Sparkles size={14} />
                Marketing for Destination & Luxury Wedding Planners
              </motion.div>

              <motion.h1
                variants={fadeIn}
                className="text-5xl md:text-8xl font-serif leading-[1.05] mb-10 text-luxury-slate tracking-tight"
              >
                Turn Your Marketing Into a Consistent Source of{" "}
                <span className="text-luxury-gold italic">
                  Dream Wedding Requests
                </span>
              </motion.h1>

              <motion.p
                variants={fadeIn}
                className="text-xl md:text-2xl text-luxury-slate/60 max-w-4xl mx-auto leading-relaxed mb-6 font-light italic"
              >
                Alta Frequenza helps destination and luxury wedding planners
                attract stronger-budget couples, elevate their online presence,
                and book more of the weddings they actually want — through
                growth systems, social media, websites, and AI-powered lead
                capture.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="flex flex-wrap items-center justify-center gap-6 mb-12 text-[10px] uppercase tracking-[0.3em] text-luxury-slate/40 font-bold"
              >
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={12} className="text-luxury-gold" /> 100+
                  weddings booked for clients
                </span>
                <span className="w-px h-4 bg-luxury-gold/20 hidden sm:block" />
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={12} className="text-luxury-gold" /> €1M+
                  in client revenue created
                </span>
                <span className="w-px h-4 bg-luxury-gold/20 hidden sm:block" />
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={12} className="text-luxury-gold" /> Built
                  for destination, luxury & high-end wedding planners
                </span>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-luxury-slate text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-700 rounded-full shadow-2xl overflow-hidden"
                >
                  <span className="relative z-10">
                    Request My Free Wedding Business Analysis
                  </span>
                  <ArrowRight
                    size={20}
                    className="relative z-10 group-hover:translate-x-2 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                </Link>
                <a
                  href="#case-studies"
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-slate/40 hover:text-luxury-gold transition-colors duration-300"
                >
                  See Wedding Planner Results <ArrowRight size={14} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* THE REAL PROBLEM */}
        <section className="py-40 px-6 lg:px-12 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative lg:h-[700px]"
            >
              <div className="h-full rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,23,42,0.1)] border border-luxury-gold/10 relative group">
                <img
                  src="https://www.dropbox.com/scl/fi/nb6q6owhc1ig8pqlqp5z3/pexels-westernsydneyweddings-34525884.jpg?rlkey=79mvrch0bt7pnydwtpbx5h491&st=uuxgthdo&raw=1"
                  alt="Wedding planner workflow"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-luxury-slate/20 mix-blend-overlay" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-luxury-gold/10 blur-3xl rounded-full -z-10" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-left"
            >
              <motion.p
                variants={fadeIn}
                className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-10 font-bold"
              >
                THE REAL PROBLEM
              </motion.p>
              <motion.h2
                variants={fadeIn}
                className="text-4xl md:text-6xl font-serif text-luxury-slate mb-10 tracking-tight leading-tight"
              >
                Beautiful Work Does Not Automatically Make You{" "}
                <span className="text-luxury-gold italic">
                  the Planner They Choose
                </span>
              </motion.h2>
              <motion.div
                variants={fadeIn}
                className="space-y-8 text-xl text-luxury-slate/60 font-light leading-relaxed"
              >
                <p>
                  Many destination and luxury planners have refined portfolios,
                  elegant events, and happy clients — but their online presence
                  does not always make couples feel the full value of what they
                  offer.
                </p>
                <p>
                  When the brand, website, social presence, and request flow are
                  not strong enough, high-budget couples may compare you, feel
                  unsure, and choose another planner who simply appears more
                  clear, trusted, and desirable.
                </p>
                <p className="italic text-luxury-slate font-medium text-2xl border-l-[3px] border-luxury-gold pl-8 py-2">
                  The real problem is not just visibility. It is becoming the
                  obvious choice for the weddings you actually want.
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="mt-12">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-luxury-gold/30 text-luxury-slate text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-luxury-slate hover:text-white hover:border-luxury-slate transition-all duration-500 rounded-full"
                >
                  Contact Us Now <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* HOW COUPLES CHOOSE YOU */}
        <section className="py-40 px-6 lg:px-12 bg-luxury-champagne border-y border-luxury-gold/5">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeIn}
                className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-10 font-bold"
              >
                HOW COUPLES CHOOSE YOU
              </motion.p>
              <motion.h2
                variants={fadeIn}
                className="text-4xl md:text-6xl font-serif text-luxury-slate mb-10 tracking-tight leading-tight"
              >
                Couples Do Not Book the Best Planner. They Book the One They{" "}
                <span className="text-luxury-gold italic">
                  Trust and Desire Most
                </span>
              </motion.h2>
              <motion.div
                variants={fadeIn}
                className="space-y-8 text-xl text-luxury-slate/60 font-light leading-relaxed"
              >
                <p>
                  Couples search, compare, revisit websites, check Instagram,
                  read reviews, look for reassurance, and then decide who feels
                  safe, premium, and worth contacting.
                </p>
                <p>
                  That is why a strong marketing system cannot rely on one
                  channel alone. Search creates intent, social builds trust, the
                  website shapes desire, and retargeting keeps your brand in
                  their mind while they decide.
                </p>
                <p className="font-bold text-luxury-slate uppercase tracking-widest text-xs mt-12 bg-luxury-gold/10 px-6 py-3 rounded-full inline-block">
                  When these pieces work together, your brand becomes easier to
                  discover, harder to forget, and more likely to receive the
                  wedding requests you actually want.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="rounded-[4rem] overflow-hidden shadow-2xl relative border border-luxury-gold/10 group"
            >
              <img
                src="https://www.dropbox.com/scl/fi/t8d3dzw1iy4498x5q7k26/ads.jpg?rlkey=uohsisrqbm7w8bwpezz60j61d&st=8at1dxhe&raw=1"
                alt="Search visibility"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-luxury-slate/30 mix-blend-overlay" />
            </motion.div>
          </div>
        </section>

        {/* FIRST IMPRESSIONS */}
        <section className="py-40 px-6 lg:px-12 bg-white text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-luxury-gold/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-10 font-bold"
            >
              FIRST IMPRESSIONS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-serif text-luxury-slate mb-12 tracking-tight leading-tight"
            >
              Your Brand Should Make Luxury Couples Feel{" "}
              <span className="text-luxury-gold italic">
                They Found the One
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center mb-16"
            >
              <div className="w-72 h-[480px] bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-luxury-gold/20 p-2 relative group">
                <img
                  src="https://www.dropbox.com/scl/fi/jefa1g9vd54uzgl13lppv/Screenshot-2025-12-15-at-22.02.35.png?rlkey=pvgb938zsmgkjkw2mism7d60l&st=7r4ad30r&raw=1"
                  className="w-full h-full object-cover rounded-[2.5rem] transition-transform duration-1000 group-hover:scale-110"
                  alt="Instagram feed preview"
                />
                <div className="absolute inset-0 bg-luxury-gold/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-luxury-slate/60 max-w-4xl mx-auto leading-relaxed mb-16 font-light italic"
            >
              Before reaching out, many couples will quickly look at your
              website, your Instagram, and the way your brand presents itself. A
              stronger online presence increases desire, confidence, and the
              feeling that your planning service is worth contacting.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-12 mt-20">
              {[
                "Raises perceived value instantly",
                "Builds trust before the first message",
                "Makes your brand feel like the premium choice",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-12 h-12 bg-luxury-slate text-white rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-luxury-gold group-hover:-translate-y-2 transition-all duration-500 shadow-xl">
                    <Star
                      size={20}
                      className="group-hover:rotate-12 transition-transform"
                    />
                  </div>
                  <p className="text-luxury-slate font-bold uppercase tracking-widest text-[10px] leading-relaxed">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="case-studies" className="py-40 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-10 font-bold"
              >
                CLIENT RESULTS
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-7xl font-serif text-luxury-slate mb-8 tracking-tight"
              >
                What Happens When Your Marketing Starts Attracting{" "}
                <span className="text-luxury-gold italic">Better Weddings</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xl text-luxury-slate/40 max-w-3xl mx-auto font-light leading-relaxed"
              >
                Real results from wedding businesses we work with. Not
                impressions. Not followers. Actual wedding requests, booked
                weddings, and stronger opportunities.
              </motion.p>
            </div>

            <div className="space-y-16">
              {caseStudies.map((cs, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`rounded-[3rem] border border-luxury-gold/10 overflow-hidden grid lg:grid-cols-2 ${
                    index % 2 === 0
                      ? "bg-luxury-champagne/30"
                      : "bg-luxury-slate text-white"
                  }`}
                >
                  <div
                    className={`p-14 lg:p-20 flex flex-col justify-between ${
                      index % 2 !== 0 ? "order-last" : ""
                    }`}
                  >
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6 text-luxury-gold">
                        {cs.label}
                      </p>
                      <h3
                        className={`text-4xl md:text-5xl font-serif mb-3 tracking-tight leading-tight ${
                          index % 2 === 0 ? "text-luxury-slate" : "text-white"
                        }`}
                      >
                        {cs.headline}
                      </h3>
                      <p
                        className={`text-xl italic mb-12 ${
                          index % 2 === 0
                            ? "text-luxury-slate/50"
                            : "text-white/50"
                        }`}
                      >
                        {cs.subheadline}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-12">
                      {cs.stats.map((stat, i) => (
                        <div
                          key={i}
                          className={`p-6 rounded-2xl ${
                            index % 2 === 0
                              ? "bg-white border border-luxury-gold/10"
                              : "bg-white/5 border border-white/10"
                          }`}
                        >
                          <div className="text-3xl md:text-4xl font-serif mb-1 text-luxury-gold">
                            {stat.value}
                          </div>
                          <div
                            className={`text-[10px] uppercase tracking-[0.3em] font-bold ${
                              index % 2 === 0
                                ? "text-luxury-slate/40"
                                : "text-white/30"
                            }`}
                          >
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {cs.services.map((s, i) => (
                        <span
                          key={i}
                          className={`px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold border ${
                            index % 2 === 0
                              ? "border-luxury-gold/20 text-luxury-gold"
                              : "border-white/10 text-white/40"
                          }`}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`p-14 lg:p-20 flex flex-col justify-center ${
                      index % 2 !== 0
                        ? "border-r border-white/5"
                        : "border-l border-luxury-gold/5"
                    }`}
                  >
                    <p
                      className={`text-xl font-light leading-relaxed mb-12 ${
                        index % 2 === 0
                          ? "text-luxury-slate/60"
                          : "text-white/60"
                      }`}
                    >
                      {cs.description}
                    </p>
                    <Link
                      to="/contact"
                      className={`inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold transition-colors duration-300 ${
                        index % 2 === 0
                          ? "text-luxury-slate hover:text-luxury-gold"
                          : "text-white hover:text-luxury-gold"
                      }`}
                    >
                      Request Your Free Analysis <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-24 text-center"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-luxury-slate text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-700 rounded-full shadow-2xl overflow-hidden"
              >
                <span className="relative z-10">
                  Request Your Free Wedding Business Analysis
                </span>
                <ArrowRight
                  size={20}
                  className="relative z-10 group-hover:translate-x-2 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              </Link>
              <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-luxury-slate/30 font-bold">
                Free strategy session — no commitment
              </p>
            </motion.div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-40 px-6 lg:px-12 bg-luxury-champagne border-y border-luxury-gold/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-10 font-bold"
              >
                WHAT CLIENTS SAY
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-serif text-luxury-slate tracking-tight"
              >
                From the{" "}
                <span className="text-luxury-gold italic">
                  Wedding Professionals
                </span>{" "}
                We Work With
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="bg-white p-10 rounded-[3rem] border border-luxury-gold/10 shadow-sm flex flex-col gap-8"
                >
                  <Quote size={28} className="text-luxury-gold/30" />
                  <p className="text-lg text-luxury-slate/70 font-light leading-relaxed italic flex-1">
                    "{t.quote}"
                  </p>
                  <div className="border-t border-luxury-gold/10 pt-8">
                    <p className="text-sm font-bold text-luxury-slate">
                      {t.author}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-bold mt-1">
                      {t.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-40 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-32">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold mb-10"
              >
                OUR SERVICES
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-7xl font-serif text-luxury-slate mb-8 tracking-tight"
              >
                Marketing Systems Built Around{" "}
                <span className="text-luxury-gold italic">
                  Dream Weddings & Better Bookings
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xl text-luxury-slate/40 max-w-3xl mx-auto font-light leading-relaxed"
              >
                We help destination wedding planners, luxury wedding planners,
                high-end regional planners, and venues become more desirable,
                easier to trust, and more likely to receive serious wedding
                requests from better-fit couples.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-luxury-champagne/10 p-12 rounded-[4rem] border border-luxury-gold/10 hover:bg-luxury-slate hover:text-white transition-all duration-1000 shadow-sm hover:shadow-2xl flex flex-col justify-between"
                >
                  <div>
                    <div className="w-16 h-16 rounded-3xl bg-luxury-slate text-white flex items-center justify-center mb-10 group-hover:bg-luxury-gold transition-colors duration-700 shadow-xl">
                      <service.icon size={28} />
                    </div>
                    <h3 className="text-3xl font-serif mb-4 group-hover:text-luxury-gold transition-colors duration-700">
                      {service.title}
                    </h3>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-bold mb-8 group-hover:text-white/40">
                      {service.subtitle}
                    </p>
                    <p className="text-lg text-luxury-slate/50 leading-relaxed mb-10 font-light group-hover:text-white/60">
                      {service.description}
                    </p>
                    <ul className="space-y-4 mb-12">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-4 text-sm font-medium tracking-wide leading-relaxed"
                        >
                          <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mt-1.5 flex-shrink-0" />
                          <span className="group-hover:text-white/80">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-luxury-slate group-hover:text-luxury-gold hover:opacity-70 transition-all border-t border-luxury-gold/10 pt-8"
                  >
                    Explore Service <ArrowRight size={18} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDY LEAD MAGNET */}
        <section className="py-40 px-6 lg:px-12 bg-luxury-slate text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-luxury-gold/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-10 font-bold"
            >
              FREE CASE STUDY
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-serif mb-10 leading-tight tracking-tight"
            >
              See How We Helped a Wedding Planner Book More of the Right
              Weddings
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-white/40 mb-16 font-light italic leading-relaxed"
            >
              Receive the full breakdown of how we helped a wedding planner
              generate consistent wedding requests, attract better-fit couples,
              and fill her season more calmly — including what we changed, why
              it worked, and how the same framework could apply to your
              business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <form
                onSubmit={handleEmailSubmit}
                className="relative bg-white/5 backdrop-blur-xl p-4 rounded-full border border-white/10 flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address..."
                  required
                  className="flex-1 px-8 py-5 bg-transparent text-white placeholder-white/20 focus:outline-none text-sm tracking-widest uppercase font-bold"
                />
                <button
                  type="submit"
                  className="px-12 py-5 bg-luxury-gold text-luxury-slate text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white transition-all rounded-full shadow-2xl"
                >
                  Send Me the Case Study
                </button>
              </form>
              {status && (
                <p className="mt-8 text-xs font-bold uppercase tracking-widest text-luxury-gold">
                  {status}
                </p>
              )}
            </motion.div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="py-40 px-6 lg:px-12 bg-white text-luxury-slate">
          <div className="max-w-7xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-10 font-bold"
            >
              OUR APPROACH
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-serif mb-12 tracking-tight leading-tight"
            >
              Search. Trust. Desire.{" "}
              <span className="text-luxury-gold italic">
                A Clearer Path to Dream Weddings.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl font-light text-luxury-slate/40 mb-24 max-w-4xl mx-auto leading-relaxed"
            >
              Couples rarely book from one touchpoint. They search, compare,
              revisit, check your online presence, and then decide who feels
              worth contacting. Our approach is built around that full journey.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-12 text-left">
              {[
                {
                  title: "Visibility",
                  desc: "Help serious couples discover your business when they are actively searching for a destination, luxury, or high-end wedding planner.",
                },
                {
                  title: "Desire",
                  desc: "Strengthen the way your brand appears across your website, social presence, landing pages, and first impression points so couples feel drawn to your level.",
                },
                {
                  title: "Follow-Up",
                  desc: "Use retargeting, lead magnets, and clearer request flows to bring warm couples back and move them closer to sending a serious wedding request.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-luxury-champagne/10 p-12 rounded-[3rem] border border-luxury-gold/10 hover:border-luxury-gold/30 transition-all duration-500 shadow-sm"
                >
                  <div className="text-luxury-gold font-bold text-[10px] uppercase tracking-[0.4em] mb-8">
                    Phase 0{i + 1}
                  </div>
                  <h3 className="text-3xl font-serif mb-6 italic tracking-tight text-luxury-slate border-b border-luxury-gold/10 pb-6">
                    {item.title}
                  </h3>
                  <p className="text-luxury-slate/50 text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-40 px-6 lg:px-12 bg-luxury-sand/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-20" />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-8xl font-serif text-luxury-slate mb-12 tracking-tight leading-[1.1]"
            >
              Ready to Become the Planner{" "}
              <span className="text-luxury-gold italic">
                Better Couples Want to Book?
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-luxury-slate/40 mb-20 font-light leading-relaxed max-w-4xl mx-auto"
            >
              If you want to attract stronger-budget couples, elevate the way
              your brand is perceived, and book more weddings that fit your
              vision, the next step is a simple conversation about your market,
              positioning, and current request flow.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-6 px-16 py-8 bg-luxury-slate text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-700 rounded-full shadow-[0_40px_100px_-20px_rgba(15,23,42,0.3)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-6">
                  Request Your Free Wedding Business Analysis
                  <ArrowRight
                    size={24}
                    className="group-hover:translate-x-2 transition-transform duration-700"
                  />
                </span>
                <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              </Link>
              <a
                href="#case-studies"
                className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-slate/30 hover:text-luxury-gold transition-colors duration-300"
              >
                See Results First
              </a>
            </motion.div>
            <p className="mt-10 text-[10px] uppercase tracking-[0.3em] text-luxury-slate/20 font-bold">
              Free analysis — no pressure, no agency jargon
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
