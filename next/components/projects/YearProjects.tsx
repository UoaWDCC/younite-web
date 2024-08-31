export default function YearProjects({
  year,
  projects,
}: {
  year: number;
  projects: any;
}) {
  return (
    <div className="flex flex-col mt-header">
      <p>{year} Projects</p>
    </div>
  );
}
