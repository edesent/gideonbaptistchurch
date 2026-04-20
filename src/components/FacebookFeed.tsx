"use client";

import { useEffect, useRef, useState } from "react";

const MAX_WIDTH = 500;
const MIN_WIDTH = 180;

export default function FacebookFeed({ pageUrl }: { pageUrl: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(MAX_WIDTH);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const update = () => {
      const w = Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, el.clientWidth));
      setWidth(w);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const href = encodeURIComponent(pageUrl);
  const src = `https://www.facebook.com/plugins/page.php?href=${href}&tabs=timeline&width=${width}&height=900&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;

  return (
    <div ref={wrapperRef} className="w-full" style={{ maxWidth: MAX_WIDTH }}>
      <iframe
        src={src}
        title="Gideon Baptist Church Facebook posts"
        style={{ border: "none", overflow: "hidden", width: `${width}px`, height: "900px" }}
        scrolling="no"
        allow="encrypted-media"
        loading="lazy"
      />
    </div>
  );
}
