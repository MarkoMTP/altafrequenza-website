import { Helmet } from "react-helmet-async";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AboutPage() {
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
          content="About Alta Frequenza | Marketing Agency for Wedding Pros & Venues"
        />
        <meta
          property="og:description"
          content="Founded by Marko Matković, Alta Frequenza focuses exclusively on helping wedding professionals and venues grow through specialized marketing systems."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/logo.png" />
      </Helmet>

      <div className="bg-luxury-champagne text-luxury-slate selection:bg-luxury-gold/30 pt-20 md:pt-24 min-h-screen font-light">
        {/* HERO */}
        <section className="relative px-5 sm:px-6 lg:px-12 py-20 sm:py-28 lg:py-32 overflow-hidden border-b border-luxury-gold/5">
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-luxury-gold/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-luxury-ethereal/10 blur-[150px] rounded-full animate-pulse" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 sm:gap-16 lg:gap-24 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div
                  variants={fadeIn}
                  className="inline-flex max-w-full items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 glass border border-luxury-gold/20 text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.4em] text-luxury-gold mb-6 sm:mb-12 rounded-full font-bold shadow-sm leading-relaxed"
                >
                  <Sparkles size={14} className="flex-shrink-0" />
                  <span className="min-w-0">About Alta Frequenza</span>
                </motion.div>

                <motion.h1
                  variants={fadeIn}
                  className="text-4xl sm:text-5xl md:text-8xl font-serif text-luxury-slate mb-6 sm:mb-10 leading-[1.05] tracking-tight"
                >
                  I'm Marko Matković and I built a marketing system made <span className="text-luxury-gold italic">specifically</span> for wedding planners and venues.
                </motion.h1>

                <motion.div variants={fadeIn} className="space-y-5 sm:space-y-8 text-base sm:text-xl text-luxury-slate/60 font-light leading-relaxed italic">
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
              <div className="relative group">
                <div className="absolute -inset-4 bg-luxury-gold/10 blur-2xl rounded-[2rem] sm:rounded-[4rem] md:group-hover:bg-luxury-gold/20 md:transition-all md:duration-700" />
                <div className="relative bg-white p-7 sm:p-12 lg:p-16 rounded-[2rem] sm:rounded-[4rem] border border-luxury-gold/10 shadow-2xl text-center">
                  <div className="w-32 sm:w-40 h-32 sm:h-40 rounded-full overflow-hidden mx-auto mb-6 sm:mb-10 border-4 border-luxury-gold/20 p-2 relative">
                    <img
                      src="https://www.dropbox.com/scl/fi/hsv6bsy3n85vbmxyljd4h/myself.JPG?rlkey=93y62fxttby3uwmzwj0or1k39&st=kjs4nish&raw=1"
                      alt="Founder, Marko Matković"
                      className="w-full h-full object-cover rounded-full grayscale md:hover:grayscale-0 md:transition-all md:duration-1000"
                    />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif text-luxury-slate mb-2 tracking-wide italic">
                    Marko Matković
                  </h2>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.4em] text-luxury-gold mb-6 sm:mb-8 font-bold">
                    Founder · Alta Frequenza
                  </p>
                  <p className="text-luxury-slate/50 font-light leading-relaxed text-sm italic border-t border-luxury-gold/10 pt-6 sm:pt-8">
                    Specialized in marketing for wedding planners & venues,
                    working with businesses across different regions and markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ORIGIN STORY */}
        <section className="px-5 sm:px-6 lg:px-12 py-24 sm:py-28 lg:py-32 bg-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[9px] sm:text-[10px] uppercase tracking-[0.24em] sm:tracking-[0.4em] text-luxury-gold font-bold mb-6 sm:mb-10"
            >
              HOW ALTA FREQUENZA STARTED
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-7xl font-serif text-luxury-slate mb-8 sm:mb-12 tracking-tight leading-tight"
            >
              From “invisible” talent to a <span className="text-luxury-gold italic">specialized partner</span> for wedding businesses
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-10 text-base sm:text-xl text-luxury-slate/60 leading-relaxed font-light italic"
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

              <p className="text-luxury-slate not-italic pt-8 sm:pt-10 border-t border-luxury-gold/10">
                That’s why in <span className="text-luxury-gold font-bold">2025</span>, I officially launched{" "}
                <span className="font-bold uppercase tracking-[0.14em] sm:tracking-widest text-xs sm:text-sm">Alta Frequenza Marketing</span>, not as a generic
                agency, but as a specialist focused only on wedding planners and
                wedding venues. The goal was simple: build a system that finally
                matches the quality of your work with the visibility you
                deserve.
              </p>
            </motion.div>
          </div>
        </section>

        {/* DIFFERENTIATION */}
        <section className="px-5 sm:px-6 lg:px-12 py-24 sm:py-28 lg:py-32 bg-luxury-champagne border-t border-luxury-gold/5">
          <div className="max-w-5xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[9px] sm:text-[10px] uppercase tracking-[0.24em] sm:tracking-[0.4em] text-luxury-gold font-bold mb-6 sm:mb-10"
            >
              WHY I CHOSE ONE INDUSTRY
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-7xl font-serif text-luxury-slate mb-8 sm:mb-12 tracking-tight leading-tight"
            >
              I don’t try to be the best at everything, just at <span className="text-luxury-gold italic">wedding marketing</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-base sm:text-xl text-luxury-slate/60 mb-12 sm:mb-20 font-light italic"
            >
              While most agencies split their attention across 20 different
              niches, I decided to master one:{" "}
              <span className="text-luxury-slate font-bold not-italic">wedding planners and venues</span>.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-16">
              <div className="p-7 sm:p-10 lg:p-12 bg-white rounded-[2rem] sm:rounded-[3.5rem] border border-luxury-gold/10 shadow-sm">
                <div className="text-luxury-gold font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.4em] mb-6 sm:mb-10">Behavioral Insights</div>
                <p className="text-luxury-slate/50 font-light italic mb-6 sm:mb-8">
                  I’ve built a system around how couples really behave when
                  they’re planning a wedding:
                </p>
                <ul className="space-y-4 sm:space-y-6">
                  {[
                    "What high-budget and mid-budget couples actually search for",
                    "How destination couples compare planners in different regions",
                    "Why some locations convert instantly and others need trust",
                    "Which keywords help filter out low-budget leads"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 sm:gap-4 items-center">
                      <div className="w-1 h-1 bg-luxury-gold rounded-full" />
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.2em] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-7 sm:p-10 lg:p-12 bg-white rounded-[2rem] sm:rounded-[3.5rem] border border-luxury-gold/10 shadow-sm">
                <div className="text-luxury-gold font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.4em] mb-6 sm:mb-10">Brand Strategy</div>
                <p className="text-luxury-slate/50 font-light italic mb-6 sm:mb-8">
                  I also focus on how your online presence supports those
                  decisions:
                </p>
                <ul className="space-y-4 sm:space-y-6">
                  {[
                    "How Instagram influences the final choice",
                    "What kind of content makes couples feel safe reaching out",
                    "How to make your brand look as professional as the weddings you plan"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 sm:gap-4 items-center">
                      <div className="w-1 h-1 bg-luxury-gold rounded-full" />
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.2em] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 sm:mt-20 text-xl sm:text-2xl text-luxury-slate font-serif italic border-l border-luxury-gold/30 pl-5 sm:pl-12 max-w-3xl"
            >
              This specialization is why the system works and it’s built on real
              inquiry behavior, not guesswork.
            </motion.p>
          </div>
        </section>

        {/* MISSION & PHILOSOPHY */}
        <section className="px-5 sm:px-6 lg:px-12 py-24 sm:py-28 lg:py-32 bg-luxury-slate text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-luxury-gold/10 blur-[150px] rounded-full" />
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[9px] sm:text-[10px] uppercase tracking-[0.24em] sm:tracking-[0.4em] text-luxury-gold font-bold mb-6 sm:mb-10"
            >
              MY PHILOSOPHY
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-7xl font-serif mb-8 sm:mb-12 tracking-tight leading-tight"
            >
              Helping planners and venues get the clients their <span className="text-luxury-gold italic">work deserves</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-5 sm:space-y-8 text-base sm:text-xl text-white/50 leading-relaxed font-light italic"
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

              <div className="pt-8 sm:pt-12 grid md:grid-cols-3 gap-6 sm:gap-8 text-left">
                {[
                  { label: "Visibility", desc: "so couples can finally see you." },
                  { label: "Trust", desc: "so they feel safe choosing you." },
                  { label: "Consistency", desc: "so inquiries don’t depend on luck." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="text-luxury-gold font-bold uppercase tracking-[0.24em] sm:tracking-[0.5em] text-[9px] sm:text-[10px] mb-4 md:group-hover:translate-x-4 md:transition-transform md:duration-700">{item.label}</div>
                    <p className="text-white/30 text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] sm:tracking-widest md:group-hover:text-white/60 md:transition-colors">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <p className="pt-8 sm:pt-12 text-xs sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.4em] font-bold text-white/20 not-italic">
                When those three work together, your business stops relying on
                chance and starts growing on purpose.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-5 sm:px-6 lg:px-12 py-24 sm:py-32 lg:py-40 text-center bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-20" />
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-8xl font-serif text-luxury-slate mb-8 sm:mb-12 tracking-tight leading-[1.1]"
            >
              If you’re <span className="text-luxury-gold italic">serious</span> about growing, let’s talk.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-base sm:text-xl text-luxury-slate/40 mb-10 sm:mb-20 font-light leading-relaxed max-w-4xl mx-auto italic"
            >
              Whether you’re a planner or a venue, if you want clearer
              marketing, stronger visibility, and more aligned couples in your
              inbox, I’d be happy to see if we’re a good fit to work together.
            </motion.p>

            <div>
              <Link
                to="/contact"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 sm:gap-6 px-5 sm:px-16 py-5 sm:py-8 bg-luxury-slate text-white text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.4em] font-bold md:hover:bg-luxury-gold md:hover:text-luxury-slate md:transition-all md:duration-700 rounded-full shadow-[0_40px_100px_-20px_rgba(15,23,42,0.3)] overflow-hidden leading-relaxed text-center"
              >
                <span className="relative z-10 flex min-w-0 items-center gap-3 sm:gap-4">
                  Book a Strategy Session
                  <ArrowRight size={24} className="flex-shrink-0 md:group-hover:translate-x-2 md:transition-transform md:duration-700" />
                </span>
                <div className="absolute inset-0 hidden bg-luxury-gold translate-y-full md:block md:group-hover:translate-y-0 md:transition-transform md:duration-700" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
