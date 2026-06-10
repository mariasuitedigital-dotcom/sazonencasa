/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProblemCard {
  id: string;
  icon: string;
  title: string;
  text: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  badge: string;
}

export interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Dish {
  id: string;
  name: string;
  description: string;
  category: "Criollo" | "Sano & Balanceado" | "Familiar";
  image: string;
  timeToPrep?: string;
}

export interface Plan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  pricePeriod: string;
  description: string;
  features: string[];
  featured: boolean;
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  body: string;
  place: string;
  rating: number;
  tag: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspectClass: string;
}

export interface FaqItem {
  id: string;
  query: string;
  answer: string;
}
