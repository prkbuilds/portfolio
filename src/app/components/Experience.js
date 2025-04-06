'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Experience() {
  const ref = useRef(null);

  return (
    <div
      id="experience"
      className="snap-section container mx-auto min-h-screen text-white place-content-center p-8 pb-20 gap-20 sm:p-20 font-[family-name:var(--font-geist-sans)] 
      bg-repeat bg-contain bg-fixed"
      ref={ref}
    >
      <motion.h1
        className="text-5xl font-bold mb-9 pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'linear', duration: 1, x: 0 }}
      >
        Experience
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-transparent text-white border-0 backdrop-blur-2xl drop-shadow-2xl backdrop-brightness-110">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold mb-2">
              Software Engineer at Colgate Palmolive
            </CardTitle>
            <p className="text-sm">August 2023 – August 2024 | Mumbai, India</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              <li>
                Collaborated with 16 developers to build and maintain
                proprietary software using Agile methodologies, supporting
                global inventory planning for 10,000+ businesses.
              </li>
              <li>
                Developed APIs using Django, React, GCP, Kubernetes, RabbitMQ,
                Docker, and Celery, supporting over 1million concurrent I/Os
                with low latency.
              </li>
              <li>
                Improved the design and development of software solutions for
                Strategic Business Logic, achieving 50% time savingsand
                increased efficiency
              </li>
              <li>
                Recognized for contributions optimizing front-end architecture,
                reducing technical overhead in a global market dataplanning
                solution by 30%.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-transparent text-white border-0 backdrop-blur-2xl drop-shadow-2xl backdrop-brightness-110">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold mb-2">
              Jr. Software Engineer at Colgate Palmolive
            </CardTitle>
            <p className="text-sm">August 2022 – August 2023 | Mumbai, India</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              <li>
                Refactored front-end architecture using libraries like Ag-grid,
                Ant Design, React.js, Redux.js, and MUI-X,enhancing data
                visualization and reducing performance overhead by 70%.
              </li>
              <li>
                Resolved over 100+ bugs and feature requests through test-driven
                development (TDD), improving system performance and reliability
                for critical business tasks
              </li>
              <li>
                Led testing initiatives and implemented Unit-tests,
                Integration-tests, and enhancements with GitHub Actions, JEST,
                and Cypress, improving collaboration across global teams and
                reducing build times by 60%.
              </li>
              <li>Promoted to Software Engineer after 1 year of work.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-transparent text-white border-0 backdrop-blur-2xl drop-shadow-2xl backdrop-brightness-110">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold mb-2">
              Intern at Colgate Palmolive
            </CardTitle>
            <p className="text-sm">
              February 2022 – August 2022 | Mumbai, India
            </p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              <li>
                Collaborated with 6 full-stack developers to develop and
                maintain industry-grade software used in 100+ countries.
              </li>
              <li>
                Authored a feature to process and validate 1000s of data points
                within seconds using validation pipelines, saving user time by
                over 50%.
              </li>
              <li>
                Ranked as atop-10 contributorto a global software project,
                delivering over 50 commitsand improving overall code-quality.
              </li>
              <li>Offered Pre-placement offer after 2 months of internship.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
