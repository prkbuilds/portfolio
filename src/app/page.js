'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { NavBar } from './utils/Navbar';
import { ParallaxTech } from './utils/TechStack';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchGitHubRepos() {
      const response = await fetch(
        'https://api.github.com/users/pratikfandade/repos'
      );
      const repos = await response.json();

      const specificRepos = repos.filter(
        (repo) => repo.topics && repo.topics.includes('portfolio')
      );
      console.log(specificRepos);
      setRepos(specificRepos);
    }

    fetchGitHubRepos();
  }, []);

  return (
    <main className="w-100">
      <title>Pratik Fandade</title>
      <NavBar />
      <div
        className="grid md:grid-cols-2 place-content-center min-h-screen p-8 pb-20 gap-20 sm:p-20 font-[family-name:var(--font-geist-sans)] 
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
            help solve real world problems.
          </motion.p>
          <motion.a
            className="inline-flex items-center bg-primary text-white rounded py-3 px-6"
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
      <div
        id="projects"
        className="min-h-screen place-content-center p-8 pb-20 gap-20 sm:p-20 font-[family-name:var(--font-geist-sans)] 
        bg-repeat bg-contain bg-fixed"
      >
        <div className="place-content-center pt-20">
          <motion.h1
            className="text-5xl font-bold mb-9"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'linear', duration: 1, x: 0 }}
          >
            Projects
          </motion.h1>
          <div className="project-list grid grid-cols-1 md:grid-cols-3 gap-4">
            {repos.map((repo) => (
              <Card key={repo.id}>
                <CardHeader>
                  <CardTitle>{repo.name}</CardTitle>
                  <CardDescription>{repo.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <motion.a
                    className="inline-flex items-center bg-primary text-white rounded py-3 px-6"
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
                    href={repo.html_url}
                  >
                    View on GitHub <FiArrowUpRight size={20} />
                  </motion.a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div
        id="about-me"
        className="place-content-center min-h-screen p-8 pb-20 gap-20 sm:p-20 font-[family-name:var(--font-geist-sans)] 
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
            architecture. My expertise extends to scaling cloud applications
            with GCP and AWS, and I have a strong interest in cryptography and
            computer security.
          </motion.p>
          <motion.p
            className="leading-7 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'linear', duration: 2 }}
          >
            I’ve contributed to the development of enterprise-level software
            that supports the sale of 10M+ industry-leading products to 100,000+
            businesses worldwide. Recently, I completed a Stock Market Analysis
            & Prediction project, presented at IC-ICN 2022, which underscores my
            commitment to leveraging advanced technologies for impactful
            solutions.
          </motion.p>
          <motion.p
            className="leading-7 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'linear', duration: 2 }}
          >
            In addition to my professional work, I am passionate about
            open-source contributions. Currently, I contribute as a reviewer on
            the <a href="https://github.com/diesel-rs/diesel" target="_blank">Diesel</a> repository, helping to ensure quality Rust code for a
            robust database toolkit. This experience has enhanced my
            collaboration skills and expanded my knowledge in Rust development.
          </motion.p>
          <motion.p
            className="leading-7 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'linear', duration: 2 }}
          >
            As a Machine Learning enthusiast, I actively engage in projects to
            deepen my expertise and stay abreast of emerging technologies. I am
            always open to exploring new opportunities and collaborations in
            tech.
          </motion.p>
        </div>
      </div>
    </main>
  );
}
