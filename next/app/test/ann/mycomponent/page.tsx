// import AnnComponent from "@/components/dev/AnnComponent";

// export default function MyComponent() {
//   return <AnnComponent />;
// }

import CurrentImageComponent from "@/components/project_page_images/CurrentImageComponent";

export default function Page() {
  return (
    <div>
      <CurrentImageComponent
        src={"/younitelogo.png"}
        alt={"a"}
        title={"example title"}
      />
    </div>
  );
}
