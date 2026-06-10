/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { PROBLEM_CARDS } from "../data";
import { Clock, DollarSign, TrendingDown, CalendarX, Trash2 } from "lucide-react";

export default function Problem() {
  
  // Dynamic Map to get the component dynamically
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Clock":
        return <Clock className="w-6 h-6 text-terracota" />;
      case "DollarSign":
        return <DollarSign className="w-6 h-6 text-terracota" />;
      case "TrendingDown":
        return <TrendingDown className="w-6 h-6 text-terracota" />;
      case "CalendarX":
        return <CalendarX className="w-6 h-6 text-terracota" />;
      case "Trash2":
        return <Trash2 className="w-6 h-6 text-terracota" />;
      default:
        return <Clock className="w-6 h-6 text-terracota" />;
    }
  };

  return (
    <section id="problemas" className="py-20 bg-crema-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header container */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-terracota">La realidad del día a día</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-carbon font-extrabold tracking-tight">
            ¿Te identificas con esto?
          </h2>
          <div className="w-16 h-1.5 bg-terracota mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-carbon/80 font-light leading-relaxed max-w-2xl mx-auto pt-2">
            Miles de familias limeñas y profesionales ocupados en distritos como San Isidro, Miraflores, Surco o La Molina quieren comer mejor, pero las exigencias del trabajo, el intenso tráfico vial y las responsabilidades del hogar hacen sumamente difícil planificar platos frescos diariamente.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {PROBLEM_CARDS.map((card, i) => (
            <div 
              key={card.id} 
              className={`p-6 bg-white border border-olive-200/50 rounded-2xl shadow-sm hover:shadow-lg hover:border-olive-300 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between ${
                i === 4 ? "md:col-span-2 lg:col-span-1 border-terracota/20 bg-amber-50/20" : ""
              }`}
            >
              {/* Card visual highlight accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${
                i === 4 ? "bg-terracota" : "bg-olive-500"
              }`} />
              
              <div className="space-y-4">
                {/* Icon Circle */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  i === 4 ? "bg-terracota/10" : "bg-olive-100"
                }`}>
                  {getIcon(card.icon)}
                </div>

                <h3 className="font-serif text-lg font-bold text-carbon tracking-tight leading-snug">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-carbon/70 font-sans leading-relaxed">
                  {card.text}
                </p>
              </div>

              {i === 4 && (
                <div className="mt-4 pt-4 border-t border-terracota/10">
                  <span className="text-[10px] font-bold text-terracota uppercase tracking-wider">¡El costo invisible de no organizarte!</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom micro quote */}
        <div className="bg-olive-500/5 border border-olive-500/10 rounded-2xl p-6 mt-12 text-center max-w-3xl mx-auto">
          <p className="text-sm font-sans font-medium text-olive-800 italic">
            &ldquo;Nos pasamos la vida decidiendo qué almorzar o gastando en restaurantes que devalúan nuestra salud física y financiera. Creemos que hay una forma más saludable y organizada de disfrutar de la riquísima sazón peruana en casa.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
