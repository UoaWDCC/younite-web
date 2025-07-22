import Project from "@/components/projects/Project";
import { createDate } from "@/util/date";
import getFirstProject from "@/util/getFirstProjects";

export default async function PastProjectPage() {
  const firstDay = createDate(0, 0, -5);
  const lastDay = createDate(-1, 0, 0);

  return (
    <Project
      type={"old"}
      firstDay={firstDay}
      lastDay={lastDay}
      sort={"DESC"}
      firstProject={await getFirstProject(0, 5, firstDay, lastDay, "DESC")}
    />
  );
}
