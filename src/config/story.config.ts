/**
 * Story Configuration
 * - Static settings for access gate, recipient details, and WhatsApp action
 */
import type { StoryConfig } from "@/types/story";

export const storyConfig: StoryConfig = {
  recipientName: "Kak Nabila",
  senderName: "Dandy",
  accessCode: "Nabila",
  whatsappNumber: "6282225532171",
  whatsappDefaultMessage: "kode nya apa yaahh??",
  letterDate: "Oktober 2026",
};

/**
 * Generates direct WhatsApp URL with prefilled message
 */
export function getWhatsAppAccessUrl(number: string, message: string): string {
  const cleanNumber = number.replace(/[^0-9]/g, "");
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
}
