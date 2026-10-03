"use client";

/**
 * StoryLetter
 * - Renders the personal letter from Dandy encouraging Kak Nabila's new career journey
 * - Reminds her that she will always be his sister forever
 * - Features typewriter text animation using TextType
 */
import React from "react";
import { motion } from "framer-motion";
import { personalLetter, graduationPhoto } from "@/content/letter";
import { PaperCard } from "../scrapbook/PaperCard";
import { TapeDecoration } from "../scrapbook/TapeDecoration";
import { PhotoFrame } from "../scrapbook/PhotoFrame";
import { Briefcase, Sparkles } from "lucide-react";
import TextType from "@/components/TextType";

export function StoryLetter() {
  return (
    <section className="relative py-8 sm:py-16 px-3 sm:px-4 flex flex-col items-center">
      {/* Career Milestone Photo Showcase */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[260px] sm:max-w-sm mb-6 sm:mb-10 flex flex-col items-center"
      >
        <div className="flex items-center gap-1.5 text-[11px] sm:text-xs uppercase tracking-wider text-[#B89B72] font-semibold mb-2.5">
          <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8B5E5E]" />
          <span>Babak Baru & Karir</span>
          <Sparkles className="w-3 h-3 text-[#B89B72]" />
        </div>
        <PhotoFrame
          src={graduationPhoto.src}
          alt={graduationPhoto.alt}
          caption={graduationPhoto.caption}
          rotation={graduationPhoto.rotation}
          tapePosition="top"
          aspectRatio="portrait"
          className="w-full"
        />
      </motion.div>

      {/* The Letter Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-2xl"
      >
        <PaperCard className="relative p-5 sm:p-9 md:p-11 border border-[#E8DFD5]">
          <TapeDecoration position="corners" variant="kraft" />

          {/* Letter Header Date */}
          <div className="flex justify-between items-center border-b border-[#F2ECE4] pb-3 mb-5 sm:mb-7">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#B89B72] font-semibold">
              Surat Singkat
            </span>
            <span className="text-[11px] sm:text-xs font-mono text-[#A89E9B]">
              {personalLetter.date}
            </span>
          </div>

          {/* Salutation dengan TextType */}
          <h3 className="font-serif text-lg sm:text-2xl text-[#292625] font-semibold mb-4 sm:mb-5">
            <TextType
              text={personalLetter.salutation}
              typingSpeed={30}
              startOnVisible={true}
              loop={false}
              showCursor={false}
            />
          </h3>

          {/* Body Paragraphs dengan TextType */}
          <div className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm md:text-base text-[#292625]/90 leading-relaxed font-light">
            {personalLetter.paragraphs.map((p, idx) => (
              <div key={idx}>
                <TextType
                  text={p}
                  typingSpeed={15}
                  startOnVisible={true}
                  loop={false}
                  showCursor={false}
                />
              </div>
            ))}
          </div>

          {/* Closing & Signature */}
          <div className="mt-7 sm:mt-9 pt-4 sm:pt-5 border-t border-[#F2ECE4]">
            <p className="text-xs sm:text-sm text-[#7E7471] italic font-serif">
              <TextType
                text={personalLetter.closing}
                typingSpeed={20}
                startOnVisible={true}
                loop={false}
                showCursor={false}
              />
            </p>
            <div className="mt-2 sm:mt-2.5">
              <span className="font-handwriting text-2xl sm:text-4xl text-[#8B5E5E] inline-block -rotate-2">
                {personalLetter.signature}
              </span>
            </div>
          </div>

          {/* PostScript dengan TextType */}
          {personalLetter.postScript && (
            <div className="mt-5 sm:mt-7 p-3 sm:p-4 bg-[#FAF6F0] rounded border border-[#EBE1D5] text-[11px] sm:text-xs text-[#7E7471] leading-relaxed">
              <span className="font-serif italic font-medium text-[#292625]">
                <TextType
                  text={personalLetter.postScript}
                  typingSpeed={20}
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
