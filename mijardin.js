const nodosData = [
  { nombre: 'nodo16', x: -150, y:  -50, z:  230, cx1: -120, cy1: -150, cz1:  10, cx2: -230, cy2:  350, cz2:  15 },
  { nombre: 'nodo2',  x:  -80, y: -320, z: -380, cx1:  -30, cy1: -100, cz1: -10, cx2:  -50, cy2: -220, cz2: -20 },
  { nombre: 'nodo3',  x:  300, y: -280, z:   60, cx1:   80, cy1: -200, cz1:  40, cx2:  200, cy2: -260, cz2:  50 },
  { nombre: 'nodo4',  x: -350, y: -250, z:  -50, cx1: -100, cy1: -180, cz1: -30, cx2: -250, cy2: -230, cz2: -40 },
  { nombre: 'nodo14', x:  500, y: -150, z:   30, cx1:  150, cy1: -300, cz1:  20, cx2:  350, cy2: -200, cz2:  25 },
  { nombre: 'nodo6',  x: -600, y: -100, z: -280, cx1: -120, cy1: -280, cz1: -50, cx2: -380, cy2: -180, cz2: -60 },
  { nombre: 'nodo8',  x:  200, y: -400, z: -340, cx1:   60, cy1: -150, cz1: -20, cx2:  150, cy2: -300, cz2: -30 },
  { nombre: 'nodo1',  x: -200, y: -380, z:  270, cx1:  -50, cy1: -120, cz1:  40, cx2: -150, cy2: -280, cz2:  55 },
  { nombre: 'nodo9',  x:  550, y: -200, z:  -90, cx1:  100, cy1: -350, cz1: -60, cx2:  300, cy2: -250, cz2: -75 },
  { nombre: 'nodo19', x: -450, y: -200, z:  190, cx1: -100, cy1:  350, cz1:  60, cx2:  100, cy2: -250, cz2:-175 },
  { nombre: 'nodo17', x:  430, y: -200, z:  -50, cx1:  100, cy1: -350, cz1: -60, cx2:  300, cy2: -250, cz2: -75 },
  { nombre: 'nodo10', x: -400, y: -300, z:   40, cx1:  -90, cy1: -200, cz1:  25, cx2: -300, cy2: -280, cz2:  35 },
  { nombre: 'nodo11', x:  150, y: -450, z:   80, cx1:   40, cy1: -180, cz1:  50, cx2:  100, cy2: -350, cz2:  65 },
  { nombre: 'nodo12', x:  100, y: -300, z:   80, cx1:   40, cy1: -180, cz1:  50, cx2:  100, cy2: -270, cz2:  65 },
  { nombre: 'nodo21', x:   90, y: -200, z:  -10, cx1:   40, cy1: -180, cz1:  50, cx2:  100, cy2: -130, cz2: -85 },
  { nombre: 'nodo22', x:   50, y:   20, z:   80, cx1:   40, cy1:   10, cz1:  50, cx2:   60, cy2:  -10, cz2:  65 },
  { nombre: 'nodo20', x: -150, y: -420, z:  -60, cx1:  -40, cy1: -160, cz1: -35, cx2: -100, cy2: -320, cz2: -50 },
  { nombre: 'nodo13', x:  300, y:  -80, z: -300, cx1:  200, cy1: -120, cz1:  10, cx2:  200, cy2: -150, cz2:  15 },
  { nombre: 'nodo5',  x: -400, y:   70, z:  -80, cx1: -180, cy1:    0, cz1: -20, cx2: -220, cy2:   50, cz2: -25 },
  { nombre: 'nodo7',  x: -300, y:   70, z:   80, cx1: -180, cy1:    0, cz1: -20, cx2: -220, cy2:   50, cz2: -25 },
  { nombre: 'nodo15', x:   30, y: -480, z: -300, cx1:   10, cy1: -200, cz1:  -5, cx2:   20, cy2: -380, cz2:  -8 },
];

const jardin = new p5(function(p) {
  let nodos = [];
  let rotY   = 0;
  let isDragging = false;
  let prevX  = 0;
  const origenY = 1000;

  p.preload = function() {
    nodosData.forEach(data => {
      nodos.push({ ...data, img: p.loadImage(`imagenes/${data.nombre}.png`) });
    });
  }

  p.setup = function() {
    let canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    canvas.position(0, 0);
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('left', '0');
    canvas.style('z-index', '-1');
  }

  p.mousePressed  = () => { isDragging = true;  prevX = p.mouseX; }
  p.mouseReleased = () => { isDragging = false; }
  p.mouseDragged  = () => {
    if (!isDragging) return;
    rotY += (p.mouseX - prevX) * 0.005;
    prevX = p.mouseX;
  }

  p.draw = function() {
    p.clear();
    p.rotateY(rotY);
    p.translate(0, 200, 0);

    // luces y material
    p.directionalLight(255, 255, 255, 0, -1, -0.5);
    p.specularMaterial(255);
    p.shininess(200);

    // esfera central
    for (let i = 5; i > 0; i--) {
      p.noStroke();
      p.fill(238, 230, 255, 20);
      p.push();
      p.translate(0, origenY, 0);
      p.sphere(i * 30);
      p.pop();
    }

    // líneas curvas
    p.stroke(0);
    p.strokeWeight(0.2);
    p.noFill();

    nodos.forEach(n => {
      p.beginShape();
      for (let i = 0; i <= 30; i++) {
        let t  = (i / 30) * 0.98;
        let nx = p.bezierPoint(0,       n.cx1, n.cx2, n.x, t);
        let ny = p.bezierPoint(origenY, n.cy1, n.cy2, n.y, t);
        let nz = p.bezierPoint(0,       n.cz1, n.cz2, n.z, t);

        nx += (p.noise(t * 13, n.x) - 0.5) * 15;
        ny += (p.noise(t *  5, n.y) - 0.5) * 15;
        nz += (p.noise(t *  7, n.z) - 0.5) * 15;

        p.vertex(nx, ny, nz);
      }
      p.endShape();
    });

    // imágenes en cada nodo
    p.noStroke();
    nodos.forEach(n => {
      p.push();
      p.translate(n.x, n.y, n.z);
      p.image(n.img, -20, -20, 60, 60);
      p.pop();
    });
  }

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }
});