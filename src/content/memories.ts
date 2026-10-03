/**
 * Memories Content
 * - Genuine scrapbook memory cards with polite, fun, and natural captions
 */
import type { MemoryItem } from "@/types/story";

export const memories: MemoryItem[] = [
  {
    id: "mem-01",
    title: "Awal Kenal di Museum Keris",
    date: "Museum Keris Nusantara",
    location: "Acara Vlog Competition",
    description: "Hari pertama kita ketemu pas ada acara vlog competition. Dari yang awalnya sama-sama peserta acara, terus ngobrol santai dan fotbar bareng. Obrolannya langsung cair dan nyambung banget dari hari pertama.",
    image: {
      src: "/images/pertama-kenal.jpeg",
      alt: "Foto pertama kali kenal di Museum Keris Nusantara",
      caption: "Awal mula pertemanan kita di Museum Keris.",
      rotation: -1,
    },
    note: "senyum pertama kali kenalan haha",
    tag: "Awal Cerita",
  },
  {
    id: "mem-02",
    title: "Momen Main ke Kost",
    date: "Kost Kak Nabila",
    location: "Sesi Sharing & Ngobrol Santai",
    description: "Pertama kali main ke kost Kak Nabila. Seru banget karena kita langsung ngobrol santai berjam-jam, ketawa bareng, dan cerita banyak hal tanpa ada rasa canggung sama sekali.",
    image: {
      src: "/images/first-time.png",
      alt: "Momen pertama kali main ke kost Kak Nabila",
      caption: "Langsung akrab & seru banget ngobrolnya.",
      rotation: 1,
    },
    note: "obrolan seru yang ga kerasa waktu",
    tag: "Makin Akrab",
  },
  {
    id: "mem-03",
    title: "Jalan Bareng ke Solo Berbunga",
    date: "Event Solo Berbunga",
    location: "Kota Solo",
    description: "Momen seru jalan bareng ke event Solo Berbunga. Keliling nikmatin suasana kota, foto-foto, dan seru-seruan bareng. Salah satu momen jalan bareng yang paling berkesan.",
    image: {
      src: "/images/terakhir-ketemu.jpeg",
      alt: "Foto jalan bareng di event Solo Berbunga",
      caption: "Serunya jalan santai di Solo Berbunga.",
      rotation: -1,
    },
    note: "hari yang super seru & berkesan!",
    tag: "Solo Berbunga",
  },
];
