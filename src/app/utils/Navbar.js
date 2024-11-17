'use client';

import { useState, useEffect, forwardRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiTwitter, FiMoon, FiSun } from 'react-icons/fi';

export function NavBar() {
  const [orientation, setOrientation] = useState('vertical');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setOrientation('horizontal');
      } else {
        setOrientation('vertical');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <NavigationMenu className="fixed text-white backdrop-blur justify-between p-10 max-w-screen w-screen">
      <NavigationMenuList className="place-items-start">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink>
              <motion.h1
                className="text-3xl font-bold"
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
              >
                prkbuilds
              </motion.h1>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      {orientation === 'vertical' ? (
        <NavigationMenuList className="hidden w-full">
          <NavigationMenuItem className="hidden">
            <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <Link
                  href="https://drive.google.com/file/d/1Qhj2YHR-TKe4W0dq6t2qJOqCodOz3VZY/view"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Resume
                  </NavigationMenuLink>
                </Link>
                <Link href="#projects" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Projects
                  </NavigationMenuLink>
                </Link>
                <Link href="#experience" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Experience
                  </NavigationMenuLink>
                </Link>
                <Link href="#about-me" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Me
                  </NavigationMenuLink>
                </Link>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      ) : (
        <NavigationMenuList className="w-full gap-7">
          <NavigationMenuItem>
            <Link
              href="https://drive.google.com/file/d/1Qhj2YHR-TKe4W0dq6t2qJOqCodOz3VZY/view"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink className="bg-transparent">
                <motion.p
                  className="leading-7"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 12,
                    duration: 2,
                  }}
                >
                  Resume
                </motion.p>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#projects" legacyBehavior passHref>
              <NavigationMenuLink className="bg-transparent">
                <motion.p
                  className="leading-7"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 12,
                    duration: 2,
                  }}
                >
                  Projects
                </motion.p>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#experience" legacyBehavior passHref>
              <NavigationMenuLink className="bg-transparent">
                <motion.p
                  className="leading-7"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 12,
                    duration: 2,
                  }}
                >
                  Experience
                </motion.p>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#about-me" legacyBehavior passHref>
              <NavigationMenuLink className="bg-transparent">
                <motion.p
                  className="leading-7"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 12,
                    duration: 2,
                  }}
                >
                  About Me
                </motion.p>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      )}
      <NavigationMenuList className="gap-3">
        <NavigationMenuItem>
          <Link href="https://twitter.com/prkbuilds" legacyBehavior passHref>
            <NavigationMenuLink>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 12,
                  duration: 2,
                }}
              >
                <FiTwitter size={24} />
              </motion.div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="https://github.com/prkbuilds" legacyBehavior passHref>
            <NavigationMenuLink>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 12,
                  duration: 2,
                }}
              >
                <FiGithub size={24} />
              </motion.div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="https://www.linkedin.com/in/pratikfandade"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 12,
                  duration: 2,
                }}
              >
                <FiLinkedin size={24} />
              </motion.div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink key={title} asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
