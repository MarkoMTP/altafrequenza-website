import {
  ArrowRight,
  Monitor,
  MousePointerClick,
  Layout,
  CheckCircle,
  TrendingUp,
  Sparkles,
  Zap,
  Globe,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function WebsitesPage() {
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
        staggerChildren: 0.15
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Websites & Landing Pages for Wedding Planners | Alta Frequenza
        </title>

        <meta
          name="description"
          content="Modern websites and landing pages for wedding planners designed to turn interested visitors into high quality wedding requests."
        />

        <meta
          name="keywords"
          content="wedding planner website design, destination wedding planner website, wedding landing pages, luxury wedding planner website, conversion website wedding planner"
        />
      </Helmet>

      <div className="bg-luxury-champagne text-luxury-slate selection:bg-luxury-gold/30 pt-24 min-h-screen font-light">
        {/* HERO */}
        <section className="relative px-6 lg:px-12 py-32 overflow-hidden border-b border-luxury-gold/5">
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
                className="inline-flex items-center gap-3 px-6 py-2 glass border border-luxury-gold/20 text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-12 rounded-full font-bold shadow-sm"
              >
                <Monitor size={14} />
                Websites for Wedding Planners
              </motion.div>

              <motion.h1 
                variants={fadeIn} 
                className="text-5xl md:text-8xl font-serif text-luxury-slate mb-10 leading-[1.05] tracking-tight"
              >
                Turn Your Website Into a <span className="text-luxury-gold italic">Steady Source</span> of High Quality Wedding Requests
              </motion.h1>

              <motion.p 
                variants={fadeIn} 
                className="text-xl md:text-2xl text-luxury-slate/60 leading-relaxed max-w-4xl mx-auto mb-16 font-light italic"
              >
                We help wedding planners go from a slow, outdated website that
                attracts low budget requests and confuses couples to a modern
                luxury website that turns interested visitors into qualified
                wedding requests.
              </motion.p>

              <motion.div variants={fadeIn}>
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-luxury-slate text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-700 rounded-full shadow-2xl overflow-hidden"
                >
                  <span className="relative z-10">Discuss Your Website</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* MECHANISM (HOW WE CREATE THE RESULT) */}
        <section className="px-6 lg:px-12 py-32 bg-white relative">
          <div className="max-w-5xl mx-auto text-center mb-24">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold mb-8"
            >
              HOW WE CREATE THE RESULT
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif text-luxury-slate mb-10 tracking-tight leading-tight"
            >
              We Redesign the <span className="text-luxury-gold italic">Entire Visitor Journey</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-luxury-slate/60 max-w-3xl mx-auto font-light leading-relaxed font-light italic"
            >
              We build conversion focused websites specifically for wedding
              planners or venues, where every page is structured to guide
              couples from inspiration, to trust, to wedding request.
            </motion.p>
          </div>

          <div className="space-y-32 max-w-6xl mx-auto">
            {/* Step 1 */}
            <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="grid lg:grid-cols-2 gap-20 items-center"
            >
               <div className="order-2 lg:order-1">
                  <div className="w-16 h-16 flex items-center justify-center bg-luxury-gold text-white rounded-full mb-8 shadow-xl">
                    <Layout size={28} />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-serif text-luxury-slate mb-8 leading-tight">
                    1. A Modern Website Built for Luxury Positioning
                  </h3>
                  <p className="text-luxury-slate/60 text-lg mb-10 font-light leading-relaxed">
                    The first thing couples notice is how your website feels. If
                    it looks old, cluttered, or difficult to use, they immediately
                    question the level of service behind it.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      "Fast, modern design",
                      "Premium visual presentation",
                      "Mobile first experience",
                      "A stronger first impression from the first second"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <CheckCircle size={18} className="text-luxury-gold mt-1 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-bold uppercase tracking-widest text-luxury-slate/60 group-hover:text-luxury-slate transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
               </div>
               <div className="order-1 lg:order-2 rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,23,42,0.15)] relative border border-luxury-gold/10 group aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80"
                    alt="Elegant website design for wedding planners"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-luxury-gold/5 mix-blend-overlay" />
               </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="grid lg:grid-cols-2 gap-20 items-center"
            >
               <div className="rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,23,42,0.15)] relative border border-luxury-gold/10 group aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80"
                    alt="Couple browsing wedding planner website"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-luxury-gold/5 mix-blend-overlay" />
               </div>
               <div>
                  <div className="w-16 h-16 flex items-center justify-center bg-luxury-gold text-white rounded-full mb-8 shadow-xl">
                    <MousePointerClick size={28} />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-serif text-luxury-slate mb-8 leading-tight">
                    2. Clear Storytelling That Builds Trust
                  </h3>

                  <p className="text-luxury-slate/60 text-lg mb-10 font-light leading-relaxed">
                    Most planners/venues show beautiful weddings, but couples
                    still leave unsure. We make the message clearer, so the right
                    visitors understand your value, your style, and why you feel
                    worth contacting.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      "Clear messaging for high end destination couples",
                      "Stronger trust throughout the page",
                      "Pages structured around decision making",
                      "A smoother path toward contacting you"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <CheckCircle size={18} className="text-luxury-gold mt-1 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-bold uppercase tracking-widest text-luxury-slate/60 group-hover:text-luxury-slate transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
               </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="grid lg:grid-cols-2 gap-20 items-center"
            >
               <div>
                  <div className="w-16 h-16 flex items-center justify-center bg-luxury-gold text-white rounded-full mb-8 shadow-xl">
                    <TrendingUp size={28} />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-serif text-luxury-slate mb-8 leading-tight">
                    3. A Website That Converts More of the Traffic You Already Have
                  </h3>

                  <p className="text-luxury-slate/60 text-lg mb-10 font-light leading-relaxed">
                    If you are already running Google Ads, posting on Instagram,
                    or getting referrals, a stronger website helps convert more of
                    that traffic into real wedding requests.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      "Inquiry forms designed to attract better budget weddings",
                      "Better page structure for conversions",
                      "Faster loading speed and stronger mobile performance",
                      "SEO foundations so couples can actually find you"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <CheckCircle size={18} className="text-luxury-gold mt-1 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-bold uppercase tracking-widest text-luxury-slate/60 group-hover:text-luxury-slate transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
               </div>
               <div className="rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,23,42,0.15)] relative border border-luxury-gold/10 group aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80"
                    alt="Wedding planner working on laptop"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-luxury-gold/5 mix-blend-overlay" />
               </div>
            </motion.div>
          </div>
        </section>

        {/* WHY THIS WORKS */}
        <section className="px-6 lg:px-12 py-32 bg-luxury-slate text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-20">
             <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-luxury-gold/10 blur-[150px] rounded-full" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10 mb-20">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold mb-8"
            >
              WHY THIS WORKS
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif mb-10 tracking-tight leading-tight"
            >
              Because Most Wedding Websites Work Like <span className="text-luxury-gold italic">Portfolios</span>, Not Acquisition Systems
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-white/50 max-w-4xl mx-auto font-light leading-relaxed mb-16 italic"
            >
              Many wedding websites look nice, but they do not guide couples
              through the decision process. So couples browse, feel unsure, and
              leave. When a website is structured correctly, it builds trust
              quickly, positions you as a premium planner/venue, and makes
              contacting you feel like the natural next step.
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
               {[
                 "Stronger first impression",
                 "More trust from high quality couples",
                 "Better conversion from traffic you already have",
                 "Fewer confused visitors leaving the site",
                 "A clearer premium position in your market",
                 "More wedding requests from the right type of couples"
               ].map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="flex items-center gap-4 group"
                 >
                    <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors leading-relaxed">{item}</span>
                 </motion.div>
               ))}
            </div>
          </div>
        </section>

        {/* DIFFERENTIATOR (WHAT MAKES US DIFFERENT) */}
        <section className="px-6 lg:px-12 py-32 bg-luxury-champagne">
          <div className="max-w-5xl mx-auto text-center mb-24">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold mb-10"
            >
              WHAT MAKES US DIFFERENT
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-serif text-luxury-slate mb-10 tracking-tight leading-tight"
            >
              Not Just a <span className="text-luxury-gold italic">Beautiful Website</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-luxury-slate/60 max-w-4xl mx-auto font-light leading-relaxed font-light italic"
            >
              Most designers focus on making a site look good. We focus on
              making it perform. That means building websites specifically for
              wedding planners or venues, with the psychology, structure, and
              flow needed to turn visitors into wedding requests.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {[
              {
                title: "Built for Wedding Planners and Venues",
                desc: "Your site is shaped around how couples actually choose a planner, not around generic design trends."
              },
              {
                title: "Focused on Better Wedding Requests",
                desc: "The goal is not just more traffic. The goal is more of the right couples contacting you."
              },
              {
                title: "Designed to Work With Your Marketing",
                desc: "Whether visitors come from ads, Instagram, Pinterest, or referrals, the site is built to convert more of them."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-[3.5rem] border border-luxury-gold/10 shadow-sm hover:shadow-2xl transition-all duration-700"
              >
                <div className="text-luxury-gold font-bold text-[10px] uppercase tracking-[0.4em] mb-10">Pillar 0{i+1}</div>
                <h3 className="text-xl font-bold uppercase tracking-[0.1em] text-luxury-slate mb-6">
                  {item.title}
                </h3>
                <p className="text-luxury-slate/50 font-light leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="px-6 lg:px-12 py-32 bg-white relative">
          <div className="max-w-6xl mx-auto text-center mb-24">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold mb-10"
            >
              CASE STUDIES
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif text-luxury-slate mb-10 tracking-tight leading-tight"
            >
              Real Improvements in <span className="text-luxury-gold italic">Wedding Requests</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-luxury-slate/50 font-light max-w-3xl mx-auto italic"
            >
              When a website is structured correctly, couples understand your
              value faster, trust the brand more, and feel confident sending a
              wedding request.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* ITALY */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-luxury-champagne/10 p-4 rounded-[4rem] border border-luxury-gold/10 shadow-sm group hover:bg-luxury-slate hover:text-white transition-all duration-1000"
            >
              <div className="rounded-[3.5rem] overflow-hidden mb-10 aspect-video relative">
                <img
                  src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80"
                  alt="Destination wedding planner website example"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                 <div className="absolute inset-0 bg-luxury-gold/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="px-10 pb-10">
                <h3 className="text-3xl font-serif mb-8 italic tracking-wide group-hover:text-luxury-gold transition-colors">
                  Italian Destination Wedding Planner
                </h3>

                <ul className="space-y-4">
                  {[
                    "Website redesigned with modern luxury positioning",
                    "Clearer structure guiding couples toward contact",
                    "Wedding requests increased from 5 to 11 per month",
                    "Higher average wedding budgets after redesign"
                  ].map((stat, i) => (
                    <li key={i} className="flex items-start gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-slate/40 group-hover:text-white/40 leading-relaxed">
                      <CheckCircle size={14} className="text-luxury-gold mt-0.5 flex-shrink-0" />
                      {stat}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* NEW YORK */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-luxury-champagne/10 p-4 rounded-[4rem] border border-luxury-gold/10 shadow-sm group hover:bg-luxury-slate hover:text-white transition-all duration-1000"
            >
              <div className="rounded-[3.5rem] overflow-hidden mb-10 aspect-video relative">
                <img
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80"
                  alt="Luxury wedding planner website example"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                 <div className="absolute inset-0 bg-luxury-gold/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="px-10 pb-10">
                <h3 className="text-3xl font-serif mb-8 italic tracking-wide group-hover:text-luxury-gold transition-colors">
                  New York Wedding Planner
                </h3>

                <ul className="space-y-4">
                  {[
                    "Outdated style replaced with conversion structure",
                    "Stronger messaging for high end couples",
                    "Wedding requests increased from 8 to 17 per month",
                    "More qualified couples reaching out through the site"
                  ].map((stat, i) => (
                    <li key={i} className="flex items-start gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-slate/40 group-hover:text-white/40 leading-relaxed">
                      <CheckCircle size={14} className="text-luxury-gold mt-0.5 flex-shrink-0" />
                      {stat}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* NEXT STEPS (REWRITTEN AS INVESTMENT) */}
        <section className="px-6 lg:px-12 py-32 bg-luxury-slate text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-luxury-gold opacity-[0.03] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="max-w-5xl mx-auto text-center mb-24 relative z-10">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold mb-10"
            >
              NEXT STEPS
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-serif mb-10 tracking-tight leading-tight"
            >
              See What Your Website <span className="text-luxury-gold italic">Could Be Doing Better</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-white/40 max-w-4xl mx-auto font-light leading-relaxed font-light italic"
            >
              Solutions like this typically start around €1,800 depending on the
              size of the site and the level of optimization. The next step is a
              short call where we look at your current website, identify where
              couples are dropping off, and outline exactly how we would
              redesign it to increase wedding requests and attract higher budget
              weddings.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <div className="bg-white/5 backdrop-blur-3xl p-12 lg:p-24 border border-white/10 rounded-[5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-luxury-gold/50 text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-gold mb-12 rounded-full">
                 <Award size={14} /> Architecture Excellence
              </div>

              <h3 className="text-3xl md:text-5xl font-serif text-white mb-10 tracking-tight leading-tight">
                Websites and Landing Pages for <span className="text-luxury-gold italic">Wedding Planners and Venues</span>
              </h3>
              
              <p className="text-white/40 text-lg mb-16 font-light leading-relaxed italic border-l border-luxury-gold/30 pl-8">
                Built for planners/venues who want a more modern online presence
                and a website that turns more visitors into high quality wedding
                requests.
              </p>

              <div className="grid md:grid-cols-2 gap-12 mb-20">
                <ul className="text-white/60 space-y-6 text-[10px] uppercase tracking-[0.25em] font-bold">
                  {[
                    "Modern luxury design",
                    "Conversion focused structure",
                    "Mobile and speed optimization"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4"><CheckCircle size={16} className="text-luxury-gold" /> {item}</li>
                  ))}
                </ul>
                <ul className="text-white/60 space-y-6 text-[10px] uppercase tracking-[0.25em] font-bold">
                  {[
                    "Inquiry forms for better fit",
                    "SEO foundations",
                    "Built around trust and positioning"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4"><CheckCircle size={16} className="text-luxury-gold" /> {item}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-center gap-8">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center gap-6 px-16 py-8 bg-white text-luxury-slate text-[10px] uppercase tracking-[0.4em] font-bold rounded-full hover:bg-luxury-gold transition-all duration-700 w-full md:w-auto"
                >
                  <span className="relative z-10 flex items-center gap-4">
                    Book a Short Call
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-700" />
                  </span>
                  <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                </Link>
                
                <p className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-bold text-center leading-relaxed">
                  If it looks like a good fit, we secure the investment and begin
                  building the new site.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
