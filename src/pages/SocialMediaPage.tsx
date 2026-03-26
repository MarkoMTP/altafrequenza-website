import {
  Sparkles,
  Instagram,
  Calendar,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function SocialMediaPage() {
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
        staggerChildren: 0.15
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Social Media Management for Wedding Planners and Venues | Alta
          Frequenza Marketing
        </title>

        <meta
          name="description"
          content="Social media management for wedding planners and venues designed to build trust, strengthen positioning, and turn your online presence into a source of better wedding enquiries."
        />

        <meta
          name="keywords"
          content="social media for wedding planners, social media for wedding venues, instagram wedding planner, wedding planner marketing, wedding venue marketing, content creation wedding planners"
        />

        <meta
          property="og:title"
          content="Social Media Management for Wedding Planners and Venues"
        />
        <meta
          property="og:description"
          content="A structured social media system built to strengthen trust, improve positioning, and attract better wedding inquiries for professionals and venues."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/logo.png" />
      </Helmet>

      <div className="bg-luxury-champagne text-luxury-slate selection:bg-luxury-gold/30 pt-24 min-h-screen font-light">
        {/* HERO / OUTCOME */}
        <section className="relative min-h-[80vh] flex items-center justify-center px-6 lg:px-12 py-32 overflow-hidden border-b border-luxury-gold/5">
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-luxury-gold/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-luxury-ethereal/10 blur-[150px] rounded-full animate-pulse" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-5xl mx-auto"
            >
              <motion.div 
                variants={fadeIn}
                className="inline-flex items-center gap-3 px-6 py-2 glass border border-luxury-gold/20 text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-12 rounded-full font-bold shadow-sm"
              >
                <Sparkles size={14} />
                Social Media for Wedding Planners and Venues
              </motion.div>

              <motion.h1 
                variants={fadeIn} 
                className="text-5xl md:text-8xl font-serif text-luxury-slate mb-10 leading-[1.05] tracking-tight"
              >
                A Social Presence That Builds <span className="text-luxury-gold italic">Trust</span> Before Couples Even Contact You
              </motion.h1>

              <motion.p 
                variants={fadeIn} 
                className="text-xl md:text-2xl text-luxury-slate/60 leading-relaxed max-w-4xl mx-auto mb-16 font-light italic"
              >
                We help wedding planners and venues create a stronger online
                presence that makes them look more established, more trustworthy,
                and more worth contacting the moment couples discover their brand.
              </motion.p>

              <motion.div variants={fadeIn}>
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-luxury-slate text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-700 rounded-full shadow-2xl overflow-hidden"
                >
                  <span className="relative z-10">Strengthen Your Online Presence</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* MECHANISM */}
        <section className="px-6 lg:px-12 py-32 bg-white relative">
          <div className="max-w-5xl mx-auto text-center mb-24">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold mb-8"
            >
              HOW WE CREATE THE OUTCOME
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif text-luxury-slate mb-10 tracking-tight leading-tight"
            >
              We Turn Your Instagram Into a <span className="text-luxury-gold italic">Trust-Building</span> Sales Asset
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-luxury-slate/60 max-w-3xl mx-auto font-light leading-relaxed font-light italic"
            >
              This is not about posting for the sake of posting. We structure
              your presence so that when couples land on your profile, they
              instantly understand your style, your level, and why you feel like
              the right choice.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {[
              {
                icon: <Instagram size={28} />,
                title: "1. Stronger Brand Presentation",
                desc: "We create a more polished, cohesive profile that makes your business feel more premium and more credible at first glance."
              },
              {
                icon: <Calendar size={28} />,
                title: "2. Consistent Content Structure",
                desc: "We plan and manage content so your brand stays visible, active, and reliable instead of looking inconsistent or forgotten."
              },
              {
                icon: <MessageCircle size={28} />,
                title: "3. Content That Moves Couples Closer",
                desc: "Your content is shaped to build trust, communicate value, and make enquiries feel like the natural next step."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-luxury-champagne/10 p-12 rounded-[3.5rem] border border-luxury-gold/10 group hover:bg-luxury-slate hover:text-white transition-all duration-700 shadow-sm"
              >
                <div className="w-16 h-16 rounded-2xl bg-luxury-slate text-white flex items-center justify-center mb-10 group-hover:bg-luxury-gold transition-colors duration-700 shadow-xl">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif text-luxury-slate mb-6 group-hover:text-luxury-gold transition-colors duration-700 italic">
                  {item.title}
                </h3>
                <p className="text-luxury-slate/50 font-light leading-relaxed text-sm group-hover:text-white/60 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* WHY IT WORKS */}
        <section className="px-6 lg:px-12 py-32 bg-luxury-slate text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-20">
             <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-luxury-gold/10 blur-[150px] rounded-full" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10 mb-20">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold mb-8"
            >
              WHY THIS WORKS
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif mb-10 tracking-tight leading-tight"
            >
              Because Couples Judge the Experience Before They <span className="text-luxury-gold italic">Ever Contact</span> You
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-white/50 max-w-4xl mx-auto font-light leading-relaxed mb-16 italic"
            >
              High-quality couples do not just look at photos. They read the
              room. They pay attention to consistency, taste, structure, and how
              professionally a brand presents itself online. A stronger social
              presence increases confidence before the first message is ever
              sent.
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
               {[
                 { title: "Higher Trust", desc: "A polished and active profile makes your business feel more established and more dependable." },
                 { title: "Stronger Perceived Value", desc: "Better presentation helps couples see your service as more premium before they even speak with you." },
                 { title: "Better Positioning", desc: "Clearer content helps differentiate you from competitors who look inconsistent or generic." },
                 { title: "More Enquiry Readiness", desc: "When couples trust what they see, reaching out feels easier and safer." }
               ].map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] group hover:bg-luxury-gold/10 transition-all duration-700"
                 >
                    <div className="w-10 h-10 rounded-full bg-luxury-gold/20 flex items-center justify-center text-luxury-gold mb-8 group-hover:scale-110 transition-transform">
                       <CheckCircle size={20} />
                    </div>
                    <h3 className="text-lg font-serif mb-4 italic tracking-wide group-hover:text-luxury-gold transition-colors">{item.title}</h3>
                    <p className="text-white/40 text-sm font-light leading-relaxed group-hover:text-white/60 transition-colors">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
          </div>
        </section>

        {/* WHAT MAKES US DIFFERENT */}
        <section className="px-6 lg:px-12 py-32 bg-luxury-champagne">
          <div className="max-w-5xl mx-auto text-center mb-24">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold mb-10"
            >
              WHAT MAKES US DIFFERENT
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-serif text-luxury-slate mb-10 tracking-tight leading-tight"
            >
              Not Generic <span className="text-luxury-gold italic">Social Media</span> Management
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-luxury-slate/60 max-w-4xl mx-auto font-light leading-relaxed font-light italic"
            >
              Most social media services focus on posting more. We focus on
              helping wedding planners and venues look more trustworthy, more
              refined, and more attractive to the kind of couples they actually
              want to book.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {[
              {
                title: "Wedding Industry-Specific",
                desc: "We understand how couples choose planners and venues, and we shape your content around that decision-making process."
              },
              {
                title: "Built Around Enquiries, Not Just Aesthetics",
                desc: "A beautiful feed matters, but the real goal is helping couples feel confident enough to contact you."
              },
              {
                title: "Positioning-Focused",
                desc: "We do not just fill a content calendar. We help build a stronger brand presence that supports premium perception."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-[3.5rem] border border-luxury-gold/10 shadow-sm hover:shadow-2xl transition-all duration-700"
              >
                <div className="text-luxury-gold font-bold text-[10px] uppercase tracking-[0.4em] mb-10">Pillar 0{i+1}</div>
                <h3 className="text-xl font-bold uppercase tracking-[0.1em] text-luxury-slate mb-6">
                  {item.title}
                </h3>
                <p className="text-luxury-slate/50 font-light leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SOCIAL PROOF / CASE STUDIES */}
        <section className="px-6 lg:px-12 py-32 bg-white relative">
          <div className="max-w-6xl mx-auto text-center mb-24">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold mb-10"
            >
              CASE STUDIES
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif text-luxury-slate mb-10 tracking-tight leading-tight"
            >
              Stronger Presence. <span className="text-luxury-gold italic">Better Signals.</span> Better Results.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-luxury-slate/50 font-light max-w-3xl mx-auto italic leading-relaxed"
            >
              Social media performance should not be judged only by likes. What
              matters is whether the brand looks stronger, reaches the right
              people, and supports more enquiries over time.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* DESTINATION PLANNER */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-luxury-champagne/10 p-12 rounded-[4rem] border border-luxury-gold/10 shadow-sm group hover:bg-luxury-slate hover:text-white transition-all duration-1000"
            >
              <h4 className="text-3xl font-serif mb-10 italic tracking-wide group-hover:text-luxury-gold transition-colors">
                Destination Wedding Planner
              </h4>
              <ul className="space-y-6">
                {[
                  "More consistent posting and brand presence",
                  "Stronger positioning for luxury destination couples",
                  "Better trust signals before enquiry",
                  "Content that supported overall lead generation efforts"
                ].map((stat, i) => (
                  <li key={i} className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-slate/40 group-hover:text-white/40 leading-relaxed">
                    <CheckCircle size={14} className="text-luxury-gold flex-shrink-0" />
                    {stat}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* TESTIMONIAL */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-luxury-champagne/10 p-12 rounded-[4rem] border border-luxury-gold/10 shadow-sm group hover:bg-luxury-slate hover:text-white transition-all duration-1000 italic"
            >
              <h4 className="text-3xl font-serif mb-10 tracking-wide group-hover:text-luxury-gold transition-colors not-italic">
                 Liz Tuson
              </h4>
              <p className="text-xl font-light leading-relaxed text-luxury-slate/70 group-hover:text-white/70 transition-colors">
                "Marko has been fantastic in helping boost my business and online
                presence as a wedding planner in Italy. He immediately
                understood my style and the image I wanted to convey. After only
                a few months, I’ve already seen an increase in enquiries that
                has led to new bookings. I highly recommend Alta Frequenza!"
              </p>
            </motion.div>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mt-20 text-luxury-slate/30 text-xs font-light tracking-wide italic leading-relaxed"
          >
            Results vary depending on current brand strength, content quality,
            posting frequency, market positioning, and how well the rest of
            the business converts interest into enquiries.
          </motion.p>
        </section>

        {/* NEXT STEPS */}
        <section className="px-6 lg:px-12 py-32 bg-luxury-slate text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-luxury-gold opacity-[0.03] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="max-w-5xl mx-auto text-center mb-24 relative z-10">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold mb-10"
            >
              NEXT STEPS
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-serif mb-10 tracking-tight leading-tight"
            >
              Let’s See What Your Brand Could <span className="text-luxury-gold italic">Look Like</span> With the Right Structure
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-white/40 max-w-4xl mx-auto font-light leading-relaxed italic border-l border-luxury-gold/30 pl-8"
            >
              If your current Instagram does not fully reflect the level of your
              work, we can help you build a stronger, more consistent presence
              that supports better enquiries and a better first impression.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <div className="bg-white/5 backdrop-blur-3xl p-12 lg:p-24 border border-white/10 rounded-[5rem] shadow-2xl text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-luxury-gold/50 text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-gold mb-12 rounded-full">
                 <Award size={14} /> Brand Authority
              </div>

              <div className="mb-16">
                 <div className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-4">Starting investment</div>
                 <div className="text-6xl md:text-8xl font-serif text-white tracking-tighter">€800<span className="text-sm uppercase tracking-widest text-luxury-gold ml-4">/ Month</span></div>
              </div>

              <p className="text-white/40 text-lg mb-16 font-light leading-relaxed italic max-w-2xl mx-auto">
                Final pricing depends on posting frequency, content creation
                needs, and overall scope.
              </p>

              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-6 px-16 py-8 bg-white text-luxury-slate text-[10px] uppercase tracking-[0.4em] font-bold rounded-full hover:bg-luxury-gold transition-all duration-700"
              >
                <span className="relative z-10 flex items-center gap-4">
                  Book Your Consultation
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-700" />
                </span>
                <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
