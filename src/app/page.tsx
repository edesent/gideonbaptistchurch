import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Services from "@/components/Services";
import About from "@/components/About";
import Ministries from "@/components/Ministries";
import ScriptureBanner from "@/components/ScriptureBanner";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const churchSchema = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: "Gideon Baptist Church",
  alternateName: "Gideon Baptist",
  url: "https://www.gideonbaptistchurch.com",
  logo: "https://www.gideonbaptistchurch.com/gbc-logo.png",
  image: "https://www.gideonbaptistchurch.com/building-outside.jpg",
  description:
    "Independent, KJV Bible-believing Baptist church serving Warren, Michigan since 1956.",
  telephone: "+1-586-772-3230",
  foundingDate: "1956",
  address: {
    "@type": "PostalAddress",
    streetAddress: "13899 Stephens Road",
    addressLocality: "Warren",
    addressRegion: "MI",
    postalCode: "48089",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=100080675370083",
    "https://www.youtube.com/@gideonbaptist9814",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "19:00",
      closes: "20:30",
    },
  ],
  event: [
    {
      "@type": "Event",
      name: "Sunday School",
      startDate: "2026-04-26T10:00",
      eventSchedule: {
        "@type": "Schedule",
        repeatFrequency: "P1W",
        byDay: "Sunday",
      },
      location: {
        "@type": "Place",
        name: "Gideon Baptist Church",
        address: "13899 Stephens Road, Warren, MI 48089",
      },
    },
    {
      "@type": "Event",
      name: "Morning Worship Service",
      startDate: "2026-04-26T11:00",
      eventSchedule: {
        "@type": "Schedule",
        repeatFrequency: "P1W",
        byDay: "Sunday",
      },
      location: {
        "@type": "Place",
        name: "Gideon Baptist Church",
        address: "13899 Stephens Road, Warren, MI 48089",
      },
    },
    {
      "@type": "Event",
      name: "Wednesday Bible Study & Prayer",
      startDate: "2026-04-22T19:00",
      eventSchedule: {
        "@type": "Schedule",
        repeatFrequency: "P1W",
        byDay: "Wednesday",
      },
      location: {
        "@type": "Place",
        name: "Gideon Baptist Church",
        address: "13899 Stephens Road, Warren, MI 48089",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(churchSchema) }}
      />
      <Navbar />
      <Hero />
      <Welcome />
      <Services />
      <About />
      <Ministries />
      <ScriptureBanner />
      <Events />
      <Contact />
      <Footer />
    </>
  );
}
