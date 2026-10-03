"use client";

/**
 * StoryLine
 * - Signature vertical thread running down the center of the storybook
 * - Animates based on page scroll progress using Framer Motion
 * - Connects chapters, milestones, and memories with subtle tactile elegance
 */
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function StoryLine() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 pointer-events-none z-0 flex flex-col items-center opacity-40 sm:opacity-100">
      {/* Background guide thread (faint dashed) */}
      <div className="w-[1.5px] h-full border-r border-dashed border-[#E5DACD]/70" />

      {/* Dynamic progress thread */}
      <motion.div
        style={{ scaleY, originY: 0 }}
        className="absolute top-0 w-[2px] h-full bg-[#B89B72]/80 rounded-full"
      />

      {/* Decorative top anchor pin */}
      <div className="absolute top-16 w-3 h-3 rounded-full bg-[#FAF5EE] border-2 border-[#B89B72] shadow-xs" />
    </div>
  );
}
