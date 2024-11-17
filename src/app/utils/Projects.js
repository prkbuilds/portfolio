'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { FiArrowUpRight } from 'react-icons/fi';

export function Projects() {
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
    fetchGitHubRepos();
  }, []);

  return (
    <div
      id="projects"
      className="snap-section container mx-auto min-h-screen place-content-center text-white p-8 pb-20 gap-20 sm:p-20 font-[family-name:var(--font-geist-sans)] 
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
            <Card className="bg-transparent border-0 backdrop-blur-2xl drop-shadow-2xl backdrop-brightness-110" key={repo.id}>
              <CardHeader>
                <CardTitle className="text-white">{repo.name}</CardTitle>
                <CardDescription className="text-white">{repo.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <motion.a
                  className="inline-flex items-center text-white border rounded py-3 px-6"
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
  );
}
