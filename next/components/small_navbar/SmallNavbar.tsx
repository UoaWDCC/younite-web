"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { getLargestImageUrl } from "@/util/image";
import UpArrow from "../svg/UpArrow";
import Hamburger from "../svg/Hamburger";
import Cross from "../svg/Cross";
import { HeaderData } from "../header/headerData";
interface SmallNavbarProps {
  data: HeaderData;
}

export default function SmallNavbar({ data }: SmallNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [membersOpen, setMembersOpen] = useState(false);
  const logoSrc = getLargestImageUrl(data?.Logo);
  const links = data?.navigation;

  console.log(links);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setProjectsOpen(false);
    setMembersOpen(false);
  };

  const toggleProjects = () => {
    setProjectsOpen(!projectsOpen);
  };

  const toggleMembers = () => {
    setMembersOpen(!membersOpen);
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
            {menuOpen ? <Cross /> : <Hamburger />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          className="top-full relative left-0 w-full m-2 ml-0 mt-4 -mb-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", bounce: 0, duration: 0.5 }}
        >
          <div className="flex flex-col justify-items-stretch ml-2">
            <div>
              <button onClick={toggleMembers} className="mb-2">
                MEMBERS
                {membersOpen ? (
                  <UpArrow className="origin-center rotate-0" />
                ) : (
                  <UpArrow className="origin-[50%_40%] rotate-[180deg]" />
                )}
              </button>
              {membersOpen && (
                <div className="flex flex-col">
                  {data.members.map(
                    ({ CommitteeYear }: { CommitteeYear: number }) => (
                      <Link
                        onClick={toggleMenu}
                        href={`/members/${CommitteeYear}`}
                        key={CommitteeYear}
                        className="mb-2 ml-4 min-w-16"
                      >
                        {CommitteeYear}
                      </Link>
                    ),
                  )}
                </div>
              )}
            </div>

            {links.map((link) => (
              <Link
                className="mb-2"
                href={link.slug}
                key={link.title}
                onClick={toggleMenu}
              >
                {link.title.toLocaleUpperCase()}
              </Link>
            ))}

            <div>
              <button onClick={toggleProjects}>
                PROJECTS
                {projectsOpen ? (
                  <UpArrow className="origin-center rotate-0" />
                ) : (
                  <UpArrow className="origin-[50%_40%] rotate-[180deg]" />
                )}
              </button>
              {projectsOpen && (
                <div className="flex top-full flex-col py-1 ml-4">
                  <Link
                    href="/projects/active"
                    className="my-1 min-w-16"
                    onClick={toggleMenu}
                  >
                    ACTIVE
                  </Link>
                  <Link href="/projects/past" className="my-1 min-w-16">
                    PAST
                  </Link>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
