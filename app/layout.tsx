import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

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
    <html lang="en">
      <body>
        <Nav />

        <main className="min-h-screen bg-[#0B0A09] text-[#D8D0C0]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
