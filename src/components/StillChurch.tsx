"use client";

import { useState } from "react";

type Pillar = {
  title: string;
  body: string;
  icon: React.ReactNode;
};

const pillars: Pillar[] = [
  {
    title: "Still Preaching",
    body: "Entertainment and true preaching simply won't produce the same result. Once a church starts down the path of entertainment, the destination is unpredictable and likely undesirable. We still believe church can be exciting without borrowing the latest fads to kick-start the crowd. We still practice old-time preaching directly from the Word of God — not watered down and clearly proclaimed.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
        <rect x="10" y="14" width="44" height="36" rx="2" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M32 14v36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M18 24h8M18 32h8M38 24h8M38 32h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Still Reverent",
    body: "American culture has become obsessed with the casual, which has invaded nearly every institution. We still believe the presence of a Holy God deserves our attempt to express respect and reverence — not because it impresses Him, but because it shapes our own hearts and attitudes. While we believe God deserves our best, we don't make ourselves the judge of how that looks; a judgmental spirit is worse than casual dress.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
        <path d="M32 8v40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M20 20h24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M18 52c4-6 10-6 14-6s10 0 14 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Still Family",
    body: "Call it old-fashioned or timeless, but the biblical plan of marriage and the family still works. Our church is full of families of every kind — young families seeking to start out right, and families looking to restore broken relationships around the proven Biblical standard. We have an abundance of young families, children, teens, middle-aged, and seniors in every service.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
        <circle cx="22" cy="20" r="6" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="42" cy="20" r="6" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="32" cy="36" r="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M12 48c2-6 6-10 10-10s8 4 10 10M32 48c0-4 4-6 8-6s8 2 10 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Still Hymns",
    body: "We still believe the hymn is the most truthful and exciting form of music used in the church. These songs are full of old-time Biblical doctrine — and at our church they are anything but boring. We enjoy hearing the message of the music as we lift our voices together, singing both the fast-paced praise hymns and the quiet, reflective ones.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
        <circle cx="20" cy="46" r="6" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="46" cy="40" r="6" stroke="currentColor" strokeWidth="2.5" />
        <path d="M26 46V18l26-6v28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 22l26-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function StillChurch() {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section className="relative py-24 overflow-hidden bg-brown-deep">
      {/* Subtle gradient + texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-brown-deep via-brown to-burgundy-dark" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #d4af55 0%, transparent 50%), radial-gradient(circle at 80% 80%, #d4af55 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-light mb-3">
            Join Us In Worship
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            We&rsquo;re Still That Church
          </h2>
          <div className="w-20 h-[3px] bg-gold mx-auto mb-6 rounded" />
          <p className="text-lg text-white/70">
            In a world that keeps changing, some things never should.
            <br className="hidden sm:inline" />
            Tap any card to learn more.
          </p>
        </div>

        {/* Flip Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ perspective: "1200px" }}
        >
          {pillars.map((p, i) => {
            const isFlipped = flipped.has(i);
            return (
              <button
                key={p.title}
                onClick={() => toggle(i)}
                className="group relative text-left h-72 w-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
                aria-label={`${p.title} — click to ${isFlipped ? "hide" : "reveal"} details`}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 rounded-2xl border border-gold/20 bg-white/[0.04] backdrop-blur-sm flex flex-col items-center justify-center p-8 shadow-lg"
                  style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                >
                  <div className="text-gold mb-5 group-hover:scale-110 transition-transform">
                    {p.icon}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white text-center mb-2">
                    {p.title}
                  </h3>
                  <span className="text-[0.7rem] tracking-[0.2em] uppercase text-gold-light/70 mt-3">
                    Tap to Read
                  </span>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 rounded-2xl border border-gold/30 bg-gradient-to-br from-burgundy-dark to-brown p-6 flex flex-col shadow-lg overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <h3 className="font-serif text-lg font-bold text-gold-light mb-3">
                    {p.title}
                  </h3>
                  <p className="text-[0.85rem] text-white/85 leading-relaxed flex-1 overflow-y-auto">
                    {p.body}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
