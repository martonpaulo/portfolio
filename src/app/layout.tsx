import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from "next/font/google";

import "@/app/global.css";

import AppWrapper from "./components/AppWrapper";
import { ThemeProvider } from "@/app/components/theme-provider";

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
  title: "Marton Paulo | Front-End Dev",
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
      <head>
        <meta name="apple-mobile-web-app-title" content="martonpaulo" />
      </head>
      <body className={`${poppins.variable} ${robotoMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppWrapper>{children}</AppWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
