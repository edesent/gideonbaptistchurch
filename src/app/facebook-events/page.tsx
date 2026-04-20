import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facebook Event History",
  description:
    "Recent public Facebook posts and event history from Gideon Baptist Church in Warren, MI.",
};

const FB_PAGE_URL = "https://www.facebook.com/profile.php?id=100080675370083";

export default function FacebookEvents() {
  const href = encodeURIComponent(FB_PAGE_URL);
  const embedSrc = `https://www.facebook.com/plugins/page.php?href=${href}&tabs=timeline&width=500&height=900&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-warm-white min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
              From Our Facebook
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-4">
              Facebook Event History
            </h1>
            <div className="w-20 h-[3px] bg-gold mx-auto mb-6 rounded" />
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Browse recent public posts and past events shared from our Facebook page.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4 md:p-6 flex justify-center">
            <iframe
              src={embedSrc}
              title="Gideon Baptist Church Facebook posts"
              width="500"
              height="900"
              style={{ border: "none", overflow: "hidden", maxWidth: "100%" }}
              scrolling="no"
              allow="encrypted-media"
              loading="lazy"
            />
          </div>

          <div className="text-center mt-10">
            <a
              href={FB_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-gold hover:bg-gold-light transition-all"
            >
              Visit Our Facebook Page
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
