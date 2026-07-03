import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "KapeClub | Find work-friendly cafes with fast WiFi and live occupancy",
  description:
    "Discover verified, work-ready cafes with fast WiFi, power outlets, and real-time crowd telemetry. Download KapeClub for Android and start cafe-hopping productively.",
  keywords: [
    "KapeClub",
    "cafe finder",
    "work cafe",
    "fast wifi cafes",
    "remote work philippines",
    "study out cafes",
    "cafe hop planner",
    "coworking space",
  ],
  authors: [{ name: "KapeClub" }],
  openGraph: {
    type: "website",
    title: "KapeClub | Find work-friendly cafes with fast WiFi and live occupancy",
    description:
      "Discover verified, work-ready cafes with fast WiFi, power outlets, and real-time crowd telemetry. Download KapeClub for Android.",
    images: ["/hero-preview.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "KapeClub | Find work-friendly cafes with fast WiFi",
    description:
      "Discover verified, work-ready cafes with fast WiFi, power outlets, and real-time crowd telemetry. Download KapeClub for Android.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.variable}>
        {children}
      </body>
    </html>
  );
}
