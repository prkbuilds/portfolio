'use client';

import { motion } from 'framer-motion';

export function AboutMe() {
  return (
    <div
      id="about-me"
      className="snap-section container mx-auto text-white place-content-center min-h-screen p-8 pb-20 gap-20 sm:p-20 font-[family-name:var(--font-geist-sans)] 
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
          className="text-5xl font-bold mb-9"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'linear', duration: 1, x: 0 }}
        >
          About Me
        </motion.h1>
        <motion.p
          className="leading-7 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'linear', duration: 2 }}
        >
          I am a skilled Software Developer with experience in designing and
          analyzing web applications. I specialize in front-end and back-end
          development using the MERN stack, Material-UI, REST APIs, and MVC
          architecture. My expertise extends to scaling cloud applications with
          GCP and AWS, and I have a strong interest in cryptography and computer
          security.
        </motion.p>
        <motion.p
          className="leading-7 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'linear', duration: 2 }}
        >
          I’ve contributed to the development of enterprise-level software that
          supports the sale of 10M+ industry-leading products to 100,000+
          businesses worldwide. Recently, I completed a Stock Market Analysis &
          Prediction project, presented at IC-ICN 2022, which underscores my
          commitment to leveraging advanced technologies for impactful
          solutions.
        </motion.p>
        <motion.p
          className="leading-7 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'linear', duration: 2 }}
        >
          In addition to my professional work, I am passionate about open-source
          contributions. Currently, I contribute as a reviewer on the{' '}
          <a
            className="underline underline-offset-2"
            href="https://github.com/diesel-rs/diesel"
            target="_blank"
          >
            Diesel
          </a>{' '}
          repository, helping to ensure quality Rust code for a robust database
          toolkit. This experience has enhanced my collaboration skills and
          expanded my knowledge in Rust development.
        </motion.p>
        <motion.p
          className="leading-7 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'linear', duration: 2 }}
        >
          As a Machine Learning enthusiast, I actively engage in projects to
          deepen my expertise and stay abreast of emerging technologies. I am
          always open to exploring new opportunities and collaborations in tech.
        </motion.p>
      </div>
    </div>
  );
}
