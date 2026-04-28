import type { Metadata } from "next";
import Providers from "./providers"
import { space_mono } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "Mohammed Akinbayo | %s",
    default: "Mohammed Akinbayo"
  },
  description: "Portfolio site",
  keywords: ['Portfolio', 'Computer Science', 'Howard University', 'Javascript', 'Robotics', 'Hackathon'],
  metadataBase: new URL(`https://mohammed532.github.io`),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" data-theme='night' suppressHydrationWarning>
      <body className={space_mono.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
