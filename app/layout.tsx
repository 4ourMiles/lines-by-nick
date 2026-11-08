import type { Metadata, Viewport } from "next";
import { Unbounded, Figtree } from "next/font/google";
import "./globals.css";
import "./print.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-unbounded",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lines by Nick — LBN Design",
  description:
    "Lines of code. Lines of ink. One studio that writes the software and draws the brand: web and mobile apps, Salesforce, AI, logos and illustration.",
  metadataBase: new URL("https://lbn.design"),
  openGraph: {
    title: "Lines by Nick — LBN Design",
    description: "Lines of code. Lines of ink. Lines by Nick.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f3efe4",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${unbounded.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
