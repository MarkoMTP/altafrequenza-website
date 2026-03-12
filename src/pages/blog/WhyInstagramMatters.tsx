import { Helmet } from "react-helmet-async";
import { Calendar, Clock, ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Heart, Camera, LayoutGrid, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function InstagramProofForWeddingPlanners() {
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
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Why Instagram Helps You Win Against Other Wedding Planners | Alta
          Frequenza Marketing
        </title>
        <meta
          name="description"
          content="A website and ads can get attention — but Instagram builds credibility. Learn how wedding planners use Instagram as proof to win trust, charge more, and stand out from competitors."
        />
        <meta
          name="keywords"
          content="wedding planner instagram, wedding planner marketing, wedding planner branding, destination wedding planner, luxury wedding planner, wedding planner content strategy, instagram credibility"
        />
        <meta
          property="og:title"
          content="Why Instagram Helps You Win Against Other Wedding Planners | Alta Frequenza Marketing"
        />
        <meta
          property="og:description"
          content="Couples use Instagram to decide who feels real, active, and trusted. Here’s how planners use it as proof to stand out and justify premium pricing."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://altafrequenzamarketing.com/blog/instagram-helps-you-win"
        />
        <meta
          property="og:image"
          content="https://altafrequenzamarketing.com/og-instagram-proof.jpg"
        />
        <link
          rel="canonical"
          href="https://altafrequenzamarketing.com/blog/instagram-helps-you-win"
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
               Branding & Trust
            </motion.p>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-8xl font-serif text-luxury-slate mb-12 leading-[1.1] tracking-tighter italic">
              Why Instagram Helps You Win <span className="text-luxury-gold not-italic block mt-4">Against Other Wedding Planners</span>
            </motion.h1>
            
            <motion.div variants={fadeIn} className="flex items-center gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-slate/30 border-t border-luxury-gold/10 pt-10">
              <div className="flex items-center gap-3">
                <Calendar size={14} className="text-luxury-gold" />
                January 30, 2026
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
              src="https://images.pexels.com/photos/1679825/pexels-photo-1679825.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Wedding planner Instagram presence"
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
               <div className="space-y-6 text-2xl text-luxury-slate/60 leading-relaxed mb-16 font-light italic">
                  <p>
                    Anyone can be “incognito” online and call themselves an expert.
                  </p>
                  <p>
                    A website alone doesn’t prove much. Ads don’t prove credibility.
                  </p>
                  <p className="text-luxury-slate font-bold not-italic border-l-2 border-luxury-gold pl-10">
                    Instagram does.
                  </p>
               </div>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic text-luxury-slate">
                  <p>
                    Couples don’t browse wedding planners like they browse furniture.
                    They’re looking for someone they can trust with one of the most
                    emotional (and expensive) moments of their lives.
                  </p>

                  <p>
                    And Instagram helps them answer one simple question fast:
                    <br />
                    <span className="text-luxury-gold font-bold not-italic uppercase tracking-widest text-xs">
                      “Is this planner real, active, and trusted?”
                    </span>
                  </p>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-24 mb-10 italic border-l-2 border-luxury-gold pl-10 text-luxury-slate">The Modern Reality: Couples Eliminate Fast</h2>
               
               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic text-luxury-slate mb-16">
                  <p>
                    Most planners think the decision is logical: portfolio, price,
                    location, experience. But in reality, the first filter is much
                    more basic:
                    <strong className="text-luxury-slate not-italic"> do I feel safe reaching out?</strong>
                  </p>

                  <p>
                    When a planner has no presence, inconsistent content, or generic
                    posts, couples don’t debate.
                    <strong className="text-luxury-gold not-italic"> They eliminate.</strong>
                  </p>
               </div>

               <div className="bg-white p-12 rounded-[3rem] border border-luxury-gold/5 mb-16 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:scale-110 transition-transform duration-1000">
                     <ShieldCheck size={80} />
                  </div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold mb-10 italic">The silent comparison happening in their head:</h3>
                  <div className="grid md:grid-cols-2 gap-10 relative z-10">
                    <div className="space-y-4">
                       <span className="block text-[10px] uppercase font-bold tracking-[0.2em] text-luxury-slate">Planner A:</span>
                       <p className="text-sm text-luxury-slate/50 font-medium leading-relaxed italic border-l-2 border-green-200 pl-6">
                         Active feed, recent weddings, real moments, clear style.
                       </p>
                    </div>
                    <div className="space-y-4">
                       <span className="block text-[10px] uppercase font-bold tracking-[0.2em] text-luxury-slate opacity-30">Planner B:</span>
                       <p className="text-sm text-luxury-slate/30 font-medium leading-relaxed italic border-l-2 border-red-100 pl-6">
                         Last post 9 months ago, stock-looking graphics, vague captions.
                       </p>
                    </div>
                  </div>
                  <p className="mt-12 pt-8 border-t border-luxury-gold/5 text-lg font-bold italic text-luxury-gold">
                    They don’t “research more.” They just go with Planner A.
                  </p>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-24 mb-10 italic border-l-2 border-luxury-gold pl-10 text-luxury-slate">Instagram Isn’t About Visibility. It’s About Proof.</h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic text-luxury-slate mb-16">
                  <p>
                    Visibility gets you seen. Proof gets you chosen.
                  </p>

                  <p>
                    Your website can be beautiful. Your ads can be well-targeted. But
                    couples still ask themselves: “What happens after I inquire?”
                    Instagram is where you show the answer.
                  </p>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-24 mb-10 italic border-l-2 border-luxury-gold pl-10 text-luxury-slate">What a Strong Instagram Presence Does (Immediately)</h2>

               <div className="grid md:grid-cols-3 gap-6 mb-16">
                  {[
                    { icon: Heart, title: "Builds Trust Early", desc: "So the inquiry feels safe and obvious." },
                    { icon: Award, title: "Projects Professionalism", desc: "Outshines planners with weak profiles." },
                    { icon: ShieldCheck, title: "Justifies Pricing", desc: "Positioning is felt, not explained." }
                  ].map((item, i) => (
                    <div key={i} className="bg-luxury-slate text-white p-10 rounded-[2.5rem] group hover:scale-105 transition-transform duration-500 shadow-xl">
                       <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-luxury-gold mb-6 group-hover:bg-luxury-gold group-hover:text-luxury-slate transition-colors">
                          <item.icon size={20} />
                       </div>
                       <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4">{item.title}</h4>
                       <p className="text-xs text-white/40 italic font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>

               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-white p-16 rounded-[4rem] border border-luxury-gold/10 my-24 relative overflow-hidden group shadow-sm text-center"
               >
                  <h3 className="text-2xl font-serif mb-8 italic text-luxury-gold tracking-tight px-12">The easiest way to think about it:</h3>
                  <div className="space-y-4 text-xl text-luxury-slate/40 font-light italic leading-relaxed">
                    <p>Your website tells them what you offer.</p>
                    <p>Your ads bring them to you.</p>
                    <p className="not-italic font-bold text-luxury-slate uppercase tracking-[0.3em] text-[10px] pt-4">Instagram convinces them you’re the right choice.</p>
                  </div>
               </motion.div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-24 mb-10 italic border-l-2 border-luxury-gold pl-10 text-luxury-slate">“But I’m Not an Influencer” — Good. You Don’t Need to Be.</h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic text-luxury-slate mb-16">
                  <p>
                    Most wedding planners assume Instagram means dancing reels and
                    talking to camera.
                  </p>

                  <p className="not-italic text-luxury-slate font-bold border-l-2 border-luxury-gold pl-10">
                    For premium planners, the goal is to create a profile that looks like a living portfolio—updated, consistent, and clearly positioned.
                  </p>
               </div>

               <div className="bg-luxury-slate text-white p-12 rounded-[3rem] mb-16 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:rotate-12 transition-transform duration-1000">
                     <LayoutGrid size={80} />
                  </div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold mb-12 relative z-10">What “proof content” looks like:</h3>
                  <div className="grid md:grid-cols-2 gap-10 relative z-10">
                    {[
                      { title: "Real wedding moments", desc: "Not just styled shoots — real couples, real energy." },
                      { icon: Camera, title: "Behind-the-scenes", desc: "Tablescapes, timelines, vendor coordination, venue walk-throughs." },
                      { title: "Client reactions", desc: "Screenshots, voice notes, short quotes, outcome-focused." },
                      { title: "Your taste & standards", desc: "Venues you choose, details you notice, decisions you make." }
                    ].map((content, i) => (
                      <div key={i} className="border-b border-white/5 pb-8 group/item">
                         <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-4 group-hover/item:text-luxury-gold transition-colors">{content.title}</h4>
                         <p className="text-xs text-white/40 italic font-light leading-relaxed">{content.desc}</p>
                      </div>
                    ))}
                  </div>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-24 mb-10 italic border-l-2 border-luxury-gold pl-10 text-luxury-slate">The “Premium Effect”: Instagram Makes Price Feel Reasonable</h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic text-luxury-slate mb-16">
                  <p>
                    Couples don’t pay premium prices because you said “luxury.” They
                    pay because your brand makes it feel inevitable.
                  </p>

                  <p>
                    When your Instagram communicates taste, consistency, and
                    real-world execution, your fee becomes contextually “normal” for
                    the level of experience you’re selling.
                  </p>

                  <p className="not-italic font-bold text-luxury-gold uppercase tracking-[0.3em] text-[10px]">
                    When it doesn’t, couples experience friction: “Why is this expensive?”
                  </p>
               </div>

               <h2 className="text-3xl md:text-5xl font-serif text-luxury-slate mt-24 mb-10 italic border-l-2 border-luxury-gold pl-10 text-luxury-slate">A Simple Standard: If You Go Quiet, You Look Risky</h2>

               <div className="space-y-8 text-lg text-luxury-slate/50 font-light leading-relaxed italic text-luxury-slate mb-16">
                  <p>
                    Even if you’re fully booked, an inactive Instagram makes you look
                    uncertain: maybe you’re not operating anymore, maybe you’re not in
                    demand, maybe the business is inconsistent.
                  </p>

                  <p>
                    This isn’t fair — but it’s how couples interpret signals.
                    Instagram is a trust machine. And silence breaks trust.
                  </p>
               </div>

               <div className="mt-24 pt-20 border-t border-luxury-gold/10">
                  <h3 className="text-4xl md:text-7xl font-serif text-luxury-slate mb-10 italic tracking-tight leading-tight">
                    Want Your Instagram to Support <span className="text-luxury-gold not-italic">Your Positioning?</span>
                  </h3>
                  <div className="space-y-8 text-xl text-luxury-slate/40 leading-relaxed mb-12 font-light italic">
                    <p>
                      If Instagram isn’t building trust and making your pricing feel
                      justified, you don’t need “more content.”
                    </p>
                    <p className="not-italic text-luxury-slate font-bold uppercase tracking-[0.3em] text-[10px]">
                      You need the right proof, in the right structure, posted
                      consistently.
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center justify-center gap-6 px-12 py-6 bg-luxury-slate text-white text-[10px] uppercase tracking-[0.4em] font-bold rounded-full overflow-hidden hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-700 shadow-xl"
                  >
                    <span className="relative z-10">DM us / Let’s fix your Instagram positioning</span>
                    <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                  </Link>
               </div>
             </motion.div>

             {/* Sidebar */}
             <aside className="sticky top-32 space-y-12">
                <div className="p-8 bg-white rounded-[3rem] border border-luxury-gold/10 shadow-sm text-center">
                   <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold mb-8 mx-auto">
                      <CheckCircle2 size={20} />
                   </div>
                   <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold mb-6">Trust Factor</h4>
                   <p className="text-sm text-luxury-slate/50 font-light leading-relaxed italic mb-8">
                      Using social signals as definitive proof of excellence.
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
