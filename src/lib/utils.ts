import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper para criar link do WhatsApp
export function buildWhatsAppLink(params: { phoneE164: string; message: string }) {
  const base = `https://wa.me/${params.phoneE164}`;
  const text = encodeURIComponent(params.message);
  return `${base}?text=${text}`;
}