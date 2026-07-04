// ============================================================
// UPCOMING EVENTS — edit this file to change the events shown
// on the homepage "Upcoming Events" section.
//
// Each event looks like this:
//
//   {
//     title: "Event Name",             // bold heading on the card
//     time: "6:00 PM",                 // gold time line under the title
//     description: "A sentence or two about the event.",
//     month: "AUG",                    // small text at top of the date badge (e.g. "AUG" or "SUN")
//     day: "24",                       // big number/word in the middle of the badge (e.g. "24" or "Every")
//     label: "2026",                   // small text at bottom of the badge (e.g. "2026" or "Week")
//     accent: true,                    // true = burgundy date badge (special events), false = brown (regular)
//   },
//
// To add an event: copy one of the blocks below (from "{" to "},")
// and paste it in the list, then change the text.
// To remove an event: delete its whole block, from "{" to "},".
// Events appear on the site in the same order as this list.
// ============================================================

export interface ChurchEvent {
  title: string;
  time: string;
  description: string;
  month: string;
  day: string;
  label: string;
  accent: boolean;
}

export const events: ChurchEvent[] = [
  {
    title: "Sunday Worship Services",
    time: "10:00 AM & 11:00 AM",
    description:
      "Join us every Sunday for Sunday School and Morning Worship. All are welcome!",
    month: "SUN",
    day: "Every",
    label: "Week",
    accent: false,
  },
  {
    title: "Food Fellowship",
    time: "Following the Morning Service",
    description:
      "Join us every third Sunday of the month for food and fellowship immediately following the morning service.",
    month: "SUN",
    day: "3rd",
    label: "Sunday",
    accent: true,
  },
  {
    title: "Men's Prayer",
    time: "7:00 PM",
    description:
      "Men gather each Monday evening for a time of prayer, encouragement, and seeking the Lord together.",
    month: "MON",
    day: "Every",
    label: "Week",
    accent: false,
  },
  {
    title: "Wednesday Bible Study & Prayer",
    time: "7:00 PM",
    description:
      "Midweek Bible study and prayer meeting. A wonderful opportunity to grow in the Word and fellowship with other believers.",
    month: "WED",
    day: "Every",
    label: "Week",
    accent: false,
  },
];
