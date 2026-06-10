/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BENEFITS } from "../data";
import { Sparkles, Heart, PiggyBank, Grid, Flame, Home } from "lucide-react";

export default function Benefits() {
  
  const getIconForBenefit = (id: string) => {
    switch (id) {
      case "time":
        return <Sparkles className="w-6 h-6 text-olive-600" />;
      case "health":
        return <Heart className="w-6 h-6 text-olive-600" />;
      case "savings":
        return <PiggyBank className="w-6 h-6 text-olive-600" />;
      case "fridge":
        return <Grid className="w-6 h-6 text-olive-600" />;
      case "flavor":
        return <Flame className="w-6 h-6 text-olive-600" />;
      case "family":
        return <Home className="w-6 h-6 text-olive-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-olive-600" />;
    }
  };

  return (
    <section id="beneficios" className="py-20 bg-crema-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-terracota">¿Por qué elegirnos?</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-carbon font-extrabold tracking-tight">
            Diseñamos el confort <span className="text-olive-500 italic font-medium">de tu alimentación</span>
          </h2>
          <div className="w-16 h-1 bg-olive-500 mx-auto rounded-full mt-2" />
          <p className="text-base sm:text-lg text-carbon/70 font-light leading-relaxed max-w-2xl mx-auto pt-2">
            Disfrutar de la milenaria gastronomía del Perú no tiene por qué costarte horas de cansancio en la cocina ni compras desmesuradas. Descubre nuestros pilares fundamentales de valor.
          </p>
        </div>

        {/* Benefits Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit) => (
            <div 
              key={benefit.id}
              className="group bg-white p-8 rounded-2xl border border-olive-200/40 shadow-sm hover:shadow-xl hover:border-olive-300 transition-all duration-300 transform hover:-translate-y-1 flex gap-5"
            >
              {/* Rounded solid sphere of icons */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-olive-50 flex items-center justify-center group-hover:bg-olive-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                <div className="group-hover:text-white group-hover:scale-110 transition-transform duration-300">
                  {getIconForBenefit(benefit.id)}
                </div>
              </div>

              {/* Text detail block */}
              <div className="space-y-2">
                <h3 className="font-serif text-lg font-bold text-carbon tracking-tight group-hover:text-olive-500 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-carbon/70 leading-relaxed font-sans font-light">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Banner Accent for visual luxury */}
        <div className="mt-16 bg-gradient-to-r from-olive-600 to-olive-500 rounded-3xl p-8 sm:p-12 text-crema shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Subtle vectors */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-terracota/10 rounded-full blur-2xl" />

          <div className="space-y-3 relative z-10 text-center md:text-left max-w-xl">
            <span className="text-[10px] font-bold tracking-widest text-crema-dark uppercase">Insignia de Exclusividad</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">Bienestar sano para tu estilo de vida</h3>
            <p className="text-xs sm:text-sm text-crema-dark/90 leading-relaxed font-light">
              Tus platos se preparan con aceites saludables (como oliva extra virgen o girasol premium), con control moderado de azúcares y sin usar cubitos de caldo químico procesado. Sabor puro extraído del aderezo.
            </p>
          </div>

          <div className="flex-shrink-0 relative z-10 flex flex-wrap gap-4 justify-center">
            <div className="bg-white/10 px-4 py-2.5 rounded-lg border border-white/5 backdrop-blur-sm text-center">
              <span className="block font-serif text-2xl font-bold">100%</span>
              <span className="text-[10px] text-crema-dark uppercase tracking-wider font-semibold">Garantizado</span>
            </div>
            <div className="bg-white/10 px-4 py-2.5 rounded-lg border border-white/5 backdrop-blur-sm text-center">
              <span className="block font-serif text-2xl font-bold">10+ Hrs</span>
              <span className="text-[10px] text-crema-dark uppercase tracking-wider font-semibold">Ahorradas</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
