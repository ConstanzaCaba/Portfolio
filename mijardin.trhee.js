const nodosData = [
  { nombre: 'nodo16', x: -150, y:  -50, z:  230, cx1: -120, cy1: -150, cz1:  10, cx2: -230, cy2:  350, cz2:  15, descripcion: 'Descripción nodo 16' },
  { nombre: 'nodo2',  x:  -80, y: -320, z: -380, cx1:  -30, cy1: -100, cz1: -10, cx2:  -50, cy2: -220, cz2: -20, descripcion: 'Descripción nodo 2'  },
  { nombre: 'nodo3',  x:  300, y: -280, z:  360, cx1:   80, cy1: -200, cz1:  40, cx2:  200, cy2: -260, cz2:  50, descripcion: 'Descripción nodo 3'  },
  { nombre: 'nodo4',  x: -350, y: -250, z:  -50, cx1: -100, cy1: -180, cz1: -30, cx2: -250, cy2: -230, cz2: -40, descripcion: 'Descripción nodo 4'  },
  { nombre: 'nodo14', x:  500, y: -150, z:   30, cx1:  150, cy1: -300, cz1:  20, cx2:  350, cy2: -200, cz2:  25, descripcion: 'Descripción nodo 14' },
  { nombre: 'nodo6',  x: -600, y: -100, z: -280, cx1: -120, cy1: -280, cz1: -50, cx2: -380, cy2: -180, cz2: -60, descripcion: 'Descripción nodo 6'  },
  { nombre: 'nodo8',  x:  200, y: -400, z: -340, cx1:   60, cy1: -150, cz1: -20, cx2:  150, cy2: -300, cz2: -30, descripcion: 'Descripción nodo 8'  },
  { nombre: 'nodo1',  x: -200, y: -380, z:  270, cx1:  -50, cy1: -120, cz1:  40, cx2: -150, cy2: -280, cz2:  55, descripcion: 'Descripción nodo 1'  },
  { nombre: 'nodo9',  x:  550, y: -200, z:  -90, cx1:  100, cy1: -350, cz1: -60, cx2:  300, cy2: -250, cz2: -75, descripcion: 'Descripción nodo 9'  },
  { nombre: 'nodo19', x: -450, y: -200, z:  190, cx1: -100, cy1:  350, cz1:  60, cx2:  100, cy2: -250, cz2:-175, descripcion: 'Descripción nodo 19' },
  { nombre: 'nodo17', x:  430, y: -200, z:  -50, cx1:  100, cy1: -350, cz1: -60, cx2:  300, cy2: -250, cz2: -75, descripcion: 'Descripción nodo 17' },
  { nombre: 'nodo10', x: -400, y: -300, z:   40, cx1:  -90, cy1: -200, cz1:  25, cx2: -300, cy2: -280, cz2:  35, descripcion: 'Descripción nodo 10' },
  { nombre: 'nodo11', x:  150, y: -450, z:   80, cx1:   40, cy1: -180, cz1:  50, cx2:  100, cy2: -350, cz2:  65, descripcion: 'Descripción nodo 11' },
  { nombre: 'nodo12', x:  100, y: -300, z:   80, cx1:   40, cy1: -180, cz1:  50, cx2:  100, cy2: -270, cz2:  65, descripcion: 'Descripción nodo 12' },
  { nombre: 'nodo21', x:   90, y: -200, z:  -10, cx1:   40, cy1: -180, cz1:  50, cx2:  100, cy2: -130, cz2: -85, descripcion: 'Descripción nodo 21' },
  { nombre: 'nodo22', x:   50, y:   20, z:   80, cx1:   40, cy1:   10, cz1:  50, cx2:   60, cy2:  -10, cz2:  65, descripcion: 'Descripción nodo 22' },
  { nombre: 'nodo20', x: -150, y: -420, z:  -60, cx1:  -40, cy1: -160, cz1: -35, cx2: -100, cy2: -320, cz2: -50, descripcion: 'Descripción nodo 20' },
  { nombre: 'nodo13', x:  300, y:  -80, z: -300, cx1:  200, cy1: -120, cz1:  10, cx2:  200, cy2: -150, cz2:  15, descripcion: 'Descripción nodo 13' },
  { nombre: 'nodo5',  x: -400, y:   70, z:  -80, cx1: -180, cy1:    0, cz1: -20, cx2: -220, cy2:   50, cz2: -25, descripcion: 'Descripción nodo 5'  },
  { nombre: 'nodo7',  x: -300, y:   70, z:   80, cx1: -180, cy1:    0, cz1: -20, cx2: -220, cy2:   50, cz2: -25, descripcion: 'Descripción nodo 7'  },
  { nombre: 'nodo15', x:   30, y: -480, z: -300, cx1:   10, cy1: -200, cz1:  -5, cx2:   20, cy2: -380, cz2:  -8, descripcion: 'Descripción nodo 15' },
];

(function () {
  const s = document.createElement('script');
  s.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
  s.onload = initJardin;
  document.head.appendChild(s);
})();

function bezier(p0, p1, p2, p3, t) {
  return (1-t)**3*p0 + 3*(1-t)**2*t*p1 + 3*(1-t)*t**2*p2 + t**3*p3;
}

function simpleNoise(x) {
  return (Math.sin(x * 127.1) * 0.5 + 0.5 + Math.sin(x * 311.7) * 0.25 + 0.25) / 1.5;
}

function initJardin() {
  const origenY = -500;

  // renderer
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  Object.assign(renderer.domElement.style, {
    position: 'fixed', top: '0', left: '0', zIndex: '-1', pointerEvents: 'none'
  });
  document.body.appendChild(renderer.domElement);

  // escena y cámara
  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 5000);
  camera.position.set(0, 0, 780);

  // pivot
  const pivot = new THREE.Group();
  pivot.position.set(0, -200, 0);
  scene.add(pivot);

  // luces
  scene.add(new THREE.AmbientLight(0xFFCA9F, 0.9));

  // raycaster
  const raycaster = new THREE.Raycaster();
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
      const w = tex.image.width;
      const h = tex.image.height;
      const plano = new THREE.Mesh(
        new THREE.PlaneGeometry(60, 60 * (h / w)),
        new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide })
      );
      plano.position.set(n.x, n.y, n.z);
      plano.userData = { nodoIdx: idx };
      pivot.add(plano);
      meshes.push(plano);
    });
  }); // ← cierre del forEach

  // textos en líneas
  function crearTextoEnLinea(texto, nodo) {
    const canvas = document.createElement('canvas');
    canvas.width  = 512;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.font = '32px serif';
    ctx.fillText(texto, 0, 40);
    const plano = new THREE.Mesh(
      new THREE.PlaneGeometry(200, 25),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(canvas), transparent: true, side: THREE.DoubleSide })
    );
    const t = 0.7;
    plano.position.set(
      bezier(0,       nodo.cx1, nodo.cx2, nodo.x, t),
      bezier(origenY, nodo.cy1, nodo.cy2, nodo.y, t),
      bezier(0,       nodo.cz1, nodo.cz2, nodo.z, t)
    );
    const t2  = 0.72;
    const dir = new THREE.Vector3(
      bezier(0,       nodo.cx1, nodo.cx2, nodo.x, t2) - plano.position.x,
      bezier(origenY, nodo.cy1, nodo.cy2, nodo.y, t2) - plano.position.y,
      bezier(0,       nodo.cz1, nodo.cz2, nodo.z, t2) - plano.position.z,
    ).normalize();
    plano.quaternion.setFromUnitVectors(new THREE.Vector3(1, 0, 0), dir);
    pivot.add(plano);
  }

  crearTextoEnLinea('ilustración', nodosData[5]);
  crearTextoEnLinea('collage',     nodosData[3]);

  // helpers de pointer
  function pointerToNDC(clientX, clientY) {
    mouse.x =  (clientX / window.innerWidth)  * 2 - 1;
    mouse.y = -(clientY / window.innerHeight) * 2 + 1;
  }

  function checkHover(clientX, clientY) {
    pointerToNDC(clientX, clientY);
    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObjects(meshes);
    if (hits.length > 0) {
      const hit = hits[0].object;
      if (hoveredMesh !== hit) {
        if (hoveredMesh) hoveredMesh.scale.set(1, 1, 1);
        hoveredMesh = hit;
        hoveredMesh.scale.set(1.18, 1.18, 1.18);
        document.body.style.cursor = 'pointer';
      }
    } else {
      if (hoveredMesh) {
        hoveredMesh.scale.set(1, 1, 1);
        hoveredMesh = null;
        document.body.style.cursor = 'default';
      }
    }
  }

  function checkClick(clientX, clientY) {
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
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

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

    renderer.render(scene, camera);
  }
  animate();

} // ← cierre de initJardin