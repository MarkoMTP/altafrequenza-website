import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Mail, Phone, Calendar, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    website: "",
    services: [],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🔗 Replace with your Make.com webhook URL
  const WEBHOOK_URL = "https://hook.integromat.com/your-webhook-id";

  const handleChange = (e) => {
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

  const handleSubmit = async (e) => {
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
      console.error("Error submitting form:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Alta Frequenza Marketing</title>
        <meta
          name="description"
          content="Contact Alta Frequenza Marketing to book your personalized strategy session. We help luxury wedding planners attract high-end international couples through Google Ads, social media, and AI automation."
        />
        <meta
          name="keywords"
          content="wedding planner marketing, contact marketing agency, luxury wedding planner, destination wedding marketing, Google Ads for wedding planners, social media marketing for wedding planners"
        />
        <meta
          property="og:title"
          content="Contact | Alta Frequenza Marketing"
        />
        <meta
          property="og:description"
          content="Book your personalized strategy session with Alta Frequenza Marketing — helping wedding planners attract high-end international couples."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://altafrequenzamarketing.com/" />
        <meta
          property="og:image"
          content="https://altafrequenzamarketing.com/og-image.jpg"
        />
      </Helmet>
      <div className="bg-white pt-20 overflow-x-hidden">
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-24">
          <div className="max-w-6xl mx-auto w-full">
            {/* Header */}
            <div className="text-center mb-16">
              <p className="text-sm tracking-widest text-neutral-500 mb-4">
                LET’S TALK GROWTH
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-neutral-900 mb-6">
                Book Your Strategy Session
              </h1>
              <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Ready to scale your visibility and attract luxury couples who
                value exceptional service? Fill out the form below to get a
                personalized plan for your brand.
              </p>
            </div>

            {/* Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* LEFT SIDE — FORM */}
              <div className="bg-neutral-50 p-8 border border-neutral-200 rounded-lg shadow-sm">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-20">
                    <CheckCircle className="text-amber-600 mb-4" size={48} />
                    <h3 className="text-2xl font-serif mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-neutral-600 max-w-md">
                      We’ll be in touch shortly to schedule your strategy call.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-neutral-700 mb-2 font-medium">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full p-3 border border-neutral-300 focus:border-amber-600 outline-none"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-neutral-700 mb-2 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-neutral-300 focus:border-amber-600 outline-none"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-neutral-700 mb-2 font-medium">
                        Website
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full p-3 border border-neutral-300 focus:border-amber-600 outline-none"
                        placeholder="www.yourbrand.com"
                      />
                    </div>

                    {/* Services Checkboxes */}
                    <div>
                      <label className="block text-neutral-700 mb-3 font-medium">
                        Which services are you interested in?
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-neutral-700">
                        {[
                          "Social Media Management",
                          "Social Media + Meta Growth System™",
                          "Wedding Planner Growth System™",
                          "The Wedding Planner AI Assistant™",
                        ].map((service) => (
                          <label
                            key={service}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              value={service}
                              checked={formData.services.includes(service)}
                              onChange={handleChange}
                              className="accent-amber-600"
                            />
                            <span>{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-neutral-700 mb-2 font-medium">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full p-3 border border-neutral-300 focus:border-amber-600 outline-none resize-none"
                        placeholder="Tell us a bit about your goals or challenges..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-neutral-900 text-white text-lg font-medium hover:bg-neutral-800 transition-all"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>

              {/* RIGHT SIDE — INFO */}
              <div className="space-y-8">
                <div className="bg-neutral-50 p-8 border border-neutral-200">
                  <h3 className="text-2xl font-serif text-neutral-900 mb-6">
                    What to Expect
                  </h3>
                  <ul className="space-y-4 text-neutral-700">
                    <li>
                      <span className="font-medium">
                        Complimentary 20-minute strategy session
                      </span>{" "}
                      to analyze your current marketing and identify growth
                      opportunities.
                    </li>
                    <li>
                      <span className="font-medium">
                        Clear, personalized recommendations
                      </span>{" "}
                      on how to attract high-budget international clients.
                    </li>
                    <li>
                      <span className="font-medium">Transparent pricing</span>{" "}
                      and next-step roadmap — no hidden costs or pressure.
                    </li>
                    <li>
                      <span className="font-medium">
                        Honest insights from experts
                      </span>{" "}
                      who specialize in marketing luxury wedding planners.
                    </li>
                  </ul>
                </div>

                <div className="bg-neutral-900 text-white p-8">
                  <h3 className="text-xl font-serif mb-6">
                    Prefer to Connect Directly?
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:contact@altafrequenzamarketing.com"
                      className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors break-all"
                    >
                      <Mail size={20} />
                      contact@altafrequenzamarketing.com
                    </a>
                    <a
                      href="tel:+15551234567"
                      className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors"
                    >
                      <Phone size={20} />
                      (555) 123-4567
                    </a>
                  </div>

                  <div className="mt-8">
                    <a
                      href="https://calendly.com/contact-altafrequenzamarketing/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 w-full px-6 py-4 bg-amber-600 text-white font-medium text-lg hover:bg-amber-700 transition-all"
                    >
                      <Calendar size={22} />
                      Book a Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
