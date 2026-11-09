# Plan — Landing page SSA · Saez Sanchez Arquitectos

Última actualización: 9/11/2026. Fuentes:
- el material de [`marca/`](marca/);
- el sitio actual saezsanchezarquitectos.com;
- dos referencias: llanosarquitectos.com y velvetgreenresidences.com.

---

## 1. MVP: qué vamos a construir primero

**Una sola página, en español, publicada en una URL de prueba de GitHub Pages.** No toca el WordPress actual. Cuando esté aprobada se decide si reemplaza al sitio en `saezsanchezarquitectos.com`.

El objetivo del MVP es **mostrar obra y generar consultas** ("Cotizá tu proyecto"), con la identidad del manual de marca aplicada al pie de la letra.

### Secciones del MVP

| # | Sección | Contenido (ya disponible salvo indicación) |
|---|---|---|
| 0 | **Header** | Logotipo · menú numerado `01 Proyectos` `02 Estudio` `03 Proceso` `04 Contacto` · botón "Cotización". Transparente sobre el hero y sólido al bajar. Menú a pantalla completa en mobile. |
| 1 | **Hero** | Render a pantalla completa (fotografía "grandilocuente") · mensaje principal · "Tucumán, Argentina" · CTA "Cotizá tu proyecto". |
| 2 | **Estudio** | "This is SaezSanchez": quiénes somos + propósito + los tres valores (Seriedad · Innovación · Excelencia), del Brandbook y el Culture Book. |
| 3 | **Hitos** | 4 cifras con contador: años, proyectos, países, premios. ⚠️ Confirmar cifras (ver §5). |
| 4 | **Proyectos destacados** | 3 obras en bloques grandes: nombre, tipo, ubicación, año, m², 2–3 líneas. Propuesta: **San Pablo Life**, **Vilabonita**, **Casa IC**. |
| 5 | **Más proyectos** | Grilla de 8–12 obras con filtro **Residenciales / Otros proyectos** (la categorización del sitio actual). En el MVP cada tarjeta abre una vista ampliada; las páginas por proyecto quedan para después. |
| 6 | **Proceso** | Las 3 etapas del estudio: Anteproyecto → Proyecto → Proyecto ejecutivo (+ Dirección de obra, si aplica). |
| 7 | **Fundadores** | Pablo Saez y Álvaro Sánchez: foto, título y bio corta. ⚠️ Faltan las fotos. |
| 8 | **Reconocimientos** | Lista sobria: Casa DAR, Marca Tucumán 2018, Joven Empresario 2019, Innovación ADEN 2019, PropTech LATAM 2021, AVANCO 2025. |
| 9 | **Cotizá tu proyecto** | Formulario: nombre, email, teléfono, tipo (Residencial / Otros), ubicación, m² aprox., mensaje. Además: WhatsApp. ⚠️ Faltan los datos de contacto. |
| 10 | **Footer** | Logo, contacto, redes (Instagram, LinkedIn, Facebook), menú, © con año automático. |

**Fuera del MVP (fase 2):**
- páginas individuales por proyecto (con las 35 obras);
- blog;
- versión en inglés;
- equipo completo e I+D+i / app propia;
- dossier descargable;
- cambio de dominio.

### Etapas del MVP

| Etapa | Entregable | Quién |
|---|---|---|
| **A. Base** | Proyecto Astro + tipografía Creato Display + colores y grilla del manual + logo en SVG + deploy automático a GitHub Pages. | Claude |
| **B. Hero + Estudio** | Primera vista publicada en la URL de prueba para validar la dirección visual. | Claude → **revisión SSA** |
| **C. Contenido completo** | Resto de las secciones con textos e imágenes reales, responsive (desktop, tablet, mobile). | Claude |
| **D. Pulido** | Animaciones sobrias al hacer scroll, velocidad de carga (Lighthouse 90+), accesibilidad, SEO (título, descripción, Open Graph, datos estructurados). | Claude |
| **E. Formulario y salida** | Formulario funcionando (Web3Forms o Formspree, plan gratuito), WhatsApp, revisión final. | Claude → **aprobación SSA** |

---

## 2. Sistema visual (del manual de marca)

**Concepto:** estilo tipográfico internacional (suizo). Sin misceláneas, tramas ni adornos. Solo tipografía, fondos neutros, espacio negativo, jerarquía y contraste. El color lo ponen las fotos.

### Tipografía
- **Creato Display** (licencia SIL OFL: se puede usar en la web).
- Pesos a usar: Light, Regular y Medium (Bold solo excepcional).
- Titulares grandes en Light/Regular, con entreletrado ajustado.
- Textos cortos y en párrafos segmentados.
- Etiquetas entre corchetes, como en el manual: `[ PROYECTOS ]`.

### Color
Monocromático. **Nunca** `#FFFFFF` ni `#000000` puros.

| Token | Hex | Uso |
|---|---|---|
| Smoky black | `#121212` | Fondo oscuro principal |
| Lead gray | `#2F2F2F` | Texto principal, bloques oscuros |
| Sonic silver | `#727272` | Texto secundario, bajadas |
| Cultured white | `#F2F2F2` | Fondo claro principal |

### Grilla

| Pantalla | Columnas | Margen | Medianil |
|---|---|---|---|
| Desktop (1920) | 10 | 80 px | 20 px |
| Tablet (1080) | 10 | 30 px | 20 px |
| Mobile | 4 | 20 px | 10 px |

### Logo
- **SAΞZ SANCHΞZ** con bajada "ARQUITECTOS".
- Área de resguardo = altura de la "S".
- **Con bajada** solo cuando el logo está centrado. **Sin bajada** cuando está alineado a la grilla o a una esquina, como en el header.
- Versión corta: **SSA™**, para el favicon y espacios chicos.

### Fotografía
- **Grandilocuente:** a pantalla completa o en gran formato, para identificar el proyecto. Con personas que den escala.
- **Abstracta:** en recuadros chicos. Muestra detalle y geometría (líneas y ángulos rectos).
- Look moderno, sobrio y atenuado. Cielos despejados que ocupen entre el 20 y el 40 % de la toma.

### Tono de voz
- Entusiasta, concreto, positivo, serio y comprometido.
- Formal, delicado y profesional.
- SSA es sobrio, metódico, confiable y disciplinado. **No** es informal ni de perfil alto.
- Metáfora de marca: **legado**.

### Mensaje principal
> Oficina de arquitectura que desarrolla proyectos arquitectónicos de alto estándar, con foco en la innovación y excelencia, generando un cambio de paradigma en la disciplina.

---

## 3. Inventario de contenido

| Contenido | Estado | Fuente |
|---|---|---|
| Tipografía Creato Display (14 variantes) | ✅ | `marca/tipografias/` (el .rar tiene 2 archivos dañados: Black y BoldItalic, que no se usan) |
| Logo con bajada, negro y blanco | ✅ PDF/PNG | `marca/logos/` → se convierte a SVG |
| Logo **sin bajada** | ⚠️ Falta | Se puede recortar del PDF, pero mejor el archivo original |
| Manual, brandbook, culture book | ✅ | `marca/manual/` |
| Textos institucionales, valores, propósito | ✅ | Brandbook, Culture Book, sitio actual |
| Bios de los fundadores | ✅ | Sitio actual (/about-us) |
| Reconocimientos | ✅ | Sitio actual |
| **35 proyectos** (nombre, tipo, año, ubicación, memoria) | ✅ | Sitio actual: 15 residenciales, 20 "otros" (Vilabonita, San Pablo Life, Hotel del Golf, Loft Hotel, Soul Asunción, Mobility District, Polo Tecnológico Acindar…) |
| Imágenes de proyectos | ⚠️ Parcial | El sitio actual tiene renders de hasta 2560 px. Ideal: originales en alta en `marca/fotos/` |
| Fotos de los fundadores | ⚠️ Falta | — |
| Datos de contacto | ⚠️ Falta | El sitio actual no los muestra |

---

## 4. Tecnología

- **Astro** (sitio estático):
  - Cada sección es un componente.
  - Cada proyecto es un archivo de datos, así que sumar una obra es sumar un archivo y sus fotos.
  - Optimiza las imágenes de forma automática (AVIF/WebP en varios tamaños).
- **GitHub Pages + GitHub Actions:** cada cambio en `main` se publica solo.
- **Efectos:**
  - aparición de bloques al hacer scroll y contadores (CSS + IntersectionObserver);
  - GSAP solo si hace falta;
  - todo respeta "reducir movimiento".
- **Formulario:** Web3Forms o Formspree. GitHub Pages no tiene servidor.

---

## 5. Pendientes de SSA para cerrar el MVP

1. **Contacto:** WhatsApp, email que recibe las consultas, dirección del estudio y links de Instagram, LinkedIn y Facebook.
2. **Hitos:**
   - El sitio dice "16 años", pero los fundadores son socios desde 2006, o sea 20 años en 2026.
   - ¿Siguen vigentes "+100 proyectos", "9 países" y "10 premios"?
3. **Destacados:** ¿San Pablo Life, Vilabonita y Casa IC, u otros?
4. **Fotos:**
   - Originales en alta de los proyectos destacados y de la grilla.
   - Una imagen para el hero.
   - Retratos de Pablo y Álvaro.
5. **Logo sin bajada** en SVG o PDF.

Mientras tanto se puede avanzar con las etapas A y B usando las imágenes del sitio actual.

---

## Anexo: relevamiento de referencias

- **Sitio actual** (WordPress + Elementor):
  - Ya usa Creato Display y la paleta gris.
  - A corregir:
    - textos mezclados en inglés ("Let's talk", "Message us", "Type");
    - la home muestra 2 de 35 proyectos;
    - no hay contacto visible ni meta description;
    - el © dice 2023;
    - errores de tipeo.
- **Llanos Arquitectos:** recorrido comercial claro (fundador → proceso numerado → obras con m² → formulario + WhatsApp).
- **Velvet Green:** ritmo editorial, fotos a pantalla completa, titulares cortos, animaciones de scroll, dossier como gancho para captar contactos.
- Llanos y Velvet Green usan el mismo tema de WordPress (Nectar Blocks). Tomamos la estructura, no el diseño.
