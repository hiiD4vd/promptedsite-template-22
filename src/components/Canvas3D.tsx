import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

export const Canvas3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 4, 18);

    // 2. High-Performance WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 3. Cinematic Architectural Lighting
    const ambientLight = new THREE.AmbientLight(0xfff8ed, 1.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfff1dc, 3.2);
    dirLight.position.set(14, 26, 18);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const blueRimLight = new THREE.DirectionalLight(0x3b60c5, 2.0);
    blueRimLight.position.set(-16, 10, -12);
    scene.add(blueRimLight);

    const terracottaFill = new THREE.PointLight(0xe76051, 1.4, 50);
    terracottaFill.position.set(0, -1, 10);
    scene.add(terracottaFill);

    // 4. Main Transform Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Ground Grid Helper
    const gridHelper = new THREE.GridHelper(50, 50, 0x3b60c5, 0xd0c4ae);
    gridHelper.position.y = -5.0;
    rootGroup.add(gridHelper);

    // Architectural floor planes
    for (let i = -3.5; i <= 4.5; i += 2) {
      const planeGeom = new THREE.PlaneGeometry(6, 6);
      const planeMat = new THREE.MeshBasicMaterial({
        color: 0xe76051,
        transparent: true,
        opacity: 0.12,
        side: THREE.DoubleSide
      });
      const p = new THREE.Mesh(planeGeom, planeMat);
      p.rotation.x = Math.PI / 2;
      p.position.y = i;
      rootGroup.add(p);
    }

    // 5. Load Real Building GLB Model via GLTFLoader + DRACOLoader
    let mixer: THREE.AnimationMixer | null = null;
    let buildingModel: THREE.Group | null = null;
    let animationAction: THREE.AnimationAction | null = null;

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/');

    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    const edgeLineMat = new THREE.LineBasicMaterial({
      color: 0x3b60c5,
      transparent: true,
      opacity: 0.55
    });

    gltfLoader.load(
      '/webgl/models/building.glb',
      (gltf) => {
        buildingModel = gltf.scene;

        // Auto-center and normalize bounding box
        const box = new THREE.Box3().setFromObject(buildingModel);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 12 / (maxDim || 1);
        buildingModel.scale.setScalar(scale);
        buildingModel.position.x = -center.x * scale;
        buildingModel.position.y = -center.y * scale + 1.2;
        buildingModel.position.z = -center.z * scale;

        // Traverse meshes to configure materials & add CAD blueprint edges
        buildingModel.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            const name = (mesh.name || '').toLowerCase();
            if (name.includes('tree')) {
              mesh.material = new THREE.MeshStandardMaterial({
                color: 0xe76051,
                roughness: 0.7,
                metalness: 0.1
              });
            } else if (name.includes('facade')) {
              mesh.material = new THREE.MeshStandardMaterial({
                color: 0xffffff,
                transparent: true,
                opacity: 0.85,
                roughness: 0.2,
                metalness: 0.3
              });
            } else {
              mesh.material = new THREE.MeshStandardMaterial({
                color: 0xfaf6ed,
                roughness: 0.5,
                metalness: 0.1
              });
            }

            try {
              const edges = new THREE.EdgesGeometry(mesh.geometry, 25);
              const wireframe = new THREE.LineSegments(edges, edgeLineMat);
              mesh.add(wireframe);
            } catch (e) {
              // Ignore unsupported geometry
            }
          }
        });

        // Initialize Animation Mixer if animations exist
        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(buildingModel);
          animationAction = mixer.clipAction(gltf.animations[0]);
          animationAction.play();
        }

        rootGroup.add(buildingModel);
      },
      undefined,
      (err) => {
        console.warn('GLB load note:', err);
      }
    );

    // 6. Scroll & Cursor Parallax Handlers
    let targetRotationY = 0;
    let targetCameraY = 4;
    let targetCameraZ = 18;
    let targetGroupX = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight || 1;
      const progress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
      const isDesktop = window.innerWidth >= 1024;

      targetRotationY = progress * Math.PI * 2.8;

      if (progress < 0.12) {
        // Hero
        targetGroupX = 0;
        targetCameraY = 4;
        targetCameraZ = 18;
      } else if (progress < 0.65) {
        // Features scrollytelling: position building to the right on desktop
        targetGroupX = isDesktop ? 2.5 : 0;
        targetCameraY = 3.2;
        targetCameraZ = 15.5;
      } else {
        // Pricing / FAQs / Footer
        targetGroupX = 0;
        targetCameraY = 6;
        targetCameraZ = 22;
      }

      if (mixer && animationAction) {
        const clip = animationAction.getClip();
        mixer.setTime(progress * clip.duration);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      handleScroll();
    };
    window.addEventListener('resize', handleResize);

    handleScroll();

    // 7. Render Loop with Smooth Damping
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      clock.getDelta();

      // Smooth damping
      rootGroup.position.x += (targetGroupX - rootGroup.position.x) * 0.05;
      rootGroup.rotation.y += (targetRotationY - rootGroup.rotation.y) * 0.05;
      camera.position.y += (targetCameraY - camera.position.y) * 0.05;
      camera.position.z += (targetCameraZ - camera.position.z) * 0.05;

      // Parallax
      camera.position.x += (mouseX * 1.2 - camera.position.x) * 0.05;
      camera.lookAt(rootGroup.position.x * 0.4, 0.8, 0);

      // Subtle ambient breathe
      rootGroup.rotation.x = 0.14 + Math.sin(Date.now() * 0.0008) * 0.015 + mouseY * 0.03;

      renderer.render(scene, camera);
    };
    animate();

    // 8. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      dracoLoader.dispose();
      edgeLineMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};
