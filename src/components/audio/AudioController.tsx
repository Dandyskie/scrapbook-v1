"use client";

/**
 * AudioController
 * - Background music player with Play/Pause, Stop (Reset), Volume Up/Down, and Mute
 * - Mobile-friendly touch targets with compact scrapbook styling
 */
import React, { useState, useRef, useEffect, useCallback } from "react";
import { Play, Pause, Square, Volume2, VolumeX, Volume1, Plus, Minus } from "lucide-react";
import { audioConfig } from "@/config/audio.config";
import { cn } from "@/lib/utils";

interface AudioControllerProps {
  autoPlayTrigger?: boolean;
}

export function AudioController({ autoPlayTrigger }: AudioControllerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(audioConfig.defaultVolume);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Initialize audio element
  useEffect(() => {
    const audio = new Audio(audioConfig.src);
    audio.loop = true;
    audio.volume = audioConfig.defaultVolume;
    audioRef.current = audio;

    const handleEnded = () => setIsPlaying(false);
    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);

    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("play", handlePlay);

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("play", handlePlay);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Handle play/pause
  const togglePlay = useCallback(async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    }
  }, [isPlaying]);

  // Handle stop (pause and reset to start)
  const stopAudio = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  }, []);

  // Handle external trigger
  useEffect(() => {
    if (autoPlayTrigger && !isPlaying && audioRef.current) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [autoPlayTrigger, isPlaying]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const increaseVolume = () => {
    setIsMuted(false);
    setVolume((prev) => Math.min(1, Number((prev + 0.1).toFixed(1))));
  };

  const decreaseVolume = () => {
    setVolume((prev) => {
      const next = Math.max(0, Number((prev - 0.1).toFixed(1)));
      if (next === 0) setIsMuted(true);
      return next;
    });
  };

  const currentVolumePercentage = isMuted ? 0 : Math.round(volume * 100);

  return (
    <div
      className={cn(
        "fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-40 flex items-center transition-all duration-300",
        "bg-[#FFFDFC]/95 paper-texture border border-[#E8DFD5] scrapbook-shadow rounded-full p-1.5 backdrop-blur-sm"
      )}
    >
      {/* Expanded controls for volume */}
      <div
        className={cn(
          "flex items-center gap-1 overflow-hidden transition-all duration-300",
          isExpanded ? "w-36 sm:w-40 px-1 opacity-100" : "w-0 px-0 opacity-0 pointer-events-none"
        )}
      >
        {/* Decrease Volume */}
        <button
          type="button"
          onClick={decreaseVolume}
          disabled={volume <= 0 || isMuted}
          className="p-1 rounded-full text-[#7E7471] hover:text-[#292625] hover:bg-[#F3ECE3] disabled:opacity-40 transition-colors"
          title="Kurangi Volume"
          aria-label="Kurangi Volume"
        >
          <Minus className="w-3.5 h-3.5" />
        </button>

        {/* Volume Level indicator */}
        <span className="text-[10px] sm:text-[11px] font-mono font-medium text-[#7E7471] w-7 sm:w-8 text-center select-none">
          {currentVolumePercentage}%
        </span>

        {/* Increase Volume */}
        <button
          type="button"
          onClick={increaseVolume}
          disabled={volume >= 1}
          className="p-1 rounded-full text-[#7E7471] hover:text-[#292625] hover:bg-[#F3ECE3] disabled:opacity-40 transition-colors"
          title="Tambah Volume"
          aria-label="Tambah Volume"
        >
          <Plus className="w-3.5 h-3.5" />
        </button>

        {/* Mute / Unmute */}
        <button
          type="button"
          onClick={toggleMute}
          className="p-1 rounded-full text-[#7E7471] hover:text-[#292625] hover:bg-[#F3ECE3] transition-colors"
          title={isMuted ? "Bunyikan" : "Bisukan"}
          aria-label={isMuted ? "Bunyikan" : "Bisukan"}
        >
          {isMuted ? (
            <VolumeX className="w-3.5 h-3.5 text-[#8B5E5E]" />
          ) : volume > 0.5 ? (
            <Volume2 className="w-3.5 h-3.5" />
          ) : (
            <Volume1 className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* Main Play / Pause Button */}
      <button
        type="button"
        onClick={togglePlay}
        className={cn(
          "relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full transition-transform active:scale-95",
          isPlaying
            ? "bg-[#8B5E5E] text-[#FFFDFC]"
            : "bg-[#F3ECE3] text-[#7E7471] hover:text-[#292625]"
        )}
        title={isPlaying ? "Jeda Musik" : "Putar Musik Latar"}
        aria-label={isPlaying ? "Jeda Musik" : "Putar Musik Latar"}
      >
        {isPlaying ? (
          <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        ) : (
          <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5" />
        )}
      </button>

      {/* Explicit Stop Button */}
      <button
        type="button"
        onClick={stopAudio}
        className="ml-1 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FAF5EE] text-[#7E7471] hover:text-[#8B5E5E] hover:bg-[#F3ECE3] transition-colors active:scale-95"
        title="Hentikan Musik (Stop)"
        aria-label="Hentikan Musik (Stop)"
      >
        <Square className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
      </button>

      {/* Toggle Volume Controls */}
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className="ml-0.5 p-1.5 rounded-full text-[#A89E9B] hover:text-[#7E7471] transition-colors"
        title="Pengaturan Volume"
        aria-label="Pengaturan Volume"
      >
        {isMuted ? (
          <VolumeX className="w-3.5 h-3.5 text-[#8B5E5E]" />
        ) : (
          <Volume2 className="w-3.5 h-3.5" />
        )}
      </button>
    </div>
  );
}
