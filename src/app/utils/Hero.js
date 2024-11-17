'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

export function Hero() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      1,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(400, 400);
    renderer.setClearColor(0x000000, 0);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5).normalize();
    scene.add(directionalLight);

    const clock = new THREE.Clock();

    const loader = new FontLoader();
    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
      const textGeometry = new TextGeometry('PB', {
        font,
        size: 1,
        height: 0.5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelSegments: 5,
      });

      const textMaterial = new THREE.MeshStandardMaterial({ color: '#FFFFFF' });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);

      textMesh.position.set(-0.75, 0, 0);
      scene.add(textMesh);

      const animate = () => {
        requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        textMesh.position.y = Math.sin(elapsedTime * 1.5) * 0.5;
        textMesh.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

      animate();
    });

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      className="md:snap-section text-white container mx-auto grid md:grid-cols-2 place-content-center min-h-screen p-8 pb-20 gap-20 sm:p-20 font-[family-name:var(--font-geist-sans)] 
      bg-[url('/images/grid.png')]/75 bg-repeat bg-contain bg-fixed"
    >
      <div className="place-content-center pt-20 md:pt-0 mt-20 md:mt-0">
        <motion.p
          className="leading-7 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'linear', duration: 2 }}
        >
          Software Developer
        </motion.p>
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'linear', duration: 1, x: 0 }}
        >
          {'<'}Hello! I&apos;m
        </motion.h1>
        <motion.h1
          className="text-5xl font-bold mb-9"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'linear', duration: 1, x: 0 }}
        >
          Pratik Fandade{' />'}
        </motion.h1>
        <motion.p
          className="leading-7 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'linear', duration: 2 }}
        >
          I am a skilled <b className="text-orange-400">Software Developer</b> with experience in designing and
          crafting software applications which are Integrated with cloud to
          help solve real world problems.
        </motion.p>
        <motion.a
          className="inline-flex items-center border backdrop-blur-3xl drop-shadow-2xl rounded py-3 px-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 12,
            duration: 2,
          }}
          href="mailto:pfandade@buffalo.edu"
        >
          Contact Me <FiArrowUpRight size={20} />
        </motion.a>
      </div>
      <motion.div
        className="place-content-center"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1.1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{
          scale: 0.8,
          borderRadius: '100%',
        }}
        style={{ origin: 0.5 }}
      >
        <Image className="aspect-square object-cover backdrop-blur-3xl drop-shadow-2xl backdrop-brightness-110 rounded-full" src="/images/hero.png" width={500} height={500} alt="hero" />
        {/*<div ref={mountRef} />*/}
      </motion.div>
    </div>
  );
}
