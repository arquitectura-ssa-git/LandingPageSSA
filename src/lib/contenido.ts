/**
 * Lee el contenido que se edita desde el administrador (/admin):
 *   src/content/proyectos/<obra>/index.json  + sus imágenes
 *   src/content/sitio.json                   (contacto, redes, hitos, frase)
 *   src/content/estudio.json                 (proceso, fundadores, reconocimientos)
 *
 * Es tolerante a campos vacíos o faltantes para que un dato incompleto
 * cargado desde el administrador nunca rompa la publicación.
 */
import type { ImageMetadata } from 'astro';
import sitioJson from '../content/sitio.json';
import estudioJson from '../content/estudio.json';

// ---------- Imágenes ----------
const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/content/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true },
);
const imageByPath = new Map(Object.entries(imageModules).map(([k, m]) => [k, m.default]));

const basename = (p: string) => p.split('/').pop() ?? p;
const normalize = (p: string) => {
  const out: string[] = [];
  for (const part of p.split('/')) {
    if (part === '' || part === '.') continue;
    if (part === '..') out.pop();
    else out.push(part);
  }
  return '/' + out.join('/');
};

/**
 * Resuelve la ruta guardada por el administrador a una imagen del proyecto.
 * Acepta "foto.webp", "./foto.webp", "/src/content/media/foto.webp" o rutas públicas.
 */
export function resolveImage(ref: unknown, baseDir = '/src/content/media'): ImageMetadata | undefined {
  if (typeof ref !== 'string' || !ref.trim()) return undefined;
  let r = ref.trim().split('?')[0];
  try { r = decodeURIComponent(r); } catch { /* deja la ruta como está */ }

  const candidates = r.startsWith('/')
    ? [normalize(r), normalize('/src/content' + r), normalize(`/src/content/media/${basename(r)}`)]
    : [normalize(`${baseDir}/${r}`), normalize(`/src/content/media/${r}`)];
  for (const c of candidates) {
    const img = imageByPath.get(c);
    if (img) return img;
  }
  // Último recurso: mismo nombre de archivo dentro de la carpeta de la obra o en media/
  const name = basename(r);
  for (const [k, img] of imageByPath) {
    if (basename(k) === name && (k.startsWith(baseDir + '/') || k.startsWith('/src/content/media/'))) return img;
  }
  return undefined;
}

// ---------- Proyectos ----------
export type Categoria = 'Residenciales' | 'Otros proyectos';

export interface Proyecto {
  slug: string;
  nombre: string;
  visible: boolean;
  destacado: boolean;
  enPortada: boolean;
  categoria: Categoria;
  tipo: string;
  ubicacion: string;
  anio?: number;
  superficie?: number;
  resumen: string;
  memoria: string[];
  portada: ImageMetadata;
  galeria: ImageMetadata[];
  creditos: string;
  orden?: number;
}

const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '');
const num = (v: unknown) => {
  const n = typeof v === 'string' ? Number(v) : v;
  return typeof n === 'number' && Number.isFinite(n) ? n : undefined;
};
const bool = (v: unknown, def: boolean) => (typeof v === 'boolean' ? v : def);

const entryModules = import.meta.glob<{ default: Record<string, unknown> }>(
  '/src/content/proyectos/*/index.json',
  { eager: true },
);

const todos: Proyecto[] = [];
for (const [path, mod] of Object.entries(entryModules)) {
  const d = mod.default ?? {};
  const dir = path.replace(/\/index\.json$/, '');
  const slug = basename(dir);
  const nombre = str(d.nombre);
  const portada = resolveImage(d.portada, dir);
  if (!nombre || !portada) {
    console.warn(`[contenido] Se omite "${slug}": falta ${!nombre ? 'el nombre' : 'la imagen de portada'}.`);
    continue;
  }
  const galeriaRaw = Array.isArray(d.galeria) ? d.galeria : [];
  const galeria = galeriaRaw
    .map((g) => resolveImage(typeof g === 'object' && g ? (g as { imagen?: unknown }).imagen : g, dir))
    .filter((g): g is ImageMetadata => !!g);

  todos.push({
    slug,
    nombre,
    visible: bool(d.visible, true),
    destacado: bool(d.destacado, false),
    enPortada: bool(d.en_portada, false),
    categoria: str(d.categoria) === 'Residenciales' ? 'Residenciales' : 'Otros proyectos',
    tipo: str(d.tipo),
    ubicacion: str(d.ubicacion),
    anio: num(d.anio),
    superficie: num(d.superficie),
    resumen: str(d.resumen),
    memoria: str(d.memoria).split(/\n\s*\n/).map((p) => p.replace(/\s*\n\s*/g, ' ').trim()).filter(Boolean),
    portada,
    galeria,
    creditos: str(d.creditos),
    orden: num(d.orden),
  });
}

/**
 * Orden de la web: el que se define arrastrando en el administrador.
 * Las obras nuevas que todavía no tienen orden aparecen primero (las más recientes arriba).
 */
todos.sort((a, b) => {
  if (a.orden === undefined && b.orden === undefined) return (b.anio ?? 0) - (a.anio ?? 0);
  if (a.orden === undefined) return -1;
  if (b.orden === undefined) return 1;
  return a.orden - b.orden;
});

/** Obras visibles, en el orden definido en el administrador. */
export const proyectos = todos.filter((p) => p.visible);

/** Obras de la carátula (hero). Si no hay ninguna marcada, se usan las 3 primeras. */
export const proyectosPortada = (() => {
  const marcados = proyectos.filter((p) => p.enPortada).slice(0, 5);
  return marcados.length ? marcados : proyectos.slice(0, 3);
})();

/** Obras destacadas (máximo 3). */
export const proyectosDestacados = proyectos.filter((p) => p.destacado).slice(0, 3);

export const metaProyecto = (p: Proyecto) => [p.tipo, p.ubicacion].filter(Boolean).join(' · ');
export const formatM2 = (n: number) => `${n.toLocaleString('es-AR')} m²`;

// ---------- Sitio ----------
type AnyRec = Record<string, unknown>;
const s = sitioJson as AnyRec;
const contacto = (s.contacto ?? {}) as AnyRec;
const redes = (s.redes ?? {}) as AnyRec;

export const sitio = {
  frasePortada: str(s.frase_portada) || 'Arquitectura que trasciende.',
  contacto: {
    whatsapp: str(contacto.whatsapp).replace(/\D/g, ''),
    email: str(contacto.email),
    telefono: str(contacto.telefono),
    direccion: str(contacto.direccion),
  },
  redes: [
    { label: 'Instagram', href: str(redes.instagram) },
    { label: 'LinkedIn', href: str(redes.linkedin) },
    { label: 'Facebook', href: str(redes.facebook) },
  ].filter((r) => r.href),
  hitos: (Array.isArray(s.hitos) ? s.hitos : [])
    .map((h: AnyRec) => ({ valor: num(h.valor), prefijo: str(h.prefijo), etiqueta: str(h.etiqueta) }))
    .filter((h): h is { valor: number; prefijo: string; etiqueta: string } => h.valor !== undefined && !!h.etiqueta),
};

// ---------- Estudio ----------
const e = estudioJson as AnyRec;
export const estudio = {
  proceso: (Array.isArray(e.proceso) ? e.proceso : [])
    .map((x: AnyRec) => ({ titulo: str(x.titulo), texto: str(x.texto) }))
    .filter((x) => x.titulo),
  fundadores: (Array.isArray(e.fundadores) ? e.fundadores : [])
    .map((x: AnyRec) => ({
      nombre: str(x.nombre),
      titulo: str(x.titulo),
      foto: resolveImage(x.foto),
      bio: str(x.bio).split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean),
    }))
    .filter((x) => x.nombre),
  reconocimientos: (Array.isArray(e.reconocimientos) ? e.reconocimientos : [])
    .map((x: AnyRec) => ({ anio: num(x.anio), titulo: str(x.titulo), detalle: str(x.detalle) }))
    .filter((x) => x.titulo),
};
