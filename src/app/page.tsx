"use client";

/**
 * Storybook Home Page
 * - Coordinates the digital scrapbook experience for Kak Nabila
 * - Manages static access state, smooth scrolling, ambient audio, and story flow
 */
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { StoryAccess } from "@/components/access/StoryAccess";
import { AudioController } from "@/components/audio/AudioController";
import { SmoothScroll } from "@/components/story/SmoothScroll";
import { StoryLine } from "@/components/story/StoryLine";
import { StoryIntro } from "@/components/story/StoryIntro";
import { StoryChapter } from "@/components/story/StoryChapter";
import { StoryMemory } from "@/components/story/StoryMemory";
import { StoryTimeline } from "@/components/story/StoryTimeline";
import { StoryRemembered } from "@/components/story/StoryRemembered";
import { StoryGallery } from "@/components/story/StoryGallery";
import { PhotoboxStrip } from "@/components/story/PhotoboxStrip";
import { StoryLetter } from "@/components/story/StoryLetter";
import { StoryEnding } from "@/components/story/StoryEnding";
import { chapters } from "@/content/story";
import { memories } from "@/content/memories";

export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [hasStartedAudio, setHasStartedAudio] = useState(false);

  const handleUnlock = () => {
    setIsUnlocked(true);
    setHasStartedAudio(true);
  };

  return (
    <main className="relative min-h-screen bg-[#F8F5F0] overflow-x-hidden selection:bg-[#EADFD4] selection:text-[#292625]">
      {/* Static Access Screen Gate */}
      <AnimatePresence>
        {!isUnlocked && <StoryAccess onUnlock={handleUnlock} />}
      </AnimatePresence>

      {/* Floating Audio Controller */}
      <AudioController autoPlayTrigger={hasStartedAudio} />

      {/* Unlocked Immersive Storybook */}
      {isUnlocked && (
        <SmoothScroll>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-5xl mx-auto px-3 sm:px-6"
          >
            {/* Animated vertical signature line */}
            <StoryLine />

            {/* Narrative Flow */}
            <div className="relative z-10 space-y-4 sm:space-y-10">
              {/* Cover / Welcome */}
              <StoryIntro />

              {/* Bab 01: Pertemuan Museum Keris */}
              {chapters[0] && <StoryChapter data={chapters[0]} index={0} />}
              {memories[0] && <StoryMemory data={memories[0]} index={0} />}

              {/* Bab 02: Main ke Kost & Punya Sosok Kakak */}
              {chapters[1] && <StoryChapter data={chapters[1]} index={1} />}
              {memories[1] && <StoryMemory data={memories[1]} index={1} />}

              {/* Galeri Foto Awal Kenal */}
              <StoryGallery />

              {/* Bab 03: Tempat Pulang, Gamon & Burnout Karir */}
              {chapters[2] && <StoryChapter data={chapters[2]} index={2} />}

              {/* Memori Solo Berbunga */}
              {memories[2] && <StoryMemory data={memories[2]} index={2} />}

              {/* Strip Photo Photobox Kenangan */}
              <PhotoboxStrip />

              {/* Jejak Waktu Perjalanan */}
              <StoryTimeline />

              {/* Hal-Hal Kecil yang Selalu Diingat */}
              <StoryRemembered />

              {/* Wisuda Kak Nabila & Surat Pribadi */}
              <StoryLetter />

              {/* Halaman Penutup & WhatsApp CTA */}
              <StoryEnding />
            </div>
          </motion.div>
        </SmoothScroll>
      )}
    </main>
  );
}
