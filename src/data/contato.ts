// Canais de contato da landing.
// TODO(caio): trocar os dois placeholders abaixo pelos links reais.
export const EMAIL = "caioprezottobatista@gmail.com";

// WhatsApp: formato internacional, só dígitos (ex.: "5511999998888").
export const WHATSAPP_NUMERO = "5500000000000"; // ← PLACEHOLDER
export const WHATSAPP_MENSAGEM =
  "Oi, Caio. Vi seu portfólio e quero conversar sobre um projeto.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
  WHATSAPP_MENSAGEM,
)}`;

// Agendamento (Cal.com / Calendly).
export const AGENDA_URL = "https://cal.com/seu-usuario/30min"; // ← PLACEHOLDER

export const EMAIL_URL = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Projeto — vamos conversar",
)}`;
