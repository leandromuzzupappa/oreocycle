import "@assets/styles/globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";

const guardianFont = localFont({
  src: [
    {
      path: "../assets/fonts/guardiansans-regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/guardiansans-medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/guardiansans-semibold.woff",
      weight: "600",
      style: "normal",
    },
  ],
});

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
      <body className={guardianFont.className}>{children}</body>
    </html>
  );
}
