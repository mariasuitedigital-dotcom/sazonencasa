/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Check, Calendar, Phone, Star, ShieldCheck, Heart } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  
  const handleWhatsAppChat = () => {
    const text = encodeURIComponent("¡Hola Sazón & Orden! Deseo solicitar más información acerca del servicio semanal de meal prep peruano a domicilio.");
    window.open(`https://api.whatsapp.com/send?phone=51987654321&text=${text}`, "_blank");
  };

  const bullets = [
    "Menús personalizados",
    "Cocinamos en tu hogar",
    "Ingredientes frescos",
    "Comida peruana saludable"
  ];

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-crema to-crema-light bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Text details */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-olive-500/10 border border-olive-500/10 rounded-full text-olive-700 text-xs sm:text-sm font-semibold tracking-wide">
              <Star className="w-4 h-4 fill-olive-500 text-olive-500" />
              <span>Gourmet & Hogareño · San Isidro, Miraflores, Surco, La Molina</span>
            </div>

            {/* Giant Premium Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-carbon font-extrabold leading-[1.1] tracking-tight">
              Tu semana resuelta con <br />
              <span className="text-olive-500 italic font-medium">comida peruana</span> hecha en tu hogar
            </h1>

            {/* Subheading text */}
            <p className="text-base sm:text-lg text-carbon/80 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans font-light">
              Diseñamos tu menú, cocinamos en tu cocina y dejamos tus comidas listas para varios días para que ahorres tiempo y disfrutes de una alimentación deliciosa, saludable y premium.
            </p>

            {/* Bullet list of advantages */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg mx-auto lg:mx-0 pt-2">
              {bullets.map((bullet, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start space-y-1">
                  <div className="w-8 h-8 rounded-full bg-olive-100 flex items-center justify-center text-olive-600">
                    <Check className="w-4 h-4 text-olive-500 stroke-[3]" />
                  </div>
                  <span className="text-xs font-semibold text-carbon text-center lg:text-left leading-normal">{bullet}</span>
                </div>
              ))}
            </div>

            {/* Dynamic Buttons actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 bg-olive-500 hover:bg-olive-600 text-crema font-bold rounded-xl shadow-xl hover:shadow-olive-500/20 transition-all duration-200 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Reservar evaluación gratuita</span>
              </button>
              
              <button
                onClick={handleWhatsAppChat}
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-crema-dark border border-olive-300 text-olive-700 font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-5 h-5 text-terracota" />
                <span>Hablar por WhatsApp</span>
              </button>
            </div>

            {/* SEO Micro-metadata of confidence */}
            <div className="pt-6 border-t border-olive-200/60 max-w-xl mx-auto lg:mx-0 flex items-center justify-center lg:justify-start gap-6 text-xs text-carbon/60">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-olive-500" />
                <span>Chefs validadas y aseguradas</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-terracota" />
                <span>100% Sabor Peruano Casero</span>
              </div>
            </div>

          </div>

          {/* Right Column Chef Image Frame and Mockup stats */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
            
            {/* Background glowing glow */}
            <div className="absolute -inset-4 bg-olive-300/10 rounded-full blur-3xl opacity-65" />
            
            {/* Fine Arts Elegant Image Container */}
            <div className="relative z-10 w-full max-w-[420px] aspect-[4/5] rounded-[2rem] border-8 border-white bg-crema shadow-2xl overflow-hidden group">
              <img
                src="/src/assets/images/chef_lima_cooking_1781045150794.png"
                alt="Chef profesional de Sazón & Orden cocinando platos peruanos"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
              />
              
              {/* Image Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 via-carbon/10 to-transparent" />

              {/* Float Badge 1 */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-olive-100 flex items-center justify-center text-xs font-bold text-olive-700">
                  LN
                </div>
                <div>
                  <p className="text-xs font-bold text-carbon">Liceth Navas</p>
                  <p className="text-[10px] text-carbon/60 uppercase font-bold tracking-wider">Chef Profesional Lima</p>
                </div>
                <div className="ml-auto bg-olive-500 text-crema text-[10px] font-bold py-1 px-2.5 rounded-full">
                  ★ 5.0
                </div>
              </div>
            </div>

            {/* Overlapping Badge 2 - Highlighting Local service */}
            <div className="absolute -top-6 -right-4 bg-terracota text-white py-3.5 px-5 rounded-2xl shadow-lg border-2 border-white max-w-[140px] text-center hidden sm:block animate-pulse">
              <p className="text-[10px] font-bold uppercase tracking-wider text-crema">Desde S/ 190</p>
              <p className="font-serif text-lg font-bold">Por semana</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
