import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "./globals.css";
import "./case-studies.css";
import "./enhancements.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://studiowolfcode.netlify.app"),
  title: {
    default: "StudioWolfCode — Frontend / Product Engineer",
    template: "%s — StudioWolfCode",
  },
  description:
    "Saúl Alejos Garay builds thoughtful product interfaces with React, Next.js and TypeScript.",
  openGraph: {
    title: "StudioWolfCode — Frontend / Product Engineer",
    description: "Product interfaces and frontend engineering by Saúl Alejos Garay.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StudioWolfCode — Frontend / Product Engineer",
    description: "Product interfaces and frontend engineering by Saúl Alejos Garay.",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
