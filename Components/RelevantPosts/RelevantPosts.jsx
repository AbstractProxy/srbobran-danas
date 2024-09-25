import { fetchRelevantData } from "@/utills/queries/fetch_data";
import { RELEVANT_NEWS } from "@/utills/queries/relevant_news";
import MapRelevantPosts from "@/Components/MapRelevantPosts/MapRelevantPosts";
import RelevantPostsWrapper from "../RelevantPostsWrapper/RelevantPostsWrapper";
import RelevantPostsHeader from "../RelevantPostsHeader/RelevantPostsHeader";
import Error from "../Error/Error";

export default async function RelevantPosts({ postId, categoryNames }) {
  try {
    const categoryNamesToString = categoryNames.join(",");
    const { data } = await fetchRelevantData(
      RELEVANT_NEWS,
      postId,
      categoryNamesToString
    );

    if (!data || data.length <= 0) {
      throw new Error("Error! Relevant data not found.");
    }

    return (
      <RelevantPostsWrapper>
        <RelevantPostsHeader />
        <MapRelevantPosts data={data.edges} />
      </RelevantPostsWrapper>
    );
  } catch (error) {
    return <Error text={"relevant data"} error={error} />;
  }
}
