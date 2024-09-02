import Timeline from "@/components/projects/Timeline";
import DateBlob from "@/components/projects/DateBlob";
import styles from "./styles.module.css";

export default async function TestPage() {
  return (
    <div className="flex-row-reverse items-center justify-center outline">
      <Timeline />
      <DateBlob />
    </div>
  );
}
