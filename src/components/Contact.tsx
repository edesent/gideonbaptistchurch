"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
            Come Visit Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-4">
            Plan Your Visit
          </h2>
          <p className="text-lg text-text-light">
            We can&rsquo;t wait to meet you. Here&rsquo;s everything you need to know.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Contact Info */}
          <div>
            <AnimateOnScroll>
              <div className="flex gap-5 py-6 border-b border-brown-deep/[.06]">
                <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 flex-shrink-0 text-brown-light">
                  <path d="M24 4C16 4 10 10.5 10 18c0 10 14 26 14 26s14-16 14-26c0-7.5-6-14-14-14z" stroke="currentColor" strokeWidth="2.5" />
                  <circle cx="24" cy="18" r="5" stroke="currentColor" strokeWidth="2" />
                </svg>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-text-dark mb-1">Our Location</h3>
                  <p className="text-text-light">13899 Stephens Road<br />Warren, MI 48089</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="flex gap-5 py-6 border-b border-brown-deep/[.06]">
                <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 flex-shrink-0 text-brown-light">
                  <path d="M12 8h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z" stroke="currentColor" strokeWidth="2.5" />
                  <path d="M8 16l16 12 16-12" stroke="currentColor" strokeWidth="2.5" />
                </svg>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-text-dark mb-1">Phone</h3>
                  <p>
                    <a href="tel:+15867723230" className="text-brown-light font-semibold hover:text-gold-dark transition-colors">
                      (586) 772-3230
                    </a>
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="flex gap-5 py-6 border-b border-brown-deep/[.06]">
                <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 flex-shrink-0 text-brown-light">
                  <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.5" />
                  <path d="M24 12v12l8 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-text-dark mb-1">Service Hours</h3>
                  <p className="text-text-light">Sunday: 10 AM & 11 AM<br />Wednesday: 7 PM</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="mt-8 p-7 bg-cream rounded-xl border-l-4 border-gold">
                <h3 className="font-serif text-lg font-semibold text-text-dark mb-2">What to Expect</h3>
                <p className="text-[0.92rem] text-text-light leading-relaxed">
                  When you visit, you&rsquo;ll be greeted by friendly faces in a welcoming atmosphere.
                  Come as you are — whether in your Sunday best or casual clothes. Our services include
                  traditional hymns, heartfelt prayer, and Bible-centered preaching. We&rsquo;d love to
                  connect with you!
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Map placeholder */}
          <AnimateOnScroll delay={150}>
            <div>
              <div className="rounded-2xl overflow-hidden shadow-lg mb-5">
                <img
                  src="/map.png"
                  alt="Map showing Gideon Baptist Church at 13899 Stephens Road, Warren, MI 48089"
                  className="w-full"
                />
              </div>
              <a
                href="https://maps.google.com/?q=13899+Stephens+Road+Warren+MI+48089"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-brown-light hover:bg-brown hover:border-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Get Directions
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
