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

export default function Home() {
  return (
    <>
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
