"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { getLargestImageUrl } from "@/util/image";

interface HeaderData {
  navigation: Array<{
    title: string;
    slug: string;
  }>;
  Logo?: any;
  members: Array<{
    CommitteeYear: number;
    // Add other member properties
  }>;
  projects?: Array<{
    Title: string;
    slug: string;
  }>;
}

interface SmallNavbarProps {
  data: HeaderData;
}
export default function SmallNavbar({ data }: SmallNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const logoSrc = getLargestImageUrl(data?.Logo);
  const links = data?.navigation;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setProjectsOpen(false);
  };

  const toggleProjects = () => {
    setProjectsOpen(!projectsOpen);
  };

  return (
    <header
      className={`text-white w-full p-4 sm:hidden ${menuOpen ? "relative" : "absolute"}`}
    >
      <div className="flex justify-between items-center w-full">
        <div className="text-lg font-bold">
          <Link href="/">
            <Image
              src={logoSrc}
              alt="Younite Logo"
              className="h-20 w-auto"
              height={128}
              width={256}
              priority
            />
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              className={`w-6 h-6 ${menuOpen ? "hidden" : "visible"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16 M4 12h16 M4 18h16"
              />
            </svg>
            <svg
              className={`w-6 h-6 ${menuOpen ? "visible" : "hidden"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="top-full absolute left-0 w-full m-2 -mt-4">
          <div className="flex flex-col justify-items-stretch ml-2">
            <Link
              className="my-2"
              href={
                data.members.length > 0
                  ? `/members/${data.members[0].CommitteeYear}`
                  : "/"
              }
            >
              MEMBERS
            </Link>
            {links.map((link) => (
              <Link className="mb-2" href={link.slug} key={link.title}>
                {link.title.toLocaleUpperCase()}
              </Link>
            ))}

            <div>
              <button onClick={toggleProjects}>PROJECTS</button>
              {projectsOpen && (
                <div className="flex absolute top-full items-center flex-col py-1 ml-4">
                  <Link
                    href="/projects/active"
                    className="my-1 min-w-16 text-center"
                  >
                    ACTIVE
                  </Link>
                  <Link
                    href="/projects/past"
                    className="my-1 min-w-16 text-center"
                  >
                    PAST
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
