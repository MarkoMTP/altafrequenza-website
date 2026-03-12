import { Helmet } from "react-helmet-async";
import { Calendar, Clock, ArrowLeft, ArrowRight, Sparkles, Quote, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LuxuryClientPsychology() {
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
          The Psychology of Luxury Wedding Clients | Alta Frequenza Marketing
        </title>
        <meta
          name="description"
          content="Understand what truly drives high-net-worth couples when choosing a wedding planner. Learn the psychology behind luxury clients and how to attract them effectively."
        />
        <meta
          name="keywords"
          content="luxury wedding clients, wedding planner marketing, high-net-worth couples, destination wedding marketing, luxury client psychology, wedding planner strategy"
        />
        <meta
          property="og:title"
          content="The Psychology of Luxury Wedding Clients | Alta Frequenza Marketing"
        />
        <meta
          property="og:description"
          content="Discover the psychology of affluent couples and how to position your wedding planning business to attract them."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://altafrequenzamarketing.com/blog/luxury-client-psychology"
        />
        <meta
          property="og:image"
          content="https://altafrequenzamarketing.com/og-luxury-client-psychology.jpg"
        />
        <link
          rel="canonical"
          href="https://altafrequenzamarketing.com/blog/luxury-client-psychology"
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
               Client Psychology
            </motion.p>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-8xl font-serif text-luxury-slate mb-12 leading-[1.1] tracking-tighter italic">
              The Psychology of Luxury Wedding Clients: <span className="text-luxury-gold not-italic">What High-Net-Worth Couples Really Want</span>
            </motion.h1>
            
            <motion.div variants={fadeIn} className="flex items-center gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-slate/30 border-t border-luxury-gold/10 pt-10">
              <div className="flex items-center gap-3">
                <Calendar size={14} className="text-luxury-gold" />
                March 15, 2024
              </div>
              <div className="flex items-center gap-3">
                <Clock size={14} className="text-luxury-gold" />
                8 min read
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
              src="https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Luxury wedding celebration"
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
                 Understanding the mindset of affluent couples is essential for
                 wedding planners who want to position themselves as the premier
                 choice. High-net-worth clients operate differently—their
                 priorities, decision-making processes, and expectations diverge
                 significantly from budget-conscious couples.
               </p>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-16 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 They're Buying an Experience, Not Just a Service
               </h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic">
                  <p>
                    Luxury clients aren't looking for someone to simply coordinate
                    logistics. They're investing in a flawless, unforgettable
                    experience that reflects their taste, status, and values. Every
                    touchpoint—from your initial consultation to the final moments of
                    their wedding—must feel elevated, personalized, and effortless.
                  </p>

                  <p>
                    This means your marketing can't focus solely on services rendered.
                    Instead, emphasize the transformation you provide: peace of mind,
                    creative vision brought to life, and a celebration that becomes a
                    cherished memory for generations.
                  </p>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-20 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 Trust and Credibility Are Non-Negotiable
               </h2>

               <p className="text-lg text-luxury-slate/50 font-light leading-relaxed mb-10 italic">
                 High-net-worth couples have extensive networks and access to
                 insider recommendations. Before they ever contact you, they've
                 likely researched your portfolio, read reviews, and possibly asked
                 trusted friends or colleagues about your reputation.
               </p>

               <p className="text-lg text-luxury-slate font-bold mb-8">
                 Your online presence must establish immediate credibility:
               </p>

               <ul className="space-y-6 mb-12 ml-6">
                  {[
                    "Professional website with sophisticated design",
                    "Portfolio showcasing high-end weddings",
                    "Testimonials from discerning clients",
                    "Press features or industry recognition",
                    "Social media that reflects luxury standards"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-6 items-center group">
                       <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full group-hover:scale-150 transition-transform" />
                       <span className="text-[10px] uppercase font-bold tracking-[0.2em]">{item}</span>
                    </li>
                  ))}
               </ul>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-20 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 They Value Exclusivity and Personalization
               </h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic">
                  <p>
                    Affluent couples don't want cookie-cutter weddings. They expect
                    deeply personalized service that reflects their unique story,
                    aesthetic preferences, and cultural backgrounds. Generic packages
                    or templated approaches are immediate red flags.
                  </p>

                  <p>
                    In your marketing, emphasize your bespoke approach. Avoid language
                    like "packages" or "standard options." Instead, use phrases like
                    "custom design," "tailored experience," and "exclusive service."
                  </p>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-20 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 Time is Their Most Valuable Asset
               </h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic">
                  <p>
                    High-net-worth couples are often exceptionally busy with demanding
                    careers and extensive commitments. They're hiring you precisely
                    because they don't have time to manage wedding details themselves.
                  </p>

                  <p>
                    Highlight how you streamline the planning process, handle all
                    vendor coordination, and make decisions easy. Emphasize your
                    proactive communication style and ability to anticipate needs
                    before they arise.
                  </p>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-20 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 They Expect Sophistication in Communication
               </h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic">
                  <p>
                    From your initial email response to your consultation
                    presentation, every interaction should reflect professionalism and
                    refinement. Typos, delayed responses, or casual language undermine
                    your positioning as a luxury service provider.
                  </p>

                  <p>
                    This extends to your marketing materials. Your website copy,
                    social media captions, and email campaigns should be polished,
                    articulate, and aligned with the aesthetic standards of high-end
                    brands.
                  </p>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-20 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 Price is Secondary to Value
               </h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic">
                  <p>
                    Contrary to what many planners assume, luxury clients aren't
                    primarily focused on cost. They're focused on value, quality, and
                    results. If they believe you're the best choice, price becomes a
                    secondary consideration.
                  </p>

                  <p>
                    Never apologize for your rates or position yourself as
                    "affordable." Instead, confidently communicate the exceptional
                    value you provide and the investment required to deliver
                    excellence.
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
                  <h3 className="text-3xl font-serif mb-8 italic text-luxury-gold flex items-center gap-4">
                    <Quote size={24} /> Key Takeaway
                  </h3>
                  <p className="text-xl text-white/60 font-light leading-relaxed italic">
                    Marketing to luxury wedding clients requires a fundamental shift
                    in mindset. Focus less on services and more on the exclusive
                    experience you provide. Build unshakeable credibility through
                    every touchpoint. Communicate with sophistication and
                    confidence. When you position yourself correctly, high-net-worth
                    couples will seek you out—and happily invest in your expertise.
                  </p>
               </motion.div>

               <div className="mt-24 pt-20 border-t border-luxury-gold/10">
                  <h3 className="text-4xl md:text-6xl font-serif text-luxury-slate mb-10 italic tracking-tight">
                    Ready to Attract More <span className="text-luxury-gold not-italic">Luxury Couples?</span>
                  </h3>
                  <p className="text-xl text-luxury-slate/40 leading-relaxed mb-12 font-light italic">
                    At Alta Frequenza Marketing, we specialize in helping wedding
                    planners position themselves for high-net-worth clientele. Our
                    strategies are designed specifically for the luxury wedding
                    market.
                  </p>
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center justify-center gap-6 px-12 py-6 bg-luxury-slate text-white text-[10px] uppercase tracking-[0.4em] font-bold rounded-full overflow-hidden hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-700 shadow-xl"
                  >
                    <span className="relative z-10">Book your free consultation now</span>
                    <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                  </Link>
               </div>
             </motion.div>

             {/* Sidebar */}
             <aside className="sticky top-32 space-y-12">
                <div className="p-8 bg-white rounded-[3rem] border border-luxury-gold/10 shadow-sm">
                   <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold mb-8">
                      <Sparkles size={20} />
                   </div>
                   <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold mb-6">Expert Insights</h4>
                   <p className="text-sm text-luxury-slate/50 font-light leading-relaxed italic mb-8">
                      This article is part of our Authority & Insights series for luxury planners.
                   </p>
                   <Link 
                     to="/blog"
                     className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-slate hover:text-luxury-gold transition-colors"
                   >
                     View all articles →
                   </Link>
                </div>
             </aside>
          </div>
        </article>
      </div>
    </>
  );
}
