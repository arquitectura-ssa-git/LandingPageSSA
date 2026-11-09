/**
 * Datos generales del sitio. Editar acá y se actualiza en toda la página.
 * Los campos vacíos ('') no se muestran.
 */
export const site = {
  name: 'Saez Sanchez Arquitectos',
  shortName: 'SSA',
  title: 'Saez Sanchez Arquitectos · Oficina de arquitectura en Tucumán',
  description:
    'Oficina de arquitectura que desarrolla proyectos de alto estándar, con foco en la innovación y la excelencia. Vivienda, desarrollos residenciales, hotelería y proyectos corporativos desde Tucumán, Argentina.',
  location: 'Tucumán, Argentina',
  since: 2006,

  // PENDIENTE: completar con los datos reales.
  contact: {
    whatsapp: '', // formato internacional sin + ni espacios, ej. '5493811234567'
    email: '',
    address: '',
  },
  social: {
    instagram: '',
    linkedin: '',
    facebook: '',
  },
};

export const nav = [
  { n: '01', label: 'Proyectos', href: '#proyectos' },
  { n: '02', label: 'Estudio', href: '#estudio' },
  { n: '03', label: 'Proceso', href: '#proceso' },
  { n: '04', label: 'Contacto', href: '#contacto' },
];
