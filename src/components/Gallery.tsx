/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Camera, Eye, MapPin, Sparkles } from "lucide-react";

export default function Gallery() {
  
  const galleryItems = [
    {
      id: "g1",
      title: "Chef Profesional Cocinando",
      category: "Nuestros Chefs",
      image: "/src/assets/images/chef_lima_cooking_1781045150794.png",
      spanClass: "md:col-span-2 lg:col-span-2",
      aspectClass: "aspect-[16/9]"
    },
    {
      id: "g2",
      title: "Refrigeradora Organizada con Envases de Vidrio",
      category: "Higienización & Orden",
      image: "/src/assets/images/organized_fridge_1781045166421.png",
      spanClass: "md:col-span-1 lg:col-span-1",
      aspectClass: "aspect-[4/3]"
    },
    {
      id: "g3",
      title: "Porciones Cocinadas y Etiquetadas Semanales",
      category: "Meal Prep Listo",
      image: "/src/assets/images/peruvian_dishes_1781045189925.png",
      spanClass: "md:col-span-1 lg:col-span-1",
      aspectClass: "aspect-[4/3]"
    },
    {
      id: "g4",
      title: "Familia Limeña Disfrutando Sin Cocinar",
      category: "Calidad de Vida",
      image: "/src/assets/images/family_dinner_1781045178582.png",
      spanClass: "md:col-span-2 lg:col-span-2",
      aspectClass: "aspect-[16/9]"
    },
    {
      id: "g5",
      title: "Ingredientes Crudos Frescos de Proveedor Local",
      category: "Insumos Premium",
      image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&q=80&w=600",
      spanClass: "md:col-span-3 lg:col-span-3",
      aspectClass: "aspect-[21/9]"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-crema-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-terracota">La Experiencia Visual</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-carbon font-extrabold tracking-tight">
            Nuestra Galería de Hogar
          </h2>
          <div className="w-16 h-1 bg-terracota mx-auto rounded-full mt-2" />
          <p className="text-base sm:text-lg text-carbon/70 font-light leading-relaxed max-w-2xl mx-auto pt-2">
            Detalles reales de nuestro servicio residencial: desde la meticulosa preparación hasta tu mesa servida con amor y estilo.
          </p>
        </div>

        {/* Pinterest-like Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className={`rounded-3xl overflow-hidden border-4 border-white shadow-md hover:shadow-xl transition-all duration-500 bg-white relative group ${item.spanClass}`}
            >
              <div className={`relative w-full ${item.aspectClass} overflow-hidden`}>
                {/* Main Image */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Cover visual overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-carbon/20 to-transparent opacity-85 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Header tag */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-olive-700 font-sans font-bold text-[10px] sm:text-xs py-1 px-3 rounded-full flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3 h-3 text-terracota" />
                  <span>{item.category}</span>
                </div>

                {/* Subheading text overlay shown permanently at bottom */}
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <h4 className="font-serif text-sm sm:text-lg font-bold leading-tight group-hover:text-crema transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-crema-dark font-sans">
                    <MapPin className="w-3.5 h-3.5 text-terracota-light" />
                    <span>Lima Residencial</span>
                  </div>
                </div>

                {/* Visual Eye Icon floating overlay on hover */}
                <div className="absolute inset-x-0 top-[40%] flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white text-olive-700 flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <Eye className="w-5 h-5 text-olive-500" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
