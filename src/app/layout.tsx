import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RootLayoutClient from "@/components/RootLayoutClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next App Route PWA Template",
  description:
    "Progressive web app using next app route and custom service worker.",
  manifest: "/manifest.json",
  icons: [
    { rel: "icon", type: "image/png", url: "/images/icon-192.png" },
    { rel: "icon", type: "image/png", url: "/images/icon-512.png" },
    { rel: "apple-touch-icon", url: "/images/icon-masked-512.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
