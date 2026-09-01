// --- Cambio de idioma ES/EN (compartido por todas las páginas) ---

function aplicarIdioma(idioma) {
  document.querySelectorAll('[data-es]').forEach(function (el) {
    var valor = el.getAttribute('data-' + idioma);
    if (valor !== null) {
      el.innerHTML = valor;
    }
  });

  document.documentElement.lang = idioma;

  var boton = document.getElementById('idioma-toggle');
  if (boton) {
    boton.textContent = idioma === 'es' ? 'EN→' : 'ES→';
  }

  try {
    localStorage.setItem('idioma', idioma);
  } catch (e) {
    // si localStorage no está disponible, seguimos igual
  }
}

function toggleIdioma() {
  var actual = document.documentElement.lang === 'en' ? 'en' : 'es';
  var nuevo = actual === 'es' ? 'en' : 'es';
  aplicarIdioma(nuevo);
}

document.addEventListener('DOMContentLoaded', function () {
  var guardado = 'es';
  try {
    guardado = localStorage.getItem('idioma') || 'es';
  } catch (e) {}
  aplicarIdioma(guardado);
});
