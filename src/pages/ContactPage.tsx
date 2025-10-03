import { useState } from 'react';
import { Mail, Phone, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    services: [] as string[],
    question: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <div className="bg-white pt-20">
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-neutral-500 mb-4">GET IN TOUCH</p>
            <h1 className="text-5xl md:text-7xl font-serif text-neutral-900 mb-6">
              Book Your Strategy Session
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Ready to attract more luxury couples and grow your wedding planning business? Schedule a complimentary consultation to discover how we can help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-neutral-900 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-neutral-900 mb-2">
                      Website URL *
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      required
                      placeholder="https://yourwebsite.com"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-900 mb-3">
                      Which services interest you? *
                    </label>
                    <div className="space-y-3">
                      {[
                        'Wedding Planner Growth System™ (Google Ads)',
                        'The Wedding Planner Social Media Package™',
                        'AI Wedding Concierge™',
                        "AI Planner's Assistant™",
                        'Not sure - I need guidance'
                      ].map((service) => (
                        <label key={service} className="flex items-start gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service)}
                            onChange={() => handleServiceChange(service)}
                            className="mt-1 w-4 h-4 border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                          />
                          <span className="text-neutral-700 group-hover:text-neutral-900 transition-colors">
                            {service}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="question" className="block text-sm font-medium text-neutral-900 mb-2">
                      What is your most important question? *
                    </label>
                    <textarea
                      id="question"
                      name="question"
                      required
                      rows={4}
                      placeholder="Tell us what you'd like to know most about working together..."
                      value={formData.question}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-neutral-900 text-white text-base tracking-wide hover:bg-neutral-800 transition-colors"
                  >
                    Submit Inquiry
                  </button>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 p-12 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-serif text-neutral-900 mb-4">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    We've received your inquiry and one of our luxury wedding marketing specialists will be in touch within 24 hours to schedule your complimentary strategy session.
                  </p>
                  <p className="text-sm text-neutral-600">
                    We're excited to help you attract more high-net-worth couples and grow your planning business.
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-neutral-50 p-8 border border-neutral-200">
                <h3 className="text-2xl font-serif text-neutral-900 mb-6">
                  What to Expect
                </h3>
                <div className="space-y-4 text-neutral-700">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <span className="font-medium">Complimentary 45-minute consultation</span> to discuss your business goals and marketing challenges
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <span className="font-medium">Custom strategy recommendations</span> tailored specifically to your wedding planning business
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <span className="font-medium">Clear pricing and timeline</span> for implementing your marketing solution
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <span className="font-medium">No pressure, no obligation</span>—just honest advice from luxury wedding marketing experts
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-900 text-white p-8">
                <h3 className="text-xl font-serif mb-6">
                  Prefer to Connect Directly?
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:hello@altafrequenza.com"
                    className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors"
                  >
                    <Mail size={20} />
                    hello@altafrequenza.com
                  </a>
                  <a
                    href="tel:+15551234567"
                    className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors"
                  >
                    <Phone size={20} />
                    (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="border border-neutral-200 p-8">
                <p className="text-sm text-neutral-600 leading-relaxed italic">
                  "Working with Alta Frequenza has been transformational for our business. Within six months, we've doubled our luxury bookings and our average wedding budget has increased by 180%. The team truly understands the high-end wedding market."
                </p>
                <div className="mt-4">
                  <div className="font-medium text-neutral-900">Isabella Martinez</div>
                  <div className="text-sm text-neutral-600">Founder, Bella Notte Events</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
