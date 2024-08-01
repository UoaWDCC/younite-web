"use client"
import { headerSchema } from "@/schemas/single/Header";
import fetchStrapi from "@/util/strapi";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { z } from "zod";
import styles from "./header.module.css";

async function getHeaderData() {
  const resData = await fetchStrapi("header", headerSchema);
  const membersData = await fetchStrapi("member-teams", z.any());
  const members = membersData.sort(
    (a: any, b: any) => a.CommitteeYear - b.CommitteeYear,
  );

  return {
    ...resData,
    members,
  };
}

export interface HeaderData {
  members: any;
  navigation: Navigation["link"];
  Logo?: any;
}

export interface Navigation {
  link: {
    slug: string;
    title: string;
  }[];
}

export default function Header() {
  const [data, setData] = useState<HeaderData>();
  const [logoSrc, setLogoSrc] = useState<any>();
  const [links, setLinks] = useState<Navigation["link"]>();

  useEffect(() => {
    async function fetchData() {
      const result = await getHeaderData();
      setData(result);
      setLogoSrc(result.Logo)
      setLinks(result.navigation)
    }
    fetchData();
  }, []);

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src={logoSrc}
          alt="Younite Logo"
          className="h-32 w-auto"
          height={128}
          width={256}
        />
      </Link>
      <nav className={styles.nav}>
        <div className="group relative">
          <Link
            href={
              data?.members[0]
                ? `/members/${data.members[0].CommitteeYear}`
                : "/"
            }
          >
            MEMBERS
          </Link>
          <div className="group-hover:flex hidden absolute top-full bg-white p-2 rounded-md items-center text-b-dark-blue">
            {/* @ts-ignore */}
            {data.members.map(({ CommitteeYear }) => (
              <Link href={`/members/${CommitteeYear}`} key={CommitteeYear}>
                {CommitteeYear}
              </Link>
            ))}
          </div>
        </div>

        {links?.map((link) => (
          <Link href={link.slug} key={link.title}>
            {link.title.toLocaleUpperCase()}
          </Link>
        ))}
      </nav>
    </header>
  );
}
