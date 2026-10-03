"use client";

/**
 * StoryRemembered
 * - Displays intimate details and quirks fondly remembered
 * - Mobile-first card grid with TextType animation
 */
import React from "react";
import { motion } from "framer-motion";
import { Smile, Coffee, Music, Heart, Sparkles, Star } from "lucide-react";
import { rememberedDetails } from "@/content/story";
import { PaperCard } from "../scrapbook/PaperCard";
import type { RememberedDetail } from "@/types/story";
import TextType from "@/components/TextType";

export function StoryRemembered() {
  const getIcon = (name?: string) => {
    switch (name) {
      case "smile":
        return <Smile className="w-4 h-4 sm:w-5 sm:h-5 text-[#B89B72]" />;
      case "coffee":
        return <Coffee className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B5E5E]" />;
      case "music":
        return <Music className="w-4 h-4 sm:w-5 sm:h-5 text-[#B89B72]" />;
      case "sparkles":
        return <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B5E5E]" />;
      case "star":
        return <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#B89B72]" />;
      default:
        return <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B5E5E]" />;
    }
  };

  return (
    <section className="relative py-8 sm:py-16 px-3 sm:px-4 flex flex-col items-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 sm:mb-12 max-w-md px-2"
      >
        <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#B89B72] font-semibold">
          Hal-Hal Kecil
        </span>
        <h2 className="mt-1.5 sm:mt-2 font-serif text-2xl sm:text-3xl md:text-4xl text-[#292625] font-semibold">
          <TextType
            text="Yang Selalu Kuingat"
            typingSpeed={30}
            startOnVisible={true}
            loop={false}
            showCursor={false}
          />
        </h2>
        <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#7E7471]">
          Hal-hal baik dari Kak Nabila yang bikin suasana selalu nyaman.
        </p>
      </motion.div>

      {/* Grid of details */}
      <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-6">
        {rememberedDetails.map((detail: RememberedDetail, idx: number) => {
          const rotation = idx % 2 === 0 ? "left" : "right";

          return (
            <motion.div
              key={detail.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <PaperCard rotation={rotation} className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FAF5EE] border border-[#E8DFD5] flex items-center justify-center mb-3">
                    {getIcon(detail.iconName)}
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-medium text-[#292625]">
                    <TextType
                      text={detail.title}
                      typingSpeed={25}
                      startOnVisible={true}
                      loop={false}
                      showCursor={false}
                    />
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#7E7471] leading-relaxed font-light">
                    {detail.description}
                  </p>
                </div>
              </PaperCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
