"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0B0B0B]">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B68D40]/10 blur-[120px]" />
      </div>

      <div className="relative flex flex-col items-center">
        {/* Animated Logo */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.85, 1, 0.85],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex h-28 w-28 items-center justify-center rounded-full border border-[#B68D40]/30 bg-[#B68D40]/10 shadow-[0_0_40px_rgba(182,141,64,0.15)]"
        >
          <span className="text-5xl font-bold tracking-tight text-[#B68D40]">
            B
          </span>
        </motion.div>

        {/* Animated Loader */}
        <div className="mt-10 flex gap-2">
          {[0, 1, 2].map((index) => (
            <motion.span
              key={index}
              animate={{
                y: [0, -10, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: index * 0.15,
              }}
              className="h-3 w-3 rounded-full bg-[#B68D40]"
            />
          ))}
        </div>

        {/* Loading Text */}
        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="mt-8 text-sm tracking-[0.35em] text-white/60 uppercase"
        >
          Initializing Gotham
        </motion.p>
      </div>
    </div>
  );
}
