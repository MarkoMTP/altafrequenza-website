import { MessageSquare, Clock, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

interface AssistantPageProps {
  onNavigate: (page: string) => void;
}

export default function AssistantPage({ onNavigate }: AssistantPageProps) {
  return (
    <div className="bg-white pt-20">
      <section className="min-h-[70vh] flex items-center justify-center px-6 lg:px-12 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 border border-neutral-200 text-sm tracking-wide text-neutral-600">
            <Sparkles size={16} className="text-amber-600" />
            AI-Powered Website Assistant
          </div>

          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8 text-neutral-900">
            AI Planner's Assistant™
          </h1>

          <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto mb-12">
            A 24/7 intelligent chatbot that answers frequently asked questions, guides couples through your services, and ensures no inquiry goes unanswered—even when you're unavailable.
          </p>

          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 text-white text-lg tracking-wide hover:bg-neutral-800 transition-all"
          >
            Add the AI Planner's Assistant™ to Your Website
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-white border border-neutral-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-200">
                <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center">
                  <MessageSquare size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-medium text-neutral-900">Chat with us</div>
                  <div className="text-sm text-green-600 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Online now
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">👰</span>
                  </div>
                  <div className="flex-1 bg-neutral-100 rounded-2xl rounded-tr-none p-4">
                    <p className="text-neutral-800 text-sm">
                      Do you handle destination weddings?
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0">
                    <Sparkles size={16} className="text-white" />
                  </div>
                  <div className="flex-1 bg-amber-600 text-white rounded-2xl rounded-tl-none p-4">
                    <p className="text-sm">
                      Absolutely! We specialize in destination weddings and have coordinated celebrations in Italy, France, Mexico, and throughout the Caribbean. We handle all logistics, vendor coordination, and guest management.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">👰</span>
                  </div>
                  <div className="flex-1 bg-neutral-100 rounded-2xl rounded-tr-none p-4">
                    <p className="text-neutral-800 text-sm">
                      What's included in your full-service planning?
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0">
                    <Sparkles size={16} className="text-white" />
                  </div>
                  <div className="flex-1 bg-amber-600 text-white rounded-2xl rounded-tl-none p-4">
                    <p className="text-sm">
                      Our full-service planning includes venue selection, vendor curation, budget management, design & styling, timeline creation, day-of coordination, and unlimited consultations. We're with you from engagement to send-off!
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-neutral-200">
                <input
                  type="text"
                  placeholder="Type your message..."
                  disabled
                  className="flex-1 px-4 py-2 border border-neutral-300 rounded-full text-sm text-neutral-400"
                />
                <button disabled className="px-4 py-2 bg-neutral-300 text-white rounded-full text-sm">
                  Send
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
                Instant Answers, Anytime
              </h2>
              <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
                <p>
                  High-net-worth couples expect immediate responses. If they visit your website at midnight with questions about your services, they won't wait until morning for answers—they'll move on to a competitor.
                </p>
                <p>
                  The AI Planner's Assistant™ ensures every visitor receives instant, accurate responses to common questions about your services, pricing, availability, and process. It's like having a knowledgeable assistant available 24/7.
                </p>
                <p>
                  By providing immediate value and guidance, the Assistant keeps couples engaged, builds trust, and dramatically increases the likelihood they'll book a consultation with you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-neutral-500 mb-4">HOW IT WORKS</p>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">
              Seamlessly Integrated<br />Into Your Website Experience
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <div className="text-5xl font-serif text-amber-600 mb-4">01</div>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">Couple Visits Website</h3>
              <p className="text-neutral-700 leading-relaxed">
                A sophisticated chat widget appears on your website. It's elegant, unobtrusive, and on-brand—no generic chatbot look here.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <div className="text-5xl font-serif text-amber-600 mb-4">02</div>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">AI Provides Answers</h3>
              <p className="text-neutral-700 leading-relaxed">
                The AI Assistant answers questions about your services, packages, process, and availability based on the information you've provided.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <div className="text-5xl font-serif text-amber-600 mb-4">03</div>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">Smooth Handoff</h3>
              <p className="text-neutral-700 leading-relaxed">
                When ready, the AI seamlessly transitions the couple to book a consultation or speak with you directly. No friction, no lost leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-neutral-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-neutral-400 mb-4">KEY BENEFITS</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Why You Need an AI Assistant<br />on Your Website
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-800 p-8 border border-neutral-700">
              <Clock className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-medium mb-3">Save Countless Hours</h3>
              <p className="text-neutral-300 leading-relaxed">
                Stop answering the same questions repeatedly. The AI handles FAQs automatically, freeing you to focus on consultations and creating weddings.
              </p>
            </div>

            <div className="bg-neutral-800 p-8 border border-neutral-700">
              <CheckCircle className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-medium mb-3">Never Lose a Lead</h3>
              <p className="text-neutral-300 leading-relaxed">
                Couples visiting your site at 3 AM get immediate answers. No more losing high-quality leads simply because you were asleep or busy.
              </p>
            </div>

            <div className="bg-neutral-800 p-8 border border-neutral-700">
              <MessageSquare className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-medium mb-3">Guide the Journey</h3>
              <p className="text-neutral-300 leading-relaxed">
                The Assistant actively guides couples through your services, helping them understand your value and positioning you as the expert.
              </p>
            </div>

            <div className="bg-neutral-800 p-8 border border-neutral-700">
              <Sparkles className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-medium mb-3">Premium Brand Experience</h3>
              <p className="text-neutral-300 leading-relaxed">
                Sophisticated, instant responses elevate your brand. Couples perceive you as professional, accessible, and technologically advanced.
              </p>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-serif text-amber-600 mb-3">40%</div>
              <p className="text-neutral-300">Increase in Consultation Bookings</p>
            </div>
            <div>
              <div className="text-5xl font-serif text-amber-600 mb-3">90%</div>
              <p className="text-neutral-300">Questions Answered Instantly</p>
            </div>
            <div>
              <div className="text-5xl font-serif text-amber-600 mb-3">24/7</div>
              <p className="text-neutral-300">Availability for Couples</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-neutral-500 mb-4">COMMON USE CASES</p>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">
              Questions the AI Assistant<br />Handles Effortlessly
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-50 p-6 border-l-4 border-amber-600">
              <p className="text-neutral-800 italic">"Do you handle destination weddings?"</p>
            </div>
            <div className="bg-neutral-50 p-6 border-l-4 border-amber-600">
              <p className="text-neutral-800 italic">"What's included in full-service planning?"</p>
            </div>
            <div className="bg-neutral-50 p-6 border-l-4 border-amber-600">
              <p className="text-neutral-800 italic">"How far in advance should we book?"</p>
            </div>
            <div className="bg-neutral-50 p-6 border-l-4 border-amber-600">
              <p className="text-neutral-800 italic">"What's your pricing structure?"</p>
            </div>
            <div className="bg-neutral-50 p-6 border-l-4 border-amber-600">
              <p className="text-neutral-800 italic">"Do you work with specific vendors?"</p>
            </div>
            <div className="bg-neutral-50 p-6 border-l-4 border-amber-600">
              <p className="text-neutral-800 italic">"Can you help with day-of coordination only?"</p>
            </div>
          </div>

          <div className="mt-12 bg-amber-50 p-8 border border-amber-200 text-center">
            <p className="text-lg text-neutral-800 leading-relaxed">
              The AI Assistant is trained on your specific services, packages, and process.<br />
              <span className="font-medium">Every answer is accurate, on-brand, and personalized to your business.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
            Provide Instant, Premium Service<br />Around the Clock
          </h2>
          <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
            Stop losing leads to slow response times. Let your AI Planner's Assistant™ engage couples, answer questions, and guide them toward booking a consultation—even while you sleep.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 text-white text-lg tracking-wide hover:bg-neutral-800 transition-all"
          >
            Add the AI Planner's Assistant™ to Your Website
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
