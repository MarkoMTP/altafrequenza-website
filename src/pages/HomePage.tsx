import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Bot,
  Monitor,
  ChevronRight,
  Star,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
        setStatus("✅ Thanks! Check your email for the guide.");
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
      title: "Google Ads for Wedding Planners & Venues",
      subtitle: "Get found by couples already searching",
      description:
        "We build Google Ads systems around the psychology of couples actively searching for a planner or venue, so your business appears at the exact moment they are ready to take action and send a wedding request.",
      features: [
        "Campaigns built around high intent wedding searches",
        "Messaging shaped around how couples choose who to contact",
        "Ongoing optimisation based on performance and lead quality",
        "Strategy adapted to search behaviour, SEO shifts, and newer discovery trends",
      ],
      path: "/google-ads",
    },
    {
      icon: Sparkles,
      title: "Social Media Management",
      subtitle: "Build trust before couples even contact you",
      description:
        "We create a stronger social presence using the psychology of trust, taste, and first impressions, so couples discover your brand, feel more confident in your level, and become more likely to send a wedding request.",
      features: [
        "Content structured around trust and premium positioning",
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

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Wedding Planner & Venue Marketing Agency | Google Ads, Social Media,
          Websites & Lead Generation | Alta Frequenza
        </title>

        <meta
          name="description"
          content="Alta Frequenza helps wedding planners and wedding venues attract more wedding requests through strategic marketing, stronger positioning, modern websites, SEO, GEO, and better online visibility."
        />

        <meta
          name="keywords"
          content="wedding planner marketing, wedding venue marketing, wedding planner google ads, google ads for wedding planners, google ads for wedding venues, wedding planner social media, wedding venue social media, wedding planner website design, wedding venue website design, destination wedding planner website, SEO for wedding planners, GEO for wedding businesses, wedding marketing agency, marketing for wedding planners, marketing for wedding venues"
        />
      </Helmet>

      <div className="bg-luxury-champagne text-luxury-slate selection:bg-luxury-gold/30 pt-24 min-h-screen">
        {/* HERO */}
        <section className="relative h-screen flex items-center justify-center px-6 lg:px-12 overflow-hidden">
           {/* Background Decorative Elements */}
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
                Marketing for Wedding Planners & Venues
              </motion.div>

              <motion.h1 
                variants={fadeIn}
                className="text-5xl md:text-8xl font-serif leading-[1.05] mb-10 text-luxury-slate tracking-tight"
              >
                Turn Your Marketing Into a <span className="text-luxury-gold italic">Consistent Source</span> of Wedding Requests
              </motion.h1>

              <motion.p 
                variants={fadeIn}
                className="text-xl md:text-2xl text-luxury-slate/60 max-w-4xl mx-auto leading-relaxed mb-12 font-light italic"
              >
                We help wedding planners and wedding venues become easier to
                discover, more trusted at first glance, and more likely to receive
                wedding requests from couples already planning their wedding.
              </motion.p>

              <motion.div variants={fadeIn}>
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-luxury-slate text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-700 rounded-full shadow-2xl overflow-hidden"
                >
                  <span className="relative z-10">Book a Strategy Session</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* WHY VISIBILITY MATTERS (THE REAL PROBLEM) */}
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
              <motion.p variants={fadeIn} className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-10 font-bold">
                THE REAL PROBLEM
              </motion.p>

              <motion.h2 variants={fadeIn} className="text-4xl md:text-6xl font-serif text-luxury-slate mb-10 tracking-tight leading-tight">
                The Best Wedding Businesses Are <span className="text-luxury-gold italic">Not Always</span> the Ones Getting Contacted
              </motion.h2>

              <motion.div variants={fadeIn} className="space-y-8 text-xl text-luxury-slate/60 font-light leading-relaxed">
                <p>
                  Couples rarely compare every planner or venue in a region.
                  Usually, they contact the first few businesses that feel
                  visible, professional, and trustworthy.
                </p>

                <p>
                  If your business is hard to find or your online presence feels
                  unclear, many couples simply move on without ever contacting
                  you.
                </p>

                <p className="italic text-luxury-slate font-medium text-2xl border-l-[3px] border-luxury-gold pl-8 py-2">
                  This is not just a service problem. It is often a visibility and
                  trust problem.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* DISCOVERY SECTION (HOW COUPLES DISCOVER YOU) */}
        <section className="py-40 px-6 lg:px-12 bg-luxury-champagne border-y border-luxury-gold/5">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={staggerContainer}
            >
              <motion.p variants={fadeIn} className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-10 font-bold">
                HOW COUPLES DISCOVER YOU
              </motion.p>

              <motion.h2 variants={fadeIn} className="text-4xl md:text-6xl font-serif text-luxury-slate mb-10 tracking-tight leading-tight">
                Most Couples Begin Their <span className="text-luxury-gold italic">Search</span> Online
              </motion.h2>

              <motion.div variants={fadeIn} className="space-y-8 text-xl text-luxury-slate/60 font-light leading-relaxed">
                <p>
                  Before couples contact you, they search. They look for
                  planners, venues, ideas, and inspiration in the exact region
                  where they want to get married.
                </p>

                <p>
                  The businesses that get discovered first are usually the ones
                  that receive the first wedding requests and stay in the
                  running.
                </p>

                <p className="font-bold text-luxury-slate uppercase tracking-widest text-xs mt-12 bg-luxury-gold/10 px-6 py-3 rounded-full inline-block">
                  When your marketing is structured properly, couples searching
                  for weddings in your area are far more likely to find you
                  first.
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

        {/* FIRST IMPRESSIONS SECTION */}
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
              Couples Form an Opinion About Your Brand in <span className="text-luxury-gold italic">Seconds</span>
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
              stronger online presence increases confidence and makes a wedding
              request feel like a safer next step.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-12 mt-20">
              {[
                "Raises perceived value instantly",
                "Builds trust before the first message",
                "Helps you stand out from similar competitors"
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
                    <Star size={20} className="group-hover:rotate-12 transition-transform" />
                  </div>
                  <p className="text-luxury-slate font-bold uppercase tracking-widest text-[10px] leading-relaxed">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY ALTA FREQUENZA */}
        <section className="py-40 px-6 lg:px-12 bg-luxury-slate text-white relative overflow-hidden">
           <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-20" />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold mb-10"
            >
              WHY ALTA FREQUENZA
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-serif mb-12 tracking-tight"
            >
              Built <span className="text-luxury-gold italic">Specifically</span> for Wedding Planners and Venues
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-white/50 leading-relaxed font-light max-w-4xl mx-auto italic"
            >
              Unlike general marketing agencies, we work specifically with
              wedding planners and wedding venues. That means the messaging, the
              positioning, the website structure, and the strategy are shaped
              around how couples actually choose who to contact in the wedding
              industry. We also adapt our work to newer SEO changes and GEO,
              helping your business stay visible both in search engines and in
              AI driven discovery.
            </motion.p>
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
                The Systems Behind <span className="text-luxury-gold italic">More Wedding Requests</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xl text-luxury-slate/40 max-w-3xl mx-auto font-light leading-relaxed"
              >
                We help wedding businesses become easier to find, stronger at
                first impression, and more consistent in turning online
                attention into real wedding requests.
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
                        <li key={idx} className="flex items-start gap-4 text-sm font-medium tracking-wide leading-relaxed">
                          <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mt-1.5 flex-shrink-0" />
                          <span className="group-hover:text-white/80">{feature}</span>
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

        {/* CASE STUDY */}
        <section className="py-40 px-6 lg:px-12 bg-luxury-slate text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-luxury-gold/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-10 font-bold"
            >
              CASE STUDY
            </motion.p>

            <motion.h2 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-4xl md:text-7xl font-serif mb-10 leading-tight tracking-tight"
            >
              Real Wedding Requests. <span className="text-luxury-gold italic">More Predictability.</span> Less Guesswork.
            </motion.h2>

            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="text-xl text-white/40 mb-16 font-light italic leading-relaxed"
            >
              We helped a wedding business create a more consistent flow of
              wedding requests by improving visibility, structure, and the way
              couples experienced the brand online.
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
                  placeholder="Private Email Access..."
                  required
                  className="flex-1 px-8 py-5 bg-transparent text-white placeholder-white/20 focus:outline-none text-sm tracking-widest uppercase font-bold"
                />
                <button
                  type="submit"
                  className="px-12 py-5 bg-luxury-gold text-luxury-slate text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white transition-all rounded-full shadow-2xl"
                >
                  Get the Case Study
                </button>
              </form>
              {status && <p className="mt-8 text-xs font-bold uppercase tracking-widest text-luxury-gold">{status}</p>}
            </motion.div>
          </div>
        </section>

        {/* APPROACH (FRAMEWORK) */}
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
              More Visibility. More Trust. <span className="text-luxury-gold italic">More Consistent Wedding Requests.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl font-light text-luxury-slate/40 mb-24 max-w-4xl mx-auto leading-relaxed"
            >
              Couples need to discover you, trust you quickly, and feel
              confident enough to contact you. Our approach is built around
              those three steps.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-12 text-left">
              {[
                { title: "Visibility", desc: "Help your business appear where couples are already looking for planners and venues across search, social, SEO, and newer AI driven discovery." },
                { title: "Trust", desc: "Create a stronger online presence that makes your brand feel credible, polished, premium, and worth contacting." },
                { title: "Conversion", desc: "Build systems that turn attention into wedding requests more efficiently by matching how couples actually browse, compare, and decide." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-luxury-champagne/10 p-12 rounded-[3rem] border border-luxury-gold/10 hover:border-luxury-gold/30 transition-all duration-500 shadow-sm"
                >
                  <div className="text-luxury-gold font-bold text-[10px] uppercase tracking-[0.4em] mb-8">Phase 0{i+1}</div>
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
              Ready to Attract <span className="text-luxury-gold italic">More Wedding Requests?</span>
            </motion.h2>

            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="text-xl text-luxury-slate/40 mb-20 font-light leading-relaxed max-w-4xl mx-auto"
            >
              If you want your marketing to stop feeling inconsistent and start
              bringing in more of the right couples, the next step is a simple
              conversation to see what would make the most sense for your
              business.
            </motion.p>

            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-6 px-16 py-8 bg-luxury-slate text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-700 rounded-full shadow-[0_40px_100px_-20px_rgba(15,23,42,0.3)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-6">
                  Book Your Consultation
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-700" />
                </span>
                <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
