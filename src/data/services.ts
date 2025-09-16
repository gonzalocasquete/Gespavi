export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  applications: string[];
  icon: string;
  image: string;
  slug: string;
}

export const services: Service[] = [
  {
    id: "1",
    title: "Pavimento Industrial",
    description:
      "Pavimentos continuos industriales de altas prestaciones diseñados para soportar tráfico pesado y condiciones extremas.",
    features: [
      "Alta resistencia mecánica",
      "Resistencia química",
      "Sin juntas ni fisuras",
      "Fácil limpieza y mantenimiento",
      "Antidesgaste",
      "Conductivo o antiestático",
    ],
    applications: [
      "Naves industriales",
      "Almacenes logísticos",
      "Plantas de producción",
      "Talleres mecánicos",
      "Industria alimentaria",
      "Laboratorios",
    ],
    icon: "Factory",
    image: "https://images.pexels.com/photos/1102915/pexels-photo-1102915.jpeg",
    slug: "pavimento-industrial",
  },
  {
    id: "2",
    title: "Pavimento Deportivo",
    description:
      "Pavimentos especializados para instalaciones deportivas con máximo confort, seguridad y durabilidad.",
    features: [
      "Amortiguación controlada",
      "Superficie antideslizante",
      "Marcado deportivo integrado",
      "Resistencia a UV",
      "Absorción de impactos",
      "Fácil limpieza",
    ],
    applications: [
      "Polideportivos",
      "Pistas de atletismo",
      "Piscinas cubiertas",
      "Gimnasios",
      "Canchas exteriores",
      "Zonas de fitness",
    ],
    icon: "Zap",
    image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg",
    slug: "pavimento-deportivo",
  },
  {
    id: "3",
    title: "Revestimientos Decorativos",
    description:
      "Revestimientos de resina epoxi, poliuretanos y acrílicos para crear espacios únicos y funcionales.",
    features: [
      "Amplia gama de colores",
      "Acabados personalizados",
      "Texturas variadas",
      "Resistencia al desgaste",
      "Impermeabilidad",
      "Diseño a medida",
    ],
    applications: [
      "Oficinas modernas",
      "Showrooms",
      "Centros comerciales",
      "Restaurantes",
      "Hoteles",
      "Viviendas particulares",
    ],
    icon: "Palette",
    image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg",
    slug: "revestimientos-decorativos",
  },
];
