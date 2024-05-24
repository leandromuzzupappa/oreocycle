import "@assets/styles/globals.css";

import type { Metadata } from "next";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Motorcycles | All New Model Motorbikes in USA | Royal Enfield",
  description:
    "Royal Enfield USA - We have been creating modern classics since 1901. Manufacturers of the Bullet, Classic, INT650, Continental GT, Himalayan and Thunderbird series.",
  keywords:
    "Royal Enfield, Royal Enfield USA, Royal Enfield Motorcycles, Royal Enfield Bikes, Royal Enfield Motorbikes, Royal Enfield Classic, Royal Enfield Bullet, Royal Enfield INT650, Royal Enfield Continental GT, Royal Enfield Himalayan, Royal Enfield Thunderbird",
  openGraph: {
    title: "Motorcycles | All New Model Motorbikes in USA | Royal Enfield",
    description:
      "Royal Enfield USA - We have been creating modern classics since 1901. Manufacturers of the Bullet, Classic, INT650, Continental GT, Himalayan and Thunderbird series.",
    type: "website",
    url: "https://royalenfield.com/usa/",
    images: [
      {
        url: "https://royalenfield.com/usa/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Royal Enfield USA",
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
      <body className={inter.className + " overflow-x-hidden"}>{children}</body>
    </html>
  );
}
