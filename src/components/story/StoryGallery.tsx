"use client";

/**
 * StoryGallery
 * - Renders Polaroid photo memories with organic rotations
 * - Responsive grid optimized for mobile and desktop screens
 */
import React from "react";
import { motion } from "framer-motion";
import { galleryPhotos } from "@/content/gallery";
import { PhotoFrame } from "../scrapbook/PhotoFrame";
import type { GalleryPhoto } from "@/types/story";

export function StoryGallery() {
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
          Koleksi Foto
        </span>
        <h2 className="mt-1.5 sm:mt-2 font-serif text-2xl sm:text-3xl md:text-4xl text-[#292625] font-semibold">
          Potongan-Potongan Memori
        </h2>
        <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#7E7471]">
          Foto-foto kenangan yang selalu bikin senyum tiap kali dilihat lagi.
        </p>
      </motion.div>

      {/* Polaroid cluster grid */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {galleryPhotos.map((photo: GalleryPhoto, idx: number) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-[240px] sm:max-w-[260px]">
              <PhotoFrame
                src={photo.src}
                alt={photo.alt}
                caption={photo.caption}
                date={photo.date}
                rotation={photo.rotation}
                tapePosition={photo.tapePosition}
                aspectRatio="square"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
