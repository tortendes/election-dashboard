import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image"
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/interactive/color-mode";
import DesktopNavbar from "@/components/static/navigation-bar";
import { MobileNavigation } from "@/components/static/navigation-drawer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Redmont Decides - May Presidential Results",
  description: "Redmont decides their next president.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <nav className="px-4 py-2 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-0.5">
              <Image src="/icons/Redmont_Flag.svg" className="max-w-6" width={129} height={86} alt="Square flag of the Commonwealth of Redmont" />
              <span className="font-bold uppercase">Election Center</span>
            </div>
          </Link>
          <div className="hidden invisible md:block md:visible">
            <DesktopNavbar />
          </div>
          <div className="md:hidden md:invisible block visible">
            <MobileNavigation />
          </div>
          <div className="hidden invisible md:visible md:flex md:items-center md:gap-2">
            <ModeToggle />
            <a href="https://tpanews.demcraft.site" target="_blank">
              <Image src="/icons/tpa-default-black.svg" alt="TPA News" className="dark:hidden dark:invisible w-32" width={785} height={98} />
              <Image src="/icons/tpa-default-white.svg" alt="TPA News" className="not-dark:hidden not-dark:invisible w-32" width={785} height={98}/>
            </a>
          </div>
        </nav>
        {children}
        <Toaster />
      </ThemeProvider>
      </body>
    </html>
  );
}
