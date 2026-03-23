"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const events = [
  {
    month: "SUN",
    day: "Every",
    label: "Week",
    title: "Sunday Worship Services",
    time: "10:00 AM & 11:00 AM",
    desc: "Join us every Sunday for Sunday School and Morning Worship. All are welcome!",
  },
  {
    month: "WED",
    day: "Every",
    label: "Week",
    title: "Wednesday Bible Study & Prayer",
    time: "7:00 PM",
    desc: "Midweek Bible study and prayer meeting. A wonderful opportunity to grow in the Word and fellowship with other believers.",
  },
  {
    month: "SPR",
    day: "2026",
    label: "Special",
    accent: true,
    title: "Spring Revival Meetings",
    time: "Details Coming Soon",
    desc: "A special week of services with guest speakers to inspire and revive our hearts. Check back for dates and details!",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
            What&rsquo;s Happening
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-text-light">
            Stay connected with what&rsquo;s happening at Gideon Baptist.
          </p>
        </div>

        {/* Event Cards */}
        <div className="max-w-3xl mx-auto space-y-5">
          {events.map((ev, i) => (
            <AnimateOnScroll key={ev.title} delay={i * 100}>
              <div className="flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all">
                {/* Date badge */}
                <div
                  className={`flex sm:flex-col items-center justify-center gap-2 sm:gap-0 sm:min-w-[110px] px-6 py-4 sm:py-6 text-white text-center ${
                    ev.accent ? "bg-burgundy" : "bg-brown-light"
                  }`}
                >
                  <span className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-gold-light">
                    {ev.month}
                  </span>
                  <span className="font-serif text-2xl font-bold leading-tight">{ev.day}</span>
                  <span className="text-[0.65rem] tracking-[0.1em] uppercase opacity-70">
                    {ev.label}
                  </span>
                </div>
                {/* Details */}
                <div className="p-6">
                  <h3 className="font-serif text-lg font-semibold text-text-dark mb-1">
                    {ev.title}
                  </h3>
                  <p className="text-sm font-semibold text-gold-dark mb-2">{ev.time}</p>
                  <p className="text-sm text-text-light leading-relaxed">{ev.desc}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
