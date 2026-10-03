"use client";

/**
 * StoryAccess
 * - Static UI gate requiring access code before revealing the personal storybook
 * - Provides dynamic WhatsApp request link for users without a code
 * - Validates input with subtle feedback and smoothly unlocks the experience
 */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { KeyRound, MessageCircle, ArrowRight, Lock } from "lucide-react";
import { storyConfig, getWhatsAppAccessUrl } from "@/config/story.config";
import { TapeDecoration } from "../scrapbook/TapeDecoration";

interface StoryAccessProps {
  onUnlock: () => void;
}

export function StoryAccess({ onUnlock }: StoryAccessProps) {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanInput = code.trim();

    if (cleanInput.toLowerCase() === storyConfig.accessCode.toLowerCase()) {
      setError(false);
      onUnlock();
    } else {
      setError(true);
      setErrorMessage("Kode belum benar. Coba lagi.");
    }
  };

  const whatsappUrl = getWhatsAppAccessUrl(
    storyConfig.whatsappNumber,
    storyConfig.whatsappDefaultMessage
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#F8F5F0]">
      {/* Background paper texture accent */}
      <div className="absolute inset-0 opacity-40 pointer-events-none paper-texture" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-md bg-[#FFFDFC] paper-texture border border-[#E8DFD5] scrapbook-shadow rounded-sm p-5 sm:p-9 text-center"
      >
        {/* Washi tape on top */}
        <TapeDecoration position="top" variant="rose" />

        {/* Small lock emblem */}
        <div className="mx-auto w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#F3ECE3] border border-[#E8DFD5] flex items-center justify-center mb-4 sm:mb-5 text-[#8B5E5E]">
          <Lock className="w-5 h-5 stroke-[1.75]" />
        </div>

        {/* Title & Introduction */}
        <h1 className="font-serif text-xl sm:text-3xl text-[#292625] font-semibold tracking-tight">
          Buku Cerita untuk {storyConfig.recipientName}
        </h1>
        <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#7E7471] leading-relaxed">
          Sebuah catatan kecil dan kumpulan cerita kenangan khusus buat Kak Nabila.
        </p>

        {/* Form input */}
        <form onSubmit={handleSubmit} className="mt-7">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A89E9B]">
              <KeyRound className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                if (error) setError(false);
              }}
              placeholder="Masukkan kode akses..."
              autoFocus
              className="w-full pl-10 pr-4 py-2.5 bg-[#FAF6F0] border border-[#E0D5C7] rounded text-sm text-[#292625] placeholder-[#A89E9B] focus:outline-none focus:border-[#8B5E5E] focus:ring-1 focus:ring-[#8B5E5E] transition-all tracking-wider font-mono text-center"
              aria-label="Kode Akses"
            />
          </div>

          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 text-xs text-[#8B5E5E] font-medium"
              >
                {errorMessage}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#8B5E5E] hover:bg-[#784F4F] active:scale-[0.99] text-[#FFFDFC] text-sm font-medium rounded transition-all shadow-sm"
          >
            <span>Buka Cerita</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-[#E8DFD5]" />
          <span className="text-[11px] font-handwriting text-[#B89B72] text-sm">
            catatan rahasia
          </span>
          <div className="flex-1 h-px bg-[#E8DFD5]" />
        </div>

        {/* WhatsApp Request Link */}
        <div className="text-xs text-[#7E7471] space-y-2">
          <p>Belum punya kode akses?</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#292625] bg-[#F3ECE3] hover:bg-[#EADFD4] transition-colors border border-[#E0D5C7]"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Minta kode kepada pengirim</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
