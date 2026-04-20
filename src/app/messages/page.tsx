import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getRecentVideos } from "@/lib/youtube";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Messages",
  description:
    "Watch recent sermons and Sunday worship services from Gideon Baptist Church in Warren, MI. KJV Bible preaching from Pastor Timothy Ross.",
};

export const revalidate = 600;

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function Messages() {
  const videos = await getRecentVideos();
  const [featured, ...rest] = videos;

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-warm-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
              Sermons & Services
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-4">
              Messages
            </h1>
            <div className="w-20 h-[3px] bg-gold mx-auto mb-6 rounded" />
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Catch up on recent Sunday services, sermons, and special messages
              from Gideon Baptist Church.
            </p>
          </div>

          {videos.length === 0 ? (
            <div className="text-center py-16 text-text-light">
              <p>No messages available right now. Please check back soon.</p>
              <a
                href="https://www.youtube.com/@gideonbaptist9814"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-gold text-brown-deep font-semibold px-8 py-3 rounded-full hover:bg-gold-light transition-all"
              >
                Visit Our YouTube Channel
              </a>
            </div>
          ) : (
            <>
              {/* Featured latest */}
              {featured && (
                <div className="mb-14 bg-white rounded-2xl overflow-hidden shadow-md">
                  <div className="relative aspect-video bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${featured.id}`}
                      title={featured.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  <div className="p-8">
                    <span className="inline-block text-[0.7rem] font-bold tracking-[0.15em] uppercase text-gold-dark mb-2">
                      Latest Message
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark mb-2">
                      {featured.title}
                    </h2>
                    <p className="text-sm text-text-light">
                      {formatDate(featured.published)}
                    </p>
                  </div>
                </div>
              )}

              {/* Grid of rest */}
              {rest.length > 0 && (
                <>
                  <h3 className="font-serif text-2xl font-bold text-text-dark mb-6">
                    Previous Messages
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rest.map((video) => (
                      <a
                        key={video.id}
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all"
                      >
                        <div className="relative aspect-video bg-brown-deep overflow-hidden">
                          {video.thumbnail && (
                            <img
                              src={video.thumbnail}
                              alt={video.title}
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          )}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-gold/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-brown-deep ml-1">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-5">
                          <h4 className="font-serif text-base font-semibold text-text-dark mb-1 line-clamp-2 group-hover:text-gold-dark transition-colors">
                            {video.title}
                          </h4>
                          <p className="text-xs text-text-light">
                            {formatDate(video.published)}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </>
              )}

              {/* CTA */}
              <div className="text-center mt-16">
                <a
                  href="https://www.youtube.com/@gideonbaptist9814"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-gold hover:bg-gold-light transition-all"
                >
                  View All on YouTube
                </a>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
