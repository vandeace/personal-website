import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jafar | Personal",
  metadataBase: new URL("https://www.mjafarashsiddiq.me"),
  alternates: {
    canonical: "/",
  },
  authors: [
    { name: "Muhammad Jafar Ash Siddiq", url: "https://github.com/vandeace" },
  ],
  description: "Muhammad Jafar Ash Siddiq's personal portfolio website",
  openGraph: {
    title: "Muhammad Jafar Ash Siddiq | Personal",
    description: "Muhammad Jafar Ash Siddiq's personal portfolio website",
    images: [
      {
        url: "/photo.jpeg",
        alt: "Muhammad Jafar Ash Siddiq's Portrait",
        width: 640,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="iTUw4obxUmdF4S_atmoYFQUKOA57TuI2EFKYmXj1mtw"
        />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
