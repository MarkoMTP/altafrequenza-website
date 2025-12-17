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

  return (
    <>
      <Helmet>
        <title>Apply for a Marketing Partnership | Alta Frequenza</title>
        <meta
          name="description"
          content="Apply to work with Alta Frequenza as your dedicated wedding marketing partner. End-to-end marketing for wedding planners and venues."
        />
        <meta
          name="keywords"
          content="wedding planner marketing, wedding marketing partner, social media for wedding planners, Google Ads wedding planners, wedding venue marketing"
        />
      </Helmet>

      <div className="bg-white pt-20 overflow-x-hidden">
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-24">
          <div className="max-w-6xl mx-auto w-full">
            {/* Header */}
            <div className="text-center mb-16">
              <p className="text-sm tracking-widest text-slate-500 mb-4">
                PARTNERSHIP APPLICATION
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-slate-900 mb-6">
                Contact Us
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Use this form to start a private conversation.
              </p>
            </div>

            {/* Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* LEFT — FORM */}
              <div className="bg-slate-50 p-8 border border-slate-200 rounded-2xl shadow-sm">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-20">
                    <CheckCircle className="text-sky-600 mb-4" size={48} />
                    <h3 className="text-2xl font-serif mb-2">
                      Application Received
                    </h3>
                    <p className="text-slate-600 max-w-md">
                      I’ll personally review your application and get back to
                      you shortly with next steps.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-slate-700 mb-2 font-medium">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full p-3 border border-slate-300 focus:border-sky-600 outline-none"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 mb-2 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-slate-300 focus:border-sky-600 outline-none"
                        placeholder="you@yourcompany.com"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 mb-2 font-medium">
                        Website or Instagram
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full p-3 border border-slate-300 focus:border-sky-600 outline-none"
                        placeholder="https://"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 mb-3 font-medium">
                        What are you interested in?
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
                        {[
                          "Your Marketing Partner (Full Management)",
                          "Wedding Growth System™ (Google Ads)",
                          "Elegant Presence™ (Social Media)",
                          "AI Wedding Assistant™",
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
                              className="accent-sky-600"
                            />
                            <span>{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-700 mb-2 font-medium">
                        Tell me about your situation
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 border border-slate-300 focus:border-sky-600 outline-none resize-none"
                        placeholder="Where are you currently stuck? What would you like your marketing to look like in 6–12 months?"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-slate-900 text-white text-lg font-medium hover:bg-slate-800 transition-all"
                    >
                      {loading ? "Submitting..." : "Submit Application"}
                    </button>
                  </form>
                )}
              </div>

              {/* RIGHT — INFO */}
              <div className="space-y-8">
                <div className="bg-slate-50 p-8 border border-slate-200 rounded-2xl">
                  <h3 className="text-2xl font-serif text-slate-900 mb-6">
                    What Happens Next
                  </h3>
                  <ul className="space-y-4 text-slate-700">
                    <li>
                      <strong>Personal review</strong> of your application and
                      current positioning.
                    </li>
                    <li>
                      A <strong>private strategy call</strong> if it looks like
                      a strong fit.
                    </li>
                    <li>
                      Clear recommendation on whether working together makes
                      sense.
                    </li>
                    <li>No pressure, no long-term contracts.</li>
                  </ul>
                </div>

                <div className="bg-slate-900 text-white p-8 rounded-2xl">
                  <h3 className="text-xl font-serif mb-6">
                    Prefer to Reach Out Directly?
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:contact@altafrequenzamarketing.com"
                      className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors break-all"
                    >
                      <Mail size={20} />
                      contact@altafrequenzamarketing.com
                    </a>
                  </div>

                  <div className="mt-8">
                    <a
                      href="https://calendly.com/contact-altafrequenzamarketing/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 w-full px-6 py-4 bg-sky-600 text-white text-lg font-medium hover:bg-sky-700 transition-all"
                    >
                      <Calendar size={22} />
                      Book a Call Instead
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
