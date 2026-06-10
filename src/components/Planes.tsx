/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { PLANS } from "../data";
import { Check, Star, CornerRightDown } from "lucide-react";

interface PlanesProps {
  onOpenBooking: (planId: string) => void;
}

export default function Planes({ onOpenBooking }: PlanesProps) {
  return (
    <section id="planes" className="py-20 bg-crema-light bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-olive-600">Comer Bien está a tu Alcance</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-carbon font-extrabold tracking-tight">
            Planes y Costos Mensuales
          </h2>
          <div className="w-16 h-1 bg-olive-500 mx-auto rounded-full mt-2" />
          <p className="text-base sm:text-lg text-carbon/70 font-light leading-relaxed max-w-2xl mx-auto pt-2">
            Elige el plan ideal según tu estilo de vida. Los precios expresados corresponden únicamente al servicio de la chef experta y organización del menú semanal.
          </p>
        </div>

        {/* Pricing Layout Cards Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {PLANS.map((plan) => {
            return (
              <div 
                key={plan.id}
                className={`relative rounded-3xl p-8 bg-white border transition-all duration-300 flex flex-col justify-between ${
                  plan.featured 
                    ? "border-olive-500 shadow-2xl ring-4 ring-olive-500/10 scale-102 lg:-translate-y-4 z-10" 
                    : "border-olive-200/50 shadow-sm hover:shadow-md z-0"
                }`}
              >
                {/* Popularity ribbon for Featured plan */}
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-olive-500 text-crema text-[11px] font-extrabold py-1.5 px-4 rounded-full flex items-center gap-1.5 shadow-lg tracking-wider uppercase">
                    <Star className="w-3.5 h-3.5 fill-crema text-crema" />
                    <span>El más popular para familias</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Category Headers */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold tracking-widest uppercase text-terracota">
                      {plan.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-carbon">
                      {plan.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-carbon/60 font-light leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className="pt-4 border-t border-olive-100 flex items-baseline gap-1.5">
                    <span className="font-serif text-4xl sm:text-5xl font-extrabold text-carbon">
                      {plan.price}
                    </span>
                    <span className="text-sm font-semibold tracking-wider text-carbon/50 uppercase">
                      / {plan.pricePeriod}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3.5 pt-4 border-t border-olive-100">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          plan.featured ? "bg-olive-500 text-crema" : "bg-olive-100 text-olive-600"
                        }`}>
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm text-carbon/80 font-sans font-light leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call-to-action Button Trigger */}
                <div className="pt-8">
                  <button
                    onClick={() => onOpenBooking(plan.id)}
                    className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer text-center flex items-center justify-center gap-2 ${
                      plan.featured
                        ? "bg-olive-500 text-crema hover:bg-olive-600 shadow-xl shadow-olive-500/15 transform hover:-translate-y-0.5"
                        : "bg-crema text-olive-700 border border-olive-200 hover:bg-crema-dark"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Trust Note explaining ingredients */}
        <div className="mt-12 p-6 bg-white border border-olive-200/50 rounded-2xl max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-full bg-terracota/10 flex items-center justify-center text-terracota flex-shrink-0">
            <CornerRightDown className="w-6 h-6 animate-bounce" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-terracota">¿Por qué el cliente adquiere los insumos?</span>
            <p className="text-xs text-carbon/75 leading-relaxed mt-1 font-light">
              Debido a que consideramos que la honestidad culinaria nace en la pureza de lo que compras. Queremos que elijas tu carnicería de confianza, tus pescados frescos del terminal pesquero preferido, o verduras del biohuerto de tu preferencia. Nosotros te proveemos la lista exacta para que no gastes de más.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
