"use client";
import Project from "@/components/projects/Project";
import { createDate } from "@/util/date";

export default function CurrentProjectPage() {
  const firstDay = new Date(new Date().getFullYear(), 0, 1);
  const lastDay = createDate(0, 0, 10);

  return <Project type={"current"} firstDay={firstDay} lastDay={lastDay} />;
}
