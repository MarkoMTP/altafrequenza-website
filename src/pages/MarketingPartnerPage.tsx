import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function MarketingPartnerPage() {
  return (
    <>
      <Helmet>
        <title>
          Complete Wedding Marketing Management | Alta Frequenza Marketing
        </title>
        <meta
          name="description"
          content="A full marketing partnership for wedding planners and venues. One experienced specialist handling your marketing end-to-end, without hiring a full-time employee."
        />
        <meta
          name="keywords"
          content="wedding planner marketing partner, wedding venue marketing, full service wedding marketing, wedding planner growth, marketing for wedding planners"
        />
      </Helmet>

      <div className="bg-white pt-20">
        {/* HERO */}
        <section className="py-28 px-6 lg:px-12 bg-gradient-to-b from-sky-50 via-white to-neutral-50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* TEXT */}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-sky-600 mb-4 font-semibold">
                Your Marketing Partner
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 mb-6 leading-tight">
                Complete Wedding Marketing Management
              </h1>

              <p className="text-lg text-neutral-700 leading-relaxed mb-8 max-w-xl">
                A full marketing partnership for wedding planners and venues who
                want their marketing handled end-to-end. One experienced
                specialist, one clear strategy, full ownership.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-sky-600 text-white text-lg hover:bg-sky-700 transition-all rounded-full shadow-md"
              >
                Discuss Your Marketing
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* IMAGE */}
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://www.dropbox.com/scl/fi/d5mdc5qg3cogs1g80ont2/AdobeStock_480650164-scaled.jpeg?rlkey=n38zkhohb4gvmrdrghvlpj782&st=ssnnaq7r&raw=1"
                alt="Wedding marketing strategy workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="py-24 px-6 lg:px-12 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-8">
              This Is For Wedding Businesses Who Want Marketing Handled Properly
            </h2>

            <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
              <p>
                You don’t want to manage freelancers, agencies, or platforms.
              </p>
              <p>
                You don’t want to guess what to post, what to run, or what to
                fix.
              </p>
              <p>
                You want one person responsible for visibility, messaging, and
                enquiries.
              </p>
              <p className="font-medium text-neutral-900">
                This is not a service, it’s a partnership.
              </p>
            </div>
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className="py-24 px-6 lg:px-12 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* IMAGE */}
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://www.dropbox.com/scl/fi/zc1bkow54a83be0zpc0x3/wedding-planning-stress-recirc-getty-images-d59fc82e85c141c98c480ea85b207a01.jpg?rlkey=dmbsqfptup8b9wjfy4cilvtpx&st=810e72mi&raw=1"
                alt="Wedding planner overwhelmed with marketing"
                className="w-full h-full object-cover"
              />
            </div>

            {/* TEXT */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-6">
                Managing Marketing Becomes a Second Full-Time Job
              </h2>

              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Multiple platforms, different agencies, unclear priorities,
                inconsistent messaging. Marketing becomes fragmented and
                reactive.
              </p>

              <p className="text-lg text-neutral-700 leading-relaxed">
                The result is lost opportunities, inconsistent enquiries, and a
                brand that doesn’t fully reflect the quality of your work.
              </p>
            </div>
          </div>
        </section>

        {/* THE SOLUTION */}
        <section className="py-28 px-6 lg:px-12 bg-sky-900 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              One Partner. One Strategy. Full Ownership.
            </h2>

            <p className="text-lg text-sky-100 leading-relaxed max-w-3xl mx-auto">
              You work with one experienced specialist who takes responsibility
              for your entire marketing ecosystem, from positioning to
              enquiries.
            </p>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="py-24 px-6 lg:px-12 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            {/* LEFT */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-6">
                What’s Included
              </h2>

              <p className="text-lg text-neutral-700 leading-relaxed">
                Everything needed to build visibility, attract the right
                couples, and turn attention into enquiries.
              </p>
            </div>

            {/* RIGHT */}
            <div className="space-y-4 text-neutral-700">
              {[
                "Everything included in the Wedding Growth System™",
                "Everything included in Elegant Presence™",
                "End-to-end marketing direction and execution",
                "Brand positioning and messaging guidance",
                "Website and enquiry-flow improvements as needed",
                "Priority access and hands-on support",
                "One point of contact, no long-term contract",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="text-sky-600 mt-1" size={20} />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* PRICING & AVAILABILITY */}
        <section className="py-24 px-6 lg:px-12 bg-sky-50 border-t border-neutral-200">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-6">
              Investment & Availability
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              This is a high-touch marketing partnership, not a template-based
              service. To maintain quality and direct involvement, I only work
              with a limited number of partners at any given time.
            </p>

            <div className="bg-white border border-neutral-200 rounded-3xl p-10 shadow-sm inline-block">
              <p className="text-neutral-500 text-lg mb-2">
                Standard partnership investment
              </p>
              <p className="text-2xl line-through text-neutral-400 mb-4">
                €2,400 / month
              </p>

              <p className="text-neutral-900 text-xl font-medium mb-2">
                Currently available for
              </p>
              <p className="text-4xl font-serif text-sky-700 mb-4">
                €1,800 / month
              </p>

              <p className="text-neutral-600">
                Only <strong>2 partnership spots</strong> currently available
              </p>
            </div>

            <p className="text-neutral-600 mt-6">
              No long-term contract. We reassess monthly.
            </p>
            <Link
              to="https://calendly.com/contact-altafrequenzamarketing/30min"
              className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 text-white text-lg tracking-wide hover:bg-neutral-800 transition-all rounded-full shadow-lg"
            >
              Apply for a Partnership
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {/* WHY THIS BEATS HIRING */}
        <section className="py-24 px-6 lg:px-12 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* TEXT */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-6">
                More Effective Than Hiring Internally
              </h2>

              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Hiring internally means training, oversight, and risk.
              </p>

              <p className="text-lg text-neutral-700 leading-relaxed">
                This partnership gives you senior-level marketing expertise,
                flexibility, and full accountability, without the overhead of a
                full-time employee.
              </p>
            </div>

            {/* IMAGE */}
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://www.dropbox.com/scl/fi/qbao354l58owflei5uxge/luxury-minimal-office-interior-design-london-07-1200px.jpg?rlkey=j9f2grpifpimack5wxjmn9cmx&st=g8k9yjm6&raw=1"
                alt="Marketing strategy planning"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 px-6 lg:px-12 bg-gradient-to-r from-sky-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-6">
              If You Want One Person Responsible for Your Marketing
            </h2>

            <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
              Let’s talk about whether a full marketing partnership makes sense
              for your business.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-sky-600 text-white text-lg hover:bg-sky-700 transition-all rounded-full shadow-md"
            >
              Book a Strategy Call
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
