import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav/navbar";
import Footer from "./components/footer/footer";

const poppins = Poppins({ subsets: ["latin"],
weight:['400','700'] });

export const metadata: Metadata = {
  title: "Adico Technologies",
  description: "Where we sell quality tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow bg-slate-500">
            {children}
          </main>
          <Footer/> 
        </div>
      </body>
    </html>
  );
}
