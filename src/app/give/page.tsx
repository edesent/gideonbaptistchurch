import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Give Online",
  description:
    "Support the ministry of Gideon Baptist Church in Warren, MI. Give securely online through Tithe.ly — tithes, offerings, and missions giving.",
};

const TITHELY_URL =
  "https://give.tithe.ly/?formId=ff9c220f-eaa7-4a7b-a673-af5c477f8649";

export default function Give() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-warm-white min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
              Support the Ministry
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-4">
              Give Online
            </h1>
            <div className="w-20 h-[3px] bg-gold mx-auto mb-6 rounded" />
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Thank you for partnering with Gideon Baptist Church. Your giving helps
              us proclaim the Gospel, support missionaries around the world, and
              serve our Warren community.
            </p>
          </div>

          {/* Verse */}
          <div className="bg-white border-l-4 border-gold rounded-2xl p-8 mb-10 shadow-sm">
            <p className="font-serif italic text-lg text-text-body leading-relaxed mb-3">
              &ldquo;Every man according as he purposeth in his heart, so let him
              give; not grudgingly, or of necessity: for God loveth a cheerful
              giver.&rdquo;
            </p>
            <p className="text-sm font-semibold text-gold-dark">
              — 2 Corinthians 9:7
            </p>
          </div>

          {/* Tithely Embed */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <iframe
              src={TITHELY_URL}
              title="Give Online to Gideon Baptist Church"
              className="w-full border-0"
              style={{ minHeight: "900px" }}
              allow="payment"
            />
          </div>

          {/* Fallback */}
          <p className="text-center text-sm text-text-light mt-6">
            Having trouble with the form above?{" "}
            <a
              href={TITHELY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-dark font-semibold hover:text-brown-light transition-colors"
            >
              Open the secure giving page in a new tab →
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
