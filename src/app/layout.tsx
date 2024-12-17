import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from "next/font/google";

import "@/app/global.css";

import AppWrapper from "./components/AppWrapper";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marton Paulo",
  description:
    "Portfolio and personal website of Marton Paulo, Front-End Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${robotoMono.variable}`}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
