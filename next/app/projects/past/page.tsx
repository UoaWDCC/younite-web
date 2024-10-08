"use client";
import Project from "@/components/projects/Project";
import { createDate } from "@/util/date";

export default async function CurrentProjectPage() {
  const firstDay = createDate(0, 0, -5);
  const lastDay = createDate(-1, 0, 0);

  return <Project type={"old"} firstDay={firstDay} lastDay={lastDay} />;
}
