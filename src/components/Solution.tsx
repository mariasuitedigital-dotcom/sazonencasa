/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { METHOD_STEPS } from "../data";
import { Coffee, Compass, ChefHat, Sparkles } from "lucide-react";

export default function Solution() {
  
  const getIconForStep = (num: number) => {
    switch (num) {
      case 1:
        return <Coffee className="w-5 h-5 text-olive-600" />;
      case 2:
        return <Compass className="w-5 h-5 text-olive-600" />;
      case 3:
        return <ChefHat className="w-5 h-5 text-olive-600" />;
      case 4:
        return <Sparkles className="w-5 h-5 text-olive-600" />;
      default:
        return <ChefHat className="w-5 h-5 text-olive-600" />;
    }
  };

  return (
    <section id="como-funciona" className="py-20 bg-crema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-olive-600">Nuestra Metodología</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-carbon font-extrabold tracking-tight">
            Nosotros cocinamos. <span className="text-terracota">Tú disfrutas las raciones.</span>
          </h2>
          <p className="text-base sm:text-lg text-carbon/70 font-light leading-relaxed max-w-2xl mx-auto pt-2">
            Un servicio integral y personalizado de principio a fin, diseñado con la delicadeza de un hotel 5 estrellas y el calor hogareño de la cocina peruana casera tradicional.
          </p>
        </div>

        {/* Process Map Grid */}
        <div className="relative mt-8">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[12.5%] right-[12.5%] h-0.5 bg-dashed border-t-2 border-dashed border-olive-300 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {METHOD_STEPS.map((step) => (
              <div 
                key={step.number}
                className="bg-white rounded-2xl p-6 shadow-sm border border-olive-200/40 relative group hover:shadow-md transition-shadow"
              >
                {/* Step badge */}
                <div className="absolute top-4 right-4 bg-olive-500/10 text-olive-700 text-[10px] font-extrabold py-1 px-2.5 rounded-full uppercase tracking-wider">
                  {step.badge}
                </div>

                {/* Big Indicator Sphere */}
                <div className="w-14 h-14 rounded-2xl bg-olive-100 flex items-center justify-center text-olive-700 font-bold text-xl relative mb-6 group-hover:scale-105 transition-transform">
                  <span className="absolute -top-3.5 -left-3.5 font-serif text-2xl font-bold text-terracota italic drop-shadow-sm">
                    {`0${step.number}`}
                  </span>
                  {getIconForStep(step.number)}
                </div>

                {/* Title and Detail description */}
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-carbon tracking-tight group-hover:text-olive-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-carbon/75 font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Foot indicators */}
                <div className="mt-4 pt-4 border-t border-olive-100 flex items-center justify-between text-xs text-carbon/40">
                  <span>Sazón & Orden</span>
                  <span>Lima, Perú</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
