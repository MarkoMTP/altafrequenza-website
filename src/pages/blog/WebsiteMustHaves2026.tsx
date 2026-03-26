import { Calendar, Clock, ArrowLeft, ArrowRight, Monitor, LayoutList, Target, Navigation, Bot, CameraOff, FileText, Zap, RefreshCcw, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, Variants } from "framer-motion";

export default function WebsiteMustHaves2026() {
  const fadeIn: Variants = {
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
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>
          The 2026 Standard: 5 Must-Haves for Wedding Pro & Venue Websites | Alta Frequenza
        </title>
        <meta
          name="description"
          content="Your website is your most powerful pre-qualification tool. Discover the 5 must-haves for wedding professional and venue websites in 2026 to attract higher-budget inquiries."
        />
        <meta
          name="keywords"
          content="wedding planner website, website design for wedding planners, wedding planning web design, GEO, generative engine optimization, luxury wedding websites"
        />
        <meta
          property="og:title"
          content="The 2026 Standard: 5 Must-Haves for Wedding Pro & Venue Websites"
        />
        <meta
          property="og:description"
          content="Discover what your website needs to attract higher-budget couples in 2026. Expert web design for the wedding industry."
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/logo.png" />
        <link
          rel="canonical"
          href="https://altafrequenzamarketing.com/blog/website-must-haves-2026"
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
            variants={staggerContainer}
            className="mb-20"
          >
            <motion.p variants={fadeIn} className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-8 font-bold">
               Website & Conversion
            </motion.p>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-8xl font-serif text-luxury-slate mb-12 leading-[1.1] tracking-tighter italic">
              The 2026 Standard: 5 Must-Haves (and Must-Don'ts) for <span className="text-luxury-gold not-italic block mt-4">Wedding Planner Websites</span>
            </motion.h1>
            
            <motion.div variants={fadeIn} className="flex items-center gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-slate/30 border-t border-luxury-gold/10 pt-10">
              <div className="flex items-center gap-3">
                <Calendar size={14} className="text-luxury-gold" />
                March 14, 2026
              </div>
              <div className="flex items-center gap-3">
                <Clock size={14} className="text-luxury-gold" />
                8 min read
              </div>
            </motion.div>
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
                 Your website is no longer just a digital business card; it’s your most powerful pre-qualification tool. As we move into 2026, the expectations of couples have evolved. Here is exactly what your website needs—and what it must avoid—to attract higher-budget inquiries and stand out in a crowded market.
               </p>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic text-luxury-slate">
                  <p>
                    In the wedding market, trust is established before the first unread email is ever opened. When a high-budget couple lands on your website, they make a subconscious decision about your brand’s perceived value within milliseconds.
                  </p>

                  <p>
                    By 2026, the baseline of digital aesthetics has risen significantly. A website that looked "good enough" three years ago now signals outdated taste or a lower tier of service. Whether you are aiming for six-figure budgets or simply want to attract couples who value your expertise and don't haggle on price, your online presence must project effortless sophistication, modern functionality, and immediate clarity.
                  </p>

                  <p className="not-italic font-bold border-l-2 border-luxury-gold pl-10 text-luxury-slate">
                    Most planners treat their website like a digital brochure. In 2026, a high-converting website needs to act like your best salesperson.
                  </p>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-24 mb-10 italic border-l-2 border-luxury-gold pl-10 text-luxury-slate">The 5 Must-Haves</h2>
               
               <div className="space-y-12 mb-16">
                  {[
                    { icon: Target, title: "Extreme Clarity (Who, What, and Where)", desc: "Couples shouldn't have to play detective to figure out what you do. Within five seconds of landing on your site, they should know exactly who your services are for, what specific type of planning you excel at (e.g., multi-day destination events vs. intimate local affairs), and where you actively work. Vagueness doesn't make you look exclusive; it makes you look confusing." },
                    { icon: LayoutList, title: "A Clear, Step-by-Step Process Outline", desc: "Planning a wedding is overwhelming for couples. One of the biggest trust-builders you can implement is a transparent, easy-to-understand process section. Outline exactly what happens if they hire you: from the initial discovery call, to venue selection, to event design, and finally, execution. When couples can visualize the roadmap, their anxiety drops and their trust in your authority rises." },
                    { icon: Quote, title: "Strategic Social Proof & Relevant Testimonials", desc: "Testimonials are essential, but slapping a massive 'Reviews' page together is no longer enough. Instead, integrate testimonials naturally throughout your site, corresponding to the service or objection you are addressing. Highlight specific quotes where past couples mention your calming presence, flawless logistics, or impeccable eye for design." },
                    { icon: Navigation, title: "A Clear Path to Contact", desc: "Don't just leave a 'Contact' button hidden in the corner and hope for the best. Actively guide couples toward reaching out. Tell them what the next step is ('Book your complimentary consultation') and make it incredibly easy to do so. Every page should gently funnel the user toward initiating a conversation." },
                    { icon: Bot, title: "GEO (Generative Engine Optimization) Readiness", desc: "Search engines are changing. With couples increasingly using AI assistants like ChatGPT, Perplexity, and AI Overviews to search for wedding planners, your website must be structured for GEO. This means having clear service descriptions, well-structured data, and authoritative content that AI models can easily read and understand." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-10 items-start group">
                       <div className="w-16 h-16 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold flex-shrink-0 group-hover:bg-luxury-gold group-hover:text-white transition-all duration-700">
                          <item.icon size={24} />
                       </div>
                       <div>
                          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-slate mb-4">0{i+1}. {item.title}</h4>
                          <p className="text-lg text-luxury-slate/50 font-light italic leading-relaxed">{item.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-24 mb-10 italic border-l-2 border-luxury-gold pl-10 text-luxury-slate">The 5 Must-Don'ts</h2>

               <div className="grid sm:grid-cols-1 gap-6 mb-16">
                  {[
                    { icon: CameraOff, title: "Don't Build a 'Portfolio-Only' Website", desc: "A massive gallery of beautiful photos with no context is a Pinterest board, not a website. While imagery is crucial, photos alone do not sell a premium service—your expertise does. Couples need to know how you brought those events to life." },
                    { icon: Monitor, title: "Don't Talk Too Much About Yourself", desc: "Couples don't care about your lifelong passion for organizing parties as much as they care about what you can do for them. Talk about their peace of mind, their guest experience, and how they will feel on the day. Position them as the hero and yourself as the guide." },
                    { icon: Zap, title: "Don't Let Your Website Load Slowly", desc: "In 2026, patience is nonexistent. A slow-loading website kills trust instantly. If couples are waiting for massive, unoptimized image files or bulky videos to load, they will simply hit the 'back' button and contact your competitor." },
                    { icon: FileText, title: "Don't Use Walls of Heavy Text", desc: "Massive, blocky paragraphs of text are intimidating and will simply be skimmed over. Break your copy into scannable chunks, use clear headings, utilize bullet points, and embrace whitespace." },
                    { icon: RefreshCcw, title: "Don't Use an Old, Cluttered Design", desc: "Typography and layout immediately timestamp a website. If your site looks like it was built in 2018, high-budget clients will assume your design eye for events is equally outdated. A premium brand requires a premium, uncluttered digital environment." }
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-10 rounded-[3rem] border border-luxury-gold/5 hover:border-luxury-gold/20 transition-all duration-700 group">
                       <span className="flex items-center gap-4 text-[10px] uppercase font-bold tracking-[0.3em] text-luxury-gold mb-4 italic">
                          <item.icon size={16} className="text-luxury-slate/50 group-hover:text-luxury-gold transition-colors" />
                          0{i+1}. {item.title}
                       </span>
                       <p className="text-lg text-luxury-slate/50 font-light italic leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>

               <div className="mt-24 pt-20 border-t border-luxury-gold/10">
                  <h3 className="text-4xl md:text-7xl font-serif text-luxury-slate mb-10 italic tracking-tight leading-tight">
                    Ready to Build a Website That <span className="text-luxury-gold not-italic">Actually Converts?</span>
                  </h3>
                  <p className="text-xl text-luxury-slate/40 leading-relaxed mb-12 font-light italic">
                    We help wedding planners structure their marketing, positioning, and websites to attract the right couples. From visual design to SEO, GEO, and messaging strategy, we ensure every touchpoint is optimized for bookings.
                  </p>
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center justify-center gap-6 px-12 py-6 bg-luxury-slate text-white text-[10px] uppercase tracking-[0.4em] font-bold rounded-full overflow-hidden hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-700 shadow-xl"
                  >
                    <span className="relative z-10">Request a strategy session</span>
                    <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                  </Link>
               </div>
             </motion.div>

             {/* Sidebar */}
             <aside className="sticky top-32 space-y-12">
                <div className="p-8 bg-white rounded-[3rem] border border-luxury-gold/10 shadow-sm">
                   <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold mb-8">
                      <Quote size={20} />
                   </div>
                   <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold mb-6">Website Strategy</h4>
                   <p className="text-sm text-luxury-slate/50 font-light leading-relaxed italic mb-8">
                      When your online presence is clear and authoritative, you stop chasing cold leads and start receiving inquiries.
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
