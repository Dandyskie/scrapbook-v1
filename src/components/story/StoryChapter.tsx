"use client";

/**
 * StoryChapter
 * - Renders a single narrative story chapter with typewriter animations
 * - Mobile-first padding, clean typography hierarchy, and subtle paper craft
 */
import React from "react";
import { motion } from "framer-motion";
import type { ChapterContent } from "@/types/story";
import { PaperCard } from "../scrapbook/PaperCard";
import { Quote } from "lucide-react";
import TextType from "@/components/TextType";

interface StoryChapterProps {
  data: ChapterContent;
  index: number;
}

export function StoryChapter({ data, index }: StoryChapterProps) {
  const isEven = index % 2 === 0;

  return (
    <section className="relative py-8 sm:py-16 px-3 sm:px-4 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-2xl"
      >
        <PaperCard
          rotation={data.rotation}
          hasTape={isEven}
          tapeVariant={isEven ? "kraft" : "rose"}
          className="relative"
        >
          {/* Chapter badge */}
          <div className="flex items-center justify-between border-b border-[#F2ECE4] pb-3 mb-4 sm:mb-6">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#B89B72] font-semibold">
              Bab {data.chapterNumber}
            </span>
            {data.date && (
              <span className="text-[11px] text-[#A89E9B] font-mono">
                {data.date}
              </span>
            )}
          </div>

          {/* Chapter Title dengan Animasi TextType */}
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#292625] font-semibold tracking-tight leading-snug">
            <TextType
              text={data.title}
              typingSpeed={30}
              startOnVisible={true}
              loop={false}
              showCursor={false}
            />
          </h2>
          {data.subtitle && (
            <p className="mt-1.5 text-xs sm:text-sm text-[#7E7471] italic font-serif">
              <TextType
                text={data.subtitle}
                typingSpeed={20}
                startOnVisible={true}
                loop={false}
                showCursor={false}
              />
            </p>
          )}

          {/* Chapter Paragraphs dengan Animasi TextType */}
          <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-[#292625]/90 leading-relaxed font-light">
            {data.content.map((paragraph, pIdx) => (
              <div key={pIdx}>
                <TextType
                  text={paragraph}
                  typingSpeed={15}
                  startOnVisible={true}
                  loop={false}
                  showCursor={false}
                />
              </div>
            ))}
          </div>

          {/* Pull Quote dengan Animasi TextType */}
          {data.quote && (
            <div className="mt-5 sm:mt-8 p-3.5 sm:p-5 bg-[#FAF6F0] border-l-2 border-[#8B5E5E] rounded-r text-[#292625]">
              <div className="flex gap-2.5 sm:gap-3">
                <Quote className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8B5E5E]/60 shrink-0 mt-1 rotate-180" />
                <div>
                  <div className="font-serif italic text-sm sm:text-base md:text-lg leading-relaxed text-[#292625]">
                    &ldquo;
                    <TextType
                      text={data.quote}
                      typingSpeed={22}
                      startOnVisible={true}
                      loop={false}
                      showCursor={false}
                    />
                    &rdquo;
                  </div>
                  {data.quoteAuthor && (
                    <p className="mt-1.5 text-[10px] sm:text-xs uppercase tracking-wider text-[#A89E9B] font-medium">
                      — {data.quoteAuthor}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Handwritten Margin Note dengan Animasi TextType */}
          {data.handwrittenNote && (
            <div className="mt-4 sm:mt-6 text-right">
              <span className="inline-block font-handwriting text-lg sm:text-2xl text-[#8B5E5E] -rotate-1 sm:-rotate-2">
                ~{" "}
                <TextType
                  text={data.handwrittenNote}
                  typingSpeed={25}
                  startOnVisible={true}
                  loop={false}
                  showCursor={false}
                />
              </span>
            </div>
          )}
        </PaperCard>
      </motion.div>
    </section>
  );
}
