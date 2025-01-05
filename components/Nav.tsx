/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import React from "react";
import {FloatingNav} from "@/components/ui/floating-navbar"
import { IconHome, IconMessage, IconUser, IconSettings, IconBriefcase } from "@tabler/icons-react";

const navItems = [
  {
    name: "Home",
    link: "#",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Skills",
    link: "#skills",
    icon: <IconSettings className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export default function Navbar() {
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}