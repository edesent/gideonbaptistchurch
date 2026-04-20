import { getEvents } from "@/lib/sheets";
import EventCards from "./EventCards";

const fallbackEvents = [
  {
    month: "SUN",
    day: "Every",
    label: "Week",
    title: "Sunday Worship Services",
    time: "10:00 AM & 11:00 AM",
    description: "Join us every Sunday for Sunday School and Morning Worship. All are welcome!",
    accent: false,
  },
  {
    month: "WED",
    day: "Every",
    label: "Week",
    title: "Wednesday Bible Study & Prayer",
    time: "7:00 PM",
    description:
      "Midweek Bible study and prayer meeting. A wonderful opportunity to grow in the Word and fellowship with other believers.",
    accent: false,
  },
];

export default async function Events() {
  const sheetEvents = await getEvents();
  const events = sheetEvents.length > 0 ? sheetEvents : fallbackEvents;

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

        <EventCards events={events} />

        <div className="text-center mt-12">
          <a
            href="/facebook-events"
            className="inline-block bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-gold hover:bg-gold-light transition-all"
          >
            Facebook Event History
          </a>
        </div>
      </div>
    </section>
  );
}
