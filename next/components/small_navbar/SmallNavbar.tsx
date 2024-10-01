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
  const logoSrc = getLargestImageUrl(data?.Logo);
  const links = data?.navigation;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
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
              className="w-6 h-6"
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
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="top-full left-0 w-full"
        >
          <div className="flex flex-col justify-items-stretch md:flex-row">
              <Link className="my-2"
                href={
                  data.members.length > 0
                    ? `/members/${data.members[0].CommitteeYear}`
                    : "/"
                }
              >
                MEMBERS
              </Link >
            {links.map((link) => (
              <Link className="mb-2" href={link.slug} key={link.title}>
                {link.title.toLocaleUpperCase()}
              </Link>
            ))}

            <div className="group relative">
              <Link href="/projects/active">PROJECTS</Link>
              <div className="group-hover:flex hidden absolute top-full bg-white p-2 drop-shadow-xl rounded-md items-center text-b-dark-blue flex-col py-1 px-2">
                <Link
                  href="/projects/active"
                  className="my-1 min-w-16 text-center"
                >
                  Active
                </Link>
                <Link
                  href="/projects/past"
                  className="my-1 min-w-16 text-center"
                >
                  Past
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
