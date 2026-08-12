import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "./globals.css";
import "./case-studies.css";
import "./tailwind.css";
import "./experimental.css";
import "./fixes.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://studiowolfcodedev.netlify.app"),
  title: {
    default: "Saúl Alejos Garay — Frontend Engineer · Product UI · AI",
    template: "%s — StudioWolfCode",
  },
  description: "Senior Frontend Engineer focused on Product UI, Design Systems, SaaS interfaces and emerging AI experiences.",
  openGraph: {
    title: "Saúl Alejos Garay — Frontend Engineer · Product UI · AI",
    description: "Frontend engineering for complex products, design systems and emerging AI interfaces.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saúl Alejos Garay — Frontend Engineer · Product UI · AI",
    description: "Frontend engineering for complex products, design systems and emerging AI interfaces.",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
