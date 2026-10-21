// ============================================================
//  REGISTRO DE TRABAJOS
//  Para mostrar u ocultar un trabajo en el portfolio, cambiá
//  `visible: true` / `visible: false`. Nada más.
//  - El orden de esta lista es el orden en la grilla (se reparte en 3 columnas).
//  - Un trabajo oculto no aparece en la grilla ni en los filtros,
//    y se saltea en el botón "→" de las páginas de trabajos.
//  Para agregar uno nuevo: copiá un bloque, cambiá los datos y creá su página en /trabajos.
// ============================================================
var TRABAJOS = [
  {
    visible: true,
    pagina: 'soma.html',
    categorias: 'identidad',
    tipo: { es: 'Gráfica', en: 'Graphic' },
    anio: '2025',
    titulo: { es: 'SOMA: Soporte Material', en: 'SOMA: Material Support' },
    imagen: 'imagenes/soma.png', alt: 'SOMA', ancho: 861, alto: 609,
    descripcion: {
      es: 'Una muestra de objetos de diseño argentino que explora las diferentes transformaciones de la materia al vincularse con el cuerpo.',
      en: 'A showcase of Argentine design objects that explore the different transformations of matter when linked with the body.'
    }
  },
  {
    visible: true,
    pagina: 'jaguar.html',
    categorias: 'identidad cultural',
    orden: { cultural: 2 }, // posición dentro de una categoría (opcional; sin número va al final, en el orden de la lista)
    tipo: { es: 'Identidad gráfica', en: 'Graphic Identity' },
    anio: '2025',
    titulo: { es: 'Jaguar: Un musical del Centro de Arte UTDT', en: 'Jaguar: A Musical from the Art Department at UTDT' },
    imagen: 'imagenes/jaguar2.png', alt: 'JAGUAR', ancho: 555, alto: 705,
    descripcion: {
      es: 'Proyecto de identidad visual para Jaguar, una obra musical impulsada por el Departamento de Arte de la Universidad Torcuato Di Tella.',
      en: 'Visual identity project for Jaguar, a musical work driven by the Department of Art at Universidad Torcuato Di Tella.'
    }
  },
  {
    visible: true,
    pagina: 'ronda.html',
    categorias: 'cultural',
    orden: { cultural: 1 },
    tipo: { es: 'Gráfica', en: 'Graphic' },
    anio: '2025',
    titulo: {
      es: 'Ronda Redonda: Re-diseño de la exposición de arte “Aprendizaje Infinito” expuesta en el Museo Moderno',
      en: 'Ronda Redonda: Redesign of the art exhibition “Infinite Learning” displayed at the Modern Museum'
    },
    imagen: 'imagenes/ronda.png', alt: 'Ronda Redonda', ancho: 1440, alto: 920,
    descripcion: {
      es: 'Una muestra que explora el vínculo entre la educación y el arte, desde el Museo Moderno hacia el Centro Cultural Recoleta.',
      en: 'A showcase that explores the link between education and art, from the Modern Museum to the Recoleta Cultural Center.'
    }
  },
  {
    visible: true,
    pagina: 'inteligente.html',
    categorias: 'grafica identidad',
    tipo: { es: 'Gráfica', en: 'Graphic' },
    anio: '2025',
    titulo: { es: 'INTELI-GENTE: Exposición sobre el vínculo con tecnología en el MARQ', en: 'INTELI-GENTE: Exhibition on the Link with Technology at the MARQ' },
    imagen: 'imagenes/inteli-gente3.png', alt: 'INTELI-GENTE', ancho: 1566, alto: 2349,
    descripcion: {
      es: 'Exposición de tecnología que reflexiona sobre la relación entre usuarios y dispositivos, entendidos como sistemas que se entrelazan y se transforman mutuamente.',
      en: 'Technology exhibition that reflects on the relationship between users and devices, understood as systems that intertwine and transform each other.'
    }
  },
  {
    visible: true,
    pagina: 'pulsos.html',
    categorias: 'editorial',
    tipo: { es: 'Gráfica', en: 'Graphic' },
    anio: '2025',
    titulo: { es: 'Pulsos: Una exploración sobre las convergencias entre arte y diseño', en: 'Pulsos: An Exploration of the Convergences between Art and Design' },
    imagen: 'imagenes/pulsos0.png', alt: 'PULSOS', ancho: 973, alto: 1080,
    descripcion: {
      es: 'Desarrollo de editorial con curaduría de imágenes y obras de profesionales del arte y el diseño.',
      en: 'Editorial development with curation of images and works by professionals in art and design.'
    }
  },
  {
    visible: true,
    pagina: 'militante.html',
    categorias: 'audiovisual',
    orden: { audiovisual: 1 },
    tipo: { es: 'Gráfica', en: 'Graphic' },
    anio: '2025',
    titulo: { es: 'Militante de la forma: Un documental sobre Elisa Strada', en: 'Militant of Form: A Documentary on Elisa Strada' },
    imagen: 'imagenes/documental.png', alt: 'Militante de la forma', ancho: 1440, alto: 810,
    descripcion: {
      es: 'Video documental sobre el poder de transformación social de la imagen, el color y la forma. Entre FADU y Di Tella.',
      en: 'Documentary video about the power of social transformation of image, color and form. Between FADU and Di Tella.'
    }
  },
  {
    visible: true,
    pagina: 'ruido.html',
    categorias: 'infografia',
    tipo: { es: 'Gráfica', en: 'Graphic' },
    anio: '2025',
    titulo: { es: '¿VES EL RUIDO?: Un recorrido sensorial por la ciudad de Buenos Aires', en: 'Do You See the Noise?: A Sensory Walk Through the City of Buenos Aires' },
    imagen: 'imagenes/veselruido.png', alt: '¿VES EL RUIDO?', ancho: 1860, alto: 1288,
    descripcion: {
      es: 'Proyecto que visibiliza patrones de ruido y silencio en el espacio urbano. Un recorrido consciente por la Comuna 13, que enmarca hitos audio/visuales.',
      en: 'Project that highlights patterns of noise and silence in the urban space. A conscious walk through Community 13, framing audio/visual landmarks.'
    }
  },
  {
    visible: true,
    pagina: 'cuerpohibrido.html',
    categorias: 'audiovisual grafica',
    orden: { audiovisual: 2 },
    tipo: { es: 'Gráfica', en: 'Graphic' },
    anio: '2025',
    titulo: { es: 'El cuerpo híbrido: Un paseo virtual', en: 'The Hybrid Body: A Virtual Walk' },
    imagen: 'imagenes/rosalia.png', alt: 'El cuerpo híbrido', ancho: 483, alto: 678,
    descripcion: {
      es: 'Experiencia interactiva que se pregunta por la despersonalización y fragmentación de los cuerpos hoy. Inteligencia artificial y la construcción de la imagen de un cuerpo.',
      en: 'Interactive experience that questions the depersonalization and fragmentation of bodies today. Artificial intelligence and the construction of the image of a body.'
    }
  },
  {
    visible: true,
    pagina: 'primitivo.html',
    categorias: 'grafica identidad',
    tipo: { es: 'Gráfica', en: 'Graphic' },
    anio: '2025',
    titulo: { es: 'Primitivo: sonido solo para quienes quieran conocer su verdadero ser', en: 'Primitive: Sound Only for Those Who Want to Know Their True Essence' },
    imagen: 'imagenes/primitivo-mock.jpg', alt: 'Primitivo', ancho: 736, alto: 920,
    descripcion: {
      es: 'Diseño de identidad para un proyecto de sonido experimental.',
      en: 'Identity design for an experimental sound project.'
    }
  },

  // ---------- NUEVOS ----------
  {
    visible: true,
    pagina: 'papota.html',
    categorias: 'identidad',
    tipo: { es: 'Diseño web', en: 'Web Design' },
    anio: '2026',
    titulo: { es: 'PAPOTA', en: 'PAPOTA' },
    imagen: 'imagenes/PAPOTA2.webp', alt: 'PAPOTA', ancho: 1920, alto: 1080,
    descripcion: {
      es: 'Diseño web para Ca7riel y Paco Amoroso por el lanzamiento de su álbum PAPOTA.',
      en: 'Web design for Ca7riel and Paco Amoroso for the release of their album PAPOTA.'
    }
  },
  {
    visible: true,
    pagina: 'viaje.html',
    categorias: 'infografia',
    tipo: { es: 'Infografía', en: 'Infographic' },
    anio: '2026',
    titulo: { es: 'Un viaje a otro Mundo', en: 'A Journey to Another World' },
    imagen: 'imagenes/Amanita1.png', alt: 'Un viaje a otro Mundo', ancho: 5760, alto: 3240,
    descripcion: {
      es: 'Diseño de folleto infográfico sobre la ingesta del hongo alucinógeno Amanita Muscaria.',
      en: 'Infographic leaflet design about the ingestion of the hallucinogenic mushroom Amanita Muscaria.'
    }
  }
];

// ---------- Utilidades ----------
function trabajosVisibles() {
  return TRABAJOS.filter(function (t) { return t.visible; });
}

function escaparHTML(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

// Construye una celda de la grilla del index
function crearCeldaTrabajo(t) {
  var celda = document.createElement('div');
  celda.className = 'celda';
  celda.dataset.categorias = t.categorias;
  celda.dataset.pagina = t.pagina;
  celda.addEventListener('click', function () { window.location.href = 'trabajos/' + t.pagina; });
  celda.innerHTML =
    '<div class="inner-col">' +
      '<div data-es="' + escaparHTML(t.tipo.es) + '" data-en="' + escaparHTML(t.tipo.en) + '">' + t.tipo.es + '</div>' +
      '<div>' + t.anio + '</div>' +
    '</div>' +
    '<h2 data-es="' + escaparHTML(t.titulo.es) + '" data-en="' + escaparHTML(t.titulo.en) + '">' + t.titulo.es + '</h2>' +
    '<img src="' + t.imagen + '" alt="' + escaparHTML(t.alt) + '" class="trabajo-imagen" width="' + t.ancho + '" height="' + t.alto + '" decoding="async">' +
    '<p class="trabajo-descripcion" data-es="' + escaparHTML(t.descripcion.es) + '" data-en="' + escaparHTML(t.descripcion.en) + '">' + t.descripcion.es + '</p>';
  return celda;
}

// Reparte celdas por filas: completa la primera fila (una por columna), luego la segunda, etc.
function repartirEnColumnas(celdas, columnas) {
  celdas.forEach(function (celda, i) {
    columnas[i % columnas.length].appendChild(celda);
  });
}

// En las páginas de trabajo: el botón "→" apunta al siguiente trabajo visible
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.btn-siguiente');
  if (!btn) return;
  var actual = location.pathname.split('/').pop();
  var visibles = trabajosVisibles();
  var i = visibles.findIndex(function (t) { return t.pagina === actual; });
  if (visibles.length) btn.setAttribute('href', visibles[(i + 1) % visibles.length].pagina);
});
