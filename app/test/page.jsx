import { fetchHomePostsData } from "@/utills/queries/fetch_data";
import { HOME_POSTS_QUERY } from "@/utills/queries/home_posts_query";

export default async function Page() {
  //?TEST PAGE

  const { data, total, hasPreviousPage } = await fetchHomePostsData(
    HOME_POSTS_QUERY,
    10,
    "posts",
    []
  );

  return <div></div>;
}
