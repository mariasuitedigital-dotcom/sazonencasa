/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar, Heart } from "lucide-react";

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "¿Cómo funciona?", href: "#como-funciona" },
    { name: "Beneficios", href: "#beneficios" },
    { name: "Nuestros Menús", href: "#menus" },
    { name: "Planes & Costos", href: "#planes" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Preguntas", href: "#faq" }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent("¡Hola Sazón & Orden! Me interesa conocer más acerca del servicio de Meal Prep semanal en Lima.");
    window.open(`https://api.whatsapp.com/send?phone=51987654321&text=${text}`, "_blank");
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? "bg-crema-light/95 backdrop-blur-md shadow-sm border-b border-olive-100 py-3" 
        : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-olive-500 flex items-center justify-center shadow-md shadow-olive-500/20 group-hover:bg-olive-600 transition-colors">
              <span className="font-serif text-crema text-xl font-bold italic">S</span>
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-carbon flex items-center gap-1.5">
                Sazón & Orden
              </span>
              <span className="block text-[10px] tracking-wider uppercase font-semibold text-terracota -mt-1 leading-none">
                Meal Prep Premium
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-carbon/80 hover:text-olive-500 hover:translate-y-[-1px] transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button 
              onClick={handleWhatsAppDirect}
              className="px-4 py-2 border border-olive-300 hover:border-olive-500 hover:bg-olive-50 text-olive-600 font-medium text-sm rounded-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-terracota" />
              <span>WhatsApp</span>
            </button>
            <button 
              onClick={onOpenBooking}
              className="px-4.5 py-2.5 bg-olive-500 hover:bg-olive-600 hover:shadow-md hover:shadow-olive-500/15 text-crema font-semibold text-sm rounded-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Evaluación Gratis</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-3 py-1.5 bg-olive-500 hover:bg-olive-600 text-crema font-bold text-xs rounded-md transition-all flex items-center gap-1 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reservar</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-carbon/70 hover:text-carbon hover:bg-olive-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-crema-light border-b border-olive-100 shadow-xl py-6 px-4 animate-fade-in space-y-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="px-4 py-2.5 text-base font-semibold text-carbon/80 hover:text-olive-500 hover:bg-crema rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="pt-4 border-t border-olive-100 grid grid-cols-2 gap-3 px-4">
            <button
              onClick={() => {
                handleLinkClick();
                handleWhatsAppDirect();
              }}
              className="flex items-center justify-center gap-2 px-4 py-3 border border-olive-300 text-olive-600 font-semibold rounded-lg text-sm bg-white"
            >
              <Phone className="w-4 h-4 text-terracota" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={() => {
                handleLinkClick();
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-olive-500 text-crema font-bold rounded-lg text-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Evaluar Gratis</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
