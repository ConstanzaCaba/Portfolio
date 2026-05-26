document.querySelectorAll('.menu nav a').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.menu nav a').forEach(b => b.classList.remove('activo'));
    btn.classList.add('activo');
  });
});

const pagina = window.location.pathname.split('/').pop();

document.querySelectorAll('.site-nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === pagina || (pagina === '' && href === 'index.html')) {
    link.classList.add('activo');
  }
});

let slideActual = 0;
let animando = false;

function esMobile() {
  return window.innerWidth <= 768;
}

function moverSlide(direccion) {
  if (esMobile()) return; // en mobile el scroll nativo se encarga
  if (animando) return;
  const slides = document.querySelectorAll('.carrusel-slide');
  const dots = document.querySelectorAll('.carrusel-dot');

  if (direccion === 1) {
    const siguiente = slideActual >= slides.length - 1 ? 0 : slideActual + 1;
    animando = true;

    slides[siguiente].style.transition = 'none';
    slides[siguiente].style.transform = 'translateX(100%)';
    slides[siguiente].style.zIndex = 2;
    slides[slideActual].style.zIndex = 1;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        slides[siguiente].style.transition = 'transform 0.5s ease-in-out';
        slides[siguiente].style.transform = 'translateX(0)';
        setTimeout(() => {
          slides[slideActual].style.zIndex = 0;
          slideActual = siguiente;
          dots.forEach((d, i) => d.classList.toggle('activo', i === slideActual));
          animando = false;
        }, 500);
      });
    });

  } else {
    if (slideActual === 0) return;
    animando = true;
    const anterior = slideActual - 1;

    slides[slideActual].style.zIndex = 2;
    slides[anterior].style.zIndex = 1;

    slides[slideActual].style.transition = 'transform 0.5s ease-in-out';
    slides[slideActual].style.transform = 'translateX(100%)';

    setTimeout(() => {
      slides[slideActual].style.zIndex = 0;
      slideActual = anterior;
      dots.forEach((d, i) => d.classList.toggle('activo', i === slideActual));
      animando = false;
    }, 500);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.carrusel-slide');
  const carrusel = document.getElementById('carrusel');
  const dots = document.querySelectorAll('.carrusel-dot');

  if (!slides.length) return;

  if (!esMobile()) {
    // Desktop: inicializar con transforms para la animación JS
    slides.forEach((slide, i) => {
      slide.style.zIndex = 0;
      slide.style.transform = i === 0 ? 'translateX(0)' : 'translateX(100%)';
    });
    slides[0].style.zIndex = 1;
  }

  // Listener de scroll para mobile (actualiza los dots con el scroll nativo)
  if (carrusel && dots.length) {
    let scrollTimer = null;
    carrusel.addEventListener('scroll', () => {
      if (!esMobile()) return;
      // Usar requestAnimationFrame para no saturar el hilo principal
      if (scrollTimer) return;
      scrollTimer = requestAnimationFrame(() => {
        const idx = Math.round(carrusel.scrollLeft / carrusel.offsetWidth);
        slideActual = idx;
        dots.forEach((d, i) => d.classList.toggle('activo', i === idx));
        scrollTimer = null;
      });
    }, { passive: true });
  }
});

if (window.innerWidth <= 768) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const desc = entry.target.querySelector('.trabajo-descripcion');
      if (desc) {
        if (entry.isIntersecting) {
          desc.classList.add('visible');
        } else {
          desc.classList.remove('visible');
        }
      }
    });
  }, { threshold: 0.9 });

  document.querySelectorAll('.celda').forEach(celda => observer.observe(celda));
}

const overlay = document.getElementById('overlay-contacto');
const closeBtn = document.getElementById('close-button-contacto');

function abrirOverlay() {
  const scrollWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.paddingRight = scrollWidth + 'px';
  overlay.getAnimations().forEach(a => a.cancel());
  overlay.style.display = 'block';
  overlay.style.clipPath = 'inset(0 100% 100% 0)';
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      overlay.animate(
        [
          { clipPath: 'inset(0 100% 100% 0)' },
          { clipPath: 'inset(0 0 0 0)' }
        ],
        { duration: 500, easing: 'ease-out', fill: 'forwards' }
      );
    });
  });
}

closeBtn.addEventListener('click', () => {
  overlay.getAnimations().forEach(a => a.cancel());
  const anim = overlay.animate(
    [
      { clipPath: 'inset(0 0 0 0)' },
      { clipPath: 'inset(0 100% 100% 0)' }
    ],
    { duration: 500, easing: 'ease-in', fill: 'forwards' }
  );
  anim.onfinish = () => {
    overlay.style.display = 'none';
    overlay.style.clipPath = '';
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  };
});