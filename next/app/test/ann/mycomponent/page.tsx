// import AnnComponent from "@/components/dev/AnnComponent";

// export default function MyComponent() {
//   return <AnnComponent />;
// }

import CurrentImageComponent from "@/components/project_page_images/CurrentImageComponent";
import OldImageComponent from "@/components/project_page_images/OldImageComponent";

export default function Page() {
  return (
    <div>
      <div>
        <CurrentImageComponent
          src={"/younitelogo.png"}
          alt={"a"}
          title={"example title"}
        />
      </div>
      <div>
        <OldImageComponent
          src={"/younitelogo.png"}
          title={"example title"}
        />
      </div>
    </div>
  );
}
