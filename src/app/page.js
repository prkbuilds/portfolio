'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { NavBar } from './utils/Navbar';
import { Hero } from './utils/Hero';
import { ParallaxTech } from './utils/TechStack';
import { Projects } from './utils/Projects';
import { Experience } from './utils/Experience';
import { AboutMe } from './utils/AboutMe';

function LazyComponent({ children }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
      {inView ? children : null}
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const interBubble = document.querySelector('.interactive');
    if (!interBubble) return;

    const onMouseMove = async (event) => {
      const tgX = event.clientX;
      const tgY = event.clientY;
      interBubble.style.transform = `translate(${tgX}px, ${tgY}px)`;
    }

    let isScrolling;

    const onScroll = () => {
      document.body.classList.add('scrolling');

      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        document.body.classList.remove('scrolling');
      }, 100);
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <main className="w-100 md:snap-container">
      <title>Pratik Fandade</title>
      <div class="gradient-bg">
        {/*<svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>*/}
        <div class="gradients-container">
          <div class="g1"></div>
          <div class="g2"></div>
          <div class="g3"></div>
          <div class="g4"></div>
          <div class="g5"></div>
          <div class="interactive"></div>
        </div>
      </div>
      <NavBar />
      <LazyComponent>
        <Hero />
      </LazyComponent>
      <LazyComponent>
        <ParallaxTech />
      </LazyComponent>
      <LazyComponent>
        <Projects />
      </LazyComponent>
      <LazyComponent>
        <Experience />
      </LazyComponent>
      <LazyComponent>
        <AboutMe />
      </LazyComponent>
    </main>
  );
}
