import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DIGIX / Digital Creative Studio",
  description: "Websites. Apps. Video. AI.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}