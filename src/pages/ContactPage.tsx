import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Mail, Calendar, CheckCircle, ArrowRight, Sparkles, Send, Globe, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    website: "",
    services: [] as string[],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((s) => s !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(
        "https://hook.eu2.make.com/76g7wrs1orautc6x9rarqmbuv7b64356",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        website: "",
        services: [],
        message: "",
      });
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

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
          Contact Alta Frequenza | Wedding Planner & Venue Marketing
        </title>
        <meta
          name="description"
          content="Get in touch with Alta Frequenza to discuss Google Ads, social media management, websites and landing pages, AI lead capture, SEO, GEO, and marketing support for wedding planners and venues."
        />
        <meta
          name="keywords"
          content="contact wedding marketing agency, wedding planner marketing, wedding venue marketing, google ads wedding planners, social media wedding planners, wedding planner website design, SEO for wedding planners, GEO for wedding businesses"
        />
      </Helmet>

      <div className="bg-luxury-champagne text-luxury-slate selection:bg-luxury-gold/30 pt-24 min-h-screen font-light overflow-x-hidden">
        <section className="relative px-6 lg:px-12 py-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-luxury-gold/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-luxury-ethereal/10 blur-[150px] rounded-full animate-pulse" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header */}
            <div className="text-center mb-24">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-10 font-bold"
              >
                START THE CONVERSATION
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-9xl font-serif text-luxury-slate mb-12 tracking-tighter leading-tight"
              >
                Contact <span className="text-luxury-gold italic">Us</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-luxury-slate/50 max-w-4xl mx-auto leading-relaxed font-light italic"
              >
                Tell us a bit about your business and what kind of support
                you’re looking for. We’ll review it personally and get back to
                you with the best next step.
              </motion.p>
            </div>

            {/* Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
              {/* LEFT — FORM */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-7 bg-white p-12 lg:p-20 rounded-[4rem] border border-luxury-gold/10 shadow-[0_50px_100px_-20px_rgba(15,23,42,0.1)] relative"
              >
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                   <Sparkles size={120} />
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center py-20"
                    >
                      <div className="w-24 h-24 rounded-full bg-luxury-gold/20 flex items-center justify-center text-luxury-gold mb-10 border border-luxury-gold/20">
                        <CheckCircle size={48} />
                      </div>
                      <h3 className="text-4xl font-serif text-luxury-slate mb-6 italic tracking-wide">
                        Message Received
                      </h3>
                      <p className="text-luxury-slate/50 max-w-md font-light italic text-lg leading-relaxed">
                        Thanks for reaching out. We’ll review your message and get
                        back to you shortly with the best next step.
                      </p>
                    </motion.div>
                  ) : (
                    <form key="form" onSubmit={handleSubmit} className="space-y-12">
                      <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                          <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold block ml-2">
                             Full Name
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full bg-luxury-champagne/10 border-b border-luxury-gold/20 p-6 text-luxury-slate placeholder:text-luxury-slate/20 outline-none focus:border-luxury-gold transition-colors font-light"
                            placeholder="Your full name"
                          />
                        </div>

                        <div className="space-y-4">
                          <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold block ml-2">
                             Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-luxury-champagne/10 border-b border-luxury-gold/20 p-6 text-luxury-slate placeholder:text-luxury-slate/20 outline-none focus:border-luxury-gold transition-colors font-light"
                            placeholder="you@yourcompany.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold block ml-2">
                           Website or Instagram
                        </label>
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          className="w-full bg-luxury-champagne/10 border-b border-luxury-gold/20 p-6 text-luxury-slate placeholder:text-luxury-slate/20 outline-none focus:border-luxury-gold transition-colors font-light"
                          placeholder="https://"
                        />
                      </div>

                      <div className="space-y-8">
                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold block ml-2">
                           What are you interested in?
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {[
                            "Google Ads Management",
                            "Social Media Management",
                            "Websites & Landing Pages",
                            "AI Wedding Assistant",
                          ].map((service) => (
                            <label
                              key={service}
                              className={`flex items-center gap-4 group cursor-pointer p-5 rounded-2xl border transition-all duration-500 ${formData.services.includes(service) ? 'bg-luxury-slate text-white border-luxury-slate' : 'bg-white border-luxury-gold/10 hover:border-luxury-gold/50'}`}
                            >
                              <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${formData.services.includes(service) ? 'border-luxury-gold bg-luxury-gold' : 'border-luxury-gold/30'}`}>
                                {formData.services.includes(service) && <CheckCircle size={14} className="text-luxury-slate" />}
                              </div>
                              <input
                                type="checkbox"
                                value={service}
                                checked={formData.services.includes(service)}
                                onChange={handleChange}
                                className="hidden"
                              />
                              <span className="text-[10px] font-bold uppercase tracking-widest">{service}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold block ml-2">
                           Tell us a bit about your business
                        </label>
                        <textarea
                          name="message"
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-luxury-champagne/10 border border-luxury-gold/20 p-8 text-luxury-slate placeholder:text-luxury-slate/20 outline-none focus:border-luxury-gold transition-colors font-light resize-none rounded-[2rem]"
                          placeholder="What kind of weddings do you want more of? What feels inconsistent right now? Are you looking for more wedding requests, a stronger online presence, a better website, or better visibility through Google, SEO, or AI search?"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="group relative inline-flex items-center justify-center gap-6 w-full py-8 bg-luxury-slate text-white text-[10px] uppercase tracking-[0.5em] font-bold rounded-full overflow-hidden hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-700 shadow-2xl"
                      >
                        <span className="relative z-10 flex items-center gap-4">
                          {loading ? "Sending..." : "Send Message"}
                          {!loading && <Send size={20} className="group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700" />}
                        </span>
                        <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                      </button>
                    </form>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* RIGHT — INFO */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="lg:col-span-5 space-y-12"
              >
                <div className="bg-white p-12 rounded-[4rem] border border-luxury-gold/10 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:scale-110 transition-transform duration-1000">
                     <Award size={100} />
                  </div>
                  
                  <h3 className="text-3xl font-serif text-luxury-slate mb-10 italic border-l-2 border-luxury-gold pl-8">
                    What Happens Next
                  </h3>
                  <ul className="space-y-8">
                    {[
                      "We review your message, current online presence, and the way your business is positioned today.",
                      "If it looks like a strong fit, we invite you to a private strategy call.",
                      "You get a clear recommendation on what would make the most sense for your business.",
                      "No pressure, no complicated process, and no long term commitment required."
                    ].map((item, i) => (
                      <li key={i} className="flex gap-6 group">
                         <div className="text-luxury-gold font-serif italic text-xl">0{i+1}</div>
                         <p className="text-luxury-slate/50 text-base leading-relaxed font-light group-hover:text-luxury-slate transition-colors">
                           {item}
                         </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-luxury-slate text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                  <div className="absolute bottom-0 right-0 p-8 opacity-[0.05] group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-1000">
                     <Globe size={120} />
                  </div>

                  <h3 className="text-2xl font-serif mb-10 italic text-luxury-gold">
                    Prefer to Reach <span className="text-white">Out Directly?</span>
                  </h3>

                  <div className="space-y-10">
                    <a
                      href="mailto:contact@altafrequenzamarketing.com"
                      className="flex items-center gap-6 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-luxury-gold border border-white/10 group-hover:bg-luxury-gold group-hover:text-luxury-slate transition-all duration-500">
                        <Mail size={20} />
                      </div>
                      <span className="text-sm font-light tracking-widest text-white/60 group-hover:text-white transition-colors break-all">
                        contact@altafrequenzamarketing.com
                      </span>
                    </a>

                    <div className="pt-8">
                      <a
                        href="https://calendly.com/contact-altafrequenzamarketing/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center gap-6 w-full py-8 bg-white/5 border border-white/10 text-white text-[10px] uppercase tracking-[0.4em] font-bold rounded-full overflow-hidden hover:bg-white hover:text-luxury-slate transition-all duration-700"
                      >
                        <span className="relative z-10 flex items-center gap-4">
                           <Calendar size={20} className="text-luxury-gold" />
                           Book a Strategy Call
                        </span>
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
