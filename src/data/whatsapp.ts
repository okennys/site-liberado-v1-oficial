// Número oficial de contato via WhatsApp (11 96175-9438) — destino de todos
// os CTAs de conversão do site, exceto os cards de plano em /planos (que
// levam a mensagem pré-preenchida com o plano escolhido, ver `planos/page.tsx`).
const WHATSAPP_NUMBER = "5511961759438";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
