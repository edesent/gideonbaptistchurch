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
  title: {
    default: "Gideon Baptist Church | Independent Baptist Church in Warren, MI",
    template: "%s | Gideon Baptist Church",
  },
  description:
    "Gideon Baptist Church is an independent, KJV Bible-believing Baptist church in Warren, MI. Pastor Timothy Ross welcomes you to Sunday worship at 10 AM & 11 AM and Wednesday Bible study at 7 PM. Serving Macomb County since 1956.",
  keywords: [
    "Gideon Baptist Church",
    "Baptist church Warren MI",
    "independent Baptist church Michigan",
    "KJV church Warren",
    "Pastor Timothy Ross",
    "church near me Warren Michigan",
    "Bible believing church Macomb County",
    "Sunday worship Warren MI",
    "Baptist church near me",
  ],
  openGraph: {
    title: "Gideon Baptist Church | Warren, MI",
    description:
      "An independent, missions-minded Baptist church serving Warren, MI since 1956. Join Pastor Timothy Ross for Sunday worship and Wednesday Bible study. All are welcome!",
    type: "website",
    locale: "en_US",
    siteName: "Gideon Baptist Church",
  },
  icons: {
    icon: "/gideon-favcon.png",
  },
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
