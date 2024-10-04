import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import Image from 'next/image';

import astro from '../../public/icons/astro.svg';
import django from '../../public/icons/django.svg';
import docker from '../../public/icons/docker.svg';
import flutter from '../../public/icons/flutter.svg'
import framer from '../../public/icons/framer.svg';
import go from '../../public/icons/go.svg';
import javascript from '../../public/icons/javascript.svg';
import kubernetes from '../../public/icons/kubernetes.svg';
import nextjs from '../../public/icons/next-js.svg';
import nodejs from '../../public/icons/node-js.svg';
import python from '../../public/icons/python.svg';
import react from '../../public/icons/react.svg';
import rust from '../../public/icons/rust.svg';
import typescript from '../../public/icons/typescript.svg';
import vim from '../../public/icons/vim.svg';
import vue from '../../public/icons/vue-js.svg';

function ParallaxText({ baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax overflow-hidden">
      <motion.div className="flex gap-20 opacity-30 whitespace-nowrap flex-nowrap mb-10" style={{ x }}>
        {[...Array(2)].map((_, index) => (
          <>
            <Image key={`astro-${index}`} src={astro} className="w-20 h-20" alt="Astro" />
            <Image key={`django-${index}`} src={django} className="w-20 h-20" alt="Django" />
            <Image key={`docker-${index}`} src={docker} className="w-20 h-20" alt="Docker" />
            <Image key={`flutter-${index}`} src={flutter} className="w-20 h-20" alt="Flutter" />
            <Image key={`framer-${index}`} src={framer} className="w-20 h-20" alt="Framer" />
            <Image key={`go-${index}`} src={go} className="w-20 h-20" alt="Go" />
            <Image key={`javascript-${index}`} src={javascript} className="w-20 h-20" alt="JavaScript" />
            <Image key={`kubernetes-${index}`} src={kubernetes} className="w-20 h-20" alt="Kubernetes" />
            <Image key={`nextjs-${index}`} src={nextjs} className="w-20 h-20" alt="Next.js" />
            <Image key={`nodejs-${index}`} src={nodejs} className="w-20 h-20" alt="Node.js" />
            <Image key={`python-${index}`} src={python} className="w-20 h-20" alt="Python" />
            <Image key={`react-${index}`} src={react} className="w-20 h-20" alt="React" />
            <Image key={`rust-${index}`} src={rust} className="w-20 h-20" alt="Rust" />
            <Image key={`typescript-${index}`} src={typescript} className="w-20 h-20" alt="TypeScript" />
            <Image key={`vim-${index}`} src={vim} className="w-20 h-20" alt="Vim" />
            <Image key={`vue-${index}`} src={vue} className="w-20 h-20" alt="Vue" />
          </>
        ))}
      </motion.div>
    </div>
  );
}

export function ParallaxTech() {
  return (
    <section>
      <ParallaxText baseVelocity={-5} />
      <ParallaxText baseVelocity={10} />
    </section>
  );
}
