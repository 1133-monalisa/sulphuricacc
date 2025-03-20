"use client";

import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import "../app/globals.css"; // Adjust path if necessary

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function ClientLayout({ children }) {
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const linkVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 text-gray-100">
        <header className="relative bg-gradient-to-r from-gray-900/90 to-blue-900/90 backdrop-blur-md border-b border-blue-700/30">
          <motion.nav
            initial="hidden"
            animate="visible"
            variants={navVariants}
            className="mx-auto px-10 py-4 flex justify-between items-center"
          >
            <Link
              href="/"
              className="text-2xl font-bold"
            >
              Sulfuric Acid
            </Link>
            <div className="flex space-x-4">
              <motion.div variants={linkVariants} whileHover="hover">
                <Button
                  variant="ghost"
                  asChild
                  className="text-blue-100 text-xl  hover:bg-white hover:text-black rounded-full px-6 py-2 transition-all duration-300 font-semibold"
                >
                  <Link href="/facts">Facts</Link>
                </Button>
              </motion.div>
              <motion.div variants={linkVariants} whileHover="hover">
                <Button
                  variant="ghost"
                  asChild
                  className="text-blue-100 text-xl hover:bg-white hover:text-black rounded-full px-6 py-2 transition-all duration-300 font-semibold"
                >
                  <Link href="/faq">FAQ</Link>
                </Button>
              </motion.div>
            </div>
          </motion.nav>
          <div className="absolute inset-0 bg-blue-500/10 blur-3xl opacity-20 pointer-events-none" />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
