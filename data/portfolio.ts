/**
 * Portfolio Data & Configuration for Payal Arora
 * 
 * You can easily update contact details, social links, and project images here.
 */

export interface ProjectItem {
  id: string;
  title: string;
  badge: string;
  role?: string;
  scope: string;
  deliverables?: string;
  context?: string;
  images: {
    url: string;
    alt: string;
    caption?: string;
  }[];
  tags: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverablesList: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period?: string;
  type: 'education' | 'certification';
}

// ============================================================================
// 1. SOCIAL & CONTACT CONFIGURATION
// ============================================================================

/**
 * Replace this with Payal's actual Instagram profile URL when available.
 * Example: "https://instagram.com/payalarora_official"
 */
export const INSTAGRAM_PROFILE_URL = "https://instagram.com/digitalspark_00"; // <-- ENTER ACTUAL INSTAGRAM URL HERE

export const CONTACT_INFO = {
  name: "Payal Arora",
  phone: "7888717976",
  phoneDisplay: "+91 78887 17976",
  email: "itspayal85@gmail.com",
  whatsappNumber: "917888717976",
  whatsappPrefilledText: "Hi Payal, I'm interested in your digital marketing services.",
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappPrefilledText)}`;
  },
  get telUrl() {
    return `tel:${this.phone}`;
  },
  get mailtoUrl() {
    return `mailto:${this.email}`;
  },
  instagramUrl: INSTAGRAM_PROFILE_URL,
};

// ============================================================================
// 2. HERO CONFIGURATION
// ============================================================================

export const HERO_DATA = {
  name: "Payal Arora",
  profession: "Digital Marketer",
  roleSubtitle: "Digital Marketer & Social Media Executive",
  subtitle: "Igniting brand growth and digital presence through creative strategies.",
  
  /**
   * Hero Portrait Image
   * Replace this URL or path with Payal's actual photo whenever available (e.g., "/images/payal-portrait.jpg").
   * Currently uses a premium royalty-free editorial portrait as a temporary showcase.
   */
  // portraitImage: {
  //   url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85",
  //   alt: "Professional portrait representation for Payal Arora — Digital Marketer",
  //   note: "Temporary royalty-free editorial portrait. Replace with Payal's photo in data/portfolio.ts",
  // },
  
  portraitImage: {
    url: "/payal.jpeg",
    alt: "Payal Arora — Digital Marketer",
    note: "Payal's professional portrait",
  },
};

// ============================================================================
// 3. ABOUT CONFIGURATION
// ============================================================================

export const ABOUT_DATA = {
  sectionHeading: "About Me",
  introParagraph:
    "Hi, I'm Payal Arora — a freelance digital marketer and social media executive passionate about helping businesses translate their value into compelling online narratives. I specialize in end-to-end digital solutions, from crafting engaging video hooks to executing targeted ad campaigns.",
  
  approach: {
    heading: "My Approach",
    text: "I blend data-driven strategies with creative design to ensure that local businesses and growing brands not only reach their target audience but also leave a lasting impact.",
  },

  education: [
    {
      id: "edu-1",
      degree: "Graduation in Mathematics",
      institution: "Guru Nanak Dev University, Amritsar",
      type: "education",
    },
    {
      id: "edu-2",
      degree: "Digital Marketing",
      institution: "Deforce Academy, Amritsar",
      type: "certification",
    },
  ] as EducationItem[],
};

// ============================================================================
// 4. SERVICES CONFIGURATION
// ============================================================================

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "service-1",
    title: "Social Media Management",
    description:
      "End-to-end profile management, organic growth reporting, and tailored content calendars.",
    iconName: "ChartBar",
    deliverablesList: ["Content Calendar", "Community Engagement", "Monthly Growth Analytics"],
  },
  {
    id: "service-2",
    title: "Graphics & Logo Designing",
    description:
      "Custom brand kits, promotional graphics, and high-conversion thumbnails.",
    iconName: "Palette",
    deliverablesList: ["Brand Identity Kits", "Social Posts & Banners", "Visual Assets"],
  },
  {
    id: "service-3",
    title: "Video Editing & Content Creation",
    description:
      "Short-form video scripts, engaging reel hooks, and seamless editing for higher engagement.",
    iconName: "VideoCamera",
    deliverablesList: ["Viral Reel Hooks", "Subtitles & Pacing", "TikTok & Shorts Formats"],
  },
  {
    id: "service-4",
    title: "Paid Advertising",
    description:
      "Setup and management of Meta Ads campaigns to drive leads and sales.",
    iconName: "Target",
    deliverablesList: ["Audience Targeting", "A/B Testing", "ROAS Optimization"],
  },
  {
    id: "service-5",
    title: "Profile Optimization",
    description:
      "Google Business Profile configuration and optimization to capture local search traffic.",
    iconName: "MapPin",
    deliverablesList: ["Local SEO Tuning", "Keyword Placements", "Review Systems"],
  },
  {
    id: "service-6",
    title: "Website Designing",
    description:
      "Clean, user-friendly digital storefronts that showcase your brand professionally.",
    iconName: "Devices",
    deliverablesList: ["Modern UI/UX", "Mobile-first Layouts", "Conversion Strategy"],
  },
];

// ============================================================================
// 5. CASE STUDIES & PROJECTS
// ============================================================================

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "br-interiors",
    title: "BR Interiors",
    badge: "Interior Architecture & Modular Kitchens",
    role: "Social Media Management & Content Creator",
    scope:
      "Developed targeted promotional graphics and short video scripts highlighting modular kitchens.",
    deliverables: "Targeted promotional visual assets, reel scripts, modular kitchen showcase graphics.",
    tags: ["Modular Kitchens", "Content Strategy", "Reel Scripts", "Visual Branding"],
    images: [
      {
        // url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85",
        url: "/payal interior1.PNG",
        alt: "BR Interiors - Modern modular kitchen design with contemporary cabinetry and elegant marble island",
        caption: "Contemporary Modular Kitchen Concept",
      },
      {
        // url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
          url: "/payal interior2.PNG",
        alt: "BR Interiors - Luxury kitchen interior craftsmanship and minimalist modern storage",
        caption: "Premium Cabinetry & Architectural Finish",
      },
    ],
  },
  {
    id: "graphics-design",
    title: "Cafe : Apna Chai Wala",
    badge: "Cafe Branding & Visual Identity",
    context: "Cafe branding and promotional graphics.",
    scope:
      "Designed custom, eye-catching graphics to elevate the cafe's brand identity and promote its menu offerings.",
    deliverables:
      "High-quality promotional graphics, social media posts, and visual content tailored specifically to attract and engage a cafe audience.",
    tags: ["Cafe Identity", "Menu Promotion", "Social Media Graphics", "Visual Aesthetics"],
    images: [
      {
        // url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=85",
          url: "/payal cafe1.jpeg",
        alt: "Cafe promotional design showcase with artisan coffee presentation and fresh aesthetic",
        caption: "Aesthetic Brand Promotion & Specialty Brews",
      },
      {
        // url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=85",
          url: "/payal cafe2.jpeg",
        alt: "Vibrant cafe interior ambience and promotional seasonal menu display",
        caption: "Atmosphere & Menu Engagement Content",
      },
    ],
  },
  {
    id: "the-outfit-store",
    title: "Clothing Brand: The Outfit Store",
    badge: "Apparel & Retail Digital Presence",
    role: "Social Media Executive",
    scope:
      "Managed the digital presence and audience engagement for a local apparel brand.",
    deliverables:
      "Developed a tailored social media strategy proposal, marketing outreach pitches, and promotional campaigns.",
    tags: ["Fashion Marketing", "Audience Engagement", "Campaign Strategy", "Outreach Pitches"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85",
        alt: "The Outfit Store - Editorial fashion apparel visual campaign and curated style collection",
        caption: "Seasonal Fashion Editorial Campaign",
      },
      {
        url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85",
        alt: "The Outfit Store - Boutique retail atmosphere and tailored promotional curation",
        caption: "Curated In-Store Brand Aesthetic",
      },
    ],
  },
];

// ============================================================================
// 6. CONTACT & FOOTER COPY
// ============================================================================

export const CONTACT_DATA = {
  headline: "Ready to Spark Your Digital Growth?",
  subheading:
    "Whether you need to complete your social media overhauls, engaging reels, or a streamlined ad campaign, I'm ready to help your brand stand out. Let's build something great together.",
};

export const NAVIGATION_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Studies & Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
