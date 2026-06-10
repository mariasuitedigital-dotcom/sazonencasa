/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { FAQS } from "../data";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-crema bg-grid-pattern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-olive-600">Resolvemos tus dudas</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-carbon font-extrabold tracking-tight">
            Preguntas Frecuentes
          </h2>
          <div className="w-16 h-1 bg-olive-500 mx-auto rounded-full mt-2" />
          <p className="text-base sm:text-lg text-carbon/70 font-light leading-relaxed pt-2">
            Todo lo que necesitas saber sobre logística, aderezos, conservación y contratación de nuestro servicio.
          </p>
        </div>

        {/* Accordions Container */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className="bg-white rounded-2xl border border-olive-200/40 shadow-sm overflow-hidden transition-all duration-300"
              >
                {/* Trigger Button bar */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 hover:bg-olive-50/20 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-7 h-7 rounded-lg bg-olive-100 flex items-center justify-center text-olive-600 flex-shrink-0">
                      <HelpCircle className="w-4 h-4 text-olive-500" />
                    </div>
                    <span className="font-serif font-bold text-sm sm:text-base text-carbon tracking-tight">
                      {faq.query}
                    </span>
                  </div>

                  <span className={`p-1 text-carbon/40 rounded-full transition-transform duration-300 ${isOpen ? "rotate-180 text-olive-600 bg-olive-100" : ""}`}>
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>

                {/* Answer Drawer Panel */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] border-t border-olive-100/50" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <div className="p-6 sm:p-8 pt-5 bg-crema-light/40">
                    <p className="text-xs sm:text-sm text-carbon/75 leading-relaxed font-sans font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Chat Accent */}
        <div className="mt-12 text-center p-6 bg-olive-500/5 rounded-2xl border border-olive-100 max-w-lg mx-auto space-y-4">
          <p className="text-xs sm:text-sm text-carbon/70 font-sans font-light">
            ¿Tienes otra duda técnica? ¿Vives en otro distrito o necesitas dietas médicas específicas?
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=51987654321&text=Hola%20Sazón%20y%20Orden,%20tengo%20algunas%20especificaciones%20con%20el%20menú"
            target="_blank"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-terracota hover:text-terracota-dark transition-colors"
          >
            <span>Pregúntanos por WhatsApp directo</span>
            <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
