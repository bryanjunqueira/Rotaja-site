import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default function Truck3DCanvas({ onScrollProgress }) {
  const containerRef = useRef(null);
  const scrollRef = useRef(0);
  const targetScrollRef = useRef(0);
  const truckGroupRef = useRef(null);
  const wheelsRef = useRef([]);

  const onProgressRef = useRef(onScrollProgress);
  onProgressRef.current = onScrollProgress;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const w = window.innerWidth;
    const h = window.innerHeight;

    // 1. Scene
    const scene = new THREE.Scene();

    // 2. Camera: orthographic/perspective suited for 2D screen projection
    const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
    // Camera is positioned straight on with a slight elevation for a true 3D side profile
    camera.position.set(0, 0.5, 12);
    camera.lookAt(0, 0, 0);

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.5);
    dirLight1.position.set(10, 15, 15);
    dirLight1.castShadow = true;
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x60a5fa, 1.2);
    dirLight2.position.set(-10, -5, 10);
    scene.add(dirLight2);

    const frontLight = new THREE.DirectionalLight(0xffffff, 1.5);
    frontLight.position.set(5, 5, 10);
    scene.add(frontLight);

    // 5. Build High-Detail 3D Truck Object
    const truckGroup = new THREE.Group();
    truckGroupRef.current = truckGroup;
    scene.add(truckGroup);

    const wheels = [];

    // Helper to build a complete, highly realistic procedural 3D truck
    const createProceduralTruck = () => {
      const g = new THREE.Group();

      // Materials
      const whitePaint = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.15,
        metalness: 0.1,
      });
      const cargoWhite = new THREE.MeshStandardMaterial({
        color: 0xf8fafc,
        roughness: 0.3,
        metalness: 0.05,
      });
      const darkChassis = new THREE.MeshStandardMaterial({
        color: 0x1e293b,
        roughness: 0.7,
        metalness: 0.4,
      });
      const glassMat = new THREE.MeshStandardMaterial({
        color: 0x93c5fd,
        roughness: 0.1,
        metalness: 0.9,
        transparent: true,
        opacity: 0.85,
      });
      const chromeMat = new THREE.MeshStandardMaterial({
        color: 0xe2e8f0,
        roughness: 0.1,
        metalness: 0.95,
      });
      const headlightMat = new THREE.MeshBasicMaterial({ color: 0xfffbeb });
      const blueStripeMat = new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.3 });

      // --- CARGO CONTAINER ---
      const cargoBox = new THREE.Mesh(new THREE.BoxGeometry(4.2, 2.2, 1.9), cargoWhite);
      cargoBox.position.set(-0.9, 1.5, 0);
      cargoBox.castShadow = true;
      g.add(cargoBox);

      // Blue decorative stripe along cargo
      const stripe = new THREE.Mesh(new THREE.BoxGeometry(4.22, 0.25, 1.92), blueStripeMat);
      stripe.position.set(-0.9, 1.1, 0);
      g.add(stripe);

      // --- CABIN ---
      const cab = new THREE.Mesh(new THREE.BoxGeometry(1.9, 1.9, 1.8), whitePaint);
      cab.position.set(1.9, 1.35, 0);
      cab.castShadow = true;
      g.add(cab);

      // Windshield
      const windshield = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.85, 1.7), glassMat);
      windshield.position.set(2.6, 1.65, 0);
      windshield.rotation.z = -0.15;
      g.add(windshield);

      // Side Windows
      const sideWin1 = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.65, 0.05), glassMat);
      sideWin1.position.set(1.9, 1.65, 0.92);
      g.add(sideWin1);

      const sideWin2 = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.65, 0.05), glassMat);
      sideWin2.position.set(1.9, 1.65, -0.92);
      g.add(sideWin2);

      // Front Grill / Chrome Bumper
      const bumper = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.5, 1.95), chromeMat);
      bumper.position.set(2.8, 0.65, 0);
      g.add(bumper);

      const grill = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.7, 1.3), darkChassis);
      grill.position.set(2.86, 1.1, 0);
      g.add(grill);

      // Headlights
      const hl1 = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.25, 0.35), headlightMat);
      hl1.position.set(2.86, 0.75, 0.7);
      g.add(hl1);

      const hl2 = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.25, 0.35), headlightMat);
      hl2.position.set(2.86, 0.75, -0.7);
      g.add(hl2);

      // --- CHASSIS & FUEL TANK ---
      const chassis = new THREE.Mesh(new THREE.BoxGeometry(5.8, 0.35, 1.4), darkChassis);
      chassis.position.set(0.4, 0.55, 0);
      g.add(chassis);

      const tank = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 1.4, 16), chromeMat);
      tank.rotation.z = Math.PI / 2;
      tank.position.set(0.6, 0.6, 0.85);
      g.add(tank);

      // --- WHEELS ---
      const tireMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.9 });
      const rimMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8, roughness: 0.2 });

      const createWheel = (x, z) => {
        const wheelGroup = new THREE.Group();
        const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.52, 0.32, 24), tireMat);
        tire.rotation.x = Math.PI / 2;
        wheelGroup.add(tire);

        const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.34, 16), rimMat);
        rim.rotation.x = Math.PI / 2;
        wheelGroup.add(rim);

        wheelGroup.position.set(x, 0.52, z);
        g.add(wheelGroup);
        wheels.push(wheelGroup);
      };

      // 6 Wheels (front, mid-rear, rear on both sides)
      createWheel(2.0, 0.95);
      createWheel(2.0, -0.95);
      createWheel(-1.7, 0.95);
      createWheel(-1.7, -0.95);
      createWheel(-2.8, 0.95);
      createWheel(-2.8, -0.95);

      // Ground shadow
      const shadowGeo = new THREE.PlaneGeometry(6.5, 2.8);
      const shadowMat = new THREE.MeshBasicMaterial({
        color: 0x020617,
        transparent: true,
        opacity: 0.45,
      });
      const groundShadow = new THREE.Mesh(shadowGeo, shadowMat);
      groundShadow.rotation.x = -Math.PI / 2;
      groundShadow.position.set(0.2, 0.02, 0);
      g.add(groundShadow);

      // Overall scale of the truck
      g.scale.set(0.9, 0.9, 0.9);
      return g;
    };

    // Try loading GLTF first, if loaded use it, otherwise use procedural model
    const loader = new GLTFLoader();
    loader.load(
      '/3d_truck__model.glb',
      (gltf) => {
        const model = gltf.scene;
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 5.2 / maxDim;
        model.scale.set(scale, scale, scale);

        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center.multiplyScalar(scale));

        // Ensure model faces RIGHT
        model.rotation.y = Math.PI / 2;

        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            const n = child.name.toLowerCase();
            if (n.includes('wheel') || n.includes('roda') || n.includes('tire') || n.includes('pneu')) {
              wheels.push(child);
            }
          }
        });

        // Clear and add GLTF model
        while (truckGroup.children.length > 0) {
          truckGroup.remove(truckGroup.children[0]);
        }
        truckGroup.add(model);
      },
      undefined,
      () => {
        // Use procedural truck
        const procTruck = createProceduralTruck();
        truckGroup.add(procTruck);
      }
    );

    // Add procedural truck immediately so there is NEVER an empty screen
    const procTruck = createProceduralTruck();
    truckGroup.add(procTruck);
    wheelsRef.current = wheels;

    // 6. Scroll listener
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScrollRef.current = maxScroll > 0 ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1) : 0;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 7. Animation loop
    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const diff = targetScrollRef.current - scrollRef.current;
      scrollRef.current += diff * 0.08;
      const p = scrollRef.current;

      if (onProgressRef.current) onProgressRef.current(p);

      const truck = truckGroupRef.current;
      if (!truck) {
        renderer.render(scene, camera);
        return;
      }

      // Responsive aspect-based coordinate calculation
      const aspect = window.innerWidth / window.innerHeight;
      const heroStartX = aspect > 1.2 ? 3.0 : 1.2; // Right side of hero text

      // ==========================================
      // PHASE 1: Hero -> Horizontal Exit Right (0% to 16%)
      // ==========================================
      if (p <= 0.16) {
        truck.visible = true;
        const t = p / 0.16; // 0 to 1
        const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const startX = heroStartX;
        const endX = 16.0; // Exits viewport on the right

        truck.position.x = startX + (endX - startX) * eased;
        truck.position.y = -0.4;
        truck.position.z = 0;

        // True 3D Side Profile facing RIGHT (slight 12deg angle toward camera for 3D depth)
        truck.rotation.set(0.12, 0.22, -0.02 * eased);

        const fadeScale = t > 0.88 ? 1 - (t - 0.88) / 0.12 : 1;
        truck.scale.setScalar(Math.max(0.01, fadeScale));
      }
      // ==========================================
      // HIDDEN ZONE 1: Content breathing (16% to 46%)
      // ==========================================
      else if (p > 0.16 && p < 0.46) {
        truck.visible = false;
        truck.scale.setScalar(1);
      }
      // ==========================================
      // PHASE 2: Curtain Rise Bottom to Top (46% to 64%)
      // ==========================================
      else if (p >= 0.46 && p <= 0.64) {
        truck.visible = true;
        const t = (p - 0.46) / 0.18; // 0 to 1
        const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

        const startY = -7.5;
        const endY = 8.5;

        truck.position.x = 0;
        truck.position.y = startY + (endY - startY) * eased;
        truck.position.z = 1.0;

        // Facing UP/3D elevation
        truck.rotation.set(-0.25, 0.4, 0);

        let s = 1;
        if (t < 0.08) s = t / 0.08;
        else if (t > 0.92) s = (1 - t) / 0.08;
        truck.scale.setScalar(Math.max(0.01, s));
      }
      // ==========================================
      // HIDDEN ZONE 2: Content breathing (64% to 86%)
      // ==========================================
      else if (p > 0.64 && p < 0.86) {
        truck.visible = false;
        truck.scale.setScalar(1);
      }
      // ==========================================
      // PHASE 3: Destination Arrival (86% to 100%)
      // ==========================================
      else if (p >= 0.86) {
        truck.visible = true;
        const t = (p - 0.86) / 0.14; // 0 to 1
        const eased = 1 - Math.pow(1 - t, 3);

        const startX = 14.0;
        const endX = 0; // Centers at destination hub

        truck.position.x = startX + (endX - startX) * eased;
        truck.position.y = -0.8;
        truck.position.z = 0;

        truck.rotation.set(0.12, 0.22, 0);

        const s = Math.min(eased * 1.5, 1);
        truck.scale.setScalar(s);
      }

      // Spin wheels based on movement delta
      if (wheelsRef.current.length > 0 && truck.visible) {
        const delta = diff * 35;
        wheelsRef.current.forEach((wh) => {
          wh.rotation.x += delta;
        });
      }

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const onResize = () => {
      const nw = window.innerWidth;
      const nh = window.innerHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(frameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 15,
      }}
    />
  );
}
