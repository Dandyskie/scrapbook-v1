/**
 * PaperCard
 * - Reusable scrapbook paper card with authentic warm texture and elevation
 * - Optimized padding and rotation for mobile-first layout
 */
import React from "react";
import { cn } from "@/lib/utils";
import { TapeDecoration } from "./TapeDecoration";

interface PaperCardProps {
  children: React.ReactNode;
  className?: string;
  rotation?: "left" | "right" | "none";
  hasTape?: boolean;
  tapeVariant?: "kraft" | "rose" | "cream";
}

export function PaperCard({
  children,
  className,
  rotation = "none",
  hasTape = false,
  tapeVariant = "cream",
}: PaperCardProps) {
  // On mobile screens, use 0 rotation to avoid horizontal overflow; on sm+ screens, use subtle rotation
  const rotationClasses = {
    none: "rotate-0",
    left: "rotate-0 sm:-rotate-1",
    right: "rotate-0 sm:rotate-1",
  };

  return (
    <div
      className={cn(
        "relative bg-[#FFFDFC] paper-texture border border-[#E8DFD5] scrapbook-shadow rounded-sm p-4 sm:p-7 md:p-8",
        rotationClasses[rotation],
        className
      )}
    >
      {hasTape && <TapeDecoration position="top" variant={tapeVariant} />}
      {children}
    </div>
  );
}
