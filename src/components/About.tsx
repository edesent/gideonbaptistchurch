"use client";

import AnimateOnScroll from "./AnimateOnScroll";

type Card = {
  title: string;
  text: string;
  placeholder: string;
  image?: string;
  href?: string;
  linkLabel?: string;
  icon: React.ReactNode;
};

const cards: Card[] = [
  {
    title: "Our History",
    text: "Established and incorporated in 1956, Gideon Baptist Church has grown from a small congregation into a vibrant church family, faithfully serving the Lord and the Warren community for generations.",
    placeholder: "Church History Photo",
    image: "/church-sanctuary.jpg",
    icon: (
      <path d="M200 60 L200 220 M140 120 L260 120" stroke="rgba(139,69,19,0.2)" strokeWidth="6" />
    ),
  },
  {
    title: "Our Beliefs",
    text: "We are an independent, missions-minded, King James Bible church. The King James Version of the Bible is our textbook, and the New Testament is our standard for doctrine and practice. We hold fast to the fundamentals of the Christian faith.",
    placeholder: "Bible / Scripture Photo",
    image: "/kjv-bible.jpg",
    href: "/statement-of-faith",
    linkLabel: "Read Our Statement of Faith",
    icon: (
      <rect x="120" y="80" width="160" height="120" rx="8" fill="rgba(139,69,19,0.12)" />
    ),
  },
  {
    title: "Our Mission",
    text: "We are a very missions-minded church. Our hearts are set on supporting missionaries around the world, reaching our Warren community, and sharing the love of Christ with families, neighbors, and strangers alike.",
    placeholder: "Community / Fellowship Photo",
    image: "/building-outside.jpg",
    href: "/missionaries",
    linkLabel: "Meet Our Missionaries",
    icon: (
      <>
        <circle cx="160" cy="140" r="40" fill="rgba(139,69,19,0.1)" />
        <circle cx="240" cy="140" r="40" fill="rgba(139,69,19,0.1)" />
        <circle cx="200" cy="100" r="40" fill="rgba(139,69,19,0.1)" />
      </>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
            Our Story
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-4">
            Serving Warren Since 1956
          </h2>
          <p className="text-lg text-text-light">
            For nearly 70 years, Gideon Baptist Church has been a beacon of hope and faith
            in Macomb County.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <AnimateOnScroll key={card.title} delay={i * 120}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all h-full flex flex-col">
                <div className="h-56 overflow-hidden">
                  {card.image ? (
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                  ) : (
                    <svg viewBox="0 0 400 280" className="w-full h-full">
                      <rect width="400" height="280" fill="#f0e4d4" />
                      {card.icon}
                      <text x="200" y="250" textAnchor="middle" fill="rgba(139,69,19,0.3)" fontSize="14" fontFamily="sans-serif">
                        {card.placeholder}
                      </text>
                    </svg>
                  )}
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <h3 className="font-serif text-xl font-semibold text-text-dark mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[0.92rem] text-text-light leading-relaxed flex-1">{card.text}</p>
                  {card.href && (
                    <a
                      href={card.href}
                      className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-gold-dark hover:text-brown-light transition-colors"
                    >
                      {card.linkLabel || "Learn More"}
                      <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
