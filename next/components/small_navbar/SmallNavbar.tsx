"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { getLargestImageUrl } from "@/util/image";

interface HeaderData {
    navigation?: Array<{
      title: string;
      slug: string;
    }>;
    Logo?: any;
  members?: Array<{
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log("state changed");
  };

  return (
    <header className="text-white w-full p-4 sm:hidden absolute">
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
        <nav
          className={`md:flex md:items-center hidden absolute md:static left-0 w-full md:w-auto bg-gray-800 md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row">
            <li className="p-2">
              <Link href="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li className="p-2">
              <Link href="/about" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li className="p-2">
              <Link href="/services" className="hover:text-gray-400">
                Services
              </Link>
            </li>
            <li className="p-2">
              <Link href="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
