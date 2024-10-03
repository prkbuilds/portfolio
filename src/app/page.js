"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 place-content-center min-h-screen p-8 pb-20 gap-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="place-content-center">
          <motion.h1 
            className="text-5xl font-bold mb-9"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'linear', duration: 1, x: 0 }}
          >Hi! I am Pratik Fandade</motion.h1>
          <motion.p 
            className="leading-7 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'linear', duration: 2 }}
          >
            I am a skilled Software Developer with experience in designing and analyzing web applications. I specialize in front-end and back-end 
            development using the MERN stack, Material-UI, REST APIs, and MVC architecture. My expertise extends to scaling cloud applications 
            with GCP and AWS, and I have a strong interest in cryptography and computer security.
          </motion.p>
          <motion.button
            className="button bg-primary text-white rounded py-3 px-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10, duration: 2 }}
          >Conatact</motion.button>
        </div>
        <motion.div
          className="place-content-center"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{
            scale: 0.8,
            borderRadius: "100%"
          }}
          style={{ origin: 0.5 }}
        >
          <Image className="aspect-square object-cover rounded-lg" src="/hero.jpeg" width={500} height={500} alt="hero" />
        </motion.div>
      </div>
      <div className="min-h-screen bg-fixed"></div>
      <div className="grid grid-cols-2 place-content-center min-h-screen p-8 pb-20 gap-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      </div>
    </>
  );
}
