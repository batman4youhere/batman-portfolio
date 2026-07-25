"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function MouseGlow() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const x = useSpring(mouseX, {
    stiffness: 180,
    damping: 30,
    mass: 0.5,
  });

  const y = useSpring(mouseY, {
    stiffness: 180,
    damping: 30,
    mass: 0.5,
  });

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window;

    if (isTouch) return;

    setEnabled(true);

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX - 180);
      mouseY.set(event.clientY - 180);
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-0"
      style={{
        x,
        y,
      }}
    >
      <div
        className="h-[360px] w-[360px] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(182,141,64,0.18) 0%, rgba(182,141,64,0.08) 35%, rgba(182,141,64,0.02) 60%, transparent 75%)",
        }}
      />
    </motion.div>
  );
}
