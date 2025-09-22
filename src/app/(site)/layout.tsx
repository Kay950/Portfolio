"use client";

import "@/styles/globals.css";

// import Footer from "@/components/Footer";

import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import ToasterContext from "../context/ToastContext";
import Navbar from "@/components/MainPortfolio/Navbar";



const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + " relative min-h-screen text-white"}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="dark"
        >
          </ThemeProvider>

        

          <div className="relative z-3">
            <NextTopLoader />
            <Navbar />
            {children}
            
            <div className= "absolute inset-0 bg-repeat z-1"
            style={{
              backgroundImage: "url('/images/lines_up.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}>
            </div>

            {/* <Home /> */}
            
            {/* <Navbar />
            {children}
            <ContactPage /> */}
          </div>
          </body>
          </html>











  );}
