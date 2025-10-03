import { MessageCircle, CheckCircle, ArrowRight, Sparkles, Filter } from 'lucide-react';

interface ConciergePageProps {
  onNavigate: (page: string) => void;
}

export default function ConciergePage({ onNavigate }: ConciergePageProps) {
  return (
    <div className="bg-white pt-20">
      <section className="min-h-[70vh] flex items-center justify-center px-6 lg:px-12 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 border border-neutral-200 text-sm tracking-wide text-neutral-600">
            <Sparkles size={16} className="text-amber-600" />
            AI-Powered Lead Capture
          </div>

          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8 text-neutral-900">
            AI Wedding Concierge™
          </h1>

          <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto mb-12">
            Transform your website into a 24/7 lead generation machine. Our AI Wedding Concierge engages couples in natural conversation, captures essential details, and delivers perfectly qualified leads to your inbox.
          </p>

          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 text-white text-lg tracking-wide hover:bg-neutral-800 transition-all"
          >
            Add the AI Wedding Concierge™ to Your Website
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
                The Future of Lead Capture
              </h2>
              <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
                <p>
                  Traditional contact forms are impersonal and often incomplete. High-net-worth couples expect a personalized experience from the moment they discover your brand.
                </p>
                <p>
                  The AI Wedding Concierge™ creates an engaging, conversational experience that feels like chatting with your personal assistant. It asks the right questions, understands context, and captures detailed information that helps you prepare for your first consultation.
                </p>
                <p>
                  Best of all? It works 24/7, never takes a day off, and ensures you never lose a lead due to delayed responses.
                </p>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 p-8 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageCircle size={20} className="text-neutral-600" />
                  </div>
                  <div className="flex-1 bg-neutral-100 rounded-2xl rounded-tl-none p-4">
                    <p className="text-neutral-800">
                      Hello! I'm planning a wedding and would love to learn more about your services. 💍
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 flex-row-reverse">
                  <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles size={20} className="text-white" />
                  </div>
                  <div className="flex-1 bg-amber-600 text-white rounded-2xl rounded-tr-none p-4">
                    <p>
                      Wonderful! I'd be delighted to help. May I start by asking about your wedding date and location?
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageCircle size={20} className="text-neutral-600" />
                  </div>
                  <div className="flex-1 bg-neutral-100 rounded-2xl rounded-tl-none p-4">
                    <p className="text-neutral-800">
                      June 15, 2026 in Napa Valley. We're thinking around 150 guests.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 flex-row-reverse">
                  <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles size={20} className="text-white" />
                  </div>
                  <div className="flex-1 bg-amber-600 text-white rounded-2xl rounded-tr-none p-4">
                    <p>
                      Beautiful choice! Napa Valley is stunning. What's your approximate budget range for planning services?
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200">
                  <p className="text-sm text-neutral-500 italic text-center">
                    Natural conversation that captures critical details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-700 text-sm tracking-wide text-neutral-300 mb-6">
              <Filter size={16} className="text-amber-600" />
              Exclusive Feature
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Automatic Lead Quality Scoring
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Not all leads are created equal. Our AI intelligently analyzes every conversation and assigns quality scores so you know exactly where to focus your time.
            </p>
          </div>

          <div className="bg-neutral-800 border border-neutral-700 p-10 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between p-6 bg-green-900/30 border border-green-700 rounded">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-lg">Sarah & Michael Chen</div>
                    <div className="text-sm text-neutral-400">June 2026 • Napa Valley • 150 guests</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-serif text-green-500">High Quality</div>
                  <div className="text-sm text-neutral-400">Budget: $50k+ • Ready to book</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-6 bg-yellow-900/20 border border-yellow-700 rounded">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-lg">Jessica Thompson</div>
                    <div className="text-sm text-neutral-400">September 2026 • Local • 100 guests</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-serif text-yellow-500">Medium Quality</div>
                  <div className="text-sm text-neutral-400">Budget: TBD • Exploring options</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-6 bg-neutral-700/30 border border-neutral-600 rounded">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-neutral-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-lg">Anonymous Visitor</div>
                    <div className="text-sm text-neutral-400">Date TBD • Just browsing</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-serif text-neutral-500">Low Quality</div>
                  <div className="text-sm text-neutral-400">Early research phase</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-neutral-700">
              <p className="text-center text-neutral-300 text-lg">
                Instantly see which inquiries deserve your immediate attention
              </p>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-serif text-amber-600 mb-3">85%</div>
              <p className="text-neutral-300">Time Saved on Qualification</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-serif text-amber-600 mb-3">3x</div>
              <p className="text-neutral-300">More High-Quality Leads</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-serif text-amber-600 mb-3">24/7</div>
              <p className="text-neutral-300">Lead Capture Coverage</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-neutral-500 mb-4">KEY BENEFITS</p>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">
              Why Top Planners Choose<br />AI Wedding Concierge™
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <CheckCircle className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-medium text-neutral-900 mb-3">Never Miss a Lead</h3>
              <p className="text-neutral-700 leading-relaxed">
                Your AI Concierge is always on, engaging couples the moment they visit your site—even at 2 AM on a Sunday. No more lost opportunities due to delayed responses.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <CheckCircle className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-medium text-neutral-900 mb-3">Capture Detailed Information</h3>
              <p className="text-neutral-700 leading-relaxed">
                Through natural conversation, the AI gathers wedding date, location, guest count, budget, style preferences, and more—giving you everything you need before the first call.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <CheckCircle className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-medium text-neutral-900 mb-3">Automatic Prioritization</h3>
              <p className="text-neutral-700 leading-relaxed">
                The built-in quality scoring system instantly identifies which leads are serious, high-budget couples versus casual browsers, so you invest time wisely.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <CheckCircle className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-medium text-neutral-900 mb-3">Seamless Integration</h3>
              <p className="text-neutral-700 leading-relaxed">
                The AI Concierge integrates beautifully with your existing website and brand. Couples experience a premium, personalized interaction that elevates your brand.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <CheckCircle className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-medium text-neutral-900 mb-3">Mobile Optimized</h3>
              <p className="text-neutral-700 leading-relaxed">
                Most luxury couples browse on their phones. The AI Concierge works flawlessly on all devices, ensuring a premium experience regardless of how they find you.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <CheckCircle className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-medium text-neutral-900 mb-3">Data & Insights</h3>
              <p className="text-neutral-700 leading-relaxed">
                Access detailed analytics on lead sources, conversation patterns, and conversion rates. Use this data to continuously refine your marketing strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
            Transform Your Website into a<br />Lead Generation Powerhouse
          </h2>
          <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
            Join the elite wedding planners using AI technology to capture more leads, save time, and focus on what matters most—creating unforgettable weddings.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 text-white text-lg tracking-wide hover:bg-neutral-800 transition-all"
          >
            Add the AI Wedding Concierge™ to Your Website
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
