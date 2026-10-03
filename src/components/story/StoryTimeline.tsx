"use client";

/**
 * StoryTimeline
 * - Renders chronological milestone cards with mobile-first padding
 * - Animated with TextType for narrative titles
 */
import React from "react";
import { motion } from "framer-motion";
import type { TimelineEvent } from "@/types/story";
import { timelineEvents } from "@/content/timeline";
import { PaperCard } from "../scrapbook/PaperCard";
import { Sparkles } from "lucide-react";
import TextType from "@/components/TextType";

export function StoryTimeline() {
  return (
    <section className="relative py-8 sm:py-16 px-3 sm:px-4 flex flex-col items-center">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 sm:mb-12 max-w-md px-2"
      >
        <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#B89B72] font-semibold">
          Jejak Waktu
        </span>
        <h2 className="mt-1.5 sm:mt-2 font-serif text-2xl sm:text-3xl md:text-4xl text-[#292625] font-semibold">
          <TextType
            text="Langkah-Langkah Kecil Kita"
            typingSpeed={30}
            startOnVisible={true}
            loop={false}
            showCursor={false}
          />
        </h2>
        <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#7E7471]">
          Momen demi momen yang perlahan merajut cerita pertemanan ini.
        </p>
      </motion.div>

      {/* Timeline List */}
      <div className="w-full max-w-2xl space-y-4 sm:space-y-8">
        {timelineEvents.map((event: TimelineEvent, idx: number) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative"
            >
              <PaperCard
                rotation={isEven ? "left" : "right"}
                className={`border-l-4 ${
                  event.highlight ? "border-l-[#8B5E5E]" : "border-l-[#B89B72]"
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-1.5">
                  <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#B89B72]">
                    {event.date}
                  </span>
                  {event.highlight && (
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-[#8B5E5E] bg-[#FAF2ED] px-2 py-0.5 rounded-full font-medium">
                      <Sparkles className="w-3 h-3" />
                      Momen Berkesan
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-lg sm:text-xl text-[#292625] font-medium">
                  <TextType
                    text={event.title}
                    typingSpeed={25}
                    startOnVisible={true}
                    loop={false}
                    showCursor={false}
                  />
                </h3>

                <p className="mt-1.5 text-xs sm:text-sm text-[#7E7471] leading-relaxed font-light">
                  {event.description}
                </p>

                {event.annotation && (
                  <div className="mt-2.5 sm:mt-3 text-right">
                    <span className="font-handwriting text-base sm:text-lg text-[#8B5E5E]">
                      ~ {event.annotation}
                    </span>
                  </div>
                )}
              </PaperCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
