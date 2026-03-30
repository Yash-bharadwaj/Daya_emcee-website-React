"use client";
import { FloatingNav } from "./ui/floating-navbar";
import {
  IconHome,
  IconPhoto,
  IconStar,
  IconChartBar,
  IconSettings,
  IconVideo,
  IconUser,
  IconMicrophone2,
} from "@tabler/icons-react";

export function Navigation() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Gallery",
      link: "#gallery",
      icon: <IconPhoto className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Reels",
      link: "#reels",
      icon: <IconVideo className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Reviews",
      link: "#reviews",
      icon: <IconStar className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Stats",
      link: "#stats",
      icon: <IconChartBar className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Features",
      link: "#features",
      icon: <IconSettings className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Services",
      link: "#emcee-services",
      icon: <IconMicrophone2 className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
} 