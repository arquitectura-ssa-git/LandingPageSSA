/**
 * Datos fijos del sitio (SEO y menú).
 * Contacto, redes, hitos y frase de portada se editan desde el administrador
 * (/admin → Configuración del sitio) y viven en src/content/sitio.json.
 */
export const site = {
  name: 'Saez Sanchez Arquitectos',
  shortName: 'SSA',
  title: 'Saez Sanchez Arquitectos · Oficina de arquitectura en Tucumán',
  description:
    'Oficina de arquitectura que desarrolla proyectos de alto estándar, con foco en la innovación y la excelencia. Vivienda, desarrollos residenciales, hotelería y proyectos corporativos desde Tucumán, Argentina.',
  location: 'Tucumán, Argentina',
  since: 2006,
};

export const nav = [
  { n: '01', label: 'Estudio', href: '#estudio' },
  { n: '02', label: 'Proyectos', href: '#proyectos' },
  { n: '03', label: 'Proceso', href: '#proceso' },
  { n: '04', label: 'Contacto', href: '#contacto' },
];
