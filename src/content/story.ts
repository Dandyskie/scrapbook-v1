/**
 * Story Content
 * - Natural, polite, fun, and warm storytelling for Kak Nabila
 * - Subtle Gen-Z conversational touch without being over the top
 */
import type { ChapterContent, RememberedDetail } from "@/types/story";

export const storyIntro = {
  badge: "A Scrapbook for Kak Nabila",
  title: "Dari Museum Keris, Sampai Jadi Teman Cerita Paling Nyaman",
  subtitle: "Catatan kecil tentang obrolan seru, momen jalan bareng, fase pusing rintis kerjaan, sampai punya sosok kakak yang selalu suportif.",
  date: "Oktober 2026",
  scrollPrompt: "Scroll pelan-pelan ya kak...",
};

export const chapters: ChapterContent[] = [
  {
    id: "chapter-01",
    chapterNumber: "01",
    title: "Awal Ketemu di Museum Keris Nusantara",
    subtitle: "Waktu itu sama-sama ikut acara vlog competition, terus nyambung ngobrol.",
    content: [
      "Kalo diinget-inget lagi, lucu juga ya awal mula kita bisa saling kenal. Waktu itu kita sama-sama ada di acara Vlog Competition di Museum Keris Nusantara.",
      "Awalnya ya cuma ngobrol santai seputar acara, tapi ternyata obrolannya langsung nyambung dan seru banget. Gak berasa kaku sama sekali. Dari situ kita fotbar bareng, tukeran kontak, dan lanjut sering ngobrol.",
      "Dari obrolan santai di acara itu, siapa sangka ternyata malah jadi awal pertemanan yang awet dan sebaik ini.",
    ],
    quote: "Pertemuan sederhana yang ternyata jadi awal dari pertemanan yang sangat berharga.",
    quoteAuthor: "Museum Keris Nusantara",
    handwrittenNote: "masih inget ga kak waktu fotbar pertama kali? wkwk",
    rotation: "left",
  },
  {
    id: "chapter-02",
    chapterNumber: "02",
    title: "Main ke Kost & Obrolan yang Selalu Seru",
    subtitle: "Momen di mana suasana langsung cair dan rasanya seru banget punya teman cerita kayak kakak sendiri.",
    content: [
      "Setelah sering ngobrol, ada momen di mana aku pertama kali main ke kost Kak Nabila. Suasananya langsung akrab dan santai banget.",
      "Kita bisa ngobrol ngalor-ngidul berjam-jam, ketawa bareng, dan sharing banyak hal tanpa ada rasa canggung. Kak Nabila tuh orangnya bener-bener welcome dan enak banget diajak diskusi.",
      "Seneng rasanya punya teman cerita yang se-frekuensi, asik diajak tukar pikiran, dan selalu bikin suasana jadi hangat.",
    ],
    quote: "Punya teman ngobrol yang selalu nyambung dan bikin nyaman itu bener-bener anugerah.",
    handwrittenNote: "first time main ke kost langsung seru bgt",
    rotation: "right",
  },
  {
    id: "chapter-03",
    chapterNumber: "03",
    title: "Support System Pas Lagi Capek & Pusing Karir",
    subtitle: "Ketika hari-hari lagi padat dan melelahkan, Kak Nabila selalu punya cara buat ngasih semangat.",
    content: [
      "Perjalanan beberapa waktu belakangan ini jujur gak selalu mudah. Ada fase di mana aku sempat galau dan susah move on dari masa lalu, terus ditambah pusing pas mulai ngerintis karir dari bawah.",
      "Banyak momen di mana aku ngerasa burnout dan capek sama kerjaan. Tapi tiap kali cerita ke Kak Nabila, kakak selalu sabar ngedengerin dan ngasih saran yang bikin adem kepala.",
      "Kak Nabila tuh bener-bener kayak 'mamah kedua' yang perhatian — yang selalu ngingetin buat jaga kesehatan, jangan lupa makan, dan jangan terlalu memforsir diri. Makasih ya kak, udah selalu jadi penyemangat yang luar biasa.",
    ],
    quote: "Makasih udah selalu jadi support system yang tulus dan bikin tenang pas duniaku lagi pusing-pusingnya.",
    handwrittenNote: "definisi sosok kakak & mamah kedua yang selalu perhatian",
    rotation: "none",
  },
];

export const rememberedDetails: RememberedDetail[] = [
  {
    id: "rem-1",
    title: "Teman Cerita yang Selalu Sabar",
    description: "Sabar banget ngedengerin cerita keluh kesahku, termasuk pas lagi galau-galaunya, tanpa pernah ngerasa terbebani.",
    iconName: "heart",
  },
  {
    id: "rem-2",
    title: "Perhatian ala 'Mamah Kedua'",
    description: "Selalu ngingetin makan, istirahat, dan jangan terlalu stres pas aku lagi sibuk-sibuknya ngejar kerjaan.",
    iconName: "coffee",
  },
  {
    id: "rem-3",
    title: "Obrolan yang Selalu Nyambung",
    description: "Dari topik random sehari-hari sampai obrolan seputar mimpi dan masa depan, selalu nyambung dan bikin betah ngobrol lama.",
    iconName: "smile",
  },
  {
    id: "rem-4",
    title: "Selalu Ngasih Energi Positif",
    description: "Karakter Kak Nabila yang tenang dan positif selalu berhasil nularin semangat baru tiap kali kita ngobrol.",
    iconName: "sparkles",
  },
];

export const storyEnding = {
  title: "Makasih Banyak ya, Kak Nabila",
  subtitle: "Semoga langkah dan karir baru Kak Nabila ke depan selalu dilancarkan dan sukses besar. Dan inget ya kak, sampai kapan pun aku bakal selalu inget dan tetep punya sosok kakak selama-lamanya.",
  footerNote: "Disusun dengan penuh rasa sayang dan syukur oleh adikmu, Dandy.",
  actionPrompt: "Gimana setelah baca scrapbook ini? Kabarin Dandy ya:",
  actionButtonText: "Seneng ga?",
};
