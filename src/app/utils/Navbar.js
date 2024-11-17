'use client';

import { forwardRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import {
  FiHome,
  FiPackage,
  FiBriefcase,
  FiList,
  FiFileText,
  FiLinkedin,
  FiGithub,
  FiTwitter,
} from 'react-icons/fi';

export function NavBar() {
  const navbarItems = [
    { href: '#hero', icon: <FiHome size={24} />, tooltip: 'Home' },
    { href: '#projects', icon: <FiPackage size={24} />, tooltip: 'Projects' },
    {
      href: '#experience',
      icon: <FiBriefcase size={24} />,
      tooltip: 'Experience',
    },
    { href: '#about-me', icon: <FiList size={24} />, tooltip: 'About Me' },
    {
      href: 'https://drive.google.com/file/d/1Qhj2YHR-TKe4W0dq6t2qJOqCodOz3VZY/view',
      icon: <FiFileText size={24} />,
      tooltip: 'Resume',
      external: true, // Optional flag for external links
    },
  ];

  return (
    <>
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex z-10 gap-4">
        {navbarItems.map((item, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{
                    scale: 1.5,
                    transformOrigin: 'bottom',
                  }}
                  whileTap={{
                    scale: 0.9,
                    transformOrigin: 'bottom',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 12,
                    duration: 2,
                  }}
                >
                  <Link
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    legacyBehavior
                    passHref
                  >
                    <Badge className="text-white bg-transparent hover:bg-transparent backdrop-blur-2xl drop-shadow-2xl backdrop-brightness-110 rounded-full p-2">
                      {item.icon}
                    </Badge>
                  </Link>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent className="text-white bg-transparent">
                <p>{item.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
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
    </>
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
