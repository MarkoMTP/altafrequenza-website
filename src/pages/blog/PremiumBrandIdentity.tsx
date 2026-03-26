import { Calendar, Clock, ArrowLeft, ArrowRight, Palette, Type, Image as ImageIcon, Layout, Quote, Award, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function PremiumBrandIdentity() {
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
          Premium Brand Identity for Wedding Pros & Venues | Alta Frequenza
        </title>
        <meta
          name="description"
          content="Learn how to build a premium brand identity that attracts high-end wedding clients. Specialized branding and marketing for wedding professionals and venues."
        />
        <meta
          name="keywords"
          content="wedding planner branding, luxury wedding planner, brand identity, destination wedding marketing, wedding planner design, high-end wedding brand"
        />
        <meta
          property="og:title"
          content="Premium Brand Identity for Wedding Pros & Venues | Alta Frequenza"
        />
        <meta
          property="og:description"
          content="Build a refined, consistent brand identity that attracts luxury wedding clients and elevates your business reputation."
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/logo.png" />
        <link
          rel="canonical"
          href="https://altafrequenzamarketing.com/blog/premium-brand-identity"
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
               Branding
            </motion.p>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-8xl font-serif text-luxury-slate mb-12 leading-[1.1] tracking-tighter italic">
              Crafting a Premium Brand Identity for <span className="text-luxury-gold not-italic block mt-4">Your Planning Business</span>
            </motion.h1>
            
            <motion.div variants={fadeIn} className="flex items-center gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-slate/30 border-t border-luxury-gold/10 pt-10">
              <div className="flex items-center gap-3">
                <Calendar size={14} className="text-luxury-gold" />
                February 15, 2024
              </div>
              <div className="flex items-center gap-3">
                <Clock size={14} className="text-luxury-gold" />
                9 min read
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
              src="https://images.pexels.com/photos/2072179/pexels-photo-2072179.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Premium branding"
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
                 Your brand is your most valuable asset as a luxury wedding
                 planner. It's the invisible thread connecting every
                 touchpoint—from your website to your consultation style to how you
                 respond to emails. When done correctly, a premium brand identity
                 attracts ideal clients, commands higher rates, and positions you
                 as the obvious choice for discerning couples.
               </p>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-16 mb-8 italic border-l-2 border-luxury-gold pl-10">
                 What Is a Brand, Really?
               </h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic text-luxury-slate">
                  <p>
                    Your brand isn't your logo or color palette—though those matter.
                    Your brand is the sum total of how people perceive and experience
                    your business. It's the feeling couples get when they visit your
                    website, the impression they form during consultations, and the
                    story they tell friends when recommending you.
                  </p>

                  <p className="not-italic font-bold border-l-2 border-luxury-gold pl-10 text-luxury-slate">
                    For luxury wedding planners, your brand must consistently
                    communicate: sophistication, expertise, exclusivity, and
                    trustworthiness.
                  </p>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-24 mb-10 italic border-l-2 border-luxury-gold pl-10 text-luxury-slate">Start With Positioning</h2>
               
               <div className="grid sm:grid-cols-1 gap-6 mb-16">
                  {[
                    { title: "Who exactly do you serve?", desc: "Be specific. Not just 'couples,' but 'high-net-worth couples planning sophisticated celebrations.'" },
                    { title: "What makes you different?", desc: "Identify your unique approach, aesthetic, or specialization that sets you apart from the crowd." },
                    { title: "What transformation do you provide?", desc: "You're creating an experience and reducing stress, not just coordinating logistics." }
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-10 rounded-[3rem] border border-luxury-gold/5 hover:border-luxury-gold/20 transition-all duration-700">
                       <span className="block text-[10px] uppercase font-bold tracking-[0.3em] text-luxury-gold mb-4 italic">0{i+1}. {item.title}</span>
                       <p className="text-lg text-luxury-slate/50 font-light italic leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-24 mb-10 italic border-l-2 border-luxury-gold pl-10 text-luxury-slate">Visual Identity: More Than Pretty Colors</h2>

               <div className="space-y-12 mb-16">
                  {[
                    { icon: Type, title: "Sophisticated typography", desc: "Choose elegant serif fonts paired with clean sans-serifs. Avoid trendy or playful fonts that undermine premium positioning." },
                    { icon: Palette, title: "Refined color palette", desc: "Neutrals with metallic accents communicate luxury. Avoid bright, saturated colors unless they're integral to your aesthetic." },
                    { icon: ImageIcon, title: "Professional photography", desc: "Invest in high-quality images of your work. Amateur iPhone shots don't belong on a luxury website." },
                    { icon: Layout, title: "Generous white space", desc: "Luxury brands embrace space. Avoid cluttered designs that feel busy or overwhelming." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-10 items-start group">
                       <div className="w-16 h-16 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold flex-shrink-0 group-hover:bg-luxury-gold group-hover:text-white transition-all duration-700">
                          <item.icon size={24} />
                       </div>
                       <div>
                          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-slate mb-4">{item.title}</h4>
                          <p className="text-lg text-luxury-slate/50 font-light italic leading-relaxed">{item.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-24 mb-10 italic border-l-2 border-luxury-gold pl-10 text-luxury-slate">The Language of Luxury</h2>

               <div className="bg-luxury-slate text-white p-12 rounded-[3rem] mb-16 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:rotate-12 transition-transform duration-1000">
                     <Sparkles size={80} />
                  </div>
                  <div className="grid md:grid-cols-2 gap-12 relative z-10">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold mb-8 opacity-50">Avoid:</h4>
                      <ul className="space-y-4">
                        {["Affordable packages", "Great deals", "Budget-friendly options", "Cheap prices"].map((text, i) => (
                          <li key={i} className="text-white/30 italic line-through font-light">{text}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold mb-8">Use Instead:</h4>
                      <ul className="space-y-4">
                        {["Bespoke experiences", "Investment in excellence", "Tailored to your vision", "Exclusive services"].map((text, i) => (
                          <li key={i} className="text-white font-bold tracking-widest uppercase text-[10px] flex items-center gap-3">
                             <div className="w-1 h-1 bg-luxury-gold rounded-full" /> {text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-24 mb-10 italic border-l-2 border-luxury-gold pl-10 text-luxury-slate">Consistency Across Every Touchpoint</h2>

               <div className="grid md:grid-cols-2 gap-6 mb-16">
                  {[
                    "Website navigation & UX",
                    "Social media aesthetic",
                    "Email communication style",
                    "Consultation materials",
                    "Contracts and proposals",
                    "Regular client updates"
                  ].map((item, i) => (
                    <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-luxury-gold/5 flex gap-6 items-center group">
                       <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full group-hover:scale-150 transition-transform" />
                       <span className="text-[10px] uppercase font-bold tracking-[0.2em]">{item}</span>
                    </div>
                  ))}
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-24 mb-10 italic border-l-2 border-luxury-gold pl-10 text-luxury-slate">The Client Experience Is Your Brand</h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic text-luxury-slate">
                  <p>
                    Premium branding extends far beyond marketing materials. The
                    actual experience of working with you must match the promises your
                    brand makes.
                  </p>

                  <div className="grid sm:grid-cols-1 gap-4 not-italic">
                    {[
                      "Responding to inquiries quickly and professionally",
                      "Conducting consultations that feel exclusive and personalized",
                      "Providing detailed, beautifully designed proposals",
                      "Communicating proactively throughout the planning process",
                      "Delivering flawless execution on wedding day"
                    ].map((step, i) => (
                      <div key={i} className="p-8 bg-white rounded-[2.5rem] border-2 border-luxury-gold/5 hover:border-luxury-gold/20 transition-all duration-700">
                         <span className="text-[10px] uppercase font-bold tracking-[0.2em] flex items-center gap-6">
                            <span className="text-luxury-gold">✓</span> {step}
                         </span>
                      </div>
                    ))}
                  </div>

                  <p className="pt-8 text-xl font-bold italic text-luxury-slate border-t border-luxury-gold/10 mt-12">
                    The most beautiful branding in the world can't compensate for
                    mediocre service. Excellence must permeate everything you do.
                  </p>
               </div>

               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-white p-16 rounded-[4rem] border border-luxury-gold/10 my-32 relative group shadow-sm"
               >
                  <div className="absolute top-0 right-0 p-12 opacity-[0.05] group-hover:scale-110 transition-transform duration-1000">
                     <Award size={100} />
                  </div>
                  <h3 className="text-3xl font-serif mb-8 italic text-luxury-gold tracking-tight border-l-2 border-luxury-gold pl-10">The Bottom Line</h3>
                  <p className="text-xl text-luxury-slate/40 font-light leading-relaxed italic">
                    Your brand is the most powerful tool you have for attracting
                    luxury clients and commanding premium rates. Invest in getting
                    it right—from visual identity to messaging to client experience.
                    When your brand authentically reflects the caliber of your work,
                    the right couples will seek you out and gladly invest in your
                    expertise.
                  </p>
               </motion.div>

               <div className="mt-24 pt-20 border-t border-luxury-gold/10">
                  <h3 className="text-4xl md:text-7xl font-serif text-luxury-slate mb-10 italic tracking-tight leading-tight">
                    Need Help Elevating Your <span className="text-luxury-gold not-italic">Brand?</span>
                  </h3>
                  <p className="text-xl text-luxury-slate/40 leading-relaxed mb-12 font-light italic">
                    We help luxury wedding planners develop sophisticated brand
                    identities that attract high-net-worth couples. From positioning
                    to visual design to messaging strategy, we ensure every
                    touchpoint reflects your premium positioning.
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
                      <Quote size={20} />
                   </div>
                   <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold mb-6">Manifesto</h4>
                   <p className="text-sm text-luxury-slate/50 font-light leading-relaxed italic mb-8">
                      Building a legacy through impeccable brand positioning.
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
