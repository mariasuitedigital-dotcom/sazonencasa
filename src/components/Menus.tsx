/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { DISHES } from "../data";
import { Check, Flame, Trophy, Sparkles } from "lucide-react";

export default function Menus() {
  const [activeTab, setActiveTab] = useState<"All" | "Criollo" | "Sano & Balanceado" | "Familiar">("All");

  const categories = [
    { key: "All", label: "Toda la Alacena" },
    { key: "Criollo", label: "Criollos de Siempre" },
    { key: "Sano & Balanceado", label: "Sanos & Balanceados" },
    { key: "Familiar", label: "Favoritos de la Familia" }
  ];

  const filteredDishes = activeTab === "All" 
    ? DISHES 
    : DISHES.filter(d => d.category === activeTab);

  return (
    <section id="menus" className="py-20 bg-crema bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracota">Nuestra Carta de Casa</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-carbon font-extrabold tracking-tight">
            Nuestros Menús Semanales
          </h2>
          <div className="w-16 h-1 bg-terracota mx-auto rounded-full mt-2" />
          <p className="text-base sm:text-lg text-carbon/70 font-light leading-relaxed max-w-2xl mx-auto pt-2">
            Platos tradicionales peruanos cocinados con técnicas de restaurante y el cariño de un hogar limeño de tradición.
          </p>
        </div>

        {/* Premium Banner using Generated Image */}
        <div className="mb-14 relative rounded-3xl overflow-hidden h-[260px] sm:h-[350px] shadow-xl border-4 border-white group">
          <img 
            src="/assets/images/peruvian_dishes.png" 
            alt="Ingredientes y platos peruanos preparados por Sazón & Orden" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-carbon/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 text-white space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-terracota rounded-full text-[10px] sm:text-xs font-bold tracking-wide uppercase">
              <Trophy className="w-3.5 h-3.5 fill-white" />
              <span>Garantía de Ingredientes</span>
            </div>
            <h3 className="font-serif text-xl sm:text-3xl font-bold tracking-tight">
              Los menús cambian cada semana y se adaptan a ti
            </h3>
            <p className="text-xs sm:text-sm text-crema-dark max-w-xl font-light font-sans">
              Cada propuesta es 100% regulable según tus alergias, preferencias o indicaciones de tu médico nutricionista. Usamos la sazón exacta que prefieras.
            </p>
          </div>
        </div>

        {/* Categories Tab Pill Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key as any)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === cat.key
                  ? "bg-olive-500 text-crema shadow-lg shadow-olive-500/15 scale-102"
                  : "bg-white text-carbon/70 hover:bg-olive-100 hover:text-carbon border border-olive-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <div 
              key={dish.id}
              className="bg-white rounded-2xl overflow-hidden border border-olive-200/40 shadow-sm hover:shadow-xl hover:border-olive-300 transition-all duration-300 flex flex-col group"
            >
              {/* Dish Image Container */}
              <div className="relative h-56 sm:h-60 overflow-hidden bg-olive-100">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Float Category Tag */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm shadow-sm font-sans font-bold text-[10px] sm:text-xs text-olive-700 py-1 px-2.5 rounded-full uppercase tracking-wider">
                  {dish.category}
                </div>

                {/* Preparation micro tag */}
                {dish.timeToPrep && (
                  <div className="absolute bottom-4 right-4 text-white text-[10px] sm:text-xs font-semibold flex items-center gap-1.5 backdrop-blur-sm bg-black/15 py-1 px-3 rounded-md">
                    <Sparkles className="w-3.5 h-3.5 text-terracota-light" />
                    <span>{dish.timeToPrep}</span>
                  </div>
                )}
              </div>

              {/* Text Body */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-carbon group-hover:text-olive-500 transition-colors">
                    {dish.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-carbon/70 leading-relaxed font-sans font-light line-clamp-3">
                    {dish.description}
                  </p>
                </div>

                {/* Tags bottom indicator */}
                <div className="pt-4 border-t border-olive-100 flex items-center justify-between text-[11px] text-carbon/40 font-semibold font-sans">
                  <span>Sabor Criollo Auténtico</span>
                  <span className="text-terracota uppercase tracking-wider">Para la despensa semanal</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
