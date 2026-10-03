"use client";

/**
 * PhotoboxStrip
 * - Showcases the special photobox strip memory (kenangan.jpeg)
 * - Mobile-first responsive dimensions with TextType animation
 */
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { photoboxMemory } from "@/content/gallery";
import { TapeDecoration } from "../scrapbook/TapeDecoration";
import { Sparkles, Heart } from "lucide-react";
import TextType from "@/components/TextType";

export function PhotoboxStrip() {
  return (
    <section className="relative py-8 sm:py-16 px-3 sm:px-4 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-xl flex flex-col items-center"
      >
        {/* Photobox Strip Frame */}
        <div className="relative bg-[#FFFDFC] p-3 sm:p-5 pb-6 sm:pb-8 border border-[#E8DFD5] polaroid-shadow rounded-[3px] rotate-0 sm:-rotate-1 hover:rotate-0 transition-transform duration-300 w-full max-w-[270px] sm:max-w-sm">
          <TapeDecoration position="top" variant="rose" />

          {/* Header on strip */}
          <div className="flex items-center justify-between px-1 mb-2.5 text-[10px] sm:text-[11px] uppercase tracking-wider text-[#A89E9B] font-mono">
            <span className="flex items-center gap-1 text-[#8B5E5E]">
              <Heart className="w-3 h-3 fill-[#8B5E5E]" />
              Photobox
            </span>
            <span>Solo Memory</span>
          </div>

          {/* Photo Container */}
          <div className="relative w-full aspect-3/4 overflow-hidden rounded-[2px] bg-[#F2ECE4] border border-[#E5DACD]">
            <Image
              src={photoboxMemory.src}
              alt={photoboxMemory.alt}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
              priority
            />
          </div>

          {/* Handwritten Annotation on Strip dengan TextType */}
          <div className="mt-3 sm:mt-4 text-center">
            <p className="font-handwriting text-xl sm:text-2xl text-[#292625] leading-snug">
              ~{" "}
              <TextType
                text={photoboxMemory.note}
                typingSpeed={25}
                startOnVisible={true}
                loop={false}
                showCursor={false}
              />{" "}
              ~
            </p>
          </div>
        </div>

        {/* Narrative caption card below dengan TextType */}
        <div className="mt-4 sm:mt-6 text-center max-w-md px-2">
          <h3 className="font-serif text-lg sm:text-2xl text-[#292625] font-semibold flex items-center justify-center gap-2">
            <span>
              <TextType
                text={photoboxMemory.title}
                typingSpeed={30}
                startOnVisible={true}
                loop={false}
                showCursor={false}
              />
            </span>
            <Sparkles className="w-4 h-4 text-[#B89B72]" />
          </h3>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#7E7471] leading-relaxed font-light">
            <TextType
              text={photoboxMemory.subtitle}
              typingSpeed={18}
              startOnVisible={true}
              loop={false}
              showCursor={false}
            />
          </p>
        </div>
      </motion.div>
    </section>
  );
}
