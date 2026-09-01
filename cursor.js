// Cursor personalizado del sitio: cursor1.png por defecto, cursor.activo.png
// al pasar sobre links/botones. mijardin.trhee.js llama a window.CursorFX.setActive()
// para el hover sobre los nodos 3D, que no son elementos del DOM.
(function () {
  const CURSOR_DEFAULT = '/imagenes/cursor1.png';
  const CURSOR_ACTIVE  = '/imagenes/cursor.activo.png';
  const HOVER_SELECTOR = 'a, button, [role="button"], .celda, .cursor-activo';

  window.CursorFX = { setActive() {} }; // no-op hasta que init() corra (o en touch)

  function init() {
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    if (isTouch) return; // sin cursor de mouse, no hace falta

    const hideNativeCursor = document.createElement('style');
    hideNativeCursor.textContent = '*, *::before, *::after { cursor: none !important; }';
    document.head.appendChild(hideNativeCursor);

    const cursorImg = document.createElement('img');
    cursorImg.src = CURSOR_DEFAULT;
    cursorImg.alt = '';
    Object.assign(cursorImg.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '32px',
      height: '32px',
      pointerEvents: 'none',
      zIndex: '9999',
      transform: 'translate(-100px, -100px)',
      willChange: 'transform',
    });
    document.body.appendChild(cursorImg);

    let active = false;
    function setActive(isActive) {
      isActive = !!isActive;
      if (isActive === active) return;
      active = isActive;
      cursorImg.src = active ? CURSOR_ACTIVE : CURSOR_DEFAULT;
    }

    document.addEventListener('mousemove', e => {
      cursorImg.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
    });

    document.addEventListener('mouseover', e => {
      if (e.target.closest && e.target.closest(HOVER_SELECTOR)) setActive(true);
    });
    document.addEventListener('mouseout', e => {
      if (!e.target.closest || !e.target.closest(HOVER_SELECTOR)) return;
      const to = e.relatedTarget && e.relatedTarget.closest ? e.relatedTarget.closest(HOVER_SELECTOR) : null;
      if (!to) setActive(false);
    });

    window.CursorFX = { setActive };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
