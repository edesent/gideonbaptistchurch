import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Statement of Faith",
  description:
    "The Statement of Faith of Gideon Baptist Church in Warren, MI — an Independent, KJV Bible-believing Baptist church. Our doctrine on Scripture, the Trinity, Jesus Christ, salvation, the Church, and the Second Coming.",
};

const sections = [
  {
    title: "Scriptures",
    body: (
      <>
        We believe in the verbal, plenary inspiration of the entire Bible, both the
        Old and New Testaments. We further accept the Masoretic and Textus Receptus
        manuscripts from which came the King James Bible, and we accept the King
        James Bible as the divinely preserved and perfect Word of God for the
        English-speaking world.
      </>
    ),
  },
  {
    title: "The Trinity",
    body: (
      <>
        We believe that God is a person, eternally existing as a Trinity, manifesting
        Himself in three Persons: God the Father, God the Son, and God the Holy
        Spirit. We further believe that these three are one God, but separate in
        personality and work.
      </>
    ),
  },
  {
    title: "Jesus Christ",
    body: (
      <>
        We believe that Jesus Christ is the only begotten Son of God — eternally
        existing, yet born of a virgin. Being God, He lived a sinless life, making
        His death on the Cross both sufficient and substitutionary for the sins of
        the whole world. After making atonement for the sins of the world with His
        own blood, He ascended into Heaven with a glorified body, where He is
        seated at the right hand of the Father as Head of the Church, making
        intercession for the saints as our High Priest.
      </>
    ),
  },
  {
    title: "Salvation",
    body: (
      <>
        We believe that man is lost in sin and must be born again to enter the
        Kingdom of God. We believe that for lost and sinful men, regeneration by
        the Holy Ghost is absolutely essential. The salvation of a man&rsquo;s soul
        is by grace alone, through personal faith in the finished work of Christ on
        the Cross.
      </>
    ),
  },
  {
    title: "The Church",
    body: (
      <>
        We believe that the local church is a group of believers baptized in water,
        assembled together for edification, exhortation, and evangelism as commanded
        by Christ in the Great Commission — preaching the gospel to every creature.
        We believe God&rsquo;s program today is centered in the local New Testament
        church, which is independent and missionary-minded.
      </>
    ),
  },
  {
    title: "The Second Coming",
    body: (
      <>
        We believe the Lord Jesus Christ Himself is coming again in the air at any
        moment to rapture His own and to reward their service. The unbelievers left
        behind will go through a seven-year period called the Tribulation, after
        which Christ shall return visibly to the earth with His saints to set up His
        Kingdom of one thousand years of righteous rule. After this, the unbelievers
        of all the ages will stand at the Great White Throne to be judged and cast
        into the Lake of Fire, separated from God forever, while believers will
        spend eternity in the fullness of joy in Heaven with the Lord.
      </>
    ),
  },
  {
    title: "Positional Statement",
    body: (
      <>
        We hold to the historic Baptist position of Biblical separation. We are
        Biblical Fundamentalists and repudiate the liberal and unscriptural
        religious trends of the day: Ecumenicalism, Neo-Orthodoxy, New
        Evangelicalism, and the excesses of the Charismatic Movement.
      </>
    ),
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

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, i) => (
              <div
                key={section.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-brown-deep/[.04] hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-5">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/15 text-gold-dark font-serif font-bold text-lg flex items-center justify-center mt-1">
                    {i + 1}
                  </span>
                  <div>
                    <h2 className="font-serif text-xl md:text-2xl font-bold text-text-dark mb-3">
                      {section.title}
                    </h2>
                    <p className="text-text-body leading-relaxed text-[1.05rem]">
                      {section.body}
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
