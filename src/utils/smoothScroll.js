const DURATION_MS = 720;
/** Под sticky-хедер (≈ scroll-mt-24 / высота шапки) */
const HEADER_OFFSET_PX = 88;

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * Плавный скролл к якорю (#id). Обновляет hash в URL через replaceState.
 * @param {string} hash — например "#work" или "work"
 */
export function smoothScrollToHash(hash) {
  const id = String(hash || "")
    .replace(/^#/, "")
    .trim();

  const startY = window.scrollY;
  let toY = 0;

  if (!id || id === "top") {
    toY = 0;
  } else {
    const el = document.getElementById(id);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    toY = Math.max(0, startY + rect.top - HEADER_OFFSET_PX);
  }

  const dist = toY - startY;
  if (Math.abs(dist) < 1) {
    if (!id || id === "top") window.history.replaceState(null, "", window.location.pathname);
    else window.history.replaceState(null, "", `#${id}`);
    return;
  }

  const t0 = performance.now();

  function step(now) {
    const elapsed = now - t0;
    const t = Math.min(elapsed / DURATION_MS, 1);
    const eased = easeInOutCubic(t);
    window.scrollTo(0, startY + dist * eased);
    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      if (!id || id === "top") window.history.replaceState(null, "", window.location.pathname);
      else window.history.replaceState(null, "", `#${id}`);
    }
  }

  requestAnimationFrame(step);
}

export function onAnchorClick(e, hash) {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
  e.preventDefault();
  smoothScrollToHash(hash);
}
