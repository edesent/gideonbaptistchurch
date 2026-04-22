import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Pastor Ross",
  description:
    "Meet Pastor Timothy Ross of Gideon Baptist Church in Warren, MI. Saved in 1996 and called to preach, Pastor Ross faithfully teaches the Word of God alongside his wife Julie.",
};

export default function Pastor() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-warm-white min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
              Meet Our Pastor
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-4">
              Pastor Timothy Ross
            </h1>
            <div className="w-20 h-[3px] bg-gold mx-auto mb-6 rounded" />
          </div>

          {/* Photo + Bio */}
          <div className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/pastor.jpg"
                  alt="Pastor Timothy and Julie Ross"
                  className="w-full object-cover"
                />
              </div>
              <p className="text-center text-sm text-text-light italic mt-3">
                Pastor Timothy and Julie Ross
              </p>
            </div>

            <div className="md:col-span-3 space-y-5 text-text-body leading-relaxed text-[1.05rem]">
              <p>
                Pastor Timothy Ross has faithfully served as pastor of Gideon Baptist
                Church for over a year. He was saved in June 1996 on a Saturday morning
                at a men&rsquo;s meeting at Lanakila Baptist Church in Waipahu, Hawaii,
                and felt the call to preach six months later.
              </p>
              <p>
                He earned his Bible Certificate at Coastal Baptist Church Bible
                Institute and went on to receive his B.Th. and M.Th. from Salt Lake
                Baptist Bible College.
              </p>
              <p>
                Pastor Ross has been married to his wife Julie for 34 years, and
                together they have four children. At Gideon Baptist, he ministers in
                many areas — including teaching Adult Sunday School, soul winning,
                counseling families, and preaching the whole counsel of God.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/counseling"
                  className="inline-block bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-7 py-3 rounded-full hover:bg-gold-light transition-all"
                >
                  Request Counseling
                </a>
                <a
                  href="/messages"
                  className="inline-block text-brown-deep font-semibold text-sm tracking-wide uppercase px-7 py-3 rounded-full border-2 border-brown-deep/30 hover:bg-brown-deep hover:text-white hover:border-brown-deep transition-all"
                >
                  Listen to Sermons
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
