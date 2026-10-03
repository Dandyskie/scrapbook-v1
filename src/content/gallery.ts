/**
 * Gallery Content
 * - Scrapbook polaroid items using Dandy's uploaded photos
 */
import type { GalleryPhoto } from "@/types/story";

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "photo-1",
    src: "/images/pertama-kenal-2.jpeg",
    alt: "Foto awal kenal bareng Kak Nabila",
    caption: "Awal-awal kenal & masih rada jaim haha",
    date: "Awal Kenal",
    rotation: -1,
    tapePosition: "top",
  },
  {
    id: "photo-2",
    src: "/images/pertama-kenal-3.jpeg",
    alt: "Momen seru awal pertemanan",
    caption: "Mulai makin akrab & nyambung",
    date: "Sering Ngobrol",
    rotation: 1,
    tapePosition: "top-right",
  },
  {
    id: "photo-3",
    src: "/images/terakhir-ketemu-2.jpeg",
    alt: "Foto seru pas main ke Solo Berbunga",
    caption: "Momen seru di Solo Berbunga",
    date: "Solo Berbunga",
    rotation: -1,
    tapePosition: "top-left",
  },
  {
    id: "photo-4",
    src: "/images/foto-2.jpeg",
    alt: "Foto kenangan bersama Kak Nabila",
    caption: "Salah satu foto kenangan kita",
    date: "Momen Manis",
    rotation: 1,
    tapePosition: "corners",
  },
];

/**
 * Photobox Strip Memory
 */
export const photoboxMemory = {
  src: "/images/kenangan.jpeg",
  alt: "Strip photo ala photobox kenangan bersama Kak Nabila",
  title: "Strip Photobox Kenangan",
  subtitle: "Waktu itu iseng-iseng bikin strip photo ala photobox, tapi malah jadi salah satu foto kenangan paling berharga yang selalu kusimpan.",
  note: "pose-pose kita di sini seru bgt haha",
};
