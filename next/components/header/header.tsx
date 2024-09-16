import { headerSchema } from "@/schemas/single/Header";
import { getLargestImageUrl } from "@/util/image";
import fetchStrapi from "@/util/strapi";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import styles from "./header.module.css";

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

export default async function Header() {
  const data = await getHeaderData();
  const logoSrc = getLargestImageUrl(data.Logo);
  const links = data.navigation;
  console.log(data);

  return (
    <header className={styles.header}>
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
      <nav className={styles.nav}>
        <div className="group relative">
          <Link
            href={
              data.members.length > 0
                ? `/members/${data.members[0].CommitteeYear}`
                : "/"
            }
          >
            MEMBERS
          </Link>
          <div
            className="group-hover:flex hidden absolute top-full bg-white p-2 rounded-md items-center text-b-dark-blue flex-col py-1 px-2">
            {/* align years vertically */}
            {/* Render sorted members */}
            {data.members.map(
              ({ CommitteeYear }: { CommitteeYear: number }) => (
                <Link
                  href={`/members/${CommitteeYear}`}
                  key={CommitteeYear}
                  className="my-1 min-w-16 text-center"
                >
                  {CommitteeYear}
                </Link>
              ),
            )}
          </div>
        </div>

        <div className="group relative">
          <Link
            href={
              data.projects[0] ? `/projects/${data.projects[0].Title}` : "/"
            }
          >
            PROJECTS
          </Link>
          <div className="group-hover:flex hidden absolute top-full bg-white p-2 rounded-md items-center text-b-dark-blue">
            {data.projects.map(({ Title, slug }) => (
              <Link href={`/projects/${slug}`} key={Title}>
                {Title}
              </Link>
            ))}
          </div>
        </div>

        {links.map((link) => (
          <Link href={link.slug} key={link.title}>
            {link.title.toLocaleUpperCase()}
          </Link>
        ))}
      </nav>
    </header>
  );
}
