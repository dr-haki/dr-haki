import type { Metadata } from "next";
import "./normalize.css";
import "@repo/styles/main";
import { dm_sans } from './fonts'
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Taoist Void",
  description: "Bytes of Wisdom for the modern life.",
  keywords: ["taoism", "philosophy", "modern life", "minimalism", "zen"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en">
        <body
          className={`${dm_sans.className}`}
        >
         {children}
        </body>
      </html>
    
  );
}
