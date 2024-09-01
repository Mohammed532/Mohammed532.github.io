import type { Metadata } from "next";
import { space_mono } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammed Akinbayo",
  description: "Portfolio site for Mohammed Akinbayo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme='night'>
      <body className={space_mono.className}>{children}</body>
    </html>
  );
}
