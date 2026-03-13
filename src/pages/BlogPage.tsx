import { Calendar, Clock, ArrowRight, Sparkles, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, Variants } from "framer-motion";

export default function BlogPage() {
  const featuredPost = {
    title:
      "The Psychology of Luxury Wedding Clients: What High-Net-Worth Couples Really Want",
    excerpt:
      "Understanding the mindset of affluent couples is essential for wedding planners who want to position themselves as the premier choice. Here's what matters most to luxury clients.",
    category: "Client Psychology",
    date: "March 15, 2024",
    readTime: "8 min read",
    image:
      "https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1200",
    slug: "luxury-client-psychology",
  };

  const posts = [
    {
      title: "The 2026 Standard: 5 Must-Haves (and Must-Don'ts) for Wedding Planner Websites",
      excerpt: "Discover what your website needs—and what it must avoid—to attract higher-budget couples in 2026.",
      category: "Website & Conversion",
      date: "March 14, 2026",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "website-must-haves-2026",
    },
    {
      title: "5 Digital Marketing Mistakes Luxury Wedding Planners Must Avoid",
      excerpt:
        "These common missteps can sabotage your efforts to attract high-end clientele. Learn what to avoid and what to do instead.",
      category: "Marketing Strategy",
      date: "March 10, 2024",
      readTime: "6 min read",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "marketing-mistakes",
    },
    {
      title: "How to Use Instagram to Attract Six-Figure Wedding Clients",
      excerpt:
        "Instagram is a goldmine for luxury wedding planners—if you use it correctly. Discover the strategies that top planners use.",
      category: "Social Media",
      date: "March 5, 2024",
      readTime: "7 min read",
      image:
        "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "instagram-strategy",
    },
    {
      title: "Why Generic Marketing Agencies Fail Wedding Planners",
      excerpt:
        "Most marketing agencies don't understand the luxury wedding industry. Here's why specialization matters.",
      category: "Industry Insights",
      date: "February 28, 2024",
      readTime: "5 min read",
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "generic-agencies-fail",
    },
    {
      title: "The ROI of AI Automation for Wedding Planners",
      excerpt:
        "Discover how AI tools are transforming the way elite planners capture and qualify leads, saving time and increasing revenue.",
      category: "Technology",
      date: "February 20, 2024",
      readTime: "6 min read",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "ai-automation-roi",
    },
    {
      title: "Crafting a Premium Brand Identity for Your Planning Business",
      excerpt:
        "Your brand is your most valuable asset. Learn how to position yourself as a luxury service provider.",
      category: "Branding",
      date: "February 15, 2024",
      readTime: "9 min read",
      image:
        "https://images.pexels.com/photos/2072179/pexels-photo-2072179.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "premium-brand-identity",
    },
    {
      title: "Google Ads for Wedding Planners: A Complete Guide",
      excerpt:
        "Master Google Ads to consistently attract high-quality leads who are ready to invest in exceptional planning services.",
      category: "Paid Advertising",
      date: "February 10, 2024",
      readTime: "10 min read",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "google-ads-guide",
    },
    {
      title: "Google Ads for Wedding Planners: A Complete Guide",
      excerpt: "Why Instagram helps you win against other wedding planners",
      category: "Instagram Strategy",
      date: "Januart 30, 2025",
      readTime: "5 min read",
      image:
        "https://images.pexels.com/photos/1679825/pexels-photo-1679825.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "why-socialmedia-matters",
    },
  ];

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  const staggerContainer: Variants = {
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
          The Alta Frequenza Journal | Luxury Wedding Marketing Insights
        </title>
        <meta
          name="description"
          content="Explore expert insights from Alta Frequenza Marketing on luxury wedding marketing, client psychology, branding, Google Ads, and AI automation for wedding planners."
        />
        <meta
          name="keywords"
          content="wedding planner marketing, luxury wedding marketing, Google Ads for wedding planners, wedding planner SEO, destination wedding marketing, wedding planner branding"
        />
        <meta
          property="og:title"
          content="The Alta Frequenza Journal | Luxury Wedding Marketing Insights"
        />
        <meta
          property="og:description"
          content="Expert strategies on wedding planner marketing, client psychology, and growing your luxury planning business."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.altafrequenzamarketing/blog"
        />
        <meta
          property="og:image"
          content="https://www.altafrequenzamarketing/og-blog.jpg"
        />
      </Helmet>

      <div className="bg-luxury-champagne text-luxury-slate selection:bg-luxury-gold/30 pt-24 min-h-screen font-light">
        {/* Header */}
        <section className="px-6 lg:px-12 py-32 relative overflow-hidden border-b border-luxury-gold/5">
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-luxury-gold/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-luxury-ethereal/10 blur-[150px] rounded-full animate-pulse" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
               initial="hidden"
               animate="visible"
               variants={staggerContainer}
               className="text-center mb-32"
            >
              <motion.div 
                variants={fadeIn}
                className="inline-flex items-center gap-3 px-6 py-2 glass border border-luxury-gold/20 text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-12 rounded-full font-bold shadow-sm"
              >
                <Sparkles size={14} />
                INSIGHTS & STRATEGIES
              </motion.div>

              <motion.h1 
                variants={fadeIn} 
                className="text-5xl md:text-9xl font-serif text-luxury-slate mb-10 leading-[1.05] tracking-tighter"
              >
                The Alta Frequenza <span className="text-luxury-gold italic">Journal</span>
              </motion.h1>

              <motion.p 
                variants={fadeIn} 
                className="text-xl md:text-2xl text-luxury-slate/50 leading-relaxed max-w-4xl mx-auto font-light italic"
              >
                Expert insights on luxury wedding marketing, client psychology,
                and growing your planning business.
              </motion.p>
            </motion.div>

            {/* Featured Post */}
            <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-32 group"
            >
              <article className="grid lg:grid-cols-2 gap-0 bg-white rounded-[4rem] border border-luxury-gold/10 overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,23,42,0.1)]">
                <div className="relative overflow-hidden aspect-video lg:aspect-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-luxury-gold/10 mix-blend-overlay" />
                </div>
                <div className="p-12 md:p-20 lg:p-24 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="px-4 py-1.5 bg-luxury-gold text-white text-[9px] font-bold uppercase tracking-[0.3em] rounded-full">
                      FEATURED
                    </div>
                    <span className="text-[10px] tracking-[0.3em] text-luxury-gold font-bold uppercase">
                      {featuredPost.category}
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-6xl font-serif text-luxury-slate mb-10 leading-tight tracking-tight italic">
                    {featuredPost.title}
                  </h2>
                  <p className="text-xl text-luxury-slate/50 leading-relaxed mb-12 font-light italic">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-slate/30 mb-12">
                    <div className="flex items-center gap-3">
                      <Calendar size={14} className="text-luxury-gold" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={14} className="text-luxury-gold" />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="group-link relative inline-flex items-center gap-6 text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-slate hover:text-luxury-gold transition-colors duration-500"
                  >
                    Read Article 
                    <ArrowRight size={20} className="group-hover:translate-x-4 transition-transform duration-500" />
                  </Link>
                </div>
              </article>
            </motion.div>

            {/* Blog Posts Grid */}
            <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={staggerContainer}
               className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
            >
              {posts.map((post, index) => (
                <motion.div key={index} variants={fadeIn} className="group">
                  <Link to={`/blog/${post.slug}`} className="block h-full">
                    <article className="flex flex-col h-full bg-white rounded-[3rem] border border-luxury-gold/10 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700">
                      <div className="relative overflow-hidden h-72">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-luxury-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                      </div>

                      <div className="p-10 flex flex-col flex-1">
                        <div className="text-[10px] tracking-[0.3em] text-luxury-gold font-bold uppercase mb-6">
                           {post.category}
                        </div>
                        
                        <h3 className="text-2xl font-serif text-luxury-slate mb-6 leading-tight group-hover:text-luxury-gold transition-colors duration-700 italic tracking-wide">
                          {post.title}
                        </h3>
                        
                        <p className="text-luxury-slate/40 text-sm font-light leading-relaxed mb-10 flex-1 italic line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-8 border-t border-luxury-gold/5">
                           <div className="flex items-center gap-6 text-[9px] uppercase tracking-widest font-bold text-luxury-slate/20">
                              <div className="flex items-center gap-2">
                                 <Calendar size={12} />
                                 {post.date}
                              </div>
                              <div className="flex items-center gap-2 text-luxury-gold/40">
                                 <Clock size={12} />
                                 {post.readTime}
                              </div>
                           </div>
                           <ArrowRight size={18} className="text-luxury-gold -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700" />
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="px-6 lg:px-12 py-40 text-center bg-white relative overflow-hidden">
           <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-20" />
           <div className="max-w-4xl mx-auto relative z-10">
              <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="inline-flex items-center gap-3 px-6 py-2 glass border border-luxury-gold/20 text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-12 rounded-full font-bold shadow-sm"
              >
                 <Award size={14} /> Authority & Insights
              </motion.div>
              <h2 className="text-4xl md:text-8xl font-serif text-luxury-slate mb-12 tracking-tighter leading-[1.1]">
                 Stay <span className="text-luxury-gold italic">Ahead</span> of the Market
              </h2>
              <p className="text-xl text-luxury-slate/40 mb-20 font-light leading-relaxed italic max-w-2xl mx-auto">
                 We share the exact strategies we use to help the world's leading wedding planners and venues capture high-net-worth inquiries.
              </p>

              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-6 px-16 py-8 bg-luxury-slate text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-700 rounded-full shadow-2xl overflow-hidden"
              >
                <span className="relative z-10">Request a Consultation</span>
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-700" />
                <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              </Link>
           </div>
        </section>
      </div>
    </>
  );
}
