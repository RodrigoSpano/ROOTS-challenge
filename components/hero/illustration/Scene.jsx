import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const Scene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentRef = mountRef.current;
    const { clientWidth: width, clientHeight: height } = currentRef;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(25, width / height, 1, 1000);
    scene.add(camera);
    camera.position.z = 2;
    camera.position.x = [-4];

    const loader = new GLTFLoader();
    loader.load('/models/scene.gltf', (gltf) => {
      let model = gltf.scene;
      model.scale.set(0.6, 0.6, 0.6);
      scene.add(model);
    });

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(width, height);
    currentRef.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    window.addEventListener('resize', () => {
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });

    //animate
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      currentRef.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className='w-[400px] h-[400px] xl:w-[600px] xl:h-[700px] flex justify-center hover:cursor-grab '
    ></div>
  );
};

export default Scene;
