import SmallNavbar from "../header/SmallNavbar";
import { getHeaderData } from "../header/headerDataFetcher";

export default async function SmallNavbarFetcher() {
  const headerData = await getHeaderData();
  return <SmallNavbar data={headerData} />;
}
