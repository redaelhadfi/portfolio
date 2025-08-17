import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { CursorGlow } from "@/components/ui/cursor-glow";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Reda El Hadfi — Software Engineer",
  description: "Portfolio of Reda El Hadfi, a passionate Software Engineer specializing in building modern web applications with Next.js, React, and TypeScript. Explore projects, skills, and contact information.",
  keywords: ["Software Engineer", "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Portfolio", "Developer"],
  authors: [{ name: "Reda El Hadfi" }],
  creator: "Reda El Hadfi",
  metadataBase: new URL("https://reda-el-hadfi.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reda-el-hadfi.com",
    siteName: "Reda El Hadfi Portfolio",
    title: "Reda El Hadfi — Software Engineer",
    description: "Portfolio of Reda El Hadfi, a passionate Software Engineer specializing in building modern web applications.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reda El Hadfi - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reda El Hadfi — Software Engineer",
    description: "Portfolio of Reda El Hadfi, a passionate Software Engineer specializing in building modern web applications.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <CursorGlow />
        </ThemeProvider>
      </body>
    </html>
  );
}
