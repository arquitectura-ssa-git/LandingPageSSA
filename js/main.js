/* =========================================================
   SSA · Saez Sanchez Arquitectura — interacciones
   ========================================================= */

// EDITAR: datos de contacto que usa el formulario y los botones de WhatsApp.
// whatsapp: código de país + área + número, sin "+", espacios ni guiones (ej. "5493511234567").
const CONFIG = {
  whatsapp: "",
  email: "",
};

document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /* ---------- Año del footer ---------- */
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Header con borde al hacer scroll ---------- */
  const header = $(".site-header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Menú mobile ---------- */
  const toggle = $(".nav-toggle");
  const nav = $("#menu");
  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    nav.classList.toggle("is-open", open);
  };
  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  $$("a", nav).forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

  /* ---------- Animación de entrada ---------- */
  const reveals = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Filtro de proyectos ---------- */
  const filters = $$(".filter");
  const projects = $$(".project");
  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.filter;
      filters.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-pressed", String(active));
      });
      projects.forEach((p) => {
        const show = cat === "todos" || p.dataset.category === cat;
        p.classList.toggle("is-hidden", !show);
        if (show) p.classList.add("is-visible");
      });
    });
  });

  /* ---------- Links de contacto ---------- */
  const waBase = CONFIG.whatsapp ? `https://wa.me/${CONFIG.whatsapp}` : "#contacto";
  $$("[data-whatsapp-link]").forEach((a) => {
    a.href = waBase;
    if (CONFIG.whatsapp) { a.target = "_blank"; a.rel = "noopener"; }
  });
  $$("[data-email-link]").forEach((a) => {
    a.href = CONFIG.email ? `mailto:${CONFIG.email}` : "#contacto";
  });

  /* ---------- Formulario: arma el mensaje y abre WhatsApp o el mail ---------- */
  const form = $("#contact-form");
  const status = $(".form-status", form);
  let channel = "whatsapp";
  $$("[data-send]", form).forEach((b) => b.addEventListener("click", () => { channel = b.dataset.send; }));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.classList.remove("is-error");

    const required = $$("[required]", form);
    let valid = true;
    required.forEach((field) => {
      const ok = field.type === "email"
        ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim())
        : field.value.trim() !== "";
      field.classList.toggle("is-invalid", !ok);
      field.setAttribute("aria-invalid", String(!ok));
      if (!ok) valid = false;
    });
    if (!valid) {
      status.textContent = "Revisá los campos marcados: nombre, un email válido y el mensaje.";
      status.classList.add("is-error");
      $(".is-invalid", form).focus();
      return;
    }

    const data = Object.fromEntries(new FormData(form));
    const text = [
      `Hola SSA, soy ${data.nombre}.`,
      `Tipo de proyecto: ${data.tipo}`,
      "",
      data.mensaje,
      "",
      `Email: ${data.email}`,
      data.telefono ? `Teléfono: ${data.telefono}` : "",
    ].filter((l, i, arr) => l !== "" || arr[i - 1] !== "").join("\n").trim();

    if (channel === "whatsapp") {
      if (!CONFIG.whatsapp) return notConfigured("WhatsApp");
      window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    } else {
      if (!CONFIG.email) return notConfigured("email");
      const subject = `Consulta web — ${data.tipo}`;
      window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    }
    status.textContent = "¡Gracias! Se abrió tu aplicación para que confirmes el envío.";
  });

  function notConfigured(what) {
    status.textContent = `Falta configurar el ${what} del estudio en js/main.js.`;
    status.classList.add("is-error");
  }
});
