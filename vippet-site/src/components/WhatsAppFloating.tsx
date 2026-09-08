import { business } from "@/data/business";
import { WhatsAppIcon } from "./Illustrations";

export default function WhatsAppFloating() {
  if (!business.whatsapp) return null;

  return (
    <a
      href={`https://wa.me/${business.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-sage-600 text-white shadow-lg transition-transform hover:scale-105 sm:bottom-8 sm:right-8"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
