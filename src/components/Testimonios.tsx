/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { TESTIMONIALS } from "../data";
import { Star, Quote, MapPin } from "lucide-react";

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-20 bg-crema bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-olive-600">Historias de Éxito en Lima</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-carbon font-extrabold tracking-tight">
            Qué dicen nuestros comensales
          </h2>
          <div className="w-16 h-1 bg-olive-500 mx-auto rounded-full mt-2" />
          <p className="text-base sm:text-lg text-carbon/70 font-light leading-relaxed max-w-2xl mx-auto pt-2">
            Familias y ejecutivos residenciales en Lima que cambiaron el desorden diario por bienestar semanal organizado.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => {
            return (
              <div 
                key={t.id}
                className="bg-white rounded-2xl p-8 border border-olive-200/40 shadow-sm hover:shadow-xl hover:border-olive-300 transition-all duration-300 relative flex flex-col justify-between"
              >
                {/* Quotation mark decoration rendering */}
                <div className="absolute top-6 right-6 text-olive-500/10 pointer-events-none">
                  <Quote className="w-12 h-12 fill-current" />
                </div>

                <div className="space-y-6">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Body Copy */}
                  <p className="text-sm text-carbon/80 leading-relaxed font-sans font-light italic">
                    &ldquo;{t.body}&rdquo;
                  </p>
                </div>

                {/* Author Block */}
                <div className="pt-6 mt-6 border-t border-olive-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-carbon text-base">
                      {t.name}
                    </h4>
                    <p className="text-xs text-carbon/50 font-sans">
                      {t.role}
                    </p>
                  </div>

                  {/* District tag */}
                  <div className="flex items-center gap-1 px-2.5 py-1 bg-olive-500/10 text-olive-700 text-[11px] font-bold rounded-full">
                    <MapPin className="w-3.5 h-3.5 text-terracota" />
                    <span>{t.place}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Local trust statement banner */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm font-sans text-carbon/50 font-medium">
            Atendiendo con orgullo en residencias en San Isidro, Miraflores, Chacarilla, Monterrico, y Rinconada de La Molina.
          </p>
        </div>

      </div>
    </section>
  );
}
