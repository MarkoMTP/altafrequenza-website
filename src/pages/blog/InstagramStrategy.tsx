import { Calendar, Clock, ArrowLeft } from 'lucide-react';

interface BlogPostProps {
  onNavigate: (page: string) => void;
}

export default function InstagramStrategy({ onNavigate }: BlogPostProps) {
  return (
    <div className="bg-white pt-20">
      <article className="max-w-4xl mx-auto px-6 lg:px-12 py-24">
        <button
          onClick={() => onNavigate('blog')}
          className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Journal
        </button>

        <div className="mb-8">
          <p className="text-sm tracking-wide text-amber-600 mb-3">Social Media</p>
          <h1 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-6 leading-tight">
            How to Use Instagram to Attract Six-Figure Wedding Clients
          </h1>
          <div className="flex items-center gap-6 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              March 5, 2024
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              7 min read
            </div>
          </div>
        </div>

        <img
          src="https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Instagram strategy"
          className="w-full h-96 object-cover mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-neutral-700 leading-relaxed mb-8">
            Instagram is a goldmine for luxury wedding planners—if you use it correctly. High-net-worth couples spend significant time on the platform researching wedding inspiration, and your profile could be the deciding factor in whether they reach out.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            Here's how top planners leverage Instagram to consistently book six-figure weddings.
          </p>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">Create a Cohesive, Editorial Aesthetic</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Your Instagram feed is your visual portfolio. Luxury clients expect a sophisticated, cohesive aesthetic that reflects the caliber of weddings you create. Think Vogue, not generic wedding blog.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            <strong>Action Steps:</strong>
          </p>

          <ul className="space-y-3 mb-8 ml-6">
            <li className="text-lg text-neutral-700">Choose a consistent color palette and editing style</li>
            <li className="text-lg text-neutral-700">Feature only your highest-end weddings</li>
            <li className="text-lg text-neutral-700">Mix full tablescape shots with detailed close-ups</li>
            <li className="text-lg text-neutral-700">Avoid cluttered or amateur-looking photos</li>
          </ul>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">Write Captions That Tell Stories</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Generic captions like "Love this setup!" waste valuable real estate. Luxury clients want to understand your process, philosophy, and the thought behind your work.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Share the story behind each wedding: the couple's vision, unique challenges you solved, meaningful details you incorporated. This demonstrates expertise and builds emotional connection.
          </p>

          <div className="bg-neutral-50 p-6 my-8 border-l-4 border-amber-600">
            <p className="text-base text-neutral-800 italic leading-relaxed">
              "When Sarah & Michael first described their vision for a garden wedding beneath century-old oaks, I knew every detail needed to honor both the natural beauty and their sophisticated style. From hand-torn silk ribbons to vintage French chairs, we created an atmosphere that felt timeless yet utterly personal."
            </p>
          </div>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">Use Strategic Hashtags</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Don't just use #wedding or #weddingplanner. Target luxury-specific hashtags that affluent couples actually search.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            <strong>Recommended Hashtags:</strong>
          </p>

          <ul className="space-y-2 mb-8 ml-6">
            <li className="text-lg text-neutral-700">#LuxuryWedding</li>
            <li className="text-lg text-neutral-700">#HighEndWedding</li>
            <li className="text-lg text-neutral-700">#SophisticatedBride</li>
            <li className="text-lg text-neutral-700">#DestinationWedding</li>
            <li className="text-lg text-neutral-700">#WeddingPlanner[YourCity]</li>
          </ul>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">Leverage Instagram Stories</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Stories provide an opportunity to showcase your day-to-day expertise and build rapport with potential clients. Share behind-the-scenes planning moments, vendor collaborations, and expert tips.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Use the "Highlights" feature to organize Stories into categories like "Portfolio," "Process," "Testimonials," and "Planning Tips."
          </p>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">Create Reels That Showcase Your Process</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Reels receive significantly higher reach than static posts. Use them strategically to demonstrate your expertise, showcase transformations, or offer valuable wedding planning insights.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Keep them elegant and on-brand—avoid trendy audio or overly casual content that contradicts your luxury positioning.
          </p>

          <h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6">Engage Authentically with Your Audience</h2>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Don't just post and disappear. Respond thoughtfully to comments, engage with luxury vendors, and participate in conversations with your target audience. High-net-worth couples notice when you're actively engaged versus simply broadcasting content.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-8 my-12">
            <h3 className="text-2xl font-serif text-neutral-900 mb-4">The Bottom Line</h3>
            <p className="text-lg text-neutral-800 leading-relaxed">
              Instagram is one of your most powerful tools for attracting luxury wedding clients—but only if you use it strategically. Invest time in creating a cohesive aesthetic, telling compelling stories, and engaging authentically with your audience. The results will speak for themselves.
            </p>
          </div>

          <div className="mt-16 pt-12 border-t border-neutral-200">
            <h3 className="text-2xl font-serif text-neutral-900 mb-6">
              Need Help With Your Social Media Strategy?
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              Our Social Media Package is designed specifically for luxury wedding planners. We handle everything from content creation to engagement strategy, ensuring your Instagram reflects your premium brand.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white text-base tracking-wide hover:bg-neutral-800 transition-all"
            >
              Learn More About Social Media Management
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
