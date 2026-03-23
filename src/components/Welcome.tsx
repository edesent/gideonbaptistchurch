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
              <img
                src="/pastor.jpg"
                alt="Pastor Timothy and Julie Ross"
                className="w-full object-cover"
              />
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
