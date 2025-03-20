"use client";
import data from "@/data/data.json";
import { motion } from "framer-motion";
import { Beaker } from "lucide-react";

export default function Facts() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 80,
      },
    },
    hover: {
      rotate: 5,
      transition: { duration: 0.3 },
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 py-12 overflow-hidden">
      <div className="mx-auto px-20 py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 relative"
        >
          <motion.div
            variants={glowVariants}
            initial="hidden"
            animate="visible"
            className="absolute inset-0 bg-blue-500 blur-3xl rounded-full opacity-20"
          />
          <h1 className="relative py-4 text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 drop-shadow-lg">
            Fascinating Facts About Sulfuric Acid
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto font-light tracking-wide">
            Dive into the electrifying world of H₂SO₄ with these mind-blowing
            insights
          </p>
        </motion.div>

        {/* Facts List */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid gap-6 md:grid-cols-2"
        >
          {data.facts.map((fact) => (
            <motion.div
              key={fact.id}
              variants={itemVariants}
              whileHover="hover"
              className="group relative bg-gradient-to-br from-gray-800/90 to-blue-900/90 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl border border-blue-700/30 transition-all duration-300 overflow-hidden"
            >
              {/* Decorative Elements */}
              <motion.div
                className="absolute inset-0 bg-blue-600/10 rounded-xl scale-95 group-hover:scale-100 transition-transform duration-500"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.2 }}
              />
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-400 to-indigo-500 transform scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></div>
              <motion.div
                className="absolute top-2 right-2 w-3 h-3 bg-blue-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />

              <div className="flex items-start space-x-5 relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="flex-shrink-0 mt-1"
                >
                  <Beaker className="w-8 h-8 text-blue-300 group-hover:text-indigo-200 transition-colors duration-300" />
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold text-blue-100 mb-3 group-hover:text-blue-50 transition-colors duration-300 tracking-tight">
                    {fact.title}
                  </h2>
                  <p className="text-gray-100 leading-relaxed text-base md:text-lg font-light">
                    {fact.description}
                  </p>
                </div>

                {/* Image */}
                <motion.div
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="flex-shrink-0 w-28 md:w-32"
                >
                  <div className="relative">
                    <img
                      src={fact.image}
                      alt={fact.title}
                      className="w-full h-full object-cover rounded-lg border border-blue-600/50 shadow-md group-hover:shadow-lg transition-shadow duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-lg pointer-events-none" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
