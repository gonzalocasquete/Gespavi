export interface Project {
  id: string;
  title: string;
  type: 'Industrial' | 'Deportivo' | 'Decorativo';
  location: string;
  surface: number;
  year: number;
  description: string;
  image: string;
  images: string[];
  details: {
    pavement: string;
    characteristics: string[];
    process: string[];
  };
  slug: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Pavimento Decorativo Sevilla',
    type: 'Decorativo',
    location: 'Sevilla',
    surface: 850,
    year: 2024,
    description: 'Instalación de pavimento decorativo con acabado en resina epoxi para oficinas corporativas.',
    image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg',
    images: [
      'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/1102915/pexels-photo-1102915.jpeg'
    ],
    details: {
      pavement: 'Resina epoxi decorativa con acabado brillante',
      characteristics: ['Alta resistencia', 'Fácil limpieza', 'Acabado brillante', 'Antideslizante'],
      process: ['Preparación de superficie', 'Aplicación de primer', 'Instalación de resina', 'Acabado protector']
    },
    slug: 'pavimento-decorativo-sevilla'
  },
  {
    id: '2',
    title: 'Nave Industrial Algámitas',
    type: 'Industrial',
    location: 'Algámitas (Sevilla)',
    surface: 2400,
    year: 2024,
    description: 'Pavimento industrial de alta resistencia para nave de almacenamiento con tráfico pesado.',
    image: 'https://images.pexels.com/photos/1102915/pexels-photo-1102915.jpeg',
    images: [
      'https://images.pexels.com/photos/1102915/pexels-photo-1102915.jpeg',
      'https://images.pexels.com/photos/1571447/pexels-photo-1571447.jpeg',
      'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg'
    ],
    details: {
      pavement: 'Pavimento continuo industrial ultra resistente',
      characteristics: ['Resistencia a cargas pesadas', 'Sin juntas', 'Antidesgaste', 'Químicamente resistente'],
      process: ['Análisis del soporte', 'Nivelación', 'Aplicación multicapa', 'Sellado final']
    },
    slug: 'nave-industrial-algamitas'
  },
  {
    id: '3',
    title: 'Oficinas Alcalá de Guadaira',
    type: 'Industrial',
    location: 'Alcalá de Guadaira',
    surface: 650,
    year: 2024,
    description: 'Revestimiento industrial para oficinas con acabado moderno y funcional.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg',
      'https://images.pexels.com/photos/1102915/pexels-photo-1102915.jpeg'
    ],
    details: {
      pavement: 'Pavimento continuo con acabado mate',
      characteristics: ['Confort acústico', 'Resistente al tráfico', 'Fácil mantenimiento', 'Estético'],
      process: ['Preparación base', 'Nivelación', 'Aplicación resina', 'Acabado mate']
    },
    slug: 'oficinas-alcala-guadaira'
  },
  {
    id: '4',
    title: 'Centro Deportivo Dos Hermanas',
    type: 'Deportivo',
    location: 'Dos Hermanas (Sevilla)',
    surface: 1200,
    year: 2024,
    description: 'Pavimento deportivo especializado para polideportivo municipal.',
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg',
    images: [
      'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
      'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg'
    ],
    details: {
      pavement: 'Pavimento deportivo poliuretano',
      characteristics: ['Amortiguación', 'Antideslizante', 'Marcado deportivo', 'Durabilidad'],
      process: ['Preparación superficie', 'Base elástica', 'Capa de color', 'Marcado deportivo']
    },
    slug: 'centro-deportivo-dos-hermanas'
  },
  {
    id: '5',
    title: 'Piscina Cubierta Huelva',
    type: 'Deportivo',
    location: 'Huelva',
    surface: 800,
    year: 2023,
    description: 'Revestimiento especializado para zona de piscina cubierta con alta resistencia al cloro.',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
      'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg',
      'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg'
    ],
    details: {
      pavement: 'Revestimiento resistente al cloro',
      characteristics: ['Resistencia química', 'Antideslizante húmedo', 'Higiénico', 'Impermeable'],
      process: ['Preparación', 'Tratamiento anticorrosivo', 'Aplicación base', 'Sellado especial']
    },
    slug: 'piscina-cubierta-huelva'
  },
  {
    id: '6',
    title: 'Pavimento Industrial Vitoria',
    type: 'Industrial',
    location: 'Vitoria',
    surface: 3200,
    year: 2023,
    description: 'Gran superficie industrial con pavimento continuo de máxima resistencia.',
    image: 'https://images.pexels.com/photos/1571447/pexels-photo-1571447.jpeg',
    images: [
      'https://images.pexels.com/photos/1571447/pexels-photo-1571447.jpeg',
      'https://images.pexels.com/photos/1102915/pexels-photo-1102915.jpeg',
      'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg'
    ],
    details: {
      pavement: 'Pavimento industrial de máxima resistencia',
      characteristics: ['Tráfico muy pesado', 'Resistencia química', 'Sin polvo', 'Larga durabilidad'],
      process: ['Diagnóstico soporte', 'Reparaciones', 'Aplicación multicapa', 'Control calidad']
    },
    slug: 'pavimento-industrial-vitoria'
  },
  {
    id: '7',
    title: 'Supermercado Badajoz',
    type: 'Industrial',
    location: 'Badajoz',
    surface: 1800,
    year: 2023,
    description: 'Pavimento continuo para gran superficie comercial con alto tránsito.',
    image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg',
    images: [
      'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg',
      'https://images.pexels.com/photos/1102915/pexels-photo-1102915.jpeg',
      'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg'
    ],
    details: {
      pavement: 'Pavimento continuo comercial',
      characteristics: ['Alto tránsito', 'Higiénico', 'Fácil limpieza', 'Estético'],
      process: ['Análisis tráfico', 'Preparación soporte', 'Instalación rápida', 'Puesta en servicio']
    },
    slug: 'supermercado-badajoz'
  },
  {
    id: '8',
    title: 'Nave Cristalería',
    type: 'Industrial',
    location: 'Manipulación y montaje',
    surface: 1500,
    year: 2023,
    description: 'Pavimento especializado para industria del vidrio con máxima resistencia.',
    image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg',
    images: [
      'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg',
      'https://images.pexels.com/photos/1571447/pexels-photo-1571447.jpeg',
      'https://images.pexels.com/photos/1102915/pexels-photo-1102915.jpeg'
    ],
    details: {
      pavement: 'Pavimento resistente a impactos',
      characteristics: ['Resistencia impactos', 'Antichispas', 'Conductivo', 'Seguridad'],
      process: ['Estudio específico', 'Preparación especial', 'Aplicación técnica', 'Certificación']
    },
    slug: 'nave-cristaleria'
  }
];