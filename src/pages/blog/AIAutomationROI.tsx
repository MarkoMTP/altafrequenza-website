import { Helmet } from "react-helmet-async";
import { Calendar, Clock, ArrowLeft, ArrowRight, Sparkles, Zap, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AIAutomationROI() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <>
      <Helmet>
        <title>
          The ROI of AI Automation for Wedding Planners | Alta Frequenza
          Marketing
        </title>
        <meta
          name="description"
          content="Discover how AI automation transforms luxury wedding planning by increasing qualified leads, saving time, and boosting ROI. Learn how wedding planners can use AI to grow smarter."
        />
        <meta
          name="keywords"
          content="AI wedding planner, AI automation, wedding planner marketing, wedding planner chatbot, wedding planner lead generation, luxury wedding marketing"
        />
        <meta
          property="og:title"
          content="The ROI of AI Automation for Wedding Planners | Alta Frequenza Marketing"
        />
        <meta
          property="og:description"
          content="Learn how AI tools deliver real ROI for luxury wedding planners — from tripled qualified leads to massive time savings."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://altafrequenzamarketing.com/blog/ai-automation-roi"
        />
        <meta
          property="og:image"
          content="https://altafrequenzamarketing.com/og-ai-automation.jpg"
        />
        <link
          rel="canonical"
          href="https://altafrequenzamarketing.com/blog/ai-automation-roi"
        />
      </Helmet>

      <div className="bg-luxury-champagne text-luxury-slate selection:bg-luxury-gold/30 pt-24 min-h-screen font-light">
        <article className="max-w-5xl mx-auto px-6 lg:px-12 py-32 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-16"
          >
            <Link
              to="/blog"
              className="group inline-flex items-center gap-4 text-luxury-gold hover:text-luxury-slate transition-all duration-500 font-bold uppercase tracking-[0.4em] text-[10px]"
            >
              <div className="w-10 h-10 rounded-full border border-luxury-gold/20 flex items-center justify-center group-hover:bg-luxury-gold group-hover:text-white transition-all duration-500">
                 <ArrowLeft size={16} />
              </div>
              Back to Journal
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="mb-20"
          >
            <motion.p variants={fadeIn} className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-8 font-bold">
               Technology
            </motion.p>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-8xl font-serif text-luxury-slate mb-12 leading-[1.1] tracking-tighter italic">
              The ROI of AI Automation for <span className="text-luxury-gold not-italic">Wedding Planners</span>
            </motion.h1>
            
            <motion.div variants={fadeIn} className="flex items-center gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-slate/30 border-t border-luxury-gold/10 pt-10">
              <div className="flex items-center gap-3">
                <Calendar size={14} className="text-luxury-gold" />
                February 20, 2024
              </div>
              <div className="flex items-center gap-3">
                <Clock size={14} className="text-luxury-gold" />
                6 min read
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.98 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.5 }}
             className="relative aspect-video rounded-[4rem] overflow-hidden mb-24 shadow-2xl group"
          >
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="AI technology"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-luxury-gold/5 mix-blend-overlay" />
          </motion.div>

          {/* Content */}
          <div className="grid lg:grid-cols-[1fr,300px] gap-20 items-start">
             <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="prose-luxury"
             >
               <p className="text-2xl text-luxury-slate/60 leading-relaxed mb-16 font-light italic">
                 AI automation tools are transforming how elite wedding planners
                 capture and qualify leads. The results speak for themselves: more
                 qualified inquiries, dramatically reduced administrative time, and
                 increased revenue per client.
               </p>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-16 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 The Problem: Lost Leads and Wasted Time
               </h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic">
                  <p>
                    Every luxury wedding planner faces two persistent challenges:
                  </p>

                  <ul className="space-y-6 ml-6 not-italic">
                    <li className="flex gap-4">
                       <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mt-2" />
                       <div className="text-luxury-slate font-light leading-relaxed italic">
                         <strong className="text-luxury-gold font-bold uppercase tracking-widest text-xs pr-2">Lost opportunities:</strong> Couples visit your website
                         at midnight or on weekends. If they don't get immediate
                         responses, they move on to competitors.
                       </div>
                    </li>
                    <li className="flex gap-4">
                       <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mt-2" />
                       <div className="text-luxury-slate font-light leading-relaxed italic">
                         <strong className="text-luxury-gold font-bold uppercase tracking-widest text-xs pr-2">Wasted time:</strong> You spend hours answering the same
                         questions repeatedly, qualifying leads, and scheduling
                         consultations—time that could be spent on actual wedding
                         planning.
                       </div>
                    </li>
                  </ul>

                  <p className="text-2xl text-luxury-slate font-bold not-italic pt-4">
                    AI automation solves both problems simultaneously.
                  </p>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-20 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 How AI Wedding Concierge Works
               </h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic">
                  <p>
                    When a couple visits your website, an AI-powered concierge engages
                    them in natural conversation. It asks strategic questions about
                    their wedding date, location, guest count, budget, and
                    vision—capturing detailed information that helps you prepare for
                    consultations.
                  </p>

                  <p>
                    But here's where it gets powerful: the AI doesn't just collect
                    information. It automatically assigns quality scores based on
                    budget indicators, timeline, and level of engagement. You
                    instantly know which inquiries are serious, high-budget couples
                    versus casual browsers.
                  </p>
               </div>

               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="bg-luxury-slate text-white p-16 rounded-[4rem] my-24 relative overflow-hidden group shadow-2xl"
               >
                  <div className="absolute top-0 right-0 p-12 opacity-[0.05] group-hover:scale-110 transition-transform duration-1000">
                     <Zap size={100} />
                  </div>
                  <h3 className="text-3xl font-serif mb-12 italic text-luxury-gold border-l-2 border-luxury-gold pl-8">
                    Real ROI: What Wedding Planners Are Seeing
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-12">
                     {[
                       { val: "3x", label: "Increase in qualified leads" },
                       { val: "85%", label: "Time saved on qualification" },
                       { val: "40%", label: "More consultation bookings" },
                       { val: "$45k", label: "Additional average revenue" }
                     ].map((stat, i) => (
                       <div key={i} className="group/stat">
                          <div className="text-5xl font-serif text-luxury-gold mb-2 italic tracking-tighter group-hover/stat:translate-x-2 transition-transform duration-500">{stat.val}</div>
                          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">{stat.label}</div>
                       </div>
                     ))}
                  </div>

                  <div className="mt-12 pt-10 border-t border-white/5 text-[10px] uppercase tracking-[0.3em] font-bold text-white/20 italic">
                     Average Results After 6 Months of Implementation
                  </div>
               </motion.div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-20 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 Time Savings Translate to Revenue
               </h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic">
                  <p>
                    Consider how you currently spend your time:
                  </p>

                  <ul className="space-y-6 ml-6 not-italic">
                    {[
                      "Answering FAQ emails from website visitors",
                      "Scheduling consultation calls back and forth",
                      "Qualifying leads to determine if they're a good fit",
                      "Responding to after-hours inquiries the next morning"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-center group">
                        <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full group-hover:scale-150 transition-transform" />
                        <span className="text-[10px] uppercase font-bold tracking-[0.2em]">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p>
                    AI automation handles all of this instantly and automatically. The
                    hours you reclaim can be invested in higher-value activities:
                    refining your service offerings, networking with luxury vendors,
                    or actually planning weddings.
                  </p>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-20 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 Improved Lead Quality = Higher Conversion Rates
               </h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic">
                  <p>
                    When you know a lead's budget, timeline, and priorities before
                    your first conversation, consultations become dramatically more
                    effective. You're not wasting time on couples who can't afford
                    your services or aren't ready to commit.
                  </p>

                  <p>
                    Wedding planners using AI automation report conversion rates 2-3x
                    higher than traditional inquiry forms, specifically because
                    they're only speaking with pre-qualified, serious couples.
                  </p>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-20 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 The Competitive Advantage
               </h2>

               <p className="text-lg text-luxury-slate/50 font-light leading-relaxed mb-12 italic">
                 While your competitors are still using generic contact forms and
                 responding to inquiries during business hours, you're providing an
                 elevated, personalized experience 24/7. This difference is
                 immediately apparent to luxury couples—and often the deciding
                 factor in who they hire.
               </p>

               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-white p-16 rounded-[4rem] border border-luxury-gold/20 my-24 relative group shadow-sm"
               >
                  <div className="absolute top-0 right-0 p-12 opacity-[0.05] group-hover:rotate-12 transition-transform duration-1000">
                     <Award size={100} />
                  </div>
                  <h3 className="text-3xl font-serif mb-8 italic text-luxury-gold tracking-tight">
                    Is AI Automation Worth It?
                  </h3>
                  <p className="text-xl text-luxury-slate/40 font-light leading-relaxed italic">
                    For luxury wedding planners, the ROI is undeniable. The
                    combination of increased lead volume, improved lead quality,
                    massive time savings, and elevated client experience makes AI
                    automation one of the highest-leverage investments you can make
                    in your business.
                  </p>
               </motion.div>

               <div className="mt-24 pt-20 border-t border-luxury-gold/10">
                  <h3 className="text-4xl md:text-6xl font-serif text-luxury-slate mb-10 italic tracking-tight">
                    Add AI <span className="text-luxury-gold not-italic">Automation</span> to Your Business
                  </h3>
                  <p className="text-xl text-luxury-slate/40 leading-relaxed mb-12 font-light italic">
                    Our AI Concierge Suite includes both lead capture and FAQ
                    chatbot functionality, specifically designed for luxury wedding
                    planners. Start capturing and qualifying leads 24/7.
                  </p>
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center justify-center gap-6 px-12 py-6 bg-luxury-slate text-white text-[10px] uppercase tracking-[0.4em] font-bold rounded-full overflow-hidden hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-700 shadow-xl"
                  >
                    <span className="relative z-10">Learn more about AI tools</span>
                    <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                  </Link>
               </div>
             </motion.div>

             {/* Sidebar */}
             <aside className="sticky top-32 space-y-12">
                <div className="p-8 bg-white rounded-[3rem] border border-luxury-gold/10 shadow-sm">
                   <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold mb-8">
                      <Zap size={20} />
                   </div>
                   <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold mb-6">Efficiency Guide</h4>
                   <p className="text-sm text-luxury-slate/50 font-light leading-relaxed italic mb-8">
                      Learn how AI transforms high-end wedding planning businesses.
                   </p>
                   <Link 
                     to="/blog"
                     className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-slate hover:text-luxury-gold transition-colors"
                   >
                     More Strategies →
                   </Link>
                </div>
             </aside>
          </div>
        </article>
      </div>
    </>
  );
}
