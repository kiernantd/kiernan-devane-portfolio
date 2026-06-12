import type { Metadata } from "next";
import { IBM_Plex_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const serif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kiernan Devane — Cloud Engineer & Technical Consultant",
  description:
    "Cloud infrastructure, AI integration, and technical consulting. CS graduate from the University of Pittsburgh, pursuing AWS Solutions Architect certification.",
  openGraph: {
    title: "Kiernan Devane — Cloud Engineer & Technical Consultant",
    description:
      "Cloud infrastructure, AI integration, and technical consulting.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${mono.variable}`}>
      <body className="bg-paper text-ink font-serif antialiased">
        {children}
      </body>
    </html>
  );
}
