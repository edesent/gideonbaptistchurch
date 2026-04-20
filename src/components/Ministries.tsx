"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const ministries = [
  {
    title: "Children's Ministry",
    desc: "Nurturing young hearts through age-appropriate Bible lessons, activities, and a fun, safe environment where kids learn about God's love.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 text-brown-light">
        <path d="M32 12c-6 0-10 4-10 9s4 9 10 9 10-4 10-9-4-9-10-9zM16 48c0-8 7-14 16-14s16 6 16 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="48" cy="22" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M50 34c5 1 10 5 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Youth Group",
    desc: "Empowering teens to grow in their faith through Bible studies, fellowship events, and opportunities to serve their community.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 text-brown-light">
        <path d="M12 52V20l20-12 20 12v32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 52V36h16v16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Missions & Outreach",
    desc: "Carrying the Gospel beyond our walls — supporting missionaries around the world and serving our local Warren community.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 text-brown-light">
        <path d="M8 48c4-16 12-24 24-24s20 8 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 24V8M32 8l-6 8M32 8l6 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 40c4-4 8-6 12-6s8 2 12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Adult Bible Study",
    desc: "Deepen your understanding of Scripture through engaging group studies, discussions, and verse-by-verse teaching of God's Word.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 text-brown-light">
        <rect x="10" y="16" width="44" height="32" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M18 28h28M18 36h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 22h44" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Hymns & Special Music",
    desc: "Lifting voices in praise through traditional hymns and heartfelt special music — there's a place for every musical talent.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 text-brown-light">
        <circle cx="20" cy="44" r="8" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="44" cy="38" r="8" stroke="currentColor" strokeWidth="2.5" />
        <path d="M28 44V16l24-6v28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Pastoral Counseling",
    desc: "Confidential, Bible-based counsel from Pastor Ross for individuals, couples, and families walking through life's challenges.",
    href: "/counseling",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 text-brown-light">
        <path d="M12 44c0-8 8-14 20-14s20 6 20 14v4H12v-4z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="32" cy="20" r="8" stroke="currentColor" strokeWidth="2.5" />
        <path d="M44 12l4-4M20 12l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Ministries() {
  return (
    <section id="ministries" className="py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
            Get Involved
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-4">
            Our Ministries
          </h2>
          <p className="text-lg text-text-light">
            There&rsquo;s a place for everyone at Gideon Baptist Church.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {ministries.map((m, i) => {
            const content = (
              <div className="bg-white border border-brown-deep/[.05] rounded-2xl p-9 text-center hover:-translate-y-1 hover:shadow-lg hover:border-gold-light transition-all h-full">
                <div className="flex justify-center mb-5">{m.icon}</div>
                <h3 className="font-serif text-xl font-semibold text-text-dark mb-3">{m.title}</h3>
                <p className="text-[0.92rem] text-text-light leading-relaxed">{m.desc}</p>
                {m.href && (
                  <span className="inline-block mt-4 text-sm font-semibold text-gold-dark">
                    Learn More →
                  </span>
                )}
              </div>
            );
            return (
              <AnimateOnScroll key={m.title} delay={i * 80}>
                {m.href ? (
                  <a href={m.href} className="block h-full">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
