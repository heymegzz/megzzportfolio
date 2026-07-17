import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Doto } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const doto = Doto({
  subsets: ["latin"],
  variable: "--font-doto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meghna Nair",
  description: "Portfolio of Meghna Nair, a Full-Stack AI & ML Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${doto.variable} font-sans bg-white text-zinc-950 dark:bg-black dark:text-zinc-50 antialiased transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
