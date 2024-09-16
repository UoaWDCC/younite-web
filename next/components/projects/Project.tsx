import { ProjectType } from "@/schemas/collection/Project";
import BGBlob from "../svg/BGBlob";
import Timeline from "./Timeline";

export default function Project({
  type,
  projects,
}: {
  type: "current" | "old";
  projects: ProjectType[];
}) {
  return (
    <div className="h-full w-full">
      <div className="absolute z-10 top-[60%] w-1/6 -left-44">
        <BGBlob />
      </div>
      <div className="mt-header">
        <div className="flex flex-col items-center justify-center text-center w-full">
          {type == "current" ? (
            <p className="text-6xl font-bold leading-[0.95]">
              CURRENT PROJECTS
            </p>
          ) : (
            <p className="text-6xl font-bold leading-[0.95]">
              PREVIOUS PROJECTS
            </p>
          )}
          <div className="max-w-4xl">
            <p className="text-base p-10 text-wrap">
              A group of young people eager to enact growing change in the
              Devonport Takapuna comunity following in youth voices and youth
              leadership.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Timeline timelineElements={projects} />
      </div>
    </div>
  );
}
