"use client";
import Project from "@/components/projects/Project";

export default function CurrentProjectPage() {
  const firstDay = new Date(new Date().getFullYear(), 0, 1);
  const lastDay = new Date(new Date().getFullYear(), 11, 31);

  return <Project type={"current"} firstDay={firstDay} lastDay={lastDay} />;
}
