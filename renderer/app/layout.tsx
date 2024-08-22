import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import React from "react";
import "./globals.css";
// import { Toaster } from "sonner";

const cairo = Cairo({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "Buster",
    description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cairo.className}>
        <main className="container">{children}</main>
        {/* <Toaster richColors /> */}
      </body>
    </html>
  );
}
