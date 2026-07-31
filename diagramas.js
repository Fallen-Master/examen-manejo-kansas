// Diagramas de intersecciones — vista desde arriba.
// AZUL = usted · NARANJA = otro vehículo · VERDE = peatón
// Intersection diagrams, top-down view. BLUE = you, ORANGE = other vehicle, GREEN = pedestrian.
// Sin texto para que funcionen en español e inglés. / No text, so they work in both languages.

const D = {
  // piezas reutilizables / reusable pieces
  calles: `<rect x="0" y="105" width="300" height="90" fill="#9aa3ad"/>
           <rect x="105" y="0" width="90" height="300" fill="#9aa3ad"/>
           <line x1="0" y1="150" x2="105" y2="150" stroke="#f5d327" stroke-width="3" stroke-dasharray="12 10"/>
           <line x1="195" y1="150" x2="300" y2="150" stroke="#f5d327" stroke-width="3" stroke-dasharray="12 10"/>
           <line x1="150" y1="0" x2="150" y2="105" stroke="#f5d327" stroke-width="3" stroke-dasharray="12 10"/>
           <line x1="150" y1="195" x2="150" y2="300" stroke="#f5d327" stroke-width="3" stroke-dasharray="12 10"/>`,
  alto: (x,y) => `<polygon points="${x-11},${y-4.5} ${x-4.5},${y-11} ${x+4.5},${y-11} ${x+11},${y-4.5} ${x+11},${y+4.5} ${x+4.5},${y+11} ${x-4.5},${y+11} ${x-11},${y+4.5}" fill="#c0392b" stroke="#fff" stroke-width="2.5"/>`,
  // autos: dirección = "arriba|abajo|izq|der"
  auto: (dir, x, y, color) => {
    const vert = (dir==="arriba"||dir==="abajo");
    const w = vert ? 26 : 38, h = vert ? 38 : 26;
    return `<rect x="${x-w/2}" y="${y-h/2}" width="${w}" height="${h}" rx="6" fill="${color}" stroke="#22303f" stroke-width="2.5"/>`;
  },
  flecha: (dir, x, y, color="#22303f") => {
    const p = {arriba:`${x},${y-16} ${x-9},${y-2} ${x+9},${y-2}`,
               abajo:`${x},${y+16} ${x-9},${y+2} ${x+9},${y+2}`,
               izq:`${x-16},${y} ${x-2},${y-9} ${x-2},${y+9}`,
               der:`${x+16},${y} ${x+2},${y-9} ${x+2},${y+9}`}[dir];
    return `<polygon points="${p}" fill="${color}"/>`;
  }
};
const AZUL = "#2d6fd8", NARANJA = "#e8762c", VERDE = "#1e7d43";
const svg = inner => `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" role="img">
  <rect width="300" height="300" fill="#dfe6ee"/>${D.calles}${inner}</svg>`;

const DIAGRAMAS = {
  // 1. Alto de 4 vías, dos autos llegan al mismo tiempo (el otro a su derecha)
  "cuatro-altos-derecha": svg(
    D.alto(98,198) + D.alto(202,102) + D.alto(202,198) + D.alto(98,102) +
    D.auto("arriba",150,235,AZUL) + D.flecha("arriba",150,205) +
    D.auto("izq",235,150,NARANJA) + D.flecha("izq",205,150)),

  // 2. Alto de 4 vías: usted va a dar vuelta a la izquierda, el otro sigue derecho
  "cuatro-altos-izquierda": svg(
    D.alto(98,198) + D.alto(202,102) + D.alto(202,198) + D.alto(98,102) +
    D.auto("arriba",150,235,AZUL) +
    `<path d="M150 215 Q150 150 108 150" stroke="${AZUL}" stroke-width="4" fill="none" stroke-dasharray="7 5"/>` +
    D.flecha("izq",112,150,AZUL) +
    D.auto("abajo",150,62,NARANJA) + D.flecha("abajo",150,92)),

  // 3. Intersección en T — usted viene por la calle que termina
  "t-interseccion": svg(
    `<rect x="105" y="0" width="90" height="110" fill="#dfe6ee"/>
     <line x1="150" y1="0" x2="150" y2="105" stroke="#dfe6ee" stroke-width="6"/>` +
    D.auto("arriba",150,235,AZUL) + D.flecha("arriba",150,205) +
    D.auto("izq",240,133,NARANJA) + D.flecha("izq",212,133) +
    `<rect x="105" y="103" width="90" height="6" fill="#fff"/>`),

  // 4. Intersección sin señales ni semáforos — el otro viene por su derecha
  "sin-control": svg(
    D.auto("arriba",150,235,AZUL) + D.flecha("arriba",150,205) +
    D.auto("izq",235,150,NARANJA) + D.flecha("izq",205,150)),

  // 5. Vuelta a la izquierda con luz verde redonda (no protegida)
  "izquierda-verde": svg(
    `<rect x="132" y="16" width="36" height="24" rx="5" fill="#22303f"/>
     <circle cx="150" cy="28" r="7" fill="#1e7d43"/>` +
    D.auto("arriba",150,235,AZUL) +
    `<path d="M150 215 Q150 150 108 150" stroke="${AZUL}" stroke-width="4" fill="none" stroke-dasharray="7 5"/>` +
    D.flecha("izq",112,150,AZUL) +
    D.auto("abajo",168,72,NARANJA) + D.flecha("abajo",168,104)),

  // 6. Glorieta / rotonda — usted va entrando, otro ya circula
  "glorieta": svg(
    `<circle cx="150" cy="150" r="72" fill="#9aa3ad"/>
     <circle cx="150" cy="150" r="62" fill="#dfe6ee"/>
     <circle cx="150" cy="150" r="34" fill="#8fbf72" stroke="#fff" stroke-width="3"/>
     <path d="M150 92 A58 58 0 0 1 208 150" stroke="#fff" stroke-width="4" fill="none"/>` +
    D.auto("arriba",150,240,AZUL) + D.flecha("arriba",150,212) +
    D.auto("izq",150,96,NARANJA) +
    `<path d="M196 150 A46 46 0 0 1 150 196" stroke="${NARANJA}" stroke-width="4" fill="none" stroke-dasharray="7 5"/>`),

  // 7. Peatón en el cruce mientras usted da vuelta a la derecha
  "peaton-vuelta": svg(
    `<rect x="198" y="108" width="9" height="84" fill="#fff"/>
     <rect x="213" y="108" width="9" height="84" fill="#fff"/>
     <rect x="228" y="108" width="9" height="84" fill="#fff"/>` +
    D.auto("arriba",150,235,AZUL) +
    `<path d="M150 215 Q150 168 196 168" stroke="${AZUL}" stroke-width="4" fill="none" stroke-dasharray="7 5"/>` +
    D.flecha("der",196,168,AZUL) +
    `<circle cx="217" cy="126" r="11" fill="${VERDE}" stroke="#22303f" stroke-width="2.5"/>
     <rect x="210" y="139" width="14" height="24" rx="6" fill="${VERDE}" stroke="#22303f" stroke-width="2.5"/>` +
    D.flecha("abajo",217,180,VERDE)),

  // 8. Autobús escolar con luces rojas en carretera dividida
  "bus-dividida": svg(
    `<rect x="0" y="105" width="300" height="90" fill="#9aa3ad"/>
     <rect x="0" y="144" width="300" height="12" fill="#8fbf72" stroke="#fff" stroke-width="2"/>
     <rect x="105" y="0" width="90" height="300" fill="#dfe6ee"/>
     <rect x="60" y="112" width="72" height="28" rx="5" fill="#f5c518" stroke="#22303f" stroke-width="2.5"/>
     <circle cx="66" cy="110" r="5" fill="#c0392b"/><circle cx="126" cy="110" r="5" fill="#c0392b"/>` +
    D.auto("der",210,126,NARANJA) +
    D.auto("izq",210,174,AZUL) + D.flecha("izq",178,174,AZUL)),

  // 9. Vehículo de emergencia detrás de usted en una intersección
  "emergencia": svg(
    D.auto("arriba",150,205,AZUL) + D.flecha("arriba",150,178) +
    `<rect x="132" y="240" width="36" height="46" rx="6" fill="#c0392b" stroke="#22303f" stroke-width="2.5"/>
     <circle cx="140" cy="236" r="5" fill="#2d6fd8"/><circle cx="160" cy="236" r="5" fill="#c0392b"/>`),

  // 10. Dos autos de frente, ambos van a dar vuelta a la izquierda
  "dos-izquierdas": svg(
    D.auto("arriba",168,235,AZUL) +
    `<path d="M168 215 Q168 160 112 160" stroke="${AZUL}" stroke-width="4" fill="none" stroke-dasharray="7 5"/>` +
    D.flecha("izq",116,160,AZUL) +
    D.auto("abajo",132,62,NARANJA) +
    `<path d="M132 85 Q132 140 188 140" stroke="${NARANJA}" stroke-width="4" fill="none" stroke-dasharray="7 5"/>` +
    D.flecha("der",188,140,NARANJA))
};
