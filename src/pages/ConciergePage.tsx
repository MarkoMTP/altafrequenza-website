import {
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Filter,
  Award,
  Zap,
  Globe,
  Monitor
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function ConciergePage() {
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
        <title>The Wedding SmartForm™ | AI Lead Capture for Planners | Alta Frequenza</title>
        <meta
          name="description"
          content="The Wedding SmartForm™ is an AI-powered conversational lead capture system designed for luxury wedding planners and venues."
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
                <Sparkles size={14} />
                AI-Powered Lead Capture
              </motion.div>

              <motion.h1 
                variants={fadeIn} 
                className="text-5xl md:text-9xl font-serif text-luxury-slate mb-10 leading-[1.05] tracking-tighter"
              >
                The Wedding <span className="text-luxury-gold italic">SmartForm™</span>
              </motion.h1>

              <motion.p 
                variants={fadeIn} 
                className="text-xl md:text-2xl text-luxury-slate/60 leading-relaxed max-w-4xl mx-auto mb-16 font-light italic"
              >
                Transform your website into a 24/7 lead generation experience. The
                Wedding SmartForm™ engages couples in natural, elegant conversation,
                gathers every key wedding detail, and delivers perfectly qualified
                leads straight to your inbox.
              </motion.p>

              <motion.div variants={fadeIn}>
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-luxury-slate text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-700 rounded-full shadow-2xl overflow-hidden"
                >
                  <span className="relative z-10">Add The SmartForm™ to Your Website</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FUTURE OF LEAD CAPTURE (MOCKUP) */}
        <section className="py-32 px-6 lg:px-12 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="text-4xl md:text-6xl font-serif text-luxury-slate mb-10 tracking-tight leading-tight">
                The <span className="text-luxury-gold italic">Future</span> of Lead Capture
              </motion.h2>
              <motion.div variants={fadeIn} className="space-y-8 text-xl text-luxury-slate/60 font-light leading-relaxed font-light italic">
                <p>
                  Traditional contact forms feel cold and impersonal — and for
                  high-net-worth couples, that’s unacceptable. From their very
                  first interaction, they expect a personalized, seamless, and
                  luxurious experience.
                </p>
                <p>
                  The Wedding SmartForm™ replaces outdated inquiry forms with a
                  conversational assistant that feels human and attentive. It
                  asks the right questions, understands context, and captures
                  detailed information — all while reflecting the sophistication
                  of your brand.
                </p>
                <p className="text-luxury-slate font-bold not-italic pt-10 border-t border-luxury-gold/10">
                  Best of all? It works tirelessly, day and night, ensuring you
                  never lose a lead due to delayed responses.
                </p>
              </motion.div>
            </motion.div>

            {/* Chat Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-[4rem] border border-luxury-gold/10 shadow-[0_50px_100px_-20px_rgba(15,23,42,0.15)] overflow-hidden">
                 <div className="bg-luxury-slate p-8 flex items-center justify-between border-b border-luxury-gold/10">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-luxury-gold/20 flex items-center justify-center text-luxury-gold">
                          <MessageCircle size={20} />
                       </div>
                       <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">Concierge Interaction</div>
                    </div>
                    <Sparkles size={20} className="text-luxury-gold" />
                 </div>

                 <div className="p-10 space-y-10">
                    <div className="flex items-start gap-4">
                       <div className="w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold mt-1">
                          <CheckCircle size={16} />
                       </div>
                       <div className="bg-luxury-champagne/10 rounded-[2rem] p-6 text-sm font-light italic leading-relaxed text-luxury-slate/70">
                          Hello! I'm planning a wedding and would love to learn more
                          about your services. 💍
                       </div>
                    </div>

                    <div className="flex items-start gap-4 flex-row-reverse">
                       <div className="w-8 h-8 rounded-full bg-luxury-gold flex items-center justify-center text-white mt-1">
                          <Sparkles size={16} />
                       </div>
                       <div className="bg-luxury-slate text-white rounded-[2rem] p-6 text-sm font-light italic leading-relaxed">
                          Wonderful! I’d be delighted to help. May I start by asking
                          about your wedding date and location?
                       </div>
                    </div>

                    <div className="flex items-start gap-4">
                       <div className="w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold mt-1">
                          <CheckCircle size={16} />
                       </div>
                       <div className="bg-luxury-champagne/10 rounded-[2rem] p-6 text-sm font-light italic leading-relaxed text-luxury-slate/70">
                          June 15, 2026 in Napa Valley. We're thinking around 150
                          guests.
                       </div>
                    </div>

                    <div className="flex items-start gap-4 flex-row-reverse">
                       <div className="w-8 h-8 rounded-full bg-luxury-gold flex items-center justify-center text-white mt-1">
                          <Sparkles size={16} />
                       </div>
                       <div className="bg-luxury-slate text-white rounded-[2rem] p-6 text-sm font-light italic leading-relaxed">
                          Beautiful choice — Napa Valley is stunning. What’s your
                          approximate budget range for planning services?
                       </div>
                    </div>
                 </div>

                 <div className="px-10 pb-8 pt-4 border-t border-luxury-gold/5">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold/50 text-center">
                       A natural, conversational experience that captures critical details.
                    </p>
                 </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* LEAD SCORING */}
        <section className="px-6 lg:px-12 py-32 bg-luxury-slate text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-20">
             <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-luxury-gold/10 blur-[150px] rounded-full" />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-6 py-2 glass border border-luxury-gold/20 text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-10 rounded-full font-bold shadow-sm"
              >
                <Filter size={14} />
                Exclusive Feature
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-7xl font-serif mb-10 tracking-tight leading-tight"
              >
                Automatic Lead <span className="text-luxury-gold italic">Quality Scoring</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xl text-white/50 max-w-4xl mx-auto font-light leading-relaxed font-light italic"
              >
                Not every lead deserves your time — and The Wedding SmartForm™
                knows it. Using intelligent analysis, it automatically scores
                leads based on budget, readiness, and intent — so you can focus on
                the couples who are serious about investing.
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-[1fr,0.8fr] gap-12 items-center">
               <div className="space-y-6">
                  {[
                    { name: "Sarah & Michael Chen", meta: "June 2026 • Napa Valley • 150 guests", quality: "High Quality", sub: "Budget: $150k+ • Ready to book", color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/20" },
                    { name: "Jessica Thompson", meta: "September 2026 • Local • 100 guests", quality: "Medium Quality", sub: "Budget: TBD • Exploring options", color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20" },
                    { name: "Anonymous Visitor", meta: "Date TBD • Just browsing", quality: "Low Quality", sub: "Early research phase", color: "text-white/20", bg: "bg-white/5", border: "border-white/10" }
                  ].map((lead, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className={`${lead.bg} ${lead.border} border p-10 rounded-[3rem] flex items-center justify-between group hover:scale-[1.02] transition-all duration-700`}
                    >
                       <div className="flex items-center gap-6">
                          <div className={`w-2 h-2 rounded-full ${lead.color.replace('text-', 'bg-')} animate-pulse`} />
                          <div>
                             <div className="text-xl font-serif mb-1">{lead.name}</div>
                             <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">{lead.meta}</div>
                          </div>
                       </div>
                       <div className="text-right">
                          <div className={`text-xl font-serif italic ${lead.color} mb-1`}>{lead.quality}</div>
                          <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">{lead.sub}</div>
                       </div>
                    </motion.div>
                  ))}
               </div>

               <div className="grid grid-cols-1 gap-12 pl-12">
                  {[
                    { val: "85%", label: "Time Saved on Qualification" },
                    { val: "3x", label: "More High-Quality Leads" },
                    { val: "24/7", label: "Lead Capture Coverage" }
                  ].map((stat, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                      className="text-center lg:text-left"
                    >
                       <div className="text-7xl font-serif text-luxury-gold mb-4 italic tracking-tighter">{stat.val}</div>
                       <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">{stat.label}</div>
                    </motion.div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* KEY BENEFITS */}
        <section className="px-6 lg:px-12 py-32 bg-luxury-champagne">
          <div className="max-w-5xl mx-auto text-center mb-24">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold mb-10"
            >
              KEY BENEFITS
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-serif text-luxury-slate mb-10 tracking-tight leading-tight"
            >
              Why Top Planners Choose <br /><span className="text-luxury-gold italic">The Wedding SmartForm™</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              {
                title: "Never Miss a Lead",
                text: "The Wedding SmartForm™ is always on, engaging couples the moment they visit your site — even at 2 AM on a Sunday. No more lost opportunities due to delayed responses.",
              },
              {
                title: "Capture Detailed Information",
                text: "Through thoughtful conversation, the form gathers wedding date, location, guest count, budget, and style preferences — giving you everything you need before the first call.",
              },
              {
                title: "Automatic Prioritization",
                text: "Built-in lead scoring identifies serious, high-budget couples so you spend time where it matters most.",
              },
              {
                title: "Seamless Integration",
                text: "The SmartForm blends effortlessly with your brand and website, offering a personalized, high-end experience.",
              },
              {
                title: "Mobile Optimized",
                text: "Luxury couples browse on mobile first. The SmartForm ensures a flawless, premium experience across all devices.",
              },
              {
                title: "Data & Insights",
                text: "Access detailed analytics on lead sources, conversation trends, and conversion performance to refine your strategy.",
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
                <div className="text-luxury-gold mb-10 group-hover:scale-110 transition-transform">
                   <Award size={32} />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-[0.1em] text-luxury-slate mb-6">
                  {item.title}
                </h3>
                <p className="text-luxury-slate/50 font-light leading-relaxed text-sm italic">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-6 lg:px-12 py-40 text-center bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-20" />
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-4xl md:text-8xl font-serif text-luxury-slate mb-12 tracking-tight leading-[1.1]"
            >
              Transform Your <span className="text-luxury-gold italic">Website</span> into a Powerhouse
            </motion.h2>

            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="text-xl text-luxury-slate/40 mb-20 font-light leading-relaxed max-w-4xl mx-auto italic"
            >
              Experience the future of client acquisition — designed exclusively
              for planners who expect more. Capture high-value leads effortlessly,
              and focus on what truly matters: creating unforgettable celebrations
              for extraordinary couples.
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
                <span className="relative z-10 flex items-center gap-4">
                  Try Out The SmartForm™ Now
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
