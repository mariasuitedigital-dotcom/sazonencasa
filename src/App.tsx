/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Benefits from "./components/Benefits";
import Menus from "./components/Menus";
import Planes from "./components/Planes";
import Testimonios from "./components/Testimonios";
import Gallery from "./components/Gallery";
import Faq from "./components/Faq";
import CtaFinal from "./components/CtaFinal";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState("familiar");

  const openBooking = (planId: string = "familiar") => {
    setSelectedPlanId(planId);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="relative min-h-screen text-carbon overflow-x-hidden">
      {/* Frosted Navigation Header */}
      <Header onOpenBooking={() => openBooking("familiar")} />
      
      {/* Hero Section with key checkers and action anchors */}
      <Hero onOpenBooking={() => openBooking("familiar")} />
      
      {/* Highlight on lifestyle problems */}
      <Problem />
      
      {/* 4 sequential planning and preparation steps */}
      <Solution />
      
      {/* Major benefits detailed with large icons */}
      <Benefits />
      
      {/* High-resolution Peruvian menus with integrated filter options */}
      <Menus />
      
      {/* Pricing packages columns highlighting the Familiar model */}
      <Planes onOpenBooking={openBooking} />
      
      {/* Customer review cards from residential districts in Lima */}
      <Testimonios />
      
      {/* Pinterest-like masonry layout with chef photos, organized fridges and happy families */}
      <Gallery />
      
      {/* Frequently Asked Questions interactive accordions */}
      <Faq />
      
      {/* Strong Final Call To Action closure banner */}
      <CtaFinal onOpenBooking={() => openBooking("familiar")} />
      
      {/* Comprehensive footer with physical details, contacts and SEO tags directory */}
      <Footer />
      
      {/* Booking Form and WhatsApp integration routing */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={closeBooking} 
        selectedPlanId={selectedPlanId} 
      />
    </div>
  );
}

