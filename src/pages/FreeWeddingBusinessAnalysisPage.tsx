import { useState, type ChangeEvent, type FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Instagram,
  Monitor,
  Search,
  Send,
  Sparkles,
} from "lucide-react";

type AnalysisFormData = {
  name: string;
  companyName: string;
  email: string;
  website: string;
  instagram: string;
  location: string;
};

type AnalysisFormErrors = Partial<Record<keyof AnalysisFormData, string>>;

const initialFormData: AnalysisFormData = {
  name: "",
  companyName: "",
  email: "",
  website: "",
  instagram: "",
  location: "",
};

const MAKE_CONTACT_WEBHOOK =
  "https://hook.eu1.make.com/zubnxprtsdih2pw7trnpw4eyl1cdtl4q";

const analysisItems = [
  {
    icon: Monitor,
    title: "Website Review",
    description:
      "We'll look at your website structure, messaging, user journey, and whether it builds enough trust to turn visitors into serious enquiries.",
  },
  {
    icon: Instagram,
    title: "Instagram & Social Presence",
    description:
      "We'll review how your social presence supports your positioning and whether it helps high-budget couples understand the value of your work.",
  },
  {
    icon: Search,
    title: "Google Visibility",
    description:
      "We'll check your general visibility on Google, including how easy it is for couples to find you when searching for wedding planners, venues, or destination wedding services in your market.",
  },
];

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14 } },
};

const getWebsiteUrl = (value: string) => {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "";
  }

  return /^https?:\/\//i.test(trimmedValue)
    ? trimmedValue
    : `https://${trimmedValue}`;
};

const isValidWebsite = (value: string) => {
  try {
    const url = new URL(getWebsiteUrl(value));
    return Boolean(url.hostname) && url.hostname.includes(".");
  } catch {
    return false;
  }
};

const isValidInstagram = (value: string) => {
  const trimmedValue = value.trim();
  const instagramUrl = /^(https?:\/\/)?(www\.)?instagram\.com\//i.test(
    trimmedValue,
  );

  if (instagramUrl) {
    try {
      const url = new URL(
        /^https?:\/\//i.test(trimmedValue)
          ? trimmedValue
          : `https://${trimmedValue}`,
      );
      const username = url.pathname.split("/").filter(Boolean)[0] ?? "";

      return (
        url.hostname.replace(/^www\./, "") === "instagram.com" &&
        /^[A-Za-z0-9._]{1,30}$/.test(username)
      );
    } catch {
      return false;
    }
  }

  const handle = trimmedValue.replace(/^@/, "");
  return /^[A-Za-z0-9._]{1,30}$/.test(handle);
};

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export default function FreeWeddingBusinessAnalysisPage() {
  const [formData, setFormData] = useState<AnalysisFormData>(initialFormData);
  const [errors, setErrors] = useState<AnalysisFormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateForm = () => {
    const nextErrors: AnalysisFormErrors = {};

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!isValidEmail(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.website.trim()) {
      nextErrors.website = "Please enter your website URL.";
    } else if (!isValidWebsite(formData.website)) {
      nextErrors.website = "Please enter a valid website URL.";
    }

    if (!formData.instagram.trim()) {
      nextErrors.instagram = "Please enter your Instagram handle or URL.";
    } else if (!isValidInstagram(formData.instagram)) {
      nextErrors.instagram =
        "Please enter a valid Instagram handle or Instagram URL.";
    }

    if (!formData.location.trim()) {
      nextErrors.location = "Please enter your main location or destination.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
    setSubmitError("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(false);
    setSubmitError("");

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const payload = {
      requestType: "Free Wedding Business Analysis Request",
      subject: "Free Wedding Business Analysis Request",
      email: formData.email.trim(),
      website: getWebsiteUrl(formData.website),
      instagram: formData.instagram.trim(),
      location: formData.location.trim(),
      name: formData.name.trim(),
      companyName: formData.companyName.trim(),
      submittedFrom: "/free-wedding-business-analysis",
    };

    try {
      const response = await fetch(MAKE_CONTACT_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
      setFormData(initialFormData);
    } catch (err) {
      console.error("Error:", err);
      setSubmitError(
        "Something went wrong while sending your request. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Free Wedding Business Analysis | Alta Frequenza</title>
        <meta
          name="description"
          content="Request a free recorded analysis of your wedding business website, Instagram presence, and Google visibility to see where better enquiries may be getting lost."
        />
        <meta
          property="og:title"
          content="Free Wedding Business Analysis | Alta Frequenza"
        />
        <meta
          property="og:description"
          content="Request a free recorded analysis of your wedding business website, Instagram presence, and Google visibility."
        />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/logo.png" />
      </Helmet>

      <div className="bg-luxury-champagne text-luxury-slate selection:bg-luxury-gold/30 pt-20 md:pt-24 min-h-screen font-light overflow-x-hidden">
        <section className="relative px-5 sm:px-6 lg:px-12 py-20 sm:py-28 lg:py-32 overflow-hidden border-b border-luxury-gold/5">
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-luxury-gold/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-luxury-ethereal/10 blur-[150px] rounded-full animate-pulse" />
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-7xl mx-auto relative z-10 text-center"
          >
            <motion.div
              variants={fadeIn}
              className="inline-flex max-w-full items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 glass border border-luxury-gold/20 text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.4em] text-luxury-gold mb-6 sm:mb-12 rounded-full font-bold shadow-sm leading-relaxed"
            >
              <Sparkles size={14} className="flex-shrink-0" />
              <span className="min-w-0">Recorded Business Analysis</span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-4xl sm:text-5xl md:text-8xl font-serif text-luxury-slate mb-6 sm:mb-10 leading-[1.05] tracking-tight"
            >
              Request Your Free{" "}
              <span className="text-luxury-gold italic">
                Wedding Business Analysis
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-base sm:text-xl md:text-2xl text-luxury-slate/60 leading-relaxed max-w-4xl mx-auto mb-6 font-light italic"
            >
              A recorded video analysis showing where your wedding business may
              be losing high-value enquiries across your website, Instagram, and
              Google visibility.
            </motion.p>

            <motion.p
              variants={fadeIn}
              className="text-sm sm:text-base md:text-lg text-luxury-slate/50 leading-relaxed max-w-4xl mx-auto mb-10 sm:mb-14 font-light"
            >
              We'll review your online presence from the perspective of a couple
              searching for a luxury or destination wedding expert. The analysis
              will look at your website, social media presence, Google
              visibility, positioning, and the overall enquiry journey - so you
              can see where better couples may be getting lost before they
              contact you.
            </motion.p>

            <motion.div variants={fadeIn}>
              <a
                href="#request-analysis"
                className="group relative inline-flex w-full sm:w-auto max-w-full items-center justify-center gap-3 sm:gap-4 px-5 sm:px-12 py-4 sm:py-6 bg-luxury-slate text-white text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.3em] font-bold hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-700 rounded-full shadow-2xl overflow-hidden leading-relaxed text-center"
              >
                <span className="relative z-10 min-w-0">
                  Request My Free Analysis
                </span>
                <ArrowRight
                  size={20}
                  className="relative z-10 flex-shrink-0 group-hover:translate-y-1 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              </a>
            </motion.div>
          </motion.div>
        </section>

        <section className="px-5 sm:px-6 lg:px-12 py-20 sm:py-28 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-12 sm:mb-20"
            >
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.24em] sm:tracking-[0.4em] text-luxury-gold font-bold mb-6">
                WHAT YOU WILL RECEIVE
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-luxury-slate tracking-tight leading-tight">
                What the analysis includes
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
            >
              {analysisItems.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeIn}
                    className="bg-luxury-champagne p-8 sm:p-10 border border-luxury-gold/10 rounded-[2rem] sm:rounded-[3rem] shadow-sm"
                  >
                    <div className="w-14 h-14 rounded-full bg-white border border-luxury-gold/15 flex items-center justify-center text-luxury-gold mb-8">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-luxury-slate mb-5 italic">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-luxury-slate/55 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section
          id="request-analysis"
          className="scroll-mt-24 px-5 sm:px-6 lg:px-12 py-20 sm:py-28 lg:py-32 relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute top-1/4 left-0 w-[420px] h-[420px] bg-luxury-gold/5 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-luxury-ethereal/10 blur-[130px] rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.24em] sm:tracking-[0.4em] text-luxury-gold font-bold mb-6">
                REQUEST THE ANALYSIS
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-luxury-slate mb-6 tracking-tight leading-tight">
                Request your free analysis
              </h2>
              <p className="text-base sm:text-xl text-luxury-slate/55 leading-relaxed font-light mb-10">
                Fill out the details below and we'll prepare a recorded video
                analysis of your wedding business presence.
              </p>

              <div className="bg-luxury-slate text-white p-8 sm:p-10 rounded-[2rem] sm:rounded-[3rem] relative overflow-hidden">
                <Globe
                  size={120}
                  className="absolute -right-4 -bottom-4 text-white/5"
                />
                <h3 className="text-2xl font-serif italic text-luxury-gold mb-6">
                  Reviewed like a real couple would browse
                </h3>
                <p className="text-white/55 leading-relaxed font-light">
                  The recording will focus on the public journey couples see
                  before they ever enquire: first impression, trust signals,
                  positioning, visibility, and the path toward contacting you.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white p-7 sm:p-10 lg:p-14 rounded-[2rem] sm:rounded-[3rem] border border-luxury-gold/10 shadow-[0_40px_100px_-30px_rgba(15,23,42,0.18)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                <Sparkles size={120} />
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="flex flex-col items-center justify-center text-center py-16 sm:py-20"
                  >
                    <div className="w-20 h-20 rounded-full bg-luxury-gold/15 flex items-center justify-center text-luxury-gold mb-8 border border-luxury-gold/20">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-serif text-luxury-slate mb-6 italic tracking-wide">
                      Thank you
                    </h3>
                    <p className="text-luxury-slate/55 max-w-lg font-light text-base sm:text-lg leading-relaxed">
                      Thank you — your request has been received. We'll review
                      your website, Instagram and Google visibility and prepare
                      your recorded analysis.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-8 relative z-10"
                  >
                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleFieldChange}
                      placeholder="you@yourcompany.com"
                      autoComplete="email"
                      error={errors.email}
                    />

                    <FormField
                      label="Website URL"
                      name="website"
                      type="url"
                      required
                      value={formData.website}
                      onChange={handleFieldChange}
                      placeholder="yourwebsite.com"
                      autoComplete="url"
                      error={errors.website}
                    />

                    <FormField
                      label="Instagram Handle or URL"
                      name="instagram"
                      required
                      value={formData.instagram}
                      onChange={handleFieldChange}
                      placeholder="@yourinstagram or instagram.com/yourinstagram"
                      error={errors.instagram}
                    />

                    <FormField
                      label="Location / Main Destination"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleFieldChange}
                      placeholder="Lake Como, Tuscany, New York..."
                      autoComplete="address-level2"
                      error={errors.location}
                    />

                    {submitError && (
                      <p className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
                        {submitError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative inline-flex items-center justify-center gap-4 w-full py-6 sm:py-7 bg-luxury-slate text-white text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.4em] font-bold rounded-full overflow-hidden hover:bg-luxury-gold hover:text-luxury-slate transition-all duration-700 shadow-2xl disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      <span className="relative z-10 flex items-center gap-4">
                        {loading ? "Submitting..." : "Submit Request"}
                        {!loading && (
                          <Send
                            size={19}
                            className="group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform duration-700"
                          />
                        )}
                      </span>
                      <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

type FormFieldProps = {
  label: string;
  name: keyof AnalysisFormData;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
};

function FormField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  autoComplete,
  error,
}: FormFieldProps) {
  return (
    <div className="space-y-3">
      <label
        htmlFor={name}
        className="text-[10px] font-bold uppercase tracking-[0.24em] sm:tracking-[0.3em] text-luxury-gold block ml-2"
      >
        {label}
        {required && <span className="text-luxury-slate/40"> *</span>}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full bg-luxury-champagne/20 border-b p-5 sm:p-6 text-luxury-slate placeholder:text-luxury-slate/25 outline-none transition-colors font-light ${
          error
            ? "border-red-300 focus:border-red-500"
            : "border-luxury-gold/20 focus:border-luxury-gold"
        }`}
        placeholder={placeholder}
      />
      {error && (
        <p id={`${name}-error`} className="ml-2 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
