import { Sparkles, Instagram, Image, Calendar, CheckCircle, ArrowRight, Heart, MessageCircle } from 'lucide-react';

interface SocialMediaPageProps {
  onNavigate: (page: string) => void;
}

export default function SocialMediaPage({ onNavigate }: SocialMediaPageProps) {
  return (
    <div className="bg-white pt-20">
      <section className="min-h-[70vh] flex items-center justify-center px-6 lg:px-12 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 border border-neutral-200 text-sm tracking-wide text-neutral-600">
            <Sparkles size={16} className="text-amber-600" />
            Social Media Marketing for Luxury Wedding Planners
          </div>

          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8 text-neutral-900">
            The Wedding Planner<br />Social Media Package™
          </h1>

          <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto mb-12">
            Sophisticated social media management that showcases your portfolio and attracts discerning couples. We craft content that reflects the elegance and exclusivity of your brand.
          </p>

          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 text-white text-lg tracking-wide hover:bg-neutral-800 transition-all"
          >
            Elevate Your Social Media Presence
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-neutral-500 mb-4">THE CHALLENGE</p>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
              Your Instagram Should Reflect<br />Your Luxury Brand Standards
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              High-net-worth couples research wedding planners extensively on social media. If your feed doesn't exude sophistication and expertise, you're losing clients before they even contact you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-neutral-200">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">Inconsistent Posting</h3>
              <p className="text-neutral-700 leading-relaxed">
                Sporadic content creates the impression of an inactive or unprofessional business. Luxury clients expect consistency.
              </p>
            </div>

            <div className="bg-white p-8 border border-neutral-200">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">Generic Content</h3>
              <p className="text-neutral-700 leading-relaxed">
                Stock photos and templated captions don't showcase your unique style or the caliber of weddings you create.
              </p>
            </div>

            <div className="bg-white p-8 border border-neutral-200">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">No Brand Story</h3>
              <p className="text-neutral-700 leading-relaxed">
                Without strategic storytelling, your social media becomes a disjointed collection of posts rather than a compelling brand narrative.
              </p>
            </div>

            <div className="bg-white p-8 border border-neutral-200">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">Low Engagement</h3>
              <p className="text-neutral-700 leading-relaxed">
                Beautiful photos alone aren't enough. You need strategic engagement tactics to build relationships with luxury audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-neutral-500 mb-4">OUR APPROACH</p>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">
              Editorial-Style Content That<br />Attracts Premium Clients
            </h2>
          </div>

          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-900 text-white mb-6">
                  <Image size={28} />
                </div>
                <h3 className="text-3xl font-serif text-neutral-900 mb-4">
                  1. Curated Visual Storytelling
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  We create Instagram feeds that look like they belong in Vogue. Every post is carefully curated to showcase your work with the sophistication it deserves.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-neutral-700">Professional photo selection and editing guidance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-neutral-700">Cohesive aesthetic that reflects luxury positioning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-neutral-700">Strategic showcase of high-end weddings and details</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-neutral-700">Behind-the-scenes content that builds trust</span>
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-50 p-6 border border-neutral-200">
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="aspect-square bg-neutral-200">
                    <img src="https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Wedding" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-neutral-200">
                    <img src="https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Wedding" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-neutral-200">
                    <img src="https://images.pexels.com/photos/2072179/pexels-photo-2072179.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Wedding" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-neutral-200">
                    <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Wedding" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-neutral-200">
                    <img src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Wedding" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-neutral-200">
                    <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Wedding" className="w-full h-full object-cover" />
                  </div>
                </div>
                <p className="text-sm text-neutral-600 text-center italic">
                  Cohesive, magazine-quality Instagram aesthetic
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white border border-neutral-200 p-6">
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-neutral-200">
                    <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center">
                      <Instagram size={20} />
                    </div>
                    <div>
                      <div className="font-medium text-neutral-900">YourPlanningCo</div>
                      <div className="text-sm text-neutral-600">Luxury Wedding Planner</div>
                    </div>
                  </div>

                  <div className="aspect-square bg-neutral-200 mb-4">
                    <img src="https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Wedding" className="w-full h-full object-cover" />
                  </div>

                  <div className="flex items-center gap-4 mb-3">
                    <Heart size={24} />
                    <MessageCircle size={24} />
                  </div>

                  <p className="text-sm text-neutral-800 mb-2">
                    <span className="font-medium">127 likes</span>
                  </p>

                  <p className="text-sm text-neutral-800">
                    <span className="font-medium">YourPlanningCo</span> When Sarah & James envisioned their Napa Valley celebration, every detail whispered elegance. From the hand-calligraphed invitations to the garden ceremony beneath centuries-old oaks, this was a wedding that honored both tradition and their unique love story. ✨
                  </p>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-900 text-white mb-6">
                  <Sparkles size={28} />
                </div>
                <h3 className="text-3xl font-serif text-neutral-900 mb-4">
                  2. Compelling Brand Storytelling
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  We craft captions that do more than describe photos—they tell the story of your expertise, your process, and the unforgettable experiences you create for couples.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-neutral-700">Sophisticated copy that resonates with affluent audiences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-neutral-700">Strategic hashtags to reach luxury wedding audiences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-neutral-700">Calls-to-action that drive consultation bookings</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-900 text-white mb-6">
                  <Calendar size={28} />
                </div>
                <h3 className="text-3xl font-serif text-neutral-900 mb-4">
                  3. Consistent, Strategic Posting
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  We manage your entire content calendar, ensuring consistent presence on Instagram and Pinterest—the two platforms where luxury couples spend the most time during wedding planning.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-neutral-700">4-5 Instagram posts per week with Stories and Reels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-neutral-700">Pinterest boards optimized for luxury wedding searches</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-neutral-700">Strategic posting times for maximum reach</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-neutral-700">Monthly content calendar with advance planning</span>
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-900 text-white p-8">
                <h4 className="text-2xl font-serif mb-6">Content Calendar Preview</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 pb-4 border-b border-neutral-700">
                    <div className="text-center flex-shrink-0">
                      <div className="text-amber-600 font-serif text-2xl">Mon</div>
                      <div className="text-neutral-400 text-sm">12</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-amber-600 mb-1">Instagram Post</div>
                      <div className="text-neutral-300 text-sm">Featured wedding highlight</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 pb-4 border-b border-neutral-700">
                    <div className="text-center flex-shrink-0">
                      <div className="text-amber-600 font-serif text-2xl">Wed</div>
                      <div className="text-neutral-400 text-sm">14</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-amber-600 mb-1">Instagram Reel</div>
                      <div className="text-neutral-300 text-sm">Behind-the-scenes planning</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-center flex-shrink-0">
                      <div className="text-amber-600 font-serif text-2xl">Fri</div>
                      <div className="text-neutral-400 text-sm">16</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-amber-600 mb-1">Instagram Post + Pinterest</div>
                      <div className="text-neutral-300 text-sm">Expert tip for couples</div>
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
            <p className="text-sm tracking-widest text-neutral-400 mb-4">PACKAGE INCLUDES</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Everything You Need for<br />Premium Social Media Presence
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-800 p-8 border border-neutral-700">
              <Instagram className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-medium mb-3">Instagram Management</h3>
              <p className="text-neutral-300 leading-relaxed">
                Complete Instagram strategy, content creation, posting, Stories, Reels, and engagement.
              </p>
            </div>

            <div className="bg-neutral-800 p-8 border border-neutral-700">
              <Image className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-medium mb-3">Pinterest Strategy</h3>
              <p className="text-neutral-300 leading-relaxed">
                Board creation, pin design, and optimization for luxury wedding searches and discovery.
              </p>
            </div>

            <div className="bg-neutral-800 p-8 border border-neutral-700">
              <Sparkles className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-medium mb-3">Content Creation</h3>
              <p className="text-neutral-300 leading-relaxed">
                Professional copywriting, caption crafting, and hashtag strategy for every post.
              </p>
            </div>

            <div className="bg-neutral-800 p-8 border border-neutral-700">
              <Calendar className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-medium mb-3">Content Calendar</h3>
              <p className="text-neutral-300 leading-relaxed">
                Monthly planning with strategic posting schedule aligned to your business goals.
              </p>
            </div>

            <div className="bg-neutral-800 p-8 border border-neutral-700">
              <MessageCircle className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-medium mb-3">Engagement Management</h3>
              <p className="text-neutral-300 leading-relaxed">
                Active engagement with followers, luxury wedding community, and potential clients.
              </p>
            </div>

            <div className="bg-neutral-800 p-8 border border-neutral-700">
              <CheckCircle className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-medium mb-3">Monthly Reporting</h3>
              <p className="text-neutral-300 leading-relaxed">
                Detailed analytics on growth, engagement, reach, and lead generation performance.
              </p>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-serif text-amber-600 mb-3">4-5</div>
              <p className="text-neutral-300">Posts Per Week</p>
            </div>
            <div>
              <div className="text-5xl font-serif text-amber-600 mb-3">150%</div>
              <p className="text-neutral-300">Avg. Growth Rate</p>
            </div>
            <div>
              <div className="text-5xl font-serif text-amber-600 mb-3">Daily</div>
              <p className="text-neutral-300">Stories & Engagement</p>
            </div>
            <div>
              <div className="text-5xl font-serif text-amber-600 mb-3">2</div>
              <p className="text-neutral-300">Platforms Managed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
            Let Your Social Media Reflect<br />Your Luxury Brand
          </h2>
          <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
            Stop struggling with inconsistent content and let our team showcase your work with the sophistication it deserves. Attract the high-end clientele you're meant to serve.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 text-white text-lg tracking-wide hover:bg-neutral-800 transition-all"
          >
            Elevate Your Social Media Presence
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
