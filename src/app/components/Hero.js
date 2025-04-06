'use client';

import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

export function Hero() {
  return (
    <div
      className="md:snap-section container mx-auto min-h-screen p-8 pb-20 gap-20 sm:p-20 font-[family-name:var(--font-geist-sans)] 
  flex flex-col items-center justify-center text-center"
    >
      <div className="place-content-center md:w-3/4 text-center flex flex-col items-center justify-center pt-20 md:pt-0 mt-20 md:mt-0">
        <motion.p
          className="leading-7 text-base font-mono mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'linear', duration: 2 }}
        >
          Software Developer_
        </motion.p>
        <motion.h1
          className="text-7xl md:text-9xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'linear', duration: 1, x: 0 }}
        >
          Pratik
        </motion.h1>
        <motion.h1
          className="text-7xl md:text-9xl font-bold mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'linear', duration: 1, x: 0 }}
        >
          Fandade
        </motion.h1>
        <motion.p
          className="leading-7 text-base md:w-3/4 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'linear', duration: 2 }}
        >
          I am a proficient <b className="font-mono">Software Developer</b> and{' '}
          <b className="font-mono">Open Source Contributor</b> with expertise in
          designing and building cloud-integrated software applications that
          address real-world challenges effectively.
        </motion.p>
        <motion.a
          className="inline-flex items-center border border-black text-lg backdrop-blur-3xl drop-shadow-2xl rounded m-2 py-3 px-6"
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
      {/* <motion.div */}
      {/*   className="place-content-center" */}
      {/*   initial={{ scale: 0 }} */}
      {/*   animate={{ rotate: 360, scale: 1.1 }} */}
      {/*   transition={{ */}
      {/*     type: 'spring', */}
      {/*     stiffness: 260, */}
      {/*     damping: 20, */}
      {/*   }} */}
      {/*   whileHover={{ scale: 1.1 }} */}
      {/*   whileTap={{ */}
      {/*     scale: 0.8, */}
      {/*     borderRadius: '100%', */}
      {/*   }} */}
      {/*   style={{ origin: 0.5 }} */}
      {/* > */}
      {/*   <Image */}
      {/*     className="aspect-square object-cover backdrop-blur-3xl drop-shadow-2xl backdrop-brightness-110 rounded-full" */}
      {/*     src="/images/hero.png" */}
      {/*     width={500} */}
      {/*     height={500} */}
      {/*     alt="hero" */}
      {/*   /> */}
      {/* </motion.div> */}
    </div>
  );
}
