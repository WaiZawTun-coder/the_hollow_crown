import Nav from "@/components/nav";
import { QueryProvider } from "@/providers/query-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Hollow Crown",
  description:
    "Three factions. One crown. No rightful king. Enter the dark fantasy world of Thornmarch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <QueryProvider>
          <main className="min-h-screen bg-[#0B0A09] text-[#D8D0C0]">
            {children}
          </main>
        </QueryProvider>
        <Analytics />
        <SpeedInsights />

      </body>
    </html>
  );
}
