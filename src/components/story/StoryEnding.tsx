"use client";

/**
 * StoryEnding
 * - Final closing page of the scrapbook
 * - Features "Seneng ga?" button with dynamic WhatsApp response and TextType animation
 */
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Heart, Sparkles } from "lucide-react";
import { storyEnding } from "@/content/story";
import { storyConfig, getWhatsAppAccessUrl } from "@/config/story.config";
import { PaperCard } from "../scrapbook/PaperCard";
import { TapeDecoration } from "../scrapbook/TapeDecoration";
import TextType from "@/components/TextType";

export function StoryEnding() {
  const whatsappUrl = getWhatsAppAccessUrl(
    storyConfig.whatsappNumber,
    `Halo ${storyConfig.senderName}`
  );

  return (
    <footer className="relative py-12 sm:py-20 px-3 sm:px-4 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-lg w-full"
      >
        <PaperCard className="p-6 sm:p-9">
          <TapeDecoration position="top" variant="rose" />

          {/* Heart Emblem */}
          <div className="mx-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FAF5EE] border border-[#E8DFD5] flex items-center justify-center mb-4 sm:mb-5 text-[#8B5E5E]">
            <Heart className="w-4 h-4 fill-[#8B5E5E]/20 stroke-[1.5]" />
          </div>

          {/* Title dengan TextType */}
          <h2 className="font-serif text-2xl sm:text-3xl text-[#292625] font-semibold">
            <TextType
              text={storyEnding.title}
              typingSpeed={30}
              startOnVisible={true}
              loop={false}
              showCursor={false}
            />
          </h2>

          {/* Subtitle dengan TextType */}
          <div className="mt-3 text-xs sm:text-sm md:text-base text-[#7E7471] leading-relaxed font-light">
            <TextType
              text={storyEnding.subtitle}
              typingSpeed={18}
              startOnVisible={true}
              loop={false}
              showCursor={false}
            />
          </div>

          {/* Footer Note */}
          <p className="mt-4 text-base sm:text-lg font-handwriting text-[#B89B72]">
            {storyEnding.footerNote}
          </p>

          {/* Divider */}
          <div className="my-5 sm:my-7 h-px bg-[#F2ECE4] w-2/3 mx-auto" />

          {/* Action Prompt & WhatsApp CTA "Seneng ga?" */}
          <div className="space-y-3">
            <p className="text-[11px] sm:text-xs text-[#A89E9B] uppercase tracking-wider font-medium">
              {storyEnding.actionPrompt}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm sm:text-base font-medium text-[#FFFDFC] bg-[#8B5E5E] hover:bg-[#784F4F] active:scale-[0.98] transition-all shadow-md group"
            >
              <MessageCircle className="w-4 h-4 text-[#FFFDFC] group-hover:scale-110 transition-transform" />
              <span className="font-medium tracking-wide">{storyEnding.actionButtonText}</span>
              <Sparkles className="w-3.5 h-3.5 text-[#EEDCD2]" />
            </a>
          </div>
        </PaperCard>
      </motion.div>

      {/* Subtle small copyright / timestamp */}
      <div className="mt-10 sm:mt-14 text-center text-xs text-[#A89E9B] space-y-1">
        <p>A Personal Storybook for {storyConfig.recipientName}</p>
        <p className="font-mono text-[10px]">2026</p>
      </div>
    </footer>
  );
}
