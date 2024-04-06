import * as THREE from "three";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import WebGL from "three/addons/capabilities/WebGL.js";

let mixer;

const clock = new THREE.Clock();

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x3f3f3f);

// add light

const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 3, 5);
camera.lookAt(0, 2, 0);

const geometry = new THREE.SphereGeometry(6, 32, 16);
geometry.translate(0, 2, 0);
const wireframe = new THREE.WireframeGeometry(geometry);
const line = new THREE.LineSegments(wireframe);
line.material.opacity = 1;
line.material.transparent = true;
line.material.color.set(0x191919);
scene.add(line);

const loader = new GLTFLoader();

loader.load(
  "assets/men.glb",
  function (gltf) {
    scene.add(gltf.scene);
    gltf.scene.position.set(1.5, 0, 0);
    gltf.scene.rotation.set(0, -0.5, 0);
    gltf.scene.scale.set(2, 2, 2);

    mixer = new THREE.AnimationMixer(gltf.scene);
    mixer.clipAction(gltf.animations[3]).play();
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    console.log("An error happened", error);
  }
);

window.onresize = function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
};

function animate() {
  requestAnimationFrame(animate);

  line.rotation.y += 0.001;
  line.rotation.x = -0.2;

  const delta = clock.getDelta();

  mixer.update(delta);

  renderer.render(scene, camera);
}

if (WebGL.isWebGLAvailable()) {
  animate();
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById("container").appendChild(warning);
}
