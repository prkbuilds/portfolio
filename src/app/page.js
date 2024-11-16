'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { NavBar } from './utils/Navbar';
import { ParallaxTech } from './utils/TechStack';
import {
  Card,
  CardContent,
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
        'https://api.github.com/users/prkbuilds/repos'
      );
      const repos = await response.json();

      const specificRepos = repos.filter(
        (repo) => repo.topics && repo.topics.includes('portfolio')
      );
      console.log(specificRepos);
      setRepos(specificRepos);
    }

    const main = document.querySelector('main');
    if (!main) return;

    const handleMouseMove = (e) => {
      let x = e.pageX - main.offsetLeft;
      let y = e.pageY - main.offsetTop;

      setTimeout(() => {
        main.style.setProperty('--x', `${x}px`);
        main.style.setProperty('--y', `${y}px`);
      }, 120);
    };

    main.addEventListener('mousemove', handleMouseMove);

    fetchGitHubRepos();

    return () => {
      main.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <main className="w-100">
      <title>Pratik Fandade</title>
      <NavBar />
      <div
        className="container mx-auto grid md:grid-cols-2 place-content-center min-h-screen p-8 pb-20 gap-20 sm:p-20 font-[family-name:var(--font-geist-sans)] 
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
            className="inline-flex items-center bg-primary text-white dark:text-black rounded py-3 px-6"
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
          className="place-content-center hidden"
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
        className="container mx-auto min-h-screen place-content-center p-8 pb-20 gap-20 sm:p-20 font-[family-name:var(--font-geist-sans)] 
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
                    className="inline-flex items-center bg-primary text-white dark:text-black rounded py-3 px-6"
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
        id="experience"
        className="container mx-auto min-h-screen place-content-center p-8 pb-20 gap-20 sm:p-20 font-[family-name:var(--font-geist-sans)] 
        bg-repeat bg-contain bg-fixed"
      >
        <motion.h1
          className="text-5xl font-bold mb-9"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'linear', duration: 1, x: 0 }}
        >
          Experience
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold mb-2">
                Senior Technology Associate at Colgate Palmolive
              </CardTitle>
              <p className="text-sm">
                August 2023 – August 2024 | Mumbai, India
              </p>
            </CardHeader>
            <CardContent>
              <ul className="mt-4 list-disc pl-6">
                <li>
                  Collaborated with 16 developers to build and maintain
                  proprietary software, leveraging Django, React, GCP,
                  Kubernetes, Docker, and Celery to build APIs supporting over 1
                  million concurrent I/Os with low latency.
                </li>
                <li>
                  Assisted a team of developers to design & develop a software
                  solution for strategic market performance, achieving 50% time
                  savings and better efficacy.
                </li>
                <li>
                  Managed software with a team of 15 employees, providing
                  services to 10,000+ businesses to identify & improve the
                  system for better sales of 100,000+ industry-leading products.
                </li>
                <li>
                  Actively engaged with developers to improve front-end
                  architecture, reducing technical overhead by 30%.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold mb-2">
                Campus Associate at Colgate Palmolive
              </CardTitle>
              <p className="text-sm">
                August 2022 – August 2023 | Mumbai, India
              </p>
            </CardHeader>
            <CardContent>
              <ul className="mt-4 list-disc pl-6">
                <li>
                  Contributed with developers on improving the front end using
                  libraries like Ag-grid, ant-design.js, and MUI-X to enhance
                  data visualization solutions, causing reduced performance
                  overhead by 70%.
                </li>
                <li>
                  Resolved over 100+ bugs, ensuring optimized system performance
                  and accuracy, leading to better handling of critical business
                  tasks.
                </li>
                <li>
                  Led testing initiatives and enhanced GitHub Actions to improve
                  teamwork across global teams, which enhanced build times by
                  60%.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold mb-2">
                Intern at Colgate Palmolive
              </CardTitle>
              <p className="text-sm">
                February 2022 – August 2022 | Mumbai, India
              </p>
            </CardHeader>
            <CardContent>
              <ul className="mt-4 list-disc pl-6">
                <li>
                  Cooperated alongside 6 Full-Stack developers to develop &
                  maintain industry-grade software used in 100+ countries.
                </li>
                <li>
                  Successfully developed a feature to manage & process 1000s of
                  data points within a second.
                </li>
                <li>
                  Directly contributed to a global project, becoming a top-10
                  contributor at the time with 50+ commits and 1k+
                  additions/deletions.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div
        id="about-me"
        className="container mx-auto place-content-center min-h-screen p-8 pb-20 gap-20 sm:p-20 font-[family-name:var(--font-geist-sans)] 
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
            the{' '}
            <a href="https://github.com/diesel-rs/diesel" target="_blank">
              Diesel
            </a>{' '}
            repository, helping to ensure quality Rust code for a robust
            database toolkit. This experience has enhanced my collaboration
            skills and expanded my knowledge in Rust development.
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
