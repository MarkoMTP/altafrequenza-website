import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function BlogPage() {
  const featuredPost = {
    title:
      "The Psychology of Luxury Wedding Clients: What High-Net-Worth Couples Really Want",
    excerpt:
      "Understanding the mindset of affluent couples is essential for wedding planners who want to position themselves as the premier choice. Here's what matters most to luxury clients.",
    category: "Client Psychology",
    date: "March 15, 2024",
    readTime: "8 min read",
    image:
      "https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1200",
    slug: "luxury-client-psychology",
  };

  const posts = [
    {
      title: "5 Digital Marketing Mistakes Luxury Wedding Planners Must Avoid",
      excerpt:
        "These common missteps can sabotage your efforts to attract high-end clientele. Learn what to avoid and what to do instead.",
      category: "Marketing Strategy",
      date: "March 10, 2024",
      readTime: "6 min read",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "marketing-mistakes",
    },
    {
      title: "How to Use Instagram to Attract Six-Figure Wedding Clients",
      excerpt:
        "Instagram is a goldmine for luxury wedding planners—if you use it correctly. Discover the strategies that top planners use.",
      category: "Social Media",
      date: "March 5, 2024",
      readTime: "7 min read",
      image:
        "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "instagram-strategy",
    },
    {
      title: "Why Generic Marketing Agencies Fail Wedding Planners",
      excerpt:
        "Most marketing agencies don't understand the luxury wedding industry. Here's why specialization matters.",
      category: "Industry Insights",
      date: "February 28, 2024",
      readTime: "5 min read",
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "generic-agencies-fail",
    },
    {
      title: "The ROI of AI Automation for Wedding Planners",
      excerpt:
        "Discover how AI tools are transforming the way elite planners capture and qualify leads, saving time and increasing revenue.",
      category: "Technology",
      date: "February 20, 2024",
      readTime: "6 min read",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "ai-automation-roi",
    },
    {
      title: "Crafting a Premium Brand Identity for Your Planning Business",
      excerpt:
        "Your brand is your most valuable asset. Learn how to position yourself as a luxury service provider.",
      category: "Branding",
      date: "February 15, 2024",
      readTime: "9 min read",
      image:
        "https://images.pexels.com/photos/2072179/pexels-photo-2072179.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "premium-brand-identity",
    },
    {
      title: "Google Ads for Wedding Planners: A Complete Guide",
      excerpt:
        "Master Google Ads to consistently attract high-quality leads who are ready to invest in exceptional planning services.",
      category: "Paid Advertising",
      date: "February 10, 2024",
      readTime: "10 min read",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "google-ads-guide",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          The Alta Frequenza Journal | Luxury Wedding Marketing Insights
        </title>
        <meta
          name="description"
          content="Explore expert insights from Alta Frequenza Marketing on luxury wedding marketing, client psychology, branding, Google Ads, and AI automation for wedding planners."
        />
        <meta
          name="keywords"
          content="wedding planner marketing, luxury wedding marketing, Google Ads for wedding planners, wedding planner SEO, destination wedding marketing, wedding planner branding"
        />
        <meta
          property="og:title"
          content="The Alta Frequenza Journal | Luxury Wedding Marketing Insights"
        />
        <meta
          property="og:description"
          content="Expert strategies on wedding planner marketing, client psychology, and growing your luxury planning business."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.altafrequenzamarketing/blog"
        />
        <meta
          property="og:image"
          content="https://www.altafrequenzamarketing/og-blog.jpg"
        />
      </Helmet>
      <div className="bg-white pt-20">
        {/* Header */}
        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm tracking-widest text-neutral-500 mb-4">
                INSIGHTS & STRATEGIES
              </p>
              <h1 className="text-5xl md:text-7xl font-serif text-neutral-900 mb-6">
                The Alta Frequenza Journal
              </h1>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Expert insights on luxury wedding marketing, client psychology,
                and growing your planning business.
              </p>
            </div>

            {/* Featured Post */}
            <div className="mb-24">
              <article className="grid md:grid-cols-2 gap-12 items-center bg-neutral-50 border border-neutral-200 overflow-hidden">
                <div className="h-full">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                </div>
                <div className="p-8 md:p-12">
                  <div className="inline-block px-3 py-1 bg-amber-600 text-white text-xs tracking-wider mb-4">
                    FEATURED
                  </div>
                  <p className="text-sm tracking-wide text-amber-600 mb-3">
                    {featuredPost.category}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-neutral-600 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-neutral-900 hover:gap-3 transition-all font-medium"
                  >
                    Read Article <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            </div>

            {/* Blog Posts */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Link key={index} to={`/blog/${post.slug}`} className="group">
                  <article className="cursor-pointer">
                    <div className="mb-4 overflow-hidden bg-neutral-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="text-xs tracking-wide text-amber-600 mb-2">
                      {post.category}
                    </p>
                    <h3 className="text-xl font-serif text-neutral-900 mb-3 leading-tight group-hover:text-amber-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-neutral-700 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-neutral-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 text-sm text-neutral-900 group-hover:gap-3 transition-all">
                      Read More <ArrowRight size={14} />
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
