import Link from "next/link";
import Image from "next/image";
import fetchStrapi from "@/util/strapi";
import { headerSchema } from "@/schemas/single/Header";
import { getLargestImageUrl } from "@/util/image";
import { z } from "zod";

async function getHeaderData() {
  const resData = await fetchStrapi("header", headerSchema);
  const membersData = await fetchStrapi("member-teams", z.any());

  // Ensure membersData is an array and sort in descending order
  const members = Array.isArray(membersData)
    ? membersData
        .map((item: any) => ({
          ...item,
          CommitteeYear: Number(item.CommitteeYear), // Convert to number for sorting
        }))
        .sort((a, b) => b.CommitteeYear - a.CommitteeYear) // Sort in descending order
    : []; // Default to an empty array if not an array

  const projects = [
    {
      Title: new Date().getFullYear(),
      slug: "current",
    },
    {
      Title: "Past",
      slug: "past",
    },
  ];
  return {
    ...resData,
    members,
    projects,
  };
}

const SmallNavbar = async () => {
  const data = await getHeaderData();
  const logoSrc = getLargestImageUrl(data.Logo);

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
          <button aria-label="Toggle Menu">
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
};

export default SmallNavbar;
