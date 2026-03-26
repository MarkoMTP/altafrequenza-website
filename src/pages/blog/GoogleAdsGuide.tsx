import { Calendar, Clock, ArrowLeft, ArrowRight, Target, Layout, BarChart3, TrendingUp, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function GoogleAdsGuide() {
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
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Google Ads for Wedding Pros: The Complete Guide | Alta Frequenza
        </title>
        <meta
          name="description"
          content="Master Google Ads to attract high-end couples searching for wedding professionals and venues. Specialized marketing strategy for the luxury wedding industry."
        />
        <meta
          name="keywords"
          content="Google Ads for wedding planners, wedding planner marketing, luxury wedding planner leads, destination wedding marketing, Google Ads strategy, wedding planner PPC"
        />
        <meta
          property="og:title"
          content="Google Ads for Wedding Pros: The Complete Guide | Alta Frequenza"
        />
        <meta
          property="og:description"
          content="Discover how to attract high-quality wedding leads with Google Ads. Learn targeting, ad copy, and landing page optimization strategies."
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/logo.png" />
        <link
          rel="canonical"
          href="https://altafrequenzamarketing.com/blog/google-ads-guide"
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
               Paid Advertising
            </motion.p>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-8xl font-serif text-luxury-slate mb-12 leading-[1.1] tracking-tighter italic">
              Google Ads for Wedding Planners: <span className="text-luxury-gold not-italic block">A Complete Guide</span>
            </motion.h1>
            
            <motion.div variants={fadeIn} className="flex items-center gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-slate/30 border-t border-luxury-gold/10 pt-10">
              <div className="flex items-center gap-3">
                <Calendar size={14} className="text-luxury-gold" />
                February 10, 2024
              </div>
              <div className="flex items-center gap-3">
                <Clock size={14} className="text-luxury-gold" />
                10 min read
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
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Google Ads strategy"
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
                 Master Google Ads to consistently attract high-quality leads who
                 are ready to invest in exceptional planning services. This
                 comprehensive guide covers everything luxury wedding planners need
                 to know to run profitable campaigns.
               </p>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-16 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 Why Google Ads for Wedding Planners?
               </h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic">
                  <p>
                    When high-net-worth couples start planning their weddings, they
                    turn to Google. They search for wedding planners, research
                    vendors, and compare options—all through search engines.
                  </p>

                  <p>
                    Google Ads allows you to appear at the exact moment couples are
                    actively searching for your services. Unlike social media, where
                    you're interrupting people's browsing, Google Ads connects you
                    with high-intent prospects who are ready to hire a planner.
                  </p>
               </div>

               {/* Step 1 */}
               <div className="mt-24">
                  <div className="flex items-center gap-6 mb-8">
                     <div className="w-14 h-14 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold font-serif italic text-2xl">01</div>
                     <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate tracking-tight italic">Choose Luxury-Specific Keywords</h2>
                  </div>

                  <p className="text-lg text-luxury-slate/50 font-light leading-relaxed mb-10 italic">
                    Generic keywords like "wedding planner" attract everyone—including
                    couples who can't afford luxury services. Your keyword strategy
                    should focus exclusively on searches indicating high-end intent.
                  </p>

                  <div className="bg-white p-12 rounded-[3rem] border border-luxury-gold/10 mb-12 shadow-sm">
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold mb-8">Recommended Keywords:</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                       {[
                         "Luxury wedding planner [city]",
                         "High-end wedding coordinator [city]",
                         "Full-service luxury planning",
                         "Destination wedding planner luxury",
                         "Elite wedding planning services",
                         "Sophisticated wedding planner"
                       ].map((keyword, i) => (
                         <div key={i} className="flex items-center gap-4 group">
                            <div className="w-1.5 h-1.5 bg-luxury-gold/30 rounded-full group-hover:scale-150 transition-transform" />
                            <span className="text-xs uppercase tracking-widest text-luxury-slate/60 font-medium italic">{keyword}</span>
                         </div>
                       ))}
                    </div>
                  </div>

                  <p className="text-lg text-luxury-slate/50 font-light leading-relaxed italic">
                    Use Google's Keyword Planner to identify search volume and
                    competition, but prioritize quality over quantity. A hundred
                    clicks from luxury-intent searches are more valuable than a
                    thousand generic clicks.
                  </p>
               </div>

               {/* Step 2 */}
               <div className="mt-24">
                  <div className="flex items-center gap-6 mb-8">
                     <div className="w-14 h-14 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold font-serif italic text-2xl">02</div>
                     <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate tracking-tight italic">Write Premium Ad Copy</h2>
                  </div>

                  <p className="text-lg text-luxury-slate/50 font-light leading-relaxed mb-10 italic">
                    Your ad copy must immediately communicate luxury positioning.
                    Avoid language that emphasizes affordability or discounts.
                  </p>

                  <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="bg-white p-12 rounded-[3rem] border-2 border-luxury-gold/20 shadow-xl overflow-hidden relative group"
                  >
                     <div className="flex items-start gap-6">
                        <div className="px-3 py-1 bg-luxury-gold text-white text-[8px] font-bold uppercase tracking-widest rounded-sm">Ad</div>
                        <div className="flex-1">
                           <h4 className="text-2xl font-serif text-luxury-slate mb-2 italic group-hover:text-luxury-gold transition-colors tracking-tight leading-tight">Elite Wedding Planning | Flawless Luxury Celebrations</h4>
                           <p className="text-[10px] text-luxury-gold/60 uppercase tracking-widest mb-6 font-bold">www.yoursite.com/luxury-services</p>
                           <p className="text-lg text-luxury-slate/50 font-light italic leading-relaxed mb-8">
                             Discerning couples trust us to orchestrate sophisticated,
                             unforgettable weddings. Full-service planning for elevated
                             experiences.
                           </p>
                           <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-luxury-gold/5">
                              {[
                                "Bespoke Design",
                                "Curated Vendors",
                                "Flawless Execution"
                              ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                   <div className="w-4 h-4 rounded-full border border-luxury-gold flex items-center justify-center text-luxury-gold">
                                      <TrendingUp size={8} />
                                   </div>
                                   <span className="text-[9px] uppercase tracking-widest font-bold text-luxury-slate/40">{item}</span>
                                </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </motion.div>
               </div>

               {/* Step 3 */}
               <div className="mt-24">
                  <div className="flex items-center gap-6 mb-8">
                     <div className="w-14 h-14 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold font-serif italic text-2xl">03</div>
                     <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate tracking-tight italic">Create Landing Pages</h2>
                  </div>

                  <p className="text-lg text-luxury-slate/50 font-light leading-relaxed mb-10 italic">
                    Never send paid traffic to your homepage. Create dedicated landing
                    pages that speak directly to the search intent and guide visitors
                    toward booking a consultation.
                  </p>

                  <div className="grid sm:grid-cols-1 gap-6 mb-12">
                     {[
                       { title: "Hero section", desc: "Clear headline reinforcing luxury positioning" },
                       { title: "Trust indicators", desc: "Testimonials, portfolio highlights, press features" },
                       { title: "Service overview", desc: "What you offer and how you transform their experience" },
                       { title: "Strong CTA", desc: "Prominent 'Book Consultation' action" },
                       { title: "Premium design", desc: "Sophisticated visuals that match luxury expectations" }
                     ].map((item, i) => (
                       <div key={i} className="flex gap-8 items-start bg-white p-8 rounded-[2.5rem] border border-luxury-gold/5 hover:border-luxury-gold/20 transition-all duration-700">
                          <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold flex-shrink-0">
                             <Layout size={20} />
                          </div>
                          <div>
                            <span className="block text-[10px] uppercase font-bold tracking-[0.3em] text-luxury-slate mb-2">{item.title}</span>
                            <span className="text-sm text-luxury-slate/40 italic font-light leading-relaxed">{item.desc}</span>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Step 4 */}
               <div className="mt-24">
                  <div className="flex items-center gap-6 mb-8">
                     <div className="w-14 h-14 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold font-serif italic text-2xl">04</div>
                     <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate tracking-tight italic">Set Up Proper Tracking</h2>
                  </div>

                  <p className="text-lg text-luxury-slate/50 font-light leading-relaxed mb-10 italic">
                    You can't optimize what you don't measure. Install conversion
                    tracking to understand which keywords, ads, and landing pages
                    drive actual consultation requests.
                  </p>

                  <div className="bg-luxury-slate text-white p-12 rounded-[3rem] mb-12">
                     <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold mb-10">Key metrics to track:</h4>
                     <div className="grid md:grid-cols-2 gap-10">
                        {[
                          { label: "CPC", desc: "Cost per click" },
                          { label: "CTR", desc: "Click-through rate" },
                          { label: "CVR", desc: "Conversion rate (form submissions)" },
                          { label: "CPA", desc: "Cost per acquisition" },
                          { label: "ROAS", desc: "Return on ad spend" }
                        ].map((metric, i) => (
                          <div key={i} className="border-b border-white/5 pb-4">
                             <div className="text-3xl font-serif text-luxury-gold mb-1 italic tracking-tighter">{metric.label}</div>
                             <div className="text-[9px] uppercase tracking-widest text-white/40 font-bold">{metric.desc}</div>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Step 5 */}
               <div className="mt-24">
                  <div className="flex items-center gap-6 mb-8">
                     <div className="w-14 h-14 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold font-serif italic text-2xl">05</div>
                     <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate tracking-tight italic">Budget and Bidding Strategy</h2>
                  </div>

                  <p className="text-lg text-luxury-slate/50 font-light leading-relaxed mb-10 italic">
                    Luxury wedding planner keywords are competitive, but the ROI
                    justifies the investment. A single high-end wedding client can
                    generate $20k-$50k+ in revenue, making even expensive clicks
                    profitable.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-12 font-light italic text-luxury-slate/50 text-lg leading-relaxed">
                     <div className="p-10 bg-white rounded-[3rem] border border-luxury-gold/10">
                        <strong className="text-luxury-gold font-bold uppercase tracking-widest text-[10px] block mb-6">Starting Budget:</strong>
                        <p>$2,000-$5,000 per month. This allows enough data collection to optimize effectively while maintaining visibility.</p>
                     </div>
                     <div className="p-10 bg-white rounded-[3rem] border border-luxury-gold/10">
                        <strong className="text-luxury-gold font-bold uppercase tracking-widest text-[10px] block mb-6">Bidding Strategy:</strong>
                        <p>Start with "Maximize Conversions" to allow Google's algorithm to optimize. Switch to Target CPA once data is sufficient.</p>
                     </div>
                  </div>
               </div>

               {/* Step 6 */}
               <div className="mt-24">
                  <div className="flex items-center gap-6 mb-8">
                     <div className="w-14 h-14 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold font-serif italic text-2xl">06</div>
                     <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate tracking-tight italic">Continuous Optimization</h2>
                  </div>

                  <p className="text-lg text-luxury-slate/50 font-light leading-relaxed mb-10 italic">
                    Successful Google Ads campaigns require ongoing refinement:
                  </p>

                  <div className="grid sm:grid-cols-1 gap-4 mb-12">
                     {[
                       "Review search terms weekly and add negative keywords",
                       "Pause underperforming keywords and scale winners",
                       "A/B test ad variations for CTR improvement",
                       "Optimize landing pages based on conversion data",
                       "Adjust bids based on device, location, and time"
                     ].map((step, i) => (
                       <div key={i} className="flex gap-6 items-center group bg-white p-6 rounded-full border border-luxury-gold/5 border-l-luxury-gold border-l-2">
                          <span className="text-[10px] uppercase font-bold tracking-[0.2em]">{step}</span>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Common Mistakes */}
               <div className="mt-32">
                  <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mb-12 tracking-tight italic border-l-2 border-luxury-gold pl-10">Common Mistakes to Avoid</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                     {[
                       { title: "Broad Targeting", desc: "Focus on luxury-specific searches only" },
                       { title: "Generic Pages", desc: "Create dedicated pages for paid traffic" },
                       { title: "Ignoring Mobile", desc: "Most searches happen on mobile devices" },
                       { title: "Set and Forget", desc: "Campaigns require active daily management" },
                       { title: "Price Focus", desc: "Emphasize value and expertise instead" }
                     ].map((item, i) => (
                       <div key={i} className="p-8 bg-pink-50/20 rounded-[2.5rem] border border-luxury-gold/5 flex gap-6 items-start">
                          <AlertCircle size={20} className="text-luxury-gold flex-shrink-0" />
                          <div>
                            <span className="block text-[10px] uppercase font-bold tracking-[0.2em] text-luxury-slate mb-2">Mistake: {item.title}</span>
                            <span className="text-sm text-luxury-slate/40 italic font-light leading-relaxed">{item.desc}</span>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>

               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="bg-luxury-slate text-white p-20 rounded-[4rem] my-32 relative overflow-hidden group shadow-2xl"
               >
                  <div className="absolute top-0 right-0 p-12 opacity-[0.05] group-hover:rotate-12 transition-transform duration-1000">
                     <BarChart3 size={120} />
                  </div>
                  <h3 className="text-4xl font-serif mb-8 italic text-luxury-gold tracking-tight border-l-2 border-luxury-gold pl-10">The Bottom Line</h3>
                  <p className="text-2xl text-white/50 font-light leading-relaxed italic">
                    Google Ads, when executed correctly, provides a consistent
                    stream of high-quality leads for luxury wedding planners. The
                    key is targeting the right keywords, crafting premium messaging,
                    and continuously optimizing based on data. Done right, the ROI
                    can be extraordinary.
                  </p>
               </motion.div>

               <div className="mt-24 pt-20 border-t border-luxury-gold/10">
                  <h3 className="text-4xl md:text-7xl font-serif text-luxury-slate mb-10 italic tracking-tight leading-tight">
                    Let Us Manage Your <span className="text-luxury-gold not-italic">Google Ads</span>
                  </h3>
                  <p className="text-xl text-luxury-slate/40 leading-relaxed mb-12 font-light italic">
                    Our Wedding Planner Growth System™ handles every aspect of
                    Google Ads management—from keyword strategy to landing page
                    design to ongoing optimization. We specialize exclusively in
                    luxury wedding planners.
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
                      <Target size={20} />
                   </div>
                   <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold mb-6">PPC Strategy</h4>
                   <p className="text-sm text-luxury-slate/50 font-light leading-relaxed italic mb-8">
                      Mastering search intent to capture elite clientele.
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
