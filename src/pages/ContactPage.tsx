import { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  const [isChatLoaded, setIsChatLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: "68dfc115f10b7f96bd9e1730" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        voice: { url: "https://runtime-api.voiceflow.com" },
        render: {
          mode: "embedded",
          target: document.getElementById("voiceflow-chat-embed"),
        },
      });
      // Simulate a small delay so the fade looks smoother
      setTimeout(() => setIsChatLoaded(true), 1200);
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-white pt-20">
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-24">
        <div className="max-w-6xl mx-auto w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-neutral-500 mb-4">
              GET IN TOUCH
            </p>
            <h1 className="text-5xl md:text-7xl font-serif text-neutral-900 mb-6">
              Book Your Strategy Session
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Ready to attract more luxury couples and grow your wedding
              planning business? Schedule a complimentary consultation to
              discover how we can help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left side — Voiceflow Chat Embed */}
            <div className="relative min-h-[750px] border border-neutral-200 rounded-lg shadow-sm flex items-center justify-center bg-neutral-50">
              {!isChatLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-500 animate-pulse">
                  <div className="w-10 h-10 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mb-4" />
                  <p className="text-sm uppercase tracking-wider">
                    Loading chat experience…
                  </p>
                </div>
              )}
              <div
                id="voiceflow-chat-embed"
                className={`w-full h-[750px] transition-opacity duration-700 ${
                  isChatLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            {/* Right side — Info section */}
            <div className="space-y-8">
              {/* What to Expect */}
              <div className="bg-neutral-50 p-8 border border-neutral-200">
                <h3 className="text-2xl font-serif text-neutral-900 mb-6">
                  What to Expect
                </h3>
                <div className="space-y-4 text-neutral-700">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <span className="font-medium">
                        Complimentary 45-minute consultation
                      </span>{" "}
                      to discuss your business goals and marketing challenges.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <span className="font-medium">
                        Custom strategy recommendations
                      </span>{" "}
                      tailored specifically to your wedding planning business.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <span className="font-medium">
                        Clear pricing and timeline
                      </span>{" "}
                      for implementing your marketing solution.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <span className="font-medium">
                        No pressure, no obligation
                      </span>{" "}
                      — just honest advice from luxury wedding marketing
                      experts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-neutral-900 text-white p-8">
                <h3 className="text-xl font-serif mb-6">
                  Prefer to Connect Directly?
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:contact@altafrequenzamarketing.com"
                    className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors"
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
              </div>

              {/* Testimonial */}
              <div className="border border-neutral-200 p-8">
                <p className="text-sm text-neutral-600 leading-relaxed italic">
                  "Working with Alta Frequenza has been transformational for our
                  business. Within six months, we've doubled our luxury bookings
                  and our average wedding budget has increased by 180%. The team
                  truly understands the high-end wedding market."
                </p>
                <div className="mt-4">
                  <div className="font-medium text-neutral-900">
                    Isabella Martinez
                  </div>
                  <div className="text-sm text-neutral-600">
                    Founder, Bella Notte Events
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
