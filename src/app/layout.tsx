import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "./context/languageContext";
import LayoutWrapper from "./provider/layoutWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BPN | Perusahaan Mesin Genset Indonesia",
  description: "Cari Kebutuhan Mesin Genset Anda disini",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/pagedone@1.2.2/src/css/pagedone.css"
          rel="stylesheet"
        />
        <title>BPN | Perusahaan Mesin Genset Indonesia</title>
        <meta
          name="description"
          content="Cari Kebutuhan Mesin Genset Anda disini"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />
        <link rel="manifest" href="site.webmanifest" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <LanguageProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </LanguageProvider>
        <Script
          src="https://cdn.jsdelivr.net/npm/pagedone@1.2.2/src/js/pagedone.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
