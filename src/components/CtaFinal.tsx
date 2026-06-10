/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MessageCircle, Calendar, ShieldCheck, Heart } from "lucide-react";

interface CtaFinalProps {
  onOpenBooking: () => void;
}

export default function CtaFinal({ onOpenBooking }: CtaFinalProps) {
  
  const handleWhatsAppAction = () => {
    const text = encodeURIComponent("¡Hola Sazón & Orden! Deseo agendar mi evaluación gratuita de Meal Prep para mi hogar.");
    window.open(`https://api.whatsapp.com/send?phone=51987654321&text=${text}`, "_blank");
  };

  return (
    <section className="relative py-20 bg-gradient-to-tr from-crema to-olive-50 overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[2.5rem] border border-olive-200/50 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Text/Content block side */}
          <div className="p-8 sm:p-14 lg:p-16 lg:col-span-7 space-y-8">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive-100 text-olive-800 text-xs font-semibold rounded-full uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-terracota fill-terracota" />
              <span>Sabor, Tiempo & Organización</span>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-carbon leading-tight tracking-tight">
                Empieza a disfrutar <br />
                <span className="text-olive-500 italic font-medium">una semana más organizada</span>
              </h2>
              
              <p className="text-base sm:text-lg text-carbon/75 font-sans font-light leading-relaxed">
                Reserva una evaluación gratuita y descubre cómo podemos transformar tu alimentación semanal. Conversaremos sobre tus gustos dietarios, objetivos de salud e integrantes de casa.
              </p>
            </div>

            {/* Bullets of trust */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-2 text-xs font-semibold text-carbon/80">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-olive-100 flex items-center justify-center text-olive-600">
                  <span className="text-[10px]">✓</span>
                </div>
                <span>Sin compromiso de permanencia</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-olive-100 flex items-center justify-center text-olive-600">
                  <span className="text-[10px]">✓</span>
                </div>
                <span>Chefs de confianza acreditadas</span>
              </div>
            </div>

            {/* Quick Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 bg-olive-500 hover:bg-olive-600 text-crema font-bold rounded-xl shadow-lg hover:shadow-olive-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Reservar evaluación gratuita</span>
              </button>

              <button
                onClick={handleWhatsAppAction}
                className="px-8 py-4 bg-white hover:bg-crema-dark border border-olive-300 text-olive-700 font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-terracota fill-terracota" />
                <span>Escribir por WhatsApp</span>
              </button>
            </div>

          </div>

          {/* Picture side */}
          <div className="lg:col-span-5 h-full relative aspect-[4/3] lg:aspect-auto lg:h-[580px] min-h-[300px]">
            <img 
              src="/src/assets/images/family_dinner_1781045178582.png" 
              alt="Familia limeña unida cenando comida peruana preparada sana" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            
            {/* Visual gradient cover */}
            <div className="absolute inset-0 bg-gradient-to-t from-carbon/40 to-transparent lg:bg-gradient-to-r lg:from-white lg:via-transparent lg:to-transparent lg:w-[150px]" />
            
            {/* Float Badge */}
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-4.5 py-3 rounded-xl border border-olive-200/40 shadow-lg text-center leading-none">
              <p className="font-serif text-terracota text-xl font-extrabold italic">Limeño</p>
              <p className="text-[9px] uppercase tracking-widest font-extrabold text-carbon mt-1">Sabor con Alma</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
