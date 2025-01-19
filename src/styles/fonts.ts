import { Fira_Code, Poppins } from "next/font/google";

export const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});
