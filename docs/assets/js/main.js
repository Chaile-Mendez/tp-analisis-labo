/* =============================================================
   Motor de diapositivas mínimo, sin dependencias.
   Teclado: ← → Espacio RePág AvPág Inicio Fin · F pantalla completa · P imprimir
   URL: #3 abre directamente la diapositiva 3.
   ============================================================= */
(() => {
  const deck = document.getElementById("deck");
  const slides = Array.from(deck.querySelectorAll(".slide"));
  const total = slides.length;

  const $ = (id) => document.getElementById(id);
  const ui = {
    prev: $("prev"),
    next: $("next"),
    fullscreen: $("fullscreen"),
    current: $("current"),
    total: $("total"),
    section: $("hud-section"),
    progress: $("progress-bar"),
  };

  const pad = (n) => String(n).padStart(2, "0");
  let index = 0;

  /* ---- Escalado del escenario 1280×720 al tamaño de la ventana ---- */
  const BASE_W = 1280;
  const BASE_H = 720;
  const HUD_SPACE = 64;

  function fit() {
    const scale = Math.min(
      window.innerWidth / BASE_W,
      (window.innerHeight - HUD_SPACE) / BASE_H
    ) * 0.96;
    document.documentElement.style.setProperty("--scale", scale.toFixed(4));
  }

  /* ---- Navegación ---- */
  function go(to, { updateHash = true } = {}) {
    index = Math.max(0, Math.min(total - 1, to));

    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i === index);
      slide.classList.toggle("is-past", i < index);
      slide.setAttribute("aria-hidden", i === index ? "false" : "true");
    });

    ui.current.textContent = pad(index + 1);
    ui.section.textContent = slides[index].dataset.section || "";
    ui.progress.style.width = `${((index + 1) / total) * 100}%`;
    ui.prev.disabled = index === 0;
    ui.next.disabled = index === total - 1;

    if (updateHash) history.replaceState(null, "", `#${index + 1}`);
  }

  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  function fromHash() {
    const n = parseInt(location.hash.replace("#", ""), 10);
    return Number.isFinite(n) ? n - 1 : 0;
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }

  /* ---- Eventos ---- */
  document.addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
      case "PageDown":
      case " ":
        e.preventDefault(); next(); break;
      case "ArrowLeft":
      case "ArrowUp":
      case "PageUp":
        e.preventDefault(); prev(); break;
      case "Home": go(0); break;
      case "End": go(total - 1); break;
      case "f":
      case "F": toggleFullscreen(); break;
      case "p":
      case "P": window.print(); break;
    }
  });

  ui.next.addEventListener("click", next);
  ui.prev.addEventListener("click", prev);
  ui.fullscreen.addEventListener("click", toggleFullscreen);

  // Gestos táctiles (deslizar horizontalmente)
  let touchX = null;
  document.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  document.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touchX = null;
  });

  window.addEventListener("hashchange", () => go(fromHash(), { updateHash: false }));
  window.addEventListener("resize", fit);

  // Ocultar la barra tras 2,5 s sin mover el mouse
  let idleTimer;
  const wake = () => {
    document.body.classList.remove("is-idle");
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => document.body.classList.add("is-idle"), 2500);
  };
  ["mousemove", "keydown", "touchstart"].forEach((ev) =>
    document.addEventListener(ev, wake, { passive: true })
  );

  /* ---- Inicio ---- */
  ui.total.textContent = pad(total);
  fit();
  go(fromHash(), { updateHash: false });
  wake();
})();
