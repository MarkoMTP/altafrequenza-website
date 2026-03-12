import {
  MessageSquare,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  Send,
  Mic,
  Headphones,
  Home,
  MessageCircle,
  HelpCircle,
  Award,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function AssistantPage() {
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
        <title>The Smart Wedding Assistant™ | Alta Frequenza Marketing</title>
        <meta
          name="description"
          content="The Smart Wedding Assistant™ helps wedding planners respond instantly to couples 24/7 — answering questions, collecting details, and booking consultations automatically."
        />
        <meta
          name="keywords"
          content="AI wedding planner assistant, wedding planner chatbot, wedding automation, AI for wedding planners, destination wedding marketing"
        />
      </Helmet>

      <div className="bg-luxury-champagne text-luxury-slate selection:bg-luxury-gold/30 pt-24 min-h-screen font-light">
        {/* HERO */}
        <section className="relative px-6 lg:px-12 py-32 overflow-hidden border-b border-luxury-gold/5">
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
                Your 24/7 Digital Assistant for Wedding Planners
              </motion.div>

              <motion.h1 
                variants={fadeIn} 
                className="text-5xl md:text-8xl font-serif text-luxury-slate mb-10 leading-[1.05] tracking-tight"
              >
                The Smart <span className="text-luxury-gold italic">Wedding Assistant™</span>
              </motion.h1>

              <motion.p 
                variants={fadeIn} 
                className="text-xl md:text-2xl text-luxury-slate/60 leading-relaxed max-w-4xl mx-auto mb-16 font-light italic"
              >
                A refined digital assistant that welcomes couples, responds
                instantly, collects details, and guides them to book a
                consultation — all in your brand’s tone.
              </motion.p>

              <motion.div variants={fadeIn}>
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-luxury-slate text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-700 rounded-full shadow-2xl overflow-hidden"
                >
                  <span className="relative z-10">Add The Assistant to Your Website</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* VISUAL CHAT MOCKUP */}
        <section className="py-32 px-6 lg:px-12 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            {/* Chat Example */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mx-auto w-full max-w-[500px] group"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,23,42,0.2)] border border-luxury-gold/20 bg-luxury-champagne/10 relative">
                {/* Header */}
                <div className="bg-luxury-slate text-white px-8 py-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                      <ChevronLeft size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold uppercase tracking-[0.2em] text-luxury-gold">
                        Serafina Weddings
                      </div>
                      <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">
                        Smart Wedding Assistant
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-luxury-gold flex items-center justify-center text-luxury-slate">
                      <Sparkles size={20} />
                    </div>
                  </div>
                </div>

                {/* Conversation */}
                <div className="h-[480px] overflow-y-auto bg-white/80 backdrop-blur-sm px-8 py-10 space-y-8">
                  <div className="max-w-[85%]">
                    <div className="bg-white shadow-xl rounded-[2rem] p-6 border border-luxury-gold/10">
                      <p className="text-sm text-luxury-slate/70 leading-relaxed font-light">
                        Hi there 👋 I’m your Smart Wedding Assistant from <span className="font-bold text-luxury-slate">Serafina Weddings</span>.
                        We design elegant destination weddings across Italy. How can I assist you today?
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 pl-4">
                    {[
                      "View Planning Packages",
                      "Schedule a Consultation",
                      "See Our Favorite Venues",
                    ].map((label) => (
                      <motion.div 
                        key={label}
                        whileHover={{ x: 10 }}
                      >
                        <button
                          disabled
                          className="rounded-full bg-luxury-champagne/50 text-luxury-slate text-[10px] px-6 py-3 border border-luxury-gold/20 shadow-sm font-bold uppercase tracking-widest cursor-not-allowed"
                        >
                          {label}
                        </button>
                      </motion.div>
                    ))}
                  </div>

                  <div className="max-w-[85%] pt-4">
                    <div className="bg-white shadow-xl rounded-[2rem] p-6 border border-luxury-gold/10">
                      <p className="text-sm text-luxury-slate/70 leading-relaxed font-light italic">
                        Our full-service planning covers venue scouting, vendor
                        management, design, and coordination — everything for a
                        seamless celebration.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="bg-luxury-champagne/20 border-t border-luxury-gold/10 px-8 py-6">
                   <div className="h-12 bg-white rounded-full border border-luxury-gold/20 flex items-center px-6 text-[10px] uppercase tracking-widest text-luxury-slate/20 font-bold">
                      Type your message...
                   </div>
                </div>

                {/* Footnote */}
                <div className="bg-white/50 border-t border-luxury-gold/5 px-8 py-4 text-center">
                   <div className="text-[9px] uppercase tracking-[0.3em] font-bold text-luxury-gold/50">
                      Powered by Alta Frequenza Marketing
                   </div>
                </div>
              </div>

              {/* CTA under mockup */}
              <div className="mt-12 text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-luxury-gold hover:text-luxury-slate transition-all group"
                >
                  Request a Personalized Demo
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                </Link>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={staggerContainer}
            >
              <motion.p variants={fadeIn} className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-10 font-bold">
                EXPERIENCE
              </motion.p>
              <motion.h2 variants={fadeIn} className="text-4xl md:text-6xl font-serif text-luxury-slate mb-10 tracking-tight leading-tight">
                Elegant Conversations. <span className="text-luxury-gold italic">Instant Results.</span>
              </motion.h2>
              <motion.div variants={fadeIn} className="space-y-8 text-xl text-luxury-slate/60 font-light leading-relaxed font-light italic">
                <p>
                  Every couple wants to feel heard. The Smart Wedding Assistant™
                  responds instantly with warmth and clarity, reflecting your tone
                  perfectly.
                </p>
                <p>
                  It doesn’t just answer questions, it captures details, qualifies
                  interest, and guides couples to book a consultation at the ideal
                  moment.
                </p>
              </motion.div>
            </motion.div>
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
              WHY IT WORKS
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif mb-10 tracking-tight leading-tight"
            >
              Why The Assistant <span className="text-luxury-gold italic">Converts So Well</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 text-left mt-20">
               {[
                 { title: "Couples expect instant replies.", desc: "The planner who responds first usually earns the booking." },
                 { title: "It engages emotionally.", desc: "When excitement peaks, the Assistant keeps them connected." },
                 { title: "It sounds just like you.", desc: "Trained on your tone, your content, your elegance." },
                 { title: "It filters inquiries automatically.", desc: "You speak only with couples who are serious and aligned." }
               ].map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] group hover:bg-luxury-gold/10 transition-all duration-700"
                 >
                    <h3 className="text-xl font-serif mb-4 italic tracking-wide text-white group-hover:text-luxury-gold transition-colors">{item.title}</h3>
                    <p className="text-white/40 text-sm font-light leading-relaxed group-hover:text-white/60 transition-colors">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS (STEPS) */}
        <section className="px-6 lg:px-12 py-32 bg-luxury-champagne">
          <div className="max-w-5xl mx-auto text-center mb-24">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold mb-10"
            >
              HOW IT WORKS
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-serif text-luxury-slate mb-10 tracking-tight leading-tight"
            >
              A Seamless <span className="text-luxury-gold italic">Extension</span> of Your Brand
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {[
              {
                step: "01",
                title: "An Elegant First Impression",
                text: "A subtle, inviting chat bubble appears on your site, reflecting your brand identity."
              },
              {
                step: "02",
                title: "Smart Human-Like Conversations",
                text: "It answers naturally, with empathy and precision."
              },
              {
                step: "03",
                title: "Effortless Lead Capture",
                text: "It collects details and directs couples to book consultations seamlessly."
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
                <div className="text-luxury-gold font-serif italic text-6xl mb-10 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-[0.1em] text-luxury-slate mb-6">
                  {item.title}
                </h3>
                <p className="text-luxury-slate/50 font-light leading-relaxed text-sm italic">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PERSONALIZATION (BRAND PERSONALIZATION) */}
        <section className="px-6 lg:px-12 py-32 bg-white text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10 font-light">
            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-10 font-bold"
            >
              BRAND PERSONALIZATION
            </motion.p>
            <motion.h2 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-4xl md:text-7xl font-serif text-luxury-slate mb-12 tracking-tight leading-tight"
            >
              Built to <span className="text-luxury-gold italic">Speak Like You</span>
            </motion.h2>
            
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="space-y-10 text-xl text-luxury-slate/60 leading-relaxed font-light italic max-w-4xl mx-auto"
            >
              <p>
                Every Smart Wedding Assistant™ is custom-designed, trained on your
                brand’s language, your process, and the way you speak to couples.
              </p>
              <p>
                It learns your tone, your style, and how you explain your
                services. Within days, it becomes a natural extension of your
                business.
              </p>
              <p className="font-bold text-luxury-slate uppercase tracking-widest text-[10px] not-italic mt-10">
                The result is warm, natural conversations that build trust
                instantly.
              </p>
            </motion.div>
          </div>
        </section>

        {/* BENEFITS (KEY BENEFITS) */}
        <section className="px-6 lg:px-12 py-32 bg-luxury-slate text-white relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold mb-10"
              >
                KEY BENEFITS
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-7xl font-serif mb-12 tracking-tight"
              >
                Why Planners <span className="text-luxury-gold italic">Love It</span>
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {[
                { icon: <Clock size={32} />, title: "Reclaim Your Time", text: "Automate first-touch communication and focus on delivering exceptional events." },
                { icon: <CheckCircle size={32} />, title: "Capture Every Lead", text: "Instant responses across time zones turn late-night visitors into qualified inquiries." },
                { icon: <MessageSquare size={32} />, title: "Guide Couples Smoothly", text: "Structured, helpful conversations lead couples toward booking naturally." },
                { icon: <Sparkles size={32} />, title: "Elevate Brand Perception", text: "Fast, elegant communication reinforces professionalism and trust." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-3xl p-12 rounded-[4rem] border border-white/10 group hover:border-luxury-gold/50 transition-all duration-700"
                >
                  <div className="text-luxury-gold mb-10 group-hover:scale-110 transition-transform">
                     {item.icon}
                  </div>
                  <h3 className="text-3xl font-serif mb-6 italic tracking-wide group-hover:text-luxury-gold transition-colors">{item.title}</h3>
                  <p className="text-white/40 text-lg font-light leading-relaxed font-light group-hover:text-white/60 transition-colors">{item.text}</p>
                </motion.div>
              ))}
            </div>
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
              Offer Instant, <span className="text-luxury-gold italic">Personalized</span> Service
            </motion.h2>

            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="text-xl text-luxury-slate/40 mb-20 font-light leading-relaxed max-w-4xl mx-auto italic"
            >
              Stop losing inquiries to slow responses. Your Smart Wedding
              Assistant™ becomes a warm first touchpoint that never sleeps.
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
                  Request Your Free Demo
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
