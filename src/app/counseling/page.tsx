import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pastoral Counseling",
  description:
    "Confidential, Bible-based pastoral counseling at Gideon Baptist Church in Warren, MI. Pastor Timothy Ross offers biblical counsel for individuals, couples, and families.",
};

const focusAreas = [
  "Marriage and family",
  "Grief and loss",
  "Anxiety, fear, and worry",
  "Spiritual growth and assurance of salvation",
  "Addiction and life-controlling habits",
  "Forgiveness and reconciliation",
];

export default function Counseling() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-warm-white min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
              A Ministry of Gideon Baptist
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-4">
              Pastoral Counseling
            </h1>
            <div className="w-20 h-[3px] bg-gold mx-auto mb-6 rounded" />
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Life is hard, but no one has to walk through it alone. Pastor Timothy Ross
              is available to meet with you for confidential, Bible-based counsel.
            </p>
          </div>

          {/* Verse */}
          <div className="bg-white border-l-4 border-gold rounded-2xl p-8 mb-12 shadow-sm">
            <p className="font-serif italic text-lg md:text-xl text-text-body leading-relaxed mb-3">
              &ldquo;Come unto me, all ye that labour and are heavy laden, and I will
              give you rest.&rdquo;
            </p>
            <p className="text-sm font-semibold text-gold-dark">— Matthew 11:28</p>
          </div>

          {/* Our Approach */}
          <div className="bg-white rounded-2xl p-8 md:p-10 mb-8 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-text-dark mb-4">
              Our Approach
            </h2>
            <p className="text-text-body leading-relaxed mb-4">
              Pastoral counseling at Gideon Baptist Church is rooted in the truth of
              God&rsquo;s Word. We believe the Bible speaks to every area of life and
              provides sufficient wisdom, hope, and direction for whatever you may be
              facing.
            </p>
            <p className="text-text-body leading-relaxed">
              Our counseling is confidential, compassionate, and always pointed toward
              Christ — the only One who can bring lasting healing, peace, and change.
            </p>
          </div>

          {/* Focus Areas */}
          <div className="bg-white rounded-2xl p-8 md:p-10 mb-8 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-text-dark mb-5">
              How We Can Help
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {focusAreas.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5">
                    <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-text-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-brown-deep rounded-2xl p-8 md:p-10 text-center text-white shadow-md">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">
              Reach Out Today
            </h2>
            <p className="text-white/80 leading-relaxed mb-6 max-w-xl mx-auto">
              To schedule a confidential appointment with Pastor Ross, please call the
              church office or send us a message. There is no cost — we are here to
              serve you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15867723230"
                className="inline-block bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-gold-light transition-all"
              >
                Call (586) 772-3230
              </a>
              <ChatButton
                prefill="Hi Pastor Ross, I'd like to schedule a pastoral counseling appointment."
                className="inline-block text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-white/40 hover:bg-white/10 hover:border-white transition-all cursor-pointer"
              >
                Send a Message
              </ChatButton>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
