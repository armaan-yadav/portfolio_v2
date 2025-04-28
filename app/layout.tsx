import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { GeistMono } from "geist/font";

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
    // url: "https://armaan-yadav.vercel.app",
    // images: "https://armaan-yadav.vercel.app/api/og",
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
      <body className={GeistMono.className}>
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
