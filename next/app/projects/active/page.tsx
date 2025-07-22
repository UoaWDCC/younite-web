import Project from "@/components/projects/Project";
import { createDate } from "@/util/date";
import getFirstProject from "@/util/getFirstProjects";

export default async function CurrentProjectPage() {
  const firstDay = new Date(new Date().getFullYear(), 0, 1);
  const lastDay = createDate(0, 0, 10);

  return (
    <Project
      type={"current"}
      firstDay={firstDay}
      lastDay={lastDay}
      sort={"ASC"}
      firstProject={await getFirstProject(0, 2, firstDay, lastDay, "ASC")}
    />
  );
}
