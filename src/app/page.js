"use client";
import data from "@/data/data.json";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function Home() {
  const previewFacts = data.facts.slice(0, 2);
  const previewFaqs = data.faqs.slice(0, 2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const glowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.2,
      transition: { duration: 0.5, yoyo: Infinity },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 text-gray-100 overflow-hidden">

      {/* Main Content */}
      <div className="mx-auto px-20 py-10">
        {/* Facts Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-100 bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            Interesting Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewFacts.map((fact) => (
              <motion.div
                key={fact.id}
                variants={itemVariants}
                whileHover="hover"
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-gray-800/90 to-blue-900/90 backdrop-blur-md border border-blue-700/30 hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <img
                        src={fact.image}
                        alt={fact.title}
                        className="w-full h-48 object-cover rounded-t-xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-t-xl pointer-events-none" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 px-5">
                    <CardTitle className="text-xl mb-2 text-blue-100 group-hover:text-blue-50 transition-colors duration-300">
                      {fact.title}
                    </CardTitle>
                    <p className="text-gray-100 font-light leading-relaxed">
                      {fact.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            <motion.div variants={itemVariants} whileHover="hover">
              <Card className="h-full bg-gradient-to-br from-blue-900/80 to-indigo-900/80 backdrop-blur-md border-dashed border-blue-500/50 hover:shadow-xl transition-all duration-300 rounded-xl">
                <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-400 mb-4 group-hover:text-indigo-300 transition-colors duration-300"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                  <h3 className="text-xl font-bold text-blue-100 mb-2 group-hover:text-blue-50">
                    Discover More Facts
                  </h3>
                  <p className="text-gray-100 font-light mb-4">
                    Explore dozens of fascinating details about sulfuric acid
                  </p>
                  <Button
                    asChild
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-2 transform hover:scale-105 transition-all duration-300"
                  >
                    <Link href="/facts">View All Facts</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* FAQs Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-100 bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewFaqs.map((faq) => (
              <motion.div
                key={faq.id}
                variants={itemVariants}
                whileHover="hover"
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-gray-800/90 to-blue-900/90 backdrop-blur-md border border-blue-700/30 hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <img
                        src={faq.image}
                        alt={faq.question}
                        className="w-full h-48 object-cover rounded-t-xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-t-xl pointer-events-none" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 px-5">
                    <CardTitle className="text-xl mb-2 text-blue-100 group-hover:text-blue-50 transition-colors duration-300">
                      {faq.question}
                    </CardTitle>
                    <p className="text-gray-100 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            <motion.div variants={itemVariants} whileHover="hover">
              <Card className="h-full bg-gradient-to-br from-blue-900/80 to-indigo-900/80 backdrop-blur-md border-dashed border-blue-500/50 hover:shadow-xl transition-all duration-300 rounded-xl">
                <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-400 mb-4 group-hover:text-indigo-300 transition-colors duration-300"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                  <h3 className="text-xl font-bold text-blue-100 mb-2 group-hover:text-blue-50">
                    Explore More Questions
                  </h3>
                  <p className="text-gray-100 font-light mb-4">
                    Find answers to more questions about sulfuric acid
                  </p>
                  <Button
                    asChild
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-2 transform hover:scale-105 transition-all duration-300"
                  >
                    <Link href="/faq">View All FAQs</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
