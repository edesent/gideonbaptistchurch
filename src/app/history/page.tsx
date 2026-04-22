import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our History",
  description:
    "The history of Gideon Baptist Church in Warren, MI — founded in 1956 by Pastor Bill Hendrick. Meet the eight pastors who have faithfully led the church over nearly 70 years.",
};

type PastorEntry = {
  name: string;
  years: string;
  founder?: boolean;
  current?: boolean;
};

const pastors: PastorEntry[] = [
  { name: "Bro. Bill Hendrick", years: "1956 – 1962", founder: true },
  { name: "Bro. W.L. Bryant", years: "1962 – 1968" },
  { name: "Bro. Roman Alvarez", years: "1968 – 1969" },
  { name: "Bro. Paul Fowler", years: "1969 – 1974" },
  { name: "Bro. James Staub", years: "1974 – 1989" },
  { name: "Bro. Tim Klink", years: "1989 – 1992" },
  { name: "Bro. Greg Hayward", years: "1992 – 2025" },
  { name: "Bro. Tim Ross", years: "2025 – Present", current: true },
];

export default function History() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-warm-white min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
              Serving Warren Since 1956
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-4">
              Our History
            </h1>
            <div className="w-20 h-[3px] bg-gold mx-auto mb-6 rounded" />
          </div>

          {/* Founding Story */}
          <div className="bg-white rounded-2xl p-8 md:p-10 mb-10 shadow-sm">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark mb-4">
              How It All Began
            </h2>
            <p className="text-text-body leading-relaxed text-[1.05rem] mb-4">
              Gideon Baptist Church was started in the summer of{" "}
              <strong className="text-text-dark">1956</strong> by the founding pastor,{" "}
              <strong className="text-text-dark">Bro. Bill Hendrick</strong>. It began
              as a mission out of Ryan Road Baptist Church, which was located in
              Warren before relocating to Sterling Heights.
            </p>
            <p className="text-text-body leading-relaxed text-[1.05rem]">
              For nearly 70 years, Gideon Baptist Church has been faithfully served
              by eight pastors — each one devoted to preaching the Word of God and
              shepherding this congregation.
            </p>
          </div>

          {/* Pastors Photo Collage */}
          <div className="bg-white rounded-2xl p-6 md:p-10 mb-10 shadow-sm">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark mb-6 text-center">
              Our Pastors Through the Years
            </h2>
            <img
              src="/pastors.png"
              alt="Past pastors of Gideon Baptist Church: Bro. Bill Hendrick, Bro. W.L. Bryant, Bro. Roman Alvarez, Bro. Paul Fowler, Bro. James Staub, Bro. Tim Klink, and Bro. Greg Hayward"
              className="w-full max-w-3xl mx-auto rounded-xl"
            />
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark mb-8 text-center">
              Eight Pastors in 69 Years
            </h2>
            <ol className="relative border-l-2 border-gold/30 ml-4 space-y-8">
              {pastors.map((p, i) => (
                <li key={p.name} className="pl-8 relative">
                  <span
                    className={`absolute -left-[11px] top-1 w-5 h-5 rounded-full border-2 ${
                      p.current
                        ? "bg-gold border-gold-dark"
                        : "bg-white border-gold/60"
                    }`}
                  />
                  <div className="flex items-baseline flex-wrap gap-x-3">
                    <h3
                      className={`font-serif text-lg md:text-xl font-bold ${
                        p.current ? "text-gold-dark" : "text-text-dark"
                      }`}
                    >
                      {p.name}
                    </h3>
                    {p.founder && (
                      <span className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-gold-dark bg-gold/15 px-2 py-0.5 rounded">
                        Founding Pastor
                      </span>
                    )}
                    {p.current && (
                      <span className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-white bg-gold-dark px-2 py-0.5 rounded">
                        Current Pastor
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-text-light mt-1">Pastor #{i + 1} · {p.years}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="/pastor"
              className="inline-block bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-gold-light transition-all"
            >
              Meet Pastor Ross
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
