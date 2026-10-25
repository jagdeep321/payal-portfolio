import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif-accent",
  display: "swap",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Payal Arora | Digital Marketer & Social Media Executive",
  description:
    "Freelance digital marketer and social media executive specializing in brand growth, video hooks, Meta Ads, and bespoke digital narratives.",
  keywords: [
    "Payal Arora",
    "Digital Marketer",
    "Social Media Executive",
    "Meta Ads",
    "Content Strategy",
    "Reels Creation",
    "Graphic Design",
    "Amritsar",
  ],
  authors: [{ name: "Payal Arora" }],
  creator: "Payal Arora",
  openGraph: {
    title: "Payal Arora | Digital Marketer & Social Media Executive",
    description:
      "Igniting brand growth and digital presence through creative strategies.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} ${playfair.variable}`}
      style={{
        fontFamily: plusJakartaSans.style.fontFamily,
        ["--font-outfit" as any]: outfit.style.fontFamily,
        ["--font-plus-jakarta" as any]: plusJakartaSans.style.fontFamily,
        ["--font-serif-accent" as any]: playfair.style.fontFamily,
      }}
      suppressHydrationWarning
    >
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body className="min-h-screen bg-[#FAF8F5] text-[#24212A] antialiased selection:bg-[#B8A4D8] selection:text-[#24212A]">
        <MantineProvider theme={theme} defaultColorScheme="light">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
