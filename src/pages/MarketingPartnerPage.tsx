import { ArrowRight, CheckCircle, Sparkles, Award, Globe, Zap, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function MarketingPartnerPage() {
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
        staggerChildren: 0.15
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Complete Wedding Marketing Management | Alta Frequenza Marketing
        </title>
        <meta
          name="description"
          content="A full marketing partnership for wedding planners and venues. One experienced specialist handling your marketing end-to-end, without hiring a full-time employee."
        />
        <meta
          name="keywords"
          content="wedding planner marketing partner, wedding venue marketing, full service wedding marketing, wedding planner growth, marketing for wedding planners"
        />
      </Helmet>

      <div className="bg-luxury-champagne text-luxury-slate selection:bg-luxury-gold/30 pt-24 min-h-screen font-light overflow-x-hidden">
        {/* HERO */}
        <section className="relative px-6 lg:px-12 py-32 overflow-hidden border-b border-luxury-gold/5">
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-luxury-gold/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-luxury-ethereal/10 blur-[150px] rounded-full animate-pulse" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.p 
                  variants={fadeIn}
                  className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-10 font-bold"
                >
                  Your Marketing Partner
                </motion.p>

                <motion.h1 
                  variants={fadeIn} 
                  className="text-5xl md:text-9xl font-serif text-luxury-slate mb-10 leading-[1.05] tracking-tighter"
                >
                  Complete Wedding <span className="text-luxury-gold italic">Marketing</span> Management
                </motion.h1>

                <motion.p 
                  variants={fadeIn} 
                  className="text-xl md:text-2xl text-luxury-slate/60 leading-relaxed max-w-xl mb-16 font-light italic"
                >
                  A full marketing partnership for wedding planners and venues who
                  want their marketing handled end-to-end. One experienced
                  specialist, one clear strategy, full ownership.
                </motion.p>

                <motion.div variants={fadeIn}>
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-luxury-slate text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-700 rounded-full shadow-2xl overflow-hidden"
                  >
                    <span className="relative z-10">Discuss Your Marketing</span>
                    <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-[4rem] group"
              >
                <img
                  src="https://www.dropbox.com/scl/fi/d5mdc5qg3cogs1g80ont2/AdobeStock_480650164-scaled.jpeg?rlkey=n38zkhohb4gvmrdrghvlpj782&st=ssnnaq7r&raw=1"
                  alt="Wedding marketing strategy workspace"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-luxury-gold/10 opacity-40 mix-blend-overlay" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="px-6 lg:px-12 py-32 bg-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-serif text-luxury-slate mb-16 tracking-tight leading-tight italic"
            >
              This Is For Wedding Businesses Who Want Marketing <span className="text-luxury-gold">Handled Properly</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-12 text-left mb-20">
               {[
                 "You don’t want to manage freelancers, agencies, or platforms.",
                 "You don’t want to guess what to post, what to run, or what to fix.",
                 "You want one person responsible for visibility, messaging, and enquiries."
               ].map((text, i) => (
                 <motion.div 
                   key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 bg-luxury-champagne/5 rounded-[3rem] border border-luxury-gold/5"
                 >
                    <div className="text-luxury-gold font-serif italic text-2xl mb-6">0{i+1}</div>
                    <p className="text-lg text-luxury-slate/50 font-light italic leading-relaxed">{text}</p>
                 </motion.div>
               ))}
            </div>

            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="text-[10px] uppercase tracking-[0.5em] font-bold text-luxury-gold"
            >
               This is not a service, it’s a partnership.
            </motion.p>
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className="px-6 lg:px-12 py-32 bg-luxury-slate text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative rounded-[4rem] overflow-hidden group"
             >
                <img
                  src="https://www.dropbox.com/scl/fi/zc1bkow54a83be0zpc0x3/wedding-planning-stress-recirc-getty-images-d59fc82e85c141c98c480ea85b207a01.jpg?rlkey=dmbsqfptup8b9wjfy4cilvtpx&st=810e72mi&raw=1"
                  alt="Wedding planner overwhelmed with marketing"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-luxury-gold/10 mix-blend-overlay" />
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <h2 className="text-4xl md:text-6xl font-serif mb-10 tracking-tight leading-tight">
                  Managing Marketing Becomes a <span className="text-luxury-gold italic">Second Full-Time Job</span>
                </h2>
                <div className="space-y-8 text-xl text-white/50 font-light leading-relaxed font-light italic">
                  <p>
                    Multiple platforms, different agencies, unclear priorities,
                    inconsistent messaging. Marketing becomes fragmented and
                    reactive.
                  </p>
                  <p className="not-italic text-white border-l-2 border-luxury-gold pl-10 font-bold">
                    The result is lost opportunities, inconsistent enquiries, and a
                    brand that doesn’t fully reflect the quality of your work.
                  </p>
                </div>
             </motion.div>
          </div>
        </section>

        {/* THE SOLUTION */}
        <section className="px-6 lg:px-12 py-32 bg-white border-y border-luxury-gold/5">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="text-4xl md:text-8xl font-serif text-luxury-slate mb-12 tracking-tighter leading-tight"
            >
               One Partner. One Strategy. <span className="text-luxury-gold italic text-7xl md:text-9xl block mt-4">Full Ownership.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl text-luxury-slate/30 font-light leading-relaxed max-w-3xl mx-auto italic"
            >
              You work with one experienced specialist who takes responsibility
              for your entire marketing ecosystem, from positioning to
              enquiries.
            </motion.p>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="px-6 lg:px-12 py-32 bg-luxury-champagne">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr,1.2fr] gap-24">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-7xl font-serif text-luxury-slate mb-10 tracking-tight leading-tight">
                What’s <span className="text-luxury-gold italic">Included</span>
              </h2>
              <p className="text-2xl text-luxury-slate/40 leading-relaxed font-light italic">
                Everything needed to build visibility, attract the right
                couples, and turn attention into enquiries.
              </p>
            </motion.div>

            <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={staggerContainer}
               className="grid sm:grid-cols-1 gap-6"
            >
              {[
                "Everything included in the Wedding Growth System™",
                "Everything included in Elegant Presence™",
                "End-to-end marketing direction and execution",
                "Brand positioning and messaging guidance",
                "Website and enquiry-flow improvements as needed",
                "Priority access and hands-on support",
                "One point of contact, no long-term contract",
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn}
                  className="group flex items-center gap-8 bg-white p-8 rounded-[2.5rem] border border-luxury-gold/10 hover:border-luxury-gold/50 transition-all duration-700 hover:translate-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-white transition-all duration-700">
                    <CheckCircle size={24} />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em]">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* INVESTMENT & AVAILABILITY */}
        <section className="px-6 lg:px-12 py-32 bg-luxury-slate text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-4xl md:text-7xl font-serif mb-10 tracking-tight leading-tight shadow-text-luxury"
            >
              Investment & <span className="text-luxury-gold italic">Availability</span>
            </motion.h2>

            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="text-xl text-white/50 mb-16 font-light leading-relaxed max-w-4xl mx-auto italic"
            >
              This is a high-touch marketing partnership, not a template-based
              service. To maintain quality and direct involvement, I only work
              with a limited number of partners at any given time.
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="glass p-20 rounded-[4rem] border border-white/10 relative group"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-luxury-gold rounded-full text-luxury-slate">
                 <Zap size={32} />
              </div>

               <p className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-4 font-bold">Standard partnership investment</p>
               <p className="text-3xl line-through text-white/20 mb-8 italic">€2,800 / month</p>

               <p className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold mb-4 font-bold">Currently available for</p>
               <p className="text-7xl font-serif text-white mb-10 italic">€2,000 / month</p>

               <div className="pt-10 border-t border-white/5 mt-10">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-white/60">
                    Only <strong className="text-luxury-gold text-sm underline">2 partnership spots</strong> currently available
                  </p>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/20 mt-4 leading-relaxed">
                    No long-term contract. We reassess monthly.
                  </p>
               </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mt-20"
            >
              <Link
                to="https://calendly.com/contact-altafrequenzamarketing/30min"
                className="group relative inline-flex items-center justify-center gap-6 px-16 py-8 bg-white text-luxury-slate text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-700 rounded-full shadow-2xl"
              >
                Apply for a Partnership
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-700" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* WHY THIS BEATS HIRING */}
        <section className="px-6 lg:px-12 py-32 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
               <h2 className="text-4xl md:text-6xl font-serif text-luxury-slate mb-10 tracking-tight leading-tight">
                 More <span className="text-luxury-gold italic">Effective</span> Than Hiring Internally
               </h2>
               <div className="space-y-8 text-xl text-luxury-slate/50 font-light leading-relaxed font-light italic">
                 <p>
                   Hiring internally means training, oversight, and risk.
                 </p>
                 <p className="not-italic text-luxury-slate border-l-2 border-luxury-gold pl-10">
                   This partnership gives you senior-level marketing expertise,
                   flexibility, and full accountability, without the overhead of a
                   full-time employee.
                 </p>
               </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="rounded-[4rem] overflow-hidden group shadow-2xl"
            >
                <img
                  src="https://www.dropbox.com/scl/fi/qbao354l58owflei5uxge/luxury-minimal-office-interior-design-london-07-1200px.jpg?rlkey=j9f2grpifpimack5wxjmn9cmx&st=g8k9yjm6&raw=1"
                  alt="Marketing strategy planning"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
            </motion.div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-6 lg:px-12 py-40 text-center bg-luxury-champagne/20 relative overflow-hidden">
           <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-20" />
           <div className="max-w-5xl mx-auto relative z-10">
              <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="inline-flex items-center gap-3 px-6 py-2 glass border border-luxury-gold/20 text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-12 rounded-full font-bold shadow-sm"
              >
                 <Globe size={14} /> Full Market Control
              </motion.div>
              <h2 className="text-4xl md:text-8xl font-serif text-luxury-slate mb-12 tracking-tighter leading-[1.1]">
                 If You Want One Person <span className="text-luxury-gold italic">Responsible</span>
              </h2>
              <p className="text-xl text-luxury-slate/40 mb-20 font-light leading-relaxed italic max-w-2xl mx-auto">
                 Let’s talk about whether a full marketing partnership makes sense
                 for your business.
              </p>

              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-6 px-16 py-8 bg-luxury-slate text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-700 rounded-full shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-4">
                   Book a Strategy Call
                   <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-700" />
                </span>
                <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              </Link>
           </div>
        </section>
      </div>
    </>
  );
}
