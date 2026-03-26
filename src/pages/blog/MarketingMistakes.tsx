import { Helmet } from "react-helmet-async";
import { Calendar, Clock, ArrowLeft, ArrowRight, Quote, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function MarketingMistakes() {
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
          5 Marketing Mistakes Wedding Pros Must Avoid | Alta Frequenza
        </title>
        <meta
          name="description"
          content="Avoid the most common marketing mistakes wedding professionals and venues make. Learn how to position your brand and attract high-end couples effectively."
        />
        <meta
          name="keywords"
          content="wedding planner marketing, luxury wedding planner, marketing mistakes, destination wedding marketing, Google Ads for wedding planners, wedding planner strategy"
        />
        <meta
          property="og:title"
          content="5 Marketing Mistakes Wedding Pros Must Avoid | Alta Frequenza"
        />
        <meta
          property="og:description"
          content="Discover the top 5 marketing mistakes wedding professionals make and how to fix them to attract affluent international clients."
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/logo.png" />
        <link
          rel="canonical"
          href="https://altafrequenzamarketing.com/blog/marketing-mistakes"
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
               Marketing Strategy
            </motion.p>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-8xl font-serif text-luxury-slate mb-12 leading-[1.1] tracking-tighter italic">
              5 Digital Marketing Mistakes <span className="text-luxury-gold not-italic">Luxury Wedding Planners Must Avoid</span>
            </motion.h1>
            
            <motion.div variants={fadeIn} className="flex items-center gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-slate/30 border-t border-luxury-gold/10 pt-10">
              <div className="flex items-center gap-3">
                <Calendar size={14} className="text-luxury-gold" />
                March 10, 2024
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
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Marketing strategy"
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
                 Even talented wedding planners with stunning portfolios struggle
                 to attract luxury clients when their marketing strategy contains
                 critical flaws. These common missteps can sabotage your efforts to
                 position yourself as the premier choice for high-net-worth
                 couples.
               </p>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-16 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 Mistake #1: Targeting Too Broadly
               </h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic">
                  <p>
                    The biggest mistake luxury wedding planners make is trying to
                    appeal to everyone. When your messaging aims for mass appeal, you
                    dilute your positioning and fail to resonate with your ideal
                    high-end clientele.
                  </p>

                  <p className="not-italic text-luxury-slate">
                    <strong className="text-luxury-gold">The Fix:</strong> Be unapologetically specific about who
                    you serve. Use language like "discerning couples," "sophisticated
                    celebrations," and "elevated experiences." Don't worry about
                    alienating budget-conscious clients—they weren't your target
                    anyway.
                  </p>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-20 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 Mistake #2: Competing on Price
               </h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic">
                  <p>
                    Some planners worry their rates are too high and feel compelled to
                    offer discounts or emphasize "affordability" in their marketing.
                    This is a catastrophic error when targeting luxury clients.
                  </p>

                  <p>
                    High-net-worth couples associate low prices with low quality. When
                    you compete on price, you immediately position yourself as a
                    commodity rather than a premium service provider.
                  </p>

                  <p className="not-italic text-luxury-slate">
                    <strong className="text-luxury-gold">The Fix:</strong> Never apologize for your rates. Focus
                    your marketing on value, expertise, and results. Confidently
                    communicate that exceptional service requires appropriate
                    investment.
                  </p>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-20 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 Mistake #3: Inconsistent or Generic Content
               </h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic">
                  <p>
                    Posting sporadically on social media or using generic stock photos
                    signals unprofessionalism to luxury clients. High-net-worth
                    couples expect consistency, sophistication, and authenticity in
                    every touchpoint.
                  </p>

                  <p className="not-italic text-luxury-slate">
                    <strong className="text-luxury-gold">The Fix:</strong> Develop a consistent content strategy
                    that showcases your actual work, your process, and your unique
                    perspective. Invest in professional photography and create
                    editorial-style content that reflects luxury standards.
                  </p>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-20 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 Mistake #4: Ignoring SEO and Local Search
               </h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic">
                  <p>
                    Many luxury wedding planners assume their clients find them
                    exclusively through referrals. While word-of-mouth is valuable,
                    affluent couples also conduct extensive online research before
                    reaching out.
                  </p>

                  <p>
                    If your website doesn't appear for searches like "luxury wedding
                    planner [your city]" or "high-end destination wedding
                    coordinator," you're invisible to a significant portion of your
                    target market.
                  </p>

                  <p className="not-italic text-luxury-slate">
                    <strong className="text-luxury-gold">The Fix:</strong> Invest in SEO optimization and strategic
                    Google Ads campaigns. Ensure your website includes luxury-specific
                    keywords and that your Google Business Profile is fully optimized.
                  </p>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-20 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 Mistake #5: Neglecting the Client Experience in Marketing
               </h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic">
                  <p>
                    Your marketing should mirror the exceptional experience you
                    provide clients. Slow email responses, difficult-to-navigate
                    websites, or impersonal communication contradict your claims of
                    luxury service.
                  </p>

                  <p className="not-italic text-luxury-slate">
                    <strong className="text-luxury-gold">The Fix:</strong> Audit every client touchpoint. Respond
                    to inquiries within hours, not days. Ensure your website is
                    intuitive and mobile-friendly. Personalize all communication.
                    Consider implementing AI tools like the Wedding Concierge to
                    provide instant, sophisticated responses 24/7.
                  </p>
               </div>

               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-luxury-slate text-white p-16 rounded-[4rem] my-24 relative overflow-hidden group shadow-2xl"
               >
                  <div className="absolute bottom-0 right-0 p-12 opacity-[0.05] group-hover:scale-110 transition-transform duration-1000">
                     <Zap size={100} />
                  </div>
                  <h3 className="text-3xl font-serif mb-8 italic text-luxury-gold flex items-center gap-4">
                    <Quote size={24} /> The Bottom Line
                  </h3>
                  <p className="text-xl text-white/60 font-light leading-relaxed italic">
                    Marketing to luxury wedding clients requires a fundamentally
                    different approach than general wedding planning marketing.
                    Avoid these five critical mistakes, and you'll position yourself
                    to consistently attract the high-net-worth couples you're meant
                    to serve.
                  </p>
               </motion.div>

               <div className="mt-24 pt-20 border-t border-luxury-gold/10">
                  <h3 className="text-4xl md:text-6xl font-serif text-luxury-slate mb-10 italic tracking-tight">
                    Let Us <span className="text-luxury-gold not-italic">Fix</span> Your Marketing Strategy
                  </h3>
                  <p className="text-xl text-luxury-slate/40 leading-relaxed mb-12 font-light italic">
                    At Alta Frequenza Marketing, we help luxury wedding planners
                    avoid these mistakes and implement strategies that actually
                    work. Our approach is tailored specifically to the high-end
                    wedding market.
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
                      <Award size={20} />
                   </div>
                   <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold mb-6">Strategy Guide</h4>
                   <p className="text-sm text-luxury-slate/50 font-light leading-relaxed italic mb-8">
                      Elevate your brand by avoiding these common industry pitfalls.
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
