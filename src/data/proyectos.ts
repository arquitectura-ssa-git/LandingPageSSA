import type { ImageMetadata } from 'astro';

import sanPablo01 from '../assets/proyectos/san-pablo-life-01.jpg';
import casaAm01 from '../assets/proyectos/casa-am-01.jpg';
import casaIc01 from '../assets/proyectos/casa-ic-01.jpg';

export type Categoria = 'Residenciales' | 'Otros proyectos';

export interface Proyecto {
  slug: string;
  nombre: string;
  categoria: Categoria;
  tipo: string;
  ubicacion: string;
  anio?: number;
  imagen: ImageMetadata;
  alt: string;
}

/**
 * Proyectos con imagen cargada. El resto de las 35 obras del sitio actual
 * se suman en la etapa C.
 */
export const proyectos: Proyecto[] = [
  {
    slug: 'san-pablo-life',
    nombre: 'San Pablo Life',
    categoria: 'Otros proyectos',
    tipo: 'Residencial y comercial',
    ubicacion: 'Country San Pablo, Tucumán',
    anio: 2023,
    imagen: sanPablo01,
    alt: 'Edificio residencial San Pablo Life con balcones blancos escalonados al atardecer',
  },
  {
    slug: 'casa-am',
    nombre: 'Casa AM',
    categoria: 'Residenciales',
    tipo: 'Vivienda unifamiliar',
    ubicacion: 'Praderas Country, Yerba Buena',
    anio: 2025,
    imagen: casaAm01,
    alt: 'Fachada de hormigón y celosías de madera de la Casa AM bajo cielo despejado',
  },
  {
    slug: 'casa-ic',
    nombre: 'Casa IC',
    categoria: 'Residenciales',
    tipo: 'Vivienda unifamiliar',
    ubicacion: 'San Pablo Country, Tucumán',
    anio: 2024,
    imagen: casaIc01,
    alt: 'Acceso de la Casa IC con escalinata, galería superior y revestimiento de madera',
  },
];

/** Obras que rotan en el hero, en orden. */
export const heroSlides = ['san-pablo-life', 'casa-am', 'casa-ic'].map(
  (slug) => proyectos.find((p) => p.slug === slug)!,
);
