import "/public/assets/css/vendors/bootstrap.min.css";
import "/public/assets/css/vendors/swiper-bundle.min.css";
import "/public/assets/css/vendors/carouselTicker.css";
import "/public/assets/css/vendors/magnific-popup.css";
import "/public/assets/fonts/remixicon/remixicon.css";
import "/public/assets/css/main.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Urbanist, Playfair_Display, DM_Mono } from "next/font/google";

const urbanist = Urbanist({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--urbanist",
  display: "swap",
});
const playfair_display = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--playpair",
  display: "swap",
});
const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--dmMono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samdev | Fullstack Developer Portfolio",
  description: "Explore the portfolio of Samdev, a Fullstack Developer skilled in modern web technologies like React, Next.js, and Node.js.",
  keywords: ["Fullstack Developer", "Web Developer", "React", "Next.js", "Portfolio"],
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Samdev | Fullstack Developer",
    description: "Explore the portfolio of Samdev, a Fullstack Developer skilled in modern web technologies.",
    url: "https://yourdomain.com",
    siteName: "Samdev Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Samdev Portfolio OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samdev | Fullstack Developer",
    description: "Explore modern fullstack projects and web solutions by Samdev.",
    images: ["https://yourdomain.com/og-image.png"],
  },
  authors: [{ name: "Samdev" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="dark" className="zelio">
      <body className={`${urbanist.variable} ${playfair_display.variable} ${dmMono.variable}`}>
        {children} <Analytics />
      </body>
    </html>
  );
}
