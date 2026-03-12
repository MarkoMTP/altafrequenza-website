import { Helmet } from "react-helmet-async";
import { Calendar, Clock, ArrowLeft, ArrowRight, Instagram, Sparkles, Quote, Award, Camera, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function InstagramStrategy() {
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
          How to Use Instagram to Attract Six-Figure Wedding Clients | Alta
          Frequenza Marketing
        </title>
        <meta
          name="description"
          content="Discover how luxury wedding planners can use Instagram to attract high-end clients. Learn the best strategies for visuals, captions, hashtags, and Reels that convert followers into six-figure weddings."
        />
        <meta
          name="keywords"
          content="Instagram for wedding planners, wedding planner marketing, luxury wedding planner, destination wedding marketing, social media for wedding planners, Instagram strategy"
        />
        <meta
          property="og:title"
          content="How to Use Instagram to Attract Six-Figure Wedding Clients | Alta Frequenza Marketing"
        />
        <meta
          property="og:description"
          content="A complete Instagram strategy for luxury wedding planners who want to attract six-figure clients and build a premium online presence."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://altafrequenzamarketing.com/blog/instagram-strategy"
        />
        <meta
          property="og:image"
          content="https://altafrequenzamarketing.com/og-instagram-strategy.jpg"
        />
        <link
          rel="canonical"
          href="https://altafrequenzamarketing.com/blog/instagram-strategy"
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
               Social Media
            </motion.p>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-8xl font-serif text-luxury-slate mb-12 leading-[1.1] tracking-tighter italic">
              How to Use Instagram to Attract <span className="text-luxury-gold not-italic">Six-Figure Wedding Clients</span>
            </motion.h1>
            
            <motion.div variants={fadeIn} className="flex items-center gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-slate/30 border-t border-luxury-gold/10 pt-10">
              <div className="flex items-center gap-3">
                <Calendar size={14} className="text-luxury-gold" />
                March 5, 2024
              </div>
              <div className="flex items-center gap-3">
                <Clock size={14} className="text-luxury-gold" />
                7 min read
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
              src="https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Instagram strategy"
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
                 Instagram is a goldmine for luxury wedding planners—if you use it
                 correctly. High-net-worth couples spend significant time on the
                 platform researching wedding inspiration, and your profile could
                 be the deciding factor in whether they reach out.
               </p>

               <p className="text-xl text-luxury-slate/40 leading-relaxed mb-16 italic font-light">
                 Here's how top planners leverage Instagram to consistently book
                 six-figure weddings.
               </p>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-16 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 Create a Cohesive, Editorial Aesthetic
               </h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic">
                  <p>
                    Your Instagram feed is your visual portfolio. Luxury clients
                    expect a sophisticated, cohesive aesthetic that reflects the
                    caliber of weddings you create. Think Vogue, not generic wedding
                    blog.
                  </p>

                  <div className="bg-white p-10 rounded-[3rem] border border-luxury-gold/10 my-10 shadow-sm not-italic">
                    <h3 className="text-[10px] uppercase font-bold tracking-[0.3em] text-luxury-gold mb-6">Action Steps:</h3>
                    <ul className="space-y-4">
                       {[
                         "Choose a consistent color palette and editing style",
                         "Feature only your highest-end weddings",
                         "Mix full tablescape shots with detailed close-ups",
                         "Avoid cluttered or amateur-looking photos"
                       ].map((step, i) => (
                         <li key={i} className="flex gap-4 items-center group">
                            <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full group-hover:scale-150 transition-transform" />
                            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-luxury-slate/60">{step}</span>
                         </li>
                       ))}
                    </ul>
                  </div>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-20 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 Write Captions That Tell Stories
               </h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic">
                  <p>
                    Generic captions like "Love this setup!" waste valuable real
                    estate. Luxury clients want to understand your process,
                    philosophy, and the thought behind your work.
                  </p>

                  <p>
                    Share the story behind each wedding: the couple's vision, unique
                    challenges you solved, meaningful details you incorporated. This
                    demonstrates expertise and builds emotional connection.
                  </p>

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-12 bg-luxury-slate text-white rounded-[3rem] shadow-xl relative overflow-hidden group"
                  >
                     <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:rotate-12 transition-transform duration-1000">
                        <Quote size={80} />
                     </div>
                     <p className="text-lg font-light leading-relaxed italic text-white/70">
                       "When Sarah & Michael first described their vision for a garden
                       wedding beneath century-old oaks, I knew every detail needed to
                       honor both the natural beauty and their sophisticated style.
                       From hand-torn silk ribbons to vintage French chairs, we created
                       an atmosphere that felt timeless yet utterly personal."
                     </p>
                  </motion.div>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-20 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 Use Strategic Hashtags
               </h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic text-luxury-slate">
                  <p>
                    Don't just use #wedding or #weddingplanner. Target luxury-specific
                    hashtags that affluent couples actually search.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 not-italic">
                    {[
                      "#LuxuryWedding",
                      "#HighEndWedding",
                      "#SophisticatedBride",
                      "#DestinationWedding",
                      "#WeddingPlanner[City]"
                    ].map((tag, i) => (
                      <div key={i} className="px-6 py-3 rounded-full border border-luxury-gold/20 text-[10px] uppercase tracking-widest font-bold text-luxury-gold flex items-center gap-3">
                         <div className="w-1 h-1 bg-luxury-gold rounded-full" />
                         {tag}
                      </div>
                    ))}
                  </div>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-20 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 Leverage Instagram Stories
               </h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic">
                  <p>
                    Stories provide an opportunity to showcase your day-to-day
                    expertise and build rapport with potential clients. Share
                    behind-the-scenes planning moments, vendor collaborations, and
                    expert tips.
                  </p>

                  <p>
                    Use the "Highlights" feature to organize Stories into categories
                    like "Portfolio," "Process," "Testimonials," and "Planning Tips."
                  </p>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-20 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 Create Reels That Showcase Your Process
               </h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic">
                  <p>
                    Reels receive significantly higher reach than static posts. Use
                    them strategically to demonstrate your expertise, showcase
                    transformations, or offer valuable wedding planning insights.
                  </p>

                  <p>
                    Keep them elegant and on-brand—avoid trendy audio or overly casual
                    content that contradicts your luxury positioning.
                  </p>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-20 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 Engage Authentically with Your Audience
               </h2>

               <p className="text-lg text-luxury-slate/50 font-light leading-relaxed mb-16 italic">
                 Don't just post and disappear. Respond thoughtfully to comments,
                 engage with luxury vendors, and participate in conversations with
                 your target audience. High-net-worth couples notice when you're
                 actively engaged versus simply broadcasting content.
               </p>

               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-white p-16 rounded-[4rem] border border-luxury-gold/10 my-24 relative group shadow-sm"
               >
                  <div className="absolute top-0 right-0 p-12 opacity-[0.05] group-hover:scale-110 transition-transform duration-1000">
                     <Award size={100} />
                  </div>
                  <h3 className="text-3xl font-serif mb-8 italic text-luxury-gold tracking-tight border-l-2 border-luxury-gold pl-10">The Bottom Line</h3>
                  <p className="text-xl text-luxury-slate/40 font-light leading-relaxed italic">
                    Instagram is one of your most powerful tools for attracting
                    luxury wedding clients—but only if you use it strategically.
                    Invest time in creating a cohesive aesthetic, telling compelling
                    stories, and engaging authentically with your audience. The
                    results will speak for themselves.
                  </p>
               </motion.div>

               <div className="mt-24 pt-20 border-t border-luxury-gold/10">
                  <h3 className="text-4xl md:text-6xl font-serif text-luxury-slate mb-10 italic tracking-tight">
                    Need Help With Your <span className="text-luxury-gold not-italic">Social Media Strategy?</span>
                  </h3>
                  <p className="text-xl text-luxury-slate/40 leading-relaxed mb-12 font-light italic">
                    Our Social Media Package is designed specifically for luxury
                    wedding planners. We handle everything from content creation to
                    engagement strategy, ensuring your Instagram reflects your
                    premium brand.
                  </p>
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center justify-center gap-6 px-12 py-6 bg-luxury-slate text-white text-[10px] uppercase tracking-[0.4em] font-bold rounded-full overflow-hidden hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-700 shadow-xl"
                  >
                    <span className="relative z-10">Learn more about social media management</span>
                    <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                  </Link>
               </div>
             </motion.div>

             {/* Sidebar */}
             <aside className="sticky top-32 space-y-12">
                <div className="p-8 bg-white rounded-[3rem] border border-luxury-gold/10 shadow-sm">
                   <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold mb-8">
                      <Camera size={20} />
                   </div>
                   <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold mb-6">Visual Guide</h4>
                   <p className="text-sm text-luxury-slate/50 font-light leading-relaxed italic mb-8">
                      Master the art of high-end visual storytelling on Instagram.
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
