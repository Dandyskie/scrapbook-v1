"use client";

/**
 * PhotoFrame
 * - Renders a Polaroid-style photo frame with subtle paper tilt and shadow
 * - Displays caption on top and date/location underneath (atas-bawah) for clean readability
 * - Handles fallback gracefully if the user has not placed image files yet
 */
import React, { useState } from "react";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { TapeDecoration } from "./TapeDecoration";

interface PhotoFrameProps {
  src?: string;
  alt: string;
  caption?: string;
  date?: string;
  rotation?: number; // e.g., -2, 1.5, 0
  tapePosition?: "top" | "top-left" | "top-right" | "corners" | "none";
  className?: string;
  aspectRatio?: "square" | "landscape" | "portrait";
}

export function PhotoFrame({
  src,
  alt,
  caption,
  date,
  rotation = 0,
  tapePosition = "top",
  className,
  aspectRatio = "landscape",
}: PhotoFrameProps) {
  const [imageError, setImageError] = useState(false);

  const aspectClasses = {
    square: "aspect-square",
    landscape: "aspect-4/3",
    portrait: "aspect-3/4",
  };

  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={cn(
        "relative bg-[#FFFDFC] p-3 pb-5 transition-transform duration-300 hover:scale-[1.01] hover:rotate-0",
        "border border-[#EADFD4] polaroid-shadow rounded-[2px]",
        className
      )}
    >
      {/* Decorative Washi Tape */}
      {tapePosition !== "none" && <TapeDecoration position={tapePosition} />}

      {/* Photo Area */}
      <div
        className={cn(
          "relative w-full overflow-hidden bg-[#F2ECE4] border border-[#E5DACD]/60 rounded-[1px]",
          aspectClasses[aspectRatio]
        )}
      >
        {src && !imageError ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover transition-opacity duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full w-full p-4 text-[#A89E9B] bg-[#F7F2EC] select-none text-center">
            <div className="w-10 h-10 rounded-full bg-[#EADFD4]/60 flex items-center justify-center mb-2 text-[#8B5E5E]/70">
              <ImageIcon className="w-5 h-5" />
            </div>
            <p className="text-xs font-medium tracking-wide text-[#7E7471]">{alt}</p>
            <span className="text-[11px] font-handwriting text-[#B89B72] mt-1">
              (siap diganti foto kenangan)
            </span>
          </div>
        )}
      </div>

      {/* Polaroid Caption & Date/Location - Dibuat ATAS-BAWAH agar rapi dan teks leluasa */}
      {(caption || date) && (
        <div className="mt-3 px-1 flex flex-col gap-1 items-start text-left">
          {caption && (
            <p className="font-handwriting text-xl sm:text-2xl text-[#292625] leading-snug w-full">
              {caption}
            </p>
          )}
          {date && (
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#A89E9B] font-mono font-medium">
              {date}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
