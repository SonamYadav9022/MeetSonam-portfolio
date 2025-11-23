import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MeetSonam",
  description:
    "Welcome to MeetSonam – the personal portfolio of Sonam Yadav, showcasing her journey as a Computer Engineering student, Data Analyst, and AI Enthusiast.",
  keywords: [
    "Sonam Yadav",
    "MeetSonam",
    "Portfolio",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Data Analytics",
    "AI",
    "Python",
    "Full Stack Development",
    "Machine Learning",
  ],
  authors: [{ name: "Sonam Yadav" }],
  icons: {
    icon: "/favicon.ico", 
  },
  openGraph: {
    title: "MeetSonam",
    description:
      "Discover Sonam Yadav’s work, projects, and achievements in AI, Data Analytics, and Web Development.",
    url: "https://your-portfolio-link.com", // update when deployed
    siteName: "MeetSonam",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MeetSonam",
    description:
      "Explore the portfolio of Sonam Yadav – AI Enthusiast, Data Analyst, and Full-Stack Developer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
