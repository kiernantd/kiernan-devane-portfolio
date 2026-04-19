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
  title: "Kiernan Devane — Jr Software Engineer",
  description:
    "CS graduate building thoughtful software on the web — and in the terminal. Currently interviewing.",
  openGraph: {
    title: "Kiernan Devane — Jr Software Engineer",
    description:
      "CS graduate building thoughtful software on the web — and in the terminal.",
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
