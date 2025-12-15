import { DM_Sans, Space_Mono } from "next/font/google";

export const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

export const space_mono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
});