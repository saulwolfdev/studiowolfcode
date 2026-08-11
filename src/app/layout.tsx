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
  metadataBase: new URL("https://studiowolfcode.netlify.app"),
  title: {
    default: "StudioWolfCode — Senior Product Designer y Frontend Engineer",
    template: "%s — StudioWolfCode",
  },
  description:
    "Saul Garay diseña y construye productos digitales combinando Product Design, UX, Frontend e Inteligencia Artificial.",
  openGraph: {
    title: "StudioWolfCode — Senior Product Designer y Frontend Engineer",
    description: "Product Design, Design Systems e ingeniería frontend por Saul Garay.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StudioWolfCode — Senior Product Designer y Frontend Engineer",
    description: "Product Design, Design Systems e ingeniería frontend por Saul Garay.",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
