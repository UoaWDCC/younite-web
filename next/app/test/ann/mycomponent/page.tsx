// import AnnComponent from "@/components/dev/AnnComponent";

// export default function MyComponent() {
//   return <AnnComponent />;
// }

import ProjectsImage from "@/components/projects/ProjectsImage";

export default function Page() {
  return (
    <div className="mt-96">
      <ProjectsImage
        src={"/younitelogo.png"}
        alt={"a"}
        title={"Current Project"}
        type={"current"}
      />
      <ProjectsImage
        src={"/younitelogo.png"}
        title={"Old Project"}
        type={"old"}
      />
    </div>
  );
}
