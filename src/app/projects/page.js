'use client';

import { useEffect, useState } from 'react';
//import Image from "next/image";
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { NavBar } from '../utils/Navbar';
//import { ParallaxTech } from "../utils/TechStack";
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
        className="p-8 pb-20 gap-20 sm:p-20 font-[family-name:var(--font-geist-sans)] 
        bg-repeat bg-contain bg-fixed"
      >
        <div id="project" className="place-content-center pt-20">
          <motion.h1
            className="text-5xl font-bold mb-9"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'linear', duration: 1, x: 0 }}
          >
            Projects
          </motion.h1>
          <div className="project-list grid grid-cols-3 gap-4">
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
    </main>
  );
}
