export default function YearProjects({
  year,
  projects,
}: {
  year: number;
  projects: any;
}) {
  return (
    <div className="flex flex-col mt-header items-center justify-center text-center">
      <p className="text-6xl font-bold leading-[0.95]">CURRENT PROJECTS</p>
      <div className="max-w-4xl">
        <p className="text-base p-10 text-wrap">
          A group of young people eager to enact growing change in the Devonport
          Takapuna comunity following in youth voices and youth leadership.
        </p>
      </div>
    </div>
  );
}
