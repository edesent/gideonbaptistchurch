export default function Hero() {
  return (
    <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0 bg-brown-deep">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-[center_70%]"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brown-deep/60 via-brown-deep/40 to-brown-deep/70 z-[1]" />

      {/* Content */}
      <div className="relative z-[2] text-center text-white max-w-3xl px-5 py-10">
        <p className="text-sm font-semibold tracking-[0.25em] uppercase text-gold-light mb-3 animate-fade-up animation-delay-200">
          Welcome to
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-5 animate-fade-up animation-delay-400">
          Gideon Baptist Church
        </h1>
        <div className="w-20 h-[3px] bg-gold mx-auto mb-8 rounded animate-fade-up animation-delay-600" />
        <div className="flex gap-4 justify-center flex-wrap animate-fade-up animation-delay-800 mb-10">
          <a
            href="#services"
            className="inline-block bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-gold hover:bg-gold-light hover:border-gold-light hover:-translate-y-0.5 hover:shadow-lg transition-all"
          >
            Join Us This Sunday
          </a>
          <a
            href="#about"
            className="inline-block text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-white/50 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 transition-all"
          >
            Learn More
          </a>
        </div>
        <p className="font-serif text-base md:text-lg italic text-white/85 leading-relaxed max-w-2xl mx-auto mb-2 animate-fade-up animation-delay-1000">
          &ldquo;Without apology, I will stand against the evil deception of the
          ecumenical movement and unbelieving men, and call God&rsquo;s people to
          Biblical separation. I will love the Lord, preach His Word, call sinners
          to repentance, and proclaim cleansing through His precious Blood — by
          faith alone, by the immeasurable grace of Almighty God.&rdquo;
        </p>
        <p className="text-sm text-gold-light animate-fade-up animation-delay-1000">
          — Pastor Timothy Ross
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] animate-fade-up animation-delay-1300">
        <a href="#welcome" className="flex flex-col items-center gap-2 text-white/50 text-xs tracking-[0.15em] uppercase">
          <span>Scroll</span>
          <div className="w-5 h-5 border-r-2 border-b-2 border-white/40 rotate-45 animate-scroll-bounce" />
        </a>
      </div>
    </header>
  );
}
