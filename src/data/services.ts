import type { ImageMetadata } from 'astro';

const imageFiles = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/*.webp', { eager: true });

function getLocalImage(fileName: string): ImageMetadata {
  const entry = Object.entries(imageFiles).find(([path]) => path.endsWith(`/${fileName}`));
  if (!entry) {
    throw new Error(`[services.ts] No se encontró la imagen: ${fileName}`);
  }
  return entry[1].default;
}

export interface ServiceOption {
  duration: string;
  price: number;
  includes?: string;
}

export interface Promotion {
  active: boolean;
  label: string;
  discountPercentage: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'body' | 'drainage' | 'facial' | 'specialized';
  image: ImageMetadata;
  options: ServiceOption[];
  promotion?: Promotion;
}

const AUGUST_PROMO: Promotion = {
  active: true,
  label: 'August Special',
  discountPercentage: 15,
};

const BACK_TO_SCHOOL_PROMO: Promotion = {
  active: true,
  label: 'Back to School',
  discountPercentage: 20,
};

export const CATEGORIES = [
  { id: 'all', label: 'All Treatments' },
  { id: 'body', label: 'Body Contouring' },
  { id: 'drainage', label: 'Drainage & Wellness' },
  { id: 'facial', label: 'Facial Therapy' },
  { id: 'specialized', label: 'Specialized Care' },
] as const;

export const SERVICES: Service[] = [
  // --- BODY CONTOURING & SCULPTING ---
  {
    id: 'colombian-body-contouring',
    title: 'Colombian Body Contouring',
    description: 'Abdomen, Waist, Flanks & Arms. Manual + Authentic Wood Therapy to reshape and define.',
    category: 'body',
    image: getLocalImage('colombianbodycontouring.webp'),
    promotion: AUGUST_PROMO,
    options: [
      { duration: '60 MIN', price: 400 },
      { duration: '90 MIN', price: 490, includes: 'Includes Radiofrequency or Cavitation' }
    ]
  },
  {
    id: 'anti-cellulite-massage',
    title: 'Anti-Cellulite Massage',
    description: 'Legs focus. Targeted manual manipulation and Wood Therapy to smooth skin texture.',
    category: 'body',
    image: getLocalImage('anti-cellulitemassage.webp'),
    promotion: BACK_TO_SCHOOL_PROMO,
    options: [
      { duration: '60 MIN', price: 400 },
      { duration: '90 MIN', price: 490, includes: 'Includes Cavitation or Vacuum Therapy' }
    ]
  },
  {
    id: 'buttock-lift-massage',
    title: 'Buttock Lift Massage',
    description: 'Legs & Buttocks focus using Wood Therapy to firm, lift, and tone.',
    category: 'body',
    image: getLocalImage('buttockliftmassage.webp'),
    promotion: AUGUST_PROMO,
    options: [
      { duration: '60 MIN', price: 400 },
      { duration: '90 MIN', price: 490, includes: 'Includes Radiofrequency or Passive Gymnastics' }
    ]
  },
  {
    id: 'full-body-sculpting',
    title: 'Full Body Sculpting Experience',
    description: 'Complete transformation: Slimming, Anti-Cellulite & Buttock Lift in one master session.',
    category: 'body',
    image: getLocalImage('fullbodysculptingexperience.webp'),
    promotion: AUGUST_PROMO,
    options: [
      { duration: '120 MIN', price: 800, includes: 'Wood Therapy, Cavitation, RF & Passive Gymnastics' }
    ]
  },
  {
    id: 'manual-heat-detox',
    title: 'Manual Heat Detox Therapy',
    description: 'Thermo-sweating metabolism stimulation, intense fluid reduction, and metabolic drainage.',
    category: 'body',
    image: getLocalImage('manualheatdetoxtherapy.webp'),
    options: [
      { duration: '90 MIN', price: 490 }
    ]
  },

  // --- DRAINAGE & WELLNESS ---
  {
    id: 'brazilian-lymphatic',
    title: 'Brazilian Lymphatic Drainage',
    description: 'Full Body ritual using specialized manual techniques or Wood Therapy to eliminate fluid retention.',
    category: 'drainage',
    image: getLocalImage('brazilianlymphaticdrainage.webp'),
    promotion: BACK_TO_SCHOOL_PROMO,
    options: [
      { duration: '60 MIN', price: 390 },
      { duration: '90 MIN', price: 490 }
    ]
  },
  {
    id: 'deep-tissue-massage',
    title: 'Deep Tissue Massage',
    description: 'Therapeutic full body deep pressure focus to release chronic muscle tension and knots.',
    category: 'drainage',
    image: getLocalImage('deeptissuemassage.webp'),
    promotion: AUGUST_PROMO,
    options: [
      { duration: '60 MIN', price: 390 },
      { duration: '90 MIN', price: 490 }
    ]
  },
  {
    id: 'relaxation-massage',
    title: 'Relaxation Massage',
    description: 'Full Body Swedish Technique designed to induce deep mental and muscle tranquility.',
    category: 'drainage',
    image: getLocalImage('relaxationmassage.webp'),
    options: [
      { duration: '60 MIN', price: 390 },
      { duration: '90 MIN', price: 490 }
    ]
  },
  {
    id: 'hot-volcanic-stone',
    title: 'Hot Volcanic Stone Therapy',
    description: 'Deep thermal tissue relaxation, stiffness relief, and holistic energy balance.',
    category: 'drainage',
    image: getLocalImage('hotvolcanicstonetherapy.webp'),
    options: [
      { duration: '90 MIN', price: 490 }
    ]
  },

  // --- FACIAL THERAPY ---
  {
    id: 'serene-sculpt-facial',
    title: 'Serene Sculpt Facial',
    description: 'Face focus using Manual Lymphatic Drainage for an instant contouring and lifting effect.',
    category: 'facial',
    image: getLocalImage('serenesculptfacial.webp'),
    promotion: BACK_TO_SCHOOL_PROMO,
    options: [
      { duration: '60 MIN', price: 390 }
    ]
  },
  {
    id: 'deep-facial-cleansing',
    title: 'Deep Facial Cleansing',
    description: 'Deep extraction, steam pore dilation, and tailored skin customization for a pure glow.',
    category: 'facial',
    image: getLocalImage('deepfacialcleansing.webp'),
    options: [
      { duration: '60 MIN', price: 390 }
    ]
  },
  {
    id: 'dermapen-rejuvenation',
    title: 'Dermapen Rejuvenation',
    description: 'Advanced cellular repair infused with premium Exosomes or Salmon DNA.',
    category: 'facial',
    image: getLocalImage('dermapenrejuvenation.webp'),
    options: [
      { duration: 'Session', price: 800, includes: 'Exosomes or Salmon DNA infusion' }
    ]
  },

  // --- SPECIALIZED CARE ---
  {
    id: 'post-surgical-care',
    title: 'Post-Surgical Care',
    description: 'Specialized recovery therapy to reduce inflammation, prevent fibrosis, and speed healing.',
    category: 'specialized',
    image: getLocalImage('post-surgicalcare.webp'),
    options: [
      { duration: '60 MIN', price: 400 }
    ]
  },
  {
    id: 'prenatal-postpartum',
    title: 'Prenatal & Postpartum Massage',
    description: 'Gentle, safe, and soothing care tailored specifically for expecting and new mothers.',
    category: 'specialized',
    image: getLocalImage('prenatalmassage.webp'),
    options: [
      { duration: '60 MIN', price: 390 }
    ]
  }
];