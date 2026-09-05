// Información Oficial de Contacto de Serene Method Dubai
export const PHONE_NUMBER = '971547779788';
export const WHATSAPP_NUMBER = '971547779788';
export const OFFICIAL_EMAIL = 'serenemethod@gmail.com';
export const DOMAIN = 'https://serenemethod.ae';

// Mensajes Predeterminados para WhatsApp
export const MESSAGES = {
  generalBooking: 'Hello! I would like to book a home session with Serene Method.',
  summerDiscount: 'Hello! I would like to claim the 15% Summer Discount on your home wellness services.',
  maderoSlimming: 'Hello! I would like to enquire about the Madero Slimming treatment at home.',
  lymphaticDrainage: 'Hello! I would like to enquire about the Lymphatic Drainage treatment at home.',
  facialGlow: 'Hello! I would like to enquire about the Facial Glow Ritual treatment at home.',
} as const;

/**
 * Genera un enlace directo a WhatsApp con mensaje codificado
 * @param message Mensaje predeterminado a enviar
 * @returns URL completa de WhatsApp (wa.me)
 */
export const getWhatsAppUrl = (message: string = MESSAGES.generalBooking): string => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

// URL por defecto con la oferta del 15% OFF para el Hero / Navbar
export const whatsappUrl = getWhatsAppUrl(MESSAGES.summerDiscount);