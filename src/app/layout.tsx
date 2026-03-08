import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { StarsBackground } from "./Components/StarsBackground";
import { ShootingStars } from "./Components/StarsShoot";
import Navbara from "./Components/Navbara";
import { LanguageProvider } from "./Components/LanguageContext";
import AnimationProvider from "./Components/AnimationProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Karim Zaafrani | Software Engineer",
  description: "Portfolio of Karim Zaafrani — Software Engineering student, Competitive Programming Champion, Full-Stack Developer.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white`}>
        <LanguageProvider>
          <div className="overflow-x-hidden min-h-screen w-full relative">
            <div className="fixed inset-0 z-0 pointer-events-none">
              <ShootingStars className="h-full w-full" />
              <StarsBackground className="h-full w-full" />
            </div>
            <AnimationProvider>
              <Navbara />
              <main className="relative z-10">{children}</main>
            </AnimationProvider>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
