import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const FiraCode = localFont({
  src: "../../public/fonts/FiraCode.ttf",
  variable: "--font-fira",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${FiraCode.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
