export interface Profile {
  name: string;
  title: string;
  tagline: string;
  avatar: string;
  cover: string;
  bio: string;
  clinicName?: string;
}

export interface Contact {
  phone: string;
  email: string;
  website: string;
  address?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  category?: string;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
}

export interface ResultImage {
  id: string;
  before: string;
  after: string;
  alt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  hours: string;
  mapUrl: string;
  timezone?: string;
}

export interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
}

export interface SectionTitles {
  about: string;
  services: string;
  offers: string;
  process: string;
  results: string;
  testimonials: string;
  locations: string;
  booking: string;
}

export interface Sections {
  hero: boolean;
  contactActions: boolean;
  socialLinks: boolean;
  about: boolean;
  services: boolean;
  offers: boolean;
  process: boolean;
  resultsGallery: boolean;
  testimonials: boolean;
  locations: boolean;
  bookingForm: boolean;
}

export interface CardConfig {
  profile: Profile;
  contact: Contact;
  primaryCta: string;
  socials: SocialLink[];
  services: Service[];
  offers: Offer[];
  process: ProcessStep[];
  results: ResultImage[];
  testimonials: Testimonial[];
  locations: Location[];
  formFields: FormField[];
  sectionTitles: SectionTitles;
  sections: Sections;
  footerText: string;
}
