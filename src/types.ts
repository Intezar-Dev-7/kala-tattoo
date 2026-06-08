import { ReactNode } from "react";

export interface TattooItem {
  id: string;
  title: string;
  category: "Realism" | "Mandala" | "Spiritual" | "Fine Line" | "Cover-Up" | "Custom";
  imageUrl: string;
  beforeImageUrl?: string; // Optional for Cover-Up before/after interactive showcase
  description?: string;
}

export interface ServiceItem {
  id: string;
  idAttribute: string;
  title: string;
  description: string;
  details: string[]; // Elaborated details for Learn More component
  iconName: string; // Resolves to lucide-react icon
}

export interface ReviewItem {
  id: string;
  reviewer: string;
  text: string;
  rating: number;
}

export interface BookingDetails {
  name: string;
  phone: string;
  email: string;
  tattooStyle: string;
  placement: string;
  size: string;
  ideaDescription: string;
  preferredDate: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
