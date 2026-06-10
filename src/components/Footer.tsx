/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MessageCircle, Instagram, Facebook, Mail, MapPin, Heart, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "WhatsApp", icon: <MessageCircle className="w-5 h-5" />, href: "https://api.whatsapp.com/send?phone=51987654321" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com" },
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com" },
    { name: "Correo", icon: <Mail className="w-5 h-5" />, href: "mailto:contacto@sazonyorden.pe" }
  ];

  // Requested SEO Search Keywords
  const seoKeywords = [
    "chef a domicilio Lima",
    "meal prep Lima",
    "comida saludable Lima",
    "cocinera a domicilio Lima",
    "preparación semanal de comidas Lima"
  ];

  const quickLinks = [
    { name: "Inicio", href: "#" },
    { name: "Metodología", href: "#como-funciona" },
    { name: "Beneficios", href: "#beneficios" },
    { name: "Nuesta Carta", href: "#menus" },
    { name: "Planes & Precios", href: "#planes" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Preguntas Frecuentes", href: "#faq" }
  ];

  return (
    <footer className="bg-carbon text-[#EDE7DB] pt-16 pb-8 border-t border-olive-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-olive-800">
          
          {/* Brand/Presentation Col */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-olive-500 flex items-center justify-center">
                <span className="font-serif text-crema text-xl font-bold italic">S</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold tracking-tight text-white">
                  Sazón & Orden
                </h3>
                <span className="block text-[9px] tracking-wider uppercase font-semibold text-terracota -mt-0.5 leading-none">
                  Meal Prep Peruano Premium
                </span>
              </div>
            </div>

            <p className="text-sm text-[#DFD9CE]/70 leading-relaxed max-w-sm font-sans font-light">
              Comida peruana preparada en tu hogar con cariño, organización y el auténtico sabor tradicional. Resolvemos tu alimentación semanal de manera profesional e impecable.
            </p>

            {/* Distritos tag outline */}
            <div className="flex items-center gap-2 text-xs text-[#DFD9CE]/60">
              <MapPin className="w-4 h-4 text-terracota-light" />
              <span>San Isidro · Miraflores · Surco · La Molina · San Borja · Barranco</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs sm:text-sm font-sans">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-[#DFD9CE]/70 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Social columns */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Conexión Directa
            </h4>
            <p className="text-xs text-[#DFD9CE]/60 font-sans leading-relaxed">
              ¿Listo para dar el paso hacia una vida más saludable y libre? Escríbenos o síguenos en redes para enterarte de los nuevos menús de temporada.
            </p>

            {/* Social Sphere links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-olive-800/60 text-[#DFD9CE] hover:text-white hover:bg-olive-500 hover:shadow-lg transition-all flex items-center justify-center cursor-pointer"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="pt-2 text-xs text-[#DFD9CE]/60">
              <p>Email: <a href="mailto:soporte@sazonyorden.pe" className="underline hover:text-white">soporte@sazonyorden.pe</a></p>
              <p className="mt-1">Lima, Perú</p>
            </div>
          </div>

        </div>

        {/* SEO Directories & Tag cloud - Requirement fulfilled gracefully */}
        <div className="py-6 border-b border-olive-800 flex flex-wrap items-center justify-center gap-2 text-[11px] text-[#DFD9CE]/40 font-semibold font-sans uppercase tracking-wider">
          <span className="text-terracota mr-2">Búsquedas populares en Lima:</span>
          {seoKeywords.map((keyword, idx) => (
            <React.Fragment key={keyword}>
              <span className="hover:text-white/60 transition-colors cursor-default">
                {keyword}
              </span>
              {idx < seoKeywords.length - 1 && <span className="text-olive-700 font-bold">&#8226;</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Bottom Credits copy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DFD9CE]/50 font-normal">
          <p>
            &copy; {currentYear} Sazón & Orden - Meal Prep Peruano. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-olive-500" />
              Servicio Residencial de Confianza
            </span>
            <span className="flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 text-terracota" />
              Hecho con cariño en Perú
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
