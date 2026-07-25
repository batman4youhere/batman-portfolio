"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  return (
    <>
      {/* Main Progress Bar */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-[3px] w-full origin-left bg-[#B68D40]"
        style={{
          scaleX,
        }}
      />

      {/* Soft Glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-[10px] w-full origin-left blur-md"
        style={{
          scaleX,
          background:
            "linear-gradient(90deg, rgba(182,141,64,0.55), rgba(182,141,64,0.15))",
        }}
      />
    </>
  );
}
