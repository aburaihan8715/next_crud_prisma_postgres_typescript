import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppNav from "@/components/ui/AppNav";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEXT CRUD",
  description: "Next js crud with prisma postgres and typescript",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-4xl mx-auto flex flex-col justify-between min-h-screen">
          <AppNav />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
