"use client";

import AnimateOnScroll from "./AnimateOnScroll";

interface Event {
  title: string;
  time: string;
  description: string;
  month: string;
  day: string;
  label: string;
  accent: boolean;
}

export default function EventCards({ events }: { events: Event[] }) {
  return (
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
              <p className="text-sm text-text-light leading-relaxed">{ev.description}</p>
            </div>
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  );
}
