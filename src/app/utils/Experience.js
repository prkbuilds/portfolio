'use client';

import { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

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
              Senior Technology Associate at Colgate Palmolive
            </CardTitle>
            <p className="text-sm">August 2023 – August 2024 | Mumbai, India</p>
          </CardHeader>
          <CardContent>
            <ul className="mt-4 list-disc pl-6">
              <li>
                Collaborated with 16 developers to build and maintain
                proprietary software, leveraging Django, React, GCP, Kubernetes,
                Docker, and Celery to build APIs supporting over 1 million
                concurrent I/Os with low latency.
              </li>
              <li>
                Assisted a team of developers to design & develop a software
                solution for strategic market performance, achieving 50% time
                savings and better efficacy.
              </li>
              <li>
                Managed software with a team of 15 employees, providing services
                to 10,000+ businesses to identify & improve the system for
                better sales of 100,000+ industry-leading products.
              </li>
              <li>
                Actively engaged with developers to improve front-end
                architecture, reducing technical overhead by 30%.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-transparent text-white border-0 backdrop-blur-2xl drop-shadow-2xl backdrop-brightness-110">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold mb-2">
              Campus Associate at Colgate Palmolive
            </CardTitle>
            <p className="text-sm">August 2022 – August 2023 | Mumbai, India</p>
          </CardHeader>
          <CardContent>
            <ul className="mt-4 list-disc pl-6">
              <li>
                Contributed with developers on improving the front end using
                libraries like Ag-grid, ant-design.js, and MUI-X to enhance data
                visualization solutions, causing reduced performance overhead by
                70%.
              </li>
              <li>
                Resolved over 100+ bugs, ensuring optimized system performance
                and accuracy, leading to better handling of critical business
                tasks.
              </li>
              <li>
                Led testing initiatives and enhanced GitHub Actions to improve
                teamwork across global teams, which enhanced build times by 60%.
              </li>
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
  );
}
