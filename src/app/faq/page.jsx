"use client";
import data from "@/data/data.json";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";
import { useState, useRef } from "react";

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Handle mouse movement for spotlight effect
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 0.9, 0.7],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 py-16 px-4 overflow-hidden relative"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />

      {/* Interactive spotlight that follows mouse */}
      <div
        className="pointer-events-none absolute bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl opacity-40 w-96 h-96"
        style={{
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
          transition:
            "left 1s cubic-bezier(0.22, 1, 0.36, 1), top 1s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />

      <div className="mx-auto px-20 py-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20 relative"
        >
          <motion.div
            variants={pulseVariants}
            animate="pulse"
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full"
          />

          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: 10, scale: 1.1 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <Sparkles className="text-blue-400 w-8 h-8" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 drop-shadow-lg">
              Sulfuric Acid
            </h1>
            <motion.div
              initial={{ rotate: 10, scale: 0.9 }}
              animate={{ rotate: -10, scale: 1.1 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <Sparkles className="text-purple-400 w-8 h-8" />
            </motion.div>
          </div>

          <div className="relative inline-block">
            <motion.span
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 0.8 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -inset-1 blur-md bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg"
            />
            <p className="relative text-2xl md:text-3xl font-bold text-gray-100 bg-gray-900/50 backdrop-blur-sm py-2 px-6 rounded-full">
              Frequently Asked Questions
            </p>
          </div>

          <p className="mt-6 text-lg text-blue-100/80 max-w-2xl mx-auto font-light tracking-wide">
            Expand your knowledge with our comprehensive guide to H₂SO₄
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          {data.faqs.map((faq, index) => (
            <motion.div key={faq.id} variants={itemVariants} className="group">
              <div className="relative bg-gradient-to-br from-gray-800/90 to-blue-900/80 backdrop-blur-md rounded-2xl border border-blue-700/30 overflow-hidden">
                {/* Glass-like reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                {/* Question */}
                <motion.div
                  className="p-6 flex items-center gap-4 cursor-pointer transition-all duration-500"
                  onClick={() =>
                    setActiveFaq(activeFaq === faq.id ? null : faq.id)
                  }
                >
                  <div className="relative flex-shrink-0">
                    {/* Animated circle behind icon */}
                    <motion.div
                      animate={
                        activeFaq === faq.id
                          ? { scale: [1, 1.5, 1], opacity: [0.2, 0.6, 0.2] }
                          : { scale: 1, opacity: 0 }
                      }
                      transition={{
                        duration: 2,
                        repeat: activeFaq === faq.id ? Infinity : 0,
                      }}
                      className="absolute inset-0 bg-blue-400 rounded-full blur-md"
                    />
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br ${
                        activeFaq === faq.id
                          ? "from-blue-500 to-indigo-600"
                          : "from-blue-700/50 to-indigo-800/50"
                      } shadow-lg transition-colors duration-300`}
                    >
                      <HelpCircle className="w-6 h-6 text-blue-100" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-blue-50 group-hover:text-white transition-colors duration-300">
                      {faq.question}
                    </h2>
                  </div>

                  <motion.div
                    animate={
                      activeFaq === faq.id ? { rotate: 180 } : { rotate: 0 }
                    }
                    transition={{ duration: 0.4, ease: "anticipate" }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-blue-300" />
                  </motion.div>
                </motion.div>

                {/* Answer and Image */}
                <AnimatePresence>
                  {activeFaq === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col md:flex-row border-t border-blue-700/30">
                        {/* Answer */}
                       
                        <div className="md:w-2/3 p-6 bg-blue-900/20">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                          >
                            {faq.answer.split("\n").map((line, index) => (
                              <p
                                key={index}
                                className="text-lg leading-relaxed font-light text-gray-100 mb-2"
                              >
                                {line}
                              </p>
                            ))}

                            {/* Added fact badges - only show for first FAQ */}
                            {faq.id === data.faqs[0].id && (
                              <div className="mt-6 flex flex-wrap gap-3">
                                <span className="inline-block bg-blue-800/50 backdrop-blur-sm text-blue-200 text-sm font-medium px-3 py-1 rounded-full border border-blue-700/30">
                                  Molecular Weight: 98.079 g/mol
                                </span>
                                <span className="inline-block bg-indigo-800/50 backdrop-blur-sm text-indigo-200 text-sm font-medium px-3 py-1 rounded-full border border-indigo-700/30">
                                  Density: 1.83 g/cm³
                                </span>
                                <span className="inline-block bg-purple-800/50 backdrop-blur-sm text-purple-200 text-sm font-medium px-3 py-1 rounded-full border border-purple-700/30">
                                  Boiling Point: 337°C
                                </span>
                              </div>
                            )}
                          </motion.div>
                        </div>

                        {/* Image */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                          className="md:w-1/3 p-6 bg-indigo-950/30 flex items-center justify-center border-t md:border-t-0 md:border-l border-blue-700/30"
                        >
                          <div className="relative overflow-hidden rounded-xl shadow-2xl">
                            {/* Glass-like highlight */}
                            <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-white/20 to-transparent transform -skew-y-6 z-10" />

                            <div className="relative border-2 border-blue-500/30 overflow-hidden rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                              <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                                src={faq.image}
                                alt={faq.question}
                                className="w-full h-64 object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent pointer-events-none" />
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom glow effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: activeFaq === faq.id ? 0.6 : 0,
                  scale: activeFaq === faq.id ? 1 : 0.8,
                }}
                transition={{ duration: 0.5 }}
                className="mt-[-20px] mx-auto w-3/4 h-10 bg-blue-500 blur-2xl rounded-full"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 backdrop-blur-md rounded-full py-3 px-6 border border-blue-700/30">
            <p className="text-blue-200 text-sm">
              Have more questions?{" "}
              <span className="text-blue-400 font-medium hover:text-blue-300 cursor-pointer transition-colors">
                Contact our chemistry experts
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
