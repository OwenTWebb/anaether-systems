import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anaether Systems",
  description: "Autonomous systems and engineering innovation.",
  icons: {
    icon: "/assets/logos/logo-icon-dark.svg",
    shortcut: "/assets/logos/logo-icon-dark.svg",
  },
  openGraph: {
    title: "Anaether Systems",
    description: "Autonomous systems and engineering innovation.",
    type: "website",
  },
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
