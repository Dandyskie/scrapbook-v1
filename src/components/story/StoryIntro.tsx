"use client";

/**
 * StoryIntro
 * - Cover presentation of the scrapbook
 * - Mobile-first responsive spacing with Cormorant Garamond typography
 */
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Heart } from "lucide-react";
import { storyIntro } from "@/content/story";
import { TapeDecoration } from "../scrapbook/TapeDecoration";
import TextType from "@/components/TextType";

export function StoryIntro() {
  return (
    <section className="relative min-h-[75vh] sm:min-h-[85vh] flex flex-col items-center justify-center px-3 sm:px-6 py-10 sm:py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-xl w-full bg-[#FFFDFC] paper-texture border border-[#E8DFD5] scrapbook-shadow rounded-sm p-5 sm:p-10"
      >
        <TapeDecoration position="top" variant="rose" />

        {/* Heart Emblem */}
        <div className="mx-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FAF5EE] border border-[#E8DFD5] flex items-center justify-center mb-4 sm:mb-6 text-[#8B5E5E]">
          <Heart className="w-4 h-4 fill-[#8B5E5E]/20 stroke-[1.5]" />
        </div>

        {/* Small date badge */}
        <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#B89B72] font-medium">
          {storyIntro.date}
        </span>

        {/* Title in Elegant Serif */}
        <h1 className="mt-2.5 sm:mt-3 font-serif text-2xl sm:text-4xl lg:text-5xl text-[#292625] font-semibold leading-snug sm:leading-tight tracking-tight">
          {storyIntro.title}
        </h1>

        {/* Subtitle */}
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#7E7471] leading-relaxed max-w-md mx-auto font-light">
          {storyIntro.subtitle}
        </p>

        {/* Handwritten signature touch with typewriter effect */}
        <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-[#F2ECE4] flex items-center justify-center gap-2">
          <TextType
            text={storyIntro.badge}
            typingSpeed={60}
            showCursor={true}
            loop={false}
            cursorCharacter="|"
            className="font-handwriting text-xl sm:text-2xl text-[#8B5E5E]"
          />
        </div>
      </motion.div>

      {/* Scroll indicator prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-8 sm:mt-12 flex flex-col items-center gap-1.5 text-[#A89E9B] select-none"
      >
        <span className="text-[11px] sm:text-xs tracking-wider uppercase font-medium">
          {storyIntro.scrollPrompt}
        </span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-[#B89B72]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
