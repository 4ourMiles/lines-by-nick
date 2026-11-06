import type { Metadata, Viewport } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import "./home.css";
import "./inner.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LBN Design — Lines by Nick",
  description:
    "Lines of code, lines of ink. LBN Design writes React, React Native, Next.js and Salesforce software and draws the UI, brand, logo and graphics to match. One studio for both halves of your business.",
  metadataBase: new URL("https://lbn.design"),
  openGraph: {
    title: "LBN Design",
    description: "Lines of code. Lines of ink. Lines by Nick.",
    url: "https://lbn.design",
    siteName: "LBN Design",
    type: "website",
  },
  icons: { icon: "/brand/lbn-mark.svg" },
};

export const viewport: Viewport = {
  themeColor: "#4ea3b5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={rubik.variable}>
      <body>{children}</body>
    </html>
  );
}
