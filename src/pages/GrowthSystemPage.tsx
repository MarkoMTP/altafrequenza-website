import {
  ArrowRight,
  Search,
  BarChart,
  Target,
  TrendingUp,
  CheckCircle,
  Award,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function GrowthSystemPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
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
          Google Ads for Wedding Pros & Venues | More Qualified Wedding Requests
        </title>
        <meta
          name="description"
          content="A Google Ads system for wedding professionals and venues designed to generate more qualified wedding requests from couples actively searching for your services."
        />
        <meta
          name="keywords"
          content="wedding planner marketing, google ads wedding planner, wedding planner leads, destination wedding planner google ads, luxury wedding planner marketing, wedding marketing agency"
        />
        <meta property="og:title" content="Google Ads for Wedding Pros & Venues" />
        <meta property="og:description" content="Generate more qualified wedding requests from couples actively searching for your services." />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/logo.png" />
      </Helmet>

      <div className="bg-luxury-champagne text-luxury-slate selection:bg-luxury-gold/30 pt-24 min-h-screen">
        {/* ------------------------------- HERO / OUTCOME -------------------------------- */}
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
                <TrendingUp size={14} />
                Google Ads for Wedding Planners
              </motion.div>

              <motion.h1
                variants={fadeIn}
                className="text-5xl md:text-8xl font-serif text-luxury-slate mb-10 leading-[1.05] tracking-tight"
              >
                More Qualified Wedding Requests. <span className="text-luxury-gold italic">Less Guesswork.</span>
              </motion.h1>

              <motion.p
                variants={fadeIn}
                className="text-xl md:text-2xl text-luxury-slate/60 leading-relaxed max-w-4xl mx-auto mb-6 font-light italic"
              >
                We help wedding planners generate a more consistent flow of
                requests from couples actively searching for a planner, instead of
                relying only on referrals, Instagram reach, or slow seasons.
              </motion.p>

              <motion.p
                variants={fadeIn}
                className="text-lg text-luxury-slate/50 max-w-2xl mx-auto mb-16 font-light leading-relaxed"
              >
                The goal is simple: bring you more of the right requests, from
                couples who are already looking, already interested, and far more
                likely to take the next step.
              </motion.p>

              <motion.div variants={fadeIn}>
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-luxury-slate text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-500 rounded-full shadow-2xl overflow-hidden"
                >
                  <span className="relative z-10">Book Your Free Consultation</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ----------------------------- MECHANISM ------------------------------- */}
        <section className="px-6 lg:px-12 py-32 bg-white relative">
          <div className="max-w-5xl mx-auto text-center mb-24">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold mb-8"
            >
              HOW WE GENERATE THE OUTCOME
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif text-luxury-slate mb-10 tracking-tight"
            >
              A Structured System Built Around <span className="text-luxury-gold italic">Buying Intent</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-luxury-slate/60 max-w-3xl mx-auto font-light leading-relaxed"
            >
              This is not about pushing ads in front of random people. The
              system is built to place your business in front of couples who are
              already searching for a wedding planner in the location you serve,
              then guide them toward a serious enquiry.
            </motion.p>
          </div>

          <div className="space-y-32 max-w-6xl mx-auto">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="w-16 h-16 flex items-center justify-center bg-luxury-gold text-white rounded-full mb-8 shadow-xl">
                  <Search size={28} />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-luxury-slate mb-6 leading-tight">
                  1. We Put You in Front of Couples Already Searching
                </h3>
                <p className="text-luxury-slate/60 text-lg mb-10 font-light leading-relaxed">
                  We target the kinds of searches people make when they are no
                  longer casually browsing, but actively looking for a planner
                  to help them move forward.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "Search intent, not passive scrolling",
                    "Locations aligned with your market",
                    "Messaging built around serious enquiries",
                    "Filtering to reduce low-quality clicks"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <CheckCircle size={18} className="text-luxury-gold mt-1 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-luxury-slate/70 tracking-wide leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2 rounded-[3rem] overflow-hidden shadow-2xl relative border border-luxury-gold/10">
                <div className="aspect-video bg-luxury-slate/5 flex items-center justify-center p-12">
                  <div className="w-full h-full bg-white rounded-2xl shadow-lg p-6 border border-luxury-gold/20 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-6 h-6 bg-luxury-gold rounded-full flex items-center justify-center text-white text-[10px]">G</div>
                      <div className="flex-1 h-3 bg-slate-100 rounded-full" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-luxury-gold/10 rounded-lg w-3/4" />
                      <div className="h-4 bg-luxury-gold/10 rounded-lg w-1/2" />
                      <div className="h-10 bg-luxury-gold/20 rounded-lg w-1/3 mt-4" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-slate/50 to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative border border-luxury-gold/10">
                <div className="aspect-video bg-luxury-slate/5 flex items-center justify-center p-12">
                  <div className="w-full h-full bg-white rounded-2xl shadow-lg p-6 border border-luxury-gold/20 relative">
                    <div className="w-12 h-12 bg-luxury-gold/20 rounded-full absolute -top-4 -right-4 blur-xl" />
                    <div className="flex-1 flex flex-col items-center justify-center space-y-4 h-full">
                      <Sparkles size={40} className="text-luxury-gold" />
                      <div className="text-center font-serif text-xl tracking-wide">Request Received.</div>
                      <div className="w-24 h-1 bg-luxury-gold rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-slate/50 to-transparent pointer-events-none" />
              </div>
              <div>
                <div className="w-16 h-16 flex items-center justify-center bg-luxury-gold text-white rounded-full mb-8 shadow-xl">
                  <Target size={28} />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-luxury-slate mb-6 leading-tight">
                  2. We Turn Interest Into Requests
                </h3>

                <p className="text-luxury-slate/60 text-lg mb-10 font-light leading-relaxed">
                  Getting the click is only the first step. We make sure the
                  message, the page, and the website experience are clear
                  enough that the right couples actually reach out.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "Clear, trust-building ad messaging",
                    "Conversion-focused landing page",
                    "Request flow designed to reduce drop-off",
                    "Pre-qualification that helps attract better-fit leads"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <CheckCircle size={18} className="text-luxury-gold mt-1 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-luxury-slate/70 tracking-wide leading-relaxed">{item}</span>
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
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div>
                <div className="w-16 h-16 flex items-center justify-center bg-luxury-gold text-white rounded-full mb-8 shadow-xl">
                  <BarChart size={28} />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-luxury-slate mb-6 leading-tight">
                  3. We Refine the System Until It Becomes More Predictable
                </h3>

                <p className="text-luxury-slate/60 text-lg mb-10 font-light leading-relaxed">
                  Once the system is live, we improve it continuously so lead
                  quality gets stronger, wasted spend gets reduced, and
                  performance becomes steadier over time.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "Search-term filtering",
                    "Keyword refinement",
                    "Geographic performance reviews",
                    "Messaging and conversion adjustments",
                    "Budget and bid optimization"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <CheckCircle size={18} className="text-luxury-gold mt-1 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-luxury-slate/70 tracking-wide leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative border border-luxury-gold/10">
                <div className="aspect-video bg-luxury-slate flex items-center justify-center p-12">
                  <div className="w-full space-y-4">
                    <div className="flex items-end gap-2 h-32">
                      <div className="flex-1 bg-luxury-gold/20 h-1/2 rounded-t-xl" />
                      <motion.div initial={{ height: 0 }} whileInView={{ height: '60%' }} className="flex-1 bg-luxury-gold/40 rounded-t-xl" />
                      <motion.div initial={{ height: 0 }} whileInView={{ height: '85%' }} className="flex-1 bg-luxury-gold/60 rounded-t-xl" />
                      <motion.div initial={{ height: 0 }} whileInView={{ height: '100%' }} className="flex-1 bg-luxury-gold rounded-t-xl" />
                    </div>
                    <div className="flex justify-between text-[10px] uppercase tracking-widest text-white/40 font-bold">
                      <span>M1</span><span>M2</span><span>M3</span><span>Current</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ---------------------------- WHY IT WORKS --------------------------- */}
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
              className="text-4xl md:text-6xl font-serif mb-10 tracking-tight"
            >
              Because It Reaches Couples at the <span className="text-luxury-gold italic">Exact Moment</span> They’re Looking
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-white/50 max-w-4xl mx-auto font-light leading-relaxed mb-16"
            >
              Many marketing channels depend on timing, algorithms, or luck.
              Search-based advertising works differently: it places you in front
              of people who are already showing intent. That is why it can
              become one of the clearest paths to more consistent wedding
              enquiries.
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {[
                "Couples are already looking for what you offer",
                "You appear before they enquire elsewhere",
                "The message speaks to people ready to take action",
                "Stronger positioning increases trust quickly",
                "Better-fit enquiries reduce time wasted on poor leads",
                "Ongoing refinement improves efficiency over time"
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
                  <span className="text-sm font-bold uppercase tracking-[0.15em] text-white/60 group-hover:text-white transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------ DIFFERENTIATOR ------------------------------ */}
        <section className="px-6 lg:px-12 py-32 bg-luxury-champagne">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold mb-8"
            >
              WHAT MAKES US DIFFERENT
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif text-luxury-slate mb-10 tracking-tight"
            >
              Not General Marketing. <span className="text-luxury-gold italic">Wedding Industry-Specific</span> Lead Generation.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-luxury-slate/60 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Most agencies know how to run ads. Very few understand how couples
              actually choose a wedding planner, what makes them trust one, and
              how to attract enquiries that feel aligned with your level of
              service.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {[
              {
                title: "Wedding-Specific Positioning",
                desc: "We build campaigns around how couples search for planners, what they care about, and what makes them feel confident enough to enquire."
              },
              {
                title: "Quality Over Vanity Metrics",
                desc: "The goal is not traffic for the sake of traffic. The goal is better enquiries, stronger fit, and a system that supports real bookings."
              },
              {
                title: "Built for Long-Term Consistency",
                desc: "We do not treat this like a short burst of activity. We build and refine the system to help you create steadier demand over time."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-[2.5rem] border border-luxury-gold/10 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="text-luxury-gold font-bold text-[10px] uppercase tracking-[0.4em] mb-10">Pillar 0{i + 1}</div>
                <h3 className="text-xl font-bold uppercase tracking-widest text-luxury-slate mb-6">
                  {item.title}
                </h3>
                <p className="text-luxury-slate/50 font-light leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ------------------------------ SOCIAL PROOF ------------------------------ */}
        <section className="px-6 lg:px-12 py-32 bg-white relative">
          <div className="max-w-6xl mx-auto text-center mb-24">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold mb-8"
            >
              CASE STUDIES
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif text-luxury-slate mb-8 tracking-tight"
            >
              Results Across <span className="text-luxury-gold italic">Different Wedding Markets</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg font-light text-luxury-slate/50 max-w-2xl mx-auto italic"
            >
              Below are example campaign outcomes showing duration, spend,
              enquiries, cost per lead, and weddings booked.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { market: "Italy Destination Planner", stats: ["12 months", "€3,000 / month spend", "144 requests", "16 weddings booked"] },
              { market: "New York City Planner", stats: ["10 months", "$3,000 / month spend", "130 requests", "16 weddings booked"] },
              { market: "France + Italy Destination Planner", stats: ["10 months", "€1,800 / month spend", "100 requests", "9 weddings booked"] },
              { market: "Mexico Destination Planner", stats: ["7 months", "$1,500 / month spend", "70 requests", "6 weddings booked"] }
            ].map((caseStudy, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-luxury-champagne/20 border border-luxury-gold/10 rounded-[2.5rem] group hover:bg-luxury-slate hover:text-white transition-all duration-700"
              >
                <h3 className="text-lg font-serif mb-8 italic tracking-wide group-hover:text-luxury-gold transition-colors">
                  {caseStudy.market}
                </h3>
                <ul className="space-y-4">
                  {caseStudy.stats.map((stat, i) => (
                    <li key={i} className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-slate/40 group-hover:text-white/40">
                      <CheckCircle size={14} className="text-luxury-gold" />
                      {stat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mt-20 text-luxury-slate/30 text-xs font-light tracking-wide italic"
          >
            Results vary depending on pricing, market, offer strength,
            response speed, and seasonality — but the system is designed to
            create a steadier pipeline of qualified requests.
          </motion.p>
        </section>

        {/* ------------------------------ NEXT STEPS / INVESTMENT ------------------------------ */}
        <section className="px-6 lg:px-12 py-32 bg-luxury-slate text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-luxury-gold opacity-[0.03] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />

          <div className="max-w-5xl mx-auto text-center mb-24 relative z-10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold mb-8"
            >
              NEXT STEPS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif mb-10 tracking-tight"
            >
              See If This Makes Sense for <span className="text-luxury-gold italic">Your Market</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-white/40 max-w-3xl mx-auto font-light leading-relaxed"
            >
              If your goal is more qualified wedding requests, the next step is
              a conversation about your market, your pricing, and whether this
              system is the right fit for your business.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <div className="bg-white/5 backdrop-blur-3xl p-12 lg:p-20 border border-white/10 rounded-[4rem] shadow-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-luxury-gold/50 text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-gold mb-10 rounded-full">
                <Award size={14} /> Global Authority
              </div>

              <h3 className="text-3xl md:text-4xl font-serif text-white mb-8 tracking-tight">
                Google Ads Management for <span className="text-luxury-gold italic">Wedding Planners</span>
              </h3>
              <p className="text-white/40 text-lg mb-12 font-light leading-relaxed italic">
                Built for planners who want a more predictable way to generate
                serious requests from couples actively looking to book.
              </p>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <div className="text-white/30 text-sm line-through mb-2 font-light tracking-widest">€2,580 SETUP</div>
                  <div className="text-4xl font-serif text-luxury-gold mb-6 tracking-tighter">€1290 <span className="text-xs text-white/40 font-sans tracking-widest uppercase">One-time setup</span></div>

                  <ul className="text-white/60 space-y-4 text-xs uppercase tracking-widest font-bold">
                    <li className="flex items-center gap-3"><CheckCircle size={14} className="text-luxury-gold" /> Campaign strategy and build</li>
                    <li className="flex items-center gap-3"><CheckCircle size={14} className="text-luxury-gold" /> Tracking setup</li>
                    <li className="p-4 bg-luxury-gold border border-luxury-gold text-luxury-slate rounded-2xl flex items-center justify-between">
                      <span>Free conversion page</span>
                      <span className="opacity-70">(Worth €800)</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8 md:pt-16 md:border-l md:border-white/5 md:pl-12">
                  <div className="text-white/30 text-sm line-through mb-2 font-light tracking-widest">€980/MONTH</div>
                  <div className="text-4xl font-serif text-white mb-8 tracking-tighter">€580<span className="text-xs text-white/40 font-sans tracking-widest uppercase ml-4">/ Month</span></div>

                  <ul className="text-white/60 space-y-4 text-[10px] uppercase tracking-widest font-bold mb-10">
                    <li className="flex items-center gap-3"><CheckCircle size={14} className="text-luxury-gold" /> Weekly optimisation</li>
                    <li className="flex items-center gap-3"><CheckCircle size={14} className="text-luxury-gold" /> Performance management</li>
                    <li className="flex items-center gap-3"><CheckCircle size={14} className="text-luxury-gold" /> Clear monthly insights</li>
                  </ul>

                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-4 px-10 py-5 bg-white text-luxury-slate text-[10px] uppercase tracking-[0.3em] font-bold rounded-full hover:bg-luxury-gold transition-all group"
                  >
                    Talk About Your Market
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                  </Link>
                </div>
              </div>

              <p className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-bold text-center">
                Recommended ad spend: €800+/month or equivalent. If it does not
                make sense for your market, we will tell you directly.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ------------------------------ FINAL CTA ------------------------------ */}
        <section className="px-6 lg:px-12 py-40 text-center bg-white relative">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-20" />
          <div className="max-w-4xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-serif text-luxury-slate mb-12 tracking-tight leading-[1.1]"
            >
              Ready to Build a <span className="text-luxury-gold italic">More Predictable</span> Wedding Requests System?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-luxury-slate/40 mb-16 font-light leading-relaxed max-w-3xl mx-auto"
            >
              Book a consultation and we’ll look at your market, positioning,
              and whether this is the right path for generating more of the
              right wedding requests.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-4 px-16 py-8 bg-luxury-slate text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-700 rounded-full shadow-[0_40px_100px_-20px_rgba(15,23,42,0.3)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-4">
                  Contact Us
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-700" />
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
