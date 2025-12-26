import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { GeistMono } from "geist/font";
import { Metadata } from "next";
import { ThemeProvider } from "../components/theme-provider";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'


export const metadata: Metadata = {
  title: "Armaan Yadav",
  description: "I know how to figure things out.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
  },
  openGraph: {
    title: "Armaan Yadav",
    description: "I know how to figure things out.",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://armaanyadav.site",
    siteName: "Armaan Yadav",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <GoogleTagManager gtmId="G-1JY768PP5D" />
      <body className={GeistMono.className}>
        <SmoothCursor />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className={`flex flex-col p-5`}>
            <div className="flex justify-center items-center mb-14">
              <Header />
            </div>
            <div className="flex justify-center items-center">{children}</div>
            <div className="mt-10">
              <Footer />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
