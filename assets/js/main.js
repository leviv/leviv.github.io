console.log("\n\n\n Enjoy your stay ^.^ \n\n\n");

const shapeColor = 0xc7b9ff;
const shapeColorDark = 0xc89cff;
const edgeColor = 0xc7b9ff;
const edgeColorDark = 0xc89cff;
const bgColor = 0xffffff;
const bgColorDark = 0x2c303a;
const singleGeometry = new THREE.Geometry();

const darkMediaOpt = "(prefers-color-scheme: dark)";

// Event listener to look for dark theme change
window.matchMedia(darkMediaOpt).addEventListener("change", (e) => {
  if (e.matches) {
    renderer.setClearColor(bgColorDark);
    renderer.render(scene, camera);
  } else {
    renderer.setClearColor(bgColor);
    renderer.render(scene, camera);
  }
});

// Construct three.js objects
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ antialias: true });
const material = new THREE.MeshLambertMaterial({
  color: shapeColor,
  opacity: 0.05,
  transparent: true,
});

// Set camera
camera.position.z = 5;
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Add a light
const light = new THREE.PointLight(0xffffff, 1, 500);
light.position.set(10, 0, 25);
scene.add(light);

// Set renderer properties
// Check for dark theme
if (window.matchMedia && window.matchMedia(darkMediaOpt).matches) {
  renderer.setClearColor(bgColorDark);
} else {
  renderer.setClearColor(bgColor);
}

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Handle browser resize
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

const block = 0.1;
const circumference = 96;
const pillarDim = 4;
const pillarHeight = 17;
const baseHeight = 4;
const cylinderInnerRadius = (circumference * block) / 2 / Math.PI;
const cylinderOuterRadius = cylinderInnerRadius + pillarDim * block;
const numCurves = 16;

// Base
const extrudeSettings = {
  depth: block * baseHeight,
  bevelEnabled: false,
  curveSegments: numCurves,
};

const circle = new THREE.Shape();
circle.absarc(0, 0, cylinderOuterRadius, 0, Math.PI * 2, 0, false);

const holePath = new THREE.Path();
holePath.absarc(0, 0, cylinderInnerRadius, 0, Math.PI * 2, true);
circle.holes.push(holePath);

const cylinder = new THREE.ExtrudeGeometry(circle, extrudeSettings);
const base = new THREE.Mesh(cylinder, material);
singleGeometry.merge(base.geometry, base.matrix);

// Pillar
const pillarExtrudeSettings = {
  depth: block * pillarHeight,
  bevelEnabled: false,
  curveSegments: numCurves,
};
const numPillars = 8;
const pillarLength = Math.PI / 12;
let pillarStart = 0;
let pillarEnd = pillarLength;

for (let i = 0; i < numPillars; i++) {
  // Get the two arcs that form the pillar
  const outerPillarShape = new THREE.Shape();
  outerPillarShape.absarc(
    0,
    0,
    cylinderOuterRadius,
    pillarStart,
    pillarEnd,
    0,
    false
  );
  const innerPillarShape = new THREE.Shape();
  innerPillarShape.absarc(
    0,
    0,
    cylinderInnerRadius,
    pillarStart,
    pillarEnd,
    0,
    false
  );

  // Get the vertices from the two arcs
  const vertices = [];
  const outerVertices = outerPillarShape.extractPoints().shape;
  const innerVertices = innerPillarShape.extractPoints().shape.reverse();
  for (let i = 0; i < outerVertices.length; i += Math.floor(numCurves / 2)) {
    vertices.push(outerVertices[i]);
  }

  for (let i = 0; i < outerVertices.length; i += Math.floor(numCurves / 2)) {
    vertices.push(innerVertices[i]);
  }

  // Extrude the shape
  const pillarShape = new THREE.Shape(vertices);
  const pillarGeo = new THREE.ExtrudeGeometry(
    pillarShape,
    pillarExtrudeSettings
  );
  const pillar = new THREE.Mesh(pillarGeo, material);
  pillar.translateZ(block * baseHeight);

  // Add to the sculpture group
  pillar.updateMatrix();
  singleGeometry.merge(pillar.geometry, pillar.matrix);

  pillarStart += pillarLength * 3;
  pillarEnd += pillarLength * 3;
}

const singleBufGeometry = new THREE.BufferGeometry().fromGeometry(
  singleGeometry
);
const mergedMesh = new THREE.Mesh(singleBufGeometry, material);

// Create object group
const sculpture = new THREE.Group();
sculpture.add(mergedMesh);
const edges = new THREE.EdgesGeometry(singleBufGeometry);
const lines = new THREE.LineSegments(
  edges,
  new THREE.LineBasicMaterial({ color: edgeColor })
);
sculpture.add(lines);
sculpture.rotation.x = 0;
sculpture.position.x = -2.5;
camera.position.z = 3;

scene.add(sculpture);

// Render the scene
const render = () => {
  requestAnimationFrame(render);
  controls.update();
  sculpture.rotation.z += 0.003; // Slowly tilt the structure on each frame
  renderer.render(scene, camera);
};

render();

let zoomed = false;
let inProgress = false;

function aboutAnimation() {
  if (zoomed) {
    aboutCloseAnimation();
  }

  if (!inProgress) {
    inProgress = true;
    controls.reset();
    this.tl = new TimelineMax().eventCallback("onComplete", () => {
      zoomed = true;
      inProgress = false;
    });
    this.tl.to(sculpture.position, 2, { x: -2.5, ease: Expo.easeOut });
    this.tl.to(sculpture.rotation, 1, { x: 0, ease: Expo.easeOut }, "=-2");
    this.tl.to(camera.position, 1, { z: 3, ease: Expo.easeOut }, "=-2");
    this.tl.to(
      document.getElementById("about-info"),
      1,
      { opacity: 1, display: "block" },
      "=-2"
    );
  }
}

function aboutCloseAnimation() {
  if (!inProgress) {
    inProgress = true;
    controls.reset();
    this.tl = new TimelineMax().eventCallback("onComplete", () => {
      zoomed = false;
      inProgress = false;
    });
    this.tl.to(sculpture.position, 2, { x: 0, ease: Expo.easeOut });
    this.tl.to(sculpture.rotation, 1, { x: -0.9, ease: Expo.easeOut }, "=-2");
    this.tl.to(camera.position, 1, { z: 5, ease: Expo.easeOut }, "=-2");
    this.tl.to(
      document.getElementById("about-info"),
      0.5,
      { opacity: 0, display: "none" },
      "=-2"
    );
  }
}
