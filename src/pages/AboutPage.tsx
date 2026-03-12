import { Helmet } from "react-helmet-async";
import { Sparkles, ArrowRight, Award, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AboutPage() {
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
          About Marko Matković | Wedding Planner & Venue Marketing Specialist |
          Alta Frequenza
        </title>

        <meta
          name="description"
          content="Learn more about Marko Matković, founder of Alta Frequenza — a marketing agency specialized in wedding planners and wedding venues. Discover why Alta Frequenza was created and how our focused approach helps wedding businesses get the visibility and inquiries they deserve."
        />

        <meta
          name="keywords"
          content="
            about alta frequenza,
            about marko matkovic,
            wedding planner marketing,
            wedding venue marketing,
            marketing for wedding planners,
            marketing for wedding venues,
            google ads wedding planner,
            social media for wedding planners
          "
        />

        <meta
          property="og:title"
          content="About Alta Frequenza | Wedding Planner & Venue Marketing"
        />
        <meta
          property="og:description"
          content="Founded by Marko Matković, Alta Frequenza focuses exclusively on helping wedding planners and venues grow through specialized marketing systems."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
      </Helmet>

      <div className="bg-luxury-champagne text-luxury-slate selection:bg-luxury-gold/30 pt-24 min-h-screen font-light">
        {/* HERO */}
        <section className="relative px-6 lg:px-12 py-32 overflow-hidden border-b border-luxury-gold/5">
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-luxury-gold/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-luxury-ethereal/10 blur-[150px] rounded-full animate-pulse" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-[1.2fr,1fr] gap-24 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div
                  variants={fadeIn}
                  className="inline-flex items-center gap-3 px-6 py-2 glass border border-luxury-gold/20 text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-12 rounded-full font-bold shadow-sm"
                >
                  <Sparkles size={14} />
                  About Alta Frequenza
                </motion.div>

                <motion.h1
                  variants={fadeIn}
                  className="text-5xl md:text-8xl font-serif text-luxury-slate mb-10 leading-[1.05] tracking-tight"
                >
                  I'm Marko Matković and I built a marketing system made <span className="text-luxury-gold italic">specifically</span> for wedding planners and venues.
                </motion.h1>

                <motion.div variants={fadeIn} className="space-y-8 text-xl text-luxury-slate/60 font-light leading-relaxed font-light italic">
                  <p>
                    Most agencies work with restaurants, real estate, dentists,
                    e-commerce… I chose one world and went all-in: wedding
                    businesses.
                  </p>
                  <p>
                    Because planners and venues don’t need random marketing. They
                    need clarity, trust, and a predictable flow of the right
                    couples.
                  </p>
                </motion.div>
              </motion.div>

              {/* FOUNDER CARD */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-luxury-gold/10 blur-2xl rounded-[4rem] group-hover:bg-luxury-gold/20 transition-all duration-700" />
                <div className="relative bg-white p-12 lg:p-16 rounded-[4rem] border border-luxury-gold/10 shadow-2xl text-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-10 border-4 border-luxury-gold/20 p-2 relative">
                    <img
                      src="https://www.dropbox.com/scl/fi/hsv6bsy3n85vbmxyljd4h/myself.JPG?rlkey=93y62fxttby3uwmzwj0or1k39&st=kjs4nish&raw=1"
                      alt="Founder, Marko Matković"
                      className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                  </div>
                  <h2 className="text-3xl font-serif text-luxury-slate mb-2 tracking-wide italic">
                    Marko Matković
                  </h2>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-8 font-bold">
                    Founder · Alta Frequenza
                  </p>
                  <p className="text-luxury-slate/50 font-light leading-relaxed text-sm italic border-t border-luxury-gold/10 pt-8">
                    Specialized in marketing for wedding planners & venues,
                    working with businesses across different regions and markets.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ORIGIN STORY */}
        <section className="px-6 lg:px-12 py-32 bg-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold mb-10"
            >
              HOW ALTA FREQUENZA STARTED
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-serif text-luxury-slate mb-12 tracking-tight leading-tight"
            >
              From “invisible” talent to a <span className="text-luxury-gold italic">specialized partner</span> for wedding businesses
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-10 text-xl text-luxury-slate/60 leading-relaxed font-light italic"
            >
              <p>
                Before officially launching Alta Frequenza Marketing, I was
                already working behind the scenes with wedding planners and
                venues, while also managing marketing for my family’s business.
              </p>

              <p>
                After working with a dozen venues and wedding planners, I kept
                seeing the same pattern: incredible work, beautiful weddings and
                happy couples but inconsistent inquiries and visibility.
              </p>

              <p>
                Couples search differently. They compare differently. They book
                differently. And no general marketing agency truly understood
                that.
              </p>

              <p className="text-luxury-slate not-italic pt-10 border-t border-luxury-gold/10">
                That’s why in <span className="text-luxury-gold font-bold">2025</span>, I officially launched{" "}
                <span className="font-bold uppercase tracking-widest text-sm">Alta Frequenza Marketing</span>, not as a generic
                agency, but as a specialist focused only on wedding planners and
                wedding venues. The goal was simple: build a system that finally
                matches the quality of your work with the visibility you
                deserve.
              </p>
            </motion.div>
          </div>
        </section>

        {/* DIFFERENTIATION */}
        <section className="px-6 lg:px-12 py-32 bg-luxury-champagne border-t border-luxury-gold/5">
          <div className="max-w-5xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold mb-10"
            >
              WHY I CHOSE ONE INDUSTRY
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-serif text-luxury-slate mb-12 tracking-tight leading-tight"
            >
              I don’t try to be the best at everything, just at <span className="text-luxury-gold italic">wedding marketing</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-luxury-slate/60 mb-20 font-light italic"
            >
              While most agencies split their attention across 20 different
              niches, I decided to master one:{" "}
              <span className="text-luxury-slate font-bold not-italic">wedding planners and venues</span>.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-12 bg-white rounded-[3.5rem] border border-luxury-gold/10 shadow-sm"
              >
                <div className="text-luxury-gold font-bold text-[10px] uppercase tracking-[0.4em] mb-10">Behavioral Insights</div>
                <p className="text-luxury-slate/50 font-light italic mb-8">
                  I’ve built a system around how couples really behave when
                  they’re planning a wedding:
                </p>
                <ul className="space-y-6">
                  {[
                    "What high-budget and mid-budget couples actually search for",
                    "How destination couples compare planners in different regions",
                    "Why some locations convert instantly and others need trust",
                    "Which keywords help filter out low-budget leads"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center">
                      <div className="w-1 h-1 bg-luxury-gold rounded-full" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-12 bg-white rounded-[3.5rem] border border-luxury-gold/10 shadow-sm"
              >
                <div className="text-luxury-gold font-bold text-[10px] uppercase tracking-[0.4em] mb-10">Brand Strategy</div>
                <p className="text-luxury-slate/50 font-light italic mb-8">
                  I also focus on how your online presence supports those
                  decisions:
                </p>
                <ul className="space-y-6">
                  {[
                    "How Instagram influences the final choice",
                    "What kind of content makes couples feel safe reaching out",
                    "How to make your brand look as professional as the weddings you plan"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center">
                      <div className="w-1 h-1 bg-luxury-gold rounded-full" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-20 text-2xl text-luxury-slate font-serif italic border-l border-luxury-gold/30 pl-12 max-w-3xl"
            >
              This specialization is why the system works and it’s built on real
              inquiry behavior, not guesswork.
            </motion.p>
          </div>
        </section>

        {/* MISSION & PHILOSOPHY */}
        <section className="px-6 lg:px-12 py-32 bg-luxury-slate text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-luxury-gold/10 blur-[150px] rounded-full" />
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold mb-10"
            >
              MY PHILOSOPHY
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-serif mb-12 tracking-tight leading-tight"
            >
              Helping planners and venues get the clients their <span className="text-luxury-gold italic">work deserves</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8 text-xl text-white/50 leading-relaxed font-light italic"
            >
              <p>
                My mission is simple: <span className="text-white font-bold not-italic">help wedding businesses get the right couples, consistently</span>.
              </p>

              <p>
                I don’t believe planners should lose clients to competitors with
                weaker work but better marketing. Yet that’s what happens every
                day when visibility and trust are missing.
              </p>

              <p>
                Marketing should feel predictable, not chaotic. It should
                support your business, not drain your time or energy. And it
                should be built around how couples actually choose a planner and
                not around the latest social trend.
              </p>

              <div className="pt-12 grid md:grid-cols-3 gap-8 text-left">
                {[
                  { label: "Visibility", desc: "so couples can finally see you." },
                  { label: "Trust", desc: "so they feel safe choosing you." },
                  { label: "Consistency", desc: "so inquiries don’t depend on luck." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="text-luxury-gold font-bold uppercase tracking-[0.5em] text-[10px] mb-4 group-hover:translate-x-4 transition-transform duration-700">{item.label}</div>
                    <p className="text-white/30 text-xs font-bold uppercase tracking-widest group-hover:text-white/60 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <p className="pt-12 text-sm uppercase tracking-[0.4em] font-bold text-white/20 not-italic">
                When those three work together, your business stops relying on
                chance and starts growing on purpose.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-6 lg:px-12 py-40 text-center bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-20" />
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-8xl font-serif text-luxury-slate mb-12 tracking-tight leading-[1.1]"
            >
              If you’re <span className="text-luxury-gold italic">serious</span> about growing, let’s talk.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-luxury-slate/40 mb-20 font-light leading-relaxed max-w-4xl mx-auto italic"
            >
              Whether you’re a planner or a venue, if you want clearer
              marketing, stronger visibility, and more aligned couples in your
              inbox, I’d be happy to see if we’re a good fit to work together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-6 px-16 py-8 bg-luxury-slate text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-700 rounded-full shadow-[0_40px_100px_-20px_rgba(15,23,42,0.3)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-4">
                  Book a Strategy Session
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-700" />
                </span>
                <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
