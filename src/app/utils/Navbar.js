'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { motion } from 'framer-motion';

export function NavBar() {
  return (
    <NavigationMenu className="fixed justify-between p-10 max-w-screen w-screen bg-white">
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
                Pratik
              </motion.h1>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList className="w-full">
        <NavigationMenuItem>
          <Link
            href="https://drive.google.com/file/d/1Qhj2YHR-TKe4W0dq6t2qJOqCodOz3VZY/view"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Resume
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#projects" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/#contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#about-me" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Me
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList className="gap-3">
        <NavigationMenuItem>
          <Link href="https://twitter.com/prkbuild" legacyBehavior passHref>
            <NavigationMenuLink>
              <motion.img
                src={'/icons/twitter.svg'}
                alt="Twitter"
                width={24}
                height={24}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 12,
                  duration: 2,
                }}
              />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="https://github.com/pratikfandade" legacyBehavior passHref>
            <NavigationMenuLink>
              <motion.img
                src={'/icons/github.svg'}
                alt="GitHub"
                width={24}
                height={24}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 12,
                  duration: 2,
                }}
              />
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
              <motion.img
                src={'/icons/linkedin.svg'}
                alt="LinkedIn"
                width={24}
                height={24}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 12,
                  duration: 2,
                }}
              />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
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
  }
);
ListItem.displayName = 'ListItem';
