import { HOME_PAGE_QUERY } from "@/utills/queries/home_page_query";
import { fetchHomePageData } from "@/utills/queries/fetch_data";
import HomeBlockRenderer from "../HomeBlockRenderer/HomeBlockRenderer";
import Error from "../Error/Error";

export default async function HomePage() {
  try {
    const uri = "/";

    const blocksJSON = await fetchHomePageData(HOME_PAGE_QUERY, uri);

    const blocks = JSON.parse(blocksJSON);

    if (!blocksJSON || !blocks) {
      throw new Error("Error! Home blocks not found.");
    }

    return <HomeBlockRenderer blocks={blocks} />;
  } catch (error) {
    return <Error text={"home page data"} error={error} />;
  }
}
