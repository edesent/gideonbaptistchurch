"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function Welcome() {
  return (
    <section id="welcome" className="py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <AnimateOnScroll>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <svg viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg" className="w-full">
                <rect width="600" height="500" fill="#f5e6d3" />
                <circle cx="300" cy="180" r="80" fill="rgba(139,69,19,0.12)" />
                <rect x="230" y="280" width="140" height="20" rx="4" fill="rgba(139,69,19,0.08)" />
                <text x="300" y="390" textAnchor="middle" fill="rgba(139,69,19,0.35)" fontSize="16" fontFamily="sans-serif">
                  Pastor Timothy Ross
                </text>
              </svg>
            </div>
          </AnimateOnScroll>

          {/* Text */}
          <AnimateOnScroll delay={200}>
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-2">
                A Message From Our Pastor
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark leading-snug mb-6">
                You&rsquo;re Invited to{" "}
                <em className="text-brown-light italic">Visit Us</em>
              </h2>
              <p className="text-lg text-text-body leading-relaxed mb-4">
                At Gideon Baptist Church, we believe everyone deserves a place to belong.
                Whether you&rsquo;re exploring faith for the first time or looking for a church
                home, you&rsquo;ll find a warm, welcoming family here.
              </p>
              <p className="text-text-light leading-relaxed mb-4">
                Under the leadership of <strong className="text-text-body">Pastor Timothy Ross</strong>,
                our congregation continues the mission that began in 1956 — serving the Warren community
                with love, faithfulness, and a heart for missions.
              </p>
              <p className="text-text-light leading-relaxed mb-7">
                The King James Version of the Bible is our textbook, and the New Testament is our standard for doctrine
                and practice. We desire to be an encouragement and blessing to families, to our
                community, and ultimately, to the world.
              </p>
              <a
                href="#about"
                className="inline-block bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-brown-light hover:bg-brown hover:border-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                More About Us
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
