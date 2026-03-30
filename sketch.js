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

function moverSlide(direccion) {
  const carrusel = document.getElementById('carrusel');
  if (!carrusel) return;
  const slides = carrusel.querySelectorAll('.carrusel-slide');
  if (!slides.length) return;

  if (direccion === 1) {
    if (slideActual >= slides.length - 1) {
      // reiniciar: todas las imágenes se retiran hacia la derecha
      slides.forEach((slide, i) => {
        if (i !== 0) {
          slide.style.transition = 'transform 0.5s ease-in-out';
          slide.style.transform = 'translateX(100%)';
          setTimeout(() => { slide.style.zIndex = 0; }, 500);
        }
      });
      slides[0].style.zIndex = 1;
      slideActual = 0;
      return;
    }

    // avanzar: siguiente entra desde la derecha por encima
    const siguiente = slideActual + 1;
    slides[siguiente].style.transition = 'none';
    slides[siguiente].style.transform = 'translateX(100%)';
    slides[siguiente].style.zIndex = siguiente + 1;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        slides[siguiente].style.transition = 'transform 0.5s ease-in-out';
        slides[siguiente].style.transform = 'translateX(0)';
      });
    });
    slideActual = siguiente;

  } else {
    // retroceder: imagen actual sale hacia la derecha
    if (slideActual === 0) return;
    const actual = slides[slideActual];
    actual.style.transition = 'transform 0.5s ease-in-out';
    actual.style.transform = 'translateX(100%)';

    setTimeout(() => {
      actual.style.zIndex = 0;
    }, 500);

    slideActual = slideActual - 1;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.carrusel-slide');
  if (slides.length) {
    slides[0].style.transform = 'translateX(0)';
    slides[0].style.zIndex = 1;
  }
});

const carrusel = document.getElementById('carrusel');
const dots     = document.querySelectorAll('.carrusel-dot');

if (carrusel && dots.length) {
  carrusel.addEventListener('scroll', () => {
    const idx = Math.round(carrusel.scrollLeft / carrusel.offsetWidth);
    dots.forEach((d, i) => d.classList.toggle('activo', i === idx));
  });
}

// Al final del archivo, después del código del carrusel
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