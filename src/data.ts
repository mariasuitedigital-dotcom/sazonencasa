/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProblemCard, Step, Benefit, Dish, Plan, Testimonial, GalleryItem, FaqItem } from "./types";

export const PROBLEM_CARDS: ProblemCard[] = [
  {
    id: "tired",
    icon: "Clock",
    title: "Llegas cansado y no sabes qué cocinar",
    text: "Tras un largo día de trabajo y soportar el tráfico de Lima, lo último que deseas es pasar dos horas frente a las hornillas picando ingredientes."
  },
  {
    id: "delivery",
    icon: "DollarSign",
    title: "Gastas demasiado en delivery diario",
    text: "Las apps de delivery terminan consumiendo gran parte de tu presupuesto mensual por comida rápida que suele ser alta en sodio, grasas y condimentos."
  },
  {
    id: "messy",
    icon: "TrendingDown",
    title: "Comes de forma desordenada",
    text: "La falta de alternativas listas te lleva a saltarte el almuerzo o terminar picando galletas y alimentos procesados, arruinando tu bienestar."
  },
  {
    id: "planning",
    icon: "CalendarX",
    title: "No tienes tiempo para planificar",
    text: "Idear recetas balanceadas, hacer largas colas en el supermercado y organizar las porciones te roba valiosas horas de tus descansos los fines de semana."
  },
  {
    id: "waste",
    icon: "Trash2",
    title: "Compras insumos que se desperdician",
    text: "Comprar vegetales que terminan marchitándose al fondo del cajón o carnes que vencen por falta de organización genera un gasto hormiga doloroso."
  }
];

export const METHOD_STEPS: Step[] = [
  {
    number: 1,
    title: "Cuéntanos tus gustos",
    badge: "Paso 1: Entrevista",
    description: "Criolla clásica, saludable light, alta en proteína, familiar o vegetariana. Coordinamos un menú adaptado a tus necesidades específicas."
  },
  {
    number: 2,
    title: "Diseñamos tu menú semanal",
    badge: "Paso 2: Planificación",
    description: "Cada semana te enviamos propuestas para tu aprobación. Con el menú aprobado, te entregamos una lista exacta de compras optimizada."
  },
  {
    number: 3,
    title: "Cocinamos en tu hogar",
    badge: "Paso 3: Transformación",
    description: "Una chef profesional acude a tu casa en el horario pactado, llevando sus implementos de cocina preparados para deslumbrarte."
  },
  {
    number: 4,
    title: "Dejamos todo impecable y listo",
    badge: "Paso 4: Organización",
    description: "Te entregamos las porciones limpias, organizadas en recipientes transparentes y debidamente etiquetadas. Tu cocina queda totalmente reluciente."
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: "time",
    icon: "Sparkles",
    title: "Ahorra tiempo valioso",
    description: "Recupera hasta 10 horas productivas a la semana. Disfruta por fin de tus pasatiempos, haz deporte o pasa más tiempo libre con tu familia."
  },
  {
    id: "health",
    icon: "Heart",
    title: "Alimentación equilibrada",
    description: "Menús variados y con un balance nutricional idóneo, preparados en el momento sin aditivos químicos ni conservantes artificiales."
  },
  {
    id: "savings",
    icon: "PiggyBank",
    title: "Cero desperdicios de compra",
    description: "Solo adquieres de tu supermercado local o mercado favorito los ingredientes precisos de la lista. Ahorras al no botar vegetales vencidos."
  },
  {
    id: "fridge",
    icon: "Grid",
    title: "Fácil y ultra organizado",
    description: "Un vistazo a tu refrigeradora y verás orden, limpieza y porciones listas para introducir al microondas durante tus breaks del día."
  },
  {
    id: "flavor",
    icon: "Flame",
    title: "Auténtico sabor peruano",
    description: "Garantizamos el gusto de antaño. Usamos técnicas criollas de aderezo lento de ají amarillo, ají panca, ají mirasol, culantro y ajo puro."
  },
  {
    id: "family",
    icon: "Home",
    title: "Salud y bienestar familiar",
    description: "Saber que tus hijos, tu pareja o tus padres mayores comen sano y fresco te otorga una paz mental y confort incalculables para tu rutina diaria."
  }
];

export const DISHES: Dish[] = [
  {
    id: "aji-gallina",
    name: "Ají de Gallina Cremoso",
    description: "Guiso de pechuga deshilachada en crema sedosa de ají amarillo, nueces, leche evaporada y queso, acompañado de papas nativas, arroz blanco y aceituna de botija.",
    category: "Criollo",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600",
    timeToPrep: "Preparación artesanal"
  },
  {
    id: "lomo-saltado",
    name: "Lomo Saltado Ahumado",
    description: "Trozos jugosos de lomo fino salteados al wok con cebolla roja, tomate jugoso, ají amarillo y un toque de pisco y vinagre, servido con papas crujientes y arroz con choclo.",
    category: "Criollo",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600",
    timeToPrep: "Técnica wok"
  },
  {
    id: "tallarines-verdes",
    name: "Tallarines Verdes con Bistec",
    description: "Espaguetis envueltos en una cremosa salsa de albahaca fresca, espinaca tierna y queso fresco peruano, coronados con un sabroso bistec de lomo dorado al término.",
    category: "Criollo",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80&w=600",
    timeToPrep: "Artesanal criollo"
  },
  {
    id: "arroz-pollo",
    name: "Arroz con Pollo Criollo",
    description: "Clásico arroz graneado aromatizado con abundante culantro y ají amarillo, con arvejas, zanahoria y choclo, servido con una pierna de pollo dorada y salsa criolla.",
    category: "Familiar",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600",
    timeToPrep: "Favorito del hogar"
  },
  {
    id: "carapulcra",
    name: "Carapulcra Chinchana",
    description: "Guiso tradicional de papa seca tostada, cocido lentamente con chancho magro, maní molido tostado, ají panca y especias aromáticas, servido con arroz y sopa seca.",
    category: "Criollo",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=600",
    timeToPrep: "Cocción lenta"
  },
  {
    id: "seco-res",
    name: "Seco de Res a la Limeña",
    description: "Cortes tiernos de asado de tira guisados en una base de culantro, ají amarillo y chicha de jora, acompañado de frijoles canarios cremosos, arroz con choclo y salsa criolla.",
    category: "Familiar",
    image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&q=80&w=600",
    timeToPrep: "Guiso de la abuela"
  },
  {
    id: "pollo-horno",
    name: "Pollo al Horno Finas Hierbas",
    description: "Pechuga o encuentro marinado en mostaza, romero, ají panca y cerveza negra, horneado a la perfección. Acompañado de puré de papa amarilla rústico y ensalada de espinaca.",
    category: "Sano & Balanceado",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=600",
    timeToPrep: "Jugoso y ligero"
  },
  {
    id: "quinua-verduras",
    name: "Quinua del Huerto Salteada",
    description: "Un plato supernutritivo que combina quinua blanca y roja orgánica salteada al wok con cubos de pimiento, brócoli fresco, espárragos, champiñones y un toque ligero de kión.",
    category: "Sano & Balanceado",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=600",
    timeToPrep: "Superfood fitness"
  },
  {
    id: "estofado-pollo",
    name: "Estofado de Pollo Casero",
    description: "Presas de pollo cocidas con papas amarillas, zanahorias y alverjas en una salsa casera de tomates frescos licuados, vino tinto de cocina y ajo, arroz blanco graneado.",
    category: "Familiar",
    image: "https://images.unsplash.com/photo-1608500218902-15b0f811a2e3?auto=format&fit=crop&q=80&w=600",
    timeToPrep: "Hogareño suave"
  },
  {
    id: "menestras-peruanas",
    name: "Lentejitas Baby con Ensalada",
    description: "Cremosas lentejas peruanas con espectacular aderezo norteño de ají amarillo, servidas con filete de pescado o pollo a la plancha, arroz integral y ensalada de palta madura.",
    category: "Sano & Balanceado",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=600",
    timeToPrep: "Nutrición con fibra"
  }
];

export const PLANS: Plan[] = [
  {
    id: "individual",
    name: "Plan Individual",
    subtitle: "Rendimiento y Enfoque",
    price: "S/ 190",
    pricePeriod: "semana",
    description: "Perfecto para ejecutivos y profesionales activos de Lima que buscan comer nutritivo y delegar la cocina diaria.",
    features: [
      "Menú semanal personalizado de 5 platos individuales",
      "5 almuerzos porcionados y empacados herméticamente",
      "Visita de chef especializada por 3 horas",
      "Organización higiénica básica en tu refrigeradora",
      "Lista de compras enviada el fin de semana",
      "Apto para dietas especiales (Keto, Veggie, Fitness)"
    ],
    featured: false,
    ctaText: "Reservar Evaluación Individual"
  },
  {
    id: "familiar",
    name: "Plan Familiar",
    subtitle: "El Corazón del Hogar",
    price: "S/ 320",
    pricePeriod: "semana",
    description: "Diseñado para familias, parejas o adultos mayores en distritos residenciales. El sabor del hogar garantizado para varios días.",
    features: [
      "De 10 a 15 porciones de platos típicos de la semana",
      "Ideal para almuerzos y cenas listos para 2 a 3 personas",
      "Menú 100% familiar modificado según tus preferencias",
      "Organización completa y rotulado meticuloso de envases",
      "Análisis nutricional básico familiar incluido",
      "Soporte exclusivo en WhatsApp para reprogramaciones"
    ],
    featured: true,
    ctaText: "Reservar Plan Familiar"
  },
  {
    id: "premium",
    name: "Plan Premium",
    subtitle: "Experiencia Todo Incluido",
    price: "S/ 540",
    pricePeriod: "semana",
    description: "Delega por completo la alimentación. Nutrición de primer nivel con compras de víveres coordinadas e integradas por nosotros.",
    features: [
      "Desayuno, Almuerzo y Cenas completas (20+ porciones)",
      "Servicio de compras: La chef compra y valida la frescura del insumo",
      "Menú premium con pescados selectos y cortes premium",
      "Asesoría nutricional personalizada con nutricionista colegiado",
      "Incluye etiquetas de conservación elegantes y reutilizables",
      "Descuento en botiquín de especias y aderezos premium de la casa"
    ],
    featured: false,
    ctaText: "Solicitar Experiencia Premium"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Ximena Ruiz",
    role: "Directora de Marketing",
    body: "En San Isidro el ritmo es frenético. Solía gastar una fortuna en restaurantes y delivery de comida chatarra. Ahora abro mi refrigeradora los lunes y tengo listos mis almuerzos completos, con un sabor criollo que me recuerda a mi abuela y con solo 3 minutos en microondas.",
    place: "Surco",
    rating: 5,
    tag: "¡Almuerzos listos!"
  },
  {
    id: "t2",
    name: "Juan Francisco Beltrán",
    role: "Emprendedor Tech & Padre de Familia",
    body: "Como padre de dos niños pequeños en Miraflores, encontrar tiempo para cocinar sano era imposible. El Servicio Sazón & Orden nos cambió la vida. Las raciones vienen rotuladas, sanas y los niños devoran el estofado y el arroz con pollo sin quejarse. Dejamos de desperdiciar bolsas de verduras sin usar.",
    place: "Miraflores",
    rating: 5,
    tag: "Para toda la familia"
  },
  {
    id: "t3",
    name: "Mercedes Almenara",
    role: "Psicóloga y jubilada",
    body: "Tengo dolores en las manos y cocinar para mí sola se había vuelto difícil. Mis hijos contrataron el servicio y ahora viene Katherine dos veces al mes. Me deja ají de gallina, seco de res congelado y menestras. La organización impecable que deja en mis táperes de vidrio me hace sentir cuidada.",
    place: "San Isidro",
    rating: 5,
    tag: "Tranquilidad y Cuidado"
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    query: "¿Cómo funciona el tema de los ingredientes?",
    answer: "Para garantizar que uses exactamente tus marcas preferidas, carnes de tu proveedor de confianza o insumos orgánicos, tú realizas la compra. Tras aprobar el menú de la semana, te enviamos una lista detallada, exacta y optimizada de súpermercado (por ejemplo, '400g de pechuga de pollo, 2 ajíes amarillos', etc.). De esta forma evitas desperdiciar insumos que queden sin uso. (Para el Plan Premium, nosotros realizamos la compra por ti)."
  },
  {
    id: "faq-2",
    query: "¿Puedo adaptar los platos a planes nutricionales o restricciones?",
    answer: "Totalmente. Adaptamos las comidas para dietas específicas como cetogénica (Keto), vegetarianismo, planes de reducción de peso (bajos en sodio y grasa), deportistas de alto rendimiento (altos en proteínas y carbohidratos complejos), o personas con alergias específicas (celiacos, intolerantes a la lactosa, alergia a mariscos)."
  },
  {
    id: "faq-3",
    query: "¿Cómo se conserva la comida durante la semana?",
    answer: "Los platos preparados en la visita se empacan herméticamente en recipientes de vidrio que tú nos facilites (o te asesoramos para comprarlos). Las comidas de los primeros 2 o 3 días se conservan en refrigeración estándar. Las comidas de los días posteriores te indicamos dejarlas en el congelador. Al descongelarse adecuadamente, nuestras técnicas de cocción aseguran que mantengan ese gusto original premium."
  },
  {
    id: "faq-4",
    query: "¿Qué distritos cubren en Lima, Perú?",
    answer: "Atendemos principalmente en zonas de Miraflores, San Isidro, Santiago de Surco, La Molina, San Borja, Barranco, Magdalena del Mar, Jesús María, Lince y Pueblo Libre. Si vives en un distrito aledaño, consúltanos mediante WhatsApp para validar disponibilidad de chefs en tu zona."
  },
  {
    id: "faq-5",
    query: "¿La chef trae sus propias ollas o usa las mías?",
    answer: "La chef utiliza tus ollas, sartenes y cocina residencial para preparar la comida en un ambiente familiar e higiénico. No obstante, nosotros llevamos utensilios específicos de corte, tablas especializadas de chef (para evitar contaminación cruzada), balanzas de precisión y nuestros propios artículos de limpieza de aderezos para dejar las hornillas brillantes."
  },
  {
    id: "faq-6",
    query: "¿Cuánto dura la sesión en mi domicilio?",
    answer: "La sesión regular de cocina dura aproximadamente de 3 a 4 horas. La chef trabaja con máxima concentración y pulcritud para preparar todos los platos. Al finalizar, lavará todos los implementos utilizados e higienizará las superficies y la cocina, dejándolo todo impecable."
  },
  {
    id: "faq-7",
    query: "¿Cómo se agenda el servicio de Meal Prep?",
    answer: "Iniciamos con una breve llamada o chat de Evaluación Gratuita donde definimos gustos, dietas, número de integrantes y el horario predilecto para las visitas. Tras programar el día oficial (por ejemplo, todos los martes a las 9 am), te asignamos una chef fija de confianza, te enviamos el menú propuesto, y ¡listo!"
  }
];
