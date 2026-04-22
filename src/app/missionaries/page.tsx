import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Missionaries",
  description:
    "Gideon Baptist Church proudly supports missionaries serving in Brazil, Bolivia, New Zealand, Australia, Thailand, the Philippines, and around the world.",
};

type Missionary = { name: string; isMinistry?: boolean };
type Region = { country: string; missionaries: Missionary[] };

const regions: Region[] = [
  {
    country: "Brazil",
    missionaries: [
      { name: "Frank & Darla Brim" },
      { name: "Tim & Betty Hawkins" },
      { name: "Kyron & Antonia Horton" },
      { name: "Mark & Dana McCutchen" },
      { name: "Bill & Sharon Smith" },
    ],
  },
  {
    country: "Bolivia",
    missionaries: [
      { name: "Daniel & Mary Brooks" },
      { name: "Matias & Amparito Brooks" },
    ],
  },
  {
    country: "New Zealand",
    missionaries: [
      { name: "Dale & Janet Brown" },
      { name: "Tim & Joy Guenther" },
    ],
  },
  {
    country: "Australia",
    missionaries: [{ name: "Kenneth & Cynthia Chapman" }],
  },
  {
    country: "Guatemala",
    missionaries: [{ name: "Daniel & Tammy Coats" }],
  },
  {
    country: "Thailand",
    missionaries: [{ name: "Brian & Jamie Cone" }],
  },
  {
    country: "Iraq & the Middle East",
    missionaries: [{ name: "Jasper & Manjula Dalavai" }],
  },
  {
    country: "Mexico",
    missionaries: [{ name: "Wendel & Cindy Johnson" }],
  },
  {
    country: "Republic of Palau",
    missionaries: [{ name: "Terry & Gloria McClure" }],
  },
  {
    country: "Philippines",
    missionaries: [{ name: "Ramil & Lanie (Melanie) Ofrecio" }],
  },
  {
    country: "Honduras",
    missionaries: [
      { name: "Harold Friday" },
      { name: "Radio Honduras", isMinistry: true },
    ],
  },
  {
    country: "Spain",
    missionaries: [{ name: "Billy & Dena Rose" }],
  },
  {
    country: "Quebec, Canada",
    missionaries: [{ name: "David & Debra Smith" }],
  },
  {
    country: "Ghana, North Africa",
    missionaries: [{ name: "John & Patty Sommer" }],
  },
  {
    country: "Indonesia",
    missionaries: [{ name: "Karen Werth" }],
  },
];

export default function Missionaries() {
  const total = regions.reduce((sum, r) => sum + r.missionaries.length, 0);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-warm-white min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
              To the Ends of the Earth
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-4">
              Our Missionaries
            </h1>
            <div className="w-20 h-[3px] bg-gold mx-auto mb-6 rounded" />
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Gideon Baptist Church is a very missions-minded church. We are honored
              to partner with {total} faithful servants and ministries carrying the
              Gospel to {regions.length} countries and regions around the world.
            </p>
          </div>

          {/* Verse */}
          <div className="bg-white border-l-4 border-gold rounded-2xl p-8 mb-14 shadow-sm max-w-3xl mx-auto">
            <p className="font-serif italic text-lg md:text-xl text-text-body leading-relaxed mb-3">
              &ldquo;Go ye therefore, and teach all nations, baptizing them in the
              name of the Father, and of the Son, and of the Holy Ghost.&rdquo;
            </p>
            <p className="text-sm font-semibold text-gold-dark">— Matthew 28:19</p>
          </div>

          {/* Missionary Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {regions.map((region) => (
              <div
                key={region.country}
                className="bg-white rounded-2xl p-6 shadow-sm border border-brown-deep/[.05] hover:shadow-md hover:border-gold-light transition-all"
              >
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-brown-deep/[.08]">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gold-dark flex-shrink-0">
                    <path d="M12 21s-7-5-7-12a7 7 0 1 1 14 0c0 7-7 12-7 12z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  <h2 className="font-serif text-lg font-bold text-text-dark">
                    {region.country}
                  </h2>
                </div>
                <ul className="space-y-2">
                  {region.missionaries.map((m) => (
                    <li
                      key={m.name}
                      className={`text-[0.95rem] ${
                        m.isMinistry ? "italic text-text-light" : "text-text-body"
                      }`}
                    >
                      {m.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* How We Support */}
          <h2 className="font-serif text-3xl font-bold text-text-dark text-center mt-20 mb-8">
            How We Stand With Them
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
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
