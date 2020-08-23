console.log("\n\n\n Enjoy your stay ^.^ \n\n\n");

const shapeColor = 0xc7b9ff;
const edgeColor = 0xc7b9ff;
const singleGeometry = new THREE.Geometry();

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
  opacity: 0.04,
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
renderer.setClearColor("#fff");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Handle browser resize
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

const cylinderOuterRadius = 2;
const cylinderInnerRadius = cylinderOuterRadius * 0.82;
const numCurves = 16;
const block = 0.1;

// Base
const extrudeSettings = {
  depth: block * 4,
  steps: 1,
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

// Create object group
const sculpture = new THREE.Group();

// Pillar
const pillarExtrudeSettings = {
  depth: block * 17,
  steps: 1,
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
  pillar.translateZ(block * 4);

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
sculpture.add(mergedMesh);
const edges = new THREE.EdgesGeometry(singleBufGeometry);
const lines = new THREE.LineSegments(
  edges,
  new THREE.LineBasicMaterial({ color: edgeColor })
);
sculpture.add(lines);
sculpture.rotation.x = -0.9;
scene.add(sculpture);

// Render the scene
const render = () => {
  requestAnimationFrame(render);
  controls.update();
  sculpture.rotation.z += 0.003;
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
