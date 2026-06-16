import { MessageCircle } from "lucide-react";

const whatsappUrl = "https://wa.me/5492646271705";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribirme por WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_rgba(37,211,102,0.28)] transition hover:-translate-y-0.5 hover:bg-[#1ebe5d] md:bottom-6 md:right-6"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
