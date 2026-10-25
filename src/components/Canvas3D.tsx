import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Canvas3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 5, 20);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xf6edda, 2.0);
    dirLight.position.set(10, 20, 15);
    scene.add(dirLight);

    const blueLight = new THREE.DirectionalLight(0x3b60c5, 1.0);
    blueLight.position.set(-10, -5, -10);
    scene.add(blueLight);

    // 4. Architectural Geometry Group
    const group = new THREE.Group();
    scene.add(group);

    // Wireframe architectural building massing
    const buildingGeom = new THREE.BoxGeometry(6, 12, 6);
    const edges = new THREE.EdgesGeometry(buildingGeom);
    const lineMat = new THREE.LineBasicMaterial({ color: 0x3b60c5, transparent: true, opacity: 0.6 });
    const wireframe = new THREE.LineSegments(edges, lineMat);
    wireframe.position.set(0, 0, 0);
    group.add(wireframe);

    // Architectural floor levels
    for (let i = -5; i <= 5; i += 2) {
      const planeGeom = new THREE.PlaneGeometry(5.8, 5.8);
      const planeMat = new THREE.MeshBasicMaterial({
        color: 0xe76051,
        transparent: true,
        opacity: 0.15,
        side: THREE.DoubleSide
      });
      const floorPlane = new THREE.Mesh(planeGeom, planeMat);
      floorPlane.rotation.x = Math.PI / 2;
      floorPlane.position.y = i;
      group.add(floorPlane);
    }

    // Grid Floor
    const gridHelper = new THREE.GridHelper(40, 40, 0x3b60c5, 0xc4b9a3);
    gridHelper.position.y = -6;
    scene.add(gridHelper);

    // 5. Scroll Interaction
    let targetRotationY = 0;
    let targetPositionY = 0;

    const handleScroll = () => {
      const scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight || 1);
      targetRotationY = scrollProgress * Math.PI * 2;
      targetPositionY = scrollProgress * 4;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 6. Resize Interaction
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // 7. Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth dampening
      group.rotation.y += (targetRotationY - group.rotation.y) * 0.05;
      group.position.y += (targetPositionY - group.position.y) * 0.05;
      group.rotation.x = 0.2 + Math.sin(Date.now() * 0.001) * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    // 8. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      buildingGeom.dispose();
      lineMat.dispose();
      edges.dispose();
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
