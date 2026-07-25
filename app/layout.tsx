import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import MouseGlow from "@/components/MouseGlow";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "Batman | Freelance Digital Marketer & Video Editor",
    template: "%s | Batman",
  },

  description:
    "Premium portfolio of Batman — Freelance Digital Marketer, Video Editor, Content Creator and AI enthusiast.",

  keywords: [
    "Batman",
    "Portfolio",
    "Digital Marketing",
    "Video Editor",
    "Content Creator",
    "Next.js",
    "React",
    "Freelancer",
    "AI",
  ],

  authors: [
    {
      name: "Batman",
    },
  ],

  creator: "Batman",
  publisher: "Batman",
  applicationName: "Batman Portfolio",
  category: "Portfolio",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "Batman Portfolio",
    title: "Batman | Freelance Digital Marketer & Video Editor",
    description:
      "Premium Batman-inspired portfolio showcasing marketing, editing, creative work and web development.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Batman Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Batman Portfolio",
    description: "Freelance Digital Marketer • Video Editor • Content Creator",
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="bg-[#0B0B0B] text-white antialiased selection:bg-[#B68D40] selection:text-black">
        {/* Scroll Progress */}
        <ScrollProgress />

        {/* Mouse Glow */}
        <MouseGlow />

        {/* Background Effects */}
        <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
          {/* Gold Glow */}
          <div className="absolute top-0 left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[#B68D40]/10 blur-[160px]" />

          {/* Red Glow */}
          <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#8B1E24]/10 blur-[140px]" />

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
              `,
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        {/* Website */}
        <main className="relative min-h-screen">{children}</main>
      </body>
    </html>
  );
}
