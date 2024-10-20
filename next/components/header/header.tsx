import { getLargestImageUrl } from "@/util/image";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import { getHeaderData } from "./headerDataFetcher"; // Adjust the path as necessary

export default async function Header() {
  const data = await getHeaderData();
  const logoSrc = getLargestImageUrl(data.Logo);
  const links = data.navigation;

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
          <div className="group-hover:flex hidden absolute top-full bg-white drop-shadow-xl p-2 rounded-md items-center text-b-dark-blue flex-col py-1 px-2">
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
          <Link href="/projects/active">PROJECTS</Link>
          <div className="group-hover:flex hidden absolute top-full bg-white p-2 drop-shadow-xl rounded-md items-center text-b-dark-blue flex-col py-1 px-2">
            <Link href="/projects/active" className="my-1 min-w-16 text-center">
              Active
            </Link>
            <Link href="/projects/past" className="my-1 min-w-16 text-center">
              Past
            </Link>
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
