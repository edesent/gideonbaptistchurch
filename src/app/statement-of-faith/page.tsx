import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Statement of Faith",
  description:
    "The Statement of Faith of Gideon Baptist Church in Warren, MI. We believe the whole Bible as the verbally inspired and infallible Word of God.",
};

const beliefs = [
  {
    text: "We believe the whole Bible from Genesis 1:1 to Revelation 22:21 as the verbally inspired and infallible WORD OF GOD.",
    verse: "II Timothy 3:16",
  },
  {
    text: "We believe Jesus was born of Mary the Virgin, and is the Son of God and God the Son.",
    verse: "Luke 1:35",
  },
  {
    text: "We believe that Christ died for our sins according to the Scriptures, the Just for the unjust, that He might bring us to God.",
    verse: "I Peter 3:18",
  },
  {
    text: "We believe that Christ rose from the grave the third day according to the Scriptures.",
    verse: "I Corinthians 15:3–4",
  },
  {
    text: "We believe that He only is the great High Priest, and we need not the intercession of any man, but that Christ ever liveth to make intercession for us.",
    verse: "Hebrews 7:25",
  },
  {
    text: "We believe that Christ will come again in person, to rapture all believers before the Great Tribulation, and shall return in person, bodily, visibly, to establish His Kingdom on the earth for 1,000 years.",
    verse: "Acts 1:11",
  },
  {
    text: 'We believe that in order to be saved, a person must be born again — "Ye must be born again."',
    verse: "John 3:3–7",
  },
  {
    text: "We believe that every truly born-again person should declare his faith by the act of baptism (immersion in water), setting forth the Lord's death, burial, and resurrection.",
    verse: "Acts 2:41",
  },
  {
    text: 'We believe that the Church is a body of baptized believers whose only mission is not to "reform the world," but to preach and teach the Gospel of salvation to the individual person, and teach them to "observe all things whatsoever I have commanded you."',
    verse: "Matthew 28:18–20",
  },
];

export default function StatementOfFaith() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-warm-white min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
              What We Believe
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-4">
              Statement of Faith
            </h1>
            <div className="w-20 h-[3px] bg-gold mx-auto mb-6 rounded" />
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              The following are the fundamental truths upon which Gideon Baptist Church
              stands, rooted in the King James Version of the Bible.
            </p>
          </div>

          {/* Beliefs */}
          <div className="space-y-6">
            {beliefs.map((belief, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-brown-deep/[.04] hover:shadow-md transition-all"
              >
                <div className="flex gap-5">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/15 text-gold-dark font-serif font-bold text-lg flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-text-body leading-relaxed text-[1.05rem]">
                      {belief.text}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-gold-dark italic">
                      — {belief.verse}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
