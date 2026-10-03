"use client";

/**
 * StoryMemory
 * - Renders a memory unit with Polaroid photo on top and narrative text card below (atas-bawah)
 * - Features typewriter text animation using TextType on title, description, and notes
 */
import React from "react";
import { motion } from "framer-motion";
import type { MemoryItem } from "@/types/story";
import { PhotoFrame } from "../scrapbook/PhotoFrame";
import { PaperCard } from "../scrapbook/PaperCard";
import { MapPin, Calendar } from "lucide-react";
import TextType from "@/components/TextType";

interface StoryMemoryProps {
  data: MemoryItem;
  index: number;
}

export function StoryMemory({ data, index }: StoryMemoryProps) {
  const isEven = index % 2 === 0;

  return (
    <section className="relative py-8 sm:py-16 px-3 sm:px-4 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-xl flex flex-col items-center"
      >
        {/* Foto Polaroid di ATAS */}
        <div className="w-full max-w-[270px] sm:max-w-xs mb-5 sm:mb-7 flex justify-center">
          <PhotoFrame
            src={data.image?.src}
            alt={data.image?.alt || data.title}
            caption={data.image?.caption}
            date={data.date}
            rotation={data.image?.rotation || (isEven ? -1 : 1)}
            tapePosition={isEven ? "top" : "top-right"}
          />
        </div>

        {/* Kartu Narasi di BAWAH */}
        <div className="w-full">
          <PaperCard rotation={isEven ? "left" : "right"}>
            {/* Tag / Category */}
            {data.tag && (
              <span className="inline-block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8B5E5E] bg-[#FAF2ED] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded font-medium mb-2.5 sm:mb-3">
                {data.tag}
              </span>
            )}

            {/* Title dengan Animasi TextType */}
            <h3 className="font-serif text-lg sm:text-2xl text-[#292625] font-semibold">
              <TextType
                text={data.title}
                typingSpeed={30}
                startOnVisible={true}
                loop={false}
                showCursor={false}
              />
            </h3>

            {/* Location & Date */}
            <div className="mt-1.5 flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-[#A89E9B]">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                {data.date}
              </span>
              {data.location && (
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  {data.location}
                </span>
              )}
            </div>

            {/* Description dengan Animasi TextType */}
            <div className="mt-3 text-xs sm:text-sm md:text-base text-[#7E7471] leading-relaxed font-light">
              <TextType
                text={data.description}
                typingSpeed={18}
                startOnVisible={true}
                loop={false}
                showCursor={false}
              />
            </div>

            {/* Handwritten postscript dengan Animasi TextType */}
            {data.note && (
              <div className="mt-3.5 sm:mt-4 pt-2.5 sm:pt-3 border-t border-[#F2ECE4]">
                <span className="font-handwriting text-base sm:text-lg text-[#B89B72]">
                  *{" "}
                  <TextType
                    text={data.note}
                    typingSpeed={25}
                    startOnVisible={true}
                    loop={false}
                    showCursor={false}
                  />
                </span>
              </div>
            )}
          </PaperCard>
        </div>
      </motion.div>
    </section>
  );
}
