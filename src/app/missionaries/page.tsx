import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Missionaries",
  description:
    "Gideon Baptist Church supports missionaries around the world. Meet the families and ministries we partner with to spread the Gospel.",
};

export default function Missionaries() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-warm-white min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
              To the Ends of the Earth
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-4">
              Our Missionaries
            </h1>
            <div className="w-20 h-[3px] bg-gold mx-auto mb-6 rounded" />
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Gideon Baptist Church is a very missions-minded church. We are honored
              to partner with faithful servants who are carrying the Gospel to the
              corners of the world.
            </p>
          </div>

          {/* Verse */}
          <div className="bg-white border-l-4 border-gold rounded-2xl p-8 mb-12 shadow-sm">
            <p className="font-serif italic text-lg md:text-xl text-text-body leading-relaxed mb-3">
              &ldquo;Go ye therefore, and teach all nations, baptizing them in the
              name of the Father, and of the Son, and of the Holy Ghost.&rdquo;
            </p>
            <p className="text-sm font-semibold text-gold-dark">— Matthew 28:19</p>
          </div>

          {/* Coming Soon */}
          <div className="bg-white rounded-2xl p-10 md:p-14 text-center shadow-sm">
            <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 mx-auto mb-6 text-gold">
              <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2.5" />
              <path d="M8 32h48M32 8c6 8 9 16 9 24s-3 16-9 24M32 8c-6 8-9 16-9 24s3 16 9 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark mb-3">
              Missionary Profiles Coming Soon
            </h2>
            <p className="text-text-body leading-relaxed max-w-xl mx-auto mb-8">
              We&rsquo;re preparing profiles of the missionaries and ministries our
              church proudly supports. Check back soon to learn about their fields of
              service, prayer requests, and how you can stand with them.
            </p>
            <a
              href="/#contact"
              className="inline-block bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-gold-light transition-all"
            >
              Contact Us to Learn More
            </a>
          </div>

          {/* How We Support */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-brown-deep/[.04]">
              <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-gold-dark">
                  <path d="M12 21s-8-5-8-12a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 7-8 12-8 12z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-semibold text-text-dark mb-2">Prayer</h3>
              <p className="text-sm text-text-light leading-relaxed">
                We lift up our missionaries and their families in regular prayer — believing God hears and moves on their behalf.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-brown-deep/[.04]">
              <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-gold-dark">
                  <path d="M3 12l4-4 4 4 4-4 4 4 2-2M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-semibold text-text-dark mb-2">Financial Support</h3>
              <p className="text-sm text-text-light leading-relaxed">
                Through the faithful giving of our congregation, we provide ongoing financial support to missionaries on the field.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-brown-deep/[.04]">
              <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-gold-dark">
                  <path d="M16 4h4v4M8 20H4v-4M4 20l7-7M20 4l-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-semibold text-text-dark mb-2">Encouragement</h3>
              <p className="text-sm text-text-light leading-relaxed">
                We stay connected with letters, updates, and hosting missionaries who pass through to share their ministry.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
