# Plan — Landing page SSA · Saez Sanchez Arquitectos

Relevamiento hecho el 9/11/2026 sobre el sitio actual y dos referencias.

## 1. Qué tomamos de cada referencia

### saezsanchezarquitectos.com (sitio actual)
- **Hoy:** WordPress + Elementor, tipografía *Creato Display*, paleta de grises (`#2F2F2F`, `#494C4F`, `#F5F5F5`, `#D9D9D9`).
- **Estructura:** hero con imagen a pantalla completa · menú numerado (01 Proyectos, 02 Nosotros, 03 Contacto, 04 Blog) · Quiénes somos + Propósito · slider de 2 proyectos (Vilabonita, San Pablo Life, Shops & Residences) · Hitos (16 años, +100 proyectos, 9 países, 10 premios) · "Cotizá tu proyecto" · "Let's talk" · footer.
- **Se conserva:** la identidad sobria monocromática, el menú numerado, el tono institucional ("alto estándar", "innovación y excelencia") y los hitos.
- **A corregir:**
  - Texto mezclado en inglés ("Let's talk", "Message us", "TYPE", "DESCRIPTION").
  - Solo 2 proyectos, con la categoría genérica "Otros proyectos".
  - No hay formulario ni datos de contacto visibles; el © dice 2023.
  - Faltan meta description y título SEO.
  - No hay sección de servicios ni de proceso.
  - Errores de tipeo ("máspróximo", "cómo referencia", "dónde").

### llanosarquitectos.com (estudio, misma escala de negocio)
- **Estructura:** hero oscuro con slider de proyectos y su nombre y tipo · fundador + "Desde 2017" + contador (5000+ m²) · proceso en 3 pasos numerados · proyectos destacados grandes con descripción y "Ver proyecto" · carrusel "Otros proyectos" con m² · formulario · WhatsApp flotante · footer con contacto completo.
- **Se toma:** el recorrido comercial completo (confianza → proceso → obra → contacto), el formulario simple y WhatsApp, la ficha de proyecto con m² y tipo.

### velvetgreenresidences.com (desarrollo inmobiliario premium)
- **Estructura:** hero con video/foto full-bleed · bloques alternados de color (verde salvia / hueso) · rasgos numerados 01-02-03 · "colección" de tipologías · storytelling ("A day at…") · descarga de dossier · créditos de desarrolladora y arquitectos · formulario con selector de interés.
- **Se toma:** el ritmo editorial, con mucho aire, fotos grandes y titulares serif cortos. También las animaciones de texto e imagen al hacer scroll, el scroll suave y el uso de video. Y el "dossier" como gancho para captar contactos.

> Llanos y Velvet Green usan el mismo tema de WordPress (Nectar Blocks), con GSAP ScrollTrigger, scroll suave Lenis y carruseles Swiper. Podemos lograr esos efectos sin WordPress. El diseño, los textos y las imágenes van a ser propios de SSA.

## 2. Estructura propuesta de la landing

| # | Sección | Contenido | Inspiración |
|---|---|---|---|
| 0 | **Header** | Logo SSA · menú numerado 01–04 · botón "Cotizá tu proyecto". Transparente sobre el hero y sólido al bajar. En mobile, menú a pantalla completa. | Actual + VG |
| 1 | **Hero** | Foto/video a pantalla completa de una obra insignia · frase principal · "Tucumán, Argentina" · CTA. Slider de 3 obras con nombre y tipo. | Llanos + VG |
| 2 | **Manifiesto / Quiénes somos** | Frase grande + Propósito | Actual |
| 3 | **Hitos** | Años · proyectos · países · premios (contadores animados) | Actual + Llanos |
| 4 | **Proyectos destacados** | 2–3 obras en bloques grandes alternados: nombre, tipo, ubicación, año, m², descripción breve | Llanos |
| 5 | **Más proyectos** | Grilla/carrusel con filtro por tipo (vivienda, residencial, comercial, urbanismo…) | Llanos |
| 6 | **Servicios** *(nuevo)* | Qué hace el estudio: proyecto, dirección de obra, desarrollo inmobiliario, interiores, etc. | — |
| 7 | **Proceso** *(nuevo)* | 4 pasos numerados, de la primera reunión a la entrega | Llanos + VG |
| 8 | **Equipo** | Socios/fundadores con foto y rol | Llanos + VG |
| 9 | **Premios y publicaciones** *(opcional)* | Lista o logos | — |
| 10 | **Cotizá tu proyecto** | Formulario: nombre, email, teléfono, tipo de proyecto, ubicación, m² aprox., mensaje + WhatsApp. Opcional: descarga de dossier del estudio. | Llanos + VG |
| 11 | **Footer** | Contacto, dirección, redes (Instagram, LinkedIn, Facebook), menú, © automático | — |
| — | **WhatsApp flotante** | Siempre visible | Llanos |

## 3. Tecnología y publicación

- **Recomendado: [Astro](https://astro.build) (sitio estático).**
  - Cada sección es un componente.
  - Cada proyecto es un archivo de datos: agregar una obra = agregar un archivo + fotos.
  - Optimiza las imágenes de forma automática, algo clave en un sitio de renders pesados.
  - Deja abierta la puerta a páginas individuales por proyecto (fase 2).
- **Efectos:** GSAP + ScrollTrigger (animaciones al hacer scroll), Lenis (scroll suave), Swiper (sliders). Todo con respeto a "reducir movimiento".
- **Hosting:** GitHub Pages, gratis y con deploy automático en cada cambio.
- **Dominio:** `saezsanchezarquitectos.com` cuando se decida reemplazar el WordPress actual. Mientras tanto, una URL de prueba de GitHub.
- **Formulario:** GitHub Pages no tiene servidor, así que se usa un servicio como Formspree o Web3Forms (el plan gratuito alcanza) + WhatsApp.
- **SEO:**
  - Título y descripción.
  - Open Graph para compartir en redes.
  - Datos estructurados de estudio de arquitectura (LocalBusiness).
  - Sitemap.
  - Google Analytics o Search Console.

## 4. Etapas

1. **Insumos:** subir material de marca a `marca/` (ver `marca/README.md`).
2. **Dirección visual:** propuesta de hero + 2 secciones con la tipografía, la paleta y las fotos reales, para aprobar antes de construir todo.
3. **Desarrollo:** estructura completa con contenido real, responsive.
4. **Pulido:**
   - Animaciones y velocidad de carga (objetivo: Lighthouse 90+).
   - Accesibilidad y SEO.
5. **Publicación:** GitHub Pages + dominio + formulario funcionando + analytics.
6. **Fase 2 (opcional):** página por proyecto, blog, versión en inglés.

## 5. Contenido a reunir

- [ ] Logo en SVG (versión clara y oscura) e isotipo
- [ ] Manual de marca (paleta, tipografías, usos)
- [ ] Tipografías con licencia web
- [ ] Fotos/renders por proyecto (mín. 2400 px de ancho) + 1 foto o video para el hero
- [ ] Ficha por proyecto: nombre, tipo, ubicación, año, m², estado (construido / en obra / proyecto), descripción de 2–3 líneas
- [ ] Hitos actualizados (¿siguen siendo 16 años, +100 proyectos, 9 países, 10 premios?)
- [ ] Lista de servicios
- [ ] Equipo: nombres, roles, fotos
- [ ] Premios y publicaciones
- [ ] Contacto: WhatsApp, email, dirección, redes
- [ ] (Opcional) Dossier PDF del estudio

## 6. Decisiones pendientes

1. ¿La landing **reemplaza** el sitio actual en `saezsanchezarquitectos.com` o es una página aparte (por ejemplo, para campañas)?
2. ¿Una sola página, o también **páginas por proyecto** desde el inicio?
3. ¿Se mantiene el **blog** actual?
4. ¿Solo español, o también **inglés** (trabajan en 9 países)?
