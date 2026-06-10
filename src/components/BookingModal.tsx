/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { X, Calendar, MapPin, Users, Utensils, Send, MessageCircle } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanId?: string;
}

export default function BookingModal({ isOpen, onClose, selectedPlanId = "familiar" }: BookingModalProps) {
  const [name, setName] = useState("");
  const [district, setDistrict] = useState("Surco");
  const [familySize, setFamilySize] = useState("2-3 personas");
  const [plan, setPlan] = useState(selectedPlanId);
  const [diet, setDiet] = useState("Criolla y Balanceada");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp Message
    const formattedPlan = plan === "individual" ? "Plan Individual (5 almuerzos)" : plan === "premium" ? "Plan Premium (Todo Incluido)" : "Plan Familiar (10-15 porciones)";
    
    const text = `¡Hola! Me gustaría agendar una evaluación gratuita para el servicio de Meal Prep Peruano "Sazón & Orden". Aquí mis detalles:
    
- *Nombre:* ${name}
- *Distrito:* ${district}
- *Plato/Familia:* ${familySize}
- *Plan de Interés:* ${formattedPlan}
- *Preferencia Dietética:* ${diet}
${notes ? `- *Notas adicionales:* ${notes}` : ""}`;

    const encodedText = encodeURIComponent(text);
    // Dynamic WhatsApp Send
    const whatsappUrl = `https://api.whatsapp.com/send?phone=51987654321&text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-carbon/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-crema-light rounded-2xl shadow-2xl border border-olive-200 overflow-hidden animate-scale-up">
        {/* Decorative Top Accent line */}
        <div className="h-2 bg-olive-500 w-full" />
        
        {/* Header */}
        <div className="p-6 pb-2 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-terracota">Evaluación Gratuita</span>
            <h3 className="font-serif text-2xl text-carbon mt-1 font-semibold">Reserva tu Entrevista</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-carbon/40 hover:text-carbon hover:bg-olive-100 rounded-full transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <p className="px-6 text-sm text-carbon/70">
          Completa tus datos para coordinar una llamada breve de 10 minutos y diseñar tu primer menú.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase text-carbon/60 tracking-wider mb-2">Tu Nombre Completo</label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej. María Teresa Almenara"
              className="w-full px-4 py-2.5 bg-white border border-olive-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent text-sm transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-carbon/60 tracking-wider mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-terracota" /> Distrito
              </label>
              <select 
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full px-3 py-2.5 bg-white border border-olive-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent text-sm transition-all"
              >
                <option value="Surco">Surco</option>
                <option value="Miraflores">Miraflores</option>
                <option value="San Isidro">San Isidro</option>
                <option value="La Molina">La Molina</option>
                <option value="San Borja">San Borja</option>
                <option value="Barranco">Barranco</option>
                <option value="Magdalena / Jesús María">Magdalena / Jesús María</option>
                <option value="Otro Distrito">Otro distrito en Lima</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-carbon/60 tracking-wider mb-2 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-terracota" /> ¿Para quiénes?
              </label>
              <select 
                value={familySize}
                onChange={(e) => setFamilySize(e.target.value)}
                className="w-full px-3 py-2.5 bg-white border border-olive-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent text-sm transition-all"
              >
                <option value="1 persona">Solo para mí</option>
                <option value="2-3 personas">Pareja o 2-3 personas</option>
                <option value="4 a más personas">Familia de 4+ personas</option>
                <option value="Adultos Mayores">Para mis padres / adultos mayores</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-carbon/60 tracking-wider mb-2">Plan Deseado</label>
              <select 
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                className="w-full px-3 py-2.5 bg-white border border-olive-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent text-sm"
              >
                <option value="individual">Plan Individual (S/ 190)</option>
                <option value="familiar">Plan Familiar (S/ 320)</option>
                <option value="premium">Plan Premium (S/ 540)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-carbon/60 tracking-wider mb-2 flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5 text-terracota" /> Tipo de Dieta
              </label>
              <select 
                value={diet}
                onChange={(e) => setDiet(e.target.value)}
                className="w-full px-3 py-2.5 bg-white border border-olive-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-500"
              >
                <option value="Criolla y Balanceada">Criolla con todo</option>
                <option value="Saludable / Baja en Grasas">Baja en calorías / light</option>
                <option value="Alta Proteína / Fitness">Alta en Proteína / Fitness</option>
                <option value="Vegetariana">100% Vegetariana</option>
                <option value="Bajo en Sodio / Senior">Baja en sal / Tercera Edad</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-carbon/60 tracking-wider mb-2">Comentarios, Alergias o Preferencias</label>
            <textarea 
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ej. Mi hijo es intolerante a la lactosa / Deseo más de pescado."
              rows={2}
              className="w-full px-4 py-2 bg-white border border-olive-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent text-sm transition-all"
            />
          </div>

          <div className="pt-2">
            <button 
              type="submit" 
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-olive-500 hover:bg-olive-600 text-crema font-medium rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-crema text-olive-500" />
              <span>Confirmar y Enviar por WhatsApp</span>
            </button>
          </div>
        </form>

        <div className="px-6 py-4 bg-olive-50 border-t border-olive-100 flex items-center gap-2 justify-center text-xs text-olive-700 font-medium">
          <Calendar className="w-4 h-4 text-terracota" />
          <span>✓ Ningún cobro se realiza hasta definir tu menú ideal.</span>
        </div>
      </div>
    </div>
  );
}
