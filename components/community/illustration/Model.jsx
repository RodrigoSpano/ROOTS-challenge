import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const Model = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentRef = mountRef.current;
    const { clientWidth: width, clientHeight: height } = currentRef;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(25, width / height, 1, 1000);
    scene.add(camera);
    camera.position.z = 8;

    const loader = new GLTFLoader();
    loader.load('/stylized_planet/scene.gltf', (gltf) => {
      let model = gltf.scene;
      model.scale.set(1.3, 1.3, 1.3);
      scene.add(model);
    });

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(width, height);
    currentRef.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    //light
    const pointLight = new THREE.PointLight(0xff0000, 1);
    pointLight.position.set(8, 8, 8);
    scene.add(pointLight);

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
      className='w-[400px] min-h-[400px] xl:w-[600px] xl:h-[700px] flex justify-center hover:cursor-grab '
    ></div>
  );
};

export default Model;
