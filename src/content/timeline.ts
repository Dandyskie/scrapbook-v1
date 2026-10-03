/**
 * Timeline Content
 * - Chronological milestones of Dandy & Kak Nabila's friendship
 */
import type { TimelineEvent } from "@/types/story";

export const timelineEvents: TimelineEvent[] = [
  {
    id: "time-1",
    date: "Museum Keris Nusantara",
    title: "Vlog Competition & Sapaan Pertama",
    description: "Dari yang sama-sama hadir di event, ngobrol santai seputar vlog, fotbar bareng, dan tukeran kontak sosmed.",
    highlight: false,
    annotation: "titik awal mula pertemanan",
  },
  {
    id: "time-2",
    date: "Main ke Kost",
    title: "Momen Akrab & Obrolan Santai",
    description: "Pertama kali main ke kost Kak Nabila. Gak ada canggung sama sekali, langsung nyambung deep talk dan ketawa bareng.",
    highlight: true,
    annotation: "suasananya langsung cair & asik",
  },
  {
    id: "time-3",
    date: "Fase Rintis Karir",
    title: "Support System & 'Mamah Kedua'",
    description: "Pas lagi pusing-pusingnya ngerintis kerjaan dan burnout, Kak Nabila selalu hadir buat ngasih motivasi dan ngingetin istirahat.",
    highlight: true,
    annotation: "penyemangat pas lagi capek-capeknya",
  },
  {
    id: "time-4",
    date: "Event Solo Berbunga",
    title: "Jalan Bareng & Iseng Photobox",
    description: "Seru-seruan bareng di event Solo Berbunga dan iseng bikin strip photobox kenangan yang hasilnya lucu banget.",
    highlight: false,
    annotation: "hari seru yang berkesan",
  },
  {
    id: "time-5",
    date: "Wisuda Kak Nabila",
    title: "Pencapaian Hebat & Babak Baru",
    description: "Bangga banget ngeliat pencapaian Kak Nabila. Doa terbaik selalu menyertai setiap langkah dan karir kakak ke depannya.",
    highlight: true,
    annotation: "bangga banget sama kakak!",
  },
];
