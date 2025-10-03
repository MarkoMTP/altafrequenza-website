import { Target, TrendingUp, CheckCircle, ArrowRight, Search, BarChart, Users, Sparkles } from 'lucide-react';

interface GrowthSystemPageProps {
  onNavigate: (page: string) => void;
}

export default function GrowthSystemPage({ onNavigate }: GrowthSystemPageProps) {
  return (
    <div className="bg-white pt-20">
      <section className="min-h-[70vh] flex items-center justify-center px-6 lg:px-12 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 border border-neutral-200 text-sm tracking-wide text-neutral-600">
            <TrendingUp size={16} className="text-amber-600" />
            Google Ads for Luxury Wedding Planners
          </div>

          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8 text-neutral-900">
            Wedding Planner<br />Growth System™
          </h1>

          <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto mb-12">
            Precision-targeted Google Ads campaigns designed exclusively for luxury wedding planners. We position you in front of high-net-worth couples actively searching for elevated planning services.
          </p>

          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 text-white text-lg tracking-wide hover:bg-neutral-800 transition-all"
          >
            Start Growing Your Luxury Client Base
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-neutral-500 mb-4">THE PROBLEM</p>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
              Most Wedding Planners Are<br />Wasting Money on Google Ads
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 border border-neutral-200">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">Generic Targeting</h3>
              <p className="text-neutral-700 leading-relaxed">
                Most campaigns cast too wide a net, attracting budget-conscious couples who can't afford premium services.
              </p>
            </div>

            <div className="bg-white p-8 border border-neutral-200">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">Poor Landing Pages</h3>
              <p className="text-neutral-700 leading-relaxed">
                Clicks are expensive. Generic landing pages fail to convert luxury-minded couples into qualified leads.
              </p>
            </div>

            <div className="bg-white p-8 border border-neutral-200">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">No Luxury Positioning</h3>
              <p className="text-neutral-700 leading-relaxed">
                Ad copy that doesn't speak to affluent couples results in clicks from the wrong audience—wasting your budget.
              </p>
            </div>
          </div>

          <div className="bg-neutral-900 text-white p-12 text-center">
            <h3 className="text-3xl font-serif mb-4">The Alta Frequenza Difference</h3>
            <p className="text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto">
              We've spent years perfecting Google Ads strategies specifically for luxury wedding planners. Our campaigns are engineered to attract only high-net-worth couples who value exceptional service.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-neutral-500 mb-4">OUR APPROACH</p>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">
              How the Wedding Planner<br />Growth System™ Works
            </h2>
          </div>

          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-900 text-white mb-6">
                  <Search size={28} />
                </div>
                <h3 className="text-3xl font-serif text-neutral-900 mb-4">
                  1. Luxury-Specific Keyword Strategy
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  We don't target generic wedding planning searches. Our campaigns focus exclusively on high-intent, luxury-specific keywords that affluent couples actually use.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-neutral-700">"Luxury wedding planner [city]"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-neutral-700">"High-end destination wedding coordinator"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-neutral-700">"Elite wedding planning services"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-neutral-700">"Full-service luxury wedding planner"</span>
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-50 p-8 border border-neutral-200">
                <div className="bg-white p-6 border border-neutral-300 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">Ad</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-neutral-900 mb-1">
                        Elite Wedding Planning | Luxury Celebrations
                      </h4>
                      <p className="text-sm text-green-700 mb-2">www.yoursite.com/luxury-planning</p>
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        Discerning couples trust us to orchestrate flawless luxury weddings. Full-service planning for sophisticated celebrations.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 text-center italic">
                  Premium ad copy that speaks to affluent couples
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-neutral-50 p-8 border border-neutral-200">
                <div className="space-y-4">
                  <div className="bg-white p-6 border-l-4 border-amber-600">
                    <h4 className="font-medium text-neutral-900 mb-2">Premium Positioning</h4>
                    <p className="text-sm text-neutral-700">Sophisticated design that reflects luxury brand standards</p>
                  </div>
                  <div className="bg-white p-6 border-l-4 border-amber-600">
                    <h4 className="font-medium text-neutral-900 mb-2">Trust Signals</h4>
                    <p className="text-sm text-neutral-700">Testimonials, portfolio highlights, and social proof</p>
                  </div>
                  <div className="bg-white p-6 border-l-4 border-amber-600">
                    <h4 className="font-medium text-neutral-900 mb-2">Clear Value Proposition</h4>
                    <p className="text-sm text-neutral-700">Immediate clarity on your unique approach and expertise</p>
                  </div>
                  <div className="bg-white p-6 border-l-4 border-amber-600">
                    <h4 className="font-medium text-neutral-900 mb-2">Conversion Optimization</h4>
                    <p className="text-sm text-neutral-700">Strategic CTAs that guide couples to book consultations</p>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-900 text-white mb-6">
                  <Target size={28} />
                </div>
                <h3 className="text-3xl font-serif text-neutral-900 mb-4">
                  2. Conversion-Optimized Landing Pages
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  Every click is an investment. We design custom landing pages that convert luxury-minded couples into qualified consultation requests. No generic templates—only premium experiences.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Our landing pages are built with sophisticated design, compelling copy, and strategic calls-to-action that resonate with high-net-worth audiences.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-900 text-white mb-6">
                  <BarChart size={28} />
                </div>
                <h3 className="text-3xl font-serif text-neutral-900 mb-4">
                  3. Continuous Optimization & Analytics
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  We don't set and forget. Our team constantly monitors campaign performance, refines targeting, tests ad variations, and optimizes for maximum ROI.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-neutral-700">Weekly performance reviews and adjustments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-neutral-700">A/B testing of ad copy and landing page elements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-neutral-700">Detailed monthly reporting with actionable insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-neutral-700">Strategic recommendations based on data trends</span>
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-900 text-white p-8">
                <h4 className="text-2xl font-serif mb-6">Monthly Performance Report</h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-neutral-300">Qualified Leads</span>
                      <span className="text-3xl font-serif text-amber-600">47</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-2">
                      <div className="bg-amber-600 h-2" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-neutral-300">Consultation Bookings</span>
                      <span className="text-3xl font-serif text-amber-600">23</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-2">
                      <div className="bg-amber-600 h-2" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-neutral-300">Average Lead Quality Score</span>
                      <span className="text-3xl font-serif text-amber-600">8.6/10</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-2">
                      <div className="bg-amber-600 h-2" style={{width: '86%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-neutral-400 mb-4">WHAT'S INCLUDED</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Complete Growth System Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-800 p-8 border border-neutral-700">
              <Users className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-medium mb-3">Audience Research</h3>
              <p className="text-neutral-300 leading-relaxed">
                Deep analysis of your ideal luxury client demographics, behaviors, and search patterns.
              </p>
            </div>

            <div className="bg-neutral-800 p-8 border border-neutral-700">
              <Search className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-medium mb-3">Custom Keyword Strategy</h3>
              <p className="text-neutral-300 leading-relaxed">
                Luxury-specific keyword research and selection tailored to your market and services.
              </p>
            </div>

            <div className="bg-neutral-800 p-8 border border-neutral-700">
              <Sparkles className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-medium mb-3">Premium Ad Copy</h3>
              <p className="text-neutral-300 leading-relaxed">
                Sophisticated ad messaging that resonates with affluent couples and reflects your brand.
              </p>
            </div>

            <div className="bg-neutral-800 p-8 border border-neutral-700">
              <Target className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-medium mb-3">Landing Page Design</h3>
              <p className="text-neutral-300 leading-relaxed">
                Conversion-optimized landing pages with premium design and strategic CTAs.
              </p>
            </div>

            <div className="bg-neutral-800 p-8 border border-neutral-700">
              <BarChart className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-medium mb-3">Performance Tracking</h3>
              <p className="text-neutral-300 leading-relaxed">
                Comprehensive analytics setup and tracking to measure every aspect of campaign success.
              </p>
            </div>

            <div className="bg-neutral-800 p-8 border border-neutral-700">
              <TrendingUp className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-medium mb-3">Ongoing Optimization</h3>
              <p className="text-neutral-300 leading-relaxed">
                Continuous campaign refinement, A/B testing, and strategic improvements.
              </p>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-serif text-amber-600 mb-3">5x</div>
              <p className="text-neutral-300">Average ROI</p>
            </div>
            <div>
              <div className="text-5xl font-serif text-amber-600 mb-3">87%</div>
              <p className="text-neutral-300">Lead Quality Score</p>
            </div>
            <div>
              <div className="text-5xl font-serif text-amber-600 mb-3">3-5</div>
              <p className="text-neutral-300">Weeks to Results</p>
            </div>
            <div>
              <div className="text-5xl font-serif text-amber-600 mb-3">$65k</div>
              <p className="text-neutral-300">Avg. Budget per Client</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-neutral-500 mb-4">PRICING MODEL</p>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
              Performance-Based Partnership
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              We're so confident in our system that we only succeed when you do. No monthly retainers, no hidden fees—just results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-neutral-50 p-10 border border-neutral-200">
              <div className="text-5xl font-serif text-amber-600 mb-4">One-Time</div>
              <h3 className="text-2xl font-medium text-neutral-900 mb-6">Setup Investment</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                Your initial setup fee covers everything needed to launch a world-class Google Ads campaign designed specifically for your business.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-medium text-neutral-900">Custom Landing Page Design</div>
                    <p className="text-sm text-neutral-600">Premium, conversion-optimized page built for your brand</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-medium text-neutral-900">Complete Market Analysis</div>
                    <p className="text-sm text-neutral-600">Deep research into your market, competitors, and opportunities</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-medium text-neutral-900">Full Google Ads Setup</div>
                    <p className="text-sm text-neutral-600">Campaign structure, keyword research, ad copy, and tracking</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-medium text-neutral-900">Analytics Configuration</div>
                    <p className="text-sm text-neutral-600">Comprehensive tracking to measure every result</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-neutral-900 text-white p-10">
              <div className="text-5xl font-serif text-amber-600 mb-4">10%</div>
              <h3 className="text-2xl font-medium mb-6">Success Fee per Wedding Booked</h3>
              <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                We only earn when you book weddings through our system. No monthly retainers. No management fees. Just a simple success-based model that aligns our interests with yours.
              </p>

              <div className="bg-neutral-800 p-6 border border-neutral-700 mb-6">
                <h4 className="font-medium mb-4">How It Works:</h4>
                <ol className="space-y-3 text-neutral-300">
                  <li className="flex gap-3">
                    <span className="text-amber-600 font-serif flex-shrink-0">1.</span>
                    <span>Lead comes through our Google Ads campaign</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-600 font-serif flex-shrink-0">2.</span>
                    <span>You book the wedding with that couple</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-600 font-serif flex-shrink-0">3.</span>
                    <span>We receive 10% of your planning fee as our success fee</span>
                  </li>
                </ol>
              </div>

              <div className="bg-amber-600/10 border border-amber-600/30 p-6">
                <p className="text-neutral-200 leading-relaxed">
                  <span className="font-medium text-white">Example:</span> If you book a $25,000 wedding from a lead we generated, we earn $2,500. If you don't book any weddings, you pay nothing beyond the initial setup.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-8 mb-12">
            <h3 className="text-2xl font-serif text-neutral-900 mb-4">Why This Model Works</h3>
            <p className="text-lg text-neutral-800 leading-relaxed mb-4">
              Traditional agencies charge $3,000-$8,000 per month whether or not you get results. We're different. We're confident enough in our system that we tie our revenue directly to your success.
            </p>
            <p className="text-lg text-neutral-800 leading-relaxed">
              This means we're highly motivated to optimize every aspect of your campaign, ensure lead quality is exceptional, and continuously improve performance. Your success is literally our success.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-serif text-neutral-900 mb-6">
              Ready to Grow Your Business<br />Without the Risk?
            </h3>
            <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Schedule a strategy session to learn more about our performance-based model and how we can help you consistently attract luxury wedding clients.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 text-white text-lg tracking-wide hover:bg-neutral-800 transition-all"
            >
              Book Your Strategy Session
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
