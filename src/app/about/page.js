'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { NavBar } from '../utils/Navbar';
import { ParallaxTech } from '../utils/TechStack';

export default function About() {
  return (
    <main className="w-100">
      <title>Pratik Fandade</title>
      <NavBar />
      <div
        className="grid md:grid-cols-2 place-content-center min-h-screen p-8 pb-20 gap-20 sm:p-20 font-[family-name:var(--font-geist-sans)] 
        bg-[url('/images/grid.png')]/75 bg-repeat bg-contain bg-fixed"
      >
        <div
          id="about-me"
          className="place-content-center pt-20 md:pt-0 mt-20 md:mt-0"
        >
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
            {'<'}Heloo! I&apos;m
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
            I am a skilled Software Developer with experience in designing and
            crafting software applications which are Integrated with cloud to
            help solve real world problems. I specialize in front-end and
            back-end development using ReactJS/NextJS/VueJS/Astro, gRPC/Rest,
            NodeJS/Django and Micro-services & MVC architecture. My expertise
            extends to scaling cloud applications with GCP and AWS leveraging
            Docker, Kubernetes, RabbitMQ & BigQuery, and I have a strong
            interest in cryptography and computer security.
          </motion.p>
          <motion.button
            className="button inline-flex items-center bg-primary text-white rounded py-3 px-6"
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
            {' '}
            Contact Me <FiArrowUpRight size={20} />{' '}
          </motion.button>
        </div>
        <motion.div
          className="place-content-center"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{
            scale: 0.8,
            borderRadius: '100%',
          }}
          style={{ origin: 0.5 }}
        >
          <Image
            className="aspect-square object-cover rounded-lg"
            src="/images/hero.jpeg"
            width={500}
            height={500}
            alt="hero"
          />
        </motion.div>
      </div>
      <ParallaxTech />
    </main>
  );
}
