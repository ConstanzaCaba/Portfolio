const nodosData = [
  { nombre: 'nodo16', x: -150, y:  -50, z:  230, cx1: -120, cy1: -150, cz1:  10, cx2: -230, cy2:  350, cz2:  15, descripcion: 'Ilustración digital' },
  { nombre: 'nodo2',  x:  -80, y: -320, z: -380, cx1:  -30, cy1: -100, cz1: -10, cx2:  -50, cy2: -220, cz2: -20, descripcion: 'Fotografía'  },
  { nombre: 'nodo3',  x:  300, y: -280, z:  360, cx1:   80, cy1: -200, cz1:  40, cx2:  200, cy2: -260, cz2:  50, descripcion: 'Ilustración técnica mixta'  },
  { nombre: 'nodo4',  x: -350, y: -250, z:  -50, cx1: -100, cy1: -180, cz1: -30, cx2: -250, cy2: -230, cz2: -40, descripcion: 'Collage digital'  },
  { nombre: 'nodo14', x:  500, y: -150, z:   30, cx1:  150, cy1: -300, cz1:  20, cx2:  350, cy2: -200, cz2:  25, descripcion: 'Ilustración digital' },
  { nombre: 'nodo6',  x: -600, y: -100, z: -280, cx1: -120, cy1: -280, cz1: -50, cx2: -380, cy2: -180, cz2: -60, descripcion: 'Ilustración técnica mixta'  },
  { nombre: 'nodo8',  x:  200, y: -400, z: -340, cx1:   60, cy1: -150, cz1: -20, cx2:  150, cy2: -300, cz2: -30, descripcion: 'Fotografía de moda'  },
  { nombre: 'nodo1',  x: -200, y: -380, z:  270, cx1:  -50, cy1: -120, cz1:  40, cx2: -150, cy2: -280, cz2:  55, descripcion: 'Ilustración digital'  },
  { nombre: 'nodo9',  x:  550, y: -200, z:  -90, cx1:  100, cy1: -350, cz1: -60, cx2:  300, cy2: -250, cz2: -75, descripcion: 'Ilustración digital'  },
  { nombre: 'nodo19', x: -450, y: -200, z:  190, cx1: -100, cy1:  350, cz1:  60, cx2:  100, cy2: -250, cz2:-175, descripcion: 'Experiencia inmersiva' },
  { nombre: 'nodo17', x:  430, y: -200, z:  -50, cx1:  100, cy1: -350, cz1: -60, cx2:  300, cy2: -250, cz2: -75, descripcion: 'Diseño de visuales en tiempo real' },
  { nombre: 'nodo10', x: -400, y: -300, z:   40, cx1:  -90, cy1: -200, cz1:  25, cx2: -300, cy2: -280, cz2:  35, descripcion: 'Ilustración técnica mixta' },
  { nombre: 'nodo11', x:  150, y: -450, z:   80, cx1:   40, cy1: -180, cz1:  50, cx2:  100, cy2: -350, cz2:  65, descripcion: 'Ilustración digital' },
  { nombre: 'nodo12', x:  100, y: -300, z:   80, cx1:   40, cy1: -180, cz1:  50, cx2:  100, cy2: -270, cz2:  65, descripcion: 'Ilustración digital' },
  { nombre: 'nodo21', x:  90, y: -200, z:  -10, cx1:   40, cy1: -180, cz1:  50, cx2:  100, cy2: -130, cz2: -85, descripcion: 'Ilustración digital' },
  { nombre: 'nodo22', x:   50, y:   20, z:   80, cx1:   40, cy1:   10, cz1:  50, cx2:   60, cy2:  -10, cz2:  65, descripcion: 'Ilustración digital' },
  { nombre: 'nodo20', x: -150, y: -420, z:  -60, cx1:  -40, cy1: -160, cz1: -35, cx2: -100, cy2: -320, cz2: -50, descripcion: 'Afiche digital' },
  { nombre: 'nodo13', x:  300, y:  -80, z: -300, cx1:  200, cy1: -120, cz1:  10, cx2:  200, cy2: -150, cz2:  15, descripcion: 'Ilustración técnica mixta' },
  { nombre: 'nodo5',  x: -400, y:   70, z:  -80, cx1: -180, cy1:    0, cz1: -20, cx2: -220, cy2:   50, cz2: -25, descripcion: 'Ilustración digital, Tapa de disco'  },
  { nombre: 'nodo28',  x: -450, y:   -40, z:  -80, cx1: -180, cy1:    0, cz1: -20, cx2: -220, cy2:   50, cz2: -25, descripcion: 'Ilustración digital'  },
  { nombre: 'nodo7',  x: -300, y:   70, z:   80, cx1: -180, cy1:    0, cz1: -20, cx2: -220, cy2:   50, cz2: -25, descripcion: 'Ilustración digital'  },
  { nombre: 'nodo15', x:   30, y: -480, z: -300, cx1:   10, cy1: -200, cz1:  -5, cx2:   20, cy2: -380, cz2:  -8, descripcion: 'Fotografía de moda' },
  { nombre: 'nodo23', x:   90, y: -400, z: -200, cx1:   10, cy1: -200, cz1:  -5, cx2:   50, cy2: -480, cz2:  -8, descripcion: 'Ilustración digital' },
  { nombre: 'nodo24', x:  400, y:  -180, z: -400, cx1:  80, cy1: -20, cz1:  -360, cx2:  200, cy2: -150, cz2:  195, descripcion: 'Ilustración digital' },
  { nombre: 'nodo25',  x: -470, y: -190, z: -280, cx1: -120, cy1: -180, cz1: -50, cx2: 280, cy2: -120, cz2: -360, descripcion: 'Ilustración técnica mixta'  },
  { nombre: 'nodo26',  x:  550, y: -50, z:  -90, cx1:  100, cy1: -350, cz1: -60, cx2:  390, cy2: -50, cz2: -75, descripcion: 'Ilustración digital'  },
  { nombre: 'nodo27',  x:  600, y: -100, z:  -190, cx1:  100, cy1: -350, cz1: -60, cx2:  300, cy2: -250, cz2: -75, descripcion: 'Ilustración digital'  },
];


(function () {
  const scripts = [
    'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
    'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/postprocessing/EffectComposer.js',
    'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/postprocessing/RenderPass.js',
    'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/postprocessing/ShaderPass.js',
    'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/postprocessing/UnrealBloomPass.js',
    'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/shaders/LuminosityHighPassShader.js',
    'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/shaders/CopyShader.js',
  ];

  let loaded = 0;
  scripts.forEach(src => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = () => { if (++loaded === scripts.length) initJardin(); };
    document.head.appendChild(s);
  });
})();

function bezier(p0, p1, p2, p3, t) {
  return (1-t)**3*p0 + 3*(1-t)**2*t*p1 + 3*(1-t)*t**2*p2 + t**3*p3;
}

function simpleNoise(x) {
  return (Math.sin(x * 127.1) * 0.5 + 0.5 + Math.sin(x * 311.7) * 0.25 + 0.25) / 1.5;
}

function initJardin() {

  const origenY = -500;

  // renderer de líneas/textos (siempre nítido)
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);

  const W = () => window.innerWidth;
  const H = () => window.visualViewport ? window.visualViewport.height : window.innerHeight;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(W(), H());
  Object.assign(renderer.domElement.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: '-1',
    pointerEvents: 'none',
  });
  renderer.domElement.classList.add('jardin-fade');

  document.body.appendChild(renderer.domElement);

  // renderer de nodos (imágenes), en un canvas separado para poder desenfocarlo
  // sin afectar a las líneas — se dibuja encima del renderer de líneas.
  const rendererNodos = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  rendererNodos.setPixelRatio(window.devicePixelRatio);
  rendererNodos.setSize(W(), H());
  Object.assign(rendererNodos.domElement.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: '-1',
    pointerEvents: 'none',
  });
  rendererNodos.domElement.classList.add('jardin-canvas');

  document.body.appendChild(rendererNodos.domElement);

  // escena y cámara
  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, W() / H(), 0.1, 5000);
  camera.position.set(0, 0, 780);

  // pivot
  const pivot = new THREE.Group();
  pivot.position.set(0, -200, 0);
  scene.add(pivot);

  // luces
  scene.add(new THREE.AmbientLight(0xFFCA9F, 0.9));

  // raycaster (solo contra los nodos, que viven en la capa 1)
  const raycaster = new THREE.Raycaster();
  raycaster.layers.set(1);
  const mouse     = new THREE.Vector2();
  const meshes    = [];
  const lineMats  = [];
  let hoveredMesh = null;

  // tooltip
  const tooltip = document.createElement('div');
  Object.assign(tooltip.style, {
    position:      'fixed',
    background:    'rgba(243,241,239,0.95)',
    padding:       '10px 16px',
    fontSize:      '13px',
    fontFamily:    'inherit',
    pointerEvents: 'none',
    display:       'none',
    maxWidth:      '220px',
    lineHeight:    '1.4',
    zIndex:        '500',
  });
  document.body.appendChild(tooltip);

  // construir nodos
  const loader = new THREE.TextureLoader();

  nodosData.forEach((n, idx) => {
    n.y   *= -1;
    n.cy1 *= -1;
    n.cy2 *= -1;

  // línea curva con colores por vértice
    const pts = [];
    for (let i = 0; i <= 60; i++) {
      const t = (i / 60) * 0.99;
      pts.push(new THREE.Vector3(
        bezier(0,       n.cx1, n.cx2, n.x, t) + (simpleNoise(t * 3 + n.x * 0.01) - 0.5) * 5,
        bezier(origenY, n.cy1, n.cy2, n.y, t) + (simpleNoise(t * 5 + n.y * 0.01) - 0.5) * 5,
        bezier(0,       n.cz1, n.cz2, n.z, t) + (simpleNoise(t * 2 + n.z * 0.01) - 0.5) * 5,
      ));
    }

    const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
    const colors  = new Float32Array(pts.length * 3);
    for (let i = 0; i < pts.length; i++) {
      colors[i * 3]     = 0.95;
      colors[i * 3 + 1] = 0.5;
      colors[i * 3 + 2] = 0.58;
    }
    lineGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const lineMat = new THREE.LineBasicMaterial({ vertexColors: true, opacity: 0.5, transparent: true });
    pivot.add(new THREE.Line(lineGeo, lineMat));
    lineMats.push({ lineMat, lineGeo, idx, progress: Math.random() * 2 });

    // imagen plana con proporción correcta
    loader.load(`imagenes/${n.nombre}.png`, tex => {
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
      const w = tex.image.width;
      const h = tex.image.height;
      const plano = new THREE.Mesh(
        new THREE.PlaneGeometry(60, 60 * (h / w)),
        new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide })
      );
      plano.position.set(n.x, n.y, n.z);
      plano.userData = { nodoIdx: idx };
      plano.layers.set(1); // capa de nodos: se renderiza aparte para poder desenfocarla
      pivot.add(plano);
      meshes.push(plano);
    });
  }); // ← cierre del forEach

  // Nube de palabras: cada una distribuida sobre una línea distinta y orientada
  // siguiendo su tangente, igual que 'Ilustración' (la referencia de este mecanismo,
  // por eso ya no hace falta esa etiqueta suelta). Se revela recién al hacer click en "Pasear".
  const grupoPalabras = new THREE.Group();
  grupoPalabras.visible = false;
  pivot.add(grupoPalabras);

  const PALABRAS_FLOTANTES = [
    { texto: 'ESPACIO',       nodoIndex:  0, t: 0.40 },
    { texto: 'TIEMPO',        nodoIndex:  1, t: 0.48 },
    { texto: 'LO MATERIAL',   nodoIndex:  2, t: 0.56 },
    { texto: 'ARGENTINA',     nodoIndex:  3, t: 0.64 },
    { texto: 'UNIVERSO',      nodoIndex:  4, t: 0.40 },
    { texto: 'CONTEMPORÁNEO', nodoIndex:  5, t: 0.48 },
    { texto: 'EXPERIENCIAS',  nodoIndex:  6, t: 0.56 },
    { texto: 'PROPÓSITO',     nodoIndex:  7, t: 0.64 },
    { texto: 'DISEÑO',        nodoIndex:  8, t: 0.40, destacado: true },
    { texto: 'IMPACTO',       nodoIndex:  9, t: 0.48 },
    { texto: 'ARTE',          nodoIndex: 10, t: 0.56 },
    { texto: 'EXPRESIÓN',     nodoIndex: 11, t: 0.64 },
    { texto: 'DIGITAL',       nodoIndex: 12, t: 0.40 },
    { texto: 'COMUNICACIÓN',  nodoIndex: 13, t: 0.48, extraY: 30 },
    { texto: 'DIBUJO',        nodoIndex: 14, t: 0.56 },
    { texto: 'IMÁGEN',        nodoIndex: 15, t: 0.64 },
    { texto: 'FOTOGRAFÍA',    nodoIndex: 16, t: 0.40 },
    { texto: 'CUERPO',        nodoIndex: 17, t: 0.48 },
    { texto: 'ANALÓGICO',     nodoIndex: 18, t: 0.56 },
    { texto: 'NUTRIR',        nodoIndex: 19, t: 0.64 },
    { texto: 'SENSORIAL',     nodoIndex: 20, t: 0.40 },
    { texto: 'DISFRUTE',      nodoIndex: 21, t: 0.48 },
  ];

  function crearPalabraEnLinea(item) {
    const nodo = nodosData[item.nodoIndex];
    const R = 3; // resolución del canvas, para que el texto no se vea pixelado
    const fontSize = 15 * R;
    const fuente = `${fontSize}px 'IBMPlexMono', 'Courier New', monospace`;

    const medidor = document.createElement('canvas').getContext('2d');
    medidor.font = fuente;
    const anchoTexto = medidor.measureText(item.texto).width;

    const padX = 22 * R, padY = 14 * R;
    const w = anchoTexto + padX * 2;
    const h = fontSize + padY * 2;
    const canvas = document.createElement('canvas');
    canvas.width = w; canvas.height = h;

    const ctx = canvas.getContext('2d');
    ctx.font = fuente;
    ctx.fillStyle = 'rgba(151, 151, 151, 0.92)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(item.texto, w / 2, h / 2);

    if (item.destacado) {
      const medida = ctx.measureText(item.texto);
      const lineY = h / 2 + fontSize * 0.42;
      ctx.strokeStyle = 'rgba(243,241,239,0.92)';
      ctx.lineWidth = R;
      ctx.beginPath();
      ctx.moveTo(w / 2 - medida.width / 2, lineY);
      ctx.lineTo(w / 2 + medida.width / 2, lineY);
      ctx.stroke();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.minFilter = THREE.LinearFilter;
    const factorMundo = 0.234; // píxeles de canvas → unidades de la escena (+30%)
    const plano = new THREE.Mesh(
      new THREE.PlaneGeometry(w * factorMundo, h * factorMundo),
      new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide })
    );

    // posición y orientación siguiendo la tangente de la línea, igual que crearTextoEnLinea
    const t = item.t;
    plano.position.set(
      bezier(0,       nodo.cx1, nodo.cx2, nodo.x, t),
      bezier(origenY, nodo.cy1, nodo.cy2, nodo.y, t),
      bezier(0,       nodo.cz1, nodo.cz2, nodo.z, t)
    );
    const t2 = t + 0.02;
    const dir = new THREE.Vector3(
      bezier(0,       nodo.cx1, nodo.cx2, nodo.x, t2) - plano.position.x,
      bezier(origenY, nodo.cy1, nodo.cy2, nodo.y, t2) - plano.position.y,
      bezier(0,       nodo.cz1, nodo.cz2, nodo.z, t2) - plano.position.z,
    ).normalize();
    plano.quaternion.setFromUnitVectors(new THREE.Vector3(1, 0, 0), dir);

    // desplaza la palabra hacia "arriba" (según su propia orientación) para que
    // la línea quede debajo del texto y no lo atraviese
    const arriba = new THREE.Vector3(0, 1, 0).applyQuaternion(plano.quaternion);
    const separacion = (h * factorMundo) / 2 + 6;
    plano.position.addScaledVector(arriba, separacion);

    if (item.extraY) plano.position.y += item.extraY; // ajuste manual puntual

    grupoPalabras.add(plano);
  }

  PALABRAS_FLOTANTES.forEach(crearPalabraEnLinea);

  // helpers de pointer
  function menuEstaAbierto() {
    return document.querySelector('.site-nav.abierto') !== null;
  }

  function pointerToNDC(clientX, clientY) {
    mouse.x =  (clientX / window.innerWidth)  * 2 - 1;
    mouse.y = -(clientY / window.innerHeight) * 2 + 1;
  }

  // Bienvenida: splash inicial con la geometría de fondo desenfocada, en cada carga de la página.
  // El splash y el resto del HTML aparecen primero; el jardín (líneas + nodos) aparece
  // suavemente detrás recién después, con un pequeño retraso.
  const BIENVENIDA_EASING = 'cubic-bezier(0.77, 0, 0.175, 1)';
  const bienvenida = document.getElementById('bienvenida');
  const btnPasear = document.getElementById('btn-pasear');
  let bienvenidaActiva = false;

  if (bienvenida) {
    bienvenidaActiva = true;
    bienvenida.style.display = 'flex';
    bienvenida.animate(
      [
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)' }
      ],
      { duration: 900, easing: BIENVENIDA_EASING, fill: 'forwards' }
    );

    if (btnPasear) {
      btnPasear.addEventListener('click', function () {
        bienvenidaActiva = false;
        rendererNodos.domElement.classList.remove('desenfocado');
        rendererNodos.domElement.classList.add('visible');
        renderer.domElement.classList.add('visible');
        grupoPalabras.visible = true;
        const cierre = bienvenida.animate(
          [
            { clipPath: 'inset(0 0% 0 0)' },
            { clipPath: 'inset(0 100% 0 0)' }
          ],
          { duration: 700, easing: BIENVENIDA_EASING, fill: 'forwards' }
        );
        cierre.finished.then(function () {
          bienvenida.style.display = 'none';
        });
      });
    }
  }

  // El jardín aparece recién después de que el splash/HTML ya se vieron
  const RETRASO_JARDIN = bienvenida ? 700 : 200;
  setTimeout(function () {
    renderer.domElement.classList.add('visible');
    rendererNodos.domElement.classList.add(bienvenidaActiva ? 'desenfocado' : 'visible');
    if (!bienvenida) grupoPalabras.visible = true; // sin splash no hay botón "Pasear": se muestran igual
  }, RETRASO_JARDIN);

function checkHover(clientX, clientY) {
  if (bienvenidaActiva || menuEstaAbierto()) {
    if (hoveredMesh) {
      hoveredMesh.scale.set(1, 1, 1);
      hoveredMesh = null;
      window.CursorFX.setActive(false);
    }
    return;
  }
  pointerToNDC(clientX, clientY);
  raycaster.setFromCamera(mouse, camera);
  const hits = raycaster.intersectObjects(meshes);

  if (hits.length > 0) {
    const hit = hits[0].object;
    if (hoveredMesh !== hit) {
      if (hoveredMesh) hoveredMesh.scale.set(1, 1, 1);
      hoveredMesh = hit;
      hoveredMesh.scale.set(1.18, 1.18, 1.18);
    }
    window.CursorFX.setActive(true);
  } else if (hoveredMesh) {
    // Solo apagamos el cursor activo si veníamos de un nodo: si no hay nodo
    // bajo el mouse, el estado del cursor lo maneja cursor.js (hover de links/botones del DOM).
    hoveredMesh.scale.set(1, 1, 1);
    hoveredMesh = null;
    window.CursorFX.setActive(false);
  }
}

  function checkClick(clientX, clientY) {
    if (bienvenidaActiva || menuEstaAbierto()) return;
    pointerToNDC(clientX, clientY);
    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObjects(meshes);
    if (hits.length > 0) {
      const data = nodosData[hits[0].object.userData.nodoIdx];
      document.getElementById('popup-img').src = `imagenes/${data.nombre}.png`;
      document.getElementById('popup-desc').textContent = data.descripcion;
      document.getElementById('popup-jardin').style.display = 'flex';
    }
  }

  // eventos mouse
  let isDragging = false;
  let prevX      = 0;
  let mouseDownX = 0;
  let rotY       = 0;
  let velocidad  = 0;

  document.addEventListener('mousemove', e => {
    if (isDragging) {
      velocidad = (e.clientX - prevX) * 0.005;
      rotY += velocidad;
      prevX = e.clientX;
    }
    checkHover(e.clientX, e.clientY);
    if (tooltip.style.display === 'block') {
      tooltip.style.left = (e.clientX + 15) + 'px';
      tooltip.style.top  = (e.clientY + 15) + 'px';
    }
  });
  document.addEventListener('mousedown', e => { isDragging = true; prevX = e.clientX; mouseDownX = e.clientX; });
  document.addEventListener('mouseup',   e => { if (Math.abs(e.clientX - mouseDownX) < 4) checkClick(e.clientX, e.clientY); isDragging = false; });

  // eventos touch
  let touchStartX = 0, touchStartY = 0, touchPrevX = 0;
  document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; touchStartY = e.touches[0].clientY; touchPrevX = touchStartX; }, { passive: true });
  document.addEventListener('touchmove',  e => {
    velocidad  = (e.touches[0].clientX - touchPrevX) * 0.005;
    rotY      += velocidad;
    touchPrevX = e.touches[0].clientX;
  }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = Math.abs(e.changedTouches[0].clientX - touchStartX);
    const dy = Math.abs(e.changedTouches[0].clientY - touchStartY);
    if (dx < 8 && dy < 8) checkClick(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
  });

  // resize
  window.addEventListener('resize', () => {
  renderer.setSize(W(), H());
  rendererNodos.setSize(W(), H());
  camera.aspect = W() / H();
  camera.updateProjectionMatrix();
  });

  // también escuchar cambios de visualViewport (barra Safari aparece/desaparece)
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', () => {
      renderer.setSize(W(), H());
      rendererNodos.setSize(W(), H());
      camera.aspect = W() / H();
      camera.updateProjectionMatrix();
    });
  }

  // loop
  let autoRot = 0;

  function animate() {
    requestAnimationFrame(animate);
    autoRot += 0.0005;

    if (!isDragging) velocidad *= 0.968;
    rotY += velocidad;

    pivot.rotation.y = rotY + autoRot;

    lineMats.forEach(l => {
      const isHovered = hoveredMesh && hoveredMesh.userData.nodoIdx === l.idx;
      l.progress += isHovered ? 0.03 : 0.003;
      if (l.progress > 2) l.progress = 0;

      const colors = l.lineGeo.attributes.color;
      const count  = colors.count;
      for (let i = 0; i < count; i++) {
        const t    = i / count;
        const dist = Math.abs(t - (l.progress % 1));
        const glow = Math.max(0, 1 - dist * 8);
        colors.setXYZ(i,
          0.95 + glow * 0.05,
          0.5  + glow * 0.45,
          0.58 + glow * 0.12,
        );
      }
      colors.needsUpdate = true;
    });

    // dos pasadas: capa 0 (líneas/textos, siempre nítido) y capa 1 (nodos, puede desenfocarse)
    camera.layers.set(0);
    renderer.render(scene, camera);

    camera.layers.set(1);
    rendererNodos.render(scene, camera);

    camera.layers.set(0);
  }
  animate();

} // ← cierre de initJardin