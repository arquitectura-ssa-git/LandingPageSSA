# Landing page SSA

Landing page de **SSA · Saez Sanchez Arquitectos** (Tucumán, Argentina).

- **Vista previa:** https://arquitectura-ssa-git.github.io/LandingPageSSA/
- **Plan y avance:** [PLAN.md](PLAN.md)
- **Material de marca:** [`marca/`](marca/)

## Cómo está hecho

Sitio estático con [Astro](https://astro.build). Cada cambio que llega a `main` se publica solo en GitHub Pages (`.github/workflows/deploy.yml`).

```
src/
  data/site.ts        ← datos generales: contacto, redes, textos SEO
  data/proyectos.ts   ← obras (nombre, tipo, ubicación, año, imagen)
  components/         ← una sección por archivo (Header, Hero, Estudio…)
  styles/global.css   ← colores, tipografía y grilla del manual de marca
  assets/             ← logos, tipografías e imágenes (se optimizan solas)
```

### Tareas habituales

- **Completar datos de contacto o redes:** editar `src/data/site.ts`.
- **Cambiar o sumar una obra:**
  1. Copiar la foto a `src/assets/proyectos/`.
  2. Agregar la obra en `src/data/proyectos.ts`.
- **Cambiar las obras del hero:** editar `heroSlides` en `src/data/proyectos.ts`.

## Trabajar en local

Requiere Node.js 22 o superior.

```bash
npm install
npm run dev      # http://localhost:4321/LandingPageSSA/
npm run build    # genera el sitio en dist/
```
