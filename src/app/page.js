'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import { useInView } from 'react-intersection-observer';

import { NavBar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { AboutMe } from './components/AboutMe';

function LazyComponent({ children }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return <div ref={ref}>{inView ? children : null}</div>;
}

export default function Home() {
  useEffect(() => {
    const interBubble = document.querySelector('.interactive');
    if (!interBubble) return;

    const onMouseMove = async (event) => {
      const tgX = event.clientX;
      const tgY = event.clientY;
      interBubble.style.transform = `translate(${tgX}px, ${tgY}px)`;
    };

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
    <main className="w-100 md:snap-container bg-[url('https://www.transparenttextures.com/patterns/beige-paper.png')] bg-repeat bg-fixed">
      <Head>
        <title>
          Pratik Fandade - Full Stack Developer & Open-Source Contributor
        </title>
        <meta
          name="description"
          content="Pratik Fandade is a full stack software developer specializing in Rust, JavaScript, and open-source contributions. Explore my portfolio, projects, and blog."
        />
        <meta
          name="keywords"
          content="Pratik Fandade, Full Stack Developer, Rust Developer, JavaScript, Open-Source Contributor, Portfolio"
        />
        <meta name="author" content="Pratik Fandade" />

        {/* Open Graph meta tags for social media previews */}
        <meta
          property="og:title"
          content="Pratik Fandade - Full Stack Developer & Open-Source Contributor"
        />
        <meta
          property="og:description"
          content="Explore Pratik Fandade's portfolio, including full-stack development projects, open-source contributions, and tech expertise in Rust, JavaScript, and more."
        />
        <meta
          property="og:image"
          content="https://pratikfandade.vercel.app/_next/image?url=%2Fimages%2Fhero.png&w=1080&q=75"
        />
        <meta property="og:url" content="https://pratikfandade.vercel.app" />

        {/* Twitter card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Pratik Fandade - Full Stack Developer & Open-Source Contributor"
        />
        <meta
          name="twitter:description"
          content="Explore Pratik Fandade's portfolio, including full-stack development projects, open-source contributions, and tech expertise in Rust, JavaScript, and more."
        />
        <meta
          name="twitter:image"
          content="https://pratikfandade.vercel.app/_next/image?url=%2Fimages%2Fhero.png&w=1080&q=75"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="BjVhy_yw7k0zpqLS_jgKMJxfE-CqUjIbOnW7ZGTcl0k"
        />
      </Head>
      <title>Pratik Fandade</title>
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
      <NavBar />
      <LazyComponent>
        <Hero />
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
