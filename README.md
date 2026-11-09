# Landing page SSA

Landing page de **SSA · Saez Sanchez Arquitectos** (Tucumán, Argentina).

- **Sitio:** https://arquitectura-ssa-git.github.io/LandingPageSSA/
- **Administrador:** https://arquitectura-ssa-git.github.io/LandingPageSSA/admin/
- **Plan y avance:** [PLAN.md](PLAN.md)
- **Material de marca:** [`marca/`](marca/)

---

## Administrador de contenidos

Desde `/admin` se cargan y editan las obras, sus datos, memorias e imágenes, el orden en que aparecen, qué obras se muestran y los datos generales del sitio. Cada vez que se guarda un cambio, la web se vuelve a publicar sola en **1 a 2 minutos**.

### Primer ingreso: crear el token de acceso (una sola vez)

El administrador guarda los cambios directamente en este repositorio de GitHub. Para eso necesita un *token* personal:

1. Con la cuenta `arquitectura-ssa-git`, entrá a **GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens** (https://github.com/settings/personal-access-tokens/new).
2. **Token name:** `Administrador web SSA`. **Expiration:** la que prefieras (por ejemplo, 1 año).
3. **Repository access:** *Only select repositories* → `LandingPageSSA`.
4. **Permissions → Repository permissions → Contents:** *Read and write*.
5. Tocá **Generate token** y copiá el código (empieza con `github_pat_…`). Guardalo en un lugar seguro: GitHub lo muestra una sola vez.
6. Abrí el administrador, elegí **Iniciar sesión con un token de acceso** y pegalo. El navegador lo recuerda; no hace falta repetirlo cada vez.

> El token da permiso de escritura sobre el repositorio: no lo compartas ni lo pegues en correos o chats. Si se pierde o vence, generá uno nuevo con los mismos pasos.

### Qué se puede hacer

| Sección | Para qué sirve |
|---|---|
| **Proyectos** | Crear, editar o borrar obras: nombre, categoría, tipo, ubicación, año, superficie, resumen, memoria, imagen de portada y galería. |
| ↳ **Mostrar en la web** | Apagalo para ocultar una obra (por ejemplo, si ya es muy antigua) sin borrarla. Se puede volver a mostrar cuando quieras. |
| ↳ **Destacar** | Las primeras 3 obras destacadas se muestran en grande en la sección Proyectos. |
| ↳ **Mostrar en la carátula** | Las obras marcadas (hasta 5) rotan en la imagen principal de la web. |
| ↳ **Reordenar** | Botón arriba de la lista: arrastrá las obras o usá las flechas ↑ ↓ y tocá **Listo**. Ese es el orden de la web. |
| ↳ **Editar** (en la lista) | Tabla para cambiar varias obras a la vez, por ejemplo, ocultar varias juntas. |
| **Configuración del sitio** | Frase de la carátula, WhatsApp, email, teléfono, dirección, redes sociales y los números de hitos. |
| **Estudio** | Etapas del proceso, fundadores (foto y biografía) y reconocimientos. |

Las fotos se achican a 2400 px y se convierten a WebP automáticamente al subirlas. Conviene usar fotos horizontales para la portada.

---

## Cómo está hecho (para desarrolladores)

Sitio estático con [Astro](https://astro.build). El administrador es [Sveltia CMS](https://github.com/sveltia/sveltia-cms) (`public/admin/`), que guarda el contenido como archivos JSON en el repositorio. Cada cambio en `main` se publica solo en GitHub Pages (`.github/workflows/deploy.yml`).

```
public/admin/            ← administrador (config.yml define los campos)
src/content/proyectos/   ← una carpeta por obra: index.json + imágenes
src/content/sitio.json   ← contacto, redes, hitos, frase de portada
src/content/estudio.json ← proceso, fundadores, reconocimientos
src/content/media/       ← imágenes generales (retratos, etc.)
src/lib/contenido.ts     ← lee y valida el contenido para la web
src/components/          ← una sección por archivo
src/styles/global.css    ← colores, tipografía y grilla del manual de marca
```

```bash
npm install
npm run dev      # http://localhost:4321/LandingPageSSA/  (admin en /admin/, con "Trabajar con un repositorio local")
npm run build    # genera el sitio en dist/
```
