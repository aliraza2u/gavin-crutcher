import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gavin Crutcher",
  description: "Gavin Crutcher, the days that I miss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
