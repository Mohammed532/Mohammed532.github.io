import type { Metadata } from "next";
import { space_mono } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "Mohammed Akinbayo | %s",
    default: "Mohammed Akinbayo"
  },
  description: "Portfolio site",
  keywords: ['Portfolio', 'Computer Science', 'Howard University', 'Javascript', 'Robotics', 'Hackathon'],
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
