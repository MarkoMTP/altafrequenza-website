import { Helmet } from "react-helmet-async";
import { Calendar, Clock, ArrowLeft, ArrowRight, Award, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function GenericAgenciesFail() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Why Generic Marketing Agencies Fail Wedding Pros | Alta Frequenza
        </title>
        <meta
          name="description"
          content="Discover why generic marketing agencies fail wedding professionals and venues — and how specialized strategies from Alta Frequenza attract high-value couples."
        />
        <meta
          name="keywords"
          content="wedding planner marketing, luxury wedding planner, destination wedding marketing, wedding planner SEO, Google Ads for wedding planners, wedding planner growth"
        />
        <meta
          property="og:title"
          content="Why Generic Marketing Agencies Fail Wedding Pros | Alta Frequenza"
        />
        <meta
          property="og:description"
          content="Most marketing agencies don’t understand luxury wedding clients. Learn why specialization matters — and how Alta Frequenza delivers results."
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/logo.png" />
        <link
          rel="canonical"
          href="https://altafrequenzamarketing.com/blog/generic-agencies-fail"
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
               Industry Insights
            </motion.p>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-8xl font-serif text-luxury-slate mb-12 leading-[1.1] tracking-tighter italic">
              Why Generic Marketing Agencies <span className="text-luxury-gold not-italic">Fail Wedding Planners</span>
            </motion.h1>
            
            <motion.div variants={fadeIn} className="flex items-center gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-slate/30 border-t border-luxury-gold/10 pt-10">
              <div className="flex items-center gap-3">
                <Calendar size={14} className="text-luxury-gold" />
                February 28, 2024
              </div>
              <div className="flex items-center gap-3">
                <Clock size={14} className="text-luxury-gold" />
                5 min read
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
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Marketing agency meeting"
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
               <p className="text-2xl text-luxury-slate/60 leading-relaxed mb-10 font-light italic">
                 You've invested thousands in a marketing agency, followed their
                 advice diligently, and yet the leads keep disappointing.
                 Budget-conscious couples. Tire-kickers. People who ghost after
                 learning your rates. Sound familiar?
               </p>

               <p className="text-xl text-luxury-slate/40 leading-relaxed mb-16 italic font-light">
                 The problem isn't you—it's that most marketing agencies don't
                 understand the luxury wedding industry. Here's why specialization
                 matters.
               </p>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-16 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 They Use Cookie-Cutter Strategies
               </h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic">
                  <p>
                    Generic agencies apply the same playbook to every client, whether
                    they're selling software, insurance, or wedding planning services.
                    They run broad Google Ads, create generic content, and optimize
                    for volume rather than quality.
                  </p>

                  <p>
                    This approach might work for businesses targeting mass markets,
                    but it's catastrophic for luxury wedding planners. You don't need
                    more leads—you need the right leads. Generic strategies attract
                    everyone except the affluent couples you're positioned to serve.
                  </p>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-20 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 They Don't Understand Your Ideal Client
               </h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic">
                  <p>
                    High-net-worth couples have different priorities, decision-making
                    processes, and expectations than budget-conscious clients. Generic
                    agencies don't understand the psychology of luxury buyers or how
                    to craft messaging that resonates with them.
                  </p>

                  <p>
                    They write ad copy about "affordable packages" and "great
                    deals"—language that immediately repels your target audience.
                    Luxury clients aren't looking for discounts; they're looking for
                    exceptional value and expertise.
                  </p>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-20 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 They Can't Evaluate Quality
               </h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic">
                  <p>
                    When a generic agency reports "50 new leads this month," they
                    consider that success. But if 48 of those leads are unqualified
                    inquiries from couples who can't afford your services, you've
                    wasted money and time.
                  </p>

                  <p>
                    Agencies without luxury wedding expertise can't distinguish
                    between a valuable lead and a tire-kicker. They optimize for
                    metrics that don't matter—clicks, impressions, raw lead
                    volume—while ignoring what actually drives your business:
                    qualified, high-budget couples ready to invest.
                  </p>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-20 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 They Ignore Industry Nuances
               </h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic">
                  <p>
                    The luxury wedding industry has unique seasonal patterns, vendor
                    relationships, and client acquisition cycles. Generic agencies
                    don't understand when affluent couples start planning, which
                    keywords they actually search, or how to position you within the
                    competitive landscape.
                  </p>

                  <p>
                    They might rank you for "affordable wedding planner" when you
                    should be dominating searches for "luxury destination wedding
                    coordinator" or "high-end full-service planner."
                  </p>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-20 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 They Don't Speak Your Language
               </h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic">
                  <p>
                    Creating content that resonates with luxury wedding audiences
                    requires deep industry knowledge. Generic agencies produce blog
                    posts and social media content that sound sterile and disconnected
                    from your actual expertise.
                  </p>

                  <p>
                    They can't tell the difference between a stunning tablescape and a
                    mediocre one. They don't understand design trends, vendor
                    relationships, or the nuances that make a wedding truly
                    exceptional. This lack of knowledge is immediately apparent to
                    discerning couples.
                  </p>
               </div>

               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-luxury-slate text-white p-16 rounded-[4rem] my-24 relative overflow-hidden group shadow-2xl"
               >
                  <div className="absolute top-0 right-0 p-12 opacity-[0.05] group-hover:scale-110 transition-transform duration-1000">
                     <Award size={100} />
                  </div>
                  <h3 className="text-3xl font-serif mb-8 italic text-luxury-gold border-l-2 border-luxury-gold pl-8">
                    The Alternative: Specialized Marketing
                  </h3>
                  <div className="space-y-6 text-xl text-white/60 font-light leading-relaxed italic">
                    <p>
                      Marketing agencies that specialize exclusively in luxury
                      weddings bring a fundamental advantage: we live and breathe your
                      industry. We understand your ideal client, speak their language,
                      and know exactly how to position you as the premier choice.
                    </p>
                    <p className="not-italic text-white border-luxury-gold/20 pt-6 border-t font-bold">
                      Our strategies are refined specifically for planners who serve
                      high-net-worth couples. We optimize for quality over quantity,
                      because we understand that one six-figure wedding client is
                      worth more than fifty budget inquiries.
                    </p>
                  </div>
               </motion.div>

               <div className="mt-24 pt-20 border-t border-luxury-gold/10">
                  <h3 className="text-4xl md:text-6xl font-serif text-luxury-slate mb-10 italic tracking-tight">
                    Experience the <span className="text-luxury-gold not-italic">Difference</span> of Specialization
                  </h3>
                  <p className="text-xl text-luxury-slate/40 leading-relaxed mb-12 font-light italic">
                    At Alta Frequenza Marketing, we work exclusively with luxury
                    wedding planners. Our entire approach is designed around
                    attracting the high-net-worth couples you're meant to serve.
                  </p>
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center justify-center gap-6 px-12 py-6 bg-luxury-slate text-white text-[10px] uppercase tracking-[0.4em] font-bold rounded-full overflow-hidden hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-700 shadow-xl"
                  >
                    <span className="relative z-10">Schedule a consultation</span>
                    <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                  </Link>
               </div>
             </motion.div>

             {/* Sidebar */}
             <aside className="sticky top-32 space-y-12">
                <div className="p-8 bg-white rounded-[3rem] border border-luxury-gold/10 shadow-sm">
                   <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold mb-8">
                      <ShieldAlert size={20} />
                   </div>
                   <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold mb-6">Risk Assessment</h4>
                   <p className="text-sm text-luxury-slate/50 font-light leading-relaxed italic mb-8">
                      Why non-specialized agencies can actually harm your luxury brand.
                   </p>
                   <Link 
                     to="/blog"
                     className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-slate hover:text-luxury-gold transition-colors"
                   >
                     More Insights →
                   </Link>
                </div>
             </aside>
          </div>
        </article>
      </div>
    </>
  );
}
