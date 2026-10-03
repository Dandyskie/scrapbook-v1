/**
 * TapeDecoration
 * - Renders realistic washi tape styling for scrapbook photo frames and cards
 * - Supports various positions, angles, and color tints
 */
import React from "react";
import { cn } from "@/lib/utils";

interface TapeDecorationProps {
  position?: "top" | "top-left" | "top-right" | "bottom" | "corners";
  className?: string;
  variant?: "kraft" | "rose" | "cream";
}

export function TapeDecoration({
  position = "top",
  className,
  variant = "cream",
}: TapeDecorationProps) {
  const variantStyles = {
    cream: "bg-[#F3ECE0]/90 border-x-2 border-dashed border-[#D6C7B2]/40",
    kraft: "bg-[#E3D4BE]/90 border-x-2 border-dashed border-[#B89B72]/40",
    rose: "bg-[#EEDCD2]/90 border-x-2 border-dashed border-[#D8B4A0]/40",
  };

  const baseTape = cn(
    "absolute z-10 h-7 w-24 shadow-sm backdrop-blur-[0.5px] pointer-events-none",
    variantStyles[variant]
  );

  if (position === "corners") {
    return (
      <>
        <div className={cn(baseTape, "-top-3 -left-5 -rotate-45 w-16 h-6", className)} />
        <div className={cn(baseTape, "-top-3 -right-5 rotate-45 w-16 h-6", className)} />
      </>
    );
  }

  const positionStyles = {
    top: "-top-3 left-1/2 -translate-x-1/2 -rotate-1",
    "top-left": "-top-3 -left-3 -rotate-12",
    "top-right": "-top-3 -right-3 rotate-12",
    bottom: "-bottom-3 left-1/2 -translate-x-1/2 rotate-1",
  };

  return <div className={cn(baseTape, positionStyles[position], className)} />;
}
