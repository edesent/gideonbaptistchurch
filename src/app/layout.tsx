import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gideonbaptistchurch.com"),
  title: {
    default:
      "Gideon Baptist Church — KJV Independent Baptist Church in Warren, MI",
    template: "%s | Gideon Baptist Church",
  },
  description:
    "A warm, Bible-believing Independent Baptist church in Warren, MI. Join Pastor Timothy Ross for Sunday worship at 10 & 11 AM and Wednesday Bible study at 7 PM. KJV preaching, hymns, and fellowship — all are welcome.",
  keywords: [
    "Gideon Baptist Church",
    "Baptist church Warren MI",
    "Independent Baptist church Michigan",
    "KJV Bible church Warren",
    "Pastor Timothy Ross",
    "church near me Warren Michigan",
    "Bible believing church Macomb County",
    "Sunday worship Warren MI",
    "Baptist church Warren Michigan",
    "pastoral counseling Warren MI",
    "King James Bible church near me",
  ],
  authors: [{ name: "Gideon Baptist Church" }],
  creator: "Gideon Baptist Church",
  publisher: "Gideon Baptist Church",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gideon Baptist Church — Warren, MI",
    description:
      "A warm Independent Baptist church in Warren, MI since 1956. Join us for Sunday worship, Bible study, and fellowship. Pastor Timothy Ross preaches from the King James Bible — all are welcome.",
    url: "https://www.gideonbaptistchurch.com",
    type: "website",
    locale: "en_US",
    siteName: "Gideon Baptist Church",
    images: [
      {
        url: "/building-outside.jpg",
        width: 1200,
        height: 630,
        alt: "Gideon Baptist Church building in Warren, Michigan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gideon Baptist Church — Warren, MI",
    description:
      "A warm Independent KJV Baptist church serving Warren, MI since 1956. All are welcome.",
    images: ["/building-outside.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/gideon-favcon.png",
  },
  category: "religion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
