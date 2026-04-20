export default function ScriptureBanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <svg viewBox="0 0 1920 400" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
          <rect width="1920" height="400" fill="#2c1810" />
          <text x="960" y="380" textAnchor="middle" fill="rgba(212,175,85,0.08)" fontSize="18" fontFamily="sans-serif">
            Nature / Stained Glass Photo
          </text>
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-brown-deep/90 to-burgundy/85" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <blockquote>
          <p className="font-serif text-2xl md:text-3xl italic text-white leading-relaxed mb-5">
            &ldquo;And I, if I be lifted up from the earth, will draw all men unto me.&rdquo;
          </p>
          <cite className="text-sm font-semibold tracking-[0.12em] uppercase text-gold-light not-italic">
            — John 12:32
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
