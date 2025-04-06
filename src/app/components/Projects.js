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
import { Badge } from '@/components/ui/badge';

import { FiGithub } from 'react-icons/fi';

export function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchGitHubRepos() {
      const response = await fetch(
        'https://api.github.com/users/prkbuilds/repos'
      );
      const repos = await response.json();
      console.log(repos);

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
      className="snap-section container mx-auto min-h-screen place-content-center p-8 pb-20 gap-20 sm:p-20 font-[family-name:var(--font-geist-sans)] 
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
            <Card
              className="bg-transparent border-0 backdrop-blur-2xl drop-shadow-2xl backdrop-brightness-110 flex flex-col"
              key={repo.id}
            >
              <CardHeader>
                <CardTitle className="text-lg">{repo.name}</CardTitle>
                <div className="flex gap-2 flex-wrap">
                  {repo.topics.map((topic) =>
                    topic === 'portfolio' ? null : (
                      <Badge
                        key={topic}
                        className="border-black"
                        variant="outline"
                      >
                        {topic}
                      </Badge>
                    )
                  )}
                </div>
                <CardDescription className="text-base text-gray-700">
                  {repo.description}
                </CardDescription>
              </CardHeader>
              <div className="flex-grow"></div>
              <CardFooter className="mt-auto">
                <motion.a
                  className="inline-flex items-center border border-black rounded py-2 px-3"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 12,
                    duration: 2,
                  }}
                  href={repo.html_url}
                >
                  View on GitHub &nbsp;
                  <FiGithub size={20} />
                </motion.a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
