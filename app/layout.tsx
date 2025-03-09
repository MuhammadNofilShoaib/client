import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jacob Frost",
  description: "Assisting Enterprenuers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-black font-sans max-w-[1280px] mx-auto`} 
      >
        {children}
      </body>
    </html>
  );
}
