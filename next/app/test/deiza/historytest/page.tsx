import HistoryComponent from "@/components/history/HistoryComponent";
import HistoryImage from "@/components/history/HistoryImage";


export default function HistoryTest() {
  // return HistoryImage({src: "/uploads/istockphoto_1413873774_612x612_27a467169b.jpg"});
  // return <HistoryImage src="/uploads/istockphoto_1413873774_612x612_27a467169b.jpg" />
  // return <HistoryImage src={process.env.STRAPI_URL + "/uploads/istockphoto_1413873774_612x612_27a467169b.jpg"} />
  return (
    <HistoryComponent />
  )

}