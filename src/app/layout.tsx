import type { Metadata } from "next";
import { Pacifico } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header/page";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog Andressa Rayanne",
  description: "Meu Blog pessoal para meninas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body className={`${pacifico}`}>{children}</body>
    </html>
  );
}
