/**
 * Story Types
 * - Defines contracts for story chapters, memories, timeline events, and letters
 * - Ensures complete decoupling between data and UI components
 */

export interface StoryConfig {
  recipientName: string;
  senderName: string;
  accessCode: string;
  whatsappNumber: string;
  whatsappDefaultMessage: string;
  letterDate: string;
}

export interface AudioConfig {
  src: string;
  title: string;
  defaultVolume: number;
}

export interface ChapterContent {
  id: string;
  chapterNumber: string;
  title: string;
  subtitle?: string;
  date?: string;
  content: string[];
  quote?: string;
  quoteAuthor?: string;
  handwrittenNote?: string;
  rotation?: "left" | "right" | "none";
}

export interface MemoryItem {
  id: string;
  title: string;
  date: string;
  location?: string;
  description: string;
  image?: {
    src: string;
    alt: string;
    caption?: string;
    rotation?: number; // e.g. -2, 1, 2
  };
  note?: string;
  tag?: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  highlight?: boolean;
  annotation?: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  date?: string;
  rotation: number;
  tapePosition?: "top" | "top-left" | "top-right" | "corners";
}

export interface PersonalLetter {
  salutation: string;
  paragraphs: string[];
  closing: string;
  signature: string;
  postScript?: string;
  date: string;
}

export interface RememberedDetail {
  id: string;
  title: string;
  description: string;
  iconName?: "heart" | "smile" | "coffee" | "music" | "sun" | "sparkles" | "star";
}
