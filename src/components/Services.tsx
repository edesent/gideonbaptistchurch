"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  {
    title: "Sunday School",
    time: "10:00 AM",
    desc: "Bible study classes for all ages — children, youth, and adults.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-14 h-14 text-gold">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 8v16l10 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Morning Worship",
    time: "11:00 AM",
    desc: "Our main worship service with hymns, prayer, and Bible preaching.",
    featured: true,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-14 h-14 text-gold">
        <path d="M24 4L24 44M14 18L34 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Wednesday Evening",
    time: "7:00 PM",
    desc: "Midweek Bible study and prayer meeting to recharge your spirit.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-14 h-14 text-gold">
        <rect x="6" y="10" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 18h36M16 10V6M32 10V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <svg viewBox="0 0 1920 800" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
          <rect width="1920" height="800" fill="#1a1a2e" />
          <circle cx="960" cy="400" r="300" fill="rgba(212,175,85,0.04)" />
          <text x="960" y="410" textAnchor="middle" fill="rgba(212,175,85,0.1)" fontSize="22" fontFamily="sans-serif">
            Church Interior / Worship Photo
          </text>
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,26,46,0.92)] to-[rgba(44,24,16,0.92)] z-[1]" />

      <div className="relative z-[2] max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-light mb-3">
            Join Us in Worship
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Service Times
          </h2>
          <p className="text-lg text-white/60">
            We&rsquo;d love to see you at any of our weekly services.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimateOnScroll key={s.title} delay={i * 100}>
              <div
                className={`relative rounded-2xl p-8 text-center transition-all hover:-translate-y-1 hover:shadow-2xl ${
                  s.featured
                    ? "bg-gold/[.12] border border-gold/25"
                    : "bg-white/[.06] border border-white/[.08] hover:bg-white/10"
                }`}
              >
                {s.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-brown-deep text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1 rounded-full">
                    Main Service
                  </span>
                )}
                <div className="flex justify-center mb-5">{s.icon}</div>
                <h3 className="font-serif text-xl font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-2xl font-bold text-gold mb-3">{s.time}</p>
                <p className="text-sm text-white/55 leading-relaxed">{s.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
